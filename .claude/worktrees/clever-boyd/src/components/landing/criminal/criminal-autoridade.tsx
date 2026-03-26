"use client";

import Image from "next/image";
import { Container } from "@/components/layout";
import { Award, BookOpen, Fingerprint } from "lucide-react";
import { CRIMINAL_PAGE } from "@/lib/criminal-data";

export function CriminalAutoridade() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Right Column: Image with artistic frame */}
                    <div className="lg:w-1/2 relative order-2 lg:order-1">
                        <div className="relative z-10 rounded-3xl overflow-hidden border-8 border-gray-50 shadow-2xl">
                            <Image
                                src="/images/marcelo/marcelo-bio.jpg"
                                alt="Dr. Marcelo Colen"
                                width={600}
                                height={700}
                                className="w-full object-cover"
                            />
                        </div>
                        {/* Decorative Gold Elements */}
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#c9a227]/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#c9a227]/5 rounded-full blur-3xl -z-10" />

                        {/* Float Badge */}
                        <div className="absolute bottom-10 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#c9a227] flex items-center justify-center">
                                    <Fingerprint className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Estratégia</p>
                                    <p className="text-gray-900 font-bold">Personalizada</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Left Column: Authority Content */}
                    <div className="lg:w-1/2 order-1 lg:order-2">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-[#c9a227] text-xs font-bold tracking-[0.3em] uppercase">
                                O Advogado
                            </span>
                            <div className="h-px w-12 bg-[#c9a227]/30" />
                        </div>

                        <h2
                            className="text-4xl lg:text-5xl font-bold mb-8 leading-tight"
                            style={{ color: '#0a0a0a', fontFamily: 'Georgia, serif' }}
                        >
                            Defesa Criminal com <br />
                            <span className="text-[#c9a227]">Base Intelectual Sólida.</span>
                        </h2>

                        <div className="space-y-6 mb-12">
                            <p className="text-xl text-gray-700 leading-relaxed font-medium italic">
                                {CRIMINAL_PAGE.autoridade.texto1}
                            </p>
                            <p className="text-lg text-gray-500 leading-relaxed">
                                {CRIMINAL_PAGE.autoridade.texto2}
                            </p>
                        </div>

                        {/* Credentials Icons Grid */}
                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
                                    <Award className="w-6 h-6 text-[#c9a227]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Especialização</h4>
                                    <p className="text-sm text-gray-500">Ciências Penais (PUC Minas)</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
                                    <BookOpen className="w-6 h-6 text-[#c9a227]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Academia</h4>
                                    <p className="text-sm text-gray-500">Mestrando em Direito (UFMG)</p>
                                </div>
                            </div>
                        </div>

                        {/* Signature detail */}
                        <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                            <div>
                                <p className="text-gray-900 font-bold text-lg">Dr. Marcelo Colen</p>
                                <p className="text-[#c9a227] text-xs font-bold tracking-[0.2em] uppercase">OAB/MG 167.463</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
