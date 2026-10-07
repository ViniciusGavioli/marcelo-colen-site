import Link from "next/link";
import { FileCheck, Gavel, Landmark, Scale } from "lucide-react";
import { Container } from "@/components/layout";
import { SITE_COLORS as C } from "@/lib/site-theme";
import { CabecalhoSecao } from "./primitivos";

// As quatro áreas, com os textos que já estavam no site (conferidos no
// commit da home anterior). Mesma ordem do hero e do rodapé. Heteroidentificação
// leva direto à LP de recurso, que é onde está o conteúdo dessa área.
const AREAS = [
    {
        titulo: "Direito Criminal",
        texto: "Defesa técnica em investigações e processos criminais, habeas corpus, recursos, execução penal e questões de Direito Penal Empresarial.",
        Icon: Gavel,
        href: "/atuacao",
        rotulo: "Ver a área",
    },
    {
        titulo: "Direito Antidiscriminatório",
        texto: "Atuação jurídica em questões relacionadas à discriminação, igualdade racial, direitos fundamentais e proteção contra práticas discriminatórias.",
        Icon: Scale,
        href: "/atuacao",
        rotulo: "Ver a área",
    },
    {
        titulo: "Heteroidentificação e Políticas Afirmativas",
        texto: "Orientação e atuação em procedimentos de heteroidentificação, recursos administrativos, concursos públicos, políticas de cotas raciais e medidas judiciais relacionadas.",
        Icon: FileCheck,
        href: "/recurso-heteroidentificacao",
        rotulo: "Recurso na heteroidentificação",
    },
    {
        titulo: "Consultoria e Atuação Institucional",
        texto: "Pareceres, consultoria, formação, palestras e projetos relacionados à igualdade racial, diversidade, integridade e políticas institucionais.",
        Icon: Landmark,
        href: "/atuacao",
        rotulo: "Ver a área",
    },
];

export function SiteAreas() {
    return (
        <section
            id="atuacao"
            aria-labelledby="areas-titulo"
            className="py-16 md:py-24 relative overflow-hidden scroll-mt-20"
            style={{ backgroundColor: C.bg1 }}
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: "url('/texture-juridica.webp')", backgroundRepeat: "repeat", backgroundSize: "1200px 800px", opacity: 0.03 }}
            />
            <Container className="relative z-10">
                <div className="max-w-5xl mx-auto">
                    <CabecalhoSecao id="areas-titulo" selo="Áreas de atuação" titulo="Onde o escritório atua" />

                    <ul className="mt-12 grid gap-5 md:grid-cols-2">
                        {AREAS.map(({ titulo, texto, Icon, href, rotulo }) => (
                            <li key={titulo}>
                                <Link
                                    href={href}
                                    className="group h-full rounded-2xl p-6 md:p-8 flex flex-col transition-colors hover:border-[rgba(201,162,39,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                                    style={{
                                        backgroundColor: C.surface,
                                        border: "1px solid rgba(255,255,255,0.07)",
                                        boxShadow: "0 8px 28px rgba(0,0,0,0.2)",
                                        outlineColor: C.gold,
                                    }}
                                >
                                    <span
                                        aria-hidden="true"
                                        className="w-11 h-11 rounded-full flex items-center justify-center"
                                        style={{ backgroundColor: C.goldSoft, border: `1px solid ${C.goldBorder}` }}
                                    >
                                        <Icon className="w-5 h-5" style={{ color: C.gold }} />
                                    </span>
                                    <h3 className="mt-5 text-xl md:text-2xl font-semibold leading-snug" style={{ color: C.white, fontFamily: C.serif }}>
                                        {titulo}
                                    </h3>
                                    <p className="mt-3 text-sm md:text-[0.9375rem] leading-relaxed" style={{ color: C.gray2 }}>
                                        {texto}
                                    </p>
                                    <span
                                        className="mt-auto pt-6 text-sm font-semibold self-start pb-0.5 transition-colors group-hover:text-white"
                                        style={{ color: C.gold, borderBottom: `1px solid ${C.goldBorder}` }}
                                    >
                                        {rotulo}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    );
}
