import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Reprovado na Heteroidentificação? Saiba o que fazer - Marcelo Colen",
    description: "Foi reprovado ou indeferido na comissão de heteroidentificação? O prazo pode ser curto, saiba como recorrer agora.",
    alternates: {
        canonical: `${SITE_CONFIG.url}/reprovado-heteroidentificacao`,
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
