export default {
  batchImageGuide: {
    title: 'Toplu Görsel Oluşturma',
    description: 'Tek bir görevde birden fazla prompt gönderin ve tamamlandığında oluşturulan görselleri indirin'
  },
  // Home Page
  home: {
    viewOnGithub: 'GitHub\'da görüntüle',
    viewDocs: 'Dokümantasyonu görüntüle',
    docs: 'Dokümanlar',
    switchToLight: 'Açık moda geç',
    switchToDark: 'Koyu moda geç',
    dashboard: 'Panel',
    login: 'Giriş yap',
    getStarted: 'Hemen başla',
    goToDashboard: 'Panele git',
    // User-focused value proposition
    heroSubtitle: 'Tek API Anahtarı, Tüm AI Modelleri',
    heroDescription: 'Birden fazla abonelik yönetmenize gerek yok. Tek bir API anahtarıyla Claude, GPT, Gemini ve daha fazlasına erişin',
    tags: {
      subscriptionToApi: 'Abonelikten API\'ye',
      stickySession: 'Oturum Sürekliliği',
      realtimeBilling: 'Kullandıkça Öde'
    },
    // Pain points section
    painPoints: {
      title: 'Tanıdık geliyor mu?',
      items: {
        expensive: {
          title: 'Yüksek Abonelik Maliyetleri',
          desc: 'Her ay katlanan birden fazla AI aboneliği ödemek'
        },
        complex: {
          title: 'Hesap Karmaşası',
          desc: 'Farklı platformlara dağılmış hesapları ve API anahtarlarını yönetmek'
        },
        unstable: {
          title: 'Hizmet Kesintileri',
          desc: 'Tek hesapların hız sınırlarına takılması ve iş akışınızı aksatması'
        },
        noControl: {
          title: 'Kullanım Kontrolü Yok',
          desc: 'Paranızın nereye gittiğini görememe veya ekip üyesi kullanımını sınırlayamama'
        }
      }
    },
    // Solutions section
    solutions: {
      title: 'Bu Sorunları Biz Çözüyoruz',
      subtitle: 'Üç basit adımda sorunsuz AI erişimi'
    },
    features: {
      unifiedGateway: 'Tek Tıkla Erişim',
      unifiedGatewayDesc: 'Tek bir API anahtarı alın ve bağlı tüm AI modellerini çağırın. Ayrı ayrı başvuru yapmanıza gerek yok.',
      multiAccount: 'Her Zaman Güvenilir',
      multiAccountDesc: 'Birden fazla upstream hesabı arasında akıllı yönlendirme ve otomatik failover. Hatalara veda edin.',
      balanceQuota: 'Kullandığın Kadar Öde',
      balanceQuotaDesc: 'Kota sınırlarıyla kullanım tabanlı faturalandırma. Ekip tüketimine tam görünürlük.'
    },
    // Comparison section
    comparison: {
      title: 'Neden Bizi Seçmelisiniz?',
      headers: {
        feature: 'Karşılaştırma',
        official: 'Resmi Abonelikler',
        us: 'Platformumuz'
      },
      items: {
        pricing: {
          feature: 'Fiyatlandırma',
          official: 'Sabit aylık ücret, kullanılmasa bile ödenir',
          us: 'Yalnızca kullandığın kadar öde'
        },
        models: {
          feature: 'Model Seçimi',
          official: 'Yalnızca tek sağlayıcı',
          us: 'Modeller arasında serbestçe geçiş'
        },
        management: {
          feature: 'Hesap Yönetimi',
          official: 'Her hizmet ayrı ayrı yönetilir',
          us: 'Tek anahtar, tek panel'
        },
        stability: {
          feature: 'Kararlılık',
          official: 'Tek hesap hız sınırları',
          us: 'Çok hesaplı havuz, otomatik failover'
        },
        control: {
          feature: 'Kullanım Kontrolü',
          official: 'Mevcut değil',
          us: 'Kotalar ve ayrıntılı analizler'
        }
      }
    },
    providers: {
      title: 'Desteklenen AI Modelleri',
      description: 'Tek API, Birden Fazla Seçenek',
      supported: 'Destekleniyor',
      soon: 'Yakında',
      claude: 'Claude',
      gemini: 'Gemini',
      antigravity: 'Antigravity',
      more: 'Daha fazlası'
    },
    // CTA section
    cta: {
      title: 'Başlamaya Hazır mısınız?',
      description: 'Hemen kayıt olun, ücretsiz deneme kredisi kazanın ve sorunsuz AI erişimini deneyimleyin',
      button: 'Ücretsiz Kayıt Ol'
    },
    footer: {
      allRightsReserved: 'Tüm hakları saklıdır.'
    }
  },

  // Key Usage Query Page
  keyUsage: {
    title: 'API Anahtarı Kullanımı',
    subtitle: 'Gerçek zamanlı harcamaları ve kullanım durumunu görüntülemek için API Anahtarınızı girin',
    placeholder: 'sk-ant-mirror-xxxxxxxxxxxx',
    query: 'Sorgula',
    querying: 'Sorgulanıyor...',
    privacyNote: 'Anahtarınız yalnızca tarayıcıda yerel olarak işlenir ve saklanmaz',
    dateRange: 'Tarih Aralığı:',
    dateRangeToday: 'Bugün',
    dateRange7d: '7 Gün',
    dateRange30d: '30 Gün',
    dateRange90d: '90 Gün',
    dateRangeCustom: 'Özel',
    apply: 'Uygula',
    used: 'Kullanıldı',
    detailInfo: 'Ayrıntılı Bilgi',
    tokenStats: 'Token İstatistikleri',
    dailyDetail: 'Günlük Ayrıntı',
    modelStats: 'Model Kullanım İstatistikleri',
    // Table headers
    date: 'Tarih',
    model: 'Model',
    requests: 'İstekler',
    inputTokens: 'Girdi Tokenleri',
    outputTokens: 'Çıktı Tokenleri',
    cacheCreationTokens: 'Önbellek Oluşturma',
    cacheReadTokens: 'Önbellek Okuma',
    cacheWriteTokens: 'Önbellek Yazma',
    totalTokens: 'Toplam Token',
    cost: 'Maliyet',
    // Status
    quotaMode: 'Anahtar Kota Modu',
    walletBalance: 'Cüzdan Bakiyesi',
    // Ring card titles
    totalQuota: 'Toplam Kota',
    limit5h: '5 Saatlik Sınır',
    limitDaily: 'Günlük Sınır',
    limit7d: '7 Günlük Sınır',
    limitWeekly: 'Haftalık Sınır',
    limitMonthly: 'Aylık Sınır',
    // Detail rows
    remainingQuota: 'Kalan Kota',
    expiresAt: 'Sona erme zamanı',
    todayExpires: '(bugün sona erer)',
    daysLeft: '({days} gün)',
    usedQuota: 'Kullanılan Kota',
    resetNow: 'Yakında sıfırlanıyor',
    subscriptionType: 'Abonelik Türü',
    billingType: 'Faturalandırma Türü',
    subscriptionExpires: 'Abonelik Sona Eriyor',
    // Usage stat cells
    todayRequests: 'Bugünkü İstekler',
    todayInputTokens: 'Bugünkü Girdi',
    todayOutputTokens: 'Bugünkü Çıktı',
    todayTokens: 'Bugünkü Token',
    todayCacheCreation: 'Bugünkü Önbellek Oluşturma',
    todayCacheRead: 'Bugünkü Önbellek Okuma',
    todayCost: 'Bugünkü Maliyet',
    rpmTpm: 'RPM / TPM',
    totalRequests: 'Toplam İstek',
    totalInputTokens: 'Toplam Girdi',
    totalOutputTokens: 'Toplam Çıktı',
    totalTokensLabel: 'Toplam Token',
    totalCacheCreation: 'Toplam Önbellek Oluşturma',
    totalCacheRead: 'Toplam Önbellek Okuma',
    totalCost: 'Toplam Maliyet',
    avgDuration: 'Ort. Süre',
    // Messages
    enterApiKey: 'Lütfen bir API Anahtarı girin',
    querySuccess: 'Sorgu başarılı',
    queryFailed: 'Sorgu başarısız',
    queryFailedRetry: 'Sorgu başarısız, lütfen daha sonra tekrar deneyin',
    noDailyUsage: 'Günlük kullanım verisi yok',
  },

  // Setup Wizard
  setup: {
    title: 'Sub2API Kurulumu',
    description: 'Sub2API örneğinizi yapılandırın',
    database: {
      title: 'Veritabanı Yapılandırması',
      description: 'PostgreSQL veritabanınıza bağlanın',
      host: 'Sunucu',
      port: 'Port',
      username: 'Kullanıcı adı',
      password: 'Şifre',
      databaseName: 'Veritabanı Adı',
      sslMode: 'SSL Modu',
      passwordPlaceholder: 'Şifre',
      ssl: {
        disable: 'Devre dışı',
        require: 'Gerekli',
        verifyCa: 'CA Doğrula',
        verifyFull: 'Tam Doğrula'
      }
    },
    redis: {
      title: 'Redis Yapılandırması',
      description: 'Redis sunucunuza bağlanın',
      host: 'Sunucu',
      port: 'Port',
      username: 'Kullanıcı adı (isteğe bağlı)',
      password: 'Şifre (isteğe bağlı)',
      database: 'Veritabanı',
      usernamePlaceholder: 'Varsayılan kullanıcı için boş bırakın',
      passwordPlaceholder: 'Şifre',
      enableTls: 'TLS\'i Etkinleştir',
      enableTlsHint: 'Redis bağlantısında TLS kullanın (genel CA sertifikaları)'
    },
    admin: {
      title: 'Yönetici Hesabı',
      description: 'Yönetici hesabınızı oluşturun',
      email: 'E-posta',
      password: 'Şifre',
      confirmPassword: 'Şifre Onayı',
      passwordPlaceholder: 'En az 8 karakter',
      confirmPasswordPlaceholder: 'Şifreyi onaylayın',
      passwordMismatch: 'Şifreler eşleşmiyor'
    },
    ready: {
      title: 'Kurulum için Hazır',
      description: 'Yapılandırmanızı gözden geçirin ve kurulumu tamamlayın',
      database: 'Veritabanı',
      redis: 'Redis',
      adminEmail: 'Yönetici E-postası'
    },
    status: {
      testing: 'Test ediliyor...',
      success: 'Bağlantı Başarılı',
      testConnection: 'Bağlantıyı Test Et',
      installing: 'Kuruluyor...',
      completeInstallation: 'Kurulumu Tamamla',
      completed: 'Kurulum tamamlandı!',
      redirecting: 'Giriş sayfasına yönlendiriliyorsunuz...',
      restarting: 'Hizmet yeniden başlatılıyor, lütfen bekleyin...',
      timeout: 'Hizmetin yeniden başlatılması beklenenden uzun sürüyor. Lütfen sayfayı elle yenileyin.'
    }
  },

  // Common
}
