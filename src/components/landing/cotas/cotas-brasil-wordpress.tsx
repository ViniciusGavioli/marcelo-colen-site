"use client";

import { Container } from "@/components/layout";

export function CotasBrasilWordpress() {
  return (
    <section 
      className="py-16 lg:py-24 relative"
      style={{ backgroundColor: '#F5F5F5' }}
    >
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("/images/wordpress/cotas-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight"
            style={{ 
              color: '#1A1A1A',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            Cotas Raciais no Brasil
          </h2>

          <p 
            className="text-base lg:text-lg leading-relaxed"
            style={{ color: '#333333' }}
          >
            As cotas raciais, expressão concreta das políticas de ação afirmativa, são instrumentos voltados à promoção da igualdade racial e à reparação histórica das desigualdades vividas pela população negra no Brasil. Em um país estruturado sobre bases de exclusão, a reserva de vagas para candidatos negros em concursos públicos e universidades representa um marco civilizatório na luta contra o racismo estrutural e na efetivação do princípio da dignidade da pessoa humana.
          </p>
        </div>
      </Container>
    </section>
  );
}
