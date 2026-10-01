"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout";
import { T, TYPE } from "@/lib/institutional-theme";
import { Grain, SectionRule } from "./Texture";

// Índice jurídico. No desktop, lista editorial ampla com painel à direita;
// passar o cursor troca a imagem e o texto. No mobile vira accordion, para a
// página não ficar interminável.
//
// As imagens são de ambiente, sem pessoa. Rosto inventado em site de advogado
// tem o mesmo problema da foto de terceiros legendada como ele: documenta
// alguém que não existe.
const AREAS = [
    {
        n: "01",
        titulo: "Direito Antidiscriminatório",
        texto: "Atuação jurídica em questões relacionadas à discriminação, igualdade racial, direitos fundamentais e proteção contra práticas discriminatórias.",
        imagem: "/images/home/area-01-v2.jpg",
        alt: "Átrio de edifício público modernista brasileiro, com parede de cobogó e piso de granilite",
    },
    {
        n: "02",
        titulo: "Heteroidentificação e Políticas Afirmativas",
        texto: "Orientação e atuação em procedimentos de heteroidentificação, recursos administrativos, concursos públicos, políticas de cotas raciais e medidas judiciais relacionadas.",
        imagem: "/images/home/area-02-v2.jpg",
        alt: "Documento oficial com clipe metálico sobre mesa escura, ao lado de pastas",
    },
    {
        n: "03",
        titulo: "Direito Criminal",
        texto: "Defesa técnica em investigações e processos criminais, habeas corpus, recursos, execução penal e questões de Direito Penal Empresarial.",
        imagem: "/images/home/area-03-v2.jpg",
        alt: "Corredor de edifício público em concreto aparente, com luz lateral e piso espelhado",
    },
    {
        n: "04",
        titulo: "Consultoria e Atuação Institucional",
        texto: "Pareceres, consultoria, formação, palestras e projetos relacionados à igualdade racial, diversidade, integridade e políticas institucionais.",
        imagem: "/images/home/area-04-v2.jpg",
        alt: "Mesa de reunião em madeira escura com cadernos fechados e copo de água",
    },
];

export function PracticeAreas() {
    const [ativo, setAtivo] = useState(0);
    const [aberto, setAberto] = useState<number | null>(null);

    return (
        <section
            className="relative"
            style={{ backgroundColor: T.paperAlt }}
            aria-labelledby="areas-titulo"
        >
            <Grain sobre="papel" />
            <Container>
                <div className="relative py-[clamp(4.5rem,9vw,9rem)]">
                    <SectionRule sobre="papel" />
                    <p
                        className="uppercase"
                        style={{
                            fontFamily: T.sans,
                            fontSize: TYPE.kicker,
                            letterSpacing: "0.2em",
                            color: T.copper,
                        }}
                    >
                        Áreas de atuação
                    </p>
                    <h2 id="areas-titulo" className="sr-only">
                        Áreas de atuação
                    </h2>

                    {/* ---------- DESKTOP: lista editorial + painel de texto ---------- */}
                    <div className="mt-12 hidden gap-14 md:grid md:grid-cols-12">
                        <div className="md:col-span-7">
                            {AREAS.map((a, i) => (
                                <Link
                                    key={a.n}
                                    href="/atuacao"
                                    onMouseEnter={() => setAtivo(i)}
                                    onFocus={() => setAtivo(i)}
                                    className="group flex items-baseline gap-6 py-7 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                    style={{
                                        borderTop: `1px solid ${T.ruleOnPaper}`,
                                        borderBottom:
                                            i === AREAS.length - 1
                                                ? `1px solid ${T.ruleOnPaper}`
                                                : "none",
                                        outlineColor: T.copper,
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: T.sans,
                                            fontSize: TYPE.micro,
                                            color: ativo === i ? T.copper : T.onPaperFaint,
                                            fontVariantNumeric: "tabular-nums",
                                            transition: "color 200ms ease",
                                        }}
                                    >
                                        {a.n}
                                    </span>
                                    <span
                                        className="flex-1"
                                        style={{
                                            fontFamily: T.serif,
                                            fontSize: "clamp(1.5rem, 2.6vw, 2.125rem)",
                                            lineHeight: 1.2,
                                            color: ativo === i ? T.copper : T.onPaper,
                                            transition: "color 200ms ease",
                                        }}
                                    >
                                        {a.titulo}
                                    </span>
                                    <span
                                        aria-hidden
                                        className="transition-transform group-hover:translate-x-1"
                                        style={{ color: T.copper, fontSize: "1.125rem" }}
                                    >
                                        &rarr;
                                    </span>
                                </Link>
                            ))}
                        </div>

                        <div className="md:col-span-5">
                            <div className="sticky top-28">
                                {/* key remonta o nó quando o eixo ativo muda,
                                    reiniciando a animação de entrada do CSS em
                                    vez de trocar o src seco. */}
                                <div key={AREAS[ativo].imagem} className="mc-troca">
                                    <Image
                                        src={AREAS[ativo].imagem}
                                        alt={AREAS[ativo].alt}
                                        width={1100}
                                        height={825}
                                        sizes="36vw"
                                        className="w-full object-cover aspect-[4/3]"
                                    />
                                </div>
                                <p
                                    style={{
                                        fontFamily: T.sans,
                                        fontSize: TYPE.body,
                                        lineHeight: 1.75,
                                        color: T.onPaperMuted,
                                        marginTop: "1.5rem",
                                        paddingLeft: "1.25rem",
                                        borderLeft: `2px solid ${T.copper}`,
                                    }}
                                >
                                    {AREAS[ativo].texto}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ---------- MOBILE: accordion ---------- */}
                    <div className="mt-10 md:hidden">
                        {AREAS.map((a, i) => {
                            const estaAberto = aberto === i;
                            return (
                                <div
                                    key={a.n}
                                    style={{
                                        borderTop: `1px solid ${T.ruleOnPaper}`,
                                        borderBottom:
                                            i === AREAS.length - 1
                                                ? `1px solid ${T.ruleOnPaper}`
                                                : "none",
                                    }}
                                >
                                    <button
                                        type="button"
                                        aria-expanded={estaAberto}
                                        aria-controls={`area-painel-${a.n}`}
                                        onClick={() => setAberto(estaAberto ? null : i)}
                                        className="flex w-full items-baseline gap-4 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                        style={{ minHeight: "3rem", outlineColor: T.copper }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: T.sans,
                                                fontSize: TYPE.micro,
                                                color: T.copper,
                                                fontVariantNumeric: "tabular-nums",
                                            }}
                                        >
                                            {a.n}
                                        </span>
                                        <span
                                            className="flex-1"
                                            style={{
                                                fontFamily: T.serif,
                                                fontSize: "1.375rem",
                                                lineHeight: 1.25,
                                                color: T.onPaper,
                                            }}
                                        >
                                            {a.titulo}
                                        </span>
                                        <span
                                            aria-hidden
                                            style={{
                                                color: T.copper,
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
                                        <div id={`area-painel-${a.n}`} className="pb-6">
                                            <p
                                                style={{
                                                    fontFamily: T.sans,
                                                    fontSize: TYPE.body,
                                                    lineHeight: 1.7,
                                                    color: T.onPaperMuted,
                                                }}
                                            >
                                                {a.texto}
                                            </p>
                                            <Link
                                                href="/atuacao"
                                                className="mt-4 inline-flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                                                style={{
                                                    minHeight: "2.75rem",
                                                    fontFamily: T.sans,
                                                    fontSize: "0.9375rem",
                                                    fontWeight: 500,
                                                    color: T.copper,
                                                    borderBottom: `1px solid ${T.copper}`,
                                                    outlineColor: T.copper,
                                                }}
                                            >
                                                Ver a área de atuação
                                            </Link>
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
