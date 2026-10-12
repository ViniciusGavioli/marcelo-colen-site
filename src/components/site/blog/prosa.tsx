import Link from "next/link";
import { SITE_COLORS as C } from "@/lib/site-theme";

// Peças de texto dos artigos. Tamanhos de título inline porque o h2/h3
// global de globals.css vence as classes do Tailwind (ver ESTILO_ROTULO).

export function Secao({ id, titulo, children }: { id: string; titulo: string; children: React.ReactNode }) {
    return (
        <section aria-labelledby={id} className="mt-12 first:mt-0">
            <h2 id={id} className="scroll-mt-24 text-balance" style={{ color: C.white, fontFamily: C.serif, fontSize: "1.875rem", lineHeight: 1.2 }}>
                {titulo}
            </h2>
            <div className="mt-5 space-y-5">{children}</div>
        </section>
    );
}

export function P({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-base md:text-[1.0625rem] leading-[1.8] text-pretty" style={{ color: C.gray1 }}>
            {children}
        </p>
    );
}

export function Lista({ itens }: { itens: React.ReactNode[] }) {
    return (
        <ul className="space-y-3">
            {itens.map((item, i) => (
                <li key={i} className="relative pl-6 text-base md:text-[1.0625rem] leading-[1.75]" style={{ color: C.gray1 }}>
                    <span aria-hidden="true" className="absolute left-0 top-[0.7em] w-1.5 h-1.5 rotate-45" style={{ backgroundColor: C.gold }} />
                    {item}
                </li>
            ))}
        </ul>
    );
}

// Resposta curta logo no início: é o trecho que o Google costuma usar como
// destaque na busca, e o leitor apressado leva o essencial dali.
export function RespostaCurta({ children }: { children: React.ReactNode }) {
    return (
        <div className="rounded-2xl p-6 md:p-7" style={{ backgroundColor: C.goldSoft, border: `1px solid ${C.goldBorder}` }}>
            <p className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: C.gold }}>
                Em resumo
            </p>
            <p className="mt-3 text-base md:text-[1.0625rem] leading-[1.75]" style={{ color: C.white }}>
                {children}
            </p>
        </div>
    );
}

const estiloLink = { color: C.gold, textDecorationColor: "rgba(201,162,39,0.45)" } as const;
const classeLink = "underline underline-offset-4 transition-colors hover:text-white";

// Interno com next/link; externo (texto de lei, decisão) em nova aba.
export function L({ href, children }: { href: string; children: React.ReactNode }) {
    if (href.startsWith("/")) {
        return (
            <Link href={href} className={classeLink} style={estiloLink}>
                {children}
            </Link>
        );
    }
    return (
        <a href={href} target="_blank" rel="noopener" className={classeLink} style={estiloLink}>
            {children}
        </a>
    );
}
