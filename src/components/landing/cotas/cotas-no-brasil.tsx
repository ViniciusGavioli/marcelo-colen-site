"use client";

import Image from "next/image";
import { Container } from "@/components/layout";

export function CotasNoBrasil() {
  return (
    <section 
      className="py-16 md:py-24"
      style={{ backgroundColor: '#8B4513' }}
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <Image
              src="/images/marcelo/estudantes.jpg"
              alt="Estudantes universitários"
              width={600}
              height={450}
              className="w-full h-auto object-cover rounded-lg"
              style={{ aspectRatio: '4/3' }}
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 
              className="text-3xl md:text-4xl font-bold leading-tight"
              style={{ color: '#FFFFFF' }}
            >
              Cotas Raciais no Brasil
            </h2>

            <p 
              className="leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.9)' }}
            >
              As cotas raciais, expressão concreta das políticas de ação afirmativa, 
              são instrumentos voltados à promoção da igualdade racial e à 
              reparação histórica das desigualdades vividas pela população negra 
              no Brasil. Em um país estruturado sobre bases de exclusão, a 
              reserva de vagas para candidatos negros em concursos públicos e 
              universidades representa um marco civilizatório na luta contra o 
              racismo estrutural e na efetivação do princípio da dignidade da 
              pessoa humana.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
