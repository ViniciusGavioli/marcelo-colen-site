"use client";

import { useState } from "react";
import { Container } from "@/components/layout";
import { Plus, Minus } from "lucide-react";
import { CRIMINAL_PAGE } from "@/lib/criminal-data";

export function CriminalFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <Container>
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2
                            className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900"
                            style={{ fontFamily: 'Georgia, serif' }}
                        >
                            Dúvidas <span className="text-[#c9a227]">Frequentes.</span>
                        </h2>
                        <p className="text-gray-500 text-lg">
                            Respostas diretas para as principais questões sobre defesa criminal estratégica.
                        </p>
                    </div>

                    <div className="divide-y divide-gray-100">
                        {CRIMINAL_PAGE.faq.map((item, idx) => (
                            <div key={idx} className="py-4">
                                <button
                                    className="w-full flex items-center justify-between py-6 text-left group"
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                >
                                    <span className="text-xl font-bold text-gray-900 group-hover:text-[#c9a227] transition-colors pr-8" style={{ fontFamily: 'Georgia, serif' }}>
                                        {item.pergunta}
                                    </span>
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#c9a227]/50 transition-colors">
                                        {openIndex === idx ? (
                                            <Minus className="w-4 h-4 text-[#c9a227]" />
                                        ) : (
                                            <Plus className="w-4 h-4 text-gray-400 group-hover:text-[#c9a227]" />
                                        )}
                                    </div>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="pb-8 pr-12">
                                        <p className="text-gray-600 leading-relaxed">
                                            {item.resposta}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
