// Site institucional (home em /site-oficial, Sobre, Atuação, Na mídia, Blog)
// e a home antiga (/inicio) ficam FORA DO AR em produção até o Dr. Marcelo
// aprovar o site (decisão de 24/11/2026). Em produção essas rotas dão 404 e
// saem do sitemap; nas prévias da Vercel e no `npm run dev` continuam
// visíveis, para a aprovação.
//
// No ar em produção: as LPs de campanha e os artigos soltos em /artigos.
//
// Para lançar: variável NEXT_PUBLIC_SITE_LANCADO=1 na Vercel (Production) e
// novo deploy.
export const SITE_VISIVEL =
    process.env.VERCEL_ENV !== "production" || process.env.NEXT_PUBLIC_SITE_LANCADO === "1";
