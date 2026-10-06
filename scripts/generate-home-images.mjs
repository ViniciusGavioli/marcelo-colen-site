import sharp from "sharp";
import path from "path";
import { mkdir } from "fs/promises";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dirname, "..", "public", "images", "marcelo");
/** Acervo completo da sessão fotográfica, entregue fora de public/images/marcelo. */
const ACERVO = path.join(__dirname, "..", "public", "images", "defesa", "Marcelo imagens");
const OUT = path.join(__dirname, "..", "public", "images", "home");

// Derivadas das fotografias reais do acervo. Nada gerado, nada de rosto
// alterado: só recorte, proporção e tratamento editorial.
//
// ------------------------------------------------------------------
// NÃO ADICIONAR ORIGEM SEM ABRIR O ARQUIVO.
//
// O nome do arquivo mente. Em public/images/marcelo há quatro arquivos que
// NÃO são fotos do Marcelo, e três chegaram a ir para o site como se fossem:
//   biblioteca.jpg  estudantes em uma biblioteca, banco de imagem
//   estudantes.jpg  jovens num corredor, banco de imagem
//   painel.jpg      painel com outras pessoas, ele não aparece
//   capa.png        colagem de marketing, inclui balança dourada
//
// E aquela pasta repete a mesma foto sob nomes diferentes (idênticas por
// hash): about = cotas-bio = marcelo-bio; cotas-cta = marcelo-cta;
// marcelo-hero = primeira-imagem; cotas-hero = hero.
//
// O acervo de verdade está em public/images/defesa/Marcelo imagens, com
// dezesseis fotos dele, das quais onze nunca tinham sido usadas. É de lá que
// saem os retratos das áreas. Lá também há repetição por hash:
//   M (16) = o .jfif = o arquivo "WhatsApp Image".
// ------------------------------------------------------------------
//
// SUFIXO DE VERSÃO no nome do arquivo.
// O otimizador do Next e o cache do navegador indexam pela URL. Regerar o
// arquivo mantendo o nome faz o visitante continuar recebendo os bytes
// antigos, e foi exatamente o que aconteceu quando estas imagens saíram do
// preto e branco para a cor. Mudou o conteúdo, muda o sufixo. Por isso hero e
// trajetória continuam em v2, que não mudaram, e as áreas vão para v3.
//
// `foco` é a correção do bug anterior: sharp.strategy.attention escolhia o
// recorte pelo contraste da cena e decapitou um retrato na altura dos olhos.
// Aqui a janela de corte é posicionada por um ponto fixo da imagem de origem,
// em fração de largura e altura, e o resultado é sempre o mesmo.
const PECAS = [
    // Hero e trajetória: inalterados, por isso seguem em v2.
    { src: "marcelo-hero.jpg", out: "hero-desktop-v2.jpg", w: 1100, h: 1375, trat: "cor" },
    { src: "marcelo-hero.jpg", out: "hero-mobile-v2.jpg", w: 1200, h: 800, trat: "cor" },
    { src: "about.jpg", out: "trajetoria-desktop-v2.jpg", w: 1000, h: 1250, trat: "cor" },
    { src: "about.jpg", out: "trajetoria-mobile-v2.jpg", w: 1200, h: 900, trat: "cor" },

    // Áreas de atuação: um retrato dele por eixo, quatro fotos diferentes
    // entre si em fundo, enquadramento e expressão. A versão anterior usava
    // imagens de ambiente geradas, sem pessoa, e ficou com cara de catálogo.
    //
    // Painel em 4:5, não em 4:3. A sessão inteira é vertical, e cortar retrato
    // em paisagem decepa queixo e topo da cabeça: na primeira tentativa a 4:3
    // os dois primeiros saíram com o rosto preso contra as bordas.
    {
        dir: ACERVO,
        src: "M (8).jpeg",
        out: "area-01-v3.jpg",
        w: 1000, h: 1250, trat: "cor",
        foco: { x: 0.5, y: 0.5 },
    },
    {
        // v4, nao v3: a v3 chegou a ser gerada com outro retrato e ja foi
        // servida. Trocar o conteudo mantendo o nome deixa quem ja abriu a
        // pagina vendo a foto antiga, que e o erro descrito no topo do arquivo.
        src: "cotas.jpg",
        out: "area-02-v4.jpg",
        w: 1000, h: 1250, trat: "cor",
        foco: { x: 0.40, y: 0.62 }, zoom: 0.78,
    },
    {
        dir: ACERVO,
        src: "M (2).jpeg",
        out: "area-03-v3.jpg",
        w: 1000, h: 1250, trat: "cor",
        foco: { x: 0.5, y: 0.46 },
    },
    {
        dir: ACERVO,
        src: "M (7).jpeg",
        out: "area-04-v3.jpg",
        w: 1000, h: 1250, trat: "cor",
        foco: { x: 0.66, y: 0.5 },
    },

    // Mídia: o destaque apontava para um arquivo que não existia, porque a
    // origem era painel.jpg, removida por não ser foto dele. Resultado: 404 e
    // imagem quebrada na seção. Entra uma fotografia de ambiente, real.
    {
        dir: ACERVO,
        src: "M (9).jpeg",
        out: "midia-destaque-v3.jpg",
        w: 1400, h: 875, trat: "cor",
        foco: { x: 0.5, y: 0.5 },
    },

    // Textura de fundo de Situações, também 404 pelo mesmo motivo. Vai a 10%
    // de opacidade atrás do texto, então é atmosfera, não assunto.
    {
        dir: ACERVO,
        src: "M (10).jpeg",
        out: "textura-situacoes-v3.jpg",
        w: 1600, h: 900, trat: "duotone",
        foco: { x: 0.5, y: 0.5 },
    },
];

function aplicar(pipe, trat) {
    if (trat === "pb") {
        // Preto e branco com leve ganho de contraste. Sem suavizar pele.
        return pipe.grayscale().linear(1.06, -8);
    }
    if (trat === "duotone") {
        // Duotone discreto para o preto quente do tema.
        return pipe.grayscale().linear(0.82, -18).tint({ r: 150, g: 128, b: 124 });
    }
    // Cor natural, só um ajuste fino de contraste.
    return pipe.linear(1.03, -4);
}

/**
 * Janela com a proporção de saída: o máximo que cabe na origem, ou menor se
 * `zoom` fechar o enquadramento. Centrada no ponto de foco e presa às bordas.
 * Determinístico: mesma entrada, mesmo recorte, sempre.
 */
function janela(larguraOrigem, alturaOrigem, razaoSaida, foco, zoom = 1) {
    let w = larguraOrigem;
    let h = Math.round(w / razaoSaida);
    if (h > alturaOrigem) {
        h = alturaOrigem;
        w = Math.round(h * razaoSaida);
    }
    // zoom < 1 fecha o enquadramento. Sem isso, uma foto de corpo inteiro em
    // ambiente amplo entrega a pessoa pequena no meio da moldura.
    w = Math.round(w * zoom);
    h = Math.round(h * zoom);
    const left = Math.max(0, Math.min(larguraOrigem - w, Math.round(foco.x * larguraOrigem - w / 2)));
    const top = Math.max(0, Math.min(alturaOrigem - h, Math.round(foco.y * alturaOrigem - h / 2)));
    return { left, top, width: w, height: h };
}

async function main() {
    await mkdir(OUT, { recursive: true });

    for (const p of PECAS) {
        const entrada = path.join(p.dir ?? SRC, p.src);
        try {
            const meta = await sharp(entrada).metadata();
            let pipe = sharp(entrada);

            if (p.foco) {
                pipe = pipe.extract(janela(meta.width, meta.height, p.w / p.h, p.foco, p.zoom ?? 1)).resize(p.w, p.h);
            } else {
                pipe = pipe.resize(p.w, p.h, { fit: "cover", position: sharp.strategy.attention });
            }

            pipe = aplicar(pipe, p.trat);
            const info = await pipe.jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(OUT, p.out));

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
