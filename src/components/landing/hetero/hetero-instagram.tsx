"use client";

import Image from "next/image";
import { Instagram, MessageCircle, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";
import { HETERO_PAGE } from "@/lib/hetero-data";

export function HeteroInstagram() {
    const { whatsapp } = HETERO_PAGE;

    return (
        <section className="py-16 lg:py-20 bg-white">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">

                    {/* Instagram Profile Card */}
                    <div className="flex justify-center">
                        <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 max-w-md w-full">
                            {/* Profile Header */}
                            <div className="flex items-start gap-4">
                                {/* Profile Photo */}
                                <div className="relative shrink-0">
                                    <div
                                        className="w-20 h-20 rounded-full p-[3px]"
                                        style={{
                                            background: 'linear-gradient(135deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)'
                                        }}
                                    >
                                        <div className="w-full h-full rounded-full overflow-hidden bg-white p-[2px]">
                                            <Image
                                                src="/images/wordpress/marcelo-hero.jpg"
                                                alt="Marcelo Colen"
                                                width={80}
                                                height={80}
                                                className="w-full h-full object-cover rounded-full"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Profile Info */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-gray-900">marcelocolen.adv</span>
                                        <CheckCircle2 className="w-4 h-4 text-blue-500 fill-blue-500" />
                                    </div>

                                    {/* Stats */}
                                    <div className="flex gap-4 mt-3 text-sm">
                                        <div>
                                            <span className="font-bold text-gray-900">467</span>
                                            <span className="text-gray-500 ml-1">posts</span>
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-900">55 mil</span>
                                            <span className="text-gray-500 ml-1">seguidores</span>
                                        </div>
                                    </div>

                                    {/* Bio */}
                                    <div className="mt-3 text-sm text-gray-700 space-y-0.5">
                                        <p className="font-semibold">Marcelo Colen</p>
                                        <p>Advogado especialista em Igualdade Racial 👨🏿‍⚖️</p>
                                        <p>Diretor da OAB/MG ⚠️</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Side */}
                    <div className="space-y-6 text-center lg:text-left">
                        <h2
                            className="text-2xl sm:text-3xl font-bold"
                            style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}
                        >
                            Acompanhe o trabalho ou entre em contato:
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* WhatsApp primeiro */}
                            <a
                                href={getWhatsAppLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={trackWhatsAppClick}
                                className="inline-flex items-center justify-center gap-3 px-6 py-4 font-semibold text-base text-white transition-all duration-200 hover:brightness-110 rounded-lg"
                                style={{ backgroundColor: '#25D366' }}
                            >
                                <MessageCircle className="w-5 h-5" />
                                Solicitar Análise
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://instagram.com/marcelocolen.adv"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 px-6 py-4 font-semibold text-base text-white transition-all duration-200 hover:brightness-110 rounded-lg"
                                style={{
                                    background: 'linear-gradient(90deg, #F7B731 0%, #DD2A7B 50%, #8134AF 100%)',
                                }}
                            >
                                <Instagram className="w-5 h-5" />
                                @marcelocolen.adv
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
