"use client";

import { Clock, FileCheck, Gavel, MessageCircle } from "lucide-react";
import { Container } from "@/components/layout";
import { getWhatsAppLink } from "@/lib/whatsapp";

const REASONS = [
  {
    icon: Clock,
    title: "Rapidez no Recurso Administrativo",
    description: "O recurso administrativo é a via mais rápida. Enquanto ações judiciais podem levar meses ou anos, o recurso é analisado em dias ou semanas.",
  },
  {
    icon: FileCheck,
    title: "Menor Custo Processual",
    description: "Não há custas judiciais no recurso administrativo. É uma alternativa mais acessível antes de recorrer ao Judiciário.",
  },
  {
    icon: Gavel,
    title: "Esgotamento da Via Administrativa",
    description: "Em muitos casos, é necessário esgotar a via administrativa antes de ingressar com ação judicial. O recurso prepara o caminho.",
  },
];

export function CotasPorQueRecorrer() {
  return (
    <section 
      id="como-funciona"
      className="py-16 md:py-24"
      style={{ backgroundColor: '#C5A059' }}
    >
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px" style={{ backgroundColor: '#0A192F' }} />
            <p 
              className="font-medium tracking-widest uppercase text-xs"
              style={{ color: '#0A192F' }}
            >
              Estratégia
            </p>
          </div>
          
          <h2 
            className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-4"
            style={{ color: '#0A192F' }}
          >
            Por que recorrer ao{" "}
            <span className="italic" style={{ color: '#FFFFFF' }}>
              Recurso Administrativo?
            </span>
          </h2>

          <p 
            className="text-lg leading-relaxed"
            style={{ color: 'rgba(10,25,47,0.8)' }}
          >
            O recurso administrativo é, na maioria dos casos, o primeiro e mais eficiente 
            caminho para reverter um indeferimento na banca de heteroidentificação.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {REASONS.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index}
                className="p-6"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  borderBottom: '3px solid #0A192F',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
                }}
              >
                <div 
                  className="w-12 h-12 flex items-center justify-center mb-4"
                  style={{ 
                    backgroundColor: '#0A192F',
                    borderRadius: '4px'
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: '#C5A059' }} />
                </div>
                <h3 
                  className="font-medium text-lg mb-2"
                  style={{ color: '#0A192F' }}
                >
                  {reason.title}
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: '#666' }}
                >
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Process steps */}
        <div 
          className="p-8 md:p-12"
          style={{ 
            backgroundColor: '#0A192F',
            borderRadius: '4px'
          }}
        >
          <h3 
            className="font-serif text-2xl md:text-3xl font-medium mb-8 text-center"
            style={{ color: '#FFFFFF' }}
          >
            Como funciona o atendimento
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Contato", desc: "Você me conta seu caso pelo WhatsApp" },
              { step: "02", title: "Análise", desc: "Avalio os documentos e o prazo disponível" },
              { step: "03", title: "Estratégia", desc: "Defino a melhor abordagem para o recurso" },
              { step: "04", title: "Acompanhamento", desc: "Protocolo e monitoro o resultado" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div 
                  className="font-serif text-4xl font-medium mb-2"
                  style={{ color: '#C5A059' }}
                >
                  {item.step}
                </div>
                <h4 
                  className="font-medium mb-1"
                  style={{ color: '#FFFFFF' }}
                >
                  {item.title}
                </h4>
                <p 
                  className="text-sm"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <a
              href={getWhatsAppLink("Olá, Marcelo. Quero entender como funciona o recurso para meu caso de heteroidentificação.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold text-lg transition-all duration-200 hover:scale-[1.02]"
              style={{ 
                backgroundColor: '#25D366',
                color: '#FFFFFF',
                borderRadius: '4px'
              }}
            >
              <MessageCircle className="w-5 h-5" />
              Falar sobre meu caso
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
