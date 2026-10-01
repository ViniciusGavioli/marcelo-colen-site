import { Container } from "@/components/layout";
import { T, TYPE } from "@/lib/institutional-theme";
import { Reveal } from "./Reveal";
import { Grain, SectionRule } from "./Texture";

// Credenciais como lista tipográfica. Sem contador animado, sem ícone, sem
// badge, sem card: isto não é um painel de estatísticas.
const CREDENCIAIS = [
    {
        // Primeiro item de propósito: antes de formação e cargo, quem chega
        // quer saber de quem é o escritório. Estava só na Trajetória, no meio
        // da página, o que na prática é o mesmo que não estar.
        titulo: "Sócio fundador",
        detalhe: "Colen Advogados",
    },
    {
        titulo: "Mestre em Direito Constitucional",
        detalhe: "Universidade Federal de Minas Gerais, UFMG",
    },
    {
        titulo: "Mais de 10 anos de advocacia estratégica",
        detalhe: "Atuação profissional em questões de alta complexidade",
    },
    {
        titulo: "Diretor de Diversidade e Inclusão",
        detalhe: "Ordem dos Advogados do Brasil, Seção Minas Gerais",
    },
    {
        titulo: "Secretário-Geral",
        detalhe: "Comissão Nacional de Promoção da Igualdade da OAB Federal",
    },
];

export function HomeCredentials() {
    return (
        <section
            className="relative"
            style={{ backgroundColor: T.paper }}
            aria-labelledby="credenciais-titulo"
        >
            <Grain sobre="papel" />
            <Container>
                <div className="relative grid gap-12 py-[clamp(4.5rem,9vw,9rem)] md:grid-cols-12 md:gap-12 lg:gap-20">
                    <div className="md:col-span-5">
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
                                Credenciais
                            </p>
                            <h2
                                id="credenciais-titulo"
                                style={{
                                    fontFamily: T.serif,
                                    fontSize: TYPE.h2,
                                    lineHeight: 1.2,
                                    letterSpacing: "-0.012em",
                                    fontWeight: 400,
                                    color: T.onPaper,
                                    marginTop: "1.25rem",
                                    maxWidth: "22ch",
                                }}
                            >
                                Formação acadêmica, experiência profissional e atuação institucional.
                            </h2>
                        </Reveal>
                    </div>

                    <div className="md:col-span-7">
                        <Reveal delay={80}>
                            <dl>
                                {CREDENCIAIS.map((c, i) => (
                                    <div
                                        key={c.titulo}
                                        className="py-6 md:py-7"
                                        style={{
                                            borderTop:
                                                i === 0 ? "none" : `1px solid ${T.ruleOnPaper}`,
                                        }}
                                    >
                                        <dt
                                            style={{
                                                fontFamily: T.serif,
                                                fontSize: TYPE.h3,
                                                lineHeight: 1.3,
                                                color: T.onPaper,
                                            }}
                                        >
                                            {c.titulo}
                                        </dt>
                                        <dd
                                            style={{
                                                fontFamily: T.sans,
                                                fontSize: TYPE.micro,
                                                lineHeight: 1.6,
                                                color: T.onPaperMuted,
                                                marginTop: "0.375rem",
                                            }}
                                        >
                                            {c.detalhe}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </Reveal>
                    </div>
                </div>
            </Container>
        </section>
    );
}
