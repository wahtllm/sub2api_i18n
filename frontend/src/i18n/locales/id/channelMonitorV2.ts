/** Channel Monitor V2 (user + admin passive monitor UI) */
export default {
  channelMonitorV2: {
    title: 'Monitor Kanal',
    updating: 'Memperbarui data',
    updatedTo: 'Diperbarui hingga {time}',
    partialCoverage: 'Cakupan historis parsial',
    bootstrap: {
      title: 'Membangun data monitor historis',
      description:
        'Saat pertama kali diaktifkan, agregasi pasif mengisi jendela 90m, 24h, 7d, dan 30d secara diam-diam di latar belakang. Semua rentang menjadi lengkap setelah proses ini selesai.',
      progress: '{percent}% selesai',
      working: 'Mengagregasi di latar belakang…',
    },
    timeRange: 'Rentang waktu',
    clearFilters: 'Atur ulang',
    refreshingFilters: 'Saringan berubah; memuat ulang matriks, tren, dan detail…',
    switchingData: 'Beralih ke data tersaring…',
    summaryAria: 'Ringkasan rentang terpilih',
    loadFailed: 'Gagal memuat monitor kanal',
    detailLoadFailed: 'Gagal memuat detail monitor kanal',
    otherModels: 'Model lainnya',
    ignored: 'Diabaikan',
    currentUser: 'Pengguna saat ini',
    ranges: { '90m': '90m', '24h': '24h', '7d': '7d', '30d': '30d' },
    filters: {
      platform: 'Platform', allPlatforms: 'Semua', group: 'Grup', allGroups: 'Semua', model: 'Model', allModels: 'Semua',
      empty: 'Tidak ada opsi', selectedCount: '{count}', labelValue: '{label}: {value}'
    },
    groupBy: {
      label: 'Kelompokkan berdasarkan', platform: 'Platform', platformGroup: 'Platform / Grup', platformModel: 'Platform / Model', platformGroupModel: 'Platform / Grup / Model'
    },
    trendView: { label: 'Tampilan tren', pulse: 'Matriks pulsa', line: 'Grafik garis' },
    healthMode: { label: 'Tampilan kesehatan', overall: 'Keseluruhan', success: 'Rasio galat', ttft: 'Token pertama', cache: 'Rasio cache' },
    tabs: { aria: 'Dimensi detail', models: 'Model', errors: 'Penyebab galat', users: 'Peringkat pengguna' },
    metrics: {
      rpm: 'RPM',
      tpm: 'TPM',
      tps: 'Token/detik',
      rpmDetail: 'Permintaan per menit',
      tpmDetail: 'Token per menit',
      tpsDetail: 'Diperoleh dari TPM ÷ 60',
      errorRate: 'Rasio galat',
      ttft: 'Token pertama',
      ttftP50: 'Token pertama P50',
      durationP50: 'Durasi P50',
      cacheRate: 'Rasio cache',
      cacheDetail: 'Porsi cache baca',
      successRate: 'Rasio keberhasilan',
      successRateValue: 'Rasio keberhasilan {value}',
      errorRateValue: 'Rasio galat {value}',
      rpmValue: 'RPM {value}',
      tpmValue: 'TPM {value}',
      tpsValue: 'Token/detik {value}',
      ttftValue: 'Token pertama {value}',
      durationValue: 'Durasi {value}',
      cacheRateValue: 'Rasio cache {value}',
    },
    table: { platformModel: 'Platform / Model', rank: 'Peringkat', user: 'Pengguna' },
    empty: { title: 'Tidak ada data untuk ditampilkan', description: 'Coba ubah rentang waktu atau saringan' },
    bucket: { minutes: 'Interval {count} menit', hours: 'Interval {count} jam', days: 'Interval {count} hari' },
    matrix: {
      title: 'Tren ketersediaan', description: 'Setiap baris adalah dimensi kanal dan setiap blok adalah interval agregasi; arahkan kursor untuk detail', wheelZoom: 'Gulir pada blok untuk memperbesar (rentang lebih sempit, blok lebih lebar)', wheelZoomX: 'Gulir pada blok untuk memperbesar (rentang lebih sempit, blok lebih lebar)', dimension: 'Dimensi kanal', emptyTitle: 'Tidak ada data matriks untuk jendela terpilih', legendAria: 'Legenda skor kesehatan', bad: 'Buruk', good: 'Baik', healthyLegend: 'Sehat (≥80)', warningLegend: 'Perhatian (50–79)', criticalLegend: 'Kritis (<50)', unknownLegend: 'Tidak ada traffic / sampel tidak cukup', noTraffic: 'Tidak ada traffic pada interval ini', noTrafficAt: '{time} · tidak ada traffic', scoreLine: 'Skor kesehatan {score}', resetZoom: 'Atur ulang zoom'
    },
    chart: {
      title: 'Tren ketersediaan', description: 'Tren terhalus: rasio galat · token pertama P50 · rasio cache', emptyTitle: 'Tidak ada data tren untuk jendela terpilih', errorLegend: 'Rasio galat (sumbu kiri %)', cacheLegend: 'Rasio cache (sumbu kiri %)', ttftLegend: 'Token pertama P50 (sumbu kanan)', errorDataset: 'Tren rasio galat %', cacheDataset: 'Tren rasio cache %', ttftDataset: 'Tren token pertama P50 (ms)', percentAxis: 'Rasio %', resetZoom: 'Atur ulang zoom'
    },
    errorDetail: { http: 'HTTP {code}', upstream: 'Upstream {code}', noMessage: 'Tidak ada pesan galat', empty: 'Hanya rasio per kategori (contoh pesan hanya untuk administrator)' },
    errorCategories: {
      content_policy: 'Kebijakan konten', authentication: 'Autentikasi', context_limit: 'Batas konteks', invalid_request: 'Permintaan tidak valid', model_unsupported: 'Model tidak didukung', group_access: 'Akses grup', quota_or_balance: 'Kuota atau saldo', account_pool_unavailable: 'Pool akun tidak tersedia', rate_or_capacity: 'Laju atau kapasitas', timeout: 'Timeout', transport_or_stream: 'Transport atau stream', upstream_forbidden: 'Upstream ditolak', not_found: 'Tidak ditemukan', client_cancelled: 'Dibatalkan oleh klien', upstream_5xx: 'Upstream 5xx', internal: 'Internal', other: 'Lainnya'
    },
    rank: {
      gold: 'Peringkat 1 emas',
      silver: 'Peringkat 2 perak',
      bronze: 'Peringkat 3 perunggu',
      place: 'Peringkat {n}',
      unranked: 'Tidak masuk peringkat',
    },
    settings: {
      title: 'Konfigurasi monitor data V2',
      description:
        'Konfigurasi dimensi agregasi penggunaan pasif (platform / model / grup) dan frekuensi muat ulang. Warna kesehatan dan detail pada halaman /monitor pengguna menampilkan rasio, RPM, dan TPM — bukan volume permintaan absolut.',
      save: 'Simpan',
      loading: 'Memuat…',
      loadFailed: 'Gagal memuat konfigurasi V2',
      saveSuccess: 'Konfigurasi monitor V2 tersimpan',
      saveFailed: 'Gagal menyimpan konfigurasi V2',
      modeBanner:
        'Mode sistem saat ini adalah {mode}. Agregasi menit V2 tidak akan berjalan; konfigurasi ini dapat disiapkan sekarang dan berlaku setelah beralih ke {modeV2}. Ubah mode di Pengaturan Sistem → Sakelar fitur.',
      modeClosed: 'Monitor kanal dinonaktifkan',
      modeV1: 'Probe aktif V1',
      modeV2: 'Pemantauan pasif V2',
      enableTitle: 'Aktifkan agregasi V2',
      enableHint:
        'Berlaku saat mode sistem adalah V2. Mematikan ini hanya menghentikan agregasi konfigurasi ini; sakelar mode sistem tetap berada di Sakelar fitur.',
      refreshTitle: 'Interval agregasi',
      refreshHint: 'Memengaruhi granularitas waktu matriks dan frekuensi muat ulang',
      refreshAria: 'Interval agregasi',
      platformsTitle: 'Platform dan model',
      platformsHint:
        'Biarkan kosong = tampilkan semua nama model riil; bila diisi, hanya model yang terdaftar memiliki baris tersendiri dan sisanya digabung ke “Lainnya”',
      modelsPlaceholder: 'Kosong = semua model riil; atau daftarkan model populer (sisanya → Lainnya)',
      badgeAllModels: 'Semua model',
      badgeOther: '+ Lainnya',
      groupsTitle: 'Grup terpantau',
      groupsSelected: '{count} grup dipilih',
      groupsAll: 'Semua grup',
      groupsEmpty: 'Tidak ada grup yang tersedia',
      errorsTitle: 'Kategori galat dan pengabaian',
      errorsHint:
        'Kategori “abaikan” yang dicentang dikecualikan dari rasio galat dan skor kesehatan, tetapi tetap tampil redup dalam rincian galat. Galat yang tidak cocok digabung ke “Lainnya”.',
      ignoredSummary: '{ignored} kategori diabaikan · {counted} kategori dihitung dalam rasio galat',
      healthTitle: 'Ambang kesehatan',
      healthHint:
        'Mengontrol pita warna yang dilihat pengguna dan skor keseluruhan. Nilai bawaan cukup toleran sehingga rasio galat kecil atau cache rendah tidak langsung tampak tidak sehat.',
      fields: {
        minimumSample: 'Sampel minimum',
        warningError: 'Rasio galat perhatian %',
        criticalError: 'Rasio galat kritis %',
        targetTtft: 'Target TTFT ms',
        warningTtft: 'TTFT perhatian ms',
        criticalTtft: 'TTFT kritis ms',
        warningCache: 'Rasio cache perhatian %',
        criticalCache: 'Rasio cache kritis %',
      },
      namedModelsEmpty: 'Daftar model platform kosong: semua nama model riil akan ditampilkan (tidak digabung ke “Lainnya”).',
      namedModelsCount: 'Menampilkan {count} dimensi model bernama; model di luar daftar digabung ke “Lainnya” per platform.',
      userContractTitle: 'Kontrak tampilan untuk pengguna',
      userContract: {
        health: 'Bobot warna kesehatan: rasio galat 60% + token pertama P50 20% + rasio cache 20% (ambang dapat diatur di atas)',
        trend: 'Tren dapat beralih antara matriks pulsa dan grafik garis (galat · cache · token pertama)',
        latency: 'Latensi menampilkan AVG · P50 · P90; jumlah permintaan / galat absolut tidak ditampilkan',
        models: 'Daftar model kosong menampilkan nama riil dan tidak pernah menggabungkan semuanya ke “Lainnya”',
      },
    },
    admin: {
      descriptionV1:
        'Mode sistem saat ini adalah probe aktif V1: kelola monitor probe dan jalankan pemeriksaan sekarang; agregasi V2 tidak berjalan.',
      descriptionV2:
        'Mode sistem saat ini adalah pemantauan pasif V2: konfigurasikan dimensi agregasi; probe aktif V1 tidak berjalan.',
      tabAria: 'Manajemen monitor',
      tabV2: 'Konfigurasi monitor data V2',
      tabV1Active: 'Probe aktif V1',
      tabV1History: 'Riwayat V1 (probe tidak aktif dalam mode saat ini)',
    },
  },
}
