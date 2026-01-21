"use client";

import { AlertTriangle, Play, Clock } from "lucide-react";
import { Container } from "@/components/layout";

// TODO: Substituir pelo URL real do vídeo do Marcelo
const VIDEO_URL = ""; // Ex: "https://www.youtube.com/embed/VIDEO_ID"

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

          {/* Video Section */}
          <div className="relative">
            {VIDEO_URL ? (
              /* Video embed */
              <div 
                className="relative aspect-video overflow-hidden shadow-xl"
                style={{ borderRadius: '4px' }}
              >
                <iframe
                  src={VIDEO_URL}
                  title="Explicação sobre heteroidentificação - Marcelo Colen"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              /* Placeholder quando não há vídeo */
              <div 
                className="relative aspect-video overflow-hidden shadow-xl flex items-center justify-center"
                style={{ 
                  backgroundColor: '#0A192F',
                  borderRadius: '4px',
                  border: '1px solid rgba(197,160,89,0.2)'
                }}
              >
                {/* Play button placeholder */}
                <div className="text-center">
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ 
                      backgroundColor: 'rgba(197,160,89,0.2)',
                      border: '2px solid #C5A059'
                    }}
                  >
                    <Play className="w-8 h-8 ml-1" style={{ color: '#C5A059' }} />
                  </div>
                  <p 
                    className="text-sm font-medium"
                    style={{ color: '#C5A059' }}
                  >
                    Vídeo explicativo em breve
                  </p>
                  <p 
                    className="text-xs mt-1"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    Entenda como funciona a heteroidentificação
                  </p>
                </div>

                {/* Decorative frame */}
                <div 
                  className="absolute inset-4 pointer-events-none"
                  style={{ border: '1px solid rgba(197,160,89,0.15)' }}
                />
              </div>
            )}

            {/* Caption */}
            <p 
              className="text-sm mt-4 text-center"
              style={{ color: '#666' }}
            >
              {VIDEO_URL 
                ? "Assista à explicação completa sobre seus direitos"
                : "TODO: Adicionar URL do vídeo explicativo"
              }
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
