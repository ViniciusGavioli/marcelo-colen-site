import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MARCA = path.join(__dirname, "..", "public", "marca");
const ORIGEM = path.join(MARCA, "logo-mc.png");

const PAPER = { r: 242, g: 239, b: 233 }; // off-white do tema
const INK = { r: 18, g: 17, b: 16 }; // preto quente do tema

// ----------------------------------------------------------------------------
// Deriva as versões da marca entregue pelo cliente.
//
// NÃO altera símbolo nem letra: só recorta a margem vazia, separa o símbolo do
// lockup e troca a cor da arte preservando o alfa original. A arte vem preta
// sobre fundo transparente, e o header do site é escuro, então sem a versão
// clara a marca simplesmente some lá.
//
// Recolorir é feito pelo alfa, não por negate: assim a arte vira exatamente o
// off-white do tema (#F2EFE9) em vez de branco puro, que destoaria.
// ----------------------------------------------------------------------------

/** Linhas totalmente transparentes separam o símbolo do nome. */
async function acharCorteDoSimbolo(buf) {
    const img = sharp(buf);
    const { width, height } = await img.metadata();
    const alpha = await img.extractChannel("alpha").raw().toBuffer();

    const linhaVazia = (y) => {
        for (let x = 0; x < width; x++) {
            if (alpha[y * width + x] > 8) return false;
        }
        return true;
    };

    // Procura o maior intervalo vazio na metade de baixo: é a calha entre o
    // monograma e a assinatura.
    let melhorInicio = -1;
    let melhorTam = 0;
    let inicio = -1;
    for (let y = Math.floor(height * 0.4); y < height; y++) {
        if (linhaVazia(y)) {
            if (inicio === -1) inicio = y;
        } else if (inicio !== -1) {
            const tam = y - inicio;
            if (tam > melhorTam) {
                melhorTam = tam;
                melhorInicio = inicio;
            }
            inicio = -1;
        }
    }
    return melhorTam > 8 ? melhorInicio + Math.floor(melhorTam / 2) : null;
}

/** Repinta a arte na cor dada, preservando o alfa. */
async function recolorir(buf, cor) {
    const img = sharp(buf);
    const { width, height } = await img.metadata();
    const alpha = await img.extractChannel("alpha").raw().toBuffer();
    return sharp({
        create: { width, height, channels: 3, background: cor },
    })
        .joinChannel(alpha, { raw: { width, height, channels: 1 } })
        .png()
        .toBuffer();
}

async function salvar(buf, nome) {
    await sharp(buf).toFile(path.join(MARCA, nome));
    const m = await sharp(buf).metadata();
    console.log(`${nome.padEnd(30)} ${m.width}x${m.height}`);
}

async function main() {
    // Remove a margem transparente em volta da arte entregue.
    const cheio = await sharp(ORIGEM).trim({ threshold: 5 }).png().toBuffer();
    const corte = await acharCorteDoSimbolo(cheio);
    const meta = await sharp(cheio).metadata();

    await salvar(await recolorir(cheio, INK), "logo-lockup-escuro.png");
    await salvar(await recolorir(cheio, PAPER), "logo-lockup-claro.png");

    if (corte) {
        // Símbolo isolado, para header estreito e favicon: o lockup vertical
        // reduzido à altura de um header deixaria a assinatura ilegível.
        const simbolo = await sharp(cheio)
            .extract({ left: 0, top: 0, width: meta.width, height: corte })
            .trim({ threshold: 5 })
            .png()
            .toBuffer();
        await salvar(await recolorir(simbolo, INK), "logo-simbolo-escuro.png");
        await salvar(await recolorir(simbolo, PAPER), "logo-simbolo-claro.png");
    } else {
        console.warn("calha entre símbolo e assinatura não encontrada; só o lockup foi gerado");
    }
}

main().catch((e) => {
    console.error(e);
    process.exitCode = 1;
});
