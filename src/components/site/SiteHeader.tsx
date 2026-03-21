"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { getDirectWhatsAppLink } from "@/lib/whatsapp";

const C = {
    bg: "rgba(10,10,10,0.88)",
    gold: "#c9a227",
    white: "#ffffff",
    gray2: "rgba(255,255,255,0.7)",
    gray3: "rgba(255,255,255,0.45)",
};

const WA_MSG = "Olá Dr. Marcelo, vim pelo site e gostaria de uma análise do meu caso.";

const NAV = [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Atuação", href: "/atuacao" },
    { label: "Na Mídia", href: "/midia" },
];

export function SiteHeader() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Fecha menu quando muda de página
    useEffect(() => { setOpen(false); }, [pathname]);

    return (
        <>
            <header
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
                style={{
                    backgroundColor: scrolled ? C.bg : "rgba(10,10,10,0.6)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    borderBottom: `1px solid rgba(255,255,255,${scrolled ? "0.08" : "0.04"})`,
                }}
            >
                <div className="max-w-6xl mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between h-14 md:h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <span
                                className="text-lg md:text-xl font-bold tracking-tight transition-colors"
                                style={{ color: C.gold, fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                            >
                                Marcelo Colen
                            </span>
                            <span
                                className="hidden md:inline text-[10px] uppercase tracking-widest font-semibold"
                                style={{ color: C.gray3 }}
                            >
                                Advocacia
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-8">
                            {NAV.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-xs uppercase tracking-widest font-semibold transition-colors hover:text-white"
                                    style={{ color: pathname === item.href ? C.white : C.gray2 }}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        {/* CTA + Mobile Toggle */}
                        <div className="flex items-center gap-3">
                            {/* Desktop CTA */}
                            <a
                                href={getDirectWhatsAppLink(WA_MSG)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all hover:scale-[1.03]"
                                style={{ border: "1px solid rgba(201,162,39,0.4)", color: C.gold }}
                            >
                                <Phone className="w-3.5 h-3.5" />
                                Fale Conosco
                            </a>

                            {/* Mobile Hamburger */}
                            <button
                                onClick={() => setOpen(!open)}
                                className="md:hidden flex items-center justify-center w-10 h-10 rounded-full transition-colors"
                                style={{ color: C.white }}
                                aria-label={open ? "Fechar menu" : "Abrir menu"}
                            >
                                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                    style={{ backgroundColor: "rgba(10,10,10,0.96)" }}
                >
                    <div className="px-4 py-4 space-y-1 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                        {NAV.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="block px-3 py-3 text-sm font-semibold uppercase tracking-wider rounded-lg transition-colors"
                                style={{
                                    color: pathname === item.href ? C.gold : C.gray2,
                                    backgroundColor: pathname === item.href ? "rgba(201,162,39,0.08)" : "transparent",
                                }}
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* Mobile CTA */}
                        <a
                            href={getDirectWhatsAppLink(WA_MSG)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 mt-3 px-6 py-3.5 rounded-full font-semibold text-sm transition-all"
                            style={{
                                background: "linear-gradient(160deg, #1c0a0a 0%, #0a0a0a 55%, #0f0d00 100%)",
                                border: "2px solid #c9a227",
                                color: C.white,
                                boxShadow: "0 0 28px rgba(201,162,39,0.18)",
                            }}
                        >
                            <MessageCircle className="w-4 h-4" />
                            Fale Conosco pelo WhatsApp
                        </a>
                    </div>
                </div>
            </header>

            {/* Spacer para compensar header fixo */}
            <div className="h-14 md:h-16" />
        </>
    );
}
