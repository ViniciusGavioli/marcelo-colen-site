import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/layout";
import { MARCELO_PROFILE } from "@/lib/constants";

export function AboutFaq() {
  return (
    <section className="py-20 md:py-28 bg-ice">
      <Container size="small">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-bronze" />
            <span className="text-bronze font-medium tracking-widest uppercase text-xs">
              Dúvidas
            </span>
            <div className="w-8 h-px bg-bronze" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Respostas para as dúvidas mais comuns sobre atendimento e atuação.
          </p>
        </div>

        {/* FAQ Accordion - Editorial */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {MARCELO_PROFILE.faq.map((item, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="bg-white border border-hairline px-6 data-[state=open]:border-bronze/40 transition-colors"
            >
              <AccordionTrigger className="text-left font-serif text-navy hover:no-underline py-5">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
