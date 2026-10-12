import { L, Lista, P, RespostaCurta, Secao } from "../prosa";

export default function ComoFuncionaABanca() {
    return (
        <>
            <P>
                Quem concorre às vagas reservadas a pessoas pretas e pardas passa por uma etapa que não mede conhecimento. A banca de
                heteroidentificação, que a norma chama de comissão de confirmação complementar à autodeclaração, afere a
                condição declarada pelo candidato.
            </P>
            <P>
                Nos concursos federais, as regras estão na Lei 15.142/2025 e no Decreto 12.536/2025. Conhecê-las antes do procedimento
                permite identificar, depois, se a avaliação foi conduzida como a norma exige.
            </P>

            <RespostaCurta>
                A banca é uma comissão de cinco membros que avalia exclusivamente o fenótipo do candidato no momento do procedimento.
                Ela decide por maioria e emite parecer. Da decisão cabe recurso a uma comissão recursal de três membros. Se as duas
                comissões decidirem contra o candidato sem unanimidade, prevalece a autodeclaração.
            </RespostaCurta>

            <Secao id="quem-passa" titulo="Quem passa pela banca">
                <P>
                    Passam pela banca todas as pessoas habilitadas que optaram pelas vagas reservadas a pessoas pretas e pardas, mesmo que tenham nota
                    suficiente para a ampla concorrência (Lei 15.142/2025, art. 3º, § 1º, e Decreto 12.536/2025, art. 7º). São
                    convocados os optantes classificados na fase imediatamente anterior (Decreto 12.536/2025, art. 6º).
                </P>
            </Secao>

            <Secao id="comissao" titulo="Quem compõe a comissão">
                <P>
                    A comissão é criada especificamente para o procedimento e tem cinco membros titulares, com igual número de
                    suplentes (Decreto 12.536/2025, art. 8º). Seus integrantes devem:
                </P>
                <Lista
                    itens={[
                        "ter reputação ilibada;",
                        "residir no País;",
                        "ter participado de oficina ou curso sobre promoção da igualdade étnico-racial e enfrentamento do racismo;",
                        "preferencialmente, ter experiência na temática.",
                    ]}
                />
                <P>
                    A composição deve garantir diversidade de gênero, de cor e, sempre que possível, de origem regional (art. 8º, §
                    4º). A lei acrescenta a participação de especialistas em relações étnico-raciais (Lei 15.142/2025, art. 3º, II).
                </P>
            </Secao>

            <Secao id="criterio" titulo="O critério é o fenótipo, no momento da avaliação">
                <P>
                    A comissão adota exclusivamente o critério fenotípico (Decreto 12.536/2025, art. 9º). Fenótipo é o conjunto de
                    características físicas visíveis, como cor da pele, textura do cabelo e traços faciais, pelas quais uma pessoa é
                    socialmente reconhecida como preta ou parda.
                </P>
                <P>
                    Contam as características do candidato no momento do procedimento (art. 9º, § 1º). Não importa como ele era na
                    infância, nem como são seus pais.
                </P>
                <P>
                    Por isso, o § 2º do mesmo artigo veda, em qualquer hipótese, prova baseada em ancestralidade e laudos médicos,
                    dermatológicos, genéticos ou antropológicos. Na prática, certidões, fotos de família e exames de DNA não servem
                    para confirmar nem para afastar a autodeclaração.
                </P>
            </Secao>

            <Secao id="decisao" titulo="Como a comissão decide">
                <P>
                    A decisão é tomada por maioria e registrada em parecer sobre a atribuição identitária declarada pelo candidato
                    (art. 10). O parecer é o documento a ser examinado e, se for o caso, contestado.
                </P>
                <P>
                    A autodeclaração tem presunção relativa de veracidade, que prevalece em caso de dúvida razoável sobre o fenótipo
                    (art. 5º, § 1º). O próprio decreto liga essa dúvida à regra da unanimidade, tratada a seguir.
                </P>
            </Secao>

            <Secao id="recurso" titulo="O recurso e a regra da unanimidade">
                <P>
                    Os editais devem prever uma comissão recursal, com três membros diferentes dos que integraram a primeira
                    comissão. Ela segue as mesmas regras de critério e de decisão (art. 11, §§ 1º e 2º).
                </P>
                <P>
                    O art. 11, § 3º, traz a regra de maior efeito prático: a autodeclaração prevalece quando a decisão desfavorável ao
                    candidato não for unânime, cumulativamente, na comissão de confirmação e na comissão recursal.
                </P>
                <P>
                    Ou seja: se a primeira comissão indeferiu por quatro votos a um e a recursal manteve o indeferimento por dois votos
                    a um, prevalece a autodeclaração. Se qualquer das duas decidiu por unanimidade, a regra não se aplica.
                </P>
            </Secao>

            <Secao id="edital" titulo="O que fica a cargo do edital">
                <P>
                    O decreto não esgota o procedimento. Os editais devem explicitar as medidas adotadas (art. 5º, § 2º), e um ato da
                    Ministra de Estado da Gestão e da Inovação em Serviços Públicos complementa as regras (art. 5º, caput). Formato
                    presencial ou telepresencial, gravação, prazos de recurso e consequências da ausência são pontos a conferir no
                    edital.
                </P>
                <P>
                    Concursos estaduais e municipais, e processos seletivos de universidades, seguem normas próprias. O raciocínio é
                    parecido, mas os detalhes mudam de um certame para outro.
                </P>
            </Secao>

            <Secao id="stf" titulo="O que o Supremo já decidiu">
                <P>
                    No julgamento da ADC 41, em 2017, o Supremo Tribunal Federal declarou constitucional a reserva de vagas em
                    concursos federais e reconheceu como legítima a heteroidentificação complementar à autodeclaração, desde que
                    respeitadas a dignidade da pessoa humana e as garantias do contraditório e da ampla defesa.
                </P>
                <P>
                    Essas garantias são o parâmetro para avaliar cada procedimento. Quando o candidato considera que a banca errou, o
                    caminho começa pelo recurso, tema do artigo sobre{" "}
                    <L href="/blog/indeferido-na-heteroidentificacao">o que fazer depois do indeferimento</L>.
                </P>
            </Secao>

            <Secao id="conclusao" titulo="O ponto central">
                <P>
                    A banca não avalia documentos, histórico familiar ou laudos. Avalia o fenótipo, no momento do procedimento, com
                    decisão fundamentada e direito a recurso. Conhecer essas regras é o que permite identificar quando uma decisão se
                    afastou delas.
                </P>
            </Secao>
        </>
    );
}
