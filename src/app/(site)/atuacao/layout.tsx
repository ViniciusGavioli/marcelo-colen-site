import type { Metadata } from "next";
import { SITE_CONFIG, OG_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Áreas de Atuação | Marcelo Colen Advocacia",
    description:
        "Conheça as áreas de atuação de Marcelo Colen: heteroidentificação e cotas raciais, compliance antidiscriminatório, direito criminal e consultoria em igualdade racial.",
    alternates: {
        canonical: `${SITE_CONFIG.url}/atuacao`,
    },
    openGraph: {
        title: "Áreas de Atuação | Marcelo Colen Advocacia",
        description: "Heteroidentificação · Cotas Raciais · Compliance Antidiscriminatório · Direito Criminal",
        url: `${SITE_CONFIG.url}/atuacao`,
        type: "website",
        images: OG_IMAGES.institucional,
    },
    twitter: {
        card: "summary_large_image",
        images: OG_IMAGES.institucional.map((i) => i.url),
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
