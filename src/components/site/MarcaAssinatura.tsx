import { SITE_COLORS as C } from "@/lib/site-theme";
import { SITE_CONFIG } from "@/lib/constants";

// Logo em assinatura, aprovada em outubro de 2026 no lugar do monograma MC.
// A versão compacta (cabeçalho) é só o nome; a completa (rodapé) leva o
// sublinhado dourado e a linha "Advogado · OAB".
type Props = {
    completa?: boolean;
    /** tamanho da assinatura em px */
    tamanho?: number;
};

export function MarcaAssinatura({ completa = false, tamanho = 34 }: Props) {
    const nome = (
        <span
            className="whitespace-nowrap"
            style={{ fontFamily: C.assinatura, fontSize: tamanho, lineHeight: 1, color: C.marfim }}
        >
            Marcelo Colen
        </span>
    );

    if (!completa) return nome;

    return (
        <span className="inline-flex flex-col items-center" aria-label={`Marcelo Colen, advogado, ${SITE_CONFIG.oab}`} role="img">
            {nome}
            <svg
                aria-hidden="true"
                viewBox="0 0 300 18"
                preserveAspectRatio="none"
                style={{ width: "78%", height: tamanho * 0.25, marginTop: -tamanho * 0.14, overflow: "visible" }}
            >
                <path d="M4 12 C 70 2, 160 4, 296 9" fill="none" stroke={C.gold} strokeWidth={1.6} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
            </svg>
            <span
                className="uppercase whitespace-nowrap font-semibold"
                style={{ fontSize: Math.max(10, tamanho * 0.2), letterSpacing: "0.36em", paddingLeft: "0.36em", color: C.gold, marginTop: tamanho * 0.12 }}
            >
                Advogado · {SITE_CONFIG.oab}
            </span>
        </span>
    );
}
