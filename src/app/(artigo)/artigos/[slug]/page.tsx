import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout";
import { JsonLd } from "@/components/site/JsonLd";
import { CORPO_DO_ARTIGO_SOLTO } from "@/components/site/blog/artigos";
import { Assinatura, Fechamento, Fontes, SobreOAutor } from "@/components/site/blog/artigo-pecas";
import { OG_IMAGES, SITE_CONFIG, ogImage } from "@/lib/constants";
import { SITE_COLORS as C } from "@/lib/site-theme";
import { ARTIGOS_SOLTOS, buscarArtigoSolto } from "@/lib/blog";
import { grafoArtigo } from "@/lib/dados-estruturados";

// Artigos soltos: no ar antes do site institucional. Só os slugs de
// ARTIGOS_SOLTOS; qualquer outro endereço em /artigos/ é 404.
export const dynamicParams = false;

export function generateStaticParams() {
    return ARTIGOS_SOLTOS.map((artigo) => ({ slug: artigo.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const artigo = buscarArtigoSolto((await params).slug);
    if (!artigo) return {};
    const url = `${SITE_CONFIG.url}/artigos/${artigo.slug}`;
    const imagens = artigo.imagem ? ogImage(artigo.imagem.og, artigo.imagem.alt) : OG_IMAGES.hetero;
    return {
        // Título SEO do próprio texto, sem sufixo.
        title: artigo.tituloSeo,
        description: artigo.descricao,
        alternates: { canonical: url },
        robots: { index: true, follow: true },
        authors: [{ name: "Marcelo Colen" }],
        openGraph: {
            title: artigo.titulo,
            description: artigo.descricao,
            url,
            type: "article",
            locale: SITE_CONFIG.locale,
            siteName: SITE_CONFIG.fullName,
            publishedTime: artigo.publicadoEm,
            modifiedTime: artigo.atualizadoEm ?? artigo.publicadoEm,
            authors: ["Marcelo Colen"],
            images: imagens,
        },
        twitter: {
            card: "summary_large_image",
            title: artigo.tituloSeo,
            description: artigo.descricao,
            images: imagens.map((i) => i.url),
        },
    };
}

export default async function ArtigoSoltoPage({ params }: { params: Promise<{ slug: string }> }) {
    const artigo = buscarArtigoSolto((await params).slug);
    const Corpo = artigo ? CORPO_DO_ARTIGO_SOLTO[artigo.slug] : undefined;
    if (!artigo || !Corpo) notFound();

    return (
        <>
            <JsonLd data={grafoArtigo(artigo, { caminho: `/artigos/${artigo.slug}`, solto: true })} />

            <article aria-labelledby="artigo-titulo" className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-20" style={{ backgroundColor: C.bg1 }}>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-[420px] pointer-events-none"
                    style={{ background: "radial-gradient(ellipse 50% 70% at 50% 0%, rgba(201,162,39,0.07), transparent 70%)" }}
                />
                <Container className="relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] font-semibold" style={{ color: C.gold }}>
                            {artigo.area}
                        </p>
                        <h1 id="artigo-titulo" className="mt-4 text-balance" style={{ color: C.white, fontFamily: C.serif }}>
                            {artigo.titulo}
                        </h1>

                        <Assinatura artigo={artigo} comLinks={false} />

                        {artigo.imagem && (
                            <figure className="mt-10">
                                <Image
                                    src={artigo.imagem.src}
                                    alt={artigo.imagem.alt}
                                    width={artigo.imagem.largura}
                                    height={artigo.imagem.altura}
                                    sizes="(min-width: 768px) 768px, 100vw"
                                    priority
                                    className="w-full h-auto rounded-2xl"
                                    style={{ backgroundColor: C.bg2, border: "1px solid rgba(255,255,255,0.08)" }}
                                />
                                {artigo.imagem.legenda && (
                                    <figcaption className="mt-3 text-xs" style={{ color: C.gray3 }}>
                                        {artigo.imagem.legenda}
                                    </figcaption>
                                )}
                            </figure>
                        )}

                        <div className="mt-12 space-y-6">
                            <Corpo />
                        </div>

                        <Fechamento />
                        {artigo.fontes && <Fontes fontes={artigo.fontes} />}
                        <SobreOAutor comLinks={false} />
                    </div>
                </Container>
            </article>
        </>
    );
}
