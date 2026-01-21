import type { Metadata } from "next";
import { COTAS_PAGE } from "@/lib/cotas-data";
import { SITE_CONFIG } from "@/lib/constants";
import { getFAQSchema, getServiceSchema } from "@/lib/schema";

// New Components - Refactored LP
import { CotasHero } from "@/components/landing/cotas/cotas-hero";
import { CotasNaoEOFim } from "@/components/landing/cotas/cotas-nao-e-o-fim";
import { CotasBio } from "@/components/landing/cotas/cotas-bio";
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
        NOVA ESTRUTURA DA LP - Baseada no site antigo (marcelocolen.com.br)
        Ordem otimizada para conversão:
        1. Hero com pergunta forte
        2. "Não é o fim" + Vídeo (empatia + prova)
        3. Bio do Marcelo (autoridade)
        4. Cotas no Brasil (contexto)
        5. O que é Heteroidentificação (educação)
        6. Por que Recorrer + Como funciona (processo)
        7. FAQ (objeções)
        8. CTA Final (conversão)
      */}
      <main>
        {/* 1. HERO - Pergunta forte igual ao antigo */}
        <CotasHero />
        
        {/* 2. NÃO É O FIM - Empatia + Vídeo */}
        <CotasNaoEOFim />
        
        {/* 3. BIO MARCELO - Autoridade + Credenciais */}
        <CotasBio />
        
        {/* 4. COTAS NO BRASIL - Contexto legal */}
        <CotasNoBrasil />
        
        {/* 5. HETEROIDENTIFICAÇÃO - O que é */}
        <CotasHeteroidentificacao />
        
        {/* 6. POR QUE RECORRER + PROCESSO */}
        <CotasPorQueRecorrer />
        
        {/* 7. FAQ - Quebra objeções */}
        <CotasFaq />
        
        {/* 8. CTA FINAL - Conversão */}
        <CotasCta />
      </main>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </>
  );
}
