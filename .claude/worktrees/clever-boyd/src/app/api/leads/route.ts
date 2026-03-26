import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { createSupabaseServerClient, type Lead } from "@/lib/supabase-server";
import { checkRateLimit, hashIP } from "@/lib/rate-limit";

// Rate limit config: 5 requisições por 10 minutos por IP
const RATE_LIMIT_CONFIG = {
  maxRequests: 5,
  windowMs: 10 * 60 * 1000, // 10 minutos
};

// Schema de validação com Zod
const leadSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome muito longo"),
  email: z
    .string()
    .email("E-mail inválido")
    .max(255, "E-mail muito longo"),
  phone: z
    .string()
    .max(20, "Telefone muito longo")
    .optional()
    .nullable()
    .transform((val) => val || null),
  subject: z.enum([
    "Atendimento criminal",
    "Compliance e prevenção",
    "Direitos humanos e antidiscriminação",
    "Palestras / eventos",
    "Imprensa / entrevistas",
    "Outro",
  ], {
    error: "Selecione um assunto válido",
  }),
  message: z
    .string()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres")
    .max(2000, "Mensagem muito longa"),
  consent: z
    .boolean()
    .refine((val) => val === true, "Você deve concordar com a política de privacidade"),
  // Honeypot field - deve estar vazio
  company: z
    .string()
    .max(0, "Campo inválido")
    .optional()
    .default(""),
  source: z
    .string()
    .max(100)
    .optional()
    .nullable()
    .transform((val) => val || "website"),
});

type LeadInput = z.infer<typeof leadSchema>;

/**
 * Extrai o IP do request
 */
function getClientIP(request: NextRequest): string {
  // Vercel/Cloudflare headers
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  
  const realIP = request.headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }
  
  // Fallback
  return "unknown";
}

/**
 * Envia e-mail de notificação via Resend (se configurado)
 */
async function sendNotificationEmail(lead: Lead): Promise<void> {
  const resendApiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.LEADS_NOTIFY_TO_EMAIL;
  
  // Se não tiver as variáveis, não envia
  if (!resendApiKey || !notifyEmail) {
    console.log("[Leads] Email notification skipped: RESEND_API_KEY or LEADS_NOTIFY_TO_EMAIL not configured");
    return;
  }
  
  try {
    const resend = new Resend(resendApiKey);
    
    await resend.emails.send({
      from: "Site Marcelo Colen <noreply@resend.dev>",
      to: notifyEmail,
      subject: `[Lead] ${lead.subject} - ${lead.name}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2D2D2D; border-bottom: 2px solid #8B6914; padding-bottom: 10px;">
            Novo Lead Recebido
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold; width: 120px;">Nome:</td>
              <td style="padding: 10px; background: #f5f5f5;">${lead.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">E-mail:</td>
              <td style="padding: 10px;">
                <a href="mailto:${lead.email}">${lead.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Telefone:</td>
              <td style="padding: 10px; background: #f5f5f5;">${lead.phone || "Não informado"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Assunto:</td>
              <td style="padding: 10px;">${lead.subject}</td>
            </tr>
          </table>
          
          <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #8B6914; margin: 20px 0;">
            <strong>Mensagem:</strong>
            <p style="white-space: pre-wrap; margin: 10px 0 0 0;">${lead.message}</p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Recebido em: ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}<br>
            Fonte: ${lead.source || "website"}
          </p>
        </div>
      `,
    });
    
    console.log("[Leads] Notification email sent successfully");
  } catch (error) {
    // Log do erro mas não falha a requisição
    console.error("[Leads] Failed to send notification email:", error);
  }
}

export async function POST(request: NextRequest) {
  try {
    // 1. Extrair IP e verificar rate limit
    const clientIP = getClientIP(request);
    const ipHash = hashIP(clientIP);
    
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
    
    // 2. Parse e validar body
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { ok: false, error: "Requisição inválida" },
        { status: 400 }
      );
    }
    
    // 3. Validar com Zod
    const parseResult = leadSchema.safeParse(body);
    
    if (!parseResult.success) {
      const firstError = parseResult.error.issues[0];
      return NextResponse.json(
        { ok: false, error: firstError.message },
        { status: 400 }
      );
    }
    
    const data: LeadInput = parseResult.data;
    
    // 4. Verificar honeypot
    if (data.company && data.company.length > 0) {
      // Bot detectado - retornar sucesso falso para não dar pista
      console.log("[Leads] Honeypot triggered, rejecting submission");
      return NextResponse.json(
        { ok: false, error: "Erro ao processar formulário" },
        { status: 400 }
      );
    }
    
    // 5. Preparar dados do lead
    const lead: Lead = {
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      phone: data.phone?.trim() || null,
      subject: data.subject,
      message: data.message.trim(),
      consent: data.consent,
      source: data.source || "website",
      ip_hash: ipHash,
    };
    
    // 6. Salvar no Supabase
    const supabase = createSupabaseServerClient();
    
    const { error: dbError } = await supabase
      .from("leads")
      .insert(lead);
    
    if (dbError) {
      console.error("[Leads] Database error:", dbError);
      return NextResponse.json(
        { ok: false, error: "Erro ao salvar mensagem. Tente novamente." },
        { status: 500 }
      );
    }
    
    // 7. Enviar e-mail de notificação (assíncrono, não bloqueia)
    sendNotificationEmail(lead).catch((err) => {
      console.error("[Leads] Email notification error:", err);
    });
    
    // 8. Retornar sucesso
    return NextResponse.json(
      { ok: true },
      { 
        status: 200,
        headers: {
          "X-RateLimit-Remaining": rateLimitResult.remaining.toString(),
        },
      }
    );
    
  } catch (error) {
    console.error("[Leads] Unexpected error:", error);
    return NextResponse.json(
      { ok: false, error: "Erro interno. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}

// Não permitir outros métodos
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}
