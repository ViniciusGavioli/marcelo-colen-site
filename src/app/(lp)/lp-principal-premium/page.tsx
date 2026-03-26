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
import { getDirectWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";
import { useState } from "react";
import { C, GrainOverlay, GoldDivider, Reveal, renderBold, SectionLabel } from "@/components/site/primitives";
import { DrMarceloSection } from "@/components/sections/DrMarceloSection";

// ============================================================================
// DADOS (Mantidos da LP Principal original conforme pedido)
// ============================================================================
const D = {
    hero: {
        badge: "⚠️ Seu prazo de recurso pode ser de apenas 2 a 5 dias",
        h1_1: "Você Passou em Tudo.",
        h1_2: "E Agora Pode Perder Sua Vaga.",
        proof: "Muitos candidatos ainda conseguem reverter a eliminação.",
        sub: "Se a banca te indeferiu, pode ter cometido um erro — e esse erro pode ser contestado antes do prazo acabar.",
        cta: "Enviar meu caso no WhatsApp",
        ctaLine1: "Você já pode enviar a foto do resultado ou do edital.",
        ctaLine2: "Primeira análise sem custo e com sigilo.",
        ctaTrust: "O Dr. Marcelo acompanha pessoalmente as análises.",
        disclaimer: "Cada caso é avaliado individualmente — sem promessa de resultado.",
    },
    check: {
        title: "Isso aconteceu com você?",
        items: [
            "A banca disse \"não atende ao fenótipo\" sem explicar o motivo.",
            "A avaliação durou poucos segundos ou foi feita por vídeo.",
            "Você sempre se identificou como pardo ou negro e foi pego de surpresa.",
            "Está com medo de perder anos de estudo por uma análise subjetiva.",
        ],
        cta: "Pode me enviar seu caso",
    },
    hope: {
        title: "A Banca Erra — E Erra Muito.",
        p: [
            "O procedimento de heteroidentificação é subjetivo. Todos os dias, candidatos legítimos são eliminados por iluminação ruim, câmera de baixa qualidade ou despreparo dos avaliadores.",
            "Muitos candidatos conseguem reverter. Erros de procedimento podem fundamentar o recurso.",
            "Nós identificamos se houve falha no procedimento e orientamos sua defesa técnica.",
        ],
        cta: "Quero que o Dr. Marcelo veja meu caso",
    },
    trigger: {
        title: "Quando Você DEVE Procurar Ajuda Agora",
        items: [
            "Recebeu o indeferimento hoje ou nos últimos dias",
            "A banca não explicou claramente o motivo",
            "A entrevista durou poucos minutos",
            "Você tem prazo curto no edital",
        ],
        cta: "Enviar meu resultado para análise",
    },
    urg: {
        title: "O Único Risco Real Agora é o Tempo.",
        text: "Você tem entre 2 a 5 dias para protocolar o recurso (dependendo do edital). Se perder esse prazo, não haverá mais como contestar administrativamente.",
        cta: "Verificar Meu Prazo Agora",
    },
    steps: {
        title: "Como Funciona? 3 Passos.",
        items: [
            { n: "01", t: "Envie Seu Caso", d: "Mande o edital e o resultado pelo WhatsApp. Simples assim.", Icon: Send },
            { n: "02", t: "Análise Rápida", d: "Verificamos se a banca cometeu algum erro que pode ser contestado.", Icon: Search },
            { n: "03", t: "Orientação Imediata", d: "Se houver fundamento, você recebe orientação sobre os próximos passos na hora.", Icon: Gavel },
        ],
        cta: "Iniciar Minha Análise",
    },
    suggestedMsg: {
        title: "Não sabe o que escrever? Copie e envie:",
        msg: "Olá doutor, fui indeferido na heteroidentificação hoje. Posso te mandar meu resultado?",
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
    wa: "Olá doutor, fui indeferido na heteroidentificação hoje. Posso te mandar meu resultado?",
};

// ============================================================================
// COMPONENTES AUXILIARES
// ============================================================================

function PremiumCta({ text, full = false, variant = "gold" }: { text: string; full?: boolean; variant?: "gold" | "red" }) {
    const bg = variant === "red" 
        ? "linear-gradient(160deg, #300a0a 0%, #1a0a0a 55%, #1a0000 100%)"
        : "linear-gradient(160deg, #1c0a0a 0%, #0a0a0a 55%, #0f0d00 100%)";
    const border = variant === "red" ? "#ef4444" : "#c9a227";
    const glow = variant === "red" ? "rgba(239,68,68,0.18)" : "rgba(201,162,39,0.18)";

    return (
        <a
            href={getDirectWhatsAppLink(D.wa)}
            onClick={trackWhatsAppClick}
            style={{
                background: bg,
                border: `2px solid ${border}`,
                color: C.white,
                boxShadow: `0 0 28px ${glow}, 0 1px 0 rgba(255,255,255,0.05) inset`,
            }}
            className={`group inline-flex items-center justify-center gap-2 font-semibold text-base md:text-lg px-8 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_40px_${glow}] hover:scale-[1.02] active:scale-[0.98] ${full ? "w-full" : ""}`}
        >
            <MessageCircle className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
            {text}
        </a>
    );
}

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
                    {a}
                </div>
            )}
        </div>
    );
}

// ============================================================================
// PAGE
// ============================================================================
export default function LpPrincipalPremiumPage() {
    return (
        <main style={{ backgroundColor: C.bg1, color: C.white }}>
            <GrainOverlay />

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* HERO — PREMIUM DESIGN                                        */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="relative overflow-hidden min-h-[85vh] flex items-center" style={{ backgroundColor: C.bg1 }}>
                {/* Background layers */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0" style={{ backgroundImage: "url('/texture-marble.png')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.05 }} />
                    <div className="absolute inset-0" style={{ backgroundImage: "url('/texture-bokeh.png')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.1, mixBlendMode: "screen" }} />
                    <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 50% 30%, rgba(201,162,39,0.08) 0%, transparent 70%)` }} />
                    <div className="absolute bottom-0 left-0 right-0 h-48" style={{ background: `linear-gradient(to top, ${C.bg1}, transparent)` }} />
                </div>

                <Container className="relative z-10 py-16 md:py-24">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                        
                        <Reveal>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{
                                backgroundColor: "rgba(239,68,68,0.08)",
                                border: "1px solid rgba(239,68,68,0.2)",
                            }}>
                                <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-red-200">
                                    {D.hero.badge}
                                </span>
                            </div>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <h1 className="mb-6" style={{ fontFamily: C.serif }}>
                                <span className="block text-3xl md:text-5xl lg:text-6xl font-medium italic leading-[1.1] mb-2" style={{ color: C.gray1 }}>
                                    {D.hero.h1_1}
                                </span>
                                <span className="block text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight" style={{
                                    background: `linear-gradient(135deg, ${C.gold}, #e8d5a3, ${C.gold})`,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}>
                                    {D.hero.h1_2}
                                </span>
                            </h1>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <p className="text-base md:text-xl leading-relaxed mb-10 max-w-[45ch] mx-auto" style={{ color: C.gray2 }}>
                                {renderBold(D.hero.sub)}
                            </p>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div className="flex flex-col items-center gap-4">
                                <PremiumCta text={D.hero.cta} variant="red" />
                                <div className="flex items-center gap-6 mt-4 opacity-70">
                                    <div className="flex items-center gap-2 text-[11px] md:text-xs uppercase tracking-widest font-semibold">
                                        <Lock className="w-3 h-3" style={{ color: C.gold }} />
                                        {D.hero.ctaLine2}
                                    </div>
                                    <div className="w-1 h-1 rounded-full bg-white/20" />
                                    <div className="flex items-center gap-2 text-[11px] md:text-xs uppercase tracking-widest font-semibold">
                                        <ShieldCheck className="w-3 h-3" style={{ color: C.gold }} />
                                        {D.hero.ctaTrust}
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        {/* Dr. Marcelo floating trust element */}
                        <Reveal delay={0.4}>
                            <div className="flex items-center gap-3 mt-12 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2" style={{ borderColor: C.gold }}>
                                    <Image src="/images/marcelo/marcelo-hero.jpg" alt="Dr. Marcelo Colen" fill className="object-cover object-top" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs font-bold" style={{ color: C.white }}>Dr. Marcelo Colen</p>
                                    <p className="text-[10px] uppercase tracking-wider" style={{ color: C.gold }}>Mestre pela UFMG · OAB/MG 167.463</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* CHECKLIST — "Isso aconteceu com você?"                       */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: C.bg2 }}>
                <div className="absolute inset-0" style={{ backgroundImage: "url('/texture-geo.png')", opacity: 0.04 }} />
                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <SectionLabel>{D.check.title}</SectionLabel>
                        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: C.serif }}>
                            Entenda se seu caso tem <span style={{ color: C.gold }}>fundamento jurídico</span> 
                        </h2>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                            {D.check.items.map((item, i) => (
                                <Reveal key={i} delay={i * 0.05}>
                                    <div className="flex gap-4 items-start rounded-2xl p-6 transition-all hover:bg-white/[0.02]" style={{
                                        backgroundColor: "rgba(255,255,255,0.01)",
                                        border: "1px solid rgba(255,255,255,0.05)",
                                    }}>
                                        <XCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: "#ef4444", opacity: 0.8 }} />
                                        <p className="font-medium leading-relaxed text-sm md:text-base" style={{ color: C.gray2 }}>
                                            {item}
                                        </p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <GoldDivider className="mb-8" />
                            <PremiumCta text={D.check.cta} />
                        </div>
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* ESPERANÇA — "A Banca Erra"                                  */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-20 md:py-36 relative overflow-hidden" style={{ backgroundColor: C.bg1 }}>
                <div className="absolute inset-0" style={{ backgroundImage: "url('/texture-pedra.png')", opacity: 0.03 }} />
                <Container className="relative z-10">
                    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
                        <div className="w-full lg:w-1/2">
                            <Reveal>
                                <div className="relative">
                                    <div className="absolute -inset-4 rounded-2xl" style={{ border: `1px solid ${C.gold}20` }} />
                                    <div className="rounded-xl overflow-hidden shadow-2xl">
                                        <Image src="/images/marcelo/cotas-cta.jpg" alt="Defesa técnica" width={500} height={600} className="w-full object-cover" />
                                    </div>
                                    <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl shadow-2xl" style={{ backgroundColor: "#0a0a0a", border: `1px solid ${C.gold}40`, backdropFilter: "blur(10px)" }}>
                                        <ShieldCheck className="w-10 h-10 mb-2" style={{ color: C.gold }} />
                                        <p className="text-sm font-bold" style={{ color: C.white }}>Defesa Técnica</p>
                                        <p className="text-[10px] uppercase tracking-wider" style={{ color: C.gray3 }}>Fundamentação Jurídica</p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <SectionLabel align="left">Justiça no Concurso</SectionLabel>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8" style={{ fontFamily: C.serif }}>
                                {D.hope.title}
                            </h2>
                            <div className="space-y-6 mb-10">
                                {D.hope.p.map((p, i) => (
                                    <Reveal key={i} delay={i * 0.1}>
                                        <p className={`text-base md:text-lg leading-relaxed ${i === 1 ? "font-bold text-xl p-6 rounded-xl border-l-4" : ""}`}
                                           style={i === 1 ? { backgroundColor: C.goldSoft, borderColor: C.gold, color: C.gold } : { color: C.gray2 }}>
                                            {p}
                                        </p>
                                    </Reveal>
                                ))}
                            </div>
                            <PremiumCta text={D.hope.cta} full />
                        </div>
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* URGÊNCIA — "O Tempo é o Inimigo"                             */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-20 md:py-32" style={{
                background: `linear-gradient(135deg, rgba(127,29,29,0.12) 0%, rgba(10,10,10,1) 100%)`,
                borderTop: `1px solid rgba(239, 68, 68, 0.1)`,
                borderBottom: `1px solid rgba(239, 68, 68, 0.1)`
            }}>
                <Container>
                    <div className="max-w-2xl mx-auto text-center px-4">
                        <Reveal>
                            <Clock className="w-12 h-12 mx-auto mb-8 animate-pulse text-red-500" />
                            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: C.serif }}>
                                {D.urg.title}
                            </h2>
                            <p className="text-base md:text-xl leading-relaxed mb-10 font-medium" style={{ color: C.gray1 }}>
                                {D.urg.text}
                            </p>
                            <PremiumCta text={D.urg.cta} variant="red" />
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* PASSOS — "Como Funciona"                                     */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-24 md:py-36 relative overflow-hidden" style={{ backgroundColor: C.bg1 }}>
                <Container>
                    <SectionLabel>{D.steps.title}</SectionLabel>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ fontFamily: C.serif }}>
                        Transparência em <span style={{ color: C.gold }}>cada etapa</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {D.steps.items.map((step, i) => (
                            <Reveal key={step.n} delay={i * 0.1}>
                                <div className="relative rounded-2xl p-8 text-center transition-all hover:bg-white/[0.02]" style={{
                                    backgroundColor: "rgba(255,255,255,0.01)",
                                    border: "1px solid rgba(255,255,255,0.06)",
                                }}>
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                                         style={{ backgroundColor: C.gold, color: C.bg1, boxShadow: `0 0 20px ${C.gold}40` }}>
                                        {step.n}
                                    </div>
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-2" style={{ backgroundColor: "rgba(201,162,39,0.08)" }}>
                                        <step.Icon className="w-7 h-7" style={{ color: C.gold }} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3" style={{ color: C.white }}>{step.t}</h3>
                                    <p className="text-sm leading-relaxed" style={{ color: C.gray2 }}>{step.d}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <PremiumCta text={D.steps.cta} />
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* DR. MARCELO SECTION                                          */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <DrMarceloSection />

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* FAQ                                                          */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section className="py-20 md:py-36 relative overflow-hidden" style={{ backgroundColor: C.bg2 }}>
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <SectionLabel>Perguntas Frequentes</SectionLabel>
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ fontFamily: C.serif }}>
                            Esclareça suas <span style={{ color: C.gold }}>dúvidas rápidas</span>
                        </h2>
                        <div className="rounded-3xl p-4 md:p-8" style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
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
            <section className="py-24 relative overflow-hidden" style={{ backgroundColor: C.bg1, borderTop: "1px solid rgba(255,255,255,0.03)" }}>
                {/* Visual Glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px]" style={{ background: "radial-gradient(ellipse at bottom, rgba(201,162,39,0.08) 0%, transparent 70%)" }} />
                
                <Container className="relative z-10">
                    <div className="max-w-2xl mx-auto text-center">
                        <Reveal>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8" style={{ fontFamily: C.serif }}>
                                Não perca sua vaga por <span style={{ color: C.gold }}>omissão</span>.
                            </h2>
                            <p className="text-base md:text-lg mb-12" style={{ color: C.gray2 }}>
                                A análise inicial do seu caso é sigilosa, técnica e sem custo inicial.
                                Envie seu resultado agora para garantir seu direito.
                            </p>
                            <PremiumCta text="Falar com Dr. Marcelo Agora" />
                            <p className="text-[10px] mt-12 opacity-40 italic">
                                © 2026 Marcelo Colen Advogados · OAB/MG 167.463 · Belo Horizonte/MG · Atendimento Nacional
                            </p>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* Floating WhatsApp */}
            <div className="fixed bottom-6 right-6 z-50">
                <a
                    href={getDirectWhatsAppLink(D.wa)}
                    onClick={trackWhatsAppClick}
                    className="flex items-center justify-center w-14 h-14 rounded-full hover:scale-110 transition-transform shadow-2xl"
                    style={{ backgroundColor: "#25D366", color: C.white }}
                    aria-label="WhatsApp"
                >
                    <MessageCircle className="w-8 h-8" />
                </a>
            </div>
        </main>
    );
}
