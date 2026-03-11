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
    Scale
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
// DADOS LP 1: ADVOGADO ESPECIALISTA
// ============================================================================
const D = {
    hero: {
        badge: "⚖️ Análise Técnica Especializada - Atendimento Nacional",
        h1_1: "Advogado Especialista em",
        h1_2: "Cotas Raciais",
        sub: "Atuação jurídica em recursos contra indeferimento na heteroidentificação e concursos públicos.",
        cta: "Falar com Advogado Especialista",
        ctaLine1: "Você pode enviar a foto do resultado ou do edital agora mesmo.",
        ctaLine2: "Primeira análise sem custo extra e com sigilo total.",
        ctaTrust: "Análise individual, séria e sem falsas promessas de resultado.",
        disclaimer: "Cada caso é avaliado individualmente — sem promessa de resultado.",
    },
    trust: {
        name: "Dr. Marcelo Colen",
        role: "Advogado · OAB/MG · Direito Antidiscriminatório e Concursos Públicos",
        quote: "Minha atuação técnica foca na legalidade e nos pilares do fenótipo. Analisamos cada detalhe procedimental da banca para buscar fundamentos reais de defesa.",
    },
    dor: {
        title: "Você passou nas provas, mas foi indeferido na heteroidentificação.",
        p: [
            "Essa etapa rigorosa pode eliminar candidatos de forma definitiva mesmo após aprovação em todas as fases anteriores do concurso.",
            "Dependendo do edital, o prazo para recorrer dessa decisão pode ser muito curto.",
        ],
        cta: "Pedir Análise Jurídica Agora",
    },
    analise: {
        title: "O Que Estudamos e Analisamos no Seu Caso",
        items: [
            "Edital do concurso e regras específicas",
            "Resultado da heteroidentificação",
            "Procedimento adotado administrativamente pela banca",
            "Motivação apresentada pela comissão de heteroidentificação",
            "Prazo limite para apresentação de recurso"
        ],
        cta: "Enviar Documentos para Análise"
    },
    urg: {
        title: "Por Que Agir Rápido?",
        text: "Em diversos processos seletivos e concursos públicos, o prazo concedido para o envio do recurso é de apenas 2 a 5 dias. Por isso é fundamental realizar a avaliação inicial com o máximo de agilidade.",
        cta: "Verificar Meu Prazo Agora",
    },
    steps: {
        title: "Como Funciona o Nosso Atendimento.",
        items: [
            { n: "01", t: "Análise do Caso", d: "Você envia o edital e o resultado do certame pelo WhatsApp para que eu possa verificar a situação inicial.", Icon: Send },
            { n: "02", t: "Estudo Individualizado", d: "O seu caso é analisado detalhada e individualmente, estudando todas as possibilidades da situação.", Icon: Search },
            { n: "03", t: "Estratégia", d: "Se constatado algum fundamento legal para questionar, você é orientado sobre a viabilidade do recurso.", Icon: Gavel },
        ],
        cta: "Iniciar Minha Análise",
    },
    suggestedMsg: {
        title: "Copie a mensagem abaixo para iniciarmos a conversa no WhatsApp:",
        msg: "Olá, gostaria de falar com um advogado especialista em cotas raciais.",
    },
    faq: [
        { q: "Tem custo essa primeira conversa?", a: "Não. A análise inicial que realizamos para compreender seu prazo e viabilidade básica é totalmente gratuita." },
        { q: "E se não houver fundamento para recurso?", a: "Mantemos uma postura honesta e reta. Se não houver erro procedimental da comissão ou base sólida que justifique o questionamento, informaremos prontamente." },
        { q: "A conversa é protegida por sigilo?", a: "Sim, atuamos respeitando estritamente o sigilo profissional conforme exigido pelo Código de Ética e Disciplina da OAB." },
        { q: "A atuação abrange candidatos de qualquer estado?", a: "Sim. Realizamos atendimento em âmbito nacional por meio de suporte 100% digital e acessível." },
    ],
    wa: "Olá, gostaria de falar com um advogado especialista em cotas raciais.",
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
            <Cta text="Enviar Essa Mensagem no WhatsApp" full />
        </div>
    );
}

// ============================================================================
// PAGE
// ============================================================================
export default function AdvogadoPage() {
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
                            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-4 md:mb-6 w-fit" style={{ backgroundColor: "rgba(255,255,255,0.08)", border: `1px solid rgba(255,255,255,0.15)` }}>
                                <Scale className="w-3.5 h-3.5" style={{ color: C.gold }} />
                                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest leading-none" style={{ color: C.gray1 }}>{D.hero.badge}</span>
                            </div>

                            <h1 className="text-[clamp(1.85rem,9vw,2.5rem)] md:text-5xl lg:text-7xl font-black leading-[1.1] md:leading-[1.05] mb-4 md:mb-6 tracking-tighter" style={{ color: C.white, fontFamily: "Georgia, serif" }}>
                                {D.hero.h1_1}
                                <br />
                                <span style={{ color: C.gold }}>{D.hero.h1_2}</span>
                            </h1>

                            <p className="text-sm md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8 max-w-[40ch] md:max-w-2xl text-gray-300 font-medium">
                                {D.hero.sub}
                            </p>

                            <div className="max-w-md w-full flex flex-col items-center space-y-4">
                                <Cta text={D.hero.cta} full />
                                <div className="mt-2 group">
                                    <CtaLink text="Enviar Resultado e Edital Primeiro" />
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
            {/* AUTORIDADE — SUBIDO PARA LOGO APÓS O HERO                    */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-12 md:py-16" style={{ backgroundColor: C.bg2, borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
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
                            <blockquote className="leading-relaxed italic pl-4 text-sm md:text-base" style={{ color: C.gray2, borderLeft: `2px solid ${C.gold}` }}>
                                &ldquo;{D.trust.quote}&rdquo;
                            </blockquote>
                        </div>
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
            {/* O QUE ANALISAMOS                                             */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-12 md:py-20" style={{ backgroundColor: C.bg2 }}>
                <Container>
                    <div className="max-w-2xl mx-auto scale-[0.98] lg:scale-100">
                        <div className="flex flex-col items-center justify-center gap-3 mb-10">
                            <Scale className="w-10 h-10" style={{ color: C.gold }} />
                            <h2 className="text-2xl md:text-4xl font-bold text-center px-4" style={{ color: C.white, fontFamily: "Georgia, serif" }}>
                                {D.analise.title}
                            </h2>
                        </div>

                        <div className="space-y-3 mb-8">
                            {D.analise.items.map((item, i) => (
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

                        <Cta text={D.analise.cta} full />
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* PRAZO CURTO E URGÊNCIA                                       */}
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
            {/* FAQ                                                          */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-12 md:py-24" style={{ backgroundColor: C.bg2 }}>
                <Container>
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center" style={{ color: C.white, fontFamily: "Georgia, serif" }}>Perguntas Frequentes</h2>
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
                            Não deixe o seu direito ser negado indevidamente.
                        </p>
                        <Cta text="Envie seu resultado e edital para a análise." full />
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

