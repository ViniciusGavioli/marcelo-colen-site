import { Container } from "@/components/layout";
import { T, TYPE } from "@/lib/institutional-theme";
import { Reveal } from "./Reveal";
import { Grain, SectionRule, Watermark } from "./Texture";

// Cargos como fato. Instituição em destaque, função abaixo, período quando
// aplicável. Sem selo, sem medalha, sem linguagem de prestígio.
const ATUAIS = [
    { org: "OAB/MG", cargo: "Diretor de Diversidade e Inclusão", periodo: "" },
    {
        org: "OAB Federal",
        cargo: "Secretário-Geral, Comissão Nacional de Promoção da Igualdade",
        periodo: "",
    },
    { org: "OAB/MG", cargo: "Conselheiro Seccional", periodo: "" },
    {
        org: "Prefeitura de Belo Horizonte",
        cargo: "Conselheiro Municipal de Promoção da Igualdade Racial",
        periodo: "Desde 2024",
    },
];

const ANTERIORES = [
    {
        org: "OAB/MG",
        cargo: "Presidente da Comissão de Igualdade Racial",
        periodo: "2022 a 2024",
    },
    {
        org: "Escola Superior de Advocacia de MG",
        cargo: "Diretor do Núcleo de Igualdade Racial",
        periodo: "2022 a 2024",
    },
    {
        org: "OAB/MG",
        cargo: "Membro da Comissão de Direito Penal Econômico",
        periodo: "2019 a 2021",
    },
];

function Lista({
    titulo,
    itens,
}: {
    titulo: string;
    itens: { org: string; cargo: string; periodo: string }[];
}) {
    return (
        <div>
            <h3
                className="uppercase"
                style={{
                    fontFamily: T.sans,
                    fontSize: TYPE.kicker,
                    letterSpacing: "0.2em",
                    color: T.onPaperFaint,
                    paddingBottom: "1rem",
                    borderBottom: `1px solid ${T.ruleOnPaper}`,
                }}
            >
                {titulo}
            </h3>

            <ol style={{ borderLeft: `1px solid ${T.ruleOnPaper}`, marginTop: "2rem" }}>
                {itens.map((it) => (
                    <li key={it.org + it.cargo} className="relative pb-8 pl-6 last:pb-0">
                        <span
                            aria-hidden
                            className="absolute left-0 top-2 block -translate-x-1/2 rounded-full"
                            style={{
                                width: 7,
                                height: 7,
                                backgroundColor: T.copper,
                            }}
                        />
                        <p
                            style={{
                                fontFamily: T.serif,
                                fontSize: "clamp(1.125rem, 1.8vw, 1.375rem)",
                                lineHeight: 1.3,
                                color: T.onPaper,
                            }}
                        >
                            {it.org}
                        </p>
                        <p
                            style={{
                                fontFamily: T.sans,
                                fontSize: TYPE.micro,
                                lineHeight: 1.6,
                                color: T.onPaperMuted,
                                marginTop: "0.375rem",
                            }}
                        >
                            {it.cargo}
                        </p>
                        {it.periodo && (
                            <p
                                style={{
                                    fontFamily: T.sans,
                                    fontSize: TYPE.kicker,
                                    color: T.onPaperFaint,
                                    marginTop: "0.25rem",
                                    fontVariantNumeric: "tabular-nums",
                                }}
                            >
                                {it.periodo}
                            </p>
                        )}
                    </li>
                ))}
            </ol>
        </div>
    );
}

export function InstitutionalRoles() {
    return (
        <section
            className="relative overflow-hidden"
            style={{ backgroundColor: T.paperAlt }}
            aria-labelledby="institucional-titulo"
        >
            <Grain sobre="papel" />
            <Watermark
                sobre="papel"
                className="-right-16 top-10 hidden h-[420px] w-[420px] md:block"
            />
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
                            Atuação institucional
                        </p>
                        <h2
                            id="institucional-titulo"
                            style={{
                                fontFamily: T.serif,
                                fontSize: TYPE.h2,
                                lineHeight: 1.2,
                                letterSpacing: "-0.012em",
                                fontWeight: 400,
                                color: T.onPaper,
                                marginTop: "1.25rem",
                                maxWidth: "24ch",
                            }}
                        >
                            Participação no debate jurídico e institucional.
                        </h2>
                    </Reveal>

                    <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
                        <Reveal delay={60}>
                            <Lista titulo="Atual" itens={ATUAIS} />
                        </Reveal>
                        <Reveal delay={120}>
                            <Lista titulo="Trajetória" itens={ANTERIORES} />
                        </Reveal>
                    </div>
                </div>
            </Container>
        </section>
    );
}
