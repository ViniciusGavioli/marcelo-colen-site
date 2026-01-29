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
    <section className="relative overflow-hidden" style={{ backgroundColor: '#401A0C' }}>
      
      {/* Grafismo - atrás de tudo, só no topo */}
      <div className="absolute top-0 left-0 right-0 opacity-[0.06] z-0">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <div key={`g1-${i}`} className="relative h-12" style={{ width: '20%' }}>
              <Image src="/images/wordpress/grafismo-sabedoria.png" alt="" fill className="object-cover" style={{ filter: 'invert(1)' }} />
            </div>
          ))}
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <div key={`g2-${i}`} className="relative h-12" style={{ width: '20%' }}>
              <Image src="/images/wordpress/grafismo-sabedoria.png" alt="" fill className="object-cover" style={{ filter: 'invert(1)' }} />
            </div>
          ))}
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <div key={`g3-${i}`} className="relative h-12" style={{ width: '20%' }}>
              <Image src="/images/wordpress/grafismo-sabedoria.png" alt="" fill className="object-cover" style={{ filter: 'invert(1)' }} />
            </div>
          ))}
        </div>
      </div>

      {/* Pessoas de fundo */}
      <div className="absolute inset-0">
        <Image
          src="/images/wordpress/movimento.png"
          alt="Pessoas diversas"
          fill
          className="object-cover object-center opacity-50"
        />
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, rgba(61,35,20,0.95) 0%, rgba(61,35,20,0.7) 40%, rgba(61,35,20,0.3) 70%, transparent 100%)' }}
        />
      </div>

      {/* MOBILE: Layout em coluna */}
      <div className="lg:hidden relative z-10">
        <Container className="pt-16 pb-8">
          <div className="space-y-5">
            <h1 className="text-[1.75rem] sm:text-4xl font-bold leading-[1.2] tracking-tight" style={{ color: '#FFFFFF', fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Foi vítima de injustiça<br />na banca de heteroidentificação?
            </h1>
            <p className="text-xl sm:text-2xl font-bold" style={{ color: '#FFFFFF' }}>
              {hero.headlineHighlight}
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              E nós temos a estratégia jurídica para garantir isso.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Atuamos com excelência em recursos administrativos e ações judiciais para reverter indeferimentos indevidos em concursos públicos e vestibulares.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppLink(WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold text-base rounded-md"
                style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
              >
                <MessageCircle className="w-5 h-5" />
                REALIZE UMA CONSULTA
              </a>
            </div>
          </div>
        </Container>
        
        {/* Imagem do Marcelo - abaixo do conteúdo no mobile */}
        <div className="relative w-full flex justify-center">
          <Image
            src="/images/wordpress/marcelo-terno.png"
            alt="Dr. Marcelo Colen"
            width={400}
            height={520}
            className="object-contain w-[80%] max-w-[350px] h-auto"
            priority
          />
        </div>
      </div>

      {/* DESKTOP: Layout original com imagem absoluta */}
      <div className="hidden lg:block relative min-h-screen">
        <Container className="relative z-10 pt-32">
          <div className="max-w-xl space-y-6 pt-16">
            <h1 className="text-5xl font-semibold leading-tight" style={{ color: '#FFFFFF', fontFamily: 'Georgia, Times New Roman, serif' }}>
              {hero.headline}
            </h1>
            <p className="text-2xl font-bold" style={{ color: '#FFFFFF' }}>
              {hero.headlineHighlight}
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              E nós temos a estratégia jurídica para garantir isso.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Atuamos com excelência em recursos administrativos e ações judiciais para reverter indeferimentos indevidos em concursos públicos e vestibulares.
            </p>
            <div className="pt-4">
              <a
                href={getWhatsAppLink(WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold text-base rounded-md"
                style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
              >
                <MessageCircle className="w-5 h-5" />
                REALIZE UMA CONSULTA
              </a>
            </div>
          </div>
        </Container>

        {/* Marcelo - posição absoluta no desktop */}
        <div className="absolute bottom-0 right-[5%] w-[35%] max-h-[80vh]">
          <Image
            src="/images/wordpress/marcelo-terno.png"
            alt="Dr. Marcelo Colen"
            width={500}
            height={650}
            className="object-contain object-bottom w-full h-auto max-h-[80vh]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
