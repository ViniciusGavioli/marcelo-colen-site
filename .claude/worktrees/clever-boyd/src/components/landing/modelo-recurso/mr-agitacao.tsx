"use client";

import { Container } from "@/components/layout";
import { MODELO_RECURSO_PAGE } from "@/lib/modelo-recurso-data";
import { ShieldCheck, AlertTriangle } from "lucide-react";

export function MrAgitacao() {
    const { agitacao, oferta } = MODELO_RECURSO_PAGE;
    const { checkoutUrl } = oferta;

    return (
        <section className="py-16 lg:py-24" style={{ backgroundColor: '#ffffff' }}>
            <Container>
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <p
                            className="text-sm uppercase tracking-widest mb-3"
                            style={{ color: '#c9a227' }}
                        >
                            {agitacao.eyebrow}
                        </p>
                        <h2
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold"
                            style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}
                        >
                            {agitacao.headline}
                        </h2>
                    </div>

                    {/* Parágrafos viscerais */}
                    <div className="space-y-5 mb-12">
                        {agitacao.paragrafos.map((paragrafo, idx) => (
                            <p
                                key={idx}
                                className="text-base lg:text-lg leading-relaxed"
                                style={{ color: '#333' }}
                                dangerouslySetInnerHTML={{
                                    __html: paragrafo
                                        .replace(/\*\*(.*?)\*\*/g, '<strong style="color: #1a1a1a">$1</strong>')
                                }}
                            />
                        ))}
                    </div>





                    {/* CTA */}
                    <div className="text-center">
                        <a
                            href={checkoutUrl}
                            className="inline-flex items-center justify-center gap-3 px-10 py-5 font-bold text-base lg:text-lg rounded-lg transition-all duration-200 hover:brightness-110 hover:scale-[1.02] shadow-xl"
                            style={{ backgroundColor: '#c9a227', color: '#ffffff' }}
                        >
                            <ShieldCheck className="w-5 h-5" />
                            {agitacao.ctaText}
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}
