"use client";

import { Container } from "@/components/layout";
import { MessageCircle, Instagram } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/marcelocolenadv/";

export function HomeInstagram() {
    return (
        <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
            {/* Gradient decorativo */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    background: 'radial-gradient(circle at 50% 100%, rgba(201, 162, 39, 0.15) 0%, transparent 50%)'
                }}
            />

            <Container className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Instagram badge */}
                    <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 transition-all hover:scale-105"
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            color: 'rgba(255, 255, 255, 0.8)',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                    >
                        <Instagram className="w-4 h-4" />
                        @marcelocolenadv
                    </a>

                    {/* Headline */}
                    <h2
                        className="text-3xl lg:text-4xl font-bold mb-6"
                        style={{ color: '#ffffff', fontFamily: 'Georgia, serif' }}
                    >
                        Pronto para <span style={{ color: '#c9a227' }}>Buscar Justiça</span>?
                    </h2>

                    <p
                        className="text-lg mb-10 max-w-xl mx-auto"
                        style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                    >
                        Conte seu caso para nossa equipe. Atendemos vítimas de racismo,
                        processos de heteroidentificação e defesa criminal em todo o Brasil.
                    </p>

                    {/* CTA Principal */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/consulta"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold text-base rounded transition-all duration-200 hover:brightness-110"
                            style={{
                                backgroundColor: '#25D366',
                                color: '#ffffff',
                            }}
                        >
                            <MessageCircle className="w-5 h-5" />
                            Falar com Dr. Marcelo
                        </a>
                        <a
                            href={INSTAGRAM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold text-base rounded transition-all duration-200 hover:brightness-110"
                            style={{
                                backgroundColor: 'transparent',
                                color: '#ffffff',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                            }}
                        >
                            <Instagram className="w-5 h-5" />
                            Seguir no Instagram
                        </a>
                    </div>

                    {/* Rodapé sutil */}
                    <p className="text-sm mt-10" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>
                        🟢 Plantão de Atendimento • Resposta em até 24h
                    </p>
                </div>
            </Container>
        </section>
    );
}
