"use client";

import { useRef } from "react";
import Link from "next/link";
import { Container } from "@/components/layout";
import { T, TYPE } from "@/lib/institutional-theme";
import { getDirectWhatsAppLink } from "@/lib/whatsapp";
import { Grain } from "./Texture";
import { Magnetic } from "./Magnetic";
import { RevealLines } from "./RevealLines";
import { HeroParallax } from "./HeroParallax";

const WA = "Olá Dr. Marcelo, vim pelo site e gostaria de falar com o escritório.";

// Quebra manual: a linha cai onde o sentido permite, não onde a caixa
// termina. O texto corrido vai no aria-label do h1, porque o <br> implícito
// entre os spans não gera espaço no nome acessível.
//
// Quatro linhas, não três. Em três, a primeira pedia 811px num espaço de
// 635px e requebrava dentro da própria máscara, empilhando sete linhas
// desalinhadas com um "e" sozinho no meio. O corpo do texto que acompanha
// esta medida está em .mc-h1-hero, no globals.css.
const TITULO = [
    "Advocacia em",
    "Direito Criminal,",
    "Direito Antidiscriminatório e",
    "Políticas de Igualdade Racial.",
];
const TITULO_CORRIDO =
    "Advocacia em Direito Criminal, Direito Antidiscriminatório e Políticas de Igualdade Racial.";

export function HomeHero() {
    const retrato = useRef<HTMLElement>(null);
    const texto = useRef<HTMLDivElement>(null);

    return (
        <section
            className="relative overflow-hidden"
            style={{ backgroundColor: T.ink }}
            aria-labelledby="hero-titulo"
        >
            <HeroParallax retratoRef={retrato} textoRef={texto} />

            <Container>
                {/* z-10: retrato e degradê são absolutos e vêm depois no DOM.
                    Entre 1024px e ~1500px a linha mais longa encosta na borda
                    do retrato e sumia sob o início sólido do degradê. Por cima,
                    ela fica sobre tinta escura e continua legível. */}
                <div ref={texto} className="relative z-10 grid md:grid-cols-12">
                    <div className="py-[clamp(5rem,11vw,11rem)] md:col-span-7">
                        <p
                            className="uppercase"
                            style={{
                                fontFamily: T.sans,
                                fontSize: TYPE.kicker,
                                letterSpacing: "0.2em",
                                color: T.onInkMuted,
                            }}
                        >
                            Advocacia nacional
                        </p>

                        <p
                            className="uppercase"
                            style={{
                                fontFamily: T.serif,
                                fontSize: "clamp(1.0625rem, 1.6vw, 1.25rem)",
                                letterSpacing: "0.24em",
                                color: T.onInk,
                                marginTop: "1.75rem",
                            }}
                        >
                            Marcelo Colen
                        </p>

                        <h1
                            id="hero-titulo"
                            aria-label={TITULO_CORRIDO}
                            style={{ marginTop: "1.25rem" }}
                        >
                            <span aria-hidden>
                                <RevealLines
                                    linhas={TITULO}
                                    delayInicial={0.1}
                                    className="mc-h1-hero"
                                    style={{
                                        fontFamily: T.serif,
                                        lineHeight: 1.15,
                                        letterSpacing: "-0.015em",
                                        fontWeight: 400,
                                        color: T.onInk,
                                    }}
                                />
                            </span>
                        </h1>

                        <p
                            style={{
                                fontFamily: T.sans,
                                fontSize: TYPE.body,
                                lineHeight: 1.75,
                                color: T.onInkMuted,
                                marginTop: "1.75rem",
                                maxWidth: "48ch",
                            }}
                        >
                            Mestre em Direito Constitucional pela UFMG, com atuação jurídica e
                            institucional em Belo Horizonte e em âmbito nacional.
                        </p>

                        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                            <Magnetic>
                                <Link
                                    href="/atuacao"
                                    className="inline-flex items-center justify-center px-7 transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                                    style={{
                                        minHeight: "3rem",
                                        backgroundColor: T.copper,
                                        color: T.onInk,
                                        fontFamily: T.sans,
                                        fontSize: "0.9375rem",
                                        fontWeight: 600,
                                        outlineColor: T.onInk,
                                    }}
                                >
                                    Conheça as áreas de atuação
                                </Link>
                            </Magnetic>

                            <Magnetic>
                                <a
                                    href={getDirectWhatsAppLink(WA)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-7 transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                                    style={{
                                        minHeight: "3rem",
                                        border: `1px solid ${T.ruleOnInk}`,
                                        color: T.onInk,
                                        fontFamily: T.sans,
                                        fontSize: "0.9375rem",
                                        fontWeight: 500,
                                        outlineColor: T.onInk,
                                    }}
                                >
                                    Falar com o escritório
                                </a>
                            </Magnetic>
                        </div>

                        <p
                            style={{
                                fontFamily: T.sans,
                                fontSize: TYPE.micro,
                                letterSpacing: "0.06em",
                                color: T.onInkFaint,
                                marginTop: "2.5rem",
                            }}
                        >
                            OAB/MG 167.463
                        </p>
                    </div>
                </div>
            </Container>

            {/* Arte-direção por breakpoint via <picture>: recorte vertical no
                desktop, horizontal no mobile. Duas <Image> com priority fariam
                o navegador baixar as duas, e a escondida viraria peso morto. */}
            <picture
                ref={retrato}
                className="block md:absolute md:inset-y-0 md:right-0 md:w-[42%] lg:w-[45%]"
                style={{ willChange: "transform" }}
            >
                <source
                    media="(min-width: 768px)"
                    srcSet="/images/home/hero-desktop-v2.jpg"
                />
                {/* <img> cru de propósito: next/image não faz arte-direção
                    por media query, e os arquivos já saem otimizados de
                    scripts/generate-home-images.mjs. */}
                <img
                    src="/images/home/hero-mobile-v2.jpg"
                    alt="Marcelo Colen, advogado"
                    width={1200}
                    height={800}
                    fetchPriority="high"
                    decoding="async"
                    className="block h-full w-full object-cover"
                    style={{ objectPosition: "50% 18%" }}
                />
            </picture>

            <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] md:block lg:w-[45%]"
                style={{
                    background: `linear-gradient(to right, ${T.ink} 0%, rgba(18,17,16,0.55) 22%, rgba(18,17,16,0) 60%)`,
                }}
            />

            <Grain sobre="tinta" />
        </section>
    );
}
