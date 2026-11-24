import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { SITE_COLORS as C, ESTILO_ROTULO } from "@/lib/site-theme";
import { formatarData, type Artigo } from "@/lib/blog";

// Peças em volta do texto do artigo, usadas no blog (/blog/<slug>) e nos
// artigos soltos (/artigos/<slug>).

// `comLinks`: o artigo solto não leva para as páginas do site, que ainda não
// foi lançado; o nome do autor fica sem link.
export function Assinatura({ artigo, comLinks = true }: { artigo: Artigo; comLinks?: boolean }) {
    const atualizado = artigo.atualizadoEm && artigo.atualizadoEm !== artigo.publicadoEm;
    return (
        <div className="mt-8 pt-6 flex items-center gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <Image
                src="/images/marcelo/marcelo-colen-retrato.webp"
                alt=""
                width={1024}
                height={1536}
                sizes="48px"
                className="w-12 h-12 rounded-full object-cover object-top shrink-0"
                style={{ backgroundColor: "#161616", border: `1px solid ${C.goldBorder}` }}
            />
            <div className="text-xs leading-relaxed" style={{ color: C.gray3 }}>
                <p>
                    {comLinks ? (
                        <Link href="/sobre" className="font-semibold transition-colors hover:text-[#c9a227]" style={{ color: C.gray1 }}>
                            Marcelo Colen
                        </Link>
                    ) : (
                        <span className="font-semibold" style={{ color: C.gray1 }}>
                            Marcelo Colen
                        </span>
                    )}
                    <span aria-hidden="true"> · </span>
                    {SITE_CONFIG.oab}
                </p>
                {artigo.publicadoEm && (
                    <p>
                        <time dateTime={artigo.publicadoEm}>{formatarData(artigo.publicadoEm)}</time>
                        {atualizado && (
                            <>
                                {" "}
                                · atualizado em <time dateTime={artigo.atualizadoEm}>{formatarData(artigo.atualizadoEm!)}</time>
                            </>
                        )}
                        {artigo.leitura && <> · {artigo.leitura} min de leitura</>}
                    </p>
                )}
            </div>
        </div>
    );
}

// Identificação da atuação, sem chamada de venda (Provimento 205/2021): diz o
// que o escritório faz e leva à página da área.
export function Fechamento() {
    return (
        <div className="mt-14 pt-10" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <p className="text-base md:text-[1.0625rem] leading-[1.8]" style={{ color: C.gray1 }}>
                O Colen Advogados atua em recursos administrativos e medidas judiciais relacionadas à heteroidentificação, com
                atendimento em todo o Brasil.{" "}
                <Link href="/recurso-heteroidentificacao" className="underline underline-offset-4 transition-colors hover:text-white" style={{ color: C.gold, textDecorationColor: "rgba(201,162,39,0.45)" }}>
                    Conheça a atuação em recurso contra decisão da banca
                </Link>
                .
            </p>
            <p className="mt-5 italic" style={{ color: C.gold, fontFamily: C.serif, fontSize: "1.25rem" }}>
                Estratégia com inteligência. Execução com excelência.
            </p>
        </div>
    );
}

export function Fontes({ fontes }: { fontes: NonNullable<Artigo["fontes"]> }) {
    return (
        <div className="mt-12">
            <h2 className="uppercase" style={{ ...ESTILO_ROTULO, color: C.gold }}>
                Fontes
            </h2>
            <ul className="mt-4 space-y-2">
                {fontes.map((fonte) => (
                    <li key={fonte.rotulo} className="text-sm leading-relaxed" style={{ color: C.gray2 }}>
                        {fonte.href ? (
                            <a href={fonte.href} target="_blank" rel="noopener" className="underline underline-offset-4 transition-colors hover:text-white" style={{ textDecorationColor: "rgba(255,255,255,0.25)" }}>
                                {fonte.rotulo}
                            </a>
                        ) : (
                            fonte.rotulo
                        )}
                    </li>
                ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed" style={{ color: C.gray3 }}>
                Conteúdo informativo, sem caráter de consulta. A medida cabível depende do edital e dos documentos de cada caso.
            </p>
        </div>
    );
}

// Quem escreve, com as credenciais que dá para conferir na página Sobre.
export function SobreOAutor({ comLinks = true }: { comLinks?: boolean }) {
    return (
        <aside
            aria-labelledby="autor-titulo"
            className="mt-12 rounded-2xl p-6 md:p-7 flex flex-col sm:flex-row gap-5"
            style={{ backgroundColor: C.surface, border: "1px solid rgba(255,255,255,0.07)" }}
        >
            <Image
                src="/images/marcelo/marcelo-colen-retrato.webp"
                alt="Retrato de Marcelo Colen"
                width={1024}
                height={1536}
                sizes="80px"
                className="w-20 h-20 rounded-full object-cover object-top shrink-0"
                style={{ backgroundColor: "#161616", border: `1px solid ${C.goldBorder}` }}
            />
            <div>
                <p className="uppercase" style={{ ...ESTILO_ROTULO, color: C.gold }}>
                    Sobre o autor
                </p>
                <h2 id="autor-titulo" className="mt-2" style={{ color: C.white, fontFamily: C.serif, fontSize: "1.5rem", lineHeight: 1.25 }}>
                    Marcelo Colen
                </h2>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: C.gray2 }}>
                    Advogado ({SITE_CONFIG.oab}), sócio fundador do Colen Advogados. Mestre em Direito pela UFMG, Diretor de
                    Diversidade e Inclusão da OAB/MG e Secretário da Comissão Nacional de Promoção da Igualdade do Conselho Federal
                    da OAB.
                </p>
                {comLinks && (
                    <Link
                        href="/sobre"
                        className="mt-4 inline-block text-sm font-semibold pb-0.5 transition-colors hover:text-white"
                        style={{ color: C.gold, borderBottom: `1px solid ${C.goldBorder}` }}
                    >
                        Trajetória completa
                    </Link>
                )}
            </div>
        </aside>
    );
}
