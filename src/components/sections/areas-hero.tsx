import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout";
import { AREAS_DATA } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function AreasHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-navy overflow-hidden bg-editorial">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-navy-deep via-navy to-navy/95" />
      
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-bronze to-transparent opacity-60" />
      
      <Container className="relative z-10 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          {/* Editorial label */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-bronze" />
            <p className="text-bronze font-medium tracking-widest uppercase text-xs">
              Expertise Jurídica
            </p>
            <div className="w-8 h-px bg-bronze" />
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
            {AREAS_DATA.headline}
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            {AREAS_DATA.subheadline}
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-bronze text-white font-medium hover:bg-bronze-hover transition-colors"
            >
              Falar no WhatsApp
            </a>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-medium hover:bg-white/5 transition-colors"
            >
              Ir para Contato
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          {/* Microcopy */}
          <p className="text-xs text-white/40">
            Conteúdo informativo. Cada caso exige análise individualizada.
          </p>
        </div>
      </Container>
    </section>
  );
}
