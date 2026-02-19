"use client";

import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

const CREDENTIALS = [
  "Diretor de Diversidade e Inclusão da OAB/MG",
  "Presidente da Comissão de Igualdade Racial OAB/MG (2022-2024)",
  "Mestrando em Direito pela UFMG",
  "Autor do Manual Antirracismo no Esporte",
];

const WHATSAPP_MESSAGE = "Olá, Dr. Marcelo. Vi seu perfil no site e gostaria de conversar sobre meu caso.";

export function CotasAuthorBio() {
  return (
    <section 
      id="autoridade"
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      {/* Decorative background elements */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 100% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 50%)'
        }}
      />

      {/* Quote marks decoration */}
      <div 
        className="absolute top-20 left-10 text-[200px] font-serif leading-none opacity-5 pointer-events-none hidden lg:block"
        style={{ color: '#D4AF37' }}
      >
        "
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* ============================================ */}
          {/* LEFT - Text Content */}
          {/* ============================================ */}
          <div className="space-y-8 lg:order-1">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div 
                className="w-12 h-px"
                style={{ backgroundColor: '#D4AF37' }}
              />
              <span 
                className="text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ color: '#D4AF37' }}
              >
                O Especialista
              </span>
            </div>

            {/* Title */}
            <h2 
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
              style={{ color: '#FFFFFF' }}
            >
              Quem é{" "}
              <span 
                style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Marcelo Colen
              </span>
              ?
            </h2>

            {/* Main text */}
            <div className="space-y-4">
              <p className="text-white/80 text-lg leading-relaxed">
                <strong className="text-white">Advogado Criminalista e Especialista em Direitos Humanos</strong>, 
                com atuação dedicada à luta contra injustiças nas bancas de heteroidentificação.
              </p>
              <p className="text-white/60 leading-relaxed">
                Minha trajetória é marcada pela defesa intransigente da igualdade racial. 
                Não sou apenas um advogado — sou alguém que entende na pele a importância 
                dessa causa e luta diariamente para que nenhum direito seja negado por 
                avaliações injustas ou critérios subjetivos.
              </p>
            </div>

            {/* Credentials list */}
            <ul className="space-y-3 py-4">
              {CREDENTIALS.map((credential, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3"
                >
                  <CheckCircle 
                    className="w-5 h-5 shrink-0 mt-0.5" 
                    style={{ color: '#D4AF37' }} 
                  />
                  <span className="text-white/80 text-sm">{credential}</span>
                </li>
              ))}
            </ul>

            {/* Signature */}
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-end justify-between">
                <div>
                  <p 
                    className="font-serif text-3xl italic"
                    style={{ 
                      color: '#D4AF37',
                    }}
                  >
                    Marcelo Colen
                  </p>
                  <p className="text-white/40 text-sm mt-1">
                    OAB/MG 167.463
                  </p>
                </div>

                {/* CTA */}
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hidden sm:inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300"
                  style={{ color: '#D4AF37' }}
                >
                  <span>Falar com Marcelo</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* ============================================ */}
          {/* RIGHT - Image */}
          {/* ============================================ */}
          <div className="relative lg:order-2 order-first">
            {/* Decorative frame */}
            <div 
              className="absolute -inset-4 rounded-2xl"
              style={{
                border: '1px solid rgba(212, 175, 55, 0.2)',
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, transparent 50%)'
              }}
            />

            {/* Image container */}
            <div 
              className="relative rounded-xl overflow-hidden"
              style={{ backgroundColor: '#1a1a1a' }}
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/marcelo/marcelo-bio.jpg"
                  alt="Dr. Marcelo Colen - Advogado especialista"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Gradient overlay */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 40%)'
                  }}
                />
              </div>

              {/* Quote overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <blockquote 
                  className="text-white/90 italic text-lg font-serif leading-relaxed"
                >
                  "A luta por igualdade racial não é um favor — é um direito constitucional."
                </blockquote>
              </div>
            </div>

            {/* Floating badge */}
            <div 
              className="absolute -left-4 top-1/3 hidden lg:block p-4 rounded-xl max-w-[180px]"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.95)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div 
                className="text-2xl font-serif font-bold mb-1"
                style={{ color: '#D4AF37' }}
              >
                +10
              </div>
              <p className="text-white/60 text-xs">
                Anos de experiência em Direito Criminal e Direitos Humanos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
