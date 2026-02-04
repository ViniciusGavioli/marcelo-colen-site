import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

// Componentes LP /criminal
import {
    CriminalHero,
    CriminalIdentificacao,
    CriminalSolucao,
    CriminalAutoridade,
    CriminalEducacional,
    CriminalProvas,
    CriminalFaq,
    CriminalInstagram,
    CriminalFooter,
} from "@/components/landing/criminal";
import { FloatingWhatsApp } from "@/components/landing/cotas";

// SEO Metadata
export const metadata: Metadata = {
    title: "Defesa Criminal | Advogado Criminalista Especializado | Dr. Marcelo Colen",
    description: "Sua liberdade não pode esperar. Advogado criminalista especializado em defesa penal, habeas corpus e processos criminais. Atendimento urgente em todo Brasil.",
    keywords: ["advogado criminal", "advogado criminalista", "defesa criminal", "habeas corpus", "prisão", "processo criminal", "advogado penal"],
    openGraph: {
        title: "Defesa Criminal | Advogado Criminalista | Dr. Marcelo Colen",
        description: "Sua liberdade não pode esperar. Advogado criminalista especializado em defesa penal, habeas corpus e processos criminais.",
        url: `${SITE_CONFIG.url}/criminal`,
        siteName: SITE_CONFIG.fullName,
        locale: "pt_BR",
        type: "website",
    },
    alternates: {
        canonical: `${SITE_CONFIG.url}/criminal`,
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function CriminalPage() {
    return (
        <>
            <main>
                {/* DOBRA 1: Hero - Impacto Imediato */}
                <CriminalHero />

                {/* DOBRA 2: Identificação - Validando a situação */}
                <CriminalIdentificacao />

                {/* DOBRA 3: Solução - Como atuamos */}
                <CriminalSolucao />

                {/* DOBRA 4: Autoridade - Quem é Dr. Marcelo */}
                <CriminalAutoridade />

                {/* Conteúdo Educacional - Direitos do acusado */}
                <CriminalEducacional />

                {/* DOBRA 5: Provas - O que você precisa saber */}
                <CriminalProvas />

                {/* FAQ */}
                <CriminalFaq />

                {/* Instagram + CTA */}
                <CriminalInstagram />
            </main>

            {/* Rodapé de fechamento */}
            <CriminalFooter />

            {/* Floating WhatsApp Button - Sticky no mobile */}
            <FloatingWhatsApp />
        </>
    );
}
