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
        sub: "Atuação jurídica em recursos contra indeferimento na heteroidentificação de concursos públicos.",
        cta: "Falar com Advogado Especialista",
        ctaLine1: "Você pode enviar a foto do resultado ou do edital agora mesmo.",
        ctaLine2: "Primeira análise sem custo extra e com sigilo total.",
        ctaTrust: "Análise individual, séria e sem falsas promessas de resultado.",
        disclaimer: "Cada caso é avaliado individualmente — sem promessa de resultado.",
    },
    trust: {
        name: "Dr. Marcelo Colen",
        role: "Advogado · OAB/MG · Direito Antidiscriminatório e Concursos Públicos",
        p1: "Marcelo Colen é advogado, Mestre em Direito pela UFMG, graduado em Direito pela PUC Minas e pós-graduado em Gestão Estratégica na Advocacia.",
        p2: "Atua em temas ligados a Cotas Raciais, Heteroidentificação, Concursos Públicos e igualdade racial, com experiência em compliance antidiscriminatório, docência e produção de conteúdo técnico.",
        p3: "Atualmente é Diretor de Diversidade e Inclusão da OAB/MG e Secretário da Comissão Nacional de Promoção da Igualdade da OAB Federal.",
        p4: "Também é professor, palestrante e autor do \"Manual Antirracismo no Esporte\", adotado pela Amstel na campanha \"Barulho Contra o Racismo\" da Libertadores 2022.",
    },
    autoridadeNovo: {
        title: "Análise jurídica individual do seu caso.",
        desc: "Avaliação do edital, da motivação da banca e da viabilidade do recurso.",
        items: [
            "Análise do edital",
            "Análise do resultado da banca",
            "Análise do procedimento adotado",
            "Avaliação do prazo recursal"
        ]
    },
    dor: {
        title: "A avaliação técnica da decisão da comissão de heteroidentificação.",
        p: [
            "Muitas vezes, candidatos com autodeclaração válida são indeferidos de maneira genérica ou inconsistente com os critérios do edital.",
            "Uma análise jurídica qualificada da fundamentação apresentada pela comissão pode apontar falhas procedimentais e indicar as bases fáticas e legais para o recurso."
        ],
        cta: "Pedir Análise Jurídica Agora",
    },
    urg: {
        title: "Por Que Agir Rápido?",
        text: "Em muitos concursos o prazo de recurso é de apenas 2 a 5 dias. Por isso a análise precisa ser rápida.",
        cta: "Verificar Meu Prazo Agora",
    },
    steps: {
        title: "Como Funciona o Nosso Atendimento.",
        items: [
            { n: "01", t: "Envio", d: "Você envia o edital e resultado.", Icon: Send },
            { n: "02", t: "Análise", d: "O caso é analisado.", Icon: Search },
            { n: "03", t: "Orientação", d: "Orientamos os próximos passos.", Icon: Gavel },
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
            <section className="relative min-h-0 flex items-center overflow-hidden py-8 md:py-24 lg:py-32" style={{ backgroundColor: C.bg1 }}>
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
                                <span style={{ color: C.gold }}>{D.hero.h1_2}</span>
                            </h1>

                            {/* Bloco de Autoridade Acadêmica Compacto Integrado */}
                            <div className="mb-6 md:mb-8 text-center bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6 w-full max-w-2xl relative overflow-hidden">
                                {/* Destaque visual sutil */}
                                <div className="absolute top-0 left-0 w-1 h-full" style={{ background: `linear-gradient(180deg, ${C.gold}, transparent)` }} />
                                
                                <p className="font-bold text-base md:text-xl tracking-wide mb-1" style={{ color: C.white }}>Dr. Marcelo Colen — Advogado OAB/MG</p>
                                <p className="font-semibold text-sm md:text-base mb-1" style={{ color: C.gold }}>Mestre em Direito pela UFMG • Diretor de Diversidade da OAB/MG</p>
                                
                                <p className="text-[13px] md:text-sm leading-relaxed mb-3 mt-3" style={{ color: C.gray1 }}>
                                    <span className="font-medium" style={{ color: C.white }}>Atuação em Cotas Raciais, Heteroidentificação e Concursos Públicos</span>, com análise jurídica individual do edital, da decisão da banca e dos caminhos possíveis para recurso.
                                </p>

                                <div className="flex flex-col items-center gap-1.5 mb-4 text-[12px] md:text-[13px]" style={{ color: C.gray2 }}>
                                    <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: C.gold }} /> Secretário da Comissão Nac. de Promoção da Igualdade da OAB Federal</div>
                                    <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: C.gold }} /> Professor, palestrante e autor publicado</div>
                                </div>

                                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] md:text-xs font-bold uppercase tracking-wider mt-2 border-t pt-3" style={{ color: C.gray1, borderColor: "rgba(255,255,255,0.05)" }}>
                                    <div className="flex items-center gap-1.5"><Check className="w-3 h-3" style={{ color: C.gold }} /> Atendimento nacional</div>
                                    <div className="flex items-center gap-1.5"><Check className="w-3 h-3" style={{ color: C.gold }} /> Sigilo total</div>
                                    <div className="flex items-center gap-1.5"><Check className="w-3 h-3" style={{ color: C.gold }} /> Análise rápida</div>
                                </div>
                            </div>

                            <div className="max-w-md w-full flex flex-col items-center space-y-4">
                                <Cta text={D.hero.cta} full />
                                <div className="mt-2 group">
                                    <CtaLink text="Enviar Resultado e Edital" />
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
            {/* AUTORIDADE INSTITUCIONAL E ACADÊMICA                           */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-12 md:py-20" style={{ backgroundColor: C.bg2, borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
                <Container>
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                        <div className="relative flex-shrink-0 md:sticky md:top-10">
                            <div className="w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden" style={{ border: `1px solid rgba(255,255,255,0.1)`, boxShadow: `0 10px 40px rgba(0,0,0,0.5)` }}>
                                <Image src="/images/marcelo/marcelo-hero.jpg" alt="Dr. Marcelo Colen" width={224} height={224} className="object-cover w-full h-full" />
                            </div>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: C.white, fontFamily: "Georgia, serif" }}>{D.trust.name}</h3>
                            <div className="inline-block px-3 py-1 mb-6 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-md" style={{ backgroundColor: C.goldSoft, color: C.gold, border: `1px solid ${C.gold}40` }}>Especialista em Direito Antidiscriminatório</div>
                            
                            <div className="space-y-4 text-[15px] md:text-base leading-relaxed text-left" style={{ color: C.gray2 }}>
                                <p>{D.trust.p1}</p>
                                <p>{D.trust.p2}</p>
                                <p style={{ color: C.white, borderLeftColor: C.gold, backgroundColor: "rgba(255,255,255,0.03)" }} className="font-medium p-4 rounded-r-lg border-l-4">{D.trust.p3}</p>
                                <p>{D.trust.p4}</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* AUTORIDADE (NOVA PARTE)                                      */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-12 md:py-20" style={{ backgroundColor: C.bg2 }}>
                <Container>
                    <div className="max-w-2xl mx-auto scale-[0.98] lg:scale-100">
                        <div className="flex flex-col items-center justify-center gap-3 mb-10 text-center">
                            <Scale className="w-10 h-10" style={{ color: C.gold }} />
                            <h2 className="text-2xl md:text-4xl font-bold px-4 mb-2" style={{ color: C.white, fontFamily: "Georgia, serif" }}>
                                {D.autoridadeNovo.title}
                            </h2>
                            <p className="text-sm md:text-lg font-medium" style={{ color: C.gray2 }}>
                                {D.autoridadeNovo.desc}
                            </p>
                        </div>

                        <div className="space-y-3 mb-8">
                            {D.autoridadeNovo.items.map((item, i) => (
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
                                    className={`text-base md:text-lg leading-relaxed ${i === 0 ? "font-bold text-lg md:text-xl pl-4 py-2 rounded-r-lg" : ""}`}
                                    style={i === 0 ? { color: C.gold, backgroundColor: C.goldSoft, borderLeft: `4px solid ${C.gold}` } : { color: C.gray2 }}
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

                        <div className="mb-8 p-6 rounded-2xl text-left" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
                            <p className="font-bold mb-4 text-sm md:text-base text-center" style={{ color: C.gold }}>Envie agora para análise:</p>
                            <div className="space-y-3 max-w-xs mx-auto">
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

                        <Cta text="Falar com Advogado" full />
                        <p className="text-xs mt-6" style={{ color: C.gray3 }}>
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

