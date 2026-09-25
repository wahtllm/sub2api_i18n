export default {
  audit: {
    title: '監査ログ',
    description: '管理者とユーザーによる管理面の操作を記録します。ヘッダーの資格情報は先頭と末尾の文字のみを保持し、リクエストボディはマスキングされます。ログを個別に削除することはできず、全件クリアには二要素認証が必要です。',
    clearAll: 'すべてクリア',
    empty: '監査ログはまだありません',
    loadFailed: '監査ログの読み込みに失敗しました',
    filters: {
      all: 'すべて',
      q: 'キーワード',
      qPlaceholder: 'パス / アクション / 操作者のメールアドレス',
      actorEmail: '操作者のメールアドレス',
      action: 'アクション',
      clientIp: 'クライアント IP',
      method: 'メソッド',
      authMethod: '認証方式',
      result: '結果',
      resultSuccess: '成功',
      resultFailure: '失敗',
      startTime: '開始時刻',
      endTime: '終了時刻'
    },
    columns: {
      time: '時刻',
      actor: '操作者',
      action: 'アクション',
      method: 'メソッド',
      result: '結果',
      clientIp: 'クライアント IP',
      detail: '詳細'
    },
    detail: {
      title: '監査ログ詳細',
      actorRole: 'ロール',
      methodPath: 'メソッド / パス',
      latency: 'レイテンシ',
      requestId: 'リクエスト ID',
      credential: '資格情報（マスキング済み）',
      userAgent: 'User-Agent',
      requestBody: 'リクエストボディ（マスキング済み）',
      extra: '追加情報'
    },
    clearConfirm: {
      title: 'すべての監査ログをクリア',
      message: 'すべての監査ログを完全に削除します。この操作は元に戻せません。クリア操作自体も記録されます。続行しますか？',
      totpTitle: '二要素認証コードの入力',
      totpHint: '監査ログのクリアには、あらためて TOTP 認証を行う必要があります。',
      success: '{count} 件の監査ログをクリアしました',
      failed: '監査ログのクリアに失敗しました'
    }
  }
}
