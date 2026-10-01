const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'public/images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const svgs = {
  'photo_391@16-06-2026_21-03-22.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 650" width="100%" height="100%">
  <rect width="600" height="650" fill="#ffffff" />
  <text x="300" y="45" font-family="sans-serif" font-size="22" font-weight="bold" fill="#0f172a" text-anchor="middle">الگوهای هارامی نزولی و هارامی صلیبی</text>
  
  <!-- Harami Cross (Left) -->
  <line x1="80" y1="580" x2="80" y2="480" stroke="#000000" stroke-width="3" />
  <line x1="100" y1="490" x2="100" y2="390" stroke="#000000" stroke-width="3" />
  <!-- Big Black/Green Mother Candle -->
  <line x1="160" y1="130" x2="160" y2="400" stroke="#000000" stroke-width="4" />
  <rect x="130" y="170" width="60" height="200" fill="#000000" />
  <!-- Doji Cross inside body range -->
  <line x1="240" y1="210" x2="240" y2="330" stroke="#000000" stroke-width="4" />
  <line x1="210" y1="270" x2="270" y2="270" stroke="#000000" stroke-width="4" />
  
  <text x="180" y="440" font-family="sans-serif" font-size="18" font-weight="bold" fill="#0f172a" text-anchor="middle">هارامی صلیبی (Cross)</text>
  <text x="180" y="470" font-family="sans-serif" font-size="13" fill="#64748b" text-anchor="middle">کندل مادر بزرگ + دوجی صلیبی در شکم</text>

  <!-- Divider -->
  <line x1="320" y1="100" x2="320" y2="520" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="4,4" />

  <!-- Bearish Harami (Right) -->
  <line x1="380" y1="580" x2="380" y2="480" stroke="#000000" stroke-width="3" />
  <line x1="400" y1="490" x2="400" y2="390" stroke="#000000" stroke-width="3" />
  <!-- Mother Candle (White/Hollow) -->
  <line x1="460" y1="130" x2="460" y2="400" stroke="#000000" stroke-width="4" />
  <rect x="430" y="165" width="60" height="205" fill="#ffffff" stroke="#000000" stroke-width="4" />
  <!-- Baby Candle (Small Black inside body) -->
  <line x1="535" y1="215" x2="535" y2="325" stroke="#000000" stroke-width="3" />
  <rect x="510" y="240" width="50" height="60" fill="#000000" />
  
  <!-- Dashed boundaries of mother candle -->
  <line x1="490" y1="240" x2="510" y2="240" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3" />
  <line x1="490" y1="300" x2="510" y2="300" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3" />

  <text x="490" y="440" font-family="sans-serif" font-size="18" font-weight="bold" fill="#0f172a" text-anchor="middle">هارامی نزولی (Bearish)</text>
  <text x="490" y="470" font-family="sans-serif" font-size="13" fill="#64748b" text-anchor="middle">کندل مادر صعودی + کندل کوچک در بدنه</text>
  
  <rect x="150" y="580" width="300" height="35" rx="17" fill="#f1f5f9" />
  <text x="300" y="603" font-family="sans-serif" font-size="14" font-weight="bold" fill="#475569" text-anchor="middle">تردید در ادامه روند صعودی و نشانه بازگشت</text>
</svg>`,

  'photo_392@16-06-2026_21-08-57.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 350" width="100%" height="100%">
  <rect width="600" height="350" fill="#ffffff" />
  <text x="300" y="35" font-family="sans-serif" font-size="18" font-weight="bold" fill="#0f172a" text-anchor="middle">الگوی ستاره در کف (Morning Star / بای)</text>
  
  <!-- 50% Median Line -->
  <line x1="60" y1="120" x2="540" y2="120" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6,6" />
  <text x="50" y="115" font-family="sans-serif" font-size="12" fill="#64748b">نصف بدنه</text>
  
  <!-- Candle 1: Big Bearish Black -->
  <line x1="180" y1="40" x2="180" y2="230" stroke="#000000" stroke-width="4" />
  <rect x="155" y="60" width="50" height="150" fill="#000000" />
  <text x="180" y="260" font-family="sans-serif" font-size="13" font-weight="bold" fill="#dc2626" text-anchor="middle">۱. کندل نزولی بزرگ</text>
  
  <!-- Candle 2: Small Gap Star / Doji at BOTTOM -->
  <line x1="280" y1="190" x2="280" y2="300" stroke="#000000" stroke-width="3" />
  <rect x="260" y="220" width="40" height="50" fill="#ffffff" stroke="#000000" stroke-width="3" />
  <text x="280" y="325" font-family="sans-serif" font-size="13" font-weight="bold" fill="#64748b" text-anchor="middle">۲. ستاره در کف</text>
  
  <!-- Candle 3: Big Bullish White covering >50% of Candle 1 -->
  <line x1="390" y1="60" x2="390" y2="250" stroke="#000000" stroke-width="4" />
  <rect x="365" y="80" width="50" height="145" fill="#ffffff" stroke="#000000" stroke-width="4" />
  <text x="390" y="280" font-family="sans-serif" font-size="13" font-weight="bold" fill="#16a34a" text-anchor="middle">۳. کندل صعودی (پوشش بالای ۵۰٪)</text>
</svg>`,

  'photo_393@16-06-2026_21-09-41.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 350" width="100%" height="100%">
  <rect width="600" height="350" fill="#ffffff" />
  <text x="300" y="35" font-family="sans-serif" font-size="18" font-weight="bold" fill="#0f172a" text-anchor="middle">الگوی ستاره عصرگاهی در سقف (Evening Star / سل)</text>
  
  <!-- 50% Median Line -->
  <line x1="60" y1="210" x2="540" y2="210" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6,6" />
  <text x="50" y="205" font-family="sans-serif" font-size="12" fill="#64748b">نصف بدنه</text>
  
  <!-- Candle 1: Big Bullish White -->
  <line x1="180" y1="140" x2="180" y2="310" stroke="#000000" stroke-width="4" />
  <rect x="155" y="160" width="50" height="130" fill="#ffffff" stroke="#000000" stroke-width="4" />
  <text x="180" y="335" font-family="sans-serif" font-size="13" font-weight="bold" fill="#16a34a" text-anchor="middle">۱. کندل صعودی بزرگ</text>
  
  <!-- Candle 2: Small Gap Star in TOP -->
  <line x1="280" y1="40" x2="280" y2="150" stroke="#000000" stroke-width="3" />
  <rect x="260" y="65" width="40" height="55" fill="#ffffff" stroke="#000000" stroke-width="3" />
  <text x="280" y="35" font-family="sans-serif" font-size="13" font-weight="bold" fill="#64748b" text-anchor="middle">۲. ستاره در سقف</text>
  
  <!-- Candle 3: Big Bearish Black covering >50% of Candle 1 -->
  <line x1="390" y1="120" x2="390" y2="300" stroke="#000000" stroke-width="4" />
  <rect x="365" y="140" width="50" height="145" fill="#000000" />
  <text x="390" y="335" font-family="sans-serif" font-size="13" font-weight="bold" fill="#dc2626" text-anchor="middle">۳. کندل نزولی قدرتمند</text>
</svg>`,

  'photo_394@16-06-2026_21-14-42.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 850" width="100%" height="100%">
  <rect width="500" height="850" fill="#ffffff" />
  
  <!-- Gold Header 1h -->
  <rect x="0" y="0" width="500" height="70" fill="#f8fafc" />
  <text x="20" y="32" font-family="sans-serif" font-size="14" font-weight="bold" fill="#b45309">CFDs on Gold (US$ / OZ)  •  1h</text>
  <text x="20" y="55" font-family="sans-serif" font-size="18" font-weight="bold" fill="#0f172a">4,338.860 <tspan fill="#16a34a" font-size="13">+29.180 (+0.68%)</tspan></text>
  
  <!-- Drop to Bottom 4305 with Star Formation Circled in Blue -->
  <rect x="60" y="240" width="20" height="80" fill="#10b981" />
  <rect x="90" y="210" width="20" height="130" fill="#ef4444" />
  <rect x="120" y="340" width="20" height="150" fill="#ef4444" />
  
  <!-- Bottom Star (Circled in Blue) at 4305 -->
  <ellipse cx="185" cy="560" rx="35" ry="90" fill="none" stroke="#2563eb" stroke-width="4" />
  <rect x="160" y="500" width="20" height="70" fill="#ef4444" />
  <rect x="185" y="560" width="15" height="20" fill="#10b981" />
  <rect x="205" y="520" width="20" height="60" fill="#10b981" />
  
  <!-- Recovery Rally to 4350 -->
  <rect x="235" y="470" width="20" height="50" fill="#10b981" />
  <rect x="265" y="440" width="20" height="90" fill="#10b981" />
  <rect x="330" y="400" width="20" height="80" fill="#10b981" />
  <rect x="360" y="310" width="20" height="120" fill="#10b981" />
  
  <text x="250" y="810" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1d4ed8" text-anchor="middle">تأییدیه بای الگوی ستاره در کف ۴۳۰۵ انس طلا</text>
</svg>`,

  'photo_395@16-06-2026_21-17-09.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 850" width="100%" height="100%">
  <rect width="500" height="850" fill="#ffffff" />
  
  <rect x="0" y="0" width="500" height="70" fill="#f8fafc" />
  <text x="20" y="32" font-family="sans-serif" font-size="14" font-weight="bold" fill="#b45309">CFDs on Gold (US$ / OZ)  •  1h</text>
  <text x="20" y="55" font-family="sans-serif" font-size="18" font-weight="bold" fill="#0f172a">4,336.095 <tspan fill="#16a34a" font-size="13">+26.400 (+0.61%)</tspan></text>
  
  <!-- Squeeze/Rally into peak 4370 (Circled in blue) -->
  <rect x="40" y="520" width="20" height="120" fill="#10b981" />
  <rect x="75" y="400" width="20" height="90" fill="#10b981" />
  <rect x="130" y="360" width="20" height="70" fill="#10b981" />
  
  <!-- Evening Star Peak at 4370 -->
  <ellipse cx="215" cy="270" rx="40" ry="120" fill="none" stroke="#2563eb" stroke-width="4" />
  <rect x="180" y="270" width="20" height="60" fill="#10b981" />
  <!-- Tall wick doji star -->
  <line x1="210" y1="180" x2="210" y2="300" stroke="#10b981" stroke-width="3" />
  <rect x="200" y="240" width="20" height="15" fill="#10b981" />
  <!-- Massive red breakdown candle -->
  <line x1="240" y1="235" x2="240" y2="380" stroke="#ef4444" stroke-width="3" />
  <rect x="230" y="245" width="20" height="120" fill="#ef4444" />
  
  <!-- Downward slide to 4310 -->
  <rect x="270" y="370" width="20" height="70" fill="#ef4444" />
  <rect x="300" y="440" width="20" height="60" fill="#ef4444" />
  
  <text x="250" y="810" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0f172a" text-anchor="middle">الگوی ستاره در سقف ۴۳۷۰ و ریزش سنگین بعدی</text>
</svg>`,

  'photo_396@16-06-2026_21-18-56.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 850" width="100%" height="100%">
  <rect width="500" height="850" fill="#ffffff" />
  
  <rect x="0" y="0" width="500" height="70" fill="#f8fafc" />
  <text x="20" y="32" font-family="sans-serif" font-size="14" font-weight="bold" fill="#b45309">CFDs on Gold (US$ / OZ)  •  1h</text>
  <text x="20" y="55" font-family="sans-serif" font-size="18" font-weight="bold" fill="#0f172a">4,336.460 <tspan fill="#16a34a" font-size="13">+27.130 (+0.63%)</tspan></text>
  
  <!-- Peak at 4370 -->
  <line x1="210" y1="180" x2="210" y2="300" stroke="#10b981" stroke-width="3" />
  <rect x="200" y="240" width="20" height="15" fill="#10b981" />
  
  <rect x="230" y="245" width="20" height="120" fill="#ef4444" />
  <rect x="270" y="370" width="20" height="70" fill="#ef4444" />
  <rect x="300" y="440" width="20" height="60" fill="#ef4444" />
  
  <text x="250" y="810" font-family="sans-serif" font-size="15" font-weight="bold" fill="#64748b" text-anchor="middle">بررسی ساختار کندل‌های پس از تاییدیه ستاره در سقف</text>
</svg>`,

  'photo_397@16-06-2026_21-19-17.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 850" width="100%" height="100%">
  <rect width="500" height="850" fill="#ffffff" />
  
  <rect x="0" y="0" width="500" height="70" fill="#f8fafc" />
  <text x="20" y="32" font-family="sans-serif" font-size="14" font-weight="bold" fill="#b45309">CFDs on Gold (US$ / OZ)  •  1h</text>
  <text x="20" y="55" font-family="sans-serif" font-size="18" font-weight="bold" fill="#0f172a">4,336.460 <tspan fill="#16a34a" font-size="13">+27.130 (+0.63%)</tspan></text>
  
  <!-- Peak & Drop -->
  <line x1="210" y1="180" x2="210" y2="300" stroke="#10b981" stroke-width="3" />
  <rect x="200" y="240" width="20" height="15" fill="#10b981" />
  <rect x="230" y="245" width="20" height="120" fill="#ef4444" />
  
  <!-- Blue Pointer Arrow to the huge red breakdown candle -->
  <line x1="370" y1="190" x2="260" y2="300" stroke="#0284c7" stroke-width="4.5" />
  <polygon points="250,310 260,290 275,305" fill="#0284c7" />
  <text x="380" y="185" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0284c7">نقطه ورود / تایید سل</text>
  
  <text x="250" y="810" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0284c7" text-anchor="middle">ورود با شکست و بسته شدن کندل پرقدرت قرمز</text>
</svg>`,

  'photo_398@16-06-2026_21-24-57.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 850" width="100%" height="100%">
  <rect width="500" height="850" fill="#000000" />
  
  <!-- Header 5m Gold Dark Mode -->
  <text x="20" y="45" font-family="sans-serif" font-size="16" font-weight="bold" fill="#e2e8f0">Gold Spot / U.S. Dollar  •  5m</text>
  <text x="20" y="75" font-family="sans-serif" font-size="20" font-weight="bold" fill="#34d399">4,339.595 <tspan fill="#34d399" font-size="14">+30.745 (+0.71%)</tspan></text>
  
  <!-- Drop to bottom 4308 circled in Orange -->
  <rect x="140" y="440" width="16" height="50" fill="#ef4444" />
  <rect x="165" y="470" width="16" height="60" fill="#ef4444" />
  
  <!-- Circle around Morning Star at 4308 -->
  <ellipse cx="225" cy="540" rx="60" ry="40" fill="none" stroke="#f97316" stroke-width="3.5" />
  
  <!-- Orange Arrow pointing to the star -->
  <line x1="225" y1="450" x2="225" y2="515" stroke="#f97316" stroke-width="3" />
  <polygon points="225,525 218,510 232,510" fill="#f97316" />
  
  <rect x="200" y="520" width="14" height="45" fill="#ef4444" />
  <rect x="220" y="535" width="14" height="20" fill="#10b981" />
  <rect x="240" y="500" width="16" height="50" fill="#10b981" />
  
  <!-- Surge to 4339 -->
  <rect x="280" y="420" width="18" height="80" fill="#10b981" />
  <rect x="305" y="380" width="18" height="70" fill="#10b981" />
  
  <text x="250" y="810" font-family="sans-serif" font-size="15" font-weight="bold" fill="#f97316" text-anchor="middle">تشخیص ستاره صبحگاهی در تایم ۵ دقیقه طلا و شروع رالی صعودی</text>
</svg>`,

  'photo_399@16-06-2026_21-36-03.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 500" width="100%" height="100%">
  <rect width="700" height="500" fill="#ffffff" />
  <text x="350" y="35" font-family="sans-serif" font-size="20" font-weight="bold" fill="#0f172a" text-anchor="middle">ساختار کلی امواج الیوت (Elliott Wave Theory)</text>
  <text x="350" y="60" font-family="sans-serif" font-size="14" fill="#64748b" text-anchor="middle">۵ موج محرک (Impulsive: 1,2,3,4,5) و ۳ موج اصلاحی (Corrective: A,B,C)</text>
  
  <!-- Wave Lines (Thick Blue Major, Light Cyan Minor) -->
  <!-- 0 to 1 -->
  <polyline points="40,440 70,390 90,420 120,330 140,360 160,280" fill="none" stroke="#38bdf8" stroke-width="2.5" />
  <line x1="40" y1="440" x2="160" y2="280" stroke="#1d4ed8" stroke-width="4.5" />
  <text x="160" y="265" font-family="sans-serif" font-size="18" font-weight="bold" fill="#1d4ed8" text-anchor="middle">1</text>
  
  <!-- 1 to 2 -->
  <polyline points="160,280 180,330 200,310 220,370" fill="none" stroke="#38bdf8" stroke-width="2.5" />
  <line x1="160" y1="280" x2="220" y2="370" stroke="#1d4ed8" stroke-width="4.5" />
  <text x="220" y="395" font-family="sans-serif" font-size="18" font-weight="bold" fill="#1d4ed8" text-anchor="middle">2</text>
  
  <!-- 2 to 3 (Extended) -->
  <polyline points="220,370 250,270 270,310 300,190 320,230 350,150" fill="none" stroke="#38bdf8" stroke-width="2.5" />
  <line x1="220" y1="370" x2="350" y2="150" stroke="#1d4ed8" stroke-width="4.5" />
  <text x="350" y="135" font-family="sans-serif" font-size="18" font-weight="bold" fill="#1d4ed8" text-anchor="middle">3</text>
  
  <!-- 3 to 4 -->
  <polyline points="350,150 370,220 390,190 410,260" fill="none" stroke="#38bdf8" stroke-width="2.5" />
  <line x1="350" y1="150" x2="410" y2="260" stroke="#1d4ed8" stroke-width="4.5" />
  <text x="410" y="285" font-family="sans-serif" font-size="18" font-weight="bold" fill="#1d4ed8" text-anchor="middle">4</text>
  
  <!-- 4 to 5 (Top Peak) -->
  <polyline points="410,260 440,170 460,210 490,100" fill="none" stroke="#38bdf8" stroke-width="2.5" />
  <line x1="410" y1="260" x2="490" y2="100" stroke="#1d4ed8" stroke-width="4.5" />
  <text x="490" y="85" font-family="sans-serif" font-size="20" font-weight="bold" fill="#1d4ed8" text-anchor="middle">5</text>
  
  <!-- 5 to A -->
  <polyline points="490,100 520,180 540,150 560,250" fill="none" stroke="#38bdf8" stroke-width="2.5" />
  <line x1="490" y1="100" x2="560" y2="250" stroke="#1d4ed8" stroke-width="4.5" />
  <text x="560" y="275" font-family="sans-serif" font-size="18" font-weight="bold" fill="#1d4ed8" text-anchor="middle">A</text>
  
  <!-- A to B -->
  <polyline points="560,250 580,200 600,220 615,170" fill="none" stroke="#38bdf8" stroke-width="2.5" />
  <line x1="560" y1="250" x2="615" y2="170" stroke="#1d4ed8" stroke-width="4.5" />
  <text x="615" y="155" font-family="sans-serif" font-size="18" font-weight="bold" fill="#1d4ed8" text-anchor="middle">B</text>
  
  <!-- B to C -->
  <polyline points="615,170 635,260 650,230 670,360" fill="none" stroke="#38bdf8" stroke-width="2.5" />
  <line x1="615" y1="170" x2="670" y2="360" stroke="#1d4ed8" stroke-width="4.5" />
  <text x="670" y="385" font-family="sans-serif" font-size="18" font-weight="bold" fill="#1d4ed8" text-anchor="middle">C</text>
  
  <rect x="200" y="445" width="300" height="35" rx="17" fill="#f0f9ff" stroke="#bae6fd" />
  <text x="350" y="468" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0369a1" text-anchor="middle">فرکتالی بودن بازار و زیرموج‌های داخلی</text>
</svg>`,

  'photo_400@16-06-2026_21-46-55.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 500" width="100%" height="100%">
  <rect width="700" height="500" fill="#ffffff" />
  <text x="350" y="35" font-family="sans-serif" font-size="20" font-weight="bold" fill="#0f172a" text-anchor="middle">نقاط کلیدی سقف‌ها در امواج الیوت (قله‌های ۳، ۵ و B)</text>
  
  <!-- Elliott wave structure -->
  <line x1="40" y1="440" x2="160" y2="280" stroke="#1d4ed8" stroke-width="4" />
  <line x1="160" y1="280" x2="220" y2="370" stroke="#1d4ed8" stroke-width="4" />
  <line x1="220" y1="370" x2="350" y2="150" stroke="#1d4ed8" stroke-width="4" />
  <line x1="350" y1="150" x2="410" y2="260" stroke="#1d4ed8" stroke-width="4" />
  <line x1="410" y1="260" x2="490" y2="100" stroke="#1d4ed8" stroke-width="4" />
  <line x1="490" y1="100" x2="560" y2="250" stroke="#1d4ed8" stroke-width="4" />
  <line x1="560" y1="250" x2="615" y2="170" stroke="#1d4ed8" stroke-width="4" />
  <line x1="615" y1="170" x2="670" y2="360" stroke="#1d4ed8" stroke-width="4" />
  
  <!-- Red Highlight Circles around Peak 3, Peak 5, Peak B -->
  <ellipse cx="350" cy="150" rx="35" ry="40" fill="none" stroke="#ef4444" stroke-width="4" />
  <text x="350" y="135" font-family="sans-serif" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">3</text>
  
  <ellipse cx="490" cy="100" rx="35" ry="40" fill="none" stroke="#ef4444" stroke-width="4" />
  <text x="490" y="85" font-family="sans-serif" font-size="22" font-weight="bold" fill="#dc2626" text-anchor="middle">5</text>
  
  <ellipse cx="615" cy="170" rx="35" ry="40" fill="none" stroke="#ef4444" stroke-width="4" />
  <text x="615" y="155" font-family="sans-serif" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">B</text>
  
  <rect x="150" y="445" width="400" height="35" rx="17" fill="#fee2e2" stroke="#fca5a5" />
  <text x="350" y="468" font-family="sans-serif" font-size="13" font-weight="bold" fill="#b91c1c" text-anchor="middle">ایجاد سقف‌های دو قلو یا سه قلو و فرصت‌های نوسان‌گیری اسکلپ</text>
</svg>`,

  'photo_401@16-06-2026_21-52-44.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 250" width="100%" height="100%">
  <rect width="350" height="250" fill="#ffffff" />
  <!-- Wave Leg 1 and start of 2 -->
  <line x1="50" y1="200" x2="160" y2="80" stroke="#000000" stroke-width="4.5" />
  <line x1="160" y1="80" x2="220" y2="140" stroke="#000000" stroke-width="4.5" />
  
  <text x="90" y="125" font-family="sans-serif" font-size="20" font-weight="bold" fill="#854d0e">1</text>
  <!-- Red curved arrow indicating wave 1 direction -->
  <path d="M 130 90 Q 115 110 125 125" fill="none" stroke="#b91c1c" stroke-width="2.5" />
  <polygon points="120,132 130,123 120,120" fill="#b91c1c" />
</svg>`,

  'photo_402@16-06-2026_21-53-25.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 250" width="100%" height="100%">
  <rect width="350" height="250" fill="#ffffff" />
  <line x1="50" y1="200" x2="160" y2="80" stroke="#000000" stroke-width="4.5" />
  <line x1="160" y1="80" x2="220" y2="140" stroke="#000000" stroke-width="4.5" />
  <text x="90" y="125" font-family="sans-serif" font-size="20" font-weight="bold" fill="#854d0e">1</text>
  
  <!-- Blue Oval highlighting the entire Wave 1 -->
  <ellipse cx="110" cy="140" rx="90" ry="40" fill="none" stroke="#0284c7" stroke-width="3" transform="rotate(-47 110 140)" />
</svg>`,

  'photo_403@16-06-2026_21-54-13.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 250" width="100%" height="100%">
  <rect width="350" height="250" fill="#ffffff" />
  <line x1="40" y1="200" x2="150" y2="90" stroke="#000000" stroke-width="4.5" />
  <line x1="150" y1="90" x2="210" y2="160" stroke="#000000" stroke-width="4.5" />
  <line x1="210" y1="160" x2="300" y2="100" stroke="#000000" stroke-width="4.5" />
  
  <text x="85" y="130" font-family="sans-serif" font-size="18" font-weight="bold" fill="#854d0e">1</text>
  <text x="215" y="130" font-family="sans-serif" font-size="18" font-weight="bold" fill="#854d0e">2</text>
  
  <!-- Cyan Circle at Peak & Cyan Arrows -->
  <ellipse cx="150" cy="80" rx="20" ry="18" fill="none" stroke="#06b6d4" stroke-width="3" />
  <line x1="110" y1="85" x2="115" y2="120" stroke="#06b6d4" stroke-width="2.5" />
  <line x1="220" y1="85" x2="215" y2="120" stroke="#06b6d4" stroke-width="2.5" />
</svg>`,

  'photo_404@16-06-2026_21-55-21.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 250" width="100%" height="100%">
  <rect width="350" height="250" fill="#ffffff" />
  <line x1="50" y1="200" x2="160" y2="80" stroke="#000000" stroke-width="4.5" />
  <line x1="160" y1="80" x2="220" y2="140" stroke="#000000" stroke-width="4.5" />
  
  <text x="90" y="125" font-family="sans-serif" font-size="20" font-weight="bold" fill="#854d0e">1</text>
  
  <!-- Blue arrows at Start (Buy) and End (Peak) of Wave 1 -->
  <line x1="50" y1="230" x2="80" y2="195" stroke="#0284c7" stroke-width="4" />
  <polygon points="85,190 73,197 80,207" fill="#0284c7" />
  
  <line x1="180" y1="140" x2="155" y2="95" stroke="#0284c7" stroke-width="4" />
  <polygon points="150,90 152,105 163,100" fill="#0284c7" />
</svg>`,

  'photo_405@16-06-2026_21-56-29.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 850" width="100%" height="100%">
  <rect width="500" height="850" fill="#ffffff" />
  
  <!-- MT5 Gold M30 Header -->
  <rect x="0" y="0" width="500" height="110" fill="#f8fafc" />
  <rect x="10" y="60" width="140" height="40" fill="#2563eb" rx="4" />
  <text x="80" y="85" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">SELL 4341.45</text>
  
  <rect x="350" y="60" width="140" height="40" fill="#2563eb" rx="4" />
  <text x="420" y="85" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">BUY 4341.55</text>
  
  <text x="20" y="35" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0f172a">XAUUSD, M30  •  Gold vs US Dollar</text>
  
  <!-- Price line at 4341.45 -->
  <line x1="0" y1="420" x2="500" y2="420" stroke="#0d9488" stroke-width="2" />
  <rect x="420" y="405" width="80" height="28" fill="#0d9488" rx="2" />
  <text x="460" y="424" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">4341.45</text>
  
  <!-- Double Top Formation with Blue Line Overlay -->
  <!-- Left Peak at 4341 -->
  <rect x="160" y="420" width="16" height="70" fill="#10b981" />
  <rect x="180" y="420" width="16" height="60" fill="#ef4444" />
  <rect x="235" y="415" width="16" height="65" fill="#ef4444" />
  
  <!-- Trough to 4317 -->
  <rect x="260" y="480" width="16" height="60" fill="#ef4444" />
  
  <!-- Right Peak at 4341 -->
  <rect x="290" y="470" width="16" height="50" fill="#10b981" />
  <rect x="320" y="430" width="16" height="60" fill="#10b981" />
  <rect x="340" y="420" width="16" height="50" fill="#10b981" />
  
  <!-- Thick Blue Double Top curve -->
  <path d="M 160 550 L 235 450 L 270 560 L 345 425 L 420 560" fill="none" stroke="#1d4ed8" stroke-width="4" />
  
  <text x="250" y="810" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1d4ed8" text-anchor="middle">سقف دوقلو در تایم ۳۰ دقیقه طلا (۴۳۴۱) و آغاز ریزش</text>
</svg>`,

  'photo_406@16-06-2026_21-59-45.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 250" width="100%" height="100%">
  <rect width="350" height="250" fill="#ffffff" />
  <!-- Resistance line -->
  <line x1="90" y1="70" x2="330" y2="70" stroke="#64748b" stroke-width="5" />
  
  <!-- Double top M shape -->
  <line x1="30" y1="210" x2="130" y2="70" stroke="#000000" stroke-width="4.5" />
  <line x1="130" y1="70" x2="180" y2="170" stroke="#000000" stroke-width="4.5" />
  <line x1="180" y1="170" x2="260" y2="70" stroke="#000000" stroke-width="4.5" />
  
  <!-- Red breakdown arrow -->
  <line x1="265" y1="80" x2="305" y2="160" stroke="#b91c1c" stroke-width="4.5" />
  <polygon points="312,170 295,160 307,148" fill="#b91c1c" />
  
  <text x="75" y="140" font-family="sans-serif" font-size="18" font-weight="bold" fill="#854d0e">1</text>
  <text x="175" y="140" font-family="sans-serif" font-size="18" font-weight="bold" fill="#854d0e">2</text>
</svg>`,

  'photo_407@16-06-2026_22-00-08.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 250" width="100%" height="100%">
  <rect width="350" height="250" fill="#ffffff" />
  <line x1="90" y1="70" x2="330" y2="70" stroke="#64748b" stroke-width="5" />
  
  <line x1="30" y1="210" x2="130" y2="70" stroke="#000000" stroke-width="4.5" />
  <line x1="130" y1="70" x2="180" y2="170" stroke="#000000" stroke-width="4.5" />
  <line x1="180" y1="170" x2="260" y2="70" stroke="#000000" stroke-width="4.5" />
  
  <!-- Blue circle around Peak 1 -->
  <ellipse cx="130" cy="70" rx="35" ry="30" fill="none" stroke="#0284c7" stroke-width="4" />
  <text x="130" y="30" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0284c7" text-anchor="middle">قله اول</text>
  
  <text x="75" y="140" font-family="sans-serif" font-size="18" font-weight="bold" fill="#854d0e">1</text>
  <text x="175" y="140" font-family="sans-serif" font-size="18" font-weight="bold" fill="#854d0e">2</text>
</svg>`,

  'photo_408@16-06-2026_22-00-26.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 250" width="100%" height="100%">
  <rect width="350" height="250" fill="#ffffff" />
  <line x1="90" y1="70" x2="330" y2="70" stroke="#64748b" stroke-width="5" />
  
  <line x1="30" y1="210" x2="130" y2="70" stroke="#000000" stroke-width="4.5" />
  <line x1="130" y1="70" x2="180" y2="170" stroke="#000000" stroke-width="4.5" />
  <line x1="180" y1="170" x2="260" y2="70" stroke="#000000" stroke-width="4.5" />
  
  <!-- Blue arrow at middle valley 2 (TP1 / Re-entry for Long) -->
  <line x1="140" y1="225" x2="175" y2="180" stroke="#0284c7" stroke-width="4" />
  <polygon points="180,175 168,182 178,192" fill="#0284c7" />
  <text x="140" y="240" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0284c7" text-anchor="middle">دره اصلاحی (تیپی / خرید مجدد)</text>
  
  <text x="75" y="140" font-family="sans-serif" font-size="18" font-weight="bold" fill="#854d0e">1</text>
  <text x="175" y="140" font-family="sans-serif" font-size="18" font-weight="bold" fill="#854d0e">2</text>
</svg>`,

  'photo_409@16-06-2026_22-00-55.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 250" width="100%" height="100%">
  <rect width="350" height="250" fill="#ffffff" />
  <line x1="90" y1="70" x2="330" y2="70" stroke="#64748b" stroke-width="5" />
  
  <line x1="30" y1="210" x2="130" y2="70" stroke="#000000" stroke-width="4.5" />
  <line x1="130" y1="70" x2="180" y2="170" stroke="#000000" stroke-width="4.5" />
  <line x1="180" y1="170" x2="260" y2="70" stroke="#000000" stroke-width="4.5" />
  
  <!-- Blue circle around Peak 2 (Sell Entry) -->
  <ellipse cx="260" cy="70" rx="35" ry="30" fill="none" stroke="#0284c7" stroke-width="4" />
  <text x="260" y="30" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0284c7" text-anchor="middle">قله دوم (نقطه ورود سل)</text>
  
  <!-- Breakdown arrow -->
  <line x1="265" y1="80" x2="305" y2="160" stroke="#b91c1c" stroke-width="4.5" />
  <polygon points="312,170 295,160 307,148" fill="#b91c1c" />
  
  <text x="75" y="140" font-family="sans-serif" font-size="18" font-weight="bold" fill="#854d0e">1</text>
  <text x="175" y="140" font-family="sans-serif" font-size="18" font-weight="bold" fill="#854d0e">2</text>
</svg>`,

  'photo_410@16-06-2026_22-06-12.jpg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <rect width="600" height="450" fill="#1e293b" />
  
  <!-- Red Descending Trendline -->
  <line x1="0" y1="30" x2="600" y2="240" stroke="#ef4444" stroke-width="3" />
  
  <!-- Yellow Wave Zigzag with Blue Circles at Pivots -->
  <polyline points="80,300 160,80 340,380 430,160 520,350" fill="none" stroke="#eab308" stroke-width="4" />
  
  <!-- Pivot 1: Bottom 1 -->
  <circle cx="80" cy="300" r="10" fill="none" stroke="#3b82f6" stroke-width="3.5" />
  <!-- Pivot 2: Top Peak 1 (touching trendline) -->
  <circle cx="160" cy="80" r="10" fill="none" stroke="#3b82f6" stroke-width="3.5" />
  <!-- Pivot 3: Major Bottom -->
  <circle cx="340" cy="380" r="10" fill="none" stroke="#3b82f6" stroke-width="3.5" />
  <!-- Pivot 4: Lower High (touching trendline) -->
  <circle cx="430" cy="160" r="10" fill="none" stroke="#3b82f6" stroke-width="3.5" />
  <!-- Pivot 5: Lower Low -->
  <circle cx="520" cy="350" r="10" fill="none" stroke="#3b82f6" stroke-width="3.5" />
  
  <!-- Breakdown candle -->
  <rect x="560" y="240" width="10" height="190" fill="#ef4444" />
  
  <text x="300" y="430" font-family="sans-serif" font-size="14" font-weight="bold" fill="#e2e8f0" text-anchor="middle">ترکیب امواج زیگزاگ نزولی با خط روند مقاومت و پیوت‌های قیمتی</text>
</svg>`
};

let count = 0;
for (const [filename, content] of Object.entries(svgs)) {
  fs.writeFileSync(path.join(outDir, filename), content, 'utf8');
  console.log(`Generated ${filename}`);
  count++;
}
console.log(`Successfully generated all ${count} Lesson 14 SVGs!`);
