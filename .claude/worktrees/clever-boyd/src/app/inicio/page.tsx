import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import {
    ArrowRight,
    MessageCircle,
    Instagram,
    Scale,
    Users,
    ShieldCheck,
    Award,
    BookOpen,
    Building2,
    Gavel,
    FileCheck,
    TrendingUp,
    CheckCircle,
    MapPin,
    Clock
} from "lucide-react";
import { Container } from "@/components/layout";
import { SITE_CONFIG, MARCELO_PROFILE } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/whatsapp";
import {
    getLegalServiceSchema,
    getPersonSchema,
    getWebsiteSchema,
} from "@/lib/schema";

// Mensagens WhatsApp por pilar
const WHATSAPP_MESSAGES = {
    criminal: "Olá, Dr. Marcelo. Preciso de orientação em um caso de Direito Criminal.",
    hetero: "Olá, Dr. Marcelo. Fui indeferido(a) na heteroidentificação e preciso entender meus direitos.",
    compliance: "Olá, Dr. Marcelo. Tenho interesse em consultoria de Compliance Antidiscriminatório para minha empresa/instituição.",
    geral: "Olá, Dr. Marcelo. Gostaria de agendar uma consulta."
};

// Credenciais institucionais
const CREDENCIAIS = [
    "Diretor de Diversidade e Inclusão da OAB/MG (2025–2027)",
    "Presidente da Comissão de Igualdade Racial da OAB/MG (2022–2024)",
    "Conselheiro Seccional da OAB/MG (2022–2024)",
    "Mestrando em Direito pela UFMG",
    "Autor do Manual Antirracismo no Esporte (Amstel®)"
];

// Os 3 Pilares
const PILARES = [
    {
        id: "criminal",
        title: "Direito Criminal",
        subtitle: "Defesa Estratégica de Elite",
        icon: Gavel,
        color: "#1a1a1a",
        accent: "#c9a227",
        description: "Atuação em casos complexos de Direito Penal com ênfase em crimes de discriminação, gestão de crises e litígios de alta relevância.",
        highlights: [
            "Crimes de Racismo e Injúria Racial",
            "Gestão de Crises Reputacionais",
            "Defesa em Tribunais Superiores",
            "Inquéritos e Processos Complexos"
        ],
        cta: "Consultar Caso Criminal",
        whatsapp: WHATSAPP_MESSAGES.criminal
    },
    {
        id: "hetero",
        title: "Heteroidentificação",
        subtitle: "Parecer Antropológico Especializado",
        icon: Users,
        color: "#2d1810",
        accent: "#c9a227",
        description: "Recursos administrativos e judiciais para reverter indeferimentos em bancas de cotas raciais, com fundamentação técnica em critérios fenotípicos.",
        highlights: [
            "Análise Técnica Fenotípica",
            "Laudos Antropológicos Científicos",
            "Recursos Administrativos e Judiciais",
            "Atuação em Concursos e Vestibulares"
        ],
        cta: "Analisar Meu Caso",
        whatsapp: WHATSAPP_MESSAGES.hetero
    },
    {
        id: "compliance",
        title: "Compliance Antidiscriminatório",
        subtitle: "Consultoria Institucional e Corporativa",
        icon: ShieldCheck,
        color: "#1a1a1a",
        accent: "#c9a227",
        description: "Estruturação de programas de integridade, prevenção de crises reputacionais e auditoria de políticas de diversidade para empresas e instituições.",
        highlights: [
            "Prevenção de Crises Reputacionais",
            "Treinamentos e Palestras",
            "Auditoria de Políticas de Inclusão",
            "Estruturação de Canais de Denúncia"
        ],
        cta: "Solicitar Proposta",
        whatsapp: WHATSAPP_MESSAGES.compliance
    }
];

// Critérios fenotípicos (Atlas da Fenotipia)
const CRITERIOS_FENOTIPICOS = [
    {
        criterio: "Cor da Pele",
        erroBanca: "Iluminação inadequada ou câmeras de baixa qualidade distorcem a percepção real.",
        abordagem: "Aplicação científica da Escala de Fitzpatrick em laudo antropológico padronizado."
    },
    {
        criterio: "Textura Capilar",
        erroBanca: "Desconsideração de cabelos ondulados ou cacheados como traço negroide.",
        abordagem: "Documentação de histórico fenotípico e análise de estrutura capilar natural."
    },
    {
        criterio: "Traços Faciais",
        erroBanca: "Análise superficial do nariz e lábios sem métricas de proporção.",
        abordagem: "Mapeamento antropométrico comparativo com bases de dados étnicos."
    },
    {
        criterio: "Fundamentação",
        erroBanca: "Decisões não fundamentadas ou baseadas em 'percepção social' vaga.",
        abordagem: "Enquadramento jurídico no princípio da motivação dos atos administrativos."
    }
];

export default function HomePage() {
    const structuredData = [
        getLegalServiceSchema(),
        getPersonSchema(),
        getWebsiteSchema(),
    ];

    return (
        <>
            {/* JSON-LD Structured Data for SEO */}
            <Script
                id="structured-data-home"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />

            {/* ============================================ */}
            {/* HERO - Portal de Autoridade */}
            {/* ============================================ */}
            <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#0f0f0f' }}>
                {/* Linha dourada no topo */}
                <div className="absolute top-0 left-0 right-0 h-1 z-20" style={{ backgroundColor: '#c9a227' }} />

                {/* Background sutil */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'url("/images/hero-scales.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }} />
                </div>

                {/* Gradiente overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse at 30% 50%, rgba(201, 162, 39, 0.08) 0%, transparent 50%)'
                    }}
                />

                <Container className="relative z-10 py-20 lg:py-32">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">

                        {/* Conteúdo Principal */}
                        <div className="lg:col-span-7 space-y-8">
                            {/* Badge Institucional */}
                            <div className="flex flex-wrap items-center gap-3">
                                <span
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                                    style={{ backgroundColor: 'rgba(201, 162, 39, 0.15)', color: '#c9a227' }}
                                >
                                    <Award className="w-4 h-4" />
                                    Diretor OAB/MG 2025-2027
                                </span>
                                <span
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', color: 'rgba(255, 255, 255, 0.7)' }}
                                >
                                    <BookOpen className="w-4 h-4" />
                                    Mestrando UFMG
                                </span>
                            </div>

                            {/* Headline Principal */}
                            <div className="space-y-4">
                                <h1
                                    className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]"
                                    style={{ color: '#ffffff', fontFamily: 'Georgia, serif' }}
                                >
                                    Justiça Estratégica e{" "}
                                    <span style={{ color: '#c9a227' }}>Defesa de Direitos Fundamentais</span>
                                </h1>
                                <p
                                    className="text-xl md:text-2xl leading-relaxed max-w-2xl"
                                    style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                                >
                                    Advocacia de elite em Direito Criminal, Heteroidentificação e Compliance Antidiscriminatório.
                                    Autoridade institucional e rigor técnico a serviço da sua causa.
                                </p>
                            </div>

                            {/* CTA Principal */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href={getWhatsAppLink()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-base rounded-lg transition-all duration-200 hover:brightness-110 hover:scale-[1.02]"
                                    style={{ backgroundColor: '#c9a227', color: '#0f0f0f' }}
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Agendar Consulta
                                </a>
                                <a
                                    href="#pilares"
                                    className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-base rounded-lg transition-all duration-200 hover:bg-white/10"
                                    style={{ backgroundColor: 'transparent', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)' }}
                                >
                                    Conhecer Áreas de Atuação
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>

                            {/* Micro-prova social */}
                            <div className="flex flex-wrap items-center gap-6 pt-4" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                                <span className="flex items-center gap-2 text-sm">
                                    <MapPin className="w-4 h-4" style={{ color: '#c9a227' }} />
                                    Atendimento em todo Brasil
                                </span>
                                <span className="flex items-center gap-2 text-sm">
                                    <Clock className="w-4 h-4" style={{ color: '#c9a227' }} />
                                    Resposta em até 2 horas
                                </span>
                                <span className="flex items-center gap-2 text-sm">
                                    <ShieldCheck className="w-4 h-4" style={{ color: '#c9a227' }} />
                                    Sigilo absoluto
                                </span>
                            </div>
                        </div>

                        {/* Foto do Dr. Marcelo */}
                        <div className="lg:col-span-5 hidden lg:flex justify-end">
                            <div className="relative">
                                {/* Moldura decorativa */}
                                <div
                                    className="absolute -inset-3 rounded-2xl -z-10"
                                    style={{ backgroundColor: 'rgba(201, 162, 39, 0.1)' }}
                                />
                                <div
                                    className="absolute -top-4 -right-4 w-full h-full border rounded-2xl -z-20"
                                    style={{ borderColor: 'rgba(201, 162, 39, 0.3)' }}
                                />
                                <Image
                                    src="/images/wordpress/marcelo-bio.jpg"
                                    alt="Dr. Marcelo Ladeia Colen Guterres - Advogado Criminalista e Especialista em Direitos Raciais"
                                    width={400}
                                    height={500}
                                    className="rounded-xl object-cover shadow-2xl"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </Container>

                {/* Transição elegante */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
            </section>

            {/* ============================================ */}
            {/* TRÍADE DE AUTORIDADE - Os 3 Pilares */}
            {/* ============================================ */}
            <section id="pilares" className="py-20 lg:py-28" style={{ backgroundColor: '#ffffff' }}>
                <Container>
                    {/* Header da seção */}
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-12 h-px" style={{ backgroundColor: '#c9a227' }} />
                            <p className="font-medium tracking-widest uppercase text-xs" style={{ color: '#c9a227' }}>
                                Áreas de Especialização
                            </p>
                            <div className="w-12 h-px" style={{ backgroundColor: '#c9a227' }} />
                        </div>
                        <h2
                            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                            style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}
                        >
                            Três Pilares de Excelência Jurídica
                        </h2>
                        <p className="text-lg max-w-3xl mx-auto" style={{ color: '#666' }}>
                            Atuação concentrada em frentes complementares, unificadas pela liderança institucional
                            na OAB/MG e sólida formação acadêmica
                        </p>
                    </div>

                    {/* Grid dos 3 Pilares */}
                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        {PILARES.map((pilar) => {
                            const IconComponent = pilar.icon;
                            return (
                                <div
                                    key={pilar.id}
                                    className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                                    style={{ border: '1px solid #e5e5e5' }}
                                >
                                    {/* Linha de destaque no topo */}
                                    <div
                                        className="absolute top-0 left-0 right-0 h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                                        style={{ backgroundColor: pilar.accent }}
                                    />

                                    <div className="p-8">
                                        {/* Ícone */}
                                        <div
                                            className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300"
                                            style={{ backgroundColor: 'rgba(201, 162, 39, 0.1)' }}
                                        >
                                            <IconComponent className="w-7 h-7" style={{ color: '#c9a227' }} />
                                        </div>

                                        {/* Título e Subtítulo */}
                                        <h3
                                            className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#c9a227]"
                                            style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}
                                        >
                                            {pilar.title}
                                        </h3>
                                        <p className="text-sm font-medium mb-4" style={{ color: '#c9a227' }}>
                                            {pilar.subtitle}
                                        </p>

                                        {/* Descrição */}
                                        <p className="text-base mb-6 leading-relaxed" style={{ color: '#666' }}>
                                            {pilar.description}
                                        </p>

                                        {/* Highlights */}
                                        <ul className="space-y-2 mb-8">
                                            {pilar.highlights.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: '#444' }}>
                                                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#c9a227' }} />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA */}
                                        <a
                                            href={getWhatsAppLink()}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 font-bold text-sm transition-all duration-200 group-hover:gap-3"
                                            style={{ color: '#c9a227' }}
                                        >
                                            {pilar.cta}
                                            <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </section>

            {/* ============================================ */}
            {/* AUTORIDADE INSTITUCIONAL */}
            {/* ============================================ */}
            <section className="py-20 lg:py-28" style={{ backgroundColor: '#f8f8f8' }}>
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Foto com moldura */}
                        <div className="relative flex justify-center">
                            <div className="relative">
                                <div
                                    className="absolute -inset-4 rounded-2xl -z-10"
                                    style={{ backgroundColor: 'rgba(201, 162, 39, 0.08)' }}
                                />
                                <Image
                                    src="/images/wordpress/marcelo-bio.jpg"
                                    alt="Dr. Marcelo Colen - Liderança na OAB/MG"
                                    width={450}
                                    height={550}
                                    className="rounded-xl object-cover shadow-xl"
                                />
                                {/* Badge sobreposto */}
                                <div
                                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full whitespace-nowrap shadow-lg"
                                    style={{ backgroundColor: '#1a1a1a', color: '#c9a227' }}
                                >
                                    <span className="text-sm font-bold">Arquiteto da Justiça Racial</span>
                                </div>
                            </div>
                        </div>

                        {/* Conteúdo */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-px" style={{ backgroundColor: '#c9a227' }} />
                                <p className="font-medium tracking-widest uppercase text-xs" style={{ color: '#c9a227' }}>
                                    Quem vai defender você
                                </p>
                            </div>

                            <h2
                                className="text-3xl md:text-4xl font-bold leading-tight"
                                style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}
                            >
                                Dr. Marcelo Ladeia{" "}
                                <span style={{ color: '#c9a227' }}>Colen Guterres</span>
                            </h2>

                            <p className="text-lg leading-relaxed" style={{ color: '#333' }}>
                                Advogado, professor, palestrante e consultor em Compliance Antidiscriminatório.
                                Sua atuação é informada por uma visão profunda de Direitos Humanos e Diversidade,
                                com liderança institucional que confere peso político-jurídico único às suas defesas.
                            </p>

                            <p className="text-base leading-relaxed" style={{ color: '#666' }}>
                                Autor do <strong style={{ color: '#1a1a1a' }}>Manual Antirracismo no Esporte</strong>,
                                adotado pela Amstel® na campanha "Barulho Contra o Racismo" — Copa Libertadores 2022.
                            </p>

                            {/* Grid de Credenciais */}
                            <div className="grid sm:grid-cols-2 gap-3 pt-4">
                                {CREDENCIAIS.slice(0, 4).map((credencial, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-3 p-4 rounded-lg"
                                        style={{ backgroundColor: '#ffffff', border: '1px solid #e5e5e5' }}
                                    >
                                        <Award className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#c9a227' }} />
                                        <span className="text-sm" style={{ color: '#333' }}>{credencial}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="pt-4">
                                <a
                                    href={getWhatsAppLink()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-base rounded-lg transition-all duration-200 hover:brightness-110"
                                    style={{ backgroundColor: '#25D366', color: '#ffffff' }}
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Falar com o Dr. Marcelo
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ============================================ */}
            {/* INTELIGÊNCIA TÉCNICA - Atlas da Fenotipia */}
            {/* ============================================ */}
            <section className="py-20 lg:py-28" style={{ backgroundColor: '#1a1a1a' }}>
                <Container>
                    <div className="max-w-5xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-16">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <div className="w-12 h-px" style={{ backgroundColor: '#c9a227' }} />
                                <p className="font-medium tracking-widest uppercase text-xs" style={{ color: '#c9a227' }}>
                                    Diferencial Técnico
                                </p>
                                <div className="w-12 h-px" style={{ backgroundColor: '#c9a227' }} />
                            </div>
                            <h2
                                className="text-3xl md:text-4xl font-bold mb-4"
                                style={{ color: '#ffffff', fontFamily: 'Georgia, serif' }}
                            >
                                Atlas da Fenotipia e Direitos
                            </h2>
                            <p className="text-lg max-w-3xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                A maioria das reprovações em heteroidentificação ocorre não por fraude,
                                mas por <strong style={{ color: '#ffffff' }}>analfabetismo racial das bancas</strong>.
                                Nossa abordagem científica restaura a verdade biológica e social.
                            </p>
                        </div>

                        {/* Tabela de Critérios */}
                        <div className="space-y-4">
                            {/* Header da tabela */}
                            <div
                                className="grid grid-cols-3 gap-4 p-4 rounded-lg text-sm font-bold"
                                style={{ backgroundColor: 'rgba(201, 162, 39, 0.15)', color: '#c9a227' }}
                            >
                                <span>Critério Fenotípico</span>
                                <span>Erro Comum das Bancas</span>
                                <span>Abordagem Científica</span>
                            </div>

                            {/* Linhas */}
                            {CRITERIOS_FENOTIPICOS.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="grid grid-cols-3 gap-4 p-4 rounded-lg transition-colors duration-200 hover:bg-white/5"
                                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
                                >
                                    <span className="font-bold" style={{ color: '#c9a227' }}>{item.criterio}</span>
                                    <span className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>{item.erroBanca}</span>
                                    <span className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>{item.abordagem}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="text-center pt-12">
                            <a
                                href={getWhatsAppLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-base rounded-lg transition-all duration-200 hover:brightness-110"
                                style={{ backgroundColor: '#c9a227', color: '#0f0f0f' }}
                            >
                                Solicitar Análise Técnica de Viabilidade
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <p className="text-sm mt-4" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                                Avaliação gratuita do seu caso em até 24 horas
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ============================================ */}
            {/* COMPLIANCE B2B */}
            {/* ============================================ */}
            <section className="py-20 lg:py-28" style={{ backgroundColor: '#ffffff' }}>
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Conteúdo */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-px" style={{ backgroundColor: '#c9a227' }} />
                                <p className="font-medium tracking-widest uppercase text-xs" style={{ color: '#c9a227' }}>
                                    Para Empresas e Instituições
                                </p>
                            </div>

                            <h2
                                className="text-3xl md:text-4xl font-bold leading-tight"
                                style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}
                            >
                                Compliance Antidiscriminatório{" "}
                                <span style={{ color: '#c9a227' }}>Corporativo</span>
                            </h2>

                            <p className="text-lg leading-relaxed" style={{ color: '#333' }}>
                                Estruturação de programas de integridade para empresas, clubes esportivos e
                                instituições públicas que buscam mitigar riscos reputacionais e judiciais
                                ligados ao racismo e à discriminação.
                            </p>

                            {/* Serviços B2B */}
                            <div className="space-y-4 pt-4">
                                {[
                                    { icon: ShieldCheck, title: "Prevenção de Crises", desc: "Treinamento e estruturação de canais de denúncia evitam processos milionários." },
                                    { icon: BookOpen, title: "Educação Corporativa", desc: "Palestras e workshops baseados na produção literária do Dr. Marcelo." },
                                    { icon: FileCheck, title: "Auditoria de Inclusão", desc: "Verificação técnica de processos seletivos para garantir diversidade sem riscos." }
                                ].map((item, idx) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <div
                                            key={idx}
                                            className="flex items-start gap-4 p-5 rounded-lg transition-all duration-200 hover:shadow-md"
                                            style={{ backgroundColor: '#f8f8f8' }}
                                        >
                                            <div
                                                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                                                style={{ backgroundColor: 'rgba(201, 162, 39, 0.15)' }}
                                            >
                                                <IconComponent className="w-6 h-6" style={{ color: '#c9a227' }} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold mb-1" style={{ color: '#1a1a1a' }}>{item.title}</h4>
                                                <p className="text-sm" style={{ color: '#666' }}>{item.desc}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* CTA */}
                            <div className="pt-4">
                                <a
                                    href={getWhatsAppLink()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-base rounded-lg transition-all duration-200 hover:brightness-110"
                                    style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}
                                >
                                    Solicitar Proposta Comercial
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Visual Manual Antirracismo */}
                        <div className="relative flex justify-center">
                            <div
                                className="relative p-8 rounded-2xl"
                                style={{ backgroundColor: '#f8f8f8', border: '1px solid #e5e5e5' }}
                            >
                                <div className="text-center space-y-4">
                                    <BookOpen className="w-16 h-16 mx-auto" style={{ color: '#c9a227' }} />
                                    <h3
                                        className="text-2xl font-bold"
                                        style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}
                                    >
                                        Manual Antirracismo no Esporte
                                    </h3>
                                    <p className="text-sm" style={{ color: '#666' }}>
                                        Adotado pela Amstel® na campanha<br />
                                        <strong>"Barulho Contra o Racismo"</strong><br />
                                        Copa Libertadores 2022
                                    </p>
                                    <div
                                        className="inline-block px-4 py-2 rounded-full text-sm font-medium"
                                        style={{ backgroundColor: 'rgba(201, 162, 39, 0.15)', color: '#c9a227' }}
                                    >
                                        Autor: Dr. Marcelo Colen
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ============================================ */}
            {/* PROVA SOCIAL - Números */}
            {/* ============================================ */}
            <section className="py-16" style={{ backgroundColor: '#f8f8f8', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5' }}>
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <p className="text-4xl md:text-5xl font-bold" style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}>
                                {MARCELO_PROFILE.yearsExperience}+
                            </p>
                            <p className="text-sm mt-2" style={{ color: '#666' }}>Anos de Experiência</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl md:text-5xl font-bold" style={{ color: '#c9a227', fontFamily: 'Georgia, serif' }}>
                                3
                            </p>
                            <p className="text-sm mt-2" style={{ color: '#666' }}>Pilares de Especialização</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl md:text-5xl font-bold" style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}>
                                55k+
                            </p>
                            <p className="text-sm mt-2" style={{ color: '#666' }}>Seguidores nas Redes</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl md:text-5xl font-bold" style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}>
                                BR
                            </p>
                            <p className="text-sm mt-2" style={{ color: '#666' }}>Atuação Nacional</p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ============================================ */}
            {/* CTA FINAL */}
            {/* ============================================ */}
            <section className="py-20 lg:py-28 relative overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
                {/* Linha dourada no topo */}
                <div className="absolute top-0 left-0 right-0 h-px" style={{ backgroundColor: 'rgba(201, 162, 39, 0.4)' }} />

                {/* Gradiente decorativo */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse at 50% 100%, rgba(201, 162, 39, 0.1) 0%, transparent 50%)'
                    }}
                />

                <Container className="relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-12 h-px" style={{ backgroundColor: '#c9a227' }} />
                            <p className="font-medium tracking-widest uppercase text-xs" style={{ color: '#c9a227' }}>
                                Comece Agora
                            </p>
                            <div className="w-12 h-px" style={{ backgroundColor: '#c9a227' }} />
                        </div>

                        <h2
                            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                            style={{ color: '#ffffff', fontFamily: 'Georgia, serif' }}
                        >
                            Precisa de orientação jurídica{" "}
                            <span style={{ color: '#c9a227' }}>especializada</span>?
                        </h2>

                        <p
                            className="text-lg mb-10 max-w-xl mx-auto"
                            style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                        >
                            Agende uma consulta inicial para análise do seu caso.
                            Atendimento sigiloso, resposta rápida e sem compromisso.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                            <a
                                href={getWhatsAppLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 px-10 py-5 font-bold text-lg rounded-lg transition-all duration-200 hover:brightness-110 hover:scale-[1.02] shadow-xl"
                                style={{ backgroundColor: '#25D366', color: '#ffffff' }}
                            >
                                <MessageCircle className="w-6 h-6" />
                                Falar com o Dr. Marcelo
                            </a>
                        </div>

                        {/* Instagram */}
                        <div className="pt-6" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                            <a
                                href="https://instagram.com/marcelocolen.adv"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm transition-colors duration-200 hover:text-[#c9a227]"
                                style={{ color: 'rgba(255, 255, 255, 0.5)' }}
                            >
                                <Instagram className="w-5 h-5" />
                                @marcelocolen.adv • 55k+ seguidores
                            </a>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
