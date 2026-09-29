import type { Metadata } from "next";
import { SITE_CONFIG, OG_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Mandado de Segurança contra Heteroidentificação | Dr. Marcelo Colen",
    description:
        "Recurso negado na heteroidentificação? A decisão da banca ainda pode ser revista na Justiça por mandado de segurança. Análise do seu caso em horas, dentro do prazo de 120 dias. Dr. Marcelo Colen, Mestre UFMG, atuação nacional.",
    alternates: {
        canonical: `${SITE_CONFIG.url}/mandado-seguranca-heteroidentificacao`,
    },
    openGraph: {
        title: "Mandado de Segurança contra Heteroidentificação | Dr. Marcelo Colen",
        description:
            "Recurso administrativo negado? A decisão da banca pode ser levada à Justiça. Análise do seu caso em horas, atuação nacional e 100% online.",
        url: `${SITE_CONFIG.url}/mandado-seguranca-heteroidentificacao`,
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
