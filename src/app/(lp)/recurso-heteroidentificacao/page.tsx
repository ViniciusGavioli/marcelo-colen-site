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
    FileText
} from "lucide-react";
import { Container } from "@/components/layout";
import { getDirectWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";
import { useState } from "react";

// ============================================================================
// CORES
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
    red: "#ef4444",
    redBg: "rgba(239,68,68,0.08)",
    redBorder: "rgba(239,68,68,0.25)",
    cta: "#E8410A",
    ctaHover: "#FF5520",
    ctaGlow: "rgba(232,65,10,0.45)",
    green: "#25D366",
    greenGlow: "rgba(37,211,102,0.25)",
};

// ============================================================================
// DADOS LP 2: RECURSO HETEROIDENTIFICAÇÃO
// ============================================================================
const D = {
    hero: {
        badge: "⚠️ Seu prazo de recurso pode ser de apenas 2 a 5 dias",
        h1_1: "Recurso Contra Indeferimento",
        h1_2: "em Heteroidentificação",
        sub: "Análise técnica do seu caso para verificar fundamentos de recurso.",
        cta: "Analisar Meu Recurso",
        ctaLine1: "Você já pode enviar a foto do resultado ou do edital.",
        ctaLine2: "Primeira análise sem custo e com sigilo.",
        ctaTrust: "O Dr. Marcelo acompanha pessoalmente as análises.",
        disclaimer: "Cada caso é avaliado individualmente — sem promessa de resultado.",
    },
    dor: {
        title: "A Eliminação Indevida.",
        p: [
            "A etapa de heteroidentificação pode eliminar candidatos que já estavam devidamente aprovados nas provas.",
            "Mesmo quando existe autodeclaração válida e fenótipo consistente, a comissão pode indeferir a inscrição.",
            "Em alguns casos, o recurso administrativo ainda pode ser apresentado para reverter o resultado.",
        ],
        cta: "Verificar Viabilidade de Recurso",
    },
    erros: {
        title: "Erros Que Podem Gerar Recurso",
        items: [
            "Motivação genérica da comissão para o indeferimento",
            "Inconsistência do processo com o edital",
            "Análise superficial ou muito breve do candidato",
            "Erro procedimental adotado pela banca"
        ],
        cta: "Pedir Análise do Recurso"
    },
    enviar: {
        title: "O Que Estudamos no Seu Caso",
        items: [
            "Edital do concurso",
            "Resultado da heteroidentificação",
            "Fundamentação da banca",
            "Prazo para recurso"
        ],
        cta: "Enviar Resultado no WhatsApp",
    },
    urg: {
        title: "O Único Risco Real Agora é o Tempo.",
        text: "Você tem entre 2 a 5 dias para protocolar o recurso (dependendo do edital). Se perder esse prazo, não haverá mais como contestar administrativamente.",
        cta: "Verificar Meu Prazo Agora",
    },
    steps: {
        title: "Como Funciona o Processo",
        items: [
            { n: "01", t: "Envio", d: "Você envia resultado e edital.", Icon: Send },
            { n: "02", t: "Análise", d: "O caso é analisado.", Icon: Search },
            { n: "03", t: "Estratégia", d: "Orientamos a estratégia de recurso.", Icon: Gavel },
        ],
        cta: "Iniciar Minha Análise",
    },
    suggestedMsg: {
        title: "Não sabe o que escrever? Copie e envie:",
        msg: "Olá, fui indeferido na heteroidentificação e quero saber se posso recorrer.",
    },
    trust: {
        name: "Dr. Marcelo Colen",
        role: "Advogado · OAB/MG · Direito Antidiscriminatório e Concursos Públicos",
        quote: "Minha missão não é apenas escrever recursos. É garantir que a subjetividade de uma banca não destrua o mérito de quem realmente pertence às cotas.",
    },
    faq: [
        { q: "Tem custo essa primeira conversa?", a: "Não. A análise inicial para entender seu prazo e viabilidade é gratuita." },
        { q: "E se não houver fundamento para recurso?", a: "Serei honesto. Se não houver erro da banca verificável, eu aviso para você não gastar dinheiro à toa." },
        { q: "É sigiloso?", a: "Totalmente. Sigilo profissional conforme o Código de Ética da OAB." },
        { q: "Atende meu estado?", a: "Sim, o atendimento é 100% digital. Atuamos em todo o Brasil." },
    ],
    wa: "Olá, fui indeferido na heteroidentificação e quero saber se posso recorrer.",
};

// ============================================================================
// CTA BUTTON
// ============================================================================
function Cta({ text, full = false }: { text: string; full?: boolean; }) {
    return (
        <a
            href={getDirectWhatsAppLink(D.wa)}
            onClick={trackWhatsAppClick}
            style={{ backgroundColor: C.cta, color: C.white, boxShadow: `0 4px 28px ${C.ctaGlow}` }}
            className={`group inline-flex items-center justify-center gap-3 font-extrabold text-base md:text-lg px-6 py-5 md:px-8 md:py-4 rounded-xl transition-all duration-150 hover:brightness-110 hover:scale-[1.025] active:scale-[0.98] active:brightness-95 ${full ? "w-full" : ""}`}
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
            href={getDirectWhatsAppLink(D.wa)}
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
        <div style={{ borderColor: "rgba(255,255,255,0.08)" }} className="border-b last:border-0 px-1">
            <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-6 text-left group">
                <span style={{ color: C.white }} className="font-bold text-base md:text-lg pr-4 group-hover:brightness-125 transition-all">
                    {q}
                </span>
                <ChevronDown style={{ color: C.gold }} className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
                <div style={{ color: C.gray2 }} className="pb-6 leading-relaxed text-sm md:text-base">
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
        <div className="rounded-2xl p-5 md:p-6 max-w-lg mx-auto" style={{ backgroundColor: "rgba(232,65,10,0.06)", border: `1px solid rgba(232,65,10,0.25)` }}>
            <p className="text-sm font-bold mb-3 text-center" style={{ color: C.gray2 }}>{D.suggestedMsg.title}</p>
            <div className="rounded-xl p-4 mb-3 relative" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <p className="text-base leading-relaxed pr-8" style={{ color: C.white, fontStyle: "italic" }}>
                    &ldquo;{D.suggestedMsg.msg}&rdquo;
                </p>
                <button onClick={handleCopy} className="absolute top-3 right-3 p-2 rounded-lg hover:brightness-125 transition-all" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} aria-label="Copiar mensagem">
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
export default function RecursoHeteroidentificacaoPage() {
    return (
        <main style={{ backgroundColor: C.bg1, color: C.white }}>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* HERO                                                         */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="relative min-h-0 flex items-center overflow-hidden py-16 md:py-24 lg:py-32" style={{ backgroundColor: C.bg1 }}>
                <div className="absolute inset-0 z-0 select-none">
                    <Image src="/images/hero-scales.png" alt="" fill className="object-cover opacity-[0.05] lg:opacity-10" priority aria-hidden="true" />
                    <div className="absolute inset-0 md:hidden bg-gradient-to-b from-black/80 via-black/30 to-black/80" />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${C.bg1} 0%, transparent 50%, ${C.bg1} 100%)` }} />
                </div>

                <Container className="relative z-10 w-full px-4 md:px-6">
                    <div className="flex flex-col items-center text-center">
                        <div className="max-w-4xl flex flex-col justify-center items-center">
                            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-4 md:mb-6 w-fit" style={{ backgroundColor: C.redBg, border: `1px solid ${C.redBorder}` }}>
                                <AlertTriangle className="w-3.5 h-3.5" style={{ color: C.red }} />
                                <span className="text-[10px] md:text-xs font-black text-red-100 uppercase tracking-widest leading-none">{D.hero.badge}</span>
                            </div>

                            <h1 className="text-[clamp(1.85rem,9vw,2.5rem)] md:text-5xl lg:text-7xl font-black leading-[1.1] md:leading-[1.05] mb-4 md:mb-6 tracking-tighter" style={{ color: C.white, fontFamily: "Georgia, serif" }}>
                                {D.hero.h1_1}
                                <br />
                                <span style={{ color: C.gold }}>{D.hero.h1_2}</span>
                            </h1>

                            <p className="text-sm md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8 max-w-[34ch] md:max-w-xl text-gray-300 font-medium">
                                {D.hero.sub}
                            </p>

                            <div className="max-w-md w-full flex flex-col items-center space-y-4">
                                <Cta text={D.hero.cta} full />

                                <div className="space-y-1 opacity-90 text-center">
                                    <p className="text-[11px] md:text-sm font-bold" style={{ color: C.gray2 }}>{D.hero.ctaLine1}</p>
                                    <p className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest font-extrabold flex items-center justify-center">
                                        <Lock className="w-3 h-3 mr-1" />
                                        {D.hero.ctaLine2}
                                    </p>
                                </div>

                                <div className="flex items-center justify-center gap-3 mt-6">
                                    <div className="relative h-10 w-10 rounded-full ring-2 ring-[#c9a227] overflow-hidden bg-gray-900 flex-shrink-0">
                                        <Image src="/images/wordpress/marcelo-terno.png" alt="" fill className="object-cover object-top scale-125 translate-y-1" />
                                    </div>
                                    <p className="text-sm text-[#c9a227] italic leading-tight text-left">
                                        ✨ {D.hero.ctaTrust}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5 opacity-50" />
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* VÍDEO COMPROVAÇÃO                                            */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <VideoSection youtubeId="jAiQi4CgMN0" />

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* BLOCO DE DOR                                                 */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-12 md:py-20 relative" style={{ backgroundColor: C.bg1 }}>
                <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: `linear-gradient(180deg, transparent, ${C.gold}, transparent)` }} />
                <Container>
                    <div className="max-w-2xl mx-auto">
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                            <ShieldCheck className="w-8 h-8 md:w-10 md:h-10" style={{ color: C.gold }} />
                            <h2 className="text-2xl md:text-3xl font-bold text-center lg:text-left" style={{ color: C.white, fontFamily: "Georgia, serif" }}>
                                {D.dor.title}
                            </h2>
                        </div>

                        <div className="space-y-5 mb-10">
                            {D.dor.p.map((p, i) => (
                                <p
                                    key={i}
                                    className={`text-base md:text-lg leading-relaxed ${i === 1 ? "font-bold text-lg md:text-xl pl-4 py-2 rounded-r-lg" : ""}`}
                                    style={i === 1 ? { color: C.gold, backgroundColor: C.goldSoft, borderLeft: `4px solid ${C.gold}` } : { color: C.gray2 }}
                                >
                                    {p}
                                </p>
                            ))}
                        </div>

                        <Cta text={D.dor.cta} full />
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* ERROS QUE PODEM GERAR RECURSO                                */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-12 md:py-20" style={{ backgroundColor: C.bg2 }}>
                <Container>
                    <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-10 px-4" style={{ color: C.white, fontFamily: "Georgia, serif" }}>
                        {D.erros.title}
                    </h2>

                    <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
                        {D.erros.items.map((item, i) => (
                            <div key={i} className="flex gap-4 items-start rounded-xl p-5 transition-colors" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                                <XCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: C.red }} />
                                <p className="font-medium leading-snug text-sm md:text-base" style={{ color: C.gray1 }}>
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <CtaLink text={D.erros.cta} />
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* URGÊNCIA — PRAZO                                             */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-12 md:py-20" style={{ background: `linear-gradient(135deg, rgba(127,29,29,0.15) 0%, rgba(127,29,29,0.08) 50%, rgba(127,29,29,0.15) 100%)`, borderTop: `1px solid ${C.redBorder}`, borderBottom: `1px solid ${C.redBorder}` }}>
                <Container>
                    <div className="max-w-2xl mx-auto text-center px-4">
                        <Clock className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-6 animate-pulse" style={{ color: "#f87171" }} />
                        <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: C.white, fontFamily: "Georgia, serif" }}>
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
            {/* O QUE ENVIAR AGORA                                           */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-12 md:py-20" style={{ backgroundColor: C.bg2 }}>
                <Container>
                    <div className="max-w-2xl mx-auto scale-[0.98] lg:scale-100">
                        <div className="flex flex-col items-center justify-center gap-3 mb-10">
                            <FileText className="w-8 h-8" style={{ color: C.gold }} />
                            <h2 className="text-2xl md:text-4xl font-bold text-center px-4" style={{ color: C.white, fontFamily: "Georgia, serif" }}>
                                {D.enviar.title}
                            </h2>
                        </div>

                        <div className="space-y-3 mb-8">
                            {D.enviar.items.map((item, i) => (
                                <div key={i} className="flex items-center gap-4 rounded-xl p-4" style={{ backgroundColor: C.goldSoft, border: `1px solid rgba(201,162,39,0.2)` }}>
                                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs" style={{ backgroundColor: C.gold, color: C.bg1 }}>
                                        ✓
                                    </div>
                                    <p className="font-medium text-sm md:text-base" style={{ color: C.gray1 }}>
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <Cta text={D.enviar.cta} full />
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* PASSOS — "Como Funciona"                                     */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-12 md:py-24" style={{ backgroundColor: C.bg1 }}>
                <Container>
                    <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 md:mb-16 px-4" style={{ color: C.white, fontFamily: "Georgia, serif" }}>
                        {D.steps.title}
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
                        {D.steps.items.map((step) => (
                            <div key={step.n} className="relative rounded-2xl p-6 text-center transition-all" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center font-extrabold text-sm" style={{ backgroundColor: C.gold, color: C.bg1 }}>
                                    {step.n}
                                </div>
                                <step.Icon className="w-8 h-8 mx-auto mb-4 mt-4" style={{ color: C.gold }} />
                                <h3 className="text-lg font-bold mb-2" style={{ color: C.white }}>{step.t}</h3>
                                <p className="text-sm leading-relaxed" style={{ color: C.gray2 }}>{step.d}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Cta text={D.steps.cta} />
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* MENSAGEM SUGERIDA                                            */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-12 md:py-16" style={{ backgroundColor: C.bg2 }}>
                <Container>
                    <SuggestedMessage />
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* AUTORIDADE                                                   */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-16 md:py-20" style={{ backgroundColor: C.bg1 }}>
                <Container>
                    <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        <div className="relative flex-shrink-0">
                            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden" style={{ border: `3px solid ${C.gold}`, boxShadow: `0 0 30px ${C.gold}22` }}>
                                <Image src="/images/marcelo/marcelo-hero.jpg" alt="Dr. Marcelo Colen" width={144} height={144} className="object-cover w-full h-full" />
                            </div>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold mb-1" style={{ color: C.white }}>{D.trust.name}</h3>
                            <p className="font-medium text-sm mb-4 tracking-wide" style={{ color: C.gold }}>{D.trust.role}</p>
                            <blockquote className="leading-relaxed italic pl-4" style={{ color: C.gray2, borderLeft: `2px solid ${C.gold}` }}>
                                &ldquo;{D.trust.quote}&rdquo;
                            </blockquote>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* FAQ                                                          */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-12 md:py-24" style={{ backgroundColor: C.bg2 }}>
                <Container>
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center" style={{ color: C.white, fontFamily: "Georgia, serif" }}>Dúvidas Rápidas</h2>
                        <div className="rounded-2xl p-2 md:p-6" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                            {D.faq.map((item, i) => (
                                <FaqItem key={i} q={item.q} a={item.a} />
                            ))}
                        </div>
                        <p className="text-xs text-center mt-6 italic" style={{ color: C.gray3 }}>
                            {D.hero.disclaimer}
                        </p>
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* FOOTER CTA FINAL                                             */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-12" style={{ backgroundColor: C.bg1, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <Container>
                    <div className="max-w-lg mx-auto text-center">
                        <p className="text-xl md:text-2xl font-bold mb-6" style={{ color: C.white, fontFamily: "Georgia, serif" }}>
                            Não perca sua vaga por omissão.
                        </p>

                        <div className="mb-8 p-6 rounded-2xl text-left" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
                            <p className="font-bold mb-4 text-sm md:text-base text-center" style={{ color: C.gold }}>Envie agora para análise:</p>
                            <div className="space-y-3 max-w-[280px] mx-auto">
                                {["Resultado da banca", "Edital do concurso", "Prazo do recurso"].map((item, i) => (
                                    <div key={i} className="flex gap-3 items-center">
                                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: C.gold, color: C.bg1 }}>
                                            <Check className="w-3 h-3 font-bold" />
                                        </div>
                                        <span className="text-sm md:text-base font-medium text-gray-200">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Cta text="Falar com Dr. Marcelo Agora" full />
                        <p className="text-xs mt-6" style={{ color: C.gray3 }}>
                            © 2026 Marcelo Colen Advogados · OAB/MG
                        </p>
                    </div>
                </Container>
            </section>

            {/* Floating WhatsApp */}
            <div className="fixed bottom-6 right-6 z-50">
                <a
                    href={getDirectWhatsAppLink(D.wa)}
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

// ============================================================================
// VIDEO SECTION
// ============================================================================
function VideoSection({ youtubeId, iframeSrc, mp4Src }: { youtubeId?: string; iframeSrc?: string; mp4Src?: string; } = {}) {
    const YOUTUBE_ID = youtubeId ?? "COLE_O_ID_AQUI";
    const IFRAME_SRC = iframeSrc ?? "";
    const MP4_SRC = mp4Src ?? "";
    const src = IFRAME_SRC ? IFRAME_SRC : `https://www.youtube.com/embed/${YOUTUBE_ID}?rel=0&modestbranding=1`;

    return (
        <section className="py-12 md:py-24" style={{ backgroundColor: C.bg1 }}>
            <div className="max-w-[720px] mx-auto px-6">
                <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-center mb-3" style={{ color: C.gold }}>
                    Mensagem do Especialista
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 leading-tight md:leading-snug" style={{ color: C.white, fontFamily: "Georgia, serif" }}>
                    Entenda em 2 minutos por que você ainda pode contestar o resultado.
                </h2>
                <div className="relative w-full rounded-2xl overflow-hidden scale-[1.02] md:scale-100" style={{ paddingBottom: "56.25%", boxShadow: "0 12px 60px rgba(0,0,0,0.65)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    {MP4_SRC ? (
                        <video src={MP4_SRC} controls playsInline preload="none" className="absolute inset-0 w-full h-full object-cover" />
                    ) : (
                        <iframe src={src} title="Vídeo do advogado" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" className="absolute inset-0 w-full h-full" />
                    )}
                </div>
                <p className="text-center text-sm md:text-lg mt-8 mb-6 leading-relaxed" style={{ color: C.gray2 }}>
                    Ficou com alguma dúvida? Você pode mandar uma mensagem agora — a análise inicial é gratuita.
                </p>
                <div className="flex justify-center">
                    <Cta text="Quero Analisar Meu Caso Agora" />
                </div>
                <p className="text-center text-[10px] md:text-xs mt-4 italic opacity-80" style={{ color: C.gray3 }}>
                    Cada caso é avaliado individualmente — sem promessa de resultado.
                </p>
            </div>
        </section>
    );
}
