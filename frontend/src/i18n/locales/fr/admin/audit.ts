export default {
  audit: {
    title: 'Journaux d\'audit',
    description: 'Enregistre les opérations du plan de gestion effectuées par les administrateurs et les utilisateurs. Les identifiants présents dans les en-têtes ne conservent que leur premier et leur dernier caractère, et les corps de requête sont masqués. Les entrées ne peuvent pas être supprimées individuellement ; le nettoyage complet nécessite une vérification à deux facteurs.',
    clearAll: 'Tout effacer',
    empty: 'Aucun journal d\'audit pour le moment',
    loadFailed: 'Échec du chargement des journaux d\'audit',
    filters: {
      all: 'Tous',
      q: 'Mot-clé',
      qPlaceholder: 'Chemin / action / e-mail de l\'acteur',
      actorEmail: 'E-mail de l\'acteur',
      action: 'Action',
      clientIp: 'IP client',
      method: 'Méthode',
      authMethod: 'Méthode d\'authentification',
      result: 'Résultat',
      resultSuccess: 'Succès',
      resultFailure: 'Échec',
      startTime: 'Heure de début',
      endTime: 'Heure de fin'
    },
    columns: {
      time: 'Heure',
      actor: 'Acteur',
      action: 'Action',
      method: 'Méthode',
      result: 'Résultat',
      clientIp: 'IP client',
      detail: 'Détail'
    },
    detail: {
      title: 'Détail du journal d\'audit',
      actorRole: 'Rôle',
      methodPath: 'Méthode / Chemin',
      latency: 'Latence',
      requestId: 'ID de requête',
      credential: 'Identifiant (masqué)',
      userAgent: 'User-Agent',
      requestBody: 'Corps de la requête (masqué)',
      extra: 'Informations supplémentaires'
    },
    clearConfirm: {
      title: 'Effacer tous les journaux d\'audit',
      message: 'Cette action supprime définitivement tous les journaux d\'audit et est irréversible. L\'effacement proprement dit est lui-même consigné. Continuer ?',
      totpTitle: 'Saisir le code à deux facteurs',
      totpHint: 'L\'effacement des journaux d\'audit nécessite une nouvelle vérification TOTP.',
      success: '{count} journal(s) d\'audit effacé(s)',
      failed: 'Échec de l\'effacement des journaux d\'audit'
    }
  }
}
