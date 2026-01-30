"use client";

import { Shield, Users, Scale, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout";

const areas = [
    {
        icon: Shield,
        title: "Crimes de Racismo",
        description: "Defesa de vítimas de racismo e injúria racial. Buscamos a punição do agressor e sua indenização.",
        href: "/defesa",
        isPrimary: true,
    },
    {
        icon: Users,
        title: "Heteroidentificação",
        description: "Recursos administrativos e judiciais para reverter indeferimentos em bancas de cotas raciais.",
        href: "/heteroidentificacao",
        isPrimary: false,
    },
    {
        icon: Scale,
        title: "Defesa Criminal",
        description: "Advocacia criminal especializada com foco em direitos humanos e igualdade racial.",
        href: "/consulta",
        isPrimary: false,
    },
];

export function HomeAreas() {
    return (
        <section className="py-20" style={{ backgroundColor: '#0a0a0a' }}>
            <Container>
                {/* Header */}
                <div className="text-center mb-16">
                    <h2
                        className="text-3xl lg:text-4xl font-bold mb-4"
                        style={{ color: '#ffffff', fontFamily: 'Georgia, serif' }}
                    >
                        Áreas de <span style={{ color: '#c9a227' }}>Atuação</span>
                    </h2>
                    <p
                        className="text-lg max-w-2xl mx-auto"
                        style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                    >
                        Especialização em direito antidiscriminatório com excelência em defesa de direitos fundamentais
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {areas.map((area, index) => (
                        <a
                            key={index}
                            href={area.href}
                            className="group relative p-8 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1"
                            style={{
                                backgroundColor: area.isPrimary ? 'rgba(201, 162, 39, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                                border: area.isPrimary ? '2px solid #c9a227' : '1px solid rgba(255, 255, 255, 0.1)',
                            }}
                        >
                            {/* Badge destaque */}
                            {area.isPrimary && (
                                <div
                                    className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-semibold"
                                    style={{ backgroundColor: '#c9a227', color: '#000000' }}
                                >
                                    ESPECIALIDADE PRINCIPAL
                                </div>
                            )}

                            {/* Icon */}
                            <div
                                className="w-14 h-14 rounded-lg flex items-center justify-center mb-6"
                                style={{
                                    backgroundColor: area.isPrimary ? 'rgba(201, 162, 39, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                                }}
                            >
                                <area.icon
                                    className="w-7 h-7"
                                    style={{ color: area.isPrimary ? '#c9a227' : 'rgba(255, 255, 255, 0.7)' }}
                                />
                            </div>

                            {/* Content */}
                            <h3
                                className="text-xl font-bold mb-3"
                                style={{ color: area.isPrimary ? '#c9a227' : '#ffffff', fontFamily: 'Georgia, serif' }}
                            >
                                {area.title}
                            </h3>
                            <p
                                className="text-sm leading-relaxed mb-4"
                                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                            >
                                {area.description}
                            </p>

                            {/* Link */}
                            <div
                                className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
                                style={{ color: area.isPrimary ? '#c9a227' : 'rgba(255, 255, 255, 0.5)' }}
                            >
                                Saiba mais <ArrowRight className="w-4 h-4" />
                            </div>
                        </a>
                    ))}
                </div>
            </Container>
        </section>
    );
}
