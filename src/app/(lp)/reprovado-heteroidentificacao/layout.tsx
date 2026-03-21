import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Reprovado na Heteroidentificação? Saiba Como Recorrer | Marcelo Colen",
    description:
        "Reprovado na banca de heteroidentificação? O prazo do recurso pode ser de 2 a 5 dias. Análise gratuita e sigilosa. Atendimento nacional, 100% online.",
    alternates: {
        canonical: `${SITE_CONFIG.url}/reprovado-heteroidentificacao`,
    },
    openGraph: {
        title: "Reprovado na Heteroidentificação? Saiba Como Recorrer",
        description:
            "Prazo curto para recurso? Análise gratuita em horas. Advogado especialista em heteroidentificação, Mestre UFMG.",
        url: `${SITE_CONFIG.url}/reprovado-heteroidentificacao`,
        type: "website",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
