"use client";

import { Container } from "@/components/layout";
import { HETERO_PAGE } from "@/lib/hetero-data";
import { AlertCircle, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

export function HeteroIdentificacao() {
    const { identificacao, whatsapp } = HETERO_PAGE;

    return (
        <section className="py-16 lg:py-20" style={{ backgroundColor: '#ffffff' }}>
            <Container>
                <div className="max-w-4xl mx-auto">
                    {/* Título acolhedor */}
                    <div className="text-center mb-10">
                        <h2
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
                            style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}
                        >
                            {identificacao.headline}
                        </h2>
                        <p
                            className="text-lg max-w-2xl mx-auto"
                            style={{ color: '#666' }}
                        >
                            Sabemos como essa situação é difícil. Você estudou, se dedicou, passou nas provas...
                            e agora enfrenta uma barreira que parece injusta.
                        </p>
                    </div>

                    {/* Grid de situações */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                        {identificacao.situacoes.map((situacao, idx) => (
                            <div
                                key={idx}
                                className="flex gap-4 p-5 rounded-xl transition-all duration-200 hover:shadow-lg hover:scale-[1.01] cursor-default"
                                style={{ backgroundColor: '#f8f8f8', border: '1px solid #e5e5e5' }}
                            >
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                                    style={{ backgroundColor: 'rgba(201, 162, 39, 0.15)' }}
                                >
                                    <AlertCircle className="w-6 h-6" style={{ color: '#c9a227' }} />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1 text-lg" style={{ color: '#1a1a1a' }}>
                                        {situacao.titulo}
                                    </h3>
                                    <p className="text-sm leading-relaxed" style={{ color: '#666' }}>
                                        {situacao.descricao}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Box de acolhimento + CTA */}
                    <div
                        className="p-6 lg:p-8 rounded-xl border-l-4 text-center"
                        style={{ backgroundColor: '#faf9f6', borderColor: '#c9a227' }}
                    >
                        <p
                            className="text-lg lg:text-xl font-medium mb-4"
                            style={{ color: '#1a1a1a' }}
                        >
                            A reprovação na banca <strong>não define sua identidade</strong>.
                            <br />
                            Pode ser apenas um erro de critério que você tem direito de contestar.
                        </p>
                        <a
                            href={getWhatsAppLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={trackWhatsAppClick}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-base rounded-lg transition-all duration-200 hover:brightness-110"
                            style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
                        >
                            <MessageCircle className="w-5 h-5" />
                            Entender meu caso
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}
