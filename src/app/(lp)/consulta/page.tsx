"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, Clock, ChevronDown } from "lucide-react";
import { Container } from "@/components/layout";
import { SITE_CONFIG } from "@/lib/constants";

const WHATSAPP_NUMBER = SITE_CONFIG.contact.whatsapp;

const FAQ_ITEMS = [
  {
    question: "Fui reprovado, ainda tem jeito?",
    answer: "Sim. O indeferimento pode ser revertido via Recurso Administrativo ou Ação Judicial. A estratégia depende da fase atual e do motivo da eliminação."
  },
  {
    question: "Qual é o prazo?",
    answer: "O prazo administrativo é curtíssimo (geralmente 48h a 72h). O judicial é maior, mas a agilidade é essencial para garantir liminares antes das matrículas."
  },
  {
    question: "Atende apenas Belo Horizonte?",
    answer: "Não. O processo é eletrônico. Atendemos casos da UFMG, UFU, UFOP, UFV e concursos em todo o estado de Minas Gerais de forma 100% online."
  }
];

export default function ConsultaPage() {
  const [texto, setTexto] = useState("");
  const [erro, setErro] = useState("");
  const [faqAberto, setFaqAberto] = useState<number | null>(0);

  const handleSubmit = () => {
    if (!texto.trim()) {
      setErro("Por favor, descreva seu caso antes de continuar.");
      return;
    }

    if (texto.trim().length < 20) {
      setErro("Descreva com mais detalhes para que possamos ajudar melhor.");
      return;
    }

    setErro("");
    
    const mensagem = `Olá Dr. Marcelo. Vim pelo site de Cotas. Meu caso é:\n\n${texto.trim()}`;
    const mensagemCodificada = encodeURIComponent(mensagem);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensagemCodificada}`;
    
    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen text-white" style={{ backgroundColor: '#401A0C' }}>
      {/* Background com grafismo */}
      <div className="fixed inset-0 opacity-[0.06] pointer-events-none z-0">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <div key={`g1-${i}`} className="relative h-12" style={{ width: '20%' }}>
              <Image src="/images/wordpress/grafismo-sabedoria.png" alt="" fill className="object-cover" style={{ filter: 'invert(1)' }} />
            </div>
          ))}
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <div key={`g2-${i}`} className="relative h-12" style={{ width: '20%' }}>
              <Image src="/images/wordpress/grafismo-sabedoria.png" alt="" fill className="object-cover" style={{ filter: 'invert(1)' }} />
            </div>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 py-6 px-4 border-b border-white/10">
        <Container>
          <div className="flex items-center justify-center">
            <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>MARCELO COLEN</span>
            <span className="ml-3 text-sm text-white/60">ADVOCACIA</span>
          </div>
        </Container>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-4 pt-12 pb-8">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            {/* Headline */}
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Reprovado na Banca de<br />Heteroidentificação?
            </h1>
            
            <p className="text-xl sm:text-2xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Não se desespere. A defesa começa agora.
            </p>

            {/* Subtítulo */}
            <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Atuação especializada em recursos administrativos e judiciais para reverter indeferimentos indevidos em concursos públicos e vestibulares.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 px-4 py-10" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}>
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 
              className="text-2xl sm:text-3xl font-light mb-8 text-center"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Dúvidas Frequentes
            </h2>
            
            <div className="space-y-3">
              {FAQ_ITEMS.map((item, index) => (
                <div 
                  key={index}
                  className="border border-white/20 rounded-lg overflow-hidden"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                >
                  <button
                    onClick={() => setFaqAberto(faqAberto === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-medium text-base pr-4">{item.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-white/50 transition-transform flex-shrink-0 ${
                        faqAberto === index ? "rotate-180" : ""
                      }`} 
                    />
                  </button>
                  
                  {faqAberto === index && (
                    <div className="px-5 pb-5 text-base leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Formulário */}
      <section className="relative z-10 px-4 py-12">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div 
              className="rounded-xl p-6 sm:p-8"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.15)' }}
            >
              {/* Título do Formulário */}
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(37, 211, 102, 0.2)' }}
                >
                  <Clock className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold" style={{ fontFamily: 'Georgia, serif' }}>Análise Gratuita</h3>
                  <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Resposta em até 2 horas</p>
                </div>
              </div>

              {/* Instruções */}
              <p className="text-base mb-6" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Descreva brevemente seu caso abaixo. Quanto mais detalhes, melhor conseguiremos orientar você.
              </p>

              {/* Textarea */}
              <textarea
                value={texto}
                onChange={(e) => {
                  setTexto(e.target.value);
                  if (erro) setErro("");
                }}
                placeholder="Ex: Fui reprovado na banca da UFMG ontem, alegaram que não tenho fenótipo. O edital do vestibular diz que tenho 48h para recorrer..."
                className="w-full h-36 p-4 rounded-lg text-white text-base resize-none focus:outline-none transition-all"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.08)', 
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              />

              {/* Contador de caracteres */}
              <div className="flex justify-between items-center mt-3 mb-5">
                <span className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                  {texto.length < 20 ? `Mínimo 20 caracteres (${texto.length}/20)` : "✓ Descrição adequada"}
                </span>
              </div>

              {/* Erro */}
              {erro && (
                <div 
                  className="mb-5 p-4 rounded-lg text-base"
                  style={{ backgroundColor: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#f87171' }}
                >
                  {erro}
                </div>
              )}

              {/* Botão CTA */}
              <button
                onClick={handleSubmit}
                className="w-full flex items-center justify-center gap-3 py-5 px-8 font-semibold text-lg rounded-md transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
              >
                <MessageCircle className="w-6 h-6" />
                ANALISAR MEU CASO NO WHATSAPP
              </button>

              {/* Disclaimer */}
              <p className="text-sm text-center mt-5" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                Ao clicar, você será redirecionado para o WhatsApp do escritório. Seus dados são tratados com sigilo.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-4 py-8 border-t border-white/10">
        <Container>
          <div className="max-w-2xl mx-auto text-center text-sm" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            <p>Marcelo Colen Neves Soares • {SITE_CONFIG.oab}</p>
            <p className="mt-1">Especialista em Direito Antidiscriminatório</p>
          </div>
        </Container>
      </footer>
    </main>
  );
}
