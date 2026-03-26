import { Metadata } from "next";
import { Clock } from "lucide-react";
import { PageHeader, Container } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Conteúdos",
  description:
    "Artigos, análises e informações jurídicas relevantes. Conteúdo produzido pelo escritório Marcelo Colen Advocacia.",
};

export default function ConteudosPage() {
  return (
    <>
      <PageHeader
        title="Conteúdos"
        description="Artigos e informações jurídicas relevantes"
      />
      <section className="py-16 md:py-24">
        <Container size="small">
          <Card className="border-dashed">
            <CardContent className="py-16 text-center">
              <Clock className="w-12 h-12 text-bronze mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Em breve</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Estamos preparando conteúdos relevantes sobre temas jurídicos.
                Volte em breve para conferir nossos artigos e análises.
              </p>
            </CardContent>
          </Card>
        </Container>
      </section>
    </>
  );
}
