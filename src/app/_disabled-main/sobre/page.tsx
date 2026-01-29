import { Metadata } from "next";
import Script from "next/script";
import {
  AboutHero,
  AboutAreas,
  AboutCredentials,
  AboutTimeline,
  AboutValues,
  AboutInstitutional,
  AboutFaq,
  AboutCta,
} from "@/components/sections";
import {
  getPersonSchema,
  getLegalServiceSchema,
  getBreadcrumbSchema,
  getFAQSchema,
} from "@/lib/schema";
import { MARCELO_PROFILE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sobre",
  description: `Conheça Dr. ${MARCELO_PROFILE.name}: advogado criminalista com ${MARCELO_PROFILE.yearsExperience}+ anos de experiência em Direito Penal, Compliance e Direitos Humanos. Formação acadêmica sólida e atuação em todo o Brasil.`,
  openGraph: {
    title: "Sobre | Marcelo Colen Advocacia",
    description:
      "Advogado criminalista especializado em Direito Penal, Compliance e Direitos Humanos. Atuação técnica, ética e comprometida com a defesa de direitos.",
  },
};

// FAQ items for schema
const faqItems = [
  {
    question: "Quais são as áreas de atuação do escritório?",
    answer:
      "O escritório atua em Direito Penal e Criminal, Compliance e Integridade Empresarial, e Direitos Humanos. Oferecemos defesa criminal em todas as instâncias, estruturação de programas de compliance e litígios estratégicos.",
  },
  {
    question: "O escritório atende em todo o Brasil?",
    answer:
      "Sim, atuamos em todo o território nacional, com sede em Belo Horizonte e capacidade de acompanhar processos em qualquer estado brasileiro.",
  },
  {
    question: "Como funciona a primeira consulta?",
    answer:
      "A consulta inicial serve para análise do caso e orientação preliminar. O atendimento é sigiloso e pode ser agendado por WhatsApp ou formulário de contato.",
  },
];

export default function SobrePage() {
  const structuredData = [
    getPersonSchema(),
    getLegalServiceSchema(),
    getBreadcrumbSchema([
      { name: "Início", url: "/" },
      { name: "Sobre", url: "/sobre" },
    ]),
    getFAQSchema(faqItems),
  ];

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <Script
        id="structured-data-sobre"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* A) Hero com resumo profissional */}
      <AboutHero />

      {/* B) Seção "Minha atuação" com 3 cards */}
      <AboutAreas />

      {/* C) Credenciais & Formação */}
      <AboutCredentials />

      {/* D) Linha do tempo */}
      <AboutTimeline />

      {/* E) Valores */}
      <AboutValues />

      {/* F) Atuação institucional & conteúdo */}
      <AboutInstitutional />

      {/* G) FAQ */}
      <AboutFaq />

      {/* H) CTA final */}
      <AboutCta />
    </>
  );
}
