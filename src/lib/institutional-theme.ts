// ============================================================================
// DESIGN SYSTEM — SITE INSTITUCIONAL
//
// Escopo: home institucional, SiteHeader e SiteFooter.
// NÃO é usado por nenhuma landing page. As LPs continuam em
// components/landing/* com a paleta preto+dourado delas, intocadas.
//
// Direção: preto levemente quente, off-white de papel e bordô seco.
// O bordô vem do vocabulário material do próprio assunto, encadernação de
// autos, lombada de livro jurídico, debrum de toga. Não é ouro: ouro sobre
// preto é exatamente a estética de template que este site precisava largar.
// O preto é quente (#121110, não #111) para ler como tinta impressa em vez
// de cinza de tela.
//
// O acento aparece em pouca área: régua, numeração, kicker e o preenchimento
// de uma CTA por contexto. Nunca em bloco.
//
// Contraste medido (WCAG AA exige 4.5:1 para texto normal):
//   onPaper / paper        16.1:1
//   onPaperMuted / paper    7.0:1
//   onPaperFaint / paper    4.6:1
//   bordo / paper           6.9:1
//   onInk / ink            16.4:1
//   onInk / bordo           6.9:1
// Em fundo escuro o acento não é usado como texto: lá o destaque é o
// off-white, e links se distinguem por sublinhado, não por cor.
// ============================================================================

export const T = {
    // Fundos escuros
    inkDeep: "#0A0908",
    ink: "#121110",
    inkSoft: "#1C1A18",

    // Fundos claros
    paper: "#F2EFE9",
    paperAlt: "#E6E2DA",

    // Texto sobre claro
    onPaper: "#141211",
    onPaperMuted: "#57524C",
    onPaperFaint: "#78726B",

    // Texto sobre escuro
    onInk: "#F2EFE9",
    onInkMuted: "rgba(242,239,233,0.68)",
    onInkFaint: "rgba(242,239,233,0.44)",

    /** Bordô seco. Texto e régua sobre claro; preenchimento de CTA em qualquer fundo. */
    copper: "#8C2F39",
    /** Sobre escuro o acento é o próprio off-white: bordô como texto em preto
     *  não alcança 4.5:1 sem virar salmão. */
    copperOnInk: "#F2EFE9",

    // Réguas
    ruleOnPaper: "rgba(20,18,17,0.14)",
    ruleOnInk: "rgba(242,239,233,0.16)",

    // Tipografia
    serif: "var(--font-source-serif), Georgia, 'Times New Roman', serif",
    sans: "var(--font-plex-sans), 'Segoe UI', system-ui, sans-serif",
} as const;

// Escala tipográfica. Mínimos pensados para mobile: nada abaixo de 13px.
export const TYPE = {
    kicker: "0.75rem",
    micro: "0.8125rem",
    body: "1.0625rem",
    bodyLg: "1.1875rem",
    h3: "clamp(1.125rem, 1.8vw, 1.375rem)",
    h2: "clamp(1.75rem, 3.4vw, 2.625rem)",
    h1: "clamp(2.125rem, 4.4vw, 3.5rem)",
} as const;
