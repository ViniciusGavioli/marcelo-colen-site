"use client";

import { Building2, Mic, BookOpen, MessageCircle } from "lucide-react";
import { Container } from "@/components/layout";
import { getWhatsAppLink } from "@/lib/whatsapp";

const WHATSAPP_MESSAGE = "Olá, Marcelo. Fui indeferido(a) na heteroidentificação e preciso entender prazos e como funciona o recurso. Posso te passar meu caso?";

const PROVA_SOCIAL_CARDS = [
  {
    icon: Building2,
    title: "Atuação Institucional",
    items: [
      "Diretor de Diversidade e Inclusão da OAB/MG (2025–2027)",
      "Presidente da Comissão de Igualdade Racial da OAB/MG (2022–2024)",
      "Conselheiro Municipal de Igualdade Racial de Belo Horizonte",
    ],
  },
  {
    icon: Mic,
    title: "Mídia & Palestras",
    items: [
      "Participação em debates sobre inclusão e políticas afirmativas",
      "Palestras sobre racismo estrutural e direitos fundamentais",
      "Comentários jurídicos em veículos de comunicação",
    ],
  },
  {
    icon: BookOpen,
    title: "Produção Intelectual",
    items: [
      "Autor do Manual Antirracismo no Esporte (Amstel®)",
      "Mestrando em Direito pela UFMG (Compliance Antidiscriminatório)",
      "Pesquisa acadêmica em igualdade racial e direitos humanos",
    ],
  },
];

export function CotasProvaSocial() {
  return (
    <section 
      className="py-16 md:py-20"
      style={{ backgroundColor: '#F5EEE0' }}
    >
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px" style={{ backgroundColor: '#C5A059' }} />
            <p 
              className="font-medium tracking-widest uppercase text-xs"
              style={{ color: '#C5A059' }}
            >
              Por que confiar
            </p>
            <div className="w-12 h-px" style={{ backgroundColor: '#C5A059' }} />
          </div>
          
          <h2 
            className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-4"
            style={{ color: '#0A192F' }}
          >
            Trajetória em{" "}
            <span className="italic" style={{ color: '#C5A059' }}>
              Igualdade Racial
            </span>
          </h2>

          <p 
            className="text-lg leading-relaxed"
            style={{ color: '#333' }}
          >
            Atuação consistente em defesa de direitos, com participação institucional 
            na OAB e produção intelectual sobre o tema.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {PROVA_SOCIAL_CARDS.map((card, index) => {
            const Icon = card.icon;
            return (
              <div 
                key={index}
                className="p-6 lg:p-8"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  borderBottom: '3px solid #0A192F',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                }}
              >
                <div 
                  className="w-12 h-12 flex items-center justify-center mb-5"
                  style={{ 
                    backgroundColor: '#0A192F',
                    borderRadius: '4px'
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: '#C5A059' }} />
                </div>
                
                <h3 
                  className="font-serif text-xl font-medium mb-4"
                  style={{ color: '#0A192F' }}
                >
                  {card.title}
                </h3>
                
                <ul className="space-y-3">
                  {card.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="flex items-start gap-2 text-sm leading-relaxed"
                      style={{ color: '#444' }}
                    >
                      <span 
                        className="w-1.5 h-1.5 mt-2 shrink-0 rounded-full"
                        style={{ backgroundColor: '#C5A059' }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold transition-all duration-200 hover:scale-[1.02]"
            style={{ 
              backgroundColor: '#0A192F',
              color: '#FFFFFF',
              borderRadius: '4px'
            }}
          >
            <MessageCircle className="w-5 h-5" />
            Falar com Marcelo
          </a>
        </div>
      </Container>
    </section>
  );
}
