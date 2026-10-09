export default {
  batchImageGuide: {
    title: 'Zbiorcze generowanie obrazów',
    description: 'Prześlij wiele promptów w jednym zadaniu i pobierz wygenerowane obrazy po zakończeniu'
  },
  // Home Page
  home: {
    viewOnGithub: 'Zobacz na GitHub',
    viewDocs: 'Zobacz dokumentację',
    docs: 'Dokumentacja',
    switchToLight: 'Przełącz na tryb jasny',
    switchToDark: 'Przełącz na tryb ciemny',
    dashboard: 'Panel',
    login: 'Zaloguj się',
    getStarted: 'Rozpocznij',
    goToDashboard: 'Przejdź do panelu',
    // User-focused value proposition
    heroSubtitle: 'Jeden klucz, wszystkie modele AI',
    heroDescription: 'Bez konieczności zarządzania wieloma subskrypcjami. Uzyskaj dostęp do Claude, GPT, Gemini i innych za pomocą jednego klucza API',
    tags: {
      subscriptionToApi: 'Subskrypcja jako API',
      stickySession: 'Trwałość sesji',
      realtimeBilling: 'Płatność za zużycie'
    },
    // Pain points section
    painPoints: {
      title: 'Brzmi znajomo?',
      items: {
        expensive: {
          title: 'Wysokie koszty subskrypcji',
          desc: 'Płacenie za wiele subskrypcji AI, których koszty co miesiąc rosną'
        },
        complex: {
          title: 'Bałagan z kontami',
          desc: 'Zarządzanie rozproszonymi kontami i kluczami API na różnych platformach'
        },
        unstable: {
          title: 'Przerwy w działaniu usługi',
          desc: 'Pojedyncze konta osiągają limity i przerywają pracę'
        },
        noControl: {
          title: 'Brak kontroli zużycia',
          desc: 'Nie widać, na co idą pieniądze, i nie można ograniczyć zużycia członków zespołu'
        }
      }
    },
    // Solutions section
    solutions: {
      title: 'Rozwiązujemy te problemy',
      subtitle: 'Trzy proste kroki do bezproblemowego dostępu do AI'
    },
    features: {
      unifiedGateway: 'Dostęp jednym kliknięciem',
      unifiedGatewayDesc: 'Uzyskaj jeden klucz API do wywoływania wszystkich podłączonych modeli AI. Nie są potrzebne osobne aplikacje.',
      multiAccount: 'Zawsze niezawodne',
      multiAccountDesc: 'Inteligentne kierowanie ruchu na wiele kont Upstream z automatycznym przełączaniem awaryjnym. Koniec z błędami.',
      balanceQuota: 'Płatność za rzeczywiste zużycie',
      balanceQuotaDesc: 'Rozliczenie według zużycia z limitami. Pełny wgląd w zużycie zespołu.'
    },
    // Comparison section
    comparison: {
      title: 'Dlaczego warto nas wybrać?',
      headers: {
        feature: 'Porównanie',
        official: 'Oficjalne subskrypcje',
        us: 'Nasza platforma'
      },
      items: {
        pricing: {
          feature: 'Model płatności',
          official: 'Stała opłata miesięczna, płatna nawet bez użycia',
          us: 'Płacisz tylko za to, czego używasz'
        },
        models: {
          feature: 'Wybór modeli',
          official: 'Tylko jeden dostawca',
          us: 'Dowolne przełączanie między modelami'
        },
        management: {
          feature: 'Zarządzanie kontami',
          official: 'Zarządzanie każdą usługą osobno',
          us: 'Jeden klucz, jeden panel'
        },
        stability: {
          feature: 'Stabilność',
          official: 'Limity pojedynczego konta',
          us: 'Pula wielu kont, automatyczne przełączanie awaryjne'
        },
        control: {
          feature: 'Kontrola zużycia',
          official: 'Brak',
          us: 'Limity i szczegółowa analityka'
        }
      }
    },
    providers: {
      title: 'Obsługiwane modele AI',
      description: 'Jedno API, wiele możliwości',
      supported: 'Obsługiwane',
      soon: 'Wkrótce',
      claude: 'Claude',
      gemini: 'Gemini',
      antigravity: 'Antigravity',
      more: 'Więcej'
    },
    // CTA section
    cta: {
      title: 'Czas zacząć?',
      description: 'Zarejestruj się teraz i otrzymaj darmowe środki próbne, aby poznać płynny dostęp do AI',
      button: 'Zarejestruj się bezpłatnie'
    },
    footer: {
      allRightsReserved: 'Wszelkie prawa zastrzeżone.'
    }
  },

  // Key Usage Query Page
  keyUsage: {
    title: 'Zużycie klucza API',
    subtitle: 'Wprowadź klucz API, aby zobaczyć wydatki i status zużycia w czasie rzeczywistym',
    placeholder: 'sk-ant-mirror-xxxxxxxxxxxx',
    query: 'Sprawdź',
    querying: 'Sprawdzanie...',
    privacyNote: 'Klucz jest przetwarzany lokalnie w przeglądarce i nie będzie zapisany',
    dateRange: 'Zakres dat:',
    dateRangeToday: 'Dziś',
    dateRange7d: '7 dni',
    dateRange30d: '30 dni',
    dateRange90d: '90 dni',
    dateRangeCustom: 'Niestandardowy',
    apply: 'Zastosuj',
    used: 'Wykorzystane',
    detailInfo: 'Szczegółowe informacje',
    tokenStats: 'Statystyki tokenów',
    dailyDetail: 'Szczegóły dzienne',
    modelStats: 'Statystyki zużycia modeli',
    // Table headers
    date: 'Data',
    model: 'Model',
    requests: 'Żądania',
    inputTokens: 'Tokeny wejściowe',
    outputTokens: 'Tokeny wyjściowe',
    cacheCreationTokens: 'Tworzenie cache',
    cacheReadTokens: 'Odczyt z cache',
    cacheWriteTokens: 'Zapis do cache',
    totalTokens: 'Tokeny łącznie',
    cost: 'Koszt',
    // Status
    quotaMode: 'Tryb limitu klucza',
    walletBalance: 'Saldo portfela',
    // Ring card titles
    totalQuota: 'Łączny limit',
    limit5h: 'Limit 5-godzinny',
    limitDaily: 'Limit dzienny',
    limit7d: 'Limit 7-dniowy',
    limitWeekly: 'Limit tygodniowy',
    limitMonthly: 'Limit miesięczny',
    // Detail rows
    remainingQuota: 'Pozostały limit',
    expiresAt: 'Wygasa',
    todayExpires: '(wygasa dziś)',
    daysLeft: '({days} dni)',
    usedQuota: 'Wykorzystany limit',
    resetNow: 'Reset wkrótce',
    subscriptionType: 'Typ subskrypcji',
    billingType: 'Typ rozliczenia',
    subscriptionExpires: 'Wygaśnięcie subskrypcji',
    // Usage stat cells
    todayRequests: 'Żądania dziś',
    todayInputTokens: 'Wejście dziś',
    todayOutputTokens: 'Wyjście dziś',
    todayTokens: 'Tokeny dziś',
    todayCacheCreation: 'Tworzenie cache dziś',
    todayCacheRead: 'Odczyt cache dziś',
    todayCost: 'Koszt dziś',
    rpmTpm: 'RPM / TPM',
    totalRequests: 'Żądania łącznie',
    totalInputTokens: 'Wejście łącznie',
    totalOutputTokens: 'Wyjście łącznie',
    totalTokensLabel: 'Tokeny łącznie',
    totalCacheCreation: 'Tworzenie cache łącznie',
    totalCacheRead: 'Odczyt cache łącznie',
    totalCost: 'Koszt łącznie',
    avgDuration: 'Średni czas trwania',
    // Messages
    enterApiKey: 'Wprowadź klucz API',
    querySuccess: 'Sprawdzanie zakończone pomyślnie',
    queryFailed: 'Sprawdzanie nie powiodło się',
    queryFailedRetry: 'Sprawdzanie nie powiodło się, spróbuj ponownie później',
    noDailyUsage: 'Brak dziennych danych zużycia',
  },

  // Setup Wizard
  setup: {
    title: 'Konfiguracja Sub2API',
    description: 'Skonfiguruj instancję Sub2API',
    database: {
      title: 'Konfiguracja bazy danych',
      description: 'Połącz z bazą danych PostgreSQL',
      host: 'Host',
      port: 'Port',
      username: 'Nazwa użytkownika',
      password: 'Hasło',
      databaseName: 'Nazwa bazy danych',
      sslMode: 'Tryb SSL',
      passwordPlaceholder: 'Hasło',
      ssl: {
        disable: 'Wyłącz',
        require: 'Wymagaj',
        verifyCa: 'Weryfikuj CA',
        verifyFull: 'Pełna weryfikacja'
      }
    },
    redis: {
      title: 'Konfiguracja Redis',
      description: 'Połącz z serwerem Redis',
      host: 'Host',
      port: 'Port',
      username: 'Nazwa użytkownika (opcjonalnie)',
      password: 'Hasło (opcjonalnie)',
      database: 'Baza danych',
      usernamePlaceholder: 'Pozostaw puste dla użytkownika domyślnego',
      passwordPlaceholder: 'Hasło',
      enableTls: 'Włącz TLS',
      enableTlsHint: 'Używaj TLS przy łączeniu z Redis (certyfikaty publicznego CA)'
    },
    admin: {
      title: 'Konto administratora',
      description: 'Utwórz konto administratora',
      email: 'E-mail',
      password: 'Hasło',
      confirmPassword: 'Potwierdź hasło',
      passwordPlaceholder: 'Min. 8 znaków',
      confirmPasswordPlaceholder: 'Potwierdź hasło',
      passwordMismatch: 'Hasła nie są identyczne'
    },
    ready: {
      title: 'Gotowość do instalacji',
      description: 'Sprawdź konfigurację i zakończ instalację',
      database: 'Baza danych',
      redis: 'Redis',
      adminEmail: 'E-mail administratora'
    },
    status: {
      testing: 'Testowanie...',
      success: 'Połączenie nawiązane',
      testConnection: 'Testuj połączenie',
      installing: 'Instalowanie...',
      completeInstallation: 'Zakończ instalację',
      completed: 'Instalacja zakończona!',
      redirecting: 'Przekierowywanie na stronę logowania...',
      restarting: 'Usługa jest ponownie uruchamiana, czekaj...',
      timeout: 'Ponowne uruchamianie usługi trwa dłużej niż oczekiwano. Odśwież stronę ręcznie.'
    }
  },

  // Common
}
