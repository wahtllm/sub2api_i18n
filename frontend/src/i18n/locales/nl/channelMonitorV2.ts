/** Channel Monitor V2 (user + admin passive monitor UI) */
export default {
  channelMonitorV2: {
    title: 'Kanaalmonitor',
    updating: 'Gegevens worden bijgewerkt',
    updatedTo: 'Bijgewerkt tot {time}',
    partialCoverage: 'Gedeeltelijke historische dekking',
    bootstrap: {
      title: 'Historische monitorgegevens worden opgebouwd',
      description:
        'Bij eerste ingebruikname vult passieve aggregatie op de achtergrond stilzwijgend de vensters 90m, 24h, 7d en 30d. Alle bereiken zijn volledig zodra dit is afgerond.',
      progress: '{percent}% voltooid',
      working: 'Bezig met aggregeren op de achtergrond…',
    },
    timeRange: 'Tijdsbereik',
    clearFilters: 'Resetten',
    refreshingFilters: 'Filters gewijzigd; matrix, trend en details worden vernieuwd…',
    switchingData: 'Bezig met wisselen van gefilterde gegevens…',
    summaryAria: 'Samenvatting van geselecteerd bereik',
    loadFailed: 'Kanaalmonitor laden mislukt',
    detailLoadFailed: 'Details van kanaalmonitor laden mislukt',
    otherModels: 'Overige modellen',
    ignored: 'Genegeerd',
    currentUser: 'Huidige gebruiker',
    ranges: { '90m': '90m', '24h': '24h', '7d': '7d', '30d': '30d' },
    filters: {
      platform: 'Platform', allPlatforms: 'Alle', group: 'Groep', allGroups: 'Alle', model: 'Model', allModels: 'Alle',
      empty: 'Geen opties', selectedCount: '{count}', labelValue: '{label}: {value}'
    },
    groupBy: {
      label: 'Groeperen op', platform: 'Platform', platformGroup: 'Platform / Groep', platformModel: 'Platform / Model', platformGroupModel: 'Platform / Groep / Model'
    },
    trendView: { label: 'Trendweergave', pulse: 'Pulsmatrix', line: 'Lijngrafiek' },
    healthMode: { label: 'Gezondheidswijergave', overall: 'Algemeen', success: 'Foutpercentage', ttft: 'Eerste token', cache: 'Cachepercentage' },
    tabs: { aria: 'Detaildimensie', models: 'Modellen', errors: 'Foutredenen', users: 'Gebruikersranglijst' },
    metrics: {
      rpm: 'RPM',
      tpm: 'TPM',
      tps: 'Tokens/s',
      rpmDetail: 'Verzoeken per minuut',
      tpmDetail: 'Tokens per minuut',
      tpsDetail: 'Berekend als TPM ÷ 60',
      errorRate: 'Foutpercentage',
      ttft: 'Eerste token',
      ttftP50: 'Eerste token P50',
      durationP50: 'Duur P50',
      cacheRate: 'Cachepercentage',
      cacheDetail: 'Aandeel leescache',
      successRate: 'Succespercentage',
      successRateValue: 'Succespercentage {value}',
      errorRateValue: 'Foutpercentage {value}',
      rpmValue: 'RPM {value}',
      tpmValue: 'TPM {value}',
      tpsValue: 'Tokens/s {value}',
      ttftValue: 'Eerste token {value}',
      durationValue: 'Duur {value}',
      cacheRateValue: 'Cachepercentage {value}',
    },
    table: { platformModel: 'Platform / Model', rank: 'Rang', user: 'Gebruiker' },
    empty: { title: 'Geen gegevens om weer te geven', description: 'Probeer het tijdsbereik of de filters aan te passen' },
    bucket: { minutes: 'Buckets van {count} minuten', hours: 'Buckets van {count} uur', days: 'Buckets van {count} dagen' },
    matrix: {
      title: 'Beschikbaarheidstrend', description: 'Elke rij is een kanaaldimensie en elk blok is een aggregatie-interval; beweeg over een blok voor details', wheelZoom: 'Scroll op de blokken om in te zoomen (smaller bereik, bredere blokken)', wheelZoomX: 'Scroll op de blokken om in te zoomen (smaller bereik, bredere blokken)', dimension: 'Kanaaldimensie', emptyTitle: 'Geen matrixgegevens voor het geselecteerde venster', legendAria: 'Legenda gezondheidsscore', bad: 'Slecht', good: 'Goed', healthyLegend: 'Gezond (≥80)', warningLegend: 'Let op (50–79)', criticalLegend: 'Kritiek (<50)', unknownLegend: 'Geen verkeer / onvoldoende samples', noTraffic: 'Geen verkeer in dit interval', noTrafficAt: '{time} · geen verkeer', scoreLine: 'Gezondheidsscore {score}', resetZoom: 'Zoom herstellen'
    },
    chart: {
      title: 'Beschikbaarheidstrend', description: 'Afgevlakte trend: foutpercentage · eerste token P50 · cachepercentage', emptyTitle: 'Geen trendgegevens voor het geselecteerde venster', errorLegend: 'Foutpercentage (linkeras %)', cacheLegend: 'Cachepercentage (linkeras %)', ttftLegend: 'Eerste token P50 (rechteras)', errorDataset: 'Trend foutpercentage %', cacheDataset: 'Trend cachepercentage %', ttftDataset: 'Trend eerste token P50 (ms)', percentAxis: 'Ratio %', resetZoom: 'Zoom herstellen'
    },
    errorDetail: { http: 'HTTP {code}', upstream: 'Upstream {code}', noMessage: 'Geen foutmelding', empty: 'Alleen categoriepercentages (voorbeeldberichten zijn alleen zichtbaar voor beheerders)' },
    errorCategories: {
      content_policy: 'Inhoudsbeleid', authentication: 'Authenticatie', context_limit: 'Contextlimiet', invalid_request: 'Ongeldig verzoek', model_unsupported: 'Niet-ondersteund model', group_access: 'Groepstoegang', quota_or_balance: 'Quota of saldo', account_pool_unavailable: 'Accountpool niet beschikbaar', rate_or_capacity: 'Limiet of capaciteit', timeout: 'Time-out', transport_or_stream: 'Transport of stream', upstream_forbidden: 'Upstream geweigerd', not_found: 'Niet gevonden', client_cancelled: 'Geannuleerd door client', upstream_5xx: 'Upstream 5xx', internal: 'Intern', other: 'Overig'
    },
    rank: {
      gold: 'Rang 1 goud',
      silver: 'Rang 2 zilver',
      bronze: 'Rang 3 brons',
      place: 'Rang {n}',
      unranked: 'Niet gerangschikt',
    },
    settings: {
      title: 'V2-datamonitorconfiguratie',
      description:
        'Configureer de dimensies van passieve gebruikaggregatie (platform / model / groep) en de vernieuwingsfrequentie. Gezondheidskleuren en details op de pagina /monitor van de gebruiker tonen percentages, RPM en TPM — niet het absolute aantal verzoeken.',
      save: 'Opslaan',
      loading: 'Laden…',
      loadFailed: 'V2-configuratie laden mislukt',
      saveSuccess: 'V2-monitorconfiguratie opgeslagen',
      saveFailed: 'V2-configuratie opslaan mislukt',
      modeBanner:
        'De systeemmodus is momenteel {mode}. V2-minuutaggregatie wordt niet uitgevoerd; deze configuratie kan nu al worden voorbereid en wordt actief na overschakelen naar {modeV2}. Wijzig de modus onder Systeeminstellingen → Functieschakelaars.',
      modeClosed: 'Kanaalmonitor uitgeschakeld',
      modeV1: 'V1 actieve probes',
      modeV2: 'V2 passieve monitoring',
      enableTitle: 'V2-aggregatie inschakelen',
      enableHint:
        'Van toepassing wanneer de systeemmodus V2 is. Uitschakelen stopt alleen de aggregatie van deze configuratie; de schakelaar van de systeemmodus blijft onder Functieschakelaars.',
      refreshTitle: 'Aggregatie-interval',
      refreshHint: 'Beïnvloedt de tijdsgranulariteit van de matrix en de vernieuwingsfrequentie',
      refreshAria: 'Aggregatie-interval',
      platformsTitle: 'Platforms en modellen',
      platformsHint:
        'Leeg laten = alle echte modelnamen tonen; wanneer ingevuld krijgen alleen vermelde modellen eigen rijen en wordt de rest samengevoegd onder “Overig”',
      modelsPlaceholder: 'Leeg = alle echte modellen; of noem populaire modellen (rest → Overig)',
      badgeAllModels: 'Alle modellen',
      badgeOther: '+ Overig',
      groupsTitle: 'Gemonitorde groepen',
      groupsSelected: '{count} groepen geselecteerd',
      groupsAll: 'Alle groepen',
      groupsEmpty: 'Geen groepen beschikbaar',
      errorsTitle: 'Foutcategorieën en genegeerde categorieën',
      errorsHint:
        'Categorieën met “negeren” aangevinkt worden uitgesloten van foutpercentage en gezondheidsscore, maar verschijnen nog wel grijs in de foutuitsplitsing. Niet-overeenkomende fouten vallen onder “Overig”.',
      ignoredSummary: 'Genegeerd: {ignored} categorieën · meegeteld in foutpercentage: {counted} categorieën',
      healthTitle: 'Gezondheidsdrempels',
      healthHint:
        'Bepaalt de kleurbanden en de totaalscore die gebruikers zien. De standaardwaarden zijn coulant, zodat kleine foutpercentages of een lage cache niet direct als ongezond worden weergegeven.',
      fields: {
        minimumSample: 'Minimaal aantal samples',
        warningError: 'Foutpercentage let-op %',
        criticalError: 'Foutpercentage kritiek %',
        targetTtft: 'TTFT streefdoel ms',
        warningTtft: 'TTFT let-op ms',
        criticalTtft: 'TTFT kritiek ms',
        warningCache: 'Cachepercentage let-op %',
        criticalCache: 'Cachepercentage kritiek %',
      },
      namedModelsEmpty: 'De modellijsten per platform zijn leeg: alle echte modelnamen worden getoond (niet samengevoegd onder “Overig”).',
      namedModelsCount: '{count} benoemde modeldimensies worden getoond; niet-vermelde modellen vallen per platform onder “Overig”.',
      userContractTitle: 'Weergavecontract voor gebruikers',
      userContract: {
        health: 'Gewichten gezondheidskleur: foutpercentage 60% + eerste token P50 20% + cachepercentage 20% (drempels hierboven configureerbaar)',
        trend: 'De trend kan wisselen tussen pulsmatrix en lijngrafiek (fout · cache · eerste token)',
        latency: 'Latentie toont AVG · P50 · P90; absolute aantallen verzoeken / fouten worden niet getoond',
        models: 'Lege modellijsten tonen echte namen en gooien nooit alles op “Overig”',
      },
    },
    admin: {
      descriptionV1:
        'De systeemmodus is V1 actieve probes: beheer de probe-monitors en voer nu controles uit; V2-aggregatie wordt niet uitgevoerd.',
      descriptionV2:
        'De systeemmodus is V2 passieve monitoring: configureer de aggregatiedimensies; V1 actieve probes worden niet uitgevoerd.',
      tabAria: 'Monitorbeheer',
      tabV2: 'V2-datamonitorconfiguratie',
      tabV1Active: 'V1 actieve probes',
      tabV1History: 'V1-geschiedenis (probes niet actief in de huidige modus)',
    },
  },
}
