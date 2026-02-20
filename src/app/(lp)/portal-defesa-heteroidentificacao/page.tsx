import type { Metadata } from "next";
import Link from "next/link";
import { HETERO_PAGE } from "@/lib/hetero-data";
import { SITE_CONFIG } from "@/lib/constants";
import { getFAQSchema, getServiceSchema } from "@/lib/schema";

import { Container } from "@/components/layout";

// Reaproveita blocos já prontos (mas a ordem/copy muda aqui)
import {
    HeteroIdentificacao,
    HeteroPilares,
    HeteroProblema,
    HeteroMetodologia,
    HeteroAutoridade,
    HeteroFaq,
    HeteroCta,
} from "@/components/landing/hetero";
import { FloatingWhatsApp } from "@/components/landing/cotas";

// SEO Metadata (Portal de Defesa)
const PORTAL_META = {
    title: "Portal de Defesa — Recurso de Heteroidentificação | Marcelo Colen",
    description:
        "Reprovado ou indeferido na heteroidentificação? Veja o passo a passo para se defender, organizar provas e verificar a viabilidade do recurso — com orientação objetiva e sigilo.",
};

export const metadata: Metadata = {
    title: PORTAL_META.title,
    description: PORTAL_META.description,
    keywords: [...HETERO_PAGE.keywords, "portal de defesa", "viabilidade do recurso"],
    openGraph: {
        title: PORTAL_META.title,
        description: PORTAL_META.description,
        url: `${SITE_CONFIG.url}/portal-defesa-heteroidentificacao`,
        siteName: SITE_CONFIG.fullName,
        locale: "pt_BR",
        type: "website",
        images: [
            {
                url: `${SITE_CONFIG.url}/og-hetero.jpg`,
                width: 1200,
                height: 630,
                alt: "Portal de Defesa — Heteroidentificação",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: PORTAL_META.title,
        description: PORTAL_META.description,
        images: [`${SITE_CONFIG.url}/og-hetero.jpg`],
    },
    alternates: {
        canonical: `${SITE_CONFIG.url}/portal-defesa-heteroidentificacao`,
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
        "Portal de Defesa — Recurso de Heteroidentificação",
        PORTAL_META.description,
        `${SITE_CONFIG.url}/portal-defesa-heteroidentificacao`
    );

    const faqSchema = getFAQSchema(
        HETERO_PAGE.faq.map((item) => ({
            question: item.question,
            answer: item.answer,
        }))
    );

    return [serviceSchema, faqSchema];
}

function PortalHero() {
    return (
        <section className="relative overflow-hidden bg-[#0B1220] text-white">
            {/* Fundo com imagem e presença (sem branco chapado) */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 opacity-[0.35]"
                    style={{
                        backgroundImage: "url(/images/marcelo/estudantes.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "grayscale(100%)",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220]/35 via-[#0B1220]/70 to-[#0B1220]" />
                <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-red-600/30 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />
            </div>

            <Container className="relative z-10 py-14">
                <div className="max-w-3xl">
                    <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/90">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        Portal de Defesa
                    </p>

                    <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-5xl">
                        Indeferimento na heteroidentificação
                    </h1>

                    <p className="mt-3 text-base text-white/85 sm:text-lg">
                        Análise inicial do caso e orientação do próximo passo.
                    </p>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <Link
                            href="/consulta"
                            className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-6 py-3 text-base font-bold text-[#0B1220] hover:opacity-95"
                        >
                            Solicitar análise inicial
                        </Link>
                        <div className="text-sm text-white/75">
                            Sigilo profissional • atendimento do escritório • retorno em horário comercial
                        </div>
                    </div>

                    <div className="mt-6 grid gap-2 sm:grid-cols-3">
                        {[
                            "Conteúdo informativo",
                            "Não há promessa de resultado",
                            "Atendimento 100% online",
                        ].map((t) => (
                            <div
                                key={t}
                                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85"
                            >
                                {t}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

function NextStepsSection() {
    return (
        <section className="bg-white">
            <Container className="py-14">
                <div className="max-w-4xl">
                    <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                        O que acontece após solicitar a análise inicial
                    </h2>
                    <p className="mt-3 text-slate-600">
                        O objetivo desta página é encaminhar seu caso para análise inicial do escritório, de forma simples e segura.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                        {[
                            {
                                t: "Envio",
                                d: "Você informa o essencial e o prazo do edital.",
                            },
                            {
                                t: "Retorno",
                                d: "A equipe do escritório retorna em horário comercial com a orientação inicial.",
                            },
                            {
                                t: "Documentos",
                                d: "Se necessário, solicitamos documentos específicos para o seu caso.",
                            },
                        ].map((x) => (
                            <div key={x.t} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                                <div className="text-sm font-extrabold text-slate-900">{x.t}</div>
                                <div className="mt-2 text-sm text-slate-700">{x.d}</div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
                        <div className="text-sm font-bold text-slate-900">Aviso</div>
                        <div className="mt-1 text-sm text-slate-600">
                            Conteúdo informativo. A análise e a estratégia dependem do edital, do procedimento e das informações fornecidas.
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default function PortalDefesaHeteroidentificacaoPage() {
    const schemas = getPageSchemas();

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />

            <main>
                {/* Novo topo (Portal de Defesa) */}
                <PortalHero />

                {/* Situações comuns (mantém) */}
                <HeteroIdentificacao />

                {/* Próximos passos (conversão) */}
                <NextStepsSection />

                {/* Diferencial técnico + Zona cinzenta */}
                <HeteroPilares />
                <HeteroProblema />

                {/* Processo (metodologia) */}
                <HeteroMetodologia />

                {/* FAQ antes da autoridade (reduz âncora de preço) */}
                <HeteroFaq />

                {/* Autoridade desce como garantia final */}
                <HeteroAutoridade />

                {/* CTA final */}
                <HeteroCta />
            </main>

            <FloatingWhatsApp />
        </>
    );
}
