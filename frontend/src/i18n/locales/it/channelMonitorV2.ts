/** Channel Monitor V2 (user + admin passive monitor UI) */
export default {
  channelMonitorV2: {
    title: 'Monitor dei canali',
    updating: 'Aggiornamento dei dati',
    updatedTo: 'Aggiornato alle {time}',
    partialCoverage: 'Copertura storica parziale',
    bootstrap: {
      title: 'Creazione dei dati storici di monitoraggio',
      description:
        'Alla prima attivazione, l\'aggregazione passiva completa in background e in modo silenzioso le finestre 90m, 24h, 7d e 30d. Al termine, tutti gli intervalli diventano completi.',
      progress: '{percent}% completato',
      working: 'Aggregazione in background…',
    },
    timeRange: 'Intervallo di tempo',
    clearFilters: 'Reimposta',
    refreshingFilters: 'Filtri modificati; aggiornamento di matrice, tendenza e dettagli…',
    switchingData: 'Cambio dei dati filtrati…',
    summaryAria: 'Riepilogo dell\'intervallo selezionato',
    loadFailed: 'Caricamento del monitor dei canali non riuscito',
    detailLoadFailed: 'Caricamento dei dettagli del monitor dei canali non riuscito',
    otherModels: 'Altri modelli',
    ignored: 'Ignorati',
    currentUser: 'Utente corrente',
    ranges: { '90m': '90m', '24h': '24h', '7d': '7d', '30d': '30d' },
    filters: {
      platform: 'Piattaforma', allPlatforms: 'Tutte', group: 'Gruppo', allGroups: 'Tutti', model: 'Modello', allModels: 'Tutti',
      empty: 'Nessuna opzione', selectedCount: '{count}', labelValue: '{label}: {value}'
    },
    groupBy: {
      label: 'Raggruppa per', platform: 'Piattaforma', platformGroup: 'Piattaforma / Gruppo', platformModel: 'Piattaforma / Modello', platformGroupModel: 'Piattaforma / Gruppo / Modello'
    },
    trendView: { label: 'Vista tendenza', pulse: 'Matrice a impulsi', line: 'Grafico a linee' },
    healthMode: { label: 'Visualizzazione della salute', overall: 'Generale', success: 'Tasso di errore', ttft: 'Primo token', cache: 'Tasso di cache' },
    tabs: { aria: 'Dimensione dettaglio', models: 'Modelli', errors: 'Cause di errore', users: 'Classifica utenti' },
    metrics: {
      rpm: 'RPM',
      tpm: 'TPM',
      tps: 'Tokens/s',
      rpmDetail: 'Richieste al minuto',
      tpmDetail: 'Token al minuto',
      tpsDetail: 'Derivato come TPM ÷ 60',
      errorRate: 'Tasso di errore',
      ttft: 'Primo token',
      ttftP50: 'Primo token P50',
      durationP50: 'Durata P50',
      cacheRate: 'Tasso di cache',
      cacheDetail: 'Quota di letture da cache',
      successRate: 'Tasso di successo',
      successRateValue: 'Tasso di successo {value}',
      errorRateValue: 'Tasso di errore {value}',
      rpmValue: 'RPM {value}',
      tpmValue: 'TPM {value}',
      tpsValue: 'Tokens/s {value}',
      ttftValue: 'Primo token {value}',
      durationValue: 'Durata {value}',
      cacheRateValue: 'Tasso di cache {value}',
    },
    table: { platformModel: 'Piattaforma / Modello', rank: 'Posizione', user: 'Utente' },
    empty: { title: 'Nessun dato da visualizzare', description: 'Prova a modificare l\'intervallo di tempo o i filtri' },
    bucket: { minutes: 'Bucket di {count} minuti', hours: 'Bucket di {count} ore', days: 'Bucket di {count} giorni' },
    matrix: {
      title: 'Tendenza di disponibilità', description: 'Ogni riga è una dimensione del canale e ogni blocco è un intervallo aggregato; passa con il puntatore per i dettagli', wheelZoom: 'Scorri con la rotella sui blocchi per ingrandire (intervallo più stretto, blocchi più larghi)', wheelZoomX: 'Scorri con la rotella sui blocchi per ingrandire (intervallo più stretto, blocchi più larghi)', dimension: 'Dimensione del canale', emptyTitle: 'Nessun dato della matrice per la finestra selezionata', legendAria: 'Legenda del punteggio di salute', bad: 'Scadente', good: 'Buono', healthyLegend: 'In salute (≥80)', warningLegend: 'Attenzione (50–79)', criticalLegend: 'Critico (<50)', unknownLegend: 'Nessun traffico / campioni insufficienti', noTraffic: 'Nessun traffico in questo intervallo', noTrafficAt: '{time} · nessun traffico', scoreLine: 'Punteggio di salute {score}', resetZoom: 'Reimposta zoom'
    },
    chart: {
      title: 'Tendenza di disponibilità', description: 'Tendenza smussata: tasso di errore · primo token P50 · tasso di cache', emptyTitle: 'Nessun dato di tendenza per la finestra selezionata', errorLegend: 'Tasso di errore (asse di sinistra %)', cacheLegend: 'Tasso di cache (asse di sinistra %)', ttftLegend: 'Primo token P50 (asse di destra)', errorDataset: 'Tendenza tasso di errore %', cacheDataset: 'Tendenza tasso di cache %', ttftDataset: 'Tendenza primo token P50 (ms)', percentAxis: 'Tasso %', resetZoom: 'Reimposta zoom'
    },
    errorDetail: { http: 'HTTP {code}', upstream: 'Upstream {code}', noMessage: 'Nessun messaggio di errore', empty: 'Solo percentuali per categoria (i messaggi di esempio sono visibili solo agli amministratori)' },
    errorCategories: {
      content_policy: 'Policy dei contenuti', authentication: 'Autenticazione', context_limit: 'Limite di contesto', invalid_request: 'Richiesta non valida', model_unsupported: 'Modello non supportato', group_access: 'Accesso al gruppo', quota_or_balance: 'Quota o saldo', account_pool_unavailable: 'Pool di account non disponibile', rate_or_capacity: 'Limite di frequenza o capacità', timeout: 'Timeout', transport_or_stream: 'Trasporto o streaming', upstream_forbidden: 'Upstream negato', not_found: 'Non trovato', client_cancelled: 'Annullato dal client', upstream_5xx: 'Upstream 5xx', internal: 'Interno', other: 'Altro'
    },
    rank: {
      gold: 'Posizione 1: oro',
      silver: 'Posizione 2: argento',
      bronze: 'Posizione 3: bronzo',
      place: 'Posizione {n}',
      unranked: 'Fuori classifica',
    },
    settings: {
      title: 'Configurazione monitor dati V2',
      description:
        'Configura le dimensioni di aggregazione passiva dell\'utilizzo (piattaforma / modello / gruppo) e la frequenza di aggiornamento. Colori di salute e dettagli nella pagina utente /monitor mostrano tassi, RPM e TPM — non il volume assoluto delle richieste.',
      save: 'Salva',
      loading: 'Caricamento…',
      loadFailed: 'Caricamento della configurazione V2 non riuscito',
      saveSuccess: 'Configurazione monitor V2 salvata',
      saveFailed: 'Salvataggio della configurazione V2 non riuscito',
      modeBanner:
        'La modalità di sistema è attualmente {mode}. L\'aggregazione al minuto V2 non verrà eseguita; questa configurazione può essere preparata ora e diventa effettiva dopo il passaggio a {modeV2}. Cambia la modalità in Impostazioni di sistema → Opzioni funzionalità.',
      modeClosed: 'Monitor dei canali disattivato',
      modeV1: 'Sonde attive V1',
      modeV2: 'Monitoraggio passivo V2',
      enableTitle: 'Attiva aggregazione V2',
      enableHint:
        'Si applica quando la modalità di sistema è V2. Disattivandolo si interrompe solo l\'aggregazione di questa configurazione; l\'interruttore della modalità di sistema resta in Opzioni funzionalità.',
      refreshTitle: 'Intervallo di aggregazione',
      refreshHint: 'Influenza la granularità temporale della matrice e la frequenza di aggiornamento',
      refreshAria: 'Intervallo di aggregazione',
      platformsTitle: 'Piattaforme e modelli',
      platformsHint:
        'Lascia vuoto = mostra tutti i veri nomi dei modelli; se compilato, solo i modelli elencati hanno una propria riga e il resto confluisce in “Altro”',
      modelsPlaceholder: 'Vuoto = tutti i modelli reali; oppure elenca i modelli più diffusi (resto → Altro)',
      badgeAllModels: 'Tutti i modelli',
      badgeOther: '+ Altro',
      groupsTitle: 'Gruppi monitorati',
      groupsSelected: '{count} gruppi selezionati',
      groupsAll: 'Tutti i gruppi',
      groupsEmpty: 'Nessun gruppo disponibile',
      errorsTitle: 'Categorie di errore ed esclusioni',
      errorsHint:
        'Le categorie con “ignora” attivato sono escluse dal tasso di errore e dal punteggio di salute, ma compaiono comunque in grigio nella ripartizione degli errori. Gli errori non corrispondenti confluiscono in “Altro”.',
      ignoredSummary: 'Ignorate {ignored} categorie · conteggiate nel tasso di errore {counted} categorie',
      healthTitle: 'Soglie di salute',
      healthHint:
        'Controlla le fasce di colore visibili all\'utente e il punteggio complessivo. I valori predefiniti sono tolleranti, così tassi di errore contenuti o una cache bassa non appaiono subito come problemi.',
      fields: {
        minimumSample: 'Campioni minimi',
        warningError: 'Tasso di errore attenzione %',
        criticalError: 'Tasso di errore critico %',
        targetTtft: 'TTFT obiettivo ms',
        warningTtft: 'TTFT attenzione ms',
        criticalTtft: 'TTFT critico ms',
        warningCache: 'Tasso di cache attenzione %',
        criticalCache: 'Tasso di cache critico %',
      },
      namedModelsEmpty: 'Gli elenchi di modelli per piattaforma sono vuoti: verrà mostrato ogni vero nome di modello (non confluito in “Altro”).',
      namedModelsCount: 'Vengono mostrate {count} dimensioni di modelli nominali; i modelli non elencati confluiscono in “Altro” per piattaforma.',
      userContractTitle: 'Contratto di visualizzazione lato utente',
      userContract: {
        health: 'Pesi dei colori di salute: tasso di errore 60% + primo token P50 20% + tasso di cache 20% (soglie configurabili sopra)',
        trend: 'La tendenza può passare tra matrice a impulsi e grafico a linee (errore · cache · primo token)',
        latency: 'La latenza mostra AVG · P50 · P90; i conteggi assoluti di richieste / errori non sono mostrati',
        models: 'Gli elenchi di modelli vuoti mostrano i nomi reali e non riversano mai tutto in “Altro”',
      },
    },
    admin: {
      descriptionV1:
        'La modalità di sistema è V1 con sonde attive: gestisci i monitor con sonde ed esegui subito i controlli; l\'aggregazione V2 non viene eseguita.',
      descriptionV2:
        'La modalità di sistema è monitoraggio passivo V2: configura le dimensioni di aggregazione; le sonde attive V1 non vengono eseguite.',
      tabAria: 'Gestione dei monitor',
      tabV2: 'Configurazione monitor dati V2',
      tabV1Active: 'Sonde attive V1',
      tabV1History: 'Cronologia V1 (sonde non attive nella modalità corrente)',
    },
  },
}
