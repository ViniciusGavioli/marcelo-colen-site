import { DEFAULT_MESSAGES, SITE_CONFIG } from "./constants";

function normalizePhone(phone: string): string {
  return String(phone || "").replace(/\D/g, "");
}

/**
 * Bridge page (qualificação)
 *
 * Por padrão, os CTAs devem mandar para `/consulta`.
 */
export function getWhatsAppLink(): string {
  return "/consulta";
}

/**
 * Link DIRETO para WhatsApp (wa.me) com mensagem opcional.
 * Use quando você quiser pular o formulário.
 */
export function getDirectWhatsAppLink(message?: string, phone?: string): string {
  const finalPhone = normalizePhone(phone || SITE_CONFIG.contact.whatsapp);
  const finalMsg = message?.trim() || DEFAULT_MESSAGES.whatsapp;
  return `https://wa.me/${finalPhone}?text=${encodeURIComponent(finalMsg)}`;
}

/**
 * Mantido por compatibilidade.
 */
export function getWhatsAppLinkWithContext(_context: string): string {
  return "/consulta";
}
