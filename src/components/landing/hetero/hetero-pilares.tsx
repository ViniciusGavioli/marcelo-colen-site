"use client";

import { Container } from "@/components/layout";
import { HETERO_PAGE } from "@/lib/hetero-data";
import { Palette, Waves, Circle, Smile } from "lucide-react";

const ICONS = {
    palette: Palette,
    waves: Waves,
    circle: Circle,
    smile: Smile,
};

export function HeteroPilares() {
    const { pilares } = HETERO_PAGE;

    return (
        <section className="py-16 lg:py-20" style={{ backgroundColor: '#1a1a1a' }}>
            <Container>
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <p
                            className="text-sm uppercase tracking-widest mb-3"
                            style={{ color: '#c9a227' }}
                        >
                            {pilares.eyebrow}
                        </p>
                        <h2
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
                            style={{ color: '#ffffff', fontFamily: 'Georgia, serif' }}
                        >
                            {pilares.headline}
                        </h2>
                        <p
                            className="max-w-3xl mx-auto text-base lg:text-lg"
                            style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                        >
                            {pilares.intro}
                        </p>
                    </div>

                    {/* Grid dos 4 Pilares */}
                    <div className="grid sm:grid-cols-2 gap-6 mb-10">
                        {pilares.itens.map((item, idx) => {
                            const IconComponent = ICONS[item.icon as keyof typeof ICONS];
                            return (
                                <div
                                    key={idx}
                                    className="p-6 rounded-lg"
                                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div
                                            className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                                            style={{ backgroundColor: '#c9a227' }}
                                        >
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3
                                                className="font-bold text-lg mb-2"
                                                style={{ color: '#ffffff' }}
                                            >
                                                {item.titulo}
                                            </h3>
                                            <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                                {item.descricao}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Destaque */}
                    <div
                        className="p-6 rounded-lg border"
                        style={{
                            backgroundColor: 'rgba(201, 162, 39, 0.1)',
                            borderColor: 'rgba(201, 162, 39, 0.3)'
                        }}
                    >
                        <p
                            className="text-center text-base lg:text-lg"
                            style={{ color: '#c9a227' }}
                        >
                            {pilares.destaque}
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
