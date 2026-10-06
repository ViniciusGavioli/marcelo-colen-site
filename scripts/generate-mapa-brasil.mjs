// Gera public/images/mapa-brasil-uf-v1.svg a partir da malha oficial do IBGE
// (API de malhas v3, qualidade mínima, divisão por UF). Usado pela seção de
// atendimento nacional da LP de recurso
// (components/landing/hetero/hetero-atendimento-nacional.tsx).
//
// Uso: node scripts/generate-mapa-brasil.mjs
//
// O arquivo sai estático em public/ de propósito: como dado inline, os ~48 KB
// de geometria entrariam no bundle JS da LP, que é client component.
// A malha vem em graus (x = longitude, y = -latitude, via o transform do
// grupo), o que deixa a camada de linhas e pontos do componente desenhar por
// cima com as coordenadas das capitais, sem projeção.
//
// O nome leva versão porque next.config.ts serve svg com cache immutable de
// um ano: um arquivo regenerado com o mesmo nome não chegaria a quem já viu.

import { writeFile } from "node:fs/promises";

const FONTE =
    "https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR?formato=image/svg%2Bxml&qualidade=minima&intrarregiao=UF";
const SAIDA = new URL("../public/images/mapa-brasil-uf-v1.svg", import.meta.url);
const DESTAQUE = "31"; // Minas Gerais, onde fica o escritório

const res = await fetch(FONTE);
if (!res.ok) throw new Error(`IBGE respondeu ${res.status}`);
const svg = await res.text();

const viewBox = svg.match(/viewBox="([^"]+)"/)?.[1];
const transform = svg.match(/<g id="BRUF" transform="([^"]+)"/)?.[1];
const ufs = [...svg.matchAll(/<path id="(\d+)" d="([^"]+)"/g)].map((m) => ({ id: m[1], d: m[2] }));

if (!viewBox || !transform || ufs.length !== 27) {
    throw new Error(`Formato inesperado da malha: ${ufs.length} UFs`);
}

// Minas por último, para o contorno dourado não ficar sob o traço dos vizinhos.
ufs.sort((a, b) => Number(a.id === DESTAQUE) - Number(b.id === DESTAQUE));

const caminhos = ufs
    .map((uf) =>
        uf.id === DESTAQUE
            ? `<path d="${uf.d}" fill="#c9a227" fill-opacity=".16" stroke="#c9a227" stroke-opacity=".6"/>`
            : `<path d="${uf.d}"/>`
    )
    .join("\n");

const saida = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" preserveAspectRatio="xMidYMid meet">
<!-- Fonte: IBGE, malha territorial por UF (API de malhas v3, qualidade minima). Gerado por scripts/generate-mapa-brasil.mjs -->
<style>path{vector-effect:non-scaling-stroke;stroke-linejoin:round}</style>
<g transform="${transform}" fill="#1c1c1c" stroke="#383838" stroke-width="1">
${caminhos}
</g>
</svg>
`;

await writeFile(SAIDA, saida);
console.log(`ok: ${SAIDA.pathname} (${(saida.length / 1024).toFixed(1)} KB, viewBox ${viewBox})`);
