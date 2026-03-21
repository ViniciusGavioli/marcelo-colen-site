"use client";

import Image from "next/image";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import {
    MessageCircle,
    ChevronDown,
    Lock,
    Check,
    Clock,
    Send,
    Search,
    Gavel,
    FileText,
} from "lucide-react";
import { Container } from "@/components/layout";
import { getDirectWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";
import { useState, useEffect, useRef } from "react";
import { DrMarceloSection } from "@/components/sections/DrMarceloSection";

// ============================================================================
// CORES
// ============================================================================
const C = {
    bg1: "#0a0a0a",
    bg2: "#111111",
    bg3: "#181818",
    gold: "#c9a227",
    goldSoft: "rgba(201,162,39,0.10)",
    goldMid: "rgba(201,162,39,0.18)",
    white: "#ffffff",
    gray1: "rgba(255,255,255,0.92)",
    gray2: "rgba(255,255,255,0.7)",
    gray3: "rgba(255,255,255,0.45)",
    red: "#ef4444",
    redBg: "rgba(239,68,68,0.08)",
    redBorder: "rgba(239,68,68,0.25)",
    cta: "#25D366",
};

const GRAIN_URL = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='320' height='320' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`;

// ============================================================================
// DADOS LP 3: REPROVADO HETEROIDENTIFICAÇÃO
// ============================================================================
const D = {
    hero: {
        badge: "Prazo de recurso: entre 2 e 5 dias a partir do resultado. Cada hora conta.",
        h1_1: "Você passou nas provas.",
        h1_2: "A banca te eliminou. Isso pode ser contestado.",
        sub: "**Anos de estudo** não podem acabar por uma **decisão genérica e mal fundamentada** de uma comissão de heteroidentificação. Análise jurídica individual do seu caso, **rápida, sigilosa e sem custo inicial**.",
        cta: "Analisar Meu Caso Agora",
        disclaimer: "Cada caso é avaliado individualmente. Não fazemos promessa de resultado.",
    },
    analiseCaso: {
        title: "O que analisamos no seu caso",
        items: [
            "Edital do concurso",
            "Resultado da heteroidentificação",
            "Fundamentação apresentada pela banca",
            "Prazo recursal disponível",
        ],
        cta: "Enviar Meu Resultado no WhatsApp",
    },
    urg: {
        title: "O Seu Prazo Está Correndo.",
        text: "Em muitos concursos, o prazo de recurso administrativo é de apenas **2 a 5 dias corridos** após o resultado. Passado esse prazo, a via administrativa **fecha**. Resta apenas a judicial, **mais longa e mais cara**. Por isso a análise **precisa acontecer agora**.",
        cta: "Mandar Mensagem Rápida Agora",
    },
    steps: {
        title: "Processo Imediato em Apenas 3 Passos",
        items: [
            { n: "01", t: "Você envia", d: "Manda o resultado da heteroidentificação e o edital pelo WhatsApp. Pode ser print, PDF ou foto.", Icon: Send },
            { n: "02", t: "Analisamos", d: "O Dr. Marcelo analisa pessoalmente o caso: edital, motivação da banca, prazo e viabilidade do recurso.", Icon: Search },
            { n: "03", t: "Você decide", d: "Recebe a orientação técnica e decide como prosseguir. Sem compromisso na primeira análise.", Icon: Gavel },
        ],
        cta: "Mandar a Primeira MSG Agora",
    },
    faq: [
        { q: "Tem custo essa primeira conversa?", a: "**Não.** A análise inicial do seu caso (edital, resultado e prazo) é feita **sem custo**. Se houver fundamento para recurso e você quiser contratar, apresentamos os honorários nesse momento." },
        { q: "E se não houver fundamento para recurso?", a: "Informamos isso claramente, **sem enrolação**. Não cobramos para dizer que o caso não tem viabilidade. Preferimos ser **diretos** do que gerar expectativa falsa." },
        { q: "A conversa é protegida por sigilo?", a: "**Sim.** Todo contato está protegido pelo **sigilo profissional** da advocacia. Nenhuma informação é compartilhada." },
        { q: "A atuação abrange candidatos de qualquer estado?", a: "**Sim.** O atendimento é **100% online e nacional**. Já atuamos em concursos federais e estaduais em todo o Brasil." },
    ],
    wa: "Olá, fui reprovado na heteroidentificação hoje. Ainda dá tempo de recorrer?",
};

// ============================================================================
// RENDER BOLD — converte **texto** em <strong>
// ============================================================================
function renderBold(text: string): React.ReactNode {
    return text.split(/\*\*(.*?)\*\*/g).map((part, i) =>
        i % 2 === 1
            ? <strong key={i} style={{ color: "rgba(255,255,255,0.98)", fontWeight: 700 }}>{part}</strong>
            : part
    );
}

// ============================================================================
// GRAIN OVERLAY
// ============================================================================
function GrainOverlay() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[1]"
            style={{
                backgroundImage: GRAIN_URL,
                backgroundRepeat: "repeat",
                backgroundSize: "320px 320px",
                opacity: 0.032,
                mixBlendMode: "overlay",
            }}
        />
    );
}

// ============================================================================
// DIVISOR DOURADO
// ============================================================================
function GoldDivider() {
    return (
        <div className="flex items-center justify-center gap-3 py-1" aria-hidden="true">
            <div className="h-px flex-1 max-w-[120px]" style={{ background: `linear-gradient(to right, transparent, ${C.gold})`, opacity: 0.35 }} />
            <div className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: C.gold, opacity: 0.6 }} />
            <div className="h-px flex-1 max-w-[120px]" style={{ background: `linear-gradient(to left, transparent, ${C.gold})`, opacity: 0.35 }} />
        </div>
    );
}

// ============================================================================
// LABEL DE SEÇÃO
// ============================================================================
function SectionLabel({ children }: { children: string }) {
    return (
        <p className="text-[10px] md:text-xs uppercase tracking-[0.22em] text-center mb-3 font-semibold" style={{ color: C.gold }}>
            {children}
        </p>
    );
}

// ============================================================================
// CTA BUTTON — dark gold border
// ============================================================================
function Cta({ text, full = false }: { text: string; full?: boolean }) {
    return (
        <a
            href={getDirectWhatsAppLink(D.wa)}
            onClick={trackWhatsAppClick}
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
// FAQ ITEM (fechado por padrão)
// ============================================================================
function FaqItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div style={{ borderColor: "rgba(255,255,255,0.07)" }} className="border-b last:border-0 px-1">
            <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-6 text-left group">
                <span style={{ color: C.white }} className="font-bold text-base md:text-lg pr-4 group-hover:brightness-125 transition-all">
                    {q}
                </span>
                <ChevronDown style={{ color: C.gold }} className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
                <div style={{ color: C.gray2 }} className="pb-6 leading-relaxed text-sm md:text-base">
                    {renderBold(a)}
                </div>
            )}
        </div>
    );
}

// ============================================================================
// PROVA SOCIAL
// ============================================================================
function ProvasSocial() {
    const depoimentos = [
        {
            nome: "Mariana Souza · Concurso Federal · Brasília/DF",
            texto: "Fui eliminada na heteroidentificação do CNU depois de anos estudando. O Dr. Marcelo analisou meu caso em horas e identificou falha procedimental da banca. Consegui liminar e retornei ao certame.",
        },
        {
            nome: "Rafael Oliveira · Concurso Estadual · Belo Horizonte/MG",
            texto: "A motivação da banca era genérica, três linhas apenas. Com o recurso bem fundamentado, a eliminação foi revertida administrativamente. Hoje estou no cargo.",
        },
        {
            nome: "Camila Andrade · Concurso Cebraspe · São Paulo/SP",
            texto: "Achei que não tinha mais saída. O atendimento foi imediato e o Dr. Marcelo explicou tecnicamente por que minha reprovação tinha base para contestação. Recomendo a qualquer candidato nessa situação.",
        },
    ];

    return (
        <section className="py-16 md:py-28 relative overflow-hidden" style={{ backgroundColor: C.bg2 }}>
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: "url('/texture-juridica.png')", backgroundRepeat: "repeat", backgroundSize: "1200px 800px", opacity: 0.03 }} />
            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto">
                    <SectionLabel>Depoimentos</SectionLabel>
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-2" style={{ color: C.white, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                        Candidatos que contestaram a eliminação injusta
                    </h2>
                    <GoldDivider />
                    <div className="grid md:grid-cols-3 gap-5 mt-10">
                        {depoimentos.map((dep, i) => (
                            <div key={i} className="rounded-2xl p-6 flex flex-col relative overflow-hidden"
                                style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}>
                                <span aria-hidden="true" className="absolute top-3 right-4 text-5xl leading-none font-serif select-none"
                                    style={{ color: C.gold, opacity: 0.12 }}>&rdquo;</span>
                                <p className="text-sm md:text-base leading-relaxed mb-5 flex-1 relative z-10" style={{ color: C.gray2, fontStyle: "italic" }}>
                                    &ldquo;{dep.texto}&rdquo;
                                </p>
                                <div className="h-px mb-4" style={{ background: `linear-gradient(to right, ${C.gold}, transparent)`, opacity: 0.3 }} />
                                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: C.gold }}>{dep.nome}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
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
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.opacity = "1";
                    el.style.transform = "translateY(0)";
                    observer.unobserve(el);
                }
            },
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
            opacity: 0,
            transform: "translateY(24px)",
            transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        }}>
            {children}
        </div>
    );
}

// ============================================================================
// VIDEO SECTION
// ============================================================================
function VideoSection({ youtubeId }: { youtubeId: string }) {
    return (
        <section className="py-16 md:py-28" style={{ backgroundColor: C.bg1 }}>
            <div className="max-w-[720px] mx-auto px-6">
                <SectionLabel>Mensagem do Especialista</SectionLabel>
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 leading-tight" style={{ color: C.white, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                    Entenda em 2 minutos por que você ainda pode contestar.
                </h2>
                <GoldDivider />
                <div className="relative w-full rounded-2xl overflow-hidden mt-10"
                    style={{ boxShadow: "0 12px 60px rgba(0,0,0,0.65)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <LiteYouTubeEmbed id={youtubeId} title="Vídeo de Análise da Situação" poster="maxresdefault" wrapperClass="yt-lite" />
                </div>
                <div className="flex justify-center mt-8">
                    <Cta text="Quero Analisar Meu Caso Agora" />
                </div>
            </div>
        </section>
    );
}

// ============================================================================
// PAGE
// ============================================================================
export default function ReprovadoPage() {
    return (
        <main style={{ backgroundColor: C.bg1, color: C.white }}>
            <GrainOverlay />

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* HERO                                                         */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="relative flex items-center overflow-hidden py-14 md:py-28 lg:py-36" style={{ backgroundColor: C.bg1 }}>
                <div className="absolute inset-0 z-0 select-none">
                    <div className="absolute inset-0" style={{ backgroundImage: "url('/texture-pedra.png')", backgroundSize: "cover", backgroundPosition: "top center", opacity: 0.06 }} />
                    <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,162,39,0.05) 0%, transparent 70%)` }} />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${C.bg1} 0%, transparent 25%, transparent 75%, ${C.bg1} 100%)` }} />
                    <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, ${C.bg1} 100%)` }} />
                </div>

                <Container className="relative z-10 w-full px-4 md:px-6">
                    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

                        {/* Eyebrow badge urgência */}
                        <div className="inline-flex items-center gap-3 mb-6 md:mb-8 px-4 py-2 rounded-full"
                            style={{ backgroundColor: C.redBg, border: `1px solid ${C.redBorder}` }}>
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
                            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: "rgba(255,180,180,0.9)" }}>
                                {D.hero.badge}
                            </span>
                        </div>

                        {/* H1 com hierarquia */}
                        <h1 className="mb-5 md:mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                            <span className="block text-[clamp(1.4rem,5.5vw,2.2rem)] font-medium italic leading-[1.25] tracking-tight" style={{ color: C.gray1, opacity: 0.85 }}>
                                {D.hero.h1_1}
                            </span>
                            <span className="block text-[clamp(1.8rem,7vw,3.6rem)] font-bold leading-[1.05] tracking-tight mt-1" style={{ color: C.gold }}>
                                {D.hero.h1_2}
                            </span>
                        </h1>

                        <div className="h-px w-16 mb-5 mx-auto" style={{ background: `linear-gradient(90deg, transparent, rgba(201,162,39,0.3), transparent)` }} />

                        <p className="text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-[44ch]" style={{ color: C.gray2 }}>
                            {renderBold(D.hero.sub)}
                        </p>

                        <div className="w-full max-w-sm flex flex-col items-center gap-3">
                            <Cta text={D.hero.cta} full />
                            <p className="text-[11px] md:text-xs font-medium" style={{ color: C.gray3 }}>
                                <Lock className="w-3 h-3 inline mr-1 mb-0.5" />
                                Sigiloso · Sem compromisso · Resposta rápida
                            </p>
                        </div>

                        {/* Credencial inline */}
                        <div className="flex items-center gap-2.5 mt-8 px-4 py-2 rounded-full"
                            style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                            <Image src="/images/marcelo/marcelo-sem-fundo-.png" alt="Dr. Marcelo Colen" width={24} height={24} className="rounded-full object-cover w-6 h-6" />
                            <span className="text-[11px] md:text-xs uppercase tracking-wider font-semibold" style={{ color: C.gray2 }}>
                                Dr. Marcelo Colen · Mestre UFMG · OAB/MG
                            </span>
                        </div>

                    </div>
                </Container>
                <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, transparent, rgba(201,162,39,0.2), transparent)` }} />
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* VÍDEO                                                        */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <Reveal><VideoSection youtubeId="jAiQi4CgMN0" /></Reveal>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* PROVA SOCIAL                                                 */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <Reveal><ProvasSocial /></Reveal>

            {/* CTA intermediário */}
            <section className="py-8 md:py-12" style={{ backgroundColor: C.bg1 }}>
                <Container>
                    <div className="flex justify-center">
                        <Cta text="Quero Analisar Meu Caso" />
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* O QUE ANALISAMOS                                             */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-16 md:py-28 relative overflow-hidden" style={{ backgroundColor: C.bg2 }}>
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: GRAIN_URL, backgroundRepeat: "repeat", backgroundSize: "320px 320px", opacity: 0.025 }} />
                <Container className="relative z-10">
                    <div className="max-w-2xl mx-auto">
                        <div className="flex flex-col items-center justify-center gap-2 mb-2 text-center">
                            <FileText className="w-9 h-9" style={{ color: C.gold, opacity: 0.85 }} />
                            <SectionLabel>Análise técnica</SectionLabel>
                            <h2 className="text-2xl md:text-4xl font-bold px-4" style={{ color: C.white, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                                {D.analiseCaso.title}
                            </h2>
                        </div>
                        <GoldDivider />
                        <div className="space-y-3 mt-8 mb-10">
                            {D.analiseCaso.items.map((item, i) => (
                                <Reveal key={i} delay={i * 0.08}>
                                    <div className="flex items-center gap-4 rounded-xl p-4 transition-colors"
                                        style={{ border: "1px solid rgba(201,162,39,0.15)", backgroundColor: C.goldSoft, boxShadow: "0 2px 10px rgba(0,0,0,0.15)" }}>
                                        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs"
                                            style={{ backgroundColor: C.gold, color: C.bg1 }}>✓</div>
                                        <p className="font-medium text-sm md:text-base" style={{ color: C.gray1 }}>{item}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                        <div className="flex justify-center">
                            <Cta text={D.analiseCaso.cta} />
                        </div>
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* URGÊNCIA                                                     */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-16 md:py-28 relative overflow-hidden"
                style={{ backgroundColor: "#0B1730", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: "url('/texture-juridica.png')", backgroundRepeat: "repeat", backgroundSize: "1200px 800px", opacity: 0.04 }} />
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at center, rgba(239,68,68,0.04) 0%, transparent 70%)" }} />
                <Container className="relative z-10">
                    <div className="max-w-2xl mx-auto text-center px-4">
                        <Clock className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-6" style={{ color: C.gold }} />
                        <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: C.white, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                            {D.urg.title}
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed mb-8 font-medium" style={{ color: C.gray1 }}>
                            {renderBold(D.urg.text)}
                        </p>
                        <Cta text={D.urg.cta} />
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* COMO FUNCIONA                                                */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-16 md:py-28 relative overflow-hidden" style={{ backgroundColor: C.bg1 }}>
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: "url('/texture-pedra.png')", backgroundSize: "cover", backgroundPosition: "center bottom", opacity: 0.03 }} />
                <Container className="relative z-10">
                    <SectionLabel>Passo a passo</SectionLabel>
                    <h2 className="text-2xl md:text-4xl font-bold text-center mb-2 px-4" style={{ color: C.white, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                        {D.steps.title}
                    </h2>
                    <GoldDivider />
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12 mb-10">
                        {D.steps.items.map((step, i) => (
                            <Reveal key={step.n} delay={i * 0.12}>
                                <div className="relative rounded-2xl p-6 text-center"
                                    style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 8px 28px rgba(0,0,0,0.2)" }}>
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center font-extrabold text-sm"
                                        style={{ backgroundColor: C.gold, color: C.bg1, boxShadow: "0 0 16px rgba(201,162,39,0.4)" }}>
                                        {step.n}
                                    </div>
                                    <step.Icon className="w-8 h-8 mx-auto mb-4 mt-4" style={{ color: C.gold, opacity: 0.85 }} />
                                    <h3 className="text-lg font-bold mb-2" style={{ color: C.white }}>{step.t}</h3>
                                    <p className="text-sm leading-relaxed" style={{ color: C.gray2 }}>{renderBold(step.d)}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <Cta text={D.steps.cta} />
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* DR. MARCELO                                                  */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <DrMarceloSection />

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* FAQ                                                          */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-16 md:py-28 relative overflow-hidden" style={{ backgroundColor: C.bg1 }}>
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: "url('/texture-juridica.png')", backgroundRepeat: "repeat", backgroundSize: "1200px 800px", opacity: 0.025 }} />
                <Container className="relative z-10">
                    <div className="max-w-2xl mx-auto">
                        <SectionLabel>Tire suas dúvidas</SectionLabel>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center" style={{ color: C.white, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                            Dúvidas Frequentes
                        </h2>
                        <GoldDivider />
                        <div className="rounded-2xl p-2 md:p-6 mt-8"
                            style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 8px 28px rgba(0,0,0,0.2)" }}>
                            {D.faq.map((item, i) => (
                                <FaqItem key={i} q={item.q} a={item.a} />
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* CTA FINAL                                                    */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-14 relative overflow-hidden"
                style={{ backgroundColor: C.bg2, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: "url('/texture-pedra.png')", backgroundSize: "cover", backgroundPosition: "bottom center", opacity: 0.035 }} />
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at center bottom, rgba(201,162,39,0.04) 0%, transparent 65%)" }} />
                <Container className="relative z-10">
                    <div className="max-w-lg mx-auto text-center">
                        <p className="text-xl md:text-2xl font-bold mb-3" style={{ color: C.white, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                            Não deixe o prazo passar.
                        </p>
                        <p className="text-sm md:text-base mb-8" style={{ color: C.gray2 }}>
                            Manda o resultado e o edital agora. A análise é feita em horas.
                        </p>
                        <div className="mb-6 p-6 rounded-2xl text-left"
                            style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}>
                            <div className="space-y-3 max-w-xs mx-auto">
                                {[
                                    "Print ou PDF do resultado da heteroidentificação",
                                    "Edital do concurso",
                                    "Prazo final para recurso (data e horário)",
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3 items-center">
                                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                                            style={{ backgroundColor: C.gold, color: C.bg1 }}>
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span className="text-sm md:text-base font-medium" style={{ color: C.gray1 }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Cta text="Falar com Dr. Marcelo Agora" full />
                        <p className="text-xs mt-6 italic" style={{ color: C.gray3 }}>{D.hero.disclaimer}</p>
                        <p className="text-xs mt-2" style={{ color: C.gray3 }}>© 2026 Marcelo Colen Advogados · OAB/MG</p>
                    </div>
                </Container>
            </section>

        </main>
    );
}
