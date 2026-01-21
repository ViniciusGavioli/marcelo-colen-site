// ============================================================================
// CONSTANTES DO SITE - Marcelo Colen Advocacia
// Altere os valores abaixo ou use variáveis de ambiente
// ============================================================================

export const SITE_CONFIG = {
  name: "Marcelo Colen",
  fullName: "Marcelo Colen Advocacia",
  tagline: "Defesa Criminal, Compliance e Direitos Humanos",
  description:
    "Advocacia especializada em Direito Penal, programas de Compliance empresarial e defesa de Direitos Humanos. Atuação técnica, ética e comprometida com a justiça. Atendimento em Belo Horizonte e todo o Brasil.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://marcelocolen.adv.br",
  locale: "pt-BR",
  
  // Informações de contato (use ENV em produção)
  contact: {
    email: process.env.NEXT_PUBLIC_EMAIL || "marcelo@cardosocolen.com.br",
    phone: process.env.NEXT_PUBLIC_PHONE || "(31) 99798-0268",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "5531997980268",
  },
  
  // OAB
  oab: process.env.NEXT_PUBLIC_OAB || "OAB/MG 167.463",
  
  // Endereço
  address: {
    street: process.env.NEXT_PUBLIC_ADDRESS_STREET || "Av. Afonso Pena, 1500",
    complement: process.env.NEXT_PUBLIC_ADDRESS_COMPLEMENT || "Sala 1201",
    neighborhood: process.env.NEXT_PUBLIC_ADDRESS_NEIGHBORHOOD || "Funcionários",
    city: process.env.NEXT_PUBLIC_ADDRESS_CITY || "Belo Horizonte",
    state: process.env.NEXT_PUBLIC_ADDRESS_STATE || "MG",
    zip: process.env.NEXT_PUBLIC_ADDRESS_ZIP || "30130-001",
  },
  
  // Redes sociais
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM || "https://instagram.com/marcelocolen.adv",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN || "",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE || "",
  },
} as const;

// Navegação principal
export const NAV_ITEMS = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Atuação", href: "/atuacao" },
  { label: "Conteúdos", href: "/conteudos" },
  { label: "Mídia", href: "/midia" },
  { label: "Publicações", href: "/publicacoes" },
  { label: "Contato", href: "/contato" },
] as const;

// Links do footer
export const FOOTER_LINKS = {
  institucional: [
    { label: "Sobre o Escritório", href: "/sobre" },
    { label: "Áreas de Atuação", href: "/atuacao" },
    { label: "Contato", href: "/contato" },
  ],
  conteudo: [
    { label: "Artigos", href: "/conteudos" },
    { label: "Na Mídia", href: "/midia" },
    { label: "Publicações", href: "/publicacoes" },
  ],
  legal: [
    { label: "Política de Privacidade", href: "/privacidade" },
    { label: "Termos de Uso", href: "/termos" },
  ],
} as const;

// Mensagens padrão
export const DEFAULT_MESSAGES = {
  whatsapp: "Olá! Gostaria de mais informações sobre os serviços jurídicos.",
  formSuccess: "Mensagem enviada com sucesso! Retornaremos em até 24 horas úteis.",
  formError: "Erro ao enviar mensagem. Por favor, tente novamente.",
} as const;

// SEO padrão
export const DEFAULT_SEO = {
  title: `${SITE_CONFIG.name} | Advogado Criminal, Compliance e Direitos Humanos`,
  description: SITE_CONFIG.description,
  keywords: [
    "advogado criminal Belo Horizonte",
    "advogado direito penal BH",
    "defesa criminal Minas Gerais",
    "compliance empresarial",
    "programa de integridade",
    "direitos humanos advogado",
    "discriminação racial advogado",
    "cotas raciais advogado",
    "heteroidentificação",
    "advogado antirracista",
    "habeas corpus BH",
    "defesa penal MG",
  ],
} as const;

// ============================================================================
// PERFIL MARCELO COLEN - Dados da página Sobre
// ============================================================================
export const MARCELO_PROFILE = {
  name: "Marcelo Colen",
  oab: SITE_CONFIG.oab,
  yearsExperience: 10, // Anos de experiência - ajustar conforme realidade
  headline: "Advocacia Criminal, Compliance e Direitos Humanos",
  subheadline: "Defesa técnica e estratégica com compromisso ético. Atuação especializada em Direito Penal, integridade corporativa e combate à discriminação.",
  instagram: "@marcelocolen.adv",
  instagramUrl: "https://instagram.com/marcelocolen.adv",
  
  badges: [
    "Direito Penal",
    "Compliance & Integridade",
    "Direitos Humanos",
    "Combate à Discriminação",
  ],
  
  positioning: [
    "Defesa técnica fundamentada em profundo conhecimento jurídico",
    "Estratégias processuais construídas caso a caso, com rigor e atenção aos detalhes",
    "Compromisso inabalável com os direitos fundamentais e a dignidade humana",
  ],
  
  summary: `Advogado criminalista com sólida formação acadêmica e prática dedicada à defesa de direitos e garantias constitucionais. Minha atuação abrange desde a defesa técnica em processos criminais até a estruturação de programas de compliance e a orientação jurídica em casos de discriminação e violação de direitos fundamentais.

Acredito que a advocacia exige mais do que conhecimento técnico: exige compromisso ético, sensibilidade para compreender cada situação e firmeza para defender os interesses de quem confia em meu trabalho. Atuo com transparência, mantendo meus clientes informados em cada etapa e construindo estratégias jurídicas personalizadas.

Na área de Direitos Humanos, tenho especial dedicação ao combate à discriminação racial, incluindo a defesa de direitos relacionados a políticas afirmativas e processos de heteroidentificação.`,
  
  areas: [
    {
      title: "Direito Criminal",
      description: "Defesa técnica em todas as fases do processo criminal — do inquérito policial aos tribunais superiores. Atuação em habeas corpus, revisão criminal, crimes empresariais, crimes contra a administração pública e tribunal do júri.",
      icon: "scale",
    },
    {
      title: "Compliance & Integridade",
      description: "Desenvolvimento e implementação de programas de integridade adequados à Lei Anticorrupção. Diagnóstico de riscos, elaboração de códigos de conduta, políticas internas, treinamentos e gestão de canais de denúncias.",
      icon: "shield",
    },
    {
      title: "Direitos Humanos e Antidiscriminação",
      description: "Orientação jurídica e representação em casos de discriminação racial, de gênero e outras violações de direitos fundamentais. Atuação especializada em cotas raciais, heteroidentificação e políticas afirmativas.",
      icon: "users",
    },
  ],
  
  credentials: [
    {
      type: "Graduação",
      title: "Bacharel em Direito",
      institution: "Universidade Federal de Minas Gerais (UFMG)",
      year: "",
    },
    {
      type: "Especialização",
      title: "Pós-Graduação em Ciências Penais",
      institution: "Pontifícia Universidade Católica de Minas Gerais (PUC-MG)",
      year: "",
    },
    {
      type: "Formação Complementar",
      title: "Compliance e Integridade Corporativa",
      institution: "Programa de formação especializada",
      year: "",
    },
    {
      type: "Institucional",
      title: "Membro de Comissões da OAB/MG",
      institution: "Ordem dos Advogados do Brasil - Seção Minas Gerais",
      year: "",
    },
  ],
  
  timeline: [
    {
      year: "Formação",
      title: "Fundação Acadêmica Sólida",
      description: "Graduação em Direito com foco em Ciências Criminais, seguida de especialização em Direito Penal e formação em Compliance.",
    },
    {
      year: "Advocacia",
      title: "Início da Atuação Criminal",
      description: "Prática advocatícia dedicada à defesa penal, construindo experiência em casos de diferentes complexidades nos tribunais mineiros.",
    },
    {
      year: "Expansão",
      title: "Compliance e Integridade Empresarial",
      description: "Desenvolvimento de programas de integridade para organizações, unindo a expertise penal à prevenção de riscos corporativos.",
    },
    {
      year: "Compromisso",
      title: "Direitos Humanos e Combate à Discriminação",
      description: "Dedicação crescente à defesa de direitos fundamentais, com atuação especializada em casos de discriminação racial e políticas afirmativas.",
    },
    {
      year: "Institucional",
      title: "Contribuição para a Comunidade Jurídica",
      description: "Participação ativa em comissões da OAB, produção de conteúdo jurídico educativo e palestras sobre temas de especialização.",
    },
  ],
  
  values: [
    {
      title: "Ética Inabalável",
      description: "A ética não é um diferencial, é premissa. Atuo em conformidade absoluta com o Código de Ética da OAB, sem atalhos, sem promessas irrealistas.",
      icon: "badge-check",
    },
    {
      title: "Técnica e Profundidade",
      description: "Cada tese, cada peça processual e cada estratégia é construída com base em estudo aprofundado do caso e da jurisprudência atualizada.",
      icon: "target",
    },
    {
      title: "Transparência Total",
      description: "Você saberá exatamente o que está acontecendo no seu caso. Comunico de forma clara, sem juridiquês, em cada etapa do processo.",
      icon: "heart-handshake",
    },
    {
      title: "Defesa Intransigente de Direitos",
      description: "A defesa de garantias constitucionais não é negociável. Atuo com firmeza para proteger os direitos fundamentais de cada cliente.",
      icon: "scale",
    },
  ],
  
  institutional: {
    title: "Atuação Institucional e Acadêmica",
    items: [
      "Membro efetivo da OAB/MG",
      "Participação em Comissões Temáticas da OAB",
      "Produção de artigos e análises jurídicas",
      "Palestras e participações em eventos acadêmicos",
    ],
  },
  
  content: {
    title: "Conteúdo Jurídico Educativo",
    items: [
      "Conteúdo acessível sobre Direito no Instagram @marcelocolen.adv",
      "Artigos aprofundados sobre temas de especialização",
      "Orientações sobre direitos e garantias fundamentais",
      "Análises de decisões relevantes e mudanças legislativas",
    ],
  },
  
  faq: [
    {
      question: "Como funciona o primeiro contato e a consulta inicial?",
      answer: "O primeiro contato pode ser feito pelo WhatsApp ou formulário do site. Após uma triagem inicial gratuita para entender a natureza da situação, agendamos uma consulta — presencial ou por videoconferência — para análise detalhada do caso. Nessa consulta, apresento as possibilidades jurídicas, os riscos envolvidos e as estratégias recomendadas.",
    },
    {
      question: "Você atende clientes de outros estados?",
      answer: "Sim. Realizo atendimentos por videoconferência com a mesma qualidade do presencial. Para atuação processual em outros estados, conto com uma rede de correspondentes jurídicos de confiança, sempre sob minha supervisão e coordenação estratégica.",
    },
    {
      question: "Quais são suas áreas de especialização?",
      answer: "Minha atuação concentra-se em três pilares: Direito Criminal (defesa em processos penais, habeas corpus, crimes empresariais), Compliance (programas de integridade e adequação à Lei Anticorrupção) e Direitos Humanos (especialmente casos de discriminação racial e questões de cotas/heteroidentificação).",
    },
    {
      question: "Quanto custa uma consulta ou a contratação dos serviços?",
      answer: "Os honorários são definidos após a análise inicial do caso, considerando complexidade, tempo estimado e tipo de demanda. Antes de qualquer contratação, apresento uma proposta clara e transparente. Não trabalho com promessas de resultado — trabalho com compromisso, técnica e dedicação.",
    },
    {
      question: "Como funciona o sigilo profissional?",
      answer: "O sigilo é garantia constitucional da advocacia e levo isso com absoluta seriedade. Todas as informações compartilhadas — pessoalmente, por telefone, WhatsApp ou formulário — são tratadas com confidencialidade total, conforme determina o Código de Ética da OAB.",
    },
    {
      question: "Preciso ter documentos para a primeira consulta?",
      answer: "Não necessariamente. Na primeira consulta, o mais importante é entender sua situação. Caso tenha documentos relevantes (intimações, citações, contratos, decisões), traga-os, mas a ausência deles não impede a análise inicial. Após a consulta, orientarei sobre os documentos necessários.",
    },
  ],
} as const;

// ============================================================================
// ÁREAS DE ATUAÇÃO - Dados das páginas de serviços
// ============================================================================
export const AREAS_DATA = {
  headline: "Áreas de Atuação",
  subheadline: "Atuação especializada em três pilares fundamentais do Direito: defesa criminal rigorosa, integridade corporativa e proteção de direitos fundamentais.",
  
  // Processo de atendimento
  process: [
    {
      step: 1,
      title: "Primeiro Contato",
      description: "Entre em contato pelo WhatsApp ou formulário. Faço uma triagem inicial gratuita para entender sua situação e avaliar a urgência.",
    },
    {
      step: 2,
      title: "Consulta e Análise",
      description: "Agendamos uma consulta detalhada — presencial ou por videoconferência — para analisar documentos, contexto e construir o diagnóstico jurídico.",
    },
    {
      step: 3,
      title: "Estratégia Personalizada",
      description: "Com base na análise, apresento as opções, riscos e a estratégia jurídica recomendada. Você decide com clareza e segurança.",
    },
    {
      step: 4,
      title: "Acompanhamento Contínuo",
      description: "Durante toda a atuação, você recebe atualizações regulares sobre o andamento do caso. Transparência total, do início ao fim.",
    },
  ],
  
  // FAQ geral das áreas
  faq: [
    {
      question: "Os atendimentos podem ser feitos online?",
      answer: "Sim. Realizo consultas por videoconferência com a mesma profundidade e qualidade do atendimento presencial. Isso permite atender clientes de todo o Brasil com agilidade.",
    },
    {
      question: "Vocês atendem presencialmente?",
      answer: "Sim. O atendimento presencial é realizado em Belo Horizonte, mediante agendamento. Para clientes de outras cidades, combinamos formato e local conforme a demanda do caso.",
    },
    {
      question: "Como funciona o sigilo das informações?",
      answer: "O sigilo é inviolável. Todas as informações compartilhadas — seja presencialmente, por telefone, WhatsApp ou formulário — são protegidas pelo sigilo profissional garantido constitucionalmente à advocacia.",
    },
    {
      question: "Qual o prazo para retorno do primeiro contato?",
      answer: "Retorno todos os contatos em até 24 horas úteis. Se sua situação for urgente (prisão, intimação com prazo curto), sinalize isso no primeiro contato para priorização imediata.",
    },
    {
      question: "Preciso ter documentos para o primeiro contato?",
      answer: "Não. Para o primeiro contato, basta descrever a situação. Evite enviar documentos sensíveis antes de conversarmos — após a triagem inicial, orientarei sobre o que será necessário.",
    },
    {
      question: "Como são definidos os honorários?",
      answer: "Após entender seu caso na consulta inicial, apresento uma proposta clara de honorários considerando complexidade, tempo estimado e tipo de atuação. Você recebe tudo por escrito antes de decidir pela contratação.",
    },
    {
      question: "É possível atuar em processos de outros estados?",
      answer: "Sim. Para processos fora de Minas Gerais, atuo em conjunto com advogados correspondentes de confiança, sempre mantendo a coordenação estratégica e o acompanhamento direto do caso.",
    },
    {
      question: "Posso consultar mesmo sem ter documentos completos?",
      answer: "Claro. A consulta inicial serve justamente para entender sua situação e orientar sobre os próximos passos — incluindo quais documentos você precisará providenciar.",
    },
  ],
  
  // Trilhas/Áreas
  tracks: [
    {
      slug: "criminal",
      title: "Direito Criminal",
      shortDescription: "Defesa técnica rigorosa em todas as fases do processo criminal — do inquérito policial aos tribunais superiores.",
      icon: "scale",
      highlights: [
        "Defesa em processos criminais e inquéritos",
        "Habeas corpus e medidas cautelares",
        "Crimes empresariais e contra a administração",
        "Tribunal do Júri e execução penal",
      ],
      hero: {
        title: "Direito Criminal",
        subtitle: "Defesa penal técnica, estratégica e fundamentada em garantias constitucionais",
        description: "Quando sua liberdade ou reputação estão em jogo, você precisa de mais que um advogado — precisa de uma defesa técnica rigorosa, construída com profundidade jurídica e comprometimento absoluto. Atuo em todas as fases do processo criminal, do primeiro interrogatório aos tribunais superiores, sempre com foco na proteção dos seus direitos fundamentais.",
        values: [
          "Defesa técnica construída sobre conhecimento jurídico sólido",
          "Respeito integral às garantias constitucionais do acusado",
          "Comunicação transparente em cada etapa do processo",
        ],
      },
      scope: [
        {
          title: "Defesa em Processos Criminais",
          description: "Atuação completa em ações penais: elaboração de defesas, sustentações orais, recursos e acompanhamento até o trânsito em julgado.",
        },
        {
          title: "Acompanhamento de Inquéritos Policiais",
          description: "Presença em interrogatórios, acesso aos autos, requerimentos defensivos e garantia de que seus direitos sejam respeitados desde a investigação.",
        },
        {
          title: "Habeas Corpus e Liberdade Provisória",
          description: "Medidas urgentes para garantir sua liberdade em casos de prisão ilegal, abusiva ou que não atendam aos requisitos legais.",
        },
        {
          title: "Revisão Criminal",
          description: "Análise de condenações transitadas em julgado quando há novos elementos que demonstrem erro judiciário ou injustiça.",
        },
        {
          title: "Consultoria Criminal Preventiva",
          description: "Orientação para empresários, gestores e profissionais sobre condutas que possam gerar exposição criminal, antes que problemas surjam.",
        },
        {
          title: "Crimes Empresariais e Tributários",
          description: "Defesa especializada em crimes contra a ordem econômica, tributária, crimes falimentares e lavagem de dinheiro.",
        },
        {
          title: "Execução Penal",
          description: "Acompanhamento de benefícios (progressão, livramento condicional, indulto) e defesa de direitos durante o cumprimento de pena.",
        },
        {
          title: "Tribunal do Júri",
          description: "Atuação especializada em crimes dolosos contra a vida, com preparação minuciosa para julgamentos perante o Conselho de Sentença.",
        },
      ],
      whenToSeek: [
        "Recebeu intimação, citação ou notificação de delegacia ou Justiça",
        "Está sendo investigado ou foi indiciado em inquérito policial",
        "Precisa de orientação urgente sobre situação criminal",
        "Busca substituição de advogado em processo já em andamento",
        "Familiar ou conhecido foi preso e precisa de habeas corpus",
        "Quer entender seus direitos antes de prestar depoimento",
      ],
      faq: [
        {
          question: "Recebi uma intimação criminal. O que devo fazer imediatamente?",
          answer: "Não entre em pânico, mas também não ignore. Procure orientação jurídica antes de qualquer comparecimento. Nunca preste depoimento sem a presença de advogado. A intimação precisa ser analisada para entender seus direitos e a melhor estratégia.",
        },
        {
          question: "A polícia pode me prender por qualquer crime?",
          answer: "Não. A prisão preventiva exige requisitos legais específicos: gravidade do crime, risco de fuga, reiteração criminosa ou obstrução do processo. Muitos crimes não admitem prisão preventiva, e mesmo quando admitem, há medidas alternativas que podem ser pleiteadas.",
        },
        {
          question: "O que é habeas corpus e quando posso usar?",
          answer: "Habeas corpus é o remédio constitucional para proteger o direito de ir e vir. Pode ser impetrado quando há prisão ilegal (sem mandado, sem flagrante válido, sem fundamentação) ou quando as condições legais da prisão não estão presentes.",
        },
        {
          question: "Tenho direito a advogado durante o inquérito policial?",
          answer: "Absolutamente. É direito constitucional. O advogado pode acompanhar interrogatórios, ter acesso aos autos do inquérito, orientá-lo sobre o que responder (ou não responder) e atuar para garantir que seus direitos sejam respeitados.",
        },
        {
          question: "É possível responder ao processo em liberdade?",
          answer: "Na maioria dos casos, sim. A prisão preventiva é exceção, não regra. A legislação prevê medidas cautelares diversas (monitoramento, comparecimento periódico, proibição de contato). A estratégia correta pode garantir que você responda ao processo em liberdade.",
        },
        {
          question: "Processos criminais demoram muito?",
          answer: "Varia significativamente. Processos simples podem ser resolvidos em meses; casos complexos podem durar anos. O importante é ter acompanhamento constante e estratégia bem definida em cada fase. Mantenho meus clientes informados sobre cada movimentação.",
        },
      ],
    },
    {
      slug: "compliance",
      title: "Compliance & Integridade",
      shortDescription: "Programas de integridade corporativa que protegem sua empresa de riscos, responsabilizações e danos reputacionais.",
      icon: "shield",
      highlights: [
        "Programas de integridade sob medida",
        "Adequação à Lei Anticorrupção (Lei 12.846/13)",
        "Políticas internas e códigos de conduta",
        "Investigações internas e due diligence",
      ],
      hero: {
        title: "Compliance & Integridade Corporativa",
        subtitle: "Proteção preventiva contra riscos jurídicos, responsabilizações e danos à reputação",
        description: "Um programa de compliance bem estruturado não é custo — é investimento em proteção. Desenvolvo programas de integridade que se adequam à realidade de cada organização, prevenindo riscos antes que se tornem problemas. Da elaboração de códigos de conduta à gestão de canais de denúncias, ajudo empresas a construir uma cultura de integridade que protege sócios, gestores e a organização como um todo.",
        values: [
          "Prevenção é mais eficaz (e mais barata) que defesa",
          "Adequação real à Lei Anticorrupção e normas setoriais",
          "Cultura de integridade que vai além do papel",
        ],
      },
      scope: [
        {
          title: "Diagnóstico de Riscos de Integridade",
          description: "Mapeamento completo dos riscos de corrupção, fraude e não conformidade específicos do seu setor e operação.",
        },
        {
          title: "Programa de Integridade",
          description: "Estruturação de programas de compliance adequados ao porte, setor e realidade da organização — do diagnóstico à implementação.",
        },
        {
          title: "Código de Ética e Conduta",
          description: "Elaboração de códigos de conduta que refletem os valores da empresa e orientam decisões éticas no dia a dia.",
        },
        {
          title: "Políticas Anticorrupção e Internas",
          description: "Desenvolvimento de políticas sobre brindes, hospitalidades, conflitos de interesse, relacionamento com agentes públicos e terceiros.",
        },
        {
          title: "Canal de Denúncias",
          description: "Implementação e gestão de canais de denúncias seguros e confidenciais, com processos de triagem e apuração definidos.",
        },
        {
          title: "Due Diligence de Terceiros",
          description: "Análise de integridade de parceiros comerciais, fornecedores, distribuidores e outros terceiros críticos.",
        },
        {
          title: "Treinamentos e Capacitação",
          description: "Programas de treinamento para colaboradores e lideranças sobre ética, integridade e as políticas da organização.",
        },
        {
          title: "Investigações Internas",
          description: "Condução de apurações internas com metodologia, confidencialidade e conformidade com as melhores práticas.",
        },
      ],
      whenToSeek: [
        "Quer estruturar um programa de compliance do zero",
        "Precisa adequar sua empresa à Lei Anticorrupção",
        "Participa de licitações ou contratos públicos",
        "Quer revisar ou atualizar políticas internas existentes",
        "Precisa implementar ou melhorar um canal de denúncias",
        "Busca due diligence para uma parceria ou aquisição",
      ],
      faq: [
        {
          question: "Compliance é obrigatório para minha empresa?",
          answer: "Não há obrigatoriedade geral, mas a Lei Anticorrupção prevê que empresas com programas de integridade efetivos podem ter atenuação de multas em até 4%. Em contratos públicos e setores regulados (saúde, financeiro), compliance pode ser requisito ou diferencial competitivo.",
        },
        {
          question: "Minha empresa é pequena. Preciso de compliance?",
          answer: "Empresas de qualquer porte podem (e devem) ter práticas de integridade. O programa deve ser proporcional à realidade da organização. Pequenas empresas não precisam de estruturas complexas — precisam de práticas efetivas e adequadas.",
        },
        {
          question: "Quanto tempo leva para implementar um programa?",
          answer: "Programas básicos podem ser estruturados em 2-3 meses. Programas mais robustos, com múltiplas políticas, canal de denúncias e treinamentos, podem levar de 6 meses a 1 ano para implementação completa.",
        },
        {
          question: "Compliance realmente protege a empresa?",
          answer: "Sim, de múltiplas formas: prevenção de irregularidades, atenuação de multas em caso de responsabilização, proteção de sócios e gestores, melhoria da reputação e, em muitos casos, requisito para participar de licitações e parcerias.",
        },
        {
          question: "O que é um canal de denúncias e como funciona?",
          answer: "É um meio seguro para que colaboradores e terceiros reportem irregularidades de forma confidencial ou anônima. A gestão adequada inclui recebimento estruturado, triagem por critérios definidos, apuração imparcial e feedback ao denunciante.",
        },
        {
          question: "Vocês fazem treinamentos presenciais?",
          answer: "Sim. Realizo treinamentos presenciais e online, adaptados ao público (liderança, operacional, comercial) e às necessidades específicas da organização. O formato é definido em conjunto com o cliente.",
        },
      ],
    },
    {
      slug: "direitos-humanos",
      title: "Direitos Humanos e Antidiscriminação",
      shortDescription: "Orientação e atuação em casos de discriminação e violações de direitos fundamentais.",
      icon: "users",
      highlights: [
        "Orientação em casos de discriminação",
        "Medidas cabíveis contra violações",
        "Defesa de direitos fundamentais",
        "Atuação antirracista e inclusiva",
      ],
      hero: {
        title: "Direitos Humanos e Antidiscriminação",
        subtitle: "Defesa de direitos fundamentais e combate à discriminação",
        description: "Atuação comprometida com a defesa de direitos humanos, especialmente em casos de discriminação racial, de gênero e outras violações de direitos fundamentais.",
        values: [
          "Compromisso com a igualdade e dignidade",
          "Combate a todas as formas de discriminação",
          "Atuação técnica e sensível às vulnerabilidades",
        ],
      },
      scope: [
        {
          title: "Discriminação Racial",
          description: "Orientação e medidas em casos de racismo e injúria racial.",
        },
        {
          title: "Discriminação de Gênero",
          description: "Atuação em casos de discriminação baseada em gênero ou orientação sexual.",
        },
        {
          title: "Assédio Moral e Sexual",
          description: "Orientação sobre medidas cabíveis em situações de assédio.",
        },
        {
          title: "Violações em Ambiente de Trabalho",
          description: "Análise de situações discriminatórias no contexto laboral.",
        },
        {
          title: "Crimes de Ódio",
          description: "Representação em casos de crimes motivados por preconceito.",
        },
        {
          title: "Direitos de Grupos Vulnerabilizados",
          description: "Defesa de direitos de populações historicamente marginalizadas.",
        },
        {
          title: "Medidas Protetivas",
          description: "Orientação sobre medidas de proteção em casos de ameaça ou violência.",
        },
        {
          title: "Orientação Preventiva",
          description: "Consultoria para organizações sobre políticas de diversidade e inclusão.",
        },
      ],
      whenToSeek: [
        "Sofreu discriminação racial, de gênero ou outra forma de preconceito",
        "Foi vítima de assédio moral ou sexual",
        "Presenciou ou sofreu violação de direitos fundamentais",
        "Busca orientação sobre medidas cabíveis contra discriminação",
        "Quer entender seus direitos em situação de vulnerabilidade",
        "Organização busca consultoria em diversidade e inclusão",
      ],
      faq: [
        {
          question: "Qual a diferença entre racismo e injúria racial?",
          answer: "Racismo é crime contra a coletividade (ofensa a um grupo), imprescritível e inafiançável. Injúria racial é ofensa à honra de pessoa específica usando elementos raciais. Ambos são graves e têm tratamento penal.",
        },
        {
          question: "O que caracteriza assédio moral?",
          answer: "Assédio moral é a exposição repetida a situações humilhantes, constrangedoras ou degradantes no ambiente de trabalho ou outros contextos. A caracterização depende de análise do caso concreto.",
        },
        {
          question: "É possível denunciar discriminação anonimamente?",
          answer: "Em alguns casos, sim. Dependendo do canal (como ouvidorias ou Ministério Público), é possível fazer denúncias anônimas. Na esfera criminal, a vítima geralmente precisa se identificar para representar.",
        },
        {
          question: "Quais provas são necessárias em caso de discriminação?",
          answer: "Qualquer tipo de prova lícita: mensagens, e-mails, áudios, vídeos, testemunhos. A análise do caso indicará as provas disponíveis e como utilizá-las adequadamente.",
        },
        {
          question: "A empresa pode ser responsabilizada por discriminação?",
          answer: "Sim. Empresas podem responder por atos discriminatórios praticados em seu ambiente, especialmente se houver omissão ou negligência na prevenção e tratamento dessas situações.",
        },
        {
          question: "Casos de discriminação têm prazo para denunciar?",
          answer: "Depende da natureza do caso. Crimes de racismo são imprescritíveis. Outros tipos de discriminação têm prazos específicos conforme a esfera (criminal, cível, trabalhista). Procure orientação rapidamente.",
        },
      ],
    },
    {
      slug: "igualdade-racial",
      title: "Igualdade Racial, Cotas e Heteroidentificação",
      shortDescription: "Orientação jurídica especializada em cotas raciais, processos de heteroidentificação e defesa de direitos em políticas afirmativas.",
      icon: "scale",
      highlights: [
        "Defesa em comissões de heteroidentificação",
        "Recursos contra indeferimentos de cotas raciais",
        "Orientação sobre políticas afirmativas",
        "Atuação em concursos públicos e vestibulares",
      ],
      hero: {
        title: "Igualdade Racial, Cotas e Heteroidentificação",
        subtitle: "Orientação jurídica técnica e sensível em políticas afirmativas",
        description: "Políticas de cotas raciais são instrumentos fundamentais para a promoção da igualdade material no Brasil. Quando você enfrenta um processo de heteroidentificação ou teve sua autodeclaração questionada, precisa de orientação jurídica especializada, fundamentada na legislação vigente e na jurisprudência atualizada. Atuo com conhecimento técnico e sensibilidade para a complexidade dessas situações.",
        values: [
          "Conhecimento profundo da legislação sobre políticas afirmativas",
          "Abordagem técnica respeitando a complexidade das relações raciais",
          "Orientação clara sobre direitos e procedimentos em cada etapa",
        ],
      },
      scope: [
        {
          title: "Orientação Prévia para Autodeclaração",
          description: "Análise e orientação jurídica antes de realizar autodeclaração racial em concursos, vestibulares ou seleções. Esclarecimento sobre critérios legais e jurisprudenciais.",
        },
        {
          title: "Defesa em Comissões de Heteroidentificação",
          description: "Acompanhamento e elaboração de manifestações para procedimentos de verificação complementar da autodeclaração racial.",
        },
        {
          title: "Recursos Administrativos",
          description: "Elaboração de recursos contra decisões que indeferem a autodeclaração, com fundamentação técnica e baseada em critérios legais.",
        },
        {
          title: "Ações Judiciais",
          description: "Quando esgotadas as vias administrativas, atuação judicial para garantir direitos em políticas afirmativas, incluindo medidas urgentes.",
        },
        {
          title: "Orientação sobre Critérios de Heteroidentificação",
          description: "Esclarecimento sobre os parâmetros utilizados pelas comissões e os direitos do candidato durante o procedimento.",
        },
        {
          title: "Consultoria para Instituições",
          description: "Orientação jurídica para instituições públicas e privadas na estruturação de comissões de heteroidentificação conforme a legislação.",
        },
        {
          title: "Análise de Editais",
          description: "Verificação da conformidade de editais com a legislação sobre cotas raciais e identificação de eventuais irregularidades.",
        },
        {
          title: "Defesa contra Acusações de Fraude",
          description: "Atuação técnica em procedimentos que investigam supostas fraudes em autodeclaração racial, garantindo o contraditório e a ampla defesa.",
        },
      ],
      whenToSeek: [
        "Vai participar de concurso ou seleção com cotas raciais e tem dúvidas sobre a autodeclaração",
        "Foi convocado para procedimento de heteroidentificação e precisa de orientação",
        "Teve a autodeclaração indeferida por comissão de verificação",
        "Recebeu notificação de possível exclusão por suposta fraude em cotas",
        "Busca entender os critérios utilizados pelas comissões de heteroidentificação",
        "É gestor e precisa estruturar comissão de verificação conforme a lei",
      ],
      faq: [
        {
          question: "O que é heteroidentificação e por que existe?",
          answer: "Heteroidentificação é o procedimento de verificação complementar à autodeclaração racial, realizado por comissão designada. Existe para assegurar que as vagas destinadas a pessoas negras (pretas e pardas) cumpram sua finalidade de promoção da igualdade racial, conforme previsto em lei.",
        },
        {
          question: "Quais critérios as comissões de heteroidentificação utilizam?",
          answer: "As comissões devem utilizar exclusivamente critérios de fenotipia — isto é, características físicas visíveis socialmente (cor da pele, traços faciais, textura do cabelo). Não podem ser considerados critérios de ancestralidade, origem familiar ou condição socioeconômica.",
        },
        {
          question: "Posso recorrer se minha autodeclaração for indeferida?",
          answer: "Sim. O direito ao recurso é garantido. É possível apresentar recurso administrativo à própria instituição e, se necessário, buscar o Poder Judiciário. A análise de cada caso indicará a estratégia mais adequada.",
        },
        {
          question: "A autodeclaração como pardo garante acesso às cotas raciais?",
          answer: "A autodeclaração como pardo pode permitir concorrer às vagas para negros, mas a confirmação depende da análise fenotípica pela comissão. Pessoas pardas que apresentam características fenotípicas de pessoa negra estão contempladas pela política.",
        },
        {
          question: "O que acontece se for detectada fraude na autodeclaração?",
          answer: "Se caracterizada fraude (declaração falsa com intuito de obter vantagem), pode haver anulação do ato administrativo (eliminação ou exoneração), além de possíveis consequências nas esferas cível e criminal. Por isso a importância de orientação jurídica adequada.",
        },
        {
          question: "Comissões podem pedir documentos sobre ancestralidade?",
          answer: "Não. Documentos sobre ancestralidade (certidões, fotos de familiares, genealogia) não devem ser exigidos, pois o critério é exclusivamente fenotípico. Se forem solicitados, pode haver irregularidade no procedimento.",
        },
        {
          question: "Tenho direito a advogado na entrevista de heteroidentificação?",
          answer: "O candidato pode ser assistido por advogado, embora nem todos os regulamentos prevejam expressamente. É recomendável buscar orientação jurídica prévia para entender o procedimento específico de cada instituição.",
        },
        {
          question: "A decisão da comissão pode ser diferente em instituições diferentes?",
          answer: "Infelizmente, sim. Como a avaliação envolve percepção de fenotipia, pode haver divergências entre comissões de diferentes instituições. Isso reforça a importância de conhecer os critérios e estar preparado para cada procedimento.",
        },
      ],
    },
  ],
} as const;

// ============================================================================
// HELPER: Array das trilhas de atuação para iteração
// ============================================================================
export const AREAS_TRACKS = AREAS_DATA.tracks.map((track) => ({
  slug: track.slug,
  title: track.title,
  shortDescription: track.shortDescription,
  icon: track.icon,
  highlights: track.highlights,
  services: track.scope.map((s) => s.title),
}));
