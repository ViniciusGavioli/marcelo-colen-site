import { SITE_CONFIG, DEFAULT_MESSAGES } from "./constants";

/**
 * Gera um link de WhatsApp com mensagem pré-definida
 * @param message - Mensagem customizada (opcional)
 * @param phone - Número do WhatsApp (opcional, usa padrão do site)
 * @returns URL do WhatsApp formatada
 */
export function getWhatsAppLink(
  message?: string,
  phone?: string
): string {
  const phoneNumber = phone || SITE_CONFIG.contact.whatsapp;
  const text = encodeURIComponent(message || DEFAULT_MESSAGES.whatsapp);
  
  return `https://wa.me/${phoneNumber}?text=${text}`;
}

/**
 * Gera link de WhatsApp para contexto específico
 * @param context - Contexto da mensagem (ex: página de origem)
 * @returns URL do WhatsApp formatada
 */
export function getWhatsAppLinkWithContext(context: string): string {
  const message = `Olá! Vim pelo site (${context}) e gostaria de mais informações.`;
  return getWhatsAppLink(message);
}
