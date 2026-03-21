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
import { DrMarceloSection } from "@/components/sections/DrMarceloSection";

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
// DADOS LP 3: REPROVADO HETEROIDENTIFICAÇÃO
// ============================================================================
const D = {
    hero: {
        badge: "⚠️ Prazo de recurso: entre 2 e 5 dias a partir do resultado. Cada hora conta.",
        h1_1: "Você passou nas provas.",
        h1_2: "A banca te eliminou. Isso pode ser contestado.",
        sub: "Anos de estudo não podem acabar por uma decisão genérica e mal fundamentada de uma comissão de heteroidentificação. Análise jurídica individual do seu caso — rápida, sigilosa e sem custo inicial.",
        credentials: "Dr. Marcelo Colen · Mestre em Direito pela UFMG · Secretário da Comissão Nacional de Promoção da Igualdade da OAB Federal · Diretor de Diversidade da OAB/MG",
        cta: "Analisar Meu Caso Agora",
        ctaLine1: "Você pode enviar o resultado da heteroidentificação agora mesmo.",
        ctaLine2: "Primeira análise gratuita e sigilosa.",
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
        text: "Em muitos concursos, o prazo de recurso administrativo é de apenas 2 a 5 dias corridos após o resultado. Passado esse prazo, a via administrativa fecha. Resta apenas a judicial — mais longa e mais cara. Por isso a análise precisa acontecer agora.",
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
        { q: "Tem custo essa primeira conversa?", a: "Não. A análise inicial do seu caso — edital, resultado e prazo — é feita sem custo. Se houver fundamento para recurso e você quiser contratar, apresentamos os honorários nesse momento." },
        { q: "E se não houver fundamento para recurso?", a: "Informamos isso claramente, sem enrolação. Não cobramos para dizer que o caso não tem viabilidade. Preferimos ser diretos do que gerar expectativa falsa." },
        { q: "A conversa é protegida por sigilo?", a: "Sim. Todo contato está protegido pelo sigilo profissional da advocacia. Nenhuma informação é compartilhada." },
        { q: "A atuação abrange candidatos de qualquer estado?", a: "Sim. O atendimento é 100% online e nacional. Já atuamos em concursos federais e estaduais em todo o Brasil." },
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
// FAQ ITEM (aberto por padrão)
// ============================================================================
function FaqItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(true);
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
// PROVA SOCIAL
// ============================================================================
function ProvasSocial() {
    const depoimentos = [
        {
            nome: "M.S. · Concurso Federal · Brasília/DF",
            texto: "Fui eliminada na heteroidentificação do CNU depois de anos estudando. O Dr. Marcelo analisou meu caso em horas e identificou falha procedimental da banca. Consegui liminar e retornei ao certame.",
        },
        {
            nome: "R.O. · Concurso Estadual · Belo Horizonte/MG",
            texto: "A motivação da banca era genérica, três linhas apenas. Com o recurso bem fundamentado, a eliminação foi revertida administrativamente. Hoje estou no cargo.",
        },
        {
            nome: "C.A. · Concurso Cebraspe · São Paulo/SP",
            texto: "Achei que não tinha mais saída. O atendimento foi imediato e o Dr. Marcelo explicou tecnicamente por que minha reprovação tinha base para contestação. Recomendo a qualquer candidato nessa situação.",
        },
    ];

    return (
        <section className="py-12 md:py-20" style={{ backgroundColor: C.bg2 }}>
            <Container>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: C.white, fontFamily: "Georgia, serif" }}>
                        Candidatos que contestaram a eliminação injusta
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {depoimentos.map((dep, i) => (
                            <div key={i} className="rounded-2xl p-6 flex flex-col" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                                <p className="text-sm md:text-base leading-relaxed mb-4 flex-1" style={{ color: C.gray2, fontStyle: "italic" }}>
                                    &ldquo;{dep.texto}&rdquo;
                                </p>
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

                            <p className="text-sm md:text-lg lg:text-xl leading-relaxed mb-4 md:mb-5 max-w-[40ch] md:max-w-2xl text-gray-300 font-medium">
                                {D.hero.sub}
                            </p>

                            {/* Credenciais */}
                            <p className="text-xs md:text-sm font-medium text-center mb-6 md:mb-8 max-w-xl" style={{ color: C.gold }}>
                                {D.hero.credentials}
                            </p>

                            <div className="max-w-md w-full flex flex-col items-center space-y-4">
                                <Cta text={D.hero.cta} full />

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
            {/* VÍDEO                                                        */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <VideoSection youtubeId="jAiQi4CgMN0" />

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* PROVA SOCIAL                                                 */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <ProvasSocial />

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* O QUE ANALISAMOS NO SEU CASO                                 */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-12 md:py-20" style={{ backgroundColor: C.bg2 }}>
                <Container>
                    <div className="max-w-2xl mx-auto scale-[0.98] lg:scale-100">
                        <div className="flex flex-col items-center justify-center gap-3 mb-10">
                            <FileText className="w-10 h-10 animate-pulse" style={{ color: C.gold }} />
                            <h2 className="text-2xl md:text-4xl font-bold text-center px-4" style={{ color: C.white, fontFamily: "Georgia, serif" }}>
                                {D.analiseCaso.title}
                            </h2>
                        </div>

                        <div className="space-y-3 mb-8">
                            {D.analiseCaso.items.map((item, i) => (
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

                        <Cta text={D.analiseCaso.cta} full />
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* POR QUE AGIR RÁPIDO — PRAZO                                 */}
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
            {/* COMO FUNCIONA                                                */}
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
            {/* DR. MARCELO                                                  */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <DrMarceloSection />

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* FAQ (aberto por padrão)                                     */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-12 md:py-24" style={{ backgroundColor: C.bg2 }}>
                <Container>
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center" style={{ color: C.white, fontFamily: "Georgia, serif" }}>Dúvidas Frequentes</h2>
                        <div className="rounded-2xl p-2 md:p-6" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
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
            <section className="py-12" style={{ backgroundColor: C.bg1, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <Container>
                    <div className="max-w-lg mx-auto text-center">
                        <p className="text-xl md:text-2xl font-bold mb-3" style={{ color: C.white, fontFamily: "Georgia, serif" }}>
                            Não deixe o prazo passar.
                        </p>
                        <p className="text-sm md:text-base mb-8" style={{ color: C.gray2 }}>
                            Manda o resultado e o edital agora. A análise é feita em horas.
                        </p>

                        <div className="mb-8 p-6 rounded-2xl text-left" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
                            <div className="space-y-3 max-w-[280px] mx-auto">
                                {[
                                    "Print ou PDF do resultado da heteroidentificação",
                                    "Edital do concurso",
                                    "Prazo final para recurso (data e horário)",
                                ].map((item, i) => (
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
        <section className="py-12 md:py-24" style={{ backgroundColor: C.bg1 }}>
            <div className="max-w-[720px] mx-auto px-6">
                <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-center mb-3" style={{ color: C.gold }}>
                    Mensagem do Especialista
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 leading-tight md:leading-snug" style={{ color: C.white, fontFamily: "Georgia, serif" }}>
                    Entenda em 2 minutos por que você ainda pode contestar.
                </h2>
                <div className="relative w-full rounded-2xl overflow-hidden scale-[1.02] md:scale-100" style={{ boxShadow: "0 12px 60px rgba(0,0,0,0.65)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    {MP4_SRC ? (
                        <video src={MP4_SRC} controls playsInline preload="none" className="w-full object-cover" />
                    ) : (
                        <LiteYouTubeEmbed id={YOUTUBE_ID} title="Vídeo de Análise da Situação" poster="maxresdefault" wrapperClass="yt-lite" />
                    )}
                </div>
                <div className="flex justify-center mt-8">
                    <Cta text="Quero Analisar Meu Caso Agora" />
                </div>
            </div>
        </section>
    );
}
