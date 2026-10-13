import { ImageResponse } from "next/og";
import { carregarFonteGoogle } from "@/lib/fonte-google";

// Ícone de atalho no iPhone: o mesmo do favicon (icon.tsx), em 180px.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
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
                    fontSize: 93,
                    paddingTop: 12,
                    paddingRight: 39,
                }}
            >
                MC
            </div>
        ),
        { ...size, fonts: [{ name: "Assinatura", data: fonte, style: "normal", weight: 400 }] },
    );
}
