"use client";

import { Container } from "@/components/layout";
import { HETERO_PAGE } from "@/lib/hetero-data";
import { MessageCircle, Shield, Globe, Lock } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

const GARANTIA_ICONS = [Globe, Shield, Lock];

export function HeteroCta() {
    const { cta, whatsapp, disclaimer } = HETERO_PAGE;

    return (
        <section className="py-16 lg:py-24" style={{ backgroundColor: '#1a1a1a' }}>
            <Container>
                <div className="max-w-3xl mx-auto text-center">
                    {/* Headline */}
                    <h2
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6"
                        style={{ color: '#ffffff', fontFamily: 'Georgia, serif' }}
                    >
                        {cta.headline}
                    </h2>

                    {/* Subheadline */}
                    <p
                        className="text-base lg:text-lg leading-relaxed mb-8"
                        style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                    >
                        {cta.subheadline}
                    </p>

                    {/* CTA Button */}
                    <a
                        href={getWhatsAppLink(whatsapp.cta)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={trackWhatsAppClick}
                        className="inline-flex items-center justify-center gap-3 px-10 py-5 font-semibold text-lg transition-all duration-200 hover:brightness-110 hover:scale-[1.02] rounded-lg mb-8"
                        style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
                    >
                        <MessageCircle className="w-6 h-6" />
                        {cta.buttonText}
                    </a>

                    {/* Garantias */}
                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        {cta.garantias.map((garantia, idx) => {
                            const IconComponent = GARANTIA_ICONS[idx];
                            return (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2"
                                >
                                    <IconComponent className="w-4 h-4" style={{ color: '#c9a227' }} />
                                    <span
                                        className="text-sm"
                                        style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                                    >
                                        {garantia}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Disclaimer */}
                    <p
                        className="text-xs max-w-2xl mx-auto"
                        style={{ color: 'rgba(255, 255, 255, 0.4)' }}
                    >
                        {disclaimer}
                    </p>
                </div>
            </Container>
        </section>
    );
}
