"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Container } from "@/components/layout";

// Mesma paleta da LP de recurso (page.tsx e DrMarceloSection).
const gold = "#c9a227";
const bg2 = "#111111";
const white = "#ffffff";
const gray1 = "rgba(255,255,255,0.92)";
const gray3 = "rgba(255,255,255,0.45)";
const hairline = "rgba(255,255,255,0.08)";
const serif = "'Cormorant Garamond', Georgia, serif";
const estrela = "#FBBC04"; // amarelo das estrelas do Google

// Avaliações do perfil "Colen Advogados" no Google Maps, conferidas em
// 06/10/2026: nota 5,0 em 51 avaliações, todas de 5 estrelas. Textos
// copiados na íntegra (o "Leia mais" mostra o resto), sem edição. Datas no
// formato relativo do Google, valendo para a data da coleta, dita no rodapé.
//
// Seleção para esta LP: as que citam o Dr. Marcelo e as que falam do
// atendimento no caso. Ficaram de fora as que elogiam outra advogada do
// escritório, a escrita por alguém com o nome dela e as só com estrelas.
const RESUMO = { nota: "5,0", total: 51, coleta: "outubro de 2026" };

const AVALIACOES = [
    {
        nome: "Melissa Rosadilla",
        quando: "6 meses atrás",
        texto: "A equipe atuou de forma excepcional no meu caso. Desde o primeiro atendimento, extremamente claros e transparentes comigo, o que me gerou muita confiança. Ao decorrer do caso, igualmente atenciosos a tudo. Para finalizar, obtive êxito. Muito obrigada a Marcelo e toda a equipe!",
    },
    {
        nome: "Bruno Guariento",
        quando: "3 meses atrás",
        texto: "Equipe de excelência, sob o comando do excepcional advogado Dr. Marcelo Colen. Atendimento diferenciado e personalizado.",
    },
    {
        nome: "Juliy Ferreira",
        quando: "3 meses atrás",
        texto: "Gostaria de agradecer à equipe da Colen Advogados pelo atendimento excepcional que recebi. Desde o primeiro contato fui tratada com respeito, atenção e profissionalismo.\n\nEm um momento delicado da minha vida, encontrei não apenas competência jurídica, mas também acolhimento, escuta e humanidade. Todas as minhas dúvidas foram esclarecidas com transparência, e me senti segura durante todo o processo.\n\nRecomendo o escritório a quem busca profissionais comprometidos, éticos e verdadeiramente preocupados com seus clientes. Minha gratidão a toda a equipe pelo excelente trabalho realizado.",
    },
    {
        nome: "Sibele Rosadilla",
        quando: "6 meses atrás",
        texto: "Escritório sério, competente, interessado, responsável, diferenciado!!\nNos atendeu de maneira ímpar, de forma muito clara e conseguindo sucesso na ação!\nTotalmente recomendável!\nMuito obrigada!",
    },
    {
        nome: "Leticia Moreira",
        quando: "2 meses atrás",
        texto: "Minha experiência foi extremamente positiva. Desde o primeiro contato percebi o comprometimento da equipe em entender minha situação e buscar a melhor solução. O atendimento foi acolhedor, transparente e muito profissional, o que me trouxe tranquilidade durante todo o processo. É um escritório que realmente demonstra cuidado com cada cliente.",
    },
    {
        nome: "Jéssica Madureira",
        quando: "3 meses atrás",
        texto: "Excelente atendimento! Equipe muito competente, atenciosa e comprometida. Fui muito bem orientada durante todo o processo e tive total confiança no trabalho realizado. Recomendo demais! Gratidão aos envolvidos.",
    },
    {
        nome: "Ana Silva",
        quando: "3 meses atrás",
        texto: "Estou sendo muito bem representada em meu processo. Atendimento, comprometimento, empatia e transparência inigualáveis!",
    },
    {
        nome: "Lia Bifano",
        quando: "4 meses atrás",
        texto: "Equipe de advogados impecáveis, profissionais de alto gabarito.\nAgradeço por cuidar do meu caso com dedicação e comprometimento.",
    },
];

// Avatar com a inicial, como o Google mostra para quem não tem foto. Sem foto
// dos clientes: não carrega imagem de terceiros nem expõe o rosto deles.
const CORES_AVATAR = ["#7b1fa2", "#00897b", "#3949ab", "#c2185b", "#6d4c41", "#00838f", "#5d4037", "#1e88e5"];

// Texto acima disto ganha "Leia mais": cabe em quatro linhas do card.
const LIMITE_RESUMO = 150;

function LogoG({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
        </svg>
    );
}

function Estrelas({ tamanho }: { tamanho: string }) {
    return (
        <span className="inline-flex gap-0.5" role="img" aria-label="5 de 5 estrelas">
            {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className={tamanho} fill={estrela} color={estrela} aria-hidden="true" />
            ))}
        </span>
    );
}

function CardAvaliacao({ nome, quando, texto, cor }: { nome: string; quando: string; texto: string; cor: string }) {
    const [aberto, setAberto] = useState(false);
    const longo = texto.length > LIMITE_RESUMO;

    return (
        <article
            className="h-full rounded-xl p-5 flex flex-col"
            style={{ backgroundColor: "#1a1a1a", border: `1px solid ${hairline}` }}
        >
            <header className="flex items-center gap-3">
                <span
                    aria-hidden="true"
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-base font-semibold"
                    style={{ backgroundColor: cor, color: white }}
                >
                    {nome.charAt(0)}
                </span>
                <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold truncate" style={{ color: white }}>
                        {nome}
                    </span>
                    <span className="block text-xs" style={{ color: gray3 }}>
                        {quando}
                    </span>
                </span>
                <LogoG className="w-5 h-5 flex-shrink-0" />
            </header>

            <div className="mt-3">
                <Estrelas tamanho="w-4 h-4" />
            </div>

            <p
                className={`mt-3 text-sm leading-relaxed whitespace-pre-line ${aberto || !longo ? "" : "line-clamp-4"}`}
                style={{ color: gray1 }}
            >
                {texto}
            </p>
            {longo && (
                <button
                    type="button"
                    onClick={() => setAberto((v) => !v)}
                    aria-expanded={aberto}
                    className="mt-2 self-start text-xs font-medium hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{ color: gray3, outlineColor: gold }}
                >
                    {aberto ? "Mostrar menos" : "Leia mais"}
                </button>
            )}
        </article>
    );
}

export function HeteroAvaliacoesGoogle() {
    const trilho = useRef<HTMLUListElement>(null);
    const [noInicio, setNoInicio] = useState(true);
    const [noFim, setNoFim] = useState(false);

    // Setas rolam um card por vez; no celular o trilho também desliza no dedo.
    const mover = (direcao: 1 | -1) => {
        const el = trilho.current;
        const card = el?.querySelector("li");
        if (!el || !card) return;
        el.scrollBy({ left: direcao * (card.offsetWidth + 16), behavior: "smooth" });
    };

    const aoRolar = () => {
        const el = trilho.current;
        if (!el) return;
        setNoInicio(el.scrollLeft < 8);
        setNoFim(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
    };

    const seta =
        "hidden md:flex absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full items-center justify-center transition-opacity disabled:opacity-0 disabled:pointer-events-none focus-visible:outline focus-visible:outline-2";

    return (
        <section
            aria-labelledby="avaliacoes-titulo"
            className="py-16 md:py-24 relative overflow-hidden"
            style={{ backgroundColor: bg2 }}
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: "url('/texture-juridica.webp')", backgroundRepeat: "repeat", backgroundSize: "1200px 800px", opacity: 0.03 }}
            />
            <Container className="relative z-10">
                <div className="max-w-6xl mx-auto">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.22em] text-center mb-3 font-semibold" style={{ color: gold }}>
                        Depoimentos
                    </p>
                    <h2
                        id="avaliacoes-titulo"
                        className="text-2xl md:text-3xl font-bold text-center mb-2"
                        style={{ color: white, fontFamily: serif }}
                    >
                        Avaliações de clientes no Google
                    </h2>
                    <div className="flex items-center justify-center gap-3 py-1" aria-hidden="true">
                        <div className="h-px flex-1 max-w-[120px]" style={{ background: `linear-gradient(to right, transparent, ${gold})`, opacity: 0.35 }} />
                        <div className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: gold, opacity: 0.6 }} />
                        <div className="h-px flex-1 max-w-[120px]" style={{ background: `linear-gradient(to left, transparent, ${gold})`, opacity: 0.35 }} />
                    </div>

                    <div className="mt-10 grid gap-8 md:grid-cols-[200px_1fr] md:items-center">
                        {/* Resumo, como no widget do Google */}
                        <div className="text-center">
                            <p className="text-lg font-extrabold uppercase tracking-wide" style={{ color: white }}>
                                Excelente
                            </p>
                            <div className="mt-1 flex justify-center">
                                <Estrelas tamanho="w-7 h-7" />
                            </div>
                            <p className="mt-2 text-sm" style={{ color: gray1 }}>
                                Nota {RESUMO.nota}, com base em <strong style={{ color: white }}>{RESUMO.total} avaliações</strong>
                            </p>
                            <p className="mt-2 flex items-center justify-center gap-2 text-2xl font-semibold tracking-tight" aria-label="Google">
                                <LogoG className="w-6 h-6" />
                                <span aria-hidden="true">
                                    <span style={{ color: "#4285F4" }}>G</span>
                                    <span style={{ color: "#EA4335" }}>o</span>
                                    <span style={{ color: "#FBBC05" }}>o</span>
                                    <span style={{ color: "#4285F4" }}>g</span>
                                    <span style={{ color: "#34A853" }}>l</span>
                                    <span style={{ color: "#EA4335" }}>e</span>
                                </span>
                            </p>
                        </div>

                        <div className="relative min-w-0">
                            <button
                                type="button"
                                onClick={() => mover(-1)}
                                disabled={noInicio}
                                aria-label="Avaliações anteriores"
                                className={`${seta} -left-5`}
                                style={{ backgroundColor: "#262626", border: `1px solid ${hairline}`, color: white, outlineColor: gold }}
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <ul
                                ref={trilho}
                                onScroll={aoRolar}
                                className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                                aria-label="Avaliações no Google"
                            >
                                {AVALIACOES.map((a, i) => (
                                    <li
                                        key={a.nome}
                                        className="snap-start flex-shrink-0 w-[85%] sm:w-[calc((100%-16px)/2)] lg:w-[calc((100%-32px)/3)]"
                                    >
                                        <CardAvaliacao {...a} cor={CORES_AVATAR[i % CORES_AVATAR.length]} />
                                    </li>
                                ))}
                            </ul>
                            <button
                                type="button"
                                onClick={() => mover(1)}
                                disabled={noFim}
                                aria-label="Próximas avaliações"
                                className={`${seta} -right-5`}
                                style={{ backgroundColor: "#262626", border: `1px solid ${hairline}`, color: white, outlineColor: gold }}
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <p className="mt-6 text-[11px] text-center" style={{ color: gray3 }}>
                        Nota e avaliações do perfil Colen Advogados no Google, em {RESUMO.coleta}.
                    </p>
                </div>
            </Container>
        </section>
    );
}
