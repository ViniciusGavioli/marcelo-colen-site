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
//
// As transmissões têm de 2h a 2h40. inicio/fim marcam só a participação,
// localizada na legenda automática pela apresentação do convidado ("eu
// converso agora com Marcelo Colen...") e pela despedida, em 07/10/2026.
const TV: ItemMidia[] = [
    {
        source: "sbt-news",
        name: "SBT News",
        topic: "News Noite",
        description: "Comentário jurídico em transmissão ao vivo.",
        meta: "11/09/2026 · trecho de 11 min",
        type: "video",
        youtubeId: "XZ7s2fKp-fU",
        inicio: 6449, // 1:47:29
        fim: 7097, // 1:58:17
    },
    {
        source: "times-brasil",
        name: "Times Brasil",
        topic: "Transmissão ao vivo",
        description: "Comentário jurídico no canal licenciado exclusivo da CNBC no Brasil.",
        meta: "13/09/2026 · trecho de 11 min",
        type: "video",
        youtubeId: "9STBnSxGnFY",
        inicio: 8778, // 2:26:18
        fim: 9453, // 2:37:33
    },
    {
        source: "tmc-news",
        name: "TMC News",
        topic: "Link TMC",
        description: "Comentário jurídico em transmissão ao vivo.",
        meta: "14/09/2026 · trecho de 8 min",
        type: "video",
        youtubeId: "5g259JVnTOE",
        inicio: 5402, // 1:30:02
        fim: 5870, // 1:37:50
    },
];

const IGUALDADE = ["estudio-juridico", "itatiaia-oab", "almg"];

export const MIDIA_SITE: ItemMidia[] = [
    ...TV,
    ...ITENS_ATUACAO_PUBLICA.filter((item) => IGUALDADE.includes(item.source)),
];
