import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { SITE_CONFIG } from "@/lib/constants";

// Home antiga, substituída por /site-oficial. Continua no ar, mas fora do
// índice: duplicava o título da home e fala em "parecer antropológico" para
// heteroidentificação, prova que o Decreto 12.536/2025 (art. 9º, § 2º) veda.
export const metadata: Metadata = {
    alternates: { canonical: `${SITE_CONFIG.url}/inicio` },
    robots: { index: false, follow: true },
};

// Layout com Header e Footer para páginas normais do site

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <main className="flex-1 pt-16 md:pt-20">{children}</main>
            <Footer />
        </>
    );
}
