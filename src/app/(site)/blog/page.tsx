import type { Metadata } from "next";
import { Container } from "@/components/layout";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { JsonLd } from "@/components/site/JsonLd";
import { Divisor } from "@/components/site/home/primitivos";
import { CartaoArtigo } from "@/components/site/blog/pecas";
import { SITE_CONFIG, OG_IMAGES } from "@/lib/constants";
import { SITE_COLORS as C } from "@/lib/site-theme";
import { ARTIGOS, ARTIGOS_PUBLICADOS } from "@/lib/blog";
import { ID } from "@/lib/dados-estruturados";

const URL_BLOG = `${SITE_CONFIG.url}/blog`;
const DESCRICAO =
    "Artigos de Marcelo Colen sobre heteroidentificação, cotas raciais em concursos e direito antidiscriminatório, com base na lei e no texto oficial.";

export const metadata: Metadata = {
    title: "Blog: heteroidentificação e cotas raciais | Marcelo Colen",
    description: DESCRICAO,
    alternates: { canonical: URL_BLOG },
    openGraph: {
        title: "Blog | Marcelo Colen",
        description: DESCRICAO,
        url: URL_BLOG,
        type: "website",
        images: OG_IMAGES.institucional,
    },
};

// Publicados primeiro; os em construção ficam no fim da lista.
const LISTA = [...ARTIGOS_PUBLICADOS, ...ARTIGOS.filter((a) => !a.publicadoEm)];

const DADOS = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${URL_BLOG}#blog`,
    name: "Blog de Marcelo Colen",
    description: DESCRICAO,
    url: URL_BLOG,
    inLanguage: "pt-BR",
    publisher: { "@id": ID.escritorio },
    blogPost: ARTIGOS_PUBLICADOS.map((a) => ({
        "@type": "BlogPosting",
        headline: a.titulo,
        url: `${URL_BLOG}/${a.slug}`,
        datePublished: a.publicadoEm,
        author: { "@id": ID.marcelo },
    })),
};

export default function BlogPage() {
    return (
        <section aria-labelledby="blog-titulo" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28" style={{ backgroundColor: C.bg1 }}>
            <JsonLd data={DADOS} />
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[480px] pointer-events-none"
                style={{ background: "radial-gradient(ellipse 50% 70% at 50% 0%, rgba(201,162,39,0.07), transparent 70%)" }}
            />
            <Container className="relative z-10">
                <div className="max-w-6xl mx-auto">
                    <Breadcrumb items={[{ label: "Blog" }]} />

                    <div className="text-center mt-10">
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.22em] mb-3 font-semibold" style={{ color: C.gold }}>
                            Blog
                        </p>
                        <h1 id="blog-titulo" className="mb-3 text-balance" style={{ color: C.white, fontFamily: C.serif }}>
                            Artigos e análises
                        </h1>
                        <Divisor />
                        <p className="text-sm md:text-base mt-5 max-w-[56ch] mx-auto leading-relaxed text-pretty" style={{ color: C.gray2 }}>
                            Heteroidentificação, cotas raciais em concursos e direito antidiscriminatório, explicados a partir da lei
                            e do texto oficial de cada norma.
                        </p>
                    </div>

                    <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {LISTA.map((artigo) => (
                            <li key={artigo.slug}>
                                <CartaoArtigo artigo={artigo} />
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    );
}
