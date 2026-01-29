"use client";

import Image from "next/image";
import { ArrowRight, Shield, CheckCircle, Instagram, Star, Users } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

const WHATSAPP_MESSAGE = "Olá, Dr. Marcelo. Quero analisar meu caso de heteroidentificação.";

export function CotasHeroPremium() {
  const scrollToSection = () => {
    const section = document.getElementById("como-funciona");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ backgroundColor: '#000000' }}
    >
      {/* ============================================ */}
      {/* BACKGROUND EFFECTS */}
      {/* ============================================ */}
      
      {/* Subtle radial gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 40%, rgba(212, 175, 55, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 60%, rgba(212, 175, 55, 0.05) 0%, transparent 50%),
            linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)
          `
        }}
      />

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay'
        }}
      />

      {/* Top gold accent line */}
      <div 
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #D4AF37 50%, transparent 100%)'
        }}
      />

      {/* Floating decorative elements */}
      <div 
        className="absolute top-1/4 left-10 w-32 h-32 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: '#D4AF37' }}
      />
      <div 
        className="absolute bottom-1/3 right-10 w-48 h-48 rounded-full opacity-5 blur-3xl"
        style={{ backgroundColor: '#D4AF37' }}
      />

      {/* ============================================ */}
      {/* MAIN CONTENT */}
      {/* ============================================ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* ============================================ */}
          {/* LEFT SIDE - Copy & Action */}
          {/* ============================================ */}
          <div className="space-y-8 lg:pr-8">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2">
              <div 
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: '#D4AF37' }}
              />
              <span 
                className="text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ color: '#D4AF37' }}
              >
                Especialista em Cotas Raciais
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
                style={{ color: '#FFFFFF' }}
              >
                Garante seu{" "}
                <span 
                  className="relative inline-block"
                  style={{
                    background: 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 50%, #D4AF37 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Direito à Cota
                  {/* Underline decoration */}
                  <span 
                    className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, #D4AF37 0%, transparent 100%)',
                      opacity: 0.6
                    }}
                  />
                </span>
                {" "}com Segurança Jurídica
              </h1>
            </div>

            {/* Subheadline */}
            <p 
              className="text-lg sm:text-xl leading-relaxed max-w-lg"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              Foi <strong className="text-white">indeferido na banca de heteroidentificação</strong>? 
              Não perca sua vaga. Tenha ao seu lado um advogado que entende 
              <strong className="text-white"> sua luta</strong> e sabe como revertê-la.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 py-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" style={{ color: '#D4AF37' }} />
                <span className="text-white/70 text-sm">+150 casos analisados</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" style={{ color: '#D4AF37' }} />
                <span className="text-white/70 text-sm">OAB/MG 167.463</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Primary CTA - Pulsing gold button */}
              <a
                href={getWhatsAppLink(WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #AA8C2C 100%)',
                  color: '#000000',
                  boxShadow: '0 0 30px rgba(212, 175, 55, 0.4), 0 4px 20px rgba(212, 175, 55, 0.3)',
                }}
              >
                <Shield className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Quero Analisar Meu Caso</span>
              </a>

              {/* Secondary CTA */}
              <button
                onClick={scrollToSection}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-medium transition-all duration-300 group"
                style={{
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  color: '#FFFFFF',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#D4AF37';
                  e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Entender o Processo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* ============================================ */}
            {/* INSTAGRAM SOCIAL PROOF */}
            {/* ============================================ */}
            <div 
              className="mt-8 pt-8 border-t"
              style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
            >
              <a
                href="https://instagram.com/marcelocolen.adv"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/5"
              >
                {/* Instagram icon with glow */}
                <div 
                  className="relative shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #F77737 100%)',
                  }}
                >
                  <Instagram className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-semibold">@marcelocolen.adv</span>
                    <span 
                      className="px-2 py-0.5 rounded-full text-xs font-medium"
                      style={{ 
                        backgroundColor: 'rgba(212, 175, 55, 0.2)',
                        color: '#D4AF37'
                      }}
                    >
                      Verificado
                    </span>
                  </div>
                  <p className="text-white/60 text-sm">
                    Acompanhe nossa rotina de <strong className="text-white/80">vitórias</strong> e conteúdos sobre cotas raciais
                  </p>
                  
                  {/* Mini stats */}
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-white/40" />
                      <span className="text-white/50 text-xs">+5k seguidores</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-white/40" />
                      <span className="text-white/50 text-xs">Conteúdo diário</span>
                    </div>
                  </div>
                </div>

                <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors shrink-0 mt-1" />
              </a>
            </div>
          </div>

          {/* ============================================ */}
          {/* RIGHT SIDE - Image */}
          {/* ============================================ */}
          <div className="relative lg:order-last order-first">
            {/* Decorative frame */}
            <div 
              className="absolute -inset-4 rounded-2xl opacity-50"
              style={{
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, transparent 50%, rgba(212, 175, 55, 0.1) 100%)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
              }}
            />
            
            {/* Secondary frame */}
            <div 
              className="absolute -inset-8 rounded-3xl opacity-30 hidden lg:block"
              style={{
                border: '1px solid rgba(212, 175, 55, 0.1)',
              }}
            />

            {/* Main image container */}
            <div className="relative rounded-xl overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
              {/* Image */}
              <div className="relative aspect-[4/5] lg:aspect-[3/4]">
                <Image
                  src="/images/marcelo/capa.png"
                  alt="Dr. Marcelo Colen - Advogado especialista em heteroidentificação e cotas raciais"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Gradient overlays */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, #000000 0%, transparent 50%)'
                  }}
                />
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to right, rgba(0,0,0,0.3) 0%, transparent 50%)'
                  }}
                />
              </div>

              {/* Authority overlay card */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-12 h-px"
                    style={{ backgroundColor: '#D4AF37' }}
                  />
                  <span 
                    className="text-xs font-bold tracking-[0.15em] uppercase"
                    style={{ color: '#D4AF37' }}
                  >
                    Dr. Marcelo Colen
                  </span>
                </div>

                <ul className="space-y-2">
                  {[
                    "Diretor de Diversidade e Inclusão OAB/MG",
                    "Mestrando em Direito - UFMG",
                    "Especialista em Igualdade Racial"
                  ].map((credential, index) => (
                    <li 
                      key={index}
                      className="flex items-center gap-3 text-sm"
                      style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                    >
                      <span 
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: '#D4AF37' }}
                      />
                      {credential}
                    </li>
                  ))}
                </ul>

                <div 
                  className="mt-6 pt-4 border-t flex items-center justify-between"
                  style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  <span className="text-white/50 text-xs">
                    📍 BH e todo Brasil (online)
                  </span>
                  <span 
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{ 
                      backgroundColor: 'rgba(212, 175, 55, 0.15)',
                      color: '#D4AF37'
                    }}
                  >
                    OAB/MG 167.463
                  </span>
                </div>
              </div>
            </div>

            {/* Floating testimonial badge - desktop only */}
            <div 
              className="absolute -right-4 top-1/4 hidden xl:block p-4 rounded-xl max-w-[200px]"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" style={{ color: '#D4AF37' }} />
                ))}
              </div>
              <p className="text-white/80 text-xs leading-relaxed">
                "Consegui reverter minha reprovação na banca. Profissional excelente!"
              </p>
              <p className="text-white/40 text-xs mt-2">— Cliente aprovado</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div 
          className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-2"
          style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}
        >
          <div 
            className="w-1 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: '#D4AF37' }}
          />
        </div>
      </div>
    </section>
  );
}
