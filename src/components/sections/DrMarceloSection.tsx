"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/layout";

const gold = "#c9a227";
const bg2 = "#111111";
const bg1 = "#0a0a0a";
const gray1 = "rgba(255,255,255,0.92)";
const gray2 = "rgba(255,255,255,0.7)";
const gray3 = "rgba(255,255,255,0.45)";

const MARQUEE_ITEMS = [
    "Dr. Marcelo Colen",
    "Mestre em Direito UFMG",
    "OAB/MG",
    "Especialista em Heteroidentificação",
    "Diretor de Diversidade OAB/MG",
];

export function DrMarceloSection() {
    return (
        <section
            className="relative overflow-hidden"
            style={{ backgroundColor: bg2, borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
            <style>{`
                @keyframes marquee-colen {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>

            {/* Ardósia sutil */}
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: "url('/texture-pedra.png')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.04 }}
            />
            {/* Glow dourado lateral esquerdo */}
            <div
                aria-hidden="true"
                className="absolute left-0 top-0 bottom-0 w-1/2 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at left center, rgba(201,162,39,0.06) 0%, transparent 65%)" }}
            />

            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-stretch gap-0">

                    {/* FOTO + TARJA — coluna esquerda */}
                    <div className="flex-shrink-0 md:w-64 lg:w-72 -mx-4 md:mx-0 flex flex-col">
                        <Image
                            src="/images/marcelo/marcelo-sem-fundo-.png"
                            alt="Dr. Marcelo Colen"
                            width={553}
                            height={722}
                            className="w-full object-contain"
                            style={{ filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.6))", display: "block" }}
                        />
                        {/* Tarja credencial colada embaixo */}
                        <div style={{
                            backgroundColor: "#0B1730",
                            borderTop: "1px solid rgba(201,162,39,0.3)",
                            borderBottom: "1px solid rgba(201,162,39,0.1)",
                            overflow: "hidden",
                            padding: "10px 0",
                        }}>
                            <div style={{
                                display: "inline-block",
                                whiteSpace: "nowrap",
                                animation: "marquee-colen 22s linear infinite",
                            }}>
                                {[0, 1].map(i => (
                                    <span key={i}>
                                        {MARQUEE_ITEMS.map((txt, j) => (
                                            <span key={j} style={{ color: gold, fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                                                {txt}
                                                <span style={{ color: "rgba(201,162,39,0.35)", margin: "0 14px" }}>·</span>
                                            </span>
                                        ))}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Linha divisória vertical dourada — só desktop */}
                    <div
                        className="hidden md:block w-px mx-8 self-stretch"
                        style={{ background: `linear-gradient(to bottom, transparent, rgba(201,162,39,0.3), transparent)` }}
                    />

                    {/* TEXTO — coluna direita */}
                    <div className="flex-1 flex flex-col justify-center py-10 md:py-12 px-4 md:px-0">
                        <p
                            className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-4"
                            style={{ color: gold }}
                        >
                            Quem vai analisar seu caso
                        </p>

                        {/* Aspas decorativas */}
                        <span
                            aria-hidden="true"
                            className="text-7xl leading-none font-serif select-none"
                            style={{ color: gold, opacity: 0.15 }}
                        >&ldquo;</span>

                        <p
                            className="text-base md:text-lg leading-relaxed italic mb-5 -mt-2"
                            style={{ color: gray1 }}
                        >
                            Minha missão não é apenas escrever recursos. É garantir que a subjetividade de uma banca não destrua o mérito de quem realmente pertence às cotas.
                        </p>

                        <div
                            className="h-px mb-4"
                            style={{ background: `linear-gradient(to right, ${gold}, transparent)`, opacity: 0.3 }}
                        />

                        <p className="font-bold text-base" style={{ color: gold }}>
                            Dr. Marcelo Colen
                        </p>
                        <p className="text-xs mt-1 mb-5" style={{ color: gray3 }}>
                            Advogado · OAB/MG · Direito Antidiscriminatório e Concursos Públicos
                        </p>

                        {/* Bullets de autoridade */}
                        <div className="space-y-2 text-xs md:text-sm" style={{ color: gray2 }}>
                            <div className="flex items-center gap-2">
                                <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: gold }} />
                                Mestre em Direito pela UFMG
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: gold }} />
                                Secretário da Comissão Nac. de Promoção da Igualdade da OAB Federal
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: gold }} />
                                Diretor de Diversidade e Inclusão da OAB/MG
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: gold }} />
                                Professor, palestrante e autor publicado
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
