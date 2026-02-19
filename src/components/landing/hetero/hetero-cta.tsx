"use client";

import { Container } from "@/components/layout";
import { HETERO_PAGE } from "@/lib/hetero-data";
import { MessageCircle, Shield, Clock, Lock, Phone } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

export function HeteroCta() {
    const { cta, whatsapp, disclaimer } = HETERO_PAGE;

    return (
        <section
            className="py-16 lg:py-24 relative overflow-hidden"
            style={{ backgroundColor: '#1a1a1a' }}
        >
            {/* Background decorativo */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(201, 162, 39, 0.15) 0%, transparent 60%)'
                }}
            />

            <Container className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Badge de urgência */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
                        style={{ backgroundColor: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}
                    >
                        <Clock className="w-4 h-4" />
                        Prazos de recurso são curtos — não deixe para depois
                    </div>

                    {/* Headline */}
                    <h2
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6"
                        style={{ color: '#ffffff', fontFamily: 'Georgia, serif' }}
                    >
                        Você estudou, passou nas provas, merece essa vaga.
                        <br />
                        <span style={{ color: '#c9a227' }}>Vamos analisar seu caso juntos?</span>
                    </h2>

                    {/* Subheadline */}
                    <p
                        className="text-lg leading-relaxed mb-8"
                        style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                    >
                        A análise técnica dos critérios fenotípicos pode revelar inconsistências
                        na decisão da banca. Entre em contato para uma avaliação individualizada.
                    </p>

                    {/* CTA Principal */}
                    <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={trackWhatsAppClick}
                        className="inline-flex items-center justify-center gap-3 px-12 py-5 font-bold text-lg transition-all duration-200 hover:brightness-110 hover:scale-[1.02] rounded-xl mb-6 shadow-2xl"
                        style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
                    >
                        <MessageCircle className="w-6 h-6" />
                        Falar com Especialista Agora
                    </a>

                    {/* Garantias */}
                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" style={{ color: '#c9a227' }} />
                            <span className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                Resposta em até 2h
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Shield className="w-5 h-5" style={{ color: '#c9a227' }} />
                            <span className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                Análise técnica
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Lock className="w-5 h-5" style={{ color: '#c9a227' }} />
                            <span className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                Sigilo total
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="w-5 h-5" style={{ color: '#c9a227' }} />
                            <span className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                Todo Brasil
                            </span>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <p
                        className="text-xs max-w-2xl mx-auto"
                        style={{ color: 'rgba(255, 255, 255, 0.4)' }}
                    >
                        {disclaimer}
                    </p>
                </div>
            </Container>
        </section>
    );
}
