import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Advogado Especialista em Cotas Raciais - Marcelo Colen",
    description: "Atuação em recursos contra indeferimento em heteroidentificação e concursos públicos. Análise de caso especializada.",
    alternates: {
        canonical: `${SITE_CONFIG.url}/advogado-cotas-raciais`,
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
