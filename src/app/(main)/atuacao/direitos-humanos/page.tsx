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
const area = AREAS_DATA.tracks.find((t) => t.slug === "direitos-humanos");

if (!area) {
  notFound();
}

export const metadata: Metadata = {
  title: "Direitos Humanos e Antidiscriminação",
  description:
    "Atuação especializada em casos de discriminação racial, heteroidentificação, cotas raciais, violência de gênero e violações de direitos fundamentais. Orientação jurídica sensível e técnica.",
  openGraph: {
    title: "Direitos Humanos e Antidiscriminação | Marcelo Colen Advocacia",
    description:
      "Defesa de direitos fundamentais, combate à discriminação racial e orientação em processos de heteroidentificação.",
  },
};

export default function DireitosHumanosPage() {
  if (!area) {
    notFound();
  }

  const structuredData = [
    getServiceSchema(area.title, area.shortDescription, "/atuacao/direitos-humanos"),
    getBreadcrumbSchema([
      { name: "Início", url: "/" },
      { name: "Áreas de Atuação", url: "/atuacao" },
      { name: "Direitos Humanos", url: "/atuacao/direitos-humanos" },
    ]),
    getFAQSchema(area.faq.map((f) => ({ question: f.question, answer: f.answer }))),
  ];

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <Script
        id="structured-data-direitos-humanos"
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
