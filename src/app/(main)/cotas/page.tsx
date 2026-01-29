import type { Metadata } from "next";
import { COTAS_PAGE } from "@/lib/cotas-data";
import { SITE_CONFIG } from "@/lib/constants";
import { getFAQSchema, getServiceSchema } from "@/lib/schema";

// Components LP /cotas
import { CotasHeroV2 } from "@/components/landing/cotas/cotas-hero-v2";
import { CotasNaoEOFim } from "@/components/landing/cotas/cotas-nao-e-o-fim";
import { CotasBio } from "@/components/landing/cotas/cotas-bio";
import { CotasProvaSocial } from "@/components/landing/cotas/cotas-prova-social";
import { CotasNoBrasil } from "@/components/landing/cotas/cotas-no-brasil";
import { CotasHeteroidentificacao } from "@/components/landing/cotas/cotas-heteroidentificacao";
import { CotasPorQueRecorrer } from "@/components/landing/cotas/cotas-por-que-recorrer";
import { CotasFaq } from "@/components/landing/cotas/cotas-faq";
import { CotasCta } from "@/components/landing/cotas/cotas-cta";
import { FloatingWhatsApp } from "@/components/landing/cotas";

// SEO Metadata
export const metadata: Metadata = {
  title: COTAS_PAGE.title,
  description: COTAS_PAGE.description,
  keywords: [...COTAS_PAGE.keywords],
  openGraph: {
    title: COTAS_PAGE.title,
    description: COTAS_PAGE.description,
    url: `${SITE_CONFIG.url}/cotas`,
    siteName: SITE_CONFIG.fullName,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: `${SITE_CONFIG.url}/og-cotas.jpg`,
        width: 1200,
        height: 630,
        alt: "Assessoria Jurídica em Cotas Raciais - Marcelo Colen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: COTAS_PAGE.title,
    description: COTAS_PAGE.description,
    images: [`${SITE_CONFIG.url}/og-cotas.jpg`],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/cotas`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Schemas
function getPageSchemas() {
  // Service Schema
  const serviceSchema = getServiceSchema(
    "Assessoria Jurídica em Heteroidentificação e Cotas Raciais",
    "Consultoria e defesa jurídica para candidatos em processos de heteroidentificação (bancas), recursos administrativos e judiciais em concursos públicos e universidades.",
    `${SITE_CONFIG.url}/cotas`
  );

  // FAQ Schema
  const faqSchema = getFAQSchema(
    COTAS_PAGE.faq.map((item) => ({
      question: item.question,
      answer: item.answer,
    }))
  );

  return [serviceSchema, faqSchema];
}

export default function CotasPage() {
  const schemas = getPageSchemas();

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas),
        }}
      />

      {/* 
        ESTRUTURA LP /cotas - Otimizada para conversão
        1. Hero (H1 keyword + CTA WhatsApp)
        2. Manifesto "Não é o fim" (empatia)
        3. Bio Marcelo (autoridade pessoal)
        4. Prova Social (institucional + mídia + produção)
        5. Cotas no Brasil (contexto)
        6. Heteroidentificação (educação)
        7. Por que Recorrer (processo)
        8. FAQ (objeções)
        9. CTA Final (conversão)
      */}
      <main>
        {/* 1. HERO - Layout marrom premium */}
        <CotasHeroV2 />
        
        {/* 2. MANIFESTO - Empatia + "O direito não é favor" */}
        <CotasNaoEOFim />
        
        {/* 3. BIO MARCELO - Autoridade pessoal */}
        <CotasBio />

        {/* 4. PROVA SOCIAL - Institucional + Mídia + Produção */}
        <CotasProvaSocial />
        
        {/* 5. COTAS NO BRASIL - Contexto legal */}
        <CotasNoBrasil />
        
        {/* 6. HETEROIDENTIFICAÇÃO - O que é */}
        <CotasHeteroidentificacao />
        
        {/* 7. POR QUE RECORRER + PROCESSO (id=como-funciona) */}
        <CotasPorQueRecorrer />
        
        {/* 8. FAQ - Quebra objeções */}
        <CotasFaq />
        
        {/* 9. CTA FINAL - Conversão */}
        <CotasCta />
      </main>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </>
  );
}
