"use client";

import { Container } from "@/components/layout";
import { HETERO_PAGE } from "@/lib/hetero-data";
import { MessageCircle, Play } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

export function HeteroVideo() {
    const { whatsapp } = HETERO_PAGE;

    return (
        <section
            className="py-16 lg:py-24"
            style={{ backgroundColor: '#1a1a1a' }}
        >
            <Container>
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <span
                            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest mb-3"
                            style={{ color: '#c9a227' }}
                        >
                            <Play className="w-4 h-4" />
                            Assista e Entenda
                        </span>
                        <h2
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
                            style={{ color: '#ffffff', fontFamily: 'Georgia, serif' }}
                        >
                            O que você precisa saber sobre Heteroidentificação
                        </h2>
                        <p
                            className="text-lg max-w-2xl mx-auto"
                            style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                        >
                            Dr. Marcelo explica como funciona o procedimento e quais são
                            as possibilidades de revisão da decisão da banca.
                        </p>
                    </div>

                    {/* Grid: Vídeo + Texto */}
                    <div className="grid lg:grid-cols-5 gap-8 items-center">
                        {/* Vídeo - ocupa 3 colunas */}
                        <div className="lg:col-span-3">
                            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
                                <iframe
                                    src="https://www.youtube.com/embed/jAiQi4CgMN0"
                                    title="Dr. Marcelo Colen - Heteroidentificação"
                                    className="absolute inset-0 w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>

                        {/* Texto + CTA - ocupa 2 colunas */}
                        <div className="lg:col-span-2 space-y-5">
                            <div
                                className="p-6 rounded-xl"
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                            >
                                <h3
                                    className="font-bold text-lg mb-3"
                                    style={{ color: '#ffffff' }}
                                >
                                    Pontos abordados no vídeo:
                                </h3>
                                <ul className="space-y-2">
                                    {[
                                        'O que é heteroidentificação',
                                        'Por que candidatos legítimos são reprovados',
                                        'Critérios que as bancas utilizam',
                                        'Possibilidades de recurso',
                                    ].map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center gap-2 text-sm"
                                            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                                        >
                                            <span style={{ color: '#c9a227' }}>✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a
                                href={getWhatsAppLink(whatsapp.video)}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={trackWhatsAppClick}
                                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 font-bold text-base rounded-lg transition-all duration-200 hover:brightness-110"
                                style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
                            >
                                <MessageCircle className="w-5 h-5" />
                                Tirar Dúvidas sobre meu Caso
                            </a>

                            <p
                                className="text-center text-xs"
                                style={{ color: 'rgba(255, 255, 255, 0.4)' }}
                            >
                                Atendimento sigiloso • Resposta rápida
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
