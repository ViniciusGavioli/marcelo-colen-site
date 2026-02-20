import type { Metadata } from "next";
import { MODELO_RECURSO_PAGE } from "@/lib/modelo-recurso-data";
import { SITE_CONFIG } from "@/lib/constants";
import { getFAQSchema, getServiceSchema } from "@/lib/schema";

import {
    MrHero,
    MrAgitacao,
    MrOferta,

    MrAutoridade,
    MrFaq,
    MrCtaFinal,
} from "@/components/landing/modelo-recurso";

// SEO Metadata
export const metadata: Metadata = {
    title: MODELO_RECURSO_PAGE.title,
    description: MODELO_RECURSO_PAGE.description,
    keywords: [...MODELO_RECURSO_PAGE.keywords],
    openGraph: {
        title: MODELO_RECURSO_PAGE.title,
        description: MODELO_RECURSO_PAGE.description,
        url: `${SITE_CONFIG.url}/modelo-recurso`,
        siteName: SITE_CONFIG.fullName,
        locale: "pt_BR",
        type: "website",
        images: [
            {
                url: `${SITE_CONFIG.url}/og-hetero.jpg`,
                width: 1200,
                height: 630,
                alt: "Modelo de Recurso para Heteroidentificação - Marcelo Colen",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: MODELO_RECURSO_PAGE.title,
        description: MODELO_RECURSO_PAGE.description,
        images: [`${SITE_CONFIG.url}/og-hetero.jpg`],
    },
    alternates: {
        canonical: `${SITE_CONFIG.url}/modelo-recurso`,
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
        "Modelo de Recurso Administrativo para Heteroidentificação",
        "Modelo completo de recurso administrativo com fundamentação técnica (ADPF 186, fenotipia, IBGE) para candidatos indeferidos em comissões de heteroidentificação.",
        `${SITE_CONFIG.url}/modelo-recurso`
    );

    const faqSchema = getFAQSchema(
        MODELO_RECURSO_PAGE.faq.map((item) => ({
            question: item.question,
            answer: item.answer,
        }))
    );

    return [serviceSchema, faqSchema];
}

export default function ModeloRecursoPage() {
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
                {/* 1. Hero — Impacto + Urgência */}
                <MrHero />

                {/* 2. Agitação — "O Erro da Banca" */}
                <MrAgitacao />

                {/* 3. Oferta — Apresentação do Produto */}
                <MrOferta />



                {/* 5. Autoridade — Dr. Marcelo */}
                <MrAutoridade />

                {/* 6. FAQ — Quebra de Objeções */}
                <MrFaq />

                {/* 7. CTA Final */}
                <MrCtaFinal />
            </main>
        </>
    );
}
