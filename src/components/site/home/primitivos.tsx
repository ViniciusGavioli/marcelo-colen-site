import { MessageCircle } from "lucide-react";
import { SITE_COLORS as C } from "@/lib/site-theme";
import { getDirectWhatsAppLink } from "@/lib/whatsapp";

// Peças repetidas da home institucional, no mesmo idioma visual da LP de
// recurso: selo dourado, título em Cormorant, divisor com losango e o botão
// de borda dourada.

export function Divisor({ alinhamento = "centro" }: { alinhamento?: "centro" | "esquerda" }) {
    return (
        <div
            aria-hidden="true"
            className={`flex items-center gap-3 py-1 ${alinhamento === "centro" ? "justify-center" : "justify-center md:justify-start"}`}
        >
            <div className="h-px flex-1 max-w-[120px]" style={{ background: `linear-gradient(to right, transparent, ${C.gold})`, opacity: 0.35 }} />
            <div className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: C.gold, opacity: 0.6 }} />
            <div className="h-px flex-1 max-w-[120px]" style={{ background: `linear-gradient(to left, transparent, ${C.gold})`, opacity: 0.35 }} />
        </div>
    );
}

export function CabecalhoSecao({
    id,
    selo,
    titulo,
    texto,
}: {
    id: string;
    selo: string;
    titulo: React.ReactNode;
    texto?: React.ReactNode;
}) {
    return (
        <div className="text-center">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.22em] mb-3 font-semibold" style={{ color: C.gold }}>
                {selo}
            </p>
            <h2 id={id} className="text-2xl md:text-4xl font-bold leading-tight mb-2 text-balance" style={{ color: C.white, fontFamily: C.serif }}>
                {titulo}
            </h2>
            <Divisor />
            {texto && (
                <p className="text-sm md:text-base mt-4 max-w-[56ch] mx-auto leading-relaxed text-pretty" style={{ color: C.gray2 }}>
                    {texto}
                </p>
            )}
        </div>
    );
}

// Mesmo desenho do CTA da LP; aqui leva ao WhatsApp, já que o site não tem o
// quiz de qualificação.
export const MENSAGEM_WHATSAPP_SITE = "Olá Dr. Marcelo, vim pelo site e gostaria de falar com o escritório.";

export function BotaoWhatsApp({ rotulo, mensagem = MENSAGEM_WHATSAPP_SITE }: { rotulo: string; mensagem?: string }) {
    return (
        <a
            href={getDirectWhatsAppLink(mensagem)}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                background: "linear-gradient(160deg, #1c0a0a 0%, #0a0a0a 55%, #0f0d00 100%)",
                border: `2px solid ${C.gold}`,
                color: C.white,
                boxShadow: "0 0 28px rgba(201,162,39,0.18), 0 1px 0 rgba(201,162,39,0.12) inset",
                outlineColor: C.gold,
            }}
            className="group inline-flex items-center justify-center gap-2 font-semibold text-base md:text-lg px-8 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_40px_rgba(201,162,39,0.35)] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
        >
            <MessageCircle className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
            {rotulo}
        </a>
    );
}
