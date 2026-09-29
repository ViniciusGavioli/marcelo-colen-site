import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WIDTH = 1200;
const HEIGHT = 630;

// Paleta real das páginas (não a do token CSS, que está defasado):
// #C9A227 é o dourado dominante no código das LPs (177 ocorrências).
const GOLD = '#C9A227';
const INK = '#0E0C0A';
const INK_WARM = '#17120D';
const WHITE = '#FFFFFF';

const OAB = 'OAB/MG 167.463';

// Cada variante é uma peça editorial: sobrancelha curta, uma afirmação,
// e a credencial. Sem promessa de resultado (Provimento 205/2021).
const VARIANTS = [
    {
        file: 'og-heteroidentificacao.jpg',
        eyebrow: 'RECURSO ADMINISTRATIVO E MANDADO DE SEGURANÇA',
        line1: 'Reprovado na banca',
        line2: 'de heteroidentificação?',
        body: ['A decisão da comissão pode ter falhas técnicas', 'que tornam o recurso viável.'],
    },
    {
        file: 'og-cotas.jpg',
        eyebrow: 'COTAS RACIAIS · DIREITO ANTIDISCRIMINATÓRIO',
        line1: 'Passou nas provas.',
        line2: 'A banca eliminou.',
        body: ['Análise do seu caso e das vias de contestação', 'administrativa e judicial.'],
    },
    {
        file: 'og-institucional.jpg',
        eyebrow: 'ADVOCACIA · BELO HORIZONTE · ATUAÇÃO NACIONAL',
        line1: 'Marcelo Colen',
        line2: 'Advogado',
        body: ['Mestre em Direito pela UFMG. Diretor de Diversidade', 'e Inclusão da OAB/MG.'],
    },
];

const esc = (s) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function buildSvg({ eyebrow, line1, line2, body }) {
    return `
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${INK}"/>
          <stop offset="100%" stop-color="${INK_WARM}"/>
        </linearGradient>
        <linearGradient id="rule" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${GOLD}" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="${GOLD}" stop-opacity="0"/>
        </linearGradient>
      </defs>

      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>

      <!-- régua superior: fina, assimétrica, não decorativa -->
      <rect x="88" y="0" width="420" height="3" fill="${GOLD}"/>

      <!-- sobrancelha -->
      <text x="88" y="150" font-family="Arial, Helvetica, sans-serif" font-size="17"
            font-weight="600" fill="${GOLD}" letter-spacing="3.2">${esc(eyebrow)}</text>

      <!-- afirmação principal, duas linhas, escala tipográfica clara -->
      <text x="88" y="268" font-family="Georgia, 'Times New Roman', serif" font-size="66"
            font-weight="400" fill="${WHITE}">${esc(line1)}</text>
      <text x="88" y="348" font-family="Georgia, 'Times New Roman', serif" font-size="66"
            font-style="italic" fill="${GOLD}">${esc(line2)}</text>

      <!-- corpo -->
      <text x="88" y="424" font-family="Arial, Helvetica, sans-serif" font-size="23"
            fill="${WHITE}" opacity="0.72">${esc(body[0])}</text>
      <text x="88" y="458" font-family="Arial, Helvetica, sans-serif" font-size="23"
            fill="${WHITE}" opacity="0.72">${esc(body[1])}</text>

      <!-- régua inferior + assinatura -->
      <rect x="88" y="524" width="1024" height="1" fill="url(#rule)"/>
      <text x="88" y="572" font-family="Georgia, 'Times New Roman', serif" font-size="27"
            fill="${WHITE}">Dr. Marcelo Colen</text>
      <text x="340" y="572" font-family="Arial, Helvetica, sans-serif" font-size="17"
            fill="${GOLD}" opacity="0.85" letter-spacing="1.2">${OAB}</text>
    </svg>
  `;
}

async function main() {
    for (const v of VARIANTS) {
        const out = path.join(__dirname, '..', 'public', v.file);
        await sharp(Buffer.from(buildSvg(v))).jpeg({ quality: 88 }).toFile(out);
        console.log(`OG gerada: public/${v.file}`);
    }
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
