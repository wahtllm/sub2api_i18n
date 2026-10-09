export default {
  audit: {
    title: 'Nhật ký kiểm toán',
    description: 'Ghi lại các thao tác trên mặt quản lý của quản trị viên và người dùng. Thông tin xác thực trong phần header chỉ giữ ký tự đầu/cuối và phần thân yêu cầu đã được che. Không thể xóa từng mục; việc xóa toàn bộ yêu cầu xác thực hai bước.',
    clearAll: 'Xóa toàn bộ',
    empty: 'Chưa có nhật ký kiểm toán',
    loadFailed: 'Không tải được nhật ký kiểm toán',
    filters: {
      all: 'Tất cả',
      q: 'Từ khóa',
      qPlaceholder: 'Đường dẫn / hành động / email người thao tác',
      actorEmail: 'Email người thao tác',
      action: 'Hành động',
      clientIp: 'IP máy khách',
      method: 'Phương thức',
      authMethod: 'Phương thức xác thực',
      result: 'Kết quả',
      resultSuccess: 'Thành công',
      resultFailure: 'Thất bại',
      startTime: 'Thời gian bắt đầu',
      endTime: 'Thời gian kết thúc'
    },
    columns: {
      time: 'Thời gian',
      actor: 'Người thao tác',
      action: 'Hành động',
      method: 'Phương thức',
      result: 'Kết quả',
      clientIp: 'IP máy khách',
      detail: 'Chi tiết'
    },
    detail: {
      title: 'Chi tiết nhật ký kiểm toán',
      actorRole: 'Vai trò',
      methodPath: 'Phương thức / Đường dẫn',
      latency: 'Độ trễ',
      requestId: 'ID yêu cầu',
      credential: 'Thông tin xác thực (đã che)',
      userAgent: 'User-Agent',
      requestBody: 'Thân yêu cầu (đã che)',
      extra: 'Thông tin bổ sung'
    },
    clearConfirm: {
      title: 'Xóa toàn bộ nhật ký kiểm toán',
      message: 'Thao tác này xóa vĩnh viễn toàn bộ nhật ký kiểm toán và không thể hoàn tác. Bản thân thao tác xóa cũng được ghi lại. Tiếp tục chứ?',
      totpTitle: 'Nhập mã xác thực hai bước',
      totpHint: 'Việc xóa nhật ký kiểm toán yêu cầu xác minh TOTP mới.',
      success: 'Đã xóa {count} mục nhật ký kiểm toán',
      failed: 'Không xóa được nhật ký kiểm toán'
    }
  }
}
