"use client";

import { AlertTriangle, Clock, MessageCircle } from "lucide-react";
import { Container } from "@/components/layout";
import { getWhatsAppLink } from "@/lib/whatsapp";

const WHATSAPP_MESSAGE = "Olá, Marcelo. Fui indeferido(a) na heteroidentificação e preciso entender prazos e como funciona o recurso. Posso te passar meu caso?";

export function CotasNaoEOFim() {
  return (
    <section 
      className="py-16 md:py-24"
      style={{ backgroundColor: '#F5EEE0' }}
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            {/* Headline */}
            <h2 
              className="font-serif text-3xl md:text-4xl font-medium leading-tight"
              style={{ color: '#0A192F' }}
            >
              Ser indeferido{" "}
              <span className="italic" style={{ color: '#C5A059' }}>
                não encerra
              </span>{" "}
              sua chance.
            </h2>

            {/* Text content */}
            <div className="space-y-4" style={{ color: '#333' }}>
              <p className="text-lg leading-relaxed">
                Ter sua autodeclaração racial rejeitada pela banca avaliadora pode ser um golpe duro — 
                <strong> mas não significa o fim do seu sonho.</strong>
              </p>
              
              <p className="leading-relaxed">
                A legislação brasileira garante instrumentos eficazes para reverter decisões injustas, 
                especialmente quando não são respeitados os critérios legais e constitucionais aplicáveis 
                às cotas raciais.
              </p>

              <p className="leading-relaxed">
                Com o apoio certo, é possível formular um recurso administrativo ou, se necessário, 
                ajuizar uma ação judicial com embasamento sólido. Cada caso exige estratégia, 
                conhecimento e atuação precisa.
              </p>

              <p className="text-lg font-medium" style={{ color: '#0A192F' }}>
                Você tem o direito de lutar. E não precisa fazer isso sozinho.
              </p>
            </div>

            {/* Alert boxes */}
            <div className="space-y-3 pt-4">
              <div 
                className="flex items-start gap-3 p-4"
                style={{ 
                  backgroundColor: 'rgba(197,160,89,0.1)',
                  borderLeft: '3px solid #C5A059'
                }}
              >
                <Clock className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#C5A059' }} />
                <div>
                  <p className="font-medium" style={{ color: '#0A192F' }}>
                    Prazos são curtos
                  </p>
                  <p className="text-sm" style={{ color: '#666' }}>
                    Recursos administrativos geralmente têm prazo de 2 a 5 dias úteis. Não deixe para depois.
                  </p>
                </div>
              </div>

              <div 
                className="flex items-start gap-3 p-4"
                style={{ 
                  backgroundColor: 'rgba(10,25,47,0.05)',
                  borderLeft: '3px solid #0A192F'
                }}
              >
                <AlertTriangle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#0A192F' }} />
                <div>
                  <p className="font-medium" style={{ color: '#0A192F' }}>
                    Proteja seus dados
                  </p>
                  <p className="text-sm" style={{ color: '#666' }}>
                    Não envie documentos sensíveis por formulário ou mensagem sem orientação prévia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Manifesto Block - Substitui vídeo placeholder */}
          <div className="relative">
            <div 
              className="p-8 lg:p-10"
              style={{ 
                backgroundColor: '#0A192F',
                borderRadius: '4px',
                border: '1px solid rgba(197,160,89,0.2)'
              }}
            >
              {/* Quote icon */}
              <div 
                className="text-5xl font-serif mb-4"
                style={{ color: 'rgba(197, 160, 89, 0.4)' }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              <h3 
                className="font-serif text-2xl lg:text-3xl font-medium leading-tight mb-6"
                style={{ color: '#FFFFFF' }}
              >
                O direito à inclusão{" "}
                <span className="italic" style={{ color: '#C5A059' }}>
                  não é favor.
                </span>
              </h3>

              <p 
                className="leading-relaxed mb-6"
                style={{ color: 'rgba(255,255,255,0.85)' }}
              >
                A heteroidentificação existe para proteger a política de cotas — mas decisões 
                equivocadas podem acontecer. Meu trabalho é organizar o recurso com técnica, 
                respeito e estratégia, para que seu caso seja analisado com seriedade.
              </p>

              <div className="pt-4 border-t" style={{ borderColor: 'rgba(197,160,89,0.2)' }}>
                <a
                  href={getWhatsAppLink(WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium transition-colors"
                  style={{ color: '#C5A059' }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Quero entender meu caso
                </a>
              </div>

              {/* Decorative frame */}
              <div 
                className="absolute -top-3 -right-3 w-full h-full pointer-events-none hidden lg:block"
                style={{ 
                  border: '1px solid rgba(197,160,89,0.15)',
                  borderRadius: '4px'
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
