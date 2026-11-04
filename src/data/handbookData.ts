// @ts-nocheck
// ============================================================================
// 3. INTERACTIVE HANDBOOK DATA (IR SPECTRA, REDOX, THERMO, MATH FORMULAS)
// ============================================================================
export const IR_SPECTRA_DATA = [
  {
    group: 'Liên kết C=O (Aldehyde, Ketone, Acid, Ester)',
    bond: '\\text{C=O}',
    range: '1680 - 1750 cm⁻¹ (Điển hình ~1700 cm⁻¹)',
    intensity: 'Rất mạnh, nhọn (Strong, Sharp)',
    note: 'Dấu hiệu vàng để nhận biết nhóm chức Carbonyl hoặc Ester. Không bao giờ nhầm với O-H.',
    wavePeak: 1710,
    color: 'emerald'
  },
  {
    group: 'Liên kết O-H (Alcohol, Phenol)',
    bond: '\\text{O-H}',
    range: '3200 - 3600 cm⁻¹',
    intensity: 'Mạnh, tù rộng (Broad)',
    note: 'Do có liên kết hydrogen liên phân tử nên peak có dạng hình chuông tù rộng.',
    wavePeak: 3350,
    color: 'cyan'
  },
  {
    group: 'Liên kết O-H (Carboxylic Acid)',
    bond: '\\text{O-H (Acid)}',
    range: '2500 - 3300 cm⁻¹',
    intensity: 'Rất rộng, chồng lấp vùng C-H',
    note: 'Đi kèm với peak C=O rất mạnh ở ~1710 cm⁻¹ là cặp đôi nhận diện nhóm -COOH.',
    wavePeak: 2950,
    color: 'violet'
  },
  {
    group: 'Liên kết N-H (Amine, Amide)',
    bond: '\\text{N-H}',
    range: '3300 - 3500 cm⁻¹',
    intensity: 'Trung bình, 1 hoặc 2 mũi nhọn',
    note: 'Amine bậc I cho 2 peak răng cưa, amine bậc II cho 1 peak, amine bậc III không có peak N-H.',
    wavePeak: 3400,
    color: 'amber'
  },
  {
    group: 'Liên kết C-H của nhóm -CHO (Aldehyde)',
    bond: '\\text{C-H (Aldehyde)}',
    range: '2700 - 2850 cm⁻¹',
    intensity: 'Trung bình (Cặp peak đôi Fermi)',
    note: 'Kết hợp với peak C=O ở ~1725 cm⁻¹ giúp khẳng định chắc chắn chức Aldehyde.',
    wavePeak: 2780,
    color: 'rose'
  }
];

export const REDOX_HALF_REACTIONS = [
  {
    title: 'Oxi hóa Sắt(II) Oxalate tạo muối Fe(III)',
    equation: '2\\text{FeC}_2\\text{O}_4 \\rightarrow 2\\text{Fe}^{3+} + 4\\text{CO}_2 + 6\\text{e}',
    singleMol: '\\text{FeC}_2\\text{O}_4 \\rightarrow \\text{Fe}^{3+} + 2\\text{CO}_2 + 3\\text{e}',
    rule: 'Chú ý hệ số 2 của Fe ở vế phải khi tạo $\\text{Fe}_2(\\text{SO}_4)_3$. Mỗi phân tử $\\text{FeC}_2\\text{O}_4$ nhường đúng $3\\text{e}$ ($1\\text{e}$ từ $\\text{Fe}^{+2} \\rightarrow \\text{Fe}^{+3}$ và $2\\text{e}$ từ $\\text{C}_2\\text{O}_4^{2-} \\rightarrow 2\\text{CO}_2$).'
  },
  {
    title: 'Oxi hóa Pyrite Sắt (FeS₂) trong HNO₃ / H₂SO₄ đặc',
    equation: '\\text{FeS}_2 \\rightarrow \\text{Fe}^{3+} + 2\\text{S}^{+6} + 15\\text{e}',
    singleMol: '2\\text{FeS}_2 \\rightarrow 2\\text{Fe}^{3+} + 4\\text{SO}_4^{2-} + 30\\text{e}',
    rule: 'Coi cả phân tử $\\text{FeS}_2$ có số oxi hóa bằng $0$: $\\text{Fe}$ tăng lên $+3$ và $2$ nguyên tử $\\text{S}$ tăng lên $+6$, tổng cộng nhường $3 + 2\\cdot 6 = 15\\text{e}$.'
  },
  {
    title: 'Khử Permanganate trong môi trường Acid (H⁺)',
    equation: '\\text{MnO}_4^- + 8\\text{H}^+ + 5\\text{e} \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}',
    singleMol: 'E^\\circ_{\\text{MnO}_4^-/\\text{Mn}^{2+}} = +1,51\\text{ V}',
    rule: 'Môi trường acid mạnh nhận $5\\text{e}$ tạo $\\text{Mn}^{2+}$ không màu; môi trường trung tính nhận $3\\text{e}$ tạo kết tủa $\\text{MnO}_2$ nâu đen.'
  },
  {
    title: 'Khử Dichromate trong môi trường Acid (H⁺)',
    equation: '\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6\\text{e} \\rightarrow 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O}',
    singleMol: 'E^\\circ_{\\text{Cr}_2\\text{O}_7^{2-}/2\\text{Cr}^{3+}} = +1,33\\text{ V}',
    rule: 'Luôn nhớ hệ số $2\\text{Cr}^{3+}$ ở vế phải để bảo toàn nguyên tố Chromium trước khi đếm số electron nhận ($2 \\cdot 3 = 6\\text{e}$).'
  }
];

export const LEADERBOARD_USERS = [
  { rank: 1, name: 'Nguyễn Minh Quân (Chuyên Hóa)', xp: 6420, streak: 29, tier: 'Thách Đấu Hóa Học', avatar: 'MQ', scoreAvg: 9.6 },
  { rank: 2, name: 'Trần Bảo Ngọc (HSG Quốc Gia)', xp: 5890, streak: 21, tier: 'Đại Cao Thủ I', avatar: 'BN', scoreAvg: 9.4 },
  { rank: 3, name: 'Lê Hoàng Bách (Bạn - ChemMaster)', xp: 4850, streak: 14, tier: 'Kim Cương II', avatar: 'HB', scoreAvg: 9.1, isCurrentUser: true },
  { rank: 4, name: 'Phạm Phương Thảo (12A1)', xp: 4510, streak: 12, tier: 'Kim Cương III', avatar: 'PT', scoreAvg: 8.8 },
  { rank: 5, name: 'Võ Đức Anh (Olympic KHTN)', xp: 4120, streak: 9, tier: 'Bạch Kim I', avatar: 'ĐA', scoreAvg: 8.5 }
];

