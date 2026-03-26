"use client";

import { Container } from "@/components/layout";
import { MessageCircle, Instagram, ArrowUpRight } from "lucide-react";
import { CRIMINAL_PAGE } from "@/lib/criminal-data";

export function CriminalInstagram() {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            <Container>
                <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
                    {/* Instagram Column */}
                    <div className="lg:w-1/2 p-12 rounded-3xl bg-white border border-gray-100 shadow-xl flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[2px] mb-8">
                            <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                                <Instagram className="w-10 h-10 text-[#ee2a7b]" />
                            </div>
                        </div>
                        <h3
                            className="text-3xl font-bold mb-4 text-gray-900"
                            style={{ fontFamily: 'Georgia, serif' }}
                        >
                            {CRIMINAL_PAGE.instagram.titulo}
                        </h3>
                        <p className="text-gray-500 mb-8 max-w-sm">
                            Casos, estratégias e direitos explicados diariamente no perfil oficial.
                        </p>
                        <a
                            href={CRIMINAL_PAGE.instagram.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[#c9a227] font-bold text-lg hover:underline group"
                        >
                            {CRIMINAL_PAGE.instagram.usuario}
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </div>

                    {/* Final CTA Column */}
                    <div className="lg:w-1/2 p-12 rounded-3xl bg-[#0a0a0a] text-white shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[#c9a227]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <h3
                            className="text-3xl lg:text-4xl font-bold mb-6 relative z-10"
                            style={{ fontFamily: 'Georgia, serif' }}
                        >
                            Sua defesa técnica <br />
                            <span className="text-[#c9a227]">começa agora.</span>
                        </h3>
                        <p className="text-gray-400 mb-10 text-lg relative z-10">
                            Não permita que o tempo jogue contra você. Cada hora é decisiva em um processo criminal.
                        </p>
                        <a
                            href="/consulta"
                            className="inline-flex items-center justify-center gap-3 px-10 py-5 font-bold text-lg rounded-full transition-all duration-300 bg-[#c9a227] hover:bg-[#b08d20] text-black w-full sm:w-auto relative z-10"
                        >
                            <MessageCircle className="w-6 h-6" />
                            {CRIMINAL_PAGE.hero.cta}
                        </a>

                        <div className="mt-6 flex items-center gap-2 text-[#c9a227] text-sm font-bold tracking-widest uppercase relative z-10">
                            <div className="w-2 h-2 rounded-full bg-[#c9a227] animate-pulse" />
                            Plantão Criminal 24h Disponível
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
