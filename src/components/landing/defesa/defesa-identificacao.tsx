import { Container } from "@/components/layout";
import { Check } from "lucide-react";

const SITUACOES = [
    {
        titulo: "No Trabalho",
        descricao: "Foi ofendido, perseguido ou preterido em promoções por causa da sua cor/raça."
    },
    {
        titulo: "No Comércio/Shopping",
        descricao: "Foi seguido por seguranças, revistado indevidamente ou destratado em lojas."
    },
    {
        titulo: "Na Internet/Redes Sociais",
        descricao: "Sofreu ataques, xingamentos ou discurso de ódio online."
    },
    {
        titulo: "Em Locais Públicos",
        descricao: "Foi vítima de injúria racial (xingamentos) por vizinhos ou desconhecidos."
    }
];

export function DefesaIdentificacao() {
    return (
        <section className="py-16 lg:py-20" style={{ backgroundColor: '#ffffff' }}>
            <Container>
                <div className="max-w-4xl mx-auto">
                    {/* Título */}
                    <h2
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 text-center"
                        style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}
                    >
                        Você passou por alguma destas situações?
                    </h2>

                    {/* Grid de situações */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                        {SITUACOES.map((situacao, idx) => (
                            <div
                                key={idx}
                                className="flex gap-4 p-5 rounded-lg"
                                style={{ backgroundColor: '#f8f8f8', border: '1px solid #e5e5e5' }}
                            >
                                <div
                                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                                    style={{ backgroundColor: '#c9a227' }}
                                >
                                    <Check className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1" style={{ color: '#1a1a1a' }}>
                                        {situacao.titulo}
                                    </h3>
                                    <p className="text-sm" style={{ color: '#666' }}>
                                        {situacao.descricao}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Texto de apoio */}
                    <div
                        className="p-6 rounded-lg border-l-4"
                        style={{ backgroundColor: '#f8f8f8', borderColor: '#c9a227' }}
                    >
                        <p className="text-base mb-4" style={{ color: '#333' }}>
                            <strong>Muitas vítimas não sabem, mas a legislação mudou.</strong> Hoje, a injúria racial é equiparada ao racismo, <strong>inafiançável e imprescritível</strong>.
                        </p>
                        <p
                            className="text-xl lg:text-2xl font-bold"
                            style={{ color: '#c9a227', fontFamily: 'Georgia, serif' }}
                        >
                            A lei está do seu lado, e nós também.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
