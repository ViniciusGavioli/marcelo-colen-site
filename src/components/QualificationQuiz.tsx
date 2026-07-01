"use client";

import { useState, useCallback } from "react";
import { MessageCircle, ChevronRight, X, Lock, BookOpen } from "lucide-react";
import { getDirectWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

// ============================================================================
// TYPES
// ============================================================================
type QuizStep = 1 | 2 | 3 | "result";

interface QuizOption {
    label: string;
    value: string;
    isDisqualifying?: boolean; // marca opção de "curioso"
}

interface QuizConfig {
    /** Número do WhatsApp (opcional, usa padrão) */
    phone?: string;
    /** Mensagem base para WhatsApp caso o quiz não gere uma personalizada */
    defaultWaMessage: string;
    /** Estilo visual: "dark" (LPs escuras) ou "light" (LP advogado-especialista) */
    variant?: "dark" | "light";
}

// ============================================================================
// QUIZ DATA
// ============================================================================
const STEPS: { question: string; options: QuizOption[] }[] = [
    {
        question: "Você foi reprovado na heteroidentificação?",
        options: [
            { label: "Sim, fui reprovado / indeferido", value: "reprovado" },
            { label: "Ainda não saiu o resultado", value: "aguardando" },
            { label: "Estou apenas pesquisando", value: "curioso", isDisqualifying: true },
        ],
    },
    {
        question: "Há quanto tempo saiu o resultado?",
        options: [
            { label: "Hoje ou ontem", value: "hoje" },
            { label: "2 a 5 dias", value: "2-5dias" },
            { label: "Mais de 5 dias", value: "mais5dias" },
        ],
    },
    {
        question: "Você tem o edital e o resultado em mãos?",
        options: [
            { label: "Sim, tenho os dois", value: "ambos" },
            { label: "Tenho só o resultado", value: "resultado" },
            { label: "Não tenho nenhum ainda", value: "nenhum" },
        ],
    },
];

// ============================================================================
// MENSAGEM PERSONALIZADA
// ============================================================================
function buildWhatsAppMessage(answers: string[]): string {
    const [status, tempo, docs] = answers;

    if (status === "aguardando") {
        return "Olá Dr. Marcelo, meu resultado de heteroidentificação ainda não saiu, mas gostaria de me preparar caso seja indeferido.";
    }

    const tempoMap: Record<string, string> = {
        "hoje": "hoje/ontem",
        "2-5dias": "entre 2 e 5 dias",
        "mais5dias": "mais de 5 dias",
    };

    const docsMap: Record<string, string> = {
        "ambos": "Tenho o edital e o resultado em mãos",
        "resultado": "Tenho apenas o resultado",
        "nenhum": "Ainda não tenho os documentos comigo",
    };

    return `Olá Dr. Marcelo, fui indeferido na heteroidentificação há ${tempoMap[tempo] || "poucos dias"}. ${docsMap[docs] || ""}. Posso enviar para análise?`;
}

// ============================================================================
// ESTILOS POR VARIANTE
// ============================================================================
const styles = {
    dark: {
        overlay: "bg-black/70 backdrop-blur-sm",
        card: {
            background: "linear-gradient(145deg, #111111 0%, #0a0a0a 100%)",
            border: "1px solid rgba(201,162,39,0.2)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.8), 0 0 40px rgba(201,162,39,0.08)",
        },
        title: { color: "#ffffff" },
        subtitle: { color: "rgba(255,255,255,0.5)" },
        stepIndicator: { color: "#c9a227" },
        stepInactive: { color: "rgba(255,255,255,0.2)" },
        option: {
            base: {
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.85)",
            },
            hover: "hover:bg-white/[0.08] hover:border-[rgba(201,162,39,0.3)]",
            selected: {
                backgroundColor: "rgba(201,162,39,0.12)",
                border: "2px solid #c9a227",
                color: "#ffffff",
            },
        },
        closeBtn: { color: "rgba(255,255,255,0.4)" },
        ctaStyle: {
            background: "linear-gradient(160deg, #1c0a0a 0%, #0a0a0a 55%, #0f0d00 100%)",
            border: "2px solid #c9a227",
            color: "#ffffff",
            boxShadow: "0 0 28px rgba(201,162,39,0.18)",
        },
        disqualifyBg: {
            backgroundColor: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
        },
        disqualifyText: { color: "rgba(255,255,255,0.6)" },
        disqualifyTitle: { color: "#c9a227" },
    },
    light: {
        overlay: "bg-black/50 backdrop-blur-sm",
        card: {
            background: "linear-gradient(145deg, #FFFFFF 0%, #F6F2EB 100%)",
            border: "2px solid #D9CCBB",
            boxShadow: "0 24px 80px rgba(11,23,48,0.25)",
        },
        title: { color: "#0B1730" },
        subtitle: { color: "rgba(11,23,48,0.45)" },
        stepIndicator: { color: "#8C6A43" },
        stepInactive: { color: "rgba(11,23,48,0.15)" },
        option: {
            base: {
                backgroundColor: "#FFFFFF",
                border: "1px solid #D9CCBB",
                color: "#1C2430",
            },
            hover: "hover:bg-[#F6F2EB] hover:border-[#8C6A43]",
            selected: {
                backgroundColor: "rgba(140,106,67,0.1)",
                border: "2px solid #8C6A43",
                color: "#0B1730",
            },
        },
        closeBtn: { color: "rgba(11,23,48,0.35)" },
        ctaStyle: {
            backgroundColor: "#10b981",
            border: "none",
            color: "#FFFFFF",
            boxShadow: "0 4px 24px rgba(16,185,129,0.22)",
        },
        disqualifyBg: {
            backgroundColor: "#F6F2EB",
            border: "1px solid #D9CCBB",
        },
        disqualifyText: { color: "rgba(11,23,48,0.6)" },
        disqualifyTitle: { color: "#8C6A43" },
    },
};

// ============================================================================
// COMPONENT
// ============================================================================
export function QualificationQuiz({
    isOpen,
    onClose,
    config,
}: {
    isOpen: boolean;
    onClose: () => void;
    config: QuizConfig;
}) {
    const [step, setStep] = useState<QuizStep>(1);
    const [answers, setAnswers] = useState<string[]>([]);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const v = config.variant || "dark";
    const S = styles[v];

    const reset = useCallback(() => {
        setStep(1);
        setAnswers([]);
        setSelectedOption(null);
    }, []);

    const handleClose = useCallback(() => {
        reset();
        onClose();
    }, [reset, onClose]);

    const handleSelect = useCallback((option: QuizOption) => {
        setSelectedOption(option.value);

        // Delay para mostrar seleção
        setTimeout(() => {
            if (option.isDisqualifying) {
                setAnswers(prev => [...prev, option.value]);
                setStep("result");
                return;
            }

            const newAnswers = [...answers, option.value];
            setAnswers(newAnswers);

            const currentStep = step as number;
            if (currentStep < 3) {
                setStep((currentStep + 1) as QuizStep);
            } else {
                setStep("result");
            }
            setSelectedOption(null);
        }, 300);
    }, [answers, step]);

    if (!isOpen) return null;

    const isDisqualified = answers.includes("curioso");
    const currentStepData = typeof step === "number" ? STEPS[step - 1] : null;

    return (
        <>
            {/* Estilos de animação */}
            <style>{`
                @keyframes quiz-overlay-in {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
                @keyframes quiz-card-in {
                    from { opacity: 0; transform: scale(0.92) translateY(24px); }
                    to   { opacity: 1; transform: scale(1) translateY(0); }
                }
                @keyframes quiz-slide-in {
                    from { opacity: 0; transform: translateX(30px); }
                    to   { opacity: 1; transform: translateX(0); }
                }
                @keyframes quiz-option-in {
                    from { opacity: 0; transform: translateY(8px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes quiz-check-pulse {
                    0%   { transform: scale(1); }
                    50%  { transform: scale(1.15); }
                    100% { transform: scale(1); }
                }
            `}</style>

            {/* Overlay */}
            <div
                className={`fixed inset-0 z-[10000] flex items-center justify-center p-4 ${S.overlay}`}
                style={{ animation: "quiz-overlay-in 0.25s ease-out" }}
                onClick={(e) => e.target === e.currentTarget && handleClose()}
            >
                {/* Card */}
                <div
                    className="relative w-full max-w-md rounded-2xl p-6 md:p-8"
                    style={{
                        ...S.card,
                        animation: "quiz-card-in 0.35s cubic-bezier(0.16,1,0.3,1)",
                    }}
                >
                    {/* Close */}
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
                        aria-label="Fechar"
                    >
                        <X className="w-5 h-5" style={S.closeBtn} />
                    </button>

                    {/* Progress dots */}
                    {typeof step === "number" && (
                        <div className="flex items-center justify-center gap-2 mb-6">
                            {[1, 2, 3].map((n) => (
                                <div
                                    key={n}
                                    className="rounded-full transition-all duration-300"
                                    style={{
                                        width: step === n ? 24 : 8,
                                        height: 8,
                                        backgroundColor: step >= n
                                            ? (S.stepIndicator.color)
                                            : (S.stepInactive.color),
                                    }}
                                />
                            ))}
                        </div>
                    )}

                    {/* Question content */}
                    {currentStepData && step !== "result" && (
                        <div
                            key={step}
                            style={{ animation: "quiz-slide-in 0.3s ease-out" }}
                        >
                            {/* Question */}
                            <h3
                                className="text-lg md:text-xl font-bold mb-1 pr-8"
                                style={S.title}
                            >
                                {currentStepData.question}
                            </h3>
                            <p
                                className="text-xs mb-6 font-medium"
                                style={S.subtitle}
                            >
                                Pergunta {step} de 3
                            </p>

                            {/* Options */}
                            <div className="space-y-3">
                                {currentStepData.options.map((option, i) => {
                                    const isSelected = selectedOption === option.value;
                                    return (
                                        <button
                                            key={option.value}
                                            onClick={() => handleSelect(option)}
                                            className={`w-full text-left rounded-xl p-4 transition-all duration-200 flex items-center gap-3 ${S.option.hover}`}
                                            style={{
                                                ...(isSelected ? S.option.selected : S.option.base),
                                                animation: `quiz-option-in 0.3s ease-out ${i * 0.08}s both`,
                                            }}
                                        >
                                            {/* Radio circle */}
                                            <div
                                                className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center transition-all"
                                                style={{
                                                    border: isSelected
                                                        ? `2px solid ${S.stepIndicator.color}`
                                                        : `2px solid ${S.stepInactive.color}`,
                                                    ...(isSelected ? { animation: "quiz-check-pulse 0.3s ease-out" } : {}),
                                                }}
                                            >
                                                {isSelected && (
                                                    <div
                                                        className="w-2.5 h-2.5 rounded-full"
                                                        style={{ backgroundColor: S.stepIndicator.color }}
                                                    />
                                                )}
                                            </div>
                                            <span className="font-medium text-sm md:text-base">
                                                {option.label}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Result: Qualified */}
                    {step === "result" && !isDisqualified && (
                        <div style={{ animation: "quiz-slide-in 0.3s ease-out" }}>
                            <div className="text-center mb-6">
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                                    style={{ backgroundColor: "rgba(16,185,129,0.15)" }}
                                >
                                    <MessageCircle className="w-6 h-6" style={{ color: "#10b981" }} />
                                </div>
                                <h3
                                    className="text-lg md:text-xl font-bold mb-2"
                                    style={S.title}
                                >
                                    Seu caso pode ter fundamento.
                                </h3>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={S.subtitle}
                                >
                                    Envie os dados pelo WhatsApp para o Dr. Marcelo analisar pessoalmente.
                                </p>
                            </div>

                            {/* Mensagem personalizada preview */}
                            <div
                                className="rounded-xl p-4 mb-6"
                                style={{
                                    ...(v === "dark"
                                        ? { backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }
                                        : { backgroundColor: "#F6F2EB", border: "1px solid #D9CCBB" }),
                                }}
                            >
                                <p className="text-xs font-medium mb-2" style={S.subtitle}>
                                    Mensagem que será enviada:
                                </p>
                                <p
                                    className="text-sm italic leading-relaxed"
                                    style={{ color: v === "dark" ? "rgba(255,255,255,0.7)" : "#1C2430" }}
                                >
                                    &ldquo;{buildWhatsAppMessage(answers)}&rdquo;
                                </p>
                            </div>

                            {/* CTA WhatsApp */}
                            <a
                                href={getDirectWhatsAppLink(
                                    buildWhatsAppMessage(answers),
                                    config.phone
                                )}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => {
                                    trackWhatsAppClick(e);
                                    handleClose();
                                }}
                                className="group w-full inline-flex items-center justify-center gap-2 font-semibold text-base md:text-lg px-8 py-4 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                                style={S.ctaStyle}
                            >
                                <MessageCircle className="w-5 h-5 opacity-80 group-hover:opacity-100" />
                                Enviar no WhatsApp
                            </a>

                            <p className="text-center text-xs mt-4 flex items-center justify-center gap-1" style={S.subtitle}>
                                <Lock className="w-3 h-3" />
                                Sigiloso · Sem compromisso · Resposta rápida
                            </p>
                        </div>
                    )}

                    {/* Result: Disqualified (curioso) */}
                    {step === "result" && isDisqualified && (
                        <div style={{ animation: "quiz-slide-in 0.3s ease-out" }}>
                            <div className="text-center mb-6">
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                                    style={{ backgroundColor: v === "dark" ? "rgba(201,162,39,0.1)" : "rgba(140,106,67,0.1)" }}
                                >
                                    <BookOpen className="w-6 h-6" style={S.disqualifyTitle} />
                                </div>
                                <h3
                                    className="text-lg md:text-xl font-bold mb-2"
                                    style={S.disqualifyTitle}
                                >
                                    Quer se informar sobre o tema?
                                </h3>
                                <p
                                    className="text-sm leading-relaxed mb-6"
                                    style={S.disqualifyText}
                                >
                                    Este serviço é voltado para candidatos que foram efetivamente reprovados na heteroidentificação e precisam de análise jurídica urgente.
                                </p>
                            </div>

                            <div
                                className="rounded-xl p-5 mb-6"
                                style={S.disqualifyBg}
                            >
                                <p className="text-sm font-medium mb-3" style={S.disqualifyText}>
                                    Para se informar, acompanhe nosso conteúdo:
                                </p>
                                <div className="space-y-2">
                                    <a
                                        href="https://www.instagram.com/marcelocolen.adv/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-medium transition-all hover:brightness-125"
                                        style={S.disqualifyTitle}
                                    >
                                        <ChevronRight className="w-4 h-4" />
                                        Siga no Instagram @marcelocolen.adv
                                    </a>
                                    <a
                                        href="https://www.youtube.com/@marcelocolen"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-medium transition-all hover:brightness-125"
                                        style={S.disqualifyTitle}
                                    >
                                        <ChevronRight className="w-4 h-4" />
                                        Assista no YouTube
                                    </a>
                                </div>
                            </div>

                            <button
                                onClick={handleClose}
                                className="w-full py-3 rounded-full text-sm font-medium transition-all hover:brightness-110"
                                style={{
                                    ...(v === "dark"
                                        ? { backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }
                                        : { backgroundColor: "#EDE8DF", color: "#1C2430" }),
                                }}
                            >
                                Entendi, obrigado
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
