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
    <section className="py-20 lg:py-28" style={{ backgroundColor: '#F5EEE0' }}>
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px" style={{ backgroundColor: '#C5A059' }} />
            <p 
              className="font-medium tracking-widest uppercase text-xs"
              style={{ color: '#C5A059' }}
            >
              Tire suas duvidas
            </p>
            <div className="w-12 h-px" style={{ backgroundColor: '#C5A059' }} />
          </div>

          {/* Headline */}
          <h2 
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight"
            style={{ color: '#0A192F' }}
          >
            FAQ - Perguntas Frequentes
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faq.map((item, index) => (
            <div 
              key={index}
              className="overflow-hidden transition-all duration-300"
              style={{ 
                backgroundColor: '#FFFFFF',
                border: openIndex === index ? '1px solid rgba(197, 160, 89, 0.3)' : '1px solid rgba(10, 25, 47, 0.1)',
                boxShadow: openIndex === index ? '0 4px 20px rgba(197, 160, 89, 0.1)' : 'none'
              }}
            >
              {/* Question */}
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors"
                style={{ 
                  backgroundColor: openIndex === index ? 'rgba(197, 160, 89, 0.05)' : 'transparent'
                }}
              >
                <span 
                  className="font-serif text-lg font-medium pr-4"
                  style={{ color: '#0A192F' }}
                >
                  {item.question}
                </span>
                <span 
                  className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-colors"
                  style={{ 
                    backgroundColor: openIndex === index ? '#C5A059' : 'rgba(10, 25, 47, 0.05)',
                    color: openIndex === index ? '#FFFFFF' : '#0A192F'
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
                    style={{ color: 'rgba(10, 25, 47, 0.8)' }}
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
            style={{ color: 'rgba(10, 25, 47, 0.7)' }}
          >
            Ainda tem duvidas? Fale diretamente comigo.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5531972206996&text=Ol%C3%A1%21+Tenho+uma+d%C3%BAvida+sobre+heteroidentifica%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg font-medium transition-colors hover:underline"
            style={{ color: '#C5A059' }}
          >
            Falar no WhatsApp
            <span>→</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
