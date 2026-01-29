import { Container } from "@/components/layout";
import { Scale, Shield, Gavel, AlertTriangle } from "lucide-react";

export function DefesaEducacional() {
    return (
        <>
            {/* ============================================ */}
            {/* SEÇÃO: RACISMO NO BRASIL */}
            {/* ============================================ */}
            <section className="py-20 lg:py-28" style={{ backgroundColor: '#1a1a1a' }}>
                <Container>
                    <div className="max-w-4xl mx-auto">

                        {/* Eyebrow */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-px" style={{ backgroundColor: '#c9a227' }} />
                            <p
                                className="font-medium tracking-widest uppercase text-xs"
                                style={{ color: '#c9a227' }}
                            >
                                Entenda seus direitos
                            </p>
                        </div>

                        {/* Headline */}
                        <h2
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-10"
                            style={{ color: '#FFFFFF', fontFamily: 'Georgia, serif' }}
                        >
                            Racismo é Crime Inafiançável e Imprescritível
                        </h2>

                        {/* Content */}
                        <p
                            className="text-lg lg:text-xl leading-relaxed"
                            style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                        >
                            A Constituição Federal de 1988 e a Lei 7.716/89 classificam o racismo como crime inafiançável (o agressor não pode pagar fiança para sair da prisão) e imprescritível (você pode denunciar a qualquer momento, não há prazo). A pena varia de 2 a 5 anos de reclusão, além de multa.
                        </p>

                        {/* Icons row */}
                        <div className="flex items-center justify-center gap-12 mt-12 pt-12 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                            <div className="text-center">
                                <Scale className="w-10 h-10 mx-auto mb-3" style={{ color: '#c9a227' }} />
                                <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Justiça</p>
                            </div>
                            <div className="text-center">
                                <Shield className="w-10 h-10 mx-auto mb-3" style={{ color: '#c9a227' }} />
                                <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Proteção</p>
                            </div>
                            <div className="text-center">
                                <Gavel className="w-10 h-10 mx-auto mb-3" style={{ color: '#c9a227' }} />
                                <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Punição</p>
                            </div>
                            <div className="text-center">
                                <AlertTriangle className="w-10 h-10 mx-auto mb-3" style={{ color: '#c9a227' }} />
                                <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Reparação</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ============================================ */}
            {/* SEÇÃO: LEI 14.532/2023 - EQUIPARAÇÃO */}
            {/* ============================================ */}
            <section className="py-20 lg:py-28" style={{ backgroundColor: '#F8F9FA' }}>
                <Container>
                    <div className="max-w-4xl mx-auto">

                        {/* Eyebrow */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-px" style={{ backgroundColor: '#c9a227' }} />
                            <p
                                className="font-medium tracking-widest uppercase text-xs"
                                style={{ color: '#c9a227' }}
                            >
                                Mudança na Lei
                            </p>
                        </div>

                        {/* Headline */}
                        <h2
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-10"
                            style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}
                        >
                            Lei 14.532/2023: Injúria Racial Agora é Crime de Racismo
                        </h2>

                        {/* Paragraphs */}
                        <div className="space-y-6">
                            <p
                                className="text-lg leading-relaxed"
                                style={{ color: 'rgba(26, 26, 26, 0.8)' }}
                            >
                                Até 2023, a injúria racial (xingamentos com conotação racial) era tratada como crime comum, com pena menor e prazo de prescrição. Com a Lei 14.532/2023, a injúria racial foi equiparada ao racismo, tornando-se também inafiançável e imprescritível.
                            </p>
                            <p
                                className="text-lg leading-relaxed"
                                style={{ color: 'rgba(26, 26, 26, 0.8)' }}
                            >
                                Isso significa que xingamentos racistas como comparações com animais, ofensas usando termos pejorativos relacionados à cor/raça, ou qualquer insulto que atinja a dignidade da vítima por razões étnico-raciais agora recebem a mesma punição severa do crime de racismo.
                            </p>
                        </div>

                        {/* Highlight box */}
                        <div
                            className="mt-10 p-6 border-l-4"
                            style={{
                                borderColor: '#c9a227',
                                backgroundColor: 'rgba(201, 162, 39, 0.08)'
                            }}
                        >
                            <p
                                className="text-lg italic"
                                style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}
                            >
                                "A equiparação é um marco histórico na luta antirracista. Agora, quem ofende também responde com rigor. A dignidade do povo negro deixou de ser negociável."
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
