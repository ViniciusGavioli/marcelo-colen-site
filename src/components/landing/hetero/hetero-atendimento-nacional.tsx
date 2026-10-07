"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Laptop, MessageCircle, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout";

// Mesma paleta da LP de recurso (page.tsx e DrMarceloSection).
const gold = "#c9a227";
const bg1 = "#0a0a0a";
const bg2 = "#111111";
const white = "#ffffff";
const gray1 = "rgba(255,255,255,0.92)";
const gray2 = "rgba(255,255,255,0.7)";
const gray3 = "rgba(255,255,255,0.45)";
const serif = "'Cormorant Garamond', Georgia, serif";

// O mapa mostra alcance, não presença. Um alfinete por estado diria que há
// escritório em cada um, e há um só, em Belo Horizonte. As linhas saem de BH
// até as capitais porque o atendimento é online, como a própria LP afirma no
// FAQ ("atendimento 100% online e nacional"), e a legenda diz isso por escrito.

// Mesmo viewBox da malha de scripts/generate-mapa-brasil.mjs: x = longitude,
// y = -latitude, em graus. A camada de linhas usa as coordenadas direto.
const VIEWBOX = "-73.9833 -5.2718 39.1806 39.0157";
const MAPA_SRC = "/images/mapa-brasil-uf-v1.svg";

const BH = { x: -43.94, y: 19.92 };

// Capitais das demais UFs, [UF, latitude, longitude], ao centésimo de grau.
const CAPITAIS: [string, number, number][] = [
    ["AC", -9.97, -67.81], ["AL", -9.67, -35.74], ["AP", 0.03, -51.07],
    ["AM", -3.12, -60.02], ["BA", -12.97, -38.5], ["CE", -3.73, -38.53],
    ["DF", -15.79, -47.88], ["ES", -20.32, -40.34], ["GO", -16.69, -49.26],
    ["MA", -2.53, -44.3], ["MT", -15.6, -56.1], ["MS", -20.44, -54.65],
    ["PA", -1.46, -48.49], ["PB", -7.12, -34.86], ["PR", -25.43, -49.27],
    ["PE", -8.05, -34.88], ["PI", -5.09, -42.8], ["RJ", -22.91, -43.17],
    ["RN", -5.79, -35.21], ["RS", -30.03, -51.23], ["RO", -8.76, -63.9],
    ["RR", 2.82, -60.67], ["SC", -27.6, -48.55], ["SP", -23.55, -46.63],
    ["SE", -10.91, -37.07], ["TO", -10.18, -48.33],
];

// Curva de BH até cada capital. O ponto de controle sai na perpendicular,
// sempre para o lado norte do segmento: as linhas abrem em leque, como rota
// de voo, em vez de retas que se cruzam. Ordenadas da mais curta para a mais
// longa, para o desenho partir de BH e chegar por último no extremo do país.
const ARCOS = CAPITAIS.map(([uf, lat, lon]) => {
    const x = lon;
    const y = -lat;
    const dx = x - BH.x;
    const dy = y - BH.y;
    const dist = Math.hypot(dx, dy);
    let nx = -dy / dist;
    let ny = dx / dist;
    if (ny > 0) {
        nx = -nx;
        ny = -ny;
    }
    const k = dist * 0.2;
    const cx = (BH.x + x) / 2 + nx * k;
    const cy = (BH.y + y) / 2 + ny * k;
    return { uf, x, y, dist, d: `M${BH.x} ${BH.y}Q${cx.toFixed(2)} ${cy.toFixed(2)} ${x} ${y}` };
}).sort((a, b) => a.dist - b.dist);

const FATOS = [
    { Icon: Laptop, texto: "Análise feita 100% online" },
    { Icon: MessageCircle, texto: "Documentos enviados pelo WhatsApp" },
    { Icon: ShieldCheck, texto: "Contato protegido pelo sigilo profissional" },
];

// Linhas se desenham uma vez quando o mapa entra na tela. Sem movimento para
// quem pede menos animação: aparece tudo pronto.
const CSS = `
.mc-mapa-arco { stroke-dasharray: 1; stroke-dashoffset: 1; transition: stroke-dashoffset 1.1s cubic-bezier(0.16,1,0.3,1); }
.mc-mapa[data-visivel="1"] .mc-mapa-arco { stroke-dashoffset: 0; }
.mc-mapa-ponto { opacity: 0; transition: opacity 0.5s ease; }
.mc-mapa[data-visivel="1"] .mc-mapa-ponto { opacity: 0.9; }
@keyframes mc-mapa-pulso { from { transform: scale(1); opacity: 0.55; } to { transform: scale(3.4); opacity: 0; } }
.mc-mapa-pulso { transform-box: fill-box; transform-origin: center; animation: mc-mapa-pulso 3s ease-out infinite; }
@media (prefers-reduced-motion: reduce) {
  .mc-mapa-arco, .mc-mapa-ponto { transition: none; }
  .mc-mapa-arco { stroke-dashoffset: 0; }
  .mc-mapa-ponto { opacity: 0.9; }
  .mc-mapa-pulso { animation: none; opacity: 0; }
}
`;

function Mapa() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.dataset.visivel = "1";
                    io.disconnect();
                }
            },
            { threshold: 0.35 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            role="img"
            aria-label="Mapa do Brasil com o escritório em Belo Horizonte e linhas até as capitais de todos os estados, indicando atendimento online em todo o país."
            className="mc-mapa relative w-full max-w-[480px] mx-auto"
            style={{ aspectRatio: "39.1806 / 39.0157" }}
        >
            <div
                aria-hidden="true"
                className="absolute inset-[-12%] pointer-events-none"
                style={{ background: "radial-gradient(circle at 62% 58%, rgba(201,162,39,0.07) 0%, transparent 60%)" }}
            />
            <Image src={MAPA_SRC} alt="" fill unoptimized sizes="(min-width: 768px) 480px, 100vw" />
            <svg viewBox={VIEWBOX} className="absolute inset-0 w-full h-full overflow-visible" aria-hidden="true">
                <g fill="none" stroke={gold} strokeWidth={0.07} strokeLinecap="round" strokeOpacity={0.5}>
                    {ARCOS.map((a, i) => (
                        <path key={a.uf} d={a.d} pathLength={1} className="mc-mapa-arco" style={{ transitionDelay: `${i * 45}ms` }} />
                    ))}
                </g>
                <g fill={gold}>
                    {ARCOS.map((a, i) => (
                        <circle key={a.uf} cx={a.x} cy={a.y} r={0.2} className="mc-mapa-ponto" style={{ transitionDelay: `${i * 45 + 650}ms` }} />
                    ))}
                </g>
                <circle cx={BH.x} cy={BH.y} r={0.5} fill={gold} className="mc-mapa-pulso" />
                {/* Alfinete do escritório, com o monograma. Desenhado em
                    unidades locais (ponta em 0,0) e reduzido ao grau. */}
                <g transform={`translate(${BH.x} ${BH.y}) scale(0.085)`}>
                    <path
                        d="M0 0C-1.6-5.6-9-10.4-9-18a9 9 0 1 1 18 0c0 7.6-7.4 12.4-9 18Z"
                        fill={gold}
                        stroke={bg1}
                        strokeWidth={1.2}
                    />
                    <circle cx={0} cy={-18} r={6.4} fill={bg1} />
                    <text
                        x={0}
                        y={-15.4}
                        textAnchor="middle"
                        fontSize={7.4}
                        fontWeight={700}
                        fill={gold}
                        style={{ fontFamily: serif, letterSpacing: "-0.02em" }}
                    >
                        MC
                    </text>
                </g>
            </svg>
            <style>{CSS}</style>
        </div>
    );
}

// Sem props além do quiz, é a seção da LP de recurso. A home institucional
// troca título, texto e fatos e usa um link de WhatsApp no lugar do quiz.
export function HeteroAtendimentoNacional({
    onOpenQuiz,
    titulo,
    texto,
    fatos,
    cta,
}: {
    onOpenQuiz?: () => void;
    titulo?: React.ReactNode;
    texto?: React.ReactNode;
    fatos?: string[];
    cta?: { rotulo: string; href: string };
}) {
    const listaFatos = fatos
        ? fatos.map((t, i) => ({ Icon: FATOS[i % FATOS.length].Icon, texto: t }))
        : FATOS;
    const estiloCta = {
        background: "linear-gradient(160deg, #1c0a0a 0%, #0a0a0a 55%, #0f0d00 100%)",
        border: `2px solid ${gold}`,
        color: white,
        boxShadow: "0 0 28px rgba(201,162,39,0.18), 0 1px 0 rgba(201,162,39,0.12) inset",
    };
    const classeCta =
        "group mt-8 w-full max-w-sm md:w-auto inline-flex items-center justify-center gap-2 font-semibold text-base md:text-lg px-8 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_40px_rgba(201,162,39,0.35)] hover:scale-[1.02] active:scale-[0.98]";

    return (
        <section
            aria-labelledby="atendimento-nacional-titulo"
            className="py-16 md:py-28 relative overflow-hidden"
            style={{
                backgroundColor: bg2,
                borderTop: "1px solid rgba(255,255,255,0.05)",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
        >
            <Container className="relative z-10">
                <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2 md:gap-x-14 md:gap-y-8 [grid-template-areas:'texto'_'mapa'_'acao'] md:[grid-template-areas:'mapa_texto'_'mapa_acao']">
                    <div className="[grid-area:texto] md:self-end text-center md:text-left">
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.22em] mb-3 font-semibold" style={{ color: gold }}>
                            Atendimento nacional
                        </p>
                        <h2
                            id="atendimento-nacional-titulo"
                            className="text-2xl md:text-4xl font-bold leading-tight"
                            style={{ color: white, fontFamily: serif }}
                        >
                            {titulo ?? (
                                <>
                                    Atendimento para candidatos de <span style={{ color: gold }}>todo o Brasil</span>
                                </>
                            )}
                        </h2>
                        <div
                            aria-hidden="true"
                            className="h-px w-16 mt-5 mx-auto md:mx-0"
                            style={{ background: `linear-gradient(90deg, transparent, rgba(201,162,39,0.5), transparent)` }}
                        />
                        <p className="text-sm md:text-base leading-relaxed mt-5 max-w-[46ch] mx-auto md:mx-0" style={{ color: gray2 }}>
                            {texto ??
                                "O escritório fica em Belo Horizonte e o atendimento é online: você envia o resultado da heteroidentificação e o edital pelo WhatsApp, de onde estiver, seja qual for o estado do seu concurso."}
                        </p>
                    </div>

                    <div className="[grid-area:mapa] md:self-center">
                        <Mapa />
                        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs" style={{ color: gray3 }}>
                            <span className="inline-flex items-center gap-2">
                                <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: gold }} />
                                Escritório em Belo Horizonte (MG)
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <span aria-hidden="true" className="h-px w-5" style={{ backgroundColor: gold, opacity: 0.6 }} />
                                Atendimento online em todos os estados e no DF
                            </span>
                        </div>
                    </div>

                    <div className="[grid-area:acao] md:self-start flex flex-col items-center md:items-start">
                        <ul className="space-y-3">
                            {listaFatos.map(({ Icon, texto }) => (
                                <li key={texto} className="flex items-center gap-3">
                                    <span
                                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                                        style={{ backgroundColor: "rgba(201,162,39,0.10)", border: "1px solid rgba(201,162,39,0.25)" }}
                                    >
                                        <Icon className="w-4 h-4" style={{ color: gold }} aria-hidden="true" />
                                    </span>
                                    <span className="text-sm md:text-base font-medium" style={{ color: gray1 }}>
                                        {texto}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {cta ? (
                            <a href={cta.href} target="_blank" rel="noopener noreferrer" style={estiloCta} className={classeCta}>
                                <MessageCircle className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                                {cta.rotulo}
                            </a>
                        ) : (
                            // Mesmo botão dos CTAs da LP: abre o quiz de qualificação.
                            <button type="button" onClick={onOpenQuiz} style={estiloCta} className={classeCta}>
                                <MessageCircle className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                                Quero Analisar Meu Caso
                            </button>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
}
