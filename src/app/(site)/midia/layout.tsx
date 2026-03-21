import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Na Mídia | Marcelo Colen — Entrevistas, Palestras e Aparições",
    description:
        "Acompanhe as aparições de Marcelo Colen na mídia: TV Globo Minas, TJMG, Assembleia Legislativa, podcasts e eventos da OAB sobre igualdade racial e direito antidiscriminatório.",
    alternates: {
        canonical: `${SITE_CONFIG.url}/midia`,
    },
    openGraph: {
        title: "Na Mídia | Marcelo Colen",
        description: "Entrevistas, palestras e aparições públicas sobre igualdade racial e direito antidiscriminatório.",
        url: `${SITE_CONFIG.url}/midia`,
        type: "website",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
