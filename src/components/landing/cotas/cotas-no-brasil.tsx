"use client";

import { Scale, Users, FileText } from "lucide-react";
import { Container } from "@/components/layout";

export function CotasNoBrasil() {
  return (
    <section 
      className="py-16 md:py-24"
      style={{ backgroundColor: '#F5EEE0' }}
    >
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px" style={{ backgroundColor: '#C5A059' }} />
            <p 
              className="font-medium tracking-widest uppercase text-xs"
              style={{ color: '#C5A059' }}
            >
              Contexto
            </p>
          </div>
          
          <h2 
            className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-4"
            style={{ color: '#0A192F' }}
          >
            Cotas Raciais no{" "}
            <span className="italic" style={{ color: '#C5A059' }}>Brasil</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main text */}
          <div className="lg:col-span-2 space-y-6" style={{ color: '#333' }}>
            <p className="text-lg leading-relaxed">
              As cotas raciais, expressão concreta das políticas de ação afirmativa, são 
              instrumentos voltados à <strong style={{ color: '#0A192F' }}>promoção da igualdade racial</strong> e 
              à reparação histórica das desigualdades vividas pela população negra no Brasil.
            </p>
            
            <p className="leading-relaxed">
              Em um país estruturado sobre bases de exclusão, a reserva de vagas para candidatos 
              negros em concursos públicos e universidades representa um <strong style={{ color: '#0A192F' }}>
              marco civilizatório</strong> na luta contra o racismo estrutural e na efetivação do 
              princípio da dignidade da pessoa humana.
            </p>

            <p className="leading-relaxed">
              A presença de pessoas negras (pretas e pardas) no serviço público é fundamental para 
              a promoção da igualdade racial, da justiça social e da representatividade institucional 
              no Brasil.
            </p>
          </div>

          {/* Stats/highlights */}
          <div className="space-y-4">
            <div 
              className="p-6"
              style={{ 
                backgroundColor: '#FFFFFF',
                borderLeft: '3px solid #C5A059',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}
            >
              <Scale className="w-8 h-8 mb-3" style={{ color: '#C5A059' }} />
              <p className="font-medium" style={{ color: '#0A192F' }}>
                Lei Federal 12.711/2012
              </p>
              <p className="text-sm mt-1" style={{ color: '#666' }}>
                Garante cotas em universidades federais
              </p>
            </div>

            <div 
              className="p-6"
              style={{ 
                backgroundColor: '#FFFFFF',
                borderLeft: '3px solid #0A192F',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}
            >
              <Users className="w-8 h-8 mb-3" style={{ color: '#0A192F' }} />
              <p className="font-medium" style={{ color: '#0A192F' }}>
                Lei Federal 12.990/2014
              </p>
              <p className="text-sm mt-1" style={{ color: '#666' }}>
                Reserva de vagas em concursos públicos federais
              </p>
            </div>

            <div 
              className="p-6"
              style={{ 
                backgroundColor: '#FFFFFF',
                borderLeft: '3px solid #C5A059',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}
            >
              <FileText className="w-8 h-8 mb-3" style={{ color: '#C5A059' }} />
              <p className="font-medium" style={{ color: '#0A192F' }}>
                ADC 41 – STF
              </p>
              <p className="text-sm mt-1" style={{ color: '#666' }}>
                Constitucionalidade confirmada pelo Supremo
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
