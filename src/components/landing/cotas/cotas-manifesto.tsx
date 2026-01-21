"use client";

import { Container } from "@/components/layout";
import { COTAS_PAGE } from "@/lib/cotas-data";

export function CotasManifesto() {
  const { manifesto } = COTAS_PAGE;

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: '#0A192F' }}>
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Quote icon */}
          <div 
            className="text-6xl font-serif mb-8"
            style={{ color: 'rgba(197, 160, 89, 0.3)' }}
          >
            "
          </div>

          {/* Headline */}
          <h2 
            className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium leading-relaxed mb-10"
            style={{ color: '#FFFFFF' }}
          >
            {manifesto.headline}
          </h2>

          {/* Decorative line */}
          <div 
            className="w-24 h-px mx-auto mb-10"
            style={{ backgroundColor: '#C5A059' }}
          />

          {/* Content */}
          <p 
            className="text-lg leading-relaxed"
            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
          >
            {manifesto.content}
          </p>
        </div>
      </Container>
    </section>
  );
}
