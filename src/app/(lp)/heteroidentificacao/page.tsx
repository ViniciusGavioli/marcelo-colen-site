import type { Metadata } from "next";
import { COTAS_PAGE } from "@/lib/cotas-data";
import { SITE_CONFIG } from "@/lib/constants";
import { getFAQSchema, getServiceSchema } from "@/lib/schema";

// Components LP /cotas - WordPress Style
import { CotasHeroWordpress } from "@/components/landing/cotas/cotas-hero-wordpress";
import { CotasImpedidoWordpress } from "@/components/landing/cotas/cotas-impedido-wordpress";
import { CotasBioWordpress } from "@/components/landing/cotas/cotas-bio-wordpress";
import { CotasBrasilWordpress } from "@/components/landing/cotas/cotas-brasil-wordpress";
import { CotasHeteroWordpress } from "@/components/landing/cotas/cotas-hetero-wordpress";
import { CotasPorqueWordpress } from "@/components/landing/cotas/cotas-porque-wordpress";
import { CotasInstagramWordpress } from "@/components/landing/cotas/cotas-instagram-wordpress";
import { CotasFaqWordpress } from "@/components/landing/cotas/cotas-faq-wordpress";
import { CotasCtaWordpress } from "@/components/landing/cotas/cotas-cta-wordpress";
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
  const serviceSchema = getServiceSchema(
    "Assessoria Jurídica em Heteroidentificação e Cotas Raciais",
    "Consultoria e defesa jurídica para candidatos em processos de heteroidentificação (bancas), recursos administrativos e judiciais em concursos públicos e universidades.",
    `${SITE_CONFIG.url}/cotas`
  );

  const faqSchema = getFAQSchema(
    COTAS_PAGE.faq.map((item) => ({
      question: item.question,
      answer: item.answer,
    }))
  );

  return [serviceSchema, faqSchema];
}

export default function CotasWordpressPage() {
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
        ESTRUTURA LP /cotas - Estilo WordPress
        Replica exatamente o visual do site atual marcelocolen.com.br
      */}
      <main>
        {/* 1. HERO - Fundo escuro + mosaico de fotos */}
        <CotasHeroWordpress />
        
        {/* 2. FOI IMPEDIDO - Fundo branco + vídeo */}
        <CotasImpedidoWordpress />
        
        {/* 3. BIO MARCELO - Fundo escuro + foto */}
        <CotasBioWordpress />
        
        {/* 4. COTAS NO BRASIL - Fundo claro */}
        <CotasBrasilWordpress />
        
        {/* 5. O QUE É HETEROIDENTIFICAÇÃO - Fundo branco */}
        <CotasHeteroWordpress />
        
        {/* 6. POR QUE RECORRER - Fundo claro */}
        <CotasPorqueWordpress />

        {/* 7. INSTAGRAM / AUTORIDADE - Fundo branco */}
        <CotasInstagramWordpress />
        
        {/* 8. FAQ - Fundo branco */}
        <CotasFaqWordpress />
        
        {/* 8. CTA FINAL - Fundo escuro */}
        <CotasCtaWordpress />
      </main>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </>
  );
}
