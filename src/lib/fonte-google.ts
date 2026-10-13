// Fonte do Google Fonts em TTF para o next/og, que não lê WOFF2. Pedindo o CSS
// sem user-agent de navegador, a API responde com truetype; o parâmetro `text`
// baixa só os glifos usados na imagem.
export async function carregarFonteGoogle(familia: string, texto: string, peso = 400): Promise<ArrayBuffer> {
    const url = `https://fonts.googleapis.com/css2?family=${familia.replace(/ /g, "+")}:wght@${peso}&text=${encodeURIComponent(texto)}`;
    const css = await (await fetch(url)).text();
    const arquivo = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    if (!arquivo) throw new Error(`Fonte ${familia} não encontrada no Google Fonts`);
    return (await fetch(arquivo)).arrayBuffer();
}
