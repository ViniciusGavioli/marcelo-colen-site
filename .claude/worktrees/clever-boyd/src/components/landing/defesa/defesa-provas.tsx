"use client";

import { Container } from "@/components/layout";
import { MessageCircle, Smartphone, Video, Users, FileText } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

const PROVAS = [
    { icon: Smartphone, texto: "Prints de conversas ou postagens" },
    { icon: Video, texto: "Gravações de vídeo ou áudio" },
    { icon: Users, texto: "Contato de testemunhas que viram o ocorrido" },
    { icon: FileText, texto: "Boletim de Ocorrência (se já tiver feito)" }
];

export function DefesaProvas() {
    return (
        <section className="py-16 lg:py-20" style={{ backgroundColor: '#f8f8f8' }}>
            <Container>
                <div className="max-w-3xl mx-auto text-center">
                    {/* Título */}
                    <h2
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
                        style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}
                    >
                        O que eu preciso para processar?
                    </h2>

                    <p className="mb-10" style={{ color: '#666' }}>
                        Para aumentarmos suas chances de êxito, reúna o máximo de provas possível:
                    </p>

                    {/* Lista de provas */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left">
                        {PROVAS.map((prova, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-4 p-4 rounded-lg"
                                style={{ backgroundColor: '#ffffff', border: '1px solid #e5e5e5' }}
                            >
                                <div
                                    className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                                    style={{ backgroundColor: '#1a1a1a' }}
                                >
                                    <prova.icon className="w-5 h-5" style={{ color: '#c9a227' }} />
                                </div>
                                <span style={{ color: '#333' }}>{prova.texto}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Final */}
                    <a
                        href="/consulta-racismo"
                        onClick={trackWhatsAppClick}
                        className="inline-flex items-center justify-center gap-3 px-10 py-5 font-semibold text-lg rounded transition-all duration-200 hover:brightness-110"
                        style={{
                            backgroundColor: '#25D366',
                            color: '#ffffff',
                        }}
                    >
                        <MessageCircle className="w-6 h-6" />
                        QUERO UMA ANÁLISE DO MEU CASO
                    </a>
                    <p className="text-xs mt-3" style={{ color: '#999' }}>
                        Responda 2 perguntas rápidas para análise
                    </p>
                </div>
            </Container>
        </section>
    );
}
