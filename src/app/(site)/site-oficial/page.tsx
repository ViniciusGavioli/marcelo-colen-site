import type { Metadata } from "next";
import { T } from "@/lib/institutional-theme";
import { SITE_CONFIG } from "@/lib/constants";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeCredentials } from "@/components/home/HomeCredentials";
import { PracticeAreas } from "@/components/home/PracticeAreas";
import { SituationPaths } from "@/components/home/SituationPaths";
import { Trajectory } from "@/components/home/Trajectory";
import { InstitutionalRoles } from "@/components/home/InstitutionalRoles";
import { MediaSection } from "@/components/home/MediaSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { MethodSection } from "@/components/home/MethodSection";
import { ContactSection } from "@/components/home/ContactSection";

// Endereço provisório enquanto a raiz redireciona para a LP de recurso.
// Fora do índice para o Google não registrar uma URL que vai mudar; o
// canonical herdado de (site)/layout.tsx apontaria para a raiz, que é a LP.
export const metadata: Metadata = {
    alternates: { canonical: `${SITE_CONFIG.url}${SITE_CONFIG.homePath}` },
    robots: { index: false, follow: true },
};

// Server Component. Só PracticeAreas e SituationPaths rodam no cliente, por
// causa do accordion e da camada de contexto; o resto é HTML estático.
//
// Ritmo de fundo, para o leitor perceber mudança de assunto:
//   hero escuro, credenciais claro, áreas neutro, situações escuro,
//   trajetória claro, institucional neutro, mídia escuro, artigos claro,
//   forma de atuação neutro, contato escuro.
export default function HomePage() {
    return (
        // O layout do grupo (site) define fundo escuro e texto branco para as
        // páginas antigas. A home tem seções claras, então reancora aqui.
        // AttorneyJsonLd já é montado por (site)/layout.tsx; repetir aqui
        // colocaria dois blocos de dado estruturado na mesma página.
        <div style={{ backgroundColor: T.paper, color: T.onPaper }}>
            <HomeHero />
            <HomeCredentials />
            <PracticeAreas />
            <SituationPaths />
            <Trajectory />
            <InstitutionalRoles />
            <MediaSection />
            <InsightsSection />
            <MethodSection />
            <ContactSection />
        </div>
    );
}
