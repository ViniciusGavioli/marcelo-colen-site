"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { getDirectWhatsAppLink } from "@/lib/whatsapp";

const WHATSAPP_NUMBER = "5531972206996";

export function WhatsAppFloat() {
    const [show, setShow] = useState(false);
    const [pulse, setPulse] = useState(true);
    const [tooltip, setTooltip] = useState(false);

    // Aparece após 2s de scroll
    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    // Pulse para por 8s depois ativa tooltip
    useEffect(() => {
        const t1 = setTimeout(() => setPulse(false), 8000);
        const t2 = setTimeout(() => setTooltip(true), 5000);
        const t3 = setTimeout(() => setTooltip(false), 12000);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, []);

    const link = getDirectWhatsAppLink(
        "Olá Dr. Marcelo, vim pelo site e gostaria de tirar uma dúvida.",
        WHATSAPP_NUMBER
    );

    if (!show) return null;

    return (
        <>
            <style>{`
                @keyframes wa-float-in {
                    from { opacity: 0; transform: scale(0.5) translateY(20px); }
                    to   { opacity: 1; transform: scale(1) translateY(0); }
                }
                @keyframes wa-pulse {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); }
                    50%      { box-shadow: 0 0 0 14px rgba(37,211,102,0); }
                }
                @keyframes wa-tooltip-in {
                    from { opacity: 0; transform: translateX(10px); }
                    to   { opacity: 1; transform: translateX(0); }
                }
            `}</style>

            {/* Tooltip / balãozinho */}
            {tooltip && (
                <div
                    className="fixed bottom-[100px] right-[80px] z-[9999] flex items-center gap-2"
                    style={{ animation: "wa-tooltip-in 0.3s ease-out" }}
                >
                    <div
                        className="relative rounded-xl px-4 py-2.5 text-sm font-medium shadow-2xl max-w-[220px]"
                        style={{
                            background: "#ffffff",
                            color: "#1a1a1a",
                            boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
                        }}
                    >
                        <span>Tire suas dúvidas agora pelo WhatsApp</span>
                        {/* Seta apontando pro botão */}
                        <div
                            className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0"
                            style={{
                                borderTop: "6px solid transparent",
                                borderBottom: "6px solid transparent",
                                borderLeft: "8px solid #ffffff",
                            }}
                        />
                    </div>
                    <button
                        onClick={() => setTooltip(false)}
                        className="rounded-full p-1 hover:bg-white/10 transition-colors"
                        aria-label="Fechar"
                    >
                        <X className="w-3.5 h-3.5 text-white/50" />
                    </button>
                </div>
            )}

            {/* Botão flutuante */}
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fale conosco pelo WhatsApp"
                className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-[60px] h-[60px] rounded-full transition-transform hover:scale-110 active:scale-95"
                style={{
                    background: "#25D366",
                    boxShadow: "0 4px 20px rgba(37,211,102,0.4), 0 2px 8px rgba(0,0,0,0.2)",
                    animation: `wa-float-in 0.4s ease-out${pulse ? ", wa-pulse 2s ease-in-out infinite" : ""}`,
                }}
            >
                <MessageCircle className="w-7 h-7 text-white" fill="white" />
            </a>
        </>
    );
}
