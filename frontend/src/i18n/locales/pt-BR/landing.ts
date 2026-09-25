export default {
  batchImageGuide: {
    title: 'Geração de imagens em lote',
    description: 'Envie vários prompts em uma única tarefa e baixe as imagens geradas ao concluir'
  },
  // Home Page
  home: {
    viewOnGithub: 'Ver no GitHub',
    viewDocs: 'Ver documentação',
    docs: 'Docs',
    switchToLight: 'Alternar para o modo claro',
    switchToDark: 'Alternar para o modo escuro',
    dashboard: 'Painel',
    login: 'Entrar',
    getStarted: 'Começar agora',
    goToDashboard: 'Ir para o painel',
    // User-focused value proposition
    heroSubtitle: 'Uma chave, todos os modelos de IA',
    heroDescription: 'Sem precisar gerenciar várias assinaturas. Acesse Claude, GPT, Gemini e mais com uma única chave de API',
    tags: {
      subscriptionToApi: 'Assinatura em API',
      stickySession: 'Persistência de sessão',
      realtimeBilling: 'Pague pelo uso'
    },
    // Pain points section
    painPoints: {
      title: 'Soa familiar?',
      items: {
        expensive: {
          title: 'Custos altos de assinatura',
          desc: 'Pagar por várias assinaturas de IA que se acumulam todo mês'
        },
        complex: {
          title: 'Caos de contas',
          desc: 'Gerenciar contas e chaves de API espalhadas por diferentes plataformas'
        },
        unstable: {
          title: 'Interrupções de serviço',
          desc: 'Contas únicas atingindo limites de taxa e interrompendo seu fluxo de trabalho'
        },
        noControl: {
          title: 'Sem controle de uso',
          desc: 'Não é possível rastrear para onde vai o seu dinheiro nem limitar o uso dos membros da equipe'
        }
      }
    },
    // Solutions section
    solutions: {
      title: 'Nós resolvemos esses problemas',
      subtitle: 'Três passos simples para um acesso à IA sem preocupações'
    },
    features: {
      unifiedGateway: 'Acesso em um clique',
      unifiedGatewayDesc: 'Obtenha uma única chave de API para chamar todos os modelos de IA conectados. Sem necessidade de aplicações separadas.',
      multiAccount: 'Sempre confiável',
      multiAccountDesc: 'Roteamento inteligente entre várias contas upstream com failover automático. Diga adeus aos erros.',
      balanceQuota: 'Pague pelo que você usa',
      balanceQuotaDesc: 'Cobrança baseada no uso com limites de cota. Visibilidade total do consumo da equipe.'
    },
    // Comparison section
    comparison: {
      title: 'Por que nos escolher?',
      headers: {
        feature: 'Comparativo',
        official: 'Assinaturas oficiais',
        us: 'Nossa plataforma'
      },
      items: {
        pricing: {
          feature: 'Preço',
          official: 'Mensalidade fixa, pague mesmo sem usar',
          us: 'Pague apenas pelo que usar'
        },
        models: {
          feature: 'Seleção de modelos',
          official: 'Apenas um provedor',
          us: 'Alterne entre modelos livremente'
        },
        management: {
          feature: 'Gerenciamento de contas',
          official: 'Gerencie cada serviço separadamente',
          us: 'Chave unificada, um só painel'
        },
        stability: {
          feature: 'Estabilidade',
          official: 'Limites de taxa de conta única',
          us: 'Pool de várias contas, failover automático'
        },
        control: {
          feature: 'Controle de uso',
          official: 'Não disponível',
          us: 'Cotas e análises detalhadas'
        }
      }
    },
    providers: {
      title: 'Modelos de IA suportados',
      description: 'Uma API, várias opções',
      supported: 'Suportado',
      soon: 'Em breve',
      claude: 'Claude',
      gemini: 'Gemini',
      antigravity: 'Antigravity',
      more: 'Mais'
    },
    // CTA section
    cta: {
      title: 'Pronto para começar?',
      description: 'Crie sua conta agora e ganhe créditos de teste gratuitos para experimentar um acesso à IA sem complicações',
      button: 'Criar conta grátis'
    },
    footer: {
      allRightsReserved: 'Todos os direitos reservados.'
    }
  },

  // Key Usage Query Page
  keyUsage: {
    title: 'Uso da chave de API',
    subtitle: 'Insira sua chave de API para ver gastos e status de uso em tempo real',
    placeholder: 'sk-ant-mirror-xxxxxxxxxxxx',
    query: 'Consultar',
    querying: 'Consultando...',
    privacyNote: 'Sua chave é processada localmente no navegador e não será armazenada',
    dateRange: 'Intervalo de datas:',
    dateRangeToday: 'Hoje',
    dateRange7d: '7 dias',
    dateRange30d: '30 dias',
    dateRange90d: '90 dias',
    dateRangeCustom: 'Personalizado',
    apply: 'Aplicar',
    used: 'Usado',
    detailInfo: 'Informações detalhadas',
    tokenStats: 'Estatísticas de tokens',
    dailyDetail: 'Detalhes diários',
    modelStats: 'Estatísticas de uso por modelo',
    // Table headers
    date: 'Data',
    model: 'Modelo',
    requests: 'Requisições',
    inputTokens: 'Tokens de entrada',
    outputTokens: 'Tokens de saída',
    cacheCreationTokens: 'Criação de cache',
    cacheReadTokens: 'Leitura de cache',
    cacheWriteTokens: 'Gravação de cache',
    totalTokens: 'Total de tokens',
    cost: 'Custo',
    // Status
    quotaMode: 'Modo de cota da chave',
    walletBalance: 'Saldo da carteira',
    // Ring card titles
    totalQuota: 'Cota total',
    limit5h: 'Limite de 5 horas',
    limitDaily: 'Limite diário',
    limit7d: 'Limite de 7 dias',
    limitWeekly: 'Limite semanal',
    limitMonthly: 'Limite mensal',
    // Detail rows
    remainingQuota: 'Cota restante',
    expiresAt: 'Expira em',
    todayExpires: '(expira hoje)',
    daysLeft: '({days} dias)',
    usedQuota: 'Cota usada',
    resetNow: 'Será redefinida em breve',
    subscriptionType: 'Tipo de assinatura',
    billingType: 'Tipo de cobrança',
    subscriptionExpires: 'A assinatura expira',
    // Usage stat cells
    todayRequests: 'Requisições de hoje',
    todayInputTokens: 'Entrada de hoje',
    todayOutputTokens: 'Saída de hoje',
    todayTokens: 'Tokens de hoje',
    todayCacheCreation: 'Criação de cache de hoje',
    todayCacheRead: 'Leitura de cache de hoje',
    todayCost: 'Custo de hoje',
    rpmTpm: 'RPM / TPM',
    totalRequests: 'Total de requisições',
    totalInputTokens: 'Entrada total',
    totalOutputTokens: 'Saída total',
    totalTokensLabel: 'Total de tokens',
    totalCacheCreation: 'Criação total de cache',
    totalCacheRead: 'Leitura total de cache',
    totalCost: 'Custo total',
    avgDuration: 'Duração média',
    // Messages
    enterApiKey: 'Insira uma chave de API',
    querySuccess: 'Consulta bem-sucedida',
    queryFailed: 'Falha na consulta',
    queryFailedRetry: 'Falha na consulta, tente novamente mais tarde',
    noDailyUsage: 'Sem dados de uso diário',
  },

  // Setup Wizard
  setup: {
    title: 'Configuração do Sub2API',
    description: 'Configure sua instância do Sub2API',
    database: {
      title: 'Configuração do banco de dados',
      description: 'Conecte-se ao seu banco de dados PostgreSQL',
      host: 'Host',
      port: 'Porta',
      username: 'Usuário',
      password: 'Senha',
      databaseName: 'Nome do banco de dados',
      sslMode: 'Modo SSL',
      passwordPlaceholder: 'Senha',
      ssl: {
        disable: 'Desativar',
        require: 'Exigir',
        verifyCa: 'Verificar CA',
        verifyFull: 'Verificação completa'
      }
    },
    redis: {
      title: 'Configuração do Redis',
      description: 'Conecte-se ao seu servidor Redis',
      host: 'Host',
      port: 'Porta',
      username: 'Usuário (opcional)',
      password: 'Senha (opcional)',
      database: 'Banco de dados',
      usernamePlaceholder: 'Deixe vazio para o usuário padrão',
      passwordPlaceholder: 'Senha',
      enableTls: 'Ativar TLS',
      enableTlsHint: 'Usar TLS ao conectar ao Redis (certificados de CA públicos)'
    },
    admin: {
      title: 'Conta do administrador',
      description: 'Crie sua conta de administrador',
      email: 'E-mail',
      password: 'Senha',
      confirmPassword: 'Confirmar senha',
      passwordPlaceholder: 'Mínimo de 8 caracteres',
      confirmPasswordPlaceholder: 'Confirmar senha',
      passwordMismatch: 'As senhas não coincidem'
    },
    ready: {
      title: 'Pronto para instalar',
      description: 'Revise sua configuração e conclua a instalação',
      database: 'Banco de dados',
      redis: 'Redis',
      adminEmail: 'E-mail do administrador'
    },
    status: {
      testing: 'Testando...',
      success: 'Conexão bem-sucedida',
      testConnection: 'Testar conexão',
      installing: 'Instalando...',
      completeInstallation: 'Concluir instalação',
      completed: 'Instalação concluída!',
      redirecting: 'Redirecionando para a página de login...',
      restarting: 'O serviço está reiniciando, aguarde...',
      timeout: 'A reinicialização do serviço está demorando mais que o esperado. Atualize a página manualmente.'
    }
  },

  // Common
}
