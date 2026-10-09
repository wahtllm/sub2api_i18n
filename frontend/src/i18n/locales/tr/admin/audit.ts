export default {
  audit: {
    title: 'Denetim Günlükleri',
    description: 'Yöneticilerin ve kullanıcıların yönetim düzlemi işlemlerini kaydeder. Üstbilgi kimlik bilgilerinde yalnızca ilk/son karakterler tutulur ve istek gövdeleri maskelenir. Kayıtlar tek tek silinemez; tamamını temizlemek iki adımlı doğrulama gerektirir.',
    clearAll: 'Tümünü Temizle',
    empty: 'Henüz denetim günlüğü yok',
    loadFailed: 'Denetim günlükleri yüklenemedi',
    filters: {
      all: 'Tümü',
      q: 'Anahtar kelime',
      qPlaceholder: 'Yol / eylem / işlemi yapanın e-postası',
      actorEmail: 'İşlemi Yapanın E-postası',
      action: 'Eylem',
      clientIp: 'İstemci IP',
      method: 'Yöntem',
      authMethod: 'Kimlik Doğrulama Yöntemi',
      result: 'Sonuç',
      resultSuccess: 'Başarılı',
      resultFailure: 'Başarısız',
      startTime: 'Başlangıç Zamanı',
      endTime: 'Bitiş Zamanı'
    },
    columns: {
      time: 'Zaman',
      actor: 'İşlemi yapan',
      action: 'Eylem',
      method: 'Yöntem',
      result: 'Sonuç',
      clientIp: 'İstemci IP',
      detail: 'Detay'
    },
    detail: {
      title: 'Denetim Günlüğü Detayı',
      actorRole: 'Rol',
      methodPath: 'Yöntem / Yol',
      latency: 'Gecikme süresi',
      requestId: 'İstek ID',
      credential: 'Kimlik bilgisi (maskeli)',
      userAgent: 'User-Agent',
      requestBody: 'İstek gövdesi (maskelenmiş)',
      extra: 'Ek bilgi'
    },
    clearConfirm: {
      title: 'Tüm Denetim Günlüklerini Temizle',
      message: 'Bu işlem tüm denetim günlüklerini kalıcı olarak siler ve geri alınamaz. Temizleme işleminin kendisi de kayda geçer. Devam edilsin mi?',
      totpTitle: 'İki Adımlı Doğrulama Kodunu Girin',
      totpHint: 'Denetim günlüklerini temizlemek güncel bir TOTP doğrulaması gerektirir.',
      success: '{count} denetim günlüğü kaydı temizlendi',
      failed: 'Denetim günlükleri temizlenemedi'
    }
  }
}
