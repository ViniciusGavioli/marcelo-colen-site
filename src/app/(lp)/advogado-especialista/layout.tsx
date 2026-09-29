import type { Metadata } from "next";
import { SITE_CONFIG, OG_IMAGES } from "@/lib/constants";

// Esta LP não tinha metadata própria: herdava o title e a description da
// home, o que dava título duplicado e nenhum canonical próprio.
export const metadata: Metadata = {
    title: "Advogado Especialista em Heteroidentificação | Dr. Marcelo Colen",
    description:
        "Passou nas provas e foi reprovado pela banca de heteroidentificação? Análise do seu caso e das vias de contestação. Mestre UFMG, atuação nacional e 100% online.",
    alternates: {
        canonical: `${SITE_CONFIG.url}/advogado-especialista`,
    },
    openGraph: {
        title: "Advogado Especialista em Heteroidentificação | Dr. Marcelo Colen",
        description:
            "Passou nas provas e foi reprovado pela banca? Análise do seu caso e das vias de contestação administrativa e judicial.",
        url: `${SITE_CONFIG.url}/advogado-especialista`,
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
