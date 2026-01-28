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
        backgroundColor: '#3D2314',
      }}
    >
      {/* Grid de fotos no fundo - lado direito */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 hidden lg:block">
        <div className="grid grid-cols-3 h-full">
          {/* Coluna 1 */}
          <div className="flex flex-col">
            <div className="flex-1 relative overflow-hidden">
              <Image
                src="/images/wordpress/biblioteca.jpg"
                alt="Estudante na biblioteca"
                fill
                className="object-cover opacity-70"
              />
            </div>
            <div className="flex-1 relative overflow-hidden">
              <Image
                src="/images/wordpress/painel.jpg"
                alt="Painel de discussão"
                fill
                className="object-cover opacity-70"
              />
            </div>
            <div className="flex-1 relative overflow-hidden">
              <Image
                src="/images/wordpress/estudantes.jpg"
                alt="Estudantes universitários"
                fill
                className="object-cover opacity-70"
              />
            </div>
          </div>
          
          {/* Coluna 2 - Marcelo no centro */}
          <div className="relative overflow-hidden">
            <Image
              src="/images/wordpress/marcelo-hero.jpg"
              alt="Dr. Marcelo Colen"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          
          {/* Coluna 3 */}
          <div className="flex flex-col">
            <div className="flex-1 relative overflow-hidden">
              <Image
                src="/images/wordpress/cotas.jpg"
                alt="Marcelo sorrindo"
                fill
                className="object-cover opacity-70"
              />
            </div>
            <div className="flex-1 relative overflow-hidden">
              <Image
                src="/images/wordpress/marcelo-bio.jpg"
                alt="Marcelo perfil"
                fill
                className="object-cover opacity-70"
              />
            </div>
            <div className="flex-1 relative overflow-hidden">
              <Image
                src="/images/wordpress/marcelo-cta.jpg"
                alt="Marcelo no escritório"
                fill
                className="object-cover opacity-70"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gradiente marrom para o texto */}
      <div 
        className="absolute inset-0 lg:hidden"
        style={{ 
          background: 'linear-gradient(180deg, rgba(61,35,20,0.95) 0%, rgba(61,35,20,0.9) 100%)' 
        }}
      />
      <div 
        className="absolute left-0 top-0 bottom-0 w-full lg:w-1/2 hidden lg:block"
        style={{ 
          background: 'linear-gradient(90deg, rgba(61,35,20,1) 0%, rgba(61,35,20,0.98) 60%, rgba(61,35,20,0.7) 85%, rgba(61,35,20,0) 100%)' 
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

          {/* Espaço vazio no desktop (as fotos estão no fundo) */}
          <div className="hidden lg:block" />

          {/* Mobile: Imagem do Marcelo */}
          <div className="lg:hidden">
            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src="/images/wordpress/marcelo-hero.jpg"
                alt="Dr. Marcelo Colen"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
