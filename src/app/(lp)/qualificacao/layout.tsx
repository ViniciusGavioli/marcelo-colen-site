import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Reprovado na Banca de Heteroidentificação? | Análise Gratuita | Marcelo Colen",
  description: "Teve sua autodeclaração racial rejeitada? Descreva seu caso e receba orientação jurídica especializada. Atuação em UFMG, UFU, UFOP, UFV e concursos em MG.",
  keywords: [
    "reprovado heteroidentificação",
    "recurso banca heteroidentificação",
    "advogado cotas raciais",
    "UFMG heteroidentificação",
    "recurso cotas MG",
  ],
  openGraph: {
    title: "Reprovado na Banca de Heteroidentificação?",
    description: "Não se desespere. A defesa começa agora. Análise gratuita do seu caso.",
    url: `${SITE_CONFIG.url}/qualificacao`,
    siteName: SITE_CONFIG.fullName,
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: false, // Página de campanha, não indexar
    follow: false,
  },
};

export default function QualificacaoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
