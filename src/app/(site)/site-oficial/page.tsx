import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { SITE_COLORS as C } from "@/lib/site-theme";
import { getDirectWhatsAppLink } from "@/lib/whatsapp";
import { SiteHero } from "@/components/site/home/SiteHero";
import { SiteAreas } from "@/components/site/home/SiteAreas";
import { SiteTrajetoria } from "@/components/site/home/SiteTrajetoria";
import { SiteContato } from "@/components/site/home/SiteContato";
import { MENSAGEM_WHATSAPP_SITE } from "@/components/site/home/primitivos";
import { MIDIA_SITE } from "@/components/site/home/midia";
import { HeteroAvaliacoesGoogle } from "@/components/landing/hetero/hetero-avaliacoes-google";
import { HeteroAtuacaoPublica } from "@/components/landing/hetero/hetero-atuacao-publica";
import { HeteroInstagramPerfil } from "@/components/landing/hetero/hetero-instagram-perfil";
import { HeteroAtendimentoNacional } from "@/components/landing/hetero/hetero-atendimento-nacional";

// Endereço provisório enquanto a raiz redireciona para a LP de recurso.
// Fora do índice para o Google não registrar uma URL que vai mudar; o
// canonical herdado de (site)/layout.tsx apontaria para a raiz, que é a LP.
export const metadata: Metadata = {
    alternates: { canonical: `${SITE_CONFIG.url}${SITE_CONFIG.homePath}` },
    robots: { index: false, follow: true },
};

// Home no idioma visual da LP de recurso (preto, dourado, Cormorant), que o
// cliente aprovou. Reaproveita as seções da LP que valem para o escritório
// inteiro (avaliações do Google, Instagram, mídia, mapa) e completa com hero,
// áreas, trajetória e contato próprios do site.
//
// Ritmo de fundo: hero e áreas no preto base (o fio dourado do hero separa),
// avaliações no degrau de cima, trajetória e mídia no base (a mídia traz fio
// próprio), Instagram e mapa no degrau de cima, contato no base.
export default function HomePage() {
    return (
        <>
            <SiteHero />
            <SiteAreas />
            <HeteroAvaliacoesGoogle />
            <SiteTrajetoria />
            <HeteroAtuacaoPublica
                kicker="Na mídia"
                titulo="Entrevistas, debates e participações públicas"
                texto="Participações em telejornais, transmissões ao vivo, debates e instituições sobre Direito, igualdade racial e questões institucionais."
                itens={MIDIA_SITE}
                colunas={3}
                rodape={
                    <div className="mt-12 text-center">
                        <Link
                            href="/midia"
                            className="text-sm font-semibold pb-0.5 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                            style={{ color: C.gold, borderBottom: `1px solid ${C.goldBorder}`, outlineColor: C.gold }}
                        >
                            Ver todas as participações
                        </Link>
                    </div>
                }
            />
            <HeteroInstagramPerfil />
            <HeteroAtendimentoNacional
                titulo={
                    <>
                        Atendimento em <span style={{ color: C.gold }}>todo o Brasil</span>
                    </>
                }
                texto="O escritório fica em Belo Horizonte e atende clientes de todo o país. O primeiro contato e o envio de documentos podem ser feitos pelo WhatsApp, de onde você estiver."
                fatos={[
                    "Atendimento em todos os estados",
                    "Primeiro contato pelo WhatsApp",
                    "Contato protegido pelo sigilo profissional",
                ]}
                cta={{ rotulo: "Falar com o escritório", href: getDirectWhatsAppLink(MENSAGEM_WHATSAPP_SITE) }}
            />
            <SiteContato />
        </>
    );
}
