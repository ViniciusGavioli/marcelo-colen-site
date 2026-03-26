"use client";

import { Container } from "@/components/layout";
import { CRIMINAL_PAGE } from "@/lib/criminal-data";
import { Scale, ShieldAlert, Unlock } from "lucide-react";

export function CriminalEducacional() {
    const icons = [Scale, ShieldAlert, Unlock];

    return (
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            {/* Texture Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-matter.png")' }} />

            <Container className="relative">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2
                        className="text-3xl lg:text-5xl font-bold mb-6 text-white"
                        style={{ fontFamily: 'Georgia, serif' }}
                    >
                        Conhecimento é <span className="text-[#c9a227]">Poder.</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        No direito criminal, a informação correta protege sua liberdade. Entenda os pilares da sua defesa.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {CRIMINAL_PAGE.educacional.map((item, idx) => {
                        const Icon = icons[idx] || Scale;
                        return (
                            <div
                                key={idx}
                                className="group p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-[#c9a227]/40 transition-all duration-500 shadow-2xl flex flex-col items-center text-center"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-[#c9a227]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                    <Icon className="w-8 h-8 text-[#c9a227]" />
                                </div>

                                <h3
                                    className="text-xl font-bold mb-4 text-white"
                                    style={{ fontFamily: 'Georgia, serif' }}
                                >
                                    {item.titulo}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {item.conteudo}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
