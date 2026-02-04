"use client";

import { Container } from "@/components/layout";
import { HETERO_PAGE } from "@/lib/hetero-data";
import { AlertCircle } from "lucide-react";

export function HeteroIdentificacao() {
    const { identificacao } = HETERO_PAGE;

    return (
        <section className="py-16 lg:py-20" style={{ backgroundColor: '#ffffff' }}>
            <Container>
                <div className="max-w-4xl mx-auto">
                    {/* Título */}
                    <h2
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center"
                        style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}
                    >
                        {identificacao.headline}
                    </h2>

                    <p
                        className="text-center text-base lg:text-lg mb-10"
                        style={{ color: '#666' }}
                    >
                        {identificacao.intro}
                    </p>

                    {/* Grid de situações */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                        {identificacao.situacoes.map((situacao, idx) => (
                            <div
                                key={idx}
                                className="flex gap-4 p-5 rounded-lg transition-all duration-200 hover:shadow-md"
                                style={{ backgroundColor: '#f8f8f8', border: '1px solid #e5e5e5' }}
                            >
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                                    style={{ backgroundColor: 'rgba(201, 162, 39, 0.1)' }}
                                >
                                    <AlertCircle className="w-5 h-5" style={{ color: '#c9a227' }} />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1" style={{ color: '#1a1a1a' }}>
                                        {situacao.titulo}
                                    </h3>
                                    <p className="text-sm" style={{ color: '#666' }}>
                                        {situacao.descricao}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Destaque */}
                    <div
                        className="p-6 rounded-lg border-l-4"
                        style={{ backgroundColor: '#f8f8f8', borderColor: '#c9a227' }}
                    >
                        <p className="text-base lg:text-lg" style={{ color: '#333' }}>
                            {identificacao.destaque}
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
