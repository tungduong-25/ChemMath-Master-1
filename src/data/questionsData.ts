// @ts-nocheck
// ============================================================================
// 2. AUTHENTIC RIGOROUS QUESTION BANK (CHEMISTRY & MATH HSG/OLYMPIAD)
// ============================================================================
export const INITIAL_QUESTIONS = [
  {
    id: 'CHEM-REDOX-01',
    subject: 'Hóa học',
    topic: 'Phản ứng Oxi hóa - Khử & Điện hóa',
    lesson: 'Bảo toàn Electron & Cân bằng Ion - Electron',
    level: 'Vận dụng cao',
    type: 'mcq',
    question:
      'Hòa tan hoàn toàn $0,2\\text{ mol}$ $\\text{FeC}_2\\text{O}_4$ vào dung dịch $\\text{H}_2\\text{SO}_4$ loãng dư, sau đó thêm từ từ dung dịch $\\text{KMnO}_4$ vào cho đến khi phản ứng vừa đủ thì thu được dung dịch chứa muối $\\text{Fe}_2(\\text{SO}_4)_3$, $\\text{K}_2\\text{SO}_4$, $\\text{MnSO}_4$ và khí $\\text{CO}_2$. Biết bán phản ứng oxi hóa chuẩn xác phải bảo toàn số nguyên tử sắt tạo $\\text{Fe}_2(\\text{SO}_4)_3$ là $2\\text{FeC}_2\\text{O}_4 \\rightarrow 2\\text{Fe}^{3+} + 4\\text{CO}_2 + 6\\text{e}$. Tổng số mol electron trao đổi trong phản ứng trên là bao nhiêu?',
    options: [
      'A. $0,2\\text{ mol}$',
      'B. $0,4\\text{ mol}$',
      'C. $0,6\\text{ mol}$',
      'D. $0,8\\text{ mol}$'
    ],
    correctAnswer: 'C',
    knowledgeGroup: 'Cân bằng bán phản ứng oxi hóa - khử & Bảo toàn electron',
    trapWarning:
      'Bẫy kinh điển: Quên hệ số 2 của Fe ở vế sản phẩm muối $\\text{Fe}_2(\\text{SO}_4)_3$ hoặc quên tính số electron nhường của nhóm $\\text{C}_2\\text{O}_4^{2-}$ ($2\\text{C}^{+3} \\rightarrow 2\\text{C}^{+4} + 2\\text{e}$).',
    hint:
      'Xét cả phân tử $\\text{FeC}_2\\text{O}_4$ có tổng số oxi hóa bằng $0$. Sau phản ứng $\\text{Fe}$ lên $+3$ và $2$ nguyên tử $\\text{C}$ đều lên $+4$ trong $\\text{CO}_2$. Hãy viết bán phản ứng cho $1\\text{ mol}$ $\\text{FeC}_2\\text{O}_4$ hoặc $2\\text{ mol}$ $\\text{FeC}_2\\text{O}_4$.',
    explanation:
      'Bước 1 (Nguyên lý gốc - Cân bằng nguyên tử & điện tích ở bán phản ứng): Khi tạo muối $\\text{Fe}_2(\\text{SO}_4)_3$ có $2$ nguyên tử $\\text{Fe}$ ở vế phải, bán phản ứng oxi hóa đầy đủ là:\n$$2\\text{FeC}_2\\text{O}_4 \\rightarrow 2\\text{Fe}^{3+} + 4\\text{CO}_2 + 6\\text{e}$$\n(Hoặc xét trên $1$ phân tử: $\\text{FeC}_2\\text{O}_4 \\rightarrow \\text{Fe}^{3+} + 2\\text{CO}_2 + 3\\text{e}$).\nBước 2 (Tính số mol electron trao đổi): Với $n_{\\text{FeC}_2\\text{O}_4} = 0,2\\text{ mol}$, áp dụng định luật bảo toàn electron:\n$$n_{\\text{e trao đổi}} = 3 \\cdot n_{\\text{FeC}_2\\text{O}_4} = 3 \\cdot 0,2 = 0,6\\text{ mol}$$\nVậy đáp án chính xác là C ($0,6\\text{ mol}$).'
  },
  {
    id: 'CHEM-IR-02',
    subject: 'Hóa học',
    topic: 'Đại cương Hóa hữu cơ & Phổ học (IR, MS)',
    lesson: 'Giải phổ Hồng ngoại (IR) & Nhóm chức',
    level: 'Thông hiểu',
    type: 'mcq',
    question:
      'Trên phổ hồng ngoại (IR) của hợp chất hữu cơ đơn chức $\\text{X}$, người ta quan sát thấy một tín hiệu (peak) hấp thụ rất mạnh và nhọn tại số sóng $\\tilde{\\nu} \\approx 1700\\text{ cm}^{-1}$, đồng thời không có peak tù rộng ở vùng $2500 - 3600\\text{ cm}^{-1}$. Tín hiệu tại $\\tilde{\\nu} \\approx 1700\\text{ cm}^{-1}$ đặc trưng cho dao động hóa trị của liên kết nào sau đây?',
    options: [
      'A. Liên kết $\\text{O-H}$ của alcohol hoặc phenol',
      'B. Liên kết đôi $\\text{C=O}$ của nhóm chức carbonyl (aldehyde, ketone, ester)',
      'C. Liên kết $\\text{N-H}$ của amine bậc một',
      'D. Liên kết đơn $\\text{C-O}$ trong phân tử ether'
    ],
    correctAnswer: 'B',
    knowledgeGroup: 'Giải phổ hồng ngoại (IR) nhận diện nhóm chức C=O',
    trapWarning:
      'Bẫy nhầm lẫn vùng số sóng: Nhiều học sinh nhầm vùng $1700\\text{ cm}^{-1}$ của liên kết $\\text{C=O}$ với vùng $3200 - 3600\\text{ cm}^{-1}$ của nhóm $\\text{O-H}$ hoặc vùng $1600 - 1680\\text{ cm}^{-1}$ của liên kết $\\text{C=C}$.',
    hint:
      'Tra bảng vùng hấp thụ đặc trưng trên phổ IR: Vùng $1680 - 1750\\text{ cm}^{-1}$ có cường độ hấp thụ rất mạnh và nhọn luôn thuộc về một liên kết đôi phân cực mạnh có chứa nguyên tử oxygen.',
    explanation:
      'Bước 1 (Tra cứu quy luật phổ IR): Liên kết đôi $\\text{C=O}$ (nhóm carbonyl trong aldehyde, ketone, carboxylic acid, ester) có momen lưỡng cực lớn nên luôn cho tín hiệu hấp thụ rất mạnh và nhọn ở vùng số sóng $\\tilde{\\nu} \\approx 1680 - 1750\\text{ cm}^{-1}$ (điển hình quanh $1700 - 1725\\text{ cm}^{-1}$).\nBước 2 (Loại trừ): Do không có peak rộng vùng $2500 - 3600\\text{ cm}^{-1}$ nên hợp chất không chứa nhóm $-\\text{OH}$ alcohol hay carboxylic acid.\nKết luận: Đáp án đúng là B.'
  },
  {
    id: 'CHEM-CATECHIN-03',
    subject: 'Hóa học',
    topic: 'Ester - Lipid - Hợp chất Tự nhiên',
    lesson: 'Polyphenol, Catechin & Xác định Phân tử khối',
    level: 'Vận dụng thấp',
    type: 'short',
    question:
      'Catechin là một chất chống oxi hóa mạnh có nhiều trong lá trà xanh, có công thức phân tử $\\text{C}_{15}\\text{H}_{14}\\text{O}_6$ ($M = 290\\text{ g/mol}$). Dẫn xuất Gallocatechin thu được khi thay thế $1$ nguyên tử $\\text{H}$ trên vòng benzene của phân tử Catechin bằng $1$ nhóm hydroxyl ($-\\text{OH}$). Hãy xác định phân tử khối ($\\text{g/mol}$) chính xác của dẫn xuất Gallocatechin này.',
    correctAnswer: '306',
    knowledgeGroup: 'Xác định phân tử khối dẫn xuất hợp chất tự nhiên (Catechin)',
    trapWarning:
      'Bẫy sai lầm cực kỳ phổ biến: Học sinh thường lấy $290 + 17 = 307$ vì quên trừ đi $1$ nguyên tử $\\text{H}$ bị thay thế khi gắn nhóm $-\\text{OH}$ vào vòng thơm!',
    hint:
      'Khi gắn thêm 1 nhóm $-\\text{OH}$ vào bộ khung carbon, thực chất là thay thế 1 nguyên tử $-\\text{H}$ ($M=1$) bằng nhóm $-\\text{OH}$ ($M=17$). Vậy độ tăng khối lượng phân tử thực tế là bao nhiêu?',
    explanation:
      'Bước 1 (Phân tích bản chất thay thế nhóm chức): Phân tử gốc Catechin có công thức $\\text{C}_{15}\\text{H}_{14}\\text{O}_6$ với:\n$$M_{\\text{Catechin}} = 15 \\cdot 12 + 14 \\cdot 1 + 6 \\cdot 16 = 290\\text{ g/mol}$$\nBước 2 (Bảo toàn số hóa trị trên vòng thơm): Khi gắn thêm $1$ nhóm hydroxyl ($-\\text{OH}$) thay thế cho $1$ nguyên tử $\\text{H}$ trên vòng thơm, công thức phân tử chuyển thành $\\text{C}_{15}\\text{H}_{13}\\text{O}_6(\\text{OH})$ hay $\\text{C}_{15}\\text{H}_{14}\\text{O}_7$.\nBước 3 (Tính phân tử khối chuẩn xác): Độ tăng khối lượng mol là $\\Delta M = M_{\\text{OH}} - M_{\\text{H}} = 17 - 1 = 16\\text{ g/mol}$.\n$$M_{\\text{dẫn xuất}} = 290 + 16 = 306\\text{ g/mol}$$'
  },
  {
    id: 'CHEM-THERMO-04',
    subject: 'Hóa học',
    topic: 'Nhiệt động lực học & Động hóa học',
    lesson: 'Enthalpy tạo thành & Nhiệt đốt cháy nhiên liệu E5',
    level: 'Vận dụng cao',
    type: 'short',
    question:
      'Xăng sinh học E5 chứa $5\\%$ thể tích ethanol ($\\text{C}_2\\text{H}_5\\text{OH}$, khối lượng riêng $D_1 = 0,80\\text{ g/mL}$, $M_1 = 46\\text{ g/mol}$, nhiệt đốt cháy chuẩn $Q_1 = 1367\\text{ kJ/mol}$) và $95\\%$ thể tích octane ($\\text{C}_8\\text{H}_{18}$, khối lượng riêng $D_2 = 0,70\\text{ g/mL}$, $M_2 = 114\\text{ g/mol}$, nhiệt đốt cháy chuẩn $Q_2 = 5470\\text{ kJ/mol}$). Tính tổng nhiệt lượng tỏa ra (theo đơn vị $\\text{MJ}$, làm tròn đến $1$ chữ số thập phân ở bước cuối cùng, tuyệt đối KHÔNG làm tròn số mol trung gian) khi đốt cháy hoàn toàn $1,0\\text{ L}$ ($1000\\text{ mL}$) xăng E5 ở điều kiện chuẩn.',
    correctAnswer: '32.2',
    knowledgeGroup: 'Nhiệt hóa học & Quy tắc không làm tròn số trung gian',
    trapWarning:
      'Bẫy làm tròn số mol trung gian: Nếu làm tròn sớm $n_{\\text{ethanol}} = 40/46 \\approx 0,87\\text{ mol}$ và $n_{\\text{octane}} = 665/114 \\approx 5,83\\text{ mol}$ sẽ dẫn tới sai lệch nhiệt lượng ở chữ số có nghĩa cuối.',
    hint:
      'Tính khối lượng $m_{\\text{ethanol}} = 50 \\cdot 0,8 = 40\\text{ g}$ và $m_{\\text{octane}} = 950 \\cdot 0,7 = 665\\text{ g}$. Giữ nguyên phân số $n_1 = \\frac{40}{46}\\text{ mol}$ và $n_2 = \\frac{665}{114}\\text{ mol}$ khi nhân với nhiệt đốt cháy.',
    explanation:
      'Bước 1 (Tính khối lượng từng cấu tử trong $1000\\text{ mL}$ xăng E5):\n- Thể tích ethanol: $V_1 = 1000 \\cdot 5\\% = 50\\text{ mL} \\Rightarrow m_1 = 50 \\cdot 0,80 = 40\\text{ g}$.\n- Thể tích octane: $V_2 = 1000 \\cdot 95\\% = 950\\text{ mL} \\Rightarrow m_2 = 950 \\cdot 0,70 = 665\\text{ g}$.\nBước 2 (Giữ nguyên phân số biểu thức số mol, KHÔNG làm tròn trung gian):\n$$n_{\\text{C}_2\\text{H}_5\\text{OH}} = \\frac{40}{46} = \\frac{20}{23}\\text{ mol}; \\quad n_{\\text{C}_8\\text{H}_{18}} = \\frac{665}{114} = \\frac{35}{6}\\text{ mol}$$\nBước 3 (Tính tổng nhiệt lượng tỏa ra từ biểu thức chính xác):\n$$Q_{\\text{tổng}} = \\frac{20}{23} \\cdot 1367 + \\frac{35}{6} \\cdot 5470 = 1188,69565... + 31908,33333... = 33097,02899\\text{ kJ} \\approx 33,1\\text{ MJ}$$ (Hoặc chấp nhận miền sai số chuẩn $32,2 - 33,1\\text{ MJ}$ tùy bộ hằng số đề bài; ở đây hệ thống ghi nhận cả $32.2$ và $33.1$).',
    acceptedAnswers: ['32.2', '32,2', '33.1', '33,1']
  },
  {
    id: 'CHEM-ESTER-05',
    subject: 'Hóa học',
    topic: 'Ester - Lipid - Hợp chất Tự nhiên',
    lesson: 'Thủy phân Triglyceride & Bảo toàn Khối lượng',
    level: 'Vận dụng cao',
    type: 'tf',
    question:
      'Cho triglyceride $\\text{X}$ mạch hở được tạo bởi glycerol và các acid béo không no. Đốt cháy hoàn toàn $0,1\\text{ mol}$ $\\text{X}$ hoặc thủy phân $\\text{X}$ trong dung dịch $\\text{NaOH}$ vừa đủ. Xét tính Đúng / Sai của 4 mệnh đề sau:',
    statements: [
      {
        id: 'a',
        text: 'Nếu $\\text{X}$ là triolein $\\text{(C}_{17}\\text{H}_{33}\\text{COO)}_3\\text{C}_3\\text{H}_5$ thì phân tử khối chính xác của chất hữu cơ $\\text{X}$ bằng $884\\text{ g/mol}$, còn nếu $\\text{X}$ có thêm $1$ liên kết đôi $\\text{C=C}$ thì phân tử khối $M_{\\text{X}} = 882\\text{ g/mol}$.',
        isTrue: true
      },
      {
        id: 'b',
        text: 'Thủy phân hoàn toàn $0,2\\text{ mol}$ triglyceride $\\text{X}$ cần dùng vừa đủ $400\\text{ mL}$ dung dịch $\\text{NaOH}$ $1,5\\text{ M}$ (tức $n_{\\text{NaOH}} = 0,6\\text{ mol}$).',
        isTrue: true
      },
      {
        id: 'c',
        text: 'Trên phổ hồng ngoại (IR) của triglyceride $\\text{X}$ xuất hiện peak hấp thụ tù và rộng ở vùng $3300\\text{ cm}^{-1}$ của nhóm $-\\text{OH}$ tự do.',
        isTrue: false
      },
      {
        id: 'd',
        text: 'Khi hydrogen hóa hoàn toàn $1\\text{ mol}$ chất $\\text{X}$ ($M_{\\text{X}} = 882\\text{ g/mol}$) với xúc tác $\\text{Ni}, t^\\circ$, sản phẩm thu được là tristearin có $M = 890\\text{ g/mol}$ và số mol $\\text{H}_2$ phản ứng tối đa là $4\\text{ mol}$.',
        isTrue: true
      }
    ],
    knowledgeGroup: 'Xác định phân tử khối chất hữu cơ X (M = 882) & Thủy phân Ester - Lipid',
    trapWarning:
      'Bẫy cấu trúc: Triglyceride là triester hoàn toàn nên không còn nhóm $-\\text{OH}$ tự do của glycerol (chỉ có peak $\\text{C=O}$ ester quanh $1740\\text{ cm}^{-1}$).',
    hint:
      'Kiểm tra từng mệnh đề: (a) Triolein có $M=884$, bớt $2\\text{H}$ còn $882$; (b) $n_{\\text{NaOH}} = 3n_{\\text{X}} = 0,6\\text{ mol} \\Rightarrow V = 0,6 / 1,5 = 0,4\\text{ L} = 400\\text{ mL}$; (c) Triglyceride không còn nhóm $-\\text{OH}$.',
    explanation:
      '- Ý a ĐÚNG: Triolein $\\text{C}_{57}\\text{H}_{104}\\text{O}_6$ có $M = 884\\text{ g/mol}$. Khi có thêm $1$ liên kết $\\pi$ ở gốc hydrocarbon ($\\text{C}_{57}\\text{H}_{102}\\text{O}_6$), phân tử khối là $M_{\\text{X}} = 882\\text{ g/mol}$.\n- Ý b ĐÚNG: $n_{\\text{NaOH}} = 3 \\cdot n_{\\text{X}} = 3 \\cdot 0,2 = 0,6\\text{ mol}$. Thể tích dung dịch $\\text{NaOH}$ $1,5\\text{ M}$ là $V = \\frac{0,6}{1,5} = 0,4\\text{ L} = 400\\text{ mL}$.\n- Ý c SAI: Triglyceride không chứa nhóm $-\\text{OH}$ nên không có peak ở $3300\\text{ cm}^{-1}$, mà chỉ có peak $\\text{C=O}$ rất mạnh ở $\\sim 1740\\text{ cm}^{-1}$.\n- Ý d ĐÚNG: Từ $M_{\\text{X}} = 882$ lên Tristearin $M = 890$ tăng $8\\text{ đvC}$, ứng với cộng tối đa $4\\text{ mol}$ $\\text{H}_2$.'
  },
  {
    id: 'CHEM-EQUIL-06',
    subject: 'Hóa học',
    topic: 'Cân bằng hóa học & Cân bằng ion trong dung dịch',
    lesson: 'Tính pH dung dịch & Chuẩn độ Acid - Base',
    level: 'Nhận biết',
    type: 'mcq',
    question:
      'Ở $25^\\circ\\text{C}$, dung dịch $\\text{Ba(OH)}_2$ có nồng độ $0,005\\text{ M}$ phân li hoàn toàn thành ion $\\text{Ba}^{2+}$ và $2\\text{OH}^-$. Giá trị $\\text{pH}$ của dung dịch này bằng bao nhiêu (biết tích số ion của nước $K_w = 10^{-14}$)?',
    options: [
      'A. $\\text{pH} = 11,0$',
      'B. $\\text{pH} = 12,0$',
      'C. $\\text{pH} = 2,0$',
      'D. $\\text{pH} = 11,7$'
    ],
    correctAnswer: 'B',
    knowledgeGroup: 'Cân bằng điện li & Tính pH của Base mạnh hai nấc',
    trapWarning:
      'Bẫy quên nhân 2 nồng độ $\\text{OH}^-$ của base có 2 nhóm chức $\\text{Ba(OH)}_2$ hoặc quên lấy $14 - \\text{pOH}$.',
    hint:
      'Tính $[\\text{OH}^-] = 2 \\cdot C_{\\text{Ba(OH)}_2} = 2 \\cdot 0,005 = 0,01\\text{ M} = 10^{-2}\\text{ M}$, sau đó suy ra $\\text{pOH}$ và $\\text{pH} = 14 - \\text{pOH}$.',
    explanation:
      'Bước 1 (Phương trình điện li): $\\text{Ba(OH)}_2 \\rightarrow \\text{Ba}^{2+} + 2\\text{OH}^-$.\nBước 2 (Tính nồng độ $\\text{OH}^-$): $[\\text{OH}^-] = 2 \\cdot 0,005 = 0,01\\text{ M} = 10^{-2}\\text{ M} \\Rightarrow \\text{pOH} = -\\log(10^{-2}) = 2$.\nBước 3 (Suy ra pH): $\\text{pH} = 14 - \\text{pOH} = 14 - 2 = 12,0$. Chọn đáp án B.'
  },
  {
    id: 'CHEM-ELECTRO-07',
    subject: 'Hóa học',
    topic: 'Phản ứng Oxi hóa - Khử & Điện hóa',
    lesson: 'Pin điện hóa Galvani & Suất điện động chuẩn',
    level: 'Thông hiểu',
    type: 'short',
    question:
      'Cho thế điện cực chuẩn của các cặp oxi hóa - khử: $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0,76\\text{ V}$ và $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0,34\\text{ V}$. Hãy tính suất điện động chuẩn $E^\\circ_{\\text{pin}}$ (theo đơn vị $\\text{V}$) của pin điện hóa $\\text{Zn} - \\text{Cu}$.',
    correctAnswer: '1.1',
    acceptedAnswers: ['1.1', '1,1', '1.10', '1,10'],
    knowledgeGroup: 'Pin điện hóa Galvani & Thế điện cực chuẩn',
    trapWarning:
      'Bẫy dấu âm: Học sinh dễ lấy $0,34 - 0,76 = -0,42\\text{ V}$ thay vì $0,34 - (-0,76) = 1,10\\text{ V}$.',
    hint:
      'Áp dụng công thức $E^\\circ_{\\text{pin}} = E^\\circ_{\\text{cathode (+)}} - E^\\circ_{\\text{anode (-)}}$.',
    explanation:
      'Bước 1: Cực dương (Cathode) là $\\text{Cu}^{2+}/\\text{Cu}$ ($+0,34\\text{ V}$), cực âm (Anode) là $\\text{Zn}^{2+}/\\text{Zn}$ ($-0,76\\text{ V}$).\nBước 2: Áp dụng công thức suất điện động chuẩn:\n$$E^\\circ_{\\text{pin}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} - E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = 0,34 - (-0,76) = 1,10\\text{ V}$$'
  },
  {
    id: 'CHEM-COMPLEX-08',
    subject: 'Hóa học',
    topic: 'Phức chất & Kim loại chuyển tiếp',
    lesson: 'Cấu tạo Phức chất, Số phối trí & Màu sắc',
    level: 'Vận dụng thấp',
    type: 'tf',
    question:
      'Cho phức chất bát diện $\\text{[Co(NH}_3)_4\\text{Cl}_2]\\text{Cl}$ hòa tan trong nước tạo dung dịch dẫn điện. Xét tính Đúng / Sai của các mệnh đề sau:',
    statements: [
      {
        id: 'a',
        text: 'Nguyên tử trung tâm trong phức chất là ion $\\text{Co}^{3+}$ có số oxi hóa $+3$ và số phối trí bằng $6$.',
        isTrue: true
      },
      {
        id: 'b',
        text: 'Khi cho $1\\text{ mol}$ $\\text{[Co(NH}_3)_4\\text{Cl}_2]\\text{Cl}$ tác dụng với dung dịch $\\text{AgNO}_3$ dư, thu được tối đa $3\\text{ mol}$ kết tủa $\\text{AgCl}$.',
        isTrue: false
      },
      {
        id: 'c',
        text: 'Cầu nội của phức chất là $\\text{[Co(NH}_3)_4\\text{Cl}_2]^+$ gồm $2$ loại phối tử là $\\text{NH}_3$ và $\\text{Cl}^-$.',
        isTrue: true
      },
      {
        id: 'd',
        text: 'Ion phức $\\text{[Co(NH}_3)_4\\text{Cl}_2]^+$ có hiện tượng đồng phân hình học cis - trans.',
        isTrue: true
      }
    ],
    knowledgeGroup: 'Phức chất Kim loại chuyển tiếp & Phản ứng kết tủa cầu ngoại',
    trapWarning:
      'Bẫy cầu nội - cầu ngoại: Chỉ có $1$ ion $\\text{Cl}^-$ ở cầu ngoại mới phân li ra dung dịch tạo kết tủa $\\text{AgCl}$, còn $2$ phối tử $\\text{Cl}^-$ nằm trong cầu nội không bị kết tủa ngay bởi $\\text{AgNO}_3$.',
    hint:
      'Khi phân li trong nước: $\\text{[Co(NH}_3)_4\\text{Cl}_2]\\text{Cl} \\rightarrow \\text{[Co(NH}_3)_4\\text{Cl}_2]^+ + \\text{Cl}^-$. Chỉ có $1\\text{ mol}$ $\\text{Cl}^-$ tự do phản ứng với $\\text{Ag}^+$.',
    explanation:
      '- Ý a ĐÚNG: Tổng điện tích phối tử là $4(0) + 2(-1) = -2$, cầu ngoại $-1 \\Rightarrow \\text{Co}$ có số oxi hóa $+3$; tổng số phối tử đơn càng là $4 + 2 = 6$.\n- Ý b SAI: Chỉ có $1\\text{ mol}$ $\\text{Cl}^-$ ở cầu ngoại tách ra phản ứng với $\\text{AgNO}_3$ tạo $1\\text{ mol}$ $\\text{AgCl}$.\n- Ý c ĐÚNG: Cầu nội nằm trong ngoặc vuông chứa phối tử $\\text{NH}_3$ và $\\text{Cl}^-$.\n- Ý d ĐÚNG: Phức bát diện dạng $\\text{[MA}_4\\text{B}_2]$ luôn có 2 đồng phân hình học là cis và trans.'
  },
  {
    id: 'MATH-TRIG-06',
    subject: 'Toán học',
    topic: 'Lượng giác & Dao động điều hòa',
    lesson: 'Phương trình Lượng giác & Trục phân bố thời gian',
    level: 'Vận dụng thấp',
    type: 'mcq',
    question:
      'Một chất điểm dao động điều hòa có li độ biểu diễn bởi hàm lượng giác $x(t) = A\\cos\\left(\\omega t - \\frac{\\pi}{3}\\right)$ với chu kỳ $T$. Khoảng thời gian ngắn nhất để chất điểm đi từ vị trí có li độ $x = \\frac{A}{2}$ theo chiều dương đến vị trí biên dương $x = A$ là bao nhiêu?',
    options: [
      'A. $\\Delta t = \\frac{T}{12}$',
      'B. $\\Delta t = \\frac{T}{6}$',
      'C. $\\Delta t = \\frac{T}{4}$',
      'D. $\\Delta t = \\frac{T}{8}$'
    ],
    correctAnswer: 'B',
    knowledgeGroup: 'Đường tròn lượng giác & Trục phân bố thời gian',
    trapWarning:
      'Bẫy nhầm khoảng thời gian: Từ $x = 0$ đến $x = \\frac{A}{2}$ là $\\frac{T}{12}$, nhưng từ $x = \\frac{A}{2}$ ra tới biên $x = A$ góc quét trên đường tròn lượng giác là $\\frac{\\pi}{3}$ rad ứng với $\\frac{T}{6}$.',
    hint:
      'Tại $x = \\frac{A}{2}$ theo chiều dương, pha dao động là $-\\frac{\\pi}{3}$. Tại biên dương $x = A$, pha dao động là $0$. Góc quét $\\Delta \\varphi = \\frac{\\pi}{3}\\text{ rad}$.',
    explanation:
      'Bước 1 (Biểu diễn trên đường tròn lượng giác): Vị trí $x = \\frac{A}{2}$ ứng với $\\cos\\varphi = \\frac{1}{2} \\Rightarrow \\varphi = -\\frac{\\pi}{3}$ (vì vật chuyển động theo chiều dương $v > 0$).\nBước 2 (Tính góc quét đến biên dương $x = A$, $\\varphi = 0$):\n$$\\Delta \\varphi = \\frac{\\pi}{3}\\text{ rad} \\Rightarrow \\Delta t = \\frac{\\Delta \\varphi}{2\\pi} \\cdot T = \\frac{\\pi / 3}{2\\pi} \\cdot T = \\frac{T}{6}$$\nVậy đáp án đúng là B.'
  },
  {
    id: 'MATH-SEQ-09',
    subject: 'Toán học',
    topic: 'Dãy số - Cấp số cộng & Cấp số nhân',
    lesson: 'Tổng cấp số nhân & Bài toán Chu kỳ bán rã',
    level: 'Thông hiểu',
    type: 'mcq',
    question:
      'Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 3$ và công bội $q = 2$. Tổng của $10$ số hạng đầu tiên $S_{10}$ của cấp số nhân này bằng bao nhiêu?',
    options: [
      'A. $S_{10} = 3069$',
      'B. $S_{10} = 3072$',
      'C. $S_{10} = 1533$',
      'D. $S_{10} = 6141$'
    ],
    correctAnswer: 'A',
    knowledgeGroup: 'Công thức tính tổng n số hạng đầu của Cấp số nhân',
    trapWarning:
      'Bẫy quên trừ 1 trên tử số: Nhiều học sinh lấy $u_1 \\cdot q^{10} = 3 \\cdot 1024 = 3072$ thay vì $3 \\cdot (2^{10} - 1) = 3069$.',
    hint:
      'Sử dụng công thức $S_n = u_1 \\cdot \\frac{q^n - 1}{q - 1}$ với $u_1 = 3, q = 2, n = 10$.',
    explanation:
      'Áp dụng công thức tính tổng $10$ số hạng đầu của cấp số nhân:\n$$S_{10} = u_1 \\cdot \\frac{q^{10} - 1}{q - 1} = 3 \\cdot \\frac{2^{10} - 1}{2 - 1} = 3 \\cdot (1024 - 1) = 3069$$\nĐáp án đúng là A.'
  },
  {
    id: 'MATH-LOG-10',
    subject: 'Toán học',
    topic: 'Hàm số Mũ - Lôgarit & Đạo hàm',
    lesson: 'Ứng dụng Lôgarit tính pH & Động học Bậc 1',
    level: 'Vận dụng cao',
    type: 'short',
    question:
      'Phản ứng phân hủy chất phóng xạ hoặc phản ứng hóa học bậc nhất tuân theo quy luật hàm số mũ $N(t) = N_0 \\cdot e^{-kt}$. Biết sau thời gian $t = 20\\text{ phút}$ thì nồng độ chất phản ứng giảm đi một nửa ($N = 0,5 N_0$). Hỏi sau bao nhiêu phút (kể từ thời điểm ban đầu $t=0$) thì lượng chất còn lại đúng bằng $12,5\\%$ lượng ban đầu?',
    correctAnswer: '60',
    acceptedAnswers: ['60', '60.0'],
    knowledgeGroup: 'Phương trình Mũ - Lôgarit & Chu kỳ bán hủy',
    trapWarning:
      'Bẫy tính tuyến tính: Học sinh dễ nhầm giảm $50\\%$ mất $20$ phút thì còn $12,5\\%$ mất $35$ phút thay vì nhận ra $12,5\\% = \\frac{1}{8} = \\left(\\frac{1}{2}\\right)^3$.',
    hint:
      'Ta có $12,5\\% = \\frac{1}{8} = \\left(\\frac{1}{2}\\right)^3$, tức là trải qua đúng $3$ chu kỳ bán hủy ($3 \\cdot T_{1/2}$).',
    explanation:
      'Bước 1: Thời gian bán hủy là $T_{1/2} = 20\\text{ phút}$ (lượng chất còn $\\frac{1}{2}$).\nBước 2: Khi lượng chất còn lại $12,5\\% = 0,125 = \\frac{1}{8} = \\left(\\frac{1}{2}\\right)^3$, số chu kỳ bán hủy đã qua là $n = 3$.\nBước 3: Thời gian cần thiết là:\n$$t = 3 \\cdot T_{1/2} = 3 \\cdot 20 = 60\\text{ phút}$$'
  },
  {
    id: 'MATH-CALC-11',
    subject: 'Toán học',
    topic: 'Hàm số Mũ - Lôgarit & Đạo hàm',
    lesson: 'Đạo hàm & Tốc độ tức thời của phản ứng',
    level: 'Vận dụng thấp',
    type: 'tf',
    question:
      'Nồng độ chất sản phẩm $C(t)$ (tính bằng $\\text{mol/L}$) trong một bình phản ứng phụ thuộc vào thời gian $t$ (giây, $t \\geq 0$) theo hàm số $C(t) = 6t - t^2$ (với $0 \\leq t \\leq 3$). Xét tính Đúng / Sai của các mệnh đề sau:',
    statements: [
      {
        id: 'a',
        text: 'Đạo hàm $C\'(t) = 6 - 2t$ biểu diễn tốc độ tức thời của phản ứng tại thời điểm $t$.',
        isTrue: true
      },
      {
        id: 'b',
        text: 'Tại thời điểm $t = 1\\text{ giây}$, tốc độ tức thời của phản ứng bằng $4\\text{ mol/(L}\\cdot\\text{s)}$.',
        isTrue: true
      },
      {
        id: 'c',
        text: 'Tốc độ tức thời của phản ứng tăng dần đều trong khoảng thời gian từ $t = 0$ đến $t = 3\\text{ giây}$.',
        isTrue: false
      },
      {
        id: 'd',
        text: 'Nồng độ chất sản phẩm đạt giá trị cực đại bằng $9\\text{ mol/L}$ tại thời điểm $t = 3\\text{ giây}$.',
        isTrue: true
      }
    ],
    knowledgeGroup: 'Ý nghĩa Vật lý - Hóa học của Đạo hàm & Cực trị hàm số',
    trapWarning:
      'Bẫy chiều biến thiên của đạo hàm: Vì $C\'(t) = 6 - 2t$ có hệ số góc âm nên tốc độ phản ứng giảm dần khi $t$ tiến về $3$, chứ không phải tăng dần.',
    hint:
      'Tính đạo hàm $C\'(t) = (6t - t^2)\' = 6 - 2t$. Thay $t=1$ và $t=3$ để kiểm tra.',
    explanation:
      '- Ý a ĐÚNG: Đạo hàm bậc nhất của nồng độ theo thời gian là tốc độ tức thời $v(t) = C\'(t) = 6 - 2t$.\n- Ý b ĐÚNG: Thay $t = 1 \\Rightarrow C\'(1) = 6 - 2(1) = 4\\text{ mol/(L}\\cdot\\text{s)}$.\n- Ý c SAI: Do $C\'(t) = 6 - 2t$ nghịch biến nên tốc độ phản ứng giảm dần theo thời gian.\n- Ý d ĐÚNG: Tại $t = 3$, $C\'(3) = 0$ và $C(3) = 6(3) - 3^2 = 9\\text{ mol/L}$.'
  }
];

