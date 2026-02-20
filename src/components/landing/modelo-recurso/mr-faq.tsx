"use client";

import { useState } from "react";
import { Container } from "@/components/layout";
import { MODELO_RECURSO_PAGE } from "@/lib/modelo-recurso-data";
import { ChevronDown, ShieldCheck } from "lucide-react";

export function MrFaq() {
    const [aberto, setAberto] = useState<number | null>(0);
    const { faq, checkoutUrl } = MODELO_RECURSO_PAGE;

    return (
        <section className="py-16 lg:py-20" style={{ backgroundColor: '#ffffff' }}>
            <Container>
                <div className="max-w-3xl mx-auto">
                    <h2
                        className="text-2xl sm:text-3xl font-bold mb-8 text-center"
                        style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}
                    >
                        Dúvidas Frequentes — Respondidas Com Transparência
                    </h2>

                    <div className="space-y-3 mb-10">
                        {faq.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-lg overflow-hidden"
                                style={{
                                    backgroundColor: '#f8f8f8',
                                    border: '1px solid #e5e5e5',
                                }}
                            >
                                <button
                                    onClick={() => setAberto(aberto === index ? null : index)}
                                    className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                                >
                                    <span
                                        className="font-medium pr-4"
                                        style={{ color: '#1a1a1a' }}
                                    >
                                        {item.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 flex-shrink-0 transition-transform ${aberto === index ? "rotate-180" : ""
                                            }`}
                                        style={{ color: '#c9a227' }}
                                    />
                                </button>

                                {aberto === index && (
                                    <div
                                        className="px-5 pb-5 text-base leading-relaxed"
                                        style={{ color: '#555' }}
                                    >
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA pós-FAQ */}
                    <div className="text-center space-y-2">
                        <a
                            href={checkoutUrl}
                            className="inline-flex items-center justify-center gap-3 px-10 py-4 font-bold text-base rounded-lg transition-all duration-200 hover:brightness-110 hover:scale-[1.02]"
                            style={{ backgroundColor: '#c9a227', color: '#ffffff' }}
                        >
                            <ShieldCheck className="w-5 h-5" />
                            ESTOU PRONTO — QUERO MEU MODELO DE RECURSO →
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}
