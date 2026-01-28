"use client";

import { Container } from "@/components/layout";

export function CotasPorqueWordpress() {
  return (
    <section 
      className="py-16 lg:py-24"
      style={{ backgroundColor: '#F5F5F5' }}
    >
      <Container>
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight text-center"
            style={{ 
              color: '#1A1A1A',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            Por que Recorrer ao Recurso Administrativo é Mais Rápido?
          </h2>

          <p 
            className="text-base lg:text-lg leading-relaxed text-center"
            style={{ color: '#333333' }}
          >
            A verificação étnica é um procedimento usado em concursos públicos para confirmar a declaração de candidatos que se identificam como negros. Este passo é essencial para validar sua declaração, assegurar seus direitos em concursos públicos e exercer sua cidadania de maneira plena e justa.
          </p>
        </div>
      </Container>
    </section>
  );
}
