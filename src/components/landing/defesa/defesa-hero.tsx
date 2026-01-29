"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/layout";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

export function DefesaHero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
            {/* Background com imagem de comunidade */}
            <div className="absolute inset-0">
                <Image
                    src="/images/defesa/community.png"
                    alt="Comunidade negra unida"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay escuro */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.88) 50%, rgba(0,0,0,0.75) 100%)'
                    }}
                />
            </div>

            {/* Linha dourada no topo */}
            <div
                className="absolute top-0 left-0 right-0 h-1 z-20"
                style={{ backgroundColor: '#c9a227' }}
            />

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Conteúdo */}
                    <div className="max-w-xl">
                        {/* H1 */}
                        <h1
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] mb-6"
                            style={{ color: '#ffffff', fontFamily: 'Georgia, serif' }}
                        >
                            Racismo é Crime.
                            <br />
                            <span style={{ color: '#c9a227' }}>Não Deixe a Impunidade Vencer.</span>
                        </h1>

                        {/* H2 */}
                        <p
                            className="text-lg lg:text-xl leading-relaxed mb-8"
                            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                        >
                            Transforme sua indignação em justiça. Somos especialistas em defender vítimas de racismo e injúria racial em Minas Gerais, buscando a <strong style={{ color: '#ffffff' }}>punição do agressor</strong> e a sua devida <strong style={{ color: '#ffffff' }}>indenização</strong>.
                        </p>

                        {/* CTA */}
                        <div className="mb-6">
                            <a
                                href="/consulta-racismo"
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold text-base rounded transition-all duration-200 hover:brightness-110"
                                style={{
                                    backgroundColor: '#25D366',
                                    color: '#ffffff',
                                }}
                            >
                                <MessageCircle className="w-5 h-5" />
                                Falar com Dr. Marcelo Agora
                            </a>
                            <p className="text-xs mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                                🟢 PLANTÃO DE ATENDIMENTO (WHATSAPP)
                            </p>
                        </div>

                        {/* Credibilidade */}
                        <div
                            className="flex flex-wrap items-center gap-4"
                            style={{ color: 'rgba(255, 255, 255, 0.5)' }}
                        >
                            <span className="text-sm">Dr. Marcelo Colen</span>
                            <span>•</span>
                            <span className="text-sm">OAB/MG 167.463</span>
                            <span>•</span>
                            <span className="text-sm">Todo Brasil</span>
                        </div>
                    </div>

                    {/* Foto do Dr. Marcelo */}
                    <div className="hidden lg:flex justify-center items-end">
                        <Image
                            src="/images/marcelo/marcelo-hero.jpg"
                            alt="Dr. Marcelo Colen"
                            width={380}
                            height={500}
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}
