import type { Metadata } from "next";
import { SITE_CONFIG, DEFAULT_SEO, OG_IMAGES } from "@/lib/constants";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { AttorneyJsonLd } from "@/components/site/JsonLd";
import { SITE_COLORS } from "@/lib/site-theme";

export const metadata: Metadata = {
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
    alternates: {
        canonical: SITE_CONFIG.url,
    },
    openGraph: {
        type: "website",
        locale: SITE_CONFIG.locale,
        url: SITE_CONFIG.url,
        siteName: SITE_CONFIG.fullName,
        title: DEFAULT_SEO.title,
        description: DEFAULT_SEO.description,
        // marcelo-hero.jpg é 854x1280 (retrato) e estava declarado como
        // 1200x630 — preview social cortado. OG_IMAGES aponta para as peças
        // 1200x630 reais geradas por scripts/generate-og.mjs.
        images: OG_IMAGES.institucional,
    },
    twitter: {
        card: "summary_large_image",
        title: DEFAULT_SEO.title,
        description: DEFAULT_SEO.description,
        images: OG_IMAGES.institucional.map((i) => i.url),
    },
};

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        // globals.css define body como tema claro (#F8F9FA sobre #0A192F),
        // herdado por todo o site escuro: aparecia como faixa clara em
        // overscroll, em página curta e no primeiro paint. Ancorado aqui para
        // não alterar o token global, de que as LPs dependem.
        <div
            className="flex flex-col min-h-screen"
            style={{ backgroundColor: SITE_COLORS.bg1, color: SITE_COLORS.white }}
        >
            <AttorneyJsonLd />
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
        </div>
    );
}
