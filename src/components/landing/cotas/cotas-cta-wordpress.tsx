"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/layout";
import { getWhatsAppLink } from "@/lib/whatsapp";

const WHATSAPP_MESSAGE = "Olá, Dr. Marcelo. Gostaria de conversar sobre meu caso de heteroidentificação.";

export function CotasCtaWordpress() {
  return (
    <section 
      className="relative py-16 lg:py-24 overflow-hidden"
      style={{ backgroundColor: '#3D2314' }}
    >
      {/* Background Image */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        <Image
          src="/images/wordpress/marcelo-cta.jpg"
          alt="Dr. Marcelo Colen"
          fill
          className="object-cover object-center opacity-40"
        />
        <div 
          className="absolute inset-0"
          style={{ 
            background: 'linear-gradient(90deg, rgba(61,35,20,1) 0%, rgba(61,35,20,0.5) 50%, rgba(61,35,20,0.3) 100%)' 
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 text-center lg:text-left">
          <p 
            className="text-base lg:text-lg leading-relaxed"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            A presença de pessoas negras (pretas e pardas) no serviço público, por meio dos concursos e vestibulares, é fundamental para a promoção da igualdade racial, da justiça social e da representatividade institucional no Brasil.
          </p>

          <p 
            className="text-base lg:text-lg leading-relaxed"
            style={{ color: 'rgba(255, 255, 255, 0.85)' }}
          >
            O recurso administrativo e a ação judicial no contexto da heteroidentificação não devem ser vistos como instrumentos de distorção do sistema de cotas, mas sim como mecanismos legítimos de proteção contra erros e arbitrariedades que possam comprometer a efetividade das ações afirmativas. Trata-se de garantir que pessoas negras autodeclaradas, de fato enquadradas nos critérios fenotípicos previstos, não sejam indevidamente excluídas por decisões equivocadas ou injustas das bancas avaliadoras.
          </p>

          <div className="pt-6">
            <a
              href={getWhatsAppLink(WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-md"
              style={{ 
                backgroundColor: '#25D366', 
                color: '#FFFFFF',
                boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)'
              }}
            >
              <MessageCircle className="w-5 h-5" />
              ENTRE EM CONTATO COM NOSSA EQUIPE
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
