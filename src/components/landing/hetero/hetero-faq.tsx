"use client";

import { useState } from "react";
import { Container } from "@/components/layout";
import { HETERO_PAGE } from "@/lib/hetero-data";
import { ChevronDown, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

export function HeteroFaq() {
    const [aberto, setAberto] = useState<number | null>(0);
    const { faq, whatsapp } = HETERO_PAGE;

    return (
        <section className="py-16 lg:py-20" style={{ backgroundColor: '#f8f8f8' }}>
            <Container>
                <div className="max-w-3xl mx-auto">
                    <h2
                        className="text-2xl sm:text-3xl font-bold mb-8 text-center"
                        style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}
                    >
                        Perguntas Frequentes
                    </h2>

                    <div className="space-y-3 mb-10">
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
                                        style={{ color: '#c9a227' }}
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

                    {/* CTA após FAQ */}
                    <div className="text-center">
                        <p className="text-base mb-4" style={{ color: '#666' }}>
                            Ainda tem dúvidas sobre o seu caso específico?
                        </p>
                        <a
                            href={getWhatsAppLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={trackWhatsAppClick}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm rounded transition-all duration-200 hover:brightness-110"
                            style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
                        >
                            <MessageCircle className="w-4 h-4" />
                            Falar com Especialista
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}
