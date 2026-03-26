"use client";

import Image from "next/image";
import { MessageCircle, Scale, Shield, Users } from "lucide-react";
import { Container } from "@/components/layout";

export function HomeHero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
            {/* Background com imagem de comunidade */}
            <div className="absolute inset-0">
                <Image
                    src="/images/defesa/community.png"
                    alt="Comunidade unida pela justiça"
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
                        {/* Badge de especialização */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
                            style={{ backgroundColor: 'rgba(201, 162, 39, 0.15)', color: '#c9a227', border: '1px solid rgba(201, 162, 39, 0.3)' }}
                        >
                            <Scale className="w-4 h-4" />
                            Referência Nacional em Direito Antidiscriminatório
                        </div>

                        {/* H1 */}
                        <h1
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] mb-6"
                            style={{ color: '#ffffff', fontFamily: 'Georgia, serif' }}
                        >
                            Advocacia Especializada em
                            <br />
                            <span style={{ color: '#c9a227' }}>Crimes Raciais e Igualdade</span>
                        </h1>

                        {/* H2 */}
                        <p
                            className="text-lg lg:text-xl leading-relaxed mb-6"
                            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                        >
                            Defendemos <strong style={{ color: '#ffffff' }}>vítimas de racismo</strong>,
                            atuamos em <strong style={{ color: '#ffffff' }}>heteroidentificação</strong> e
                            oferecemos assessoria completa em <strong style={{ color: '#ffffff' }}>direito criminal</strong>.
                        </p>

                        {/* Áreas em destaque */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            <span
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm"
                                style={{ backgroundColor: 'rgba(201, 162, 39, 0.2)', color: '#c9a227' }}
                            >
                                <Shield className="w-4 h-4" /> Racismo e Injúria Racial
                            </span>
                            <span
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm"
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'rgba(255, 255, 255, 0.8)' }}
                            >
                                <Users className="w-4 h-4" /> Heteroidentificação
                            </span>
                            <span
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm"
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'rgba(255, 255, 255, 0.8)' }}
                            >
                                <Scale className="w-4 h-4" /> Defesa Criminal
                            </span>
                        </div>

                        {/* CTA */}
                        <div className="mb-6">
                            <a
                                href="/consulta"
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
                            <span className="text-sm">OAB/MG</span>
                            <span>•</span>
                            <span className="text-sm">Atendimento em Todo Brasil</span>
                        </div>
                    </div>

                    {/* Foto do Dr. Marcelo */}
                    <div className="hidden lg:flex justify-center items-end h-[90vh] relative mt-auto">
                        <Image
                            src="/images/defesa/marcelo-sem-fundo02-v2.png"
                            alt="Dr. Marcelo Colen"
                            width={550}
                            height={750}
                            className="object-contain object-bottom scale-110 origin-bottom translate-y-4"
                            priority
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}
