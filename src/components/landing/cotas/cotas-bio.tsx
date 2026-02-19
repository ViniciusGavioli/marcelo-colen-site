"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/layout";
import { getWhatsAppLink } from "@/lib/whatsapp";

const CREDENTIALS = [
  "Diretor de Diversidade e Inclusão da OAB/MG (2025–2027)",
  "Presidente da Comissão Estadual de Promoção da Igualdade Racial da OAB/MG (2022–2024)",
  "Conselheiro Seccional da OAB/MG (2022–2024)",
  "Diretor do Núcleo de Promoção da Igualdade Racial da ESA OAB/MG (2022–2024)",
  "Conselheiro Municipal de Promoção da Igualdade Racial de Belo Horizonte (2022–2024)",
];

export function CotasBio() {
  return (
    <section 
      id="quem-sou"
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Background pattern sutil */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
          {/* Content */}
          <div className="space-y-6">
            {/* Headline */}
            <h2 
              className="text-3xl md:text-4xl font-bold leading-tight"
              style={{ color: '#6B21A8' }}
            >
              Olá, sou Dr. Marcelo Ladeia Colen Guterres!
            </h2>

            {/* Bio text */}
            <div className="space-y-4" style={{ color: '#333' }}>
              <p className="leading-relaxed">
                <strong>Advogado, professor, palestrante e consultor em Compliance Antidiscriminatório.</strong>
              </p>
              <p className="leading-relaxed">
                <strong>Mestrando em Direito pela UFMG e pós-graduado em Gestão Estratégica na Advocacia.</strong>
              </p>
              
              <p className="leading-relaxed">
                Atua com ênfase em igualdade racial, diversidade institucional e direitos 
                humanos. É autor do <em>Manual Antirracismo no Esporte</em>, adotado pela 
                Amstel® na campanha "Barulho Contra o Racismo" – Copa Libertadores 2022.
              </p>
            </div>

            {/* Credentials list */}
            <div className="pt-2">
              <p 
                className="font-bold mb-3"
                style={{ color: '#1a1a1a' }}
              >
                Atuação institucional destacada:
              </p>
              <ul className="space-y-1">
                {CREDENTIALS.map((credential, index) => (
                  <li
                    key={index}
                    className="text-sm flex items-start gap-2"
                    style={{ color: '#333' }}
                  >
                    <span className="mt-1">•</span>
                    {credential}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA - Botão Marrom */}
            <div className="pt-4">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:brightness-110"
                style={{ 
                  backgroundColor: '#8B4513',
                  color: '#FFFFFF',
                  borderRadius: '4px'
                }}
              >
                <MessageCircle className="w-5 h-5" />
                Entre em Contato
              </a>
            </div>
          </div>

          {/* Photo com bloco amarelo */}
          <div className="relative">
            {/* Bloco amarelo atrás */}
            <div 
              className="absolute top-0 right-0 w-3/4 h-1/2 hidden lg:block"
              style={{ backgroundColor: '#E5A853' }}
            />
            
            {/* Foto */}
            <div className="relative z-10 lg:mr-8">
              <Image
                src="/images/marcelo/marcelo-bio.jpg"
                alt="Dr. Marcelo Colen - Advogado"
                width={500}
                height={625}
                className="w-full h-auto object-cover shadow-xl"
                style={{ aspectRatio: '4/5' }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
