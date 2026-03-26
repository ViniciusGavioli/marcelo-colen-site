"use client";

import { Container } from "@/components/layout";
import { AlertCircle, Scale, UserCheck, Search, ShieldAlert } from "lucide-react";
import { CRIMINAL_PAGE } from "@/lib/criminal-data";

export function CriminalIdentificacao() {
    const icons = [Search, ShieldAlert, Scale, AlertCircle];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -skew-x-12 translate-x-1/2 pointer-events-none" />

            <Container className="relative">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left Column: Context & Headline */}
                    <div className="lg:w-2/5">
                        <h2
                            className="text-4xl lg:text-5xl font-bold mb-8 leading-[1.1]"
                            style={{ color: '#0a0a0a', fontFamily: 'Georgia, serif' }}
                        >
                            Causas Negligenciadas podem custar <span className="text-[#c9a227]">sua liberdade.</span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                            O sistema penal brasileiro é complexo e implacável. Sem uma defesa técnica rigorosa desde os primeiros minutos, as consequências podem ser irreversíveis.
                        </p>

                        <div className="hidden lg:block p-8 border-l-2 border-[#c9a227] bg-gray-50/50">
                            <p className="text-gray-800 font-medium italic mb-2">
                                "O silêncio não é confissão, é um direito constitucional. Nunca preste depoimento sem a estratégia adequada."
                            </p>
                            <footer className="text-[#c9a227] font-bold text-sm tracking-widest uppercase">
                                Dr. Marcelo Colen
                            </footer>
                        </div>
                    </div>

                    {/* Right Column: Situations Grid */}
                    <div className="lg:w-3/5 grid sm:grid-cols-2 gap-6">
                        {CRIMINAL_PAGE.situacoes.map((situacao, idx) => {
                            const Icon = icons[idx] || AlertCircle;
                            return (
                                <div
                                    key={idx}
                                    className="group p-8 rounded-2xl transition-all duration-300 bg-white border border-gray-100 hover:border-[#c9a227]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] relative overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-1 h-full bg-[#c9a227] scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />

                                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gray-50 group-hover:bg-[#c9a227]/10 transition-colors">
                                        <Icon className="w-7 h-7 text-[#c9a227]" />
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#c9a227] transition-colors" style={{ color: '#0a0a0a', fontFamily: 'Georgia, serif' }}>
                                        {situacao.titulo}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed text-sm">
                                        {situacao.descricao}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile Quote */}
                <div className="lg:hidden mt-12 p-8 border-l-2 border-[#c9a227] bg-gray-50/50">
                    <p className="text-gray-800 font-medium italic">
                        "O silêncio não é confissão, é um direito constitucional. Nunca preste depoimento sem a estratégia adequada."
                    </p>
                </div>
            </Container>
        </section>
    );
}
