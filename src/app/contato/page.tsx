import { Metadata } from "next";
import Script from "next/script";
import { MessageCircle, Mail, MapPin, Phone, Instagram } from "lucide-react";
import { PageHeader, Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/forms";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { getLegalServiceSchema, getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com o escritório Marcelo Colen Advocacia. Atendimento sigiloso e personalizado. Agende uma consulta inicial por WhatsApp ou formulário.",
};

export default function ContatoPage() {
  const fullAddress = `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.complement} - ${SITE_CONFIG.address.neighborhood}, ${SITE_CONFIG.address.city}/${SITE_CONFIG.address.state} - CEP ${SITE_CONFIG.address.zip}`;

  const structuredData = [
    getLegalServiceSchema(),
    getBreadcrumbSchema([
      { name: "Início", url: "/" },
      { name: "Contato", url: "/contato" },
    ]),
  ];

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <Script
        id="structured-data-contato"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <PageHeader
        title="Contato"
        description="Agende uma consulta inicial para análise do seu caso"
      />
      
      <section className="py-16 md:py-24 bg-off-white">
        <Container>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info - 2 colunas */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-graphite mb-3">
                  Canais de Atendimento
                </h2>
                <p className="text-graphite-light">
                  Escolha o canal de sua preferência. Para atendimento
                  imediato, recomendamos o WhatsApp.
                </p>
              </div>

              <div className="space-y-4">
                {/* WhatsApp - Destaque */}
                <Card className="border-bronze/30 bg-bronze/5">
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className="w-12 h-12 bg-bronze/20 rounded-full flex items-center justify-center shrink-0">
                      <MessageCircle className="w-6 h-6 text-bronze" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-graphite mb-1">WhatsApp</h3>
                      <p className="text-sm text-graphite-light mb-3">
                        Atendimento rápido e prático
                      </p>
                      <Button asChild size="sm" className="bg-bronze hover:bg-bronze-dark text-white">
                        <a
                          href={getWhatsAppLink()}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Iniciar conversa
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Instagram */}
                <Card className="border-graphite/10">
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="w-10 h-10 bg-bronze/10 rounded-full flex items-center justify-center shrink-0">
                      <Instagram className="w-5 h-5 text-bronze" />
                    </div>
                    <div>
                      <h3 className="font-medium text-graphite mb-1">Instagram</h3>
                      <a
                        href={SITE_CONFIG.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-graphite-light hover:text-bronze transition-colors"
                      >
                        @marcelocolen.adv
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Telefone */}
                <Card className="border-graphite/10">
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="w-10 h-10 bg-bronze/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-bronze" />
                    </div>
                    <div>
                      <h3 className="font-medium text-graphite mb-1">Telefone</h3>
                      <a
                        href={`tel:${SITE_CONFIG.contact.phone.replace(/\D/g, "")}`}
                        className="text-sm text-graphite-light hover:text-bronze transition-colors"
                      >
                        {SITE_CONFIG.contact.phone}
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* E-mail */}
                <Card className="border-graphite/10">
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="w-10 h-10 bg-bronze/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-bronze" />
                    </div>
                    <div>
                      <h3 className="font-medium text-graphite mb-1">E-mail</h3>
                      <a
                        href={`mailto:${SITE_CONFIG.contact.email}`}
                        className="text-sm text-graphite-light hover:text-bronze transition-colors break-all"
                      >
                        {SITE_CONFIG.contact.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Endereço */}
                <Card className="border-graphite/10">
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="w-10 h-10 bg-bronze/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-bronze" />
                    </div>
                    <div>
                      <h3 className="font-medium text-graphite mb-1">Endereço</h3>
                      <p className="text-sm text-graphite-light">
                        {fullAddress}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form - 3 colunas */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-graphite mb-3">
                  Envie sua Mensagem
                </h2>
                <p className="text-graphite-light">
                  Preencha o formulário abaixo e retornaremos o mais breve
                  possível.
                </p>
              </div>
              
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA WhatsApp fixo */}
      <section className="py-12 bg-graphite text-white">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Prefere atendimento imediato?
              </h3>
              <p className="text-white/70">
                Fale diretamente com nossa equipe pelo WhatsApp
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-bronze hover:bg-bronze-dark text-white"
            >
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Abrir WhatsApp
              </a>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
