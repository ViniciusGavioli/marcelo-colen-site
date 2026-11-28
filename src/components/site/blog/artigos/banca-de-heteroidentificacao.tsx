import { SITE_COLORS as C } from "@/lib/site-theme";
import { L, Lista, P, Secao } from "../prosa";

// Texto do Word "Artigo_2_Banca_de_heteroidentificacao.docx". Única alteração:
// a frase sobre a Lei 15.142 e editais anteriores (art. 11), exigida pela
// revisão de conformidade de 24/11/2026. Os negritos são os do original.
function N({ children }: { children: React.ReactNode }) {
    return (
        <strong className="font-semibold" style={{ color: C.white }}>
            {children}
        </strong>
    );
}

export default function BancaDeHeteroidentificacao() {
    return (
        <>
            <P>
                A banca de heteroidentificação é uma comissão que realiza a avaliação complementar da autodeclaração racial em
                determinados processos seletivos. Ela aparece, por exemplo, em concursos públicos e no ingresso em instituições de
                ensino, para verificar o enquadramento nas vagas reservadas a pessoas pretas e pardas.
            </P>
            <P>
                A <N>autodeclaração</N> é feita pela própria pessoa candidata. A <N>heteroidentificação</N> acrescenta uma avaliação
                por terceiros, conforme as regras da seleção. Não se trata de uma prova de conhecimentos ou de uma entrevista de
                emprego.
            </P>
            <P>
                Conhecer essa diferença ajuda a se preparar com mais tranquilidade e a evitar informações equivocadas que circulam
                nas redes sociais.
            </P>

            <Secao id="por-que-existe" titulo="Por que existe uma banca de heteroidentificação?">
                <P>
                    A finalidade do procedimento é contribuir para que as vagas reservadas alcancem o público da política de ação
                    afirmativa. Sua realização deve respeitar a dignidade da pessoa candidata e as garantias de defesa.
                </P>
                <P>
                    O STF reconheceu a possibilidade de utilizar a heteroidentificação como procedimento complementar à
                    autodeclaração. Isso não autoriza uma atuação arbitrária: a validade da avaliação depende também da observância
                    das garantias aplicáveis.{" "}
                    <L href="https://noticias.stf.jus.br/postsnoticias/decisao-de-banca-de-heteroidentificacao-de-cota-racial-pode-ser-discutida-na-justica-diz-stf/">
                        Veja o entendimento do STF
                    </L>
                    .
                </P>
                <P>
                    A existência da comissão não torna qualquer decisão automaticamente correta. Da mesma forma, um resultado
                    desfavorável não demonstra, sozinho, que houve irregularidade.
                </P>
            </Secao>

            <Secao id="o-que-a-banca-avalia" titulo="O que a banca avalia?">
                <P>
                    Nos procedimentos voltados à confirmação da autodeclaração de pessoas pretas e pardas, a avaliação costuma estar
                    centrada no <N>fenótipo</N>, isto é, nas características físicas visíveis relacionadas à percepção racial.
                </P>
                <P>
                    Nas seleções federais abrangidas pela regulamentação de 2025, esse critério é expressamente previsto. Não se trata
                    de investigar uma porcentagem de ancestralidade africana ou de aplicar um teste genético.{" "}
                    <L href="https://legis.senado.leg.br/norma/41089273/publicacao/41089766">Consulte o Decreto n. 12.536/2025</L>.
                </P>
                <P>
                    Também é importante evitar “checklists de aprovação” baseados em um traço isolado. Comparações de fotografias na
                    internet não substituem o procedimento, não permitem prever seu resultado e podem ignorar diferenças de
                    iluminação, enquadramento e contexto.
                </P>
                <P>O foco deve estar em compreender os critérios adotados, não em tentar produzir uma aparência para a avaliação.</P>
            </Secao>

            <Secao id="como-acontece" titulo="Como o procedimento acontece na prática?">
                <P>
                    O formato precisa ser conferido na convocação. Pode haver avaliação presencial ou remota, conforme a norma e o
                    edital.
                </P>
                <P>Antes da data, confira:</P>
                <Lista
                    itens={[
                        "local ou plataforma de acesso;",
                        "horário e eventual antecedência exigida;",
                        "documento de identificação;",
                        "formulário de autodeclaração;",
                        "orientações sobre imagem, gravação e apresentação;",
                        "possibilidade de solicitar acessibilidade ou adaptação.",
                    ]}
                />
                <P>
                    Algumas seleções preveem registro audiovisual e apresentação de informações padronizadas. Isso não significa que
                    todas utilizem o mesmo roteiro.
                </P>
                <P>
                    Se a etapa for remota, teste conexão, câmera e áudio. Observe as condições exigidas pela organização, sem filtros
                    ou edição que alterem sua aparência. Se surgir uma falha, procure o canal oficial e registre a ocorrência.
                </P>
            </Secao>

            <Secao id="concurso-e-universidade" titulo="Concurso público e universidade seguem as mesmas regras?">
                <P>
                    <N>Não necessariamente.</N>
                </P>
                <P>
                    Na esfera federal, a Lei n. 15.142/2025 disciplina a reserva de vagas nos concursos e seleções abrangidos por ela.
                    Concursos com edital publicado antes da lei continuam regidos pela Lei n. 12.990/2014. Concursos estaduais e
                    municipais também podem ter legislação própria.{" "}
                    <L href="https://legis.senado.leg.br/norma/40947829">Leia a Lei n. 15.142/2025</L>.
                </P>
                <P>
                    No ensino superior federal, a reserva de vagas segue a Lei n. 12.711/2012 e suas alterações, além das regras
                    institucionais. A modalidade escolhida pode reunir requisitos raciais, de trajetória escolar e de renda. São
                    verificações diferentes, ainda que façam parte da mesma seleção.
                </P>
                <P>Por isso, a experiência de outra pessoa em uma banca não substitui a leitura das regras da sua seleção.</P>
            </Secao>

            <Secao id="recorrer-do-resultado" titulo="É possível recorrer do resultado?">
                <P>
                    A possibilidade de contestar uma decisão desfavorável integra as garantias do procedimento. O caminho concreto, o
                    prazo e a comissão responsável devem ser verificados no edital e na regulamentação aplicável.
                </P>
                <P>
                    Ao receber o resultado, leia a justificativa e acompanhe os canais oficiais. Saber onde consultar a decisão, quais
                    documentos guardar e como exercer seus direitos faz parte de uma preparação responsável.
                </P>
            </Secao>
        </>
    );
}
