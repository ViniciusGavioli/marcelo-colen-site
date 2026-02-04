"use client";

import { Container } from "@/components/layout";
import { HETERO_PAGE } from "@/lib/hetero-data";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

export function HeteroVideo() {
    const { whatsapp } = HETERO_PAGE;

    return (
        <section
            className="py-16 lg:py-24"
            style={{ backgroundColor: '#f5f5f5' }}
        >
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* TEXT SIDE */}
                    <div className="space-y-6">
                        <h2
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
                            style={{
                                color: '#1a1a1a',
                                fontFamily: 'Georgia, serif'
                            }}
                        >
                            Entenda o Procedimento de Heteroidentificação
                        </h2>

                        <p
                            className="text-base lg:text-lg leading-relaxed"
                            style={{ color: '#333333' }}
                        >
                            A decisão da banca de heteroidentificação pode parecer definitiva, mas
                            existem instrumentos jurídicos para a revisão de decisões que não observaram
                            corretamente os critérios técnicos estabelecidos.
                        </p>

                        <p
                            className="text-base lg:text-lg leading-relaxed"
                            style={{ color: '#333333' }}
                        >
                            Com <strong>fundamentação técnica adequada</strong> e conhecimento
                            especializado da jurisprudência aplicável, é possível apresentar recursos
                            bem estruturados que demonstrem eventuais inconsistências no procedimento.
                        </p>

                        <div className="pt-2">
                            <a
                                href={getWhatsAppLink(whatsapp.video)}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={trackWhatsAppClick}
                                className="inline-flex items-center justify-center gap-3 px-6 py-3 font-semibold text-sm rounded transition-all duration-200 hover:brightness-110"
                                style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
                            >
                                <MessageCircle className="w-4 h-4" />
                                Tirar Dúvidas
                            </a>
                        </div>
                    </div>

                    {/* VIDEO SIDE */}
                    <div className="relative">
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
                            <iframe
                                src="https://www.youtube.com/embed/jAiQi4CgMN0"
                                title="Dr. Marcelo Colen - Heteroidentificação"
                                className="absolute inset-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
