"use client";

import { Container } from "@/components/layout";
import { MODELO_RECURSO_PAGE } from "@/lib/modelo-recurso-data";
import { ShieldCheck, CheckCircle, BookOpen, Scale, FileText } from "lucide-react";

export function MrOferta() {
    const { metodo, oferta } = MODELO_RECURSO_PAGE;
    const { checkoutUrl } = oferta;

    const icons = [BookOpen, Scale, FileText]; // Icons for the 3 layers

    return (
        <section className="py-16 lg:py-24" style={{ backgroundColor: '#f8f8f8' }}>
            <Container>
                <div className="max-w-5xl mx-auto space-y-16">

                    {/* ═══ PARTE 1: O MÉTODO (3 CAMADAS) ═══ */}
                    <div>
                        <div className="text-center mb-10">
                            <h2
                                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
                                style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}
                            >
                                {metodo.headline}
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                {metodo.subheadline}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {metodo.camadas.map((camada, idx) => {
                                const Icon = icons[idx] || CheckCircle;
                                return (
                                    <div
                                        key={idx}
                                        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow"
                                    >
                                        <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(201, 162, 39, 0.1)' }}>
                                            <Icon className="w-6 h-6" style={{ color: '#c9a227' }} />
                                        </div>
                                        <h3 className="text-lg font-bold mb-1" style={{ color: '#1a1a1a' }}>{camada.titulo}</h3>
                                        <p className="text-sm font-semibold mb-3" style={{ color: '#c9a227' }}>{camada.produto}</p>
                                        <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
                                            {camada.descricao}
                                        </p>
                                        <div className="pt-4 border-t border-gray-100 mt-auto">
                                            <span className="text-xs text-gray-400 uppercase tracking-wider">Valor Individual</span>
                                            <p className="font-bold text-lg text-gray-800">{camada.preco}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* ═══ PARTE 2: A OFERTA (ANCORAGEM) ═══ */}
                    <div id="oferta" className="scroll-mt-20">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#c9a227]/20">
                            {/* Header Tabela */}
                            <div className="bg-[#1a1a1a] p-6 text-center">
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                                    {oferta.headline}
                                </h3>
                                <p className="text-white/80 text-sm">
                                    Economize R$ {oferta.economia} levando o Combo Completo
                                </p>
                            </div>

                            {/* Tabela de Preços */}
                            <div className="p-6 sm:p-8">
                                <div className="space-y-4 mb-8">
                                    {oferta.tabela.map((row, idx) => (
                                        <div key={idx} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0">
                                            <div className="flex items-center gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                                <span className="text-gray-700 font-medium">{row.item}</span>
                                            </div>
                                            <span className="text-gray-500 font-medium whitespace-nowrap">R$ {row.valor},00</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Total e Desconto */}
                                <div className="bg-gray-50 rounded-xl p-6 text-center mb-8 border border-gray-200">
                                    <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider">Valor Total Individual</p>
                                    <p className="text-2xl text-gray-400 line-through font-medium mb-4">R$ {oferta.totalAncorado},00</p>

                                    <div className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold mb-2">
                                        VOCÊ ECONOMIZA R$ {oferta.economia},00
                                    </div>

                                    <p className="text-sm text-gray-500 mb-1">Levando o Combo Blindagem Hoje:</p>
                                    <p className="text-4xl sm:text-5xl font-extrabold" style={{ color: '#c9a227' }}>
                                        R$ {oferta.totalPromocional},00
                                    </p>
                                </div>

                                {/* CTA */}
                                <div className="text-center space-y-3">
                                    <a
                                        href={checkoutUrl}
                                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 font-bold text-lg rounded-lg transition-all duration-200 hover:brightness-110 hover:scale-[1.02] shadow-lg hover:shadow-xl"
                                        style={{ backgroundColor: '#c9a227', color: '#ffffff' }}
                                    >
                                        <ShieldCheck className="w-6 h-6" />
                                        {oferta.ctaText}
                                    </a>
                                    <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        {oferta.ctaSub}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
