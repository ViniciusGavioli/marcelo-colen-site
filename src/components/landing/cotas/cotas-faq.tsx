"use client";

import { useState } from "react";
import { Container } from "@/components/layout";
import { COTAS_PAGE } from "@/lib/cotas-data";
import { ChevronDown, ChevronUp } from "lucide-react";

export function CotasFaq() {
  const { faq } = COTAS_PAGE;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: '#8B4513' }}>
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          {/* Headline */}
          <h2 
            className="text-3xl sm:text-4xl font-bold leading-tight"
            style={{ color: '#FFFFFF' }}
          >
            FAQ - Perguntas Frequentes
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faq.map((item, index) => (
            <div 
              key={index}
              className="overflow-hidden transition-all duration-300 rounded-lg"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: openIndex === index ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {/* Question */}
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors"
                style={{ 
                  backgroundColor: openIndex === index ? 'rgba(255,255,255,0.05)' : 'transparent'
                }}
              >
                <span 
                  className="text-lg font-semibold pr-4"
                  style={{ color: '#FFFFFF' }}
                >
                  {item.question}
                </span>
                <span 
                  className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-colors"
                  style={{ 
                    backgroundColor: openIndex === index ? '#4A9B4A' : 'rgba(255,255,255,0.1)',
                    color: '#FFFFFF'
                  }}
                >
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </span>
              </button>

              {/* Answer */}
              <div 
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === index ? '500px' : '0',
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <div className="px-6 pb-6">
                  <p 
                    className="leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.85)' }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p 
            className="text-lg mb-4"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            Ainda tem dúvidas? Fale diretamente comigo.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5531972206996&text=Ol%C3%A1%21+Tenho+uma+d%C3%BAvida+sobre+heteroidentifica%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: '#4A9B4A' }}
          >
            Falar no WhatsApp
            <span>→</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
