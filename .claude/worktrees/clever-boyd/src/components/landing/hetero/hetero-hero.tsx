"use client";

import Image from "next/image";
import { MessageCircle, Clock, CheckCircle } from "lucide-react";
import { Container } from "@/components/layout";
import { HETERO_PAGE } from "@/lib/hetero-data";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

export function HeteroHero() {
    const { hero, whatsapp } = HETERO_PAGE;

    return (
        <section className="relative overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
            {/* Background Image + Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#1a1a1a]" /> {/* Cor base para garantir fundo escuro */}
                <Image
                    src="/images/hero-scales.png"
                    alt="Background Justiça"
                    fill
                    className="object-cover opacity-20"
                    priority
                />
                {/* Gradiente Overlay para garantir leitura e suavidade */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to right, #1a1a1a 30%, rgba(26, 26, 26, 0.85) 60%, rgba(26, 26, 26, 0.7) 100%)'
                    }}
                />
                {/* Ponto de luz dourado sutil */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(circle at 80% 20%, rgba(201, 162, 39, 0.15) 0%, transparent 50%)'
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
                <Container className="pt-12 pb-6">
                    <div className="space-y-4">
                        {/* Badge de Urgência */}
                        <div
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
                            style={{ backgroundColor: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}
                        >
                            <Clock className="w-3.5 h-3.5" />
                            Prazo curto? Atendimento prioritário
                        </div>

                        {/* Headline + Subheadline mais emocional */}
                        <h1
                            className="text-2xl sm:text-3xl font-bold leading-tight"
                            style={{ color: '#ffffff', fontFamily: 'Georgia, serif' }}
                        >
                            Indeferido na Heteroidentificação?
                            <br />
                            <span style={{ color: '#c9a227' }}>Você não está sozinho.</span>
                        </h1>

                        <p
                            className="text-base leading-relaxed"
                            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                        >
                            A negativa da banca <strong style={{ color: '#ffffff' }}>não define quem você é</strong>.
                            Muitos candidatos legítimos são reprovados por critérios subjetivos ou mal aplicados.
                        </p>

                        {/* Prova Social Rápida */}
                        <div className="flex flex-wrap items-center gap-3 text-xs" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                            <span className="flex items-center gap-1">
                                <CheckCircle className="w-3.5 h-3.5" style={{ color: '#c9a227' }} />
                                Análise técnica fenotípica
                            </span>
                            <span className="flex items-center gap-1">
                                <CheckCircle className="w-3.5 h-3.5" style={{ color: '#c9a227' }} />
                                Atendimento em todo Brasil
                            </span>
                        </div>

                        {/* CTA Principal */}
                        <div className="pt-2 space-y-2">
                            <a
                                href={getWhatsAppLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={trackWhatsAppClick}
                                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 font-bold text-base rounded-lg transition-all duration-200 hover:brightness-110 shadow-lg"
                                style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
                            >
                                <MessageCircle className="w-5 h-5" />
                                Falar com Especialista Agora
                            </a>
                            <p className="text-center text-xs" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                                🟢 Resposta em até 2 horas • Sigilo garantido
                            </p>
                        </div>
                    </div>
                </Container>

                {/* Imagem do Marcelo - Mobile */}
                <div className="relative w-full flex justify-center">
                    <Image
                        src="/images/wordpress/marcelo-terno.png"
                        alt="Dr. Marcelo Colen - Advogado Especialista"
                        width={350}
                        height={450}
                        className="object-contain w-[75%] max-w-[320px] h-auto"
                        priority
                    />
                </div>
            </div>

            {/* DESKTOP */}
            <div className="hidden lg:block relative min-h-[90vh]">
                <Container className="relative z-10 pt-20 pb-16">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Conteúdo */}
                        <div className="max-w-xl space-y-5">
                            {/* Badge de Urgência */}
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium animate-pulse"
                                style={{ backgroundColor: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}
                            >
                                <Clock className="w-4 h-4" />
                                Prazo de recurso aberto? Atendimento prioritário
                            </div>

                            {/* Headline emocional */}
                            <h1
                                className="text-4xl lg:text-5xl font-bold leading-[1.15]"
                                style={{ color: '#ffffff', fontFamily: 'Georgia, serif' }}
                            >
                                Indeferido na Heteroidentificação?
                                <br />
                                <span style={{ color: '#c9a227' }}>Você não está sozinho.</span>
                            </h1>

                            {/* Subheadline acolhedor */}
                            <p
                                className="text-lg leading-relaxed"
                                style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                            >
                                A negativa da banca <strong style={{ color: '#ffffff' }}>não define quem você é</strong>.
                                Muitos candidatos legítimos são reprovados por critérios subjetivos ou mal aplicados.
                                Entenda suas possibilidades jurídicas.
                            </p>

                            {/* Prova Social */}
                            <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                <span className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4" style={{ color: '#c9a227' }} />
                                    Análise técnica fenotípica
                                </span>
                                <span className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4" style={{ color: '#c9a227' }} />
                                    Pareceres especializados
                                </span>
                                <span className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4" style={{ color: '#c9a227' }} />
                                    Atendimento Brasil
                                </span>
                            </div>

                            {/* CTA Principal */}
                            <div className="pt-2 space-y-3">
                                <a
                                    href={getWhatsAppLink()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={trackWhatsAppClick}
                                    className="inline-flex items-center justify-center gap-3 px-10 py-5 font-bold text-lg rounded-lg transition-all duration-200 hover:brightness-110 hover:scale-[1.02] shadow-xl"
                                    style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
                                >
                                    <MessageCircle className="w-6 h-6" />
                                    Falar com Especialista Agora
                                </a>
                                <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                                    🟢 Resposta em até 2 horas • Análise individualizada • Sigilo garantido
                                </p>
                            </div>

                            {/* Credenciais */}
                            <div
                                className="flex items-center gap-4 pt-4 border-t"
                                style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
                            >
                                <span className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                                    Dr. Marcelo Colen • Diretor OAB/MG • Especialista em Igualdade Racial
                                </span>
                            </div>
                        </div>

                        {/* Foto do Dr. Marcelo */}
                        <div className="flex justify-end items-end">
                            <Image
                                src="/images/wordpress/marcelo-terno.png"
                                alt="Dr. Marcelo Colen - Advogado Especialista em Heteroidentificação"
                                width={480}
                                height={620}
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </Container>

                {/* Logos das Bancas - Prova Social */}
                <div
                    className="absolute bottom-0 left-0 right-0 py-4 z-10"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
                >
                    <Container>
                        <div className="flex items-center justify-center gap-8">
                            <span className="text-xs uppercase tracking-wider" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>
                                Atuação em bancas:
                            </span>
                            <div className="flex items-center gap-6">
                                {['Cebraspe', 'FGV', 'Vunesp', 'IBFC', 'UFMG'].map((banca) => (
                                    <span
                                        key={banca}
                                        className="text-sm font-medium px-3 py-1 rounded"
                                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'rgba(255, 255, 255, 0.7)' }}
                                    >
                                        {banca}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </section>
    );
}
