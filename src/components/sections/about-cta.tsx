import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function AboutCta() {
  return (
    <section className="py-20 md:py-28">
      <Container size="small">
        <div className="bg-navy relative overflow-hidden bg-editorial">
          {/* Decorative line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-bronze/40" />
          
          <div className="p-10 md:p-14 text-center text-white relative">
            {/* Editorial label */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-bronze" />
              <p className="text-bronze font-medium tracking-widest uppercase text-xs">
                Entre em Contato
              </p>
              <div className="w-8 h-px bg-bronze" />
            </div>
            
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
              Se você precisa de orientação,{" "}
              <span className="italic text-bronze">fale comigo</span>.
            </h2>
            
            <p className="text-white/60 mb-10 max-w-lg mx-auto">
              Estou à disposição para entender sua situação e orientar sobre os
              melhores caminhos dentro do ordenamento jurídico.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-bronze"
              >
                Falar no WhatsApp
              </a>
              <Link
                href="/contato"
                className="btn-ghost-white"
              >
                Formulário de Contato
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Microcopy */}
            <p className="text-xs text-white/40">
              Atendimento mediante agendamento. Opções presencial e online disponíveis.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
