"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
    value: string;
    label: string;
    serif: string;
    goldColor: string;
    grayColor: string;
}

export function AnimatedCounter({ value, label, serif, goldColor, grayColor }: AnimatedCounterProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [displayed, setDisplayed] = useState(value);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!visible) return;
        // Extract numeric part
        const numMatch = value.match(/^(\d+)/);
        if (!numMatch) {
            setDisplayed(value);
            return;
        }
        const target = parseInt(numMatch[1], 10);
        const suffix = value.slice(numMatch[1].length);
        const duration = 1200;
        const steps = 30;
        const stepTime = duration / steps;
        let step = 0;

        const interval = setInterval(() => {
            step++;
            const progress = step / steps;
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(target * eased);
            setDisplayed(`${current}${suffix}`);
            if (step >= steps) {
                setDisplayed(value);
                clearInterval(interval);
            }
        }, stepTime);

        return () => clearInterval(interval);
    }, [visible, value]);

    return (
        <div
            ref={ref}
            className="text-center"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
        >
            <p className="text-2xl md:text-3xl font-bold mb-1" style={{ color: goldColor, fontFamily: serif }}>
                {displayed}
            </p>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.15em]" style={{ color: grayColor }}>
                {label}
            </p>
        </div>
    );
}
