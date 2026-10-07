"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { Headphones, Landmark, Play, X } from "lucide-react";
import { Container } from "@/components/layout";
import { trackEvent } from "@/lib/analytics";
import { ITENS_ATUACAO_PUBLICA, type ItemMidia } from "./atuacao-publica-dados";

// Mesma paleta da LP de recurso (page.tsx e DrMarceloSection).
const gold = "#c9a227";
const bg1 = "#0a0a0a";
const bg2 = "#111111";
const white = "#ffffff";
const gray2 = "rgba(255,255,255,0.7)";
const gray3 = "rgba(255,255,255,0.45)";
const hairline = "rgba(255,255,255,0.08)";
const serif = "'Cormorant Garamond', Georgia, serif";

type Item = ItemMidia;

const ACAO = {
    video: { label: "Assistir participação", Icon: Play },
    audio: { label: "Ouvir episódio", Icon: Headphones },
    registro: { label: "Ver registro", Icon: Landmark },
} as const;

// ============================================================================
// CAPA (16:9)
// ============================================================================
// A capa é o que diz ao visitante o que ele vai ver antes do clique. Imagens
// pela otimização do Next (hosts liberados em next.config.ts) e lazy: a seção
// fica abaixo da dobra e não entra no LCP.
const CAPA_SIZES = "(min-width: 896px) 424px, (min-width: 768px) 46vw, 100vw";

function Capa({ item }: { item: Item }) {
    const moldura = "relative block aspect-video overflow-hidden";
    const borda = { border: `1px solid ${hairline}` };

    if (item.type === "video") {
        return (
            <span className={moldura} style={{ ...borda, backgroundColor: bg2 }}>
                <Image
                    src={`https://i.ytimg.com/vi/${item.youtubeId}/maxresdefault.jpg`}
                    alt=""
                    fill
                    sizes={CAPA_SIZES}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <span aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 45%)" }} />
                <span
                    aria-hidden="true"
                    className="absolute inset-0 m-auto w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-colors duration-200 bg-black/60 group-hover:bg-[#c9a227]"
                    style={{ border: `1.5px solid ${gold}`, backdropFilter: "blur(2px)" }}
                >
                    <Play className="w-5 h-5 md:w-6 md:h-6 ml-0.5 text-[#c9a227] group-hover:text-black transition-colors" fill="currentColor" />
                </span>
            </span>
        );
    }

    if (item.type === "audio") {
        return (
            <span className={`${moldura} flex items-center justify-center`} style={{ ...borda, backgroundColor: bg2 }}>
                {/* Fundo: a mesma capa em 64px, ampliada e desfocada. */}
                <Image src={item.cover} alt="" fill sizes="64px" className="object-cover scale-125 blur-2xl opacity-40" aria-hidden="true" />
                <span
                    className="relative h-[78%] aspect-square overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    style={{ boxShadow: "0 12px 32px rgba(0,0,0,0.55)" }}
                >
                    <Image src={item.cover} alt="" fill sizes="(min-width: 768px) 260px, 60vw" className="object-cover" />
                </span>
                <span
                    aria-hidden="true"
                    className="absolute bottom-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 bg-black/60 group-hover:bg-[#c9a227]"
                    style={{ border: `1.5px solid ${gold}` }}
                >
                    <Headphones className="w-4 h-4 text-[#c9a227] group-hover:text-black transition-colors" />
                </span>
            </span>
        );
    }

    // ALMG não tem imagem própria: painel tipográfico no mesmo formato, sem
    // foto ilustrativa que sugira um registro que não existe.
    return (
        <span
            aria-hidden="true"
            className={`${moldura} flex flex-col items-center justify-center text-center px-6`}
            style={{ ...borda, background: `radial-gradient(ellipse at center, rgba(201,162,39,0.09) 0%, transparent 70%), ${bg2}` }}
        >
            <span
                aria-hidden="true"
                className="absolute inset-0"
                style={{ backgroundImage: "url('/texture-juridica.webp')", backgroundSize: "900px 600px", opacity: 0.05 }}
            />
            <span aria-hidden="true" className="absolute inset-3 pointer-events-none" style={{ border: "1px solid rgba(201,162,39,0.18)" }} />
            <Landmark className="relative w-8 h-8 md:w-9 md:h-9" style={{ color: gold, opacity: 0.85 }} aria-hidden="true" />
            <span className="relative mt-3 text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: gray3 }}>
                Comissão de Direitos Humanos
            </span>
            <span className="relative mt-1.5 text-xl md:text-2xl" style={{ color: white, fontFamily: serif, fontWeight: 600 }}>
                Voto de congratulações
            </span>
            <span className="relative mt-1 text-xs" style={{ color: gray3 }}>
                05/08/2025
            </span>
        </span>
    );
}

// ============================================================================
// MODAL
// ============================================================================
function MediaModal({ item, onClose }: { item: Item; onClose: () => void }) {
    const closeRef = useRef<HTMLButtonElement>(null);
    // A trava de scroll roda uma vez por abertura. onClose entra por ref para
    // uma nova identidade da função não destravar e travar de novo o body.
    const onCloseRef = useRef(onClose);
    useEffect(() => {
        onCloseRef.current = onClose;
    });

    useEffect(() => {
        const html = document.documentElement;
        const body = document.body;
        const anterior = {
            htmlOverflow: html.style.overflow,
            bodyOverflow: body.style.overflow,
            bodyPadding: body.style.paddingRight,
        };
        // Compensa a barra de rolagem que some, para a página não pular de
        // lado. overflow:hidden não mexe no scrollY: ao fechar, o visitante
        // está exatamente onde estava.
        const barra = window.innerWidth - html.clientWidth;
        html.style.overflow = "hidden";
        body.style.overflow = "hidden";
        if (barra > 0) body.style.paddingRight = `${barra}px`;

        closeRef.current?.focus({ preventScroll: true });

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                e.preventDefault();
                onCloseRef.current();
            }
        };
        document.addEventListener("keydown", onKey);

        return () => {
            document.removeEventListener("keydown", onKey);
            html.style.overflow = anterior.htmlOverflow;
            body.style.overflow = anterior.bodyOverflow;
            body.style.paddingRight = anterior.bodyPadding;
        };
    }, []);

    const titleId = `atuacao-modal-${item.source}`;
    const largo = item.type === "video";

    // Portal no body: a LP tem wrappers com transform (Reveal), e um
    // position:fixed dentro deles deixaria de se prender à viewport.
    return createPortal(
        <div
            className="fixed inset-0 z-[10000] flex items-center justify-center p-3 md:p-6"
            style={{ backgroundColor: "rgba(0,0,0,0.86)", backdropFilter: "blur(2px)" }}
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            {/* Sentinelas: o foco que sai do iframe pelo Tab volta ao fechar,
                em vez de escapar para a página atrás do overlay. */}
            <span tabIndex={0} onFocus={() => closeRef.current?.focus()} />

            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                className="w-full flex flex-col"
                style={{
                    maxWidth: largo ? "min(60rem, calc((100dvh - 7.5rem) * 16 / 9))" : "34rem",
                    maxHeight: "calc(100dvh - 1.5rem)",
                    backgroundColor: bg2,
                    border: `1px solid ${hairline}`,
                    borderTop: `1px solid rgba(201,162,39,0.45)`,
                    boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
                }}
            >
                <div className="flex items-start justify-between gap-4 px-4 py-3 md:px-5 md:py-4" style={{ borderBottom: `1px solid ${hairline}` }}>
                    <div className="min-w-0">
                        <p className="text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold" style={{ color: gold }}>
                            {item.name}
                        </p>
                        <h3 id={titleId} className="mt-1 text-lg md:text-xl leading-snug" style={{ color: white, fontFamily: serif, fontWeight: 600 }}>
                            {item.topic}
                        </h3>
                    </div>
                    <button
                        ref={closeRef}
                        type="button"
                        onClick={onClose}
                        aria-label="Fechar"
                        className="flex-shrink-0 w-10 h-10 -mr-1 flex items-center justify-center rounded-full transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2"
                        style={{ color: white, outlineColor: gold }}
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="overflow-y-auto">
                    {item.type === "video" && (
                        // O iframe só existe depois do clique: o modal não é
                        // montado antes disso. autoplay vai em params porque a
                        // prop autoplay da biblioteca exige mudo.
                        <LiteYouTubeEmbed
                            id={item.youtubeId}
                            title={item.topic}
                            alwaysLoadIframe
                            params="autoplay=1&rel=0"
                            noscriptFallback={false}
                            wrapperClass="yt-lite"
                        />
                    )}

                    {item.type === "audio" && (
                        <div className="p-4 md:p-5">
                            <iframe
                                src={`https://open.spotify.com/embed/episode/${item.spotifyEpisodeId}?theme=0`}
                                title={`${item.name}: ${item.topic}`}
                                width="100%"
                                height="232"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                style={{ border: 0, borderRadius: 12, display: "block" }}
                            />
                        </div>
                    )}

                    {item.type === "registro" && (
                        <div className="px-4 py-5 md:px-5 md:py-6">
                            <p className="text-xs uppercase tracking-[0.14em] font-semibold" style={{ color: gray3 }}>
                                {item.registro.kicker}
                            </p>
                            <p className="mt-4 text-base leading-relaxed" style={{ color: gray2 }}>
                                {item.registro.texto}
                            </p>
                            <p className="mt-5 pt-4 text-xs leading-relaxed" style={{ color: gray3, borderTop: `1px solid ${hairline}` }}>
                                Fonte: {item.registro.fonte}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <span tabIndex={0} onFocus={() => closeRef.current?.focus()} />
        </div>,
        document.body
    );
}

// ============================================================================
// SEÇÃO
// ============================================================================
// Sem props, é a seção da LP de recurso. A home institucional passa a própria
// lista (com as participações em TV) e três colunas.
export function HeteroAtuacaoPublica({
    kicker = "Atuação pública",
    titulo = "Uma trajetória ligada à igualdade racial e às políticas afirmativas",
    texto = "Participações em debates, entrevistas e instituições sobre cotas raciais, heteroidentificação, igualdade racial e combate à discriminação.",
    itens = ITENS_ATUACAO_PUBLICA,
    colunas = 2,
    rodape,
}: {
    kicker?: string;
    titulo?: string;
    texto?: string;
    itens?: ItemMidia[];
    colunas?: 2 | 3;
    rodape?: React.ReactNode;
} = {}) {
    const [aberto, setAberto] = useState<Item | null>(null);
    const gatilho = useRef<HTMLButtonElement | null>(null);

    const abrir = (item: Item, el: HTMLButtonElement) => {
        gatilho.current = el;
        setAberto(item);
        trackEvent("authority_media_open", { source: item.source });
    };

    const fechar = () => {
        if (aberto) trackEvent("authority_media_close", { source: aberto.source });
        setAberto(null);
    };

    // Devolve o foco ao item que abriu o modal, sem rolar a página. Em efeito,
    // e não em requestAnimationFrame, que não dispara com a aba em segundo plano.
    useEffect(() => {
        if (!aberto) gatilho.current?.focus({ preventScroll: true });
    }, [aberto]);

    return (
        <section
            aria-labelledby="atuacao-publica-titulo"
            className="py-16 md:py-24 relative overflow-hidden"
            style={{ backgroundColor: bg1, borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: "url('/texture-juridica.webp')", backgroundRepeat: "repeat", backgroundSize: "1200px 800px", opacity: 0.03 }}
            />

            <Container className="relative z-10">
                <div className={`${colunas === 3 ? "max-w-6xl" : "max-w-4xl"} mx-auto`}>
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.22em] text-center mb-3 font-semibold" style={{ color: gold }}>
                        {kicker}
                    </p>
                    <h2
                        id="atuacao-publica-titulo"
                        className="text-2xl md:text-3xl font-bold text-center mb-2 max-w-[26ch] mx-auto leading-tight"
                        style={{ color: white, fontFamily: serif }}
                    >
                        {titulo}
                    </h2>
                    <div className="flex items-center justify-center gap-3 py-1" aria-hidden="true">
                        <div className="h-px flex-1 max-w-[120px]" style={{ background: `linear-gradient(to right, transparent, ${gold})`, opacity: 0.35 }} />
                        <div className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: gold, opacity: 0.6 }} />
                        <div className="h-px flex-1 max-w-[120px]" style={{ background: `linear-gradient(to left, transparent, ${gold})`, opacity: 0.35 }} />
                    </div>
                    <p className="text-sm md:text-base text-center mt-4 max-w-[52ch] mx-auto leading-relaxed" style={{ color: gray2 }}>
                        {texto}
                    </p>

                    <ul
                        className={`mt-10 md:mt-14 grid gap-y-12 md:grid-cols-2 md:gap-x-10 md:gap-y-14 ${colunas === 3 ? "lg:grid-cols-3 lg:gap-x-8" : ""}`}
                    >
                        {itens.map((item) => {
                            const { label, Icon } = ACAO[item.type];
                            return (
                                <li key={item.source}>
                                    <button
                                        type="button"
                                        onClick={(e) => abrir(item, e.currentTarget)}
                                        aria-haspopup="dialog"
                                        className="group w-full h-full text-left flex flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                                        style={{ outlineColor: gold }}
                                    >
                                        <Capa item={item} />
                                        <span className="mt-6 flex items-center gap-3">
                                            <span aria-hidden="true" className="h-px w-6 flex-shrink-0" style={{ backgroundColor: gold, opacity: 0.6 }} />
                                            <span className="text-xs uppercase tracking-[0.16em] font-semibold" style={{ color: gold }}>
                                                {item.name}
                                            </span>
                                        </span>
                                        <span
                                            className="block mt-4 text-[1.375rem] md:text-2xl leading-snug"
                                            style={{ color: white, fontFamily: serif, fontWeight: 600 }}
                                        >
                                            {item.topic}
                                        </span>
                                        <span className="block mt-2 text-sm md:text-[0.9375rem] leading-relaxed" style={{ color: gray2 }}>
                                            {item.description}
                                        </span>
                                        <span className="block mt-3 text-xs" style={{ color: gray3 }}>
                                            {item.meta}
                                        </span>
                                        <span className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold transition-colors text-[#c9a227] group-hover:text-white">
                                            <Icon className="w-4 h-4" aria-hidden="true" fill={item.type === "video" ? "currentColor" : "none"} />
                                            <span className="border-b border-transparent group-hover:border-current transition-colors">
                                                {label}
                                            </span>
                                        </span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                    {rodape}
                </div>
            </Container>

            {aberto && <MediaModal item={aberto} onClose={fechar} />}
        </section>
    );
}
