import Link from "next/link";
import Image from "next/image";
import { T, TYPE } from "@/lib/institutional-theme";
import { SITE_CONFIG } from "@/lib/constants";

// Mapa final da presença institucional. O footer anterior posicionava o
// escritório quase só em heteroidentificação; aqui as quatro áreas aparecem
// no mesmo peso.
const ATUACAO = [
    { label: "Direito Criminal", href: "/atuacao" },
    { label: "Direito Antidiscriminatório", href: "/atuacao" },
    { label: "Heteroidentificação e Políticas Afirmativas", href: "/atuacao" },
    { label: "Consultoria e Atuação Institucional", href: "/atuacao" },
];

const INSTITUCIONAL = [
    { label: "Trajetória", href: "/sobre" },
    { label: "Artigos e análises", href: `${SITE_CONFIG.homePath}#artigos` },
    { label: "Na mídia", href: "/midia" },
    { label: "Contato", href: `${SITE_CONFIG.homePath}#contato` },
];

function Coluna({ titulo, children }: { titulo: string; children: React.ReactNode }) {
    return (
        <div>
            <h2
                className="uppercase"
                style={{
                    fontFamily: T.sans,
                    fontSize: TYPE.kicker,
                    letterSpacing: "0.2em",
                    color: T.onInkFaint,
                    marginBottom: "1.25rem",
                }}
            >
                {titulo}
            </h2>
            {children}
        </div>
    );
}

const estiloLink = {
    fontFamily: T.sans,
    fontSize: "0.875rem",
    lineHeight: 1.5,
    color: T.onInkMuted,
    outlineColor: T.copperOnInk,
} as const;

export function SiteFooter() {
    const ano = new Date().getFullYear();

    return (
        <footer style={{ backgroundColor: T.inkDeep }}>
            <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
                <div className="grid gap-12 md:grid-cols-4 md:gap-10">
                    <div>
                        {/* No rodapé cabe o lockup inteiro, com símbolo e
                            assinatura, na versão clara. */}
                        <Image
                            src="/marca/logo-lockup-claro.png"
                            alt="Marcelo Colen"
                            width={1138}
                            height={605}
                            className="h-auto w-[180px]"
                        />
                        <p
                            className="uppercase"
                            style={{
                                fontFamily: T.sans,
                                fontSize: "0.6875rem",
                                letterSpacing: "0.2em",
                                color: T.onInkFaint,
                                marginTop: "0.75rem",
                            }}
                        >
                            Advocacia
                        </p>
                        <p
                            style={{
                                fontFamily: T.sans,
                                fontSize: "0.875rem",
                                lineHeight: 1.7,
                                color: T.onInkMuted,
                                marginTop: "1.25rem",
                                maxWidth: "32ch",
                            }}
                        >
                            Atuação em Direito Criminal, Direito Antidiscriminatório, políticas
                            de igualdade racial e consultoria institucional.
                        </p>
                    </div>

                    <Coluna titulo="Atuação">
                        <ul className="space-y-3">
                            {ATUACAO.map((a) => (
                                <li key={a.label}>
                                    <Link
                                        href={a.href}
                                        className="transition-colors hover:text-[#EDECE8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                        style={estiloLink}
                                    >
                                        {a.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Coluna>

                    <Coluna titulo="Institucional">
                        <ul className="space-y-3">
                            {INSTITUCIONAL.map((i) => (
                                <li key={i.label}>
                                    <Link
                                        href={i.href}
                                        className="transition-colors hover:text-[#EDECE8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                        style={estiloLink}
                                    >
                                        {i.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Coluna>

                    <Coluna titulo="Contato">
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href={`tel:+55${SITE_CONFIG.contact.whatsapp.slice(2)}`}
                                    className="transition-colors hover:text-[#EDECE8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                    style={estiloLink}
                                >
                                    {SITE_CONFIG.contact.phone}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${SITE_CONFIG.contact.email}`}
                                    className="transition-colors hover:text-[#EDECE8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                    style={estiloLink}
                                >
                                    {SITE_CONFIG.contact.email}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={SITE_CONFIG.social.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-colors hover:text-[#EDECE8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                    style={estiloLink}
                                >
                                    @marcelocolen.adv
                                </a>
                            </li>
                            <li style={estiloLink}>Belo Horizonte, MG</li>
                        </ul>
                    </Coluna>
                </div>

                <div
                    className="mt-14 flex flex-col gap-3 pt-8 md:flex-row md:items-center md:justify-between"
                    style={{ borderTop: `1px solid ${T.ruleOnInk}` }}
                >
                    <p
                        style={{
                            fontFamily: T.sans,
                            fontSize: TYPE.kicker,
                            color: T.onInkFaint,
                        }}
                    >
                        {SITE_CONFIG.oab}
                    </p>
                    <p
                        style={{
                            fontFamily: T.sans,
                            fontSize: TYPE.kicker,
                            color: T.onInkFaint,
                        }}
                    >
                        © {ano} Marcelo Colen Advocacia. Todos os direitos reservados.
                    </p>
                </div>

                <p
                    style={{
                        fontFamily: T.sans,
                        fontSize: "0.75rem",
                        lineHeight: 1.7,
                        color: T.onInkFaint,
                        marginTop: "1.5rem",
                        maxWidth: "80ch",
                    }}
                >
                    Este site tem caráter informativo e não constitui publicidade ou oferta de
                    serviços. O conteúdo disponibilizado não configura aconselhamento jurídico.
                    Cada caso requer análise individualizada.
                </p>
            </div>
        </footer>
    );
}
