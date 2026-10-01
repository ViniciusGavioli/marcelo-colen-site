import { T } from "@/lib/institutional-theme";

// Grão gerado por feTurbulence, em data URI: nenhuma requisição de rede e
// nenhum arquivo de textura para carregar.
const GRAO = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='260' height='260' filter='url(%23g)'/%3E%3C/svg%3E")`;

/**
 * Grão de superfície. Em fundo claro puxa para papel impresso; em fundo
 * escuro puxa para tinta. Opacidade baixa de propósito: o efeito deve ser
 * sentido, não visto. Sempre decorativo, sempre fora do fluxo de leitura.
 */
export function Grain({ sobre }: { sobre: "papel" | "tinta" }) {
    const papel = sobre === "papel";
    return (
        <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
                backgroundImage: GRAO,
                opacity: papel ? 0.055 : 0.07,
                mixBlendMode: papel ? "multiply" : "overlay",
            }}
        />
    );
}

/**
 * Marca em água-forte. Mesmas iniciais da marca compacta, em serifa itálica
 * sobre a linha de assinatura. Ocupa área grande e fica quase invisível:
 * dá profundidade ao fundo sem virar ornamento com peso próprio.
 */
export function Watermark({
    sobre,
    className = "",
}: {
    sobre: "papel" | "tinta";
    className?: string;
}) {
    const cor = sobre === "papel" ? T.onPaper : T.onInk;
    return (
        <div
            aria-hidden
            className={`pointer-events-none absolute select-none ${className}`}
            style={{ opacity: sobre === "papel" ? 0.05 : 0.07 }}
        >
            <svg viewBox="0 0 200 200" width="100%" height="100%">
                <text
                    x="100"
                    y="118"
                    textAnchor="middle"
                    fontFamily={T.serif}
                    fontStyle="italic"
                    fontSize="92"
                    fill={cor}
                >
                    MC
                </text>
                <line
                    x1="44"
                    y1="140"
                    x2="156"
                    y2="140"
                    stroke={T.copper}
                    strokeWidth="4"
                />
            </svg>
        </div>
    );
}

/**
 * Régua fina com um trecho em bordô à esquerda. Marca início de seção sem
 * precisar de mais um título.
 */
export function SectionRule({ sobre }: { sobre: "papel" | "tinta" }) {
    return (
        <div
            aria-hidden
            className="flex"
            style={{ height: 2, marginBottom: "2.5rem" }}
        >
            <span style={{ width: 56, backgroundColor: T.copper }} />
            <span
                style={{
                    flex: 1,
                    backgroundColor:
                        sobre === "papel" ? T.ruleOnPaper : T.ruleOnInk,
                }}
            />
        </div>
    );
}
