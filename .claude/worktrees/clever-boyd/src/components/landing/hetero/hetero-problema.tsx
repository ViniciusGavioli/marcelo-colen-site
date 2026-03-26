"use client";

import { Container } from "@/components/layout";
import { HETERO_PAGE } from "@/lib/hetero-data";

export function HeteroProblema() {
    const { problema } = HETERO_PAGE;

    return (
        <section className="py-16 lg:py-20" style={{ backgroundColor: '#ffffff' }}>
            <Container>
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <p
                            className="text-sm uppercase tracking-widest mb-3"
                            style={{ color: '#c9a227' }}
                        >
                            {problema.eyebrow}
                        </p>
                        <h2
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold"
                            style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}
                        >
                            {problema.headline}
                        </h2>
                    </div>

                    {/* Parágrafos */}
                    <div className="space-y-6">
                        {problema.paragrafos.map((paragrafo, idx) => (
                            <p
                                key={idx}
                                className="text-base lg:text-lg leading-relaxed"
                                style={{ color: '#333' }}
                            >
                                {paragrafo}
                            </p>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
