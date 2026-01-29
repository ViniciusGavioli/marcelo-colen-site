import { Container } from "@/components/layout";
import { Gavel, Banknote, Shield } from "lucide-react";

const PASSOS = [
    {
        icon: Gavel,
        numero: "1",
        titulo: "Esfera Criminal (Punição)",
        descricao: "Atuamos como Assistente de Acusação para garantir que o inquérito policial ande e o agressor responda criminalmente. Não deixamos seu B.O. virar 'apenas estatística'."
    },
    {
        icon: Banknote,
        numero: "2",
        titulo: "Esfera Cível (Indenização)",
        descricao: "Buscamos a reparação financeira pelos danos morais sofridos. O bolso é onde o racista mais sente o peso da lei."
    },
    {
        icon: Shield,
        numero: "3",
        titulo: "Sigilo e Proteção",
        descricao: "Sabemos que é difícil denunciar. Todo o atendimento é sigiloso e focado na sua proteção jurídica e emocional."
    }
];

export function DefesaSolucao() {
    return (
        <section className="py-16 lg:py-20" style={{ backgroundColor: '#1a1a1a' }}>
            <Container>
                <div className="max-w-4xl mx-auto">
                    {/* Título */}
                    <h2
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12 text-center"
                        style={{ color: '#ffffff', fontFamily: 'Georgia, serif' }}
                    >
                        Como atuamos no seu caso
                    </h2>

                    {/* Passos */}
                    <div className="space-y-6">
                        {PASSOS.map((passo, idx) => (
                            <div
                                key={idx}
                                className="flex gap-6 p-6 rounded-lg"
                                style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                            >
                                <div
                                    className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0"
                                    style={{ backgroundColor: '#c9a227' }}
                                >
                                    <passo.icon className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span
                                            className="text-xs font-bold px-2 py-1 rounded"
                                            style={{ backgroundColor: 'rgba(201, 162, 39, 0.2)', color: '#c9a227' }}
                                        >
                                            PASSO {passo.numero}
                                        </span>
                                        <h3 className="font-bold text-lg" style={{ color: '#ffffff' }}>
                                            {passo.titulo}
                                        </h3>
                                    </div>
                                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                                        {passo.descricao}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
