"use client";

import { useState } from "react";
import { MessageCircle, Clock, MapPin, CheckCircle, ChevronDown, AlertTriangle, Shield } from "lucide-react";
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

export default function QualificacaoPage() {
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
    <main className="min-h-screen bg-[#0F0F0F] text-white">
      {/* Header Simples */}
      <header className="py-4 px-4 border-b border-white/10">
        <div className="max-w-lg mx-auto flex items-center justify-center">
          <span className="text-lg font-bold tracking-tight">MARCELO COLEN</span>
          <span className="ml-2 text-xs text-white/50">ADVOCACIA</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 pt-8 pb-6">
        <div className="max-w-lg mx-auto text-center">
          {/* Badge de Urgência */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-medium text-amber-400">PRAZOS CURTOS • AÇÃO IMEDIATA</span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Reprovado na Banca de Heteroidentificação?
          </h1>
          
          <p className="text-xl sm:text-2xl font-semibold text-[#25D366] mb-4">
            Não se desespere. A defesa começa agora.
          </p>

          {/* Subtítulo */}
          <p className="text-white/70 text-sm sm:text-base mb-6">
            Atuação especializada em recursos administrativos e judiciais em Minas Gerais.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 text-xs text-white/60">
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[#25D366]" />
              <span>{SITE_CONFIG.oab}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#25D366]" />
              <span>+150 casos</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#25D366]" />
              <span>100% Online</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-6 bg-white/[0.02]">
        <div className="max-w-lg mx-auto">
          <h2 className="text-lg font-semibold mb-4 text-center">Dúvidas Frequentes</h2>
          
          <div className="space-y-2">
            {FAQ_ITEMS.map((item, index) => (
              <div 
                key={index}
                className="border border-white/10 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setFaqAberto(faqAberto === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-medium text-sm pr-4">{item.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-white/50 transition-transform flex-shrink-0 ${
                      faqAberto === index ? "rotate-180" : ""
                    }`} 
                  />
                </button>
                
                {faqAberto === index && (
                  <div className="px-4 pb-4 text-sm text-white/70 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Qualificação */}
      <section className="px-4 py-8">
        <div className="max-w-lg mx-auto">
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
            {/* Título do Formulário */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#25D366]" />
              </div>
              <div>
                <h3 className="font-semibold">Análise Gratuita</h3>
                <p className="text-xs text-white/50">Resposta em até 2 horas</p>
              </div>
            </div>

            {/* Instruções */}
            <p className="text-sm text-white/70 mb-4">
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
              className="w-full h-32 p-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 text-sm resize-none focus:outline-none focus:border-[#25D366]/50 focus:ring-1 focus:ring-[#25D366]/50 transition-all"
            />

            {/* Contador de caracteres */}
            <div className="flex justify-between items-center mt-2 mb-4">
              <span className="text-xs text-white/40">
                {texto.length < 20 ? `Mínimo 20 caracteres (${texto.length}/20)` : "✓ Descrição adequada"}
              </span>
            </div>

            {/* Erro */}
            {erro && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                {erro}
              </div>
            )}

            {/* Botão CTA */}
            <button
              onClick={handleSubmit}
              className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-[#25D366] hover:bg-[#20BA5C] text-white font-bold text-base rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5" />
              ANALISAR MEU CASO NO WHATSAPP
            </button>

            {/* Disclaimer */}
            <p className="text-xs text-white/40 text-center mt-4">
              Ao clicar, você será redirecionado para o WhatsApp do escritório. Seus dados são tratados com sigilo.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Mínimo */}
      <footer className="px-4 py-6 border-t border-white/10">
        <div className="max-w-lg mx-auto text-center text-xs text-white/40">
          <p>Marcelo Colen Neves Soares • {SITE_CONFIG.oab}</p>
          <p className="mt-1">Especialista em Direito Antidiscriminatório</p>
        </div>
      </footer>
    </main>
  );
}
