import { Container } from "@/components/layout";
import { MARCELO_PROFILE } from "@/lib/constants";

export function AboutTimeline() {
  return (
    <section className="py-20 md:py-28 bg-ice bg-paper">
      <Container size="small">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-bronze" />
            <span className="text-bronze font-medium tracking-widest uppercase text-xs">
              Trajetória
            </span>
            <div className="w-8 h-px bg-bronze" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">
            Linha do Tempo
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Principais marcos da trajetória profissional.
          </p>
        </div>

        {/* Timeline - Editorial */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-bronze/30 md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {MARCELO_PROFILE.timeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-start gap-8 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-bronze md:-translate-x-1/2 z-10" />

                  {/* Content Card */}
                  <div
                    className={`ml-16 md:ml-0 md:w-1/2 ${
                      isEven ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                  >
                    <div className="bg-white border border-hairline p-6 card-editorial">
                      <span className="font-serif text-xl text-bronze block mb-2">
                        {item.year}
                      </span>
                      <h3 className="font-serif text-lg text-navy mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-xs text-muted-foreground mt-12">
          Datas e detalhes sujeitos a confirmação e atualização.
        </p>
      </Container>
    </section>
  );
}
