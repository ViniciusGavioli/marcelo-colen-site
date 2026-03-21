"use client";

import Link from "next/link";
import { Scale, Shield, Briefcase, BookOpen, ArrowRight, Check, MessageCircle } from "lucide-react";
import { Container } from "@/components/layout";
import { C, GrainOverlay, GoldDivider, SectionLabel, Cta, LinkButton, Reveal, renderBold } from "@/components/site/primitives";

// ============================================================================
// DATA
// ============================================================================
const AREAS = [
    {
        id: "heteroidentificacao",
        Icon: Scale,
        title: "Heteroidentificação e Cotas Raciais",
        subtitle: "Defesa de candidatos cotistas em concursos públicos",
        description: "Atuação administrativa e judicial especializada na defesa de candidatos que tiveram a autodeclaração racial indeferida em comissões de heteroidentificação. Análise técnica de editais, elaboração de recursos fundamentados e, quando necessário, ação judicial com pedido liminar.",
        services: [
            "Análise jurídica do indeferimento e do edital do concurso",
            "Elaboração de recurso administrativo fundamentado",
            "Mandado de segurança com pedido liminar",
            "Orientação prévia para comparecimento à banca",
            "Acompanhamento de procedimentos de verificação racial",
            "Defesa contra acusações de fraude em autodeclaração",
        ],
        cta: { text: "Quero analisar meu caso", href: "/recurso-heteroidentificacao" },
    },
    {
        id: "compliance",
        Icon: Shield,
        title: "Compliance Antidiscriminatório",
        subtitle: "Políticas internas de combate ao racismo e à discriminação",
        description: "Consultoria para empresas e instituições públicas que buscam implementar programas de integridade com foco em diversidade e combate à discriminação racial. Da elaboração de códigos de conduta à estruturação de canais de denúncia.",
        services: [
            "Diagnóstico de riscos discriminatórios na organização",
            "Elaboração de código de conduta e políticas internas",
            "Treinamentos para lideranças e equipes",
            "Estruturação de canal de denúncias",
            "Pareceres jurídicos em temas de diversidade",
            "Adequação a normativas de igualdade racial",
        ],
        cta: { text: "Solicitar consultoria", href: null },
    },
    {
        id: "criminal",
        Icon: Briefcase,
        title: "Direito Criminal",
        subtitle: "Defesa técnica em todas as fases do processo criminal",
        description: "Atuação criminal com base em Belo Horizonte e abrangência nacional. Defesa em processos penais, inquéritos policiais, habeas corpus, crimes empresariais e atuação perante tribunais superiores, incluindo STJ.",
        services: [
            "Defesa em processos criminais e inquéritos policiais",
            "Habeas corpus e medidas cautelares urgentes",
            "Crimes empresariais e contra a administração pública",
            "Tribunal do Júri",
            "Execução penal e progressão de regime",
            "Revisão criminal",
        ],
        cta: { text: "Falar sobre meu caso", href: null },
    },
    {
        id: "consultoria",
        Icon: BookOpen,
        title: "Consultoria, Ensino e Palestras",
        subtitle: "Formação e conscientização em igualdade racial",
        description: "Atividade docente e de consultoria institucional em temas de igualdade racial, direitos humanos e políticas afirmativas. Participação como palestrante em eventos da OAB, Poder Judiciário e universidades.",
        services: [
            "Palestras sobre igualdade racial e antirracismo",
            "Seminários e workshops para equipes jurídicas",
            "Consultoria para comissões de heteroidentificação",
            "Análise e parecer sobre editais de concursos",
            "Participação em bancas e mesas de debate",
            "Produção de conteúdo jurídico educativo",
        ],
        cta: { text: "Solicitar palestra ou consultoria", href: null },
    },
];

const PROCESS = [
    { step: "01", title: "Primeiro contato", desc: "Envie o edital, a decisão ou descreva sua situação pelo WhatsApp. A triagem é gratuita." },
    { step: "02", title: "Análise jurídica", desc: "Avaliação técnica do caso: prazos, fundamentos, jurisprudência aplicável e viabilidade do recurso." },
    { step: "03", title: "Estratégia e ação", desc: "Proposta clara de honorários e estratégia. Após aprovação, início imediato — tempo é crítico." },
    { step: "04", title: "Acompanhamento", desc: "Atualizações em cada etapa. Transparência total do início ao resultado." },
];

// ============================================================================
// PAGE
// ============================================================================
export default function AtuacaoPage() {
    return (
        <div style={{ backgroundColor: C.bg1, color: C.white }}>
            <GrainOverlay />

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* HERO                                                       */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="pt-4 pb-16 md:pt-12 md:pb-24 relative overflow-hidden" style={{ backgroundColor: C.bg1 }}>
                <div className="absolute inset-0 z-0 select-none">
                    <div className="absolute inset-0" style={{ backgroundImage: "url('/texture-juridica.png')", backgroundRepeat: "repeat", backgroundSize: "1000px", opacity: 0.025 }} />
                </div>
                <Container className="relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <SectionLabel>Áreas de Atuação</SectionLabel>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: C.white, fontFamily: C.serif }}>
                            Especialidades do escritório
                        </h1>
                        <div className="h-px w-20 mx-auto mb-5" style={{ background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`, opacity: 0.35 }} />
                        <p className="text-base md:text-lg leading-relaxed" style={{ color: C.gray2 }}>
                            {renderBold("Atuação especializada em **direito antidiscriminatório**, **cotas raciais**, **compliance** e **direito criminal**. Cada caso recebe atenção individualizada, com estratégia construída sobre fundamento técnico sólido.")}
                        </p>
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* ÁREAS DETALHADAS                                           */}
            {/* ═══════════════════════════════════════════════════════════ */}
            {AREAS.map((area, i) => (
                <section
                    key={area.id}
                    id={area.id}
                    className="py-20 md:py-28 relative overflow-hidden"
                    style={{
                        backgroundColor: i % 2 === 0 ? C.bg2 : C.bg1,
                        borderTop: "1px solid rgba(255,255,255,0.04)",
                    }}
                >
                    <Container className="relative z-10">
                        <div className="max-w-4xl mx-auto">
                            <Reveal>
                                <div className="flex flex-col md:flex-row gap-8 md:gap-14">
                                    {/* Left: Info */}
                                    <div className="flex-1">
                                        <area.Icon className="w-10 h-10 mb-4" style={{ color: C.gold, opacity: 0.8 }} />
                                        <h2 className="text-2xl md:text-3xl font-bold mb-1" style={{ color: C.white, fontFamily: C.serif }}>
                                            {area.title}
                                        </h2>
                                        <p className="text-xs md:text-sm uppercase tracking-wider mb-5" style={{ color: C.gold }}>
                                            {area.subtitle}
                                        </p>
                                        <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: C.gray2 }}>
                                            {area.description}
                                        </p>

                                        {area.cta.href ? (
                                            <Link
                                                href={area.cta.href}
                                                className="inline-flex items-center gap-2 font-medium text-sm px-5 py-2.5 rounded transition-all duration-200 hover:opacity-90"
                                                style={{ backgroundColor: "#c9a227", color: "#0a0a0a" }}
                                            >
                                                {area.cta.text}
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        ) : (
                                            <a
                                                href="https://wa.me/5531972206996?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 font-medium text-sm px-5 py-2.5 rounded transition-all duration-200 hover:opacity-90"
                                                style={{ backgroundColor: "#c9a227", color: "#0a0a0a" }}
                                            >
                                                {area.cta.text}
                                                <ArrowRight className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>

                                    {/* Right: Services */}
                                    <div className="md:w-80 flex-shrink-0">
                                        <p className="text-[10px] uppercase tracking-widest font-semibold mb-4" style={{ color: C.gold }}>
                                            Escopo de atuação
                                        </p>
                                        <div className="space-y-2.5">
                                            {area.services.map((service, j) => (
                                                <div key={j} className="flex items-start gap-2.5">
                                                    <Check className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: C.gold }} />
                                                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: C.gray2 }}>
                                                        {service}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </Container>
                </section>
            ))}

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* PROCESSO                                                   */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: C.bg3 }}>
                <Container className="relative z-10">
                    <SectionLabel>Como funciona</SectionLabel>
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-2" style={{ color: C.white, fontFamily: C.serif }}>
                        Do primeiro contato ao resultado
                    </h2>
                    <GoldDivider />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto mt-12">
                        {PROCESS.map((p, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="text-center p-5">
                                    <span className="text-3xl font-bold block mb-2" style={{ color: C.gold, fontFamily: C.serif }}>{p.step}</span>
                                    <h3 className="text-sm font-bold mb-2" style={{ color: C.white }}>{p.title}</h3>
                                    <p className="text-xs leading-relaxed" style={{ color: C.gray3 }}>{p.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/* CTA                                                        */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="py-20 md:py-28" style={{ backgroundColor: C.bg1, borderTop: `1px solid rgba(255,255,255,0.04)` }}>
                <Container>
                    <div className="max-w-lg mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: C.white, fontFamily: C.serif }}>
                            Agende uma consulta
                        </h2>
                        <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: C.gray2 }}>
                            {renderBold("O escritório realiza uma **análise preliminar** do caso para avaliar a viabilidade jurídica antes de qualquer contratação.")}
                        </p>
                        <a
                            href="https://wa.me/5531972206996?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 text-sm font-medium px-6 py-3 rounded transition-all duration-200 hover:opacity-90"
                            style={{ backgroundColor: "#c9a227", color: "#0a0a0a" }}
                        >
                            Solicitar atendimento
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </a>
                    </div>
                </Container>
            </section>
        </div>
    );
}
