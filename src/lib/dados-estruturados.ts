import { SITE_CONFIG } from "./constants";
import type { Artigo } from "./blog";

// Dados estruturados (JSON-LD) do site e das LPs, num grafo único: escritório,
// advogado e site, ligados por @id. Os artigos do blog apontam para esses
// mesmos @id como autor e editora.
//
// Só entra aqui o que está conferido e visível no site: endereço e telefone do
// perfil no Google, cargos com documento (ver SiteTrajetoria), perfis que
// abrem. Sem nota de avaliações: o Google não aceita nota de avaliação do
// próprio negócio declarada no site. Sem horário e coordenadas: não há
// fonte conferida.

const URL = SITE_CONFIG.url;

export const ID = {
    escritorio: `${URL}/#escritorio`,
    marcelo: `${URL}/#marcelo`,
    site: `${URL}/#site`,
} as const;

const OAB_MG = { "@type": "Organization", name: "Ordem dos Advogados do Brasil, Seção Minas Gerais" };

function cargo(roleName: string, organizacao: string) {
    return { "@type": "OrganizationRole", roleName, memberOf: { "@type": "Organization", name: organizacao } };
}

function aparicao(name: string, veiculo: string, url: string) {
    return { "@type": "CreativeWork", name, url, publisher: { "@type": "Organization", name: veiculo } };
}

const ESCRITORIO = {
    "@type": "LegalService",
    "@id": ID.escritorio,
    name: "Colen Advogados",
    url: URL,
    logo: `${URL}/marca/logo-lockup-escuro.png`,
    image: `${URL}/images/marcelo/marcelo-colen-escritorio-2.webp`,
    telephone: "+55 31 97220-6996",
    email: SITE_CONFIG.contact.email,
    address: {
        "@type": "PostalAddress",
        streetAddress: `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.complement}`,
        addressLocality: SITE_CONFIG.address.city,
        addressRegion: SITE_CONFIG.address.state,
        postalCode: SITE_CONFIG.address.zip,
        addressCountry: "BR",
    },
    areaServed: { "@type": "Country", name: "Brasil" },
    founder: { "@id": ID.marcelo },
    knowsAbout: [
        "Heteroidentificação",
        "Cotas raciais em concursos públicos",
        "Direito Antidiscriminatório",
        "Direito Criminal",
        "Compliance antidiscriminatório",
    ],
    sameAs: ["https://www.instagram.com/colenadvogados/"],
};

const MARCELO = {
    "@type": "Person",
    "@id": ID.marcelo,
    name: "Marcelo Colen",
    alternateName: "Dr. Marcelo Colen",
    jobTitle: "Advogado",
    description:
        "Advogado, sócio fundador do Colen Advogados. Mestre em Direito pela UFMG e Diretor de Diversidade e Inclusão da OAB/MG. Atua em Direito Criminal, Direito Antidiscriminatório e heteroidentificação.",
    url: `${URL}/sobre`,
    image: `${URL}/images/marcelo/marcelo-colen-retrato.webp`,
    worksFor: { "@id": ID.escritorio },
    alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Universidade Federal de Minas Gerais" },
        { "@type": "CollegeOrUniversity", name: "Pontifícia Universidade Católica de Minas Gerais" },
    ],
    hasCredential: [
        {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "degree",
            name: "Mestrado em Direito",
            recognizedBy: { "@type": "CollegeOrUniversity", name: "Universidade Federal de Minas Gerais" },
        },
        {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "license",
            name: `Inscrição na ${SITE_CONFIG.oab}`,
            recognizedBy: OAB_MG,
        },
    ],
    memberOf: [
        cargo("Diretor de Diversidade e Inclusão", "Ordem dos Advogados do Brasil, Seção Minas Gerais"),
        cargo("Conselheiro Seccional", "Ordem dos Advogados do Brasil, Seção Minas Gerais"),
        cargo("Secretário da Comissão Nacional de Promoção da Igualdade", "Conselho Federal da Ordem dos Advogados do Brasil"),
        cargo("Conselheiro Municipal de Promoção da Igualdade Racial", "Prefeitura de Belo Horizonte"),
    ],
    award: "Voto de congratulações da Comissão de Direitos Humanos da Assembleia Legislativa de Minas Gerais (2025), pela atuação na promoção da igualdade racial",
    knowsAbout: [
        "Heteroidentificação",
        "Cotas raciais em concursos públicos",
        "Direito Antidiscriminatório",
        "Igualdade racial",
        "Direito Criminal",
        "Mandado de segurança",
    ],
    // Participações com vídeo público, as mesmas da seção de mídia.
    subjectOf: [
        aparicao("Comentário jurídico no News Noite (11/09/2026)", "SBT News", "https://www.youtube.com/watch?v=XZ7s2fKp-fU"),
        aparicao("Comentário jurídico em transmissão ao vivo (13/09/2026)", "Times Brasil", "https://www.youtube.com/watch?v=9STBnSxGnFY"),
        aparicao("Comentário jurídico no Link TMC (14/09/2026)", "TMC News", "https://www.youtube.com/watch?v=5g259JVnTOE"),
        aparicao("A genética pode definir as cotas raciais?", "Estúdio Jurídico Brasil", "https://www.youtube.com/watch?v=VEpQHW73GqI"),
        aparicao("Igualdade Racial em Foco", "Itatiaia e OAB/MG", "https://www.youtube.com/watch?v=PwdKecnO7b0"),
    ],
    sameAs: ["https://www.instagram.com/marcelocolen.adv/", "https://www.youtube.com/@MarceloColenAdvogado"],
};

const SITE = {
    "@type": "WebSite",
    "@id": ID.site,
    url: URL,
    name: "Marcelo Colen",
    inLanguage: "pt-BR",
    publisher: { "@id": ID.escritorio },
};

export function grafoBase() {
    return { "@context": "https://schema.org", "@graph": [ESCRITORIO, MARCELO, SITE] };
}

export function grafoArtigo(artigo: Artigo & { publicadoEm: string }) {
    const url = `${URL}/blog/${artigo.slug}`;
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BlogPosting",
                "@id": `${url}#artigo`,
                headline: artigo.titulo,
                description: artigo.descricao,
                url,
                mainEntityOfPage: url,
                datePublished: artigo.publicadoEm,
                dateModified: artigo.atualizadoEm ?? artigo.publicadoEm,
                inLanguage: "pt-BR",
                articleSection: artigo.area,
                image: `${URL}/og-heteroidentificacao.jpg`,
                // Nome e URL repetidos junto do @id: o grafo base fica em outro
                // bloco JSON-LD da página.
                author: { "@type": "Person", "@id": ID.marcelo, name: MARCELO.name, url: MARCELO.url },
                publisher: { "@type": "LegalService", "@id": ID.escritorio, name: ESCRITORIO.name, logo: ESCRITORIO.logo },
                isPartOf: { "@id": ID.site },
                citation: artigo.fontes?.map((f) => f.href ?? f.rotulo),
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Blog", item: `${URL}/blog` },
                    { "@type": "ListItem", position: 2, name: artigo.titulo, item: url },
                ],
            },
        ],
    };
}
