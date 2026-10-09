/** Channel Monitor V2 (user + admin passive monitor UI) */
export default {
  channelMonitorV2: {
    title: 'Monitor kanałów',
    updating: 'Aktualizowanie danych',
    updatedTo: 'Zaktualizowano do {time}',
    partialCoverage: 'Częściowe pokrycie historyczne',
    bootstrap: {
      title: 'Budowanie historycznych danych monitora',
      description:
        'Po pierwszym włączeniu pasywna agregacja w tle po cichu wypełnia okna 90m, 24h, 7d i 30d. Po zakończeniu tego procesu wszystkie zakresy będą kompletne.',
      progress: 'Ukończono {percent}%',
      working: 'Agregacja w tle…',
    },
    timeRange: 'Zakres czasu',
    clearFilters: 'Resetuj',
    refreshingFilters: 'Filtry zostały zmienione; odświeżanie macierzy, trendu i szczegółów…',
    switchingData: 'Przełączanie filtrowanych danych…',
    summaryAria: 'Podsumowanie wybranego zakresu',
    loadFailed: 'Nie udało się załadować monitora kanałów',
    detailLoadFailed: 'Nie udało się załadować szczegółów monitora kanałów',
    otherModels: 'Inne modele',
    ignored: 'Ignorowane',
    currentUser: 'Bieżący użytkownik',
    ranges: { '90m': '90m', '24h': '24h', '7d': '7d', '30d': '30d' },
    filters: {
      platform: 'Platforma', allPlatforms: 'Wszystkie', group: 'Grupa', allGroups: 'Wszystkie', model: 'Model', allModels: 'Wszystkie',
      empty: 'Brak opcji', selectedCount: '{count}', labelValue: '{label}: {value}'
    },
    groupBy: {
      label: 'Grupuj według', platform: 'Platforma', platformGroup: 'Platforma / grupa', platformModel: 'Platforma / model', platformGroupModel: 'Platforma / grupa / model'
    },
    trendView: { label: 'Widok trendu', pulse: 'Macierz pulsów', line: 'Wykres liniowy' },
    healthMode: { label: 'Wyświetlanie kondycji', overall: 'Ogólnie', success: 'Wskaźnik błędów', ttft: 'Pierwszy token', cache: 'Wskaźnik cache' },
    tabs: { aria: 'Wymiar szczegółów', models: 'Modele', errors: 'Przyczyny błędów', users: 'Ranking użytkowników' },
    metrics: {
      rpm: 'RPM',
      tpm: 'TPM',
      tps: 'Tokeny/s',
      rpmDetail: 'Żądania na minutę',
      tpmDetail: 'Tokeny na minutę',
      tpsDetail: 'Wyznaczane jako TPM ÷ 60',
      errorRate: 'Wskaźnik błędów',
      ttft: 'Pierwszy token',
      ttftP50: 'Pierwszy token P50',
      durationP50: 'Czas trwania P50',
      cacheRate: 'Wskaźnik cache',
      cacheDetail: 'Udział odczytów z cache',
      successRate: 'Wskaźnik skuteczności',
      successRateValue: 'Wskaźnik skuteczności {value}',
      errorRateValue: 'Wskaźnik błędów {value}',
      rpmValue: 'RPM {value}',
      tpmValue: 'TPM {value}',
      tpsValue: 'Tokeny/s {value}',
      ttftValue: 'Pierwszy token {value}',
      durationValue: 'Czas trwania {value}',
      cacheRateValue: 'Wskaźnik cache {value}',
    },
    table: { platformModel: 'Platforma / model', rank: 'Pozycja', user: 'Użytkownik' },
    empty: { title: 'Brak danych do wyświetlenia', description: 'Spróbuj zmienić zakres czasu lub filtry' },
    bucket: { minutes: 'Przedziały {count}-minutowe', hours: 'Przedziały {count}-godzinne', days: 'Przedziały {count}-dniowe' },
    matrix: {
      title: 'Trend dostępności', description: 'Każdy wiersz to wymiar kanału, a każdy blok to przedział agregacji; najedź kursorem, aby zobaczyć szczegóły', wheelZoom: 'Przewijaj nad blokami, aby przybliżyć (węższy zakres, szersze bloki)', wheelZoomX: 'Przewijaj nad blokami, aby przybliżyć (węższy zakres, szersze bloki)', dimension: 'Wymiar kanału', emptyTitle: 'Brak danych macierzy dla wybranego okna', legendAria: 'Legenda oceny kondycji', bad: 'Zła', good: 'Dobra', healthyLegend: 'Zdrowe (≥80)', warningLegend: 'Do obserwacji (50–79)', criticalLegend: 'Krytyczne (<50)', unknownLegend: 'Brak ruchu / zbyt mało próbek', noTraffic: 'Brak ruchu w tym przedziale', noTrafficAt: '{time} · brak ruchu', scoreLine: 'Ocena kondycji {score}', resetZoom: 'Resetuj przybliżenie'
    },
    chart: {
      title: 'Trend dostępności', description: 'Wygładzony trend: wskaźnik błędów · pierwszy token P50 · wskaźnik cache', emptyTitle: 'Brak danych trendu dla wybranego okna', errorLegend: 'Wskaźnik błędów (oś lewa %)', cacheLegend: 'Wskaźnik cache (oś lewa %)', ttftLegend: 'Pierwszy token P50 (oś prawa)', errorDataset: 'Trend wskaźnika błędów %', cacheDataset: 'Trend wskaźnika cache %', ttftDataset: 'Trend pierwszego tokenu P50 (ms)', percentAxis: 'Wskaźnik %', resetZoom: 'Resetuj przybliżenie'
    },
    errorDetail: { http: 'HTTP {code}', upstream: 'Upstream {code}', noMessage: 'Brak komunikatu błędu', empty: 'Tylko odsetki kategorii (przykładowe komunikaty widoczne wyłącznie dla administratora)' },
    errorCategories: {
      content_policy: 'Polityka treści', authentication: 'Uwierzytelnianie', context_limit: 'Limit kontekstu', invalid_request: 'Nieprawidłowe żądanie', model_unsupported: 'Nieobsługiwany model', group_access: 'Dostęp grupy', quota_or_balance: 'Limit lub saldo', account_pool_unavailable: 'Pula kont niedostępna', rate_or_capacity: 'Limit szybkości lub pojemność', timeout: 'Przekroczenie czasu', transport_or_stream: 'Transport lub strumień', upstream_forbidden: 'Odrzucone przez Upstream', not_found: 'Nie znaleziono', client_cancelled: 'Anulowane przez klienta', upstream_5xx: 'Upstream 5xx', internal: 'Wewnętrzny', other: 'Inne'
    },
    rank: {
      gold: 'Miejsce 1, złoty',
      silver: 'Miejsce 2, srebrny',
      bronze: 'Miejsce 3, brązowy',
      place: 'Miejsce {n}',
      unranked: 'Poza rankingiem',
    },
    settings: {
      title: 'Konfiguracja monitora danych V2',
      description:
        'Skonfiguruj wymiary pasywnej agregacji zużycia (platforma / model / grupa) i częstotliwość odświeżania. Kolory kondycji i szczegóły na stronie użytkownika /monitor pokazują wskaźniki, RPM i TPM — a nie bezwzględną liczbę żądań.',
      save: 'Zapisz',
      loading: 'Ładowanie…',
      loadFailed: 'Nie udało się załadować konfiguracji V2',
      saveSuccess: 'Zapisano konfigurację monitora V2',
      saveFailed: 'Nie udało się zapisać konfiguracji V2',
      modeBanner:
        'Tryb systemowy to obecnie {mode}. Agregacja minutowa V2 nie będzie uruchamiana; tę konfigurację można przygotować już teraz, a wejdzie w życie po przełączeniu na {modeV2}. Tryb zmienisz w Ustawieniach systemu → Przełączniki funkcji.',
      modeClosed: 'Monitor kanałów wyłączony',
      modeV1: 'Aktywne sondy V1',
      modeV2: 'Pasywne monitorowanie V2',
      enableTitle: 'Włącz agregację V2',
      enableHint:
        'Obowiązuje, gdy tryb systemowy to V2. Wyłączenie zatrzymuje wyłącznie agregację tej konfiguracji; przełącznik trybu systemowego pozostaje w sekcji Przełączniki funkcji.',
      refreshTitle: 'Interwał agregacji',
      refreshHint: 'Wpływa na granulację czasu macierzy i częstotliwość odświeżania',
      refreshAria: 'Interwał agregacji',
      platformsTitle: 'Platformy i modele',
      platformsHint:
        'Pozostaw puste = pokazywanie wszystkich rzeczywistych nazw modeli; po wypełnieniu tylko wymienione modele otrzymają własne wiersze, a pozostałe trafią do „Inne”',
      modelsPlaceholder: 'Puste = wszystkie rzeczywiste modele; lub lista popularnych modeli (reszta → Inne)',
      badgeAllModels: 'Wszystkie modele',
      badgeOther: '+ Inne',
      groupsTitle: 'Monitorowane grupy',
      groupsSelected: 'Wybranych grup: {count}',
      groupsAll: 'Wszystkie grupy',
      groupsEmpty: 'Brak dostępnych grup',
      errorsTitle: 'Kategorie błędów i ignorowanie',
      errorsHint:
        'Kategorie zaznaczone jako „ignorowane” są wykluczone ze wskaźnika błędów i oceny kondycji, ale nadal pojawiają się wyszarzone w podziale błędów. Niedopasowane błędy trafiają do „Inne”.',
      ignoredSummary: 'Ignorowane kategorie: {ignored} · liczone we wskaźniku błędów: {counted}',
      healthTitle: 'Progi kondycji',
      healthHint:
        'Steruje pasmami kolorów i oceną ogólną widocznymi dla użytkownika. Wartości domyślne są tolerancyjne, aby niewielki wskaźnik błędów lub niski wskaźnik cache nie powodowały natychmiast stanu złej kondycji.',
      fields: {
        minimumSample: 'Minimalna liczba próbek',
        warningError: 'Wskaźnik błędów, obserwacja %',
        criticalError: 'Wskaźnik błędów, krytyczny %',
        targetTtft: 'TTFT docelowy ms',
        warningTtft: 'TTFT obserwacja ms',
        criticalTtft: 'TTFT krytyczny ms',
        warningCache: 'Wskaźnik cache, obserwacja %',
        criticalCache: 'Wskaźnik cache, krytyczny %',
      },
      namedModelsEmpty: 'Listy modeli platform są puste: zostaną pokazane wszystkie rzeczywiste nazwy modeli (bez zwijania do „Inne”).',
      namedModelsCount: 'Wymiary nazwanych modeli: {count}; niewymienione modele trafiają do „Inne” w ramach platformy.',
      userContractTitle: 'Zasady wyświetlania dla użytkownika',
      userContract: {
        health: 'Wagi kolorów kondycji: wskaźnik błędów 60% + pierwszy token P50 20% + wskaźnik cache 20% (progi konfigurowalne powyżej)',
        trend: 'Trend można przełączać między macierzą pulsów a wykresem liniowym (błędy · cache · pierwszy token)',
        latency: 'Opóźnienie pokazuje AVG · P50 · P90; bezwzględne liczby żądań / błędów nie są pokazywane',
        models: 'Puste listy modeli pokazują rzeczywiste nazwy i nigdy nie wrzucają wszystkiego do „Inne”',
      },
    },
    admin: {
      descriptionV1:
        'Tryb systemowy to aktywne sondy V1: zarządzaj monitorami sond i wykonuj kontrole natychmiast; agregacja V2 nie jest uruchamiana.',
      descriptionV2:
        'Tryb systemowy to pasywne monitorowanie V2: skonfiguruj wymiary agregacji; aktywne sondy V1 nie są uruchamiane.',
      tabAria: 'Zarządzanie monitorami',
      tabV2: 'Konfiguracja monitora danych V2',
      tabV1Active: 'Aktywne sondy V1',
      tabV1History: 'Historia V1 (sondy nieaktywne w bieżącym trybie)',
    },
  },
}
