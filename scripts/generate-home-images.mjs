import sharp from "sharp";
import path from "path";
import { mkdir } from "fs/promises";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dirname, "..", "public", "images", "marcelo");
/** Imagens de ambiente geradas, entregues fora do acervo fotográfico. */
const ENTRADA = path.join(__dirname, "..", "public", "images", "_entrada");
const OUT = path.join(__dirname, "..", "public", "images", "home");

// Derivadas das fotografias reais do acervo. Nada gerado, nada de rosto
// alterado: só recorte, proporção e tratamento editorial.
//
// Ritmo da página: o retrato principal e a trajetória ficam em cor natural,
// porque são a presença humana. Os fragmentos das áreas vão para preto e
// branco, para quatro fotos diferentes não brigarem entre si. A textura de
// fundo recebe duotone escuro e só funciona como atmosfera.
//
// Cada peça tem crop próprio de desktop e de mobile: reduzir a imagem de
// desktop joga o rosto para fora do enquadramento no retrato vertical.
// SUFIXO DE VERSÃO no nome do arquivo.
// O otimizador do Next e o cache do navegador indexam pela URL. Regerar o
// arquivo mantendo o nome faz o visitante continuar recebendo os bytes
// antigos, e foi exatamente o que aconteceu quando estas imagens saíram do
// preto e branco para a cor. Mudou o tratamento, muda o sufixo.
const V = "-v2";

const PECAS = [
    // Hero
    { src: "marcelo-hero.jpg", out: `hero-desktop${V}.jpg`, w: 1100, h: 1375, trat: "cor" },
    { src: "marcelo-hero.jpg", out: `hero-mobile${V}.jpg`, w: 1200, h: 800, trat: "cor" },

    // Trajetória
    { src: "about.jpg", out: `trajetoria-desktop${V}.jpg`, w: 1000, h: 1250, trat: "cor" },
    { src: "about.jpg", out: `trajetoria-mobile${V}.jpg`, w: 1200, h: 900, trat: "cor" },

    // ------------------------------------------------------------------
    // NÃO ADICIONAR ORIGEM SEM ABRIR O ARQUIVO.
    //
    // O nome do arquivo mente. Três destes NÃO são fotos do Marcelo e
    // chegaram a ir para o site como se fossem:
    //   biblioteca.jpg  estudantes em uma biblioteca, banco de imagem
    //   estudantes.jpg  jovens num corredor, banco de imagem
    //   painel.jpg      painel com outras pessoas, ele não aparece
    //   capa.png        colagem de marketing, inclui balança dourada
    //
    // E o acervo repete a mesma foto sob nomes diferentes (idênticas por
    // hash): about = cotas-bio = marcelo-bio; cotas-cta = marcelo-cta;
    // marcelo-hero = primeira-imagem; cotas-hero = hero.
    //
    // Sobram CINCO fotografias reais dele, mais um recorte PNG. Preencher
    // mais lugares que isso obriga a usar banco de imagem, que é o que o
    // briefing proíbe e o que gerou foto de terceiros legendada como ele.
    //
    // Origens válidas: marcelo-hero, about, cotas-cta, cotas, cotas-hero,
    // marcelo-sem-fundo-.
    // ------------------------------------------------------------------

    // Áreas de atuação. Imagens de ambiente geradas para cada eixo, sem
    // pessoa: rosto inventado em site de advogado tem o mesmo problema da
    // foto de terceiros legendada como ele. Origem em public/images/_entrada,
    // com os nomes que vieram do gerador.
    {
        dir: ENTRADA,
        src: "Átrio Modernista com Luz Geométrica.jpg",
        out: `area-01${V}.jpg`,
        w: 1100,
        h: 825,
        trat: "cor",
    },
    {
        dir: ENTRADA,
        src: "Documento Oficial sobre Mesa de Mármore.jpg",
        out: `area-02${V}.jpg`,
        w: 1100,
        h: 825,
        trat: "cor",
    },
    {
        dir: ENTRADA,
        src: "corredor_edificio_publico_4x3.jpg",
        out: `area-03${V}.jpg`,
        w: 1100,
        h: 825,
        trat: "cor",
    },
    {
        dir: ENTRADA,
        src: "mesa_reuniao_madeira_4x3.jpg",
        out: `area-04${V}.jpg`,
        w: 1100,
        h: 825,
        trat: "cor",
    },
];

function aplicar(pipe, trat) {
    if (trat === "pb") {
        // Preto e branco com leve ganho de contraste. Sem suavizar pele.
        return pipe.grayscale().linear(1.06, -8);
    }
    if (trat === "duotone") {
        // Duotone discreto para o preto quente do tema. Vira atmosfera, não
        // assunto: a seção ainda aplica opacidade baixa por cima.
        return pipe.grayscale().linear(0.82, -18).tint({ r: 150, g: 128, b: 124 });
    }
    // Cor natural, só um ajuste fino de contraste.
    return pipe.linear(1.03, -4);
}

async function main() {
    await mkdir(OUT, { recursive: true });

    for (const p of PECAS) {
        const entrada = path.join(p.dir ?? SRC, p.src);
        try {
            const meta = await sharp(entrada).metadata();
            let pipe = sharp(entrada).resize(p.w, p.h, {
                fit: "cover",
                position: sharp.strategy.attention,
            });
            pipe = aplicar(pipe, p.trat);
            const info = await pipe
                .jpeg({ quality: 82, mozjpeg: true })
                .toFile(path.join(OUT, p.out));

            console.log(
                `${p.out.padEnd(26)} ${p.w}x${p.h}  ${p.trat.padEnd(8)} ` +
                `${Math.round(info.size / 1024)} KB   (origem ${p.src} ${meta.width}x${meta.height})`
            );
        } catch (err) {
            console.error(`FALHOU ${p.out} a partir de ${p.src}: ${err.message}`);
            process.exitCode = 1;
        }
    }
}

main();
