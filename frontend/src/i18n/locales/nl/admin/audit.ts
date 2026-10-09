export default {
  audit: {
    title: 'Auditlogs',
    description: 'Registreert beheeroperaties van beheerders en gebruikers. Inloggegevens in headers behouden alleen het eerste en laatste teken en verzoekbodies worden geanonimiseerd. Logboekregels kunnen niet afzonderlijk worden verwijderd; volledig wissen vereist tweestapsverificatie.',
    clearAll: 'Alles wissen',
    empty: 'Nog geen auditlogs',
    loadFailed: 'Auditlogs laden mislukt',
    filters: {
      all: 'Alle',
      q: 'Trefwoord',
      qPlaceholder: 'Pad / actie / e-mail van uitvoerder',
      actorEmail: 'E-mail uitvoerder',
      action: 'Actie',
      clientIp: 'Client-IP',
      method: 'Methode',
      authMethod: 'Authenticatiemethode',
      result: 'Resultaat',
      resultSuccess: 'Geslaagd',
      resultFailure: 'Mislukt',
      startTime: 'Starttijd',
      endTime: 'Eindtijd'
    },
    columns: {
      time: 'Tijd',
      actor: 'Uitvoerder',
      action: 'Actie',
      method: 'Methode',
      result: 'Resultaat',
      clientIp: 'Client-IP',
      detail: 'Details'
    },
    detail: {
      title: 'Auditlogdetails',
      actorRole: 'Rol',
      methodPath: 'Methode / Pad',
      latency: 'Latentie',
      requestId: 'Verzoek-ID',
      credential: 'Credential (gemaskeerd)',
      userAgent: 'User-Agent',
      requestBody: 'Verzoekbody (geanonimiseerd)',
      extra: 'Aanvullende informatie'
    },
    clearConfirm: {
      title: 'Alle auditlogs wissen',
      message: 'Dit verwijdert permanent alle auditlogs en kan niet ongedaan worden gemaakt. De wisactie zelf wordt vastgelegd. Doorgaan?',
      totpTitle: 'Voer tweestapscode in',
      totpHint: 'Het wissen van auditlogs vereist een nieuwe TOTP-verificatie.',
      success: '{count} auditlogs gewist',
      failed: 'Auditlogs wissen mislukt'
    }
  }
}
