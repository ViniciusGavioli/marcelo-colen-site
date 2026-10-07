// Artigos do blog. Por enquanto só as pautas: título, área e resumo, com o
// texto em construção. Enquanto não houver texto, /blog e os artigos ficam
// fora do índice (noindex) e fora do sitemap: página sem conteúdo conta
// contra o site no Google. Ao publicar o primeiro texto, rever as duas coisas.
export type Artigo = {
    slug: string;
    titulo: string;
    area: "Heteroidentificação" | "Direito Antidiscriminatório" | "Consultoria";
    resumo: string;
};

export const ARTIGOS: Artigo[] = [
    {
        slug: "indeferido-na-heteroidentificacao",
        titulo: "Indeferido na heteroidentificação: o que fazer depois do resultado",
        area: "Heteroidentificação",
        resumo: "Prazos, recurso administrativo e o momento em que a via judicial passa a ser uma opção.",
    },
    {
        slug: "injuria-racial-e-racismo-lei-14532",
        titulo: "Injúria racial e racismo depois da Lei 14.532/2023",
        area: "Direito Antidiscriminatório",
        resumo: "O que mudou com a tipificação da injúria racial como crime de racismo.",
    },
    {
        slug: "compliance-antidiscriminatorio",
        titulo: "Compliance antidiscriminatório: o que é e como se aplica nas empresas",
        area: "Consultoria",
        resumo: "Como prevenir, detectar e corrigir práticas discriminatórias dentro das organizações.",
    },
];

export function buscarArtigo(slug: string) {
    return ARTIGOS.find((artigo) => artigo.slug === slug);
}
