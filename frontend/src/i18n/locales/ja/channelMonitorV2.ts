/** Channel Monitor V2 (user + admin passive monitor UI) */
export default {
  channelMonitorV2: {
    title: 'チャネルモニター',
    updating: 'データを更新中',
    updatedTo: '{time} 時点まで更新済み',
    partialCoverage: '履歴の一部カバー',
    bootstrap: {
      title: '履歴モニタリングデータを構築中',
      description:
        '初回有効化時、パッシブ集計がバックグラウンドで 90m、24h、7d、30d の各ウィンドウを自動的に補完します。完了すると、すべての時間範囲が完全な状態になります。',
      progress: '{percent}% 完了',
      working: 'バックグラウンドで集計中…',
    },
    timeRange: '時間範囲',
    clearFilters: 'リセット',
    refreshingFilters: '絞り込み条件が変更されたため、マトリクス・トレンド・明細を更新しています…',
    switchingData: '絞り込みデータを切り替え中…',
    summaryAria: '選択範囲のサマリー',
    loadFailed: 'チャネルモニターの読み込みに失敗しました',
    detailLoadFailed: 'チャネルモニターの明細の読み込みに失敗しました',
    otherModels: 'その他のモデル',
    ignored: '除外',
    currentUser: '現在のユーザー',
    ranges: { '90m': '90m', '24h': '24h', '7d': '7d', '30d': '30d' },
    filters: {
      platform: 'プラットフォーム', allPlatforms: 'すべて', group: 'グループ', allGroups: 'すべて', model: 'モデル', allModels: 'すべて',
      empty: '選択肢がありません', selectedCount: '{count}', labelValue: '{label}: {value}'
    },
    groupBy: {
      label: 'グループ化', platform: 'プラットフォーム', platformGroup: 'プラットフォーム / グループ', platformModel: 'プラットフォーム / モデル', platformGroupModel: 'プラットフォーム / グループ / モデル'
    },
    trendView: { label: 'トレンドビュー', pulse: 'パルスマトリクス', line: '折れ線グラフ' },
    healthMode: { label: 'ヘルス表示', overall: '総合', success: 'エラー率', ttft: '初トークン', cache: 'キャッシュ率' },
    tabs: { aria: '明細ディメンション', models: 'モデル', errors: 'エラー原因', users: 'ユーザーランキング' },
    metrics: {
      rpm: 'RPM',
      tpm: 'TPM',
      tps: 'Tokens/s',
      rpmDetail: '毎分リクエスト数',
      tpmDetail: '毎分トークン数',
      tpsDetail: 'TPM ÷ 60 から算出',
      errorRate: 'エラー率',
      ttft: '初トークン',
      ttftP50: '初トークン P50',
      durationP50: '処理時間 P50',
      cacheRate: 'キャッシュ率',
      cacheDetail: '読み取りキャッシュ比率',
      successRate: '成功率',
      successRateValue: '成功率 {value}',
      errorRateValue: 'エラー率 {value}',
      rpmValue: 'RPM {value}',
      tpmValue: 'TPM {value}',
      tpsValue: 'Tokens/s {value}',
      ttftValue: '初トークン {value}',
      durationValue: '処理時間 {value}',
      cacheRateValue: 'キャッシュ率 {value}',
    },
    table: { platformModel: 'プラットフォーム / モデル', rank: '順位', user: 'ユーザー' },
    empty: { title: '表示できるデータがありません', description: '時間範囲や絞り込み条件を変更してお試しください' },
    bucket: { minutes: '{count} 分ごとのバケット', hours: '{count} 時間ごとのバケット', days: '{count} 日ごとのバケット' },
    matrix: {
      title: '可用性トレンド', description: '各行はチャネルディメンション、各ブロックは集計区間を表します。ホバーすると詳細を表示します', wheelZoom: 'ブロック上でスクロールするとズームインします（範囲が狭くなり、ブロックが広がります）', wheelZoomX: 'ブロック上でスクロールするとズームインします（範囲が狭くなり、ブロックが広がります）', dimension: 'チャネルディメンション', emptyTitle: '選択したウィンドウにはマトリクスデータがありません', legendAria: 'ヘルススコアの凡例', bad: '不良', good: '良好', healthyLegend: '正常（≥80）', warningLegend: '要注意（50–79）', criticalLegend: '異常（<50）', unknownLegend: 'トラフィックなし / サンプル不足', noTraffic: 'この区間にはトラフィックがありません', noTrafficAt: '{time} · トラフィックなし', scoreLine: 'ヘルススコア {score}', resetZoom: 'ズームをリセット'
    },
    chart: {
      title: '可用性トレンド', description: '平滑化トレンド：エラー率 · 初トークン P50 · キャッシュ率', emptyTitle: '選択したウィンドウにはトレンドデータがありません', errorLegend: 'エラー率（左軸 %）', cacheLegend: 'キャッシュ率（左軸 %）', ttftLegend: '初トークン P50（右軸）', errorDataset: 'エラー率トレンド %', cacheDataset: 'キャッシュ率トレンド %', ttftDataset: '初トークントレンド P50（ms）', percentAxis: '率 %', resetZoom: 'ズームをリセット'
    },
    errorDetail: { http: 'HTTP {code}', upstream: 'アップストリーム {code}', noMessage: 'エラーメッセージなし', empty: 'カテゴリ別の割合のみ表示（サンプルメッセージは管理者のみ閲覧可能）' },
    errorCategories: {
      content_policy: 'コンテンツポリシー', authentication: '認証エラー', context_limit: 'コンテキスト上限', invalid_request: '無効なリクエスト', model_unsupported: '未対応モデル', group_access: 'グループ権限', quota_or_balance: 'クォータまたは残高', account_pool_unavailable: 'アカウントプール利用不可', rate_or_capacity: 'レート制限または容量', timeout: 'タイムアウト', transport_or_stream: '転送またはストリーム', upstream_forbidden: 'アップストリーム拒否', not_found: '未検出', client_cancelled: 'クライアントキャンセル', upstream_5xx: 'アップストリーム 5xx', internal: '内部エラー', other: 'その他'
    },
    rank: {
      gold: '第 1 位 金',
      silver: '第 2 位 銀',
      bronze: '第 3 位 銅',
      place: '第 {n} 位',
      unranked: 'ランク外',
    },
    settings: {
      title: 'V2 データモニター設定',
      description:
        'パッシブな使用量集計のディメンション（プラットフォーム / モデル / グループ）と更新頻度を設定します。ユーザー向け /monitor ページのヘルスカラーと明細は、割合・RPM・TPM を表示し、絶対リクエスト数は表示しません。',
      save: '保存',
      loading: '読み込み中…',
      loadFailed: 'V2 設定の読み込みに失敗しました',
      saveSuccess: 'V2 モニター設定を保存しました',
      saveFailed: 'V2 設定の保存に失敗しました',
      modeBanner:
        '現在のシステムモードは {mode} です。V2 の分単位集計は実行されません。この設定は事前に準備でき、{modeV2} へ切り替えると有効になります。モードの変更は「システム設定 → 機能スイッチ」から行えます。',
      modeClosed: 'チャネルモニター無効',
      modeV1: 'V1 アクティブプローブ',
      modeV2: 'V2 パッシブモニタリング',
      enableTitle: 'V2 集計を有効化',
      enableHint:
        'システムモードが V2 の場合に適用されます。オフにすると、この設定の集計のみが停止します。システムモードのスイッチは「機能スイッチ」に残ります。',
      refreshTitle: '集計間隔',
      refreshHint: 'マトリクスの時間粒度と更新頻度に影響します',
      refreshAria: '集計間隔',
      platformsTitle: 'プラットフォームとモデル',
      platformsHint:
        '空欄 = 実際のモデル名をすべて表示。入力した場合、リスト内のモデルのみが個別の行になり、残りは「その他」にまとめられます',
      modelsPlaceholder: '空欄 = すべての実モデル、または主要モデルを列挙（残り → その他）',
      badgeAllModels: 'すべてのモデル',
      badgeOther: '+ その他',
      groupsTitle: '監視対象グループ',
      groupsSelected: '{count} 個のグループを選択中',
      groupsAll: 'すべてのグループ',
      groupsEmpty: '選択できるグループがありません',
      errorsTitle: 'エラーカテゴリと除外',
      errorsHint:
        '「除外」にチェックしたカテゴリはエラー率とヘルススコアの対象から除外されますが、エラー内訳にはグレー表示で残ります。分類されなかったエラーは「その他」にまとめられます。',
      ignoredSummary: '除外 {ignored} カテゴリ · エラー率集計 {counted} カテゴリ',
      healthTitle: 'ヘルスしきい値',
      healthHint:
        'ユーザーに表示される色区分と総合スコアを制御します。デフォルトは緩めに設定されているため、少量のエラーや低キャッシュ率がすぐに異常表示されることはありません。',
      fields: {
        minimumSample: '最小サンプル数',
        warningError: 'エラー率 要注意 %',
        criticalError: 'エラー率 異常 %',
        targetTtft: 'TTFT 目標 ms',
        warningTtft: 'TTFT 要注意 ms',
        criticalTtft: 'TTFT 異常 ms',
        warningCache: 'キャッシュ率 要注意 %',
        criticalCache: 'キャッシュ率 異常 %',
      },
      namedModelsEmpty: '各プラットフォームのモデルリストが空です。実際のモデル名はすべて表示されます（「その他」にはまとめられません）。',
      namedModelsCount: '{count} 個の名前付きモデルディメンションを表示します。リスト外のモデルは各プラットフォームの「その他」にまとめられます。',
      userContractTitle: 'ユーザー向け表示仕様',
      userContract: {
        health: 'ヘルスカラーの重み：エラー率 60% + 初トークン P50 20% + キャッシュ率 20%（しきい値は上で設定可能）',
        trend: 'トレンドはパルスマトリクスと折れ線グラフを切り替え可能（エラー率 · キャッシュ率 · 初トークン）',
        latency: 'レイテンシは AVG · P50 · P90 を表示。絶対リクエスト数 / エラー数は表示しません',
        models: 'モデルリストが空の場合は実際のモデル名を表示し、すべてを「その他」にまとめることはありません',
      },
    },
    admin: {
      descriptionV1:
        'システムモードは V1 アクティブプローブです。プローブ監視を管理して今すぐチェックを実行できます。V2 集計は実行されません。',
      descriptionV2:
        'システムモードは V2 パッシブモニタリングです。集計ディメンションを設定します。V1 アクティブプローブは実行されません。',
      tabAria: 'モニター管理',
      tabV2: 'V2 データモニター設定',
      tabV1Active: 'V1 アクティブプローブ',
      tabV1History: 'V1 履歴（現在のモードではプローブ未稼働）',
    },
  },
}
