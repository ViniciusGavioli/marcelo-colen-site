"use client";

import { MessageCircle, Clock, MapPin, CheckCircle } from "lucide-react";
import { Container } from "@/components/layout";
import Image from "next/image";
import { getWhatsAppLink } from "@/lib/whatsapp";

const WHATSAPP_MESSAGE =
  "Olá, Marcelo. Fui indeferido(a) na heteroidentificação e preciso entender prazos e como funciona o recurso. Posso te passar meu caso?";

export function CotasCta() {
  return (
    <section 
      className="py-16 md:py-24"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <Container>
        {/* Main CTA */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Portrait */}
          <div className="relative">
            <div 
              className="absolute top-4 left-4 w-24 h-32"
              style={{ backgroundColor: '#E5A853' }}
            />
            <Image
              src="/images/marcelo/marcelo-cta.jpg"
              alt="Dr. Marcelo Colen - Advogado especialista"
              width={500}
              height={600}
              className="relative w-full h-auto object-cover"
              style={{ aspectRatio: '4/5' }}
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Headline */}
            <h2 
              className="text-3xl md:text-4xl font-bold leading-tight"
              style={{ color: '#3D2A1E' }}
            >
              O prazo está correndo.{" "}
              <span style={{ color: '#4A9B4A' }}>
                Sua vaga está em risco.
              </span>
            </h2>

            {/* Subheadline */}
            <p 
              className="text-lg leading-relaxed"
              style={{ color: '#666666' }}
            >
              Cada hora que passa diminui suas chances de reverter a decisão. 
              Entre em contato agora e vamos lutar juntos pelo que é seu por direito.
            </p>

            {/* Guarantees */}
            <div className="space-y-3 py-4">
              {[
                { icon: CheckCircle, text: "Análise inicial do caso" },
                { icon: Clock, text: "Resposta rápida" },
                { icon: MapPin, text: "Atendimento em todo Brasil" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <Icon className="w-5 h-5" style={{ color: '#4A9B4A' }} />
                    <span style={{ color: '#3D2A1E' }}>
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href={getWhatsAppLink(WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 font-bold text-lg transition-all duration-200 hover:opacity-90 w-full sm:w-auto rounded-lg"
                style={{ 
                  backgroundColor: '#4A9B4A',
                  color: '#FFFFFF',
                }}
              >
                <MessageCircle className="w-6 h-6" />
                FALAR COM DR. MARCELO AGORA
              </a>
            </div>

            {/* Urgency text */}
            <p 
              className="text-sm flex items-center gap-2"
              style={{ color: '#666666' }}
            >
              <span 
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: '#4A9B4A' }}
              />
              Atendimento prioritário para casos urgentes
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
