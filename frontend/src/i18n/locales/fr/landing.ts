export default {
  batchImageGuide: {
    title: 'Génération d\'images par lot',
    description: 'Soumettez plusieurs prompts en une seule tâche et téléchargez les images générées une fois terminé'
  },
  // Home Page
  home: {
    viewOnGithub: 'Voir sur GitHub',
    viewDocs: 'Voir la documentation',
    docs: 'Docs',
    switchToLight: 'Passer en mode clair',
    switchToDark: 'Passer en mode sombre',
    dashboard: 'Tableau de bord',
    login: 'Se connecter',
    getStarted: 'Commencer',
    goToDashboard: 'Aller au tableau de bord',
    // User-focused value proposition
    heroSubtitle: 'Une seule clé, tous les modèles d\'IA',
    heroDescription: 'Fini la gestion de plusieurs abonnements. Accédez à Claude, GPT, Gemini et plus encore avec une seule clé API',
    tags: {
      subscriptionToApi: 'Abonnement en API',
      stickySession: 'Persistance de session',
      realtimeBilling: 'Paiement à l\'usage'
    },
    // Pain points section
    painPoints: {
      title: 'Ça vous parle ?',
      items: {
        expensive: {
          title: 'Abonnements coûteux',
          desc: 'Payer plusieurs abonnements d\'IA dont le total grimpe chaque mois'
        },
        complex: {
          title: 'Comptes en désordre',
          desc: 'Gérer des comptes et des clés API éparpillés sur différentes plateformes'
        },
        unstable: {
          title: 'Interruptions de service',
          desc: 'Des comptes uniques qui atteignent leurs limites de débit et perturbent votre flux de travail'
        },
        noControl: {
          title: 'Aucun contrôle d\'utilisation',
          desc: 'Impossible de suivre où va votre argent ni de limiter l\'utilisation des membres de l\'équipe'
        }
      }
    },
    // Solutions section
    solutions: {
      title: 'Nous résolvons ces problèmes',
      subtitle: 'Trois étapes simples pour un accès à l\'IA sans souci'
    },
    features: {
      unifiedGateway: 'Accès en un clic',
      unifiedGatewayDesc: 'Obtenez une seule clé API pour appeler tous les modèles d\'IA connectés. Plus besoin de demandes séparées.',
      multiAccount: 'Toujours fiable',
      multiAccountDesc: 'Routage intelligent entre plusieurs comptes Upstream avec basculement automatique. Dites adieu aux erreurs.',
      balanceQuota: 'Payez ce que vous consommez',
      balanceQuotaDesc: 'Facturation à l\'usage avec limites de quota. Visibilité complète sur la consommation de l\'équipe.'
    },
    // Comparison section
    comparison: {
      title: 'Pourquoi nous choisir ?',
      headers: {
        feature: 'Comparatif',
        official: 'Abonnements officiels',
        us: 'Notre plateforme'
      },
      items: {
        pricing: {
          feature: 'Tarification',
          official: 'Frais mensuels fixes, à payer même sans utilisation',
          us: 'Payez uniquement ce que vous consommez'
        },
        models: {
          feature: 'Choix des modèles',
          official: 'Un seul fournisseur',
          us: 'Changez de modèle librement'
        },
        management: {
          feature: 'Gestion des comptes',
          official: 'Gérez chaque service séparément',
          us: 'Une clé unifiée, un seul tableau de bord'
        },
        stability: {
          feature: 'Stabilité',
          official: 'Limites de débit d\'un compte unique',
          us: 'Pool multi-comptes, basculement automatique'
        },
        control: {
          feature: 'Contrôle d\'utilisation',
          official: 'Indisponible',
          us: 'Quotas et analyses détaillées'
        }
      }
    },
    providers: {
      title: 'Modèles d\'IA pris en charge',
      description: 'Une seule API, plusieurs choix',
      supported: 'Pris en charge',
      soon: 'Bientôt',
      claude: 'Claude',
      gemini: 'Gemini',
      antigravity: 'Antigravity',
      more: 'Plus'
    },
    // CTA section
    cta: {
      title: 'Prêt à commencer ?',
      description: 'Inscrivez-vous maintenant et obtenez des crédits d\'essai gratuits pour découvrir un accès à l\'IA sans friction',
      button: 'S\'inscrire gratuitement'
    },
    footer: {
      allRightsReserved: 'Tous droits réservés.'
    }
  },

  // Key Usage Query Page
  keyUsage: {
    title: 'Utilisation de la clé API',
    subtitle: 'Saisissez votre clé API pour consulter en temps réel vos dépenses et votre état d\'utilisation',
    placeholder: 'sk-ant-mirror-xxxxxxxxxxxx',
    query: 'Consulter',
    querying: 'Consultation...',
    privacyNote: 'Votre clé est traitée localement dans le navigateur et ne sera pas stockée',
    dateRange: 'Plage de dates :',
    dateRangeToday: 'Aujourd\'hui',
    dateRange7d: '7 jours',
    dateRange30d: '30 jours',
    dateRange90d: '90 jours',
    dateRangeCustom: 'Personnalisé',
    apply: 'Appliquer',
    used: 'Utilisé',
    detailInfo: 'Informations détaillées',
    tokenStats: 'Statistiques de tokens',
    dailyDetail: 'Détail quotidien',
    modelStats: 'Statistiques d\'utilisation par modèle',
    // Table headers
    date: 'Date',
    model: 'Modèle',
    requests: 'Requêtes',
    inputTokens: 'Tokens d\'entrée',
    outputTokens: 'Tokens de sortie',
    cacheCreationTokens: 'Création de cache',
    cacheReadTokens: 'Lecture du cache',
    cacheWriteTokens: 'Écriture du cache',
    totalTokens: 'Total de tokens',
    cost: 'Coût',
    // Status
    quotaMode: 'Mode de quota par clé',
    walletBalance: 'Solde du portefeuille',
    // Ring card titles
    totalQuota: 'Quota total',
    limit5h: 'Limite de 5 heures',
    limitDaily: 'Limite quotidienne',
    limit7d: 'Limite de 7 jours',
    limitWeekly: 'Limite hebdomadaire',
    limitMonthly: 'Limite mensuelle',
    // Detail rows
    remainingQuota: 'Quota restant',
    expiresAt: 'Expire le',
    todayExpires: '(expire aujourd\'hui)',
    daysLeft: '({days} jours)',
    usedQuota: 'Quota utilisé',
    resetNow: 'Réinitialisation imminente',
    subscriptionType: 'Type d\'abonnement',
    billingType: 'Type de facturation',
    subscriptionExpires: 'Expiration de l\'abonnement',
    // Usage stat cells
    todayRequests: 'Requêtes du jour',
    todayInputTokens: 'Entrée du jour',
    todayOutputTokens: 'Sortie du jour',
    todayTokens: 'Tokens du jour',
    todayCacheCreation: 'Création de cache du jour',
    todayCacheRead: 'Lecture du cache du jour',
    todayCost: 'Coût du jour',
    rpmTpm: 'RPM / TPM',
    totalRequests: 'Total des requêtes',
    totalInputTokens: 'Entrée totale',
    totalOutputTokens: 'Sortie totale',
    totalTokensLabel: 'Tokens totaux',
    totalCacheCreation: 'Création de cache totale',
    totalCacheRead: 'Lecture de cache totale',
    totalCost: 'Coût total',
    avgDuration: 'Durée moyenne',
    // Messages
    enterApiKey: 'Veuillez saisir une clé API',
    querySuccess: 'Consultation réussie',
    queryFailed: 'Échec de la consultation',
    queryFailedRetry: 'Échec de la consultation, veuillez réessayer plus tard',
    noDailyUsage: 'Aucune donnée d\'utilisation quotidienne',
  },

  // Setup Wizard
  setup: {
    title: 'Configuration de Sub2API',
    description: 'Configurez votre instance Sub2API',
    database: {
      title: 'Configuration de la base de données',
      description: 'Connectez-vous à votre base de données PostgreSQL',
      host: 'Hôte',
      port: 'Port',
      username: 'Nom d\'utilisateur',
      password: 'Mot de passe',
      databaseName: 'Nom de la base de données',
      sslMode: 'Mode SSL',
      passwordPlaceholder: 'Mot de passe',
      ssl: {
        disable: 'Désactiver',
        require: 'Requis',
        verifyCa: 'Vérifier le CA',
        verifyFull: 'Vérification complète'
      }
    },
    redis: {
      title: 'Configuration Redis',
      description: 'Connectez-vous à votre serveur Redis',
      host: 'Hôte',
      port: 'Port',
      username: 'Nom d\'utilisateur (facultatif)',
      password: 'Mot de passe (facultatif)',
      database: 'Base de données',
      usernamePlaceholder: 'Laissez vide pour l\'utilisateur par défaut',
      passwordPlaceholder: 'Mot de passe',
      enableTls: 'Activer TLS',
      enableTlsHint: 'Utiliser TLS pour la connexion à Redis (certificats CA publics)'
    },
    admin: {
      title: 'Compte administrateur',
      description: 'Créez votre compte administrateur',
      email: 'E-mail',
      password: 'Mot de passe',
      confirmPassword: 'Confirmer le mot de passe',
      passwordPlaceholder: '8 caractères minimum',
      confirmPasswordPlaceholder: 'Confirmer le mot de passe',
      passwordMismatch: 'Les mots de passe ne correspondent pas'
    },
    ready: {
      title: 'Prêt à installer',
      description: 'Vérifiez votre configuration et terminez l\'installation',
      database: 'Base de données',
      redis: 'Redis',
      adminEmail: 'E-mail administrateur'
    },
    status: {
      testing: 'Test en cours...',
      success: 'Connexion réussie',
      testConnection: 'Tester la connexion',
      installing: 'Installation...',
      completeInstallation: 'Terminer l\'installation',
      completed: 'Installation terminée !',
      redirecting: 'Redirection vers la page de connexion...',
      restarting: 'Le service redémarre, veuillez patienter...',
      timeout: 'Le redémarrage du service prend plus de temps que prévu. Veuillez actualiser la page manuellement.'
    }
  },

  // Common
}
