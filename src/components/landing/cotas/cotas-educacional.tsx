"use client";

import { Container } from "@/components/layout";
import { COTAS_PAGE } from "@/lib/cotas-data";
import { Scale, Heart, Users, BookOpen } from "lucide-react";

export function CotasEducacional() {
  const { cotasExplainer, heteroExplainer } = COTAS_PAGE;

  return (
    <>
      {/* ============================================ */}
      {/* SEÇÃO: COTAS RACIAIS NO BRASIL */}
      {/* ============================================ */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#0A192F' }}>
        <Container>
          <div className="max-w-4xl mx-auto">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px" style={{ backgroundColor: '#C5A059' }} />
              <p 
                className="font-medium tracking-widest uppercase text-xs"
                style={{ color: '#C5A059' }}
              >
                {cotasExplainer.eyebrow}
              </p>
            </div>

            {/* Headline */}
            <h2 
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-10"
              style={{ color: '#FFFFFF' }}
            >
              {cotasExplainer.headline}
            </h2>

            {/* Content */}
            <p 
              className="text-lg lg:text-xl leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.85)' }}
            >
              {cotasExplainer.content}
            </p>

            {/* Icons row */}
            <div className="flex items-center justify-center gap-12 mt-12 pt-12 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
              <div className="text-center">
                <Scale className="w-10 h-10 mx-auto mb-3" style={{ color: '#C5A059' }} />
                <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Igualdade</p>
              </div>
              <div className="text-center">
                <Heart className="w-10 h-10 mx-auto mb-3" style={{ color: '#C5A059' }} />
                <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Dignidade</p>
              </div>
              <div className="text-center">
                <Users className="w-10 h-10 mx-auto mb-3" style={{ color: '#C5A059' }} />
                <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Representatividade</p>
              </div>
              <div className="text-center">
                <BookOpen className="w-10 h-10 mx-auto mb-3" style={{ color: '#C5A059' }} />
                <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Reparação</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================ */}
      {/* SEÇÃO: O QUE É HETEROIDENTIFICAÇÃO */}
      {/* ============================================ */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#F8F9FA' }}>
        <Container>
          <div className="max-w-4xl mx-auto">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px" style={{ backgroundColor: '#C5A059' }} />
              <p 
                className="font-medium tracking-widest uppercase text-xs"
                style={{ color: '#C5A059' }}
              >
                {heteroExplainer.eyebrow}
              </p>
            </div>

            {/* Headline */}
            <h2 
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-10"
              style={{ color: '#0A192F' }}
            >
              {heteroExplainer.headline}
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6">
              {heteroExplainer.paragraphs.map((paragraph, index) => (
                <p 
                  key={index}
                  className="text-lg leading-relaxed"
                  style={{ color: 'rgba(10, 25, 47, 0.8)' }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Highlight box */}
            <div 
              className="mt-10 p-6 border-l-4"
              style={{ 
                borderColor: '#C5A059',
                backgroundColor: 'rgba(197, 160, 89, 0.08)'
              }}
            >
              <p 
                className="font-serif text-lg italic"
                style={{ color: '#0A192F' }}
              >
                A banca de heteroidentificação deve observar rigorosamente o contraditório, a ampla defesa e os princípios da legalidade e da dignidade da pessoa humana.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
