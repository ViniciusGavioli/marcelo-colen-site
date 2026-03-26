"use client";

import { Container } from "@/components/layout";
import { MODELO_RECURSO_PAGE } from "@/lib/modelo-recurso-data";
import { ShieldCheck, X, AlertCircle, CheckCircle } from "lucide-react";

export function MrComparacao() {
    const { comparacao, checkoutUrl } = MODELO_RECURSO_PAGE;

    return (
        <section className="py-16 lg:py-24" style={{ backgroundColor: '#ffffff' }}>
            <Container>
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <h2
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10"
                        style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}
                    >
                        {comparacao.headline}
                    </h2>

                    {/* Tabela — Desktop */}
                    <div className="hidden md:block mb-10">
                        <div className="rounded-xl overflow-hidden border" style={{ borderColor: '#e5e5e5' }}>
                            {/* Header da tabela */}
                            <div className="grid grid-cols-4" style={{ backgroundColor: '#1a1a1a' }}>
                                <div className="p-4" />
                                <div className="p-4 text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <X className="w-4 h-4" style={{ color: '#ef4444' }} />
                                        <span className="font-semibold text-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>
                                            Fazer Sozinho
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4 text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <AlertCircle className="w-4 h-4" style={{ color: '#f59e0b' }} />
                                        <span className="font-semibold text-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>
                                            Contratar Advogado
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4 text-center" style={{ backgroundColor: 'rgba(201, 162, 39, 0.2)' }}>
                                    <div className="flex items-center justify-center gap-2">
                                        <CheckCircle className="w-4 h-4" style={{ color: '#c9a227' }} />
                                        <span className="font-bold text-sm" style={{ color: '#c9a227' }}>
                                            Modelo Pronto
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Rows */}
                            {comparacao.categorias.map((cat, idx) => (
                                <div
                                    key={idx}
                                    className="grid grid-cols-4 border-t"
                                    style={{
                                        borderColor: '#f0f0f0',
                                        backgroundColor: idx % 2 === 0 ? '#ffffff' : '#fafafa',
                                    }}
                                >
                                    <div className="p-4">
                                        <span className="text-sm font-medium" style={{ color: '#1a1a1a' }}>
                                            {cat}
                                        </span>
                                    </div>
                                    <div className="p-4 text-center">
                                        <span className="text-sm" style={{ color: '#999' }}>
                                            {comparacao.sozinho[idx]}
                                        </span>
                                    </div>
                                    <div className="p-4 text-center">
                                        <span className="text-sm" style={{ color: '#666' }}>
                                            {comparacao.advogado[idx]}
                                        </span>
                                    </div>
                                    <div
                                        className="p-4 text-center"
                                        style={{ backgroundColor: 'rgba(201, 162, 39, 0.05)' }}
                                    >
                                        <span className="text-sm font-semibold" style={{ color: '#1a1a1a' }}>
                                            {comparacao.modelo[idx]}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tabela — Mobile (Cards) */}
                    <div className="md:hidden space-y-3 mb-10">
                        {comparacao.categorias.map((cat, idx) => (
                            <div
                                key={idx}
                                className="rounded-lg p-4"
                                style={{ backgroundColor: '#f8f8f8', border: '1px solid #e5e5e5' }}
                            >
                                <p className="font-semibold text-sm mb-3" style={{ color: '#1a1a1a' }}>
                                    {cat}
                                </p>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-start">
                                        <span className="text-xs" style={{ color: '#999' }}>❌ Sozinho:</span>
                                        <span className="text-xs text-right ml-2" style={{ color: '#999' }}>
                                            {comparacao.sozinho[idx]}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-start">
                                        <span className="text-xs" style={{ color: '#666' }}>⚖️ Advogado:</span>
                                        <span className="text-xs text-right ml-2" style={{ color: '#666' }}>
                                            {comparacao.advogado[idx]}
                                        </span>
                                    </div>
                                    <div
                                        className="flex justify-between items-start rounded p-2 -mx-2"
                                        style={{ backgroundColor: 'rgba(201, 162, 39, 0.08)' }}
                                    >
                                        <span className="text-xs font-semibold" style={{ color: '#c9a227' }}>
                                            ✅ Modelo:
                                        </span>
                                        <span className="text-xs text-right ml-2 font-semibold" style={{ color: '#1a1a1a' }}>
                                            {comparacao.modelo[idx]}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Ancoragem de preço */}
                    <div
                        className="text-center p-6 lg:p-8 rounded-xl mb-8"
                        style={{
                            backgroundColor: '#1a1a1a',
                            border: '1px solid rgba(201, 162, 39, 0.3)',
                        }}
                    >
                        <p
                            className="text-base lg:text-lg font-medium leading-relaxed"
                            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                        >
                            {comparacao.ancoragem}
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <a
                            href={checkoutUrl}
                            className="inline-flex items-center justify-center gap-3 px-10 py-5 font-bold text-base lg:text-lg rounded-lg transition-all duration-200 hover:brightness-110 hover:scale-[1.02] shadow-xl"
                            style={{ backgroundColor: '#c9a227', color: '#ffffff' }}
                        >
                            <ShieldCheck className="w-5 h-5" />
                            {comparacao.ctaText}
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}
