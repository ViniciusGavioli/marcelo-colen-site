import type { Metadata } from "next";
import { SITE_CONFIG, OG_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Recurso Contra Heteroidentificação | Dr. Marcelo Colen",
    description:
        "Indeferido na heteroidentificação? Análise jurídica gratuita em horas. Atuação nacional, 100% online. Dr. Marcelo Colen, Especialista, Mestre UFMG.",
    alternates: {
        canonical: `${SITE_CONFIG.url}/recurso-heteroidentificacao`,
    },
    openGraph: {
        title: "Recurso Contra Heteroidentificação | Dr. Marcelo Colen",
        description:
            "Indeferido na heteroidentificação? Análise jurídica gratuita em horas. Atuação nacional e 100% online.",
        url: `${SITE_CONFIG.url}/recurso-heteroidentificacao`,
        type: "website",
        images: OG_IMAGES.hetero,
    },
    twitter: {
        card: "summary_large_image",
        images: OG_IMAGES.hetero.map((i) => i.url),
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
