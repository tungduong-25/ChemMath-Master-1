# ChemMaster AI - Trợ lý Hóa học & Toán học KHTN

Dự án đã được cấu trúc chuẩn **Vite + React + TypeScript + Tailwind CSS** (Modular Architecture) để khắc phục hoàn toàn lỗi hiển thị mã nguồn thô khi deploy lên **Vercel**.

## Cấu trúc thư mục
- `index.html`: File HTML gốc của ứng dụng (chứa thẻ `<div id="root"></div>`).
- `package.json`: Khai báo thư viện (`react`, `lucide-react`, `recharts`, `tailwindcss`, `vite`).
- `src/config.ts`: Cấu hình `APP_CONFIG` (Gemini API Key, Supabase URL/Key, Google OAuth, Gmail & Sheets Webhook).
- `src/components/MathChemText.tsx`: Bộ xử lý và hiển thị công thức Toán - Hóa chuẩn KaTeX + mhchem.
- `src/data/questionsData.ts`: Ngân hàng câu hỏi Hóa học & Toán học.
- `src/data/handbookData.ts`: Dữ liệu Phổ IR, Bán phản ứng Oxi hóa - Khử và Bảng xếp hạng.
- `src/App.tsx`: Giao diện chính của ứng dụng.

## Hướng dẫn Deploy lên Vercel (Không bao giờ lỗi)
1. Giải nén file `chem-math-master-vercel.zip`.
2. Đẩy toàn bộ các file và thư mục bên trong lên GitHub repository của bạn (hoặc kéo thả thư mục vào Vercel).
3. Trên Vercel, chọn **Framework Preset** là **Vite** (Vercel sẽ tự động nhận diện `package.json` và chạy lệnh `npm run build`).
4. Bấm **Deploy** và trải nghiệm!
