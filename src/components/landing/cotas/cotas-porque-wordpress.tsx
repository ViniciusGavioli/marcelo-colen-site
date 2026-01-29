"use client";

import Image from "next/image";
import { Container } from "@/components/layout";

export function CotasPorqueWordpress() {
  return (
    <section 
      className="py-16 lg:py-24"
      style={{ backgroundColor: '#2D1A0F' }}
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* TEXT SIDE - Left */}
          <div className="space-y-6">
            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
              style={{ 
                color: '#FFFFFF',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
            >
              Por que Recorrer ao Recurso Administrativo é Mais Rápido?
            </h2>

            <p 
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.85)' }}
            >
              A verificação étnica é um procedimento usado em concursos públicos para confirmar a declaração de candidatos que se identificam como negros. Este passo é essencial para validar sua declaração, assegurar seus direitos em concursos públicos e exercer sua cidadania de maneira plena e justa.
            </p>
          </div>

          {/* IMAGE SIDE - Right */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-white/20">
              <Image
                src="/images/wordpress/painel.jpg"
                alt="Painel de discussão sobre direitos"
                width={600}
                height={400}
                className="object-cover w-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
