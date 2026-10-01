"use client";

import { useEffect, useRef } from "react";

/**
 * Parallax do retrato do hero: a imagem anda mais devagar que a rolagem, e o
 * bloco de texto sobe e desaparece antes da próxima seção entrar. É o que faz
 * o hero se desmontar em vez de simplesmente sair de cena.
 *
 * Escrito com rAF e transform direto, sem framer-motion, que não anima neste
 * projeto. Lê o scroll uma vez por quadro e nunca dentro do listener, para
 * não forçar layout a cada evento.
 *
 * Desligado em prefers-reduced-motion e em telas pequenas, onde o retrato
 * fica no fluxo, abaixo do texto, e o deslocamento não faria sentido.
 */
export function HeroParallax({
    retratoRef,
    textoRef,
}: {
    retratoRef: React.RefObject<HTMLElement | null>;
    textoRef: React.RefObject<HTMLElement | null>;
}) {
    const frame = useRef(0);

    useEffect(() => {
        const mqMovimento = window.matchMedia("(prefers-reduced-motion: reduce)");
        const mqLargura = window.matchMedia("(min-width: 768px)");

        const limpar = () => {
            if (retratoRef.current) retratoRef.current.style.transform = "";
            if (textoRef.current) {
                textoRef.current.style.transform = "";
                textoRef.current.style.opacity = "";
            }
        };

        const ativo = () => mqLargura.matches && !mqMovimento.matches;

        const tick = () => {
            frame.current = requestAnimationFrame(tick);
            if (!ativo()) return;

            const y = window.scrollY;
            const altura = window.innerHeight || 1;
            const progresso = Math.min(1, Math.max(0, y / altura));

            if (retratoRef.current) {
                retratoRef.current.style.transform = `translate3d(0, ${(progresso * 12).toFixed(2)}%, 0)`;
            }
            if (textoRef.current) {
                textoRef.current.style.transform = `translate3d(0, ${(progresso * -60).toFixed(1)}px, 0)`;
                textoRef.current.style.opacity = String(
                    Math.max(0, 1 - progresso / 0.45)
                );
            }
        };

        frame.current = requestAnimationFrame(tick);

        const aoTrocarModo = () => {
            if (!ativo()) limpar();
        };
        mqMovimento.addEventListener("change", aoTrocarModo);
        mqLargura.addEventListener("change", aoTrocarModo);

        return () => {
            cancelAnimationFrame(frame.current);
            mqMovimento.removeEventListener("change", aoTrocarModo);
            mqLargura.removeEventListener("change", aoTrocarModo);
            limpar();
        };
    }, [retratoRef, textoRef]);

    return null;
}
