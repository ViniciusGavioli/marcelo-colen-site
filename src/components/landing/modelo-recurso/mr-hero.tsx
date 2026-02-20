"use client";

import Image from "next/image";
import { Clock, CheckCircle, ShieldCheck, Scale, FileText, Zap } from "lucide-react";
import { Container } from "@/components/layout";
import { MODELO_RECURSO_PAGE } from "@/lib/modelo-recurso-data";

export function MrHero() {
    const { hero, oferta } = MODELO_RECURSO_PAGE;
    const { checkoutUrl } = oferta;

    return (
        <section className="relative overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
            {/* ── Background layers ── */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0" style={{ backgroundColor: '#0f1729' }} />
                <Image
                    src="/images/hero-professionals-background.png"
                    alt="Profissionais negros aprovados em concursos públicos"
                    fill
                    className="object-cover opacity-[0.4]"
                    priority
                    aria-hidden="true"
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to right, #0f1729 30%, rgba(15,23,41,0.85) 60%, rgba(15,23,41,0.7) 100%)'
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(circle at 80% 20%, rgba(212,160,23,0.15) 0%, transparent 60%)'
                    }}
                />
            </div>

            {/* ── Gold line top ── */}
            <div
                className="absolute top-0 left-0 right-0 h-1 z-20"
                style={{ backgroundColor: '#d4a017' }}
            />

            {/* ═══════════ MOBILE ═══════════ */}
            <div className="lg:hidden relative z-10 w-full overflow-hidden">
                <Container className="pt-8 pb-0 px-4">
                    <div className="space-y-4 text-center">
                        {/* Badge de Destaque */}
                        <div className="flex justify-center">
                            <div
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold animate-pulse shadow-md border border-[#ef4444]/30"
                                style={{ backgroundColor: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}
                            >
                                <Clock className="w-3.5 h-3.5" />
                                {hero.badge}
                            </div>
                        </div>

                        {/* Headline Direta - Foco no Produto */}
                        <h1
                            className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight uppercase"
                            style={{ color: '#ffffff', fontFamily: 'Georgia, serif' }}
                        >
                            Modelo de Recurso Administrativo
                            <br />
                            <span style={{ color: '#d4a017' }}>Para Heteroidentificação</span>
                        </h1>

                        {/* Subheadline Focada na Solução Prática */}
                        <p
                            className="text-base sm:text-lg leading-relaxed max-w-sm mx-auto"
                            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                        >
                            Documento completo, editável e fundamentado na ADPF 186/STF. Baixe, preencha seus dados e protocolize seu recurso hoje mesmo.
                        </p>

                        {/* CTA Direto */}
                        <div className="pt-2 pb-6 space-y-2">
                            <a
                                href={checkoutUrl}
                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 font-bold text-lg rounded-lg transition-all duration-200 hover:brightness-110 shadow-lg uppercase tracking-wide border-b-4 border-[#a17a12] active:border-b-0 active:translate-y-1"
                                style={{ backgroundColor: '#d4a017', color: '#ffffff' }}
                            >
                                <FileText className="w-6 h-6" />
                                QUERO O MODELO PRONTO AGORA
                            </a>
                            <div className="flex justify-center items-center gap-1 text-xs text-white/60">
                                <ShieldCheck className="w-3 h-3 text-[#d4a017]" />
                                Acesso imediato via e-mail
                            </div>
                        </div>
                    </div>

                    {/* Imagem Mobile Ajustada - Fundo da tela */}
                    <div className="relative mt-2 w-full flex justify-center h-[380px] overflow-hidden">
                        <div className="absolute bottom-0 w-[85%] max-w-[320px]">
                            <Image
                                src="/images/wordpress/marcelo-terno.png"
                                alt="Dr. Marcelo Colen"
                                width={480}
                                height={620}
                                className="w-full h-auto object-contain drop-shadow-2xl translate-y-2"
                                priority
                            />
                        </div>
                        {/* Gradiente inferior para mascarar o corte */}
                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f1729] via-[#0f1729]/80 to-transparent z-10" />
                    </div>
                </Container>
            </div>

            {/* ═══════════ DESKTOP ═══════════ */}
            <div className="hidden lg:block relative min-h-[600px] flex items-center">
                <Container className="relative z-10 py-16">
                    <div className="grid grid-cols-12 gap-8 items-center">
                        {/* Conteúdo - Esquerda - Mais Largo */}
                        <div className="col-span-12 lg:col-span-7 xl:col-span-6 space-y-6">
                            {/* Badge */}
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border border-[#ef4444]/30"
                                style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }}
                            >
                                <Clock className="w-4 h-4" />
                                {hero.badge}
                            </div>

                            {/* Headline Direta */}
                            <h1
                                className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] uppercase tracking-tight"
                                style={{ color: '#ffffff', fontFamily: 'Georgia, serif' }}
                            >
                                Modelo de Recurso
                                <br />
                                Administrativo
                                <br />
                                <span style={{ color: '#d4a017' }}>Para Heteroidentificação</span>
                            </h1>

                            {/* Subheadline */}
                            <p
                                className="text-xl leading-relaxed max-w-xl"
                                style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                            >
                                Não perca tempo tentando criar do zero. Tenha acesso imediato a um modelo fundamentado na ADPF 186/STF e critérios fenotípicos, validados por especialista.
                            </p>

                            {/* Trust signals */}
                            <div className="flex flex-wrap items-center gap-6 text-sm font-medium" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                <span className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5" style={{ color: '#d4a017' }} />
                                    Fundamentação Jurídica Sólida
                                </span>
                                <span className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5" style={{ color: '#d4a017' }} />
                                    Análise Fenotípica Técnica
                                </span>
                            </div>

                            {/* CTA */}
                            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <a
                                    href={checkoutUrl}
                                    className="inline-flex items-center justify-center gap-3 px-8 py-5 font-bold text-lg rounded-lg transition-all duration-200 hover:brightness-110 hover:scale-[1.02] shadow-xl border-b-4 border-[#a17a12] active:border-b-0 active:translate-y-1"
                                    style={{ backgroundColor: '#d4a017', color: '#ffffff' }}
                                >
                                    <FileText className="w-6 h-6" />
                                    QUERO O MODELO PRONTO AGORA
                                </a>
                                <div className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                                    <p>🛡️ Garantia de 7 dias</p>
                                    <p>📥 Download Imediato</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

                {/* Foto do Dr. Marcelo — Posicionada Corretamente */}
                <div className="absolute bottom-0 right-0 z-[5] pointer-events-none hidden lg:block" style={{ width: '45%', maxWidth: '650px', right: '5%' }}>
                    <Image
                        src="/images/wordpress/marcelo-terno.png"
                        alt="Dr. Marcelo Colen"
                        width={650}
                        height={800}
                        className="w-full h-auto object-contain drop-shadow-2xl translate-y-0 origin-bottom"
                        priority
                    />
                    {/* Gradiente inferior desktop */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0f1729] to-transparent z-10" />
                </div>
            </div>
        </section>
    );
}
