"use client";

import Image from "next/image";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import {
    MessageCircle,
    AlertTriangle,
    XCircle,
    ShieldCheck,
    Clock,
    Send,
    Search,
    Gavel,
    ChevronDown,
    Lock,
    Copy,
    Check,
    Zap,
    FileText
} from "lucide-react";
import { Container } from "@/components/layout";
import { getDirectWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";
import { useState, useEffect, useRef } from "react";
import { DrMarceloSection } from "@/components/sections/DrMarceloSection";
import { HeteroAtuacaoPublica } from "@/components/landing/hetero/hetero-atuacao-publica";
import { HeteroAtendimentoNacional } from "@/components/landing/hetero/hetero-atendimento-nacional";
import { HeteroInstagramPerfil } from "@/components/landing/hetero/hetero-instagram-perfil";
import { HeteroAvaliacoesGoogle } from "@/components/landing/hetero/hetero-avaliacoes-google";
import { HeteroDepoisDoIndeferimento } from "@/components/landing/hetero/hetero-depois-do-indeferimento";
import dynamic from "next/dynamic";
import { useQuiz } from "@/components/useQuiz";

const QualificationQuiz = dynamic(
    () => import("@/components/QualificationQuiz").then((m) => m.QualificationQuiz),
    { ssr: false }
);

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
    ctaHover: "#2BE673",
    ctaGlow: "rgba(37,211,102,0.25)",
    green: "#25D366",
    greenGlow: "rgba(37,211,102,0.25)",
};

// SVG grain texture como data URL
const GRAIN_URL = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='320' height='320' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`;

// ============================================================================
// DADOS LP 2: RECURSO HETEROIDENTIFICAÇÃO
// ============================================================================
const D = {
    hero: {
        h1_1: "Passou em tudo e foi reprovado na banca?",
        h1_2: "Você ainda pode recorrer.",
        sub: "A decisão da banca pode ter **falhas técnicas** que tornam o recurso viável. **Análise do seu caso em horas**, antes que o prazo feche.",
        cta: "Verificar se posso recorrer",
        disclaimer: "Cada caso é avaliado individualmente. Não fazemos promessa de resultado.",
    },
    erros: {
        title: "Falhas que podem tornar seu recurso viável",
        subtitle: "A banca precisa seguir regras. Quando não segue, o recurso tem fundamento.",
        items: [
            {
                titulo: "Motivação genérica",
                texto: "A decisão disse apenas que você 'não apresenta fenótipo pardo' sem detalhar quais características foram avaliadas. **Isso é insuficiente e contestável.**",
            },
            {
                titulo: "Análise superficial",
                texto: "A banca avaliou **apenas a cor da pele**, ignorando outros traços fenotípicos exigidos pelo edital como cabelo, traços faciais e contexto racial.",
            },
            {
                titulo: "Erro procedimental",
                texto: "Irregularidades na condução da avaliação: tempo insuficiente, composição irregular da comissão ou ausência de filmagem podem **invalidar o resultado**.",
            },
            {
                titulo: "Inconsistência com o edital",
                texto: "A comissão adotou **critérios diferentes dos previstos no edital**. O que não está no edital **não pode ser usado contra o candidato**.",
            },
        ],
    },
    urg: {
        title: "O Único Risco Real Agora é o Tempo.",
        text: "Em muitos concursos, o prazo de recurso administrativo é de apenas **2 a 5 dias corridos** após o resultado. Passado esse prazo, a via administrativa **fecha**. Resta apenas a judicial, **mais longa e mais cara**. Por isso a análise **precisa acontecer agora**.",
        cta: "Verificar Meu Prazo Agora",
    },
    steps: {
        title: "Como funciona a análise",
        items: [
            { n: "01", t: "Você envia agora", d: "Manda o resultado da heteroidentificação e o edital pelo WhatsApp. Print, PDF ou foto. Quanto mais rápido, melhor.", Icon: Send },
            { n: "02", t: "Análise em horas", d: "O Dr. Marcelo analisa pessoalmente: motivação da banca, falhas procedimentais, prazo disponível e viabilidade do recurso.", Icon: Search },
            { n: "03", t: "Você age informado", d: "Recebe orientação técnica clara sobre se vale recorrer e como. Sem enrolação, sem compromisso na primeira análise.", Icon: Gavel },
        ],
    },
    faq: [
        { q: "Tem custo essa primeira conversa?", a: "Não. A análise inicial do seu caso (edital, resultado e prazo) é feita sem custo. Se houver fundamento para recurso e você quiser contratar, apresentamos os honorários nesse momento." },
        { q: "E se não houver fundamento para recurso?", a: "Informamos isso claramente, sem enrolação. Não cobramos para dizer que o caso não tem viabilidade. Preferimos ser diretos do que gerar expectativa falsa." },
        { q: "A conversa é protegida por sigilo?", a: "Sim. Todo contato está protegido pelo sigilo profissional da advocacia. Nenhuma informação é compartilhada." },
        { q: "A atuação abrange candidatos de qualquer estado?", a: "Sim. O atendimento é 100% online e nacional. Já atuamos em concursos federais e estaduais em todo o Brasil." },
    ],
    wa: "Olá, fui indeferido na heteroidentificação e quero saber se posso recorrer. Vou enviar o resultado e o edital.",
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
// DIVISOR DOURADO ornamental entre seções
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
function Cta({ text, full = false, onOpenQuiz }: { text: string; full?: boolean; onOpenQuiz?: () => void; }) {
    return (
        <button
            onClick={onOpenQuiz}
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
        </button>
    );
}

// ============================================================================
// HERO CTA — botão discreto dourado
// ============================================================================
function HeroCta({ text, full = false, onOpenQuiz }: { text: string; full?: boolean; onOpenQuiz?: () => void }) {
    return (
        <button
            onClick={onOpenQuiz}
            style={{
                background: "linear-gradient(160deg, #1c0a0a 0%, #0a0a0a 55%, #0f0d00 100%)",
                border: "2px solid #c9a227",
                color: C.white,
                boxShadow: "0 0 28px rgba(201,162,39,0.18), 0 1px 0 rgba(201,162,39,0.12) inset",
            }}
            className={`group inline-flex items-center justify-center gap-2 font-semibold text-base md:text-lg px-8 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_40px_rgba(201,162,39,0.35)] hover:scale-[1.02] active:scale-[0.98] ${full ? "w-full" : ""}`}
        >
            {text}
            <ChevronDown className="w-4 h-4 rotate-[-90deg] opacity-60 group-hover:translate-x-0.5 transition-transform duration-200" />
        </button>
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
// PAGE
// ============================================================================
export default function RecursoHeteroidentificacaoPage() {
    const quiz = useQuiz();
    return (
        <main style={{ backgroundColor: C.bg1, color: C.white }}>
            <QualificationQuiz
                isOpen={quiz.isOpen}
                onClose={quiz.close}
                config={{ defaultWaMessage: D.wa, variant: "dark" }}
            />
            <GrainOverlay />

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* HERO                                                         */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="relative flex items-center overflow-hidden py-14 md:py-28 lg:py-36" style={{ backgroundColor: C.bg1 }}>
                {/* Fundo em camadas */}
                <div className="absolute inset-0 z-0 select-none">
                    {/* Ardósia sutil */}
                    {/* Gold sutil por cima */}
                    <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,162,39,0.05) 0%, transparent 70%)` }} />
                    {/* Fade nas bordas */}
                    <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${C.bg1} 0%, transparent 25%, transparent 75%, ${C.bg1} 100%)` }} />
                    <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, ${C.bg1} 100%)` }} />
                </div>

                <Container className="relative z-10 w-full px-4 md:px-6">
                    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

                        {/* Eyebrow com linhas douradas */}
                        <div className="flex items-center gap-3 mb-6 md:mb-8">
                            <div className="h-px w-8 md:w-12" style={{ background: `linear-gradient(90deg, transparent, ${C.gold})` }} />
                            <span className="text-[10px] md:text-xs uppercase tracking-[0.15em] font-semibold" style={{ color: C.gold }}>
                                Recurso Administrativo e Mandado de Segurança
                            </span>
                            <div className="h-px w-8 md:w-12" style={{ background: `linear-gradient(90deg, ${C.gold}, transparent)` }} />
                        </div>

                        {/* H1 com hierarquia */}
                        <h1 className="mb-5 md:mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                            <span className="block text-[clamp(1.4rem,5.5vw,2.2rem)] font-medium italic leading-[1.25] tracking-tight" style={{ color: C.gray1, opacity: 0.85 }}>
                                {D.hero.h1_1}
                            </span>
                            <span className="block text-[clamp(2rem,8vw,4rem)] font-bold leading-[1.05] tracking-tight uppercase mt-1" style={{ color: C.gold }}>
                                {D.hero.h1_2}
                            </span>
                        </h1>

                        {/* Linha fina de separação */}
                        <div className="h-px w-16 mb-5 md:mb-6 mx-auto" style={{ background: `linear-gradient(90deg, transparent, rgba(201,162,39,0.3), transparent)` }} />

                        {/* Subtítulo */}
                        <p className="text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-[42ch]" style={{ color: C.gray2 }}>
                            <strong style={{ color: C.gray1 }}>A decisão da banca pode ter falhas técnicas que tornam o recurso viável.</strong>{" "}
                            Análise do seu caso em horas, antes que o prazo feche.
                        </p>

                        {/* CTA */}
                        <div className="w-full max-w-sm flex flex-col items-center gap-3">
                            <HeroCta text={D.hero.cta} full onOpenQuiz={quiz.open} />
                            <p className="text-[11px] md:text-xs font-medium" style={{ color: C.gray3 }}>
                                <Lock className="w-3 h-3 inline mr-1 mb-0.5" />
                                Sigiloso · Sem compromisso · Resposta rápida
                            </p>
                        </div>

                        {/* Credencial inline com avatar */}
                        <div className="flex items-center gap-2.5 mt-8 md:mt-10 px-4 py-2 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                            <Image src="/images/marcelo/marcelo-sem-fundo-.png" alt="Dr. Marcelo Colen" width={24} height={24} className="rounded-full object-cover w-6 h-6" />
                            <span className="text-[11px] md:text-xs uppercase tracking-wider font-semibold" style={{ color: C.gray2 }}>
                                Dr. Marcelo Colen · Especialista · Mestre UFMG
                            </span>
                        </div>

                    </div>
                </Container>
                <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, transparent, rgba(201,162,39,0.2), transparent)` }} />
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* VÍDEO                                                        */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <Reveal><VideoSection youtubeId="jAiQi4CgMN0" onOpenQuiz={quiz.open} /></Reveal>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* DEPOIS DO INDEFERIMENTO — linha do tempo em 4 etapas          */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <HeteroDepoisDoIndeferimento />

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* ERROS DA BANCA                                               */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section
                className="py-16 md:py-28 relative overflow-hidden"
                style={{
                    backgroundColor: C.bg1,
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
            >
                {/* Símbolos jurídicos sutil */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: "url('/texture-juridica.webp')", backgroundRepeat: "repeat", backgroundSize: "1200px 800px", opacity: 0.035 }}
                />
                {/* glow central */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at center, rgba(201,162,39,0.04) 0%, transparent 70%)" }}
                />
                <Container className="relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-10 px-4">
                            <SectionLabel>Por que você pode recorrer</SectionLabel>
                            <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: C.white, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                                {D.erros.title}
                            </h2>
                            <GoldDivider />
                            <p className="text-sm md:text-base mt-4" style={{ color: C.gray2 }}>
                                {D.erros.subtitle}
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 mb-10">
                            {D.erros.items.map((item, i) => (
                                <Reveal key={i} delay={i * 0.1}>
                                    <div className="rounded-2xl p-5 flex gap-4" style={{ backgroundColor: C.redBg, border: `1px solid ${C.redBorder}` }}>
                                        <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: C.red }} />
                                        <div>
                                            <p className="font-bold text-sm mb-1" style={{ color: C.white }}>{item.titulo}</p>
                                            <p className="text-xs md:text-sm leading-relaxed" style={{ color: C.gray2 }}>{renderBold(item.texto)}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                        <div className="text-center">
                            <Cta text="Analisar Se Meu Caso Tem Fundamento" onOpenQuiz={quiz.open} />
                        </div>
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* DR. MARCELO — quem vai analisar o caso                       */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <DrMarceloSection />

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* PROVA SOCIAL — avaliações do Google, logo após o Dr. Marcelo  */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <Reveal><HeteroAvaliacoesGoogle /></Reveal>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* ATUAÇÃO PÚBLICA — prova externa, só do tema da LP             */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <HeteroAtuacaoPublica />

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* INSTAGRAM — perfil em miniatura, prova de audiência           */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <HeteroInstagramPerfil />

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* ATENDIMENTO NACIONAL — mapa, escritório em BH, atendimento    */}
            {/* online para todos os estados. O botão desta seção faz as      */}
            {/* vezes do CTA intermediário que ficava aqui.                  */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <HeteroAtendimentoNacional onOpenQuiz={quiz.open} />

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* POR QUE AGIR RÁPIDO                                         */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section
                className="py-16 md:py-28 relative overflow-hidden"
                style={{
                    backgroundColor: "#0B1730",
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
            >
                <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at center, rgba(239,68,68,0.04) 0%, transparent 70%)" }}
                />
                {/* Símbolos jurídicos */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: "url('/texture-juridica.webp')", backgroundRepeat: "repeat", backgroundSize: "1200px 800px", opacity: 0.04 }}
                />
                <Container className="relative z-10">
                    <div className="max-w-2xl mx-auto text-center px-4">
                        <Clock className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-6" style={{ color: C.gold }} />
                        <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: C.white, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                            {D.urg.title}
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed mb-8 font-medium" style={{ color: C.gray1 }}>
                            {renderBold(D.urg.text)}
                        </p>
                        <Cta text={D.urg.cta} onOpenQuiz={quiz.open} />
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* COMO FUNCIONA                                                */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-16 md:py-28 relative overflow-hidden" style={{ backgroundColor: C.bg1 }}>
                {/* Ardósia sutil */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: "url('/texture-pedra.webp')", backgroundSize: "cover", backgroundPosition: "center bottom", opacity: 0.03 }}
                />
                <Container className="relative z-10">
                    <SectionLabel>Passo a passo</SectionLabel>
                    <h2 className="text-2xl md:text-4xl font-bold text-center mb-2 px-4" style={{ color: C.white, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                        {D.steps.title}
                    </h2>
                    <GoldDivider />

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10 mt-12">
                        {D.steps.items.map((step, i) => (
                            <Reveal key={step.n} delay={i * 0.12}>
                                <div
                                    className="relative rounded-2xl p-6 text-center transition-all"
                                    style={{
                                        backgroundColor: "rgba(255,255,255,0.03)",
                                        border: "1px solid rgba(255,255,255,0.07)",
                                        boxShadow: "0 8px 28px rgba(0,0,0,0.2)",
                                    }}
                                >
                                    <div
                                        className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center font-extrabold text-sm"
                                        style={{ backgroundColor: C.gold, color: C.bg1, boxShadow: `0 0 16px rgba(201,162,39,0.4)` }}
                                    >
                                        {step.n}
                                    </div>
                                    <step.Icon className="w-8 h-8 mx-auto mb-4 mt-4" style={{ color: C.gold, opacity: 0.85 }} />
                                    <h3 className="text-lg font-bold mb-2" style={{ color: C.white }}>{step.t}</h3>
                                    <p className="text-sm leading-relaxed" style={{ color: C.gray2 }}>{renderBold(step.d)}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* FAQ                                                          */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-16 md:py-28 relative overflow-hidden" style={{ backgroundColor: C.bg1 }}>
                {/* Símbolos jurídicos sutil */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: "url('/texture-juridica.webp')", backgroundRepeat: "repeat", backgroundSize: "1200px 800px", opacity: 0.025 }}
                />
                <Container className="relative z-10">
                    <div className="max-w-2xl mx-auto">
                        <SectionLabel>Tire suas dúvidas</SectionLabel>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center" style={{ color: C.white, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Perguntas Frequentes</h2>
                        <GoldDivider />
                        <div
                            className="rounded-2xl p-2 md:p-6 mt-8"
                            style={{
                                backgroundColor: "rgba(255,255,255,0.02)",
                                border: "1px solid rgba(255,255,255,0.07)",
                                boxShadow: "0 8px 28px rgba(0,0,0,0.2)",
                            }}
                        >
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
            <section
                className="py-14 relative overflow-hidden"
                style={{ backgroundColor: C.bg2, borderTop: "1px solid rgba(255,255,255,0.05)" }}
            >
                {/* Ardósia sutil */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: "url('/texture-pedra.webp')", backgroundSize: "cover", backgroundPosition: "bottom center", opacity: 0.035 }}
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at center bottom, rgba(201,162,39,0.04) 0%, transparent 65%)" }}
                />
                <Container className="relative z-10">
                    <div className="max-w-lg mx-auto text-center">
                        <p className="text-xl md:text-2xl font-bold mb-3" style={{ color: C.white, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                            O prazo não espera.
                        </p>
                        <p className="text-sm md:text-base mb-8" style={{ color: C.gray2 }}>
                            Manda o resultado agora. A análise do seu caso é feita em horas.
                        </p>

                        <div
                            className="mb-6 p-6 rounded-2xl text-left"
                            style={{
                                backgroundColor: "rgba(255,255,255,0.03)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                            }}
                        >
                            <div className="space-y-3 max-w-xs mx-auto">
                                {[
                                    "Print ou PDF do resultado da heteroidentificação",
                                    "Edital do concurso",
                                    "Prazo final para recurso (data e horário)",
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3 items-center">
                                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: C.gold, color: C.bg1 }}>
                                            <Check className="w-3 h-3 font-bold" />
                                        </div>
                                        <span className="text-sm md:text-base font-medium" style={{ color: C.gray1 }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div
                            className="mb-6 p-4 rounded-xl"
                            style={{
                                backgroundColor: "rgba(255,255,255,0.03)",
                                border: "1px solid rgba(255,255,255,0.07)",
                            }}
                        >
                            <p className="text-xs text-center mb-2" style={{ color: C.gray3 }}>
                                Não sabe o que escrever? Copie e envie:
                            </p>
                            <p className="text-sm font-bold italic text-center" style={{ color: C.gray2 }}>
                                &ldquo;Olá, fui indeferido na heteroidentificação e quero saber se posso recorrer. Vou enviar o resultado e o edital.&rdquo;
                            </p>
                        </div>

                        <Cta text="Quero Saber Se Posso Recorrer" full onOpenQuiz={quiz.open} />
                        <p className="text-xs mt-6 italic" style={{ color: C.gray3 }}>
                            {D.hero.disclaimer}
                        </p>
                        <p className="text-xs mt-2" style={{ color: C.gray3 }}>
                            © 2026 Marcelo Colen Advogados
                        </p>
                    </div>
                </Container>
            </section>
        </main>
    );
}

// ============================================================================
// VIDEO SECTION
// ============================================================================
// Botão de play próprio, no dourado da LP, no lugar do botão cinza padrão do
// YouTube. A biblioteca troca a classe do botão por playerClass, então o
// estilo inteiro mora aqui, inclusive sumir quando o vídeo começa.
const CSS_PLAY = `
.mc-play { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 76px; height: 76px; border: 0; padding: 0; border-radius: 9999px; cursor: pointer; z-index: 2; background: #c9a227; box-shadow: 0 12px 32px rgba(0,0,0,0.5), 0 0 0 8px rgba(201,162,39,0.16); transition: transform 0.2s ease, background-color 0.2s ease; }
.mc-play::before { content: ""; position: absolute; top: 50%; left: 54%; transform: translate(-50%, -50%); border-style: solid; border-width: 12px 0 12px 20px; border-color: transparent transparent transparent #0a0a0a; }
.mc-play::after { content: ""; position: absolute; inset: -8px; border-radius: inherit; border: 1.5px solid rgba(201,162,39,0.6); animation: mc-play-pulso 2.8s ease-out infinite; }
.yt-lite:hover > .mc-play { transform: translate(-50%, -50%) scale(1.06); background: #d9b740; }
.mc-play:focus-visible { outline: 2px solid #ffffff; outline-offset: 6px; }
.yt-lite.lyt-activated > .mc-play { opacity: 0; pointer-events: none; }
@keyframes mc-play-pulso { from { transform: scale(1); opacity: 0.8; } to { transform: scale(1.45); opacity: 0; } }
@media (max-width: 767px) { .mc-play { width: 62px; height: 62px; } .mc-play::before { border-width: 10px 0 10px 16px; } }
@media (prefers-reduced-motion: reduce) { .mc-play::after { animation: none; opacity: 0.4; } }
`;

function VideoSection({ youtubeId, mp4Src, onOpenQuiz }: { youtubeId?: string; mp4Src?: string; onOpenQuiz?: () => void } = {}) {
    const YOUTUBE_ID = youtubeId ?? "COLE_O_ID_AQUI";
    const MP4_SRC = mp4Src ?? "";
    // Nome e duração ficam sobre a capa só até o vídeo começar.
    const [tocando, setTocando] = useState(false);

    return (
        <section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: C.bg1 }}>
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 60% 45% at 50% 62%, rgba(201,162,39,0.07) 0%, transparent 70%)" }}
            />
            <div className="relative max-w-[880px] mx-auto px-4 md:px-6">
                <SectionLabel>Mensagem do Especialista</SectionLabel>
                {/* Mesmo jogo de dois tons do hero: abertura leve, conclusão em dourado. */}
                <h2 className="text-center mb-3 text-balance" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                    <span className="block text-xl md:text-2xl font-medium italic" style={{ color: C.gray1, opacity: 0.85 }}>
                        Entenda em 2 minutos
                    </span>
                    <span className="block text-[1.75rem] md:text-[2.5rem] font-bold leading-[1.1] mt-1" style={{ color: C.gold }}>
                        por que você ainda pode recorrer.
                    </span>
                </h2>
                <GoldDivider />

                {/* Moldura: fio dourado em degradê em volta do vídeo. */}
                <div
                    className="mt-10 rounded-[20px] p-px"
                    style={{
                        background: "linear-gradient(135deg, rgba(201,162,39,0.65), rgba(201,162,39,0.08) 40%, rgba(201,162,39,0.08) 60%, rgba(201,162,39,0.5))",
                        boxShadow: "0 24px 70px rgba(0,0,0,0.7)",
                    }}
                >
                    <div className="relative rounded-[19px] overflow-hidden" style={{ backgroundColor: "#000" }}>
                        {MP4_SRC ? (
                            <video src={MP4_SRC} controls playsInline preload="none" className="w-full object-cover" />
                        ) : (
                            <LiteYouTubeEmbed
                                id={YOUTUBE_ID}
                                title="Dr. Marcelo Colen explica por que você ainda pode recorrer"
                                announce="Assistir:"
                                poster="maxresdefault"
                                webp
                                lazyLoad
                                noscriptFallback={false}
                                wrapperClass="yt-lite"
                                playerClass="mc-play"
                                onIframeAdded={() => setTocando(true)}
                            />
                        )}
                        {!MP4_SRC && !tocando && (
                            <>
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-0"
                                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 40%)" }}
                                />
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute left-3 bottom-3 md:left-5 md:bottom-5 pl-3"
                                    style={{ borderLeft: `2px solid ${C.gold}` }}
                                >
                                    <span className="block text-sm md:text-base font-semibold leading-tight" style={{ color: C.white }}>
                                        Dr. Marcelo Colen
                                    </span>
                                    <span className="block text-[11px] md:text-xs mt-0.5" style={{ color: C.gray2 }}>
                                        Mestre em Direito pela UFMG
                                    </span>
                                </div>
                                {/* Duração real do vídeo no YouTube (85 s). */}
                                <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute right-3 bottom-3 md:right-5 md:bottom-5 rounded-full px-2.5 py-1 text-xs font-semibold tabular-nums"
                                    style={{ backgroundColor: "rgba(0,0,0,0.65)", color: C.white }}
                                >
                                    1:25
                                </span>
                            </>
                        )}
                    </div>
                </div>

                <div className="flex flex-col items-center gap-3 mt-9">
                    <Cta text="Quero Analisar Meu Caso Agora" onOpenQuiz={onOpenQuiz} />
                    <p className="text-[11px] md:text-xs font-medium" style={{ color: C.gray3 }}>
                        <Lock className="w-3 h-3 inline mr-1 mb-0.5" />
                        Sigiloso · Sem compromisso · Resposta rápida
                    </p>
                </div>
            </div>
            <style>{CSS_PLAY}</style>
        </section>
    );
}
