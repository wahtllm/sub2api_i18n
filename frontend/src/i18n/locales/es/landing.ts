export default {
  batchImageGuide: {
    title: 'Generación de imágenes por lotes',
    description: 'Envía varios prompts en una sola tarea y descarga las imágenes generadas al completarse'
  },
  // Home Page
  home: {
    viewOnGithub: 'Ver en GitHub',
    viewDocs: 'Ver documentación',
    docs: 'Documentación',
    switchToLight: 'Cambiar a modo claro',
    switchToDark: 'Cambiar a modo oscuro',
    dashboard: 'Panel',
    login: 'Iniciar sesión',
    getStarted: 'Comenzar',
    goToDashboard: 'Ir al panel',
    // User-focused value proposition
    heroSubtitle: 'Una sola clave, todos los modelos de IA',
    heroDescription: 'No necesitas gestionar varias suscripciones. Accede a Claude, GPT, Gemini y más con una sola clave de API',
    tags: {
      subscriptionToApi: 'De suscripción a API',
      stickySession: 'Persistencia de sesión',
      realtimeBilling: 'Pago por uso'
    },
    // Pain points section
    painPoints: {
      title: '¿Te suena familiar?',
      items: {
        expensive: {
          title: 'Costos de suscripción altos',
          desc: 'Pagar por varias suscripciones de IA que se acumulan cada mes'
        },
        complex: {
          title: 'Caos de cuentas',
          desc: 'Gestionar cuentas y claves de API dispersas entre diferentes plataformas'
        },
        unstable: {
          title: 'Interrupciones del servicio',
          desc: 'Cuentas únicas que alcanzan límites de tasa e interrumpen tu flujo de trabajo'
        },
        noControl: {
          title: 'Sin control de uso',
          desc: 'No puedes seguir a dónde va tu dinero ni limitar el uso de los miembros del equipo'
        }
      }
    },
    // Solutions section
    solutions: {
      title: 'Resolvemos estos problemas',
      subtitle: 'Tres pasos simples para un acceso a la IA sin preocupaciones'
    },
    features: {
      unifiedGateway: 'Acceso con un clic',
      unifiedGatewayDesc: 'Obtén una sola clave de API para llamar a todos los modelos de IA conectados. No necesitas solicitar acceso por separado.',
      multiAccount: 'Siempre confiable',
      multiAccountDesc: 'Enrutamiento inteligente entre varias cuentas upstream con conmutación por error automática. Di adiós a los errores.',
      balanceQuota: 'Paga solo por lo que usas',
      balanceQuotaDesc: 'Facturación basada en el uso con límites de cuota. Visibilidad completa del consumo del equipo.'
    },
    // Comparison section
    comparison: {
      title: '¿Por qué elegirnos?',
      headers: {
        feature: 'Comparación',
        official: 'Suscripciones oficiales',
        us: 'Nuestra plataforma'
      },
      items: {
        pricing: {
          feature: 'Precios',
          official: 'Cuota mensual fija, pagas incluso sin usarlo',
          us: 'Pagas solo por lo que usas'
        },
        models: {
          feature: 'Selección de modelos',
          official: 'Solo un proveedor',
          us: 'Cambia de modelo libremente'
        },
        management: {
          feature: 'Gestión de cuentas',
          official: 'Gestiona cada servicio por separado',
          us: 'Clave unificada, un solo panel'
        },
        stability: {
          feature: 'Estabilidad',
          official: 'Límites de tasa en una sola cuenta',
          us: 'Pool de varias cuentas, conmutación automática'
        },
        control: {
          feature: 'Control de uso',
          official: 'No disponible',
          us: 'Cuotas y analíticas detalladas'
        }
      }
    },
    providers: {
      title: 'Modelos de IA compatibles',
      description: 'Una API, múltiples opciones',
      supported: 'Compatible',
      soon: 'Pronto',
      claude: 'Claude',
      gemini: 'Gemini',
      antigravity: 'Antigravity',
      more: 'Más'
    },
    // CTA section
    cta: {
      title: '¿Todo listo para comenzar?',
      description: 'Regístrate ahora y obtén créditos de prueba gratuitos para experimentar un acceso a la IA sin interrupciones',
      button: 'Regístrate gratis'
    },
    footer: {
      allRightsReserved: 'Todos los derechos reservados.'
    }
  },

  // Key Usage Query Page
  keyUsage: {
    title: 'Uso de la clave de API',
    subtitle: 'Introduce tu clave de API para ver el gasto en tiempo real y el estado de uso',
    placeholder: 'sk-ant-mirror-xxxxxxxxxxxx',
    query: 'Consultar',
    querying: 'Consultando...',
    privacyNote: 'Tu clave se procesa localmente en el navegador y no se almacenará',
    dateRange: 'Rango de fechas:',
    dateRangeToday: 'Hoy',
    dateRange7d: '7 días',
    dateRange30d: '30 días',
    dateRange90d: '90 días',
    dateRangeCustom: 'Personalizado',
    apply: 'Aplicar',
    used: 'Usado',
    detailInfo: 'Información detallada',
    tokenStats: 'Estadísticas de tokens',
    dailyDetail: 'Detalle diario',
    modelStats: 'Estadísticas de uso por modelo',
    // Table headers
    date: 'Fecha',
    model: 'Modelo',
    requests: 'Solicitudes',
    inputTokens: 'Tokens de entrada',
    outputTokens: 'Tokens de salida',
    cacheCreationTokens: 'Creación de caché',
    cacheReadTokens: 'Lectura de caché',
    cacheWriteTokens: 'Escritura de caché',
    totalTokens: 'Tokens totales',
    cost: 'Costo',
    // Status
    quotaMode: 'Modo de cuota de la clave',
    walletBalance: 'Saldo de la billetera',
    // Ring card titles
    totalQuota: 'Cuota total',
    limit5h: 'Límite de 5 horas',
    limitDaily: 'Límite diario',
    limit7d: 'Límite de 7 días',
    limitWeekly: 'Límite semanal',
    limitMonthly: 'Límite mensual',
    // Detail rows
    remainingQuota: 'Cuota restante',
    expiresAt: 'Vence el',
    todayExpires: '(vence hoy)',
    daysLeft: '({days} días)',
    usedQuota: 'Cuota usada',
    resetNow: 'Se restablecerá pronto',
    subscriptionType: 'Tipo de suscripción',
    billingType: 'Tipo de facturación',
    subscriptionExpires: 'Vencimiento de la suscripción',
    // Usage stat cells
    todayRequests: 'Solicitudes de hoy',
    todayInputTokens: 'Entrada de hoy',
    todayOutputTokens: 'Salida de hoy',
    todayTokens: 'Tokens de hoy',
    todayCacheCreation: 'Creación de caché de hoy',
    todayCacheRead: 'Lectura de caché de hoy',
    todayCost: 'Costo de hoy',
    rpmTpm: 'RPM / TPM',
    totalRequests: 'Solicitudes totales',
    totalInputTokens: 'Entrada total',
    totalOutputTokens: 'Salida total',
    totalTokensLabel: 'Tokens totales',
    totalCacheCreation: 'Creación de caché total',
    totalCacheRead: 'Lectura de caché total',
    totalCost: 'Costo total',
    avgDuration: 'Duración promedio',
    // Messages
    enterApiKey: 'Introduce una clave de API',
    querySuccess: 'Consulta exitosa',
    queryFailed: 'Consulta fallida',
    queryFailedRetry: 'La consulta falló, inténtalo de nuevo más tarde',
    noDailyUsage: 'Sin datos de uso diario',
  },

  // Setup Wizard
  setup: {
    title: 'Configuración de Sub2API',
    description: 'Configura tu instancia de Sub2API',
    database: {
      title: 'Configuración de la base de datos',
      description: 'Conéctate a tu base de datos PostgreSQL',
      host: 'Host',
      port: 'Puerto',
      username: 'Usuario',
      password: 'Contraseña',
      databaseName: 'Nombre de la base de datos',
      sslMode: 'Modo SSL',
      passwordPlaceholder: 'Contraseña',
      ssl: {
        disable: 'Desactivar',
        require: 'Requerir',
        verifyCa: 'Verificar CA',
        verifyFull: 'Verificación completa'
      }
    },
    redis: {
      title: 'Configuración de Redis',
      description: 'Conéctate a tu servidor Redis',
      host: 'Host',
      port: 'Puerto',
      username: 'Usuario (opcional)',
      password: 'Contraseña (opcional)',
      database: 'Base de datos',
      usernamePlaceholder: 'Déjalo vacío para el usuario predeterminado',
      passwordPlaceholder: 'Contraseña',
      enableTls: 'Activar TLS',
      enableTlsHint: 'Usa TLS al conectarte a Redis (certificados de CA públicos)'
    },
    admin: {
      title: 'Cuenta de administrador',
      description: 'Crea tu cuenta de administrador',
      email: 'Correo electrónico',
      password: 'Contraseña',
      confirmPassword: 'Confirmar contraseña',
      passwordPlaceholder: 'Mínimo 8 caracteres',
      confirmPasswordPlaceholder: 'Confirma la contraseña',
      passwordMismatch: 'Las contraseñas no coinciden'
    },
    ready: {
      title: 'Listo para instalar',
      description: 'Revisa tu configuración y completa la instalación',
      database: 'Base de datos',
      redis: 'Redis',
      adminEmail: 'Correo del administrador'
    },
    status: {
      testing: 'Probando...',
      success: 'Conexión exitosa',
      testConnection: 'Probar conexión',
      installing: 'Instalando...',
      completeInstallation: 'Completar instalación',
      completed: '¡Instalación completada!',
      redirecting: 'Redirigiendo a la página de inicio de sesión...',
      restarting: 'El servicio se está reiniciando, espera...',
      timeout: 'El reinicio del servicio está tardando más de lo esperado. Actualiza la página manualmente.'
    }
  },

  // Common
}
