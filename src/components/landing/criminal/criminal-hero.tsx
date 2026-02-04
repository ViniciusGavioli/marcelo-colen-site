"use client";

import Image from "next/image";
import { MessageCircle, ShieldCheck, Clock, Award } from "lucide-react";
import { Container } from "@/components/layout";
import { CRIMINAL_PAGE } from "@/lib/criminal-data";

export function CriminalHero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-black">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/criminal/hero-criminal.png"
          alt="Defesa Criminal Estratégica"
          fill
          className="object-cover opacity-60"
          priority
        />
        {/* Deep Cinematic Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.95) 100%)'
          }}
        />
      </div>

      {/* Accents */}
      <div className="absolute top-0 left-0 right-0 h-1 z-30 bg-gradient-to-r from-transparent via-[#c9a227] to-transparent opacity-50" />
      
      <Container className="relative z-20">
        <div className="max-w-3xl">
          {/* Label / Pre-title */}
          <div className="flex items-center gap-3 mb-6 animate-in fade-in slide-in-from-left-4 duration-1000">
            <div className="h-px w-8 bg-[#c9a227]" />
            <span className="text-[#c9a227] text-xs font-bold tracking-[0.3em] uppercase">
              Advocacia Criminal de Alta Performance
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] mb-8 text-white tracking-tight animate-in fade-in slide-in-from-left-6 duration-1000 delay-200"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Sua liberdade <br />
            <span className="text-[#c9a227]">não pode esperar.</span>
          </h1>

          {/* Subtitle with better hierarchy */}
          <p
            className="text-lg lg:text-2xl leading-relaxed mb-10 text-gray-300 max-w-2xl animate-in fade-in slide-in-from-left-8 duration-1000 delay-300"
          >
            Defesa técnica rigorosa e estratégica para casos complexos. 
            Atuação imediata em <span className="text-white font-medium italic">investigações, prisões e processos criminais</span> em todo o país.
          </p>

          {/* Premium CTA Block */}
          <div className="flex flex-col sm:flex-row items-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <a
              href="/consulta"
              className="group relative flex items-center justify-center gap-3 px-10 py-5 font-bold text-lg rounded-full transition-all duration-300 bg-[#c9a227] hover:bg-[#b08d20] text-black hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(201,162,39,0.3)]"
            >
              <MessageCircle className="w-6 h-6" />
              {CRIMINAL_PAGE.hero.cta}
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            </a>

            <div className="flex flex-col items-start gap-1">
              <span className="text-white font-bold text-sm tracking-wide">Platão 24h</span>
              <span className="text-[#c9a227] text-xs font-medium uppercase tracking-widest">Atendimento Urgente</span>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 pt-10 border-t border-white/10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#c9a227]" />
              <span className="text-gray-400 text-sm font-medium">Sigilo Absoluto</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#c9a227]" />
              <span className="text-gray-400 text-sm font-medium">Resposta Imediata</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-[#c9a227]" />
              <span className="text-gray-400 text-sm font-medium">Expertise Técnica</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
