import Link from "next/link";
import { FileCheck, Landmark, Scale } from "lucide-react";
import { SITE_COLORS as C } from "@/lib/site-theme";
import type { Artigo } from "@/lib/blog";

// Peças do blog, no idioma da home: card em véu translúcido, área em selo
// dourado, título em Cormorant. Os ícones são os mesmos das áreas na home.
const ICONE_DA_AREA = {
    "Heteroidentificação": FileCheck,
    "Direito Antidiscriminatório": Scale,
    Consultoria: Landmark,
} as const;

export function SeloEmConstrucao() {
    return (
        <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] whitespace-nowrap"
            style={{ color: C.gold, backgroundColor: C.goldSoft, border: `1px solid ${C.goldBorder}` }}
        >
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.gold }} />
            Em construção
        </span>
    );
}

export function CartaoArtigo({ artigo, nivelTitulo = "h2" }: { artigo: Artigo; nivelTitulo?: "h2" | "h3" }) {
    const Icone = ICONE_DA_AREA[artigo.area];
    const Titulo = nivelTitulo;
    return (
        <Link
            href={`/blog/${artigo.slug}`}
            className="group h-full rounded-2xl overflow-hidden flex flex-col transition-colors hover:border-[rgba(201,162,39,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
            style={{
                backgroundColor: C.surface,
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "0 8px 28px rgba(0,0,0,0.2)",
                outlineColor: C.gold,
            }}
        >
            {/* Faixa de capa: ainda não há imagem por artigo, então a capa é o
                ícone da área sobre a textura do site. */}
            <div
                aria-hidden="true"
                className="relative h-32 flex items-center justify-center"
                style={{
                    background: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(201,162,39,0.14), transparent 70%), #0d0d0d",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
            >
                <div
                    className="absolute inset-0"
                    style={{ backgroundImage: "url('/texture-juridica.webp')", backgroundSize: "600px 400px", opacity: 0.05 }}
                />
                <span
                    className="relative w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: C.goldSoft, border: `1px solid ${C.goldBorder}` }}
                >
                    <Icone className="w-5 h-5" style={{ color: C.gold }} />
                </span>
            </div>

            <div className="flex-1 flex flex-col p-6">
                <p className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: C.gold }}>
                    {artigo.area}
                </p>
                {/* Tamanho inline: o h2/h3 global de globals.css vence as classes. */}
                <Titulo className="mt-3 text-balance" style={{ color: C.white, fontFamily: C.serif, fontSize: "1.375rem", lineHeight: 1.3 }}>
                    {artigo.titulo}
                </Titulo>
                <p className="mt-3 text-sm leading-relaxed text-pretty" style={{ color: C.gray2 }}>
                    {artigo.resumo}
                </p>
                <div className="mt-auto pt-6 flex flex-wrap items-center justify-between gap-3">
                    <p className="text-xs" style={{ color: C.gray3 }}>
                        Marcelo Colen
                    </p>
                    <SeloEmConstrucao />
                </div>
            </div>
        </Link>
    );
}
