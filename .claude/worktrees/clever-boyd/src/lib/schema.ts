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
            name: "Advocacia Criminal",
            description:
              "Defesa técnica em processos criminais, inquéritos policiais, júri e habeas corpus.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Compliance e Integridade",
            description:
              "Programas de compliance, prevenção de riscos e adequação à lei anticorrupção.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Direitos Humanos e Antidiscriminação",
            description:
              "Defesa de direitos fundamentais e atuação em casos de discriminação.",
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
    jobTitle: "Advogado Criminalista",
    description:
      "Advogado especializado em Direito Criminal, Compliance e Direitos Humanos. Mestre em Direito pela PUC Minas.",
    url: `${SITE_CONFIG.url}/sobre`,
    image: `${SITE_CONFIG.url}/images/marcelo/about.jpg`,
    email: SITE_CONFIG.contact.email,
    telephone: SITE_CONFIG.contact.phone,
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Pontifícia Universidade Católica de Minas Gerais",
      },
    ],
    memberOf: [
      {
        "@type": "Organization",
        name: "Ordem dos Advogados do Brasil - Seção Minas Gerais",
      },
    ],
    knowsAbout: [
      "Direito Penal",
      "Direito Criminal",
      "Compliance",
      "Direitos Humanos",
      "Igualdade Racial",
      "Tribunal do Júri",
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
