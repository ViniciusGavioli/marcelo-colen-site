"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, ChevronDown } from "lucide-react";
import { Container } from "@/components/layout";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/whatsapp";

const FAQ_ITEMS = [
  {
    question: "Quanto tempo tenho para denunciar racismo?",
    answer: "O crime de racismo é imprescritível, ou seja, não há prazo. Você pode denunciar a qualquer momento, dias, meses ou anos depois."
  },
  {
    question: "Preciso de provas para denunciar?",
    answer: "Você pode denunciar mesmo sem provas. A denúncia ativa a investigação. Documentos, fotos, vídeos e testemunhas ajudam, mas não são obrigatórios para começar o processo."
  },
  {
    question: "Posso denunciar de forma anônima?",
    answer: "Sim! Você pode ligar para o Disque 100 de forma anônima. Também pode registrar um B.O. de forma anônima em algumas delegacias especializadas."
  },
  {
    question: "Quanto custa buscar uma ação jurídica?",
    answer: "Você tem direito à assistência jurídica gratuita através da Defensoria Pública ou pode encontrar advogados parceiros que trabalham com vítimas de racismo."
  }
];

const STATS = [
  { number: "7 em 10", text: "pessoas negras já sofreram constrangimento por discriminação racial" },
  { number: "84%", text: "das pessoas pretas foram vítimas de discriminação racial no Brasil" },
  { number: "Imprescritível", text: "o crime de racismo não tem prazo para denúncia" }
];

const RIGHTS = [
  {
    title: "Injúria Racial é Racismo",
    description: "Ofensas por raça, cor ou etnia resultam em pena de 2 a 5 anos de reclusão desde 2023.",
    icon: "⚖️"
  },
  {
    title: "Tempo a Seu Favor",
    description: "Racismo é imprescritível. Denuncie a qualquer momento, sem prazo.",
    icon: "⏰"
  },
  {
    title: "Apoio Jurídico Gratuito",
    description: "Você tem direito a acompanhamento jurídico gratuito em todos os atos do processo.",
    icon: "👨‍⚖️"
  }
];

const STEPS = [
  {
    number: "1",
    title: "Documente Tudo",
    description: "Anote data, hora, local. Grave áudios, salve prints, peça contatos de testemunhas. Se houver agressão física, não limpe os ferimentos e vá a uma unidade de saúde ou IML."
  },
  {
    number: "2",
    title: "Registre um B.O.",
    description: "Vá a qualquer delegacia de Polícia Civil. Muitas possuem seções especializadas em crimes raciais. Você também pode registrar online em alguns estados."
  },
  {
    number: "3",
    title: "Use o Disque 100",
    description: "Ligue para 100 gratuitamente, 24h por dia. A denúncia pode ser anônima. O Disque 100 é o canal oficial de Direitos Humanos."
  },
  {
    number: "4",
    title: "Procure Apoio Jurídico",
    description: "Busque a Defensoria Pública, OAB da sua cidade ou organizações de apoio ao movimento negro. Procure também apoio psicológico para lidar com o trauma."
  }
];

export default function DefesaPage() {
  const [faqAberto, setFaqAberto] = useState<number | null>(0);

  return (
    <main>
      {/* ========== SEÇÃO HERO ========== */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#401A0C' }}>
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
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/wordpress/movimento.png"
            alt="Pessoas diversas"
            fill
            className="object-cover object-center"
          />
          <div 
            className="absolute inset-0"
            style={{ background: 'linear-gradient(90deg, rgba(64,26,12,0.95) 0%, rgba(64,26,12,0.7) 40%, rgba(64,26,12,0.3) 70%, transparent 100%)' }}
          />
        </div>

        <Container className="relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 
              style={{ color: '#FFFFFF', fontFamily: 'Georgia, serif', fontStyle: 'normal', fontSize: '3.5rem', fontWeight: '600', lineHeight: '1.2', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}
            >
              Você sofreu racismo.
            </h1>
            
            <p style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', color: '#FFFFFF', lineHeight: '1.4' }}>
              A culpa não é sua. Você não está sozinho(a).
            </p>

            <p style={{ fontSize: '1.125rem', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem' }}>
              Descubra como transformar a sua dor em justiça. Aqui, você encontrará a força e as ferramentas para lutar pelos seus direitos com segurança e apoio.
            </p>

            <div>
              <a
                href={getWhatsAppLink("Olá, Dr. Marcelo. Sofri racismo e gostaria de orientação sobre como proceder.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 font-semibold text-base rounded-md transition-all hover:scale-[1.05] active:scale-[0.95]"
                style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
              >
                <MessageCircle className="w-6 h-6" />
                CONHECER MEUS DIREITOS
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== SEÇÃO VALIDAÇÃO COM DADOS ========== */}
      <section className="relative px-4 py-20" style={{ backgroundColor: '#F8F9FA' }}>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 
                  className="text-3xl sm:text-4xl font-bold text-center"
                  style={{ color: '#0A192F', fontFamily: 'Georgia, serif' }}
                >
                  Sua Experiência Não é um Caso Isolado
                </h2>
                <p className="text-lg text-center" style={{ color: '#5B6676' }}>
                  É um padrão estrutural. Os números comprovam isso.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {STATS.map((stat, idx) => (
                  <div key={idx} className="text-center p-6 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D9E0E8' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#401A0C', marginBottom: '0.5rem' }}>
                      {stat.number}
                    </div>
                    <p style={{ color: '#333333', lineHeight: '1.6' }}>
                      {stat.text}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', borderLeft: '4px solid #401A0C', borderRadius: '0.5rem' }}>
                <p style={{ color: '#333333', lineHeight: '1.8', fontSize: '1.1rem' }}>
                  Você não está exagerando. Você não está imaginando. Você é uma vítima e tem o direito de lutar contra isso.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== SEÇÃO DIREITOS ========== */}
      <section className="relative px-4 py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 
                  className="text-3xl sm:text-4xl font-bold text-center"
                  style={{ color: '#0A192F', fontFamily: 'Georgia, serif' }}
                >
                  A Lei Está do Seu Lado
                </h2>
                <p className="text-lg text-center" style={{ color: '#5B6676' }}>
                  Racismo é Crime Inafiançável e Imprescritível
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {RIGHTS.map((right, idx) => (
                  <div key={idx} className="p-6 rounded-lg" style={{ backgroundColor: '#F8F9FA', border: '1px solid #D9E0E8' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                      {right.icon}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#0A192F', marginBottom: '0.75rem', fontFamily: 'Georgia, serif' }}>
                      {right.title}
                    </h3>
                    <p style={{ color: '#5B6676', lineHeight: '1.6' }}>
                      {right.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== SEÇÃO PASSO A PASSO ========== */}
      <section className="relative px-4 py-20" style={{ backgroundColor: '#F8F9FA' }}>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 
                  className="text-3xl sm:text-4xl font-bold text-center"
                  style={{ color: '#0A192F', fontFamily: 'Georgia, serif' }}
                >
                  Seu Guia Prático para Denunciar com Segurança
                </h2>
                <p className="text-lg text-center" style={{ color: '#5B6676' }}>
                  Sabemos que denunciar pode ser assustador. Criamos um passo a passo simples para você se sentir preparado(a).
                </p>
              </div>

              <div className="space-y-4">
                {STEPS.map((step, idx) => (
                  <div key={idx} className="flex gap-4 p-6 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D9E0E8' }}>
                    <div 
                      style={{ 
                        width: '3rem', 
                        height: '3rem', 
                        borderRadius: '50%', 
                        backgroundColor: '#401A0C', 
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        flexShrink: 0
                      }}
                    >
                      {step.number}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#0A192F', marginBottom: '0.5rem', fontFamily: 'Georgia, serif' }}>
                        {step.title}
                      </h3>
                      <p style={{ color: '#5B6676', lineHeight: '1.6' }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== SEÇÃO FAQ ========== */}
      <section className="relative px-4 py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              <div className="space-y-3">
                <h2 
                  className="text-3xl sm:text-4xl font-bold text-center"
                  style={{ color: '#0A192F', fontFamily: 'Georgia, serif' }}
                >
                  Dúvidas Frequentes
                </h2>
                <p className="text-base text-center" style={{ color: '#5B6676' }}>
                  Respostas às perguntas mais comuns sobre denúncia de racismo
                </p>
              </div>

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

      {/* ========== SEÇÃO CTA FINAL ========== */}
      <section 
        className="relative py-20 overflow-hidden"
        style={{ backgroundColor: '#401A0C' }}
      >
        {/* Background com imagem */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block opacity-20">
          <Image
            src="/images/wordpress/movimento.png"
            alt="Pessoas diversas"
            fill
            className="object-cover object-center"
          />
          <div 
            className="absolute inset-0"
            style={{ 
              background: 'linear-gradient(90deg, rgba(64,26,12,1) 0%, rgba(64,26,12,0.5) 50%, rgba(64,26,12,0.3) 100%)' 
            }}
          />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
              style={{ color: '#FFFFFF', fontFamily: 'Georgia, serif' }}
            >
              Dê o Primeiro Passo Rumo à Justiça
            </h2>

            <p 
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.85)' }}
            >
              Sua voz tem poder. Lutar contra o racismo é uma batalha de todos, mas começa com a sua coragem de não se calar. Use as ferramentas e o conhecimento que você adquiriu aqui para dar o seu primeiro passo.
            </p>

            <div className="pt-4">
              <a
                href={getWhatsAppLink("Olá, Dr. Marcelo. Sofri racismo e gostaria de orientação jurídica.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 font-semibold text-base rounded-md transition-all hover:scale-105 active:scale-95"
                style={{ 
                  backgroundColor: '#25D366', 
                  color: '#FFFFFF',
                }}
              >
                <MessageCircle className="w-5 h-5" />
                FALAR COM O DR. MARCELO
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
