"use client";

import { Container } from "@/components/layout";

export function CotasHeteroWordpress() {
  return (
    <section 
      className="py-16 lg:py-24"
      style={{ backgroundColor: '#FFFFFF' }}
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
            O que é Heteroidentificação?
          </h2>

          <div className="space-y-6">
            <p 
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: '#333333' }}
            >
              A heteroidentificação é um procedimento complementar à autodeclaração racial, adotado por comissões avaliadoras em concursos públicos e processos seletivos para fins de verificação da veracidade do pertencimento étnico-racial do candidato autodeclarado preto ou pardo, conforme os critérios do IBGE e a jurisprudência consolidada do Supremo Tribunal Federal (STF).
            </p>

            <p 
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: '#333333' }}
            >
              Esse mecanismo, quando corretamente estruturado, visa assegurar a efetividade das políticas públicas de ação afirmativa, coibindo fraudes no sistema de cotas e garantindo que os benefícios da reserva de vagas cheguem às pessoas que, de fato, são alvo da discriminação racial histórica no Brasil.
            </p>

            <p 
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: '#333333' }}
            >
              Contudo, a banca de heteroidentificação deve observar rigorosamente o contraditório, a ampla defesa e os princípios da legalidade e da dignidade da pessoa humana. Erros, abusos ou indeferimentos indevidos podem ser objeto de questionamento pelas vias legais.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
