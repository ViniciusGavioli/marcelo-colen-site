import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Advogado Especialista em Cotas Raciais | Marcelo Colen",
    description:
        "Advogado especialista em cotas raciais e heteroidentificação em concursos públicos. Recurso administrativo e judicial em todo o Brasil. Mestre UFMG.",
    alternates: {
        canonical: `${SITE_CONFIG.url}/advogado-cotas-raciais`,
    },
    openGraph: {
        title: "Advogado Especialista em Cotas Raciais | Marcelo Colen",
        description:
            "Especialista em defesa de candidatos cotistas. Recurso administrativo e judicial contra indeferimento em heteroidentificação.",
        url: `${SITE_CONFIG.url}/advogado-cotas-raciais`,
        type: "website",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
