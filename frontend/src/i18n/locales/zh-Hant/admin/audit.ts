export default {
  audit: {
    title: '稽核日誌',
    description: '記錄管理員與使用者的管理面操作，請求標頭憑證僅保留首尾、請求內容已遮蔽。稽核日誌無法單筆刪除，清除全部需要二次驗證。',
    clearAll: '全部清除',
    empty: '暫無稽核日誌',
    loadFailed: '載入稽核日誌失敗',
    filters: {
      all: '全部',
      q: '關鍵字',
      qPlaceholder: '路徑 / 動作 / 操作者電子郵件',
      actorEmail: '操作者電子郵件',
      action: '動作',
      clientIp: '用戶端 IP',
      method: '請求方法',
      authMethod: '驗證方式',
      result: '結果',
      resultSuccess: '成功',
      resultFailure: '失敗',
      startTime: '開始時間',
      endTime: '結束時間'
    },
    columns: {
      time: '時間',
      actor: '操作者',
      action: '動作',
      method: '方法',
      result: '結果',
      clientIp: '用戶端 IP',
      detail: '詳情'
    },
    detail: {
      title: '稽核日誌詳情',
      actorRole: '角色',
      methodPath: '方法 / 路徑',
      latency: '耗時',
      requestId: '請求 ID',
      credential: '憑證（已遮蔽）',
      userAgent: 'User-Agent',
      requestBody: '請求內容（已遮蔽）',
      extra: '附加資訊'
    },
    clearConfirm: {
      title: '清除全部稽核日誌',
      message: '此操作將永久刪除所有稽核日誌，且無法復原。清除動作本身也會被記錄留存。確定繼續嗎？',
      totpTitle: '輸入二次驗證碼',
      totpHint: '清除稽核日誌需要現場驗證 TOTP 驗證碼。',
      success: '已清除 {count} 筆稽核日誌',
      failed: '清除稽核日誌失敗'
    }
  }
}
