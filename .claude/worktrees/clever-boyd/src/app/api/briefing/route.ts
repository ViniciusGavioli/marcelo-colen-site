import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { checkRateLimit, hashIP } from "@/lib/rate-limit";
import { briefingSchema, briefingToConstants } from "@/lib/briefing-schema";

// Rate limit config: 10 requisições por 30 minutos por IP
const RATE_LIMIT_CONFIG = {
  maxRequests: 10,
  windowMs: 30 * 60 * 1000, // 30 minutos
};

/**
 * Extrai o IP do request
 */
function getClientIP(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  const realIP = request.headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }
  return "unknown";
}

/**
 * Envia e-mail de notificação via Resend (se configurado)
 */
async function sendNotificationEmail(
  briefingId: string,
  name: string,
  email: string,
  jsonOutput: object
): Promise<void> {
  const resendApiKey = process.env.RESEND_API_KEY;
  const notifyEmail =
    process.env.BRIEFING_NOTIFY_TO_EMAIL || process.env.LEADS_NOTIFY_TO_EMAIL;

  if (!resendApiKey || !notifyEmail) {
    console.log(
      "[Briefing] Email notification skipped: RESEND_API_KEY or notify email not configured"
    );
    return;
  }

  try {
    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: "Site Marcelo Colen <noreply@resend.dev>",
      to: notifyEmail,
      subject: `[Briefing] Novo briefing recebido - ${name}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 800px; margin: 0 auto;">
          <h2 style="color: #2D2D2D; border-bottom: 2px solid #8B6914; padding-bottom: 10px;">
            Novo Briefing Recebido
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold; width: 120px;">ID:</td>
              <td style="padding: 10px; background: #f5f5f5; font-family: monospace;">${briefingId}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Nome:</td>
              <td style="padding: 10px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">E-mail:</td>
              <td style="padding: 10px; background: #f5f5f5;">
                <a href="mailto:${email}">${email}</a>
              </td>
            </tr>
          </table>
          
          <h3 style="margin-top: 30px;">JSON para constants.ts:</h3>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; font-size: 12px;">${JSON.stringify(jsonOutput, null, 2)}</pre>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Recebido em: ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}
          </p>
        </div>
      `,
    });

    console.log("[Briefing] Notification email sent successfully");
  } catch (error) {
    console.error("[Briefing] Failed to send notification email:", error);
  }
}

export async function POST(request: NextRequest) {
  try {
    // 1. Verificar token de acesso
    const authHeader = request.headers.get("x-briefing-token");
    const expectedToken = process.env.BRIEFING_ACCESS_TOKEN;

    if (!expectedToken) {
      console.error("[Briefing] BRIEFING_ACCESS_TOKEN not configured");
      return NextResponse.json(
        { ok: false, error: "Configuração inválida" },
        { status: 500 }
      );
    }

    if (authHeader !== expectedToken) {
      return NextResponse.json(
        { ok: false, error: "Não autorizado" },
        { status: 401 }
      );
    }

    // 2. Rate limit
    const clientIP = getClientIP(request);
    const ipHash = hashIP(clientIP + "_briefing"); // namespace separado

    const rateLimitResult = checkRateLimit(ipHash, RATE_LIMIT_CONFIG);

    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        { ok: false, error: "rate_limited" },
        {
          status: 429,
          headers: {
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": rateLimitResult.resetAt.toString(),
          },
        }
      );
    }

    // 3. Parse body
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { ok: false, error: "Requisição inválida" },
        { status: 400 }
      );
    }

    // 4. Validar com Zod
    const parseResult = briefingSchema.safeParse(body);

    if (!parseResult.success) {
      const firstError = parseResult.error.issues[0];
      return NextResponse.json(
        {
          ok: false,
          error: firstError.message,
          path: firstError.path.join("."),
        },
        { status: 400 }
      );
    }

    const data = parseResult.data;

    // 5. Gerar JSON para constants.ts
    const constantsJson = briefingToConstants(data);

    // 6. Preparar dados para Supabase
    const briefingRecord = {
      name: data.name,
      email: data.email,
      whatsapp: data.whatsapp,
      oab: data.oab || null,
      city: data.city || null,
      atendimento: data.atendimento || null,
      bio_short: data.bioShort,
      bio_long: data.bioLong,
      areas: data.areas,
      credentials: data.credentials,
      timeline: data.timeline,
      links: data.links,
      notes: data.notes || null,
      raw: data,
    };

    // 7. Salvar no Supabase
    const supabase = createSupabaseServerClient();

    const { data: insertedData, error: dbError } = await supabase
      .from("briefings")
      .insert(briefingRecord)
      .select("id")
      .single();

    if (dbError) {
      console.error("[Briefing] Database error:", dbError);
      return NextResponse.json(
        { ok: false, error: "Erro ao salvar briefing. Tente novamente." },
        { status: 500 }
      );
    }

    const briefingId = insertedData.id;

    // 8. Enviar e-mail de notificação (assíncrono)
    sendNotificationEmail(briefingId, data.name, data.email, constantsJson).catch(
      (err) => {
        console.error("[Briefing] Email notification error:", err);
      }
    );

    // 9. Retornar sucesso com JSON
    return NextResponse.json(
      {
        ok: true,
        briefingId,
        json: constantsJson,
      },
      {
        status: 200,
        headers: {
          "X-RateLimit-Remaining": rateLimitResult.remaining.toString(),
        },
      }
    );
  } catch (error) {
    console.error("[Briefing] Unexpected error:", error);
    return NextResponse.json(
      { ok: false, error: "Erro interno. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
