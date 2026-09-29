import type { Metadata } from "next";
import { SITE_CONFIG, OG_IMAGES } from "@/lib/constants";

// Esta LP não tinha metadata própria: herdava o title e a description da
// home, o que dava título duplicado e nenhum canonical próprio.
export const metadata: Metadata = {
    title: "Cotas Raciais e Heteroidentificação | Dr. Marcelo Colen",
    description:
        "Aprovado nas provas e eliminado na comissão de heteroidentificação? O prazo recursal é curto. Análise do seu caso por advogado especialista, Mestre UFMG.",
    alternates: {
        canonical: `${SITE_CONFIG.url}/lp-principal-cotas`,
    },
    openGraph: {
        title: "Cotas Raciais e Heteroidentificação | Dr. Marcelo Colen",
        description:
            "Aprovado nas provas e eliminado na comissão? Análise do seu caso e das vias de contestação. Atuação nacional.",
        url: `${SITE_CONFIG.url}/lp-principal-cotas`,
        type: "website",
        images: OG_IMAGES.cotas,
    },
    twitter: {
        card: "summary_large_image",
        images: OG_IMAGES.cotas.map((i) => i.url),
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
