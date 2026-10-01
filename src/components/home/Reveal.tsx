"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Bloco que entra ao aparecer em tela. O estado inicial e a animação vivem no
 * CSS (`.mc-reveal` / `.mc-visivel` em globals.css); aqui só o observador.
 *
 * Quem pede menos movimento no sistema recebe o conteúdo visível na hora,
 * tratado pela media query da folha de estilo, sem precisar de JavaScript.
 */
export function Reveal({
    children,
    delay = 0,
}: {
    children: React.ReactNode;
    /** Milissegundos antes de começar, para escalonar itens de uma lista. */
    delay?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [visivel, setVisivel] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisivel(true);
                    obs.unobserve(el);
                }
            },
            { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`mc-reveal${visivel ? " mc-visivel" : ""}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
