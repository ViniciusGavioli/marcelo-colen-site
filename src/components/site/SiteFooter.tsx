import Link from "next/link";
import { getDirectWhatsAppLink } from "@/lib/whatsapp";

const C = {
    bg: "#181818",
    gold: "#c9a227",
    white: "#ffffff",
    gray2: "rgba(255,255,255,0.7)",
    gray3: "rgba(255,255,255,0.45)",
};

const WA_MSG = "Olá Dr. Marcelo, vim pelo site e gostaria de uma análise do meu caso.";

const AREAS = [
    { label: "Recurso Heteroidentificação", href: "/recurso-heteroidentificacao" },
    { label: "Advogado Cotas Raciais", href: "/advogado-cotas-raciais" },
    { label: "Reprovado na Banca", href: "/reprovado-heteroidentificacao" },
];

export function SiteFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ backgroundColor: C.bg, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="py-10 md:py-14">
                    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                        {/* Marca */}
                        <div>
                            <p
                                className="text-xl font-bold mb-2"
                                style={{ color: C.gold, fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                            >
                                Marcelo Colen
                            </p>
                            <p className="text-xs mb-4" style={{ color: C.gray3 }}>
                                Advocacia
                            </p>
                            <p className="text-sm leading-relaxed" style={{ color: C.gray2 }}>
                                Especialista em Direito Antidiscriminatório, heteroidentificação
                                e defesa de candidatos cotistas em concursos públicos.
                            </p>
                        </div>

                        {/* Áreas */}
                        <div>
                            <p
                                className="text-xs uppercase tracking-widest font-semibold mb-4"
                                style={{ color: C.gold }}
                            >
                                Áreas de Atuação
                            </p>
                            <div className="space-y-2">
                                {AREAS.map((area) => (
                                    <Link
                                        key={area.href}
                                        href={area.href}
                                        className="block text-sm transition-colors hover:text-white"
                                        style={{ color: C.gray2 }}
                                    >
                                        {area.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Contato */}
                        <div>
                            <p
                                className="text-xs uppercase tracking-widest font-semibold mb-4"
                                style={{ color: C.gold }}
                            >
                                Contato
                            </p>
                            <div className="space-y-2 text-sm" style={{ color: C.gray2 }}>
                                <p>OAB/MG 167.463</p>
                                <p>(31) 97220-6996</p>
                                <p>marcelo@cardosocolen.com.br</p>
                                <a
                                    href="https://instagram.com/marcelocolen.adv"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block hover:text-white transition-colors"
                                >
                                    @marcelocolen.adv
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="h-px mt-10 mb-6" style={{ background: "rgba(255,255,255,0.06)" }} />

                    <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs" style={{ color: C.gray3 }}>
                        <p>© {currentYear} Marcelo Colen Advocacia. Todos os direitos reservados.</p>
                        <p>Belo Horizonte/MG · Atendimento 100% online e nacional</p>
                    </div>

                    {/* Aviso legal */}
                    <p className="mt-6 text-[10px] text-center leading-relaxed" style={{ color: "rgba(255,255,255,0.25)" }}>
                        Este site tem caráter informativo e não constitui publicidade ou oferta de serviços.
                        O conteúdo disponibilizado não configura aconselhamento jurídico. Cada caso requer análise individualizada.
                    </p>
                </div>
            </div>
        </footer>
    );
}
