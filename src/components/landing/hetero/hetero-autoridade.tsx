"use client";

import Image from "next/image";
import { Container } from "@/components/layout";
import { HETERO_PAGE } from "@/lib/hetero-data";
import { MessageCircle, Award, MapPin, Users } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

export function HeteroAutoridade() {
    const { autoridade, whatsapp } = HETERO_PAGE;

    return (
        <section className="py-16 lg:py-20" style={{ backgroundColor: '#ffffff' }}>
            <Container>
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
                            style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}
                        >
                            Quem vai analisar seu caso?
                        </h2>
                        <p className="text-lg" style={{ color: '#666' }}>
                            Conheça o especialista por trás da análise técnica.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Foto do Marcelo com moldura */}
                        <div className="flex justify-center order-2 lg:order-1">
                            <div className="relative">
                                {/* Moldura decorativa */}
                                <div
                                    className="absolute -inset-3 rounded-2xl -z-10"
                                    style={{ backgroundColor: 'rgba(201, 162, 39, 0.1)' }}
                                />
                                <Image
                                    src="/images/wordpress/marcelo-bio.jpg"
                                    alt="Dr. Marcelo Colen - Advogado Especialista"
                                    width={380}
                                    height={480}
                                    className="object-cover rounded-xl shadow-xl"
                                />
                                {/* Badge de cargo */}
                                <div
                                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full whitespace-nowrap"
                                    style={{ backgroundColor: '#1a1a1a', color: '#c9a227' }}
                                >
                                    <span className="text-sm font-bold">Advogado Especialista</span>
                                </div>
                            </div>
                        </div>

                        {/* Texto */}
                        <div className="space-y-5 order-1 lg:order-2">
                            <div>
                                <p
                                    className="text-sm uppercase tracking-widest mb-2"
                                    style={{ color: '#c9a227' }}
                                >
                                    Seu caso nas mãos certas
                                </p>
                                <h3
                                    className="text-2xl lg:text-3xl font-bold"
                                    style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}
                                >
                                    {autoridade.nome}
                                </h3>
                            </div>

                            <p className="text-lg" style={{ color: '#333' }}>
                                {autoridade.descricao}
                            </p>

                            <p className="text-sm" style={{ color: '#666' }}>
                                {autoridade.formacao}
                            </p>

                            {/* Credenciais em grid */}
                            <div className="grid sm:grid-cols-2 gap-3">
                                {autoridade.credenciais.slice(0, 4).map((credencial, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-2 p-3 rounded-lg"
                                        style={{ backgroundColor: '#f8f8f8' }}
                                    >
                                        <Award className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#c9a227' }} />
                                        <span className="text-sm" style={{ color: '#333' }}>{credencial}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Stats rápidos */}
                            <div className="flex flex-wrap gap-6 pt-4">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5" style={{ color: '#c9a227' }} />
                                    <span className="text-sm" style={{ color: '#666' }}>Atendimento Brasil todo</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="w-5 h-5" style={{ color: '#c9a227' }} />
                                    <span className="text-sm" style={{ color: '#666' }}>+55k seguidores</span>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="pt-2">
                                <a
                                    href={getWhatsAppLink()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={trackWhatsAppClick}
                                    className="inline-flex items-center justify-center gap-2 px-6 py-4 font-bold text-base rounded-lg transition-all duration-200 hover:brightness-110"
                                    style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Falar diretamente com Dr. Marcelo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
