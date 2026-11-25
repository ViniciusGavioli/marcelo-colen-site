import { DadosEstruturadosBase } from "@/components/site/JsonLd";
import { MarcaAssinatura } from "@/components/site/MarcaAssinatura";
import { SITE_CONFIG } from "@/lib/constants";
import { SITE_COLORS as C } from "@/lib/site-theme";

// Artigo solto: publicado no domínio antes do lançamento do site
// institucional. Cabeçalho e rodapé mínimos, sem menu nem links para as
// páginas do site, que ainda não foram lançadas. Quando o site entrar no ar,
// o artigo pode migrar para /blog com redirecionamento 301.
const FIO = "rgba(255,255,255,0.08)";

export default function ArtigoSoltoLayout({ children }: { children: React.ReactNode }) {
    const ano = new Date().getFullYear();

    return (
        <div className="flex flex-col min-h-screen" style={{ backgroundColor: C.bg1, color: C.white }}>
            <DadosEstruturadosBase />

            <header style={{ borderBottom: `1px solid ${FIO}` }}>
                <div className="mx-auto max-w-3xl px-4 py-5 md:px-6 md:py-6">
                    <MarcaAssinatura altura={32} prioridade />
                </div>
            </header>

            <main className="flex-1">{children}</main>

            <footer style={{ borderTop: `1px solid ${FIO}` }}>
                <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-14">
                    <MarcaAssinatura completa altura={80} />
                    <address className="mt-8 not-italic text-sm leading-relaxed" style={{ color: C.gray2 }}>
                        {SITE_CONFIG.address.street}, {SITE_CONFIG.address.complement.toLowerCase()}
                        <br />
                        {SITE_CONFIG.address.neighborhood}, {SITE_CONFIG.address.city} ({SITE_CONFIG.address.state})
                    </address>
                    <p className="mt-8 pt-6 text-xs" style={{ color: C.gray3, borderTop: `1px solid ${FIO}` }}>
                        {SITE_CONFIG.oab} · © {ano} Marcelo Colen Advocacia. Todos os direitos reservados.
                    </p>
                </div>
            </footer>
        </div>
    );
}
