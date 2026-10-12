import { L, Lista, P, RespostaCurta, Secao } from "../prosa";

export default function IndeferidoNaHeteroidentificacao() {
    return (
        <>
            <P>
                O resultado sai e a autodeclaração não foi confirmada. Depois de meses de preparação e da aprovação nas provas, a
                reprovação vem de uma etapa que não avaliou conhecimento. Avaliou fenótipo.
            </P>
            <P>
                A pergunta correta não é apenas se a banca errou. É se a decisão pode ser revista, por qual caminho e em que prazo.
                As respostas a seguir tratam dos concursos federais regidos pela Lei 15.142/2025. Concursos estaduais, municipais e
                processos seletivos de universidades seguem normas próprias, e o edital de cada certame define os detalhes.
            </P>

            <RespostaCurta>
                O primeiro passo é o recurso à comissão recursal, no prazo do edital. Nos concursos federais, quem tem a
                autodeclaração indeferida pode seguir na ampla concorrência, se tiver nota suficiente. Se a decisão final violar a
                lei ou o edital, cabe medida judicial, como o mandado de segurança, que deve ser impetrado em até 120 dias.
            </RespostaCurta>

            <Secao id="prazo" titulo="O prazo do recurso é curto">
                <P>
                    O edital fixa o prazo do recurso administrativo, normalmente de poucos dias a partir da divulgação do resultado.
                    Depois dele, a via administrativa se encerra.
                </P>
                <P>
                    Por isso, a primeira providência é localizar no edital, e em suas retificações, a regra do recurso: prazo, forma
                    de envio e documentos admitidos.
                </P>
            </Secao>

            <Secao id="parecer" titulo="Peça o parecer e a gravação">
                <P>
                    A comissão decide por maioria e emite parecer sobre a autodeclaração do candidato (Decreto 12.536/2025, art. 10).
                    É esse parecer que o recurso precisa enfrentar. Decisão sem fundamentação, ou com fundamentação genérica, está
                    entre os pontos mais questionados.
                </P>
                <P>
                    Quando o edital prevê a gravação do procedimento, convém solicitar acesso a ela. A gravação mostra como a
                    avaliação foi conduzida e serve de prova em eventual medida judicial.
                </P>
            </Secao>

            <Secao id="recurso" titulo="O que o recurso pode questionar">
                <P>
                    O recurso é julgado por uma comissão recursal, que aplica o mesmo critério e tem três membros diferentes dos que
                    participaram da primeira avaliação (Decreto 12.536/2025, art. 11). Os pontos que costumam ser examinados são:
                </P>
                <Lista
                    itens={[
                        <>
                            <strong>Fundamentação:</strong> se o parecer explica por que a autodeclaração não foi confirmada.
                        </>,
                        <>
                            <strong>Critério:</strong> se a avaliação se limitou ao fenótipo do candidato no momento do procedimento,
                            como exige o art. 9º do decreto.
                        </>,
                        <>
                            <strong>Composição:</strong> se a comissão tinha cinco membros e a diversidade de gênero e de cor exigida
                            pelo art. 8º.
                        </>,
                        <>
                            <strong>Unanimidade:</strong> se a decisão contrária foi tomada por maioria, e não por todos os membros.
                        </>,
                        <>
                            <strong>Edital:</strong> se a convocação e a condução do procedimento seguiram as regras publicadas.
                        </>,
                    ]}
                />
                <P>
                    A unanimidade tem efeito direto. Pelo art. 11, § 3º, do decreto, a autodeclaração prevalece quando a decisão
                    desfavorável não for unânime na comissão de confirmação e também na comissão recursal. O decreto trata essa
                    divergência como dúvida razoável sobre o fenótipo (art. 5º, § 1º).
                </P>
                <P>
                    Há também provas sem efeito. O art. 9º, § 2º, veda prova baseada em ancestralidade e laudos médicos,
                    dermatológicos, genéticos ou antropológicos. Certidão dos pais, fotos de família e exame de DNA não entram na
                    avaliação. O recurso deve se concentrar no fenótipo e na legalidade do procedimento.
                </P>
                <P>
                    As regras de composição, critério e decisão estão detalhadas no artigo sobre{" "}
                    <L href="/blog/como-funciona-a-banca-de-heteroidentificacao">o funcionamento da banca de heteroidentificação</L>.
                </P>
            </Secao>

            <Secao id="ampla-concorrencia" titulo="Indeferimento não significa eliminação">
                <P>
                    Nos concursos federais regidos pela Lei 15.142/2025, a pessoa cuja autodeclaração foi indeferida pode prosseguir
                    pela ampla concorrência, desde que tenha nota suficiente em cada fase anterior (art. 3º, § 2º).
                </P>
                <P>
                    A lei trata as duas situações de forma separada. O indeferimento leva à ampla concorrência. A eliminação depende
                    da apuração de fraude ou má-fé, em procedimento administrativo próprio, com contraditório e ampla defesa (art. 4º).
                </P>
                <P>
                    Concursos com edital publicado antes da entrada em vigor da lei continuam regidos pela Lei 12.990/2014 (art. 11),
                    que tinha regras diferentes. Nesses casos, o edital é o ponto de partida. As demais mudanças estão no artigo sobre{" "}
                    <L href="/blog/lei-15142-cotas-em-concursos">a Lei 15.142/2025</L>.
                </P>
            </Secao>

            <Secao id="via-judicial" titulo="Quando a via judicial entra">
                <P>
                    Mantido o indeferimento, a decisão pode ser levada ao Judiciário. No julgamento da ADC 41, o Supremo Tribunal
                    Federal reconheceu a legitimidade da heteroidentificação, desde que respeitadas a dignidade da pessoa humana e as
                    garantias do contraditório e da ampla defesa. É nesse limite que a decisão da banca pode ser questionada.
                </P>
                <P>
                    Em regra, o Judiciário não substitui a avaliação da comissão pela sua própria. O que se examina é a legalidade:
                    fundamentação, critério, composição da comissão e respeito ao edital. Daí o peso do parecer e da gravação.
                </P>
                <P>
                    O mandado de segurança é cabível quando a ilegalidade pode ser demonstrada por documentos, sem necessidade de
                    outras provas. O prazo para impetrá-lo é de 120 dias, contados da ciência do ato (Lei 12.016/2009, art. 23).
                    Quando a discussão depende de prova a ser produzida no processo, a medida adequada pode ser uma ação pelo
                    procedimento comum. A escolha
                    depende do caso.
                </P>
                <P>
                    Nos dois caminhos, é possível pedir tutela de urgência para que o candidato siga no certame enquanto o processo é
                    julgado. A concessão depende da demonstração do direito e do risco de dano.
                </P>
            </Secao>

            <Secao id="documentos" titulo="O que reunir desde já">
                <Lista
                    itens={[
                        "O edital e todas as retificações.",
                        "A convocação para o procedimento de heteroidentificação.",
                        "O resultado e o parecer da comissão.",
                        "A gravação do procedimento, quando houver.",
                        "O recurso apresentado e a decisão da comissão recursal.",
                        "As notas das demais fases.",
                    ]}
                />
            </Secao>

            <Secao id="conclusao" titulo="O ponto central">
                <P>
                    O problema nem sempre está no resultado. Pode estar no caminho usado para chegar até ele. Decisão sem
                    fundamentação, critério diverso do fenotípico ou procedimento fora do edital podem ser questionados, primeiro na
                    própria administração e, depois, no Judiciário.
                </P>
                <P>Cada caso exige leitura do edital, do parecer e da gravação. E os prazos correm desde a divulgação do resultado.</P>
            </Secao>
        </>
    );
}
