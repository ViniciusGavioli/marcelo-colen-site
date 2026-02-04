"use client";

import { Container } from "@/components/layout";
import { CheckCircle2, ShieldCheck, FileSearch, HelpCircle } from "lucide-react";
import { CRIMINAL_PAGE } from "@/lib/criminal-data";

export function CriminalProvas() {
    const icons = [HelpCircle, ShieldCheck, FileSearch, CheckCircle2];

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <Container>
                <div className="max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9a227]/10 text-[#c9a227] text-xs font-bold tracking-widest uppercase mb-6">
                                <ShieldCheck className="w-4 h-4" />
                                Destaques Éticos
                            </div>
                            <h2
                                className="text-4xl lg:text-5xl font-bold mb-8 leading-tight text-gray-900"
                                style={{ fontFamily: 'Georgia, serif' }}
                            >
                                {CRIMINAL_PAGE.provas.titulo}
                            </h2>
                            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                                Cada ação conta. No direito criminal, a rapidez e a precisão da orientação inicial definem o destino da causa.
                            </p>
                        </div>

                        {/* Right: Checklist Cards */}
                        <div className="space-y-4">
                            {CRIMINAL_PAGE.provas.itens.map((item, idx) => {
                                const Icon = icons[idx] || CheckCircle2;
                                return (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-6 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-[#c9a227] transition-colors duration-300">
                                            <Icon className="w-6 h-6 text-[#c9a227] group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <p className="text-gray-800 font-semibold text-lg leading-tight">
                                            {item}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
