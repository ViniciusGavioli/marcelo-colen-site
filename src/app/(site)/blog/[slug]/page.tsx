import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PenLine } from "lucide-react";
import { Container } from "@/components/layout";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { JsonLd } from "@/components/site/JsonLd";
import { CartaoArtigo } from "@/components/site/blog/pecas";
import { CORPO_DO_ARTIGO } from "@/components/site/blog/artigos";
import { SITE_CONFIG, OG_IMAGES } from "@/lib/constants";
import { SITE_COLORS as C, ESTILO_ROTULO } from "@/lib/site-theme";
import { ARTIGOS, ARTIGOS_PUBLICADOS, buscarArtigo, formatarData, type Artigo } from "@/lib/blog";
import { grafoArtigo } from "@/lib/dados-estruturados";

// Só os slugs de lib/blog.ts; qualquer outro endereço em /blog/ é 404.
export const dynamicParams = false;

export function generateStaticParams() {
    return ARTIGOS.map((artigo) => ({ slug: artigo.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const artigo = buscarArtigo((await params).slug);
    if (!artigo) return {};
    const url = `${SITE_CONFIG.url}/blog/${artigo.slug}`;
    const publicado = Boolean(artigo.publicadoEm);
    return {
        title: `${artigo.tituloSeo} | Marcelo Colen`,
        description: artigo.descricao,
        alternates: { canonical: url },
        // Em construção fica fora do índice (ver lib/blog.ts).
        robots: { index: publicado, follow: true },
        authors: [{ name: "Marcelo Colen", url: `${SITE_CONFIG.url}/sobre` }],
        openGraph: {
            title: artigo.titulo,
            description: artigo.descricao,
            url,
            type: "article",
            publishedTime: artigo.publicadoEm,
            modifiedTime: artigo.atualizadoEm ?? artigo.publicadoEm,
            authors: [`${SITE_CONFIG.url}/sobre`],
            images: OG_IMAGES.hetero,
        },
        twitter: { card: "summary_large_image", images: OG_IMAGES.hetero.map((i) => i.url) },
    };
}

export default async function ArtigoPage({ params }: { params: Promise<{ slug: string }> }) {
    const artigo = buscarArtigo((await params).slug);
    if (!artigo) notFound();
    const Corpo = artigo.publicadoEm ? CORPO_DO_ARTIGO[artigo.slug] : undefined;
    // Publicados primeiro: são os que valem o clique.
    const outros = [...ARTIGOS_PUBLICADOS, ...ARTIGOS.filter((a) => !a.publicadoEm)].filter((a) => a.slug !== artigo.slug).slice(0, 2);

    return (
        <>
            {artigo.publicadoEm && <JsonLd data={grafoArtigo({ ...artigo, publicadoEm: artigo.publicadoEm })} />}

            <article aria-labelledby="artigo-titulo" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20" style={{ backgroundColor: C.bg1 }}>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-[420px] pointer-events-none"
                    style={{ background: "radial-gradient(ellipse 50% 70% at 50% 0%, rgba(201,162,39,0.07), transparent 70%)" }}
                />
                <Container className="relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Artigo" }]} />

                        <p className="mt-10 text-[11px] md:text-xs uppercase tracking-[0.2em] font-semibold" style={{ color: C.gold }}>
                            {artigo.area}
                        </p>
                        <h1 id="artigo-titulo" className="mt-4 text-balance" style={{ color: C.white, fontFamily: C.serif }}>
                            {artigo.titulo}
                        </h1>
                        <p className="mt-5 text-base md:text-lg leading-relaxed text-pretty" style={{ color: C.gray2 }}>
                            {artigo.descricao}
                        </p>

                        <Assinatura artigo={artigo} />

                        {Corpo ? (
                            <div className="mt-12 space-y-6">
                                <Corpo />
                            </div>
                        ) : (
                            <EmConstrucao />
                        )}

                        {Corpo && (
                            <>
                                <Fechamento />
                                {artigo.fontes && <Fontes fontes={artigo.fontes} />}
                                <SobreOAutor />
                            </>
                        )}
                    </div>
                </Container>
            </article>

            <section aria-labelledby="outros-titulo" className="py-16 md:py-20" style={{ backgroundColor: C.bg2 }}>
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h2 id="outros-titulo" className="uppercase" style={{ ...ESTILO_ROTULO, color: C.gold }}>
                            Outros artigos
                        </h2>
                        <ul className="mt-6 grid gap-5 sm:grid-cols-2">
                            {outros.map((outro) => (
                                <li key={outro.slug}>
                                    <CartaoArtigo artigo={outro} nivelTitulo="h3" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </Container>
            </section>
        </>
    );
}

function Assinatura({ artigo }: { artigo: Artigo }) {
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
                    <Link href="/sobre" className="font-semibold transition-colors hover:text-[#c9a227]" style={{ color: C.gray1 }}>
                        Marcelo Colen
                    </Link>
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

function EmConstrucao() {
    return (
        <div
            className="mt-12 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row gap-5 sm:items-start"
            style={{ backgroundColor: C.goldSoft, border: `1px solid ${C.goldBorder}` }}
        >
            <span
                aria-hidden="true"
                className="w-11 h-11 shrink-0 rounded-full flex items-center justify-center"
                style={{ backgroundColor: C.bg1, border: `1px solid ${C.goldBorder}` }}
            >
                <PenLine className="w-5 h-5" style={{ color: C.gold }} />
            </span>
            <div>
                <h2 style={{ color: C.white, fontFamily: C.serif, fontSize: "1.5rem", lineHeight: 1.25 }}>Artigo em construção</h2>
                <p className="mt-2 text-sm md:text-[0.9375rem] leading-relaxed" style={{ color: C.gray2 }}>
                    O texto ainda está sendo escrito e será publicado nesta página.
                </p>
                <Link
                    href="/blog"
                    className="mt-5 inline-block text-sm font-semibold pb-0.5 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                    style={{ color: C.gold, borderBottom: `1px solid ${C.goldBorder}`, outlineColor: C.gold }}
                >
                    Voltar para o blog
                </Link>
            </div>
        </div>
    );
}

// Identificação da atuação, sem chamada de venda (Provimento 205/2021): diz o
// que o escritório faz e leva à página da área.
function Fechamento() {
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

function Fontes({ fontes }: { fontes: NonNullable<Artigo["fontes"]> }) {
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
function SobreOAutor() {
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
                <Link
                    href="/sobre"
                    className="mt-4 inline-block text-sm font-semibold pb-0.5 transition-colors hover:text-white"
                    style={{ color: C.gold, borderBottom: `1px solid ${C.goldBorder}` }}
                >
                    Trajetória completa
                </Link>
            </div>
        </aside>
    );
}
