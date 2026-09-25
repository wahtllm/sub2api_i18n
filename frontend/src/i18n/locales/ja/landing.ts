export default {
  batchImageGuide: {
    title: '一括画像生成',
    description: '複数のプロンプトを 1 つのジョブで送信し、完了したら生成画像をダウンロードできます'
  },
  // Home Page
  home: {
    viewOnGithub: 'GitHub で表示',
    viewDocs: 'ドキュメントを表示',
    docs: 'ドキュメント',
    switchToLight: 'ライトモードに切り替え',
    switchToDark: 'ダークモードに切り替え',
    dashboard: 'ダッシュボード',
    login: 'ログイン',
    getStarted: 'はじめる',
    goToDashboard: 'ダッシュボードへ移動',
    // User-focused value proposition
    heroSubtitle: '1 つのキーで、すべての AI モデルを',
    heroDescription: '複数のサブスクリプションを管理する必要はありません。1 つの API キーで Claude、GPT、Gemini などにアクセスできます',
    tags: {
      subscriptionToApi: 'サブスクリプションの API 化',
      stickySession: 'セッション維持',
      realtimeBilling: '従量課金'
    },
    // Pain points section
    painPoints: {
      title: '心当たりはありませんか？',
      items: {
        expensive: {
          title: 'サブスクリプション費用が高い',
          desc: '毎月積み重なる複数の AI サブスクリプションの支払い'
        },
        complex: {
          title: 'アカウント管理の混乱',
          desc: 'さまざまなプラットフォームに散らばったアカウントと API キーの管理'
        },
        unstable: {
          title: 'サービス中断',
          desc: '単一アカウントがレート制限に達し、作業が中断される'
        },
        noControl: {
          title: '使用量を管理できない',
          desc: 'お金がどこに使われたか追えず、チームメンバーの使用も制限できない'
        }
      }
    },
    // Solutions section
    solutions: {
      title: 'こうした問題を解決します',
      subtitle: '簡単 3 ステップで、ストレスフリーな AI アクセスを'
    },
    features: {
      unifiedGateway: 'ワンクリックアクセス',
      unifiedGatewayDesc: '1 つの API キーで、接続済みのすべての AI モデルを呼び出せます。個別の申込みは不要です。',
      multiAccount: '常に安定',
      multiAccountDesc: '複数のアップストリームアカウントへのスマートルーティングと自動フェイルオーバーで、エラーとはおさらばです。',
      balanceQuota: '使った分だけ支払う',
      balanceQuotaDesc: '使用量に応じた課金とクォータ上限で、チームの消費をすべて可視化します。'
    },
    // Comparison section
    comparison: {
      title: '当サービスを選ぶ理由',
      headers: {
        feature: '比較項目',
        official: '公式サブスクリプション',
        us: '当プラットフォーム'
      },
      items: {
        pricing: {
          feature: '料金体系',
          official: '固定月額で、使わなくても支払う',
          us: '使った分だけ支払う'
        },
        models: {
          feature: 'モデル選択',
          official: '単一プロバイダーのみ',
          us: 'モデルを自由に切り替え'
        },
        management: {
          feature: 'アカウント管理',
          official: 'サービスごとに個別管理',
          us: '統一キー、1 つのダッシュボード'
        },
        stability: {
          feature: '安定性',
          official: '単一アカウントのレート制限',
          us: '複数アカウントプール、自動フェイルオーバー'
        },
        control: {
          feature: '使用量管理',
          official: '利用不可',
          us: 'クォータと詳細な分析'
        }
      }
    },
    providers: {
      title: '対応 AI モデル',
      description: '1 つの API、多彩な選択肢',
      supported: '対応済み',
      soon: '近日対応',
      claude: 'Claude',
      gemini: 'Gemini',
      antigravity: 'Antigravity',
      more: 'その他'
    },
    // CTA section
    cta: {
      title: '始める準備はできましたか？',
      description: '今すぐ新規登録して無料トライアルクレジットを獲得し、シームレスな AI アクセスを体験しましょう',
      button: '無料で新規登録'
    },
    footer: {
      allRightsReserved: 'All rights reserved.'
    }
  },

  // Key Usage Query Page
  keyUsage: {
    title: 'API キー使用量',
    subtitle: 'API キーを入力すると、リアルタイムの消費額と使用状況を確認できます',
    placeholder: 'sk-ant-mirror-xxxxxxxxxxxx',
    query: '照会',
    querying: '照会中...',
    privacyNote: 'キーはブラウザー内でローカルに処理され、保存されることはありません',
    dateRange: '日付範囲：',
    dateRangeToday: '今日',
    dateRange7d: '7 日間',
    dateRange30d: '30 日間',
    dateRange90d: '90 日間',
    dateRangeCustom: 'カスタム',
    apply: '適用',
    used: '使用済み',
    detailInfo: '詳細情報',
    tokenStats: 'トークン統計',
    dailyDetail: '日別明細',
    modelStats: 'モデル使用統計',
    // Table headers
    date: '日付',
    model: 'モデル',
    requests: 'リクエスト数',
    inputTokens: '入力トークン',
    outputTokens: '出力トークン',
    cacheCreationTokens: 'キャッシュ作成',
    cacheReadTokens: 'キャッシュ読み取り',
    cacheWriteTokens: 'キャッシュ書き込み',
    totalTokens: '合計トークン',
    cost: '費用',
    // Status
    quotaMode: 'キークォータモード',
    walletBalance: 'ウォレット残高',
    // Ring card titles
    totalQuota: '総クォータ',
    limit5h: '5 時間上限',
    limitDaily: '日次上限',
    limit7d: '7 日間上限',
    limitWeekly: '週次上限',
    limitMonthly: '月次上限',
    // Detail rows
    remainingQuota: '残りクォータ',
    expiresAt: '有効期限',
    todayExpires: '（今日期限切れ）',
    daysLeft: '（残り {days} 日）',
    usedQuota: '使用済みクォータ',
    resetNow: 'まもなくリセット',
    subscriptionType: 'サブスクリプションタイプ',
    billingType: '課金方式',
    subscriptionExpires: 'サブスクリプション有効期限',
    // Usage stat cells
    todayRequests: '本日のリクエスト',
    todayInputTokens: '本日の入力',
    todayOutputTokens: '本日の出力',
    todayTokens: '本日のトークン',
    todayCacheCreation: '本日のキャッシュ作成',
    todayCacheRead: '本日のキャッシュ読み取り',
    todayCost: '本日の費用',
    rpmTpm: 'RPM / TPM',
    totalRequests: '累計リクエスト',
    totalInputTokens: '累計入力',
    totalOutputTokens: '累計出力',
    totalTokensLabel: '累計トークン',
    totalCacheCreation: '累計キャッシュ作成',
    totalCacheRead: '累計キャッシュ読み取り',
    totalCost: '累計費用',
    avgDuration: '平均処理時間',
    // Messages
    enterApiKey: 'API キーを入力してください',
    querySuccess: '照会に成功しました',
    queryFailed: '照会に失敗しました',
    queryFailedRetry: '照会に失敗しました。しばらくしてからもう一度お試しください',
    noDailyUsage: '日別使用データがありません',
  },

  // Setup Wizard
  setup: {
    title: 'Sub2API セットアップ',
    description: 'Sub2API インスタンスを設定します',
    database: {
      title: 'データベース設定',
      description: 'PostgreSQL データベースに接続します',
      host: 'ホスト',
      port: 'ポート',
      username: 'ユーザー名',
      password: 'パスワード',
      databaseName: 'データベース名',
      sslMode: 'SSL モード',
      passwordPlaceholder: 'パスワード',
      ssl: {
        disable: '無効化',
        require: '必須',
        verifyCa: 'CA 検証',
        verifyFull: '完全検証'
      }
    },
    redis: {
      title: 'Redis 設定',
      description: 'Redis サーバーに接続します',
      host: 'ホスト',
      port: 'ポート',
      username: 'ユーザー名（任意）',
      password: 'パスワード（任意）',
      database: 'データベース',
      usernamePlaceholder: 'デフォルトユーザーの場合は空欄',
      passwordPlaceholder: 'パスワード',
      enableTls: 'TLS を有効化',
      enableTlsHint: 'Redis 接続時に TLS を使用します（公共 CA 証明書）'
    },
    admin: {
      title: '管理者アカウント',
      description: '管理者アカウントを作成します',
      email: 'メールアドレス',
      password: 'パスワード',
      confirmPassword: 'パスワード（確認）',
      passwordPlaceholder: '8 文字以上',
      confirmPasswordPlaceholder: 'もう一度パスワードを入力',
      passwordMismatch: 'パスワードが一致しません'
    },
    ready: {
      title: 'インストール準備完了',
      description: '設定を確認してセットアップを完了します',
      database: 'データベース',
      redis: 'Redis',
      adminEmail: '管理者メールアドレス'
    },
    status: {
      testing: 'テスト中...',
      success: '接続成功',
      testConnection: '接続テスト',
      installing: 'インストール中...',
      completeInstallation: 'インストールを完了',
      completed: 'インストールが完了しました！',
      redirecting: 'ログインページへ移動しています...',
      restarting: 'サービスが再起動中です。お待ちください...',
      timeout: 'サービスの再起動に通常より時間がかかっています。手動でページを更新してください。'
    }
  },

  // Common
}
