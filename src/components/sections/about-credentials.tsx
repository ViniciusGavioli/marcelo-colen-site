import { Container } from "@/components/layout";
import { MARCELO_PROFILE } from "@/lib/constants";

export function AboutCredentials() {
  return (
    <section className="py-20 md:py-28 bg-ice bg-paper">
      <Container size="small">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-bronze" />
            <span className="text-bronze font-medium tracking-widest uppercase text-xs">
              Formação
            </span>
            <div className="w-8 h-px bg-bronze" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">
            Credenciais & Formação
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Trajetória acadêmica e institucional construída com dedicação ao
            aprimoramento constante.
          </p>
        </div>

        {/* Credentials List - Editorial */}
        <div className="bg-white border border-hairline divide-y divide-hairline">
          {MARCELO_PROFILE.credentials.map((credential, index) => (
            <div key={index} className="p-6 md:p-8 flex gap-6">
              {/* Number indicator */}
              <span className="font-serif text-3xl text-bronze/30 shrink-0 hidden sm:block">
                0{index + 1}
              </span>
              <div className="flex-1">
                <p className="text-xs text-bronze font-medium uppercase tracking-widest mb-2">
                  {credential.type}
                </p>
                <h3 className="font-serif text-lg text-navy mb-1">
                  {credential.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {credential.institution}
                  {credential.year && ` • ${credential.year}`}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          Informações detalhadas disponíveis mediante solicitação e atualização
          junto ao escritório.
        </p>
      </Container>
    </section>
  );
}
