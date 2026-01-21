"use client";

import { MessageCircle } from "lucide-react";
import { Container } from "@/components/layout";
import { Portrait } from "@/components/ui/portrait";
import { getWhatsAppLink } from "@/lib/whatsapp";

const CREDENTIALS = [
  "OAB/MG 167.463",
  "Diretor de Diversidade e Inclusão da OAB/MG (2025–2027)",
  "Presidente da Comissão de Igualdade Racial da OAB/MG (2022–2024)",
  "Conselheiro Seccional da OAB/MG (2022–2024)",
  "Diretor do Núcleo de Igualdade Racial da ESA OAB/MG",
  "Conselheiro Municipal de Igualdade Racial de Belo Horizonte",
  "Mestrando em Direito pela UFMG",
  "Autor do Manual Antirracismo no Esporte (Amstel®)",
];

export function CotasBio() {
  return (
    <section 
      id="quem-sou"
      className="py-16 md:py-24"
      style={{ backgroundColor: '#0A192F' }}
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 order-2 lg:order-1">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-px" style={{ backgroundColor: '#C5A059' }} />
              <p 
                className="font-medium tracking-widest uppercase text-xs"
                style={{ color: '#C5A059' }}
              >
                Sobre
              </p>
            </div>

            {/* Headline */}
            <h2 
              className="font-serif text-3xl md:text-4xl font-medium leading-tight"
              style={{ color: '#FFFFFF' }}
            >
              Quem é{" "}
              <span className="italic" style={{ color: '#C5A059' }}>
                Marcelo Colen
              </span>
            </h2>

            {/* Bio text */}
            <div className="space-y-4" style={{ color: 'rgba(255,255,255,0.85)' }}>
              <p className="text-lg leading-relaxed">
                Advogado, professor, palestrante e consultor em{" "}
                <strong style={{ color: '#FFFFFF' }}>Compliance Antidiscriminatório</strong>.
              </p>
              
              <p className="leading-relaxed">
                Mestrando em Direito pela UFMG e pós-graduado em Gestão Estratégica na Advocacia. 
                Atua com ênfase em <strong style={{ color: '#FFFFFF' }}>igualdade racial, diversidade institucional 
                e direitos humanos</strong>.
              </p>

              <p className="leading-relaxed">
                É autor do Manual Antirracismo no Esporte, adotado pela Amstel® na campanha 
                &ldquo;Barulho Contra o Racismo&rdquo; – Copa Libertadores 2022.
              </p>
            </div>

            {/* Credentials list */}
            <div className="pt-4">
              <p 
                className="text-sm font-medium uppercase tracking-wider mb-4"
                style={{ color: '#C5A059' }}
              >
                Atuação Institucional
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {CREDENTIALS.map((credential, index) => (
                  <li
                    key={index}
                    className="text-sm flex items-start gap-2"
                    style={{ color: 'rgba(255,255,255,0.8)' }}
                  >
                    <span 
                      className="w-1.5 h-1.5 mt-1.5 shrink-0"
                      style={{ backgroundColor: '#C5A059' }}
                    />
                    {credential}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a
                href={getWhatsAppLink("Olá, Marcelo. Vi seu perfil e gostaria de falar sobre meu caso.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold transition-all duration-200 hover:scale-[1.02]"
                style={{ 
                  backgroundColor: '#C5A059',
                  color: '#0A192F',
                  borderRadius: '4px'
                }}
              >
                <MessageCircle className="w-5 h-5" />
                Entre em contato
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative order-1 lg:order-2">
            {/* Decorative frame */}
            <div 
              className="absolute -top-4 -left-4 w-full h-full hidden lg:block"
              style={{ border: '1px solid rgba(197,160,89,0.3)' }}
            />
            
            <div 
              className="relative overflow-hidden"
              style={{ 
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <Portrait
                src="/images/marcelo/marcelo-bio.jpg"
                alt="Dr. Marcelo Colen - Advogado"
                sizes="(max-width: 1024px) 100vw, 560px"
                containerClassName="aspect-[4/5] w-full"
              />
            </div>

            {/* Name badge */}
            <div 
              className="absolute -bottom-4 -right-4 py-4 px-6 hidden lg:block"
              style={{ 
                backgroundColor: '#0A192F',
                border: '1px solid #C5A059'
              }}
            >
              <p 
                className="font-serif text-lg"
                style={{ color: '#FFFFFF' }}
              >
                Marcelo Ladeia Colen Guterres
              </p>
              <p 
                className="text-xs mt-1"
                style={{ color: '#C5A059' }}
              >
                Advogado • OAB/MG 167.463
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
