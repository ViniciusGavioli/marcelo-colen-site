import type { Metadata } from "next";
import { SITE_CONFIG, DEFAULT_SEO } from "@/lib/constants";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

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
        images: [
            {
                url: `${SITE_CONFIG.url}/images/marcelo/marcelo-hero.jpg`,
                width: 1200,
                height: 630,
                alt: "Dr. Marcelo Colen — Advogado Especialista em Heteroidentificação e Cotas Raciais",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: DEFAULT_SEO.title,
        description: DEFAULT_SEO.description,
        images: [`${SITE_CONFIG.url}/images/marcelo/marcelo-hero.jpg`],
    },
};

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
        </>
    );
}
