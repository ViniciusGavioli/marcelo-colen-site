"use client";

import Image from "next/image";
import { Container } from "@/components/layout";

export function CotasHeteroidentificacao() {
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
              src="/images/marcelo/biblioteca.jpg"
              alt="Estudante em biblioteca"
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
              O que é Heteroidentificação?
            </h2>

            <div className="space-y-4" style={{ color: 'rgba(255,255,255,0.9)' }}>
              <p className="leading-relaxed">
                A <strong style={{ color: '#FFFFFF' }}>heteroidentificação</strong> é um procedimento complementar à 
                autodeclaração racial, adotado por comissões avaliadoras em 
                concursos públicos e processos seletivos para fins de{" "}
                <strong style={{ color: '#FFFFFF' }}>verificação da 
                veracidade do pertencimento étnico-racial do candidato 
                autodeclarado preto ou pardo</strong>, conforme os critérios do{" "}
                <strong style={{ color: '#FFFFFF' }}>IBGE</strong> e a 
                jurisprudência consolidada do{" "}
                <strong style={{ color: '#FFFFFF' }}>Supremo Tribunal Federal (STF)</strong>.
              </p>

              <p className="leading-relaxed">
                Esse mecanismo, quando corretamente estruturado,{" "}
                <strong style={{ color: '#FFFFFF' }}>visa assegurar 
                a efetividade das políticas públicas de ação afirmativa</strong>, coibindo 
                fraudes no sistema de cotas e garantindo que os benefícios da 
                reserva de vagas cheguem às pessoas que, de fato, são alvo da 
                discriminação racial histórica no Brasil.
              </p>

              <p className="leading-relaxed">
                Contudo, a banca de heteroidentificação deve{" "}
                <strong style={{ color: '#FFFFFF' }}>observar 
                rigorosamente o contraditório, a ampla defesa e os princípios da 
                legalidade e da dignidade da pessoa humana</strong>. Erros, abusos ou 
                indeferimentos indevidos podem ser objeto de questionamento pelas 
                vias legais.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
