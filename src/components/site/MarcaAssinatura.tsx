import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";

// Logo nova (out/2026), a mesma do vídeo dos 60 mil: arquivos em
// public/marca/, recortados de "08 - Marcelo Colen/Logo nova/".
// A versão compacta (cabeçalho) é só a assinatura; a completa (rodapé) é a
// logo inteira, a mesma imagem da cartela final do vídeo.
const COMPACTA = { src: "/marca/assinatura-so-nome-clara.png", largura: 900, altura: 256 };
const COMPLETA = { src: "/marca/logo-assinatura-clara.png", largura: 1200, altura: 430 };

type Props = {
    completa?: boolean;
    /** altura da logo em px */
    altura?: number;
    /** logo do cabeçalho: carrega com prioridade */
    prioridade?: boolean;
};

export function MarcaAssinatura({ completa = false, altura = 36, prioridade = false }: Props) {
    const img = completa ? COMPLETA : COMPACTA;
    const largura = Math.round((altura * img.largura) / img.altura);

    return (
        <Image
            src={img.src}
            width={largura}
            height={altura}
            alt={completa ? `Marcelo Colen, advogado, ${SITE_CONFIG.oab}` : "Marcelo Colen"}
            priority={prioridade}
            sizes={`${largura}px`}
            style={{ width: largura, height: altura, maxWidth: "100%", objectFit: "contain" }}
        />
    );
}
