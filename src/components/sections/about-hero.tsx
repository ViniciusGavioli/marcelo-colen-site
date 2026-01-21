import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout";
import { PortraitCard } from "@/components/ui/portrait";
import { SITE_CONFIG, MARCELO_PROFILE } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-navy overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-navy-deep via-navy to-navy/95" />
      
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-bronze to-transparent opacity-60" />
      
      <Container className="relative z-10 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Editorial label */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-bronze" />
              <p className="text-bronze font-medium tracking-widest uppercase text-xs">
                {SITE_CONFIG.oab} • {MARCELO_PROFILE.yearsExperience}+ Anos de Experiência
              </p>
            </div>
            
            {/* Name & Title */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1]">
              Dr. {MARCELO_PROFILE.name}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 font-light max-w-xl">
              {MARCELO_PROFILE.headline}
            </p>
            
            {/* Positioning Bullets */}
            <ul className="space-y-3 border-l border-bronze/30 pl-6 mt-8">
              {MARCELO_PROFILE.positioning.map((item, index) => (
                <li key={index} className="text-white/80 relative">
                  <span className="absolute -left-6 top-2 w-2 h-px bg-bronze" />
                  {item}
                </li>
              ))}
            </ul>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
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
          </div>
          
          {/* Portrait & Summary Card */}
          <div className="lg:col-span-5 space-y-8">
            {/* Portrait */}
            <PortraitCard
              src="/images/marcelo/about.jpg"
              alt="Dr. Marcelo Colen"
              priority
              sizes="(max-width: 1024px) 100vw, 400px"
            />
            
            {/* Summary Card */}
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-bronze/20" />
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-bronze" />
                  <span className="text-bronze text-xs font-medium uppercase tracking-widest">
                    Resumo Profissional
                  </span>
                </div>
                <p className="text-white/70 leading-relaxed mb-6">
                  {MARCELO_PROFILE.summary}
                </p>
                
                {/* Badges */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                  {MARCELO_PROFILE.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1 text-xs border border-bronze/40 text-bronze bg-bronze/5"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
