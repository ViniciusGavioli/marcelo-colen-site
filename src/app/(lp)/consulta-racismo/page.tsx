"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, ChevronDown, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout";
import { SITE_CONFIG } from "@/lib/constants";

const FAQ_ITEMS = [
    {
        question: "Quanto tempo tenho para denunciar?",
        answer: "Racismo é crime imprescritível. Isso significa que você pode denunciar a qualquer momento, mesmo que tenha acontecido há meses ou anos."
    },
    {
        question: "O que posso conseguir?",
        answer: "Além da punição criminal (2 a 5 anos de prisão), você pode conseguir indenização por danos morais. Os valores variam de R$ 5.000 a R$ 50.000+ dependendo da gravidade."
    },
    {
        question: "Preciso ter provas?",
        answer: "Provas ajudam muito, mas não são obrigatórias. Testemunhas, prints, vídeos ou áudios fortalecem o caso. Avaliamos as chances mesmo sem provas completas."
    }
];

const FORM_QUESTIONS = [
    {
        id: "ondeAconteceu",
        label: "Onde aconteceu a discriminação?",
        type: "text",
        placeholder: "Ex: No trabalho, em uma loja, na rua, vizinhança, internet...",
        required: true
    },
    {
        id: "oqueAconteceu",
        label: "O que aconteceu? (Descreva brevemente)",
        type: "textarea",
        placeholder: "Ex: Fui seguido por seguranças na loja, fui xingado pelo vizinho, sofri comentários racistas no trabalho...",
        required: true
    }
];

export default function ConsultaRacismoPage() {
    const [respostas, setRespostas] = useState<Record<string, string>>({});
    const [passoAtual, setPassoAtual] = useState(0);
    const [erro, setErro] = useState("");
    const [faqAberto, setFaqAberto] = useState<number | null>(0);

    const handleInputChange = (id: string, valor: string) => {
        setRespostas(prev => ({ ...prev, [id]: valor }));
        setErro("");
    };

    const handleProximo = () => {
        const perguntaAtual = FORM_QUESTIONS[passoAtual];
        if (!respostas[perguntaAtual.id]?.trim()) {
            setErro("Por favor, responda a pergunta antes de continuar.");
            return;
        }

        if (passoAtual < FORM_QUESTIONS.length - 1) {
            setPassoAtual(passoAtual + 1);
            setErro("");
        }
    };

    const handleVoltar = () => {
        if (passoAtual > 0) {
            setPassoAtual(passoAtual - 1);
            setErro("");
        }
    };

    const montarMensagem = (): string => {
        const linhas = [
            "Olá Dr. Marcelo! Sofri racismo e preciso de ajuda.\n",
            `*Onde aconteceu:* ${respostas.ondeAconteceu}`,
            `*O que aconteceu:* ${respostas.oqueAconteceu}`,
            "\nGostaria de saber quais são minhas opções."
        ];
        return linhas.join("\n");
    };

    const handleEnviar = () => {
        const mensagem = montarMensagem();
        const WHATSAPP_NUMBER = SITE_CONFIG.contact.whatsapp;
        const mensagemCodificada = encodeURIComponent(mensagem);
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensagemCodificada}`;
        window.open(url, "_blank");
    };

    const todoPreenchido = FORM_QUESTIONS.every(q => respostas[q.id]?.trim());

    return (
        <main>
            {/* ========== SEÇÃO HERO - Fundo Escuro ========== */}
            <section className="relative overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
                {/* Background com imagem */}
                <div className="absolute inset-0 opacity-30">
                    <Image
                        src="/images/defesa/community.png"
                        alt="Comunidade negra"
                        fill
                        className="object-cover object-center"
                    />
                    <div
                        className="absolute inset-0"
                        style={{ background: 'linear-gradient(90deg, rgba(26,26,26,0.98) 0%, rgba(26,26,26,0.85) 50%, rgba(26,26,26,0.7) 100%)' }}
                    />
                </div>

                {/* Linha dourada no topo */}
                <div
                    className="absolute top-0 left-0 right-0 h-1 z-20"
                    style={{ backgroundColor: '#c9a227' }}
                />

                <Container className="relative z-10 py-10">
                    <div className="max-w-3xl">
                        <h1
                            style={{ color: '#FFFFFF', fontFamily: 'Georgia, serif', fontSize: '2.5rem', fontWeight: '600', lineHeight: '1.15', marginBottom: '0.75rem' }}
                        >
                            Sofreu racismo?
                        </h1>

                        <p style={{ fontSize: '1.25rem', fontWeight: '500', marginBottom: '0.5rem', color: '#c9a227', lineHeight: '1.3' }}>
                            Me conte brevemente o que aconteceu...
                        </p>

                        <p style={{ fontSize: '1rem', lineHeight: '1.5', color: 'rgba(255, 255, 255, 0.8)' }}>
                            Vou analisar seu caso e te mostrar exatamente quais são suas opções de justiça e reparação.
                        </p>
                    </div>
                </Container>
            </section>

            {/* ========== SEÇÃO FORMULÁRIO INTERATIVO ========== */}
            <section className="relative px-4 py-16" style={{ backgroundColor: '#F8F9FA' }}>
                <Container>
                    <div className="max-w-2xl mx-auto">
                        <div className="space-y-8">
                            {/* Heading da seção */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <h2
                                        className="text-2xl font-bold"
                                        style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}
                                    >
                                        Análise do Caso
                                    </h2>
                                    <span className="text-sm font-semibold" style={{ color: '#666' }}>
                                        Passo {passoAtual + 1} de {FORM_QUESTIONS.length}
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="h-2 rounded-full transition-all duration-300"
                                        style={{
                                            width: `${((passoAtual + 1) / FORM_QUESTIONS.length) * 100}%`,
                                            backgroundColor: '#c9a227'
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Card do formulário */}
                            <div
                                className="rounded-xl p-8 border"
                                style={{ backgroundColor: '#FFFFFF', border: '1px solid #e5e5e5' }}
                            >
                                {/* Pergunta */}
                                <div className="mb-8">
                                    <label className="block text-lg font-semibold mb-4" style={{ color: '#1a1a1a' }}>
                                        {FORM_QUESTIONS[passoAtual].label}
                                    </label>

                                    {FORM_QUESTIONS[passoAtual].type === "text" ? (
                                        <input
                                            type="text"
                                            value={respostas[FORM_QUESTIONS[passoAtual].id] || ""}
                                            onChange={(e) => handleInputChange(FORM_QUESTIONS[passoAtual].id, e.target.value)}
                                            placeholder={FORM_QUESTIONS[passoAtual].placeholder}
                                            className="w-full p-4 rounded-lg text-base border focus:outline-none"
                                            style={{
                                                backgroundColor: '#f8f8f8',
                                                borderColor: erro ? '#ef4444' : '#e5e5e5',
                                                color: '#1a1a1a'
                                            }}
                                        />
                                    ) : (
                                        <textarea
                                            value={respostas[FORM_QUESTIONS[passoAtual].id] || ""}
                                            onChange={(e) => handleInputChange(FORM_QUESTIONS[passoAtual].id, e.target.value)}
                                            placeholder={FORM_QUESTIONS[passoAtual].placeholder}
                                            className="w-full h-32 p-4 rounded-lg text-base resize-none focus:outline-none border"
                                            style={{
                                                backgroundColor: '#f8f8f8',
                                                borderColor: erro ? '#ef4444' : '#e5e5e5',
                                                color: '#1a1a1a'
                                            }}
                                        />
                                    )}
                                </div>

                                {/* Erro */}
                                {erro && (
                                    <div
                                        className="mb-6 p-4 rounded-lg text-base"
                                        style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444', color: '#dc2626' }}
                                    >
                                        {erro}
                                    </div>
                                )}

                                {/* Botões de navegação */}
                                <div className="flex gap-4 justify-between">
                                    <button
                                        onClick={handleVoltar}
                                        disabled={passoAtual === 0}
                                        className="px-8 py-3 font-semibold text-base rounded-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                        style={{ backgroundColor: passoAtual === 0 ? '#E5E7EB' : '#e5e5e5', color: '#1a1a1a' }}
                                    >
                                        ← Voltar
                                    </button>

                                    {passoAtual < FORM_QUESTIONS.length - 1 ? (
                                        <button
                                            onClick={handleProximo}
                                            className="px-8 py-3 font-semibold text-base rounded-md transition-all hover:brightness-110"
                                            style={{ backgroundColor: '#c9a227', color: '#ffffff' }}
                                        >
                                            Próximo →
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handleEnviar}
                                            className="inline-flex items-center justify-center gap-3 px-10 py-3 font-semibold text-base rounded-md transition-all hover:brightness-110"
                                            style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
                                        >
                                            <MessageCircle className="w-5 h-5" />
                                            Enviar para Análise
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Preview da mensagem */}
                            {todoPreenchido && (
                                <div
                                    className="rounded-xl p-6 border"
                                    style={{ backgroundColor: '#E8F5E9', borderColor: '#25D366' }}
                                >
                                    <div className="flex items-center gap-2 mb-3">
                                        <CheckCircle2 className="w-5 h-5" style={{ color: '#25D366' }} />
                                        <span className="font-semibold" style={{ color: '#1B5E20' }}>
                                            Sua mensagem está pronta!
                                        </span>
                                    </div>
                                    <p className="text-sm whitespace-pre-wrap" style={{ color: '#2E7D32' }}>
                                        {montarMensagem()}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
            </section>

            {/* ========== SEÇÃO FAQ ========== */}
            <section className="relative px-4 py-16" style={{ backgroundColor: '#FFFFFF' }}>
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-10">
                            {/* Heading */}
                            <div className="space-y-2">
                                <h2
                                    className="text-2xl sm:text-3xl font-bold text-center"
                                    style={{ color: '#1a1a1a', fontFamily: 'Georgia, serif' }}
                                >
                                    Dúvidas Frequentes
                                </h2>
                            </div>

                            {/* FAQ Accordion */}
                            <div className="space-y-3">
                                {FAQ_ITEMS.map((item, index) => (
                                    <div
                                        key={index}
                                        className="border rounded-lg overflow-hidden transition-all"
                                        style={{
                                            borderColor: '#e5e5e5',
                                            backgroundColor: faqAberto === index ? '#f8f8f8' : '#FFFFFF'
                                        }}
                                    >
                                        <button
                                            onClick={() => setFaqAberto(faqAberto === index ? null : index)}
                                            className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                                        >
                                            <span className="font-semibold text-base pr-4" style={{ color: '#1a1a1a' }}>
                                                {item.question}
                                            </span>
                                            <ChevronDown
                                                className={`w-5 h-5 transition-transform flex-shrink-0 ${faqAberto === index ? "rotate-180" : ""
                                                    }`}
                                                style={{ color: '#666' }}
                                            />
                                        </button>

                                        {faqAberto === index && (
                                            <div
                                                className="px-5 pb-5 text-base leading-relaxed border-t"
                                                style={{ color: '#666', borderColor: '#e5e5e5' }}
                                            >
                                                {item.answer}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
