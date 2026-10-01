import { Container } from "@/components/layout";
import { T, TYPE } from "@/lib/institutional-theme";
import { Reveal } from "./Reveal";
import { Grain, SectionRule } from "./Texture";

// Ocupa o lugar que era dos depoimentos com resultado. Descreve o que
// acontece depois do contato, sem prometer desfecho.
const ETAPAS = [
    {
        n: "01",
        titulo: "Análise",
        texto: "Estudo dos documentos, do contexto e dos prazos aplicáveis.",
    },
    {
        n: "02",
        titulo: "Estratégia",
        texto: "Definição das medidas juridicamente adequadas a partir do cenário identificado.",
    },
    {
        n: "03",
        titulo: "Atuação",
        texto: "Condução técnica do caso e acompanhamento das etapas necessárias.",
    },
];

export function MethodSection() {
    return (
        <section
            className="relative"
            style={{ backgroundColor: T.paperAlt }}
            aria-labelledby="metodo-titulo"
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
                            Forma de atuação
                        </p>
                        <h2
                            id="metodo-titulo"
                            style={{
                                fontFamily: T.serif,
                                fontSize: TYPE.h2,
                                lineHeight: 1.2,
                                letterSpacing: "-0.012em",
                                fontWeight: 400,
                                color: T.onPaper,
                                marginTop: "1.25rem",
                            }}
                        >
                            Cada caso exige leitura própria.
                        </h2>
                    </Reveal>

                    {/* Linha conectando as etapas: horizontal no desktop, lateral no mobile */}
                    <div className="relative mt-14">
                        <div
                            aria-hidden
                            className="absolute left-[3px] top-2 bottom-2 w-px md:left-0 md:right-0 md:top-[3px] md:bottom-auto md:h-px md:w-auto"
                            style={{ backgroundColor: T.ruleOnPaper }}
                        />

                        <ol className="relative grid gap-10 md:grid-cols-3 md:gap-10">
                            {ETAPAS.map((e, i) => (
                                <Reveal key={e.n} delay={i * 70}>
                                    <li className="relative pl-8 md:pl-0 md:pt-8">
                                        <span
                                            aria-hidden
                                            className="absolute left-0 top-2 block rounded-full md:top-0"
                                            style={{
                                                width: 7,
                                                height: 7,
                                                backgroundColor: T.copper,
                                            }}
                                        />
                                        <p
                                            className="uppercase"
                                            style={{
                                                fontFamily: T.sans,
                                                fontSize: TYPE.kicker,
                                                letterSpacing: "0.18em",
                                                color: T.onPaperFaint,
                                                fontVariantNumeric: "tabular-nums",
                                            }}
                                        >
                                            {e.n}
                                        </p>
                                        <h3
                                            style={{
                                                fontFamily: T.serif,
                                                fontSize: "clamp(1.375rem, 2.2vw, 1.75rem)",
                                                lineHeight: 1.25,
                                                fontWeight: 400,
                                                color: T.onPaper,
                                                marginTop: "0.625rem",
                                            }}
                                        >
                                            {e.titulo}
                                        </h3>
                                        <p
                                            style={{
                                                fontFamily: T.sans,
                                                fontSize: TYPE.body,
                                                lineHeight: 1.75,
                                                color: T.onPaperMuted,
                                                marginTop: "0.75rem",
                                                maxWidth: "36ch",
                                            }}
                                        >
                                            {e.texto}
                                        </p>
                                    </li>
                                </Reveal>
                            ))}
                        </ol>
                    </div>
                </div>
            </Container>
        </section>
    );
}
