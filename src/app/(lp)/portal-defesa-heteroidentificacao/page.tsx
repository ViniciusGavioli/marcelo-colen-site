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
            <div className="absolute inset-0 opacity-20">
                <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-red-600 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-orange-400 blur-3xl" />
            </div>

            <Container className="relative z-10 py-14">
                <div className="max-w-3xl">
                    <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/90">
                        <span className="h-2 w-2 rounded-full bg-green-400" />
                        Portal de Defesa • triagem do escritório • sigilo
                    </p>

                    <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl">
                        Reprovado ou indeferido na heteroidentificação?
                        <span className="block text-white/90">Veja o que fazer agora — sem enrolação.</span>
                    </h1>

                    <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
                        Em geral, o primeiro passo é o <b>recurso administrativo</b>. Aqui você entende o
                        processo, organiza as provas e segue para uma <b>verificação de viabilidade</b>.
                        <span className="block mt-2 text-white/70">
                            Conteúdo informativo. Não há promessa de resultado.
                        </span>
                    </p>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <Link
                            href="/consulta"
                            className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-6 py-3 text-base font-bold text-[#0B1220] hover:opacity-95"
                        >
                            Triagem do caso (2 min)
                        </Link>
                        <div className="text-sm text-white/70">
                            Atendimento do <b>escritório</b> • resposta em até <b>2h</b> (horário comercial) • 100% online
                        </div>
                    </div>

                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                        {[
                            { t: "1. Prazos", d: "Entenda o prazo do edital e o que priorizar." },
                            { t: "2. Provas", d: "Checklist do que juntar antes de enviar." },
                            { t: "3. Próximo passo", d: "Você sabe exatamente o que acontece depois." },
                        ].map((c) => (
                            <div key={c.t} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <div className="text-sm font-extrabold">{c.t}</div>
                                <div className="mt-1 text-sm text-white/75">{c.d}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

function ChecklistSection() {
    return (
        <section className="bg-white">
            <Container className="py-14">
                <div className="max-w-4xl">
                    <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                        Checklist rápido (o que separar antes de pedir orientação)
                    </h2>
                    <p className="mt-3 text-slate-600">
                        Quanto mais claro você traz o contexto, mais rápido dá pra orientar o próximo passo.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {[
                            "Edital/aviso da banca (link ou PDF)",
                            "Motivo do indeferimento (se houver)",
                            "Prazo final do recurso (data/hora)",
                            "Registro do procedimento (vídeo/ata, se disponível)",
                            "Seu histórico no certame (fase atual)",
                            "Documentos que já enviou (se enviou)",
                        ].map((item) => (
                            <div
                                key={item}
                                className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-800"
                            >
                                {item}
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
                        <div className="text-sm font-bold text-slate-900">Importante</div>
                        <div className="mt-1 text-sm text-slate-600">
                            Não é necessário expor sua vida pessoal. O foco do recurso costuma ser a
                            <b> análise fenotípica</b> e os critérios do edital.
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

                {/* Checklist (novo) */}
                <ChecklistSection />

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
