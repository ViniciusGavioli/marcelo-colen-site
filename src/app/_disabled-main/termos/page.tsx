import { Metadata } from "next";
import { PageHeader, Container } from "@/components/layout";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de Uso do site do escritório Marcelo Colen Advocacia. Condições para utilização deste website.",
};

export default function TermosPage() {
  return (
    <>
      <PageHeader title="Termos de Uso" />
      <section className="py-16 md:py-24">
        <Container size="small">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-sm mb-8">
              Última atualização: Janeiro de 2026
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground mb-4">
              Ao acessar e utilizar este site, você concorda com os presentes
              Termos de Uso. Caso não concorde, recomendamos que não utilize
              nossos serviços online.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. Natureza do Conteúdo</h2>
            <p className="text-muted-foreground mb-4">
              O conteúdo deste site tem caráter exclusivamente informativo e
              institucional. As informações disponibilizadas não constituem
              aconselhamento jurídico, parecer legal ou qualquer forma de
              consultoria.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. Não Garantia de Resultados</h2>
            <p className="text-muted-foreground mb-4">
              Resultados obtidos em casos anteriores não garantem resultados
              semelhantes em casos futuros. Cada situação jurídica é única e
              requer análise individualizada.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. Propriedade Intelectual</h2>
            <p className="text-muted-foreground mb-4">
              Todo o conteúdo deste site, incluindo textos, imagens, layout e
              design, é de propriedade do {SITE_CONFIG.fullName} e está
              protegido pelas leis de propriedade intelectual.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Sigilo Profissional</h2>
            <p className="text-muted-foreground mb-4">
              As comunicações realizadas através deste site estão sujeitas ao
              sigilo profissional inerente à advocacia, nos termos do Estatuto
              da Advocacia e da OAB.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. Limitação de Responsabilidade</h2>
            <p className="text-muted-foreground mb-4">
              O escritório não se responsabiliza por decisões tomadas com base
              exclusivamente nas informações contidas neste site, sem a devida
              consulta profissional.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. Alterações</h2>
            <p className="text-muted-foreground mb-4">
              Reservamo-nos o direito de alterar estes termos a qualquer momento.
              Recomendamos a consulta periódica desta página.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">8. Contato</h2>
            <p className="text-muted-foreground mb-4">
              Para esclarecimentos sobre estes termos, entre em contato pelo
              e-mail {SITE_CONFIG.contact.email}.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
