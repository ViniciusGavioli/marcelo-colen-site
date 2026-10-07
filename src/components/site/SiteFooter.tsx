import Link from "next/link";
import Image from "next/image";
import { SITE_COLORS as C } from "@/lib/site-theme";
import { SITE_CONFIG } from "@/lib/constants";

// Mapa final da presença institucional, na paleta da LP. As quatro áreas
// aparecem no mesmo peso. "Artigos e análises" saiu: não há artigos
// publicados.
const ATUACAO = [
    { label: "Direito Criminal", href: "/atuacao" },
    { label: "Direito Antidiscriminatório", href: "/atuacao" },
    { label: "Heteroidentificação e Políticas Afirmativas", href: "/recurso-heteroidentificacao" },
    { label: "Consultoria e Atuação Institucional", href: "/atuacao" },
];

const INSTITUCIONAL = [
    { label: "Trajetória", href: "/sobre" },
    { label: "Na mídia", href: "/midia" },
    { label: "Contato", href: `${SITE_CONFIG.homePath}#contato` },
];

const FIO = "rgba(255,255,255,0.08)";
const classeLink =
    "text-sm leading-relaxed [overflow-wrap:anywhere] transition-colors hover:text-[#c9a227] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
const estiloLink = { color: C.gray2, outlineColor: C.gold } as const;

function Coluna({ titulo, children }: { titulo: string; children: React.ReactNode }) {
    return (
        <div>
            <h2 className="text-xs uppercase tracking-[0.2em] font-semibold mb-5" style={{ color: C.gold }}>
                {titulo}
            </h2>
            {children}
        </div>
    );
}

export function SiteFooter() {
    const ano = new Date().getFullYear();

    return (
        <footer style={{ backgroundColor: C.bg1, borderTop: `1px solid ${FIO}` }}>
            <div aria-hidden="true" className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,162,39,0.25), transparent)" }} />
            <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
                    <div>
                        {/* No rodapé cabe o lockup inteiro, na versão clara. */}
                        <Image src="/marca/logo-lockup-claro.png" alt="Marcelo Colen" width={1138} height={605} className="h-auto w-[180px]" />
                        <p className="mt-6 text-sm leading-relaxed max-w-[32ch]" style={{ color: C.gray2 }}>
                            Atuação em Direito Criminal, Direito Antidiscriminatório, políticas de igualdade racial e
                            consultoria institucional.
                        </p>
                    </div>

                    <Coluna titulo="Atuação">
                        <ul className="space-y-3">
                            {ATUACAO.map((a) => (
                                <li key={a.label}>
                                    <Link href={a.href} className={classeLink} style={estiloLink}>
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
                                    <Link href={i.href} className={classeLink} style={estiloLink}>
                                        {i.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Coluna>

                    <Coluna titulo="Contato">
                        <ul className="space-y-3">
                            <li>
                                <a href={`tel:+55${SITE_CONFIG.contact.whatsapp.slice(2)}`} className={classeLink} style={estiloLink}>
                                    {SITE_CONFIG.contact.phone}
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${SITE_CONFIG.contact.email}`} className={classeLink} style={estiloLink}>
                                    {SITE_CONFIG.contact.email}
                                </a>
                            </li>
                            <li>
                                <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className={classeLink} style={estiloLink}>
                                    @marcelocolen.adv
                                </a>
                            </li>
                            <li className="text-sm" style={{ color: C.gray2 }}>
                                Belo Horizonte, MG
                            </li>
                        </ul>
                    </Coluna>
                </div>

                <div className="mt-14 flex flex-col gap-3 pt-8 md:flex-row md:items-center md:justify-between" style={{ borderTop: `1px solid ${FIO}` }}>
                    <p className="text-xs" style={{ color: C.gray3 }}>
                        {SITE_CONFIG.oab}
                    </p>
                    <p className="text-xs" style={{ color: C.gray3 }}>
                        © {ano} Marcelo Colen Advocacia. Todos os direitos reservados.
                    </p>
                </div>

                <p className="mt-6 text-xs leading-relaxed max-w-[80ch]" style={{ color: C.gray3 }}>
                    Este site tem caráter informativo e não constitui publicidade ou oferta de serviços. O conteúdo
                    disponibilizado não configura aconselhamento jurídico. Cada caso requer análise individualizada.
                </p>
            </div>
        </footer>
    );
}
