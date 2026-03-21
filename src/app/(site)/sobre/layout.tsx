import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Sobre Dr. Marcelo Colen | Mestre UFMG · Diretor OAB/MG",
    description:
        "Conheça a trajetória de Marcelo Colen: advogado criminalista, Mestre em Direito pela UFMG, Diretor de Diversidade da OAB/MG e Secretário da Comissão Nacional de Igualdade Racial da OAB Federal.",
    alternates: {
        canonical: `${SITE_CONFIG.url}/sobre`,
    },
    openGraph: {
        title: "Sobre Dr. Marcelo Colen",
        description: "Mestre UFMG · Diretor de Diversidade OAB/MG · Secretário da Comissão Nacional da OAB Federal",
        url: `${SITE_CONFIG.url}/sobre`,
        type: "profile",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
