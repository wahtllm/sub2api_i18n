/** Channel Monitor V2 (user + admin passive monitor UI) */
export default {
  channelMonitorV2: {
    title: 'Surveillance des canaux',
    updating: 'Mise à jour des données',
    updatedTo: 'Mis à jour à {time}',
    partialCoverage: 'Couverture historique partielle',
    bootstrap: {
      title: 'Construction des données de surveillance historiques',
      description:
        'Lors de la première activation, l\'agrégation passive remplit silencieusement en arrière-plan les fenêtres 90m, 24h, 7d et 30d. Toutes les plages seront complètes une fois cette opération terminée.',
      progress: '{percent}% terminé',
      working: 'Agrégation en arrière-plan...',
    },
    timeRange: 'Plage de temps',
    clearFilters: 'Réinitialiser',
    refreshingFilters: 'Filtres modifiés ; actualisation de la matrice, de la tendance et des détails...',
    switchingData: 'Chargement des données filtrées...',
    summaryAria: 'Résumé de la plage sélectionnée',
    loadFailed: 'Échec du chargement de la surveillance des canaux',
    detailLoadFailed: 'Échec du chargement des détails de la surveillance des canaux',
    otherModels: 'Autres modèles',
    ignored: 'Ignoré',
    currentUser: 'Utilisateur actuel',
    ranges: { '90m': '90m', '24h': '24h', '7d': '7d', '30d': '30d' },
    filters: {
      platform: 'Plateforme', allPlatforms: 'Toutes', group: 'Groupe', allGroups: 'Tous', model: 'Modèle', allModels: 'Tous',
      empty: 'Aucune option', selectedCount: '{count}', labelValue: '{label} : {value}'
    },
    groupBy: {
      label: 'Regrouper par', platform: 'Plateforme', platformGroup: 'Plateforme / Groupe', platformModel: 'Plateforme / Modèle', platformGroupModel: 'Plateforme / Groupe / Modèle'
    },
    trendView: { label: 'Vue de tendance', pulse: 'Matrice de pulsations', line: 'Graphique linéaire' },
    healthMode: { label: 'Affichage de l\'état de santé', overall: 'Global', success: 'Taux d\'erreur', ttft: 'Premier token', cache: 'Taux de cache' },
    tabs: { aria: 'Dimension de détail', models: 'Modèles', errors: 'Causes d\'erreur', users: 'Classement des utilisateurs' },
    metrics: {
      rpm: 'RPM',
      tpm: 'TPM',
      tps: 'Tokens/s',
      rpmDetail: 'Requêtes par minute',
      tpmDetail: 'Tokens par minute',
      tpsDetail: 'Calculé comme TPM ÷ 60',
      errorRate: 'Taux d\'erreur',
      ttft: 'Premier token',
      ttftP50: 'Premier token P50',
      durationP50: 'Durée P50',
      cacheRate: 'Taux de cache',
      cacheDetail: 'Part de cache en lecture',
      successRate: 'Taux de succès',
      successRateValue: 'Taux de succès {value}',
      errorRateValue: 'Taux d\'erreur {value}',
      rpmValue: 'RPM {value}',
      tpmValue: 'TPM {value}',
      tpsValue: 'Tokens/s {value}',
      ttftValue: 'Premier token {value}',
      durationValue: 'Durée {value}',
      cacheRateValue: 'Taux de cache {value}',
    },
    table: { platformModel: 'Plateforme / Modèle', rank: 'Rang', user: 'Utilisateur' },
    empty: { title: 'Aucune donnée à afficher', description: 'Essayez de modifier la plage de temps ou les filtres' },
    bucket: { minutes: 'Intervalles de {count} minute(s)', hours: 'Intervalles de {count} heure(s)', days: 'Intervalles de {count} jour(s)' },
    matrix: {
      title: 'Tendance de disponibilité', description: 'Chaque ligne correspond à une dimension de canal et chaque bloc à un intervalle d\'agrégation ; survolez pour afficher les détails', wheelZoom: 'Molette sur les blocs pour zoomer (plage plus courte, blocs plus larges)', wheelZoomX: 'Molette sur les blocs pour zoomer (plage plus courte, blocs plus larges)', dimension: 'Dimension de canal', emptyTitle: 'Aucune donnée de matrice pour la fenêtre sélectionnée', legendAria: 'Légende du score de santé', bad: 'Mauvais', good: 'Bon', healthyLegend: 'Sain (≥80)', warningLegend: 'À surveiller (50–79)', criticalLegend: 'Critique (<50)', unknownLegend: 'Sans trafic / échantillons insuffisants', noTraffic: 'Aucun trafic dans cet intervalle', noTrafficAt: '{time} · aucun trafic', scoreLine: 'Score de santé {score}', resetZoom: 'Réinitialiser le zoom'
    },
    chart: {
      title: 'Tendance de disponibilité', description: 'Tendance lissée : taux d\'erreur · premier token P50 · taux de cache', emptyTitle: 'Aucune donnée de tendance pour la fenêtre sélectionnée', errorLegend: 'Taux d\'erreur (axe gauche %)', cacheLegend: 'Taux de cache (axe gauche %)', ttftLegend: 'Premier token P50 (axe droit)', errorDataset: 'Tendance du taux d\'erreur %', cacheDataset: 'Tendance du taux de cache %', ttftDataset: 'Tendance du premier token P50 (ms)', percentAxis: 'Taux %', resetZoom: 'Réinitialiser le zoom'
    },
    errorDetail: { http: 'HTTP {code}', upstream: 'Upstream {code}', noMessage: 'Aucun message d\'erreur', empty: 'Répartition par catégorie uniquement (les messages d\'exemple sont réservés aux administrateurs)' },
    errorCategories: {
      content_policy: 'Politique de contenu', authentication: 'Authentification', context_limit: 'Limite de contexte', invalid_request: 'Requête invalide', model_unsupported: 'Modèle non pris en charge', group_access: 'Accès au groupe', quota_or_balance: 'Quota ou solde', account_pool_unavailable: 'Pool de comptes indisponible', rate_or_capacity: 'Limitation de débit ou capacité', timeout: 'Délai dépassé', transport_or_stream: 'Transport ou flux', upstream_forbidden: 'Upstream refusé', not_found: 'Introuvable', client_cancelled: 'Annulé par le client', upstream_5xx: 'Upstream 5xx', internal: 'Interne', other: 'Autre'
    },
    rank: {
      gold: 'Rang 1 : or',
      silver: 'Rang 2 : argent',
      bronze: 'Rang 3 : bronze',
      place: 'Rang {n}',
      unranked: 'Non classé',
    },
    settings: {
      title: 'Configuration de la surveillance de données V2',
      description:
        'Configurez les dimensions d\'agrégation passive de l\'utilisation (plateforme / modèle / groupe) et la cadence d\'actualisation. Les couleurs de santé et les détails de la page utilisateur /monitor affichent des taux, RPM et TPM — et non le volume absolu de requêtes.',
      save: 'Enregistrer',
      loading: 'Chargement...',
      loadFailed: 'Échec du chargement de la configuration V2',
      saveSuccess: 'Configuration de surveillance V2 enregistrée',
      saveFailed: 'Échec de l\'enregistrement de la configuration V2',
      modeBanner:
        'Mode système actuel : {mode}. L\'agrégation par minute V2 ne s\'exécutera pas ; cette configuration peut être préparée dès maintenant et prendra effet après le passage en {modeV2}. Modifiez le mode dans Paramètres système → Commutateurs de fonctionnalités.',
      modeClosed: 'Surveillance des canaux désactivée',
      modeV1: 'Sondes actives V1',
      modeV2: 'Surveillance passive V2',
      enableTitle: 'Activer l\'agrégation V2',
      enableHint:
        'S\'applique lorsque le mode système est V2. La désactivation interrompt uniquement l\'agrégation de cette configuration ; le commutateur de mode système reste dans Commutateurs de fonctionnalités.',
      refreshTitle: 'Intervalle d\'agrégation',
      refreshHint: 'Affecte la granularité temporelle de la matrice et la cadence d\'actualisation',
      refreshAria: 'Intervalle d\'agrégation',
      platformsTitle: 'Plateformes et modèles',
      platformsHint:
        'Laisser vide = afficher tous les noms de modèles réels ; une fois renseignée, seuls les modèles listés obtiennent leur propre ligne et les autres sont regroupés dans « Autre »',
      modelsPlaceholder: 'Vide = tous les modèles réels ; ou listez les modèles populaires (le reste → Autre)',
      badgeAllModels: 'Tous les modèles',
      badgeOther: '+ Autres',
      groupsTitle: 'Groupes surveillés',
      groupsSelected: '{count} groupe(s) sélectionné(s)',
      groupsAll: 'Tous les groupes',
      groupsEmpty: 'Aucun groupe disponible',
      errorsTitle: 'Catégories d\'erreur et exclusions',
      errorsHint:
        'Les catégories « ignorer » cochées sont exclues du taux d\'erreur et du score de santé, mais apparaissent toujours en gris dans la répartition des erreurs. Les erreurs non reconnues sont regroupées dans « Autre ».',
      ignoredSummary: '{ignored} catégories ignorées · {counted} comptées dans le taux d\'erreur',
      healthTitle: 'Seuils de santé',
      healthHint:
        'Contrôle les bandes de couleur côté utilisateur et le score global. Les valeurs par défaut sont tolérantes afin qu\'un faible taux d\'erreur ou un faible taux de cache ne s\'affiche pas immédiatement comme anormal.',
      fields: {
        minimumSample: 'Échantillons minimum',
        warningError: 'Taux d\'erreur à surveiller %',
        criticalError: 'Taux d\'erreur critique %',
        targetTtft: 'TTFT cible ms',
        warningTtft: 'TTFT à surveiller ms',
        criticalTtft: 'TTFT critique ms',
        warningCache: 'Taux de cache à surveiller %',
        criticalCache: 'Taux de cache critique %',
      },
      namedModelsEmpty: 'Les listes de modèles par plateforme sont vides : chaque nom de modèle réel sera affiché (non regroupé dans « Autre »).',
      namedModelsCount: 'Affiche {count} dimensions de modèles nommés ; les modèles non listés sont regroupés dans « Autre » par plateforme.',
      userContractTitle: 'Convention d\'affichage côté utilisateur',
      userContract: {
        health: 'Pondération des couleurs de santé : taux d\'erreur 60% + premier token P50 20% + taux de cache 20% (seuils configurables ci-dessus)',
        trend: 'La tendance peut basculer entre matrice de pulsations et graphique linéaire (erreur · cache · premier token)',
        latency: 'La latence affiche AVG · P50 · P90 ; les nombres absolus de requêtes / d\'erreurs ne sont pas affichés',
        models: 'Des listes de modèles vides affichent les noms réels et ne regroupent jamais tout dans « Autre »',
      },
    },
    admin: {
      descriptionV1:
        'Mode système actuel : Sondes actives V1. Gérez les moniteurs de sondes et lancez des vérifications maintenant ; l\'agrégation V2 ne s\'exécutera pas.',
      descriptionV2:
        'Mode système actuel : Surveillance passive V2. Configurez les dimensions d\'agrégation ; les sondes actives V1 ne s\'exécuteront pas.',
      tabAria: 'Gestion de la surveillance',
      tabV2: 'Configuration de la surveillance de données V2',
      tabV1Active: 'Sondes actives V1',
      tabV1History: 'Historique V1 (sondes inactives dans le mode actuel)',
    },
  },
}
