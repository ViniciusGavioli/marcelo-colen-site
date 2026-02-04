"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/layout";
import { HETERO_PAGE } from "@/lib/hetero-data";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

export function HeteroHero() {
    const { hero, whatsapp } = HETERO_PAGE;

    return (
        <section className="relative overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '32px 32px'
                    }}
                />
            </div>

            {/* Linha dourada no topo */}
            <div
                className="absolute top-0 left-0 right-0 h-1 z-20"
                style={{ backgroundColor: '#c9a227' }}
            />

            {/* MOBILE */}
            <div className="lg:hidden relative z-10">
                <Container className="pt-16 pb-8">
                    <div className="space-y-5">
                        {/* Eyebrow */}
                        <p
                            className="text-xs uppercase tracking-widest"
                            style={{ color: '#c9a227' }}
                        >
                            {hero.eyebrow}
                        </p>

                        {/* Headline */}
                        <h1
                            className="text-2xl sm:text-3xl font-bold leading-tight"
                            style={{ color: '#ffffff', fontFamily: 'Georgia, serif' }}
                        >
                            {hero.headline}
                            <br />
                            <span style={{ color: '#c9a227' }}>{hero.headlineHighlight}</span>
                        </h1>

                        {/* Subheadline */}
                        <p
                            className="text-base leading-relaxed"
                            style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                        >
                            {hero.subheadline}
                        </p>

                        {/* CTA */}
                        <div className="pt-2">
                            <a
                                href={getWhatsAppLink(whatsapp.hero)}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={trackWhatsAppClick}
                                className="inline-flex items-center justify-center gap-3 px-6 py-4 font-semibold text-base rounded transition-all duration-200 hover:brightness-110"
                                style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
                            >
                                <MessageCircle className="w-5 h-5" />
                                {hero.ctaPrimary}
                            </a>
                        </div>

                        {/* Credibility */}
                        <p
                            className="text-xs"
                            style={{ color: 'rgba(255, 255, 255, 0.5)' }}
                        >
                            {hero.credibility}
                        </p>
                    </div>
                </Container>

                {/* Imagem do Marcelo - Mobile */}
                <div className="relative w-full flex justify-center">
                    <Image
                        src="/images/wordpress/marcelo-terno.png"
                        alt="Dr. Marcelo Colen"
                        width={350}
                        height={450}
                        className="object-contain w-[75%] max-w-[320px] h-auto"
                        priority
                    />
                </div>
            </div>

            {/* DESKTOP */}
            <div className="hidden lg:block relative min-h-[85vh]">
                <Container className="relative z-10 pt-24 pb-16">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Conteúdo */}
                        <div className="max-w-xl space-y-6">
                            {/* Eyebrow */}
                            <p
                                className="text-sm uppercase tracking-widest"
                                style={{ color: '#c9a227' }}
                            >
                                {hero.eyebrow}
                            </p>

                            {/* Headline */}
                            <h1
                                className="text-4xl lg:text-5xl font-bold leading-tight"
                                style={{ color: '#ffffff', fontFamily: 'Georgia, serif' }}
                            >
                                {hero.headline}
                                <br />
                                <span style={{ color: '#c9a227' }}>{hero.headlineHighlight}</span>
                            </h1>

                            {/* Subheadline */}
                            <p
                                className="text-lg leading-relaxed"
                                style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                            >
                                {hero.subheadline}
                            </p>

                            {/* CTA */}
                            <div className="pt-4">
                                <a
                                    href={getWhatsAppLink(whatsapp.hero)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={trackWhatsAppClick}
                                    className="inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold text-base rounded transition-all duration-200 hover:brightness-110 hover:scale-[1.02]"
                                    style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    {hero.ctaPrimary}
                                </a>
                            </div>

                            {/* Credibility */}
                            <p
                                className="text-sm"
                                style={{ color: 'rgba(255, 255, 255, 0.5)' }}
                            >
                                {hero.credibility}
                            </p>
                        </div>

                        {/* Foto do Dr. Marcelo */}
                        <div className="flex justify-end items-end">
                            <Image
                                src="/images/wordpress/marcelo-terno.png"
                                alt="Dr. Marcelo Colen"
                                width={450}
                                height={580}
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}
