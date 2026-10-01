const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const svgs = {
  'photo_317@10-06-2026_21-05-56.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 600" width="100%" height="100%">
  <rect width="540" height="600" fill="#ffffff"/>
  <text x="270" y="45" fill="#0f172a" font-family="system-ui, IRANSans" font-size="18" font-weight="800" text-anchor="middle">تفسیر سایه‌ها در کندل‌های دوجی</text>
  
  <!-- Candle 1: Red Gravestone -->
  <line x1="80" y1="180" x2="80" y2="400" stroke="#ef4444" stroke-width="3"/>
  <rect x="65" y="240" width="30" height="50" fill="#ef4444"/>

  <!-- Candle 2: Red with long lower shadow -->
  <line x1="140" y1="210" x2="140" y2="440" stroke="#ef4444" stroke-width="3"/>
  <rect x="125" y="280" width="30" height="70" fill="#ef4444"/>

  <!-- Candle 3: Green hammer/dragonfly -->
  <line x1="200" y1="230" x2="200" y2="450" stroke="#10b981" stroke-width="3"/>
  <rect x="185" y="290" width="30" height="60" fill="#10b981"/>

  <!-- Candle 4: Small red -->
  <line x1="260" y1="240" x2="260" y2="380" stroke="#ef4444" stroke-width="3"/>
  <rect x="245" y="285" width="30" height="25" fill="#ef4444"/>

  <!-- Candle 5: Small dojis -->
  <rect x="305" y="310" width="30" height="20" fill="#ef4444"/>
  <rect x="365" y="310" width="30" height="20" fill="#10b981"/>

  <!-- Cyan Circles highlighting shadows -->
  <ellipse cx="380" cy="400" rx="35" ry="50" fill="none" stroke="#06b6d4" stroke-width="3.5"/>
  <ellipse cx="460" cy="270" rx="30" ry="35" fill="none" stroke="#06b6d4" stroke-width="3.5"/>
  <ellipse cx="460" cy="350" rx="30" ry="35" fill="none" stroke="#06b6d4" stroke-width="3.5"/>

  <rect x="25" y="520" width="490" height="55" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="270" y="542" fill="#1e40af" font-family="system-ui, IRANSans" font-size="13" font-weight="700" text-anchor="middle">استاد: «به این خطوط نازک میگن سایه (Shadow / Wick)»</text>
  <text x="270" y="562" fill="#2563eb" font-family="system-ui, IRANSans" font-size="11" text-anchor="middle">سایه‌های بلند نشانه ریجکشن قیمت و حضور پرقدرت خریداران یا فروشندگان است</text>
</svg>`,

  'photo_318@10-06-2026_21-09-43.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 960" width="100%" height="100%">
  <rect width="540" height="960" fill="#ffffff"/>
  <!-- Header -->
  <text x="20" y="35" fill="#0f172a" font-family="system-ui" font-size="14" font-weight="600">CFDs on Gold • 30m</text>
  <text x="520" y="35" fill="#10b981" font-family="system-ui" font-size="14" font-weight="700" text-anchor="end">4,203.886 (+0.31%)</text>
  
  <!-- Upward impulse -->
  <line x1="80" y1="650" x2="80" y2="400" stroke="#10b981" stroke-width="3.5"/>
  <rect x="73" y="440" width="14" height="180" fill="#10b981"/>

  <line x1="140" y1="500" x2="140" y2="280" stroke="#10b981" stroke-width="3.5"/>
  <rect x="132" y="320" width="16" height="150" fill="#10b981"/>

  <!-- Gravestone / Long upper wick at top 4222 -->
  <line x1="200" y1="240" x2="200" y2="480" stroke="#ef4444" stroke-width="3.5"/>
  <rect x="192" y="330" width="16" height="25" fill="#ef4444"/>

  <!-- Red Arrow pointing to long upper shadow -->
  <path d="M 370 270 L 250 300" fill="none" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/>
  <polygon points="245,302 260,293 258,308" fill="#ef4444"/>

  <!-- Subsequent drop -->
  <line x1="240" y1="350" x2="240" y2="550" stroke="#ef4444" stroke-width="3.5"/>
  <rect x="232" y="355" width="16" height="100" fill="#ef4444"/>

  <line x1="280" y1="460" x2="280" y2="650" stroke="#ef4444" stroke-width="3.5"/>
  <rect x="272" y="460" width="16" height="110" fill="#ef4444"/>

  <!-- Card -->
  <rect x="25" y="80" width="370" height="55" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
  <text x="35" y="105" fill="#991b1b" font-family="system-ui, IRANSans" font-size="13" font-weight="700">تخلیه سنگین قیمت با سایه بلند بالایی:</text>
  <text x="35" y="125" fill="#dc2626" font-family="system-ui, IRANSans" font-size="11">استاد: «سایه بالا یعنی فروشنده‌ها خیلی خیلی بیشترن، کندل خالی میشه میاد پایین»</text>
</svg>`,

  'photo_319@10-06-2026_21-15-43.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 500" width="100%" height="100%">
  <rect width="540" height="500" fill="#ffffff"/>
  <text x="270" y="45" fill="#0f172a" font-family="system-ui, IRANSans" font-size="20" font-weight="800" text-anchor="middle">کندل چکش صعودی / افزایشی (Hammer)</text>
  
  <!-- 4 Hammer variations -->
  <!-- 1 -->
  <rect x="50" y="90" width="60" height="60" fill="#000000"/>
  <line x1="80" y1="150" x2="80" y2="380" stroke="#000000" stroke-width="4"/>

  <!-- 2 -->
  <rect x="170" y="90" width="60" height="60" fill="#000000"/>
  <line x1="200" y1="150" x2="200" y2="380" stroke="#000000" stroke-width="4"/>

  <!-- 3 (with tiny upper wick) -->
  <line x1="320" y1="70" x2="320" y2="90" stroke="#000000" stroke-width="4"/>
  <rect x="290" y="90" width="60" height="60" fill="#000000"/>
  <line x1="320" y1="150" x2="320" y2="380" stroke="#000000" stroke-width="4"/>

  <!-- 4 -->
  <rect x="410" y="90" width="60" height="60" fill="#000000"/>
  <line x1="440" y1="150" x2="440" y2="380" stroke="#000000" stroke-width="4"/>

  <!-- Rule annotation -->
  <rect x="25" y="415" width="490" height="60" rx="8" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
  <text x="270" y="438" fill="#15803d" font-family="system-ui, IRANSans" font-size="13" font-weight="700" text-anchor="middle">قانون طلایی کندل چکش (Hammer Rule):</text>
  <text x="270" y="458" fill="#166534" font-family="system-ui, IRANSans" font-size="12" text-anchor="middle">«طول سایه پایینی باید حداقل دو برابر طول بدنه کندل باشد»</text>
</svg>`,

  'photo_320@10-06-2026_21-20-28.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 960" width="100%" height="100%">
  <rect width="540" height="960" fill="#ffffff"/>
  <!-- Downtrend candles -->
  <line x1="160" y1="150" x2="160" y2="400" stroke="#10b981" stroke-width="4"/>
  <rect x="150" y="180" width="20" height="180" fill="#10b981"/>

  <line x1="220" y1="350" x2="220" y2="580" stroke="#ef4444" stroke-width="4"/>
  <rect x="210" y="380" width="20" height="180" fill="#ef4444"/>

  <!-- Small consolidation at bottom -->
  <line x1="330" y1="520" x2="330" y2="700" stroke="#10b981" stroke-width="3"/>
  <rect x="323" y="540" width="14" height="20" fill="#10b981"/>

  <!-- Cyan Arrows pointing to hammer bottom reversal -->
  <path d="M 330 450 L 330 520" fill="none" stroke="#06b6d4" stroke-width="4" stroke-linecap="round"/>
  <polygon points="330,528 322,514 338,514" fill="#06b6d4"/>

  <path d="M 330 790 L 330 720" fill="none" stroke="#06b6d4" stroke-width="4" stroke-linecap="round"/>
  <polygon points="330,712 322,726 338,726" fill="#06b6d4"/>

  <!-- Annotation -->
  <rect x="25" y="80" width="370" height="55" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="35" y="105" fill="#1e40af" font-family="system-ui, IRANSans" font-size="13" font-weight="700">کندل چکش در انتهای روند نزولی:</text>
  <text x="35" y="125" fill="#2563eb" font-family="system-ui, IRANSans" font-size="11">تشکیل چکش در کف قیمت و شروع بازگشت صعودی</text>
</svg>`,

  'photo_321@10-06-2026_21-22-07.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 600" width="100%" height="100%">
  <rect width="1024" height="600" fill="#000000"/>
  <!-- Grid -->
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" stroke-width="0.8"/>
    </pattern>
  </defs>
  <rect width="1024" height="500" fill="url(#grid)"/>

  <!-- Header -->
  <text x="20" y="30" fill="#4ade80" font-family="monospace" font-size="14">EURUSD, M5 1.2102</text>
  
  <!-- Red vertical timeline -->
  <line x1="500" y1="20" x2="500" y2="580" stroke="#ef4444" stroke-width="2.5"/>

  <!-- Candles down to hammer -->
  <line x1="120" y1="80" x2="120" y2="280" stroke="#ffffff" stroke-width="2"/>
  <rect x="113" y="100" width="14" height="150" fill="#ffffff"/>

  <line x1="280" y1="200" x2="280" y2="440" stroke="#ffffff" stroke-width="2"/>
  <rect x="273" y="240" width="14" height="180" fill="#ffffff"/>

  <!-- Hammer at Red Line (x=500) -->
  <line x1="500" y1="380" x2="500" y2="500" stroke="#4ade80" stroke-width="2"/>
  <rect x="493" y="380" width="14" height="30" fill="#000000" stroke="#4ade80" stroke-width="1.5"/>

  <!-- Upward reversal candles -->
  <line x1="600" y1="260" x2="600" y2="380" stroke="#4ade80" stroke-width="2"/>
  <rect x="593" y="280" width="14" height="70" fill="#4ade80"/>

  <line x1="720" y1="140" x2="720" y2="280" stroke="#4ade80" stroke-width="2"/>
  <rect x="713" y="160" width="14" height="90" fill="#4ade80"/>

  <!-- CCI Subwindow -->
  <rect x="0" y="500" width="1024" height="100" fill="#09090b" stroke="#27272a" stroke-width="1"/>
  <line x1="0" y1="550" x2="1024" y2="550" stroke="#52525b" stroke-dasharray="4 4"/>
  <path d="M 20 540 Q 150 510 300 560 T 500 580 T 700 520 T 980 510" fill="none" stroke="#facc15" stroke-width="1.5"/>
</svg>`,

  'photo_322@10-06-2026_21-22-23.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 600" width="100%" height="100%">
  <rect width="1024" height="600" fill="#000000"/>
  <!-- Red vertical line -->
  <line x1="500" y1="20" x2="500" y2="580" stroke="#ef4444" stroke-width="2.5"/>

  <!-- Red circle around bottom hammer -->
  <ellipse cx="500" cy="440" rx="90" ry="70" fill="none" stroke="#ef4444" stroke-width="4.5"/>

  <!-- Annotation Card -->
  <rect x="25" y="40" width="360" height="55" rx="8" fill="#18181b" stroke="#ef4444" stroke-width="1.5"/>
  <text x="35" y="65" fill="#f87171" font-family="system-ui, IRANSans" font-size="13" font-weight="700">شناسایی کندل چکش در متاتریدر (M5):</text>
  <text x="35" y="85" fill="#fca5a5" font-family="system-ui, IRANSans" font-size="11">ثبت کف روند نزولی و چرخش ۱۰۰ درصدی به سمت صعود</text>
</svg>`,

  'photo_323@10-06-2026_21-35-07.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 600" width="100%" height="100%">
  <rect width="540" height="600" fill="#ffffff"/>
  <text x="270" y="45" fill="#0f172a" font-family="system-ui, IRANSans" font-size="18" font-weight="800" text-anchor="middle">الگوی پوشش افزایشی (Bullish Engulfing)</text>
  
  <!-- Candle 1: Red (Black) small -->
  <line x1="150" y1="120" x2="150" y2="420" stroke="#000000" stroke-width="4"/>
  <rect x="100" y="170" width="100" height="200" fill="#000000"/>

  <!-- Candle 2: Green (White) larger enclosing candle 1 -->
  <line x1="390" y1="60" x2="390" y2="480" stroke="#000000" stroke-width="4"/>
  <rect x="340" y="110" width="100" height="320" fill="#ffffff" stroke="#000000" stroke-width="5"/>

  <!-- Dashed bounds comparing bodies -->
  <line x1="200" y1="170" x2="340" y2="170" stroke="#000000" stroke-dasharray="6 6" stroke-width="2"/>
  <line x1="200" y1="370" x2="340" y2="370" stroke="#000000" stroke-dasharray="6 6" stroke-width="2"/>

  <!-- Annotation -->
  <rect x="25" y="520" width="490" height="55" rx="8" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
  <text x="270" y="542" fill="#15803d" font-family="system-ui, IRANSans" font-size="13" font-weight="700" text-anchor="middle">پوشش کامل بدنه کندل اول توسط کندل صعودی دوم:</text>
  <text x="270" y="562" fill="#166534" font-family="system-ui, IRANSans" font-size="11" text-anchor="middle">استاد: «کندل اول نزولی و کندل دوم صعودی پرقدرت که تمام بدنه اولی رو می‌پوشونه»</text>
</svg>`,

  'photo_324@10-06-2026_21-37-55.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 960" width="100%" height="100%">
  <rect width="540" height="960" fill="#ffffff"/>
  <!-- Header -->
  <text x="20" y="35" fill="#0f172a" font-family="system-ui" font-size="14" font-weight="600">CFDs on Gold • 2h</text>
  
  <!-- Massive upward run -->
  <line x1="300" y1="350" x2="300" y2="100" stroke="#10b981" stroke-width="4"/>
  <rect x="290" y="120" width="20" height="200" fill="#10b981"/>

  <!-- Bullish engulfing at bottom support -->
  <line x1="160" y1="520" x2="160" y2="650" stroke="#ef4444" stroke-width="3"/>
  <rect x="152" y="540" width="16" height="60" fill="#ef4444"/>

  <line x1="190" y1="480" x2="190" y2="670" stroke="#10b981" stroke-width="3.5"/>
  <rect x="182" y="520" width="16" height="110" fill="#10b981"/>

  <!-- Cyan circle around engulfing -->
  <ellipse cx="180" cy="580" rx="60" ry="60" fill="none" stroke="#06b6d4" stroke-width="4.5"/>

  <!-- Annotation -->
  <rect x="25" y="80" width="360" height="55" rx="8" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
  <text x="35" y="105" fill="#15803d" font-family="system-ui, IRANSans" font-size="13" font-weight="700">الگوی پوشش صعودی در چارت ۲ ساعته طلا:</text>
  <text x="35" y="125" fill="#166534" font-family="system-ui, IRANSans" font-size="11">استاد: «وقتی همه سلر بودن خریدارها یهو با حجم قوی وارد میشن و صعود شروع میشه»</text>
</svg>`,

  'photo_325@10-06-2026_21-47-15.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 960" width="100%" height="100%">
  <rect width="540" height="960" fill="#ffffff"/>
  <!-- Header -->
  <text x="20" y="35" fill="#0f172a" font-family="system-ui" font-size="14" font-weight="600">CFDs on Gold • 30m</text>
  <text x="520" y="35" fill="#ef4444" font-family="system-ui" font-size="14" font-weight="700" text-anchor="end">4,115.750 (-3.40%)</text>
  
  <!-- Bearish reversal at top: Big green then big red -->
  <line x1="230" y1="400" x2="230" y2="580" stroke="#10b981" stroke-width="4"/>
  <rect x="221" y="420" width="18" height="120" fill="#10b981"/>

  <line x1="260" y1="400" x2="260" y2="600" stroke="#ef4444" stroke-width="4"/>
  <rect x="251" y="420" width="18" height="130" fill="#ef4444"/>

  <!-- Blue loop around bearish setup -->
  <ellipse cx="250" cy="490" rx="45" ry="85" fill="none" stroke="#2563eb" stroke-width="4.5"/>

  <!-- Drop -->
  <line x1="290" y1="540" x2="290" y2="750" stroke="#ef4444" stroke-width="4"/>
  <rect x="281" y="570" width="18" height="150" fill="#ef4444"/>

  <!-- Annotation -->
  <rect x="25" y="80" width="370" height="55" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
  <text x="35" y="105" fill="#991b1b" font-family="system-ui, IRANSans" font-size="13" font-weight="700">الگوی پوشش نزولی در انتهای صعود (SELL):</text>
  <text x="35" y="125" fill="#dc2626" font-family="system-ui, IRANSans" font-size="11">استاد: «سلرها دارن آماده میشن بفروشن و تمام رشد قبلی رو خالی کنن»</text>
</svg>`,

  'photo_326@10-06-2026_21-52-24.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 960" width="100%" height="100%">
  <rect width="540" height="960" fill="#ffffff"/>
  <!-- Header -->
  <text x="20" y="35" fill="#0f172a" font-family="system-ui" font-size="14" font-weight="600">CFDs on Gold • 30m (تصحیح مفهوم اندازه کندل‌ها)</text>

  <!-- Big green candle with stop hunt peak -->
  <line x1="230" y1="380" x2="230" y2="580" stroke="#10b981" stroke-width="4"/>
  <rect x="221" y="420" width="18" height="120" fill="#10b981"/>

  <line x1="260" y1="410" x2="260" y2="600" stroke="#ef4444" stroke-width="4"/>
  <rect x="251" y="420" width="18" height="130" fill="#ef4444"/>

  <!-- Blue loop around candles -->
  <ellipse cx="250" cy="490" rx="45" ry="85" fill="none" stroke="#2563eb" stroke-width="4.5"/>

  <!-- Annotation -->
  <rect x="25" y="80" width="400" height="65" rx="8" fill="#fff7ed" stroke="#fb923c" stroke-width="1.5"/>
  <text x="35" y="105" fill="#9a3412" font-family="system-ui, IRANSans" font-size="13" font-weight="700">توضیح تکمیلی استاد درباره کندل اول و دوم:</text>
  <text x="35" y="125" fill="#c2410c" font-family="system-ui, IRANSans" font-size="11">«کندل اول سبز بزرگ میشه تا سلرها رو هانت کنه، بعد کندل قرمز ادامه میده و میریزه»</text>
</svg>`,

  'photo_327@10-06-2026_21-57-07.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <rect width="1200" height="675" fill="#ffffff"/>
  <!-- Header -->
  <text x="30" y="40" fill="#0f172a" font-family="system-ui" font-size="16" font-weight="700">Gold Spot / U.S. Dollar • 5m (OANDA) — ستاپ چندگانه تأییدیه‌ها</text>
  <text x="1170" y="40" fill="#ef4444" font-family="system-ui" font-size="16" font-weight="700" text-anchor="end">4,105.850 (-3.62%)</text>
  
  <!-- Trendlines -->
  <line x1="80" y1="310" x2="800" y2="580" stroke="#2563eb" stroke-width="2.5"/>
  <line x1="280" y1="80" x2="750" y2="580" stroke="#2563eb" stroke-width="2.5"/>

  <!-- FVG zone -->
  <rect x="530" y="300" width="250" height="30" fill="#ef4444" opacity="0.15"/>
  <text x="540" y="320" fill="#ef4444" font-family="monospace" font-size="11">FVG</text>

  <!-- Risk/Reward Short Box -->
  <rect x="540" y="300" width="230" height="40" fill="#ef4444" opacity="0.3"/>
  <rect x="540" y="340" width="230" height="60" fill="#10b981" opacity="0.3"/>

  <!-- Rejection candles at top -->
  <line x1="500" y1="280" x2="500" y2="480" stroke="#10b981" stroke-width="3"/>
  <rect x="493" y="290" width="14" height="150" fill="#10b981"/>

  <line x1="530" y1="290" x2="530" y2="490" stroke="#ef4444" stroke-width="3"/>
  <rect x="523" y="320" width="14" height="130" fill="#ef4444"/>

  <!-- Bottom reaction -->
  <line x1="460" y1="420" x2="460" y2="570" stroke="#10b981" stroke-width="3"/>
  <rect x="453" y="430" width="14" height="110" fill="#10b981"/>

  <rect x="30" y="600" width="550" height="50" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="45" y="625" fill="#1e40af" font-family="system-ui, IRANSans" font-size="13" font-weight="700">ترکیب خط روند + پوشش کندلی + محدوده FVG + ورود با ریسک به ریوارد عالی</text>
</svg>`,

  'photo_328@10-06-2026_21-57-32.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <rect width="1200" height="675" fill="#ffffff"/>
  <!-- Blue loop around bottom reversal -->
  <ellipse cx="460" cy="480" rx="55" ry="90" fill="none" stroke="#0284c7" stroke-width="4"/>

  <!-- Annotation -->
  <rect x="30" y="600" width="550" height="50" rx="8" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
  <text x="45" y="625" fill="#15803d" font-family="system-ui, IRANSans" font-size="13" font-weight="700">تاییدیه صعودی در کف حمایتی با الگوی کندلی پوششی</text>
</svg>`,

  'photo_329@10-06-2026_22-08-20.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 960" width="100%" height="100%">
  <rect width="540" height="960" fill="#ffffff"/>
  <!-- Header -->
  <text x="20" y="35" fill="#0f172a" font-family="system-ui" font-size="14" font-weight="600">XAUUSD • 15m</text>
  <text x="520" y="35" fill="#ef4444" font-family="system-ui" font-size="14" font-weight="700" text-anchor="end">4,110.395 (-3.51%)</text>
  
  <!-- Blue arrows pointing to 2 reversal candle setups -->
  <!-- Arrow 1 -->
  <path d="M 130 570 L 230 430" fill="none" stroke="#2563eb" stroke-width="5" stroke-linecap="round"/>
  <polygon points="238,420 220,432 232,444" fill="#2563eb"/>

  <!-- Arrow 2 -->
  <path d="M 350 630 L 350 510" fill="none" stroke="#2563eb" stroke-width="5" stroke-linecap="round"/>
  <polygon points="350,500 342,518 358,518" fill="#2563eb"/>

  <!-- Annotation -->
  <rect x="25" y="80" width="370" height="55" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="35" y="105" fill="#1e40af" font-family="system-ui, IRANSans" font-size="13" font-weight="700">شناسایی دو الگوی بازگشتی در چارت ۱۵ دقیقه طلا</text>
  <text x="35" y="125" fill="#2563eb" font-family="system-ui, IRANSans" font-size="11">استاد: «امین آفرین، گرفتی منظورمو؟»</text>
</svg>`,

  'photo_330@10-06-2026_22-09-04.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 960" width="100%" height="100%">
  <rect width="540" height="960" fill="#121316"/>
  <!-- Header -->
  <text x="25" y="40" fill="#f8fafc" font-family="system-ui" font-size="16" font-weight="700">تمرین دانشجو — تم تیره</text>
  
  <!-- Yellow loop around reversal candles at resistance -->
  <ellipse cx="300" cy="270" rx="35" ry="60" fill="none" stroke="#eab308" stroke-width="3.5"/>

  <!-- Candlesticks -->
  <line x1="280" y1="200" x2="280" y2="350" stroke="#10b981" stroke-width="3"/>
  <rect x="273" y="210" width="14" height="90" fill="#10b981"/>

  <line x1="310" y1="200" x2="310" y2="370" stroke="#ef4444" stroke-width="3"/>
  <rect x="303" y="210" width="14" height="110" fill="#ef4444"/>

  <!-- Drop -->
  <line x1="340" y1="320" x2="340" y2="520" stroke="#ef4444" stroke-width="3"/>
  <rect x="333" y="350" width="14" height="150" fill="#ef4444"/>

  <!-- Annotation -->
  <rect x="25" y="860" width="490" height="60" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="270" y="885" fill="#facc15" font-family="system-ui, IRANSans" font-size="13" font-weight="700" text-anchor="middle">دانشجو: «میخوام مطمئن شم آیا این برای سل درسته؟»</text>
  <text x="270" y="905" fill="#4ade80" font-family="system-ui, IRANSans" font-size="12" text-anchor="middle">پاسخ استاد: «بله کاملاً درسته»</text>
</svg>`,

  'photo_331@10-06-2026_22-09-33.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="100%" height="100%">
  <rect width="960" height="540" fill="#f1f5f9"/>
  <rect x="40" y="40" width="880" height="460" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
  
  <!-- Blue circle around top rejection at dashed line -->
  <ellipse cx="230" cy="240" rx="45" ry="60" fill="none" stroke="#0284c7" stroke-width="3.5"/>
  <line x1="80" y1="210" x2="800" y2="210" stroke="#94a3b8" stroke-dasharray="4 4" stroke-width="2"/>

  <!-- Drop -->
  <line x1="280" y1="280" x2="280" y2="430" stroke="#ef4444" stroke-width="3"/>
  <rect x="273" y="300" width="14" height="100" fill="#ef4444"/>

  <!-- Annotation -->
  <rect x="60" y="60" width="400" height="50" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="75" y="85" fill="#1e40af" font-family="system-ui, IRANSans" font-size="13" font-weight="700">تایید واکنش نزولی به سطح مقاومتی در نمایشگر</text>
</svg>`,

  'photo_332@10-06-2026_22-09-47.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 960" width="100%" height="100%">
  <rect width="540" height="960" fill="#0f172a"/>
  <!-- Phone status & MT5 Header -->
  <text x="25" y="30" fill="#f8fafc" font-family="system-ui" font-size="14">10:08 📶</text>
  <rect x="20" y="55" width="500" height="50" rx="6" fill="#0284c7"/>
  <text x="40" y="85" fill="#ffffff" font-family="monospace" font-size="15" font-weight="700">XAUUSD_o • M5 (4107.52)</text>

  <!-- Moving averages on candles -->
  <path d="M 30 350 Q 150 480 280 260 T 500 380" fill="none" stroke="#ec4899" stroke-width="2"/>
  <path d="M 30 400 Q 150 510 280 300 T 500 420" fill="none" stroke="#06b6d4" stroke-width="2"/>

  <!-- Reversal candles on MT5 -->
  <rect x="250" y="220" width="14" height="60" fill="#06b6d4"/>
  <rect x="280" y="220" width="14" height="80" fill="#f59e0b"/>

  <!-- Stochastics Oscillator -->
  <rect x="20" y="700" width="500" height="150" fill="#020617" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="20" y1="730" x2="520" y2="730" stroke="#475569" stroke-dasharray="4 4"/>
  <line x1="20" y1="820" x2="520" y2="820" stroke="#475569" stroke-dasharray="4 4"/>
  <path d="M 30 830 Q 180 840 280 720 T 500 810" fill="none" stroke="#06b6d4" stroke-width="2"/>
  <path d="M 30 835 Q 180 845 280 730 T 500 815" fill="none" stroke="#ec4899" stroke-width="2"/>

  <!-- Annotation -->
  <text x="270" y="890" fill="#38bdf8" font-family="system-ui, IRANSans" font-size="13" font-weight="700" text-anchor="middle">دانشجو: «همین لحظه اثبات تدریس شما در متاتریدر ۵»</text>
</svg>`,

  'photo_333@10-06-2026_22-12-05.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 960" width="100%" height="100%">
  <rect width="540" height="960" fill="#121316"/>
  <!-- Descending channel lines -->
  <line x1="20" y1="120" x2="480" y2="400" stroke="#2563eb" stroke-width="2.5"/>
  <line x1="20" y1="350" x2="480" y2="600" stroke="#2563eb" stroke-width="2.5"/>

  <!-- White loop around bounce at channel top -->
  <ellipse cx="250" cy="320" rx="50" ry="70" fill="none" stroke="#ffffff" stroke-width="3"/>

  <!-- Annotation -->
  <rect x="25" y="860" width="490" height="60" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="270" y="885" fill="#38bdf8" font-family="system-ui, IRANSans" font-size="13" font-weight="700" text-anchor="middle">تأییدیه کندل‌شناسی داخل کانال نزولی (M1)</text>
  <text x="270" y="905" fill="#94a3b8" font-family="system-ui, IRANSans" font-size="11" text-anchor="middle">استاد: «داخل الگو کندل‌شناسی ملاک تایید ورود است»</text>
</svg>`,

  'photo_334@10-06-2026_22-15-41.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 960" width="100%" height="100%">
  <rect width="540" height="960" fill="#121316"/>
  <!-- Support & Resistance horizontal lines -->
  <line x1="20" y1="120" x2="520" y2="120" stroke="#ef4444" stroke-width="1.5"/>
  <line x1="20" y1="360" x2="520" y2="360" stroke="#f97316" stroke-width="1.5"/>
  <line x1="20" y1="480" x2="520" y2="480" stroke="#3b82f6" stroke-width="2"/>
  <line x1="20" y1="560" x2="520" y2="560" stroke="#f97316" stroke-width="1.5"/>

  <!-- Red circle on reversal candles -->
  <ellipse cx="320" cy="520" rx="70" ry="60" fill="none" stroke="#ef4444" stroke-width="2.5"/>

  <!-- Annotation -->
  <rect x="25" y="860" width="490" height="60" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="270" y="885" fill="#f87171" font-family="system-ui, IRANSans" font-size="13" font-weight="700" text-anchor="middle">پرسش دانشجو درباره احتمال ادامه ریزش پس از پولبک</text>
  <text x="270" y="905" fill="#94a3b8" font-family="system-ui, IRANSans" font-size="11" text-anchor="middle">پاسخ استاد: «پوشش نزولی زد، هانت گرفت و بعد ریخت»</text>
</svg>`,

  'photo_335@10-06-2026_22-16-29.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 960" width="100%" height="100%">
  <rect width="540" height="960" fill="#121316"/>
  <!-- Blue trendline -->
  <line x1="120" y1="320" x2="450" y2="750" stroke="#2563eb" stroke-width="3"/>

  <!-- Blue loop at trendline reaction -->
  <ellipse cx="230" cy="520" rx="40" ry="70" fill="none" stroke="#2563eb" stroke-width="4"/>

  <!-- Annotation -->
  <rect x="25" y="860" width="490" height="60" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="270" y="885" fill="#38bdf8" font-family="system-ui, IRANSans" font-size="13" font-weight="700" text-anchor="middle">تاییدیه دوگانه: ۱. پوشش نزولی + ۲. واکنش به خط روند</text>
</svg>`,

  'photo_336@10-06-2026_22-16-57.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 600" width="100%" height="100%">
  <rect width="450" height="600" fill="#ffffff"/>
  <!-- Trendline & FVG zoom -->
  <line x1="30" y1="50" x2="420" y2="580" stroke="#2563eb" stroke-width="3.5"/>
  <line x1="20" y1="380" x2="420" y2="550" stroke="#2563eb" stroke-width="3"/>

  <rect x="30" y="160" width="300" height="40" fill="#ef4444" opacity="0.2"/>
  <text x="280" y="185" fill="#ef4444" font-family="monospace" font-size="12" font-weight="700">FVG</text>

  <!-- Cyan loop at breakdown & reaction -->
  <ellipse cx="220" cy="240" rx="90" ry="60" fill="none" stroke="#06b6d4" stroke-width="4"/>

  <rect x="20" y="520" width="410" height="55" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="225" y="542" fill="#1e40af" font-family="system-ui, IRANSans" font-size="12" font-weight="700" text-anchor="middle">زوم روی تاییدیه نزولی در سقف روند</text>
  <text x="225" y="562" fill="#2563eb" font-family="system-ui, IRANSans" font-size="11" text-anchor="middle">استاد: «هم صعودی اتفاق افتاده هم نزولی، از این واضح‌تر نمیشه»</text>
</svg>`,

  'photo_337@10-06-2026_22-17-25.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 600" width="100%" height="100%">
  <rect width="450" height="600" fill="#ffffff"/>
  <!-- Support trendline -->
  <line x1="20" y1="380" x2="430" y2="520" stroke="#2563eb" stroke-width="3.5"/>
  <line x1="20" y1="500" x2="430" y2="500" stroke="#f59e0b" stroke-width="2.5"/>

  <!-- Cyan loop at bottom bounce -->
  <ellipse cx="230" cy="380" rx="75" ry="95" fill="none" stroke="#06b6d4" stroke-width="4"/>

  <rect x="20" y="520" width="410" height="55" rx="8" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
  <text x="225" y="542" fill="#15803d" font-family="system-ui, IRANSans" font-size="12" font-weight="700" text-anchor="middle">زوم روی تاییدیه صعودی در کف حمایتی</text>
  <text x="225" y="562" fill="#166534" font-family="system-ui, IRANSans" font-size="11" text-anchor="middle">تشکیل الگوی پوشش صعودی دقیقاً روی خط حمایت زرد و ترندلاین آبی</text>
</svg>`
};

for (const [filename, content] of Object.entries(svgs)) {
  const filePath = path.join(outputDir, filename);
  fs.writeFileSync(filePath, content.trim(), 'utf8');
  console.log(`Generated ${filename}`);
}

console.log('Successfully generated all 21 Lesson 11 SVGs!');
