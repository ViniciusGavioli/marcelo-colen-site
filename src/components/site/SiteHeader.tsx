"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SITE_COLORS as C } from "@/lib/site-theme";
import { SITE_CONFIG } from "@/lib/constants";
import { getDirectWhatsAppLink } from "@/lib/whatsapp";
import { MENSAGEM_WHATSAPP_SITE } from "@/components/site/home/primitivos";

const HOME = SITE_CONFIG.homePath;
const WHATSAPP = getDirectWhatsAppLink(MENSAGEM_WHATSAPP_SITE);
const FIO = "rgba(255,255,255,0.08)";

// Posição de scroll como estado externo, em vez de useEffect + setState,
// que o lint do projeto trata como render em cascata.
function assinarScroll(cb: () => void) {
    window.addEventListener("scroll", cb, { passive: true });
    return () => window.removeEventListener("scroll", cb);
}
const lerScroll = () => window.scrollY > 24;
const lerScrollNoServidor = () => false;

// Header do site na paleta da LP: transparente sobre o hero, preto
// translúcido depois do scroll, acento dourado no item ativo e um único
// botão de contato.
const NAV = [
    { label: "Atuação", href: "/atuacao" },
    { label: "Trajetória", href: "/sobre" },
    { label: "Na mídia", href: "/midia" },
    { label: "Blog", href: "/blog" },
    { label: "Contato", href: `${HOME}#contato` },
];

export function SiteHeader() {
    const rolou = useSyncExternalStore(assinarScroll, lerScroll, lerScrollNoServidor);
    const [menuAberto, setMenuAberto] = useState(false);
    const pathname = usePathname();
    const solido = rolou || menuAberto;

    return (
        <header
            className="fixed inset-x-0 top-0 z-50"
            style={{
                backgroundColor: solido ? C.bg1Translucent : "transparent",
                backdropFilter: solido ? "blur(10px)" : "none",
                borderBottom: `1px solid ${solido ? FIO : "transparent"}`,
                transition: "background-color 240ms ease, border-color 240ms ease",
            }}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 md:px-6">
                <Link
                    href={HOME}
                    className="flex items-center gap-3 py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                    style={{ outlineColor: C.gold }}
                >
                    {/* Símbolo da marca, versão clara, e o nome em texto: o
                        lockup completo é vertical e ficaria ilegível na altura
                        do header. */}
                    <Image
                        src="/marca/logo-simbolo-claro.png"
                        alt=""
                        aria-hidden
                        width={1138}
                        height={514}
                        priority
                        className="h-7 w-auto shrink-0"
                    />
                    <span className="uppercase whitespace-nowrap text-[0.9375rem] tracking-[0.18em] font-semibold" style={{ fontFamily: C.serif, color: C.white }}>
                        Marcelo Colen
                    </span>
                    <span className="hidden sm:inline whitespace-nowrap uppercase text-[0.625rem] tracking-[0.22em]" style={{ color: C.gray3 }}>
                        Advocacia
                    </span>
                </Link>

                {/* Navegação completa só a partir de 1024px: entre 768 e 1024 o
                    nome, os cinco itens e o botão não cabem numa linha. */}
                <div className="hidden lg:flex items-center gap-8">
                    <nav className="flex items-center gap-7" aria-label="Principal">
                        {NAV.map((item) => {
                            const ativo = !item.href.includes("#") && (pathname === item.href || pathname.startsWith(`${item.href}/`));
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    aria-current={ativo ? "page" : undefined}
                                    className="py-4 text-sm whitespace-nowrap transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                                    style={{
                                        color: ativo ? C.white : C.gray2,
                                        borderBottom: `1px solid ${ativo ? C.gold : "transparent"}`,
                                        outlineColor: C.gold,
                                    }}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>
                    <a
                        href={WHATSAPP}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap transition-colors hover:bg-[rgba(201,162,39,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                        style={{ color: C.gold, border: `1px solid ${C.gold}`, outlineColor: C.gold }}
                    >
                        Falar com o escritório
                    </a>
                </div>

                {/* Botão do menu mobile */}
                <button
                    type="button"
                    className="lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                    aria-expanded={menuAberto}
                    aria-controls="menu-mobile"
                    aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                    onClick={() => setMenuAberto((v) => !v)}
                    style={{ minHeight: "3rem", minWidth: "3rem", color: C.white, outlineColor: C.gold }}
                >
                    <span aria-hidden style={{ fontSize: "1.25rem", lineHeight: 1 }}>
                        {menuAberto ? "×" : "≡"}
                    </span>
                </button>
            </div>

            {menuAberto && (
                <nav id="menu-mobile" aria-label="Principal" className="lg:hidden" style={{ borderTop: `1px solid ${FIO}` }}>
                    <div className="mx-auto max-w-6xl px-4 pb-6 md:px-6">
                        {NAV.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMenuAberto(false)}
                                className="flex items-center text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                style={{ minHeight: "3.25rem", color: C.white, borderBottom: `1px solid ${FIO}`, outlineColor: C.gold }}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <a
                            href={WHATSAPP}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 flex items-center justify-center rounded-full py-3 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                            style={{ color: C.gold, border: `1px solid ${C.gold}`, outlineColor: C.gold }}
                        >
                            Falar com o escritório
                        </a>
                        <p className="mt-5 text-xs" style={{ color: C.gray3 }}>
                            {SITE_CONFIG.oab}
                        </p>
                    </div>
                </nav>
            )}
        </header>
    );
}
