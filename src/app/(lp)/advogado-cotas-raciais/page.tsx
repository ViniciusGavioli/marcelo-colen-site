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
    Scale,
    FileText
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
    ctaHover: "#2BE673",
    ctaGlow: "rgba(37,211,102,0.25)",
    green: "#25D366",
    greenGlow: "rgba(37,211,102,0.25)",
};

// SVG grain texture como data URL
const GRAIN_URL = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='320' height='320' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`;

// ============================================================================
// DADOS LP 1: ADVOGADO ESPECIALISTA
// ============================================================================
const D = {
    hero: {
        badge: "⚠️ Prazo de recurso: entre 2 e 5 dias a partir do resultado. Cada hora conta.",
        h1_1: "Passou em tudo e foi reprovado na banca?",
        h1_2: "Isso tem contestação.",
        sub: "Se a banca te indeferiu, **pode ter cometido um erro**. Esse erro **pode ser contestado** antes do prazo acabar.",
        credentials: "Dr. Marcelo Colen · Mestre em Direito pela UFMG · Secretário da Comissão Nacional de Promoção da Igualdade da OAB Federal · Diretor de Diversidade da OAB/MG",
        cta: "Ver se meu caso tem recurso",
        ctaLine1: "Você pode enviar o resultado da heteroidentificação agora mesmo.",
        ctaLine2: "Primeira análise gratuita e sigilosa.",
        disclaimer: "Cada caso é avaliado individualmente. Não fazemos promessa de resultado.",
    },
    analiseCaso: {
        title: "O que analisamos no seu caso",
        desc: "Avaliação do edital, da **motivação da banca** e da **viabilidade do recurso**.",
        items: [
            "Edital do concurso",
            "Resultado da heteroidentificação",
            "Fundamentação apresentada pela banca",
            "Prazo recursal disponível",
        ]
    },
    urg: {
        title: "Por Que Agir Rápido?",
        text: "Em muitos concursos, o prazo de recurso administrativo é de apenas **2 a 5 dias corridos** após o resultado. Passado esse prazo, a via administrativa **fecha**. Resta apenas a judicial, **mais longa e mais cara**. Por isso a análise **precisa acontecer agora**.",
        cta: "Enviar Meu Caso no WhatsApp",
    },
    steps: {
        title: "Como Funciona o Atendimento",
        items: [
            { n: "01", t: "Você envia", d: "Manda o resultado e o edital pelo WhatsApp. **Print, PDF ou foto.** Quanto mais rápido, melhor.", Icon: Send },
            { n: "02", t: "Analisamos", d: "O Dr. Marcelo analisa pessoalmente: edital, motivação da banca, prazo e **viabilidade do recurso**.", Icon: Search },
            { n: "03", t: "Você decide", d: "Recebe a orientação técnica e decide como prosseguir. **Sem compromisso** na primeira análise.", Icon: Gavel },
        ],
        cta: "Enviar Meu Caso no WhatsApp",
    },
    faq: [
        { q: "Tem custo essa primeira conversa?", a: "**Não.** A análise inicial do seu caso (edital, resultado e prazo) é feita **sem custo**. Se houver fundamento para recurso e você quiser contratar, apresentamos os honorários nesse momento." },
        { q: "E se não houver fundamento para recurso?", a: "Informamos isso claramente, **sem enrolação**. Não cobramos para dizer que o caso não tem viabilidade. Preferimos ser **diretos** do que gerar expectativa falsa." },
        { q: "A conversa é protegida por sigilo?", a: "**Sim.** Todo contato está protegido pelo **sigilo profissional** da advocacia. Nenhuma informação é compartilhada." },
        { q: "A atuação abrange candidatos de qualquer estado?", a: "**Sim.** O atendimento é **100% online e nacional**. Já atuamos em concursos federais e estaduais em todo o Brasil." },
    ],
    wa: "Olá doutor, fui indeferido na heteroidentificação hoje. Posso te mandar meu resultado?",
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
// GRAIN OVERLAY — textura sutil em toda a página
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
// LABEL DE SEÇÃO — eyebrow text dourado
// ============================================================================
function SectionLabel({ children }: { children: string }) {
    return (
        <p className="text-[10px] md:text-xs uppercase tracking-[0.22em] text-center mb-3 font-semibold" style={{ color: C.gold }}>
            {children}
        </p>
    );
}

// ============================================================================
// CTA BUTTON — dark gold border (todas as seções)
// ============================================================================
function Cta({ text, full = false }: { text: string; full?: boolean; }) {
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
// HERO CTA — botão discreto dourado (hero, topo da página)
// ============================================================================
function HeroCta({ text, full = false }: { text: string; full?: boolean }) {
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
            {text}
            <ChevronDown className="w-4 h-4 rotate-[-90deg] opacity-60 group-hover:translate-x-0.5 transition-transform duration-200" />
        </a>
    );
}

// ============================================================================
// FAQ ITEM (aberto por padrão)
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
            texto: "Não sabia nem que dava pra recorrer. Ele me explicou tudo, resolveu rápido. Recomendo demais.",
        },
    ];

    return (
        <section
            className="py-14 md:py-20 relative overflow-hidden"
            style={{ backgroundColor: C.bg2 }}
        >
            {/* textura grain local */}
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: GRAIN_URL, backgroundRepeat: "repeat", backgroundSize: "320px 320px", opacity: 0.025 }}
            />
            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto">
                    <SectionLabel>Depoimentos</SectionLabel>
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-2" style={{ color: C.white, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                        Candidatos que contestaram a eliminação injusta
                    </h2>
                    <GoldDivider />
                    <div className="grid md:grid-cols-3 gap-5 mt-10">
                        {depoimentos.map((dep, i) => (
                            <div
                                key={i}
                                className="rounded-2xl p-6 flex flex-col relative overflow-hidden"
                                style={{
                                    backgroundColor: "rgba(255,255,255,0.03)",
                                    border: "1px solid rgba(255,255,255,0.07)",
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                                }}
                            >
                                {/* aspas decorativas */}
                                <span
                                    aria-hidden="true"
                                    className="absolute top-3 right-4 text-5xl leading-none font-serif select-none"
                                    style={{ color: C.gold, opacity: 0.12 }}
                                >&rdquo;</span>
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
        <div
            ref={ref}
            style={{
                opacity: 0,
                transform: "translateY(24px)",
                transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
            }}
        >
            {children}
        </div>
    );
}

// ============================================================================
// PAGE
// ============================================================================
export default function AdvogadoPage() {
    return (
        <main style={{ backgroundColor: C.bg1, color: C.white }}>
            <GrainOverlay />

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* HERO                                                         */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="relative flex items-center overflow-hidden py-14 md:py-28 lg:py-36" style={{ backgroundColor: C.bg1 }}>
                {/* Fundo em camadas */}
                <div className="absolute inset-0 z-0 select-none">
                    {/* Ardósia sutil */}
                    <div className="absolute inset-0" style={{ backgroundImage: "url('/texture-pedra.png')", backgroundSize: "cover", backgroundPosition: "top center", opacity: 0.06 }} />
                    <Image src="/images/hero-scales.png" alt="" fill className="object-cover opacity-[0.04]" priority aria-hidden="true" />
                    {/* Gold sutil por cima */}
                    <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,162,39,0.05) 0%, transparent 70%)` }} />
                    {/* Fade nas bordas para não vazar */}
                    <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${C.bg1} 0%, transparent 25%, transparent 75%, ${C.bg1} 100%)` }} />
                    <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, ${C.bg1} 100%)` }} />
                </div>

                <Container className="relative z-10 w-full px-4 md:px-6">
                    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

                        {/* Eyebrow com linhas douradas */}
                        <div className="flex items-center gap-3 mb-6 md:mb-8">
                            <div className="h-px w-8 md:w-12" style={{ background: `linear-gradient(90deg, transparent, ${C.gold})` }} />
                            <span className="text-[10px] md:text-xs uppercase tracking-[0.15em] font-semibold" style={{ color: C.gold }}>
                                Recurso Administrativo
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
                            {renderBold(D.hero.sub)}
                        </p>

                        {/* CTA */}
                        <div className="w-full max-w-sm flex flex-col items-center gap-3">
                            <HeroCta text={D.hero.cta} full />
                            <p className="text-[11px] md:text-xs font-medium" style={{ color: C.gray3 }}>
                                <Lock className="w-3 h-3 inline mr-1 mb-0.5" />
                                Sigiloso · Sem compromisso · Resposta rápida
                            </p>
                        </div>

                        {/* Credencial inline com avatar */}
                        <div className="flex items-center gap-2.5 mt-8 md:mt-10 px-4 py-2 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                            <Image src="/images/marcelo/marcelo-hero.jpg" alt="Dr. Marcelo Colen" width={24} height={24} className="rounded-full object-cover w-6 h-6" />
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
            {/* ISSO ACONTECEU COM VOCÊ?                                     */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-12 md:py-16 relative overflow-hidden" style={{ backgroundColor: C.bg2 }}>
                <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: GRAIN_URL, backgroundRepeat: "repeat", backgroundSize: "320px 320px", opacity: 0.025 }}
                />
                <Container className="relative z-10">
                    <div className="max-w-2xl mx-auto">
                        <SectionLabel>Reconhece essa situação?</SectionLabel>
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2" style={{ color: C.white, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                            Isso aconteceu com você?
                        </h2>
                        <GoldDivider />
                        <div className="space-y-3 mt-8 mb-10">
                            {[
                                "A banca disse 'não atende ao fenótipo' sem explicar o motivo.",
                                "A avaliação durou poucos minutos ou foi feita por vídeo.",
                                "Você sempre se identificou como pardo e foi pego de surpresa.",
                                "Está com medo de perder anos de estudo por uma análise subjetiva.",
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-4 rounded-xl p-4"
                                    style={{
                                        backgroundColor: C.goldSoft,
                                        border: "1px solid rgba(201,162,39,0.15)",
                                        boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                                    }}
                                >
                                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5" style={{ backgroundColor: C.gold, color: C.bg1 }}>✓</div>
                                    <p className="text-sm md:text-base font-medium" style={{ color: C.gray1 }}>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* PROVA SOCIAL                                                 */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <Reveal><ProvasSocial /></Reveal>

            {/* CTA intermediário após depoimentos */}
            <section className="py-8 md:py-12" style={{ backgroundColor: C.bg1 }}>
                <Container>
                    <div className="flex justify-center">
                        <Cta text="Quero Analisar Meu Caso" />
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* A BANCA ERRA                                                 */}
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
                    style={{ backgroundImage: "url('/texture-juridica.png')", backgroundRepeat: "repeat", backgroundSize: "1200px 800px", opacity: 0.035 }}
                />
                {/* glow central */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at center, rgba(201,162,39,0.04) 0%, transparent 70%)" }}
                />
                <Container className="relative z-10">
                    <div className="max-w-2xl mx-auto text-center px-4">
                        <SectionLabel>Por que você pode contestar</SectionLabel>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: C.white, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                            A Banca Erra. E Erra Muito.
                        </h2>
                        <GoldDivider />
                        <p className="text-base md:text-lg leading-relaxed mb-4 mt-8" style={{ color: C.gray1 }}>
                            O procedimento de heteroidentificação é subjetivo. Todos os dias, candidatos legítimos são eliminados por iluminação ruim, câmera de baixa qualidade ou despreparo dos avaliadores.
                        </p>
                        <p className="text-base md:text-lg leading-relaxed" style={{ color: C.gray2 }}>
                            Erros de procedimento podem fundamentar o recurso. Nós identificamos se houve falha e orientamos sua defesa técnica.
                        </p>
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* O QUE ANALISAMOS NO SEU CASO                                 */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-16 md:py-28 relative overflow-hidden" style={{ backgroundColor: C.bg2 }}>
                <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: GRAIN_URL, backgroundRepeat: "repeat", backgroundSize: "320px 320px", opacity: 0.025 }}
                />
                <Container className="relative z-10">
                    <div className="max-w-2xl mx-auto">
                        <div className="flex flex-col items-center justify-center gap-2 mb-2 text-center">
                            <Scale className="w-9 h-9" style={{ color: C.gold, opacity: 0.85 }} />
                            <SectionLabel>Análise técnica</SectionLabel>
                            <h2 className="text-2xl md:text-4xl font-bold px-4" style={{ color: C.white, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                                {D.analiseCaso.title}
                            </h2>
                        </div>
                        <GoldDivider />
                        <p className="text-sm md:text-base font-medium text-center mt-3 mb-8" style={{ color: C.gray2 }}>
                            {renderBold(D.analiseCaso.desc)}
                        </p>

                        <div className="space-y-3 mb-8">
                            {D.analiseCaso.items.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-white/[0.03]"
                                    style={{
                                        border: `1px solid rgba(201,162,39,0.15)`,
                                        backgroundColor: C.goldSoft,
                                        boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                                    }}
                                >
                                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs" style={{ backgroundColor: C.gold, color: C.bg1 }}>
                                        ✓
                                    </div>
                                    <p className="font-medium text-sm md:text-base" style={{ color: C.gray1 }}>
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>
                </Container>
            </section>

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
                    style={{ backgroundImage: "url('/texture-juridica.png')", backgroundRepeat: "repeat", backgroundSize: "1200px 800px", opacity: 0.04 }}
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
                        <Cta text={D.urg.cta} />
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
                    style={{ backgroundImage: "url('/texture-pedra.png')", backgroundSize: "cover", backgroundPosition: "center bottom", opacity: 0.03 }}
                />
                <Container className="relative z-10">
                    <SectionLabel>Passo a passo</SectionLabel>
                    <h2 className="text-2xl md:text-4xl font-bold text-center mb-2 px-4" style={{ color: C.white, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                        {D.steps.title}
                    </h2>
                    <GoldDivider />

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10 mt-12">
                        {D.steps.items.map((step) => (
                            <div
                                key={step.n}
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
                        ))}
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
                {/* Símbolos jurídicos sutil */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: "url('/texture-juridica.png')", backgroundRepeat: "repeat", backgroundSize: "1200px 800px", opacity: 0.025 }}
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
                    style={{ backgroundImage: "url('/texture-pedra.png')", backgroundSize: "cover", backgroundPosition: "bottom center", opacity: 0.035 }}
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at center bottom, rgba(201,162,39,0.04) 0%, transparent 65%)" }}
                />
                <Container className="relative z-10">
                    <div className="max-w-lg mx-auto text-center">
                        <p className="text-xl md:text-2xl font-bold mb-3" style={{ color: C.white, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                            Não deixe o prazo passar.
                        </p>
                        <p className="text-sm md:text-base mb-8" style={{ color: C.gray2 }}>
                            Manda o resultado e o edital agora. A análise é feita em horas.
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
                                &ldquo;Olá doutor, fui indeferido na heteroidentificação hoje. Posso te mandar meu resultado?&rdquo;
                            </p>
                        </div>

                        <Cta text="Enviar Meu Caso no WhatsApp" full />
                        <p className="text-xs mt-6 italic" style={{ color: C.gray3 }}>
                            {D.hero.disclaimer}
                        </p>
                        <p className="text-xs mt-2" style={{ color: C.gray3 }}>
                            © 2026 Marcelo Colen Advogados · OAB/MG
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
function VideoSection({ youtubeId, iframeSrc, mp4Src }: { youtubeId?: string; iframeSrc?: string; mp4Src?: string; } = {}) {
    const YOUTUBE_ID = youtubeId ?? "COLE_O_ID_AQUI";
    const MP4_SRC = mp4Src ?? "";

    return (
        <section className="py-16 md:py-28" style={{ backgroundColor: C.bg1 }}>
            <div className="max-w-[720px] mx-auto px-6">
                <SectionLabel>Mensagem do Especialista</SectionLabel>
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 leading-tight md:leading-snug" style={{ color: C.white, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                    Entenda em 2 minutos por que você ainda pode contestar.
                </h2>
                <GoldDivider />
                <div
                    className="relative w-full rounded-2xl overflow-hidden mt-10"
                    style={{
                        boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
                        border: "1px solid rgba(255,255,255,0.08)",
                    }}
                >
                    {MP4_SRC ? (
                        <video src={MP4_SRC} controls playsInline preload="none" className="w-full object-cover" />
                    ) : (
                        <LiteYouTubeEmbed id={YOUTUBE_ID} title="Vídeo de Análise da Situação" poster="maxresdefault" wrapperClass="yt-lite" />
                    )}
                </div>
            </div>
        </section>
    );
}
