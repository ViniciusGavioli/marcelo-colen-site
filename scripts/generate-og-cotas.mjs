import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WIDTH = 1200;
const HEIGHT = 630;

// Colors
const NAVY = '#0A192F';
const BRONZE = '#C5A059';
const WHITE = '#FFFFFF';

async function generateOgCotas() {
  // Create SVG with the design
  const svg = `
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#071226"/>
          <stop offset="50%" style="stop-color:#0A192F"/>
          <stop offset="100%" style="stop-color:#0D1F38"/>
        </linearGradient>
        <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:transparent"/>
          <stop offset="50%" style="stop-color:${BRONZE}"/>
          <stop offset="100%" style="stop-color:transparent"/>
        </linearGradient>
      </defs>
      
      <!-- Background -->
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgGrad)"/>
      
      <!-- Top decorative line -->
      <rect x="0" y="0" width="${WIDTH}" height="4" fill="url(#goldLine)" opacity="0.8"/>
      
      <!-- Bottom decorative line -->
      <rect x="0" y="${HEIGHT - 4}" width="${WIDTH}" height="4" fill="url(#goldLine)" opacity="0.8"/>
      
      <!-- Grid pattern (subtle) -->
      <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="${BRONZE}" stroke-width="0.5" opacity="0.1"/>
      </pattern>
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#grid)"/>
      
      <!-- Left accent bar -->
      <rect x="80" y="180" width="4" height="270" fill="${BRONZE}" opacity="0.8"/>
      
      <!-- Eyebrow text -->
      <text x="110" y="220" font-family="Georgia, serif" font-size="18" fill="${BRONZE}" letter-spacing="4">
        HETEROIDENTIFICAÇÃO • COTAS RACIAIS • RECURSOS
      </text>
      
      <!-- Main headline -->
      <text x="110" y="300" font-family="Georgia, serif" font-size="54" font-weight="500" fill="${WHITE}">
        Indeferido na Banca?
      </text>
      
      <!-- Subheadline -->
      <text x="110" y="380" font-family="Georgia, serif" font-size="42" font-style="italic" fill="${BRONZE}">
        Você tem direito à inclusão.
      </text>
      
      <!-- Description -->
      <text x="110" y="450" font-family="Arial, sans-serif" font-size="22" fill="${WHITE}" opacity="0.85">
        Assessoria jurídica especializada em recursos
      </text>
      <text x="110" y="480" font-family="Arial, sans-serif" font-size="22" fill="${WHITE}" opacity="0.85">
        administrativos e ações judiciais.
      </text>
      
      <!-- Author/Brand -->
      <text x="110" y="560" font-family="Georgia, serif" font-size="28" font-weight="500" fill="${WHITE}">
        Dr. Marcelo Colen
      </text>
      <text x="370" y="560" font-family="Arial, sans-serif" font-size="18" fill="${WHITE}" opacity="0.6">
        OAB/MG 167.463
      </text>
      
      <!-- Right side decorative quote -->
      <text x="950" y="200" font-family="Georgia, serif" font-size="180" fill="${BRONZE}" opacity="0.15">
        "
      </text>
      
      <!-- Scale of justice icon (simplified) -->
      <g transform="translate(1000, 400)" opacity="0.2" fill="${BRONZE}">
        <rect x="45" y="0" width="10" height="120"/>
        <rect x="0" y="120" width="100" height="8"/>
        <circle cx="50" cy="0" r="15"/>
        <path d="M 10 40 L 50 20 L 90 40 L 80 60 L 50 50 L 20 60 Z"/>
      </g>
    </svg>
  `;

  // Convert SVG to PNG then to JPG
  const outputPath = path.join(__dirname, '..', 'public', 'og-cotas.jpg');
  
  await sharp(Buffer.from(svg))
    .jpeg({ quality: 90 })
    .toFile(outputPath);

  console.log(`✅ OG image generated: ${outputPath}`);
}

generateOgCotas().catch(console.error);
