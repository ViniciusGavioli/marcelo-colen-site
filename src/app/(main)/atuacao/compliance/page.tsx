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
const area = AREAS_DATA.tracks.find((t) => t.slug === "compliance");

if (!area) {
  notFound();
}

export const metadata: Metadata = {
  title: "Compliance e Integridade",
  description:
    "Estruturação de programas de compliance, políticas anticorrupção, diagnóstico de riscos, canais de denúncia e treinamentos. Adequação à Lei Anticorrupção.",
  openGraph: {
    title: "Compliance e Integridade | Marcelo Colen Advocacia",
    description:
      "Programas de integridade corporativa, gestão de riscos e adequação à Lei Anticorrupção para empresas.",
  },
};

export default function CompliancePage() {
  if (!area) {
    notFound();
  }

  const structuredData = [
    getServiceSchema(area.title, area.shortDescription, "/atuacao/compliance"),
    getBreadcrumbSchema([
      { name: "Início", url: "/" },
      { name: "Áreas de Atuação", url: "/atuacao" },
      { name: "Compliance e Integridade", url: "/atuacao/compliance" },
    ]),
    getFAQSchema(area.faq.map((f) => ({ question: f.question, answer: f.answer }))),
  ];

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <Script
        id="structured-data-compliance"
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
