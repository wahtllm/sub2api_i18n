export default {
  audit: {
    title: 'Registro di audit',
    description: 'Registra le operazioni del piano di gestione effettuate da amministratori e utenti. Le credenziali nelle intestazioni conservano solo il primo e l\'ultimo carattere e i corpi delle richieste vengono oscurati. Le voci non possono essere eliminate singolarmente; la pulizia completa richiede la verifica a due fattori.',
    clearAll: 'Svuota tutto',
    empty: 'Ancora nessuna voce nel registro di audit',
    loadFailed: 'Caricamento del registro di audit non riuscito',
    filters: {
      all: 'Tutti',
      q: 'Parola chiave',
      qPlaceholder: 'Percorso / azione / e-mail dell\'operatore',
      actorEmail: 'E-mail dell\'operatore',
      action: 'Azione',
      clientIp: 'IP client',
      method: 'Metodo',
      authMethod: 'Metodo di autenticazione',
      result: 'Risultato',
      resultSuccess: 'Successo',
      resultFailure: 'Insuccesso',
      startTime: 'Ora di inizio',
      endTime: 'Ora di fine'
    },
    columns: {
      time: 'Ora',
      actor: 'Operatore',
      action: 'Azione',
      method: 'Metodo',
      result: 'Risultato',
      clientIp: 'IP client',
      detail: 'Dettaglio'
    },
    detail: {
      title: 'Dettaglio del registro di audit',
      actorRole: 'Ruolo',
      methodPath: 'Metodo / Percorso',
      latency: 'Latenza',
      requestId: 'ID richiesta',
      credential: 'Credenziale (mascherata)',
      userAgent: 'User-Agent',
      requestBody: 'Corpo della richiesta (oscurato)',
      extra: 'Extra'
    },
    clearConfirm: {
      title: 'Svuota tutto il registro di audit',
      message: 'Questa operazione elimina in modo definitivo l\'intero registro di audit e non può essere annullata. Anche l\'azione di pulizia viene registrata. Continuare?',
      totpTitle: 'Inserisci il codice a due fattori',
      totpHint: 'La pulizia del registro di audit richiede una nuova verifica TOTP.',
      success: 'Eliminate {count} voci dal registro di audit',
      failed: 'Pulizia del registro di audit non riuscita'
    }
  }
}
