import type { Metadata } from "next";
import { Container } from "@/components/layout";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Divisor } from "@/components/site/home/primitivos";
import { CartaoArtigo } from "@/components/site/blog/pecas";
import { SITE_CONFIG, OG_IMAGES } from "@/lib/constants";
import { SITE_COLORS as C } from "@/lib/site-theme";
import { ARTIGOS } from "@/lib/blog";

// noindex enquanto os artigos estiverem em construção (ver lib/blog.ts).
export const metadata: Metadata = {
    title: "Blog | Marcelo Colen",
    description:
        "Artigos de Marcelo Colen sobre heteroidentificação, direito antidiscriminatório e as demais áreas de atuação do escritório.",
    alternates: { canonical: `${SITE_CONFIG.url}/blog` },
    robots: { index: false, follow: true },
    openGraph: {
        title: "Blog | Marcelo Colen",
        url: `${SITE_CONFIG.url}/blog`,
        type: "website",
        images: OG_IMAGES.institucional,
    },
};

export default function BlogPage() {
    return (
        <section aria-labelledby="blog-titulo" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28" style={{ backgroundColor: C.bg1 }}>
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
                            Textos sobre heteroidentificação, direito antidiscriminatório e as demais áreas em que o
                            escritório atua. Os primeiros artigos estão em construção.
                        </p>
                    </div>

                    <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {ARTIGOS.map((artigo) => (
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
