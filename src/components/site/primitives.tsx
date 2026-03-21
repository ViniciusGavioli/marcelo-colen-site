"use client";

import { useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";
import { getDirectWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

// ============================================================================
// DESIGN TOKENS
// ============================================================================
export const C = {
    bg1: "#0a0a0a",
    bg2: "#111111",
    bg3: "#181818",
    bg4: "#1e1e1e",
    gold: "#c9a227",
    goldSoft: "rgba(201,162,39,0.10)",
    goldBorder: "rgba(201,162,39,0.2)",
    white: "#ffffff",
    gray1: "rgba(255,255,255,0.92)",
    gray2: "rgba(255,255,255,0.7)",
    gray3: "rgba(255,255,255,0.45)",
    gray4: "rgba(255,255,255,0.25)",
    serif: "'Cormorant Garamond', Georgia, serif",
};

export const GRAIN_URL = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='320' height='320' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`;

export const WA_MSG = "Olá Dr. Marcelo, vim pelo site e gostaria de uma orientação jurídica.";

// ============================================================================
// HELPERS
// ============================================================================
export function renderBold(text: string): React.ReactNode {
    return text.split(/\*\*(.*?)\*\*/g).map((part, i) =>
        i % 2 === 1
            ? <strong key={i} style={{ color: "rgba(255,255,255,0.98)", fontWeight: 700 }}>{part}</strong>
            : part
    );
}

// ============================================================================
// COMPONENTS
// ============================================================================
export function GrainOverlay() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[1]"
            style={{
                backgroundImage: GRAIN_URL,
                backgroundRepeat: "repeat",
                backgroundSize: "320px 320px",
                opacity: 0.032,
                mixBlendMode: "overlay",
            }}
        />
    );
}

export function GoldDivider({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center justify-center gap-3 py-1 ${className}`} aria-hidden="true">
            <div className="h-px flex-1 max-w-[120px]" style={{ background: `linear-gradient(to right, transparent, ${C.gold})`, opacity: 0.35 }} />
            <div className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: C.gold, opacity: 0.6 }} />
            <div className="h-px flex-1 max-w-[120px]" style={{ background: `linear-gradient(to left, transparent, ${C.gold})`, opacity: 0.35 }} />
        </div>
    );
}

export function SectionLabel({ children, align = "center" }: { children: string; align?: "center" | "left" }) {
    return (
        <p
            className={`text-[10px] md:text-xs uppercase tracking-[0.22em] mb-3 font-semibold ${align === "center" ? "text-center" : "text-left"}`}
            style={{ color: C.gold }}
        >
            {children}
        </p>
    );
}

export function Cta({
    text,
    full = false,
    href,
    size = "default",
}: {
    text: string;
    full?: boolean;
    href?: string;
    size?: "default" | "small";
}) {
    const sizeClasses = size === "small"
        ? "text-sm px-6 py-3"
        : "text-base md:text-lg px-8 py-4";

    return (
        <a
            href={href || getDirectWhatsAppLink(WA_MSG)}
            target={href ? undefined : "_blank"}
            rel={href ? undefined : "noopener noreferrer"}
            onClick={!href ? trackWhatsAppClick : undefined}
            style={{
                background: "linear-gradient(160deg, #1c0a0a 0%, #0a0a0a 55%, #0f0d00 100%)",
                border: "2px solid #c9a227",
                color: C.white,
                boxShadow: "0 0 28px rgba(201,162,39,0.18), 0 1px 0 rgba(201,162,39,0.12) inset",
            }}
            className={`group inline-flex items-center justify-center gap-2 font-semibold ${sizeClasses} rounded-full transition-all duration-200 hover:shadow-[0_0_40px_rgba(201,162,39,0.35)] hover:scale-[1.02] active:scale-[0.98] ${full ? "w-full" : ""}`}
        >
            <MessageCircle className={`${size === "small" ? "w-4 h-4" : "w-5 h-5"} opacity-70 group-hover:opacity-100 transition-opacity`} />
            {text}
        </a>
    );
}

export function LinkButton({
    text,
    href,
    full = false,
}: {
    text: string;
    href: string;
    full?: boolean;
}) {
    return (
        <a
            href={href}
            className={`group inline-flex items-center justify-center gap-2 font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 hover:scale-[1.02] ${full ? "w-full" : ""}`}
            style={{
                border: `1px solid ${C.goldBorder}`,
                color: C.gold,
                backgroundColor: "transparent",
            }}
        >
            {text}
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </a>
    );
}

// ============================================================================
// SCROLL REVEAL
// ============================================================================
function useScrollReveal() {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.opacity = "1";
                    el.style.transform = "translateY(0)";
                    observer.unobserve(el);
                }
            },
            { threshold: 0.1 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);
    return ref;
}

export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const ref = useScrollReveal();
    return (
        <div
            ref={ref}
            style={{
                opacity: 0,
                transform: "translateY(24px)",
                transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
            }}
        >
            {children}
        </div>
    );
}
