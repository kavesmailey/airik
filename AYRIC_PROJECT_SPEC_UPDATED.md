# AYRIC WEBSITE --- PROJECT SPEC

**Project:** Ayric / آیریک\
**Website:** https://ayricchap.ir\
**Repository:** kavesmailey/airik\
**Location:** Karaj, Iran\
**Status:** Pre-Launch / Final QA\
**Last Updated:** September 15, 2026

------------------------------------------------------------------------

## 01 --- PROJECT GOAL

طراحی و توسعه وب‌سایت رسمی آیریک به‌عنوان یک مجموعه تخصصی چاپ، با تمرکز
اصلی روی:

-   چاپ سیلک
-   چاپ DTF
-   معرفی سایر خدمات تخصصی آیریک
-   معرفی راهکارهای چاپ برای انواع کسب‌وکارها
-   نمایش نمونه‌کارها
-   تولید محتوای آموزشی و SEO/GEO
-   معرفی مجموعه
-   ایجاد مسیر ارتباط و درخواست استعلام قیمت

سایت باید فارسی، RTL، سریع، responsive، mobile-friendly و مناسب SEO/GEO
باشد.

------------------------------------------------------------------------

## 02 --- BRAND POSITIONING

**Brand:** آیریک / Ayric

**Core positioning:**

> آیریک؛ چاپ تخصصی برای برندهایی که کیفیت اهمیت دارد

آیریک نباید به‌عنوان یک چاپخانه عمومی با خدماتی مثل چاپ افست یا چاپ
دیجیتال معرفی شود.

تمرکز محتوایی سایت باید روی خدمات واقعی موجود در مجموعه باشد.

------------------------------------------------------------------------

## 03 --- ACTUAL SERVICES

منبع اصلی خدمات، `content/services.ts` است.

در مجموع **۲۱ سرویس واقعی** در سایت وجود دارد.

### Featured Services

این دو سرویس باید در Home به‌عنوان خدمات اصلی نمایش داده شوند:

1.  چاپ سیلک
2.  چاپ DTF

### Other Services

۱۹ سرویس دیگر:

1.  چاپ روی لباس
2.  چاپ روی بگ
3.  چاپ روی کارتن
4.  چاپ روی جعبه پیتزا
5.  چاپ روی لیوان کاغذی
6.  چاپ روی ظروف گرد
7.  چاپ روی تیشرت
8.  چاپ روی پارچه
9.  خدمات ساخت شابلون چاپ سیلک
10. توری‌کشی و عکاسی
11. خدمات طراحی اختصاصی چاپ سیلک
12. چاپ کیسه پارچه‌ای
13. چاپ نایلون
14. تولید و چاپ توت‌بگ
15. چاپ لیوان
16. چاپ روی فلز
17. چاپ روی چوب
18. چاپ روی استیل
19. چاپ روی پلکسی

هیچ سرویس ساختگی یا عمومی خارج از این لیست نباید به سایت اضافه شود.

------------------------------------------------------------------------

## 04 --- HOME PAGE

ساختار نهایی Home:

1.  Hero
2.  معرفی آیریک
3.  Featured Services
    -   چاپ سیلک
    -   چاپ DTF
4.  سایر خدمات آیریک
5.  نمونه‌کارها
6.  چرا آیریک
7.  CTA
8.  Footer

### Home rules

در Home:

-   فقط چاپ سیلک و DTF به‌عنوان Featured Services برجسته شوند.
-   ۱۹ سرویس دیگر در بخش «سایر خدمات آیریک» فقط به‌صورت نام + لینک نمایش
    داده شوند.
-   برای بخش سایر خدمات توضیح، تصویر یا کارت سنگین استفاده نشود.
-   هر مورد به صفحه واقعی خودش لینک شود.

مفاهیمی مانند «بسته‌بندی» یا «چاپ روی محصول» نباید به‌عنوان سرویس مستقل
معرفی شوند.

------------------------------------------------------------------------

## 05 --- BUSINESS SOLUTIONS

مسیر اصلی:

`/برای-کسب-و-کارها`

این بخش یک **SEO/GEO hub واحد** است و نباید برای هر نوع کسب‌وکار URL
جداگانه ساخته شود.

۸ گروه فعلی:

1.  رستوران‌ها
2.  کافه‌ها
3.  برندهای پوشاک
4.  فروشگاه‌ها
5.  برندها
6.  شرکت‌ها
7.  رویدادها
8.  کسب‌وکارهای آنلاین

منبع این بخش:

`content/business.ts`

هر بخش باید در صورت نیاز به سرویس‌های واقعی موجود در
`content/services.ts` لینک داخلی داشته باشد.

در Navigation اصلی، آیتم زیر وجود دارد:

**چاپ برای کسب‌وکارها** → `/برای-کسب-و-کارها`

در Sitemap نیز فقط همین یک URL وجود داشته باشد.

------------------------------------------------------------------------

## 06 --- SERVICE PAGES

Service architecture بر اساس `content/services.ts` ساخته شده است.

صفحات:

-   `/خدمات`
-   `/خدمات/[slug]` برای هر یک از ۲۱ سرویس

محتوای صفحات باید از اطلاعات واقعی پروژه استفاده کند و شامل موارد مناسب
مانند:

-   معرفی سرویس
-   کاربردها
-   مزایا
-   روش چاپ
-   مراحل کار
-   FAQ
-   سرویس‌های مرتبط
-   CTA

باشد.

از ادعاهای فنی یا تجاری‌ای که منبع پروژه تأیید نکرده است نباید استفاده
شود.

------------------------------------------------------------------------

## 07 --- BLOG / SEO

Blog route نهایی:

`/وبلاگ`

صفحات:

-   `/وبلاگ`
-   `/وبلاگ/[slug]`

Legacy route:

-   `/مجله` → redirect به `/وبلاگ/`

سه مقاله فعلی:

### 01

**چطور روش چاپ مناسب پروژه‌مان را انتخاب کنیم؟**

Slug:

`راهنمای-انتخاب-روش-چاپ`

### 02

**چاپ سیلک چیست و چه زمانی انتخاب مناسبی است؟**

Slug:

`چاپ-سیلک-چیست`

### 03

**چاپ سیلک یا DTF؛ برای پروژه ما کدام مناسب‌تر است؟**

Slug:

`تفاوت-چاپ-سیلک-و-dtf`

محتوای Blog باید در راستای خدمات واقعی آیریک باشد.

مقاله‌های عمومی نامرتبط یا مقایسه‌هایی مثل «چاپ دیجیتال و افست» که با
positioning فعلی آیریک همخوان نیستند، نباید اضافه شوند.

### Current QA

صفحه Blog هنوز نیاز به cleanup نهایی دارد و باید موارد قدیمی مانند:

-   «مجله چاپ»
-   `AIRIK`

در visible content، metadata و breadcrumbها بررسی و اصلاح شوند.

Redirect قدیمی `/مجله` باید حفظ شود.

------------------------------------------------------------------------

## 08 --- NAVIGATION

Navigation اصلی فعلی:

-   خانه
-   خدمات چاپ
-   چاپ برای کسب‌وکارها
-   نمونه‌کارها
-   بلاگ
-   درباره ما
-   تماس با ما

CTA اصلی:

**استعلام قیمت**

مسیر:

`/استعلام-قیمت`

Navigation از `content/site.ts` کنترل می‌شود و نباید آیتم‌ها به‌صورت تکراری
در Header و Footer hard-code شوند مگر در موارد ضروری.

------------------------------------------------------------------------

## 09 --- QUOTE / PRICE REQUEST

سایت **Price Calculator ندارد**.

«استعلام قیمت» به معنی محاسبه آنلاین قیمت نیست.

کاربر برای استعلام باید درخواست خود را از طریق فرم ارسال کند.

بنابراین:

-   calculator ساخته نشود.
-   قیمت‌گذاری خودکار ساخته نشود.
-   فرمول قیمت در frontend قرار نگیرد.

### Current implementation

Frontend فرم در:

`app/استعلام-قیمت/QuoteForm.tsx`

قرار دارد و فرم به endpoint زیر POST می‌کند:

`/api/quote.php`

Backend فعلی:

`public/api/quote.php`

معماری نهایی:

**Browser → PHP endpoint on cPanel → Telegram Bot API → Admin**

### Telegram status

اطلاعات Bot Telegram دریافت شده است.

Bot token و Admin Chat ID برای اتصال واقعی آماده هستند، اما نباید token
یا اطلاعات حساس داخل repository یا chat قرار گیرد.

برای production بهتر است اطلاعات حساس در یک config خصوصی خارج از
`public_html` قرار گیرد.

### Remaining form work

-   نهایی‌سازی فیلدها و گزینه‌های فرم
-   حذف گزینه‌های محتوایی قدیمی/نامرتبط
-   اتصال واقعی Bot
-   تست success
-   تست failure
-   تست mobile
-   تست production روی cPanel

------------------------------------------------------------------------

## 10 --- CONTACT INFORMATION

اطلاعات کامل تماس هنوز دریافت نشده است.

فعلاً اطلاعات زیر باید به‌عنوان **Pending** در نظر گرفته شوند:

-   شماره تلفن
-   ایمیل
-   آدرس دقیق
-   ساعات کاری
-   Instagram
-   LinkedIn
-   Telegram
-   WhatsApp
-   Map / Embed URL
-   سایر اطلاعات تماس موردنیاز

**Do not invent missing contact information.**

Location تأییدشده:

**کرج، ایران**

Service area فقط در صورت تأیید واقعی مجموعه استفاده شود.

------------------------------------------------------------------------

## 11 --- VISUAL DIRECTION

Visual direction سایت بر اساس نمونه انتخاب‌شده، به‌خصوص:

`creative-design-24.aura.build`

است.

ویژگی‌های موردنظر:

-   مینیمال
-   editorial
-   typography-led
-   whitespace مناسب
-   motion و transitionهای نرم
-   interactionهای ظریف
-   responsive
-   بدون شلوغی غیرضروری

------------------------------------------------------------------------

## 12 --- BRAND COLOR SYSTEM

پالت رنگ برند مشخص شده و باید در مرحله UI refinement به‌صورت یکپارچه در
کل سایت اعمال شود.

### Primary

-   `#F7F5F1`
-   `#333333`

### Neutral

-   `#E7E2D4`
-   `#A59D95`
-   `#8A8075`

### Secondary / Dynamic

-   `#D55049`
-   `#C0C8A0`
-   `#424572`
-   `#DFBBFB`
-   `#92672F`
-   `#E2D2B6`
-   `#7B6F4C`
-   `#D1D5EA`
-   `#AB4D18`
-   `#C99665`

### Color implementation rules

-   رنگ‌های برند باید در کل UI یک سیستم مشخص داشته باشند.
-   استفاده از مشکی خالص در همه‌جا نباید جایگزین سیستم رنگ برند شود.
-   رنگ‌های ثانویه باید هدفمند و متناسب با context استفاده شوند.
-   رنگ‌های accent می‌توانند برای sectionها، دسته‌بندی‌ها، interactionها و
    applications استفاده شوند.
-   palette باید در Tailwind/CSS به‌صورت منسجم قابل مدیریت باشد.

------------------------------------------------------------------------

## 13 --- CURRENT HOME IMPLEMENTATION

Home در نسخه فعلی به componentهای مستقل تقسیم شده است، از جمله:

-   `Hero`
-   `ServicesPreview`
-   `ProjectsPreview`
-   `WhyAyric`
-   `FinalCta`

ساختار Home از نظر معماری و section hierarchy تثبیت شده است.

### Current image status

تصاویر فعلی عمداً **تصاویر تستی** هستند.

یک تصویر تستی فعلی در مسیرهای مختلف copy شده تا بررسی شود که image
rendering، crop، layout و responsive behavior درست کار می‌کند.

این موضوع **اشتباه یا duplicate asset نهایی محسوب نمی‌شود** و تا زمان
رسیدن تصاویر واقعی قابل قبول است.

نام فایل‌ها عمداً مطابق asset موردنظر انتخاب شده‌اند تا بعداً فقط فایل واقعی
با همان نام جایگزین شود.

------------------------------------------------------------------------

## 14 --- ASSET STRATEGY

ساختار assetها از قبل مشخص شده و باید حفظ شود.

### Brand

`public/images/brand/logo.svg`

### Hero

`public/images/hero.jpg`

### Services

`public/images/services/silk.jpg`

`public/images/services/dtf.jpg`

### Portfolio

`public/images/portfolio/packaging.jpg`

`public/images/portfolio/fashion-print.jpg`

`public/images/portfolio/restaurant-print.jpg`

`public/images/portfolio/cafe-print.jpg`

`public/images/portfolio/corporate-print.jpg`

`public/images/portfolio/promotional-products.jpg`

### Blog

`public/images/blog/choosing-print-method.jpg`

`public/images/blog/screen-printing-guide.jpg`

`public/images/blog/screen-printing-vs-dtf.jpg`

### OG

`public/images/og.jpg`

### Current asset policy

تا زمان دریافت assetهای واقعی:

-   تصاویر تستی قابل استفاده هستند.
-   نام و مسیر فایل‌ها نباید بی‌دلیل تغییر کند.
-   تصاویر تستی نباید به‌عنوان پروژه واقعی یا نمونه‌کار واقعی معرفی شوند.
-   وقتی تصاویر واقعی رسیدند، فقط فایل‌های واقعی با همین نام‌ها جایگزین
    شوند.
-   بعد از جایگزینی، crop، `alt`, dimensions و responsive behavior بررسی
    شود.

------------------------------------------------------------------------

## 15 --- LOGO

فایل لوگو در repository موجود است:

`public/images/brand/logo.svg`

اما integration نهایی لوگو در Header / site config هنوز باید انجام شود.

در مرحله Asset/UI Integration:

-   Header
-   Footer
-   metadata
-   structured data
-   favicon / icon در صورت نیاز
-   OG

باید بررسی شوند.

------------------------------------------------------------------------

## 16 --- PLACEHOLDERS

`MediaPlaceholder` هنوز در بعضی بخش‌های سایت وجود دارد.

این component نباید بدون بررسی حذف شود.

بعد از integration تصاویر:

1.  تمام usageهای `MediaPlaceholder` پیدا شوند.
2.  هر usage با asset واقعی جایگزین شود.
3.  فقط اگر component دیگر هیچ مصرفی نداشت حذف شود.

------------------------------------------------------------------------

## 17 --- PORTFOLIO

منبع پروژه‌ها:

`content/projects.ts`

فعلاً ۶ پروژه تعریف شده است:

1.  پروژه بسته‌بندی
2.  چاپ برای برند پوشاک
3.  هویت چاپی رستوران
4.  اقلام چاپی کافه
5.  پروژه سازمانی
6.  محصولات تبلیغاتی

تصاویر فعلی تستی هستند و قرار نیست به‌عنوان تصاویر نهایی واقعی تلقی شوند.

### Important

تا زمان دریافت محتوای واقعی پروژه‌ها:

-   claim جدید اضافه نشود.
-   پروژه ساختگی به‌عنوان پروژه انجام‌شده معرفی نشود.
-   فقط ساختار و asset mapping آماده باشد.

------------------------------------------------------------------------

## 18 --- RESPONSIVE / MOBILE

Responsive بودن در ساختار اولیه در نظر گرفته شده، اما **Mobile
Optimization نهایی هنوز باقی مانده است**.

مرحله Mobile QA باید شامل:

-   Header / mobile navigation
-   typography
-   line breaks فارسی
-   section spacing
-   button sizing
-   horizontal overflow
-   image crop
-   portfolio grid
-   service list
-   forms
-   footer
-   touch targets
-   animation / transition performance
-   viewportهای مختلف

باشد.

هدف فقط «responsive شدن» نیست؛ باید تجربه موبایل از نظر hierarchy،
spacing و interaction نیز polished شود.

------------------------------------------------------------------------

## 19 --- UI REFINEMENT

پس از تثبیت architecture و content، یک مرحله مستقل برای **UI refinement
/ polish** باقی مانده است.

موارد این مرحله:

-   spacing دقیق
-   typography scale
-   line-height
-   border opacity
-   radiusها
-   button states
-   hover states
-   active states
-   transitions
-   animation timing
-   image crop
-   section rhythm
-   visual hierarchy
-   consistency بین صفحات
-   رنگ‌های brand palette
-   جزئیات mobile UI

این مرحله باید **در انتهای پروژه** انجام شود و نباید باعث بازطراحی
دوباره architecture شود.

------------------------------------------------------------------------

## 20 --- TECHNICAL ARCHITECTURE

Framework:

**Next.js 14**

React:

**18**

TypeScript:

**5**

Tailwind CSS:

**3**

Export mode:

``` text
output: "export"
```

Trailing slash:

``` text
trailingSlash: true
```

Images:

``` text
unoptimized: true
```

هدف نهایی:

**Static Export → cPanel**

------------------------------------------------------------------------

## 21 --- CLEANUP / LEGACY

Architecture قدیمی بررسی و بخش‌هایی از آن حذف شده‌اند.

Architecture فعلی از:

-   `components/Header.tsx`
-   `components/Footer.tsx`

استفاده می‌کند.

Legacy blog route روی `/وبلاگ` تثبیت شده است.

Legacy redirect:

`/مجله → /وبلاگ/`

باید در `.htaccess` باقی بماند.

### Remaining cleanup

قبل از production:

-   unused components
-   unused imports
-   stale content
-   stale references
-   old terminology
-   dead routes
-   duplicate functionality

بررسی شوند.

------------------------------------------------------------------------

## 22 --- LOCATION / BRAND CLEANUP

Location صحیح:

**کرج**

Brand spelling صحیح:

**Ayric**

فارسی:

**آیریک**

نباید variationهای اشتباه مانند:

-   AIRIK
-   iric
-   Tehran / تهران

در metadata، visible content، structured data یا content نهایی باقی
بمانند؛ مگر در redirect/legacy context که آگاهانه و ضروری باشد.

------------------------------------------------------------------------

## 23 --- SEO / GEO

SEO/GEO architecture در پروژه وجود دارد و باید در Final QA بررسی شود.

موارد:

-   title
-   description
-   canonical
-   Open Graph
-   Twitter card
-   robots
-   sitemap
-   JSON-LD
-   Organization
-   WebSite
-   Breadcrumb
-   FAQ schema
-   internal linking
-   service/entity signals
-   local signals for Karaj
-   image metadata
-   alt text

### Important

اطلاعاتی که هنوز از مجموعه دریافت نشده‌اند نباید در structured data یا
metadata اختراع شوند.

------------------------------------------------------------------------

## 24 --- SITEMAP / ROBOTS

Sitemap باید شامل:

-   Home
-   Services
-   Business Solutions
-   Portfolio
-   Blog
-   About
-   Contact
-   Quote
-   21 service pages
-   3 blog articles

باشد.

Business Solutions فقط یک URL دارد:

`/برای-کسب-و-کارها`

Robots باید sitemap اصلی را معرفی کند.

------------------------------------------------------------------------

## 25 --- FORMS

فرم استعلام قیمت implementation اولیه دارد.

### Current

`app/استعلام-قیمت/QuoteForm.tsx`

→

`/api/quote.php`

### Remaining

-   content cleanup
-   Telegram integration
-   private config
-   cPanel test
-   success/failure UX
-   mobile QA
-   production test

File upload فعلاً بخشی از فرم نهایی نیست و نباید بدون تصمیم جدید اضافه
شود.

------------------------------------------------------------------------

## 26 --- FINAL QA ORDER

ترتیب کار از وضعیت فعلی:

### STEP 1 --- Technical QA

-   بررسی architecture
-   بررسی routes
-   بررسی imports
-   بررسی legacy files
-   بررسی stale references
-   بررسی Header
-   بررسی Footer
-   بررسی sitemap
-   بررسی robots
-   بررسی metadata
-   build

------------------------------------------------------------------------

### STEP 2 --- Content QA

صفحه‌به‌صفحه:

-   Home
-   Services
-   تمام service pages
-   Business Solutions
-   Portfolio
-   Blog
-   About
-   Contact
-   Quote

موارد مهم:

-   Ayric / آیریک
-   کرج
-   حذف terminology قدیمی
-   حذف claims تأییدنشده
-   CTA consistency

------------------------------------------------------------------------

### STEP 3 --- Brand / Color System

-   اعمال palette اصلی
-   اعمال neutralها
-   اعمال secondary colors
-   اصلاح استفاده بیش‌ازحد از black
-   هماهنگ‌سازی buttons
-   backgrounds
-   accents
-   states

------------------------------------------------------------------------

### STEP 4 --- UI Refinement

-   spacing
-   typography
-   hierarchy
-   transitions
-   hover/active states
-   border/radius
-   visual consistency
-   interaction polish

------------------------------------------------------------------------

### STEP 5 --- Mobile Optimization

-   mobile header
-   mobile navigation
-   typography
-   spacing
-   forms
-   images
-   cards/grids
-   footer
-   touch targets
-   overflow
-   animation performance

------------------------------------------------------------------------

### STEP 6 --- Final Assets

وقتی تصاویر واقعی و اطلاعات برند آماده شدند:

1.  Logo
2.  Hero
3.  Silk
4.  DTF
5.  Portfolio
6.  Blog
7.  OG
8.  alt text
9.  crop
10. responsive behavior
11. remove remaining placeholders

------------------------------------------------------------------------

### STEP 7 --- Quote / Telegram

-   Bot token
-   Admin Chat ID
-   private config
-   cPanel PHP
-   real message test
-   success/failure test

------------------------------------------------------------------------

### STEP 8 --- Final SEO / GEO

-   titles
-   descriptions
-   canonical
-   OG
-   Twitter
-   JSON-LD
-   sitemap
-   robots
-   internal links
-   local signals
-   image metadata

------------------------------------------------------------------------

### STEP 9 --- BUILD

``` bash
npm run build
```

Build باید بدون error اجرا شود.

------------------------------------------------------------------------

### STEP 10 --- PRODUCTION

بعد از تأیید کامل:

1.  Static files
2.  cPanel
3.  Domain
4.  SSL
5.  PHP endpoint
6.  Telegram
7.  Production test
8.  Mobile test
9.  Link check
10. SEO check

------------------------------------------------------------------------

## 27 --- CURRENT STATUS

### DONE / STABLE

-   Next.js architecture
-   Static export setup
-   RTL / Persian structure
-   Main routes
-   Header structure
-   Footer
-   Services architecture
-   21 actual services
-   Featured services
-   Home structure
-   Business Solutions hub
-   8 business categories
-   Portfolio data structure
-   Blog architecture
-   3 blog articles
-   Blog article structure
-   SEO foundations
-   Sitemap
-   Robots
-   Quote form frontend
-   PHP Telegram endpoint architecture
-   Test image file structure
-   Brand palette definition

### IN PROGRESS

-   Technical cleanup
-   stale Blog terminology cleanup
-   Header desktop fit
-   content QA
-   quote form content cleanup
-   Telegram integration
-   logo integration
-   brand color implementation
-   image rendering integration
-   UI refinement
-   mobile optimization
-   final SEO/GEO QA

### WAITING FOR USER / EXTERNAL INPUT

-   final phone
-   final email
-   final address
-   working hours
-   social links
-   map URL
-   final real logo confirmation if needed
-   final real Hero image
-   final service images
-   final portfolio images
-   final blog images
-   final OG image

------------------------------------------------------------------------

## 28 --- CURRENT REALISTIC PROJECT STATUS

The project is **not being redesigned from scratch**.

The core architecture and page structure are in place.

The remaining work is primarily:

**QA → Content cleanup → Brand colors → UI refinement → Mobile
optimization → Real asset replacement → Telegram production connection →
SEO/GEO final QA → cPanel deployment**

Test images are intentionally being used until real images arrive. Their
identical appearance is expected at this stage and should not be treated
as a project bug.

The project should move forward from the current implementation rather
than restarting or restructuring the site again.
