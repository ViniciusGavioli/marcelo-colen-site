"use client";

import Image from "next/image";
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
} from "lucide-react";
import { Container } from "@/components/layout";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";
import { useState } from "react";

// ============================================================================
// CORES — referência central (inline styles para vencer globals.css)
// ============================================================================
const C = {
    bg1: "#0a0a0a",
    bg2: "#111111",
    bg3: "#181818",
    gold: "#c9a227",
    goldSoft: "rgba(201,162,39,0.12)",
    white: "#ffffff",
    gray1: "rgba(255,255,255,0.92)",
    gray2: "rgba(255,255,255,0.7)",
    gray3: "rgba(255,255,255,0.45)",
    // Alerta de prazo (badge, ícone)
    red: "#ef4444",
    redBg: "rgba(239,68,68,0.08)",
    redBorder: "rgba(239,68,68,0.25)",
    // CTA primário — vermelho-alaranjado urgente
    cta: "#E8410A",
    ctaHover: "#FF5520",
    ctaGlow: "rgba(232,65,10,0.45)",
    // WhatsApp floating (mantém verde só no flutuante)
    green: "#25D366",
    greenGlow: "rgba(37,211,102,0.25)",
};

// ============================================================================
// DADOS
// ============================================================================
const D = {
    hero: {
        badge: "⚠️ Os prazos para recurso costumam ser de 2 a 5 dias úteis",
        h1_1: "Você foi indeferido na banca.",
        h1_2: "Pode haver alternativas jurídicas.",
        proof: "Em muitos casos, há falhas procedimentais que podem fundamentar um recurso.",
        sub: "Se o procedimento de heteroidentificação apresentou irregularidades, é possível verificar a viabilidade de um recurso administrativo. Cada caso é analisado individualmente.",
        cta: "Solicitar Análise do Meu Caso",
        ctaInstruction: "Ao entrar em contato, você pode enviar seu resultado ou edital para avaliação.",
        micro: "Consulta inicial sem custo · Sigilo garantido · Retorno rápido",
        disclaimer: "A análise do caso não representa garantia de resultado. Cada situação é avaliada individualmente.",
    },
    check: {
        title: "Você se identifica com essa situação?",
        items: [
            "A banca informou o indeferimento sem apresentar fundamentação clara.",
            "A avaliação foi realizada por vídeo, com pouco tempo ou condições inadequadas.",
            "Você sempre se autodeclarou pardo ou negro e foi surpreendido pelo resultado.",
            "Está preocupado com o prazo e não sabe se há alguma medida cabível.",
        ],
        cta: "Entrar em contato para orientação",
    },
    hope: {
        title: "Procedimentos irregulares podem fundamentar recurso.",
        p: [
            "O processo de heteroidentificação envolve critérios subjetivos. Em alguns casos, candidatos têm sido indeferidos por condições alheias ao mérito — como iluminação inadequada, qualidade de imagem ou falta de fundamentação por parte da banca.",
            "Existem casos em que falhas no procedimento permitiram a apresentação de recurso administrativo.",
            "A análise jurídica identifica se há elementos que justifiquem contestação — e orienta sobre os passos mais adequados para cada situação.",
        ],
        cta: "Solicitar avaliação de viabilidade",
    },
    trigger: {
        title: "Entre em contato se você:",
        items: [
            "Recebeu o resultado de indeferimento recentemente",
            "Não obteve fundamentação clara da banca",
            "Realizou entrevista por poucos minutos ou por vídeo",
            "Tem prazo próximo conforme previsto no edital",
        ],
        cta: "Enviar meu resultado para análise",
    },
    urg: {
        title: "O prazo é o fator mais crítico.",
        text: "Os prazos para recurso administrativo variam de 2 a 5 dias úteis conforme o edital. Após esse período, não é mais possível apresentar contestação administrativa. Verificar o prazo do seu concurso é o primeiro passo.",
        cta: "Verificar meu prazo no edital",
    },
    steps: {
        title: "Como funciona a orientação jurídica.",
        items: [
            { n: "01", t: "Envie seu caso", d: "Encaminhe o edital e o resultado pelo WhatsApp. Sem burocracia.", Icon: Send },
            { n: "02", t: "Análise preliminar", d: "Verificamos se há elementos que possam fundamentar um recurso no seu caso.", Icon: Search },
            { n: "03", t: "Orientação sobre os próximos passos", d: "Se houver viabilidade jurídica, você é orientado sobre como proceder.", Icon: Gavel },
        ],
        cta: "Solicitar análise preliminar",
    },
    suggestedMsg: {
        title: "Não sabe o que escrever? Copie e envie:",
        msg: "Olá doutor, fui indeferido na heteroidentificação. Gostaria de saber se há alguma medida jurídica cabível no meu caso.",
    },
    trust: {
        name: "Dr. Marcelo Colen",
        role: "Advogado · OAB/MG · Direito Antidiscriminatório e Concursos Públicos",
        quote: "Cada candidato que me procura recebe uma análise honesta da situação. Se houver fundamento jurídico, orientamos sobre o recurso. Se não houver, também informamos — pois transparência faz parte do exercício ético da advocacia.",
    },
    faq: [
        {
            q: "A consulta inicial tem custo?",
            a: "Não. O contato inicial para verificarmos se há elements que fundamentem um recurso no seu caso é gratuito e sem compromisso.",
        },
        {
            q: "E se não houver fundamento jurídico para recurso?",
            a: "Se a análise indicar que não há elementos que justifiquem contestação, você será informado com clareza. Não orientamos procedimentos sem base jurídica.",
        },
        {
            q: "O atendimento é sigiloso?",
            a: "Sim. Todo contato e informação compartilhada são tratados com absoluto sigilo profissional, conforme o Código de Ética da OAB.",
        },
        {
            q: "Atende candidatos de todo o Brasil?",
            a: "Sim. O atendimento é 100% remoto. Atuamos em concursos de âmbito federal, estadual e municipal em todo o território nacional.",
        },
    ],
    wa: "Olá doutor, fui indeferido na heteroidentificação. Gostaria de saber se há alguma medida jurídica cabível no meu caso.",
};

// ============================================================================
// CTA BUTTON
// ============================================================================
function Cta({ text, full = false }: {
    text: string; full?: boolean;
}) {
    return (
        <a
            href={getWhatsAppLink()}
            onClick={trackWhatsAppClick}
            style={{
                backgroundColor: C.cta,
                color: C.white,
                boxShadow: `0 4px 28px ${C.ctaGlow}`,
            }}
            className={`group inline-flex items-center justify-center gap-3 font-extrabold text-base md:text-lg px-8 py-4 rounded-xl transition-all duration-150 hover:brightness-110 hover:scale-[1.025] active:scale-[0.98] active:brightness-95 ${full ? "w-full" : ""}`}
        >
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6 group-hover:animate-pulse" />
            {text}
        </a>
    );
}

// ============================================================================
// CTA LINK (secondary)
// ============================================================================
function CtaLink({ text }: { text: string }) {
    return (
        <a
            href={getWhatsAppLink()}
            onClick={trackWhatsAppClick}
            style={{ color: C.gold, borderColor: C.gold }}
            className="inline-flex items-center gap-2 font-bold border-b-2 pb-0.5 hover:brightness-125 transition-all"
        >
            <MessageCircle className="w-4 h-4" />
            {text}
        </a>
    );
}

// ============================================================================
// FAQ ITEM
// ============================================================================
function FaqItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div style={{ borderColor: "rgba(255,255,255,0.08)" }} className="border-b last:border-0">
            <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left group">
                <span style={{ color: C.white }} className="font-bold text-base md:text-lg pr-4 group-hover:brightness-125 transition-all">
                    {q}
                </span>
                <ChevronDown
                    style={{ color: C.gold }}
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                />
            </button>
            {open && (
                <div style={{ color: C.gray2 }} className="pb-5 leading-relaxed">
                    {a}
                </div>
            )}
        </div>
    );
}

// ============================================================================
// SUGGESTED MESSAGE BOX
// ============================================================================
function SuggestedMessage() {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(D.suggestedMsg.msg);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <div
            className="rounded-2xl p-5 md:p-6 max-w-lg mx-auto"
            style={{ backgroundColor: "rgba(232,65,10,0.06)", border: `1px solid rgba(232,65,10,0.25)` }}
        >
            <p className="text-sm font-bold mb-3 text-center" style={{ color: C.gray2 }}>
                {D.suggestedMsg.title}
            </p>
            <div
                className="rounded-xl p-4 mb-3 relative"
                style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
                <p className="text-base leading-relaxed pr-8" style={{ color: C.white, fontStyle: "italic" }}>
                    &ldquo;{D.suggestedMsg.msg}&rdquo;
                </p>
                <button
                    onClick={handleCopy}
                    className="absolute top-3 right-3 p-2 rounded-lg hover:brightness-125 transition-all"
                    style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                    aria-label="Copiar mensagem"
                >
                    {copied ? <Check className="w-4 h-4" style={{ color: C.green }} /> : <Copy className="w-4 h-4" style={{ color: C.gray2 }} />}
                </button>
            </div>
            <Cta text="Enviar Essa Mensagem no WhatsApp" full />
        </div>
    );
}

// ============================================================================
// PAGE
// ============================================================================
export default function RecursoCotasPage() {
    return (
        <main style={{ backgroundColor: C.bg1, color: C.white }}>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* HERO — ESTRUTURA RESPONSIVA CORRIGIDA                        */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="relative min-h-[90vh] lg:h-[95vh] flex items-center overflow-hidden" style={{ backgroundColor: C.bg1 }}>
                {/* Background sutil */}
                <div className="absolute inset-0 z-0">
                    <Image src="/images/hero-scales.png" alt="" fill className="object-cover opacity-10" priority />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${C.bg1} 0%, transparent 50%, ${C.bg1} 100%)` }} />
                </div>

                {/* Glow/Halo — Preso ao lado direito da imagem */}
                <div
                    className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[140px] opacity-[0.08] pointer-events-none z-0"
                    style={{ backgroundColor: C.gold }}
                />

                <Container className="relative z-10 w-full h-full">
                    <div className="grid lg:grid-cols-12 gap-8 items-center h-full">

                        {/* Coluna Texto: 7 colunas no Desktop */}
                        <div className="lg:col-span-7 flex flex-col justify-center py-10 lg:py-20 z-10">
                            {/* Urgency badge */}
                            <div
                                className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 w-fit"
                                style={{ backgroundColor: C.redBg, border: `1px solid ${C.redBorder}` }}
                            >
                                <AlertTriangle className="w-4 h-4" style={{ color: C.red }} />
                                <span className="text-xs md:text-sm font-bold text-red-200">{D.hero.badge}</span>
                            </div>

                            {/* Headline */}
                            <h1
                                className="text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-2 tracking-tighter"
                                style={{ color: C.white, fontFamily: "Georgia, serif" }}
                            >
                                {D.hero.h1_1}
                                <br />
                                <span style={{ color: C.gold }}>{D.hero.h1_2}</span>
                            </h1>

                            {/* Prova */}
                            <div className="mb-6">
                                <span
                                    className="inline-block px-3 py-1.5 rounded-lg border font-bold text-sm md:text-base"
                                    style={{ color: C.green, backgroundColor: "rgba(37,211,102,0.1)", borderColor: "rgba(37,211,102,0.2)" }}
                                >
                                    ✓ {D.hero.proof}
                                </span>
                            </div>

                            {/* Subtext */}
                            <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-xl text-gray-300">
                                {D.hero.sub}
                            </p>

                            {/* CTA Actions */}
                            <div className="max-w-md w-full space-y-3">
                                <Cta text={D.hero.cta} full />
                                <p className="text-center text-sm font-semibold" style={{ color: C.gray1 }}>
                                    📸 {D.hero.ctaInstruction}
                                </p>
                                <p className="text-center text-xs text-gray-500">
                                    <Lock className="w-3 h-3 inline mr-1" />
                                    {D.hero.micro}
                                </p>
                                <p className="text-center text-xs text-gray-600 italic">
                                    {D.hero.disclaimer}
                                </p>
                            </div>
                        </div>

                        {/* Imagem Desktop: Ancorada na Base da Seção (Planted on floor) */}
                        <div className="hidden lg:flex absolute bottom-0 right-0 h-[92vh] w-[45%] items-end justify-end pointer-events-none overflow-hidden pr-[4%]">
                            <Image
                                src="/images/wordpress/marcelo-terno.png"
                                alt="Dr. Marcelo Colen"
                                width={750}
                                height={1000}
                                className="object-contain max-h-full w-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
                                style={{ filter: 'drop-shadow(0 15px 40px rgba(0,0,0,0.5))' }}
                                priority
                            />
                        </div>

                        {/* Imagem Mobile: No fluxo, mantendo proporção e sem cortes */}
                        <div className="lg:hidden col-span-12 flex items-end justify-center h-[42vh] min-h-[320px] -mb-10 overflow-hidden">
                            <Image
                                src="/images/wordpress/marcelo-terno.png"
                                alt="Dr. Marcelo Colen"
                                width={500}
                                height={660}
                                className="object-contain max-h-full w-auto drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </Container>

                {/* Linha de base decorativa */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5 opacity-50" />
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* CHECKLIST — "Isso aconteceu com você?"                       */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-16 md:py-20" style={{ backgroundColor: C.bg2 }}>
                <Container>
                    <h2
                        className="text-2xl md:text-4xl font-bold text-center mb-10"
                        style={{ color: C.white, fontFamily: "Georgia, serif" }}
                    >
                        {D.check.title}
                    </h2>

                    <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
                        {D.check.items.map((item, i) => (
                            <div
                                key={i}
                                className="flex gap-4 items-start rounded-xl p-5 transition-colors"
                                style={{
                                    backgroundColor: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                }}
                            >
                                <XCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: C.red }} />
                                <p className="font-medium leading-snug text-sm md:text-base" style={{ color: C.gray1 }}>
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <CtaLink text={D.check.cta} />
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* ESPERANÇA — "A Banca Erra"                                  */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-16 md:py-20 relative" style={{ backgroundColor: C.bg1 }}>
                <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: `linear-gradient(180deg, transparent, ${C.gold}, transparent)` }} />
                <Container>
                    <div className="max-w-2xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <ShieldCheck className="w-8 h-8" style={{ color: C.gold }} />
                            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: C.white, fontFamily: "Georgia, serif" }}>
                                {D.hope.title}
                            </h2>
                        </div>

                        <div className="space-y-5 mb-10">
                            {D.hope.p.map((p, i) => (
                                <p
                                    key={i}
                                    className={`text-base md:text-lg leading-relaxed ${i === 1 ? "font-bold text-lg md:text-xl pl-4 py-2 rounded-r-lg" : ""}`}
                                    style={i === 1 ? {
                                        color: C.gold,
                                        backgroundColor: C.goldSoft,
                                        borderLeft: `4px solid ${C.gold}`,
                                    } : { color: C.gray2 }}
                                >
                                    {p}
                                </p>
                            ))}
                        </div>

                        <Cta text={D.hope.cta} full />
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* URGÊNCIA — "O Tempo é o Inimigo"                             */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section
                className="py-16 md:py-20"
                style={{
                    background: `linear-gradient(135deg, rgba(127,29,29,0.15) 0%, rgba(127,29,29,0.08) 50%, rgba(127,29,29,0.15) 100%)`,
                    borderTop: `1px solid ${C.redBorder}`,
                    borderBottom: `1px solid ${C.redBorder}`,
                }}
            >
                <Container>
                    <div className="max-w-2xl mx-auto text-center">
                        <Clock className="w-12 h-12 mx-auto mb-4 animate-pulse" style={{ color: "#f87171" }} />
                        <h2
                            className="text-2xl md:text-3xl font-bold mb-6"
                            style={{ color: C.white, fontFamily: "Georgia, serif" }}
                        >
                            {D.urg.title}
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed mb-8 font-medium" style={{ color: C.gray1 }}>
                            {D.urg.text}
                        </p>
                        <Cta text={D.urg.cta} />
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* TRIGGER — "Quando DEVE procurar ajuda"                       */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-16 md:py-20" style={{ backgroundColor: C.bg2 }}>
                <Container>
                    <div className="max-w-2xl mx-auto">
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <Zap className="w-7 h-7" style={{ color: C.gold }} />
                            <h2
                                className="text-2xl md:text-3xl font-bold text-center"
                                style={{ color: C.white, fontFamily: "Georgia, serif" }}
                            >
                                {D.trigger.title}
                            </h2>
                        </div>

                        <div className="space-y-3 mb-8">
                            {D.trigger.items.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 rounded-xl p-4"
                                    style={{
                                        backgroundColor: C.goldSoft,
                                        border: `1px solid rgba(201,162,39,0.2)`,
                                    }}
                                >
                                    <div
                                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs"
                                        style={{ backgroundColor: C.gold, color: C.bg1 }}
                                    >
                                        ✓
                                    </div>
                                    <p className="font-medium text-sm md:text-base" style={{ color: C.gray1 }}>
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <Cta text={D.trigger.cta} full />
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* PASSOS — "Como Funciona"                                     */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-16 md:py-20" style={{ backgroundColor: C.bg1 }}>
                <Container>
                    <h2
                        className="text-2xl md:text-4xl font-bold text-center mb-12"
                        style={{ color: C.white, fontFamily: "Georgia, serif" }}
                    >
                        {D.steps.title}
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
                        {D.steps.items.map((step) => (
                            <div
                                key={step.n}
                                className="relative rounded-2xl p-6 text-center transition-all"
                                style={{
                                    backgroundColor: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                }}
                            >
                                <div
                                    className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center font-extrabold text-sm"
                                    style={{ backgroundColor: C.gold, color: C.bg1 }}
                                >
                                    {step.n}
                                </div>
                                <step.Icon className="w-8 h-8 mx-auto mb-4 mt-4" style={{ color: C.gold }} />
                                <h3 className="text-lg font-bold mb-2" style={{ color: C.white }}>
                                    {step.t}
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: C.gray2 }}>
                                    {step.d}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Cta text={D.steps.cta} />
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* MENSAGEM SUGERIDA — Remove barreira psicológica              */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-12 md:py-16" style={{ backgroundColor: C.bg2 }}>
                <Container>
                    <SuggestedMessage />
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* AUTORIDADE — Dr. Marcelo                                     */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-16 md:py-20" style={{ backgroundColor: C.bg1 }}>
                <Container>
                    <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        <div className="relative flex-shrink-0">
                            <div
                                className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden"
                                style={{
                                    border: `3px solid ${C.gold}`,
                                    boxShadow: `0 0 30px ${C.gold}22`,
                                }}
                            >
                                <Image
                                    src="/images/marcelo/marcelo-hero.jpg"
                                    alt="Dr. Marcelo Colen"
                                    width={144}
                                    height={144}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold mb-1" style={{ color: C.white }}>{D.trust.name}</h3>
                            <p className="font-medium text-sm mb-4 tracking-wide" style={{ color: C.gold }}>{D.trust.role}</p>
                            <blockquote
                                className="leading-relaxed italic pl-4"
                                style={{ color: C.gray2, borderLeft: `2px solid ${C.gold}` }}
                            >
                                &ldquo;{D.trust.quote}&rdquo;
                            </blockquote>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* FAQ                                                          */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-16 md:py-20" style={{ backgroundColor: C.bg2 }}>
                <Container>
                    <div className="max-w-2xl mx-auto">
                        <h2
                            className="text-xl md:text-2xl font-bold mb-8 text-center"
                            style={{ color: C.white, fontFamily: "Georgia, serif" }}
                        >
                            Dúvidas Rápidas
                        </h2>
                        <div
                            className="rounded-2xl p-4 md:p-6"
                            style={{
                                backgroundColor: "rgba(255,255,255,0.04)",
                                border: "1px solid rgba(255,255,255,0.08)",
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
            {/* FOOTER CTA FINAL                                             */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-12" style={{ backgroundColor: C.bg1, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <Container>
                    <div className="max-w-lg mx-auto text-center">
                        <p
                            className="text-xl md:text-2xl font-bold mb-6"
                            style={{ color: C.white, fontFamily: "Georgia, serif" }}
                        >
                            Não perca sua vaga por omissão.
                        </p>
                        <Cta text="Falar com Dr. Marcelo Agora" full />
                        <p className="text-xs mt-6" style={{ color: C.gray3 }}>
                            © 2026 Marcelo Colen Advogados · OAB/MG
                        </p>
                    </div>
                </Container>
            </section>

            {/* Floating WhatsApp — verde mantido pois é ícone reconhecível */}
            <div className="fixed bottom-6 right-6 z-50">
                <a
                    href={getWhatsAppLink()}
                    onClick={trackWhatsAppClick}
                    className="flex items-center justify-center w-14 h-14 rounded-full hover:scale-110 transition-transform"
                    style={{ backgroundColor: C.green, color: C.white, boxShadow: `0 4px 20px ${C.greenGlow}` }}
                    aria-label="WhatsApp"
                >
                    <MessageCircle className="w-7 h-7" />
                </a>
            </div>
        </main>
    );
}
