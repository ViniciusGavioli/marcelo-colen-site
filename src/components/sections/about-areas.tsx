import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout";
import { MARCELO_PROFILE } from "@/lib/constants";

export function AboutAreas() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-bronze" />
            <span className="text-bronze font-medium tracking-widest uppercase text-xs">
              Áreas de Atuação
            </span>
            <div className="w-8 h-px bg-bronze" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">
            Minha Atuação
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Atuo de forma especializada em áreas que exigem conhecimento técnico
            aprofundado e sensibilidade para lidar com situações complexas.
          </p>
        </div>

        {/* Cards Grid - Editorial */}
        <div className="grid md:grid-cols-3 gap-8">
          {MARCELO_PROFILE.areas.map((area, index) => (
            <article
              key={area.title}
              className="relative bg-white border border-hairline p-8"
            >
              {/* Number indicator */}
              <span className="font-serif text-5xl text-bronze/20 block mb-6">
                0{index + 1}
              </span>
              
              <h3 className="font-serif text-2xl text-navy mb-4">{area.title}</h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {area.description}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/atuacao"
            className="inline-flex items-center gap-2 text-bronze font-medium border-b-2 border-bronze pb-1 hover:gap-3 transition-all"
          >
            Ver todas as áreas em detalhes
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Legal Note */}
        <p className="text-center text-xs text-muted-foreground mt-8 max-w-xl mx-auto">
          O conteúdo acima é informativo. Cada caso possui particularidades que
          exigem análise individualizada por profissional habilitado.
        </p>
      </Container>
    </section>
  );
}
