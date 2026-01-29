import { Metadata } from "next";
import { PageHeader, Container } from "@/components/layout";

export const metadata: Metadata = {
  title: "Publicações",
  description:
    "Publicações acadêmicas e técnicas do escritório Marcelo Colen Advocacia. Artigos, livros e contribuições para o meio jurídico.",
};

export default function PublicacoesPage() {
  return (
    <>
      <PageHeader
        title="Publicações"
        description="Produção acadêmica e contribuições ao meio jurídico"
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
