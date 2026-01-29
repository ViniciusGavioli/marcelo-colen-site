"use client";

import Image from "next/image";
import { Container } from "@/components/layout";

export function CotasHeteroWordpress() {
  return (
    <section 
      className="py-16 lg:py-24"
      style={{ backgroundColor: '#260F06' }}
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* IMAGE SIDE - Left */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/wordpress/biblioteca.jpg"
                alt="Estudante na biblioteca"
                width={600}
                height={450}
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
              O que é Heteroidentificação?
            </h2>

            <p 
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.9)' }}
            >
              A <strong style={{ color: '#FFFFFF', textDecoration: 'underline' }}>heteroidentificação</strong> é um procedimento complementar à autodeclaração racial, adotado por comissões avaliadoras em concursos públicos e processos seletivos para fins de <strong style={{ color: '#FFFFFF' }}>verificação da veracidade do pertencimento étnico-racial do candidato autodeclarado preto ou pardo</strong>, conforme os critérios do <strong style={{ color: '#FFFFFF' }}>IBGE</strong> e a jurisprudência consolidada do <strong style={{ color: '#FFFFFF' }}>Supremo Tribunal Federal (STF)</strong>.
            </p>

            <p 
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.9)' }}
            >
              Esse mecanismo, quando corretamente estruturado, <strong style={{ color: '#FFFFFF' }}>visa assegurar a efetividade das políticas públicas de ação afirmativa</strong>, coibindo fraudes no sistema de cotas e garantindo que os benefícios da reserva de vagas cheguem às pessoas que, de fato, são alvo da discriminação racial histórica no Brasil.
            </p>

            <p 
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.9)' }}
            >
              Contudo, a banca de heteroidentificação deve <strong style={{ color: '#FFFFFF' }}>observar rigorosamente o contraditório, a ampla defesa e os princípios da legalidade e da dignidade da pessoa humana</strong>. Erros, abusos ou indeferimentos indevidos podem ser objeto de questionamento pelas vias legais.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
