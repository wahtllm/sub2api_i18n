/** Channel Monitor V2 (user + admin passive monitor UI) */
export default {
  channelMonitorV2: {
    title: 'Monitor de canais',
    updating: 'Atualizando os dados',
    updatedTo: 'Atualizado até {time}',
    partialCoverage: 'Cobertura histórica parcial',
    bootstrap: {
      title: 'Construindo dados históricos de monitoramento',
      description:
        'Ao ativar pela primeira vez, a agregação passiva preenche silenciosamente as janelas de 90m, 24h, 7d e 30d em segundo plano. Todos os intervalos ficam completos quando isso termina.',
      progress: '{percent}% concluído',
      working: 'Agregando em segundo plano…',
    },
    timeRange: 'Intervalo de tempo',
    clearFilters: 'Redefinir',
    refreshingFilters: 'Filtros alterados; atualizando matriz, tendência e detalhes…',
    switchingData: 'Alternando dados filtrados…',
    summaryAria: 'Resumo do intervalo selecionado',
    loadFailed: 'Falha ao carregar o monitor de canais',
    detailLoadFailed: 'Falha ao carregar os detalhes do monitor de canais',
    otherModels: 'Outros modelos',
    ignored: 'Ignorados',
    currentUser: 'Usuário atual',
    ranges: { '90m': '90m', '24h': '24h', '7d': '7d', '30d': '30d' },
    filters: {
      platform: 'Plataforma', allPlatforms: 'Todos', group: 'Grupo', allGroups: 'Todos', model: 'Modelo', allModels: 'Todos',
      empty: 'Sem opções', selectedCount: '{count}', labelValue: '{label}: {value}'
    },
    groupBy: {
      label: 'Agrupar por', platform: 'Plataforma', platformGroup: 'Plataforma / Grupo', platformModel: 'Plataforma / Modelo', platformGroupModel: 'Plataforma / Grupo / Modelo'
    },
    trendView: { label: 'Visualização de tendência', pulse: 'Matriz de pulsos', line: 'Gráfico de linhas' },
    healthMode: { label: 'Exibição de saúde', overall: 'Geral', success: 'Taxa de erro', ttft: 'Primeiro token', cache: 'Taxa de cache' },
    tabs: { aria: 'Dimensão de detalhes', models: 'Modelos', errors: 'Motivos de erro', users: 'Ranking de usuários' },
    metrics: {
      rpm: 'RPM',
      tpm: 'TPM',
      tps: 'Tokens/s',
      rpmDetail: 'Requisições por minuto',
      tpmDetail: 'Tokens por minuto',
      tpsDetail: 'Calculado como TPM ÷ 60',
      errorRate: 'Taxa de erro',
      ttft: 'Primeiro token',
      ttftP50: 'Primeiro token P50',
      durationP50: 'Duração P50',
      cacheRate: 'Taxa de cache',
      cacheDetail: 'Proporção de leitura de cache',
      successRate: 'Taxa de sucesso',
      successRateValue: 'Taxa de sucesso {value}',
      errorRateValue: 'Taxa de erro {value}',
      rpmValue: 'RPM {value}',
      tpmValue: 'TPM {value}',
      tpsValue: 'Tokens/s {value}',
      ttftValue: 'Primeiro token {value}',
      durationValue: 'Duração {value}',
      cacheRateValue: 'Taxa de cache {value}',
    },
    table: { platformModel: 'Plataforma / Modelo', rank: 'Posição', user: 'Usuário' },
    empty: { title: 'Nenhum dado a exibir', description: 'Tente alterar o intervalo de tempo ou os filtros' },
    bucket: { minutes: 'Intervalos de {count} minutos', hours: 'Intervalos de {count} horas', days: 'Intervalos de {count} dias' },
    matrix: {
      title: 'Tendência de disponibilidade', description: 'Cada linha é uma dimensão de canal e cada bloco é um intervalo agregado; passe o mouse para ver os detalhes', wheelZoom: 'Role sobre os blocos para ampliar (intervalo menor, blocos mais largos)', wheelZoomX: 'Role sobre os blocos para ampliar (intervalo menor, blocos mais largos)', dimension: 'Dimensão do canal', emptyTitle: 'Nenhum dado de matriz para a janela selecionada', legendAria: 'Legenda da pontuação de saúde', bad: 'Ruim', good: 'Bom', healthyLegend: 'Saudável (≥80)', warningLegend: 'Atenção (50–79)', criticalLegend: 'Crítico (<50)', unknownLegend: 'Sem tráfego / amostras insuficientes', noTraffic: 'Sem tráfego neste intervalo', noTrafficAt: '{time} · sem tráfego', scoreLine: 'Pontuação de saúde {score}', resetZoom: 'Redefinir zoom'
    },
    chart: {
      title: 'Tendência de disponibilidade', description: 'Tendência suavizada: taxa de erro · primeiro token P50 · taxa de cache', emptyTitle: 'Nenhum dado de tendência para a janela selecionada', errorLegend: 'Taxa de erro (eixo esquerdo %)', cacheLegend: 'Taxa de cache (eixo esquerdo %)', ttftLegend: 'Primeiro token P50 (eixo direito)', errorDataset: 'Tendência da taxa de erro %', cacheDataset: 'Tendência da taxa de cache %', ttftDataset: 'Tendência do primeiro token P50 (ms)', percentAxis: 'Taxa %', resetZoom: 'Redefinir zoom'
    },
    errorDetail: { http: 'HTTP {code}', upstream: 'Upstream {code}', noMessage: 'Sem mensagem de erro', empty: 'Apenas taxas por categoria (mensagens de exemplo são visíveis apenas para administradores)' },
    errorCategories: {
      content_policy: 'Política de conteúdo', authentication: 'Autenticação', context_limit: 'Limite de contexto', invalid_request: 'Requisição inválida', model_unsupported: 'Modelo não suportado', group_access: 'Acesso ao grupo', quota_or_balance: 'Cota ou saldo', account_pool_unavailable: 'Pool de contas indisponível', rate_or_capacity: 'Limite de taxa ou capacidade', timeout: 'Timeout', transport_or_stream: 'Transporte ou streaming', upstream_forbidden: 'Proibido pelo upstream', not_found: 'Não encontrado', client_cancelled: 'Cancelado pelo cliente', upstream_5xx: 'Upstream 5xx', internal: 'Erro interno', other: 'Outros'
    },
    rank: {
      gold: '1º lugar, ouro',
      silver: '2º lugar, prata',
      bronze: '3º lugar, bronze',
      place: '{n}º lugar',
      unranked: 'Fora do ranking',
    },
    settings: {
      title: 'Configuração do monitor de dados V2',
      description:
        'Configure as dimensões de agregação passiva de uso (plataforma / modelo / grupo) e a cadência de atualização. As cores de saúde e os detalhes na página /monitor do usuário mostram taxas, RPM e TPM — não o volume absoluto de requisições.',
      save: 'Salvar',
      loading: 'Carregando…',
      loadFailed: 'Falha ao carregar a configuração V2',
      saveSuccess: 'Configuração do monitor V2 salva',
      saveFailed: 'Falha ao salvar a configuração V2',
      modeBanner:
        'O modo do sistema atualmente é {mode}. A agregação por minuto do V2 não será executada; esta configuração pode ser preparada agora e entra em vigor após alternar para {modeV2}. Altere o modo em Configurações do sistema → Interruptores de recursos.',
      modeClosed: 'Monitor de canais desativado',
      modeV1: 'Sondas ativas V1',
      modeV2: 'Monitoramento passivo V2',
      enableTitle: 'Ativar agregação V2',
      enableHint:
        'Aplica-se quando o modo do sistema é V2. Desativar esta opção interrompe apenas a agregação desta configuração; o interruptor do modo do sistema continua em Interruptores de recursos.',
      refreshTitle: 'Intervalo de agregação',
      refreshHint: 'Afeta a granularidade de tempo da matriz e a cadência de atualização',
      refreshAria: 'Intervalo de agregação',
      platformsTitle: 'Plataformas e modelos',
      platformsHint:
        'Deixe vazio = mostrar todos os nomes reais de modelos; quando preenchido, apenas os modelos listados ganham linhas próprias e o restante é agrupado em “Outros”',
      modelsPlaceholder: 'Vazio = todos os modelos reais; ou liste modelos populares (restante → Outros)',
      badgeAllModels: 'Todos os modelos',
      badgeOther: '+ Outros',
      groupsTitle: 'Grupos monitorados',
      groupsSelected: '{count} grupos selecionados',
      groupsAll: 'Todos os grupos',
      groupsEmpty: 'Nenhum grupo disponível',
      errorsTitle: 'Categorias de erro e ignorados',
      errorsHint:
        'As categorias marcadas como “ignorar” são excluídas da taxa de erro e da pontuação de saúde, mas continuam aparecendo esmaecidas no detalhamento de erros. Erros não correspondidos são agrupados em “Outros”.',
      ignoredSummary: 'Ignoradas: {ignored} categorias · contabilizadas na taxa de erro: {counted} categorias',
      healthTitle: 'Limites de saúde',
      healthHint:
        'Controla as faixas de cores visíveis ao usuário e a pontuação geral. Os padrões são tolerantes para que taxas de erro pequenas ou cache baixo não apareçam imediatamente como não saudáveis.',
      fields: {
        minimumSample: 'Amostras mínimas',
        warningError: 'Taxa de erro de atenção %',
        criticalError: 'Taxa de erro crítica %',
        targetTtft: 'TTFT alvo ms',
        warningTtft: 'TTFT de atenção ms',
        criticalTtft: 'TTFT crítico ms',
        warningCache: 'Taxa de cache de atenção %',
        criticalCache: 'Taxa de cache crítica %',
      },
      namedModelsEmpty: 'As listas de modelos por plataforma estão vazias: todos os nomes reais de modelos serão exibidos (não agrupados em “Outros”).',
      namedModelsCount: 'Exibindo {count} dimensões de modelos nomeados; os modelos fora da lista são agrupados em “Outros” por plataforma.',
      userContractTitle: 'Contrato de exibição para o usuário',
      userContract: {
        health: 'Pesos das cores de saúde: taxa de erro 60% + primeiro token P50 20% + taxa de cache 20% (limites configuráveis acima)',
        trend: 'A tendência pode alternar entre matriz de pulsos e gráfico de linhas (erro · cache · primeiro token)',
        latency: 'A latência mostra AVG · P50 · P90; contagens absolutas de requisições / erros não são exibidas',
        models: 'Listas de modelos vazias mostram os nomes reais e nunca colocam tudo em “Outros”',
      },
    },
    admin: {
      descriptionV1:
        'O modo do sistema é V1 com sondas ativas: gerencie os monitores de sonda e execute verificações agora; a agregação V2 não é executada.',
      descriptionV2:
        'O modo do sistema é V2 com monitoramento passivo: configure as dimensões de agregação; as sondas ativas V1 não são executadas.',
      tabAria: 'Gerenciamento de monitores',
      tabV2: 'Configuração do monitor de dados V2',
      tabV1Active: 'Sondas ativas V1',
      tabV1History: 'Histórico V1 (sondas não ativas no modo atual)',
    },
  },
}
