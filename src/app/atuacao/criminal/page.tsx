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
const area = AREAS_DATA.tracks.find((t) => t.slug === "criminal");

if (!area) {
  notFound();
}

export const metadata: Metadata = {
  title: "Direito Criminal",
  description:
    "Defesa técnica em processos criminais, acompanhamento de inquéritos policiais, habeas corpus e orientação criminal preventiva. Atuação em Belo Horizonte e todo Brasil.",
  openGraph: {
    title: "Direito Criminal | Marcelo Colen Advocacia",
    description:
      "Defesa penal técnica e estratégica. Acompanhamento completo em todas as fases do processo criminal.",
  },
};

export default function CriminalPage() {
  if (!area) {
    notFound();
  }

  const structuredData = [
    getServiceSchema(area.title, area.shortDescription, "/atuacao/criminal"),
    getBreadcrumbSchema([
      { name: "Início", url: "/" },
      { name: "Áreas de Atuação", url: "/atuacao" },
      { name: "Direito Criminal", url: "/atuacao/criminal" },
    ]),
    getFAQSchema(area.faq.map((f) => ({ question: f.question, answer: f.answer }))),
  ];

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <Script
        id="structured-data-criminal"
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
