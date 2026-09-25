export default {
  batchImageGuide: {
    title: 'Stapel-Bildgenerierung',
    description: 'Sende mehrere Prompts in einer Aufgabe und lade die generierten Bilder nach Abschluss herunter'
  },
  // Home Page
  home: {
    viewOnGithub: 'Auf GitHub ansehen',
    viewDocs: 'Dokumentation ansehen',
    docs: 'Dokumentation',
    switchToLight: 'Zum hellen Modus wechseln',
    switchToDark: 'Zum dunklen Modus wechseln',
    dashboard: 'Dashboard',
    login: 'Anmelden',
    getStarted: 'Jetzt starten',
    goToDashboard: 'Zum Dashboard',
    // User-focused value proposition
    heroSubtitle: 'Ein Key, alle KI-Modelle',
    heroDescription: 'Du musst nicht mehrere Abos verwalten. Greife mit einem einzigen API-Key auf Claude, GPT, Gemini und mehr zu',
    tags: {
      subscriptionToApi: 'Abo als API',
      stickySession: 'Sitzungspersistenz',
      realtimeBilling: 'Nutzungsbasierte Abrechnung'
    },
    // Pain points section
    painPoints: {
      title: 'Kommt dir bekannt vor?',
      items: {
        expensive: {
          title: 'Hohe Abo-Kosten',
          desc: 'Mehrere KI-Abos bezahlen, die sich jeden Monat summieren'
        },
        complex: {
          title: 'Konto-Chaos',
          desc: 'Verstreute Konten und API-Keys über verschiedene Plattformen hinweg verwalten'
        },
        unstable: {
          title: 'Service-Unterbrechungen',
          desc: 'Einzelne Konten erreichen Rate-Limits und stören deinen Workflow'
        },
        noControl: {
          title: 'Keine Nutzungskontrolle',
          desc: 'Du kannst nicht nachvollziehen, wohin dein Geld fließt, oder die Nutzung von Teammitgliedern begrenzen'
        }
      }
    },
    // Solutions section
    solutions: {
      title: 'Wir lösen diese Probleme',
      subtitle: 'Drei einfache Schritte zum stressfreien KI-Zugriff'
    },
    features: {
      unifiedGateway: 'Zugriff mit einem Klick',
      unifiedGatewayDesc: 'Erhalte einen einzigen API-Key, um alle angebundenen KI-Modelle aufzurufen. Keine separaten Anmeldungen erforderlich.',
      multiAccount: 'Immer zuverlässig',
      multiAccountDesc: 'Intelligentes Routing über mehrere Upstream-Konten mit automatischem Failover. Verabschiede dich von Fehlern.',
      balanceQuota: 'Zahle nur, was du nutzt',
      balanceQuotaDesc: 'Nutzungsbasierte Abrechnung mit Kontingentgrenzen. Voller Einblick in den Teamverbrauch.'
    },
    // Comparison section
    comparison: {
      title: 'Warum uns wählen?',
      headers: {
        feature: 'Vergleich',
        official: 'Offizielle Abos',
        us: 'Unsere Plattform'
      },
      items: {
        pricing: {
          feature: 'Preise',
          official: 'Feste Monatsgebühr, zahlen auch bei Nichtnutzung',
          us: 'Zahle nur für das, was du nutzt'
        },
        models: {
          feature: 'Modellauswahl',
          official: 'Nur ein einzelner Anbieter',
          us: 'Wechsle frei zwischen Modellen'
        },
        management: {
          feature: 'Kontoverwaltung',
          official: 'Jeden Dienst separat verwalten',
          us: 'Ein einheitlicher Key, ein Dashboard'
        },
        stability: {
          feature: 'Stabilität',
          official: 'Rate-Limits einzelner Konten',
          us: 'Konto-Pool mit mehreren Konten, automatisches Failover'
        },
        control: {
          feature: 'Nutzungskontrolle',
          official: 'Nicht verfügbar',
          us: 'Kontingente & detaillierte Analysen'
        }
      }
    },
    providers: {
      title: 'Unterstützte KI-Modelle',
      description: 'Eine API, mehrere Möglichkeiten',
      supported: 'Unterstützt',
      soon: 'Bald',
      claude: 'Claude',
      gemini: 'Gemini',
      antigravity: 'Antigravity',
      more: 'Mehr'
    },
    // CTA section
    cta: {
      title: 'Bereit, loszulegen?',
      description: 'Registriere dich jetzt und erhalte kostenloses Testguthaben, um nahtlosen KI-Zugriff zu erleben',
      button: 'Kostenlos registrieren'
    },
    footer: {
      allRightsReserved: 'Alle Rechte vorbehalten.'
    }
  },

  // Key Usage Query Page
  keyUsage: {
    title: 'API-Key-Nutzung',
    subtitle: 'Gib deinen API-Key ein, um Ausgaben und Nutzungsstatus in Echtzeit zu sehen',
    placeholder: 'sk-ant-mirror-xxxxxxxxxxxx',
    query: 'Abfragen',
    querying: 'Wird abgefragt…',
    privacyNote: 'Dein Key wird lokal im Browser verarbeitet und nicht gespeichert',
    dateRange: 'Zeitraum:',
    dateRangeToday: 'Heute',
    dateRange7d: '7 Tage',
    dateRange30d: '30 Tage',
    dateRange90d: '90 Tage',
    dateRangeCustom: 'Benutzerdefiniert',
    apply: 'Anwenden',
    used: 'Genutzt',
    detailInfo: 'Detailinformationen',
    tokenStats: 'Token-Statistik',
    dailyDetail: 'Tagesdetails',
    modelStats: 'Modell-Nutzungsstatistik',
    // Table headers
    date: 'Datum',
    model: 'Modell',
    requests: 'Anfragen',
    inputTokens: 'Eingabe-Tokens',
    outputTokens: 'Ausgabe-Tokens',
    cacheCreationTokens: 'Cache-Erstellung',
    cacheReadTokens: 'Cache-Lesung',
    cacheWriteTokens: 'Cache-Schreibung',
    totalTokens: 'Tokens gesamt',
    cost: 'Kosten',
    // Status
    quotaMode: 'Key-Kontingentmodus',
    walletBalance: 'Wallet-Guthaben',
    // Ring card titles
    totalQuota: 'Gesamtkontingent',
    limit5h: '5-Stunden-Limit',
    limitDaily: 'Tageslimit',
    limit7d: '7-Tage-Limit',
    limitWeekly: 'Wochenlimit',
    limitMonthly: 'Monatslimit',
    // Detail rows
    remainingQuota: 'Verbleibendes Kontingent',
    expiresAt: 'Läuft ab am',
    todayExpires: '(läuft heute ab)',
    daysLeft: '({days} Tage)',
    usedQuota: 'Genutztes Kontingent',
    resetNow: 'Wird in Kürze zurückgesetzt',
    subscriptionType: 'Abo-Typ',
    billingType: 'Abrechnungsart',
    subscriptionExpires: 'Abo läuft ab',
    // Usage stat cells
    todayRequests: 'Anfragen heute',
    todayInputTokens: 'Eingabe heute',
    todayOutputTokens: 'Ausgabe heute',
    todayTokens: 'Tokens heute',
    todayCacheCreation: 'Cache-Erstellung heute',
    todayCacheRead: 'Cache-Lesung heute',
    todayCost: 'Kosten heute',
    rpmTpm: 'RPM / TPM',
    totalRequests: 'Anfragen gesamt',
    totalInputTokens: 'Eingabe gesamt',
    totalOutputTokens: 'Ausgabe gesamt',
    totalTokensLabel: 'Tokens gesamt',
    totalCacheCreation: 'Cache-Erstellung gesamt',
    totalCacheRead: 'Cache-Lesung gesamt',
    totalCost: 'Kosten gesamt',
    avgDuration: 'Durchschnittliche Dauer',
    // Messages
    enterApiKey: 'Bitte gib einen API-Key ein',
    querySuccess: 'Abfrage erfolgreich',
    queryFailed: 'Abfrage fehlgeschlagen',
    queryFailedRetry: 'Abfrage fehlgeschlagen, bitte versuche es später erneut',
    noDailyUsage: 'Keine täglichen Nutzungsdaten',
  },

  // Setup Wizard
  setup: {
    title: 'Sub2API-Einrichtung',
    description: 'Konfiguriere deine Sub2API-Instanz',
    database: {
      title: 'Datenbank-Konfiguration',
      description: 'Verbinde dich mit deiner PostgreSQL-Datenbank',
      host: 'Host',
      port: 'Port',
      username: 'Benutzername',
      password: 'Passwort',
      databaseName: 'Datenbankname',
      sslMode: 'SSL-Modus',
      passwordPlaceholder: 'Passwort',
      ssl: {
        disable: 'Deaktivieren',
        require: 'Erforderlich',
        verifyCa: 'CA verifizieren',
        verifyFull: 'Vollständig verifizieren'
      }
    },
    redis: {
      title: 'Redis-Konfiguration',
      description: 'Verbinde dich mit deinem Redis-Server',
      host: 'Host',
      port: 'Port',
      username: 'Benutzername (optional)',
      password: 'Passwort (optional)',
      database: 'Datenbank',
      usernamePlaceholder: 'Für Standardbenutzer leer lassen',
      passwordPlaceholder: 'Passwort',
      enableTls: 'TLS aktivieren',
      enableTlsHint: 'TLS beim Verbinden mit Redis verwenden (öffentliche CA-Zertifikate)'
    },
    admin: {
      title: 'Administrator-Konto',
      description: 'Erstelle dein Administrator-Konto',
      email: 'E-Mail',
      password: 'Passwort',
      confirmPassword: 'Passwort bestätigen',
      passwordPlaceholder: 'Mindestens 8 Zeichen',
      confirmPasswordPlaceholder: 'Passwort bestätigen',
      passwordMismatch: 'Passwörter stimmen nicht überein'
    },
    ready: {
      title: 'Bereit zur Installation',
      description: 'Prüfe deine Konfiguration und schließe die Einrichtung ab',
      database: 'Datenbank',
      redis: 'Redis',
      adminEmail: 'Administrator-E-Mail'
    },
    status: {
      testing: 'Wird getestet…',
      success: 'Verbindung erfolgreich',
      testConnection: 'Verbindung testen',
      installing: 'Wird installiert…',
      completeInstallation: 'Installation abschließen',
      completed: 'Installation abgeschlossen!',
      redirecting: 'Weiterleitung zur Anmeldeseite…',
      restarting: 'Der Dienst wird neu gestartet, bitte warten…',
      timeout: 'Der Neustart des Dienstes dauert länger als erwartet. Bitte aktualisiere die Seite manuell.'
    }
  },

  // Common
}
