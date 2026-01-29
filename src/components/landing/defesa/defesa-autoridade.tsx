import Image from "next/image";
import { Container } from "@/components/layout";
import { Scale, Globe } from "lucide-react";

export function DefesaAutoridade() {
    return (
        <section className="py-16 lg:py-20" style={{ backgroundColor: '#ffffff' }}>
            <Container>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">

                    {/* Foto do Marcelo */}
                    <div className="flex justify-center">
                        <Image
                            src="/images/marcelo/marcelo-bio.jpg"
                            alt="Dr. Marcelo Colen"
                            width={320}
                            height={420}
                            className="object-contain"
                        />
                    </div>

                    {/* Texto */}
                    <div className="space-y-5">
                        <h2
                            className="text-2xl sm:text-3xl font-bold"
                            style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}
                        >
                            Advocacia Antirracista e Especializada
                        </h2>

                        <p style={{ color: '#333' }}>
                            Dr. Marcelo Colen é advogado especialista em Compliance Antidiscriminatório, com forte atuação na defesa dos direitos da população negra em todo Brasil.
                        </p>

                        <p style={{ color: '#666' }}>
                            Mestrando em Direito pela UFMG e pós-graduado em Gestão Estratégica na Advocacia. Autor do Manual Antirracismo no Esporte, adotado pela Amstel® na campanha "Barulho Contra o Racismo" – Copa Libertadores 2022.
                        </p>

                        {/* Destaques */}
                        <div className="space-y-3 pt-2">
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-10 h-10 rounded flex items-center justify-center"
                                    style={{ backgroundColor: '#f8f8f8' }}
                                >
                                    <Globe className="w-5 h-5" style={{ color: '#c9a227' }} />
                                </div>
                                <span style={{ color: '#333' }}>Atendimento Online em todo Brasil</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-10 h-10 rounded flex items-center justify-center"
                                    style={{ backgroundColor: '#f8f8f8' }}
                                >
                                    <Scale className="w-5 h-5" style={{ color: '#c9a227' }} />
                                </div>
                                <span style={{ color: '#333' }}>Estratégia personalizada para cada caso</span>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    );
}
