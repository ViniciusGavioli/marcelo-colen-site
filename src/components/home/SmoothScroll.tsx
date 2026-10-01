"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Rolagem com inércia (Lenis). É o que mais muda a percepção do site antes
 * mesmo de alguém ler qualquer coisa: a página desliza em vez de saltar.
 *
 * Montado apenas no grupo (site). As landing pages NÃO recebem: em página de
 * campanha a resposta imediata do scroll vale mais que o efeito, e elas não
 * podem mudar de comportamento.
 *
 * Quem pede menos movimento no sistema fica com a rolagem nativa.
 */
export function SmoothScroll() {
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            touchMultiplier: 2,
        });

        let frame = 0;
        const raf = (time: number) => {
            lenis.raf(time);
            frame = requestAnimationFrame(raf);
        };
        frame = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(frame);
            lenis.destroy();
        };
    }, []);

    return null;
}
