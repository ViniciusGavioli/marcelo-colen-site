import { Container } from "@/components/layout";
import { T, TYPE } from "@/lib/institutional-theme";
import { SITE_CONFIG } from "@/lib/constants";
import { getDirectWhatsAppLink } from "@/lib/whatsapp";
import { Grain, SectionRule, Watermark } from "./Texture";

// Duas rotas separadas: nem quem procura Marcelo quer contratar uma defesa.
// Misturar imprensa e cliente na mesma mensagem atrapalha os dois.
export function ContactSection() {
    const wa = getDirectWhatsAppLink(
        "Olá Dr. Marcelo, vim pelo site e gostaria de falar sobre uma questão jurídica."
    );
    const telHref = `tel:+55${SITE_CONFIG.contact.whatsapp.slice(2)}`;
    const mailHref = `mailto:${SITE_CONFIG.contact.email}?subject=Contato%20institucional`;

    return (
        <section
            id="contato"
            className="relative overflow-hidden"
            style={{ backgroundColor: T.ink, scrollMarginTop: "4.5rem" }}
            aria-labelledby="contato-titulo"
        >
            <Grain sobre="tinta" />
            <Watermark
                sobre="tinta"
                className="-right-20 -bottom-16 hidden h-[460px] w-[460px] md:block"
            />
            <Container>
                <div className="relative py-[clamp(4.5rem,9vw,9rem)]">
                    <SectionRule sobre="tinta" />
                    <p
                        className="uppercase"
                        style={{
                            fontFamily: T.sans,
                            fontSize: TYPE.kicker,
                            letterSpacing: "0.2em",
                            color: T.copperOnInk,
                        }}
                    >
                        Contato
                    </p>
                    <h2
                        id="contato-titulo"
                        style={{
                            fontFamily: T.serif,
                            fontSize: TYPE.h2,
                            lineHeight: 1.2,
                            letterSpacing: "-0.012em",
                            fontWeight: 400,
                            color: T.onInk,
                            marginTop: "1.25rem",
                        }}
                    >
                        Fale com o escritório.
                    </h2>
                    <p
                        style={{
                            fontFamily: T.sans,
                            fontSize: TYPE.body,
                            lineHeight: 1.75,
                            color: T.onInkMuted,
                            marginTop: "1.25rem",
                            maxWidth: "60ch",
                        }}
                    >
                        O atendimento começa pela compreensão da situação apresentada e dos
                        documentos disponíveis. A medida juridicamente adequada depende das
                        circunstâncias de cada caso.
                    </p>

                    <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-14">
                        {/* Rota 1: questão jurídica */}
                        <div style={{ borderTop: `1px solid ${T.ruleOnInk}`, paddingTop: "2rem" }}>
                            <h3
                                style={{
                                    fontFamily: T.serif,
                                    fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                                    lineHeight: 1.3,
                                    fontWeight: 400,
                                    color: T.onInk,
                                }}
                            >
                                Tenho uma questão jurídica
                            </h3>
                            <p
                                style={{
                                    fontFamily: T.sans,
                                    fontSize: TYPE.micro,
                                    lineHeight: 1.7,
                                    color: T.onInkMuted,
                                    marginTop: "0.75rem",
                                    maxWidth: "40ch",
                                }}
                            >
                                Para casos criminais, heteroidentificação, discriminação e
                                políticas afirmativas.
                            </p>

                            <a
                                href={wa}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex items-center justify-center px-7 transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                                style={{
                                    minHeight: "3rem",
                                    backgroundColor: T.copper,
                                    color: T.onInk,
                                    fontFamily: T.sans,
                                    fontSize: "0.9375rem",
                                    fontWeight: 600,
                                    outlineColor: T.onInk,
                                }}
                            >
                                Entrar em contato
                            </a>

                            <p style={{ marginTop: "1.25rem" }}>
                                <a
                                    href={telHref}
                                    className="inline-flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                                    style={{
                                        minHeight: "2.75rem",
                                        fontFamily: T.sans,
                                        fontSize: TYPE.micro,
                                        color: T.onInk,
                                        outlineColor: T.onInk,
                                    }}
                                >
                                    {SITE_CONFIG.contact.phone}
                                </a>
                            </p>
                        </div>

                        {/* Rota 2: institucional */}
                        <div style={{ borderTop: `1px solid ${T.ruleOnInk}`, paddingTop: "2rem" }}>
                            <h3
                                style={{
                                    fontFamily: T.serif,
                                    fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                                    lineHeight: 1.3,
                                    fontWeight: 400,
                                    color: T.onInk,
                                }}
                            >
                                Contato institucional, imprensa ou palestra
                            </h3>
                            <p
                                style={{
                                    fontFamily: T.sans,
                                    fontSize: TYPE.micro,
                                    lineHeight: 1.7,
                                    color: T.onInkMuted,
                                    marginTop: "0.75rem",
                                    maxWidth: "40ch",
                                }}
                            >
                                Para convites, entrevistas, formações e demandas de organizações.
                            </p>

                            <a
                                href={mailHref}
                                className="mt-6 inline-flex items-center justify-center px-7 transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                                style={{
                                    minHeight: "3rem",
                                    border: `1px solid ${T.ruleOnInk}`,
                                    color: T.onInk,
                                    fontFamily: T.sans,
                                    fontSize: "0.9375rem",
                                    fontWeight: 500,
                                    outlineColor: T.onInk,
                                }}
                            >
                                Enviar e-mail
                            </a>

                            <p
                                style={{
                                    fontFamily: T.sans,
                                    fontSize: TYPE.micro,
                                    color: T.onInkMuted,
                                    marginTop: "1.25rem",
                                }}
                            >
                                {SITE_CONFIG.contact.email}
                            </p>
                        </div>
                    </div>

                    <div
                        className="mt-14 flex flex-col gap-2 pt-8 md:flex-row md:gap-10"
                        style={{ borderTop: `1px solid ${T.ruleOnInk}` }}
                    >
                        {[
                            "Belo Horizonte, MG",
                            "Atendimento presencial e por videoconferência",
                            SITE_CONFIG.oab,
                        ].map((linha) => (
                            <p
                                key={linha}
                                style={{
                                    fontFamily: T.sans,
                                    fontSize: TYPE.micro,
                                    color: T.onInkFaint,
                                }}
                            >
                                {linha}
                            </p>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
