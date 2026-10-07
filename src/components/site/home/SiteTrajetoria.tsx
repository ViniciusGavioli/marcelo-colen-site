import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/layout";
import { SITE_COLORS as C } from "@/lib/site-theme";
import { Divisor } from "./primitivos";

// Trajetória em linha do tempo vertical (é uma sequência, por isso numerada)
// e cargos atuais ao lado da foto. Textos da home anterior, com dois ajustes:
//   - "Mestrado em Direito pela UFMG": o projeto tem "Direito" e "Direito
//     Constitucional" em lugares diferentes; esta forma vale para as duas.
//   - "Secretário", não "Secretário-Geral": é o que diz o certificado de
//     nomeação do Conselho Federal da OAB (gestão 2025/2028).
const ETAPAS = [
    {
        titulo: "Formação",
        texto: "Bacharelado em Direito pela PUC Minas, em 2015. Mestrado em Direito pela Universidade Federal de Minas Gerais. Pós-graduação em Gestão Estratégica na Advocacia.",
    },
    {
        titulo: "Advocacia",
        texto: "Inscrição na OAB/MG em 2016. Mais de dez anos de atuação, com prática concentrada em Direito Criminal e em questões de alta complexidade.",
    },
    {
        titulo: "Atuação institucional",
        texto: "Participação em comissões da OAB desde 2019, inicialmente na Comissão de Direito Penal Econômico e, a partir de 2022, na Comissão de Igualdade Racial.",
    },
    {
        titulo: "Direito Antidiscriminatório",
        texto: "A atuação em igualdade racial passa a organizar a prática profissional, reunindo defesa de candidatos cotistas, procedimentos de heteroidentificação e consultoria antidiscriminatória.",
    },
    {
        titulo: "Produção e participação pública",
        texto: "Docência, palestras e participação em debates promovidos pela OAB, pelo Tribunal de Justiça de Minas Gerais e por universidades.",
    },
];

const CARGOS = [
    "Diretor de Diversidade e Inclusão da OAB/MG",
    "Secretário da Comissão Nacional de Promoção da Igualdade da OAB Federal",
    "Conselheiro Seccional da OAB/MG",
    "Conselheiro Municipal de Promoção da Igualdade Racial em Belo Horizonte",
];

export function SiteTrajetoria() {
    return (
        <section aria-labelledby="trajetoria-titulo" className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: C.bg1 }}>
            <Container className="relative z-10">
                <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
                    <div>
                        {/* Retrato recortado: o painel começa abaixo do topo da foto, então a
                            cabeça sai por cima dele, e o pé do painel se funde no fundo da seção. */}
                        <div className="relative rounded-b-xl overflow-hidden max-w-[380px] mx-auto md:mx-0">
                            <div
                                aria-hidden="true"
                                className="absolute inset-x-0 bottom-0 top-[18%] rounded-t-xl"
                                style={{
                                    background: "radial-gradient(ellipse 75% 55% at 50% 30%, rgba(201,162,39,0.18), transparent 70%), linear-gradient(to bottom, #161616, #0d0d0d)",
                                    border: "1px solid rgba(201,162,39,0.22)",
                                }}
                            />
                            <Image
                                src="/images/marcelo/marcelo-colen-retrato.webp"
                                alt="Retrato de Marcelo Colen"
                                width={1024}
                                height={1536}
                                sizes="(min-width: 768px) 380px, 90vw"
                                className="relative block w-full h-auto"
                            />
                            <div
                                aria-hidden="true"
                                className="absolute inset-x-0 bottom-0 h-1/4 pointer-events-none"
                                style={{ background: `linear-gradient(to top, ${C.bg1}, transparent)` }}
                            />
                        </div>

                        <div className="mt-8 max-w-[380px] mx-auto md:mx-0">
                            <p className="text-xs uppercase tracking-[0.18em] font-semibold mb-4" style={{ color: C.gold }}>
                                Cargos atuais
                            </p>
                            <ul className="space-y-2.5">
                                {CARGOS.map((cargo) => (
                                    <li key={cargo} className="flex items-start gap-2.5 text-sm leading-snug" style={{ color: C.gray1 }}>
                                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: C.gold }} aria-hidden="true" />
                                        {cargo}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="md:pt-4">
                        <div className="text-center md:text-left">
                            <p className="text-[10px] md:text-xs uppercase tracking-[0.22em] mb-3 font-semibold" style={{ color: C.gold }}>
                                Trajetória
                            </p>
                            <h2 id="trajetoria-titulo" className="text-2xl md:text-4xl font-bold leading-tight mb-2" style={{ color: C.white, fontFamily: C.serif }}>
                                Mais de dez anos de advocacia
                            </h2>
                            <Divisor alinhamento="esquerda" />
                        </div>

                        <ol className="mt-10 grid gap-9">
                            {ETAPAS.map((etapa, i) => {
                                const ultima = i === ETAPAS.length - 1;
                                return (
                                    <li key={etapa.titulo} className="relative pl-16">
                                        {!ultima && (
                                            <span
                                                aria-hidden="true"
                                                className="absolute left-5 top-10 -bottom-9 w-px"
                                                style={{ background: `linear-gradient(to bottom, ${C.gold}, rgba(201,162,39,0.25))` }}
                                            />
                                        )}
                                        <span
                                            aria-hidden="true"
                                            className="absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold"
                                            style={{ backgroundColor: C.bg1, border: `1.5px solid ${C.gold}`, color: C.gold, fontFamily: C.serif }}
                                        >
                                            {i + 1}
                                        </span>
                                        <h3 className="pt-1.5 text-lg md:text-xl font-semibold leading-snug" style={{ color: C.white, fontFamily: C.serif }}>
                                            {etapa.titulo}
                                        </h3>
                                        <p className="mt-2 text-sm md:text-[0.9375rem] leading-relaxed text-pretty" style={{ color: C.gray2 }}>
                                            {etapa.texto}
                                        </p>
                                    </li>
                                );
                            })}
                        </ol>

                        <div className="mt-10 text-center md:text-left md:pl-16">
                            <Link
                                href="/sobre"
                                className="text-sm font-semibold pb-0.5 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                                style={{ color: C.gold, borderBottom: `1px solid ${C.goldBorder}`, outlineColor: C.gold }}
                            >
                                Conhecer a trajetória completa
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
