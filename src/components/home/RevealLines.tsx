/**
 * Revelação tipográfica linha a linha: cada linha sobe de dentro de uma
 * máscara `overflow-hidden`, escalonada.
 *
 * Em CSS puro, e não em framer-motion, por dois motivos. O framer não anima
 * neste projeto (medido: `animate` fica parado no valor inicial em todos os
 * componentes). E mesmo que animasse, CSS é melhor aqui: a headline revela
 * antes do JavaScript hidratar, em vez de ficar escondida esperando.
 *
 * Server Component: não precisa de estado nem de efeito.
 * `prefers-reduced-motion` é respeitado na própria folha de estilo.
 */
export function RevealLines({
    linhas,
    className = "",
    style,
    delayInicial = 0,
}: {
    linhas: string[];
    className?: string;
    style?: React.CSSProperties;
    /** Segundos antes da primeira linha começar. */
    delayInicial?: number;
}) {
    return (
        <>
            {linhas.map((linha, i) => (
                <span key={linha + i} className="block overflow-hidden">
                    <span
                        className={`mc-linha ${className}`}
                        style={{
                            ...style,
                            animationDelay: `${delayInicial + i * 0.09}s`,
                        }}
                    >
                        {linha}
                    </span>
                </span>
            ))}
        </>
    );
}
