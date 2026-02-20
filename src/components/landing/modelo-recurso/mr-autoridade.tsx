"use client";

import Image from "next/image";
import { Container } from "@/components/layout";
import { MODELO_RECURSO_PAGE } from "@/lib/modelo-recurso-data";
import { Award } from "lucide-react";

function getAutoridadeTexto(a: { descricao: string; depoimento?: string }): string {
    const d = a.depoimento;
    if (typeof d === "string" && d.trim().length > 0) return d;
    return a.descricao;
}

export function MrAutoridade() {
    const { autoridade } = MODELO_RECURSO_PAGE;

    return (
        <section className="py-16 lg:py-24" style={{ backgroundColor: '#f8f8f8' }}>
            <Container>
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <h2
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12"
                        style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}
                    >
                        {autoridade.headline}
                    </h2>

                    <div className="grid lg:grid-cols-5 gap-8 items-start">
                        {/* Foto */}
                        <div className="lg:col-span-2 flex justify-center">
                            <div className="relative">
                                <div
                                    className="absolute -inset-2 rounded-xl opacity-20"
                                    style={{
                                        background: 'linear-gradient(135deg, #c9a227, transparent)',
                                    }}
                                />
                                <Image
                                    src="/images/wordpress/marcelo-terno.png"
                                    alt={autoridade.nome}
                                    width={320}
                                    height={400}
                                    className="relative rounded-lg object-contain"
                                />
                            </div>
                        </div>

                        {/* Info */}
                        <div className="lg:col-span-3 space-y-5">
                            <div>
                                <h3
                                    className="text-xl lg:text-2xl font-bold mb-1"
                                    style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}
                                >
                                    {autoridade.nome}
                                </h3>
                                <p className="text-sm font-medium" style={{ color: '#c9a227' }}>
                                    {autoridade.oab}
                                </p>
                            </div>

                            <p
                                className="text-base leading-relaxed"
                                style={{ color: '#555' }}
                            >
                                {autoridade.descricao}
                            </p>

                            {/* Credenciais */}
                            <div className="space-y-2">
                                {autoridade.credenciais.map((cred, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <Award className="w-4 h-4 flex-shrink-0" style={{ color: '#c9a227' }} />
                                        <span className="text-sm" style={{ color: '#444' }}>
                                            {cred}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Depoimento */}
                            <div
                                className="p-5 rounded-lg"
                                style={{
                                    backgroundColor: '#1a1a1a',
                                    borderLeft: '3px solid #c9a227',
                                }}
                            >
                                <p
                                    className="text-base italic leading-relaxed mb-2"
                                    style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                                >
                                    {getAutoridadeTexto(autoridade)}
                                </p>
                                <p
                                    className="text-sm font-semibold"
                                    style={{ color: '#c9a227' }}
                                >
                                    — Dr. Marcelo Colen
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
