import { SITE_COLORS as C } from "@/lib/site-theme";
import { L, Lista, P, Secao } from "../prosa";

// Texto do Word "Artigo 1 - Reprovado na heteroidentificacao.docx", sem
// alteração. Os negritos são os do original.
function N({ children }: { children: React.ReactNode }) {
    return (
        <strong className="font-semibold" style={{ color: C.white }}>
            {children}
        </strong>
    );
}

export default function ReprovadoNaHeteroidentificacao() {
    return (
        <>
            <P>
                Receber um resultado negativo na banca de heteroidentificação pode causar surpresa, insegurança e muitas dúvidas.
                Antes de escrever um recurso, é importante entender{" "}
                <N>qual foi o motivo informado, qual regra foi aplicada e até quando é possível responder</N>.
            </P>
            <P>
                Concursos públicos e seleções universitárias podem seguir normas diferentes. Por isso, copiar um modelo encontrado
                na internet, sem ler o edital e a decisão da banca, pode deixar de fora justamente o ponto mais importante do seu
                caso.
            </P>

            <Secao id="prazo-e-canal" titulo="1. Confira o prazo e o canal correto">
                <P>Abra o edital, a convocação para a banca e a publicação do resultado. Procure quatro informações:</P>
                <Lista
                    itens={[
                        "a data de início do prazo;",
                        "o último dia e o horário para apresentar o recurso;",
                        "a forma de contagem;",
                        "o sistema, formulário ou endereço indicado para envio.",
                    ]}
                />
                <P>
                    <N>Não existe um prazo único que possa ser aplicado a todas as bancas.</N> As regras devem ser verificadas no
                    procedimento específico.
                </P>
                <P>
                    Anote o prazo e evite deixar o protocolo para os últimos minutos. Guarde o comprovante de envio, com data e
                    horário.
                </P>
            </Secao>

            <Secao id="motivo-do-indeferimento" titulo="2. Entenda o motivo do indeferimento">
                <P>
                    “Autodeclaração não confirmada”, “ausência na convocação” e “documentação incompleta” não descrevem
                    necessariamente o mesmo problema.
                </P>
                <P>
                    Verifique se o resultado foi acompanhado de parecer ou justificativa. Se houver um canal próprio, solicite acesso
                    aos registros que possam esclarecer a avaliação, como o parecer e a gravação, observadas as regras do
                    procedimento.
                </P>
                <P>
                    <N>Não presuma que pedir acesso aos documentos suspende o prazo do recurso.</N> Confira essa questão nas normas
                    aplicáveis. Se a informação não estiver disponível, registre o pedido e a dificuldade encontrada.
                </P>
                <P>
                    O STF reconhece a legitimidade da heteroidentificação, com respeito à dignidade da pessoa candidata e às
                    garantias de contraditório e ampla defesa. Isso inclui a possibilidade de questionar a decisão.{" "}
                    <L href="https://noticias.stf.jus.br/postsnoticias/decisao-de-banca-de-heteroidentificacao-de-cota-racial-pode-ser-discutida-na-justica-diz-stf/">
                        Entenda o posicionamento do STF
                    </L>
                    .
                </P>
            </Secao>

            <Secao id="documentos-do-procedimento" titulo="3. Organize os documentos do procedimento">
                <P>Uma pasta simples ajuda a compreender o que aconteceu. Reúna:</P>
                <Lista
                    itens={[
                        "edital e alterações;",
                        "comprovante de inscrição e modalidade escolhida;",
                        "convocação para a heteroidentificação;",
                        "resultado e parecer disponíveis;",
                        "mensagens trocadas com a organização;",
                        "protocolos de pedidos de acesso ou esclarecimento;",
                        "registros de problemas técnicos, se houver.",
                    ]}
                />
                <P>
                    Esses documentos ajudam a reconstruir o procedimento. Isso é diferente de afirmar que qualquer fotografia,
                    certidão ou laudo será aceito para confirmar a autodeclaração:{" "}
                    <N>a utilização de cada material depende das regras aplicáveis</N>.
                </P>
                <P>
                    Se o problema ocorreu em uma etapa remota, descreva com precisão o que houve, como interrupção da conexão, falha
                    de áudio ou dificuldade de acesso. Guarde os registros disponíveis.
                </P>
            </Secao>

            <Secao id="recurso-responde-ao-caso" titulo="4. O recurso precisa responder ao seu caso">
                <P>
                    Um recurso deve dialogar com a decisão recebida. Se a controvérsia envolve o procedimento, é importante indicar
                    qual regra não teria sido observada e como isso afetou a avaliação. Se envolve o critério utilizado, é necessário
                    examinar o parecer e a regulamentação correspondente.
                </P>
                <P>
                    Frases genéricas e reprodução de decisões sobre situações diferentes podem dificultar a compreensão do pedido.
                    Também não é correto presumir fraude apenas porque a banca não confirmou a autodeclaração: uma divergência na
                    avaliação não é automaticamente uma declaração falsa.
                </P>
            </Secao>

            <Secao id="recurso-negado" titulo="5. E se o recurso for negado?">
                <P>
                    Uma decisão administrativa desfavorável pode justificar uma avaliação jurídica sobre a regularidade do
                    procedimento. Isso não significa que toda reprovação será revertida ou que a mesma medida judicial seja adequada
                    para todos.
                </P>
                <P>
                    O exame deve considerar o edital, os fundamentos da decisão, os documentos disponíveis e os prazos. Uma análise
                    individualizada pode ajudar a esclarecer as alternativas, enquanto você continua acompanhando as comunicações
                    oficiais.
                </P>
            </Secao>
        </>
    );
}
