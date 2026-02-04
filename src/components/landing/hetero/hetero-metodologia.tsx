"use client";

import { Container } from "@/components/layout";
import { HETERO_PAGE } from "@/lib/hetero-data";
import { FileSearch, UserCheck, Scale, Route } from "lucide-react";

const STEP_ICONS = [FileSearch, UserCheck, Scale, Route];

export function HeteroMetodologia() {
    const { metodologia } = HETERO_PAGE;

    return (
        <section className="py-16 lg:py-20" style={{ backgroundColor: '#f8f8f8' }}>
            <Container>
                <div className="max-w-4xl mx-auto">
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
                            {metodologia.headline}
                        </h2>
                        <p
                            className="max-w-2xl mx-auto text-base lg:text-lg"
                            style={{ color: '#666' }}
                        >
                            {metodologia.intro}
                        </p>
                    </div>

                    {/* Passos */}
                    <div className="space-y-4">
                        {metodologia.passos.map((passo, idx) => {
                            const IconComponent = STEP_ICONS[idx];
                            return (
                                <div
                                    key={idx}
                                    className="flex gap-6 p-6 rounded-lg bg-white"
                                    style={{ border: '1px solid #e5e5e5' }}
                                >
                                    <div
                                        className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0"
                                        style={{ backgroundColor: '#c9a227' }}
                                    >
                                        <IconComponent className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span
                                                className="text-xs font-bold px-2 py-1 rounded"
                                                style={{ backgroundColor: 'rgba(201, 162, 39, 0.15)', color: '#c9a227' }}
                                            >
                                                ETAPA {passo.numero}
                                            </span>
                                            <h3 className="font-bold text-lg" style={{ color: '#1a1a1a' }}>
                                                {passo.titulo}
                                            </h3>
                                        </div>
                                        <p style={{ color: '#666' }}>
                                            {passo.descricao}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}
