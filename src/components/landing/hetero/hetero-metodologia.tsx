"use client";

import { Container } from "@/components/layout";
import { HETERO_PAGE } from "@/lib/hetero-data";
import { FileSearch, UserCheck, Scale, Route, MessageCircle, Star } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

const STEP_ICONS = [FileSearch, UserCheck, Scale, Route];

export function HeteroMetodologia() {
    const { metodologia, whatsapp } = HETERO_PAGE;

    return (
        <section className="py-16 lg:py-20" style={{ backgroundColor: '#faf9f6' }}>
            <Container>
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <p
                            className="text-sm uppercase tracking-widest mb-3"
                            style={{ color: '#c9a227' }}
                        >
                            {metodologia.eyebrow}
                        </p>
                        <h2
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
                            style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}
                        >
                            Por que nossos recursos são diferentes?
                        </h2>
                        <p
                            className="max-w-2xl mx-auto text-lg"
                            style={{ color: '#666' }}
                        >
                            Não fazemos recursos genéricos. Cada caso recebe análise técnica
                            <strong> antropológica e jurídica</strong> individualizada.
                        </p>
                    </div>

                    {/* Destaque do diferencial */}
                    <div
                        className="p-6 rounded-xl mb-10 flex flex-col md:flex-row items-center gap-6"
                        style={{ backgroundColor: '#1a1a1a' }}
                    >
                        <div
                            className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: '#c9a227' }}
                        >
                            <Star className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="font-bold text-xl mb-2" style={{ color: '#ffffff' }}>
                                Parecer Técnico Antropológico
                            </h3>
                            <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                Utilizamos análise científica dos critérios fenotípicos (pele, cabelo, nariz,
                                lábios) para fundamentar tecnicamente o recurso — <strong style={{ color: '#c9a227' }}>
                                    algo que recursos genéricos não fazem
                                </strong>.
                            </p>
                        </div>
                    </div>

                    {/* Passos */}
                    <div className="grid md:grid-cols-2 gap-4 mb-10">
                        {metodologia.passos.map((passo, idx) => {
                            const IconComponent = STEP_ICONS[idx];
                            return (
                                <div
                                    key={idx}
                                    className="flex gap-5 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
                                    style={{ border: '1px solid #e5e5e5' }}
                                >
                                    <div className="flex flex-col items-center gap-2">
                                        <div
                                            className="w-12 h-12 rounded-lg flex items-center justify-center"
                                            style={{ backgroundColor: '#c9a227' }}
                                        >
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                        <span
                                            className="text-xs font-bold"
                                            style={{ color: '#c9a227' }}
                                        >
                                            {passo.numero}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1" style={{ color: '#1a1a1a' }}>
                                            {passo.titulo}
                                        </h3>
                                        <p className="text-sm leading-relaxed" style={{ color: '#666' }}>
                                            {passo.descricao}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
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
                            Quero essa análise no meu caso
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}
