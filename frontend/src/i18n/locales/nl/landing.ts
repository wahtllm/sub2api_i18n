export default {
  batchImageGuide: {
    title: 'Batchgewijs afbeeldingen genereren',
    description: 'Dien meerdere prompts in één taak in en download de gegenereerde afbeeldingen zodra de taak voltooid is'
  },
  // Home Page
  home: {
    viewOnGithub: 'Bekijk op GitHub',
    viewDocs: 'Documentatie bekijken',
    docs: 'Documentatie',
    switchToLight: 'Overschakelen naar lichte modus',
    switchToDark: 'Overschakelen naar donkere modus',
    dashboard: 'Dashboard',
    login: 'Inloggen',
    getStarted: 'Aan de slag',
    goToDashboard: 'Naar het dashboard',
    // User-focused value proposition
    heroSubtitle: 'Eén sleutel, alle AI-modellen',
    heroDescription: 'Je hoeft geen meerdere abonnementen te beheren. Toegang tot Claude, GPT, Gemini en meer met één API-sleutel',
    tags: {
      subscriptionToApi: 'Abonnement als API',
      stickySession: 'Sessiepersistentie',
      realtimeBilling: 'Betalen naar gebruik'
    },
    // Pain points section
    painPoints: {
      title: 'Herkenbaar?',
      items: {
        expensive: {
          title: 'Hoge abonnementskosten',
          desc: 'Je betaalt voor meerdere AI-abonnementen die elke maand verder oplopen'
        },
        complex: {
          title: 'Accountchaos',
          desc: 'Accounts en API-sleutels verspreid over verschillende platforms beheren'
        },
        unstable: {
          title: 'Serviceonderbrekingen',
          desc: 'Eén account dat al snel zijn limieten bereikt en je werk verstoort'
        },
        noControl: {
          title: 'Geen gebruikscontrole',
          desc: 'Je kunt niet volgen waar je geld naartoe gaat en het gebruik van teamleden niet beperken'
        }
      }
    },
    // Solutions section
    solutions: {
      title: 'Wij lossen deze problemen op',
      subtitle: 'In drie eenvoudige stappen zorgeloos gebruik maken van AI'
    },
    features: {
      unifiedGateway: 'Toegang met één klik',
      unifiedGatewayDesc: 'Vraag één API-sleutel aan om alle aangesloten AI-modellen aan te roepen. Geen aparte aanvragen nodig.',
      multiAccount: 'Altijd betrouwbaar',
      multiAccountDesc: 'Slimme routering over meerdere Upstream-accounts met automatische failover. Nooit meer fouten.',
      balanceQuota: 'Betaal wat je gebruikt',
      balanceQuotaDesc: 'Facturatie op basis van gebruik met quotalimieten. Volledig inzicht in het verbruik van je team.'
    },
    // Comparison section
    comparison: {
      title: 'Waarom voor ons kiezen?',
      headers: {
        feature: 'Vergelijking',
        official: 'Officiële abonnementen',
        us: 'Ons platform'
      },
      items: {
        pricing: {
          feature: 'Prijsstelling',
          official: 'Vaste maandelijkse fee, je betaalt ook zonder gebruik',
          us: 'Betaal alleen voor wat je gebruikt'
        },
        models: {
          feature: 'Modelkeuze',
          official: 'Alleen één aanbieder',
          us: 'Wissel vrij tussen modellen'
        },
        management: {
          feature: 'Accountbeheer',
          official: 'Beheer elke service apart',
          us: 'Eén sleutel, één dashboard'
        },
        stability: {
          feature: 'Stabiliteit',
          official: 'Limieten van één account',
          us: 'Multi-accountpool, automatische failover'
        },
        control: {
          feature: 'Gebruikscontrole',
          official: 'Niet beschikbaar',
          us: 'Quota en gedetailleerde statistieken'
        }
      }
    },
    providers: {
      title: 'Ondersteunde AI-modellen',
      description: 'Eén API, meerdere keuzes',
      supported: 'Ondersteund',
      soon: 'Binnenkort',
      claude: 'Claude',
      gemini: 'Gemini',
      antigravity: 'Antigravity',
      more: 'Meer'
    },
    // CTA section
    cta: {
      title: 'Klaar om te beginnen?',
      description: 'Registreer nu en ontvang gratis proefcredits om naadloze AI-toegang te ervaren',
      button: 'Gratis registreren'
    },
    footer: {
      allRightsReserved: 'Alle rechten voorbehouden.'
    }
  },

  // Key Usage Query Page
  keyUsage: {
    title: 'API-sleutelgebruik',
    subtitle: 'Voer je API-sleutel in om real-time uitgaven en gebruiksstatus te bekijken',
    placeholder: 'sk-ant-mirror-xxxxxxxxxxxx',
    query: 'Opvragen',
    querying: 'Bezig met opvragen...',
    privacyNote: 'Je sleutel wordt lokaal in de browser verwerkt en wordt niet opgeslagen',
    dateRange: 'Datumbereik:',
    dateRangeToday: 'Vandaag',
    dateRange7d: '7 dagen',
    dateRange30d: '30 dagen',
    dateRange90d: '90 dagen',
    dateRangeCustom: 'Aangepast',
    apply: 'Toepassen',
    used: 'Gebruikt',
    detailInfo: 'Detailinformatie',
    tokenStats: 'Tokenstatistieken',
    dailyDetail: 'Details per dag',
    modelStats: 'Gebruiksstatistieken per model',
    // Table headers
    date: 'Datum',
    model: 'Model',
    requests: 'Verzoeken',
    inputTokens: 'Invoer-tokens',
    outputTokens: 'Uitvoer-tokens',
    cacheCreationTokens: 'Cache-aanmaak',
    cacheReadTokens: 'Cache-lezen',
    cacheWriteTokens: 'Cache-schrijven',
    totalTokens: 'Totaal aantal tokens',
    cost: 'Kosten',
    // Status
    quotaMode: 'Quotamodus per sleutel',
    walletBalance: 'Portemonneesaldo',
    // Ring card titles
    totalQuota: 'Totale quota',
    limit5h: 'Limiet van 5 uur',
    limitDaily: 'Daglimiet',
    limit7d: 'Limiet van 7 dagen',
    limitWeekly: 'Weeklimiet',
    limitMonthly: 'Maandlimiet',
    // Detail rows
    remainingQuota: 'Resterende quota',
    expiresAt: 'Vervalt op',
    todayExpires: '(vervalt vandaag)',
    daysLeft: '({days} dagen)',
    usedQuota: 'Gebruikte quota',
    resetNow: 'Wordt binnenkort gereset',
    subscriptionType: 'Abonnementstype',
    billingType: 'Facturatietype',
    subscriptionExpires: 'Abonnement vervalt',
    // Usage stat cells
    todayRequests: 'Verzoeken vandaag',
    todayInputTokens: 'Invoer vandaag',
    todayOutputTokens: 'Uitvoer vandaag',
    todayTokens: 'Tokens vandaag',
    todayCacheCreation: 'Cache-aanmaak vandaag',
    todayCacheRead: 'Cache-lezen vandaag',
    todayCost: 'Kosten vandaag',
    rpmTpm: 'RPM / TPM',
    totalRequests: 'Verzoeken totaal',
    totalInputTokens: 'Invoer totaal',
    totalOutputTokens: 'Uitvoer totaal',
    totalTokensLabel: 'Tokens totaal',
    totalCacheCreation: 'Cache-aanmaak totaal',
    totalCacheRead: 'Cache-lezen totaal',
    totalCost: 'Kosten totaal',
    avgDuration: 'Gemiddelde duur',
    // Messages
    enterApiKey: 'Voer een API-sleutel in',
    querySuccess: 'Opvragen geslaagd',
    queryFailed: 'Opvragen mislukt',
    queryFailedRetry: 'Opvragen mislukt, probeer het later opnieuw',
    noDailyUsage: 'Geen dagelijkse gebruiksgegevens',
  },

  // Setup Wizard
  setup: {
    title: 'Sub2API instellen',
    description: 'Configureer je Sub2API-instantie',
    database: {
      title: 'Databaseconfiguratie',
      description: 'Maak verbinding met je PostgreSQL-database',
      host: 'Host',
      port: 'Poort',
      username: 'Gebruikersnaam',
      password: 'Wachtwoord',
      databaseName: 'Databasenaam',
      sslMode: 'SSL-modus',
      passwordPlaceholder: 'Wachtwoord',
      ssl: {
        disable: 'Uitschakelen',
        require: 'Vereisen',
        verifyCa: 'CA verifiëren',
        verifyFull: 'Volledig verifiëren'
      }
    },
    redis: {
      title: 'Redis-configuratie',
      description: 'Maak verbinding met je Redis-server',
      host: 'Host',
      port: 'Poort',
      username: 'Gebruikersnaam (optioneel)',
      password: 'Wachtwoord (optioneel)',
      database: 'Database',
      usernamePlaceholder: 'Laat leeg voor de standaardgebruiker',
      passwordPlaceholder: 'Wachtwoord',
      enableTls: 'TLS inschakelen',
      enableTlsHint: 'Gebruik TLS bij het verbinden met Redis (openbare CA-certificaten)'
    },
    admin: {
      title: 'Beheerdersaccount',
      description: 'Maak je beheerdersaccount aan',
      email: 'E-mail',
      password: 'Wachtwoord',
      confirmPassword: 'Wachtwoord bevestigen',
      passwordPlaceholder: 'Min. 8 tekens',
      confirmPasswordPlaceholder: 'Bevestig wachtwoord',
      passwordMismatch: 'Wachtwoorden komen niet overeen'
    },
    ready: {
      title: 'Klaar om te installeren',
      description: 'Controleer je configuratie en voltooi de installatie',
      database: 'Database',
      redis: 'Redis',
      adminEmail: 'E-mail beheerder'
    },
    status: {
      testing: 'Testen...',
      success: 'Verbinding geslaagd',
      testConnection: 'Verbinding testen',
      installing: 'Installeren...',
      completeInstallation: 'Installatie voltooien',
      completed: 'Installatie voltooid!',
      redirecting: 'Doorverwijzen naar de inlogpagina...',
      restarting: 'De service wordt opnieuw gestart, even geduld...',
      timeout: 'Het opnieuw opstarten van de service duurt langer dan verwacht. Vernieuw de pagina handmatig.'
    }
  },

  // Common
}
