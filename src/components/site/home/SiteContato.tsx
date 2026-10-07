import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/layout";
import { SITE_COLORS as C } from "@/lib/site-theme";
import { SITE_CONFIG } from "@/lib/constants";
import { BotaoWhatsApp, CabecalhoSecao } from "./primitivos";

// Fecho da home, no formato do CTA final da LP. É o destino do "Contato" do
// header e do rodapé. Sem endereço de rua: o do site e o do perfil no Google
// divergem, e o endereço só volta quando o cliente confirmar qual vale.
export function SiteContato() {
    const tel = `tel:+55${SITE_CONFIG.contact.whatsapp.slice(2)}`;
    const email = `mailto:${SITE_CONFIG.contact.email}`;
    const estiloLink = { color: C.gray1, outlineColor: C.gold };

    return (
        <section
            id="contato"
            aria-labelledby="contato-titulo"
            className="py-16 md:py-24 relative overflow-hidden scroll-mt-20"
            style={{ backgroundColor: C.bg1, borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at center bottom, rgba(201,162,39,0.06) 0%, transparent 65%)" }}
            />
            <Container className="relative z-10">
                <div className="max-w-2xl mx-auto text-center">
                    <CabecalhoSecao
                        id="contato-titulo"
                        selo="Contato"
                        titulo="Fale com o escritório"
                        texto="O primeiro contato pode ser feito pelo WhatsApp, por telefone ou por e-mail. Cada caso é avaliado individualmente, a partir dos documentos e do contexto."
                    />

                    <div className="mt-10 flex justify-center">
                        <BotaoWhatsApp rotulo="Falar pelo WhatsApp" />
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-3 text-sm">
                        <a href={tel} className="inline-flex items-center gap-2 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4" style={estiloLink}>
                            <Phone className="w-4 h-4" style={{ color: C.gold }} aria-hidden="true" />
                            {SITE_CONFIG.contact.phone}
                        </a>
                        <a href={email} className="inline-flex items-center gap-2 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4" style={estiloLink}>
                            <Mail className="w-4 h-4" style={{ color: C.gold }} aria-hidden="true" />
                            {SITE_CONFIG.contact.email}
                        </a>
                    </div>

                    <p className="mt-10 text-xs" style={{ color: C.gray3 }}>
                        Belo Horizonte (MG) · Atendimento em todo o Brasil · {SITE_CONFIG.oab}
                    </p>
                </div>
            </Container>
        </section>
    );
}
