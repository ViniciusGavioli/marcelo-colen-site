"use client";

import Image from "next/image";
import { Instagram, MessageCircle } from "lucide-react";
import { Container } from "@/components/layout";
import { getWhatsAppLink } from "@/lib/whatsapp";

const WHATSAPP_MESSAGE = "Olá, Dr. Marcelo. Gostaria de conversar sobre meu caso.";

export function CotasBioWordpress() {
  const credentials = [
    "Diretor de Diversidade e Inclusão da OAB/MG (2025–2027)",
    "Presidente da Comissão Estadual de Promoção da Igualdade Racial da OAB/MG (2022–2024)",
    "Conselheiro Seccional da OAB/MG (2022–2024)",
    "Diretor do Núcleo de Promoção da Igualdade Racial da ESA OAB/MG (2022–2024)",
    "Conselheiro Municipal de Promoção da Igualdade Racial de Belo Horizonte (2022–2024)",
  ];

  return (
    <section 
      className="py-16 lg:py-24"
      style={{ backgroundColor: '#2D2D2D' }}
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* ============================================ */}
          {/* IMAGE SIDE - Left */}
          {/* ============================================ */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-80 h-96 lg:w-96 lg:h-[500px]">
              <Image
                src="/images/marcelo/marcelo-hero.jpg"
                alt="Dr. Marcelo Ladeia Colen Guterres"
                fill
                className="object-cover object-top rounded-lg"
              />
            </div>
          </div>

          {/* ============================================ */}
          {/* TEXT SIDE - Right */}
          {/* ============================================ */}
          <div className="space-y-6">
            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight"
              style={{ 
                color: '#FFFFFF',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
            >
              Olá, sou Dr. Marcelo Ladeia Colen Guterres!
            </h2>

            <p 
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.9)' }}
            >
              Advogado, professor, palestrante e consultor em Compliance Antidiscriminatório.
              <br />
              Mestrando em Direito pela UFMG e pós-graduado em Gestão Estratégica na Advocacia.
            </p>

            <p 
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.85)' }}
            >
              Atua com ênfase em igualdade racial, diversidade institucional e direitos humanos. É autor do Manual Antirracismo no Esporte, adotado pela Amstel® na campanha "Barulho Contra o Racismo" – Copa Libertadores 2022.
            </p>

            <div className="space-y-2">
              <p 
                className="text-sm font-semibold uppercase tracking-wide"
                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                Atuação institucional destacada:
              </p>
              <ul className="space-y-2">
                {credentials.map((credential, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                    {credential}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={getWhatsAppLink(WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm transition-all duration-300 hover:scale-105 rounded-md"
                style={{ 
                  backgroundColor: '#25D366', 
                  color: '#FFFFFF',
                }}
              >
                <MessageCircle className="w-4 h-4" />
                ENTRE EM CONTATO
              </a>
            </div>

            {/* Social */}
            <div className="pt-4 space-y-3">
              <p 
                className="text-sm"
                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                Acompanhe meu Instagram ou entre em contato:
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/marcelocolen.adv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm hover:underline"
                  style={{ color: '#FFFFFF' }}
                >
                  <Instagram className="w-4 h-4" />
                  @marcelocolen.adv
                </a>
                <a
                  href={getWhatsAppLink(WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm hover:underline"
                  style={{ color: '#FFFFFF' }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Falar com um advogado
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
