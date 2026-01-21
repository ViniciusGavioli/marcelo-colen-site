"use client";

import { Eye, AlertCircle, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout";

export function CotasHeteroidentificacao() {
  return (
    <section 
      className="py-16 md:py-24"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px" style={{ backgroundColor: '#C5A059' }} />
            <p 
              className="font-medium tracking-widest uppercase text-xs"
              style={{ color: '#C5A059' }}
            >
              Entenda o processo
            </p>
            <div className="w-12 h-px" style={{ backgroundColor: '#C5A059' }} />
          </div>
          
          <h2 
            className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-4"
            style={{ color: '#0A192F' }}
          >
            O que é{" "}
            <span className="italic" style={{ color: '#C5A059' }}>
              Heteroidentificação?
            </span>
          </h2>
        </div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6" style={{ color: '#333' }}>
            <p className="text-lg leading-relaxed text-center">
              A heteroidentificação é um procedimento <strong style={{ color: '#0A192F' }}>
              complementar à autodeclaração racial</strong>, adotado por comissões avaliadoras 
              em concursos públicos e processos seletivos.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div 
              className="p-6 text-center"
              style={{ 
                backgroundColor: '#F5EEE0',
                borderTop: '3px solid #C5A059'
              }}
            >
              <Eye className="w-10 h-10 mx-auto mb-4" style={{ color: '#C5A059' }} />
              <h3 className="font-medium text-lg mb-2" style={{ color: '#0A192F' }}>
                Critérios Fenotípicos
              </h3>
              <p className="text-sm" style={{ color: '#666' }}>
                Baseia-se na análise de características físicas: cor da pele, traços faciais 
                e tipo de cabelo, conforme diretrizes do IBGE.
              </p>
            </div>

            <div 
              className="p-6 text-center"
              style={{ 
                backgroundColor: '#F5EEE0',
                borderTop: '3px solid #0A192F'
              }}
            >
              <ShieldCheck className="w-10 h-10 mx-auto mb-4" style={{ color: '#0A192F' }} />
              <h3 className="font-medium text-lg mb-2" style={{ color: '#0A192F' }}>
                Garantia de Direitos
              </h3>
              <p className="text-sm" style={{ color: '#666' }}>
                A banca deve observar contraditório, ampla defesa e os princípios da legalidade 
                e dignidade da pessoa humana.
              </p>
            </div>

            <div 
              className="p-6 text-center"
              style={{ 
                backgroundColor: '#F5EEE0',
                borderTop: '3px solid #C5A059'
              }}
            >
              <AlertCircle className="w-10 h-10 mx-auto mb-4" style={{ color: '#C5A059' }} />
              <h3 className="font-medium text-lg mb-2" style={{ color: '#0A192F' }}>
                Passível de Recurso
              </h3>
              <p className="text-sm" style={{ color: '#666' }}>
                Erros, abusos ou indeferimentos indevidos podem ser objeto de questionamento 
                pelas vias legais.
              </p>
            </div>
          </div>

          {/* Important note */}
          <div 
            className="mt-12 p-6 text-center"
            style={{ 
              backgroundColor: '#0A192F',
              borderRadius: '4px'
            }}
          >
            <p 
              className="text-lg"
              style={{ color: '#FFFFFF' }}
            >
              O objetivo legítimo da heteroidentificação é <strong>garantir a efetividade 
              das políticas de ação afirmativa</strong>. Porém, quando mal aplicada, pode 
              excluir injustamente pessoas que de fato são alvo de discriminação racial.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
