export default {
  audit: {
    title: 'Dziennik audytu',
    description: 'Rejestruje operacje płaszczyzny zarządzania wykonywane przez administratorów i użytkowników. Poświadczenia w nagłówkach zachowują tylko pierwszy i ostatni znak, a treści żądań są maskowane. Wpisów nie można usuwać pojedynczo; pełne wyczyszczenie wymaga weryfikacji dwuskładnikowej.',
    clearAll: 'Wyczyść wszystko',
    empty: 'Brak wpisów w dzienniku audytu',
    loadFailed: 'Nie udało się załadować dziennika audytu',
    filters: {
      all: 'Wszystkie',
      q: 'Słowo kluczowe',
      qPlaceholder: 'Ścieżka / akcja / e-mail wykonawcy',
      actorEmail: 'E-mail wykonawcy',
      action: 'Akcja',
      clientIp: 'IP klienta',
      method: 'Metoda',
      authMethod: 'Metoda uwierzytelniania',
      result: 'Wynik',
      resultSuccess: 'Sukces',
      resultFailure: 'Niepowodzenie',
      startTime: 'Czas rozpoczęcia',
      endTime: 'Czas zakończenia'
    },
    columns: {
      time: 'Czas',
      actor: 'Wykonawca',
      action: 'Akcja',
      method: 'Metoda',
      result: 'Wynik',
      clientIp: 'IP klienta',
      detail: 'Szczegóły'
    },
    detail: {
      title: 'Szczegóły wpisu audytu',
      actorRole: 'Rola',
      methodPath: 'Metoda / ścieżka',
      latency: 'Opóźnienie',
      requestId: 'ID żądania',
      credential: 'Poświadczenie (zamaskowane)',
      userAgent: 'User-Agent',
      requestBody: 'Treść żądania (zamaskowana)',
      extra: 'Dodatkowe informacje'
    },
    clearConfirm: {
      title: 'Wyczyść cały dziennik audytu',
      message: 'Trwale usunie to wszystkie wpisy dziennika audytu i nie można tego cofnąć. Samo działanie czyszczenia zostanie zarejestrowane. Kontynuować?',
      totpTitle: 'Podaj kod dwuskładnikowy',
      totpHint: 'Czyszczenie dziennika audytu wymaga świeżej weryfikacji TOTP.',
      success: 'Wyczyszczono {count} wpisów dziennika audytu',
      failed: 'Nie udało się wyczyścić dziennika audytu'
    }
  }
}
