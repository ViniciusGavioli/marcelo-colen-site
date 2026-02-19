"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
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
    <section className="py-16 lg:py-24 relative overflow-hidden bg-white">
      {/* Grafismo indígena de fundo */}
      <div className="absolute inset-0">
        <Image
          src="/images/wordpress/Grafismo indigenma.png"
          alt=""
          fill
          className="object-contain object-left opacity-[0.04]"
          style={{ objectPosition: 'left center' }}
        />
      </div>

      {/* Faixa amarela/dourada à direita */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-1/4 hidden lg:block"
        style={{ backgroundColor: '#D4A84B' }}
      />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* ============================================ */}
          {/* TEXT SIDE - Left */}
          {/* ============================================ */}
          <div className="space-y-6">
            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl leading-tight"
              style={{ 
                color: '#1A1A1A',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
            >
              <span className="font-light italic">Olá, sou </span>
              <span className="font-bold">Dr. Marcelo Ladeia Colen Guterres</span>
              <span className="font-light">!</span>
            </h2>

            <p 
              className="text-base lg:text-lg leading-relaxed font-semibold"
              style={{ color: '#333333' }}
            >
              Advogado, professor, palestrante e consultor em Compliance Antidiscriminatório.
              <br />
              Mestrando em Direito pela UFMG e pós-graduado em Gestão Estratégica na Advocacia.
            </p>

            <p 
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: '#555555' }}
            >
              Atua com ênfase em igualdade racial, diversidade institucional e direitos humanos. É autor do <em>Manual Antirracismo no Esporte</em>, adotado pela Amstel® na campanha "Barulho Contra o Racismo" – Copa Libertadores 2022.
            </p>

            <div className="space-y-3">
              <p 
                className="text-base font-bold"
                style={{ color: '#1A1A1A' }}
              >
                Atuação institucional destacada:
              </p>
              <ul className="space-y-1">
                {credentials.map((credential, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: '#555555' }}
                  >
                    <span className="shrink-0">•</span>
                    {credential}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button - Roxo */}
            <div className="pt-4">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-base transition-all duration-300 hover:scale-105 rounded-md"
                style={{ 
                  backgroundColor: '#6B21A8', 
                  color: '#FFFFFF',
                }}
              >
                <MessageCircle className="w-5 h-5" />
                ENTRE EM CONTATO
              </a>
            </div>
          </div>

          {/* ============================================ */}
          {/* IMAGE SIDE - Right */}
          {/* ============================================ */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Sombra/borda da foto */}
              <div 
                className="absolute -inset-2 rounded-lg"
                style={{ backgroundColor: 'rgba(255,255,255,0.5)', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
              />
              <div className="relative w-80 h-[450px] lg:w-[350px] lg:h-[500px] bg-white p-2 rounded-lg shadow-xl">
                <Image
                  src="/images/wordpress/marcelo-bio.jpg"
                  alt="Dr. Marcelo Ladeia Colen Guterres"
                  fill
                  className="object-cover object-top rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
