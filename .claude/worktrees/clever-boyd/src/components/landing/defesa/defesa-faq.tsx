"use client";

import { useState } from "react";
import { Container } from "@/components/layout";
import { DEFESA_PAGE } from "@/lib/defesa-data";
import { ChevronDown } from "lucide-react";

export function DefesaFaq() {
    const [aberto, setAberto] = useState<number | null>(0);
    const { faq } = DEFESA_PAGE;

    return (
        <section className="py-16 lg:py-20" style={{ backgroundColor: '#f8f8f8' }}>
            <Container>
                <div className="max-w-3xl mx-auto">
                    <h2
                        className="text-2xl sm:text-3xl font-bold mb-8"
                        style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}
                    >
                        Dúvidas frequentes
                    </h2>

                    <div className="space-y-3">
                        {faq.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-lg overflow-hidden"
                                style={{
                                    backgroundColor: '#ffffff',
                                    border: '1px solid #e5e5e5'
                                }}
                            >
                                <button
                                    onClick={() => setAberto(aberto === index ? null : index)}
                                    className="w-full flex items-center justify-between p-5 text-left"
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
                                        style={{ color: '#666' }}
                                    />
                                </button>

                                {aberto === index && (
                                    <div
                                        className="px-5 pb-5 text-base leading-relaxed"
                                        style={{ color: '#666' }}
                                    >
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
