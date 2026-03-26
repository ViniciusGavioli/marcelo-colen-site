import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Recurso Contra Heteroidentificação - Marcelo Colen",
    description: "Se sua autodeclaração foi indeferida na heteroidentificação, ainda pode ser possível recorrer. Análise rápida para verificar validade do recurso.",
    alternates: {
        canonical: `${SITE_CONFIG.url}/recurso-heteroidentificacao`,
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
