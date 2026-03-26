"use client";

import { Container } from "@/components/layout";
import { COTAS_PAGE } from "@/lib/cotas-data";
import { Zap, DollarSign, FileCheck, Target } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "⚡": <Zap className="w-8 h-8" />,
  "💰": <DollarSign className="w-8 h-8" />,
  "📋": <FileCheck className="w-8 h-8" />,
  "🎯": <Target className="w-8 h-8" />,
};

export function CotasWhyRecurso() {
  const { whyRecurso } = COTAS_PAGE;

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: '#FFFFFF' }}>
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px" style={{ backgroundColor: '#C5A059' }} />
            <p 
              className="font-medium tracking-widest uppercase text-xs"
              style={{ color: '#C5A059' }}
            >
              {whyRecurso.eyebrow}
            </p>
            <div className="w-12 h-px" style={{ backgroundColor: '#C5A059' }} />
          </div>

          {/* Headline */}
          <h2 
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-8"
            style={{ color: '#0A192F' }}
          >
            {whyRecurso.headline}
          </h2>

          {/* Content */}
          <p 
            className="text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto"
            style={{ color: 'rgba(10, 25, 47, 0.8)' }}
          >
            {whyRecurso.content}
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyRecurso.benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-8 transition-all duration-300 hover:-translate-y-1"
              style={{ 
                backgroundColor: '#F8F9FA',
                border: '1px solid rgba(10, 25, 47, 0.08)'
              }}
            >
              {/* Icon */}
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                style={{ 
                  backgroundColor: 'rgba(197, 160, 89, 0.1)',
                  color: '#C5A059'
                }}
              >
                {iconMap[benefit.icon] || <Zap className="w-8 h-8" />}
              </div>

              {/* Title */}
              <h3 
                className="font-serif text-xl font-medium mb-3"
                style={{ color: '#0A192F' }}
              >
                {benefit.title}
              </h3>

              {/* Description */}
              <p 
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(10, 25, 47, 0.7)' }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparative callout */}
        <div 
          className="mt-16 p-8 text-center"
          style={{ backgroundColor: '#0A192F' }}
        >
          <div className="grid sm:grid-cols-3 gap-8 items-center">
            <div>
              <p className="text-4xl font-serif font-medium mb-2" style={{ color: '#C5A059' }}>3-10</p>
              <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>dias úteis<br />recurso administrativo</p>
            </div>
            <div className="hidden sm:block">
              <p className="text-lg font-medium" style={{ color: '#C5A059' }}>vs</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-medium mb-2" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>Meses</p>
              <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>ação judicial<br />(quando necessária)</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
