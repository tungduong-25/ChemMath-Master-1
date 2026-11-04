// ============================================================================
// 0. CẤU HÌNH HỆ THỐNG DÀNH CHO DEVELOPER (CHỈNH SỬA TRỰC TIẾP TẠI ĐÂY)
// Đã ẩn hoàn toàn khỏi giao diện người dùng theo yêu cầu
// ============================================================================
export const APP_CONFIG = {
  // 1. Gemini API Key (Để trống "" nếu dùng môi trường mặc định, hoặc điền Key của bạn vào đây)
  GEMINI_API_KEY: "",
  GEMINI_MODEL: "gemini-3-flash-preview",

  // 2. Cấu hình Supabase (Lưu trữ PostgreSQL, Realtime Leaderboard & Google Auth)
  SUPABASE_URL: "https://chemmaster-edtech-vn.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.chemmaster-cloud-sync-key",

  // 3. Cấu hình Đăng nhập Google OAuth
  GOOGLE_OAUTH_CLIENT_ID: "849201948291-chemmasterai.apps.googleusercontent.com",

  // 4. Cấu hình Gửi báo cáo về Gmail & Lưu dữ liệu vào Google Sheets / Google Drive
  // (Dán URL Web App của Google Apps Script hoặc Supabase Edge Function vào đây)
  GMAIL_REPORT_WEBHOOK_URL: "https://script.google.com/macros/s/AKfycbz_chemmaster_gmail_webhook/exec",
  GOOGLE_SHEETS_SYNC_WEBHOOK_URL: "https://script.google.com/macros/s/AKfycbz_chemmaster_sheets_sync/exec",
  DEFAULT_RECEIVER_GMAIL: "chemmaster.edtech.vn@gmail.com",

  // 5. Thông tin Tác giả & Dự án hiển thị trên trang chủ
  AUTHOR_INFO: {
    projectName: "ChemMaster AI - Trợ lý Hóa học & Toán học KHTN",
    authorName: "Lê Hoàng Bách",
    schoolName: "THPT Chuyên Khoa Học Tự Nhiên",
    supportEmail: "chemmaster.edtech.vn@gmail.com",
    hotline: "(+84) 0987 654 321"
  }
};

