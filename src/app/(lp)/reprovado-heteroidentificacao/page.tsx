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
// DADOS LP 3: REPROVADO HETEROIDENTIFICAÇÃO (URGÊNCIA MÁXIMA)
// ============================================================================
const D = {
    hero: {
        badge: "⚠️ Atenção: O prazo do seu edital pode estar correndo agora",
        h1_1: "Reprovado na",
        h1_2: "Heteroidentificação?",
        sub: "Dependendo do caso, ainda pode ser possível recorrer antes do prazo acabar. Se o relógio estiver correndo, atue imediatamente.",
        cta: "Recorrer Agora",
        ctaLine1: "Você pode enviar a foto do resultado e do edital agora mesmo.",
        ctaLine2: "Primeira análise rápida e sem custo para não perder prazo.",
        ctaTrust: "O Dr. Marcelo irá orientá-lo sobre a possibilidade de defesa.",
        disclaimer: "Cada caso é avaliado individualmente — sem promessa de resultado.",
    },
    urg: {
        title: "O Seu Prazo Está Correndo.",
        text: "Em muitos concursos o prazo de recurso é de apenas alguns dias. Por isso a análise precisa ser rápida.",
        cta: "Mandar Mensagem Rápida Agora",
    },
    dor: {
        title: "A Eliminação de Quem Já Havia Passado nas Provas.",
        p: [
            "Muitos candidatos descobrem a reprovação cruel da banca apenas após a divulgação oficial do resultado e se deparam com o desespero.",
            "Mesmo tendo passado em todas as provas objetivas e discursivas, a heteroidentificação elimina injustificadamente o candidato.",
            "Se o prazo ainda está aberto, o recurso bem fundamentado é a principal chave de saída.",
        ],
        cta: "Pedir Análise de Viabilidade",
    },
    enviar: {
        title: "Não Perca Mais Tempo: Envie os Itens Abaixo",
        items: [
            "Print, foto ou PDF do resultado oficial da banca",
            "O edital atualizado do seu concurso",
            "Prazo limite (data e horário) para interposição de recurso"
        ],
        cta: "Enviar Meu Resultado no WhatsApp",
    },
    steps: {
        title: "Processo Imediato em Apenas 3 Passos",
        items: [
            { n: "01", t: "Envie as Informações", d: "Mande o edital e o resultado pelo WhatsApp o mais rápido possível.", Icon: Send },
            { n: "02", t: "Estudo Express", d: "Analisaremos o caso prontamente, verificando falhas flagrantes da banca.", Icon: Search },
            { n: "03", t: "Instrução Prática", d: "Se o recurso couber, orientaremos sobre as estratégias da sua defesa.", Icon: Gavel },
        ],
        cta: "Mandar a Primeira MSG Agora",
    },
    trust: {
        name: "Dr. Marcelo Colen",
        role: "Advogado · OAB/MG · Direito Antidiscriminatório e Concursos Públicos",
        quote: "O maior inimigo não é a banca, é o tempo! Quanto mais rápido você se opõe a qualquer irregularidade administrativa e busca vias adequadas, maior o proveito no recurso.",
    },
    suggestedMsg: {
        title: "Se tiver pressa, só copie a mensagem abaixo e nos mande por WhatsApp:",
        msg: "Olá, fui reprovado na heteroidentificação hoje. Ainda dá tempo de recorrer?",
    },
    faq: [
        { q: "A primeira troca de conversas sobre a viabilidade tem custo?", a: "Não. A análise inicial para apurar se seu recurso tem chance e verificar prazos é feita sem custo." },
        { q: "Qualquer reprovação tem chance de reversão?", a: "Nem toda. Cada caso deve ser avaliado com relação ao edital, às fotos exigidas e à fundamentação oficial (genérica x justificada)." },
        { q: "A conversa que eu tiver pelo WhatsApp é segura?", a: "Totalmente! Regidos pelas diretrizes do Estatuto da OAB, mantemos sigilo incondicional sobre suas dores, frustrações e documentos." },
        { q: "Pode atuar independente da cidade que moro?", a: "Sim! Somos um escritório que trabalha primariamente nacional de formato totalmente digital." },
    ],
    wa: "Olá, fui reprovado na heteroidentificação hoje. Ainda dá tempo de recorrer?",
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
                <span style={{ color: C.white }} className="font-bold text-base md:text-lg pr-4 group-hover:brightness-125 transition-all">{q}</span>
                <ChevronDown style={{ color: C.gold }} className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
                <div style={{ color: C.gray2 }} className="pb-6 leading-relaxed text-sm md:text-base">{a}</div>
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
            <Cta text="Enviar Mensagem Agora" full />
        </div>
    );
}

// ============================================================================
// PAGE
// ============================================================================
export default function ReprovadoPage() {
    return (
        <main style={{ backgroundColor: C.bg1, color: C.white }}>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* HERO                                                         */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="relative min-h-0 flex items-center overflow-hidden py-8 md:py-24 lg:py-32" style={{ backgroundColor: C.bg1 }}>
                <div className="absolute inset-0 z-0 select-none">
                    <Image src="/images/hero-scales.png" alt="" fill className="object-cover opacity-[0.05] lg:opacity-10" priority aria-hidden="true" />
                    <div className="absolute inset-0 md:hidden bg-gradient-to-b from-black/80 via-black/30 to-black/80" />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${C.bg1} 0%, transparent 50%, ${C.bg1} 100%)` }} />
                </div>

                <Container className="relative z-10 w-full px-4 md:px-6">
                    <div className="flex flex-col items-center text-center">
                        <div className="max-w-4xl flex flex-col justify-center items-center">
                            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-4 md:mb-6 w-fit" style={{ backgroundColor: C.redBg, border: `1px solid ${C.redBorder}` }}>
                                <AlertTriangle className="w-3.5 h-3.5 animate-pulse" style={{ color: C.red }} />
                                <span className="text-[10px] md:text-xs font-black text-red-100 uppercase tracking-widest leading-none" style={{ color: C.white }}>{D.hero.badge}</span>
                            </div>

                            {/* Micro Avatar - Trust imediato acima da dobra mobile */}
                            <div className="flex items-center gap-3 mb-5 pr-4 pl-1.5 py-1.5 rounded-full border md:hidden shadow-lg" style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}>
                                <Image src="/images/marcelo/marcelo-hero.jpg" alt="Dr. Marcelo Colen" width={32} height={32} className="rounded-full object-cover w-8 h-8" />
                                <div className="text-left">
                                    <p className="font-bold text-xs" style={{ color: C.gray1 }}>Dr. Marcelo Colen</p>
                                    <p className="text-[10px] italic leading-none mt-0.5" style={{ color: C.gold }}>Advogado OAB/MG • Especialista</p>
                                </div>
                            </div>

                            <h1 className="text-[clamp(1.85rem,9vw,2.5rem)] md:text-5xl lg:text-7xl font-black leading-[1.1] md:leading-[1.05] mb-4 md:mb-6 tracking-tighter" style={{ color: C.white, fontFamily: "Georgia, serif" }}>
                                {D.hero.h1_1}
                                <br />
                                <span style={{ color: C.red, textShadow: "0 0 20px rgba(239,68,68,0.4)" }}>{D.hero.h1_2}</span>
                            </h1>

                            <p className="text-sm md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8 max-w-[40ch] md:max-w-2xl text-gray-300 font-medium">
                                {D.hero.sub}
                            </p>

                            <div className="max-w-md w-full flex flex-col items-center space-y-4">
                                <Cta text={D.hero.cta} full />
                                <div className="mt-2 group">
                                    <CtaLink text="Enviar Meu Resultado" />
                                </div>

                                <div className="space-y-1 opacity-90 text-center mt-4">
                                    <p className="text-[11px] md:text-sm font-bold" style={{ color: C.gray2 }}>{D.hero.ctaLine1}</p>
                                    <p className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest font-extrabold flex items-center justify-center">
                                        <Lock className="w-3 h-3 mr-1" />
                                        {D.hero.ctaLine2}
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
            {/* URGÊNCIA — PRAZO — MOVIDO PARA LOGO APÓS HERO                 */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-12 md:py-20" style={{ background: `linear-gradient(135deg, rgba(127,29,29,0.15) 0%, rgba(127,29,29,0.08) 50%, rgba(127,29,29,0.15) 100%)`, borderTop: `1px solid ${C.redBorder}`, borderBottom: `1px solid ${C.redBorder}` }}>
                <Container>
                    <div className="max-w-2xl mx-auto text-center px-4">
                        <Clock className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-6 animate-[bounce_2s_infinite]" style={{ color: "#f87171" }} />
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
            {/* BASE TÉCNICA (NOVO DO REPROVADO)                             */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-12 md:py-16" style={{ backgroundColor: C.bg2 }}>
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: C.white, fontFamily: "Georgia, serif" }}>
                            O que pode garantir o seu recurso
                        </h2>
                        <p className="text-center text-gray-300 md:text-lg mb-8 max-w-xl mx-auto">O recurso pode depender fundamentalmente de falhas muito comuns:</p>
                        
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                "Inconsistência na avaliação da banca",
                                "Erro procedimental da comissão",
                                "Motivação insuficiente (genérica)",
                                "Análise incompatível com o que estava no edital"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-center rounded-xl p-5" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: `1px solid ${C.goldSoft}` }}>
                                    <Scale className="w-6 h-6 flex-shrink-0" style={{ color: C.gold }} />
                                    <p className="font-medium text-sm md:text-base text-gray-100">{item}</p>
                                </div>
                            ))}
                        </div>
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
                            <FileText className="w-10 h-10 animate-pulse" style={{ color: C.gold }} />
                            <h2 className="text-2xl md:text-4xl font-bold text-center px-4" style={{ color: C.white, fontFamily: "Georgia, serif" }}>
                                {D.enviar.title}
                            </h2>
                        </div>

                        <div className="space-y-3 mb-8">
                            {D.enviar.items.map((item, i) => (
                                <div key={i} className="flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-white/5" style={{ border: `1px solid rgba(201,162,39,0.2)`, backgroundColor: C.goldSoft }}>
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
                        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center" style={{ color: C.white, fontFamily: "Georgia, serif" }}>Dúvidas Frequentes Rápidas</h2>
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
                            Não deixe o seu tempo esgotar.
                        </p>

                        <div className="mb-8 p-6 rounded-2xl text-left" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
                            <p className="font-bold mb-4 text-sm md:text-base text-center" style={{ color: C.gold }}>Envie agora para análise rápida:</p>
                            <div className="space-y-3 max-w-[280px] mx-auto">
                                {["Resultado da heteroidentificação", "Edital do concurso", "Prazo final do recurso"].map((item, i) => (
                                    <div key={i} className="flex gap-3 items-center">
                                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: C.gold, color: C.bg1 }}>
                                            <Check className="w-3 h-3 font-bold" />
                                        </div>
                                        <span className="text-sm md:text-base font-medium text-gray-200">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Cta text="Falar com Especialista Agora" full />
                        <p className="text-xs mt-6" style={{ color: C.gray3 }}>
                            © 2026 Marcelo Colen Advogados · OAB/MG
                        </p>
                    </div>
                </Container>
            </section>

            {/* Floating WhatsApp Padrão Larga Mobile */}
            <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:w-auto z-50">
                <a
                    href={getDirectWhatsAppLink(D.wa)}
                    onClick={trackWhatsAppClick}
                    className="flex items-center justify-center md:justify-start w-full md:w-auto h-14 md:h-14 md:px-6 rounded-xl md:rounded-full hover:scale-105 active:scale-95 transition-all font-bold text-[15px] shadow-[0_4px_20px_rgba(37,211,102,0.4)]"
                    style={{ backgroundColor: C.green, color: C.white }}
                    aria-label="WhatsApp"
                >
                    <MessageCircle className="w-6 h-6 mr-2" />
                    Falar no WhatsApp
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
    const MP4_SRC = mp4Src ?? "";

    return (
        <section className="py-12 md:py-24" style={{ backgroundColor: C.bg1 }}>
            <div className="max-w-[720px] mx-auto px-6">
                <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-center mb-3" style={{ color: C.gold }}>
                    Mensagem do Especialista
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 leading-tight md:leading-snug" style={{ color: C.white, fontFamily: "Georgia, serif" }}>
                    Entenda em 2 minutos por que você ainda pode contestar o resultado.
                </h2>
                <div className="relative w-full rounded-2xl overflow-hidden scale-[1.02] md:scale-100" style={{ boxShadow: "0 12px 60px rgba(0,0,0,0.65)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    {MP4_SRC ? (
                        <video src={MP4_SRC} controls playsInline preload="none" className="w-full object-cover" />
                    ) : (
                        <LiteYouTubeEmbed id={YOUTUBE_ID} title="Vídeo de Análise da Situação" poster="maxresdefault" wrapperClass="yt-lite" />
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

