"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Scale, Shield, Briefcase, BookOpen, Award, GraduationCap, Tv, Users, Mic, Star, Quote, ChevronRight, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/layout";
import { C, GrainOverlay, GoldDivider, Reveal, renderBold } from "@/components/site/primitives";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { AttorneyJsonLd } from "@/components/site/JsonLd";

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
    { icon: Tv, title: "TV Globo Minas", desc: "Entrevistas nos telejornais MG1 e MG2 como especialista em legislação antidiscriminatória", image: "/images/marcelo/painel.jpg" },
    { icon: Award, title: "Assembleia Legislativa de MG", desc: "Homenagem oficial da Comissão de Direitos Humanos por atuação no combate ao racismo", image: "/images/marcelo/cotas-cta.jpg" },
    { icon: Mic, title: "Podcast Inspirando Advocacia", desc: "\"Por um Judiciário Antirracista\" — episódio sobre igualdade racial no sistema de justiça", image: "/images/marcelo/marcelo-bio.jpg" },
    { icon: Users, title: "TJMG — Fórum Lafayette", desc: "Debate sobre equidade no judiciário mineiro, em apoio a um judiciário antirracista", image: "/images/marcelo/biblioteca.jpg" },
];

const TESTIMONIALS = [
    {
        nome: "M.S.",
        concurso: "Concurso Federal",
        texto: "A equipe analisou o caso em poucas horas e identificou falha procedimental da banca. Consegui retornar ao certame por liminar.",
        stars: 5,
    },
    {
        nome: "R.O.",
        concurso: "Concurso Estadual",
        texto: "A motivação do indeferimento era genérica. Com o recurso fundamentado, a eliminação foi revertida administrativamente.",
        stars: 5,
    },
    {
        nome: "C.A.",
        concurso: "Concurso Cebraspe",
        texto: "Não sabia que era possível recorrer. A orientação foi clara e o resultado veio rápido.",
        stars: 5,
    },
    {
        nome: "L.F.",
        concurso: "Concurso Municipal",
        texto: "Fui eliminado sem justificativa adequada. O Dr. Marcelo montou o recurso com fundamentação técnica impecável e revertemos a decisão.",
        stars: 5,
    },
];

// ============================================================================
// PAGE
// ============================================================================
export default function HomePage() {
    return (
        <div style={{ backgroundColor: C.bg1, color: C.white }}>
            <GrainOverlay />
            <AttorneyJsonLd />

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* HERO — FULL IMPACT                                        */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="relative overflow-hidden min-h-[90vh] flex items-center" style={{ backgroundColor: C.bg1 }}>
                {/* Background layers */}
                <div className="absolute inset-0 z-0">
                    {/* Marble texture */}
                    <div className="absolute inset-0" style={{
                        backgroundImage: "url('/texture-marble.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: 0.06,
                    }} />
                    {/* Bokeh overlay */}
                    <div className="absolute inset-0" style={{
                        backgroundImage: "url('/texture-bokeh.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: 0.12,
                        mixBlendMode: "screen",
                    }} />
                    {/* Gold radial glow */}
                    <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full" style={{
                        background: "radial-gradient(circle, rgba(201,162,39,0.08) 0%, transparent 70%)",
                    }} />
                    <div className="absolute -bottom-20 -left-32 w-[400px] h-[400px] rounded-full" style={{
                        background: "radial-gradient(circle, rgba(201,162,39,0.05) 0%, transparent 70%)",
                    }} />
                    {/* Bottom fade to next section */}
                    <div className="absolute bottom-0 left-0 right-0 h-48" style={{
                        background: "linear-gradient(to top, #0a0a0a, transparent)",
                    }} />
                </div>

                <Container className="relative z-10 py-12 md:py-20">
                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-6xl mx-auto">

                        {/* Foto mobile — circular com glow */}
                        <div className="md:hidden flex-shrink-0">
                            <div className="relative">
                                {/* Glow ring */}
                                <div className="absolute -inset-3 rounded-full" style={{
                                    background: "conic-gradient(from 0deg, transparent 0%, rgba(201,162,39,0.15) 25%, transparent 50%, rgba(201,162,39,0.1) 75%, transparent 100%)",
                                    filter: "blur(8px)",
                                }} />
                                <div
                                    className="relative w-40 h-40 rounded-full overflow-hidden"
                                    style={{ border: `2px solid ${C.gold}50`, boxShadow: `0 0 40px rgba(201,162,39,0.15), 0 4px 30px rgba(0,0,0,0.5)` }}
                                >
                                    <Image
                                        src="/images/marcelo/marcelo-hero.jpg"
                                        alt="Dr. Marcelo Colen"
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-cover object-top"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Foto desktop — grande, com efeito premium */}
                        <div className="hidden md:block flex-shrink-0 w-72 lg:w-80 relative">
                            {/* Decorative frame */}
                            <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 rounded-tl-xl" style={{ borderColor: `${C.gold}40` }} />
                            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 rounded-br-xl" style={{ borderColor: `${C.gold}40` }} />

                            <div
                                className="rounded-xl overflow-hidden relative"
                                style={{ boxShadow: `0 16px 60px rgba(0,0,0,0.5), 0 0 40px rgba(201,162,39,0.08)` }}
                            >
                                <Image
                                    src="/images/marcelo/marcelo-hero.jpg"
                                    alt="Dr. Marcelo Colen — Advogado, Mestre em Direito pela UFMG"
                                    width={500}
                                    height={667}
                                    className="w-full object-cover"
                                    priority
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0" style={{
                                    background: "linear-gradient(to top, rgba(10,10,10,0.4) 0%, transparent 40%)",
                                }} />
                            </div>
                        </div>

                        {/* Texto */}
                        <div className="flex-1 text-center md:text-left">
                            {/* Gold badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5" style={{
                                backgroundColor: "rgba(201,162,39,0.08)",
                                border: "1px solid rgba(201,162,39,0.2)",
                            }}>
                                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.gold, boxShadow: `0 0 6px ${C.gold}` }} />
                                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold" style={{ color: C.gold }}>
                                    OAB/MG 167.463 · Mestre pela UFMG
                                </span>
                            </div>

                            <h1 className="mb-3" style={{ fontFamily: C.serif }}>
                                <span className="block text-4xl md:text-5xl lg:text-[4rem] font-bold leading-[1.05] tracking-tight" style={{ color: C.white }}>
                                    Dr. Marcelo
                                </span>
                                <span className="block text-4xl md:text-5xl lg:text-[4rem] font-bold leading-[1.05] tracking-tight" style={{
                                    background: `linear-gradient(135deg, ${C.gold}, #e8d5a3, ${C.gold})`,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}>
                                    Colen
                                </span>
                            </h1>

                            <p className="text-sm md:text-base font-medium uppercase tracking-[0.12em] mb-6" style={{ color: C.gray2 }}>
                                Advogado Criminalista · Escritório próprio há mais de 10 anos
                            </p>

                            <div className="h-px w-24 mb-6 mx-auto md:mx-0" style={{
                                background: `linear-gradient(90deg, ${C.gold}, rgba(201,162,39,0.2), transparent)`,
                            }} />

                            <p className="text-sm md:text-base leading-[1.8] mb-4 max-w-[55ch] mx-auto md:mx-0" style={{ color: C.gray2 }}>
                                {renderBold("Uma das maiores referências do Brasil em **direito antidiscriminatório** e defesa de candidatos cotistas. Diretor de Diversidade e Inclusão da **OAB/MG**, Secretário da Comissão Nacional de Igualdade Racial no **Conselho Federal da OAB**.")}
                            </p>

                            <p className="text-sm leading-[1.8] mb-8 max-w-[55ch] mx-auto md:mx-0" style={{ color: C.gray3 }}>
                                Homenageado pela Assembleia Legislativa de MG. Entrevistado pela TV Globo Minas como especialista em legislação antidiscriminatória.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center md:items-start gap-3">
                                <a
                                    href="https://wa.me/5531972206996?text=Ol%C3%A1%2C%20vim%20pelo%20site%20principal%20e%20gostaria%20de%20agendar%20uma%20consulta."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2.5 text-sm font-semibold px-7 py-3.5 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,162,39,0.3)] hover:scale-[1.02]"
                                    style={{ backgroundColor: C.gold, color: "#0a0a0a" }}
                                >
                                    Solicitar atendimento
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </a>
                                <Link
                                    href="/sobre"
                                    className="inline-flex items-center gap-2.5 text-sm font-medium px-6 py-3.5 rounded-lg transition-all duration-300 hover:bg-white/5 hover:border-white/25"
                                    style={{ border: `1px solid rgba(255,255,255,0.12)`, color: C.gray2 }}
                                >
                                    Conheça a trajetória
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* NÚMEROS — com textura e glow                               */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="relative overflow-hidden" style={{
                backgroundColor: C.bg2,
                borderTop: `1px solid rgba(201,162,39,0.08)`,
                borderBottom: `1px solid rgba(201,162,39,0.08)`,
            }}>
                {/* Geometric texture */}
                <div className="absolute inset-0" style={{
                    backgroundImage: "url('/texture-geo.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.04,
                }} />
                <Container className="relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 md:py-16">
                        {NUMBERS.map((n, i) => (
                            <AnimatedCounter
                                key={i}
                                value={n.value}
                                label={n.label}
                                serif={C.serif}
                                goldColor={C.gold}
                                grayColor={C.gray3}
                            />
                        ))}
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* ÁREAS DE ATUAÇÃO — cards com imagem de fundo              */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="py-24 md:py-36 relative overflow-hidden" style={{ backgroundColor: C.bg1 }}>
                {/* Background glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]" style={{
                    background: "radial-gradient(ellipse, rgba(201,162,39,0.04) 0%, transparent 70%)",
                }} />

                <Container className="relative z-10">
                    <div className="text-center mb-14">
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-semibold mb-3" style={{ color: C.gold }}>
                            Áreas de Atuação
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: C.white, fontFamily: C.serif }}>
                            Especialidades
                        </h2>
                        <div className="h-px w-20 mx-auto" style={{
                            background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
                            opacity: 0.4,
                        }} />
                        <p className="text-sm leading-relaxed mt-4 max-w-lg mx-auto" style={{ color: C.gray3 }}>
                            Mais de uma década de experiência em direito antidiscriminatório, criminal e consultoria institucional.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                        {AREAS.map((area, i) => (
                            <Link
                                key={i}
                                href={area.href}
                                className="group relative p-7 md:p-9 rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(201,162,39,0.08)]"
                                style={{
                                    backgroundColor: "rgba(255,255,255,0.015)",
                                    border: "1px solid rgba(255,255,255,0.05)",
                                }}
                            >
                                {/* Hover gradient */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                                    background: "linear-gradient(135deg, rgba(201,162,39,0.04) 0%, transparent 60%)",
                                }} />
                                {/* Gold top border on hover */}
                                <div className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{
                                    background: `linear-gradient(90deg, ${C.gold}, transparent)`,
                                }} />

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5" style={{
                                        backgroundColor: "rgba(201,162,39,0.08)",
                                        border: "1px solid rgba(201,162,39,0.15)",
                                    }}>
                                        <area.Icon className="w-5 h-5" style={{ color: C.gold }} />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: C.white, fontFamily: C.serif }}>
                                        {area.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed mb-5" style={{ color: C.gray3 }}>
                                        {area.desc}
                                    </p>
                                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold group-hover:gap-2.5 transition-all" style={{ color: C.gold }}>
                                        Saiba mais
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* QUEM É — com foto + textura                                */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="py-24 md:py-36 relative overflow-hidden" style={{ backgroundColor: C.bg2 }}>
                {/* Texture */}
                <div className="absolute inset-0" style={{
                    backgroundImage: "url('/texture-pedra.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.03,
                }} />
                {/* Gold glow */}
                <div className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full" style={{
                    background: "radial-gradient(circle, rgba(201,162,39,0.06) 0%, transparent 70%)",
                }} />
                {/* Top border */}
                <div className="absolute top-0 left-0 right-0 h-px" style={{
                    background: "linear-gradient(90deg, transparent 20%, rgba(201,162,39,0.15) 50%, transparent 80%)",
                }} />

                <Container className="relative z-10">
                    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                        {/* Coluna esquerda — imagem */}
                        <div className="w-full lg:w-80 flex-shrink-0">
                            <Reveal>
                                <div className="relative">
                                    <div className="rounded-xl overflow-hidden" style={{
                                        boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                                    }}>
                                        <Image
                                            src="/images/marcelo/about.jpg"
                                            alt="Dr. Marcelo Colen — trajetória profissional"
                                            width={400}
                                            height={500}
                                            className="w-full object-cover"
                                        />
                                    </div>
                                    {/* Info card overlay */}
                                    <div className="absolute -bottom-4 -right-4 md:-right-8 px-5 py-3 rounded-lg" style={{
                                        backgroundColor: "rgba(10,10,10,0.95)",
                                        border: `1px solid ${C.gold}30`,
                                        backdropFilter: "blur(12px)",
                                        boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
                                    }}>
                                        <p className="text-xs font-bold" style={{ color: C.gold }}>Mestre em Direito</p>
                                        <p className="text-[10px]" style={{ color: C.gray3 }}>UFMG</p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        {/* Coluna direita — texto */}
                        <div className="flex-1">
                            <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: C.gold }}>
                                Quem é Dr. Marcelo Colen
                            </p>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6" style={{ color: C.white, fontFamily: C.serif }}>
                                Trajetória de autoridade no Direito brasileiro
                            </h2>

                            <div className="space-y-4 text-sm md:text-base leading-[1.8] mb-10" style={{ color: C.gray2 }}>
                                <p>
                                    {renderBold("**Marcelo Ladeia Colen Guterres** é advogado criminalista em Belo Horizonte e fundador do escritório Marcelo Colen Advocacia, em atuação há mais de 10 anos. **Mestre em Direito pela Universidade Federal de Minas Gerais (UFMG)**, é uma das maiores referências nacionais em **direito antidiscriminatório** e na defesa de candidatos cotistas.")}
                                </p>
                                <p>
                                    {renderBold("Ocupa posições de liderança institucional: é **Diretor de Diversidade e Inclusão da OAB/MG**, **Secretário da Comissão Nacional de Promoção da Igualdade Racial no Conselho Federal da OAB** e **Conselheiro Municipal de Promoção da Igualdade Racial de Belo Horizonte**.")}
                                </p>
                            </div>

                            {/* Cargos — cards visuais */}
                            <p className="text-[10px] md:text-xs uppercase tracking-[0.15em] font-semibold mb-4" style={{ color: C.gold }}>
                                Cargos institucionais em exercício
                            </p>
                            <div className="grid sm:grid-cols-2 gap-2 mb-8">
                                {POSITIONS.filter(p => p.current).map((pos, i) => (
                                    <div key={i} className="flex items-start gap-3 py-3 px-4 rounded-lg transition-colors hover:bg-white/[0.02]" style={{
                                        backgroundColor: "rgba(255,255,255,0.02)",
                                        border: "1px solid rgba(255,255,255,0.04)",
                                    }}>
                                        <Award className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: C.gold, opacity: 0.7 }} />
                                        <div>
                                            <p className="text-xs md:text-sm font-semibold" style={{ color: C.white }}>{pos.role}</p>
                                            <p className="text-[10px] md:text-xs" style={{ color: C.gray3 }}>{pos.org}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/sobre"
                                className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3 group"
                                style={{ color: C.gold }}
                            >
                                Ver trajetória completa
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* RECONHECIMENTO — cards com imagens                          */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="py-24 md:py-36 relative overflow-hidden" style={{ backgroundColor: C.bg1 }}>
                {/* Textura */}
                <div className="absolute inset-0" style={{
                    backgroundImage: "url('/texture-juridica.png')",
                    backgroundRepeat: "repeat",
                    backgroundSize: "1200px",
                    opacity: 0.02,
                }} />
                {/* Top border */}
                <div className="absolute top-0 left-0 right-0 h-px" style={{
                    background: "linear-gradient(90deg, transparent 20%, rgba(201,162,39,0.12) 50%, transparent 80%)",
                }} />

                <Container className="relative z-10">
                    <div className="text-center mb-14">
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-semibold mb-3" style={{ color: C.gold }}>
                            Reconhecimento
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: C.white, fontFamily: C.serif }}>
                            Presença na mídia e instituições
                        </h2>
                        <div className="h-px w-20 mx-auto" style={{
                            background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
                            opacity: 0.4,
                        }} />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
                        {RECOGNITION.map((item, i) => (
                            <Reveal key={i} delay={i * 0.08}>
                                <div className="group relative rounded-xl overflow-hidden h-full" style={{
                                    border: "1px solid rgba(255,255,255,0.06)",
                                }}>
                                    {/* Background image */}
                                    <div className="absolute inset-0">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover opacity-20 group-hover:opacity-25 group-hover:scale-105 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0" style={{
                                            background: "linear-gradient(135deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.82) 100%)",
                                        }} />
                                    </div>

                                    <div className="relative z-10 p-6 md:p-7">
                                        <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{
                                            backgroundColor: "rgba(201,162,39,0.1)",
                                            border: "1px solid rgba(201,162,39,0.2)",
                                        }}>
                                            <item.icon className="w-5 h-5" style={{ color: C.gold }} />
                                        </div>
                                        <h3 className="text-base font-bold mb-2" style={{ color: C.white, fontFamily: C.serif }}>{item.title}</h3>
                                        <p className="text-xs leading-relaxed" style={{ color: C.gray2 }}>{item.desc}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <Link
                            href="/midia"
                            className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3 group"
                            style={{ color: C.gold }}
                        >
                            Ver todas as aparições
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* DEPOIMENTOS — com textura premium                          */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="py-24 md:py-36 relative overflow-hidden" style={{ backgroundColor: C.bg2 }}>
                {/* Marble texture */}
                <div className="absolute inset-0" style={{
                    backgroundImage: "url('/texture-marble.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom center",
                    opacity: 0.03,
                }} />
                {/* Top border */}
                <div className="absolute top-0 left-0 right-0 h-px" style={{
                    background: "linear-gradient(90deg, transparent 20%, rgba(201,162,39,0.12) 50%, transparent 80%)",
                }} />
                {/* Glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]" style={{
                    background: "radial-gradient(ellipse, rgba(201,162,39,0.04) 0%, transparent 70%)",
                }} />

                <Container className="relative z-10">
                    <div className="text-center mb-14">
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-semibold mb-3" style={{ color: C.gold }}>
                            Resultados
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: C.white, fontFamily: C.serif }}>
                            O que dizem os clientes
                        </h2>
                        <div className="h-px w-20 mx-auto" style={{
                            background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
                            opacity: 0.4,
                        }} />
                    </div>

                    <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
                        {TESTIMONIALS.map((dep, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="relative p-6 md:p-7 rounded-xl h-full flex flex-col group transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,162,39,0.05)]" style={{
                                    backgroundColor: "rgba(255,255,255,0.02)",
                                    border: "1px solid rgba(255,255,255,0.06)",
                                }}>
                                    {/* Gold accent corner */}
                                    <div className="absolute top-0 left-0 w-12 h-12" style={{
                                        background: "linear-gradient(135deg, rgba(201,162,39,0.1) 0%, transparent 60%)",
                                        borderRadius: "12px 0 0 0",
                                    }} />

                                    {/* Stars */}
                                    <div className="flex gap-0.5 mb-3 relative z-10">
                                        {Array.from({ length: dep.stars }).map((_, j) => (
                                            <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: C.gold }} />
                                        ))}
                                    </div>

                                    <Quote className="w-6 h-6 mb-3 opacity-15" style={{ color: C.gold }} />

                                    <p className="text-sm leading-[1.8] mb-5 flex-1 italic" style={{ color: C.gray2 }}>
                                        &ldquo;{dep.texto}&rdquo;
                                    </p>

                                    <div className="h-px mb-4" style={{ background: `linear-gradient(to right, rgba(201,162,39,0.15), transparent)` }} />

                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                                            style={{
                                                background: `linear-gradient(135deg, rgba(201,162,39,0.15), rgba(201,162,39,0.05))`,
                                                color: C.gold,
                                                border: `1px solid ${C.gold}25`,
                                            }}
                                        >
                                            {dep.nome.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold" style={{ color: C.gray1 }}>{dep.nome}</p>
                                            <p className="text-[10px] uppercase tracking-wider" style={{ color: C.gray3 }}>{dep.concurso}</p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* CTA FINAL — full visual impact                             */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="relative overflow-hidden" style={{ backgroundColor: C.bg1 }}>
                {/* Top border */}
                <div className="absolute top-0 left-0 right-0 h-px" style={{
                    background: "linear-gradient(90deg, transparent 20%, rgba(201,162,39,0.15) 50%, transparent 80%)",
                }} />

                <div className="relative">
                    {/* Background image */}
                    <div className="absolute inset-0">
                        <Image
                            src="/images/marcelo/biblioteca.jpg"
                            alt=""
                            fill
                            className="object-cover"
                            style={{ opacity: 0.08 }}
                        />
                        <div className="absolute inset-0" style={{
                            background: "linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.88) 100%)",
                        }} />
                    </div>

                    <Container className="relative z-10 py-24 md:py-32">
                        <div className="max-w-2xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{
                                backgroundColor: "rgba(201,162,39,0.08)",
                                border: "1px solid rgba(201,162,39,0.2)",
                            }}>
                                <Phone className="w-3 h-3" style={{ color: C.gold }} />
                                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold" style={{ color: C.gold }}>
                                    Atendimento Nacional
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5" style={{ color: C.white, fontFamily: C.serif }}>
                                Agende uma consulta
                            </h2>

                            <div className="h-px w-16 mx-auto mb-6" style={{
                                background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
                                opacity: 0.4,
                            }} />

                            <p className="text-sm md:text-base leading-[1.8] mb-8 max-w-lg mx-auto" style={{ color: C.gray2 }}>
                                {renderBold("O escritório realiza uma **análise preliminar** do caso para avaliar a viabilidade jurídica antes de qualquer contratação. Atendimento **nacional**, por videoconferência ou presencial em Belo Horizonte.")}
                            </p>

                            <a
                                href="https://wa.me/5531972206996?text=Ol%C3%A1%2C%20vim%20pela%20se%C3%A7%C3%A3o%20de%20contato%20do%20site%20e%20gostaria%20de%20agendar%20uma%20consulta."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2.5 text-sm font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,162,39,0.3)] hover:scale-[1.02]"
                                style={{ backgroundColor: C.gold, color: "#0a0a0a" }}
                            >
                                Solicitar atendimento
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </a>

                            <div className="flex items-center justify-center gap-6 mt-8">
                                <div className="flex items-center gap-2 text-xs" style={{ color: C.gray3 }}>
                                    <MapPin className="w-3.5 h-3.5" style={{ color: C.gold, opacity: 0.6 }} />
                                    Belo Horizonte/MG
                                </div>
                                <div className="w-1 h-1 rounded-full" style={{ backgroundColor: C.gray4 }} />
                                <p className="text-xs" style={{ color: C.gray3 }}>
                                    Presencial e online
                                </p>
                            </div>

                            <p className="text-[10px] mt-8 leading-relaxed" style={{ color: C.gray4 }}>
                                Este site tem caráter informativo. Cada caso requer análise individualizada. Não fazemos promessa de resultado.
                            </p>
                        </div>
                    </Container>
                </div>
            </section>
        </div>
    );
}
