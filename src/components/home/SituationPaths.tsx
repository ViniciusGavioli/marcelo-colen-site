"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout";
import { T, TYPE } from "@/lib/institutional-theme";
import { getDirectWhatsAppLink } from "@/lib/whatsapp";
import { Grain, SectionRule } from "./Texture";

// Roteamento por situação, para quem sabe o problema mas não o nome jurídico
// dele. Abre uma camada curta de contexto. Não é quiz, não tem barra de
// progresso, não emite diagnóstico e não afirma que existe medida cabível.
const CAMINHOS = [
    {
        id: "hetero",
        rotulo: "Fui eliminado em procedimento de heteroidentificação",
        area: "Heteroidentificação e Políticas Afirmativas",
        contexto:
            "A comissão avaliou o fenótipo e indeferiu a autodeclaração. O edital normalmente fixa prazo próprio para recurso administrativo, contado da publicação do resultado.",
        documentos:
            "Edital do certame, resultado ou ata da comissão, autodeclaração apresentada e comprovante de inscrição.",
        acao: { rotulo: "Ver conteúdo sobre heteroidentificação", href: "/recurso-heteroidentificacao", externo: false },
    },
    {
        id: "criminal",
        rotulo: "Estou sendo investigado ou respondo a processo criminal",
        area: "Direito Criminal",
        contexto:
            "A fase em que o caso se encontra, seja inquérito, ação penal ou execução, altera as medidas juridicamente adequadas e os prazos aplicáveis.",
        documentos:
            "Número do procedimento, intimações recebidas e documentos já juntados aos autos.",
        acao: { rotulo: "Ver a área de Direito Criminal", href: "/atuacao", externo: false },
    },
    {
        id: "discriminacao",
        rotulo: "Enfrentei uma situação de discriminação",
        area: "Direito Antidiscriminatório",
        contexto:
            "Situações discriminatórias podem repercutir nas esferas cível, criminal e trabalhista, a depender do contexto e de quem praticou a conduta.",
        documentos:
            "Registro do ocorrido, mensagens, identificação de testemunhas e eventual boletim de ocorrência.",
        acao: { rotulo: "Ver a área antidiscriminatória", href: "/atuacao", externo: false },
    },
    {
        id: "institucional",
        rotulo: "Represento uma empresa ou instituição",
        area: "Consultoria e Atuação Institucional",
        contexto:
            "Demandas institucionais costumam envolver parecer, formação, revisão de política interna ou acompanhamento de procedimento próprio da organização.",
        documentos:
            "Descrição da demanda, normativos internos aplicáveis e prazo pretendido.",
        acao: { rotulo: "Ver consultoria institucional", href: "/atuacao", externo: false },
    },
    {
        id: "outro",
        rotulo: "Outro assunto",
        area: "A definir a partir do relato",
        contexto:
            "Nem toda demanda se encaixa nas situações acima. O enquadramento é feito depois de ouvir o caso.",
        documentos: "Os documentos que você tiver sobre a situação.",
        acao: {
            rotulo: "Falar com o escritório",
            href: getDirectWhatsAppLink(
                "Olá Dr. Marcelo, vim pelo site e gostaria de orientação sobre um assunto jurídico."
            ),
            externo: true,
        },
    },
];

export function SituationPaths() {
    const [aberto, setAberto] = useState<string | null>(null);

    return (
        <section
            className="relative overflow-hidden"
            style={{ backgroundColor: T.ink }}
            aria-labelledby="caminhos-titulo"
        >
            {/* Fotografia como atmosfera, não como assunto: duotone escuro em
                opacidade baixa, atrás do conteúdo. O texto continua lendo
                contra o preto da seção, não contra a imagem. */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage: "url('/images/home/textura-situacoes-v2.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.1,
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                    background: `linear-gradient(to bottom, ${T.ink} 0%, rgba(18,17,16,0.72) 40%, ${T.ink} 100%)`,
                }}
            />

            <Grain sobre="tinta" />

            <Container>
                <div className="relative py-[clamp(4.5rem,9vw,9rem)]">
                    <SectionRule sobre="tinta" />
                    <h2
                        id="caminhos-titulo"
                        style={{
                            fontFamily: T.serif,
                            fontSize: TYPE.h2,
                            lineHeight: 1.2,
                            letterSpacing: "-0.012em",
                            fontWeight: 400,
                            color: T.onInk,
                            maxWidth: "18ch",
                        }}
                    >
                        O que trouxe você até aqui?
                    </h2>
                    <p
                        style={{
                            fontFamily: T.sans,
                            fontSize: TYPE.body,
                            lineHeight: 1.75,
                            color: T.onInkMuted,
                            marginTop: "1.25rem",
                            maxWidth: "56ch",
                        }}
                    >
                        Algumas situações exigem análise jurídica a partir dos documentos, dos
                        prazos e do contexto específico.
                    </p>

                    <div className="mt-12 md:mt-14">
                        {CAMINHOS.map((c, i) => {
                            const estaAberto = aberto === c.id;
                            return (
                                <div
                                    key={c.id}
                                    style={{
                                        borderTop: `1px solid ${T.ruleOnInk}`,
                                        borderBottom:
                                            i === CAMINHOS.length - 1
                                                ? `1px solid ${T.ruleOnInk}`
                                                : "none",
                                    }}
                                >
                                    <button
                                        type="button"
                                        aria-expanded={estaAberto}
                                        aria-controls={`caminho-${c.id}`}
                                        onClick={() => setAberto(estaAberto ? null : c.id)}
                                        className="flex w-full items-baseline gap-5 py-6 text-left transition-colors hover:bg-white/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:py-7"
                                        style={{ minHeight: "3rem", outlineColor: T.copperOnInk }}
                                    >
                                        <span
                                            className="flex-1"
                                            style={{
                                                fontFamily: T.serif,
                                                fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                                                lineHeight: 1.35,
                                                color: T.onInk,
                                            }}
                                        >
                                            {c.rotulo}
                                        </span>
                                        <span
                                            aria-hidden
                                            className="shrink-0"
                                            style={{
                                                color: T.copperOnInk,
                                                transform: estaAberto ? "rotate(45deg)" : "none",
                                                transition: "transform 200ms ease",
                                                fontSize: "1.25rem",
                                                lineHeight: 1,
                                            }}
                                        >
                                            +
                                        </span>
                                    </button>

                                    {estaAberto && (
                                        <div
                                            id={`caminho-${c.id}`}
                                            className="grid gap-6 pb-8 md:grid-cols-12 md:gap-10"
                                        >
                                            <div className="md:col-span-7">
                                                <p
                                                    style={{
                                                        fontFamily: T.sans,
                                                        fontSize: TYPE.body,
                                                        lineHeight: 1.75,
                                                        color: T.onInkMuted,
                                                        maxWidth: "58ch",
                                                    }}
                                                >
                                                    {c.contexto}
                                                </p>

                                                {c.acao.externo ? (
                                                    <a
                                                        href={c.acao.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="mt-6 inline-flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                                                        style={{
                                                            minHeight: "2.75rem",
                                                            fontFamily: T.sans,
                                                            fontSize: "0.9375rem",
                                                            fontWeight: 500,
                                                            color: T.copperOnInk,
                                                            borderBottom: `1px solid ${T.copperOnInk}`,
                                                            outlineColor: T.copperOnInk,
                                                        }}
                                                    >
                                                        {c.acao.rotulo}
                                                    </a>
                                                ) : (
                                                    <Link
                                                        href={c.acao.href}
                                                        className="mt-6 inline-flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                                                        style={{
                                                            minHeight: "2.75rem",
                                                            fontFamily: T.sans,
                                                            fontSize: "0.9375rem",
                                                            fontWeight: 500,
                                                            color: T.copperOnInk,
                                                            borderBottom: `1px solid ${T.copperOnInk}`,
                                                            outlineColor: T.copperOnInk,
                                                        }}
                                                    >
                                                        {c.acao.rotulo}
                                                    </Link>
                                                )}
                                            </div>

                                            <div className="md:col-span-5">
                                                <dl>
                                                    <dt
                                                        className="uppercase"
                                                        style={{
                                                            fontFamily: T.sans,
                                                            fontSize: TYPE.kicker,
                                                            letterSpacing: "0.16em",
                                                            color: T.onInkFaint,
                                                        }}
                                                    >
                                                        Área correspondente
                                                    </dt>
                                                    <dd
                                                        style={{
                                                            fontFamily: T.sans,
                                                            fontSize: TYPE.micro,
                                                            lineHeight: 1.6,
                                                            color: T.onInk,
                                                            marginTop: "0.375rem",
                                                        }}
                                                    >
                                                        {c.area}
                                                    </dd>

                                                    <dt
                                                        className="uppercase"
                                                        style={{
                                                            fontFamily: T.sans,
                                                            fontSize: TYPE.kicker,
                                                            letterSpacing: "0.16em",
                                                            color: T.onInkFaint,
                                                            marginTop: "1.5rem",
                                                        }}
                                                    >
                                                        Documentos normalmente relevantes
                                                    </dt>
                                                    <dd
                                                        style={{
                                                            fontFamily: T.sans,
                                                            fontSize: TYPE.micro,
                                                            lineHeight: 1.6,
                                                            color: T.onInkMuted,
                                                            marginTop: "0.375rem",
                                                        }}
                                                    >
                                                        {c.documentos}
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}
