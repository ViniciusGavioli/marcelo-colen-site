"use client";

import Image from "next/image";
import { Check, GraduationCap, Briefcase, Award, Users, Mic } from "lucide-react";
import { Container } from "@/components/layout";
import { C, GrainOverlay, GoldDivider, SectionLabel, Cta, LinkButton, Reveal, renderBold } from "@/components/site/primitives";

// ============================================================================
// DATA
// ============================================================================
const TIMELINE = [
    {
        year: "2015",
        title: "Graduação em Direito",
        institution: "PUC Minas",
        icon: GraduationCap,
    },
    {
        year: "2016",
        title: "Inscrição na OAB/MG",
        institution: "Ordem dos Advogados do Brasil · nº 167.463",
        icon: Briefcase,
    },
    {
        year: "2019–21",
        title: "Comissão de Direito Penal Econômico",
        institution: "OAB/MG · Membro",
        icon: Briefcase,
    },
    {
        year: "2022–24",
        title: "Presidente da Comissão de Igualdade Racial",
        institution: "OAB/MG · Gestão completa",
        icon: Award,
    },
    {
        year: "2022–24",
        title: "Diretor do Núcleo de Igualdade Racial",
        institution: "ESAMG — Escola Superior de Advocacia de MG",
        icon: GraduationCap,
    },
    {
        year: "Mestrado",
        title: "Mestre em Direito",
        institution: "Universidade Federal de Minas Gerais (UFMG)",
        icon: GraduationCap,
    },
    {
        year: "2024",
        title: "Conselheiro Municipal de Igualdade Racial",
        institution: "Prefeitura de Belo Horizonte",
        icon: Users,
    },
    {
        year: "2025",
        title: "Secretário da Comissão Nacional de Igualdade Racial",
        institution: "Conselho Federal da OAB · Portaria nº 269/2025",
        icon: Award,
    },
    {
        year: "Atual",
        title: "Diretor de Diversidade e Inclusão",
        institution: "OAB/MG · Gestão atual",
        icon: Award,
    },
];

const POSITIONS = [
    { role: "Diretor de Diversidade e Inclusão", org: "OAB/MG", status: "Atual" },
    { role: "Secretário da Comissão Nacional de Promoção da Igualdade Racial", org: "Conselho Federal da OAB", status: "Atual" },
    { role: "Conselheiro Municipal de Promoção da Igualdade Racial", org: "Prefeitura de Belo Horizonte", status: "Desde 2024" },
    { role: "Conselheiro Seccional", org: "OAB/MG", status: "" },
    { role: "Presidente da Comissão de Igualdade Racial", org: "OAB/MG", status: "2022–2024" },
    { role: "Diretor do Núcleo de Igualdade Racial", org: "ESAMG", status: "2022–2024" },
    { role: "Membro da Comissão de Direito Penal Econômico", org: "OAB/MG", status: "2019–2021" },
];

const ACADEMIC = [
    { degree: "Mestrado em Direito", institution: "Universidade Federal de Minas Gerais (UFMG)" },
    { degree: "Pós-graduação em Gestão Estratégica na Advocacia", institution: "" },
    { degree: "Bacharelado em Direito", institution: "Pontifícia Universidade Católica de Minas Gerais (PUC Minas) · 2015" },
];

// ============================================================================
// PAGE
// ============================================================================
export default function SobrePage() {
    return (
        <div style={{ backgroundColor: C.bg1, color: C.white }}>
            <GrainOverlay />

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* HERO                                                       */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="relative overflow-hidden pt-4 pb-16 md:pt-12 md:pb-24" style={{ backgroundColor: C.bg1 }}>
                <div className="absolute inset-0 z-0 select-none">
                    <div className="absolute inset-0" style={{ backgroundImage: "url('/texture-pedra.png')", backgroundSize: "cover", opacity: 0.04 }} />
                </div>

                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-14">
                        {/* Foto */}
                        <Reveal>
                            <div className="w-56 md:w-64 lg:w-72 flex-shrink-0 rounded-2xl overflow-hidden" style={{ border: `1px solid ${C.goldBorder}` }}>
                                <Image
                                    src="/images/marcelo/about.jpg"
                                    alt="Dr. Marcelo Colen — Advogado criminalista, Mestre em Direito pela UFMG"
                                    width={500}
                                    height={625}
                                    className="w-full object-cover"
                                    priority
                                />
                            </div>
                        </Reveal>

                        {/* Texto */}
                        <Reveal delay={0.12}>
                            <div>
                                <SectionLabel align="left">Sobre</SectionLabel>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1" style={{ color: C.white, fontFamily: C.serif }}>
                                    Marcelo Colen
                                </h1>
                                <p className="text-sm md:text-base font-medium uppercase tracking-[0.1em] mb-5" style={{ color: C.gold }}>
                                    Advogado · OAB/MG 167.463
                                </p>

                                <div className="h-px w-16 mb-5" style={{ background: `linear-gradient(90deg, ${C.gold}, transparent)`, opacity: 0.35 }} />

                                <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: C.gray2 }}>
                                    {renderBold("Advogado criminalista em Belo Horizonte, **Mestre em Direito pela Universidade Federal de Minas Gerais (UFMG)**, com atuação especializada em **direito antidiscriminatório**, defesa de candidatos cotistas em concursos públicos e compliance antirracismo.")}
                                </p>
                                <p className="text-sm md:text-base leading-relaxed" style={{ color: C.gray2 }}>
                                    {renderBold("Ocupa posições de liderança na OAB: é **Diretor de Diversidade e Inclusão da OAB/MG** e **Secretário da Comissão Nacional de Promoção da Igualdade Racial** no Conselho Federal da OAB. Também atua como professor, palestrante e consultor em igualdade racial para instituições públicas e privadas.")}
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* TRAJETÓRIA (Timeline)                                      */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: C.bg2 }}>
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: "url('/texture-juridica.png')", backgroundRepeat: "repeat", backgroundSize: "1000px", opacity: 0.025 }} />
                <Container className="relative z-10">
                    <SectionLabel>Trajetória</SectionLabel>
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-2" style={{ color: C.white, fontFamily: C.serif }}>
                        Formação e carreira
                    </h2>
                    <GoldDivider />

                    <div className="max-w-2xl mx-auto mt-12 relative">
                        {/* Linha vertical */}
                        <div
                            className="absolute left-6 md:left-8 top-0 bottom-0 w-px"
                            style={{ background: `linear-gradient(to bottom, transparent, ${C.gold}40, ${C.gold}40, transparent)` }}
                        />

                        <div className="space-y-6">
                            {TIMELINE.map((item, i) => (
                                <Reveal key={i} delay={i * 0.06}>
                                    <div className="flex gap-5 md:gap-7 relative">
                                        {/* Dot */}
                                        <div className="flex-shrink-0 w-12 md:w-16 flex items-start justify-center pt-1 relative z-10">
                                            <div
                                                className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center"
                                                style={{ backgroundColor: C.bg1, border: `2px solid ${C.gold}50` }}
                                            >
                                                <item.icon className="w-4 h-4 md:w-5 md:h-5" style={{ color: C.gold }} />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 pb-2">
                                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest" style={{ color: C.gold }}>
                                                {item.year}
                                            </span>
                                            <h3 className="text-base md:text-lg font-bold mt-1" style={{ color: C.white, fontFamily: C.serif }}>
                                                {item.title}
                                            </h3>
                                            <p className="text-xs md:text-sm mt-1" style={{ color: C.gray3 }}>
                                                {item.institution}
                                            </p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* CARGOS E POSIÇÕES                                          */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: C.bg1 }}>
                <Container className="relative z-10">
                    <SectionLabel>Cargos Institucionais</SectionLabel>
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-2" style={{ color: C.white, fontFamily: C.serif }}>
                        Posições de liderança
                    </h2>
                    <GoldDivider />

                    <div className="max-w-2xl mx-auto mt-10 space-y-3">
                        {POSITIONS.map((pos, i) => (
                            <Reveal key={i} delay={i * 0.05}>
                                <div className="flex items-start gap-4 p-4 rounded-xl"
                                    style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                                    <Award className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: C.gold, opacity: 0.7 }} />
                                    <div className="flex-1">
                                        <p className="text-sm font-bold" style={{ color: C.white }}>{pos.role}</p>
                                        <p className="text-xs mt-0.5" style={{ color: C.gray3 }}>{pos.org}</p>
                                    </div>
                                    {pos.status && (
                                        <span className="text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold flex-shrink-0"
                                            style={{
                                                backgroundColor: pos.status === "Atual" ? "rgba(201,162,39,0.12)" : "rgba(255,255,255,0.04)",
                                                color: pos.status === "Atual" ? C.gold : C.gray3,
                                                border: pos.status === "Atual" ? `1px solid ${C.gold}30` : "1px solid rgba(255,255,255,0.06)",
                                            }}>
                                            {pos.status}
                                        </span>
                                    )}
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* FORMAÇÃO ACADÊMICA                                         */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: C.bg2 }}>
                <Container className="relative z-10">
                    <SectionLabel>Formação Acadêmica</SectionLabel>
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-2" style={{ color: C.white, fontFamily: C.serif }}>
                        Base acadêmica sólida
                    </h2>
                    <GoldDivider />

                    <div className="max-w-xl mx-auto mt-10 space-y-4">
                        {ACADEMIC.map((item, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="flex items-start gap-4">
                                    <GraduationCap className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: C.gold }} />
                                    <div>
                                        <p className="text-sm md:text-base font-bold" style={{ color: C.white }}>{item.degree}</p>
                                        {item.institution && (
                                            <p className="text-xs md:text-sm mt-1" style={{ color: C.gray3 }}>{item.institution}</p>
                                        )}
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* ATUAÇÃO ALÉM DO DIREITO                                    */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: C.bg1 }}>
                <Container className="relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <SectionLabel>Além do Escritório</SectionLabel>
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2" style={{ color: C.white, fontFamily: C.serif }}>
                            Professor, palestrante e referência pública
                        </h2>
                        <GoldDivider />

                        <div className="grid sm:grid-cols-2 gap-4 mt-10">
                            {[
                                { icon: Mic, title: "Palestrante", desc: "Seminários sobre igualdade racial, antirracismo e compliance em eventos da OAB, TJMG e universidades" },
                                { icon: GraduationCap, title: "Professor", desc: "Docência em temas de direito antidiscriminatório e políticas afirmativas" },
                                { icon: Users, title: "Consultor Institucional", desc: "Compliance antidiscriminatório para empresas e órgãos públicos" },
                                { icon: Award, title: "Reconhecimento", desc: "Homenageado pela Comissão de Direitos Humanos da Assembleia Legislativa de MG por atuação antirracista" },
                            ].map((item, i) => (
                                <Reveal key={i} delay={i * 0.08}>
                                    <div className="rounded-xl p-5 h-full"
                                        style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                                        <item.icon className="w-7 h-7 mb-3" style={{ color: C.gold, opacity: 0.7 }} />
                                        <h3 className="text-sm font-bold mb-1" style={{ color: C.white }}>{item.title}</h3>
                                        <p className="text-xs leading-relaxed" style={{ color: C.gray2 }}>{item.desc}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* CTA                                                        */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="py-20 md:py-28" style={{ backgroundColor: C.bg3, borderTop: `1px solid rgba(255,255,255,0.04)` }}>
                <Container>
                    <div className="max-w-lg mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: C.white, fontFamily: C.serif }}>
                            Agende uma consulta
                        </h2>
                        <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: C.gray2 }}>
                            {renderBold("O escritório realiza uma **análise preliminar** do caso para avaliar a viabilidade jurídica. Atendimento **nacional**, por videoconferência ou presencial em Belo Horizonte.")}
                        </p>
                        <a
                            href="https://wa.me/5531972206996?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 text-sm font-medium px-6 py-3 rounded transition-all duration-200 hover:opacity-90"
                            style={{ backgroundColor: "#c9a227", color: "#0a0a0a" }}
                        >
                            Solicitar atendimento
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </a>
                    </div>
                </Container>
            </section>
        </div>
    );
}
