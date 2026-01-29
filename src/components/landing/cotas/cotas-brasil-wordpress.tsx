"use client";

import Image from "next/image";
import { Container } from "@/components/layout";

export function CotasBrasilWordpress() {
  return (
    <section 
      className="py-16 lg:py-24 relative"
      style={{ backgroundColor: '#1E1432' }}
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* IMAGE SIDE - Left */}
          <div className="relative">
            {/* Borda neon/glow */}
            <div 
              className="absolute -inset-1 rounded-lg opacity-75"
              style={{ 
                background: 'linear-gradient(135deg, #00D4FF 0%, #FF00FF 50%, #FFD700 100%)',
                filter: 'blur(2px)'
              }}
            />
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/images/wordpress/estudantes.jpg"
                alt="Estudantes universitários"
                width={600}
                height={400}
                className="object-cover w-full"
              />
            </div>
          </div>

          {/* TEXT SIDE - Right */}
          <div className="space-y-6">
            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
              style={{ 
                color: '#FFFFFF',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
            >
              Cotas Raciais no Brasil
            </h2>

            <p 
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.9)' }}
            >
              As cotas raciais, expressão concreta das políticas de ação afirmativa, são instrumentos voltados à promoção da igualdade racial e à reparação histórica das desigualdades vividas pela população negra no Brasil. Em um país estruturado sobre bases de exclusão, a reserva de vagas para candidatos negros em concursos públicos e universidades representa um marco civilizatório na luta contra o racismo estrutural e na efetivação do princípio da dignidade da pessoa humana.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
