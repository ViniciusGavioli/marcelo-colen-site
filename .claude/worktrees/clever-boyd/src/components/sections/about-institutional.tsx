import Link from "next/link";
import { Instagram, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout";
import { MARCELO_PROFILE } from "@/lib/constants";

export function AboutInstitutional() {
  return (
    <section className="py-20 md:py-28 bg-white bg-paper">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-bronze" />
            <span className="text-bronze font-medium tracking-widest uppercase text-xs">
              Presença
            </span>
            <div className="w-8 h-px bg-bronze" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">
            Atuação Institucional & Conteúdo
          </h2>
        </div>

        {/* Two Columns - Editorial */}
        <div className="grid md:grid-cols-2 gap-px bg-hairline">
          {/* Institutional */}
          <div className="bg-white p-8 md:p-10">
            <span className="font-serif text-4xl text-bronze/20 block mb-4">01</span>
            <h3 className="font-serif text-xl text-navy mb-6">
              {MARCELO_PROFILE.institutional.title}
            </h3>
            <ul className="space-y-3 border-l border-hairline pl-4">
              {MARCELO_PROFILE.institutional.items.map((item, index) => (
                <li key={index} className="text-muted-foreground text-sm relative">
                  <span className="absolute -left-4 top-2 w-1.5 h-1.5 bg-bronze/40 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Content */}
          <div className="bg-white p-8 md:p-10">
            <span className="font-serif text-4xl text-bronze/20 block mb-4">02</span>
            <h3 className="font-serif text-xl text-navy mb-6">
              {MARCELO_PROFILE.content.title}
            </h3>
            <ul className="space-y-3 border-l border-hairline pl-4 mb-6">
              {MARCELO_PROFILE.content.items.map((item, index) => (
                <li key={index} className="text-muted-foreground text-sm relative">
                  <span className="absolute -left-4 top-2 w-1.5 h-1.5 bg-bronze/40 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Instagram & Content Links */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={MARCELO_PROFILE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-bronze font-medium hover:underline"
              >
                <Instagram className="w-4 h-4" />
                {MARCELO_PROFILE.instagram}
              </a>
              <Link
                href="/conteudos"
                className="inline-flex items-center gap-2 text-sm text-navy font-medium hover:text-bronze transition-colors"
              >
                Ver Conteúdos
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
