export default {
  audit: {
    title: 'Registros de auditoría',
    description: 'Registra las operaciones del plano de gestión realizadas por administradores y usuarios. Las credenciales de las cabeceras conservan solo el primer y el último carácter, y los cuerpos de las solicitudes se censuran. Las entradas no se pueden eliminar individualmente; la limpieza total requiere verificación de dos factores.',
    clearAll: 'Limpiar todo',
    empty: 'Aún no hay registros de auditoría',
    loadFailed: 'No se pudieron cargar los registros de auditoría',
    filters: {
      all: 'Todos',
      q: 'Palabra clave',
      qPlaceholder: 'Ruta / acción / correo del autor',
      actorEmail: 'Correo del autor',
      action: 'Acción',
      clientIp: 'IP del cliente',
      method: 'Método',
      authMethod: 'Método de autenticación',
      result: 'Resultado',
      resultSuccess: 'Éxito',
      resultFailure: 'Fallo',
      startTime: 'Hora de inicio',
      endTime: 'Hora de fin'
    },
    columns: {
      time: 'Hora',
      actor: 'Autor',
      action: 'Acción',
      method: 'Método',
      result: 'Resultado',
      clientIp: 'IP del cliente',
      detail: 'Detalle'
    },
    detail: {
      title: 'Detalle del registro de auditoría',
      actorRole: 'Rol',
      methodPath: 'Método / Ruta',
      latency: 'Latencia',
      requestId: 'ID de solicitud',
      credential: 'Credencial (enmascarada)',
      userAgent: 'User-Agent',
      requestBody: 'Cuerpo de la solicitud (censurado)',
      extra: 'Información adicional'
    },
    clearConfirm: {
      title: 'Limpiar todos los registros de auditoría',
      message: 'Esto elimina permanentemente todos los registros de auditoría y no se puede deshacer. La propia acción de limpieza queda registrada. ¿Continuar?',
      totpTitle: 'Introduce el código de dos factores',
      totpHint: 'Limpiar los registros de auditoría requiere una verificación TOTP reciente.',
      success: 'Se limpiaron {count} registro(s) de auditoría',
      failed: 'No se pudieron limpiar los registros de auditoría'
    }
  }
}
