export default {
  audit: {
    title: 'Registros de auditoria',
    description: 'Registra operações do plano de gerenciamento realizadas por administradores e usuários. As credenciais de cabeçalho mantêm apenas o primeiro e o último caractere, e os corpos das requisições são mascarados. Não é possível excluir entradas individualmente; a limpeza total exige verificação em duas etapas.',
    clearAll: 'Limpar tudo',
    empty: 'Ainda não há registros de auditoria',
    loadFailed: 'Falha ao carregar os registros de auditoria',
    filters: {
      all: 'Todos',
      q: 'Palavra-chave',
      qPlaceholder: 'Caminho / ação / e-mail do autor',
      actorEmail: 'E-mail do autor',
      action: 'Ação',
      clientIp: 'IP do cliente',
      method: 'Método',
      authMethod: 'Método de autenticação',
      result: 'Resultado',
      resultSuccess: 'Sucesso',
      resultFailure: 'Falha',
      startTime: 'Hora de início',
      endTime: 'Hora de término'
    },
    columns: {
      time: 'Hora',
      actor: 'Autor',
      action: 'Ação',
      method: 'Método',
      result: 'Resultado',
      clientIp: 'IP do cliente',
      detail: 'Detalhes'
    },
    detail: {
      title: 'Detalhes do registro de auditoria',
      actorRole: 'Papel',
      methodPath: 'Método / Caminho',
      latency: 'Latência',
      requestId: 'ID da requisição',
      credential: 'Credencial (mascarada)',
      userAgent: 'User-Agent',
      requestBody: 'Corpo da requisição (mascarado)',
      extra: 'Informações adicionais'
    },
    clearConfirm: {
      title: 'Limpar todos os registros de auditoria',
      message: 'Isso exclui permanentemente todos os registros de auditoria e não pode ser desfeito. A própria ação de limpeza fica registrada. Continuar?',
      totpTitle: 'Informe o código de verificação em duas etapas',
      totpHint: 'A limpeza dos registros de auditoria exige uma nova verificação TOTP.',
      success: '{count} registro(s) de auditoria limpo(s)',
      failed: 'Falha ao limpar os registros de auditoria'
    }
  }
}
