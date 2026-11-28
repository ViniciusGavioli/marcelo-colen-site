import type { ComponentType } from "react";
import IndeferidoNaHeteroidentificacao from "./indeferido-na-heteroidentificacao";
import ComoFuncionaABanca from "./como-funciona-a-banca-de-heteroidentificacao";
import Lei15142CotasEmConcursos from "./lei-15142-cotas-em-concursos";
import ReprovadoNaHeteroidentificacao from "./reprovado-na-heteroidentificacao";
import BancaDeHeteroidentificacao from "./banca-de-heteroidentificacao";

// Texto de cada artigo publicado, pelo slug de lib/blog.ts.
export const CORPO_DO_ARTIGO: Record<string, ComponentType> = {
    "indeferido-na-heteroidentificacao": IndeferidoNaHeteroidentificacao,
    "como-funciona-a-banca-de-heteroidentificacao": ComoFuncionaABanca,
    "lei-15142-cotas-em-concursos": Lei15142CotasEmConcursos,
};

// Texto dos artigos soltos (/artigos/<slug>), pelo slug de ARTIGOS_SOLTOS.
export const CORPO_DO_ARTIGO_SOLTO: Record<string, ComponentType> = {
    "reprovado-na-heteroidentificacao": ReprovadoNaHeteroidentificacao,
    "banca-de-heteroidentificacao": BancaDeHeteroidentificacao,
};
