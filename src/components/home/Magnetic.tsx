"use client";

import { useCallback, useRef, useState } from "react";

/**
 * O elemento gravita de leve na direção do cursor. Detalhe pequeno, sensação
 * cara, e é o que separa um botão que só troca de opacidade de um botão que
 * responde ao gesto.
 *
 * Transform direto com transição CSS, sem framer-motion, que não anima neste
 * projeto. O easing de saída é mais longo que o de entrada, para o elemento
 * voltar ao lugar sem solavanco.
 *
 * Só no ponteiro: o efeito depende de mousemove, então em toque simplesmente
 * não existe. Quem pede menos movimento é atendido pela media query global.
 */
export function Magnetic({
    children,
    className = "",
    strength = 0.25,
}: {
    children: React.ReactNode;
    className?: string;
    strength?: number;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

    const onMove = useCallback(
        (e: React.MouseEvent<HTMLSpanElement>) => {
            const el = ref.current;
            if (!el) return;
            const r = el.getBoundingClientRect();
            setPos({
                x: (e.clientX - r.left - r.width / 2) * strength,
                y: (e.clientY - r.top - r.height / 2) * strength,
            });
        },
        [strength]
    );

    return (
        <span
            ref={ref}
            className={`inline-block ${className}`}
            onMouseMove={onMove}
            onMouseLeave={() => setPos(null)}
            style={{
                transform: pos ? `translate(${pos.x}px, ${pos.y}px)` : "none",
                transition: pos
                    ? "transform 120ms cubic-bezier(0.22,1,0.36,1)"
                    : "transform 420ms cubic-bezier(0.22,1,0.36,1)",
                willChange: "transform",
            }}
        >
            {children}
        </span>
    );
}
