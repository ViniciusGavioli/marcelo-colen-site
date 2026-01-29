import { DEFAULT_MESSAGES } from "./constants";

/**
 * Retorna o link para a página de qualificação (Bridge Page)
 * Todos os CTAs de WhatsApp agora passam pela página de qualificação
 * para filtrar leads antes de ir pro WhatsApp
 */
export function getWhatsAppLink(
  _message?: string,
  _phone?: string
): string {
  return "/qualificacao";
}

/**
 * Gera link para a página de qualificação
 * @param _context - Contexto da mensagem (não usado mais, mas mantido por compatibilidade)
 * @returns URL da página de qualificação
 */
export function getWhatsAppLinkWithContext(_context: string): string {
  return "/qualificacao";
}
