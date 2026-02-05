import type { Metadata } from "next";
import { HETERO_PAGE } from "@/lib/hetero-data";
import { SITE_CONFIG } from "@/lib/constants";
import { getFAQSchema, getServiceSchema } from "@/lib/schema";

// Componentes LP /hetero
import {
    HeteroHero,
    HeteroIdentificacao,
    HeteroVideo,
    HeteroPilares,
    HeteroProblema,
    HeteroMetodologia,
    HeteroAutoridade,
    HeteroFaq,
    HeteroInstagram,
    HeteroCta,
} from "@/components/landing/hetero";
import { FloatingWhatsApp } from "@/components/landing/cotas";

// SEO Metadata
export const metadata: Metadata = {
    title: HETERO_PAGE.title,
    description: HETERO_PAGE.description,
    keywords: [...HETERO_PAGE.keywords],
    openGraph: {
        title: HETERO_PAGE.title,
        description: HETERO_PAGE.description,
        url: `${SITE_CONFIG.url}/recurso-heteroidentificacao`,
        siteName: SITE_CONFIG.fullName,
        locale: "pt_BR",
        type: "website",
        images: [
            {
                url: `${SITE_CONFIG.url}/og-hetero.jpg`,
                width: 1200,
                height: 630,
                alt: "Heteroidentificação: Defesa Técnica Especializada - Marcelo Colen",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: HETERO_PAGE.title,
        description: HETERO_PAGE.description,
        images: [`${SITE_CONFIG.url}/og-hetero.jpg`],
    },
    alternates: {
        canonical: `${SITE_CONFIG.url}/recurso-heteroidentificacao`,
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
        "Defesa Técnica em Heteroidentificação",
        "Fundamentação técnica especializada para recursos administrativos e judiciais em casos de heteroidentificação. Análise de viabilidade, pareceres técnicos e estratégia processual.",
        `${SITE_CONFIG.url}/recurso-heteroidentificacao`
    );

    const faqSchema = getFAQSchema(
        HETERO_PAGE.faq.map((item) => ({
            question: item.question,
            answer: item.answer,
        }))
    );

    return [serviceSchema, faqSchema];
}

export default function HeteroPage() {
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

            <main>
                {/* 1. Hero - Impacto técnico */}
                <HeteroHero />

                {/* 2. Identificação - Situações comuns */}
                <HeteroIdentificacao />

                {/* 3. Vídeo educativo */}
                <HeteroVideo />

                {/* 4. Pilares do Fenótipo - Diferencial técnico */}
                <HeteroPilares />

                {/* 5. Problema - Zona cinzenta */}
                <HeteroProblema />

                {/* 6. Metodologia - Como funciona */}
                <HeteroMetodologia />

                {/* 7. Autoridade - Dr. Marcelo */}
                <HeteroAutoridade />

                {/* 8. FAQ Educativo */}
                <HeteroFaq />

                {/* 9. Instagram + CTA */}
                <HeteroInstagram />

                {/* 10. CTA Final */}
                <HeteroCta />
            </main>

            {/* Floating WhatsApp Button */}
            <FloatingWhatsApp />
        </>
    );
}
