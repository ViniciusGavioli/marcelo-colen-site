// Artigos do blog. O texto de cada artigo publicado fica em
// components/site/blog/artigos/; aqui ficam os dados de listagem, busca e
// dados estruturados.
//
// Artigo sem `publicadoEm` aparece como "Em construção": fica fora do índice
// (noindex) e do sitemap, porque página sem conteúdo conta contra o site.
//
// Referências legais conferidas no texto oficial do Planalto em 12/10/2026.
// Ao alterar uma regra citada, atualizar `atualizadoEm`.
export type Fonte = { rotulo: string; href?: string };

export type Artigo = {
    slug: string;
    /** H1 da página e título do card */
    titulo: string;
    /** <title>, até 60 caracteres */
    tituloSeo: string;
    /** meta description, até 155 caracteres */
    descricao: string;
    area: "Heteroidentificação" | "Cotas raciais" | "Direito Antidiscriminatório" | "Consultoria";
    resumo: string;
    /** ISO 8601 (AAAA-MM-DD). Sem data, o artigo está em construção. */
    publicadoEm?: string;
    atualizadoEm?: string;
    /** minutos de leitura */
    leitura?: number;
    fontes?: Fonte[];
};

const PLANALTO = "https://www.planalto.gov.br/ccivil_03";
export const FONTES = {
    lei15142: { rotulo: "Lei nº 15.142, de 3 de junho de 2025", href: `${PLANALTO}/_ato2023-2026/2025/lei/l15142.htm` },
    decreto12536: { rotulo: "Decreto nº 12.536, de 27 de junho de 2025", href: `${PLANALTO}/_ato2023-2026/2025/decreto/d12536.htm` },
    lei12990: { rotulo: "Lei nº 12.990, de 9 de junho de 2014", href: `${PLANALTO}/_ato2011-2014/2014/lei/l12990.htm` },
    lei12016: { rotulo: "Lei nº 12.016, de 7 de agosto de 2009 (mandado de segurança)", href: `${PLANALTO}/_ato2007-2010/2009/lei/l12016.htm` },
    adc41: { rotulo: "STF, ADC 41, rel. Min. Luís Roberto Barroso, julgada em 8 de junho de 2017" },
} satisfies Record<string, Fonte>;

export const ARTIGOS: Artigo[] = [
    {
        slug: "indeferido-na-heteroidentificacao",
        titulo: "Indeferido na heteroidentificação: o que fazer depois do resultado",
        tituloSeo: "Indeferido na heteroidentificação: o que fazer",
        descricao:
            "Recurso à comissão recursal, ampla concorrência e mandado de segurança: os caminhos depois do indeferimento na banca de heteroidentificação.",
        area: "Heteroidentificação",
        resumo: "Prazo do recurso, pontos a questionar no parecer, ampla concorrência e momento da via judicial.",
        publicadoEm: "2026-10-12",
        atualizadoEm: "2026-10-12",
        leitura: 6,
        fontes: [FONTES.lei15142, FONTES.decreto12536, FONTES.lei12016, FONTES.lei12990, FONTES.adc41],
    },
    {
        slug: "como-funciona-a-banca-de-heteroidentificacao",
        titulo: "Como funciona a banca de heteroidentificação nos concursos federais",
        tituloSeo: "Como funciona a banca de heteroidentificação",
        descricao:
            "Composição da comissão, critério fenotípico, provas vedadas e casos em que a autodeclaração prevalece, segundo o Decreto 12.536/2025.",
        area: "Heteroidentificação",
        resumo: "Composição da comissão, critério fenotípico, provas vedadas e regra da unanimidade no recurso.",
        publicadoEm: "2026-10-12",
        atualizadoEm: "2026-10-12",
        leitura: 5,
        fontes: [FONTES.lei15142, FONTES.decreto12536, FONTES.adc41],
    },
    {
        slug: "lei-15142-cotas-em-concursos",
        titulo: "Lei 15.142/2025: o que mudou nas cotas raciais em concursos públicos",
        tituloSeo: "Lei 15.142/2025: o que mudou nas cotas em concursos",
        descricao:
            "Reserva de 30%, inclusão de indígenas e quilombolas, confirmação da autodeclaração e situação do candidato indeferido na nova lei de cotas.",
        area: "Cotas raciais",
        resumo: "Reserva de 30%, divisão entre os grupos, alcance da lei e fim da eliminação automática do indeferido.",
        publicadoEm: "2026-10-12",
        atualizadoEm: "2026-10-12",
        leitura: 5,
        fontes: [FONTES.lei15142, FONTES.decreto12536, FONTES.lei12990],
    },
    {
        slug: "injuria-racial-e-racismo-lei-14532",
        titulo: "Injúria racial e racismo depois da Lei 14.532/2023",
        tituloSeo: "Injúria racial e racismo depois da Lei 14.532/2023",
        descricao: "O que mudou com a tipificação da injúria racial como crime de racismo.",
        area: "Direito Antidiscriminatório",
        resumo: "O que mudou com a tipificação da injúria racial como crime de racismo.",
    },
    {
        slug: "compliance-antidiscriminatorio",
        titulo: "Compliance antidiscriminatório: o que é e como se aplica nas empresas",
        tituloSeo: "Compliance antidiscriminatório nas empresas",
        descricao: "Como prevenir, detectar e corrigir práticas discriminatórias dentro das organizações.",
        area: "Consultoria",
        resumo: "Como prevenir, detectar e corrigir práticas discriminatórias dentro das organizações.",
    },
];

export const ARTIGOS_PUBLICADOS = ARTIGOS.filter((artigo) => artigo.publicadoEm);

export function buscarArtigo(slug: string) {
    return ARTIGOS.find((artigo) => artigo.slug === slug);
}

export function formatarData(iso: string) {
    // Meio-dia UTC: evita que o fuso de quem gera a página volte um dia.
    return new Date(`${iso}T12:00:00Z`).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
