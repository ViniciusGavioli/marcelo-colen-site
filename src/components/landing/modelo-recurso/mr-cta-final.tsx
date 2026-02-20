"use client";

import { Container } from "@/components/layout";
import { MODELO_RECURSO_PAGE } from "@/lib/modelo-recurso-data";
import { ShieldCheck, Clock, Lock, CheckCircle } from "lucide-react";

export function MrCtaFinal() {
    const { cta, disclaimer, checkoutUrl } = MODELO_RECURSO_PAGE;

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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse"
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
                        {cta.headline.split('.')[0]}.
                        <br />
                        <span style={{ color: '#c9a227' }}>
                            {cta.headline.split('.').slice(1).join('.').trim()}
                        </span>
                    </h2>

                    {/* Texto */}
                    <p
                        className="text-lg leading-relaxed mb-8"
                        style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                    >
                        {cta.texto}
                    </p>

                    {/* O que você garante */}
                    <div className="flex flex-col items-center gap-2 mb-8">
                        {cta.itens.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" style={{ color: '#c9a227' }} />
                                <span className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Principal */}
                    <a
                        href={checkoutUrl}
                        className="inline-flex items-center justify-center gap-3 px-12 py-5 font-bold text-lg transition-all duration-200 hover:brightness-110 hover:scale-[1.02] rounded-xl mb-6 shadow-2xl"
                        style={{ backgroundColor: '#c9a227', color: '#ffffff' }}
                    >
                        <ShieldCheck className="w-6 h-6" />
                        {cta.ctaText}
                    </a>

                    {/* Sub-CTA */}
                    <p className="text-sm mb-10" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                        {cta.ctaSub}
                    </p>

                    {/* Garantias */}
                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2">
                            <Lock className="w-5 h-5" style={{ color: '#c9a227' }} />
                            <span className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                                Pagamento seguro
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" style={{ color: '#c9a227' }} />
                            <span className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                                Acesso imediato
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5" style={{ color: '#c9a227' }} />
                            <span className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                                Suporte por e-mail
                            </span>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <p
                        className="text-xs max-w-2xl mx-auto"
                        style={{ color: 'rgba(255, 255, 255, 0.35)' }}
                    >
                        {disclaimer}
                    </p>
                </div>
            </Container>
        </section>
    );
}
