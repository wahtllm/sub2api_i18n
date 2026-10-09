export default {
  batchImageGuide: {
    title: 'Pembuatan Gambar Massal',
    description: 'Kirim beberapa prompt dalam satu tugas dan unduh gambar yang dihasilkan setelah selesai'
  },
  // Home Page
  home: {
    viewOnGithub: 'Lihat di GitHub',
    viewDocs: 'Lihat Dokumentasi',
    docs: 'Dokumentasi',
    switchToLight: 'Beralih ke Mode Terang',
    switchToDark: 'Beralih ke Mode Gelap',
    dashboard: 'Dasbor',
    login: 'Masuk',
    getStarted: 'Mulai Sekarang',
    goToDashboard: 'Buka Dasbor',
    // User-focused value proposition
    heroSubtitle: 'Satu Kunci, Semua Model AI',
    heroDescription: 'Tidak perlu mengelola banyak langganan. Akses Claude, GPT, Gemini, dan lainnya dengan satu Kunci API',
    tags: {
      subscriptionToApi: 'Langganan menjadi API',
      stickySession: 'Persistensi Sesi',
      realtimeBilling: 'Bayar Sesuai Pakai'
    },
    // Pain points section
    painPoints: {
      title: 'Terasa Familiar?',
      items: {
        expensive: {
          title: 'Biaya Langganan Tinggi',
          desc: 'Membayar banyak langganan AI yang menumpuk setiap bulan'
        },
        complex: {
          title: 'Kekacauan Akun',
          desc: 'Mengelola akun dan Kunci API yang tersebar di berbagai platform'
        },
        unstable: {
          title: 'Gangguan Layanan',
          desc: 'Akun tunggal mencapai batas laju dan mengganggu alur kerja'
        },
        noControl: {
          title: 'Tanpa Kontrol Penggunaan',
          desc: 'Tidak dapat melacak ke mana uang pergi atau membatasi penggunaan anggota tim'
        }
      }
    },
    // Solutions section
    solutions: {
      title: 'Kami Mengatasi Masalah Ini',
      subtitle: 'Tiga langkah sederhana menuju akses AI tanpa repot'
    },
    features: {
      unifiedGateway: 'Akses Satu Klik',
      unifiedGatewayDesc: 'Dapatkan satu Kunci API untuk memanggil semua model AI yang terhubung. Tidak perlu pendaftaran terpisah.',
      multiAccount: 'Selalu Andal',
      multiAccountDesc: 'Perutean cerdas di banyak akun upstream dengan failover otomatis. Ucapkan selamat tinggal pada galat.',
      balanceQuota: 'Bayar Sesuai Penggunaan',
      balanceQuotaDesc: 'Penagihan berbasis penggunaan dengan batas kuota. Visibilitas penuh atas konsumsi tim.'
    },
    // Comparison section
    comparison: {
      title: 'Mengapa Memilih Kami?',
      headers: {
        feature: 'Perbandingan',
        official: 'Langganan Resmi',
        us: 'Platform Kami'
      },
      items: {
        pricing: {
          feature: 'Harga',
          official: 'Biaya bulanan tetap, tetap dibayar meski tidak digunakan',
          us: 'Bayar hanya untuk yang digunakan'
        },
        models: {
          feature: 'Pilihan Model',
          official: 'Hanya satu penyedia',
          us: 'Berganti model dengan bebas'
        },
        management: {
          feature: 'Manajemen Akun',
          official: 'Kelola setiap layanan secara terpisah',
          us: 'Satu kunci terpadu, satu dasbor'
        },
        stability: {
          feature: 'Stabilitas',
          official: 'Batas laju akun tunggal',
          us: 'Pool multi-akun, failover otomatis'
        },
        control: {
          feature: 'Kontrol Penggunaan',
          official: 'Tidak tersedia',
          us: 'Kuota & analitik terperinci'
        }
      }
    },
    providers: {
      title: 'Model AI yang Didukung',
      description: 'Satu API, Banyak Pilihan',
      supported: 'Didukung',
      soon: 'Segera',
      claude: 'Claude',
      gemini: 'Gemini',
      antigravity: 'Antigravity',
      more: 'Lainnya'
    },
    // CTA section
    cta: {
      title: 'Siap Memulai?',
      description: 'Daftar sekarang dan dapatkan kredit uji coba gratis untuk merasakan akses AI tanpa hambatan',
      button: 'Daftar Gratis'
    },
    footer: {
      allRightsReserved: 'Semua hak dilindungi.'
    }
  },

  // Key Usage Query Page
  keyUsage: {
    title: 'Penggunaan Kunci API',
    subtitle: 'Masukkan Kunci API untuk melihat pengeluaran dan status penggunaan secara real-time',
    placeholder: 'sk-ant-mirror-xxxxxxxxxxxx',
    query: 'Kueri',
    querying: 'Mengkueri...',
    privacyNote: 'Kunci diproses secara lokal di browser dan tidak akan disimpan',
    dateRange: 'Rentang Tanggal:',
    dateRangeToday: 'Hari Ini',
    dateRange7d: '7 Hari',
    dateRange30d: '30 Hari',
    dateRange90d: '90 Hari',
    dateRangeCustom: 'Kustom',
    apply: 'Terapkan',
    used: 'Terpakai',
    detailInfo: 'Informasi Detail',
    tokenStats: 'Statistik Token',
    dailyDetail: 'Detail Harian',
    modelStats: 'Statistik Penggunaan Model',
    // Table headers
    date: 'Tanggal',
    model: 'Model',
    requests: 'Permintaan',
    inputTokens: 'Token Masukan',
    outputTokens: 'Token Keluaran',
    cacheCreationTokens: 'Pembuatan Cache',
    cacheReadTokens: 'Pembacaan Cache',
    cacheWriteTokens: 'Penulisan Cache',
    totalTokens: 'Total Token',
    cost: 'Biaya',
    // Status
    quotaMode: 'Mode Kuota Kunci',
    walletBalance: 'Saldo Dompet',
    // Ring card titles
    totalQuota: 'Total Kuota',
    limit5h: 'Batas 5 Jam',
    limitDaily: 'Batas Harian',
    limit7d: 'Batas 7 Hari',
    limitWeekly: 'Batas Mingguan',
    limitMonthly: 'Batas Bulanan',
    // Detail rows
    remainingQuota: 'Sisa Kuota',
    expiresAt: 'Kedaluwarsa Pada',
    todayExpires: '(kedaluwarsa hari ini)',
    daysLeft: '({days} hari)',
    usedQuota: 'Kuota Terpakai',
    resetNow: 'Segera diatur ulang',
    subscriptionType: 'Tipe Langganan',
    billingType: 'Tipe Penagihan',
    subscriptionExpires: 'Langganan Kedaluwarsa',
    // Usage stat cells
    todayRequests: 'Permintaan Hari Ini',
    todayInputTokens: 'Masukan Hari Ini',
    todayOutputTokens: 'Keluaran Hari Ini',
    todayTokens: 'Token Hari Ini',
    todayCacheCreation: 'Pembuatan Cache Hari Ini',
    todayCacheRead: 'Pembacaan Cache Hari Ini',
    todayCost: 'Biaya Hari Ini',
    rpmTpm: 'RPM / TPM',
    totalRequests: 'Total Permintaan',
    totalInputTokens: 'Total Masukan',
    totalOutputTokens: 'Total Keluaran',
    totalTokensLabel: 'Total Token',
    totalCacheCreation: 'Total Pembuatan Cache',
    totalCacheRead: 'Total Pembacaan Cache',
    totalCost: 'Total Biaya',
    avgDuration: 'Durasi Rata-rata',
    // Messages
    enterApiKey: 'Masukkan Kunci API',
    querySuccess: 'Kueri berhasil',
    queryFailed: 'Kueri gagal',
    queryFailedRetry: 'Kueri gagal, coba lagi nanti',
    noDailyUsage: 'Belum ada data penggunaan harian',
  },

  // Setup Wizard
  setup: {
    title: 'Penyiapan Sub2API',
    description: 'Konfigurasikan instans Sub2API',
    database: {
      title: 'Konfigurasi Basis Data',
      description: 'Hubungkan ke basis data PostgreSQL',
      host: 'Host',
      port: 'Port',
      username: 'Nama Pengguna',
      password: 'Kata Sandi',
      databaseName: 'Nama Basis Data',
      sslMode: 'Mode SSL',
      passwordPlaceholder: 'Kata sandi',
      ssl: {
        disable: 'Nonaktifkan',
        require: 'Wajib',
        verifyCa: 'Verifikasi CA',
        verifyFull: 'Verifikasi Penuh'
      }
    },
    redis: {
      title: 'Konfigurasi Redis',
      description: 'Hubungkan ke server Redis',
      host: 'Host',
      port: 'Port',
      username: 'Nama Pengguna (opsional)',
      password: 'Kata Sandi (opsional)',
      database: 'Basis Data',
      usernamePlaceholder: 'Biarkan kosong untuk pengguna bawaan',
      passwordPlaceholder: 'Kata sandi',
      enableTls: 'Aktifkan TLS',
      enableTlsHint: 'Gunakan TLS saat menghubungkan ke Redis (sertifikat CA publik)'
    },
    admin: {
      title: 'Akun Administrator',
      description: 'Buat akun administrator',
      email: 'Email',
      password: 'Kata Sandi',
      confirmPassword: 'Konfirmasi Kata Sandi',
      passwordPlaceholder: 'Minimal 8 karakter',
      confirmPasswordPlaceholder: 'Konfirmasi kata sandi',
      passwordMismatch: 'Kata sandi tidak cocok'
    },
    ready: {
      title: 'Siap Diinstal',
      description: 'Tinjau konfigurasi dan selesaikan instalasi',
      database: 'Basis Data',
      redis: 'Redis',
      adminEmail: 'Email Administrator'
    },
    status: {
      testing: 'Menguji...',
      success: 'Koneksi Berhasil',
      testConnection: 'Uji Koneksi',
      installing: 'Menginstal...',
      completeInstallation: 'Selesaikan Instalasi',
      completed: 'Instalasi selesai!',
      redirecting: 'Mengalihkan ke halaman masuk...',
      restarting: 'Layanan sedang dimulai ulang, mohon tunggu...',
      timeout: 'Mulai ulang layanan memakan waktu lebih lama dari diperkirakan. Muat ulang halaman secara manual.'
    }
  },

  // Common
}
