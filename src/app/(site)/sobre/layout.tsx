import type { Metadata } from "next";
import { SITE_CONFIG, OG_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Marcelo Colen, advogado | Mestre UFMG · Diretor OAB/MG",
    // Até 155 caracteres, para não ser cortada na busca.
    description:
        "Trajetória de Marcelo Colen, advogado (OAB/MG 167.463): Mestre em Direito pela UFMG, Diretor de Diversidade e Inclusão da OAB/MG e conselheiro seccional.",
    alternates: {
        canonical: `${SITE_CONFIG.url}/sobre`,
    },
    openGraph: {
        title: "Sobre Dr. Marcelo Colen",
        description: "Mestre UFMG · Diretor de Diversidade OAB/MG · Secretário da Comissão Nacional da OAB Federal",
        url: `${SITE_CONFIG.url}/sobre`,
        type: "profile",
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
