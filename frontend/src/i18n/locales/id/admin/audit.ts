export default {
  audit: {
    title: 'Log Audit',
    description: 'Mencatat operasi bidang manajemen oleh administrator dan pengguna. Kredensial header hanya menyimpan karakter pertama/terakhir dan isi permintaan disamarkan. Entri tidak dapat dihapus satu per satu; pembersihan seluruhnya memerlukan verifikasi dua faktor.',
    clearAll: 'Bersihkan Semua',
    empty: 'Belum ada log audit',
    loadFailed: 'Gagal memuat log audit',
    filters: {
      all: 'Semua',
      q: 'Kata kunci',
      qPlaceholder: 'Jalur / aksi / email pelaku',
      actorEmail: 'Email Pelaku',
      action: 'Aksi',
      clientIp: 'IP Klien',
      method: 'Metode',
      authMethod: 'Metode Autentikasi',
      result: 'Hasil',
      resultSuccess: 'Berhasil',
      resultFailure: 'Gagal',
      startTime: 'Waktu Mulai',
      endTime: 'Waktu Selesai'
    },
    columns: {
      time: 'Waktu',
      actor: 'Pelaku',
      action: 'Aksi',
      method: 'Metode',
      result: 'Hasil',
      clientIp: 'IP Klien',
      detail: 'Detail'
    },
    detail: {
      title: 'Detail Log Audit',
      actorRole: 'Peran',
      methodPath: 'Metode / Jalur',
      latency: 'Latensi',
      requestId: 'ID Permintaan',
      credential: 'Kredensial (disamarkan)',
      userAgent: 'User-Agent',
      requestBody: 'Isi Permintaan (disamarkan)',
      extra: 'Informasi tambahan'
    },
    clearConfirm: {
      title: 'Bersihkan Semua Log Audit',
      message: 'Tindakan ini menghapus semua log audit secara permanen dan tidak dapat dibatalkan. Aksi pembersihan itu sendiri tetap dicatat. Lanjutkan?',
      totpTitle: 'Masukkan Kode Dua Faktor',
      totpHint: 'Pembersihan log audit memerlukan verifikasi TOTP yang baru.',
      success: '{count} log audit dibersihkan',
      failed: 'Gagal membersihkan log audit'
    }
  }
}
