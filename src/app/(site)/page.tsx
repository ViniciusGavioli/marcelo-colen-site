"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Scale, Shield, Briefcase, BookOpen, Award, GraduationCap, Tv, Users, Mic } from "lucide-react";
import { Container } from "@/components/layout";
import { C, GrainOverlay, GoldDivider, Reveal, renderBold } from "@/components/site/primitives";

// ============================================================================
// DATA
// ============================================================================

const NUMBERS = [
    { value: "10+", label: "anos de atuação" },
    { value: "UFMG", label: "Mestre em Direito" },
    { value: "OAB/MG", label: "Diretor de Diversidade" },
    { value: "OAB Federal", label: "Comissão Nacional" },
];

const AREAS = [
    {
        Icon: Scale,
        title: "Heteroidentificação e Cotas Raciais",
        desc: "Referência nacional na defesa de candidatos cotistas eliminados em comissões de heteroidentificação. Recursos administrativos e judiciais com atuação em todo o Brasil.",
        href: "/atuacao#heteroidentificacao",
    },
    {
        Icon: Shield,
        title: "Compliance Antidiscriminatório",
        desc: "Consultoria para empresas e instituições públicas na implementação de programas de integridade com foco em diversidade e combate à discriminação racial.",
        href: "/atuacao#compliance",
    },
    {
        Icon: Briefcase,
        title: "Direito Criminal",
        desc: "Defesa técnica em processos penais, habeas corpus, crimes empresariais e atuação perante tribunais superiores, incluindo STJ. Base em BH, atuação nacional.",
        href: "/atuacao#criminal",
    },
    {
        Icon: BookOpen,
        title: "Consultoria, Ensino e Palestras",
        desc: "Palestrante em eventos da OAB, Poder Judiciário e universidades. Consultoria institucional e pareceres sobre igualdade racial e políticas afirmativas.",
        href: "/atuacao#consultoria",
    },
];

const POSITIONS = [
    { role: "Diretor de Diversidade e Inclusão", org: "OAB/MG", current: true },
    { role: "Secretário da Comissão Nacional de Igualdade Racial", org: "Conselho Federal da OAB", current: true },
    { role: "Conselheiro Municipal de Igualdade Racial", org: "Prefeitura de Belo Horizonte", current: true },
    { role: "Conselheiro Seccional", org: "OAB/MG", current: true },
    { role: "Presidente da Comissão de Igualdade Racial", org: "OAB/MG · 2022–2024", current: false },
];

const RECOGNITION = [
    { icon: Tv, title: "TV Globo Minas", desc: "Entrevistas nos telejornais MG1 e MG2 como especialista em legislação antidiscriminatória" },
    { icon: Award, title: "Assembleia Legislativa de MG", desc: "Homenagem oficial da Comissão de Direitos Humanos por atuação no combate ao racismo" },
    { icon: Mic, title: "Podcast Inspirando Advocacia", desc: "\"Por um Judiciário Antirracista\" — episódio sobre igualdade racial no sistema de justiça" },
    { icon: Users, title: "TJMG — Fórum Lafayette", desc: "Debate sobre equidade no judiciário mineiro, em apoio a um judiciário antirracista" },
];

const TESTIMONIALS = [
    { nome: "M.S. — Concurso Federal", texto: "A equipe analisou o caso em poucas horas e identificou falha procedimental da banca. Consegui retornar ao certame por liminar." },
    { nome: "R.O. — Concurso Estadual", texto: "A motivação do indeferimento era genérica. Com o recurso fundamentado, a eliminação foi revertida administrativamente." },
    { nome: "C.A. — Concurso Cebraspe", texto: "Não sabia que era possível recorrer. A orientação foi clara e o resultado veio rápido." },
];

// ============================================================================
// PAGE
// ============================================================================
export default function HomePage() {
    return (
        <div style={{ backgroundColor: C.bg1, color: C.white }}>
            <GrainOverlay />

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* HERO                                                       */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="relative overflow-hidden py-16 md:py-24 lg:py-32" style={{ backgroundColor: C.bg1 }}>
                <div className="absolute inset-0 z-0 select-none">
                    <div className="absolute inset-0" style={{ backgroundImage: "url('/texture-pedra.png')", backgroundSize: "cover", backgroundPosition: "top center", opacity: 0.04 }} />
                </div>

                <Container className="relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-5xl mx-auto">

                        {/* Foto */}
                        <div className="hidden md:block flex-shrink-0 w-64 lg:w-72">
                            <div
                                className="rounded-xl overflow-hidden"
                                style={{ border: `1px solid rgba(255,255,255,0.08)`, boxShadow: "0 8px 40px rgba(0,0,0,0.4)" }}
                            >
                                <Image
                                    src="/images/marcelo/marcelo-hero.jpg"
                                    alt="Dr. Marcelo Colen — Advogado, Mestre em Direito pela UFMG"
                                    width={500}
                                    height={667}
                                    className="w-full object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Texto */}
                        <div className="flex-1">
                            <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-medium mb-4" style={{ color: C.gold }}>
                                OAB/MG 167.463 · Mestre em Direito pela UFMG
                            </p>

                            <h1 className="mb-2" style={{ fontFamily: C.serif }}>
                                <span className="block text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight" style={{ color: C.white }}>
                                    Dr. Marcelo Colen
                                </span>
                            </h1>

                            <p className="text-base md:text-lg font-medium uppercase tracking-[0.08em] mb-6" style={{ color: C.gold }}>
                                Advogado Criminalista · Escritório próprio há mais de 10 anos
                            </p>

                            <div className="h-px w-20 mb-6" style={{ background: `linear-gradient(90deg, ${C.gold}, transparent)`, opacity: 0.35 }} />

                            <p className="text-sm md:text-base leading-[1.8] mb-4 max-w-[55ch]" style={{ color: C.gray2 }}>
                                {renderBold("Uma das maiores referências do Brasil em **direito antidiscriminatório** e defesa de candidatos cotistas. Diretor de Diversidade e Inclusão da **OAB/MG**, Secretário da Comissão Nacional de Igualdade Racial no **Conselho Federal da OAB** e Conselheiro Municipal em Belo Horizonte.")}
                            </p>

                            <p className="text-sm leading-[1.8] mb-8 max-w-[55ch]" style={{ color: C.gray3 }}>
                                Homenageado pela Assembleia Legislativa de MG por atuação no combate ao racismo. Palestrante em eventos da OAB, TJMG e universidades. Entrevistado pela TV Globo Minas como especialista em legislação antidiscriminatória.
                            </p>

                            <div className="flex flex-col sm:flex-row items-start gap-3">
                                <a
                                    href="https://wa.me/5531972206996?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2.5 text-sm font-medium px-6 py-3 rounded transition-all duration-200 hover:opacity-90"
                                    style={{ backgroundColor: C.gold, color: "#0a0a0a" }}
                                >
                                    Solicitar atendimento
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <Link
                                    href="/sobre"
                                    className="inline-flex items-center gap-2.5 text-sm font-medium px-6 py-3 rounded transition-all duration-200 hover:bg-white/5"
                                    style={{ border: `1px solid rgba(255,255,255,0.15)`, color: C.gray2 }}
                                >
                                    Conheça a trajetória
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* NÚMEROS DE AUTORIDADE                                      */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section style={{ backgroundColor: C.bg2, borderTop: `1px solid rgba(255,255,255,0.04)`, borderBottom: `1px solid rgba(255,255,255,0.04)` }}>
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 md:py-14">
                        {NUMBERS.map((n, i) => (
                            <div key={i} className="text-center">
                                <p className="text-2xl md:text-3xl font-bold mb-1" style={{ color: C.gold, fontFamily: C.serif }}>{n.value}</p>
                                <p className="text-[10px] md:text-xs uppercase tracking-[0.15em]" style={{ color: C.gray3 }}>{n.label}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* ÁREAS DE ATUAÇÃO                                           */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: C.bg1 }}>
                <Container className="relative z-10">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-medium mb-3" style={{ color: C.gold }}>
                        Áreas de Atuação
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: C.white, fontFamily: C.serif }}>
                        Especialidades
                    </h2>
                    <p className="text-sm leading-relaxed mb-10 max-w-xl" style={{ color: C.gray3 }}>
                        Mais de uma década de experiência em direito antidiscriminatório, criminal e consultoria institucional.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-px rounded-xl overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
                        {AREAS.map((area, i) => (
                            <Link
                                key={i}
                                href={area.href}
                                className="group p-7 md:p-9 transition-colors duration-300 hover:bg-white/[0.02]"
                                style={{ backgroundColor: C.bg1 }}
                            >
                                <area.Icon className="w-6 h-6 mb-4" style={{ color: C.gold, opacity: 0.6 }} />
                                <h3 className="text-base md:text-lg font-bold mb-2" style={{ color: C.white, fontFamily: C.serif }}>
                                    {area.title}
                                </h3>
                                <p className="text-sm leading-relaxed mb-4" style={{ color: C.gray3 }}>
                                    {area.desc}
                                </p>
                                <span className="inline-flex items-center gap-1.5 text-xs font-medium group-hover:gap-2.5 transition-all" style={{ color: C.gold }}>
                                    Saiba mais
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* QUEM É MARCELO COLEN                                       */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: C.bg2, borderTop: `1px solid rgba(255,255,255,0.04)` }}>
                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-medium mb-3" style={{ color: C.gold }}>
                            Quem é Dr. Marcelo Colen
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: C.white, fontFamily: C.serif }}>
                            Trajetória de autoridade no Direito brasileiro
                        </h2>

                        <div className="space-y-4 text-sm md:text-base leading-[1.8] mb-10" style={{ color: C.gray2 }}>
                            <p>
                                {renderBold("**Marcelo Ladeia Colen Guterres** é advogado criminalista em Belo Horizonte e fundador do escritório Marcelo Colen Advocacia, em atuação há mais de 10 anos. **Mestre em Direito pela Universidade Federal de Minas Gerais (UFMG)**, é uma das maiores referências nacionais em **direito antidiscriminatório** e na defesa de candidatos cotistas eliminados em comissões de heteroidentificação.")}
                            </p>
                            <p>
                                {renderBold("Ocupa posições de liderança institucional na advocacia brasileira: é **Diretor de Diversidade e Inclusão da OAB/MG**, **Secretário da Comissão Nacional de Promoção da Igualdade Racial no Conselho Federal da OAB** (Portaria nº 269/2025), **Conselheiro Seccional da OAB/MG** e **Conselheiro Municipal de Promoção da Igualdade Racial de Belo Horizonte**.")}
                            </p>
                            <p>
                                {renderBold("Foi **Presidente da Comissão Estadual de Igualdade Racial da OAB-MG** (2022–2024) e **Diretor do Núcleo de Igualdade Racial da ESAMG** — Escola Superior de Advocacia de Minas Gerais. Também é professor, palestrante e consultor institucional em igualdade racial para empresas, universidades e órgãos do Poder Judiciário.")}
                            </p>
                        </div>

                        {/* Cargos atuais */}
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.15em] font-semibold mb-4" style={{ color: C.gold }}>
                            Cargos institucionais em exercício
                        </p>
                        <div className="space-y-2 mb-8">
                            {POSITIONS.filter(p => p.current).map((pos, i) => (
                                <div key={i} className="flex items-start gap-3 py-2 px-3 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
                                    <Award className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: C.gold, opacity: 0.6 }} />
                                    <div>
                                        <p className="text-sm font-semibold" style={{ color: C.white }}>{pos.role}</p>
                                        <p className="text-xs" style={{ color: C.gray3 }}>{pos.org}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/sobre"
                            className="inline-flex items-center gap-2 text-sm font-medium transition-all hover:gap-3"
                            style={{ color: C.gold }}
                        >
                            Ver trajetória completa e formação acadêmica
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* RECONHECIMENTO E MÍDIA                                     */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: C.bg1, borderTop: `1px solid rgba(255,255,255,0.04)` }}>
                <Container className="relative z-10">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-medium mb-3" style={{ color: C.gold }}>
                        Reconhecimento
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: C.white, fontFamily: C.serif }}>
                        Presença na mídia e instituições
                    </h2>
                    <p className="text-sm leading-relaxed mb-10 max-w-xl" style={{ color: C.gray3 }}>
                        Entrevistas, homenagens e participações que consolidam a posição de Dr. Marcelo Colen como referência em direito antidiscriminatório.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
                        {RECOGNITION.map((item, i) => (
                            <Reveal key={i} delay={i * 0.08}>
                                <div className="p-5 rounded-xl h-full" style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                                    <item.icon className="w-6 h-6 mb-3" style={{ color: C.gold, opacity: 0.7 }} />
                                    <h3 className="text-sm font-bold mb-1" style={{ color: C.white }}>{item.title}</h3>
                                    <p className="text-xs leading-relaxed" style={{ color: C.gray3 }}>{item.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Link
                        href="/midia"
                        className="inline-flex items-center gap-2 text-sm font-medium mt-8 transition-all hover:gap-3"
                        style={{ color: C.gold }}
                    >
                        Ver todas as aparições
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </Container>
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* DEPOIMENTOS                                                */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: C.bg2, borderTop: `1px solid rgba(255,255,255,0.04)` }}>
                <Container className="relative z-10">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-medium mb-3" style={{ color: C.gold }}>
                        Resultados
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold mb-10" style={{ color: C.white, fontFamily: C.serif }}>
                        O que dizem os clientes
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
                        {TESTIMONIALS.map((dep, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="p-6 rounded-xl h-full" style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                                    <p className="text-sm leading-[1.8] mb-5" style={{ color: C.gray2 }}>
                                        &ldquo;{dep.texto}&rdquo;
                                    </p>
                                    <div className="h-px mb-3" style={{ background: `linear-gradient(to right, rgba(255,255,255,0.06), transparent)` }} />
                                    <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: C.gray3 }}>{dep.nome}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* CTA FINAL                                                  */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="py-20 md:py-28" style={{ backgroundColor: C.bg1, borderTop: `1px solid rgba(255,255,255,0.04)` }}>
                <Container>
                    <div className="max-w-xl">
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-medium mb-3" style={{ color: C.gold }}>
                            Atendimento
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: C.white, fontFamily: C.serif }}>
                            Agende uma consulta
                        </h2>
                        <p className="text-sm md:text-base leading-[1.8] mb-8" style={{ color: C.gray2 }}>
                            {renderBold("O escritório realiza uma **análise preliminar** do caso para avaliar a viabilidade jurídica antes de qualquer contratação. Atendimento **nacional**, por videoconferência ou presencial em Belo Horizonte.")}
                        </p>
                        <a
                            href="https://wa.me/5531972206996?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20escrit%C3%B3rio."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 text-sm font-medium px-6 py-3 rounded transition-all duration-200 hover:opacity-90"
                            style={{ backgroundColor: C.gold, color: "#0a0a0a" }}
                        >
                            Solicitar atendimento
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <p className="text-[10px] mt-6 leading-relaxed" style={{ color: C.gray4 }}>
                            Este site tem caráter informativo. Cada caso requer análise individualizada. Não fazemos promessa de resultado.
                        </p>
                    </div>
                </Container>
            </section>
        </div>
    );
}
