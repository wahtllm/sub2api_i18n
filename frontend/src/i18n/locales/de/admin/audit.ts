export default {
  audit: {
    title: 'Audit-Logs',
    description: 'Protokolliert Verwaltungsaktionen von Administratoren und Benutzern. Zugangsdaten in Headern behalten nur ihr erstes und letztes Zeichen, Anfrage-Bodies werden geschwärzt. Einträge können nicht einzeln gelöscht werden; das vollständige Leeren erfordert eine Zwei-Faktor-Verifizierung.',
    clearAll: 'Alle leeren',
    empty: 'Noch keine Audit-Logs',
    loadFailed: 'Audit-Logs konnten nicht geladen werden',
    filters: {
      all: 'Alle',
      q: 'Schlüsselwort',
      qPlaceholder: 'Pfad / Aktion / E-Mail des Akteurs',
      actorEmail: 'E-Mail des Akteurs',
      action: 'Aktion',
      clientIp: 'Client-IP',
      method: 'Methode',
      authMethod: 'Auth-Methode',
      result: 'Ergebnis',
      resultSuccess: 'Erfolg',
      resultFailure: 'Fehlschlag',
      startTime: 'Startzeit',
      endTime: 'Endzeit'
    },
    columns: {
      time: 'Zeit',
      actor: 'Akteur',
      action: 'Aktion',
      method: 'Methode',
      result: 'Ergebnis',
      clientIp: 'Client-IP',
      detail: 'Detail'
    },
    detail: {
      title: 'Audit-Log-Details',
      actorRole: 'Rolle',
      methodPath: 'Methode / Pfad',
      latency: 'Latenz',
      requestId: 'Request-ID',
      credential: 'Zugangsdaten (maskiert)',
      userAgent: 'User-Agent',
      requestBody: 'Anfrage-Body (geschwärzt)',
      extra: 'Zusatzinformationen'
    },
    clearConfirm: {
      title: 'Alle Audit-Logs leeren',
      message: 'Dies löscht alle Audit-Logs dauerhaft und kann nicht rückgängig gemacht werden. Die Löschaktion selbst wird protokolliert. Fortfahren?',
      totpTitle: 'Zwei-Faktor-Code eingeben',
      totpHint: 'Das Leeren der Audit-Logs erfordert eine aktuelle TOTP-Verifizierung.',
      success: '{count} Audit-Logs geleert',
      failed: 'Audit-Logs konnten nicht geleert werden'
    }
  }
}
