import { ImageResponse } from "next/og";
import { carregarFonteGoogle } from "@/lib/fonte-google";

// Ícone da aba: as iniciais na fonte da logo em assinatura, marfim sobre o
// preto do site.
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default async function Icon() {
    const fonte = await carregarFonteGoogle("Herr Von Muellerhoff", "MC");
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#0a0a0a",
                    color: "#f2eee6",
                    fontFamily: "Assinatura",
                    // As letras da assinatura passam da caixa do texto para a
                    // direita; o padding à direita recentraliza o desenho.
                    fontSize: 265,
                    paddingTop: 34,
                    paddingRight: 110,
                }}
            >
                MC
            </div>
        ),
        { ...size, fonts: [{ name: "Assinatura", data: fonte, style: "normal", weight: 400 }] },
    );
}
