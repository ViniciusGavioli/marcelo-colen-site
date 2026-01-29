import { Metadata } from "next";
import { PageHeader, Container } from "@/components/layout";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade do escritório Marcelo Colen Advocacia. Saiba como tratamos seus dados pessoais em conformidade com a LGPD.",
};

export default function PrivacidadePage() {
  return (
    <>
      <PageHeader title="Política de Privacidade" />
      <section className="py-16 md:py-24">
        <Container size="small">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-sm mb-8">
              Última atualização: Janeiro de 2026
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. Introdução</h2>
            <p className="text-muted-foreground mb-4">
              O escritório {SITE_CONFIG.fullName} está comprometido com a proteção
              da privacidade e dos dados pessoais de seus clientes, parceiros e
              visitantes deste site, em conformidade com a Lei Geral de Proteção
              de Dados (LGPD - Lei nº 13.709/2018).
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. Dados Coletados</h2>
            <p className="text-muted-foreground mb-4">
              Coletamos apenas os dados necessários para o atendimento jurídico e
              comunicação, incluindo: nome, e-mail, telefone e informações
              relacionadas ao caso jurídico quando aplicável.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">2.1 Formulário de Contato</h3>
            <p className="text-muted-foreground mb-4">
              Ao enviar uma mensagem pelo formulário de contato do site, coletamos:
              nome completo, endereço de e-mail, telefone (opcional), assunto da
              mensagem e o conteúdo da mensagem. Esses dados são armazenados de
              forma segura em nosso banco de dados para possibilitar o retorno do
              contato e a prestação de atendimento adequado.
            </p>
            <p className="text-muted-foreground mb-4">
              O envio do formulário requer seu consentimento expresso, manifestado
              através da marcação do checkbox de concordância com esta política.
              Sem esse consentimento, a mensagem não será processada.
            </p>
            <p className="text-muted-foreground mb-4">
              Os dados do formulário de contato são retidos pelo período necessário
              ao atendimento da solicitação e, posteriormente, pelo prazo legal
              aplicável. Você pode solicitar a exclusão de seus dados a qualquer
              momento.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. Finalidade do Tratamento</h2>
            <p className="text-muted-foreground mb-4">
              Os dados são utilizados exclusivamente para: prestação de serviços
              jurídicos, comunicação sobre andamento de processos, resposta a
              solicitações de contato e envio de informações relevantes quando
              autorizado.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. Compartilhamento</h2>
            <p className="text-muted-foreground mb-4">
              Seus dados não são compartilhados com terceiros, exceto quando
              necessário para a prestação dos serviços jurídicos ou por
              determinação legal.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Segurança</h2>
            <p className="text-muted-foreground mb-4">
              Adotamos medidas técnicas e organizacionais adequadas para proteger
              seus dados contra acesso não autorizado, perda ou alteração.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. Seus Direitos</h2>
            <p className="text-muted-foreground mb-4">
              Você pode solicitar acesso, correção, exclusão ou portabilidade de
              seus dados a qualquer momento, entrando em contato pelo e-mail{" "}
              {SITE_CONFIG.contact.email}.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. Contato</h2>
            <p className="text-muted-foreground mb-4">
              Para questões relacionadas a esta política ou ao tratamento de seus
              dados, entre em contato pelo e-mail {SITE_CONFIG.contact.email}.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
