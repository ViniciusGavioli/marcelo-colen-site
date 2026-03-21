"use client";

import Image from "next/image";
import { MessageCircle, Check, Scale, FileText, Shield, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout";
import { getDirectWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";
import { useEffect, useRef } from "react";
import { DrMarceloSection } from "@/components/sections/DrMarceloSection";

// ============================================================================
// CORES (mesmo design system das LPs)
// ============================================================================
const C = {
    bg1: "#0a0a0a",
    bg2: "#111111",
    bg3: "#181818",
    gold: "#c9a227",
    goldSoft: "rgba(201,162,39,0.10)",
    white: "#ffffff",
    gray1: "rgba(255,255,255,0.92)",
    gray2: "rgba(255,255,255,0.7)",
    gray3: "rgba(255,255,255,0.45)",
};

const GRAIN_URL = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='320' height='320' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`;

const WA_MSG = "Olá Dr. Marcelo, vim pelo site e gostaria de saber se meu caso tem fundamento para recurso.";

// ============================================================================
// HELPERS
// ============================================================================
function renderBold(text: string): React.ReactNode {
    return text.split(/\*\*(.*?)\*\*/g).map((part, i) =>
        i % 2 === 1
            ? <strong key={i} style={{ color: "rgba(255,255,255,0.98)", fontWeight: 700 }}>{part}</strong>
            : part
    );
}

function GrainOverlay() {
    return (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[1]"
            style={{ backgroundImage: GRAIN_URL, backgroundRepeat: "repeat", backgroundSize: "320px 320px", opacity: 0.032, mixBlendMode: "overlay" }} />
    );
}

function GoldDivider() {
    return (
        <div className="flex items-center justify-center gap-3 py-1" aria-hidden="true">
            <div className="h-px flex-1 max-w-[120px]" style={{ background: `linear-gradient(to right, transparent, ${C.gold})`, opacity: 0.35 }} />
            <div className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: C.gold, opacity: 0.6 }} />
            <div className="h-px flex-1 max-w-[120px]" style={{ background: `linear-gradient(to left, transparent, ${C.gold})`, opacity: 0.35 }} />
        </div>
    );
}

function SectionLabel({ children }: { children: string }) {
    return (
        <p className="text-[10px] md:text-xs uppercase tracking-[0.22em] text-center mb-3 font-semibold" style={{ color: C.gold }}>
            {children}
        </p>
    );
}

function Cta({ text, full = false, href }: { text: string; full?: boolean; href?: string }) {
    return (
        <a
            href={href || getDirectWhatsAppLink(WA_MSG)}
            onClick={!href ? trackWhatsAppClick : undefined}
            style={{
                background: "linear-gradient(160deg, #1c0a0a 0%, #0a0a0a 55%, #0f0d00 100%)",
                border: "2px solid #c9a227",
                color: C.white,
                boxShadow: "0 0 28px rgba(201,162,39,0.18), 0 1px 0 rgba(201,162,39,0.12) inset",
            }}
            className={`group inline-flex items-center justify-center gap-2 font-semibold text-base md:text-lg px-8 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_40px_rgba(201,162,39,0.35)] hover:scale-[1.02] active:scale-[0.98] ${full ? "w-full" : ""}`}
        >
            <MessageCircle className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
            {text}
        </a>
    );
}

// ============================================================================
// SCROLL REVEAL
// ============================================================================
function useScrollReveal() {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { el.style.opacity = "1"; el.style.transform = "translateY(0)"; observer.unobserve(el); } },
            { threshold: 0.1 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);
    return ref;
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const ref = useScrollReveal();
    return (
        <div ref={ref} style={{
            opacity: 0, transform: "translateY(24px)",
            transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        }}>{children}</div>
    );
}

// ============================================================================
// AREAS DATA
// ============================================================================
const AREAS = [
    {
        Icon: Scale,
        title: "Recurso Heteroidentificação",
        desc: "Indeferido pela banca de heteroidentificação? A decisão pode ter falhas técnicas que tornam o recurso viável. Análise em horas.",
        href: "/recurso-heteroidentificacao",
        cta: "Ver se posso recorrer",
    },
    {
        Icon: Shield,
        title: "Advogado Cotas Raciais",
        desc: "Especialista em defesa de candidatos cotistas em concursos públicos. Atuação administrativa e judicial em todo o Brasil.",
        href: "/advogado-cotas-raciais",
        cta: "Falar com especialista",
    },
    {
        Icon: FileText,
        title: "Reprovado na Banca",
        desc: "Passou em todas as provas e foi eliminado na banca? Anos de estudo não podem acabar por uma decisão genérica. Contestação possível.",
        href: "/reprovado-heteroidentificacao",
        cta: "Analisar meu caso",
    },
];

// ============================================================================
// PAGE
// ============================================================================
export default function HomePage() {
    return (
        <div style={{ backgroundColor: C.bg1, color: C.white }}>
            <GrainOverlay />

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* HERO                                                         */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="relative flex items-center overflow-hidden pt-8 pb-16 md:pt-16 md:pb-28 lg:py-32" style={{ backgroundColor: C.bg1 }}>
                <div className="absolute inset-0 z-0 select-none">
                    <div className="absolute inset-0" style={{ backgroundImage: "url('/texture-pedra.png')", backgroundSize: "cover", backgroundPosition: "top center", opacity: 0.06 }} />
                    <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,162,39,0.05) 0%, transparent 70%)` }} />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${C.bg1} 0%, transparent 25%, transparent 75%, ${C.bg1} 100%)` }} />
                </div>

                <Container className="relative z-10 w-full px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-5xl mx-auto">

                        {/* Texto */}
                        <div className="flex-1 text-center md:text-left">
                            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
                                <div className="h-px w-8 md:w-12" style={{ background: `linear-gradient(90deg, transparent, ${C.gold})` }} />
                                <span className="text-[10px] md:text-xs uppercase tracking-[0.15em] font-semibold" style={{ color: C.gold }}>
                                    Especialista em Heteroidentificação
                                </span>
                                <div className="h-px w-8 md:w-12" style={{ background: `linear-gradient(90deg, ${C.gold}, transparent)` }} />
                            </div>

                            <h1 className="mb-5" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                                <span className="block text-[clamp(1.6rem,6vw,2.8rem)] font-medium italic leading-[1.2] tracking-tight" style={{ color: C.gray1, opacity: 0.85 }}>
                                    Seu direito às cotas não pode depender
                                </span>
                                <span className="block text-[clamp(2rem,8vw,4rem)] font-bold leading-[1.05] tracking-tight uppercase mt-1" style={{ color: C.gold }}>
                                    da subjetividade de uma banca.
                                </span>
                            </h1>

                            <div className="h-px w-16 mb-5 mx-auto md:mx-0" style={{ background: `linear-gradient(90deg, transparent, rgba(201,162,39,0.3), transparent)` }} />

                            <p className="text-base md:text-lg leading-relaxed mb-8 max-w-[46ch] mx-auto md:mx-0" style={{ color: C.gray2 }}>
                                {renderBold("**Análise jurídica do seu caso em horas.** Atuação nacional, **100% online**, sigilosa e sem custo inicial.")}
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                                <Cta text="Fale com o Especialista" />
                            </div>

                            {/* Trust signals */}
                            <div className="flex items-center gap-4 mt-6 justify-center md:justify-start flex-wrap">
                                {["OAB/MG", "Mestre UFMG", "Atendimento Nacional"].map((item) => (
                                    <span key={item} className="flex items-center gap-1.5 text-[10px] md:text-xs uppercase tracking-wider font-semibold" style={{ color: C.gray3 }}>
                                        <Check className="w-3 h-3" style={{ color: C.gold }} />
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Foto */}
                        <div className="flex-shrink-0 w-48 md:w-64 lg:w-80">
                            <Image
                                src="/images/marcelo/marcelo-sem-fundo-.png"
                                alt="Dr. Marcelo Colen"
                                width={553}
                                height={722}
                                className="w-full object-contain"
                                style={{ filter: "drop-shadow(0 12px 40px rgba(0,0,0,0.5))" }}
                                priority
                            />
                        </div>

                    </div>
                </Container>
                <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, transparent, rgba(201,162,39,0.2), transparent)` }} />
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* ÁREAS DE ATUAÇÃO                                             */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section id="areas" className="py-16 md:py-28 relative overflow-hidden" style={{ backgroundColor: C.bg2 }}>
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: "url('/texture-juridica.png')", backgroundRepeat: "repeat", backgroundSize: "1200px 800px", opacity: 0.03 }} />
                <Container className="relative z-10">
                    <SectionLabel>Como podemos ajudar</SectionLabel>
                    <h2 className="text-2xl md:text-4xl font-bold text-center mb-2" style={{ color: C.white, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                        Áreas de Atuação
                    </h2>
                    <GoldDivider />

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
                        {AREAS.map((area, i) => (
                            <Reveal key={i} delay={i * 0.12}>
                                <a href={area.href} className="group block rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1"
                                    style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}>
                                    <area.Icon className="w-10 h-10 mb-5" style={{ color: C.gold, opacity: 0.85 }} />
                                    <h3 className="text-xl font-bold mb-3" style={{ color: C.white, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                                        {area.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed mb-6" style={{ color: C.gray2 }}>
                                        {area.desc}
                                    </p>
                                    <span className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{ color: C.gold }}>
                                        {area.cta}
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </a>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* DEPOIMENTOS                                                  */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-16 md:py-28 relative overflow-hidden" style={{ backgroundColor: C.bg1 }}>
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: GRAIN_URL, backgroundRepeat: "repeat", backgroundSize: "320px 320px", opacity: 0.025 }} />
                <Container className="relative z-10">
                    <SectionLabel>Depoimentos</SectionLabel>
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-2" style={{ color: C.white, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                        Candidatos que recuperaram suas vagas
                    </h2>
                    <GoldDivider />
                    <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto mt-10">
                        {[
                            { nome: "Mariana Souza · Concurso Federal · Brasília/DF", texto: "Fui eliminada na heteroidentificação do CNU depois de anos estudando. O Dr. Marcelo analisou meu caso em horas e identificou falha procedimental da banca. Consegui liminar e retornei ao certame." },
                            { nome: "Rafael Oliveira · Concurso Estadual · Belo Horizonte/MG", texto: "A motivação da banca era genérica, três linhas apenas. Com o recurso bem fundamentado, a eliminação foi revertida administrativamente. Hoje estou no cargo." },
                            { nome: "Camila Andrade · Concurso Cebraspe · São Paulo/SP", texto: "Não sabia nem que dava pra recorrer. Ele me explicou tudo, resolveu rápido. Recomendo demais." },
                        ].map((dep, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="rounded-2xl p-6 flex flex-col relative overflow-hidden h-full"
                                    style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}>
                                    <span aria-hidden="true" className="absolute top-3 right-4 text-5xl leading-none font-serif select-none" style={{ color: C.gold, opacity: 0.12 }}>&rdquo;</span>
                                    <p className="text-sm md:text-base leading-relaxed mb-5 flex-1 relative z-10" style={{ color: C.gray2, fontStyle: "italic" }}>
                                        &ldquo;{dep.texto}&rdquo;
                                    </p>
                                    <div className="h-px mb-4" style={{ background: `linear-gradient(to right, ${C.gold}, transparent)`, opacity: 0.3 }} />
                                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: C.gold }}>{dep.nome}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA intermediário */}
            <section className="py-8 md:py-12" style={{ backgroundColor: C.bg2 }}>
                <Container>
                    <div className="flex justify-center">
                        <Cta text="Quero Analisar Meu Caso" />
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* DR. MARCELO                                                  */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <div id="sobre">
                <DrMarceloSection />
            </div>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* CTA FINAL                                                    */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-16 md:py-28 relative overflow-hidden" style={{ backgroundColor: C.bg1, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: "url('/texture-pedra.png')", backgroundSize: "cover", backgroundPosition: "bottom center", opacity: 0.035 }} />
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at center bottom, rgba(201,162,39,0.04) 0%, transparent 65%)" }} />
                <Container className="relative z-10">
                    <div className="max-w-lg mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: C.white, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                            Prazos para recurso são curtos.
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: C.gray2 }}>
                            {renderBold("Na maioria dos concursos, o prazo é de **2 a 5 dias corridos**. Manda o resultado e o edital agora. A análise é feita **em horas**.")}
                        </p>
                        <Cta text="Falar com Dr. Marcelo Agora" full />
                        <p className="text-xs mt-8" style={{ color: C.gray3 }}>
                            Cada caso é avaliado individualmente. Não fazemos promessa de resultado.
                        </p>
                    </div>
                </Container>
            </section>
        </div>
    );
}
