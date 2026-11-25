// ============================================================================
// PALETA DO SITE INSTITUCIONAL
//
// Fonte única. Antes existiam três objetos `C` duplicados — em
// components/site/primitives.tsx, SiteHeader.tsx e SiteFooter.tsx — que já
// tinham divergido entre si nos tons escuros.
//
// Os valores são os medidos na LP principal (/recurso-heteroidentificacao),
// lendo as cores computadas do DOM:
//   fundo   #0A0A0A (base) e #111111 (alternado) — a LP usa só dois degraus
//   ouro    #C9A227
//   sobre o ouro, o texto é #0A0A0A, nunca branco
//   cards   véus translúcidos de branco, não cinzas sólidos mais claros
//
// Sem terceiro degrau: a LP não tem. O antigo bg3 (#181818) e bg4 (#1e1e1e)
// saíram; bg3 permanece como apelido de bg2 para não mexer nos dois call
// sites que o usam.
// ============================================================================

export const SITE_COLORS = {
    bg1: "#0a0a0a",
    bg2: "#111111",
    /** @deprecated apelido de bg2 — a LP não tem um terceiro degrau escuro */
    bg3: "#111111",

    /** translúcido do header fixo: bg1 a 88% */
    bg1Translucent: "rgba(10,10,10,0.88)",

    gold: "#c9a227",
    goldSoft: "rgba(201,162,39,0.10)",
    goldBorder: "rgba(201,162,39,0.2)",
    /** texto sobre fundo dourado — como na LP, nunca branco */
    onGold: "#0a0a0a",

    /** véu de card, idioma de superfície da LP */
    surface: "rgba(255,255,255,0.03)",

    white: "#ffffff",
    gray1: "rgba(255,255,255,0.92)",
    gray2: "rgba(255,255,255,0.7)",
    gray3: "rgba(255,255,255,0.45)",
    gray4: "rgba(255,255,255,0.25)",

    serif: "'Cormorant Garamond', Georgia, serif",
} as const;

// globals.css estiliza h1, h2 e h3 fora de camada (fonte serifada, tamanho em
// clamp, peso 500, tracking negativo), e no Tailwind v4 regra fora de camada
// vence as classes utilitárias: text-xs, tracking-* e font-* num título não
// pegam. Título com cara de rótulo (caixa alta, pequeno, espaçado) leva estes
// valores inline.
export const ESTILO_ROTULO = {
    fontFamily: "inherit",
    fontSize: "0.75rem",
    lineHeight: 1.5,
    letterSpacing: "0.2em",
    fontWeight: 600,
} as const;
