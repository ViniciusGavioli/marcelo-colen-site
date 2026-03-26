"use client";

import { Tv, Mic, Award, Users, Youtube, Instagram, ExternalLink } from "lucide-react";
import { Container } from "@/components/layout";
import { C, GrainOverlay, GoldDivider, SectionLabel, Cta, Reveal, renderBold } from "@/components/site/primitives";
import { Breadcrumb } from "@/components/site/Breadcrumb";

// ============================================================================
// DATA
// ============================================================================
const TV_APPEARANCES = [
    {
        icon: Tv,
        outlet: "TV Globo Minas",
        program: "MG1 · MG2",
        topic: "Análise jurídica sobre casos de injúria racial em Belo Horizonte e legislação antidiscriminatória vigente",
        type: "Entrevista · Televisão",
    },
    {
        icon: Award,
        outlet: "TJMG — Tribunal de Justiça de Minas Gerais",
        program: "Fórum Lafayette · Janeiro 2026",
        topic: "Debate sobre equidade no judiciário mineiro — declarações em apoio às ações do tribunal por um judiciário antirracista",
        type: "Evento Institucional",
    },
    {
        icon: Award,
        outlet: "Assembleia Legislativa de Minas Gerais",
        program: "Comissão de Direitos Humanos",
        topic: "Homenagem oficial por atuação destacada no combate ao racismo e na promoção da igualdade racial em Minas Gerais",
        type: "Homenagem · Legislativo",
    },
    {
        icon: Mic,
        outlet: "Podcast Inspirando Advocacia",
        program: "Spotify · 2022",
        topic: "\"Por um Judiciário Antirracista\" — episódio sobre o papel da advocacia na promoção da igualdade racial no sistema de justiça",
        type: "Podcast · Áudio",
    },
];

const OAB_EVENTS = [
    {
        title: "Seminário de Compliance Antidiscriminatório",
        context: "OAB/MG · 2023",
        desc: "Palestra sobre implementação de políticas antirracistas em empresas — \"Como funciona o Compliance Antidiscriminatório\"",
    },
    {
        title: "Posse como Secretário da Comissão Nacional",
        context: "Conselho Federal da OAB · 2025",
        desc: "Nomeação e posse como Secretário da Comissão Nacional de Promoção da Igualdade Racial (Portaria nº 269/2025)",
    },
    {
        title: "Gestão da Comissão de Igualdade Racial",
        context: "OAB/MG · 2022–2024",
        desc: "Presidência da Comissão Estadual de Promoção da Igualdade Racial da OAB-MG durante gestão completa",
    },
    {
        title: "Reunião com a Presidente da OAB/MG",
        context: "OAB/MG · Junho 2025",
        desc: "Encontro com Núbia de Paula, Presidente da OAB/MG, para discussão de pautas de diversidade e inclusão",
    },
    {
        title: "Seminário sobre Anticapacitismo",
        context: "OAB/MG · Rede Social",
        desc: "Participação como palestrante em seminário sobre direitos das pessoas com deficiência e interseccionalidade",
    },
];

const SOCIAL = [
    {
        icon: Instagram,
        platform: "Instagram",
        handle: "@marcelocolen.adv",
        followers: "",
        desc: "Publicações diárias sobre conscientização racial, análise de legislação e conteúdo jurídico educativo",
        url: "https://instagram.com/marcelocolen.adv",
    },
    {
        icon: Youtube,
        platform: "YouTube",
        handle: "Marcelo Colen Advogado",
        followers: "",
        desc: "Vídeos institucionais, aulas e debates sobre direitos humanos e compliance antidiscriminatório",
        url: "https://youtube.com/@MarceloColenAdvogado",
    },
];

// ============================================================================
// PAGE
// ============================================================================
export default function MidiaPage() {
    return (
        <div style={{ backgroundColor: C.bg1, color: C.white }}>
            <GrainOverlay />

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* HERO                                                       */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="pt-4 pb-16 md:pt-12 md:pb-20 relative overflow-hidden" style={{ backgroundColor: C.bg1 }}>
                <div className="absolute inset-0 z-0 select-none">
                    <div className="absolute inset-0" style={{ backgroundImage: "url('/texture-pedra.png')", backgroundSize: "cover", opacity: 0.035 }} />
                </div>
                <Container className="relative z-10">
                    <Breadcrumb items={[{ label: "Na Mídia" }]} />
                    <div className="max-w-3xl mx-auto text-center">
                        <SectionLabel>Na Mídia</SectionLabel>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: C.white, fontFamily: C.serif }}>
                            Presença e reconhecimento
                        </h1>
                        <div className="h-px w-20 mx-auto mb-5" style={{ background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`, opacity: 0.35 }} />
                        <p className="text-base md:text-lg leading-relaxed" style={{ color: C.gray2 }}>
                            {renderBold("Entrevistas em televisão, participações em podcasts, eventos institucionais e reconhecimentos por atuação no combate ao racismo e na promoção da **igualdade racial**.")}
                        </p>
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* APARIÇÕES NA MÍDIA                                         */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: C.bg2 }}>
                <Container className="relative z-10">
                    <SectionLabel>Televisão, Podcasts e Eventos</SectionLabel>
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-2" style={{ color: C.white, fontFamily: C.serif }}>
                        Aparições em destaque
                    </h2>
                    <GoldDivider />

                    <div className="max-w-3xl mx-auto mt-10 space-y-4">
                        {TV_APPEARANCES.map((item, i) => (
                            <Reveal key={i} delay={i * 0.08}>
                                <div className="rounded-xl p-5 md:p-6 flex items-start gap-4 md:gap-6"
                                    style={{ backgroundColor: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                    <item.icon className="w-10 h-10 flex-shrink-0 mt-1" style={{ color: C.gold, opacity: 0.7 }} />
                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                                            <h3 className="text-base md:text-lg font-bold" style={{ color: C.white, fontFamily: C.serif }}>
                                                {item.outlet}
                                            </h3>
                                            <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider"
                                                style={{ backgroundColor: "rgba(201,162,39,0.1)", color: C.gold, border: `1px solid ${C.gold}25` }}>
                                                {item.type}
                                            </span>
                                        </div>
                                        <p className="text-xs font-medium mb-2" style={{ color: C.gold }}>{item.program}</p>
                                        <p className="text-sm leading-relaxed" style={{ color: C.gray2 }}>{item.topic}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* OAB E EVENTOS INSTITUCIONAIS                               */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: C.bg1 }}>
                <Container className="relative z-10">
                    <SectionLabel>Eventos Institucionais</SectionLabel>
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-2" style={{ color: C.white, fontFamily: C.serif }}>
                        OAB, judiciário e academia
                    </h2>
                    <GoldDivider />

                    <div className="max-w-2xl mx-auto mt-10 space-y-3">
                        {OAB_EVENTS.map((event, i) => (
                            <Reveal key={i} delay={i * 0.06}>
                                <div className="rounded-xl p-4 md:p-5"
                                    style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                                    <div className="flex items-start gap-3">
                                        <Users className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: C.gold, opacity: 0.6 }} />
                                        <div>
                                            <h3 className="text-sm font-bold" style={{ color: C.white }}>{event.title}</h3>
                                            <p className="text-[10px] font-semibold uppercase tracking-wider mt-0.5" style={{ color: C.gold }}>{event.context}</p>
                                            <p className="text-xs leading-relaxed mt-2" style={{ color: C.gray2 }}>{event.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* REDES SOCIAIS                                              */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: C.bg2 }}>
                <Container className="relative z-10">
                    <SectionLabel>Redes Sociais</SectionLabel>
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-2" style={{ color: C.white, fontFamily: C.serif }}>
                        Conteúdo jurídico diário
                    </h2>
                    <GoldDivider />

                    <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto mt-10">
                        {SOCIAL.map((s, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <a
                                    href={s.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
                                    style={{ backgroundColor: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <s.icon className="w-8 h-8" style={{ color: C.gold, opacity: 0.8 }} />
                                        <div>
                                            <p className="text-base font-bold" style={{ color: C.white }}>{s.platform}</p>
                                            <p className="text-xs" style={{ color: C.gold }}>{s.handle}</p>
                                        </div>
                                        <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-50 transition-opacity" style={{ color: C.gray3 }} />
                                    </div>
                                    {s.followers ? (
                                        <p className="text-sm font-medium mb-2" style={{ color: C.gray3 }}>
                                            {s.followers}
                                        </p>
                                    ) : null}
                                    <p className="text-xs leading-relaxed" style={{ color: C.gray2 }}>{s.desc}</p>
                                </a>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* CTA                                                        */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="py-20 md:py-28" style={{ backgroundColor: C.bg1, borderTop: `1px solid rgba(255,255,255,0.04)` }}>
                <Container>
                    <div className="max-w-lg mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: C.white, fontFamily: C.serif }}>
                            Convites para entrevistas e palestras
                        </h2>
                        <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: C.gray2 }}>
                            {renderBold("Para **convites de imprensa**, **solicitações de palestra** ou **consultoria institucional** sobre igualdade racial e direito antidiscriminatório.")}
                        </p>
                        <a
                            href="https://wa.me/5531972206996?text=Ol%C3%A1%2C%20gostaria%20de%20entrar%20em%20contato%20para%20um%20convite."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 text-sm font-medium px-6 py-3 rounded transition-all duration-200 hover:opacity-90"
                            style={{ backgroundColor: "#c9a227", color: "#0a0a0a" }}
                        >
                            Entrar em contato
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </a>
                    </div>
                </Container>
            </section>
        </div>
    );
}
