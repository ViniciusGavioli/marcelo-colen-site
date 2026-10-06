import { Container } from "@/components/layout";

// Mesma paleta da LP de recurso (page.tsx e DrMarceloSection).
const gold = "#c9a227";
const bg2 = "#111111";
const white = "#ffffff";
const gray2 = "rgba(255,255,255,0.7)";
const gray3 = "rgba(255,255,255,0.45)";
const serif = "'Cormorant Garamond', Georgia, serif";

// O que acontece depois do indeferimento, em linha do tempo. Formato
// diferente de propósito: a seção seguinte (falhas da banca) já usa quatro
// caixas, e aqui a ideia é sequência, não lista.
const ETAPAS = [
    {
        titulo: "A banca publica o resultado",
        texto: "Você recebe o indeferimento e, quando houver, a justificativa apresentada pela comissão.",
    },
    {
        titulo: "O prazo começa a correr",
        texto: "O edital define quanto tempo existe para recorrer e de que forma o recurso deve ser apresentado.",
    },
    {
        titulo: "A decisão precisa ser analisada",
        texto: "É aqui que se compara o que a banca fez com o edital, o procedimento adotado e a fundamentação apresentada.",
    },
    {
        titulo: "A medida depende do estágio do caso",
        texto: "Pode haver recurso administrativo e, em determinadas situações, avaliação de medida judicial.",
    },
];

export function HeteroDepoisDoIndeferimento() {
    return (
        <section
            aria-labelledby="depois-indeferimento-titulo"
            className="py-16 md:py-24 relative overflow-hidden"
            style={{ backgroundColor: bg2 }}
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: "url('/texture-juridica.webp')", backgroundRepeat: "repeat", backgroundSize: "1200px 800px", opacity: 0.03 }}
            />
            <Container className="relative z-10">
                <div className="max-w-5xl mx-auto">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.22em] text-center mb-3 font-semibold" style={{ color: gold }}>
                        Depois do indeferimento
                    </p>
                    <h2
                        id="depois-indeferimento-titulo"
                        className="text-2xl md:text-3xl font-bold text-center mb-2"
                        style={{ color: white, fontFamily: serif }}
                    >
                        O que acontece a partir daqui?
                    </h2>
                    <div className="flex items-center justify-center gap-3 py-1" aria-hidden="true">
                        <div className="h-px flex-1 max-w-[120px]" style={{ background: `linear-gradient(to right, transparent, ${gold})`, opacity: 0.35 }} />
                        <div className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: gold, opacity: 0.6 }} />
                        <div className="h-px flex-1 max-w-[120px]" style={{ background: `linear-gradient(to left, transparent, ${gold})`, opacity: 0.35 }} />
                    </div>
                    <p className="text-sm md:text-base text-center mt-4 max-w-[62ch] mx-auto leading-relaxed text-pretty" style={{ color: gray2 }}>
                        O resultado da banca não encerra automaticamente a discussão. Antes de decidir o que fazer, é
                        preciso entender a decisão, conferir o edital e saber quanto tempo ainda existe para agir.
                    </p>

                    {/* Linha do tempo: vertical no celular, horizontal no
                        desktop. Cada etapa desenha o trecho de linha até a
                        próxima, ligando o centro dos marcos. */}
                    <ol className="mt-12 md:mt-16 grid gap-10 md:grid-cols-4 md:gap-0">
                        {ETAPAS.map((etapa, i) => {
                            const ultima = i === ETAPAS.length - 1;
                            return (
                                <li key={etapa.titulo} className="relative pl-16 md:px-4 md:text-center">
                                    {!ultima && (
                                        <>
                                            <span
                                                aria-hidden="true"
                                                className="md:hidden absolute left-5 top-10 -bottom-10 w-px"
                                                style={{ background: `linear-gradient(to bottom, ${gold}, rgba(201,162,39,0.25))` }}
                                            />
                                            <span
                                                aria-hidden="true"
                                                className="hidden md:block absolute top-5 left-[calc(50%+20px)] w-[calc(100%-40px)] h-px"
                                                style={{ background: `linear-gradient(to right, ${gold}, rgba(201,162,39,0.25))` }}
                                            />
                                        </>
                                    )}
                                    <span
                                        aria-hidden="true"
                                        className="absolute left-0 top-0 md:static md:mx-auto w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold"
                                        style={{ backgroundColor: bg2, border: `1.5px solid ${gold}`, color: gold, fontFamily: serif }}
                                    >
                                        {i + 1}
                                    </span>
                                    <h3 className="pt-2 md:pt-0 md:mt-5 text-lg md:text-xl font-semibold leading-snug" style={{ color: white, fontFamily: serif }}>
                                        {etapa.titulo}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-pretty" style={{ color: gray2 }}>
                                        {etapa.texto}
                                    </p>
                                </li>
                            );
                        })}
                    </ol>

                    <p className="mt-12 md:mt-14 text-sm italic text-center text-pretty" style={{ color: gray3 }}>
                        O próximo passo depende do que aconteceu no seu processo, não de uma fórmula pronta.
                    </p>
                </div>
            </Container>
        </section>
    );
}
