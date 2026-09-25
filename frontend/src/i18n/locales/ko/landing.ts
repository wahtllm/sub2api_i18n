export default {
  batchImageGuide: {
    title: '일괄 이미지 생성',
    description: '여러 프롬프트를 하나의 작업으로 제출하고, 완료 후 생성된 이미지를 한 번에 다운로드하세요'
  },
  // Home Page
  home: {
    viewOnGithub: 'GitHub에서 보기',
    viewDocs: '문서 보기',
    docs: '문서',
    switchToLight: '라이트 모드로 전환',
    switchToDark: '다크 모드로 전환',
    dashboard: '대시보드',
    login: '로그인',
    getStarted: '시작하기',
    goToDashboard: '대시보드로 이동',
    // User-focused value proposition
    heroSubtitle: '하나의 키, 모든 AI 모델',
    heroDescription: '여러 구독을 관리할 필요 없이, 하나의 API 키로 Claude, GPT, Gemini 등을 사용하세요',
    tags: {
      subscriptionToApi: '구독을 API로',
      stickySession: '세션 유지',
      realtimeBilling: '사용한 만큼 결제'
    },
    // Pain points section
    painPoints: {
      title: '공감되시나요?',
      items: {
        expensive: {
          title: '높은 구독 비용',
          desc: '여러 AI 구독 비용이 매달 쌓입니다'
        },
        complex: {
          title: '계정 관리 혼란',
          desc: '플랫폼마다 흩어져 있는 계정과 API 키를 관리하기 어렵습니다'
        },
        unstable: {
          title: '서비스 중단',
          desc: '단일 계정이 속도 제한에 걸리면 업무 흐름이 끊깁니다'
        },
        noControl: {
          title: '사용량 통제 불가',
          desc: '비용이 어디에 쓰이는지 추적할 수 없고 팀원 사용량도 제한할 수 없습니다'
        }
      }
    },
    // Solutions section
    solutions: {
      title: '이런 문제를 해결합니다',
      subtitle: '간단한 세 단계로 AI를 걱정 없이 사용하세요'
    },
    features: {
      unifiedGateway: '원클릭 연결',
      unifiedGatewayDesc: '하나의 API 키로 연결된 모든 AI 모델을 호출하세요. 별도 신청이 필요 없습니다.',
      multiAccount: '높은 안정성',
      multiAccountDesc: '여러 Upstream 계정에 대한 스마트 라우팅과 자동 장애 조치로 잦은 오류에서 벗어나세요.',
      balanceQuota: '사용한 만큼만 결제',
      balanceQuotaDesc: '사용량 기반 과금과 쿼터 한도 설정으로 팀의 사용량을 한눈에 파악할 수 있습니다.'
    },
    // Comparison section
    comparison: {
      title: '왜 저희를 선택해야 할까요?',
      headers: {
        feature: '비교 항목',
        official: '공식 구독',
        us: '저희 플랫폼'
      },
      items: {
        pricing: {
          feature: '요금제',
          official: '고정 월 요금, 사용하지 않아도 결제',
          us: '사용한 만큼만 결제'
        },
        models: {
          feature: '모델 선택',
          official: '단일 공급자만 사용 가능',
          us: '모델을 자유롭게 전환'
        },
        management: {
          feature: '계정 관리',
          official: '서비스별 개별 관리',
          us: '하나의 키, 하나의 대시보드'
        },
        stability: {
          feature: '안정성',
          official: '단일 계정 속도 제한',
          us: '다중 계정 풀, 자동 장애 조치'
        },
        control: {
          feature: '사용량 통제',
          official: '제공되지 않음',
          us: '쿼터 및 상세 분석'
        }
      }
    },
    providers: {
      title: '지원되는 AI 모델',
      description: '하나의 API, 다양한 선택',
      supported: '지원됨',
      soon: '출시 예정',
      claude: 'Claude',
      gemini: 'Gemini',
      antigravity: 'Antigravity',
      more: '더보기'
    },
    // CTA section
    cta: {
      title: '시작할 준비가 되셨나요?',
      description: '지금 회원가입하고 무료 체험 크레딧으로 끊김 없는 AI 서비스를 경험하세요',
      button: '무료로 회원가입'
    },
    footer: {
      allRightsReserved: '모든 권리 보유.'
    }
  },

  // Key Usage Query Page
  keyUsage: {
    title: 'API 키 사용량',
    subtitle: 'API 키를 입력하면 실시간 지출 금액과 사용 현황을 확인할 수 있습니다',
    placeholder: 'sk-ant-mirror-xxxxxxxxxxxx',
    query: '조회',
    querying: '조회 중...',
    privacyNote: '입력한 키는 브라우저에서 로컬로 처리되며 저장되지 않습니다',
    dateRange: '기간:',
    dateRangeToday: '오늘',
    dateRange7d: '7일',
    dateRange30d: '30일',
    dateRange90d: '90일',
    dateRangeCustom: '사용자 지정',
    apply: '적용',
    used: '사용함',
    detailInfo: '상세 정보',
    tokenStats: '토큰 통계',
    dailyDetail: '일별 상세',
    modelStats: '모델 사용량 통계',
    // Table headers
    date: '날짜',
    model: '모델',
    requests: '요청 수',
    inputTokens: '입력 토큰',
    outputTokens: '출력 토큰',
    cacheCreationTokens: '캐시 생성',
    cacheReadTokens: '캐시 읽기',
    cacheWriteTokens: '캐시 쓰기',
    totalTokens: '총 토큰',
    cost: '비용',
    // Status
    quotaMode: '키 쿼터 모드',
    walletBalance: '지갑 잔액',
    // Ring card titles
    totalQuota: '총 쿼터',
    limit5h: '5시간 한도',
    limitDaily: '일일 한도',
    limit7d: '7일 한도',
    limitWeekly: '주간 한도',
    limitMonthly: '월간 한도',
    // Detail rows
    remainingQuota: '잔여 쿼터',
    expiresAt: '만료 시점',
    todayExpires: '(오늘 만료)',
    daysLeft: '({days}일 남음)',
    usedQuota: '사용한 쿼터',
    resetNow: '곧 초기화됨',
    subscriptionType: '구독 유형',
    billingType: '과금 유형',
    subscriptionExpires: '구독 만료',
    // Usage stat cells
    todayRequests: '오늘 요청',
    todayInputTokens: '오늘 입력',
    todayOutputTokens: '오늘 출력',
    todayTokens: '오늘 토큰',
    todayCacheCreation: '오늘 캐시 생성',
    todayCacheRead: '오늘 캐시 읽기',
    todayCost: '오늘 비용',
    rpmTpm: 'RPM / TPM',
    totalRequests: '누적 요청',
    totalInputTokens: '누적 입력',
    totalOutputTokens: '누적 출력',
    totalTokensLabel: '누적 토큰',
    totalCacheCreation: '누적 캐시 생성',
    totalCacheRead: '누적 캐시 읽기',
    totalCost: '누적 비용',
    avgDuration: '평균 소요 시간',
    // Messages
    enterApiKey: 'API 키를 입력해 주세요',
    querySuccess: '조회에 성공했습니다',
    queryFailed: '조회에 실패했습니다',
    queryFailedRetry: '조회에 실패했습니다. 잠시 후 다시 시도해 주세요',
    noDailyUsage: '일별 사용량 데이터가 없습니다',
  },

  // Setup Wizard
  setup: {
    title: 'Sub2API 설치 마법사',
    description: 'Sub2API 인스턴스를 구성하세요',
    database: {
      title: '데이터베이스 구성',
      description: 'PostgreSQL 데이터베이스에 연결하세요',
      host: '호스트',
      port: '포트',
      username: '사용자 이름',
      password: '비밀번호',
      databaseName: '데이터베이스 이름',
      sslMode: 'SSL 모드',
      passwordPlaceholder: '비밀번호',
      ssl: {
        disable: '비활성화',
        require: '필수',
        verifyCa: 'CA 검증',
        verifyFull: '전체 검증'
      }
    },
    redis: {
      title: 'Redis 구성',
      description: 'Redis 서버에 연결하세요',
      host: '호스트',
      port: '포트',
      username: '사용자 이름 (선택)',
      password: '비밀번호 (선택)',
      database: '데이터베이스',
      usernamePlaceholder: '기본 사용자인 경우 비워 두세요',
      passwordPlaceholder: '비밀번호',
      enableTls: 'TLS 활성화',
      enableTlsHint: 'Redis 연결 시 TLS를 사용합니다(공인 CA 인증서)'
    },
    admin: {
      title: '관리자 계정',
      description: '관리자 계정을 생성하세요',
      email: '이메일',
      password: '비밀번호',
      confirmPassword: '비밀번호 확인',
      passwordPlaceholder: '8자 이상',
      confirmPasswordPlaceholder: '비밀번호 확인',
      passwordMismatch: '비밀번호가 일치하지 않습니다'
    },
    ready: {
      title: '설치 준비 완료',
      description: '구성을 확인하고 설치를 완료하세요',
      database: '데이터베이스',
      redis: 'Redis',
      adminEmail: '관리자 이메일'
    },
    status: {
      testing: '테스트 중...',
      success: '연결 성공',
      testConnection: '연결 테스트',
      installing: '설치 중...',
      completeInstallation: '설치 완료',
      completed: '설치가 완료되었습니다!',
      redirecting: '로그인 페이지로 이동 중...',
      restarting: '서비스를 재시작하는 중입니다. 잠시만 기다려 주세요...',
      timeout: '서비스 재시작이 예상보다 오래 걸리고 있습니다. 페이지를 직접 새로고침해 주세요.'
    }
  },

  // Common
}
