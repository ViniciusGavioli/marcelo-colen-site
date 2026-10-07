import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout";
import { SITE_COLORS as C } from "@/lib/site-theme";
import { SITE_CONFIG } from "@/lib/constants";
import { BotaoWhatsApp } from "./primitivos";

// Hero da home institucional. O elemento marcante é a foto no escritório,
// com o letreiro do Colen Advogados atrás: é o que diz "escritório" antes de
// qualquer texto. Fica emoldurada, com cantoneiras douradas fora da moldura;
// o resto do hero segue o idioma da LP (selo com fios, nome em Cormorant,
// linha dourada curta, CTA de borda dourada).
export function SiteHero() {
    return (
        <section
            aria-labelledby="hero-titulo"
            className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
            style={{ backgroundColor: C.bg1 }}
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 55% 65% at 76% 45%, rgba(201,162,39,0.08) 0%, transparent 70%)" }}
            />
            <Container className="relative z-10">
                <div className="max-w-6xl mx-auto grid gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-center lg:gap-20">
                    <div className="text-center md:text-left">
                        <div className="inline-flex items-center gap-3 mb-7">
                            <span aria-hidden="true" className="h-px w-8 md:w-12" style={{ background: `linear-gradient(90deg, transparent, ${C.gold})` }} />
                            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold" style={{ color: C.gold }}>
                                Colen Advogados
                            </span>
                            <span aria-hidden="true" className="h-px w-8 md:w-12" style={{ background: `linear-gradient(90deg, ${C.gold}, transparent)` }} />
                        </div>

                        <h1 id="hero-titulo" style={{ fontFamily: C.serif }}>
                            <span className="block text-[clamp(3rem,7.2vw,5.25rem)] leading-[0.95] font-semibold tracking-tight" style={{ color: C.white }}>
                                Marcelo Colen
                            </span>
                            <span
                                className="block mt-5 text-[clamp(1.25rem,2.3vw,1.75rem)] leading-snug italic font-medium max-w-[38ch] mx-auto md:mx-0 text-balance"
                                style={{ color: C.gold }}
                            >
                                Direito Criminal, Direito Antidiscriminatório e Políticas de Igualdade Racial
                            </span>
                        </h1>

                        <div aria-hidden="true" className="h-px w-16 mt-8 mx-auto md:mx-0" style={{ background: "linear-gradient(90deg, rgba(201,162,39,0.6), transparent)" }} />

                        <p className="mt-7 text-base md:text-lg leading-relaxed max-w-[44ch] mx-auto md:mx-0 text-pretty" style={{ color: C.gray2 }}>
                            Sócio fundador do Colen Advogados, escritório de atuação nacional. Mestre em Direito pela
                            UFMG e Diretor de Diversidade e Inclusão da OAB/MG.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row items-center gap-5 justify-center md:justify-start">
                            <BotaoWhatsApp rotulo="Falar com o escritório" />
                            <Link
                                href="#atuacao"
                                className="text-sm font-semibold pb-0.5 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                                style={{ color: C.gold, borderBottom: `1px solid ${C.goldBorder}`, outlineColor: C.gold }}
                            >
                                Conhecer as áreas de atuação
                            </Link>
                        </div>

                        <p className="mt-9 text-xs" style={{ color: C.gray3 }}>
                            {SITE_CONFIG.oab} · Belo Horizonte (MG), com atendimento em todo o Brasil
                        </p>
                    </div>

                    <div className="relative mx-auto w-full max-w-[420px] md:max-w-[440px]">
                        {/* Cantoneiras douradas, fora da moldura. */}
                        <span aria-hidden="true" className="absolute -top-3 -left-3 w-14 h-14 border-t border-l" style={{ borderColor: "rgba(201,162,39,0.6)" }} />
                        <span aria-hidden="true" className="absolute -bottom-3 -right-3 w-14 h-14 border-b border-r" style={{ borderColor: "rgba(201,162,39,0.6)" }} />
                        <div
                            className="relative rounded-xl overflow-hidden"
                            style={{ border: "1px solid rgba(201,162,39,0.25)", boxShadow: "0 30px 80px rgba(0,0,0,0.6)" }}
                        >
                            <Image
                                src="/images/marcelo/marcelo-colen-escritorio-2.webp"
                                alt="Marcelo Colen no escritório Colen Advogados, em Belo Horizonte"
                                width={1122}
                                height={1402}
                                priority
                                sizes="(min-width: 768px) 440px, 92vw"
                                className="block w-full h-auto"
                            />
                            <div
                                aria-hidden="true"
                                className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
                                style={{ background: "linear-gradient(to top, rgba(10,10,10,0.55), transparent)" }}
                            />
                        </div>
                    </div>
                </div>
            </Container>
            <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,162,39,0.2), transparent)" }} />
        </section>
    );
}
