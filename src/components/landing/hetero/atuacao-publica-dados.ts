// Dados da seção de atuação pública, fora do componente "use client": a home
// institucional (Server Component) monta a lista de mídia dela a partir
// destes itens, e export de módulo de cliente chega ao servidor só como
// referência, não como dado.
//
// Prova externa só do tema da LP: cotas, heteroidentificação e igualdade
// racial. As participações em telejornal sobre temas criminais ficam em
// /midia e na home institucional, não aqui.
//
// Cada texto saiu da própria fonte, conferida em 06/10/2026:
//   - os dois vídeos pelo título e pela descrição no YouTube;
//   - o podcast pela página do episódio no Spotify;
//   - a ALMG pela página da reunião, que registra a finalidade da audiência
//     e o resultado "Reunião ocorrida".
// Nenhum item leva para fora da LP: vídeo e áudio abrem no modal, e o
// registro da ALMG é descrito no próprio modal, sem link.
export type ItemMidia = {
    source: string;
    name: string;
    topic: string;
    description: string;
    meta: string;
} & (
    // inicio/fim em segundos: em transmissão longa, o player abre e para no
    // trecho em que o Dr. Marcelo fala.
    | { type: "video"; youtubeId: string; inicio?: number; fim?: number }
    | { type: "audio"; spotifyEpisodeId: string; cover: string }
    | { type: "registro"; registro: { kicker: string; texto: string; fonte: string } }
);


export const ITENS_ATUACAO_PUBLICA: ItemMidia[] = [
    {
        source: "estudio-juridico",
        name: "Estúdio Jurídico Brasil",
        topic: "A genética pode definir as cotas raciais?",
        description:
            "Genética, miscigenação e a leitura de traços fenotípicos pelas bancas de heteroidentificação.",
        meta: "Entrevista em vídeo · 2023",
        type: "video",
        youtubeId: "VEpQHW73GqI",
    },
    {
        source: "itatiaia-oab",
        name: "Itatiaia + OAB/MG",
        topic: "Igualdade Racial em Foco",
        description:
            "Série Grandes Temas da Sociedade: combate à discriminação racial e o Estatuto da Igualdade Racial.",
        meta: "Debate em vídeo · 2023",
        type: "video",
        youtubeId: "PwdKecnO7b0",
    },
    {
        source: "almg",
        name: "Assembleia Legislativa de Minas Gerais",
        topic: "Reconhecimento institucional pela atuação na promoção da igualdade racial",
        description: "Voto de congratulações da Comissão de Direitos Humanos, entregue em audiência pública.",
        meta: "Comissão de Direitos Humanos · 2025",
        type: "registro",
        registro: {
            kicker: "Comissão de Direitos Humanos · Audiência pública · 05/08/2025",
            texto:
                "Audiência pública realizada para a entrega do diploma referente ao voto de congratulações a Marcelo Colen, por sua atuação na promoção da igualdade racial voltada a prevenir, detectar e corrigir práticas discriminatórias.",
            fonte:
                "Registro da 39ª Reunião Extraordinária da Comissão de Direitos Humanos da ALMG, Requerimento de Comissão 15.484/2025.",
        },
    },
    {
        source: "inspirando-advocacia",
        name: "Inspirando Advocacia",
        topic: "Por um Judiciário Antirracista",
        description: "Entrevista sobre advocacia, ativismo negro e o papel da OAB diante do racismo no Judiciário.",
        meta: "Podcast · 2023",
        type: "audio",
        spotifyEpisodeId: "6gsY5gas8Rgw9LCE2s5iL7",
        // Capa do episódio, do oEmbed do Spotify (300x300).
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67656300005f1f02c48c2ea9e1a12f6a4b4ffe",
    },
];

