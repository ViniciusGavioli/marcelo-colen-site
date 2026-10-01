import { Container } from "@/components/layout";
import { T, TYPE } from "@/lib/institutional-theme";
import { Reveal } from "./Reveal";
import { Grain, SectionRule } from "./Texture";

export interface Artigo {
    categoria: "Direito Criminal" | "Direito Antidiscriminatório" | "Políticas Afirmativas" | "Institucional";
    titulo: string;
    autor: string;
    data: string;
    minutos: number;
    href: string;
}

// Vazio de propósito. O projeto ainda não tem infraestrutura de artigos, e
// publicar texto inventado num site jurídico é pior do que não ter seção.
// Para ativar: preencha este array e a lista passa a renderizar sozinha,
// junto com os filtros por categoria.
export const ARTIGOS: Artigo[] = [];

export function InsightsSection() {
    const vazio = ARTIGOS.length === 0;

    return (
        <section
            id="artigos"
            className="relative"
            style={{ backgroundColor: T.paper, scrollMarginTop: "4.5rem" }}
            aria-labelledby="artigos-titulo"
        >
            <Grain sobre="papel" />
            <Container>
                <div className="relative py-[clamp(4.5rem,9vw,9rem)]">
                    <Reveal>
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
                            Artigos e análises
                        </p>
                        <h2
                            id="artigos-titulo"
                            style={{
                                fontFamily: T.serif,
                                fontSize: TYPE.h2,
                                lineHeight: 1.2,
                                letterSpacing: "-0.012em",
                                fontWeight: 400,
                                color: T.onPaper,
                                marginTop: "1.25rem",
                                maxWidth: "26ch",
                            }}
                        >
                            Conteúdo jurídico sobre Direito Criminal, Direito Antidiscriminatório, políticas afirmativas e questões institucionais.
                        </h2>
                    </Reveal>

                    {vazio ? (
                        <Reveal delay={60}>
                            <div
                                className="mt-12 py-12"
                                style={{
                                    borderTop: `1px solid ${T.ruleOnPaper}`,
                                    borderBottom: `1px solid ${T.ruleOnPaper}`,
                                }}
                            >
                                <p
                                    style={{
                                        fontFamily: T.sans,
                                        fontSize: TYPE.body,
                                        lineHeight: 1.75,
                                        color: T.onPaperMuted,
                                        maxWidth: "52ch",
                                    }}
                                >
                                    Os primeiros textos estão em preparação e serão publicados
                                    nesta seção.
                                </p>
                            </div>
                        </Reveal>
                    ) : (
                        <ul className="mt-12">
                            {ARTIGOS.map((a, i) => (
                                <li
                                    key={a.href}
                                    style={{
                                        borderTop: `1px solid ${T.ruleOnPaper}`,
                                        borderBottom:
                                            i === ARTIGOS.length - 1
                                                ? `1px solid ${T.ruleOnPaper}`
                                                : "none",
                                    }}
                                >
                                    <a
                                        href={a.href}
                                        className="group grid gap-2 py-8 md:grid-cols-12 md:gap-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                        style={{ outlineColor: T.copper }}
                                    >
                                        <div className="md:col-span-3">
                                            <p
                                                className="uppercase"
                                                style={{
                                                    fontFamily: T.sans,
                                                    fontSize: TYPE.kicker,
                                                    letterSpacing: "0.16em",
                                                    color: T.copper,
                                                }}
                                            >
                                                {a.categoria}
                                            </p>
                                            <p
                                                style={{
                                                    fontFamily: T.sans,
                                                    fontSize: TYPE.kicker,
                                                    color: T.onPaperFaint,
                                                    marginTop: "0.375rem",
                                                }}
                                            >
                                                {a.minutos} min de leitura, {a.data}
                                            </p>
                                        </div>
                                        <div className="md:col-span-9">
                                            <h3
                                                style={{
                                                    fontFamily: T.serif,
                                                    fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)",
                                                    lineHeight: 1.25,
                                                    fontWeight: 400,
                                                    color: T.onPaper,
                                                }}
                                            >
                                                {a.titulo}
                                            </h3>
                                            <p
                                                style={{
                                                    fontFamily: T.sans,
                                                    fontSize: TYPE.micro,
                                                    color: T.onPaperMuted,
                                                    marginTop: "0.5rem",
                                                }}
                                            >
                                                {a.autor}
                                            </p>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </Container>
        </section>
    );
}
