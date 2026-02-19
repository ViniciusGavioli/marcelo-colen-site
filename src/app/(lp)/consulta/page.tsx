"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, ChevronDown, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout";
import { SITE_CONFIG } from "@/lib/constants";
import { getDirectWhatsAppLink } from "@/lib/whatsapp";

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

const FORM_QUESTIONS = [
  {
    id: "nome",
    label: "Qual o seu nome?",
    type: "text",
    placeholder: "Seu nome completo",
    required: true
  },
  {
    id: "vestibular",
    label: "Qual vestibular / concurso você está participando?",
    type: "text",
    placeholder: "Ex: UFMG 2024, ENEM, Concurso Público...",
    required: true
  },
  {
    id: "dataResultado",
    label: "Quando recebeu o resultado da comissão de heteroidentificação?",
    type: "text",
    placeholder: "Ex: 15/01/2025",
    required: true
  },
  {
    id: "recurso",
    label: "Apresentou recurso administrativo?",
    type: "text",
    placeholder: "Ex: Sim ou Não",
    required: true
  }
];

export default function ConsultaPage() {
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const [passoAtual, setPassoAtual] = useState(0);
  const [erro, setErro] = useState("");
  const [faqAberto, setFaqAberto] = useState<number | null>(0);

  const handleInputChange = (id: string, valor: string) => {
    setRespostas(prev => ({ ...prev, [id]: valor }));
    setErro("");
  };

  const handleProximo = () => {
    const perguntaAtual = FORM_QUESTIONS[passoAtual];
    if (!respostas[perguntaAtual.id]?.trim()) {
      setErro("Por favor, responda a pergunta antes de continuar.");
      return;
    }
    
    if (passoAtual < FORM_QUESTIONS.length - 1) {
      setPassoAtual(passoAtual + 1);
      setErro("");
    }
  };

  const handleVoltar = () => {
    if (passoAtual > 0) {
      setPassoAtual(passoAtual - 1);
      setErro("");
    }
  };

  const montarMensagem = (): string => {
    const linhas = [
      `Olá! Meu nome é ${respostas.nome}. Preciso de orientação sobre meu caso de heteroidentificação.\n`,

      `*Vestibular/Concurso:* ${respostas.vestibular}`,
      `*Data do Resultado:* ${respostas.dataResultado}`,
      `*Apresentou Recurso:* ${respostas.recurso}`,
      "\nPreciso de orientação sobre os próximos passos."
    ];
    return linhas.join("\n");
  };

  const handleEnviar = () => {
    const mensagem = montarMensagem();
    const url = getDirectWhatsAppLink(mensagem);
    console.log("Abrindo WhatsApp:", url);
    window.open(url, "_blank");
  };

  const todoPreenchido = FORM_QUESTIONS.every(q => respostas[q.id]?.trim());

  return (
    <main>
      {/* ========== SEÇÃO HERO - Fundo Escuro ========== */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#3D2817' }}>
        {/* Grafismo decorativo */}
        <div className="absolute top-0 left-0 right-0 opacity-[0.06] z-0">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <div key={`g1-${i}`} className="relative h-12" style={{ width: '20%' }}>
                <Image src="/images/wordpress/grafismo-sabedoria.png" alt="" fill className="object-cover" style={{ filter: 'invert(1)' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Background com imagem */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/wordpress/movimento.png"
            alt="Pessoas diversas"
            fill
            className="object-cover object-center"
          />
          <div 
            className="absolute inset-0"
            style={{ background: 'linear-gradient(90deg, rgba(61,40,23,0.95) 0%, rgba(61,40,23,0.7) 40%, rgba(61,40,23,0.3) 70%, transparent 100%)' }}
          />
        </div>

        <Container className="relative z-10 py-8">
          <div className="max-w-3xl">
            <h1 
              style={{ color: '#FFFFFF', fontFamily: 'Georgia, serif', fontStyle: 'normal', fontSize: '3.5rem', fontWeight: '600', lineHeight: '1.1', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}
            >
              Precisa de ajuda?
            </h1>
            
            <p style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: '#FFFFFF', lineHeight: '1.2' }}>
              Me conte o essencial (em 4 perguntas) ou fale direto no WhatsApp.
            </p>

            <p style={{ fontSize: '1.125rem', lineHeight: '1.5', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '1rem' }}>
              Vou entender seu caso e te orientar sobre os próximos passos (recurso administrativo e, quando cabível, medidas judiciais).
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <a
                href={getDirectWhatsAppLink("Olá! Quero falar direto no WhatsApp sobre meu caso de heteroidentificação.")}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  backgroundColor: '#25D366',
                  color: '#0B1220',
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp do escritório (sem formulário)
              </a>

              <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem', lineHeight: 1.2 }}>
                Prefere agilizar? Responda as 4 perguntas abaixo.
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== SEÇÃO FORMULÁRIO INTERATIVO - Fundo Claro ========== */}
      <section className="relative px-4 py-20" style={{ backgroundColor: '#F8F9FA' }}>
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-8">
              {/* Heading da seção */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 
                    className="text-3xl font-bold"
                    style={{ color: '#0A192F', fontFamily: 'Georgia, serif' }}
                  >
                    Formulário de Análise
                  </h2>
                  <span className="text-sm font-semibold" style={{ color: '#5B6676' }}>
                    Passo {passoAtual + 1} de {FORM_QUESTIONS.length}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-[#25D366] h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((passoAtual + 1) / FORM_QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Card do formulário */}
              <div 
                className="rounded-xl p-8 border"
                style={{ backgroundColor: '#FFFFFF', border: '1px solid #D9E0E8' }}
              >
                {/* Pergunta */}
                <div className="mb-8">
                  <label className="block text-lg font-semibold mb-4" style={{ color: '#0A192F' }}>
                    {FORM_QUESTIONS[passoAtual].label}
                  </label>

                  {FORM_QUESTIONS[passoAtual].type === "text" ? (
                    <input
                      type="text"
                      value={respostas[FORM_QUESTIONS[passoAtual].id] || ""}
                      onChange={(e) => handleInputChange(FORM_QUESTIONS[passoAtual].id, e.target.value)}
                      placeholder={FORM_QUESTIONS[passoAtual].placeholder}
                      className="w-full p-4 rounded-lg text-base border focus:outline-none"
                      style={{ 
                        backgroundColor: '#F3F6F9',
                        borderColor: erro ? '#ef4444' : '#D9E0E8',
                        color: '#0A192F'
                      }}
                    />
                  ) : (
                    <textarea
                      value={respostas[FORM_QUESTIONS[passoAtual].id] || ""}
                      onChange={(e) => handleInputChange(FORM_QUESTIONS[passoAtual].id, e.target.value)}
                      placeholder={FORM_QUESTIONS[passoAtual].placeholder}
                      className="w-full h-32 p-4 rounded-lg text-base resize-none focus:outline-none border"
                      style={{ 
                        backgroundColor: '#F3F6F9',
                        borderColor: erro ? '#ef4444' : '#D9E0E8',
                        color: '#0A192F'
                      }}
                    />
                  )}
                </div>

                {/* Erro */}
                {erro && (
                  <div 
                    className="mb-6 p-4 rounded-lg text-base"
                    style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444', color: '#dc2626' }}
                  >
                    {erro}
                  </div>
                )}

                {/* Botões de navegação */}
                <div className="flex gap-4 justify-between">
                  <button
                    onClick={handleVoltar}
                    disabled={passoAtual === 0}
                    className="px-8 py-3 font-semibold text-base rounded-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: passoAtual === 0 ? '#E5E7EB' : '#D9E0E8', color: '#0A192F' }}
                  >
                    ← Voltar
                  </button>

                  {passoAtual < FORM_QUESTIONS.length - 1 ? (
                    <button
                      onClick={handleProximo}
                      className="px-8 py-3 font-semibold text-base rounded-md transition-all hover:scale-[1.02] active:scale-[0.98]"
                      style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
                    >
                      Próximo →
                    </button>
                  ) : (
                    <button
                      onClick={handleEnviar}
                      className="inline-flex items-center justify-center gap-3 px-10 py-3 font-semibold text-base rounded-md transition-all hover:scale-[1.02] active:scale-[0.98]"
                      style={{ backgroundColor: '#4A9B4A', color: '#FFFFFF' }}
                    >
                      <MessageCircle className="w-5 h-5" />
                      Enviar para triagem
                    </button>
                  )}
                </div>
              </div>

              {/* Preview da mensagem */}
              {todoPreenchido && (
                <div 
                  className="rounded-xl p-6 border"
                  style={{ backgroundColor: '#E8F5E9', borderColor: '#25D366' }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5" style={{ color: '#25D366' }} />
                    <span className="font-semibold" style={{ color: '#1B5E20' }}>
                      Sua mensagem está pronta!
                    </span>
                  </div>
                  <p className="text-sm whitespace-pre-wrap" style={{ color: '#2E7D32' }}>
                    {montarMensagem()}
                  </p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* ========== SEÇÃO FAQ - Fundo Branco ========== */}
      <section className="relative px-4 py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              {/* Heading */}
              <div className="space-y-3">
                <h2 
                  className="text-3xl sm:text-4xl font-bold text-center"
                  style={{ color: '#0A192F', fontFamily: 'Georgia, serif' }}
                >
                  Dúvidas Frequentes
                </h2>
                <p className="text-base text-center" style={{ color: '#5B6676' }}>
                  Perguntas mais comuns sobre recursos administrativos e ações judiciais
                </p>
              </div>

              {/* FAQ Accordion */}
              <div className="space-y-3">
                {FAQ_ITEMS.map((item, index) => (
                  <div 
                    key={index}
                    className="border rounded-lg overflow-hidden transition-all"
                    style={{ 
                      borderColor: '#D9E0E8',
                      backgroundColor: faqAberto === index ? '#F8F9FA' : '#FFFFFF'
                    }}
                  >
                    <button
                      onClick={() => setFaqAberto(faqAberto === index ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-base pr-4" style={{ color: '#0A192F' }}>
                        {item.question}
                      </span>
                      <ChevronDown 
                        className={`w-5 h-5 transition-transform flex-shrink-0 ${
                          faqAberto === index ? "rotate-180" : ""
                        }`} 
                        style={{ color: '#5B6676' }}
                      />
                    </button>
                    
                    {faqAberto === index && (
                      <div 
                        className="px-5 pb-5 text-base leading-relaxed border-t"
                        style={{ color: '#333333', borderColor: '#D9E0E8' }}
                      >
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
