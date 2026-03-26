import { Container } from "@/components/layout";
import { FileSearch, Shield, Scale } from "lucide-react";

const PASSOS = [
    {
        icon: FileSearch,
        numero: "1",
        titulo: "Preparativos",
        descricao: "Fazemos o levantamento de provas, testemunhas, vídeos e fotos. Organizamos os fatos e orientamos a melhor forma de fazer o registro do Boletim de Ocorrência ou outras providências jurídicas cabíveis."
    },
    {
        icon: Shield,
        numero: "2",
        titulo: "Providências Criminais",
        descricao: "Participamos do registro perante a Polícia, garantindo que todas as informações e provas necessárias sejam apresentadas, bem como todos os esforços sejam realizados para investigar a autoria do crime ou, caso já seja conhecida, para que sejam tomadas as providências legais cabíveis."
    },
    {
        icon: Scale,
        numero: "3",
        titulo: "Providências Cíveis",
        descricao: "Fazemos todos os atos necessários para responsabilizar quem praticou o racismo: no âmbito administrativo (se for funcionário público), trabalhista (comunicação ao RH e/ou Compliance) e cível, buscando a indenização que é devida."
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
