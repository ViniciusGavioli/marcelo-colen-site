"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { T, TYPE } from "@/lib/institutional-theme";

// Posição de scroll como estado externo, em vez de useEffect + setState,
// que o lint do projeto trata como render em cascata.
function assinarScroll(cb: () => void) {
    window.addEventListener("scroll", cb, { passive: true });
    return () => window.removeEventListener("scroll", cb);
}
const lerScroll = () => window.scrollY > 24;
const lerScrollNoServidor = () => false;

// Header institucional: integra-se ao hero no topo e ganha fundo sólido
// depois do scroll. Uma ação de contato discreta, nunca um botão comercial.
const NAV = [
    { label: "Atuação", href: "/atuacao" },
    { label: "Trajetória", href: "/sobre" },
    { label: "Artigos", href: "/#artigos" },
    { label: "Na mídia", href: "/midia" },
    { label: "Contato", href: "/#contato" },
];

export function SiteHeader() {
    const rolou = useSyncExternalStore(
        assinarScroll,
        lerScroll,
        lerScrollNoServidor
    );
    const [menuAberto, setMenuAberto] = useState(false);
    const pathname = usePathname();

    return (
        <header
            className="fixed inset-x-0 top-0 z-50"
            style={{
                backgroundColor: rolou || menuAberto ? T.inkDeep : "transparent",
                borderBottom: `1px solid ${rolou ? T.ruleOnInk : "transparent"}`,
                transition: "background-color 240ms ease, border-color 240ms ease",
            }}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 md:px-6">
                <Link
                    href="/"
                    className="flex items-center gap-3 py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                    style={{ outlineColor: T.copperOnInk }}
                >
                    {/* Símbolo da marca do cliente, versão clara (a arte
                        original é preta e sumiria no header escuro). O lockup
                        completo é vertical: reduzido à altura do header, a
                        assinatura ficaria ilegível, então aqui vai o símbolo
                        e o nome em texto, no mesmo tratamento de caixa alta
                        espaçada da assinatura original. */}
                    <Image
                        src="/marca/logo-simbolo-claro.png"
                        alt=""
                        aria-hidden
                        width={1138}
                        height={514}
                        priority
                        className="h-7 w-auto shrink-0"
                    />
                    <span
                        className="uppercase"
                        style={{
                            fontFamily: T.serif,
                            fontSize: "0.9375rem",
                            letterSpacing: "0.18em",
                            color: T.onInk,
                        }}
                    >
                        Marcelo Colen
                    </span>
                    <span
                        className="hidden uppercase sm:inline"
                        style={{
                            fontFamily: T.sans,
                            fontSize: "0.625rem",
                            letterSpacing: "0.22em",
                            color: T.onInkFaint,
                        }}
                    >
                        Advocacia
                    </span>
                </Link>

                {/* Navegação desktop */}
                <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
                    {NAV.map((item) => {
                        const ativo =
                            item.href.startsWith("/#")
                                ? false
                                : pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                aria-current={ativo ? "page" : undefined}
                                className="py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                                style={{
                                    fontFamily: T.sans,
                                    fontSize: "0.875rem",
                                    color: ativo ? T.onInk : T.onInkMuted,
                                    borderBottom: ativo
                                        ? `1px solid ${T.copperOnInk}`
                                        : "1px solid transparent",
                                    outlineColor: T.copperOnInk,
                                    transition: "color 200ms ease",
                                }}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Botão do menu mobile */}
                <button
                    type="button"
                    className="md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                    aria-expanded={menuAberto}
                    aria-controls="menu-mobile"
                    aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                    onClick={() => setMenuAberto((v) => !v)}
                    style={{
                        minHeight: "3rem",
                        minWidth: "3rem",
                        color: T.onInk,
                        outlineColor: T.copperOnInk,
                    }}
                >
                    <span aria-hidden style={{ fontSize: "1.25rem", lineHeight: 1 }}>
                        {menuAberto ? "×" : "≡"}
                    </span>
                </button>
            </div>

            {menuAberto && (
                <nav
                    id="menu-mobile"
                    aria-label="Principal"
                    className="md:hidden"
                    style={{
                        backgroundColor: T.inkDeep,
                        borderTop: `1px solid ${T.ruleOnInk}`,
                    }}
                >
                    <div className="mx-auto max-w-6xl px-4 pb-6 md:px-6">
                        {NAV.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMenuAberto(false)}
                                className="flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                style={{
                                    minHeight: "3.25rem",
                                    fontFamily: T.sans,
                                    fontSize: "1rem",
                                    color: T.onInk,
                                    borderBottom: `1px solid ${T.ruleOnInk}`,
                                    outlineColor: T.copperOnInk,
                                }}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <p
                            style={{
                                fontFamily: T.sans,
                                fontSize: TYPE.micro,
                                color: T.onInkFaint,
                                marginTop: "1.25rem",
                            }}
                        >
                            OAB/MG 167.463
                        </p>
                    </div>
                </nav>
            )}
        </header>
    );
}
