"use client";

import { Container } from "@/components/layout";
import { HETERO_PAGE } from "@/lib/hetero-data";
import { Palette, Waves, Circle, Smile, MessageCircle, Info } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

const ICONS = {
    palette: Palette,
    waves: Waves,
    circle: Circle,
    smile: Smile,
};

export function HeteroPilares() {
    const { pilares, whatsapp } = HETERO_PAGE;

    return (
        <section className="py-16 lg:py-24" style={{ backgroundColor: '#1a1a1a' }}>
            <Container>
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <p
                            className="text-sm uppercase tracking-widest mb-3"
                            style={{ color: '#c9a227' }}
                        >
                            {pilares.eyebrow}
                        </p>
                        <h2
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
                            style={{ color: '#ffffff', fontFamily: 'Georgia, serif' }}
                        >
                            O que a banca realmente avalia?
                        </h2>
                        <p
                            className="max-w-3xl mx-auto text-lg"
                            style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                        >
                            Entenda os <strong style={{ color: '#ffffff' }}>4 critérios fenotípicos</strong> que
                            fundamentam a decisão da comissão — e como eles devem ser interpretados corretamente.
                        </p>
                    </div>

                    {/* Grid dos 4 Pilares */}
                    <div className="grid sm:grid-cols-2 gap-5 mb-10">
                        {pilares.itens.map((item, idx) => {
                            const IconComponent = ICONS[item.icon as keyof typeof ICONS];
                            return (
                                <div
                                    key={idx}
                                    className="group p-6 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)'
                                    }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div
                                            className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                                            style={{ backgroundColor: '#c9a227' }}
                                        >
                                            <IconComponent className="w-7 h-7 text-white" />
                                        </div>
                                        <div>
                                            <h3
                                                className="font-bold text-xl mb-2"
                                                style={{ color: '#ffffff' }}
                                            >
                                                {item.titulo}
                                            </h3>
                                            <p
                                                className="text-sm leading-relaxed"
                                                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                                            >
                                                {item.descricao}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Box informativo */}
                    <div
                        className="p-6 rounded-xl flex flex-col md:flex-row items-center gap-4 mb-8"
                        style={{
                            backgroundColor: 'rgba(201, 162, 39, 0.1)',
                            border: '1px solid rgba(201, 162, 39, 0.3)'
                        }}
                    >
                        <Info className="w-8 h-8 flex-shrink-0" style={{ color: '#c9a227' }} />
                        <p
                            className="text-center md:text-left"
                            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                        >
                            <strong style={{ color: '#c9a227' }}>Importante:</strong> A análise deve considerar
                            o conjunto das características. Um único critério isolado não é determinante.
                            Muitas bancas erro ao avaliar elementos de forma fragmentada.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <a
                            href={getWhatsAppLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={trackWhatsAppClick}
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-base rounded-lg transition-all duration-200 hover:brightness-110"
                            style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
                        >
                            <MessageCircle className="w-5 h-5" />
                            Analisar meus critérios fenotípicos
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}
