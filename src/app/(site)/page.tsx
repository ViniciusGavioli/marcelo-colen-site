"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Scale, Shield, FileText, Briefcase, ArrowRight, Award, Tv, Mic, BookOpen } from "lucide-react";
import { Container } from "@/components/layout";
import { C, GrainOverlay, GoldDivider, SectionLabel, Cta, LinkButton, Reveal, renderBold } from "@/components/site/primitives";

// ============================================================================
// DATA
// ============================================================================
const CREDENTIALS = [
    "Mestre em Direito · UFMG",
    "OAB/MG 167.463",
    "Diretor de Diversidade e Inclusão · OAB/MG",
    "Secretário da Comissão Nac. de Igualdade Racial · OAB Federal",
    "Ex-Presidente da Comissão de Igualdade Racial · OAB/MG",
    "Conselheiro Municipal de Igualdade Racial · BH",
];

const AREAS = [
    {
        Icon: Scale,
        title: "Heteroidentificação e Cotas Raciais",
        desc: "Defesa administrativa e judicial de candidatos cotistas em concursos públicos. Recurso contra indeferimento em bancas de heteroidentificação.",
        href: "/recurso-heteroidentificacao",
    },
    {
        Icon: Shield,
        title: "Compliance Antidiscriminatório",
        desc: "Consultoria para empresas e instituições que buscam implementar políticas internas de combate ao racismo e à discriminação.",
        href: "/atuacao#compliance",
    },
    {
        Icon: Briefcase,
        title: "Direito Criminal",
        desc: "Defesa técnica em processos criminais, inquéritos policiais, habeas corpus e crimes empresariais. Atuação em tribunais superiores.",
        href: "/atuacao#criminal",
    },
    {
        Icon: BookOpen,
        title: "Consultoria e Ensino",
        desc: "Palestras, treinamentos e consultoria jurídica em igualdade racial, políticas afirmativas e direitos humanos para instituições.",
        href: "/atuacao#consultoria",
    },
];

const MEDIA = [
    { name: "TV Globo Minas", sub: "MG1 · MG2", icon: Tv, desc: "Análises sobre injúria racial e legislação antidiscriminatória" },
    { name: "Podcast Inspirando Advocacia", sub: "Spotify · 2022", icon: Mic, desc: "\"Por um Judiciário Antirracista\"" },
    { name: "TJMG", sub: "Fórum Lafayette · 2026", icon: Award, desc: "Debate sobre equidade no judiciário mineiro" },
    { name: "Assembleia Legislativa MG", sub: "Comissão de Direitos Humanos", icon: Award, desc: "Homenagem por atuação antirracista" },
];

const NUMBERS = [
    { value: "56mil+", label: "seguidores no Instagram" },
    { value: "10+", label: "anos de atuação" },
    { value: "27", label: "estados atendidos" },
    { value: "100%", label: "online e presencial" },
];

const TESTIMONIALS = [
    { nome: "Mariana S. · Concurso Federal · Brasília/DF", texto: "Fui eliminada na heteroidentificação do CNU depois de anos estudando. O Dr. Marcelo analisou meu caso em horas e identificou falha procedimental da banca. Consegui liminar e retornei ao certame." },
    { nome: "Rafael O. · Concurso Estadual · BH/MG", texto: "A motivação da banca era genérica, três linhas apenas. Com o recurso bem fundamentado, a eliminação foi revertida administrativamente. Hoje estou no cargo." },
    { nome: "Camila A. · Concurso Cebraspe · SP", texto: "Não sabia nem que dava pra recorrer. Ele me explicou tudo, resolveu rápido. Recomendo demais." },
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
            <section className="relative overflow-hidden pt-4 pb-16 md:pt-12 md:pb-24 lg:pt-16 lg:pb-32" style={{ backgroundColor: C.bg1 }}>
                {/* Texture + Gradients */}
                <div className="absolute inset-0 z-0 select-none">
                    <div className="absolute inset-0" style={{ backgroundImage: "url('/texture-pedra.png')", backgroundSize: "cover", backgroundPosition: "top center", opacity: 0.05 }} />
                    <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 70% 50% at 70% 30%, rgba(201,162,39,0.04) 0%, transparent 70%)` }} />
                </div>

                <Container className="relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-6xl mx-auto">

                        {/* Texto */}
                        <div className="flex-1 text-center md:text-left order-2 md:order-1">
                            <div className="flex items-center gap-3 mb-5 justify-center md:justify-start">
                                <div className="h-px w-8" style={{ background: `linear-gradient(90deg, transparent, ${C.gold})` }} />
                                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold" style={{ color: C.gold }}>
                                    Advocacia · Belo Horizonte
                                </span>
                            </div>

                            <h1 style={{ fontFamily: C.serif }}>
                                <span className="block text-[clamp(2.4rem,8vw,5rem)] font-bold leading-[0.95] tracking-tight" style={{ color: C.white }}>
                                    Marcelo
                                </span>
                                <span className="block text-[clamp(2.4rem,8vw,5rem)] font-bold leading-[0.95] tracking-tight" style={{ color: C.gold }}>
                                    Colen
                                </span>
                            </h1>

                            <div className="h-px w-20 my-5 mx-auto md:mx-0" style={{ background: `linear-gradient(90deg, ${C.gold}, transparent)`, opacity: 0.4 }} />

                            <p className="text-sm md:text-base font-medium uppercase tracking-[0.12em] mb-6" style={{ color: C.gray2 }}>
                                Advogado · Mestre em Direito UFMG · Diretor de Diversidade OAB/MG
                            </p>

                            <p className="text-base md:text-lg leading-relaxed mb-8 max-w-[52ch] mx-auto md:mx-0" style={{ color: C.gray2 }}>
                                {renderBold("Referência nacional em **direito antidiscriminatório** e defesa de candidatos cotistas. Atuação técnica, ética e comprometida com a **igualdade racial**.")}
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                                <Cta text="Fale Comigo" />
                                <LinkButton text="Conheça minha atuação" href="/atuacao" />
                            </div>
                        </div>

                        {/* Foto */}
                        <div className="flex-shrink-0 w-56 md:w-72 lg:w-[340px] order-1 md:order-2">
                            <Image
                                src="/images/marcelo/marcelo-sem-fundo-.png"
                                alt="Dr. Marcelo Colen — Advogado, Mestre UFMG, Diretor OAB/MG"
                                width={553}
                                height={722}
                                className="w-full object-contain"
                                style={{ filter: "drop-shadow(0 16px 48px rgba(0,0,0,0.55))" }}
                                priority
                            />
                        </div>
                    </div>
                </Container>

                <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, transparent, rgba(201,162,39,0.15), transparent)` }} />
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* CREDENCIAIS STRIP                                          */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section style={{ backgroundColor: "#0B1730", borderTop: `1px solid rgba(201,162,39,0.2)`, borderBottom: `1px solid rgba(201,162,39,0.1)` }}>
                <style>{`@keyframes marquee-home { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
                <div className="overflow-hidden py-3">
                    <div style={{ display: "inline-block", whiteSpace: "nowrap", animation: "marquee-home 30s linear infinite" }}>
                        {[0, 1].map(i => (
                            <span key={i}>
                                {CREDENTIALS.map((txt, j) => (
                                    <span key={j} style={{ color: C.gold, fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                                        {txt}
                                        <span style={{ color: "rgba(201,162,39,0.35)", margin: "0 18px" }}>◆</span>
                                    </span>
                                ))}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* SOBRE — Resumo                                             */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: C.bg2 }}>
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('/texture-pedra.png')", backgroundSize: "cover", opacity: 0.035 }} />
                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">
                        {/* Foto */}
                        <Reveal>
                            <div className="w-64 md:w-72 flex-shrink-0 rounded-2xl overflow-hidden" style={{ border: `1px solid ${C.goldBorder}` }}>
                                <Image
                                    src="/images/marcelo/about.jpg"
                                    alt="Dr. Marcelo Colen"
                                    width={400}
                                    height={500}
                                    className="w-full object-cover"
                                />
                            </div>
                        </Reveal>

                        {/* Texto */}
                        <Reveal delay={0.15}>
                            <div>
                                <SectionLabel align="left">Sobre</SectionLabel>
                                <h2 className="text-2xl md:text-3xl font-bold mb-5" style={{ color: C.white, fontFamily: C.serif }}>
                                    Quem é Marcelo Colen
                                </h2>
                                <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: C.gray2 }}>
                                    {renderBold("Advogado criminalista em Belo Horizonte, **Mestre em Direito pela UFMG**, com atuação especializada em **direito antidiscriminatório e defesa de candidatos cotistas** em concursos públicos.")}
                                </p>
                                <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: C.gray2 }}>
                                    {renderBold("É **Diretor de Diversidade e Inclusão da OAB/MG** e **Secretário da Comissão Nacional de Promoção da Igualdade Racial** no Conselho Federal da OAB. Foi presidente da Comissão Estadual de Igualdade Racial da OAB-MG (2022–2024) e atua como professor, palestrante e consultor em compliance antidiscriminatório.")}
                                </p>

                                <div className="grid grid-cols-2 gap-2 mb-6">
                                    {["Mestre UFMG", "Diretor OAB/MG", "OAB Federal", "56mil+ seguidores"].map((item) => (
                                        <span key={item} className="flex items-center gap-2 text-xs md:text-sm" style={{ color: C.gray2 }}>
                                            <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: C.gold }} />
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <LinkButton text="Leia a trajetória completa" href="/sobre" />
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* ÁREAS DE ATUAÇÃO                                           */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section id="areas" className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: C.bg1 }}>
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: "url('/texture-juridica.png')", backgroundRepeat: "repeat", backgroundSize: "1200px 800px", opacity: 0.03 }} />
                <Container className="relative z-10">
                    <SectionLabel>Áreas de Atuação</SectionLabel>
                    <h2 className="text-2xl md:text-4xl font-bold text-center mb-2" style={{ color: C.white, fontFamily: C.serif }}>
                        Como posso ajudar
                    </h2>
                    <GoldDivider />

                    <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto mt-12">
                        {AREAS.map((area, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <Link href={area.href} className="group block rounded-2xl p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 h-full"
                                    style={{ backgroundColor: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                    <area.Icon className="w-8 h-8 mb-4" style={{ color: C.gold, opacity: 0.85 }} />
                                    <h3 className="text-lg font-bold mb-2" style={{ color: C.white, fontFamily: C.serif }}>
                                        {area.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed" style={{ color: C.gray2 }}>
                                        {area.desc}
                                    </p>
                                    <span className="inline-flex items-center gap-2 text-xs font-semibold mt-4 group-hover:gap-3 transition-all" style={{ color: C.gold }}>
                                        Saiba mais
                                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </Link>
                            </Reveal>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <LinkButton text="Ver todas as áreas" href="/atuacao" />
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* NÚMEROS                                                    */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="py-12 md:py-16" style={{ backgroundColor: C.bg3, borderTop: `1px solid rgba(255,255,255,0.04)`, borderBottom: `1px solid rgba(255,255,255,0.04)` }}>
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto text-center">
                        {NUMBERS.map((n, i) => (
                            <Reveal key={i} delay={i * 0.08}>
                                <div>
                                    <p className="text-3xl md:text-4xl font-bold" style={{ color: C.gold, fontFamily: C.serif }}>
                                        {n.value}
                                    </p>
                                    <p className="text-xs md:text-sm mt-1 uppercase tracking-wider" style={{ color: C.gray3 }}>
                                        {n.label}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* NA MÍDIA                                                   */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: C.bg2 }}>
                <Container className="relative z-10">
                    <SectionLabel>Na Mídia</SectionLabel>
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-2" style={{ color: C.white, fontFamily: C.serif }}>
                        Presença e reconhecimento
                    </h2>
                    <GoldDivider />

                    <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mt-10">
                        {MEDIA.map((m, i) => (
                            <Reveal key={i} delay={i * 0.08}>
                                <div className="rounded-xl p-5 flex items-start gap-4"
                                    style={{ backgroundColor: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                    <m.icon className="w-8 h-8 flex-shrink-0 mt-0.5" style={{ color: C.gold, opacity: 0.7 }} />
                                    <div>
                                        <p className="font-bold text-sm" style={{ color: C.white }}>{m.name}</p>
                                        <p className="text-xs mt-0.5" style={{ color: C.gray3 }}>{m.sub}</p>
                                        <p className="text-xs mt-2 leading-relaxed" style={{ color: C.gray2 }}>{m.desc}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <LinkButton text="Ver todas as aparições" href="/midia" />
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* DEPOIMENTOS                                                */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: C.bg1 }}>
                <Container className="relative z-10">
                    <SectionLabel>Depoimentos</SectionLabel>
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-2" style={{ color: C.white, fontFamily: C.serif }}>
                        Candidatos que recuperaram suas vagas
                    </h2>
                    <GoldDivider />
                    <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto mt-10">
                        {TESTIMONIALS.map((dep, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="rounded-2xl p-6 flex flex-col relative overflow-hidden h-full"
                                    style={{ backgroundColor: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                    <span aria-hidden="true" className="absolute top-3 right-4 text-5xl leading-none font-serif select-none" style={{ color: C.gold, opacity: 0.1 }}>&rdquo;</span>
                                    <p className="text-sm leading-relaxed mb-5 flex-1 relative z-10" style={{ color: C.gray2, fontStyle: "italic" }}>
                                        &ldquo;{dep.texto}&rdquo;
                                    </p>
                                    <div className="h-px mb-3" style={{ background: `linear-gradient(to right, ${C.gold}, transparent)`, opacity: 0.25 }} />
                                    <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: C.gold }}>{dep.nome}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* CTA FINAL                                                  */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: C.bg3, borderTop: `1px solid rgba(255,255,255,0.04)` }}>
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at center, rgba(201,162,39,0.04) 0%, transparent 65%)" }} />
                <Container className="relative z-10">
                    <div className="max-w-lg mx-auto text-center">
                        <SectionLabel>Contato</SectionLabel>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: C.white, fontFamily: C.serif }}>
                            Precisa de orientação jurídica?
                        </h2>
                        <p className="text-base leading-relaxed mb-8" style={{ color: C.gray2 }}>
                            {renderBold("Entre em contato para uma **análise inicial do seu caso**. Atendimento **100% online**, ágil e sigiloso.")}
                        </p>
                        <Cta text="Falar com Dr. Marcelo" full />
                        <p className="text-[10px] mt-6" style={{ color: C.gray4 }}>
                            Cada caso é avaliado individualmente. Não fazemos promessa de resultado.
                        </p>
                    </div>
                </Container>
            </section>
        </div>
    );
}
