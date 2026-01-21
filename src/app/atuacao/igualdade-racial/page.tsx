import { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import {
  AreaDetailHero,
  AreaDetailScope,
  AreaDetailFaq,
  AreaDetailCta,
} from "@/components/sections";
import { AREAS_DATA } from "@/lib/constants";
import {
  getServiceSchema,
  getBreadcrumbSchema,
  getFAQSchema,
} from "@/lib/schema";

// Buscar dados da área
const area = AREAS_DATA.tracks.find((t) => t.slug === "igualdade-racial");

if (!area) {
  notFound();
}

export const metadata: Metadata = {
  title: "Igualdade Racial, Cotas e Heteroidentificação",
  description:
    "Orientação jurídica especializada em cotas raciais, processos de heteroidentificação, recursos contra indeferimentos e defesa em políticas afirmativas. Atuação técnica e sensível.",
  keywords: [
    "heteroidentificação advogado",
    "cotas raciais advogado",
    "autodeclaração racial",
    "recurso heteroidentificação",
    "comissão de verificação",
    "políticas afirmativas",
    "cotas concurso público",
    "advogado cotas BH",
  ],
  openGraph: {
    title: "Igualdade Racial, Cotas e Heteroidentificação | Marcelo Colen Advocacia",
    description:
      "Orientação jurídica em cotas raciais e heteroidentificação. Defesa técnica e sensível em políticas afirmativas.",
  },
};

export default function IgualdadeRacialPage() {
  if (!area) {
    notFound();
  }

  const structuredData = [
    getServiceSchema(
      area.title,
      area.shortDescription,
      "/atuacao/igualdade-racial"
    ),
    getBreadcrumbSchema([
      { name: "Início", url: "/" },
      { name: "Áreas de Atuação", url: "/atuacao" },
      { name: "Igualdade Racial e Cotas", url: "/atuacao/igualdade-racial" },
    ]),
    getFAQSchema(
      area.faq.map((f) => ({ question: f.question, answer: f.answer }))
    ),
  ];

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <Script
        id="structured-data-igualdade-racial"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Hero */}
      <AreaDetailHero
        title={area.hero.title}
        subtitle={area.hero.subtitle}
        description={area.hero.description}
        values={area.hero.values}
      />

      {/* Escopo + Quando procurar */}
      <AreaDetailScope
        scope={[...area.scope]}
        whenToSeek={[...area.whenToSeek]}
      />

      {/* FAQ específico */}
      <AreaDetailFaq faq={[...area.faq]} areaTitle={area.title} />

      {/* CTA final */}
      <AreaDetailCta areaTitle={area.title} />
    </>
  );
}
