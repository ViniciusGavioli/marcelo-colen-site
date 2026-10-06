import sharp from "sharp";
import path from "path";
import { writeFile } from "fs/promises";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RAIZ = path.join(__dirname, "..");

// Favicon a partir do monograma do cliente.
//
// O ícone anterior era um clipart de balança dourada, a mesma imagem genérica
// que o briefing proíbe na página. Em aba de navegador ela aparecia ao lado do
// título e entregava "site de advogado de template" antes de alguém ler uma
// linha.
//
// Nada do símbolo é redesenhado: recorto a caixa real do traço pelo canal
// alfa e componho sobre o preto do tema. A versão "claro" já vem na cor
// #F2EFE9, que é o off-white do site.
const ORIGEM = path.join(RAIZ, "public", "marca", "logo-simbolo-claro.png");
const FUNDO = { r: 18, g: 17, b: 16 }; // T.ink

// Fração da largura do ladrilho ocupada pelo monograma. O MC aparado tem razao
// 1,32, então sobra mais folga em cima e embaixo do que nas laterais; isso é
// esperado e mantém o mark respirando dentro do quadrado.
const OCUPACAO = 0.86;

/** Caixa real do traço: o PNG entregue tem margem transparente dos dois lados. */
async function caixaDoTraco(arquivo) {
    const { data, info } = await sharp(arquivo).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    const { width: w, height: h, channels: c } = info;
    let x0 = w, y0 = h, x1 = -1, y1 = -1;
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            if (data[(y * w + x) * c + 3] > 8) {
                if (x < x0) x0 = x;
                if (x > x1) x1 = x;
                if (y < y0) y0 = y;
                if (y > y1) y1 = y;
            }
        }
    }
    return { left: x0, top: y0, width: x1 - x0 + 1, height: y1 - y0 + 1 };
}

async function ladrilho(traco, lado) {
    const largura = Math.round(lado * OCUPACAO);
    const marca = await sharp(traco).resize(largura, null, { fit: "inside" }).toBuffer();
    const m = await sharp(marca).metadata();
    return sharp({ create: { width: lado, height: lado, channels: 4, background: { ...FUNDO, alpha: 1 } } })
        .composite([{
            input: marca,
            left: Math.round((lado - m.width) / 2),
            top: Math.round((lado - m.height) / 2),
        }])
        .png({ compressionLevel: 9 })
        .toBuffer();
}

/** ICO de uma entrada só, com PNG embutido. Todo navegador atual lê. */
function empacotarIco(png, lado) {
    const cab = Buffer.alloc(6);
    cab.writeUInt16LE(0, 0);   // reservado
    cab.writeUInt16LE(1, 2);   // tipo: ícone
    cab.writeUInt16LE(1, 4);   // uma imagem
    const dir = Buffer.alloc(16);
    dir.writeUInt8(lado >= 256 ? 0 : lado, 0);
    dir.writeUInt8(lado >= 256 ? 0 : lado, 1);
    dir.writeUInt8(0, 2);      // sem paleta
    dir.writeUInt8(0, 3);
    dir.writeUInt16LE(1, 4);   // planos
    dir.writeUInt16LE(32, 6);  // bits por pixel
    dir.writeUInt32LE(png.length, 8);
    dir.writeUInt32LE(22, 12); // offset dos dados
    return Buffer.concat([cab, dir, png]);
}

async function main() {
    const caixa = await caixaDoTraco(ORIGEM);
    const traco = await sharp(ORIGEM).extract(caixa).png().toBuffer();
    console.log(`monograma aparado: ${caixa.width}x${caixa.height} (razao ${(caixa.width / caixa.height).toFixed(2)})`);

    const saidas = [
        [path.join(RAIZ, "src", "app", "icon.png"), 512],
        [path.join(RAIZ, "src", "app", "apple-icon.png"), 180],
    ];
    for (const [destino, lado] of saidas) {
        const png = await ladrilho(traco, lado);
        await writeFile(destino, png);
        console.log(`${path.basename(destino).padEnd(16)} ${lado}x${lado}  ${Math.round(png.length / 1024)} KB`);
    }

    // /favicon.ico ainda é pedido direto por rastreadores e por aba antiga.
    const png48 = await ladrilho(traco, 48);
    const ico = empacotarIco(png48, 48);
    await writeFile(path.join(RAIZ, "src", "app", "favicon.ico"), ico);
    console.log(`favicon.ico      48x48    ${Math.round(ico.length / 1024)} KB`);
}

main();
