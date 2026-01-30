import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

// Componentes da Home
import { HomeHero } from "@/components/landing/home/home-hero";
import { HomeAreas } from "@/components/landing/home/home-areas";
import { HomeAutoridade } from "@/components/landing/home/home-autoridade";
import { HomeInstagram } from "@/components/landing/home/home-instagram";
import { FloatingWhatsApp } from "@/components/landing/cotas";

// SEO Metadata
export const metadata: Metadata = {
  title: "Dr. Marcelo Colen | Advogado Especialista em Crimes Raciais e Heteroidentificação",
  description: "Advocacia especializada em crimes de racismo, injúria racial, heteroidentificação e defesa criminal. Atendimento em todo Brasil. Busque justiça com quem entende do assunto.",
  keywords: [
    "advogado racismo",
    "crimes raciais",
    "injúria racial",
    "heteroidentificação",
    "cotas raciais",
    "advogado negro",
    "defesa criminal",
    "discriminação racial",
    "direito antidiscriminatório",
  ],
  openGraph: {
    title: "Dr. Marcelo Colen | Advogado Especialista em Crimes Raciais",
    description: "Advocacia especializada em crimes de racismo, heteroidentificação e defesa criminal. Atendimento em todo Brasil.",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.fullName,
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return (
    <>
      <main>
        {/* DOBRA 1: Hero - Impacto Visual */}
        <HomeHero />

        {/* DOBRA 2: Áreas de Atuação */}
        <HomeAreas />

        {/* DOBRA 3: Quem é Dr. Marcelo */}
        <HomeAutoridade />

        {/* DOBRA 4: CTA Final + Instagram */}
        <HomeInstagram />
      </main>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </>
  );
}
