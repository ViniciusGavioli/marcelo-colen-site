"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/layout";
import { COTAS_PAGE } from "@/lib/cotas-data";
import { getWhatsAppLink } from "@/lib/whatsapp";

const WHATSAPP_MESSAGE = "Olá, Marcelo. Fui indeferido(a) na heteroidentificação e preciso entender prazos e como funciona o recurso. Posso te passar meu caso?";

export function CotasHeroWordpress() {
  const { hero } = COTAS_PAGE;

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ 
        backgroundColor: '#2D2D2D',
      }}
    >
      {/* Background overlay with leaves/nature pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url("/images/wordpress/hero-bg-overlay.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: 'linear-gradient(90deg, rgba(45,45,45,0.95) 0%, rgba(45,45,45,0.8) 50%, rgba(45,45,45,0.6) 100%)' 
        }}
      />

      <Container className="relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* ============================================ */}
          {/* CONTENT SIDE - Left */}
          {/* ============================================ */}
          <div className="space-y-6">
            
            {/* Main Headline */}
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight"
              style={{ 
                color: '#FFFFFF',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
            >
              {hero.headline}
            </h1>

            {/* Highlight */}
            <p 
              className="text-xl sm:text-2xl font-bold"
              style={{ color: '#FFFFFF' }}
            >
              {hero.headlineHighlight}
            </p>

            {/* Subheadline */}
            <p 
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.9)' }}
            >
              E nós temos a estratégia jurídica para garantir isso.
            </p>

            <p 
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.85)' }}
            >
              Atuamos com excelência em recursos administrativos e ações judiciais para reverter indeferimentos indevidos em concursos públicos e vestibulares.
            </p>

            {/* CTA Button - WhatsApp Green */}
            <div className="pt-4">
              <a
                href={getWhatsAppLink(WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-md"
                style={{ 
                  backgroundColor: '#25D366', 
                  color: '#FFFFFF',
                  boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)'
                }}
              >
                <MessageCircle className="w-5 h-5" />
                REALIZE UMA CONSULTA
              </a>
            </div>
          </div>

          {/* ============================================ */}
          {/* IMAGE SIDE - Right (Mosaic) */}
          {/* ============================================ */}
          <div className="relative hidden lg:block">
            {/* Mosaic Grid of People */}
            <div className="grid grid-cols-3 gap-1">
              {/* Row 1 */}
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/images/wordpress/mosaic-1.jpg"
                  alt="Pessoa negra sorrindo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/images/wordpress/mosaic-2.jpg"
                  alt="Pessoa negra sorrindo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/images/wordpress/mosaic-3.jpg"
                  alt="Pessoa negra sorrindo"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Row 2 */}
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/images/wordpress/mosaic-4.jpg"
                  alt="Pessoa negra sorrindo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/images/wordpress/mosaic-5.jpg"
                  alt="Dr. Marcelo Colen"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/images/wordpress/mosaic-6.jpg"
                  alt="Pessoa negra sorrindo"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Row 3 */}
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/images/wordpress/mosaic-7.jpg"
                  alt="Pessoa negra sorrindo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/images/wordpress/mosaic-8.jpg"
                  alt="Pessoa negra sorrindo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/images/wordpress/mosaic-9.jpg"
                  alt="Pessoa negra sorrindo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Mobile: Single image instead of mosaic */}
          <div className="lg:hidden">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <Image
                src="/images/wordpress/hero-mosaic.jpg"
                alt="Pessoas negras sorrindo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
