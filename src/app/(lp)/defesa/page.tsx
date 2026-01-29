import type { Metadata } from "next";
import { DEFESA_PAGE } from "@/lib/defesa-data";
import { SITE_CONFIG } from "@/lib/constants";

// Componentes LP /defesa
import { DefesaHero } from "@/components/landing/defesa/defesa-hero";
import { DefesaIdentificacao } from "@/components/landing/defesa/defesa-identificacao";
import { DefesaSolucao } from "@/components/landing/defesa/defesa-solucao";
import { DefesaAutoridade } from "@/components/landing/defesa/defesa-autoridade";
import { DefesaProvas } from "@/components/landing/defesa/defesa-provas";
import { DefesaFaq } from "@/components/landing/defesa/defesa-faq";
import { FloatingWhatsApp } from "@/components/landing/cotas";

// SEO Metadata
export const metadata: Metadata = {
  title: "Racismo é Crime | Advogado Especialista em Defesa de Vítimas | Dr. Marcelo Colen",
  description: "Sofreu racismo ou injúria racial? Advogado negro especialista em direito antidiscriminatório. Buscamos a punição do agressor e sua indenização. Atendimento em todo Brasil.",
  keywords: ["racismo", "injúria racial", "advogado racismo", "danos morais racismo", "crime de racismo", "advogado negro", "discriminação racial"],
  openGraph: {
    title: "Racismo é Crime | Advogado Especialista | Dr. Marcelo Colen",
    description: "Sofreu racismo ou injúria racial? Advogado especialista em direito antidiscriminatório. Buscamos a punição do agressor e sua indenização.",
    url: `${SITE_CONFIG.url}/defesa`,
    siteName: SITE_CONFIG.fullName,
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/defesa`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DefesaPage() {
  return (
    <>
      <main>
        {/* DOBRA 1: Hero - Impacto Imediato */}
        <DefesaHero />

        {/* DOBRA 2: Identificação - Validando a Dor */}
        <DefesaIdentificacao />

        {/* DOBRA 3: Solução - O Caminho da Justiça */}
        <DefesaSolucao />

        {/* DOBRA 4: Autoridade - Quem é Dr. Marcelo */}
        <DefesaAutoridade />

        {/* DOBRA 5: Provas - Filtro de Qualidade */}
        <DefesaProvas />

        {/* FAQ (bônus) */}
        <DefesaFaq />
      </main>

      {/* Floating WhatsApp Button - Sticky no mobile */}
      <FloatingWhatsApp />
    </>
  );
}
