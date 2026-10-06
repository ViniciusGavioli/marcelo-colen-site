import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout";
import { T, TYPE } from "@/lib/institutional-theme";
import { Reveal } from "./Reveal";
import { Grain, SectionRule } from "./Texture";

// Somente participações verificadas.
//
// Os links de vídeo foram conferidos um a um: todos respondem 200, e o nome
// do veículo e a data vieram dos metadados da própria página, não do rótulo
// que acompanhava a lista. Duas correções saíram daí:
//   "CNBC" é Times Brasil, licenciado exclusivo da CNBC no Brasil.
//   "TMC" é TMC News Br.
//
// Uso o nome do programa e a data, não a manchete do episódio: as chamadas
// citam casos em andamento, e manchete de caso concreto em site de escritório
// vira vitrine de processo alheio.
const DESTAQUE = {
    veiculo: "TV Globo Minas",
    tipo: "Entrevista, MG1 e MG2",
    tema: "Participações nos telejornais sobre legislação antidiscriminatória.",
    imagem: "/images/home/midia-destaque-v3.jpg",
    alt: "Marcelo Colen no escritório, em Belo Horizonte",
};

type Aparicao = {
    veiculo: string;
    detalhe: string;
    data?: string;
    href?: string;
};

const APARICOES: Aparicao[] = [
    {
        veiculo: "TMC News",
        detalhe: "Transmissão ao vivo",
        data: "14/09/2026",
        href: "https://www.youtube.com/live/5g259JVnTOE",
    },
    {
        veiculo: "Times Brasil",
        detalhe: "Licenciado exclusivo CNBC, transmissão ao vivo",
        data: "13/09/2026",
        href: "https://www.youtube.com/live/9STBnSxGnFY",
    },
    {
        veiculo: "TMC News",
        detalhe: "Transmissão ao vivo",
        data: "12/09/2026",
        href: "https://www.youtube.com/live/-PWcfq9zi_8",
    },
    {
        veiculo: "SBT News",
        detalhe: "News Noite",
        data: "11/09/2026",
        href: "https://www.youtube.com/watch?v=XZ7s2fKp-fU",
    },
    {
        veiculo: "SBT News",
        detalhe: "News Noite",
        data: "04/09/2026",
        href: "https://www.youtube.com/watch?v=Ce3DMfdbm2k",
    },
    {
        veiculo: "Times Brasil",
        detalhe: "Licenciado exclusivo CNBC, comentário ao vivo",
        data: "03/09/2026",
        href: "https://youtu.be/HXx5LtFUMns",
    },
    {
        veiculo: "Rádio Metrópoles",
        detalhe: "Entrevista em áudio",
    },
    {
        veiculo: "Tribunal de Justiça de Minas Gerais",
        detalhe: "Debate sobre equidade no judiciário mineiro, Fórum Lafayette",
    },
    {
        veiculo: "Assembleia Legislativa de Minas Gerais",
        detalhe: "Registro da Comissão de Direitos Humanos sobre atuação em igualdade racial",
    },
    {
        veiculo: "Podcast Inspirando Advocacia",
        detalhe: "Episódio Por um Judiciário Antirracista",
    },
];

function Linha({ a }: { a: Aparicao }) {
    const conteudo = (
        <div className="grid gap-2 py-6 md:grid-cols-12 md:items-baseline md:gap-6">
            <div className="md:col-span-4">
                <p
                    style={{
                        fontFamily: T.serif,
                        fontSize: "clamp(1.125rem, 1.8vw, 1.375rem)",
                        lineHeight: 1.3,
                        color: T.onInk,
                    }}
                >
                    {a.veiculo}
                </p>
            </div>
            <div className="md:col-span-5">
                <p
                    style={{
                        fontFamily: T.sans,
                        fontSize: TYPE.micro,
                        lineHeight: 1.6,
                        color: T.onInkMuted,
                    }}
                >
                    {a.detalhe}
                </p>
            </div>
            <div className="md:col-span-2">
                <p
                    style={{
                        fontFamily: T.sans,
                        fontSize: TYPE.micro,
                        color: T.onInkFaint,
                        fontVariantNumeric: "tabular-nums",
                    }}
                >
                    {a.data ?? ""}
                </p>
            </div>
            <div className="md:col-span-1 md:text-right">
                {a.href && (
                    <span
                        style={{
                            fontFamily: T.sans,
                            fontSize: TYPE.micro,
                            color: T.onInk,
                            borderBottom: `1px solid ${T.copper}`,
                            paddingBottom: "0.125rem",
                            whiteSpace: "nowrap",
                        }}
                    >
                        Assistir
                    </span>
                )}
            </div>
        </div>
    );

    const borda = { borderTop: `1px solid ${T.ruleOnInk}` };

    if (!a.href) {
        return <li style={borda}>{conteudo}</li>;
    }

    return (
        <li style={borda}>
            <a
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ outlineColor: T.onInk }}
            >
                {conteudo}
                <span className="sr-only">Abre no YouTube, em nova aba</span>
            </a>
        </li>
    );
}

export function MediaSection() {
    return (
        <section
            className="relative"
            style={{ backgroundColor: T.ink }}
            aria-labelledby="midia-titulo"
        >
            <Grain sobre="tinta" />
            <Container>
                <div className="relative py-[clamp(4.5rem,9vw,9rem)]">
                    <Reveal>
                        <SectionRule sobre="tinta" />
                        <p
                            className="uppercase"
                            style={{
                                fontFamily: T.sans,
                                fontSize: TYPE.kicker,
                                letterSpacing: "0.2em",
                                color: T.copperOnInk,
                            }}
                        >
                            Na mídia
                        </p>
                        <h2
                            id="midia-titulo"
                            style={{
                                fontFamily: T.serif,
                                fontSize: TYPE.h2,
                                lineHeight: 1.2,
                                letterSpacing: "-0.012em",
                                fontWeight: 400,
                                color: T.onInk,
                                marginTop: "1.25rem",
                                maxWidth: "30ch",
                            }}
                        >
                            Entrevistas, debates e participações públicas sobre Direito, igualdade racial e questões institucionais.
                        </h2>
                    </Reveal>

                    <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-14">
                        <div className="md:col-span-7">
                            <Reveal delay={60}>
                                <Image
                                    src={DESTAQUE.imagem}
                                    alt={DESTAQUE.alt}
                                    width={1400}
                                    height={875}
                                    sizes="(max-width: 768px) 100vw, 52vw"
                                    className="w-full object-cover aspect-[16/10]"
                                />
                                <p
                                    className="uppercase"
                                    style={{
                                        fontFamily: T.sans,
                                        fontSize: TYPE.kicker,
                                        letterSpacing: "0.18em",
                                        color: T.copperOnInk,
                                        marginTop: "1.5rem",
                                    }}
                                >
                                    {DESTAQUE.veiculo}
                                </p>
                                <p
                                    style={{
                                        fontFamily: T.serif,
                                        fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)",
                                        lineHeight: 1.3,
                                        color: T.onInk,
                                        marginTop: "0.75rem",
                                        maxWidth: "34ch",
                                    }}
                                >
                                    {DESTAQUE.tema}
                                </p>
                                <p
                                    style={{
                                        fontFamily: T.sans,
                                        fontSize: TYPE.micro,
                                        color: T.onInkFaint,
                                        marginTop: "0.75rem",
                                    }}
                                >
                                    {DESTAQUE.tipo}
                                </p>
                            </Reveal>
                        </div>

                        <div className="md:col-span-5">
                            <Reveal delay={120}>
                                <p
                                    style={{
                                        fontFamily: T.sans,
                                        fontSize: TYPE.body,
                                        lineHeight: 1.75,
                                        color: T.onInkMuted,
                                        maxWidth: "40ch",
                                    }}
                                >
                                    As participações em telejornais e transmissões ao vivo tratam
                                    de Direito Criminal, sigilo e decisões dos tribunais
                                    superiores. As demais concentram igualdade racial e questões
                                    institucionais.
                                </p>
                                <Link
                                    href="/midia"
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
                                    Ver participações e publicações
                                </Link>
                            </Reveal>
                        </div>
                    </div>

                    <ul className="mt-16" style={{ borderBottom: `1px solid ${T.ruleOnInk}` }}>
                        {APARICOES.map((a) => (
                            <Linha key={a.veiculo + (a.data ?? "") + a.detalhe} a={a} />
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    );
}
