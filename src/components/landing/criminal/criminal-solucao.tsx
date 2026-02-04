"use client";

import { Container } from "@/components/layout";
import { CRIMINAL_PAGE } from "@/lib/criminal-data";
import { Target, Shield, Gavel, ArrowRight } from "lucide-react";

export function CriminalSolucao() {
    const icons = [Target, Gavel, Shield];

    return (
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            {/* Decorative Gradient */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/50 to-transparent" />

            <Container>
                <div className="max-w-5xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <h2
                            className="text-3xl lg:text-5xl font-bold mb-6 text-white"
                            style={{ fontFamily: 'Georgia, serif' }}
                        >
                            A Estratégia de <span className="text-[#c9a227]">Defesa.</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Não atuamos apenas no processo; atuamos na proteção da sua vida e reputação. Nosso método é focado em antecipação de riscos e resposta imediata.
                        </p>
                    </div>

                    {/* Strategic Flow Grid */}
                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-px bg-gradient-to-r from-[#c9a227]/0 via-[#c9a227]/20 to-[#c9a227]/0" />

                        {CRIMINAL_PAGE.solucao.etapas.map((etapa, idx) => {
                            const Icon = icons[idx] || Target;
                            return (
                                <div key={idx} className="relative group text-center">
                                    {/* Icon Circle */}
                                    <div className="relative z-10 w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8 group-hover:border-[#c9a227]/50 transition-all duration-500 shadow-2xl">
                                        <div className="absolute inset-0 rounded-full bg-[#c9a227]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <Icon className="w-10 h-10 text-[#c9a227]" />
                                    </div>

                                    {/* Content */}
                                    <div className="px-4">
                                        <span className="block text-[#c9a227] text-xs font-bold tracking-[0.3em] uppercase mb-4">
                                            Fase {idx + 1}
                                        </span>
                                        <h3
                                            className="text-2xl font-bold mb-4 text-white"
                                            style={{ fontFamily: 'Georgia, serif' }}
                                        >
                                            {etapa.titulo}
                                        </h3>
                                        <p className="text-gray-500 leading-relaxed text-sm">
                                            {etapa.descricao}
                                        </p>
                                    </div>

                                    {/* Mobile Arrow */}
                                    {idx < 2 && (
                                        <div className="md:hidden mt-8 flex justify-center">
                                            <ArrowRight className="w-6 h-6 text-[#c9a227]/30 rotate-90" />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Value Prop Footer */}
                    <div className="mt-24 p-12 rounded-3xl bg-white/5 border border-white/10 text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <p className="text-xl lg:text-2xl text-white font-medium italic relative z-10" style={{ fontFamily: 'Georgia, serif' }}>
                            "Nossa maior vitória é a prevenção da injustiça. Atuamos com <span className="text-[#c9a227]">rigor técnico</span> e <span className="text-[#c9a227]">compromisso absoluto</span> com o cliente."
                        </p>
                    </div>
                </div>
            </Container>

            {/* Background visual element */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#c9a227]/5 rounded-full blur-[100px] pointer-events-none" />
        </section>
    );
}
