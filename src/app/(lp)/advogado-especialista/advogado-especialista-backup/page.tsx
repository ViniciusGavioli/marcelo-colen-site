"use client";

import Image from "next/image";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import {
    MessageCircle,
    Clock,
    Send,
    Search,
    Gavel,
    ChevronDown,
    Lock,
    Check,
    Scale,
    ShieldCheck,
    BookOpen,
    Users,
    Award,
} from "lucide-react";
import { getDirectWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";
import { useState } from "react";

/* ═══════════════════════════════════════════════════════════════════════════
   DESIGN TOKENS
   ═══════════════════════════════════════════════════════════════════════════ */
const T = {
    navy: "#0B1730",
    navyMid: "#0F1D3A",
    navyLight: "#1A2A4A",
    bg: "#F6F2EB",
    bgAlt: "#EDE8DF",
    body: "#1C2430",
    bronze: "#8C6A43",
    bronzeSoft: "rgba(140,106,67,0.12)",
    line: "#D9CCBB",
    lineSoft: "rgba(11,23,48,0.08)",
    white: "#FFFFFF",
    green: "#10b981",
    greenGlow: "rgba(16,185,129,0.22)",
};

const HEADING = "'Outfit', system-ui, sans-serif";
const BODY = "'Inter', system-ui, sans-serif";

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`;

const WA_MSG = "Olá doutor, fui indeferido na heteroidentificação hoje. Posso te mandar meu resultado?";

/* ═══════════════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════════════ */
const HERO = {
    badge: "Prazo de recurso: entre 2 e 5 dias. Cada hora conta.",
    h1_1: "Passou nas Provas.",
    h1_2: "Reprovado pela Banca.",
    h1_3: "Isso tem contestação.",
    sub: "Se a banca te indeferiu, pode ter cometido um erro. Esse erro pode ser contestado antes do prazo acabar.",
    credentials: [
        "Mestre em Direito pela UFMG",
        "Secretário da Comissão Nacional de Promoção da Igualdade da OAB Federal",
        "Diretor de Diversidade da OAB/MG",
    ],
};

const STATS = [
    { n: "8+", label: "Anos em Direito Antidiscriminatório", Icon: Scale },
    { n: "500+", label: "Casos de heteroidentificação analisados", Icon: BookOpen },
    { n: "27", label: "Estados com atuação", Icon: Users },
    { n: "OAB", label: "Comissão Nacional de Igualdade", Icon: Award },
];

const PAIN = [
    { title: "Indeferimento genérico", desc: "A banca disse 'não atende ao fenótipo' sem explicar o motivo." },
    { title: "Avaliação relâmpago", desc: "A avaliação durou poucos minutos ou foi feita por vídeo de baixa qualidade." },
    { title: "Identidade ignorada", desc: "Você sempre se identificou como pardo e foi pego de surpresa com o resultado." },
    { title: "Anos de estudo em risco", desc: "Está com medo de perder tudo por uma análise subjetiva e mal conduzida." },
];

const DEPOIMENTOS = [
    { nome: "M.S. · Concurso Federal · Brasília/DF", texto: "Fui eliminada na heteroidentificação do CNU depois de anos estudando. O Dr. Marcelo analisou meu caso em horas e identificou falha procedimental da banca. Consegui liminar e retornei ao certame." },
    { nome: "R.O. · Concurso Estadual · Belo Horizonte/MG", texto: "A motivação da banca era genérica, três linhas apenas. Com o recurso bem fundamentado, a eliminação foi revertida administrativamente. Hoje estou no cargo." },
    { nome: "C.A. · Concurso Cebraspe · São Paulo/SP", texto: "Achei que não tinha mais saída. O atendimento foi imediato e o Dr. Marcelo explicou tecnicamente por que minha reprovação tinha base para contestação. Recomendo a qualquer candidato nessa situação." },
];

const ANALISE = [
    "Edital do concurso",
    "Resultado da heteroidentificação",
    "Fundamentação apresentada pela banca",
    "Prazo recursal disponível",
];

const STEPS = [
    { n: "01", t: "Você envia", d: "Manda o resultado e o edital pelo WhatsApp. Pode ser print, PDF ou foto.", Icon: Send },
    { n: "02", t: "Analisamos", d: "O Dr. Marcelo analisa pessoalmente: edital, motivação da banca, prazo e viabilidade.", Icon: Search },
    { n: "03", t: "Você decide", d: "Recebe orientação técnica clara e decide como prosseguir. Sem compromisso.", Icon: Gavel },
];

const FAQ = [
    { q: "Tem custo essa primeira conversa?", a: "Não. A análise inicial do seu caso (edital, resultado e prazo) é feita sem custo. Se houver fundamento para recurso e você quiser contratar, apresentamos os honorários nesse momento." },
    { q: "E se não houver fundamento para recurso?", a: "Informamos isso claramente, sem enrolação. Não cobramos para dizer que o caso não tem viabilidade. Preferimos ser diretos do que gerar expectativa falsa." },
    { q: "A conversa é protegida por sigilo?", a: "Sim. Todo contato está protegido pelo sigilo profissional da advocacia. Nenhuma informação é compartilhada." },
    { q: "A atuação abrange candidatos de qualquer estado?", a: "Sim. O atendimento é 100% online e nacional. Já atuamos em concursos federais e estaduais em todo o Brasil." },
];

/* ═══════════════════════════════════════════════════════════════════════════
   REUSABLE
   ═══════════════════════════════════════════════════════════════════════════ */
function Wrap({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return <div className={`mx-auto px-5 sm:px-8 w-full ${className}`} style={{ maxWidth: 1120 }}>{children}</div>;
}

function Cta({ text = "Enviar Meu Caso no WhatsApp", full = false, variant = "green" }: { text?: string; full?: boolean; variant?: "green" | "white" }) {
    const isWhite = variant === "white";
    return (
        <a
            href={getDirectWhatsAppLink(WA_MSG)}
            onClick={trackWhatsAppClick}
            style={{
                backgroundColor: isWhite ? T.white : T.green,
                color: isWhite ? T.navy : T.white,
                boxShadow: isWhite ? "0 4px 20px rgba(0,0,0,0.15)" : `0 4px 24px ${T.greenGlow}`,
                borderRadius: 14,
                fontFamily: HEADING,
            }}
            className={`group inline-flex items-center justify-center gap-3 font-bold text-[15px] md:text-lg px-7 py-4 md:py-[18px] transition-all duration-150 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] ${full ? "w-full" : ""}`}
        >
            <MessageCircle className="w-5 h-5 md:w-[22px] md:h-[22px] opacity-90" />
            {text}
        </a>
    );
}

function Eyebrow({ children, light = false }: { children: string; light?: boolean }) {
    return (
        <p
            className="uppercase font-bold tracking-[0.1em] mb-3"
            style={{ color: light ? "rgba(255,255,255,0.5)" : T.bronze, fontSize: "0.72rem", fontFamily: BODY, letterSpacing: "0.12em" }}
        >
            {children}
        </p>
    );
}

function SectionDivider() {
    return <div aria-hidden="true" className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(11,23,48,0.10), transparent)" }} />;
}

function FaqItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div style={{ borderColor: T.line }} className="border-b last:border-0">
            <button type="button" onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 md:py-6 text-left group">
                <span className="font-bold text-[15px] md:text-base pr-4" style={{ color: T.navy, fontFamily: HEADING }}>{q}</span>
                <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} style={{ color: T.bronze }} />
            </button>
            {open && <div className="pb-5 md:pb-6 leading-[1.7] text-sm md:text-[15px] pr-8" style={{ color: T.body, opacity: 0.75, maxWidth: "65ch" }}>{a}</div>}
        </div>
    );
}

const secPad = "py-[clamp(56px,8vw,112px)]";

/* ═══════════════════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════════════════ */
export default function AdvogadoEspecialistaPage() {
    return (
        <>
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@600;700;800;900&display=swap" />

            <main style={{ fontFamily: BODY }}>

                {/* ══════════════════════════════════════════════════════════
                    HERO — split layout, navy background
                   ══════════════════════════════════════════════════════════ */}
                <section className="relative overflow-hidden" style={{ backgroundColor: T.navy }}>
                    {/* grain */}
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ backgroundImage: GRAIN, backgroundRepeat: "repeat", backgroundSize: "300px", opacity: 0.03, mixBlendMode: "soft-light" }} />
                    {/* glow */}
                    <div aria-hidden="true" className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(140,106,67,0.08) 0%, transparent 70%)" }} />

                    <Wrap>
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center" style={{ paddingTop: "clamp(40px, 6vw, 80px)", paddingBottom: "clamp(48px, 7vw, 96px)" }}>
                            {/* LEFT — text */}
                            <div className="order-2 lg:order-1">
                                {/* badge */}
                                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                                    <Clock className="w-3.5 h-3.5" style={{ color: T.bronze }} />
                                    <span className="text-[11px] md:text-xs font-semibold tracking-wide text-white/70">{HERO.badge}</span>
                                </div>

                                <h1 className="text-[clamp(2rem,6vw,3.5rem)] font-black leading-[1.05] tracking-tight mb-5" style={{ fontFamily: HEADING, color: T.white }}>
                                    {HERO.h1_1}
                                    <br />
                                    {HERO.h1_2}
                                    <br />
                                    <span style={{ color: T.bronze }}>{HERO.h1_3}</span>
                                </h1>

                                <p className="text-base md:text-lg leading-[1.65] mb-6 font-medium text-white/65 max-w-[48ch]">{HERO.sub}</p>

                                {/* CTA */}
                                <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                                    <Cta />
                                </div>
                                <div className="flex items-center gap-2 text-[11px] text-white/40 uppercase tracking-widest font-semibold">
                                    <Lock className="w-3 h-3" />
                                    Primeira análise gratuita e sigilosa
                                </div>
                            </div>

                            {/* RIGHT — photo + credentials */}
                            <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end">
                                <div className="relative">
                                    <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>
                                        <Image src="/images/marcelo/marcelo-hero.jpg" alt="Dr. Marcelo Colen" fill className="object-cover" priority />
                                    </div>
                                    {/* OAB badge */}
                                    <div className="absolute -bottom-3 -left-3 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest" style={{ backgroundColor: T.bronze, color: T.white, fontFamily: HEADING, boxShadow: "0 4px 16px rgba(0,0,0,0.3)" }}>
                                        OAB/MG
                                    </div>
                                </div>

                                {/* credentials card */}
                                <div className="mt-8 w-full max-w-sm rounded-xl p-5" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                                    <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: T.bronze, fontFamily: HEADING }}>Dr. Marcelo Colen</p>
                                    <ul className="space-y-2">
                                        {HERO.credentials.map((c, i) => (
                                            <li key={i} className="flex items-start gap-2.5">
                                                <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: T.bronze }} />
                                                <span className="text-[13px] leading-snug text-white/70 font-medium">{c}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Wrap>
                </section>

                {/* ══════════════════════════════════════════════════════════
                    VÍDEO
                   ══════════════════════════════════════════════════════════ */}
                <section className={secPad} style={{ backgroundColor: T.bg }}>
                    <Wrap>
                        <div className="max-w-[760px] mx-auto">
                            <div className="text-center mb-10">
                                <Eyebrow>Mensagem do especialista</Eyebrow>
                                <h2 className="text-2xl md:text-[2.25rem] font-extrabold leading-[1.1] tracking-tight" style={{ color: T.navy, fontFamily: HEADING }}>
                                    Entenda em 2 minutos por que você ainda pode contestar.
                                </h2>
                            </div>
                            <div className="relative w-full rounded-2xl overflow-hidden" style={{ boxShadow: "0 16px 48px rgba(11,23,48,0.12)", border: `1px solid ${T.line}` }}>
                                <LiteYouTubeEmbed id="jAiQi4CgMN0" title="Mensagem do Dr. Marcelo Colen" poster="maxresdefault" wrapperClass="yt-lite" />
                            </div>
                            <div className="flex justify-center mt-8">
                                <Cta />
                            </div>
                        </div>
                    </Wrap>
                </section>

                {/* ══════════════════════════════════════════════════════════
                    STATS BAR
                   ══════════════════════════════════════════════════════════ */}
                <section style={{ backgroundColor: T.bgAlt, borderBottom: `1px solid ${T.line}` }}>
                    <Wrap>
                        <div className="grid grid-cols-2 md:grid-cols-4 divide-x" style={{ borderColor: T.line }}>
                            {STATS.map((s, i) => (
                                <div key={i} className="text-center py-6 md:py-8 px-3">
                                    <s.Icon className="w-5 h-5 mx-auto mb-2" style={{ color: T.bronze }} strokeWidth={1.8} />
                                    <p className="text-2xl md:text-3xl font-black tracking-tight" style={{ color: T.navy, fontFamily: HEADING }}>{s.n}</p>
                                    <p className="text-[11px] md:text-xs mt-1 font-medium uppercase tracking-wider" style={{ color: T.body, opacity: 0.5 }}>{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </Wrap>
                </section>

                {/* ══════════════════════════════════════════════════════════
                    ISSO ACONTECEU COM VOCÊ?
                   ══════════════════════════════════════════════════════════ */}
                <section className={secPad} style={{ backgroundColor: T.bg }}>
                    <Wrap>
                        <div className="max-w-3xl mx-auto">
                            <Eyebrow>Reconhece essa situação?</Eyebrow>
                            <h2 className="text-2xl md:text-[2.5rem] font-extrabold leading-[1.1] tracking-tight mb-10" style={{ color: T.navy, fontFamily: HEADING }}>
                                Isso aconteceu com você?
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4 mb-10">
                                {PAIN.map((item, i) => (
                                    <div key={i} className="rounded-xl p-5 flex gap-4" style={{ backgroundColor: T.white, border: `1px solid ${T.line}`, boxShadow: "0 2px 12px rgba(11,23,48,0.04)" }}>
                                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: T.navy }}>
                                            <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm mb-1" style={{ color: T.navy, fontFamily: HEADING }}>{item.title}</p>
                                            <p className="text-[13px] md:text-sm leading-[1.65]" style={{ color: T.body, opacity: 0.7 }}>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="text-center">
                                <Cta />
                            </div>
                        </div>
                    </Wrap>
                </section>

                <SectionDivider />

                {/* ══════════════════════════════════════════════════════════
                    PROVA SOCIAL
                   ══════════════════════════════════════════════════════════ */}
                <section className={secPad} style={{ backgroundColor: T.white }}>
                    <Wrap>
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-10">
                                <Eyebrow>Resultados reais</Eyebrow>
                                <h2 className="text-2xl md:text-[2.25rem] font-extrabold leading-[1.1] tracking-tight" style={{ color: T.navy, fontFamily: HEADING }}>
                                    Candidatos que agiram a tempo
                                </h2>
                            </div>
                            <div className="grid md:grid-cols-3 gap-5">
                                {DEPOIMENTOS.map((dep, i) => (
                                    <div key={i} className="rounded-xl p-6 flex flex-col relative" style={{ backgroundColor: T.bg, border: `1px solid ${T.line}` }}>
                                        <span aria-hidden="true" className="absolute top-4 right-5 text-5xl leading-none font-serif select-none" style={{ color: T.bronze, opacity: 0.12 }}>&rdquo;</span>
                                        <p className="text-sm leading-[1.7] mb-5 flex-1 italic relative z-10" style={{ color: T.body, opacity: 0.8 }}>&ldquo;{dep.texto}&rdquo;</p>
                                        <div className="h-px mb-3" style={{ background: `linear-gradient(to right, ${T.bronze}, transparent)`, opacity: 0.2 }} />
                                        <p className="text-[10px] font-bold uppercase tracking-[0.15em]" style={{ color: T.bronze }}>{dep.nome}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Wrap>
                </section>

                {/* ══════════════════════════════════════════════════════════
                    A BANCA ERRA — navy section
                   ══════════════════════════════════════════════════════════ */}
                <section className={secPad} style={{ backgroundColor: T.navyMid }}>
                    <Wrap>
                        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
                            <div>
                                <Eyebrow light>Por que você pode contestar</Eyebrow>
                                <h2 className="text-2xl md:text-[2.5rem] font-extrabold leading-[1.1] tracking-tight mb-6" style={{ color: T.white, fontFamily: HEADING }}>
                                    A Banca Erra.<br />E Erra Muito.
                                </h2>
                                <p className="text-base md:text-lg leading-[1.7] mb-4 text-white/70">
                                    O procedimento de heteroidentificação é subjetivo. Todos os dias, candidatos legítimos são eliminados por iluminação ruim, câmera de baixa qualidade ou despreparo dos avaliadores.
                                </p>
                                <p className="text-base md:text-lg leading-[1.7] mb-8 text-white/50">
                                    Erros de procedimento podem fundamentar o recurso. Nós identificamos se houve falha e orientamos sua defesa técnica.
                                </p>
                                <Cta variant="white" />
                            </div>
                            <div className="space-y-4">
                                {["Motivação genérica sem detalhar fenótipo", "Tempo de avaliação insuficiente", "Composição irregular da comissão", "Critérios divergentes do edital"].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 rounded-xl p-4" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                                        <ShieldCheck className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: T.bronze }} />
                                        <p className="text-sm md:text-[15px] font-medium text-white/75">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Wrap>
                </section>

                <SectionDivider />

                {/* ══════════════════════════════════════════════════════════
                    O QUE ANALISAMOS
                   ══════════════════════════════════════════════════════════ */}
                <section className={secPad} style={{ backgroundColor: T.white }}>
                    <Wrap>
                        <div className="max-w-2xl mx-auto">
                            <div className="text-center mb-8">
                                <Eyebrow>Análise técnica</Eyebrow>
                                <h2 className="text-2xl md:text-[2.25rem] font-extrabold leading-[1.1] tracking-tight" style={{ color: T.navy, fontFamily: HEADING }}>
                                    O que analisamos no seu caso
                                </h2>
                            </div>
                            <div className="space-y-3 mb-8">
                                {ANALISE.map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 rounded-xl p-4" style={{ backgroundColor: T.bg, border: `1px solid ${T.line}` }}>
                                        <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: T.navy }}>
                                            <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
                                        </div>
                                        <p className="font-semibold text-sm md:text-[15px]" style={{ color: T.body }}>{item}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="text-center">
                                <Cta />
                            </div>
                        </div>
                    </Wrap>
                </section>

                {/* ══════════════════════════════════════════════════════════
                    POR QUE AGIR RÁPIDO
                   ══════════════════════════════════════════════════════════ */}
                <section className={secPad} style={{ backgroundColor: T.navy }}>
                    {/* grain */}
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ backgroundImage: GRAIN, backgroundRepeat: "repeat", backgroundSize: "300px", opacity: 0.025, mixBlendMode: "soft-light" }} />
                    <Wrap className="relative z-10">
                        <div className="max-w-3xl mx-auto">
                            <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
                                <div className="hidden md:flex w-20 h-20 rounded-2xl items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(140,106,67,0.15)" }}>
                                    <Clock className="w-10 h-10" style={{ color: T.bronze }} />
                                </div>
                                <div>
                                    <Eyebrow light>Urgência real</Eyebrow>
                                    <h2 className="text-2xl md:text-[2.25rem] font-extrabold leading-[1.1] tracking-tight mb-6" style={{ color: T.white, fontFamily: HEADING }}>
                                        Por Que Agir Rápido?
                                    </h2>
                                    <p className="text-base md:text-lg leading-[1.7] mb-8 text-white/70 max-w-[60ch]">
                                        Em muitos concursos, o prazo de recurso administrativo é de apenas 2 a 5 dias corridos após o resultado. Passado esse prazo, a via administrativa fecha. Resta apenas a judicial, mais longa e mais cara. Por isso a análise precisa acontecer agora.
                                    </p>
                                    <Cta variant="white" />
                                </div>
                            </div>
                        </div>
                    </Wrap>
                </section>

                {/* ══════════════════════════════════════════════════════════
                    COMO FUNCIONA
                   ══════════════════════════════════════════════════════════ */}
                <section className={secPad} style={{ backgroundColor: T.bg }}>
                    <Wrap>
                        <div className="text-center mb-12">
                            <Eyebrow>Passo a passo</Eyebrow>
                            <h2 className="text-2xl md:text-[2.25rem] font-extrabold leading-[1.1] tracking-tight" style={{ color: T.navy, fontFamily: HEADING }}>
                                Como Funciona o Atendimento
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10 relative">
                            {/* connector line */}
                            <div aria-hidden="true" className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-px" style={{ background: `repeating-linear-gradient(90deg, ${T.line} 0, ${T.line} 8px, transparent 8px, transparent 16px)` }} />
                            {STEPS.map((step) => (
                                <div key={step.n} className="relative rounded-xl p-6 text-center" style={{ backgroundColor: T.white, border: `2px solid ${T.line}`, boxShadow: "0 4px 20px rgba(11,23,48,0.05)" }}>
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-lg flex items-center justify-center text-sm font-black" style={{ backgroundColor: T.navy, color: T.white, fontFamily: HEADING, boxShadow: "0 2px 8px rgba(11,23,48,0.2)" }}>
                                        {step.n}
                                    </div>
                                    <step.Icon className="w-7 h-7 mx-auto mb-3 mt-5" style={{ color: T.bronze }} strokeWidth={1.5} />
                                    <h3 className="text-base font-bold mb-2" style={{ color: T.navy, fontFamily: HEADING }}>{step.t}</h3>
                                    <p className="text-sm leading-[1.65]" style={{ color: T.body, opacity: 0.65 }}>{step.d}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <Cta />
                        </div>
                    </Wrap>
                </section>

                <SectionDivider />

                {/* ══════════════════════════════════════════════════════════
                    DR. MARCELO — authority block
                   ══════════════════════════════════════════════════════════ */}
                <section className={secPad} style={{ backgroundColor: T.white }}>
                    <Wrap>
                        <div className="max-w-3xl mx-auto">
                            <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start rounded-2xl p-6 md:p-10" style={{ backgroundColor: T.bg, border: `2px solid ${T.line}` }}>
                                <div className="flex flex-col items-center md:items-start">
                                    <div className="relative">
                                        <Image src="/images/marcelo/marcelo-hero.jpg" alt="Dr. Marcelo Colen" width={180} height={180} className="rounded-xl object-cover w-36 h-36 md:w-44 md:h-44" style={{ boxShadow: "0 8px 32px rgba(11,23,48,0.12)" }} />
                                        <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest" style={{ backgroundColor: T.navy, color: T.white, fontFamily: HEADING }}>OAB/MG</div>
                                    </div>
                                </div>
                                <div className="text-center md:text-left">
                                    <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: T.bronze }}>Quem analisa seu caso</p>
                                    <span aria-hidden="true" className="text-5xl leading-none font-serif hidden md:inline-block mb-2" style={{ color: T.bronze, opacity: 0.15 }}>&ldquo;</span>
                                    <p className="text-base md:text-lg leading-[1.65] italic mb-5" style={{ color: T.body }}>
                                        Minha missão não é apenas escrever recursos. É garantir que a subjetividade de uma banca não destrua o mérito de quem realmente pertence às cotas.
                                    </p>
                                    <div className="h-px mb-4 max-w-[200px] md:mx-0 mx-auto" style={{ backgroundColor: T.line }} />
                                    <p className="font-bold text-base" style={{ color: T.navy, fontFamily: HEADING }}>Dr. Marcelo Colen</p>
                                    <p className="text-xs mt-1 font-medium" style={{ color: T.body, opacity: 0.5 }}>Mestre em Direito pela UFMG · Direito Antidiscriminatório e Concursos Públicos</p>
                                </div>
                            </div>
                        </div>
                    </Wrap>
                </section>

                <SectionDivider />

                {/* ══════════════════════════════════════════════════════════
                    FAQ
                   ══════════════════════════════════════════════════════════ */}
                <section className={secPad} style={{ backgroundColor: T.bg }}>
                    <Wrap>
                        <div className="max-w-2xl mx-auto">
                            <div className="text-center mb-8">
                                <Eyebrow>Tire suas dúvidas</Eyebrow>
                                <h2 className="text-2xl md:text-[2.25rem] font-extrabold leading-[1.1] tracking-tight" style={{ color: T.navy, fontFamily: HEADING }}>
                                    Perguntas Frequentes
                                </h2>
                            </div>
                            <div className="rounded-xl px-5 md:px-6" style={{ backgroundColor: T.white, border: `1px solid ${T.line}`, boxShadow: "0 2px 16px rgba(11,23,48,0.04)" }}>
                                {FAQ.map((item, i) => (
                                    <FaqItem key={i} q={item.q} a={item.a} />
                                ))}
                            </div>
                        </div>
                    </Wrap>
                </section>

                {/* ══════════════════════════════════════════════════════════
                    CTA FINAL
                   ══════════════════════════════════════════════════════════ */}
                <section className={secPad} style={{ backgroundColor: T.navy }}>
                    <Wrap>
                        <div className="max-w-lg mx-auto text-center">
                            <h2 className="text-2xl md:text-[2.25rem] font-extrabold leading-[1.1] tracking-tight mb-3" style={{ color: T.white, fontFamily: HEADING }}>
                                Não deixe o prazo passar.
                            </h2>
                            <p className="text-sm md:text-base mb-8 leading-[1.65] text-white/55">
                                Manda o resultado e o edital agora. A análise é feita em horas.
                            </p>

                            {/* checklist */}
                            <div className="mb-6 p-5 md:p-6 rounded-xl text-left" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                                <div className="space-y-3 max-w-xs mx-auto">
                                    {["Print ou PDF do resultado da heteroidentificação", "Edital do concurso", "Prazo final para recurso (data e horário)"].map((item, i) => (
                                        <div key={i} className="flex gap-3 items-center">
                                            <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(140,106,67,0.25)" }}>
                                                <Check className="w-3 h-3" style={{ color: T.bronze }} strokeWidth={2.5} />
                                            </div>
                                            <span className="text-sm font-medium text-white/75">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* pre-written message */}
                            <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                                <p className="text-[11px] text-center mb-2 text-white/35">Não sabe o que escrever? Copie e envie:</p>
                                <p className="text-sm font-semibold italic text-center text-white/60">
                                    &ldquo;Olá doutor, fui indeferido na heteroidentificação hoje. Posso te mandar meu resultado?&rdquo;
                                </p>
                            </div>

                            <Cta full />

                            <p className="text-[11px] mt-6 italic text-white/30">
                                Cada caso é avaliado individualmente. Não fazemos promessa de resultado.
                            </p>
                            <p className="text-[11px] mt-2 text-white/25">
                                © 2026 Marcelo Colen Advogados · OAB/MG
                            </p>
                        </div>
                    </Wrap>
                </section>
            </main>
        </>
    );
}
