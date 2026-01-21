import { Metadata } from "next";
import Script from "next/script";
import {
  AreasHero,
  AreasTracks,
  AreasProcess,
  AreasFaq,
  AreasCta,
} from "@/components/sections";
import {
  getLegalServiceSchema,
  getBreadcrumbSchema,
  getServiceSchema,
} from "@/lib/schema";
import { AREAS_TRACKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Áreas de Atuação",
  description:
    "Atuação especializada em Direito Penal e Criminal, Compliance Empresarial e Direitos Humanos. Defesa técnica em todas as instâncias, incluindo tribunais superiores.",
  openGraph: {
    title: "Áreas de Atuação | Marcelo Colen Advocacia",
    description:
      "Direito Penal, Compliance e Direitos Humanos. Atuação técnica e estratégica em todo o Brasil.",
  },
};

export default function AtuacaoPage() {
  const servicesSchema = AREAS_TRACKS.map((area) =>
    getServiceSchema(area.title, area.shortDescription, `/atuacao/${area.slug}`)
  );

  const structuredData = [
    getLegalServiceSchema(),
    getBreadcrumbSchema([
      { name: "Início", url: "/" },
      { name: "Áreas de Atuação", url: "/atuacao" },
    ]),
    ...servicesSchema,
  ];

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <Script
        id="structured-data-atuacao"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* A) Hero */}
      <AreasHero />

      {/* B) Trilhas de atuação */}
      <AreasTracks />

      {/* C) Processo de atendimento */}
      <AreasProcess />

      {/* D) FAQ geral */}
      <AreasFaq />

      {/* E) CTA final */}
      <AreasCta />
    </>
  );
}
