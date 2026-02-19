"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

const WHATSAPP_MESSAGE = 
  "Olá, Marcelo. Fui indeferido(a) na heteroidentificação e preciso entender prazos e como funciona o recurso. Posso te passar meu caso?";

export function CotasHeroV2() {
  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#8B4513' }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* LEFT - Text Content */}
          <div className="space-y-6">
            {/* Main Headline */}
            <h1 
              className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-normal leading-[1.1] tracking-tight"
              style={{ color: '#FFFFFF' }}
            >
              Foi vítima de injustiça na banca de heteroidentificação?
            </h1>

            {/* Subheadline */}
            <p 
              className="text-xl font-bold"
              style={{ color: '#FFFFFF' }}
            >
              Você tem direito à inclusão!
            </p>

            {/* Description */}
            <div className="space-y-4">
              <p 
                className="text-base leading-relaxed"
                style={{ color: 'rgba(255, 255, 255, 0.9)' }}
              >
                E nós temos a estratégia jurídica para garantir isso.
              </p>
              <p 
                className="text-base leading-relaxed"
                style={{ color: 'rgba(255, 255, 255, 0.85)' }}
              >
                Atuamos com excelência em recursos administrativos e ações judiciais para reverter indeferimentos indevidos em concursos públicos e vestibulares.
              </p>
            </div>

            {/* CTA Button - Verde */}
            <div className="pt-4">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:brightness-110"
                style={{
                  backgroundColor: '#4A9B4A',
                  color: '#FFFFFF',
                  borderRadius: '4px',
                }}
              >
                <MessageCircle className="w-5 h-5" />
                Realize uma Consulta
              </a>
            </div>
          </div>

          {/* RIGHT - Photo do Marcelo */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <Image
                src="/images/marcelo/marcelo-sem-fundo-.png"
                alt="Dr. Marcelo Colen - Advogado especialista em heteroidentificação"
                width={600}
                height={750}
                priority
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '4/5' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
