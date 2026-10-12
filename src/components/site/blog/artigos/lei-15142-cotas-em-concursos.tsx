import { L, Lista, P, RespostaCurta, Secao } from "../prosa";

export default function Lei15142CotasEmConcursos() {
    return (
        <>
            <P>
                Em 3 de junho de 2025, a Lei 15.142 substituiu a Lei 12.990/2014 como base da reserva de vagas em concursos federais.
                A mudança vai além do percentual. Alcança quem pode concorrer, como a autodeclaração é confirmada e o que acontece
                quando ela não se confirma.
            </P>

            <RespostaCurta>
                A Lei 15.142/2025 elevou de 20% para 30% a reserva de vagas nos concursos federais e incluiu indígenas e
                quilombolas. Pelo Decreto 12.536/2025, são 25% para pessoas pretas e pardas, 3% para indígenas e 2% para
                quilombolas. Quem tem a autodeclaração indeferida pode seguir na ampla concorrência, e a eliminação fica restrita a
                casos de fraude ou má-fé.
            </RespostaCurta>

            <Secao id="alcance" titulo="Onde a lei se aplica">
                <P>A reserva vale para (art. 1º):</P>
                <Lista
                    itens={[
                        "concursos para cargos efetivos e empregos públicos da administração federal direta, das autarquias, das fundações públicas, das empresas públicas e das sociedades de economia mista controladas pela União;",
                        "processos seletivos simplificados para contratação temporária (Lei 8.745/1993) nos órgãos da administração federal direta, nas autarquias e nas fundações públicas.",
                    ]}
                />
                <P>
                    O percentual incide sobre todas as vagas do edital e sobre as que surgirem durante a validade do certame (art.
                    1º, § 2º). A reserva se aplica quando houver duas ou mais vagas, e frações iguais ou superiores a 0,5 são
                    arredondadas para cima (art. 5º).
                </P>
                <P>A lei é federal. Concursos de estados e municípios seguem legislação própria.</P>
                <P>
                    Há também regra de transição. Concursos com edital publicado antes da entrada em vigor da lei continuam regidos
                    pela Lei 12.990/2014 (art. 11). O decreto, por sua vez, não se aplica aos editais publicados até 27 de junho de
                    2025, data em que entrou em vigor (arts. 25 e 26).
                </P>
            </Secao>

            <Secao id="percentuais" titulo="Como os 30% se dividem">
                <P>A lei fixa o total e deixa a divisão para o regulamento. O Decreto 12.536/2025 (art. 3º) distribui a reserva assim:</P>
                <Lista
                    itens={[
                        "25% para pessoas pretas e pardas;",
                        "3% para pessoas indígenas;",
                        "2% para pessoas quilombolas.",
                    ]}
                />
                <P>
                    Vagas não preenchidas por um grupo passam aos demais, na ordem prevista no decreto, e só depois retornam à ampla
                    concorrência (art. 3º, §§ 1º a 3º).
                </P>
            </Secao>

            <Secao id="definicoes" titulo="Quem pode concorrer às vagas reservadas">
                <P>
                    Pessoa preta ou parda é quem se autodeclara assim, conforme o quesito cor ou raça do IBGE (art. 2º, I). Indígena é
                    quem se identifica como parte de uma coletividade indígena e é reconhecido por seus membros, viva ou não em
                    território indígena (art. 2º, II). Quilombola é quem pertence a grupo étnico-racial que se autoatribui essa
                    condição, com presunção de ancestralidade preta ou parda (art. 2º, III).
                </P>
            </Secao>

            <Secao id="confirmacao" titulo="A confirmação da autodeclaração">
                <P>
                    A lei manteve a confirmação complementar da autodeclaração de pessoas pretas e pardas, com padronização nacional e
                    participação de especialistas em relações étnico-raciais (art. 3º). Passam por ela todos os optantes habilitados,
                    mesmo com nota para a ampla concorrência (art. 3º, § 1º). O procedimento deve ser reavaliado a cada dois anos
                    (art. 3º, § 3º).
                </P>
                <P>
                    Composição da comissão, critério fenotípico e regra da unanimidade estão no artigo sobre{" "}
                    <L href="/blog/como-funciona-a-banca-de-heteroidentificacao">o funcionamento da banca de heteroidentificação</L>.
                </P>
                <P>
                    Para pessoas indígenas, o decreto prevê verificação documental, feita por comissão composta majoritariamente por
                    indígenas (Decreto 12.536/2025, art. 12).
                </P>
            </Secao>

            <Secao id="indeferimento" titulo="Indeferido não é eliminado">
                <P>
                    A mudança de maior efeito para o candidato está no art. 3º, § 2º: quem tem a autodeclaração indeferida pode
                    prosseguir pela ampla concorrência, desde que tenha nota suficiente em cada fase anterior.
                </P>
                <P>
                    A eliminação passou a depender de apuração própria. Havendo indícios ou denúncias de fraude ou má-fé, o órgão
                    instaura procedimento administrativo, com contraditório e ampla defesa (art. 4º). Confirmada a fraude, o candidato
                    é eliminado ou, se já nomeado, tem a admissão anulada, e o caso segue para o Ministério Público e para a
                    Advocacia-Geral da União (art. 4º, §§ 1º e 2º).
                </P>
                <P>
                    Os caminhos de recurso estão no artigo sobre{" "}
                    <L href="/blog/indeferido-na-heteroidentificacao">o que fazer depois do indeferimento</L>.
                </P>
            </Secao>

            <Secao id="revisao" titulo="Prazo de revisão">
                <P>O Poder Executivo federal deve revisar o programa em dez anos, contados da entrada em vigor da lei (art. 12).</P>
            </Secao>

            <Secao id="conclusao" titulo="O ponto central">
                <P>
                    A Lei 15.142/2025 ampliou a reserva, incluiu novos grupos e separou duas situações: a autodeclaração não
                    confirmada, que leva à ampla concorrência, e a fraude, que leva à eliminação. Para o candidato, a leitura do
                    edital à luz da lei e do decreto é o ponto de partida de qualquer decisão.
                </P>
            </Secao>
        </>
    );
}
