// Gera as imagens de preview social (1200x630) em public/.
//
//   node scripts/generate-og.mjs
//
// Cada peça é uma página HTML renderizada pelo Chrome headless, e não um SVG
// pelo sharp: o librsvg só enxerga fontes instaladas no sistema, e a peça
// precisa do par do site (Cormorant Garamond e Inter, via Google Fonts).
// Chrome em CHROME_PATH ou num dos caminhos padrão abaixo.
//
// O retrato fica à direita do centro de propósito: quando o WhatsApp mostra a
// miniatura quadrada, ele corta o meio da imagem, e o rosto continua dentro.
//
// Ao trocar o desenho, subir OG_VERSAO em src/lib/constants.ts: WhatsApp e
// Facebook guardam a imagem pela URL e só buscam de novo se ela mudar.
import sharp from 'sharp';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { execFileSync } from 'child_process';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RAIZ = path.join(__dirname, '..');

const LARGURA = 1200;
const ALTURA = 630;

const OURO = '#c9a227';
const FUNDO = '#0a0a0a';
const OAB = 'OAB/MG 167.463';

// Textos de antes, já aprovados. Sem promessa de resultado (Provimento
// 205/2021).
const VARIANTES = [
    {
        arquivo: 'og-heteroidentificacao.jpg',
        selo: 'Recurso administrativo e mandado de segurança',
        linha1: 'Reprovado na banca',
        linha2: 'de heteroidentificação?',
        corpo: 'A decisão da comissão pode ter falhas técnicas que tornam o recurso viável.',
        assinatura: 'Dr. Marcelo Colen',
    },
    {
        arquivo: 'og-cotas.jpg',
        selo: 'Cotas raciais · Direito antidiscriminatório',
        linha1: 'Passou nas provas.',
        linha2: 'A banca eliminou.',
        corpo: 'Análise do seu caso e das vias de contestação administrativa e judicial.',
        assinatura: 'Dr. Marcelo Colen',
    },
    {
        arquivo: 'og-institucional.jpg',
        selo: 'Advocacia · Belo Horizonte · Atuação nacional',
        linha1: 'Marcelo Colen',
        linha2: 'Advogado',
        corpo: 'Mestre em Direito pela UFMG. Diretor de Diversidade e Inclusão da OAB/MG.',
        // o nome já é o título desta peça
        assinatura: 'Colen Advogados',
    },
];

const CHROMES = [
    process.env.CHROME_PATH,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
].filter(Boolean);

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function montarHtml({ selo, linha1, linha2, corpo, assinatura }, retrato) {
    return `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,500&family=Inter:wght@400;600&display=block" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: ${LARGURA}px; height: ${ALTURA}px; overflow: hidden; position: relative; background: ${FUNDO}; font-family: Inter, sans-serif; }
  .luz { position: absolute; inset: 0; background:
      radial-gradient(circle 360px at 840px 300px, rgba(201,162,39,0.20), transparent 70%),
      linear-gradient(110deg, #0a0a0a 0%, #0d0b07 55%, #14100a 100%); }
  .aro { position: absolute; left: 605px; top: 62px; width: 470px; height: 470px; border-radius: 50%;
      border: 1px solid rgba(201,162,39,0.38); }
  .retrato { position: absolute; left: 600px; top: 22px; width: 472px; }
  .fio-topo { position: absolute; left: 80px; top: 0; width: 360px; height: 3px; background: ${OURO}; }
  .texto { position: absolute; left: 80px; top: 0; bottom: 0; width: 520px; display: flex; flex-direction: column; justify-content: center; }
  .selo { color: ${OURO}; font-size: 13px; font-weight: 600; letter-spacing: 0.17em; text-transform: uppercase; white-space: nowrap; }
  h1 { margin-top: 30px; font-family: 'Cormorant Garamond', serif; font-size: 62px; line-height: 1.02; font-weight: 600; color: #fff; letter-spacing: -0.01em; }
  h1 em { display: block; font-style: italic; font-weight: 500; color: ${OURO}; }
  .divisor { margin-top: 28px; display: flex; align-items: center; gap: 12px; }
  .divisor i { display: block; height: 1px; width: 90px; background: linear-gradient(to right, ${OURO}, transparent); opacity: 0.7; }
  .divisor b { display: block; width: 7px; height: 7px; background: ${OURO}; transform: rotate(45deg); opacity: 0.8; }
  .corpo { margin-top: 24px; font-size: 21px; line-height: 1.5; color: rgba(255,255,255,0.72); max-width: 470px; }
  .assinatura { margin-top: 36px; display: flex; align-items: baseline; gap: 18px; }
  .assinatura strong { font-family: 'Cormorant Garamond', serif; font-size: 30px; font-weight: 600; color: #fff; }
  .assinatura span { font-size: 14px; letter-spacing: 0.14em; color: ${OURO}; }
</style></head>
<body>
  <div class="luz"></div>
  <div class="aro"></div>
  <img class="retrato" src="${retrato}" alt="">
  <div class="fio-topo"></div>
  <div class="texto">
    <p class="selo">${esc(selo)}</p>
    <h1>${esc(linha1)}<em>${esc(linha2)}</em></h1>
    <div class="divisor"><i></i><b></b></div>
    <p class="corpo">${esc(corpo)}</p>
    <div class="assinatura"><strong>${esc(assinatura)}</strong><span>${OAB}</span></div>
  </div>
</body></html>`;
}

async function main() {
    const chrome = CHROMES.find((c) => fs.existsSync(c));
    if (!chrome) throw new Error('Chrome não encontrado. Defina CHROME_PATH.');

    const foto = fs.readFileSync(path.join(RAIZ, 'public/images/marcelo/marcelo-colen-retrato.webp'));
    const retrato = `data:image/webp;base64,${foto.toString('base64')}`;
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'og-'));

    for (const v of VARIANTES) {
        const html = path.join(tmp, v.arquivo.replace('.jpg', '.html'));
        const png = path.join(tmp, v.arquivo.replace('.jpg', '.png'));
        fs.writeFileSync(html, montarHtml(v, retrato));
        execFileSync(chrome, [
            '--headless=new',
            '--disable-gpu',
            '--hide-scrollbars',
            '--force-device-scale-factor=1',
            `--window-size=${LARGURA},${ALTURA}`,
            // tempo para as fontes do Google carregarem antes da captura
            '--virtual-time-budget=8000',
            `--screenshot=${png}`,
            pathToFileURL(html).href,
        ], { stdio: 'ignore' });

        const out = path.join(RAIZ, 'public', v.arquivo);
        await sharp(png).resize(LARGURA, ALTURA, { fit: 'cover', position: 'top' }).jpeg({ quality: 86, mozjpeg: true }).toFile(out);
        console.log(`OG gerada: public/${v.arquivo} (${(fs.statSync(out).size / 1024).toFixed(0)} KB)`);
    }

    fs.rmSync(tmp, { recursive: true, force: true });
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
