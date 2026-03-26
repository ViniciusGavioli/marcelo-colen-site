import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { checkRateLimit, hashIP } from "@/lib/rate-limit";

// Rate limit config: 5 requisições por 10 minutos por IP
const RATE_LIMIT_CONFIG = {
  maxRequests: 5,
  windowMs: 10 * 60 * 1000, // 10 minutos
};

// Schema de validação
const leadCotasSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome muito longo"),
  whatsapp: z
    .string()
    .min(10, "WhatsApp inválido")
    .max(20, "WhatsApp muito longo"),
  email: z
    .string()
    .email("E-mail inválido")
    .max(255, "E-mail muito longo"),
  type: z.enum(["concurso", "universidade", "outro"], {
    error: "Selecione um tipo válido",
  }),
  situation: z.enum(["banca", "indeferido", "recurso_negado", "outro"], {
    error: "Selecione uma situação válida",
  }),
  deadline: z
    .string()
    .max(100, "Prazo muito longo")
    .optional()
    .nullable()
    .transform((val) => val || null),
  message: z
    .string()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres")
    .max(2000, "Mensagem muito longa"),
  consent: z
    .boolean()
    .refine((val) => val === true, "Você deve concordar com a política de privacidade"),
  // UTM tracking
  utm_source: z.string().max(100).optional().nullable().transform((val) => val || null),
  utm_medium: z.string().max(100).optional().nullable().transform((val) => val || null),
  utm_campaign: z.string().max(100).optional().nullable().transform((val) => val || null),
  utm_content: z.string().max(100).optional().nullable().transform((val) => val || null),
  utm_term: z.string().max(100).optional().nullable().transform((val) => val || null),
});

type LeadCotasInput = z.infer<typeof leadCotasSchema>;

interface LeadCotas extends LeadCotasInput {
  id: string;
  created_at: string;
}

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
 * Labels para o email
 */
const TYPE_LABELS: Record<string, string> = {
  concurso: "Concurso Público",
  universidade: "Vestibular / Universidade",
  outro: "Outro",
};

const SITUATION_LABELS: Record<string, string> = {
  banca: "Convocado para banca de heteroidentificação",
  indeferido: "Inscrição indeferida",
  recurso_negado: "Recurso negado",
  outro: "Outra situação",
};

/**
 * Envia e-mail de notificação via Resend
 */
async function sendNotificationEmail(lead: LeadCotas): Promise<void> {
  const resendApiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.LEADS_NOTIFY_TO_EMAIL;
  
  if (!resendApiKey || !notifyEmail) {
    console.log("[Leads Cotas] Email notification skipped: not configured");
    return;
  }
  
  try {
    const resend = new Resend(resendApiKey);
    
    await resend.emails.send({
      from: "Site Marcelo Colen <noreply@resend.dev>",
      to: notifyEmail,
      subject: `[COTAS] ${TYPE_LABELS[lead.type]} - ${lead.name}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0A192F; border-bottom: 2px solid #C5A059; padding-bottom: 10px;">
            🎯 Lead Landing Page Cotas
          </h2>
          
          <div style="background: #FEF3C7; padding: 12px; border-radius: 4px; margin: 15px 0;">
            <strong>Tipo:</strong> ${TYPE_LABELS[lead.type] || lead.type}<br>
            <strong>Situação:</strong> ${SITUATION_LABELS[lead.situation] || lead.situation}<br>
            ${lead.deadline ? `<strong>Prazo:</strong> ${lead.deadline}` : ""}
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold; width: 120px;">Nome:</td>
              <td style="padding: 10px; background: #f5f5f5;">${lead.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">WhatsApp:</td>
              <td style="padding: 10px;">
                <a href="https://wa.me/55${lead.whatsapp.replace(/\D/g, "")}">${lead.whatsapp}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">E-mail:</td>
              <td style="padding: 10px; background: #f5f5f5;">
                <a href="mailto:${lead.email}">${lead.email}</a>
              </td>
            </tr>
          </table>
          
          <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #C5A059; margin: 20px 0;">
            <strong>Mensagem:</strong>
            <p style="white-space: pre-wrap; margin: 10px 0 0 0;">${lead.message}</p>
          </div>
          
          ${lead.utm_source ? `
          <div style="background: #f0f0f0; padding: 10px; font-size: 12px; margin-top: 20px;">
            <strong>UTM Tracking:</strong><br>
            Source: ${lead.utm_source || "-"}<br>
            Medium: ${lead.utm_medium || "-"}<br>
            Campaign: ${lead.utm_campaign || "-"}<br>
            Content: ${lead.utm_content || "-"}<br>
            Term: ${lead.utm_term || "-"}
          </div>
          ` : ""}
          
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Recebido em: ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}
          </p>
        </div>
      `,
    });
    
    console.log("[Leads Cotas] Notification email sent successfully");
  } catch (error) {
    console.error("[Leads Cotas] Failed to send notification email:", error);
  }
}

export async function POST(request: NextRequest) {
  try {
    // 1. Rate limit
    const clientIP = getClientIP(request);
    const ipHash = hashIP(clientIP);
    
    const rateLimitResult = checkRateLimit(ipHash, RATE_LIMIT_CONFIG);
    
    if (!rateLimitResult.allowed) {
      // Calcula tempo para retry baseado no resetAt
      const retryAfterSeconds = Math.ceil((rateLimitResult.resetAt - Date.now()) / 1000);
      return NextResponse.json(
        { ok: false, error: "Muitas tentativas. Aguarde alguns minutos." },
        { 
          status: 429,
          headers: {
            "Retry-After": String(Math.max(1, retryAfterSeconds)),
          },
        }
      );
    }

    // 2. Parse e validação
    const body = await request.json();
    const validationResult = leadCotasSchema.safeParse(body);
    
    if (!validationResult.success) {
      const errorMessages = validationResult.error.issues.map((issue) => issue.message);
      return NextResponse.json(
        { ok: false, error: errorMessages[0] },
        { status: 400 }
      );
    }
    
    const leadData = validationResult.data;

    // 3. Salvar no Supabase (tabela leads com source="cotas")
    const supabase = await createSupabaseServerClient();
    
    // Mapear campos para a tabela leads existente
    const { data: lead, error: dbError } = await supabase
      .from("leads")
      .insert({
        name: leadData.name,
        email: leadData.email,
        phone: leadData.whatsapp,
        subject: `[COTAS] ${TYPE_LABELS[leadData.type]} - ${SITUATION_LABELS[leadData.situation]}`,
        message: `Situação: ${SITUATION_LABELS[leadData.situation]}\n${leadData.deadline ? `Prazo: ${leadData.deadline}\n` : ""}\n${leadData.message}`,
        source: "cotas",
        utm_source: leadData.utm_source,
        utm_medium: leadData.utm_medium,
        utm_campaign: leadData.utm_campaign,
        utm_content: leadData.utm_content,
        utm_term: leadData.utm_term,
      })
      .select()
      .single();

    if (dbError) {
      console.error("[Leads Cotas] Database error:", dbError);
      return NextResponse.json(
        { ok: false, error: "Erro ao salvar dados. Tente novamente." },
        { status: 500 }
      );
    }

    // 4. Enviar email de notificação (async, não bloqueia)
    sendNotificationEmail({
      ...leadData,
      id: lead.id,
      created_at: lead.created_at,
    } as LeadCotas).catch(console.error);

    // 5. Resposta de sucesso
    return NextResponse.json(
      { ok: true, message: "Lead registrado com sucesso" },
      { status: 201 }
    );

  } catch (error) {
    console.error("[Leads Cotas] Unexpected error:", error);
    return NextResponse.json(
      { ok: false, error: "Erro interno. Tente novamente." },
      { status: 500 }
    );
  }
}
