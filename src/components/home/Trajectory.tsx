import Link from "next/link";
import { Container } from "@/components/layout";
import { T, TYPE } from "@/lib/institutional-theme";
import { Reveal } from "./Reveal";
import { Grain } from "./Texture";

// Currículo virando narrativa. Não repete a lista de Credenciais: aqui
// interessa a ordem em que as coisas aconteceram.
const ETAPAS = [
    {
        n: "01",
        titulo: "Formação",
        texto: "Bacharelado em Direito pela PUC Minas, em 2015. Mestrado em Direito Constitucional pela Universidade Federal de Minas Gerais. Pós-graduação em Gestão Estratégica na Advocacia.",
    },
    {
        n: "02",
        titulo: "Advocacia",
        texto: "Inscrição na OAB/MG em 2016. Mais de dez anos de atuação, com prática concentrada em Direito Criminal e em questões de alta complexidade.",
    },
    {
        n: "03",
        titulo: "Atuação institucional",
        texto: "Participação em comissões da OAB desde 2019, inicialmente na Comissão de Direito Penal Econômico e, a partir de 2022, na Comissão de Igualdade Racial.",
    },
    {
        n: "04",
        titulo: "Direito Antidiscriminatório",
        texto: "A atuação em igualdade racial passa a organizar a prática profissional, reunindo defesa de candidatos cotistas, procedimentos de heteroidentificação e consultoria antidiscriminatória.",
    },
    {
        n: "05",
        titulo: "Produção e participação pública",
        texto: "Docência, palestras e participação em debates promovidos pela OAB, pelo Tribunal de Justiça de Minas Gerais e por universidades.",
    },
];

export function Trajectory() {
    return (
        <section
            className="relative"
            style={{ backgroundColor: T.paper }}
            aria-labelledby="trajetoria-titulo"
        >
            <Grain sobre="papel" />
            <Container>
                <div className="relative grid gap-12 py-[clamp(4.5rem,9vw,9rem)] md:grid-cols-12 md:gap-14 lg:gap-20">
                    {/* Fotografia fixa durante parte do scroll no desktop */}
                    <div className="md:col-span-5">
                        <div className="md:sticky md:top-28">
                            {/* Recortes distintos por breakpoint via <picture>.
                                Medido no navegador: duas <Image> com
                                hidden/block baixam as duas, porque o Chrome
                                busca imagem lazy mesmo com display:none. O
                                media query do <source> é resolvido antes do
                                download. */}
                            <picture>
                                <source
                                    media="(min-width: 768px)"
                                    srcSet="/images/home/trajetoria-desktop-v2.jpg"
                                />
                                <img
                                    src="/images/home/trajetoria-mobile-v2.jpg"
                                    alt="Marcelo Colen, retrato"
                                    width={1200}
                                    height={900}
                                    loading="lazy"
                                    decoding="async"
                                    className="block w-full object-cover"
                                />
                            </picture>
                            <p
                                className="uppercase"
                                style={{
                                    fontFamily: T.sans,
                                    fontSize: TYPE.kicker,
                                    letterSpacing: "0.2em",
                                    color: T.copper,
                                    marginTop: "1.5rem",
                                }}
                            >
                                Trajetória
                            </p>
                            <h2 id="trajetoria-titulo" className="sr-only">
                                Trajetória
                            </h2>
                        </div>
                    </div>

                    <div className="md:col-span-7">
                        {/* Identificação civil. Fica aqui, não nas Credenciais,
                            para o bloco anterior não virar repetição. */}
                        <Reveal>
                            <p
                                style={{
                                    fontFamily: T.serif,
                                    fontSize: "clamp(1.25rem, 2.2vw, 1.625rem)",
                                    lineHeight: 1.5,
                                    color: T.onPaper,
                                    maxWidth: "50ch",
                                    marginBottom: "2.5rem",
                                }}
                            >
                                Marcelo Ladeia Colen Guterres é advogado, professor e
                                palestrante, sócio fundador do Colen Advogados.
                            </p>
                        </Reveal>

                        {ETAPAS.map((e, i) => (
                            <Reveal key={e.n} delay={i * 50}>
                                <div
                                    className="grid gap-2 py-8 md:grid-cols-12 md:gap-8 md:py-10"
                                    style={{
                                        borderTop:
                                            i === 0 ? "none" : `1px solid ${T.ruleOnPaper}`,
                                    }}
                                >
                                    <div className="md:col-span-2">
                                        <span
                                            style={{
                                                fontFamily: T.sans,
                                                fontSize: TYPE.micro,
                                                color: T.copper,
                                                fontVariantNumeric: "tabular-nums",
                                            }}
                                        >
                                            {e.n}
                                        </span>
                                    </div>
                                    <div className="md:col-span-10">
                                        <h3
                                            style={{
                                                fontFamily: T.serif,
                                                fontSize: "clamp(1.375rem, 2.2vw, 1.75rem)",
                                                lineHeight: 1.25,
                                                fontWeight: 400,
                                                color: T.onPaper,
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
                                                maxWidth: "56ch",
                                            }}
                                        >
                                            {e.texto}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}

                        <Link
                            href="/sobre"
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
                            Conheça a trajetória completa
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
