"use client";

import Image from "next/image";
import { Container } from "@/components/layout";
import { HETERO_PAGE } from "@/lib/hetero-data";
import { MessageCircle, Globe, Award } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

export function HeteroAutoridade() {
    const { autoridade, whatsapp } = HETERO_PAGE;

    return (
        <section className="py-16 lg:py-20" style={{ backgroundColor: '#ffffff' }}>
            <Container>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
                    {/* Foto do Marcelo */}
                    <div className="flex justify-center order-2 lg:order-1">
                        <div className="relative">
                            <Image
                                src="/images/wordpress/marcelo-bio.jpg"
                                alt="Dr. Marcelo Colen"
                                width={350}
                                height={450}
                                className="object-cover rounded-lg shadow-xl"
                            />
                        </div>
                    </div>

                    {/* Texto */}
                    <div className="space-y-5 order-1 lg:order-2">
                        <h2
                            className="text-2xl sm:text-3xl font-bold"
                            style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}
                        >
                            {autoridade.headline}
                        </h2>

                        <p className="text-lg font-semibold" style={{ color: '#1a1a1a' }}>
                            {autoridade.nome}
                        </p>

                        <p style={{ color: '#333' }}>
                            {autoridade.descricao}
                        </p>

                        <p className="text-sm" style={{ color: '#666' }}>
                            {autoridade.formacao}
                        </p>

                        {/* Credenciais */}
                        <ul className="space-y-2">
                            {autoridade.credenciais.map((credencial, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-start gap-2 text-sm"
                                    style={{ color: '#555' }}
                                >
                                    <Award className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#c9a227' }} />
                                    {credencial}
                                </li>
                            ))}
                        </ul>

                        {/* Destaque */}
                        <div
                            className="p-4 rounded-lg border-l-4"
                            style={{ backgroundColor: '#f8f8f8', borderColor: '#c9a227' }}
                        >
                            <p className="text-sm" style={{ color: '#333' }}>
                                {autoridade.destaque}
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <a
                                href={getWhatsAppLink(whatsapp.autoridade)}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={trackWhatsAppClick}
                                className="inline-flex items-center justify-center gap-2 px-5 py-3 font-semibold text-sm rounded transition-all duration-200 hover:brightness-110"
                                style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
                            >
                                <MessageCircle className="w-4 h-4" />
                                Solicitar Orientação
                            </a>
                            <div className="flex items-center gap-2 text-sm" style={{ color: '#666' }}>
                                <Globe className="w-4 h-4" style={{ color: '#c9a227' }} />
                                Atendimento em todo Brasil
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
