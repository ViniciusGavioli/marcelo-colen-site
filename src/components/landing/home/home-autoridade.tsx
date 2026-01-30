import Image from "next/image";
import { Container } from "@/components/layout";
import { Scale, Globe, Award, BookOpen } from "lucide-react";

export function HomeAutoridade() {
    return (
        <section className="py-20" style={{ backgroundColor: '#111111' }}>
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">

                    {/* Foto do Marcelo */}
                    <div className="flex justify-center">
                        <div className="relative">
                            {/* Borda dourada decorativa */}
                            <div
                                className="absolute -inset-2 rounded-lg opacity-20"
                                style={{
                                    background: 'linear-gradient(135deg, #c9a227 0%, transparent 50%, #c9a227 100%)',
                                }}
                            />
                            <Image
                                src="/images/wordpress/marcelo-bio.jpg"
                                alt="Dr. Marcelo Colen"
                                width={350}
                                height={450}
                                className="relative rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    {/* Texto */}
                    <div className="space-y-6">
                        <h2
                            className="text-3xl lg:text-4xl font-bold"
                            style={{ color: '#ffffff', fontFamily: 'Georgia, serif' }}
                        >
                            Dr. Marcelo <span style={{ color: '#c9a227' }}>Colen</span>
                        </h2>

                        <p
                            className="text-lg leading-relaxed"
                            style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                        >
                            Advogado especialista em <strong style={{ color: '#c9a227' }}>Compliance Antidiscriminatório</strong>,
                            com forte atuação na defesa dos direitos da população negra em todo Brasil.
                        </p>

                        <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                            Mestrando em Direito pela UFMG e pós-graduado em Gestão Estratégica na Advocacia.
                            Autor do Manual Antirracismo no Esporte, adotado pela Amstel® na campanha
                            &quot;Barulho Contra o Racismo&quot; – Copa Libertadores 2022.
                        </p>

                        {/* Credenciais */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-11 h-11 rounded-lg flex items-center justify-center"
                                    style={{ backgroundColor: 'rgba(201, 162, 39, 0.15)' }}
                                >
                                    <Globe className="w-5 h-5" style={{ color: '#c9a227' }} />
                                </div>
                                <span className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    Atendimento em Todo Brasil
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-11 h-11 rounded-lg flex items-center justify-center"
                                    style={{ backgroundColor: 'rgba(201, 162, 39, 0.15)' }}
                                >
                                    <Scale className="w-5 h-5" style={{ color: '#c9a227' }} />
                                </div>
                                <span className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    OAB/MG
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-11 h-11 rounded-lg flex items-center justify-center"
                                    style={{ backgroundColor: 'rgba(201, 162, 39, 0.15)' }}
                                >
                                    <Award className="w-5 h-5" style={{ color: '#c9a227' }} />
                                </div>
                                <span className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    Mestrando UFMG
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-11 h-11 rounded-lg flex items-center justify-center"
                                    style={{ backgroundColor: 'rgba(201, 162, 39, 0.15)' }}
                                >
                                    <BookOpen className="w-5 h-5" style={{ color: '#c9a227' }} />
                                </div>
                                <span className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    Autor Publicado
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
