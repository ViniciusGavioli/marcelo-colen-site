"use client";

import Image from "next/image";
import { Container } from "@/components/layout";
import { C, GrainOverlay, Reveal, WA_MSG } from "@/components/site/primitives";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { getDirectWhatsAppLink } from "@/lib/whatsapp";

// ============================================================================
// DADOS
// ============================================================================

// Mandatos em curso — o que ele É hoje, não o que já foi.
const MANDATOS = [
    { role: "Diretor de Diversidade e Inclusão", org: "OAB/MG" },
    {
        role: "Secretário da Comissão Nacional de Promoção da Igualdade Racial",
        org: "Conselho Federal da OAB",
    },
    { role: "Conselheiro Seccional", org: "OAB/MG" },
    {
        role: "Conselheiro Municipal de Promoção da Igualdade Racial",
        org: "Prefeitura de Belo Horizonte",
    },
];

// Registro cronológico. O ano é a calha; a estrutura diz que isto é uma
// sequência datada, e por isso ganha régua em vez de card.
const REGISTRO = [
    { year: "2015", role: "Bacharelado em Direito", org: "Pontifícia Universidade Católica de Minas Gerais" },
    { year: "2016", role: "Inscrição na OAB/MG", org: "Ordem dos Advogados do Brasil · nº 167.463" },
    { year: "2019", role: "Comissão de Direito Penal Econômico", org: "OAB/MG · membro", until: "2021" },
    { year: "2022", role: "Presidente da Comissão de Igualdade Racial", org: "OAB/MG · gestão completa", until: "2024" },
    { year: "2022", role: "Diretor do Núcleo de Igualdade Racial", org: "Escola Superior de Advocacia de MG", until: "2024" },
    { year: "2024", role: "Conselheiro Municipal de Promoção da Igualdade Racial", org: "Prefeitura de Belo Horizonte" },
    { year: "2025", role: "Secretário da Comissão Nacional de Igualdade Racial", org: "Conselho Federal da OAB · Portaria nº 269/2025" },
];
// O mestrado não entra aqui: não temos o ano, e uma entrada sem data quebra
// a ordem de um registro cronológico. Ele aparece em Formação.

const FORMACAO = [
    { degree: "Mestrado em Direito", institution: "Universidade Federal de Minas Gerais" },
    { degree: "Pós-graduação em Gestão Estratégica na Advocacia", institution: "" },
    { degree: "Bacharelado em Direito", institution: "PUC Minas · 2015" },
];

const FORA_DO_ESCRITORIO = [
    {
        title: "Docência",
        body: "Professor em temas de direito antidiscriminatório e políticas afirmativas.",
    },
    {
        title: "Palestras",
        body: "Seminários sobre igualdade racial, antirracismo e compliance em eventos da OAB, do TJMG e de universidades.",
    },
    {
        title: "Consultoria institucional",
        body: "Compliance antidiscriminatório para empresas e órgãos públicos.",
    },
    {
        title: "Reconhecimento",
        body: "Homenageado pela Comissão de Direitos Humanos da Assembleia Legislativa de Minas Gerais por atuação antirracista.",
    },
];

// ============================================================================
// PEÇAS
// ============================================================================

/** Régua fina. Separa registros; não emoldura nada. */
function Rule({ strong = false }: { strong?: boolean }) {
    return (
        <div
            aria-hidden
            style={{
                height: 1,
                backgroundColor: strong ? C.goldBorder : "rgba(255,255,255,0.09)",
            }}
        />
    );
}

/** Título de seção: alinhado à esquerda, sem sobrancelha e sem ornamento. */
function Heading({ children, id }: { children: React.ReactNode; id?: string }) {
    return (
        <h2
            id={id}
            style={{
                fontFamily: C.serif,
                fontSize: "clamp(1.75rem, 3.4vw, 2.6rem)",
                lineHeight: 1.12,
                letterSpacing: "-0.015em",
                fontWeight: 400,
                color: C.white,
            }}
        >
            {children}
        </h2>
    );
}

// ============================================================================
// PÁGINA
// ============================================================================
export default function SobrePage() {
    const wa = getDirectWhatsAppLink(WA_MSG);

    return (
        <div style={{ backgroundColor: C.bg1, color: C.white }}>
            <GrainOverlay />

            {/* ───────────────────────────────────────────────────────────── */}
            {/* ABERTURA — o único momento alto da página.                    */}
            {/* Retrato recortado sangrando por baixo, nome em escala real.   */}
            {/* ───────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden" style={{ backgroundColor: C.bg1 }}>
                <div
                    aria-hidden
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('/texture-pedra.webp')",
                        backgroundSize: "cover",
                        opacity: 0.045,
                    }}
                />

                <Container className="relative z-10">
                    <Breadcrumb items={[{ label: "Sobre" }]} />

                    <div className="grid gap-8 md:gap-4 md:grid-cols-12 items-end pt-6 md:pt-10">
                        {/* Nome + selo */}
                        <div className="md:col-span-7 lg:col-span-7 pb-10 md:pb-20">
                            <Reveal>
                                <p
                                    style={{
                                        fontSize: "0.9375rem",
                                        color: C.gold,
                                        letterSpacing: "0.01em",
                                        marginBottom: "0.75rem",
                                    }}
                                >
                                    Advogado · OAB/MG 167.463
                                </p>

                                {/* aria-label: o <br /> não gera espaço, e sem isto
                                    o nome é lido como "MarceloColen". */}
                                <h1
                                    aria-label="Marcelo Colen"
                                    style={{
                                        fontFamily: C.serif,
                                        fontSize: "clamp(3.25rem, 9vw, 6.25rem)",
                                        lineHeight: 0.94,
                                        letterSpacing: "-0.03em",
                                        fontWeight: 400,
                                        color: C.white,
                                    }}
                                >
                                    <span aria-hidden>
                                        Marcelo
                                        <br />
                                        Colen
                                    </span>
                                </h1>

                                <div
                                    aria-hidden
                                    style={{
                                        width: 92,
                                        height: 2,
                                        backgroundColor: C.gold,
                                        margin: "1.75rem 0 1.5rem",
                                    }}
                                />

                                <p
                                    style={{
                                        fontSize: "1.1875rem",
                                        lineHeight: 1.65,
                                        color: C.gray1,
                                        maxWidth: "34ch",
                                    }}
                                >
                                    Criminalista em Belo Horizonte, mestre em Direito pela UFMG.
                                    Defende candidatos cotistas eliminados por comissões de
                                    heteroidentificação — em todo o país.
                                </p>
                            </Reveal>
                        </div>

                        {/* Retrato — sangra por baixo, sem moldura, sem raio de borda */}
                        <div className="md:col-span-5 lg:col-span-5 relative">
                            <div
                                aria-hidden
                                className="absolute left-1/2 -translate-x-1/2 bottom-0 rounded-full"
                                style={{
                                    width: "78%",
                                    paddingBottom: "78%",
                                    background:
                                        "radial-gradient(circle, rgba(201,162,39,0.14) 0%, rgba(201,162,39,0) 68%)",
                                }}
                            />
                            <div className="relative w-full max-w-[380px] md:max-w-none mx-auto">
                                <Image
                                    src="/images/marcelo/marcelo-sem-fundo-.png"
                                    alt="Marcelo Colen, advogado, braços cruzados, em terno escuro"
                                    width={854}
                                    height={1280}
                                    priority
                                    sizes="(max-width: 768px) 70vw, 38vw"
                                    className="block w-full"
                                    style={{ height: "auto" }}
                                />
                                {/* Dissolve a base do recorte no fundo: sem isto a
                                    figura é cortada seca no meio do antebraço. */}
                                <div
                                    aria-hidden
                                    className="absolute inset-x-0 bottom-0 pointer-events-none"
                                    style={{
                                        height: "22%",
                                        background: `linear-gradient(to bottom, rgba(10,10,10,0) 0%, ${C.bg1} 92%)`,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </Container>

                <Rule strong />
            </section>

            {/* ───────────────────────────────────────────────────────────── */}
            {/* MANDATOS EM CURSO                                            */}
            {/* ───────────────────────────────────────────────────────────── */}
            <section className="py-16 md:py-24" style={{ backgroundColor: C.bg1 }}>
                <Container>
                    <div className="grid gap-10 md:grid-cols-12">
                        <div className="md:col-span-4">
                            <Reveal>
                                <Heading>Mandatos em curso</Heading>
                                <p
                                    style={{
                                        marginTop: "1rem",
                                        fontSize: "0.9375rem",
                                        lineHeight: 1.7,
                                        color: C.gray3,
                                        maxWidth: "30ch",
                                    }}
                                >
                                    Quatro cadeiras simultâneas em órgãos de classe e de governo.
                                </p>
                            </Reveal>
                        </div>

                        <div className="md:col-span-8">
                            <Reveal delay={0.08}>
                                <Rule />
                                {MANDATOS.map((m) => (
                                    <div key={m.role}>
                                        <div className="py-5 md:py-6">
                                            <p
                                                style={{
                                                    fontFamily: C.serif,
                                                    fontSize: "clamp(1.25rem, 2.1vw, 1.625rem)",
                                                    lineHeight: 1.25,
                                                    color: C.white,
                                                }}
                                            >
                                                {m.role}
                                            </p>
                                            <p
                                                style={{
                                                    marginTop: "0.375rem",
                                                    fontSize: "0.875rem",
                                                    color: C.gray3,
                                                }}
                                            >
                                                {m.org}
                                            </p>
                                        </div>
                                        <Rule />
                                    </div>
                                ))}
                            </Reveal>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ───────────────────────────────────────────────────────────── */}
            {/* REGISTRO — sequência datada, com o ano na calha               */}
            {/* ───────────────────────────────────────────────────────────── */}
            <section className="py-16 md:py-24" style={{ backgroundColor: C.bg2 }}>
                <Container>
                    <Reveal>
                        <Heading>Registro</Heading>
                    </Reveal>

                    <div className="mt-10 md:mt-14">
                        <Rule />
                        {REGISTRO.map((r) => (
                            <div key={r.year + r.role}>
                                <div className="py-5 md:py-7 grid gap-1 md:gap-8 md:grid-cols-12 items-baseline">
                                    <div className="md:col-span-2">
                                        <span
                                            style={{
                                                fontSize: "0.875rem",
                                                color: C.gold,
                                                fontVariantNumeric: "tabular-nums",
                                                letterSpacing: "0.02em",
                                            }}
                                        >
                                            {r.year}
                                            {r.until && (
                                                <span style={{ color: C.gray4 }}>–{r.until}</span>
                                            )}
                                        </span>
                                    </div>
                                    <div className="md:col-span-10">
                                        <p
                                            style={{
                                                fontFamily: C.serif,
                                                fontSize: "clamp(1.1875rem, 2vw, 1.5rem)",
                                                lineHeight: 1.3,
                                                color: C.white,
                                            }}
                                        >
                                            {r.role}
                                        </p>
                                        <p
                                            style={{
                                                marginTop: "0.25rem",
                                                fontSize: "0.875rem",
                                                color: C.gray3,
                                            }}
                                        >
                                            {r.org}
                                        </p>
                                    </div>
                                </div>
                                <Rule />
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ───────────────────────────────────────────────────────────── */}
            {/* FORMAÇÃO + FORA DO ESCRITÓRIO                                 */}
            {/* ───────────────────────────────────────────────────────────── */}
            <section className="py-16 md:py-24" style={{ backgroundColor: C.bg1 }}>
                <Container>
                    <div className="grid gap-14 md:gap-10 md:grid-cols-12">
                        <div className="md:col-span-5">
                            <Reveal>
                                <Heading>Formação</Heading>
                                <div className="mt-8">
                                    {FORMACAO.map((f) => (
                                        <div key={f.degree} className="mb-6">
                                            <p
                                                style={{
                                                    fontSize: "1.0625rem",
                                                    lineHeight: 1.45,
                                                    color: C.white,
                                                }}
                                            >
                                                {f.degree}
                                            </p>
                                            {f.institution && (
                                                <p
                                                    style={{
                                                        marginTop: "0.1875rem",
                                                        fontSize: "0.875rem",
                                                        color: C.gray3,
                                                    }}
                                                >
                                                    {f.institution}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </Reveal>
                        </div>

                        <div className="md:col-span-7">
                            <Reveal delay={0.08}>
                                <Heading>Fora do escritório</Heading>
                                <div className="mt-8">
                                    {FORA_DO_ESCRITORIO.map((item) => (
                                        <div
                                            key={item.title}
                                            className="mb-7 pl-5"
                                            style={{ borderLeft: `2px solid ${C.goldBorder}` }}
                                        >
                                            <p
                                                style={{
                                                    fontSize: "1.0625rem",
                                                    color: C.white,
                                                    marginBottom: "0.25rem",
                                                }}
                                            >
                                                {item.title}
                                            </p>
                                            <p
                                                style={{
                                                    fontSize: "0.9375rem",
                                                    lineHeight: 1.7,
                                                    color: C.gray2,
                                                    maxWidth: "58ch",
                                                }}
                                            >
                                                {item.body}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ───────────────────────────────────────────────────────────── */}
            {/* CONTATO                                                       */}
            {/* ───────────────────────────────────────────────────────────── */}
            <section className="py-20 md:py-28" style={{ backgroundColor: C.bg2 }}>
                <Container>
                    <Reveal>
                        <div className="max-w-2xl">
                            <Heading>Se o seu caso é de heteroidentificação, o prazo já está correndo</Heading>
                            <p
                                style={{
                                    marginTop: "1.25rem",
                                    fontSize: "1.0625rem",
                                    lineHeight: 1.75,
                                    color: C.gray2,
                                    maxWidth: "62ch",
                                }}
                            >
                                Cada caso é analisado individualmente, sem promessa de resultado.
                                A primeira conversa serve para entender o que aconteceu na banca
                                e quais vias ainda estão abertas.
                            </p>

                            <a
                                href={wa}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center mt-9 px-7 py-4 transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                                style={{
                                    backgroundColor: C.gold,
                                    color: C.onGold,
                                    fontSize: "0.9375rem",
                                    fontWeight: 600,
                                    letterSpacing: "0.01em",
                                    outlineColor: C.gold,
                                }}
                            >
                                Falar com o escritório
                            </a>
                        </div>
                    </Reveal>
                </Container>
            </section>
        </div>
    );
}
