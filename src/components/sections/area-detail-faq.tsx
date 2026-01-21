import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/layout";

interface FaqItem {
  question: string;
  answer: string;
}

interface AreaDetailFaqProps {
  faq: FaqItem[];
  areaTitle: string;
}

export function AreaDetailFaq({ faq, areaTitle }: AreaDetailFaqProps) {
  return (
    <section className="py-16 md:py-24">
      <Container size="small">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-1 bg-bronze rounded-full" />
            <span className="text-sm font-medium uppercase tracking-wider text-bronze">
              Dúvidas
            </span>
            <div className="w-8 h-1 bg-bronze rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Perguntas sobre {areaTitle}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Respostas para dúvidas comuns sobre esta área de atuação.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faq.map((item, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-bronze/30 transition-colors"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
