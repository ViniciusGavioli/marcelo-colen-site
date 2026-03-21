import { SITE_CONFIG } from "./constants";

/**
 * JSON-LD Schema para SEO
 * https://schema.org
 */

export function getLegalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.fullName,
    alternateName: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.contact.phone,
    email: SITE_CONFIG.contact.email,
    image: `${SITE_CONFIG.url}/images/marcelo/hero.jpg`,
    logo: `${SITE_CONFIG.url}/images/marcelo/logo.svg`,
    priceRange: "$$",
    currenciesAccepted: "BRL",
    paymentAccepted: "Transferência, Pix, Boleto",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.complement}`,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -19.9191,
      longitude: -43.9386,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Belo Horizonte",
      },
      {
        "@type": "State",
        name: "Minas Gerais",
      },
      {
        "@type": "Country",
        name: "Brasil",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços Jurídicos",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Recurso contra Reprovação em Heteroidentificação",
            description:
              "Elaboração de recurso administrativo e judicial contra indeferimento em comissão de heteroidentificação em concursos públicos e vestibulares.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Assessoria em Cotas Raciais",
            description:
              "Orientação jurídica especializada para candidatos em processos de autodeclaração e verificação racial em concursos e seleções.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Direito Antidiscriminatório",
            description:
              "Defesa de direitos fundamentais em casos de discriminação racial e proteção de políticas afirmativas.",
          },
        },
      ],
    },
    sameAs: [
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.youtube,
    ].filter(Boolean),
  };
}

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_CONFIG.url}/#person`,
    name: "Marcelo Colen",
    jobTitle: "Advogado Especialista em Heteroidentificação e Cotas Raciais",
    description:
      "Advogado especializado em Direito Antidiscriminatório, Heteroidentificação e Cotas Raciais. Mestre em Direito pela UFMG. Secretário da Comissão Nacional de Promoção da Igualdade da OAB Federal. Diretor de Diversidade e Inclusão da OAB/MG.",
    url: SITE_CONFIG.url,
    image: `${SITE_CONFIG.url}/images/marcelo/marcelo-sem-fundo-.png`,
    email: SITE_CONFIG.contact.email,
    telephone: SITE_CONFIG.contact.phone,
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Universidade Federal de Minas Gerais (UFMG)",
      },
    ],
    memberOf: [
      {
        "@type": "Organization",
        name: "Ordem dos Advogados do Brasil - Seção Minas Gerais",
      },
      {
        "@type": "Organization",
        name: "Comissão Nacional de Promoção da Igualdade - OAB Federal",
      },
    ],
    knowsAbout: [
      "Heteroidentificação",
      "Cotas Raciais",
      "Direito Antidiscriminatório",
      "Concursos Públicos",
      "Recurso Administrativo",
      "Igualdade Racial",
      "Direitos Humanos",
      "Políticas Afirmativas",
    ],
    worksFor: {
      "@type": "LegalService",
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    sameAs: [
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.linkedin,
    ].filter(Boolean),
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.fullName,
    description: SITE_CONFIG.description,
    publisher: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    inLanguage: "pt-BR",
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getServiceSchema(
  name: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    serviceType: "Legal Service",
  };
}
