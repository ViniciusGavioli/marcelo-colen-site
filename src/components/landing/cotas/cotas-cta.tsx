"use client";

import { MessageCircle, Clock, MapPin, CheckCircle } from "lucide-react";
import { Container } from "@/components/layout";
import { Portrait } from "@/components/ui/portrait";
import { getWhatsAppLink } from "@/lib/whatsapp";

const WHATSAPP_MESSAGE =
  "Olá, Marcelo. Minha cota foi questionada na heteroidentificação e preciso de orientação urgente. Posso te explicar meu caso?";

export function CotasCta() {
  return (
    <section 
      className="py-16 md:py-24"
      style={{ backgroundColor: '#0A192F' }}
    >
      <Container>
        {/* Manifesto quote */}
        <div 
          className="max-w-4xl mx-auto text-center mb-16 pb-16"
          style={{ borderBottom: '1px solid rgba(197,160,89,0.2)' }}
        >
          <blockquote 
            className="font-serif text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed italic"
            style={{ color: '#FFFFFF' }}
          >
            &ldquo;A presença de pessoas negras no serviço público é fundamental para a 
            promoção da <span style={{ color: '#C5A059' }}>igualdade racial</span>, 
            da <span style={{ color: '#C5A059' }}>justiça social</span> e da 
            <span style={{ color: '#C5A059' }}> representatividade institucional</span> no Brasil.&rdquo;
          </blockquote>
        </div>

        {/* Main CTA */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-px" style={{ backgroundColor: '#C5A059' }} />
              <p 
                className="font-medium tracking-widest uppercase text-xs"
                style={{ color: '#C5A059' }}
              >
                Não deixe seu sonho escapar
              </p>
            </div>

            {/* Headline */}
            <h2 
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight"
              style={{ color: '#FFFFFF' }}
            >
              O prazo está correndo.{" "}
              <span className="italic" style={{ color: '#C5A059' }}>
                Sua vaga está em risco.
              </span>
            </h2>

            {/* Subheadline */}
            <p 
              className="text-lg leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.85)' }}
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
                    <Icon className="w-5 h-5" style={{ color: '#C5A059' }} />
                    <span style={{ color: 'rgba(255,255,255,0.9)' }}>
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
                className="inline-flex items-center justify-center gap-3 px-10 py-5 font-bold text-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl w-full sm:w-auto"
                style={{ 
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  borderRadius: '4px',
                  boxShadow: '0 4px 20px rgba(37,211,102,0.3)'
                }}
              >
                <MessageCircle className="w-6 h-6" />
                FALAR COM DR. MARCELO AGORA
              </a>
            </div>

            {/* Urgency text */}
            <p 
              className="text-sm flex items-center gap-2"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              <span 
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: '#25D366' }}
              />
              Atendimento prioritário para casos urgentes
            </p>
          </div>

          {/* Portrait */}
          <div className="relative hidden lg:block">
            <div 
              className="absolute -top-4 -right-4 w-full h-full"
              style={{ border: '1px solid rgba(197,160,89,0.2)' }}
            />
            
            <Portrait
              src="/images/marcelo/painel.jpg"
              alt="Painel sobre cotas raciais"
              sizes="(max-width: 1024px) 100vw, 520px"
              containerClassName="aspect-[4/5] w-full"
            />

            {/* Badge */}
            <div 
              className="absolute -bottom-4 -left-4 py-4 px-6"
              style={{ 
                backgroundColor: '#C5A059',
              }}
            >
              <p 
                className="font-medium"
                style={{ color: '#0A192F' }}
              >
                Marcelo Colen
              </p>
              <p 
                className="text-sm"
                style={{ color: 'rgba(10,25,47,0.7)' }}
              >
                OAB/MG 167.463
              </p>
            </div>
          </div>
        </div>

        {/* Instagram + Contact */}
        <div 
          className="mt-16 pt-12 text-center"
          style={{ borderTop: '1px solid rgba(197,160,89,0.2)' }}
        >
          <p 
            className="font-serif text-xl mb-4"
            style={{ color: '#FFFFFF' }}
          >
            Acompanhe meu trabalho
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://www.instagram.com/marcelocolen.adv/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 transition-colors"
              style={{ 
                border: '1px solid rgba(197,160,89,0.4)',
                color: '#C5A059',
                borderRadius: '4px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(197,160,89,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              @marcelocolen.adv
            </a>
            <a 
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 transition-colors"
              style={{ 
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#FFFFFF',
                borderRadius: '4px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <MessageCircle className="w-4 h-4" />
              Falar com advogado
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
