import { Container } from "@/components/layout";
import { MARCELO_PROFILE } from "@/lib/constants";

export function AboutValues() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-bronze" />
            <span className="text-bronze font-medium tracking-widest uppercase text-xs">
              Princípios
            </span>
            <div className="w-8 h-px bg-bronze" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">
            Valores
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Princípios que orientam minha atuação profissional e o relacionamento
            com cada cliente.
          </p>
        </div>

        {/* Values Grid - Editorial */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline">
          {MARCELO_PROFILE.values.map((value, index) => (
            <div
              key={value.title}
              className="bg-white p-8 text-center group"
            >
              <span className="font-serif text-4xl text-bronze/20 block mb-4">
                0{index + 1}
              </span>
              <h3 className="font-serif text-xl text-navy mb-3">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
