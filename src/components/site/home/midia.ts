import { ITENS_ATUACAO_PUBLICA, type ItemMidia } from "@/components/landing/hetero/atuacao-publica-dados";

// Mídia da home institucional: uma participação em TV por veículo, mais as
// três de igualdade racial que a LP de recurso já usa.
//
// TV: só programa e data, sem a manchete do episódio. As chamadas citam casos
// em andamento, e manchete de caso alheio em site de escritório vira vitrine
// de processo dos outros (mesmo critério da home anterior). Pelo mesmo motivo
// ficou de fora o Times Brasil de 03/09/2026: a capa do vídeo traz o rosto e
// o nome das pessoas do caso. Datas e veículos conferidos no YouTube
// (oEmbed) em 06/10/2026.
const TV: ItemMidia[] = [
    {
        source: "sbt-news",
        name: "SBT News",
        topic: "News Noite",
        description: "Comentário jurídico em transmissão ao vivo.",
        meta: "11/09/2026",
        type: "video",
        youtubeId: "XZ7s2fKp-fU",
    },
    {
        source: "times-brasil",
        name: "Times Brasil",
        topic: "Transmissão ao vivo",
        description: "Comentário jurídico no canal licenciado exclusivo da CNBC no Brasil.",
        meta: "13/09/2026",
        type: "video",
        youtubeId: "9STBnSxGnFY",
    },
    {
        source: "tmc-news",
        name: "TMC News",
        topic: "Link TMC",
        description: "Comentário jurídico em transmissão ao vivo.",
        meta: "14/09/2026",
        type: "video",
        youtubeId: "5g259JVnTOE",
    },
];

const IGUALDADE = ["estudio-juridico", "itatiaia-oab", "almg"];

export const MIDIA_SITE: ItemMidia[] = [
    ...TV,
    ...ITENS_ATUACAO_PUBLICA.filter((item) => IGUALDADE.includes(item.source)),
];
