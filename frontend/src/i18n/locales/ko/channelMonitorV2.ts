/** Channel Monitor V2 (user + admin passive monitor UI) */
export default {
  channelMonitorV2: {
    title: '채널 모니터',
    updating: '데이터 업데이트 중',
    updatedTo: '{time}까지 업데이트됨',
    partialCoverage: '과거 데이터 일부만 포함',
    bootstrap: {
      title: '과거 모니터링 데이터 구축 중',
      description:
        '처음 활성화하면 수동 집계가 백그라운드에서 90m, 24h, 7d, 30d 윈도우를 자동으로 채웁니다. 작업이 완료되면 모든 범위가 완전해집니다.',
      progress: '{percent}% 완료',
      working: '백그라운드 집계 중…',
    },
    timeRange: '시간 범위',
    clearFilters: '초기화',
    refreshingFilters: '필터가 변경되었습니다. 행렬, 추세, 상세를 새로고침하는 중…',
    switchingData: '필터링된 데이터 전환 중…',
    summaryAria: '선택 범위 요약',
    loadFailed: '채널 모니터를 불러오지 못했습니다',
    detailLoadFailed: '채널 모니터 상세를 불러오지 못했습니다',
    otherModels: '기타 모델',
    ignored: '무시됨',
    currentUser: '현재 사용자',
    ranges: { '90m': '90m', '24h': '24h', '7d': '7d', '30d': '30d' },
    filters: {
      platform: '플랫폼', allPlatforms: '전체', group: '그룹', allGroups: '전체', model: '모델', allModels: '전체',
      empty: '옵션 없음', selectedCount: '{count}', labelValue: '{label}: {value}'
    },
    groupBy: {
      label: '그룹화 기준', platform: '플랫폼', platformGroup: '플랫폼 / 그룹', platformModel: '플랫폼 / 모델', platformGroupModel: '플랫폼 / 그룹 / 모델'
    },
    trendView: { label: '추세 보기', pulse: '펄스 행렬', line: '꺾은선 차트' },
    healthMode: { label: '건강도 표시', overall: '종합', success: '오류율', ttft: '첫 토큰', cache: '캐시율' },
    tabs: { aria: '상세 차원', models: '모델', errors: '오류 원인', users: '사용자 순위' },
    metrics: {
      rpm: 'RPM',
      tpm: 'TPM',
      tps: '토큰/초',
      rpmDetail: '분당 요청 수',
      tpmDetail: '분당 토큰 수',
      tpsDetail: 'TPM ÷ 60으로 산출',
      errorRate: '오류율',
      ttft: '첫 토큰',
      ttftP50: '첫 토큰 P50',
      durationP50: '요청 시간 P50',
      cacheRate: '캐시율',
      cacheDetail: '읽기 캐시 비중',
      successRate: '성공률',
      successRateValue: '성공률 {value}',
      errorRateValue: '오류율 {value}',
      rpmValue: 'RPM {value}',
      tpmValue: 'TPM {value}',
      tpsValue: '토큰/초 {value}',
      ttftValue: '첫 토큰 {value}',
      durationValue: '요청 시간 {value}',
      cacheRateValue: '캐시율 {value}',
    },
    table: { platformModel: '플랫폼 / 모델', rank: '순위', user: '사용자' },
    empty: { title: '표시할 데이터가 없습니다', description: '시간 범위나 필터를 변경해 보세요' },
    bucket: { minutes: '{count}분 단위 구간', hours: '{count}시간 단위 구간', days: '{count}일 단위 구간' },
    matrix: {
      title: '가용성 추세', description: '각 행은 하나의 채널 차원이고 각 블록은 하나의 집계 구간입니다. 마우스를 올리면 상세가 표시됩니다', wheelZoom: '블록 위에서 스크롤하면 확대됩니다(범위는 좁아지고 블록은 넓어짐)', wheelZoomX: '블록 위에서 스크롤하면 확대됩니다(범위는 좁아지고 블록은 넓어짐)', dimension: '채널 차원', emptyTitle: '선택한 윈도우에 행렬 데이터가 없습니다', legendAria: '건강 점수 범례', bad: '나쁨', good: '좋음', healthyLegend: '건강 (≥80)', warningLegend: '주의 (50–79)', criticalLegend: '심각 (<50)', unknownLegend: '트래픽 없음 / 표본 부족', noTraffic: '이 구간에 트래픽이 없습니다', noTrafficAt: '{time} · 트래픽 없음', scoreLine: '건강 점수 {score}', resetZoom: '확대 초기화'
    },
    chart: {
      title: '가용성 추세', description: '평활화된 추세: 오류율 · 첫 토큰 P50 · 캐시율', emptyTitle: '선택한 윈도우에 추세 데이터가 없습니다', errorLegend: '오류율 (왼쪽 축 %)', cacheLegend: '캐시율 (왼쪽 축 %)', ttftLegend: '첫 토큰 P50 (오른쪽 축)', errorDataset: '오류율 추세 %', cacheDataset: '캐시율 추세 %', ttftDataset: '첫 토큰 추세 P50 (ms)', percentAxis: '비율 %', resetZoom: '확대 초기화'
    },
    errorDetail: { http: 'HTTP {code}', upstream: 'Upstream {code}', noMessage: '오류 메시지 없음', empty: '카테고리 비율만 표시됩니다(샘플 메시지는 관리자 전용)' },
    errorCategories: {
      content_policy: '콘텐츠 정책', authentication: '인증 실패', context_limit: '컨텍스트 제한 초과', invalid_request: '잘못된 요청', model_unsupported: '지원되지 않는 모델', group_access: '그룹 접근 권한', quota_or_balance: '쿼터 또는 잔액', account_pool_unavailable: '계정 풀 사용 불가', rate_or_capacity: '속도 또는 용량 제한', timeout: '시간 초과', transport_or_stream: '전송 또는 스트림', upstream_forbidden: 'Upstream 거부', not_found: '찾을 수 없음', client_cancelled: '클라이언트 취소', upstream_5xx: 'Upstream 5xx', internal: '내부 오류', other: '기타'
    },
    rank: {
      gold: '1위 금',
      silver: '2위 은',
      bronze: '3위 동',
      place: '{n}위',
      unranked: '순위 없음',
    },
    settings: {
      title: 'V2 데이터 모니터 구성',
      description:
        '수동 사용량 집계 차원(플랫폼 / 모델 / 그룹)과 새로고침 주기를 구성합니다. 사용자 /monitor 페이지의 건강 색상과 상세에는 절대 요청량이 아닌 비율, RPM, TPM이 표시됩니다.',
      save: '저장',
      loading: '불러오는 중…',
      loadFailed: 'V2 구성을 불러오지 못했습니다',
      saveSuccess: 'V2 모니터 구성이 저장되었습니다',
      saveFailed: 'V2 구성을 저장하지 못했습니다',
      modeBanner:
        '현재 시스템 모드는 {mode}입니다. V2 분 단위 집계는 실행되지 않습니다. 이 구성은 지금 미리 준비해 두고 {modeV2}(으)로 전환하면 적용됩니다. 시스템 설정 → 기능 스위치에서 모드를 변경할 수 있습니다.',
      modeClosed: '채널 모니터 비활성화됨',
      modeV1: 'V1 능동 프로브',
      modeV2: 'V2 수동 모니터링',
      enableTitle: 'V2 집계 활성화',
      enableHint:
        '시스템 모드가 V2일 때 적용됩니다. 끄면 이 구성의 집계만 중지되며, 시스템 모드 스위치는 기능 스위치에 그대로 남아 있습니다.',
      refreshTitle: '집계 주기',
      refreshHint: '행렬 시간 단위와 새로고침 주기에 영향을 줍니다',
      refreshAria: '집계 주기',
      platformsTitle: '플랫폼과 모델',
      platformsHint:
        '비워 두면 모든 실제 모델 이름이 표시됩니다. 입력하면 나열된 모델만 별도 행을 가지며 나머지는 "기타"로 묶입니다',
      modelsPlaceholder: '비워 두면 모든 실제 모델 표시, 또는 주요 모델 나열(나머지 → 기타)',
      badgeAllModels: '모든 모델',
      badgeOther: '+ 기타',
      groupsTitle: '모니터링 그룹',
      groupsSelected: '{count}개 그룹 선택됨',
      groupsAll: '모든 그룹',
      groupsEmpty: '선택 가능한 그룹이 없습니다',
      errorsTitle: '오류 카테고리와 무시 항목',
      errorsHint:
        '"무시"로 선택한 카테고리는 오류율과 건강 점수에서 제외되지만 오류 내역에는 회색으로 계속 표시됩니다. 분류되지 않은 오류는 "기타"로 묶입니다.',
      ignoredSummary: '무시 {ignored}개 카테고리 · 오류율 포함 {counted}개 카테고리',
      healthTitle: '건강 임계값',
      healthHint:
        '사용자에게 표시되는 색상 구간과 종합 점수를 제어합니다. 기본값은 넉넉하게 설정되어 있어, 작은 오류율이나 낮은 캐시율이 곧바로 비정상으로 표시되지 않습니다.',
      fields: {
        minimumSample: '최소 표본 수',
        warningError: '오류율 주의 %',
        criticalError: '오류율 심각 %',
        targetTtft: 'TTFT 목표 ms',
        warningTtft: 'TTFT 주의 ms',
        criticalTtft: 'TTFT 심각 ms',
        warningCache: '캐시율 주의 %',
        criticalCache: '캐시율 심각 %',
      },
      namedModelsEmpty: '플랫폼 모델 목록이 비어 있습니다. 모든 실제 모델 이름이 표시됩니다("기타"로 묶이지 않음).',
      namedModelsCount: '{count}개의 지정된 모델 차원을 표시합니다. 목록에 없는 모델은 플랫폼별 "기타"로 묶입니다.',
      userContractTitle: '사용자 표시 규칙',
      userContract: {
        health: '건강 색상 가중치: 오류율 60% + 첫 토큰 P50 20% + 캐시율 20% (임계값은 위에서 구성 가능)',
        trend: '추세는 펄스 행렬과 꺾은선 차트 간 전환이 가능합니다(오류 · 캐시 · 첫 토큰)',
        latency: '지연 시간은 AVG · P50 · P90으로 표시되며 절대 요청 / 오류 수는 표시되지 않습니다',
        models: '모델 목록이 비어 있으면 실제 이름을 표시하며 모든 항목을 "기타"에 묶지 않습니다',
      },
    },
    admin: {
      descriptionV1:
        '현재 시스템 모드는 V1 능동 프로브입니다. 프로브 모니터를 관리하고 지금 검사를 실행할 수 있습니다. V2 집계는 실행되지 않습니다.',
      descriptionV2:
        '현재 시스템 모드는 V2 수동 모니터링입니다. 집계 차원을 구성하세요. V1 능동 프로브는 실행되지 않습니다.',
      tabAria: '모니터 관리',
      tabV2: 'V2 데이터 모니터 구성',
      tabV1Active: 'V1 능동 프로브',
      tabV1History: 'V1 기록 (현재 모드에서는 프로브 미실행)',
    },
  },
}
