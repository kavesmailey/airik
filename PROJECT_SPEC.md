AYRIC WEBSITE — PROJECT SPEC

Project: Ayric / آیریک
Website: https://ayricchap.ir
Repository: kavesmailey/airik
Location: Karaj, Iran
Status: Pre-Launch / Final QA
Last Updated: September 2026

⸻

01 — PROJECT GOAL

طراحی و توسعه وب‌سایت رسمی آیریک به‌عنوان یک مجموعه تخصصی چاپ، با تمرکز اصلی روی:

* چاپ سیلک
* چاپ DTF
* معرفی سایر خدمات تخصصی آیریک
* نمایش نمونه‌کارها
* تولید محتوای آموزشی و SEO
* معرفی مجموعه
* ایجاد مسیر ارتباط و درخواست استعلام قیمت

سایت باید فارسی، RTL، سریع، responsive و مناسب SEO/GEO باشد.

⸻

02 — BRAND POSITIONING

Brand: آیریک / Ayric

Core positioning:

آیریک؛ چاپ تخصصی برای برندهایی که کیفیت اهمیت دارد

آیریک نباید به‌عنوان یک چاپخانه عمومی با خدماتی مثل چاپ افست یا چاپ دیجیتال معرفی شود.

تمرکز محتوایی سایت باید روی خدمات واقعی موجود در مجموعه باشد.

⸻

03 — ACTUAL SERVICES

منبع اصلی خدمات، فایل services.ts است.

در مجموع ۲۱ سرویس واقعی در سایت وجود دارد:

Featured Services

این دو سرویس باید در Home به‌عنوان خدمات اصلی نمایش داده شوند:

1. چاپ سیلک
2. چاپ DTF

Other Services

۱۹ سرویس دیگر:

1. چاپ روی لباس
2. چاپ روی بگ
3. چاپ روی کارتن
4. چاپ روی جعبه پیتزا
5. چاپ روی لیوان کاغذی
6. چاپ روی ظروف گرد
7. چاپ روی تیشرت
8. چاپ روی پارچه
9. خدمات ساخت شابلون چاپ سیلک
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

⸻

04 — HOME PAGE DECISION

ساختار نهایی Home:

1. Hero
2. معرفی آیریک
3. Featured Services
    * چاپ سیلک
    * چاپ DTF
4. سایر خدمات آیریک
5. نمونه‌کارها
6. چرا آیریک
7. CTA
8. Footer

Important

در Home:

نمایش داده شود:

* چاپ سیلک
* چاپ DTF

در بخش «سایر خدمات آیریک»:

۱۹ سرویس دیگر فقط به‌صورت نام + لینک نمایش داده شوند.

برای این بخش:

* توضیح نوشته نشود
* تصویر استفاده نشود
* کارت‌های سنگین ساخته نشود
* هر مورد به صفحه واقعی خودش لینک شود

هدف این بخش علاوه بر navigation، تقویت internal linking و SEO است.

حذف شود:

مفاهیم یا سرویس‌هایی مانند:

* «بسته‌بندی»
* «چاپ روی محصول»

به‌عنوان سرویس مستقل در Home نباید نمایش داده شوند، چون جزو سرویس‌های واقعی تعریف‌شده نیستند.

⸻

05 — SERVICE PAGES

Service architecture بر اساس content/services.ts ساخته شده است.

هر سرویس صفحه مستقل دارد و slug فارسی خودش را دارد.

صفحات اصلی:

* /خدمات
* /خدمات/چاپ-سیلک
* /خدمات/چاپ-dtf
* و سایر ۱۹ سرویس

صفحات سرویس باید از اطلاعات موجود در services.ts استفاده کنند.

محتوا شامل مواردی مانند:

* معرفی سرویس
* کاربردها
* مزایا
* روش چاپ
* مراحل کار
* FAQ
* سرویس‌های مرتبط
* CTA

باشد.

از ادعاهای فنی یا تجاری‌ای که در منبع پروژه وجود ندارند نباید استفاده شود.

⸻

06 — BLOG / SEO

Blog route نهایی:

/وبلاگ

صفحات:

* /وبلاگ
* /وبلاگ/[slug]

Legacy route:

* /مجله → redirect به /وبلاگ

سه مقاله فعلی:

01

چطور روش چاپ مناسب پروژه‌مان را انتخاب کنیم؟

Slug:

راهنمای-انتخاب-روش-چاپ

02

چاپ سیلک چیست و چه زمانی انتخاب مناسبی است؟

Slug:

چاپ-سیلک-چیست

03

چاپ سیلک یا DTF؛ برای پروژه ما کدام مناسب‌تر است؟

Slug:

تفاوت-چاپ-سیلک-و-dtf

محتوای Blog باید در راستای خدمات واقعی آیریک باشد.

مقاله‌های عمومی نامرتبط یا محتوایی مثل مقایسه «چاپ دیجیتال و افست» که با positioning فعلی آیریک همخوان نیستند، استفاده نشوند.

⸻

07 — NAVIGATION

Navigation اصلی:

* خانه
* خدمات چاپ
* نمونه‌کارها
* بلاگ
* درباره ما
* تماس با ما

CTA اصلی:

استعلام قیمت

مسیر:

/استعلام-قیمت

⸻

08 — QUOTE / PRICE REQUEST

نکته بسیار مهم:

سایت Price Calculator ندارد.

«استعلام قیمت» به معنی محاسبه آنلاین قیمت نیست.

کاربر برای استعلام باید از طریق مسیر ارتباطی مجموعه درخواست خود را ارسال کند.

بنابراین:

* calculator ساخته نشود
* قیمت‌گذاری خودکار ساخته نشود
* فرمول قیمت در frontend قرار نگیرد

مرحله اتصال فرم واقعی هنوز باقی مانده است.

⸻

09 — VISUAL DIRECTION

Visual direction سایت بر اساس نمونه‌ای که کاربر انتخاب کرده، به‌خصوص:

creative-design-24.aura.build

است.

ویژگی‌های موردنظر:

* مینیمال
* editorial
* typography-led
* whitespace مناسب
* motion و transitionهای نرم
* interactionهای ظریف
* responsive
* بدون شلوغی غیرضروری

Responsive بودن باید در تمام صفحات از ابتدا در نظر گرفته شود:

* Mobile
* Tablet
* Desktop

⸻

10 — CURRENT HOME IMPLEMENTATION

Home بازطراحی شده و ساختار آن اصلاح شده است.

ویژگی‌های فعلی:

* فقط دو Featured Service
* بخش «سایر خدمات آیریک»
* لینک‌دهی به ۱۹ سرویس دیگر
* responsive grid
* responsive typography
* responsive spacing
* mobile-friendly buttons
* portfolio grid responsive
* جلوگیری از overflow افقی
* حذف مسیرهای سرویس اشتباه

⸻

11 — BLOG IMPLEMENTATION

Blog list و article page بازطراحی شده‌اند.

Implemented:

* responsive layout
* category navigation
* article grid
* article page
* related posts
* CTA
* FAQ
* FAQ JSON-LD
* Breadcrumb structured data
* static params
* metadata

QA note

تاریخ‌های فارسی فعلی در blog.ts برای نمایش مناسب هستند، اما در structured data باید بررسی شود که datePublished و dateModified در نهایت فرمت معتبر Schema.org داشته باشند.

⸻

12 — TECHNICAL ARCHITECTURE

Framework:

Next.js

Export mode:

output: "export"

Trailing slash:

trailingSlash: true

Images:

unoptimized: true

هدف نهایی:

Static Export → cPanel

⸻

13 — CLEANUP ALREADY DONE

Legacy architecture بررسی و حذف شده است.

موارد حذف‌شده:

* components/layout/
* components/cards/ArticleCard.tsx
* content/articles.tsx
* app/robots.txt
* legacy service page:
    * app/خدمات/چاپ-سیلک/page.tsx

Architecture فعلی از:

* components/Header.tsx
* components/Footer.tsx

استفاده می‌کند.

Blog route نیز روی /وبلاگ تثبیت شده است.

⸻

14 — LOCATION / BRAND CLEANUP

اطلاعات قدیمی بررسی شده‌اند.

Location صحیح:

کرج

نباید در سایت اطلاعات قدیمی مثل Tehran / تهران باقی مانده باشد.

Brand spelling صحیح:

Ayric

و فارسی:

آیریک

نباید variationهای اشتباه مانند:

* AIRIK
* iric

در کد، metadata یا محتوای نهایی باقی بمانند.

⸻

15 — IMAGES & LOGO — DEFERRED

IMPORTANT

تصاویر و فایل لوگوی نهایی هنوز در اختیار پروژه نیستند.

بنابراین تمام کارهای مربوط به Assetهای واقعی فعلاً متوقف می‌شوند و به مرحله آخر منتقل می‌شوند.

فعلاً انجام نشود:

* تهیه تصاویر
* انتخاب عکس نهایی
* تولید تصاویر placeholder به‌عنوان asset نهایی
* جایگزینی logo
* طراحی OG image
* نهایی‌سازی portfolio images
* نهایی‌سازی service images
* نهایی‌سازی blog images
* نهایی‌سازی hero image

⸻

16 — FINAL ASSET PACKAGE

وقتی تصاویر و لوگو چند روز دیگر آماده شدند، در مرحله نهایی این Assetها وارد پروژه می‌شوند.

Logo

public/images/brand/logo.svg

فایل نهایی لوگوی آیریک.

⸻

Hero

public/images/hero.jpg

هدف:

* real printing / production atmosphere
* مناسب Hero
* فضای کافی برای متن
* کیفیت بالا
* responsive crop

پیشنهاد ابعاد:

1920 × 1080 یا بزرگ‌تر

⸻

Service Images

فقط برای Featured Services:

public/images/services/silk.jpg
public/images/services/dtf.jpg

نسبت پیشنهادی:

4:3

حداقل:

1600 × 1200

⸻

Portfolio Images

برای ۶ پروژه:

public/images/portfolio/

فایل‌های موردنظر:

packaging.jpg
fashion-print.jpg
restaurant-print.jpg
cafe-print.jpg
corporate-print.jpg
promotional-products.jpg

اما این تصاویر تا زمانی که عکس واقعی پروژه‌ها در اختیار نباشد، نهایی نیستند.

نباید پروژه ساختگی یا تصویر stock به‌عنوان نمونه‌کار واقعی آیریک معرفی شود.

⸻

Blog Images

سه تصویر:

public/images/blog/choosing-print-method.jpg
public/images/blog/screen-printing-guide.jpg
public/images/blog/screen-printing-vs-dtf.jpg

نسبت:

16:9

⸻

OG Image

public/images/og.jpg

نسبت:

1200 × 630

شامل:

* لوگوی آیریک
* پیام کوتاه برند
* composition مناسب social sharing

⸻

17 — PLACEHOLDERS

تا زمان دریافت Assetهای واقعی، placeholderها قابل قبول هستند.

Placeholder نباید در مرحله Production نهایی باقی بماند.

MediaPlaceholder نیز باید در مرحله Asset Replacement بررسی شود.

⸻

18 — SITE CONFIG / METADATA

content/site.ts باید در مرحله نهایی Assetها بررسی و تکمیل شود.

موارد مرتبط با Asset که فعلاً نباید نهایی شوند:

* logo
* logoMark
* ogImage

اطلاعات غیر Asset مانند:

* نام برند
* tagline
* شهر
* service area
* navigation

باید مستقل از دریافت تصاویر قابل تکمیل باشند.

⸻

19 — FORMS

Form implementation هنوز نهایی نشده است.

باقی‌مانده:

1. انتخاب سیستم فرم
2. اتصال فرم استعلام قیمت
3. بررسی ارسال موفق
4. بررسی خطا
5. success state
6. failure state
7. تست روی mobile
8. تست روی production

QuoteForm قدیمی بررسی شده و مورد استفاده فعلی ندارد.

⸻

20 — FINAL TECHNICAL QA

بعد از اتمام بخش‌های فعلی:

باید بررسی شود:

* TypeScript errors
* unused imports
* broken links
* broken routes
* missing routes
* metadata
* canonical URLs
* robots
* sitemap
* structured data
* responsive behavior
* mobile navigation
* accessibility basics
* image alt text
* 404 behavior
* redirectها
* فارسی/RTL
* SEO/GEO
* Static Export

سپس:

npm run build

باید بدون error اجرا شود.

⸻

21 — FINAL QA ORDER

ترتیب نهایی کار از اینجا:

STEP 1 — Technical Cleanup

* بررسی نهایی architecture
* بررسی legacy files
* بررسی imports
* بررسی routes
* بررسی metadata
* build

بدون نیاز به تصاویر و لوگو

⸻

STEP 2 — Content QA

* بررسی تمام متن‌های Home
* بررسی تمام service pages
* بررسی Blog
* بررسی About
* بررسی Contact
* بررسی CTAها
* بررسی اطلاعات کرج
* بررسی نام Ayric / آیریک

بدون نیاز به تصاویر و لوگوی نهایی

⸻

STEP 3 — Form

* انتخاب فرم نهایی
* اتصال فرم
* تست ارسال
* تست error/success

بدون وابستگی به Assetها

⸻

STEP 4 — FINAL ASSETS

وقتی لوگو و تصاویر واقعی دریافت شدند:

1. Logo
2. Hero
3. Silk image
4. DTF image
5. Portfolio images
6. Blog images
7. OG image
8. بررسی alt text
9. بررسی crop و responsive behavior
10. حذف placeholderهای باقی‌مانده

⸻

STEP 5 — FINAL SEO / GEO

بعد از ورود Assetها:

* title
* description
* canonical
* OG
* Twitter card
* image metadata
* structured data
* sitemap
* robots
* internal linking
* service/entity signals
* local signals for Karaj

⸻

STEP 6 — FINAL BUILD

npm run build

بررسی خروجی Static Export.

⸻

STEP 7 — PRODUCTION

بعد از تأیید کامل:

1. Static files
2. cPanel
3. Domain
4. SSL
5. Production test
6. Mobile test
7. Final link check
8. Final SEO check

⸻

22 — CURRENT STATUS

DONE

* Next.js architecture
* Static export setup
* Main navigation
* Header
* Footer
* Services architecture
* 21 actual services
* Home restructuring
* Silk featured service
* DTF featured service
* Other services SEO section
* Blog route
* Blog content restructuring
* Blog article pages
* Responsive Home
* Responsive Blog
* Legacy cleanup
* Tehran → Karaj cleanup
* Ayric naming cleanup
* Quote calculator removed / not part of product
* Build/deployment previously verified successfully

CURRENT

* Technical final QA
* Content final QA
* Form implementation
* Final SEO/GEO QA

WAITING FOR USER ASSETS

* Final logo
* Hero image
* Silk image
* DTF image
* Portfolio images
* Blog images
* OG image

FINAL

* Asset integration
* Final build
* cPanel deployment
* Domain connection
* Production QA

⸻

23 — IMPORTANT WORKING RULES

Rule 1

Do not invent services.

Only use the 21 services defined in services.ts.

Rule 2

Do not turn «استعلام قیمت» into an online calculator.

Rule 3

Home’s featured services are only:

* چاپ سیلک
* چاپ DTF

Rule 4

The other 19 services appear in Home only as text links in:

سایر خدمات آیریک

Rule 5

Do not use packaging or generic product printing as standalone services unless explicitly defined in the service source.

Rule 6

Do not use fake portfolio projects or pretend stock imagery is real Ayric work.

Rule 7

Images and final logo are FINAL-STAGE tasks.

Do not block current technical/content work waiting for them.

Rule 8

All pages must remain responsive.

Rule 9

When modifying a file, provide the complete file, not an instruction to insert code into an existing section.

Rule 10

Do not change already-approved architecture or decisions without a concrete reason.

⸻

CURRENT PROJECT STATE

The website is structurally built and approaching final QA.

The immediate work is not images or logo.

The immediate work is:

Technical QA → Content QA → Forms → Final Asset Integration → SEO/GEO QA → Build → cPanel → Production.
