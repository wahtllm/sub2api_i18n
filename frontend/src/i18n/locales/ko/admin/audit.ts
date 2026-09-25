export default {
  audit: {
    title: '감사 로그',
    description: '관리자와 사용자의 관리 플레인 작업을 기록합니다. 요청 헤더 자격 증명은 첫 글자와 마지막 글자만 유지되며, 요청 본문은 마스킹됩니다. 항목은 개별 삭제할 수 없으며 전체 삭제 시 이중 인증이 필요합니다.',
    clearAll: '전체 삭제',
    empty: '감사 로그가 없습니다',
    loadFailed: '감사 로그를 불러오지 못했습니다',
    filters: {
      all: '전체',
      q: '키워드',
      qPlaceholder: '경로 / 동작 / 작업자 이메일',
      actorEmail: '작업자 이메일',
      action: '동작',
      clientIp: '클라이언트 IP',
      method: '요청 메서드',
      authMethod: '인증 방식',
      result: '결과',
      resultSuccess: '성공',
      resultFailure: '실패',
      startTime: '시작 시간',
      endTime: '종료 시간'
    },
    columns: {
      time: '시간',
      actor: '작업자',
      action: '동작',
      method: '메서드',
      result: '결과',
      clientIp: '클라이언트 IP',
      detail: '상세'
    },
    detail: {
      title: '감사 로그 상세',
      actorRole: '역할',
      methodPath: '메서드 / 경로',
      latency: '지연 시간',
      requestId: '요청 ID',
      credential: '자격 증명 (마스킹됨)',
      userAgent: 'User-Agent',
      requestBody: '요청 본문 (마스킹됨)',
      extra: '추가 정보'
    },
    clearConfirm: {
      title: '감사 로그 전체 삭제',
      message: '이 작업은 모든 감사 로그를 영구적으로 삭제하며 되돌릴 수 없습니다. 삭제 작업 자체는 기록으로 남습니다. 계속하시겠습니까?',
      totpTitle: '이중 인증 코드 입력',
      totpHint: '감사 로그 삭제에는 새로운 TOTP 인증이 필요합니다.',
      success: '감사 로그 {count}건을 삭제했습니다',
      failed: '감사 로그 삭제에 실패했습니다'
    }
  }
}
