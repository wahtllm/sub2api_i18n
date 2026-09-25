/** Channel Monitor V2 (user + admin passive monitor UI) */
export default {
  channelMonitorV2: {
    title: 'Kanal-Monitor',
    updating: 'Daten werden aktualisiert',
    updatedTo: 'Aktualisiert bis {time}',
    partialCoverage: 'Teilweise historische Abdeckung',
    bootstrap: {
      title: 'Historische Monitor-Daten werden aufgebaut',
      description:
        'Beim ersten Aktivieren füllt die passive Aggregation die 90m-, 24h-, 7d- und 30d-Zeitfenster still im Hintergrund. Sobald dies abgeschlossen ist, sind alle Zeiträume vollständig.',
      progress: '{percent}% abgeschlossen',
      working: 'Aggregation läuft im Hintergrund…',
    },
    timeRange: 'Zeitraum',
    clearFilters: 'Zurücksetzen',
    refreshingFilters: 'Filter geändert; Matrix, Trend und Details werden aktualisiert…',
    switchingData: 'Gefilterte Daten werden gewechselt…',
    summaryAria: 'Zusammenfassung des ausgewählten Zeitraums',
    loadFailed: 'Kanal-Monitor konnte nicht geladen werden',
    detailLoadFailed: 'Kanal-Monitor-Details konnten nicht geladen werden',
    otherModels: 'Andere Modelle',
    ignored: 'Ignoriert',
    currentUser: 'Aktueller Benutzer',
    ranges: { '90m': '90m', '24h': '24h', '7d': '7d', '30d': '30d' },
    filters: {
      platform: 'Plattform', allPlatforms: 'Alle', group: 'Gruppe', allGroups: 'Alle', model: 'Modell', allModels: 'Alle',
      empty: 'Keine Optionen', selectedCount: '{count}', labelValue: '{label}: {value}'
    },
    groupBy: {
      label: 'Gruppieren nach', platform: 'Plattform', platformGroup: 'Plattform / Gruppe', platformModel: 'Plattform / Modell', platformGroupModel: 'Plattform / Gruppe / Modell'
    },
    trendView: { label: 'Trendansicht', pulse: 'Puls-Matrix', line: 'Liniendiagramm' },
    healthMode: { label: 'Health-Anzeige', overall: 'Gesamt', success: 'Fehlerrate', ttft: 'Erster Token', cache: 'Cache-Rate' },
    tabs: { aria: 'Detail-Dimension', models: 'Modelle', errors: 'Fehlerursachen', users: 'Benutzer-Ranking' },
    metrics: {
      rpm: 'RPM',
      tpm: 'TPM',
      tps: 'Tokens/s',
      rpmDetail: 'Anfragen pro Minute',
      tpmDetail: 'Tokens pro Minute',
      tpsDetail: 'Berechnet als TPM ÷ 60',
      errorRate: 'Fehlerrate',
      ttft: 'Erster Token',
      ttftP50: 'Erster Token P50',
      durationP50: 'Dauer P50',
      cacheRate: 'Cache-Rate',
      cacheDetail: 'Anteil der Cache-Lesungen',
      successRate: 'Erfolgsquote',
      successRateValue: 'Erfolgsquote {value}',
      errorRateValue: 'Fehlerrate {value}',
      rpmValue: 'RPM {value}',
      tpmValue: 'TPM {value}',
      tpsValue: 'Tokens/s {value}',
      ttftValue: 'Erster Token {value}',
      durationValue: 'Dauer {value}',
      cacheRateValue: 'Cache-Rate {value}',
    },
    table: { platformModel: 'Plattform / Modell', rank: 'Rang', user: 'Benutzer' },
    empty: { title: 'Keine Daten zum Anzeigen', description: 'Versuche, den Zeitraum oder die Filter zu ändern' },
    bucket: { minutes: '{count}-Minuten-Intervalle', hours: '{count}-Stunden-Intervalle', days: '{count}-Tage-Intervalle' },
    matrix: {
      title: 'Verfügbarkeitstrend', description: 'Jede Zeile ist eine Kanal-Dimension und jeder Block ein Aggregations-Intervall; für Details darüberfahren', wheelZoom: 'Über Blöcken scrollen zum Hineinzoomen (engerer Bereich, breitere Blöcke)', wheelZoomX: 'Über Blöcken scrollen zum Hineinzoomen (engerer Bereich, breitere Blöcke)', dimension: 'Kanal-Dimension', emptyTitle: 'Keine Matrix-Daten für das ausgewählte Zeitfenster', legendAria: 'Health-Score-Legende', bad: 'Schlecht', good: 'Gut', healthyLegend: 'Gesund (≥80)', warningLegend: 'Beobachten (50–79)', criticalLegend: 'Kritisch (<50)', unknownLegend: 'Kein Traffic / zu wenige Stichproben', noTraffic: 'Kein Traffic in diesem Intervall', noTrafficAt: '{time} · kein Traffic', scoreLine: 'Health-Score {score}', resetZoom: 'Zoom zurücksetzen'
    },
    chart: {
      title: 'Verfügbarkeitstrend', description: 'Geglätteter Trend: Fehlerrate · erster Token P50 · Cache-Rate', emptyTitle: 'Keine Trend-Daten für das ausgewählte Zeitfenster', errorLegend: 'Fehlerrate (linke Achse %)', cacheLegend: 'Cache-Rate (linke Achse %)', ttftLegend: 'Erster Token P50 (rechte Achse)', errorDataset: 'Fehlerrate-Trend %', cacheDataset: 'Cache-Rate-Trend %', ttftDataset: 'Erster-Token-Trend P50 (ms)', percentAxis: 'Quote %', resetZoom: 'Zoom zurücksetzen'
    },
    errorDetail: { http: 'HTTP {code}', upstream: 'Upstream {code}', noMessage: 'Keine Fehlermeldung', empty: 'Nur Kategorie-Anteile (Beispielmeldungen nur für Administratoren sichtbar)' },
    errorCategories: {
      content_policy: 'Inhaltsrichtlinie', authentication: 'Authentifizierung', context_limit: 'Kontextlimit', invalid_request: 'Ungültige Anfrage', model_unsupported: 'Nicht unterstütztes Modell', group_access: 'Gruppenzugriff', quota_or_balance: 'Kontingent oder Guthaben', account_pool_unavailable: 'Konto-Pool nicht verfügbar', rate_or_capacity: 'Begrenzung oder Kapazität', timeout: 'Timeout', transport_or_stream: 'Transport oder Stream', upstream_forbidden: 'Upstream abgelehnt', not_found: 'Nicht gefunden', client_cancelled: 'Vom Client abgebrochen', upstream_5xx: 'Upstream 5xx', internal: 'Intern', other: 'Sonstige'
    },
    rank: {
      gold: 'Platz 1 Gold',
      silver: 'Platz 2 Silber',
      bronze: 'Platz 3 Bronze',
      place: 'Platz {n}',
      unranked: 'Nicht platziert',
    },
    settings: {
      title: 'V2 Datenmonitor-Konfiguration',
      description:
        'Konfiguriere die Dimensionen der passiven Nutzungs-Aggregation (Plattform / Modell / Gruppe) und die Aktualisierungsfrequenz. Health-Farben und Details auf der Benutzerseite /monitor zeigen Quoten, RPM und TPM – nicht die absolute Anzahl der Anfragen.',
      save: 'Speichern',
      loading: 'Wird geladen…',
      loadFailed: 'V2-Konfiguration konnte nicht geladen werden',
      saveSuccess: 'V2 Monitor-Konfiguration gespeichert',
      saveFailed: 'V2-Konfiguration konnte nicht gespeichert werden',
      modeBanner:
        'Der Systemmodus ist aktuell {mode}. Die V2-Minuten-Aggregation läuft nicht; diese Konfiguration kann jetzt vorbereitet werden und wird nach dem Wechsel zu {modeV2} wirksam. Ändere den Modus unter Systemeinstellungen → Funktionsschalter.',
      modeClosed: 'Kanal-Monitor deaktiviert',
      modeV1: 'V1 aktive Prüfungen',
      modeV2: 'V2 passives Monitoring',
      enableTitle: 'V2-Aggregation aktivieren',
      enableHint:
        'Gilt, wenn der Systemmodus V2 ist. Ausschalten stoppt nur die Aggregation dieser Konfiguration; der Systemmodus-Schalter bleibt unter Funktionsschalter.',
      refreshTitle: 'Aggregations-Intervall',
      refreshHint: 'Beeinflusst die zeitliche Granularität der Matrix und die Aktualisierungsfrequenz',
      refreshAria: 'Aggregations-Intervall',
      platformsTitle: 'Plattformen und Modelle',
      platformsHint:
        'Leer lassen = alle echten Modellnamen anzeigen; wenn ausgefüllt, bekommen nur gelistete Modelle eigene Zeilen und der Rest läuft unter „Andere“ zusammen',
      modelsPlaceholder: 'Leer = alle echten Modelle; oder Liste beliebter Modelle (Rest → Andere)',
      badgeAllModels: 'Alle Modelle',
      badgeOther: '+ Andere',
      groupsTitle: 'Überwachte Gruppen',
      groupsSelected: '{count} Gruppen ausgewählt',
      groupsAll: 'Alle Gruppen',
      groupsEmpty: 'Keine Gruppen verfügbar',
      errorsTitle: 'Fehlerkategorien und Ignorierte',
      errorsHint:
        'Als „ignorieren“ markierte Kategorien werden aus Fehlerrate und Health-Score ausgeschlossen, erscheinen aber weiterhin ausgegraut in der Fehleraufschlüsselung. Nicht zugeordnete Fehler laufen unter „Andere“ zusammen.',
      ignoredSummary: 'Ignoriert: {ignored} Kategorien · in die Fehlerrate einbezogen: {counted} Kategorien',
      healthTitle: 'Health-Schwellenwerte',
      healthHint:
        'Steuert die für Benutzer sichtbaren Farbbänder und den Gesamtscore. Die Standardwerte sind tolerant, damit kleine Fehlerraten oder eine niedrige Cache-Rate nicht sofort als fehlerhaft angezeigt werden.',
      fields: {
        minimumSample: 'Mindestanzahl Stichproben',
        warningError: 'Fehlerrate beobachten %',
        criticalError: 'Fehlerrate kritisch %',
        targetTtft: 'TTFT-Ziel ms',
        warningTtft: 'TTFT beobachten ms',
        criticalTtft: 'TTFT kritisch ms',
        warningCache: 'Cache-Rate beobachten %',
        criticalCache: 'Cache-Rate kritisch %',
      },
      namedModelsEmpty: 'Die Plattform-Modelllisten sind leer: jeder echte Modellname wird angezeigt (nicht unter „Andere“ zusammengefasst).',
      namedModelsCount: '{count} benannte Modell-Dimensionen werden angezeigt; nicht gelistete Modelle laufen je Plattform unter „Andere“ zusammen.',
      userContractTitle: 'Anzeige-Konvention für Benutzer',
      userContract: {
        health: 'Health-Farbgewichtung: Fehlerrate 60 % + erster Token P50 20 % + Cache-Rate 20 % (Schwellenwerte oben konfigurierbar)',
        trend: 'Der Trend kann zwischen Puls-Matrix und Liniendiagramm gewechselt werden (Fehler · Cache · erster Token)',
        latency: 'Die Latenz zeigt AVG · P50 · P90; absolute Anfrage- / Fehlerzahlen werden nicht angezeigt',
        models: 'Leere Modelllisten zeigen echte Namen und schieben niemals alles unter „Andere“',
      },
    },
    admin: {
      descriptionV1:
        'Der Systemmodus ist V1 aktive Prüfungen: verwalte Prüfmonitore und führe Prüfungen jetzt aus; die V2-Aggregation läuft nicht.',
      descriptionV2:
        'Der Systemmodus ist V2 passives Monitoring: konfiguriere die Aggregations-Dimensionen; V1 aktive Prüfungen laufen nicht.',
      tabAria: 'Monitor-Verwaltung',
      tabV2: 'V2 Datenmonitor-Konfiguration',
      tabV1Active: 'V1 aktive Prüfungen',
      tabV1History: 'V1-Verlauf (Prüfungen im aktuellen Modus nicht aktiv)',
    },
  },
}
