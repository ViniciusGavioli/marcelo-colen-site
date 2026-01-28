"use client";

import { Container } from "@/components/layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { COTAS_PAGE } from "@/lib/cotas-data";

export function CotasFaqWordpress() {
  const { faq } = COTAS_PAGE;

  return (
    <section 
      className="py-16 lg:py-24"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <Container>
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight text-center"
            style={{ 
              color: '#1A1A1A',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            FAQ - Perguntas Frequentes
          </h2>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faq.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-lg px-6"
                style={{ borderColor: '#E5E5E5' }}
              >
                <AccordionTrigger 
                  className="text-left text-base lg:text-lg font-medium py-4 hover:no-underline"
                  style={{ color: '#1A1A1A' }}
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent 
                  className="text-base leading-relaxed pb-4"
                  style={{ color: '#333333' }}
                >
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
