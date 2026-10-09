/** Channel Monitor V2 (user + admin passive monitor UI) */
export default {
  channelMonitorV2: {
    title: 'Giám sát kênh',
    updating: 'Đang cập nhật dữ liệu',
    updatedTo: 'Đã cập nhật đến {time}',
    partialCoverage: 'Phạm vi lịch sử một phần',
    bootstrap: {
      title: 'Đang xây dựng dữ liệu giám sát lịch sử',
      description:
        'Khi bật lần đầu, tổng hợp thụ động sẽ lặng lẽ điền các cửa sổ 90m, 24h, 7d và 30d trong nền. Mọi khoảng thời gian sẽ đầy đủ khi quá trình này hoàn tất.',
      progress: 'Hoàn thành {percent}%',
      working: 'Đang tổng hợp trong nền…',
    },
    timeRange: 'Khoảng thời gian',
    clearFilters: 'Đặt lại',
    refreshingFilters: 'Bộ lọc đã thay đổi; đang làm mới ma trận, xu hướng và chi tiết…',
    switchingData: 'Đang chuyển dữ liệu đã lọc…',
    summaryAria: 'Tóm tắt khoảng đã chọn',
    loadFailed: 'Không tải được giám sát kênh',
    detailLoadFailed: 'Không tải được chi tiết giám sát kênh',
    otherModels: 'Mô hình khác',
    ignored: 'Đã bỏ qua',
    currentUser: 'Người dùng hiện tại',
    ranges: { '90m': '90m', '24h': '24h', '7d': '7d', '30d': '30d' },
    filters: {
      platform: 'Nền tảng', allPlatforms: 'Tất cả', group: 'Nhóm', allGroups: 'Tất cả', model: 'Mô hình', allModels: 'Tất cả',
      empty: 'Không có tùy chọn', selectedCount: '{count}', labelValue: '{label}: {value}'
    },
    groupBy: {
      label: 'Nhóm theo', platform: 'Nền tảng', platformGroup: 'Nền tảng / Nhóm', platformModel: 'Nền tảng / Mô hình', platformGroupModel: 'Nền tảng / Nhóm / Mô hình'
    },
    trendView: { label: 'Chế độ xem xu hướng', pulse: 'Ma trận xung', line: 'Biểu đồ đường' },
    healthMode: { label: 'Hiển thị sức khỏe', overall: 'Tổng thể', success: 'Tỷ lệ lỗi', ttft: 'Token đầu tiên', cache: 'Tỷ lệ cache' },
    tabs: { aria: 'Chiều chi tiết', models: 'Mô hình', errors: 'Nguyên nhân lỗi', users: 'Xếp hạng người dùng' },
    metrics: {
      rpm: 'RPM',
      tpm: 'TPM',
      tps: 'Token/giây',
      rpmDetail: 'Số yêu cầu mỗi phút',
      tpmDetail: 'Số token mỗi phút',
      tpsDetail: 'Suy ra từ TPM ÷ 60',
      errorRate: 'Tỷ lệ lỗi',
      ttft: 'Token đầu tiên',
      ttftP50: 'Token đầu tiên P50',
      durationP50: 'Thời lượng P50',
      cacheRate: 'Tỷ lệ cache',
      cacheDetail: 'Tỷ lệ đọc cache',
      successRate: 'Tỷ lệ thành công',
      successRateValue: 'Tỷ lệ thành công {value}',
      errorRateValue: 'Tỷ lệ lỗi {value}',
      rpmValue: 'RPM {value}',
      tpmValue: 'TPM {value}',
      tpsValue: 'Token/giây {value}',
      ttftValue: 'Token đầu tiên {value}',
      durationValue: 'Thời lượng {value}',
      cacheRateValue: 'Tỷ lệ cache {value}',
    },
    table: { platformModel: 'Nền tảng / Mô hình', rank: 'Hạng', user: 'Người dùng' },
    empty: { title: 'Không có dữ liệu để hiển thị', description: 'Thử thay đổi khoảng thời gian hoặc bộ lọc' },
    bucket: { minutes: 'Khung {count} phút', hours: 'Khung {count} giờ', days: 'Khung {count} ngày' },
    matrix: {
      title: 'Xu hướng khả dụng', description: 'Mỗi hàng là một chiều kênh và mỗi khối là một khoảng tổng hợp; di chuột để xem chi tiết', wheelZoom: 'Cuộn trên các khối để phóng to (khoảng hẹp hơn, khối rộng hơn)', wheelZoomX: 'Cuộn trên các khối để phóng to (khoảng hẹp hơn, khối rộng hơn)', dimension: 'Chiều kênh', emptyTitle: 'Không có dữ liệu ma trận cho cửa sổ đã chọn', legendAria: 'Chú giải điểm sức khỏe', bad: 'Kém', good: 'Tốt', healthyLegend: 'Khỏe (≥80)', warningLegend: 'Cần theo dõi (50–79)', criticalLegend: 'Nghiêm trọng (<50)', unknownLegend: 'Không có lưu lượng / mẫu không đủ', noTraffic: 'Không có lưu lượng trong khoảng này', noTrafficAt: '{time} · không có lưu lượng', scoreLine: 'Điểm sức khỏe {score}', resetZoom: 'Đặt lại mức phóng'
    },
    chart: {
      title: 'Xu hướng khả dụng', description: 'Xu hướng đã làm mượt: tỷ lệ lỗi · token đầu tiên P50 · tỷ lệ cache', emptyTitle: 'Không có dữ liệu xu hướng cho cửa sổ đã chọn', errorLegend: 'Tỷ lệ lỗi (trục trái %)', cacheLegend: 'Tỷ lệ cache (trục trái %)', ttftLegend: 'Token đầu tiên P50 (trục phải)', errorDataset: 'Xu hướng tỷ lệ lỗi %', cacheDataset: 'Xu hướng tỷ lệ cache %', ttftDataset: 'Xu hướng token đầu tiên P50 (ms)', percentAxis: 'Tỷ lệ %', resetZoom: 'Đặt lại mức phóng'
    },
    errorDetail: { http: 'HTTP {code}', upstream: 'Upstream {code}', noMessage: 'Không có thông báo lỗi', empty: 'Chỉ hiển thị tỷ lệ theo danh mục (thông báo mẫu chỉ dành cho quản trị viên)' },
    errorCategories: {
      content_policy: 'Chính sách nội dung', authentication: 'Xác thực', context_limit: 'Giới hạn ngữ cảnh', invalid_request: 'Yêu cầu không hợp lệ', model_unsupported: 'Mô hình không hỗ trợ', group_access: 'Quyền truy cập nhóm', quota_or_balance: 'Hạn mức hoặc số dư', account_pool_unavailable: 'Pool tài khoản không khả dụng', rate_or_capacity: 'Giới hạn tốc độ hoặc dung lượng', timeout: 'Quá thời gian chờ', transport_or_stream: 'Truyền tải hoặc luồng', upstream_forbidden: 'Upstream từ chối', not_found: 'Không tìm thấy', client_cancelled: 'Máy khách đã hủy', upstream_5xx: 'Upstream 5xx', internal: 'Lỗi nội bộ', other: 'Khác'
    },
    rank: {
      gold: 'Hạng 1 vàng',
      silver: 'Hạng 2 bạc',
      bronze: 'Hạng 3 đồng',
      place: 'Hạng {n}',
      unranked: 'Không xếp hạng',
    },
    settings: {
      title: 'Cấu hình giám sát dữ liệu V2',
      description:
        'Cấu hình các chiều tổng hợp mức sử dụng thụ động (nền tảng / mô hình / nhóm) và nhịp làm mới. Màu sức khỏe và chi tiết trên trang /monitor của người dùng hiển thị tỷ lệ, RPM và TPM — không phải lượng yêu cầu tuyệt đối.',
      save: 'Lưu',
      loading: 'Đang tải…',
      loadFailed: 'Không tải được cấu hình V2',
      saveSuccess: 'Đã lưu cấu hình giám sát V2',
      saveFailed: 'Không lưu được cấu hình V2',
      modeBanner:
        'Chế độ hệ thống hiện là {mode}. Tổng hợp theo phút của V2 sẽ không chạy; có thể chuẩn bị cấu hình này ngay và nó có hiệu lực sau khi chuyển sang {modeV2}. Đổi chế độ trong Cài đặt hệ thống → Công tắc tính năng.',
      modeClosed: 'Giám sát kênh đã tắt',
      modeV1: 'Thăm dò chủ động V1',
      modeV2: 'Giám sát thụ động V2',
      enableTitle: 'Bật tổng hợp V2',
      enableHint:
        'Áp dụng khi chế độ hệ thống là V2. Tắt chỉ dừng tổng hợp của cấu hình này; công tắc chế độ hệ thống vẫn nằm trong Công tắc tính năng.',
      refreshTitle: 'Chu kỳ tổng hợp',
      refreshHint: 'Ảnh hưởng độ mịn thời gian của ma trận và nhịp làm mới',
      refreshAria: 'Chu kỳ tổng hợp',
      platformsTitle: 'Nền tảng và mô hình',
      platformsHint:
        'Để trống = hiển thị tất cả tên mô hình thực; khi đã điền, chỉ các mô hình trong danh sách có hàng riêng, phần còn lại gộp vào “Khác”',
      modelsPlaceholder: 'Trống = tất cả mô hình thực; hoặc liệt kê các mô hình phổ biến (phần còn lại → Khác)',
      badgeAllModels: 'Tất cả mô hình',
      badgeOther: '+ Khác',
      groupsTitle: 'Nhóm được giám sát',
      groupsSelected: 'Đã chọn {count} nhóm',
      groupsAll: 'Tất cả các nhóm',
      groupsEmpty: 'Không có nhóm khả dụng',
      errorsTitle: 'Danh mục lỗi và mục bỏ qua',
      errorsHint:
        'Các danh mục đánh dấu “bỏ qua” bị loại khỏi tỷ lệ lỗi và điểm sức khỏe, nhưng vẫn hiển thị xám trong phân tích nguyên nhân lỗi. Lỗi không khớp được gộp vào “Khác”.',
      ignoredSummary: 'Đã bỏ qua {ignored} danh mục · tính vào tỷ lệ lỗi {counted} danh mục',
      healthTitle: 'Ngưỡng sức khỏe',
      healthHint:
        'Điều khiển dải màu hiển thị cho người dùng và điểm tổng thể. Giá trị mặc định khá khoan dung để tỷ lệ lỗi nhỏ hoặc cache thấp không ngay lập tức hiển thị là không khỏe.',
      fields: {
        minimumSample: 'Số mẫu tối thiểu',
        warningError: 'Tỷ lệ lỗi cần theo dõi %',
        criticalError: 'Tỷ lệ lỗi nghiêm trọng %',
        targetTtft: 'TTFT mục tiêu ms',
        warningTtft: 'TTFT theo dõi ms',
        criticalTtft: 'TTFT nghiêm trọng ms',
        warningCache: 'Tỷ lệ cache cần theo dõi %',
        criticalCache: 'Tỷ lệ cache nghiêm trọng %',
      },
      namedModelsEmpty: 'Danh sách mô hình của nền tảng đang trống: mọi tên mô hình thực sẽ hiển thị (không gộp vào “Khác”).',
      namedModelsCount: 'Hiển thị {count} chiều mô hình có tên; mô hình ngoài danh sách gộp vào “Khác” của từng nền tảng.',
      userContractTitle: 'Quy ước hiển thị phía người dùng',
      userContract: {
        health: 'Trọng số màu sức khỏe: tỷ lệ lỗi 60% + token đầu tiên P50 20% + tỷ lệ cache 20% (ngưỡng có thể cấu hình ở trên)',
        trend: 'Xu hướng có thể chuyển giữa ma trận xung và biểu đồ đường (lỗi · cache · token đầu tiên)',
        latency: 'Độ trễ hiển thị AVG · P50 · P90; không hiển thị số yêu cầu / lỗi tuyệt đối',
        models: 'Danh sách mô hình trống hiển thị tên thực và không bao giờ dồn tất cả vào “Khác”',
      },
    },
    admin: {
      descriptionV1:
        'Chế độ hệ thống là thăm dò chủ động V1: quản lý các trình giám sát thăm dò và chạy kiểm tra ngay; tổng hợp V2 không chạy.',
      descriptionV2:
        'Chế độ hệ thống là giám sát thụ động V2: cấu hình các chiều tổng hợp; thăm dò chủ động V1 không chạy.',
      tabAria: 'Quản lý giám sát',
      tabV2: 'Cấu hình giám sát dữ liệu V2',
      tabV1Active: 'Thăm dò chủ động V1',
      tabV1History: 'Lịch sử V1 (thăm dò không hoạt động ở chế độ hiện tại)',
    },
  },
}
