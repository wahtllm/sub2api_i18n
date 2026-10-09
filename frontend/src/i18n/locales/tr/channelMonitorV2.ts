/** Channel Monitor V2 (user + admin passive monitor UI) */
export default {
  channelMonitorV2: {
    title: 'Kanal İzleme',
    updating: 'Veriler güncelleniyor',
    updatedTo: '{time} itibarıyla güncellendi',
    partialCoverage: 'Kısmi geçmiş kapsamı',
    bootstrap: {
      title: 'Geçmiş izleme verileri oluşturuluyor',
      description:
        'İlk etkinleştirmede pasif toplama, 90m, 24h, 7d ve 30d pencerelerini arka planda sessizce doldurur. Bu işlem tamamlanınca tüm aralıklar eksiksiz hale gelir.',
      progress: '%{percent} tamamlandı',
      working: 'Arka planda toplama yapılıyor…',
    },
    timeRange: 'Zaman aralığı',
    clearFilters: 'Sıfırla',
    refreshingFilters: 'Filtreler değişti; matris, trend ve ayrıntılar yenileniyor…',
    switchingData: 'Filtrelenmiş veriler değiştiriliyor…',
    summaryAria: 'Seçili aralık özeti',
    loadFailed: 'Kanal izleme yüklenemedi',
    detailLoadFailed: 'Kanal izleme ayrıntıları yüklenemedi',
    otherModels: 'Diğer modeller',
    ignored: 'Yoksayılan',
    currentUser: 'Mevcut kullanıcı',
    ranges: { '90m': '90m', '24h': '24h', '7d': '7d', '30d': '30d' },
    filters: {
      platform: 'Platform', allPlatforms: 'Tümü', group: 'Grup', allGroups: 'Tümü', model: 'Model', allModels: 'Tümü',
      empty: 'Seçenek yok', selectedCount: '{count}', labelValue: '{label}: {value}'
    },
    groupBy: {
      label: 'Gruplama ölçütü', platform: 'Platform', platformGroup: 'Platform / Grup', platformModel: 'Platform / Model', platformGroupModel: 'Platform / Grup / Model'
    },
    trendView: { label: 'Trend görünümü', pulse: 'Nabız matrisi', line: 'Çizgi grafik' },
    healthMode: { label: 'Sağlık görünümü', overall: 'Genel', success: 'Hata oranı', ttft: 'İlk token', cache: 'Önbellek oranı' },
    tabs: { aria: 'Ayrıntı boyutu', models: 'Modeller', errors: 'Hata nedenleri', users: 'Kullanıcı sıralaması' },
    metrics: {
      rpm: 'RPM',
      tpm: 'TPM',
      tps: 'Token/s',
      rpmDetail: 'Dakika başına istek',
      tpmDetail: 'Dakika başına token',
      tpsDetail: 'TPM ÷ 60 olarak hesaplanır',
      errorRate: 'Hata oranı',
      ttft: 'İlk token',
      ttftP50: 'İlk token P50',
      durationP50: 'Süre P50',
      cacheRate: 'Önbellek oranı',
      cacheDetail: 'Okuma önbelleği payı',
      successRate: 'Başarı oranı',
      successRateValue: 'Başarı oranı {value}',
      errorRateValue: 'Hata oranı {value}',
      rpmValue: 'RPM {value}',
      tpmValue: 'TPM {value}',
      tpsValue: 'Token/s {value}',
      ttftValue: 'İlk token {value}',
      durationValue: 'Süre {value}',
      cacheRateValue: 'Önbellek oranı {value}',
    },
    table: { platformModel: 'Platform / Model', rank: 'Sıra', user: 'Kullanıcı' },
    empty: { title: 'Görüntülenecek veri yok', description: 'Zaman aralığını veya filtreleri değiştirmeyi deneyin' },
    bucket: { minutes: '{count} dakikalık aralıklar', hours: '{count} saatlik aralıklar', days: '{count} günlük aralıklar' },
    matrix: {
      title: 'Kullanılabilirlik trendi', description: 'Her satır bir kanal boyutunu, her blok ise bir toplama aralığını temsil eder; ayrıntılar için üzerine gelin', wheelZoom: 'Bloklar üzerinde kaydırarak yakınlaştırın (daha dar aralık, daha geniş bloklar)', wheelZoomX: 'Bloklar üzerinde kaydırarak yakınlaştırın (daha dar aralık, daha geniş bloklar)', dimension: 'Kanal boyutu', emptyTitle: 'Seçili pencere için matris verisi yok', legendAria: 'Sağlık puanı göstergesi', bad: 'Kötü', good: 'İyi', healthyLegend: 'Sağlıklı (≥80)', warningLegend: 'Dikkat (50–79)', criticalLegend: 'Kritik (<50)', unknownLegend: 'Trafik yok / yetersiz örnek', noTraffic: 'Bu aralıkta trafik yok', noTrafficAt: '{time} · trafik yok', scoreLine: 'Sağlık puanı {score}', resetZoom: 'Yakınlaştırmayı sıfırla'
    },
    chart: {
      title: 'Kullanılabilirlik trendi', description: 'Yumuşatılmış trend: hata oranı · ilk token P50 · önbellek oranı', emptyTitle: 'Seçili pencere için trend verisi yok', errorLegend: 'Hata oranı (sol eksen %)', cacheLegend: 'Önbellek oranı (sol eksen %)', ttftLegend: 'İlk token P50 (sağ eksen)', errorDataset: 'Hata oranı trendi %', cacheDataset: 'Önbellek oranı trendi %', ttftDataset: 'İlk token trendi P50 (ms)', percentAxis: 'Oran %', resetZoom: 'Yakınlaştırmayı sıfırla'
    },
    errorDetail: { http: 'HTTP {code}', upstream: 'Upstream {code}', noMessage: 'Hata mesajı yok', empty: 'Yalnızca kategori oranları (örnek mesajlar yalnızca yöneticiye açık)' },
    errorCategories: {
      content_policy: 'İçerik politikası', authentication: 'Kimlik doğrulama', context_limit: 'Bağlam sınırı', invalid_request: 'Geçersiz istek', model_unsupported: 'Desteklenmeyen model', group_access: 'Grup erişimi', quota_or_balance: 'Kota veya bakiye', account_pool_unavailable: 'Hesap havuzu kullanılamıyor', rate_or_capacity: 'Hız veya kapasite', timeout: 'Zaman aşımı', transport_or_stream: 'Aktarım veya akış', upstream_forbidden: 'Upstream reddedildi', not_found: 'Bulunamadı', client_cancelled: 'İstemci iptal etti', upstream_5xx: 'Upstream 5xx', internal: 'Dahili', other: 'Diğer'
    },
    rank: {
      gold: '1. sıra altın',
      silver: '2. sıra gümüş',
      bronze: '3. sıra bronz',
      place: '{n}. sıra',
      unranked: 'Sıralamada değil',
    },
    settings: {
      title: 'V2 veri izleme yapılandırması',
      description:
        'Pasif kullanım toplama boyutlarını (platform / model / grup) ve yenileme sıklığını yapılandırın. Kullanıcı /monitor sayfasındaki sağlık renkleri ve ayrıntılar oranları, RPM ve TPM gösterir — mutlak istek hacmini değil.',
      save: 'Kaydet',
      loading: 'Yükleniyor…',
      loadFailed: 'V2 yapılandırması yüklenemedi',
      saveSuccess: 'V2 izleme yapılandırması kaydedildi',
      saveFailed: 'V2 yapılandırması kaydedilemedi',
      modeBanner:
        'Şu anki sistem modu: {mode}. V2 dakika toplaması çalışmaz; bu yapılandırma şimdi hazırlanabilir ve {modeV2} moduna geçildikten sonra yürürlüğe girer. Modu Sistem Ayarları → Özellik anahtarları altından değiştirin.',
      modeClosed: 'Kanal izleme devre dışı',
      modeV1: 'V1 aktif yoklamalar',
      modeV2: 'V2 pasif izleme',
      enableTitle: 'V2 toplamasını etkinleştir',
      enableHint:
        'Sistem modu V2 olduğunda geçerlidir. Kapatılması yalnızca bu yapılandırmanın toplamasını durdurur; sistem modu anahtarı Özellik anahtarları altında kalır.',
      refreshTitle: 'Toplama aralığı',
      refreshHint: 'Matrisin zaman ayrıntı düzeyini ve yenileme sıklığını etkiler',
      refreshAria: 'Toplama aralığı',
      platformsTitle: 'Platformlar ve modeller',
      platformsHint:
        'Boş bırakın = tüm gerçek model adları gösterilir; doldurulduğunda yalnızca listelenen modeller kendi satırını alır, kalanlar “Diğer” altına toplanır',
      modelsPlaceholder: 'Boş = tüm gerçek modeller; veya popüler modelleri listeleyin (kalan → Diğer)',
      badgeAllModels: 'Tüm modeller',
      badgeOther: '+ Diğer',
      groupsTitle: 'İzlenen gruplar',
      groupsSelected: '{count} grup seçildi',
      groupsAll: 'Tüm gruplar',
      groupsEmpty: 'Kullanılabilir grup yok',
      errorsTitle: 'Hata kategorileri ve yoksayılanlar',
      errorsHint:
        '“Yoksay” olarak işaretlenen kategoriler hata oranına ve sağlık puanına dahil edilmez, ancak hata dağılımında soluk renkte görünmeye devam eder. Eşleşmeyen hatalar “Diğer” altına toplanır.',
      ignoredSummary: '{ignored} kategori yoksayıldı · hata oranına dahil {counted} kategori',
      healthTitle: 'Sağlık eşikleri',
      healthHint:
        'Kullanıcıya yönelik renk bantlarını ve genel puanı kontrol eder. Varsayılanlar hoşgörülüdür; böylece düşük hata oranları veya düşük önbellek oranı hemen sağlıksız olarak görünmez.',
      fields: {
        minimumSample: 'Minimum örnek sayısı',
        warningError: 'Hata oranı dikkat eşiği %',
        criticalError: 'Hata oranı kritik eşiği %',
        targetTtft: 'TTFT hedefi ms',
        warningTtft: 'TTFT dikkat eşiği ms',
        criticalTtft: 'TTFT kritik eşiği ms',
        warningCache: 'Önbellek oranı dikkat eşiği %',
        criticalCache: 'Önbellek oranı kritik eşiği %',
      },
      namedModelsEmpty: 'Platform model listeleri boş: tüm gerçek model adları gösterilecek (“Diğer” altına katılmaz).',
      namedModelsCount: '{count} adet adlandırılmış model boyutu gösteriliyor; listelenmeyen modeller platform başına “Diğer” altına katılır.',
      userContractTitle: 'Kullanıcıya yönelik görüntüleme sözleşmesi',
      userContract: {
        health: 'Sağlık rengi ağırlıkları: hata oranı %60 + ilk token P50 %20 + önbellek oranı %20 (eşikler yukarıdan yapılandırılabilir)',
        trend: 'Trend, nabız matrisi ve çizgi grafik arasında geçiş yapabilir (hata · önbellek · ilk token)',
        latency: 'Gecikme AVG · P50 · P90 gösterir; mutlak istek / hata sayıları gösterilmez',
        models: 'Boş model listeleri gerçek adları gösterir ve hiçbir zaman her şeyi “Diğer” altına atmaz',
      },
    },
    admin: {
      descriptionV1:
        'Sistem modu şu anda V1 aktif yoklamalar: yoklama izlemelerini yönetin ve kontrolleri hemen çalıştırın; V2 toplaması çalışmaz.',
      descriptionV2:
        'Sistem modu şu anda V2 pasif izleme: toplama boyutlarını yapılandırın; V1 aktif yoklamalar çalışmaz.',
      tabAria: 'İzleme yönetimi',
      tabV2: 'V2 veri izleme yapılandırması',
      tabV1Active: 'V1 aktif yoklamalar',
      tabV1History: 'V1 geçmişi (yoklamalar geçerli modda etkin değil)',
    },
  },
}
