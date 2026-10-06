import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { Container } from "@/components/layout";

// Mesma paleta da LP de recurso (page.tsx e DrMarceloSection).
const gold = "#c9a227";
const bg2 = "#111111";
const white = "#ffffff";
const gray2 = "rgba(255,255,255,0.7)";
const gray3 = "rgba(255,255,255,0.45)";
const hairline = "rgba(255,255,255,0.08)";
const serif = "'Cormorant Garamond', Georgia, serif";

// O perfil @marcelocolen.adv apresentado pelo que ele faz, não pelo tamanho:
// a pauta da advocacia levada a público, no registro do escritório (sóbrio,
// antítese no título, sem retórica de militância). Os números ficam no card,
// como o Instagram mostra, e não no texto. Sem link de saída, como o resto da
// LP: tráfego pago que vai para o Instagram não volta para o WhatsApp.
//
// Cada tópico tem post que o sustenta na grade abaixo ou na bio do perfil:
// cotas ("Cotas raciais"), orientação a pessoas e empresas (bio) e informação
// sobre o que é e o que não é racismo (carrossel "Existe racismo de negros
// contra brancos?" e os posts de definição).
//
// Números do perfil em 06/10/2026, do print enviado pelo cliente. Atualizar
// junto com PERFIL_DATA se mudarem.
const PERFIL = {
    handle: "marcelocolen.adv",
    nome: "Marcelo Colen",
    bio: "Oriento pessoas e empresas para agirem contra o racismo",
    publicacoes: "529",
    seguidores: "55,6 mil",
};
const PERFIL_DATA = "outubro de 2026";

const PILARES = [
    "Defesa das cotas raciais e das políticas afirmativas",
    "Combate à discriminação, com orientação a pessoas e empresas",
    "Disseminação de informações que ajudam a identificar o racismo e a reagir a ele",
];

// Posts do próprio perfil, escolhidos pelo tema da LP ou pela atuação
// institucional. Imagens em public/images/instagram, recortadas em 3:4 (o
// formato da grade do Instagram) a partir do export em "Insta conteúdos".
const POSTS = [
    { src: "/images/instagram/post-cotas-raciais.webp", alt: "Post: Cotas raciais" },
    { src: "/images/instagram/post-racismo-reverso.webp", alt: "Post: Existe racismo de negros contra brancos?" },
    {
        src: "/images/instagram/post-incluir-mais.webp",
        alt: "Post: OAB-MG e TRF6 firmam acordo para implementar o programa Incluir Mais",
    },
    { src: "/images/instagram/post-ato-institucional.webp", alt: "Post: Marcelo Colen com documento em ato institucional" },
    {
        src: "/images/instagram/post-certificado-nomeacao.webp",
        alt: "Post: certificado de nomeação do Conselho Federal da OAB",
    },
    {
        src: "/images/instagram/post-mulher-negra.webp",
        alt: "Post: Dia Internacional da Mulher Negra Latino-Americana e Caribenha",
    },
];

export function HeteroInstagramPerfil() {
    return (
        <section
            aria-labelledby="instagram-perfil-titulo"
            className="py-16 md:py-24 relative overflow-hidden"
            style={{ backgroundColor: bg2, borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
            <Container className="relative z-10">
                <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-14 md:items-center">
                    <div className="text-center md:text-left">
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.22em] mb-3 font-semibold" style={{ color: gold }}>
                            Igualdade racial
                        </p>
                        {/* Título definido pelo cliente: negação em branco e
                            leve, conclusão em dourado. Cada frase em bloco
                            próprio; text-balance reparte a quebra das linhas
                            para nenhuma palavra sobrar sozinha no fim. */}
                        <h2
                            id="instagram-perfil-titulo"
                            className="text-2xl md:text-4xl leading-tight text-balance"
                            style={{ color: white, fontFamily: serif }}
                        >
                            <span className="block font-normal">O Instagram não como vitrine.</span>
                            <span className="block font-bold" style={{ color: gold }}>
                                Mas como extensão da luta contra injustiças.
                            </span>
                        </h2>
                        <div
                            aria-hidden="true"
                            className="h-px w-16 mt-5 mx-auto md:mx-0"
                            style={{ background: "linear-gradient(90deg, transparent, rgba(201,162,39,0.5), transparent)" }}
                        />
                        <p className="text-sm md:text-base leading-relaxed mt-5 max-w-[44ch] mx-auto md:mx-0 text-pretty" style={{ color: gray2 }}>
                            No @{PERFIL.handle}, o Dr. Marcelo leva a público as pautas que sustenta na advocacia. Com o
                            mesmo rigor técnico.
                        </p>
                        <ul className="mt-6 inline-flex flex-col gap-3 text-left">
                            {PILARES.map((pilar) => (
                                <li key={pilar} className="flex items-start gap-3">
                                    <span aria-hidden="true" className="mt-[0.45em] w-1.5 h-1.5 rotate-45 flex-shrink-0" style={{ backgroundColor: gold }} />
                                    <span className="text-sm md:text-base font-medium text-pretty" style={{ color: white }}>
                                        {pilar}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <div
                            className="rounded-2xl overflow-hidden max-w-[460px] mx-auto"
                            style={{ backgroundColor: "#0b0b0b", border: `1px solid ${hairline}`, boxShadow: "0 12px 40px rgba(0,0,0,0.35)" }}
                        >
                            <div className="flex items-center gap-4 md:gap-5 px-4 pt-5 md:px-6 md:pt-6">
                                <div className="flex-shrink-0 rounded-full p-[2px]" style={{ background: `linear-gradient(135deg, #e8c766, ${gold} 50%, #7a5f12)` }}>
                                    <div className="rounded-full p-[3px]" style={{ backgroundColor: "#0b0b0b" }}>
                                        <Image
                                            src="/images/instagram/avatar.webp"
                                            alt="Foto de perfil de Marcelo Colen"
                                            width={84}
                                            height={84}
                                            className="w-[68px] h-[68px] md:w-[84px] md:h-[84px] rounded-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="min-w-0">
                                    <p className="flex items-center gap-1.5">
                                        <span className="font-semibold text-base md:text-lg truncate" style={{ color: white }}>
                                            {PERFIL.handle}
                                        </span>
                                        <BadgeCheck
                                            className="w-[18px] h-[18px] flex-shrink-0"
                                            fill="#0095F6"
                                            color="#0b0b0b"
                                            strokeWidth={2.2}
                                            role="img"
                                            aria-label="Perfil verificado"
                                        />
                                    </p>
                                    <p className="mt-2 flex gap-5 text-sm" style={{ color: gray2 }}>
                                        <span>
                                            <strong style={{ color: white }}>{PERFIL.publicacoes}</strong> publicações
                                        </span>
                                        <span>
                                            <strong style={{ color: white }}>{PERFIL.seguidores}</strong> seguidores
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="px-4 pt-4 pb-5 md:px-6 text-sm leading-relaxed">
                                <p className="font-semibold" style={{ color: white }}>
                                    {PERFIL.nome}
                                </p>
                                <p style={{ color: gray2 }}>{PERFIL.bio}</p>
                            </div>

                            <ul className="grid grid-cols-3 gap-[2px]" aria-label="Publicações do perfil">
                                {POSTS.map((post) => (
                                    <li key={post.src} className="relative aspect-[3/4]" style={{ backgroundColor: "#161616" }}>
                                        <Image src={post.src} alt={post.alt} fill sizes="(min-width: 768px) 154px, 33vw" className="object-cover" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="mt-3 text-[11px] text-center" style={{ color: gray3 }}>
                            Dados do perfil em {PERFIL_DATA}.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
