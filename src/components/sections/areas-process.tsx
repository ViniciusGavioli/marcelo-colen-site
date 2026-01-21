import { MessageCircle, FileText, Target, RefreshCw } from "lucide-react";
import { Container } from "@/components/layout";
import { AREAS_DATA } from "@/lib/constants";

const stepIcons = [MessageCircle, FileText, Target, RefreshCw];

export function AreasProcess() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-1 bg-bronze rounded-full" />
            <span className="text-sm font-medium uppercase tracking-wider text-bronze">
              Processo
            </span>
            <div className="w-8 h-1 bg-bronze rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Como Funciona o Atendimento
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Um processo claro e organizado para garantir que você receba a
            orientação adequada em cada etapa.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {AREAS_DATA.process.map((item, index) => {
            const IconComponent = stepIcons[index];
            return (
              <div key={item.step} className="relative">
                {/* Connector Line (desktop) */}
                {index < AREAS_DATA.process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-0 h-0.5 bg-border" />
                )}
                
                <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg hover:border-bronze/30 transition-all duration-300 relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-bronze text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {item.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-bronze/10 rounded-full flex items-center justify-center mx-auto mb-4 mt-2">
                    <IconComponent className="w-8 h-8 text-bronze" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
