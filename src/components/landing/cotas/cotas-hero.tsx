"use client";

import Image from "next/image";
import { ArrowRight, Clock, Shield, CheckCircle, FileCheck, Scale, Gavel } from "lucide-react";
import { Container } from "@/components/layout";
import { COTAS_PAGE } from "@/lib/cotas-data";
import { getWhatsAppLink } from "@/lib/whatsapp";

const WHATSAPP_MESSAGE = "Olá, Marcelo. Fui indeferido(a) na heteroidentificação e preciso entender prazos e como funciona o recurso. Posso te passar meu caso?";

export function CotasHero() {
  const { hero } = COTAS_PAGE;

  const scrollToSection = () => {
    const section = document.getElementById("como-funciona");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#0A192F' }}>
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: 'linear-gradient(135deg, #071226 0%, #0A192F 50%, #0D1F38 100%)' 
        }}
      />

      {/* Decorative top line */}
      <div 
        className="absolute top-0 left-0 right-0 h-1"
        style={{ 
          background: 'linear-gradient(90deg, transparent 0%, #C5A059 50%, transparent 100%)',
          opacity: 0.6 
        }}
      />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C5A059' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <Container className="relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* ============================================ */}
          {/* CONTENT SIDE */}
          {/* ============================================ */}
          <div className="space-y-6">
            
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border" style={{ borderColor: 'rgba(197, 160, 89, 0.4)', backgroundColor: 'rgba(197, 160, 89, 0.1)' }}>
              <Clock className="w-4 h-4" style={{ color: '#C5A059' }} />
              <span className="text-sm font-medium" style={{ color: '#C5A059' }}>
                {hero.urgencyBadge}
              </span>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-px" style={{ backgroundColor: '#C5A059' }} />
              <p 
                className="font-medium tracking-widest uppercase text-xs"
                style={{ color: '#C5A059' }}
              >
                {hero.eyebrow}
              </p>
            </div>

            {/* Main Headline - H1 com keyword forte */}
            <div className="space-y-3">
              <h1 
                className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-semibold leading-tight relative z-20"
                style={{ color: '#FFFFFF' }}
              >
                {hero.headline}
              </h1>
              <p 
                className="font-serif text-xl sm:text-2xl lg:text-3xl italic relative z-20"
                style={{ color: '#C5A059' }}
              >
                {hero.headlineHighlight}
              </p>
            </div>

            {/* Subheadline */}
            <p 
              className="text-lg leading-relaxed max-w-xl"
              style={{ color: 'rgba(255, 255, 255, 0.9)' }}
            >
              {hero.subheadline}
            </p>

            {/* Social Proof - Institucional */}
            <div className="flex items-center gap-3 py-3 border-l-2 pl-4" style={{ borderColor: '#C5A059' }}>
              <CheckCircle className="w-5 h-5 shrink-0" style={{ color: '#C5A059' }} />
              <span className="font-medium text-sm" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                {hero.socialProof}
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded"
                style={{ 
                  backgroundColor: '#C5A059', 
                  color: '#0A192F',
                  boxShadow: '0 4px 20px rgba(197, 160, 89, 0.3)'
                }}
              >
                <Shield className="w-5 h-5" />
                {hero.ctaPrimary}
              </a>
              <button
                onClick={scrollToSection}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-medium transition-colors duration-300 rounded"
                style={{ 
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#FFFFFF',
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
              >
                {hero.ctaSecondary}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ============================================ */}
          {/* MOBILE PHOTO - Circular */}
          {/* ============================================ */}
          <div className="lg:hidden flex justify-center order-first mb-4">
            <div className="relative">
              {/* Decorative ring */}
              <div 
                className="absolute -inset-2 rounded-full"
                style={{ 
                  border: '2px solid rgba(197, 160, 89, 0.3)',
                  background: 'linear-gradient(135deg, rgba(197, 160, 89, 0.1) 0%, transparent 50%)'
                }}
              />
              {/* Photo container */}
              <div 
                className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden"
                style={{ border: '3px solid #C5A059' }}
              >
                <Image
                  src="/images/marcelo/marcelo-hero.jpg"
                  alt="Dr. Marcelo Colen - Advogado especialista em cotas raciais"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
              {/* OAB badge */}
              <div 
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap"
                style={{ 
                  backgroundColor: '#C5A059', 
                  color: '#0A192F' 
                }}
              >
                OAB/MG 167.463
              </div>
            </div>
          </div>

          {/* ============================================ */}
          {/* IMAGE SIDE - Desktop */}
          {/* ============================================ */}
          <div className="relative hidden lg:block">
            {/* Decorative frames */}
            <div 
              className="absolute -top-6 -right-6 w-full h-full border"
              style={{ borderColor: 'rgba(197, 160, 89, 0.2)' }}
            />
            <div 
              className="absolute -top-3 -right-3 w-full h-full border"
              style={{ borderColor: 'rgba(197, 160, 89, 0.1)' }}
            />
            
            {/* Main image container */}
            <div className="relative overflow-hidden" style={{ backgroundColor: '#0D1F38' }}>
              <Image
                src="/images/marcelo/marcelo-hero.jpg"
                alt="Dr. Marcelo Colen - Advogado especialista em cotas raciais e heteroidentificação"
                width={600}
                height={700}
                priority
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '4/5' }}
              />
              
              {/* Gradient overlay */}
              <div 
                className="absolute inset-0"
                style={{ 
                  background: 'linear-gradient(to top, #0A192F 0%, transparent 40%, transparent 100%)' 
                }}
              />

              {/* Authority card overlay */}
              <div 
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{ 
                  background: 'linear-gradient(to top, #0A192F 60%, transparent 100%)' 
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-px" style={{ backgroundColor: '#C5A059' }} />
                  <span 
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: '#C5A059' }}
                  >
                    Dr. Marcelo Colen
                  </span>
                </div>
                
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#C5A059' }} />
                    OAB/MG 167.463
                  </li>
                  <li className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#C5A059' }} />
                    Diretor de Diversidade e Inclusão OAB/MG
                  </li>
                  <li className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#C5A059' }} />
                    Mestrando em Direito - UFMG
                  </li>
                </ul>

                <div className="mt-4 pt-4 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                  <p className="text-xs" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                    📍 Atendimento presencial em BH e online para todo Brasil
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs uppercase tracking-widest" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>
            Saiba mais
          </span>
          <div className="w-px h-8" style={{ backgroundColor: 'rgba(197, 160, 89, 0.4)' }} />
        </div>
      </Container>
    </section>
  );
}
