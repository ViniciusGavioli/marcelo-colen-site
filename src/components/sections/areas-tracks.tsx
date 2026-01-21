import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout";
import { AREAS_DATA } from "@/lib/constants";

export function AreasTracks() {
  return (
    <section className="py-20 md:py-28 bg-white bg-paper">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-bronze" />
            <span className="text-bronze font-medium tracking-widest uppercase text-xs">
              Especialidades
            </span>
            <div className="w-8 h-px bg-bronze" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-navy mb-4">
            Trilhas de Atuação
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Atuo de forma especializada em áreas que exigem conhecimento
            técnico aprofundado e sensibilidade para situações complexas.
          </p>
        </div>

        {/* Tracks Grid - Editorial Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {AREAS_DATA.tracks.map((track, index) => (
            <Link
              key={track.slug}
              href={`/atuacao/${track.slug}`}
              className="group block"
            >
              <article className="relative bg-white border border-hairline hover:border-bronze/40 transition-all duration-300 h-full card-editorial">
                {/* Top decorative line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-bronze transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                
                <div className="p-8">
                  {/* Number indicator - editorial style */}
                  <div className="mb-6">
                    <span className="font-serif text-5xl text-bronze/20 group-hover:text-bronze/40 transition-colors">
                      0{index + 1}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-2xl text-navy mb-4 group-hover:text-bronze transition-colors">
                    {track.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {track.shortDescription}
                  </p>
                  
                  {/* Highlights with minimal markers */}
                  <ul className="text-sm text-muted-foreground space-y-2 mb-6 border-l border-hairline pl-4">
                    {track.highlights.map((highlight, i) => (
                      <li key={i} className="relative">
                        <span className="absolute -left-4 top-2 w-1.5 h-1.5 bg-bronze/40 rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Editorial link */}
                  <div className="flex items-center gap-2 text-bronze text-sm font-medium group-hover:gap-3 transition-all">
                    <span>Ver detalhes</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
