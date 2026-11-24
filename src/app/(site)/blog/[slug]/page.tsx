import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PenLine } from "lucide-react";
import { Container } from "@/components/layout";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { JsonLd } from "@/components/site/JsonLd";
import { CartaoArtigo } from "@/components/site/blog/pecas";
import { CORPO_DO_ARTIGO } from "@/components/site/blog/artigos";
import { Assinatura, Fechamento, Fontes, SobreOAutor } from "@/components/site/blog/artigo-pecas";
import { SITE_CONFIG, OG_IMAGES } from "@/lib/constants";
import { SITE_COLORS as C, ESTILO_ROTULO } from "@/lib/site-theme";
import { ARTIGOS, ARTIGOS_PUBLICADOS, buscarArtigo } from "@/lib/blog";
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
