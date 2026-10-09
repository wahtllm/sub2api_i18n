export default {
  batchImageGuide: {
    title: 'Generazione di immagini in batch',
    description: 'Invia più prompt in un\'unica attività e scarica le immagini generate al termine'
  },
  // Home Page
  home: {
    viewOnGithub: 'Visualizza su GitHub',
    viewDocs: 'Visualizza la documentazione',
    docs: 'Documentazione',
    switchToLight: 'Passa alla modalità chiara',
    switchToDark: 'Passa alla modalità scura',
    dashboard: 'Dashboard',
    login: 'Accedi',
    getStarted: 'Inizia ora',
    goToDashboard: 'Vai alla dashboard',
    // User-focused value proposition
    heroSubtitle: 'Una chiave, tutti i modelli AI',
    heroDescription: 'Nessuna necessità di gestire più abbonamenti. Accedi a Claude, GPT, Gemini e altri con una sola chiave API',
    tags: {
      subscriptionToApi: 'Da abbonamento ad API',
      stickySession: 'Persistenza della sessione',
      realtimeBilling: 'Pagamento a consumo'
    },
    // Pain points section
    painPoints: {
      title: 'Ti suona familiare?',
      items: {
        expensive: {
          title: 'Abbonamenti costosi',
          desc: 'Pagare più abbonamenti AI che si sommano ogni mese'
        },
        complex: {
          title: 'Caos tra gli account',
          desc: 'Gestire account e chiavi API sparsi su piattaforme diverse'
        },
        unstable: {
          title: 'Interruzioni di servizio',
          desc: 'Account singoli che raggiungono i limiti di frequenza e interrompono il tuo flusso di lavoro'
        },
        noControl: {
          title: 'Nessun controllo dell\'utilizzo',
          desc: 'Non riesci a tracciare dove vanno i tuoi soldi né a limitare l\'utilizzo dei membri del team'
        }
      }
    },
    // Solutions section
    solutions: {
      title: 'Risolviamo questi problemi',
      subtitle: 'Tre semplici passaggi per un accesso all\'AI senza pensieri'
    },
    features: {
      unifiedGateway: 'Accesso in un clic',
      unifiedGatewayDesc: 'Basta una sola chiave API per chiamare tutti i modelli AI collegati. Non servono applicazioni separate.',
      multiAccount: 'Sempre affidabile',
      multiAccountDesc: 'Instradamento intelligente su più account upstream con failover automatico. Dì addio agli errori.',
      balanceQuota: 'Paga solo ciò che usi',
      balanceQuotaDesc: 'Fatturazione a consumo con limiti di quota. Visibilità completa sui consumi del team.'
    },
    // Comparison section
    comparison: {
      title: 'Perché sceglierci?',
      headers: {
        feature: 'Confronto',
        official: 'Abbonamenti ufficiali',
        us: 'La nostra piattaforma'
      },
      items: {
        pricing: {
          feature: 'Prezzi',
          official: 'Canone mensile fisso, paghi anche se non lo usi',
          us: 'Paghi solo ciò che usi'
        },
        models: {
          feature: 'Scelta dei modelli',
          official: 'Solo un fornitore',
          us: 'Passa liberamente da un modello all\'altro'
        },
        management: {
          feature: 'Gestione degli account',
          official: 'Ogni servizio gestito separatamente',
          us: 'Chiave unificata, un\'unica dashboard'
        },
        stability: {
          feature: 'Stabilità',
          official: 'Limiti di frequenza dell\'account singolo',
          us: 'Pool di account multipli, failover automatico'
        },
        control: {
          feature: 'Controllo dell\'utilizzo',
          official: 'Non disponibile',
          us: 'Quote e analisi dettagliate'
        }
      }
    },
    providers: {
      title: 'Modelli AI supportati',
      description: 'Una sola API, più scelte',
      supported: 'Supportato',
      soon: 'In arrivo',
      claude: 'Claude',
      gemini: 'Gemini',
      antigravity: 'Antigravity',
      more: 'Altro'
    },
    // CTA section
    cta: {
      title: 'Pronto per iniziare?',
      description: 'Registrati ora e ottieni crediti di prova gratuiti per provare un accesso all\'AI senza interruzioni',
      button: 'Registrati gratis'
    },
    footer: {
      allRightsReserved: 'Tutti i diritti riservati.'
    }
  },

  // Key Usage Query Page
  keyUsage: {
    title: 'Utilizzo della chiave API',
    subtitle: 'Inserisci la tua chiave API per visualizzare in tempo reale consumi e stato di utilizzo',
    placeholder: 'sk-ant-mirror-xxxxxxxxxxxx',
    query: 'Cerca',
    querying: 'Ricerca in corso...',
    privacyNote: 'La tua chiave viene elaborata localmente nel browser e non verrà salvata',
    dateRange: 'Intervallo di date:',
    dateRangeToday: 'Oggi',
    dateRange7d: '7 giorni',
    dateRange30d: '30 giorni',
    dateRange90d: '90 giorni',
    dateRangeCustom: 'Personalizzato',
    apply: 'Applica',
    used: 'Utilizzato',
    detailInfo: 'Informazioni dettagliate',
    tokenStats: 'Statistiche dei token',
    dailyDetail: 'Dettaglio giornaliero',
    modelStats: 'Statistiche di utilizzo per modello',
    // Table headers
    date: 'Data',
    model: 'Modello',
    requests: 'Richieste',
    inputTokens: 'Token di input',
    outputTokens: 'Token di output',
    cacheCreationTokens: 'Creazione cache',
    cacheReadTokens: 'Lettura cache',
    cacheWriteTokens: 'Scrittura cache',
    totalTokens: 'Token totali',
    cost: 'Costo',
    // Status
    quotaMode: 'Modalità quota della chiave',
    walletBalance: 'Saldo del wallet',
    // Ring card titles
    totalQuota: 'Quota totale',
    limit5h: 'Limite di 5 ore',
    limitDaily: 'Limite giornaliero',
    limit7d: 'Limite di 7 giorni',
    limitWeekly: 'Limite settimanale',
    limitMonthly: 'Limite mensile',
    // Detail rows
    remainingQuota: 'Quota rimanente',
    expiresAt: 'Scade il',
    todayExpires: '(scade oggi)',
    daysLeft: '({days} giorni)',
    usedQuota: 'Quota utilizzata',
    resetNow: 'Reimpostazione imminente',
    subscriptionType: 'Tipo di abbonamento',
    billingType: 'Tipo di fatturazione',
    subscriptionExpires: 'Scadenza abbonamento',
    // Usage stat cells
    todayRequests: 'Richieste di oggi',
    todayInputTokens: 'Input di oggi',
    todayOutputTokens: 'Output di oggi',
    todayTokens: 'Token di oggi',
    todayCacheCreation: 'Creazione cache di oggi',
    todayCacheRead: 'Lettura cache di oggi',
    todayCost: 'Costo di oggi',
    rpmTpm: 'RPM / TPM',
    totalRequests: 'Richieste totali',
    totalInputTokens: 'Input totale',
    totalOutputTokens: 'Output totale',
    totalTokensLabel: 'Token totali',
    totalCacheCreation: 'Creazione cache totale',
    totalCacheRead: 'Lettura cache totale',
    totalCost: 'Costo totale',
    avgDuration: 'Durata media',
    // Messages
    enterApiKey: 'Inserisci una chiave API',
    querySuccess: 'Ricerca riuscita',
    queryFailed: 'Ricerca non riuscita',
    queryFailedRetry: 'Ricerca non riuscita, riprova più tardi',
    noDailyUsage: 'Nessun dato di utilizzo giornaliero',
  },

  // Setup Wizard
  setup: {
    title: 'Installazione di Sub2API',
    description: 'Configura la tua istanza Sub2API',
    database: {
      title: 'Configurazione del database',
      description: 'Connettiti al tuo database PostgreSQL',
      host: 'Host',
      port: 'Porta',
      username: 'Nome utente',
      password: 'Password',
      databaseName: 'Nome del database',
      sslMode: 'Modalità SSL',
      passwordPlaceholder: 'Password',
      ssl: {
        disable: 'Disattiva',
        require: 'Richiedi',
        verifyCa: 'Verifica CA',
        verifyFull: 'Verifica completa'
      }
    },
    redis: {
      title: 'Configurazione di Redis',
      description: 'Connettiti al tuo server Redis',
      host: 'Host',
      port: 'Porta',
      username: 'Nome utente (facoltativo)',
      password: 'Password (facoltativa)',
      database: 'Database',
      usernamePlaceholder: 'Lascia vuoto per l\'utente predefinito',
      passwordPlaceholder: 'Password',
      enableTls: 'Attiva TLS',
      enableTlsHint: 'Usa TLS per la connessione a Redis (certificati CA pubblici)'
    },
    admin: {
      title: 'Account amministratore',
      description: 'Crea il tuo account amministratore',
      email: 'E-mail',
      password: 'Password',
      confirmPassword: 'Conferma password',
      passwordPlaceholder: 'Minimo 8 caratteri',
      confirmPasswordPlaceholder: 'Conferma password',
      passwordMismatch: 'Le password non coincidono'
    },
    ready: {
      title: 'Pronto per l\'installazione',
      description: 'Controlla la tua configurazione e completa l\'installazione',
      database: 'Database',
      redis: 'Redis',
      adminEmail: 'E-mail amministratore'
    },
    status: {
      testing: 'Test in corso...',
      success: 'Connessione riuscita',
      testConnection: 'Test di connessione',
      installing: 'Installazione in corso...',
      completeInstallation: 'Completa l\'installazione',
      completed: 'Installazione completata!',
      redirecting: 'Reindirizzamento alla pagina di accesso...',
      restarting: 'Il servizio si sta riavviando, attendi...',
      timeout: 'Il riavvio del servizio sta richiedendo più tempo del previsto. Aggiorna manualmente la pagina.'
    }
  },

  // Common
}
