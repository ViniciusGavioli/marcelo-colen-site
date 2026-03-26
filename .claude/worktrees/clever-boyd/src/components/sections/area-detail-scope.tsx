import { Container } from "@/components/layout";

interface ScopeItem {
  title: string;
  description: string;
}

interface AreaDetailScopeProps {
  scope: ScopeItem[];
  whenToSeek: string[];
}

export function AreaDetailScope({ scope, whenToSeek }: AreaDetailScopeProps) {
  return (
    <>
      {/* Scope Section */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-bronze" />
              <span className="text-bronze font-medium tracking-widest uppercase text-xs">
                Serviços
              </span>
              <div className="w-8 h-px bg-bronze" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">
              Escopo de Atuação
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Principais serviços e atividades desenvolvidas nesta área de atuação.
            </p>
          </div>

          {/* Scope Grid - Editorial */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline">
            {scope.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6"
              >
                <span className="font-serif text-3xl text-bronze/30 block mb-3">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-navy mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Legal Note */}
          <p className="text-center text-xs text-muted-foreground mt-10 max-w-xl mx-auto">
            Conteúdo informativo. O escopo específico de cada caso é definido
            após análise individualizada.
          </p>
        </Container>
      </section>

      {/* When to Seek Section */}
      <section className="py-20 md:py-28 bg-ice">
        <Container size="small">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-bronze" />
              <span className="text-bronze font-medium tracking-widest uppercase text-xs">
                Orientação
              </span>
              <div className="w-8 h-px bg-bronze" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">
              Quando Procurar Orientação
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Situações em que a orientação jurídica especializada pode ser necessária.
            </p>
          </div>

          {/* When to Seek List - Editorial */}
          <div className="bg-white border border-hairline p-8 md:p-10">
            <ul className="grid sm:grid-cols-2 gap-4">
              {whenToSeek.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <span className="w-1.5 h-1.5 bg-bronze mt-2 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Note */}
          <p className="text-center text-xs text-muted-foreground mt-8">
            Na dúvida, entre em contato. A análise inicial pode esclarecer se há
            necessidade de atuação jurídica.
          </p>
        </Container>
      </section>
    </>
  );
}
