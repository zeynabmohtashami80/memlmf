const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'public/images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const svgs = {
  'photo_350@14-06-2026_21-02-11.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 700" width="100%" height="100%">
  <rect width="600" height="700" fill="#ffffff" />
  <text x="300" y="50" font-family="sans-serif" font-size="24" font-weight="bold" fill="#0f172a" text-anchor="middle">الگوی ستاره صبحگاهی (Morning Star Pattern)</text>
  <text x="300" y="80" font-family="sans-serif" font-size="16" fill="#64748b" text-anchor="middle">الگوی ۳ کندلی بازگشتی در انتهای روند نزولی</text>
  
  <!-- Candle 1: Big Bearish Black/Red -->
  <line x1="140" y1="110" x2="140" y2="430" stroke="#000000" stroke-width="4" />
  <rect x="100" y="150" width="80" height="230" fill="#000000" stroke="#000000" stroke-width="2" />
  <text x="140" y="470" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155" text-anchor="middle">کندل ۱: نزولی بزرگ</text>
  
  <!-- Gap Level line -->
  <line x1="180" y1="265" x2="420" y2="265" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6,6" />
  
  <!-- Candle 2: Gap Star / Doji at bottom -->
  <line x1="280" y1="460" x2="280" y2="600" stroke="#000000" stroke-width="4" />
  <rect x="245" y="500" width="70" height="70" fill="#000000" stroke="#000000" stroke-width="2" />
  <text x="280" y="640" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155" text-anchor="middle">کندل ۲: ستاره (دوجی / بدنه کوچک)</text>
  
  <!-- Gap label -->
  <text x="140" y="515" font-family="sans-serif" font-size="20" font-weight="bold" fill="#0f172a" text-anchor="middle">Gap (شکاف)</text>
  <path d="M 170 510 L 235 525" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrow)" />
  
  <!-- Candle 3: Big Bullish White/Green -->
  <line x1="460" y1="160" x2="460" y2="520" stroke="#000000" stroke-width="4" />
  <rect x="420" y="195" width="80" height="280" fill="#ffffff" stroke="#000000" stroke-width="4" />
  <text x="460" y="560" font-family="sans-serif" font-size="14" font-weight="bold" fill="#16a34a" text-anchor="middle">کندل ۳: صعودی قدرتمند</text>
  
  <!-- Status Badge -->
  <rect x="180" y="655" width="240" height="32" rx="16" fill="#dcfce7" stroke="#86efac" stroke-width="1.5" />
  <text x="300" y="677" font-family="sans-serif" font-size="14" font-weight="bold" fill="#15803d" text-anchor="middle">تأییدیه قوی ورود به خرید (BUY)</text>
</svg>`,

  'photo_351@14-06-2026_21-06-29.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 480" width="100%" height="100%">
  <rect width="900" height="480" fill="#ffffff" />
  
  <!-- Title -->
  <text x="450" y="35" font-family="sans-serif" font-size="18" font-weight="bold" fill="#0f172a" text-anchor="middle">شکل‌گیری الگوی ستاره صبحگاهی در انتهای روند نزولی و چرخش قدرتمند صعودی</text>
  
  <!-- Background trend lines -->
  <path d="M 80 180 L 250 80 L 440 380 L 680 80 L 820 40" fill="none" stroke="#f1f5f9" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
  
  <!-- Left swing up -->
  <!-- Candle 1 up -->
  <line x1="90" y1="160" x2="90" y2="260" stroke="#10b981" stroke-width="2" />
  <rect x="83" y="170" width="14" height="80" fill="#10b981" />
  
  <!-- Candle small red -->
  <line x1="110" y1="170" x2="110" y2="230" stroke="#ef4444" stroke-width="2" />
  <rect x="103" y="180" width="14" height="30" fill="#ef4444" />
  
  <!-- Candlesticks forming left top -->
  <line x1="200" y1="120" x2="200" y2="300" stroke="#ef4444" stroke-width="2" />
  <rect x="192" y="160" width="16" height="110" fill="#ef4444" />
  
  <line x1="225" y1="80" x2="225" y2="260" stroke="#10b981" stroke-width="2" />
  <rect x="217" y="120" width="16" height="130" fill="#10b981" />
  
  <line x1="250" y1="90" x2="250" y2="270" stroke="#ef4444" stroke-width="2" />
  <rect x="242" y="130" width="16" height="120" fill="#ef4444" />
  
  <!-- Downtrend candles -->
  <line x1="280" y1="180" x2="280" y2="280" stroke="#ef4444" stroke-width="2" />
  <rect x="273" y="195" width="14" height="60" fill="#ef4444" />
  
  <line x1="305" y1="230" x2="305" y2="330" stroke="#ef4444" stroke-width="2" />
  <rect x="298" y="245" width="14" height="70" fill="#ef4444" />
  
  <line x1="330" y1="280" x2="330" y2="380" stroke="#ef4444" stroke-width="2" />
  <rect x="323" y="295" width="14" height="75" fill="#ef4444" />
  
  <!-- Pattern Zone (Circle) -->
  <circle cx="445" cy="380" r="75" fill="none" stroke="#94a3b8" stroke-width="3" stroke-dasharray="4,4" />
  <rect x="370" y="305" width="150" height="150" fill="#f8fafc" opacity="0.6" rx="75" />
  
  <!-- Inside Pattern Candles -->
  <!-- 1. Large Bearish -->
  <line x1="420" y1="310" x2="420" y2="430" stroke="#ef4444" stroke-width="3" />
  <rect x="410" y="335" width="20" height="85" fill="#ef4444" />
  
  <!-- 2. Small Doji/Star at bottom -->
  <line x1="445" y1="400" x2="445" y2="465" stroke="#10b981" stroke-width="3" />
  <rect x="439" y="415" width="12" height="18" fill="#10b981" />
  
  <!-- 3. Large Bullish -->
  <line x1="470" y1="330" x2="470" y2="445" stroke="#10b981" stroke-width="3" />
  <rect x="460" y="345" width="20" height="80" fill="#10b981" />
  
  <!-- Uptrend breakout candles -->
  <line x1="535" y1="270" x2="535" y2="380" stroke="#10b981" stroke-width="2.5" />
  <rect x="526" y="290" width="18" height="70" fill="#10b981" />
  
  <line x1="585" y1="180" x2="585" y2="320" stroke="#10b981" stroke-width="3" />
  <rect x="575" y="195" width="20" height="110" fill="#10b981" />
  
  <line x1="640" y1="110" x2="640" y2="240" stroke="#10b981" stroke-width="3" />
  <rect x="630" y="125" width="20" height="95" fill="#10b981" />
  
  <line x1="690" y1="50" x2="690" y2="180" stroke="#10b981" stroke-width="3" />
  <rect x="680" y="65" width="20" height="100" fill="#10b981" />
  
  <!-- Labels -->
  <text x="445" y="475" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0284c7" text-anchor="middle">الگوی ستاره صبحگاهی در کف</text>
</svg>`,

  'photo_352@14-06-2026_21-07-19.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 480" width="100%" height="100%">
  <rect width="900" height="480" fill="#ffffff" />
  
  <text x="450" y="35" font-family="sans-serif" font-size="18" font-weight="bold" fill="#0f172a" text-anchor="middle">الگوی ستاره عصرگاهی (Evening Star) در سقف صعودی و تایید ریزش (SELL)</text>
  
  <!-- Uptrend candles leading to top -->
  <line x1="280" y1="280" x2="280" y2="440" stroke="#10b981" stroke-width="3" />
  <rect x="270" y="300" width="20" height="120" fill="#10b981" />
  
  <line x1="335" y1="210" x2="335" y2="350" stroke="#10b981" stroke-width="3" />
  <rect x="325" y="230" width="20" height="100" fill="#10b981" />
  
  <!-- Pattern Zone (Circle at TOP) -->
  <circle cx="450" cy="140" r="95" fill="#f8fafc" stroke="#64748b" stroke-width="2.5" />
  
  <!-- Candle 1 (Bullish green) -->
  <line x1="400" y1="90" x2="400" y2="280" stroke="#10b981" stroke-width="3" />
  <rect x="388" y="115" width="24" height="125" fill="#10b981" />
  
  <!-- Candle 2 (Doji / Star at Peak) -->
  <line x1="445" y1="50" x2="445" y2="190" stroke="#ef4444" stroke-width="2.5" />
  <rect x="436" y="105" width="18" height="18" fill="#ef4444" />
  
  <!-- Candle 3 (Large Bearish Red) -->
  <line x1="490" y1="90" x2="490" y2="290" stroke="#ef4444" stroke-width="3" />
  <rect x="478" y="130" width="24" height="135" fill="#ef4444" />
  
  <!-- Downtrend resulting -->
  <line x1="560" y1="240" x2="560" y2="390" stroke="#ef4444" stroke-width="3" />
  <rect x="550" y="260" width="20" height="110" fill="#ef4444" />
  
  <line x1="610" y1="320" x2="610" y2="450" stroke="#ef4444" stroke-width="3" />
  <rect x="600" y="340" width="20" height="90" fill="#ef4444" />
  
  <line x1="660" y1="380" x2="660" y2="470" stroke="#ef4444" stroke-width="3" />
  <rect x="650" y="400" width="20" height="60" fill="#ef4444" />
  
  <text x="450" y="270" font-family="sans-serif" font-size="14" font-weight="bold" fill="#b91c1c" text-anchor="middle">تأییدیه فروش (SELL) در سقف مارکت</text>
</svg>`,

  'photo_353@14-06-2026_21-09-35.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 480" width="100%" height="100%">
  <rect width="900" height="480" fill="#ffffff" />
  <text x="450" y="35" font-family="sans-serif" font-size="18" font-weight="bold" fill="#0f172a" text-anchor="middle">مرحله ۱ ستاره صبحگاهی: کندل اول نزولی پرقدرت (قرمز/سیاه)</text>
  
  <!-- Pattern Zone (Circle) -->
  <circle cx="445" cy="380" r="75" fill="#f8fafc" stroke="#94a3b8" stroke-width="2.5" />
  
  <!-- Inside Pattern Candles -->
  <line x1="420" y1="310" x2="420" y2="430" stroke="#ef4444" stroke-width="3" />
  <rect x="410" y="335" width="20" height="85" fill="#ef4444" />
  
  <line x1="445" y1="400" x2="445" y2="465" stroke="#10b981" stroke-width="3" />
  <rect x="439" y="415" width="12" height="18" fill="#10b981" />
  
  <line x1="470" y1="330" x2="470" y2="445" stroke="#10b981" stroke-width="3" />
  <rect x="460" y="345" width="20" height="80" fill="#10b981" />
  
  <!-- Surrounding context -->
  <rect x="273" y="195" width="14" height="60" fill="#ef4444" opacity="0.6" />
  <rect x="298" y="245" width="14" height="70" fill="#ef4444" opacity="0.6" />
  <rect x="323" y="295" width="14" height="75" fill="#ef4444" opacity="0.6" />
  
  <!-- Big Arrow pointing to Candle 1 -->
  <path d="M 280 430 Q 350 420 400 395" fill="none" stroke="#000000" stroke-width="12" stroke-linecap="round" />
  <polygon points="415,390 390,380 395,410" fill="#000000" />
  
  <text x="260" y="455" font-family="sans-serif" font-size="16" font-weight="bold" fill="#dc2626">کندل اول: نزولی بزرگ</text>
</svg>`,

  'photo_354@14-06-2026_21-10-36.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 480" width="100%" height="100%">
  <rect width="900" height="480" fill="#ffffff" />
  <text x="450" y="35" font-family="sans-serif" font-size="18" font-weight="bold" fill="#0f172a" text-anchor="middle">مرحله ۲ ستاره صبحگاهی: کندل دوم دوجی / بدنه کوچک در کف (کاهش قدرت سلرها)</text>
  
  <!-- Pattern Zone (Circle) -->
  <circle cx="445" cy="380" r="75" fill="#f8fafc" stroke="#94a3b8" stroke-width="2.5" />
  
  <!-- Inside Pattern Candles -->
  <rect x="410" y="335" width="20" height="85" fill="#ef4444" />
  <line x1="445" y1="400" x2="445" y2="465" stroke="#10b981" stroke-width="3" />
  <rect x="439" y="415" width="12" height="18" fill="#10b981" />
  <rect x="460" y="345" width="20" height="80" fill="#10b981" />
  
  <!-- Big Arrow pointing to Candle 2 (Doji) -->
  <path d="M 310 470 Q 380 470 430 445" fill="none" stroke="#000000" stroke-width="12" stroke-linecap="round" />
  <polygon points="445,438 420,435 430,460" fill="#000000" />
  
  <text x="270" y="480" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0f172a">کندل دوم: دوجی بلاتکلیفی</text>
</svg>`,

  'photo_355@14-06-2026_21-11-58.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 480" width="100%" height="100%">
  <rect width="900" height="480" fill="#ffffff" />
  <text x="450" y="35" font-family="sans-serif" font-size="18" font-weight="bold" fill="#0f172a" text-anchor="middle">مرحله ۳ ستاره صبحگاهی: کندل سوم صعودی پرقدرت سبز (غلبه کامل خریداران)</text>
  
  <!-- Pattern Zone (Circle) -->
  <circle cx="445" cy="380" r="75" fill="#f8fafc" stroke="#94a3b8" stroke-width="2.5" />
  
  <!-- Inside Pattern Candles -->
  <rect x="410" y="335" width="20" height="85" fill="#ef4444" />
  <rect x="439" y="415" width="12" height="18" fill="#10b981" />
  <line x1="470" y1="330" x2="470" y2="445" stroke="#10b981" stroke-width="3" />
  <rect x="460" y="345" width="20" height="80" fill="#10b981" />
  
  <!-- Big Arrow pointing from right to Candle 3 -->
  <path d="M 620 440 Q 540 435 485 410" fill="none" stroke="#000000" stroke-width="12" stroke-linecap="round" />
  <polygon points="470,402 495,400 488,425" fill="#000000" />
  
  <text x="630" y="450" font-family="sans-serif" font-size="16" font-weight="bold" fill="#16a34a">کندل سوم: صعودی بزرگ</text>
</svg>`,

  'photo_356@14-06-2026_21-17-02.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 480" width="100%" height="100%">
  <rect width="900" height="480" fill="#ffffff" />
  <text x="450" y="35" font-family="sans-serif" font-size="18" font-weight="bold" fill="#0f172a" text-anchor="middle">بررسی قله ستاره عصرگاهی (Evening Star) با اشاره به کندل دوجی در سقف</text>
  
  <!-- Pattern Zone -->
  <circle cx="450" cy="140" r="95" fill="#f8fafc" stroke="#64748b" stroke-width="2.5" />
  
  <!-- Candles -->
  <rect x="388" y="115" width="24" height="125" fill="#10b981" />
  <line x1="445" y1="50" x2="445" y2="190" stroke="#ef4444" stroke-width="2.5" />
  <rect x="436" y="105" width="18" height="18" fill="#ef4444" />
  <rect x="478" y="130" width="24" height="135" fill="#ef4444" />
  
  <!-- Big Arrow pointing to Top Star -->
  <path d="M 330 30 Q 380 50 420 85" fill="none" stroke="#000000" stroke-width="14" stroke-linecap="round" />
  <polygon points="435,98 420,75 405,95" fill="#000000" />
  
  <text x="240" y="40" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0f172a">کندل ستاره در سقف</text>
</svg>`,

  'photo_357@14-06-2026_21-30-55.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 480" width="100%" height="100%">
  <rect width="900" height="480" fill="#ffffff" />
  <text x="450" y="35" font-family="sans-serif" font-size="18" font-weight="bold" fill="#0f172a" text-anchor="middle">مفهوم گپ (Gap) و فاصله قیمتی بین بدنه کندل اول و دوم در ستاره</text>
  
  <circle cx="450" cy="140" r="95" fill="#f8fafc" stroke="#64748b" stroke-width="2.5" />
  
  <rect x="388" y="115" width="24" height="125" fill="#10b981" />
  <line x1="445" y1="50" x2="445" y2="190" stroke="#ef4444" stroke-width="2.5" />
  <rect x="436" y="105" width="18" height="18" fill="#ef4444" />
  <rect x="478" y="130" width="24" height="135" fill="#ef4444" />
  
  <!-- Blue Circle highlighting Gap -->
  <ellipse cx="430" cy="85" rx="35" ry="45" fill="none" stroke="#0284c7" stroke-width="4" stroke-dasharray="2,2" />
  
  <text x="320" y="80" font-family="sans-serif" font-size="18" font-weight="bold" fill="#0284c7">فاصله و شکاف (Gap)</text>
  <path d="M 370 85 L 400 85" stroke="#0284c7" stroke-width="3" marker-end="url(#arrow)" />
</svg>`,

  'photo_358@14-06-2026_21-34-35.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 650" width="100%" height="100%">
  <rect width="600" height="650" fill="#ffffff" />
  <text x="300" y="50" font-family="sans-serif" font-size="24" font-weight="bold" fill="#0f172a" text-anchor="middle">الگوی هارامی (Harami Pattern)</text>
  <text x="300" y="80" font-family="sans-serif" font-size="16" fill="#64748b" text-anchor="middle">کندل مادر (بزرگ) و کندل جنین (کوچک داخل بدنه اولی)</text>
  
  <!-- Candle 1: Big Mother Candle -->
  <line x1="180" y1="90" x2="180" y2="530" stroke="#000000" stroke-width="4" />
  <rect x="130" y="130" width="100" height="360" fill="#000000" stroke="#000000" stroke-width="2" />
  <text x="180" y="570" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">کندل ۱: مادر (بزرگ)</text>
  
  <!-- Horizontal bounding lines showing inner containment -->
  <line x1="230" y1="280" x2="430" y2="280" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6,6" />
  <line x1="230" y1="380" x2="430" y2="380" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6,6" />
  
  <!-- Candle 2: Inside Child Candle -->
  <line x1="480" y1="230" x2="480" y2="430" stroke="#000000" stroke-width="4" />
  <rect x="430" y="275" width="100" height="110" fill="#000000" stroke="#000000" stroke-width="2" />
  <text x="480" y="470" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">کندل ۲: کودک / داخل بدنه</text>
  
  <rect x="150" y="600" width="300" height="35" rx="17" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="300" y="623" font-family="sans-serif" font-size="14" font-weight="bold" fill="#475569" text-anchor="middle">بدنه کندل دوم کاملاً درون بدنه کندل اول است</text>
</svg>`,

  'photo_359@14-06-2026_21-37-29.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 800" width="100%" height="100%">
  <rect width="500" height="800" fill="#ffffff" />
  
  <!-- Gold Header -->
  <rect x="0" y="0" width="500" height="70" fill="#f8fafc" border-bottom="1px solid #e2e8f0" />
  <text x="20" y="32" font-family="sans-serif" font-size="14" font-weight="bold" fill="#b45309">CFDs on Gold (US$ / OZ)</text>
  <text x="20" y="55" font-family="sans-serif" font-size="18" font-weight="bold" fill="#0f172a">4,303.220  <tspan fill="#16a34a" font-size="13">+3.945 (+0.09%)</tspan></text>
  
  <!-- Candlestick Chart 2h -->
  <!-- Candles leading to Harami -->
  <rect x="60" y="380" width="12" height="10" fill="#ef4444" />
  <rect x="90" y="375" width="12" height="15" fill="#ef4444" />
  <rect x="120" y="365" width="14" height="25" fill="#10b981" />
  <rect x="150" y="320" width="16" height="60" fill="#10b981" />
  <rect x="180" y="300" width="16" height="35" fill="#10b981" />
  
  <!-- Harami Formation Highlighted with Red Circle -->
  <!-- Big Red Candle -->
  <line x1="230" y1="280" x2="230" y2="400" stroke="#ef4444" stroke-width="2.5" />
  <rect x="220" y="295" width="22" height="85" fill="#ef4444" />
  
  <!-- Small Inside Green Candle -->
  <line x1="260" y1="340" x2="260" y2="395" stroke="#10b981" stroke-width="2.5" />
  <rect x="252" y="350" width="16" height="30" fill="#10b981" />
  
  <!-- Red Loop Annotation -->
  <path d="M 200 320 Q 185 410 240 430 Q 295 400 270 300 Q 240 270 200 320" fill="none" stroke="#ef4444" stroke-width="3.5" />
  
  <!-- Subsequent move -->
  <rect x="300" y="340" width="14" height="20" fill="#10b981" />
  <rect x="330" y="325" width="16" height="30" fill="#10b981" />
  <rect x="380" y="300" width="16" height="30" fill="#10b981" />
  <rect x="420" y="325" width="16" height="50" fill="#ef4444" />
  
  <text x="250" y="750" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">توقف ریزش و تثبیت قیمت با الگوی هارامی در چارت طلا</text>
</svg>`,

  'photo_360@14-06-2026_21-39-04.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 600" width="100%" height="100%">
  <rect width="500" height="600" fill="#ffffff" />
  <text x="250" y="45" font-family="sans-serif" font-size="22" font-weight="bold" fill="#0f172a" text-anchor="middle">الگوی هارامی صعودی (Bullish Harami)</text>
  
  <!-- Candle 1: Big Red -->
  <line x1="180" y1="80" x2="180" y2="520" stroke="#ef4444" stroke-width="4" />
  <rect x="140" y="120" width="80" height="360" fill="#ef4444" rx="2" />
  <text x="180" y="555" font-family="sans-serif" font-size="15" font-weight="bold" fill="#dc2626" text-anchor="middle">کندل اول: نزولی بزرگ</text>
  
  <!-- Candle 2: Small Green inside -->
  <line x1="320" y1="160" x2="320" y2="440" stroke="#10b981" stroke-width="4" />
  <rect x="280" y="210" width="80" height="190" fill="#10b981" rx="2" />
  <text x="320" y="475" font-family="sans-serif" font-size="15" font-weight="bold" fill="#16a34a" text-anchor="middle">کندل دوم: صعودی کوچک</text>
  
  <!-- Status Badge -->
  <rect x="100" y="565" width="300" height="30" rx="15" fill="#dcfce7" />
  <text x="250" y="585" font-family="sans-serif" font-size="13" font-weight="bold" fill="#15803d" text-anchor="middle">سیگنال پایان ریزش و چرخش صعودی (BUY)</text>
</svg>`,

  'photo_361@14-06-2026_21-41-30.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 600" width="100%" height="100%">
  <rect width="500" height="600" fill="#ffffff" />
  <text x="250" y="45" font-family="sans-serif" font-size="22" font-weight="bold" fill="#0f172a" text-anchor="middle">الگوی هارامی نزولی (Bearish Harami)</text>
  
  <!-- Candle 1: Big Green -->
  <line x1="180" y1="80" x2="180" y2="520" stroke="#10b981" stroke-width="4" />
  <rect x="140" y="120" width="80" height="360" fill="#10b981" rx="2" />
  <text x="180" y="555" font-family="sans-serif" font-size="15" font-weight="bold" fill="#16a34a" text-anchor="middle">کندل اول: صعودی بزرگ</text>
  
  <!-- Candle 2: Small Red inside -->
  <line x1="320" y1="170" x2="320" y2="430" stroke="#ef4444" stroke-width="4" />
  <rect x="280" y="215" width="80" height="180" fill="#ef4444" rx="2" />
  <text x="320" y="475" font-family="sans-serif" font-size="15" font-weight="bold" fill="#dc2626" text-anchor="middle">کندل دوم: نزولی کوچک</text>
  
  <!-- Status Badge -->
  <rect x="100" y="565" width="300" height="30" rx="15" fill="#fee2e2" />
  <text x="250" y="585" font-family="sans-serif" font-size="13" font-weight="bold" fill="#b91c1c" text-anchor="middle">سیگنال پایان صعود و چرخش نزولی (SELL)</text>
</svg>`,

  'photo_362@14-06-2026_21-42-40.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 800" width="100%" height="100%">
  <rect width="500" height="800" fill="#ffffff" />
  
  <!-- Gold Header 30m -->
  <rect x="0" y="0" width="500" height="70" fill="#f8fafc" />
  <text x="20" y="32" font-family="sans-serif" font-size="14" font-weight="bold" fill="#b45309">CFDs on Gold (US$ / OZ)  •  30m</text>
  <text x="20" y="55" font-family="sans-serif" font-size="18" font-weight="bold" fill="#0f172a">4,218.970 <tspan fill="#16a34a" font-size="13">+6.400 (+0.15%)</tspan></text>
  
  <!-- Top Formation Circle -->
  <ellipse cx="140" cy="330" rx="60" ry="70" fill="none" stroke="#2563eb" stroke-width="4" />
  
  <!-- Candles inside circle: Big Green, Red, then gap down -->
  <line x1="125" y1="270" x2="125" y2="380" stroke="#10b981" stroke-width="3" />
  <rect x="115" y="280" width="20" height="80" fill="#10b981" />
  
  <line x1="150" y1="285" x2="150" y2="370" stroke="#ef4444" stroke-width="3" />
  <rect x="140" y="295" width="20" height="60" fill="#ef4444" />
  
  <!-- Big drop breakdown -->
  <line x1="175" y1="340" x2="175" y2="440" stroke="#ef4444" stroke-width="3" />
  <rect x="165" y="360" width="20" height="70" fill="#ef4444" />
  
  <rect x="195" y="420" width="14" height="30" fill="#ef4444" />
  <rect x="220" y="440" width="14" height="40" fill="#ef4444" />
  <rect x="250" y="470" width="16" height="50" fill="#ef4444" />
  <rect x="280" y="510" width="16" height="60" fill="#ef4444" />
  <rect x="320" y="550" width="18" height="70" fill="#ef4444" />
  
  <!-- Trendline Support at bottom -->
  <line x1="100" y1="720" x2="440" y2="620" stroke="#000000" stroke-width="2" />
  
  <!-- Big reversal up from trendline -->
  <rect x="380" y="500" width="20" height="70" fill="#10b981" />
  
  <text x="250" y="770" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0f172a" text-anchor="middle">تاییدیه سل با چرخش سقف و ریزش سنگین تا خط حمایت</text>
</svg>`,

  'photo_363@14-06-2026_21-43-29.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 800" width="100%" height="100%">
  <rect width="500" height="800" fill="#ffffff" />
  <text x="250" y="35" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">XAUUSD H2 — متاتریدر ۵</text>
  
  <!-- Metatrader Window Grid -->
  <rect x="30" y="60" width="440" height="680" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  
  <!-- Yellow Highlight Box -->
  <rect x="190" y="190" width="140" height="310" fill="none" stroke="#eab308" stroke-width="6" rx="4" />
  
  <!-- Inside Yellow Box: Massive Rally Candle then Inside Top -->
  <line x1="230" y1="210" x2="230" y2="480" stroke="#0d9488" stroke-width="3" />
  <rect x="220" y="240" width="22" height="230" fill="#0d9488" />
  
  <!-- Turning Red candles inside -->
  <line x1="260" y1="235" x2="260" y2="350" stroke="#e11d48" stroke-width="3" />
  <rect x="250" y="245" width="20" height="70" fill="#e11d48" />
  
  <rect x="275" y="270" width="16" height="35" fill="#e11d48" />
  <rect x="295" y="285" width="16" height="50" fill="#e11d48" />
  
  <!-- Hand icon / indicator -->
  <text x="280" y="480" font-size="24">👉</text>
  
  <text x="250" y="765" font-family="sans-serif" font-size="15" font-weight="bold" fill="#854d0e" text-anchor="middle">شناسایی کندل‌های هارامی در تایم‌فریم ۲ ساعته متاتریدر</text>
</svg>`,

  'photo_364@14-06-2026_21-48-53.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 650" width="100%" height="100%">
  <rect width="650" height="650" fill="#ffffff" />
  <text x="325" y="45" font-family="sans-serif" font-size="22" font-weight="bold" fill="#0f172a" text-anchor="middle">الگوی مرد به دار آویخته (Hanging Man)</text>
  <text x="325" y="75" font-family="sans-serif" font-size="15" fill="#64748b" text-anchor="middle">طول سایه پایینی حداقل ۳ برابر طول بدنه کندل در سقف روند صعودی</text>
  
  <!-- Type 1: White square, no upper wick, long lower -->
  <g transform="translate(60, 100)">
    <rect x="15" y="30" width="70" height="65" fill="#ffffff" stroke="#000000" stroke-width="3" />
    <line x1="50" y1="95" x2="50" y2="440" stroke="#000000" stroke-width="4" />
    <text x="50" y="480" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155" text-anchor="middle">نوع ۱</text>
  </g>
  
  <!-- Type 2: Black square, no upper wick, long lower -->
  <g transform="translate(190, 100)">
    <rect x="15" y="30" width="70" height="65" fill="#000000" stroke="#000000" stroke-width="3" />
    <line x1="50" y1="95" x2="50" y2="440" stroke="#000000" stroke-width="4" />
    <text x="50" y="480" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155" text-anchor="middle">نوع ۲</text>
  </g>
  
  <!-- Type 3: White rectangle, tiny upper wick, long lower -->
  <g transform="translate(330, 100)">
    <line x1="50" y1="10" x2="50" y2="40" stroke="#000000" stroke-width="4" />
    <rect x="15" y="40" width="70" height="75" fill="#ffffff" stroke="#000000" stroke-width="3" />
    <line x1="50" y1="115" x2="50" y2="440" stroke="#000000" stroke-width="4" />
    <text x="50" y="480" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155" text-anchor="middle">نوع ۳</text>
  </g>
  
  <!-- Type 4: Black rectangle, tiny upper wick, long lower -->
  <g transform="translate(470, 100)">
    <line x1="50" y1="10" x2="50" y2="40" stroke="#000000" stroke-width="4" />
    <rect x="15" y="40" width="70" height="75" fill="#000000" stroke="#000000" stroke-width="3" />
    <line x1="50" y1="115" x2="50" y2="440" stroke="#000000" stroke-width="4" />
    <text x="50" y="480" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155" text-anchor="middle">نوع ۴</text>
  </g>
  
  <!-- Status Badge -->
  <rect x="120" y="600" width="410" height="32" rx="16" fill="#fee2e2" stroke="#fca5a5" stroke-width="1.5" />
  <text x="325" y="622" font-family="sans-serif" font-size="14" font-weight="bold" fill="#991b1b" text-anchor="middle">تفاوت با چکش: مرد به دار آویخته در سقف است و سیگنال ریزش است</text>
</svg>`,

  'photo_365@14-06-2026_21-53-35.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 850" width="100%" height="100%">
  <rect width="500" height="850" fill="#ffffff" />
  
  <!-- Gold Header 2h -->
  <rect x="0" y="0" width="500" height="70" fill="#f8fafc" />
  <text x="20" y="32" font-family="sans-serif" font-size="14" font-weight="bold" fill="#b45309">CFDs on Gold (US$ / OZ)  •  2h</text>
  <text x="20" y="55" font-family="sans-serif" font-size="18" font-weight="bold" fill="#0f172a">4,303.370 <tspan fill="#16a34a" font-size="13">+4.094 (+0.10%)</tspan></text>
  
  <!-- Candlesticks 2h Gold -->
  <!-- Big drop on left with long shadow -->
  <line x1="90" y1="360" x2="90" y2="700" stroke="#ef4444" stroke-width="3" />
  <rect x="75" y="360" width="30" height="230" fill="#ef4444" />
  
  <!-- Blue Circle around Lower Shadow Hunt -->
  <ellipse cx="110" cy="650" rx="60" ry="70" fill="none" stroke="#2563eb" stroke-width="4" />
  
  <!-- Rebound to top -->
  <line x1="160" y1="460" x2="160" y2="580" stroke="#10b981" stroke-width="3" />
  <rect x="150" y="470" width="20" height="90" fill="#10b981" />
  
  <line x1="260" y1="310" x2="260" y2="470" stroke="#10b981" stroke-width="3" />
  <rect x="250" y="320" width="20" height="110" fill="#10b981" />
  
  <!-- Peak Candle with Blue Circle (Hanging Man / Reversal) -->
  <line x1="295" y1="310" x2="295" y2="410" stroke="#ef4444" stroke-width="3" />
  <rect x="285" y="325" width="20" height="30" fill="#ef4444" />
  <ellipse cx="295" cy="335" rx="35" ry="40" fill="none" stroke="#2563eb" stroke-width="3.5" />
  
  <!-- Massive Drop After -->
  <line x1="330" y1="330" x2="330" y2="460" stroke="#ef4444" stroke-width="3" />
  <rect x="320" y="340" width="20" height="85" fill="#ef4444" />
  <rect x="355" y="430" width="16" height="30" fill="#ef4444" />
  <rect x="385" y="450" width="20" height="50" fill="#ef4444" />
  
  <text x="250" y="810" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0f172a" text-anchor="middle">استاپ هانت و تشکیل مرد به دار آویخته در سقف ۴۲۲۵</text>
</svg>`,

  'photo_366@14-06-2026_22-00-38.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 850" width="100%" height="100%">
  <rect width="500" height="850" fill="#ffffff" />
  <text x="250" y="35" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">زوم روی شدو و سایه بالای کندل در سقف</text>
  
  <!-- Candlesticks 2h Gold -->
  <line x1="260" y1="310" x2="260" y2="470" stroke="#10b981" stroke-width="3" />
  <rect x="250" y="320" width="20" height="110" fill="#10b981" />
  
  <line x1="295" y1="310" x2="295" y2="410" stroke="#ef4444" stroke-width="3" />
  <rect x="285" y="325" width="20" height="30" fill="#ef4444" />
  <ellipse cx="295" cy="335" rx="35" ry="40" fill="none" stroke="#2563eb" stroke-width="3.5" />
  
  <line x1="330" y1="330" x2="330" y2="460" stroke="#ef4444" stroke-width="3" />
  <rect x="320" y="340" width="20" height="85" fill="#ef4444" />
  
  <text x="250" y="780" font-family="sans-serif" font-size="15" font-weight="bold" fill="#2563eb" text-anchor="middle">شدو (سایه) نشانه رد قیمت توسط خریداران و ورود فروشندگان</text>
</svg>`,

  'photo_367@14-06-2026_22-17-38.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1050" width="100%" height="100%">
  <rect width="800" height="1050" fill="#fcfbf7" stroke="#e2e8f0" stroke-width="2" />
  
  <!-- Notebook Margin & Header -->
  <line x1="70" y1="0" x2="70" y2="1050" stroke="#fca5a5" stroke-width="1.5" />
  <text x="100" y="45" font-family="sans-serif" font-size="14" fill="#64748b">1405/03/26</text>
  <rect x="620" y="20" width="140" height="35" rx="6" fill="#fee2e2" />
  <text x="690" y="44" font-family="sans-serif" font-size="16" font-weight="bold" fill="#dc2626" text-anchor="middle">جلسه (12)</text>
  
  <!-- Section 1: Morning Star -->
  <text x="100" y="90" font-family="sans-serif" font-size="18" font-weight="bold" fill="#0f172a">الگوی ستاره صبحگاهی (Morning Star)</text>
  <text x="100" y="125" font-family="sans-serif" font-size="14" fill="#334155">• صعودی: ابتدا یک کندل نزولی پرقدرت، سپس یک کندل دوجی (بلاتکلیفی) و بعد یک کندل صعودی قوی بالاتر از دوجی</text>
  <text x="100" y="150" font-family="sans-serif" font-size="14" fill="#334155">• نزولی (عصرگاهی): ابتدا کندل صعودی پرقدرت، سپس دوجی، سپس کندل نزولی پرقدرت پایین‌تر از دوجی برای SELL</text>
  
  <!-- Drawings of Morning & Evening Star -->
  <g transform="translate(140, 180)">
    <!-- Bullish Morning Star -->
    <rect x="0" y="10" width="16" height="50" fill="#ef4444" />
    <rect x="25" y="45" width="10" height="15" fill="#10b981" />
    <rect x="45" y="15" width="16" height="45" fill="#10b981" />
  </g>
  
  <g transform="translate(320, 180)">
    <!-- Variant with Gap -->
    <rect x="0" y="10" width="16" height="50" fill="#ef4444" />
    <rect x="25" y="55" width="10" height="10" fill="#10b981" />
    <rect x="45" y="15" width="16" height="50" fill="#10b981" />
  </g>
  
  <g transform="translate(500, 180)">
    <!-- Evening Star -->
    <rect x="0" y="20" width="16" height="45" fill="#10b981" />
    <rect x="25" y="5" width="10" height="12" fill="#ef4444" />
    <rect x="45" y="25" width="16" height="45" fill="#ef4444" />
  </g>
  
  <!-- Section 2: Harami Pattern -->
  <line x1="90" y1="280" x2="730" y2="280" stroke="#cbd5e1" stroke-width="1" />
  <text x="100" y="320" font-family="sans-serif" font-size="18" font-weight="bold" fill="#0f172a">الگوی هارامی (Harami Pattern)</text>
  <text x="100" y="355" font-family="sans-serif" font-size="14" fill="#334155">• صعودی: الگوی بازگشتی ۲ کندلی در پایان روند نزولی. کندل اول نزولی بزرگ و کندل دوم صعودی کوچک داخل بدنه اولی</text>
  <text x="100" y="380" font-family="sans-serif" font-size="14" fill="#334155">• نزولی: در پایان روند صعودی؛ کندل اول صعودی بزرگ و کندل دوم نزولی کوچک داخل بدنه</text>
  
  <g transform="translate(140, 410)">
    <rect x="0" y="0" width="18" height="65" fill="#ef4444" />
    <rect x="30" y="20" width="12" height="30" fill="#10b981" />
  </g>
  <g transform="translate(320, 410)">
    <rect x="0" y="0" width="18" height="65" fill="#10b981" />
    <rect x="30" y="20" width="12" height="30" fill="#ef4444" />
  </g>
  
  <!-- Section 3: Hanging Man Pattern -->
  <line x1="90" y1="500" x2="730" y2="500" stroke="#cbd5e1" stroke-width="1" />
  <text x="100" y="540" font-family="sans-serif" font-size="18" font-weight="bold" fill="#0f172a">الگوی مرد آویزان (Hanging Man)</text>
  <text x="100" y="575" font-family="sans-serif" font-size="14" fill="#334155">• الگوی بازگشتی SELL در پایان روند صعودی با بدنه کوچک و سایه پایینی بسیار بلند (حداقل ۳ برابر بدنه)</text>
  <text x="100" y="605" font-family="sans-serif" font-size="14" font-weight="bold" fill="#b91c1c">• نکته تفاوت با چکش: چکش در کف روند نزولی برای بای است؛ مرد آویزان در سقف روند صعودی برای سل است!</text>
  <text x="100" y="630" font-family="sans-serif" font-size="14" fill="#334155">• نکته رنگ: رنگ مهم نیست ولی قرمز بودن تاییدیه قوی‌تری می‌دهد</text>
  <text x="100" y="655" font-family="sans-serif" font-size="14" fill="#334155">• نکته هانت: قیمت را بالا برده، هانت می‌کنند و سپس می‌ریزند</text>
  
  <!-- Hanging man drawing -->
  <g transform="translate(180, 700)">
    <line x1="10" y1="10" x2="10" y2="70" stroke="#10b981" stroke-width="2" />
    <rect x="3" y="10" width="14" height="15" fill="#10b981" />
  </g>
  <g transform="translate(240, 700)">
    <line x1="10" y1="10" x2="10" y2="70" stroke="#ef4444" stroke-width="2" />
    <rect x="3" y="10" width="14" height="15" fill="#ef4444" />
  </g>
  
  <!-- Notebook Footer Stamp -->
  <rect x="580" y="940" width="150" height="60" rx="8" fill="#eff6ff" stroke="#bfdbfe" />
  <text x="655" y="965" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e40af" text-anchor="middle">جزوه دست‌نویس</text>
  <text x="655" y="985" font-family="sans-serif" font-size="12" fill="#3b82f6" text-anchor="middle">جلسه ۱۲ کندل‌شناسی</text>
</svg>`
};

let count = 0;
for (const [filename, content] of Object.entries(svgs)) {
  fs.writeFileSync(path.join(outDir, filename), content, 'utf8');
  console.log(`Generated ${filename}`);
  count++;
}
console.log(`Successfully generated all ${count} Lesson 12 SVGs!`);
