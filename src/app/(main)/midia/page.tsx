import { Metadata } from "next";
import { PageHeader, Container } from "@/components/layout";

export const metadata: Metadata = {
  title: "Na Mídia",
  description:
    "Participações e menções do escritório Marcelo Colen Advocacia em veículos de imprensa e mídia.",
};

export default function MidiaPage() {
  return (
    <>
      <PageHeader
        title="Na Mídia"
        description="Participações em veículos de imprensa e comunicação"
      />
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center">
            <p className="text-muted-foreground text-lg">
              Conteúdo em desenvolvimento.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
