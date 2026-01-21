import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout";
import { getWhatsAppLinkWithContext } from "@/lib/whatsapp";

interface AreaDetailHeroProps {
  title: string;
  subtitle: string;
  description: string;
  values: readonly string[];
}

export function AreaDetailHero({
  title,
  subtitle,
  description,
  values,
}: AreaDetailHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-navy overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-navy-deep via-navy to-navy/95" />
      
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-bronze to-transparent opacity-60" />
      
      <Container className="relative z-10 py-20 md:py-28">
        {/* Back Link */}
        <Link
          href="/atuacao"
          className="inline-flex items-center gap-2 text-white/50 hover:text-bronze mb-8 transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para Áreas de Atuação
        </Link>
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Editorial label */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-bronze" />
              <span className="text-bronze font-medium tracking-widest uppercase text-xs">
                Área de Atuação
              </span>
            </div>
            
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-[1.1]">
              {title}
            </h1>
            
            <p className="text-lg md:text-xl text-bronze font-medium">
              {subtitle}
            </p>
            
            <p className="text-white/70 leading-relaxed max-w-2xl">
              {description}
            </p>
            
            {/* Values */}
            <ul className="space-y-3 border-l border-bronze/30 pl-6 mt-8">
              {values.map((value, index) => (
                <li key={index} className="text-white/80 relative">
                  <span className="absolute -left-6 top-2 w-2 h-px bg-bronze" />
                  {value}
                </li>
              ))}
            </ul>
            
            {/* CTA */}
            <div className="pt-6">
              <a
                href={getWhatsAppLinkWithContext(title)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-bronze text-white font-medium hover:bg-bronze-hover transition-colors"
              >
                Falar sobre {title}
              </a>
            </div>
          </div>
          
          {/* Visual Element - Abstract editorial */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-bronze/20" />
              <div className="bg-white/5 aspect-square flex items-center justify-center relative border border-white/10">
                <span className="font-serif text-8xl text-bronze/20">§</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
