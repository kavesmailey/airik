AYRIC WEBSITE — PROJECT SPEC

Project: Ayric / آیریک
Website: https://ayricchap.ir
Repository: kavesmailey/airik
Location: Karaj, Iran
Status: Pre-Launch / Final QA — UI Refinement, Mobile QA & Production Preparation
Last Updated: September 15, 2026

⸻

01 — PROJECT GOAL

طراحی و توسعه وب‌سایت رسمی آیریک به‌عنوان یک مجموعه تخصصی چاپ، با تمرکز اصلی روی:

* چاپ سیلک
* چاپ DTF
* معرفی سایر خدمات تخصصی آیریک
* معرفی راهکارهای چاپ برای انواع کسب‌وکارها
* نمایش نمونه‌کارها
* تولید محتوای آموزشی و SEO/GEO
* معرفی مجموعه
* ایجاد مسیر ارتباط و درخواست استعلام قیمت

سایت باید فارسی، RTL، سریع، responsive، mobile-friendly و مناسب SEO/GEO باشد.

⸻

02 — BRAND POSITIONING

Brand: آیریک / Ayric

Core positioning:

آیریک؛ چاپ تخصصی برای برندهایی که کیفیت اهمیت دارد

آیریک نباید به‌عنوان یک چاپخانه عمومی با خدماتی مانند چاپ افست یا چاپ دیجیتال معرفی شود.

تمرکز محتوایی سایت باید روی خدمات واقعی موجود در مجموعه باشد.

⸻

03 — ACTUAL SERVICES

منبع اصلی خدمات:

content/services.ts

در مجموع ۲۱ سرویس واقعی در سایت وجود دارد.

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
9. ساخت شابلون چاپ سیلک
10. توری‌کشی و عکاسی
11. طراحی اختصاصی چاپ سیلک
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

04 — HOME PAGE

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

Home Rules

در Home:

* فقط چاپ سیلک و DTF به‌عنوان Featured Services برجسته شوند.
* ۱۹ سرویس دیگر در بخش «سایر خدمات آیریک» فقط به‌صورت نام + لینک نمایش داده شوند.
* برای بخش سایر خدمات توضیح، تصویر یا کارت سنگین استفاده نشود.
* هر مورد به صفحه واقعی خودش لینک شود.

مفاهیمی مانند «بسته‌بندی» یا «چاپ روی محصول» نباید به‌عنوان سرویس مستقل معرفی شوند.

⸻

05 — BUSINESS SOLUTIONS

مسیر اصلی:

/برای-کسب-و-کارها

این بخش یک SEO/GEO hub واحد است و نباید برای هر نوع کسب‌وکار URL جداگانه ساخته شود.

۸ گروه فعلی:

1. رستوران‌ها
2. کافه‌ها
3. برندهای پوشاک
4. فروشگاه‌ها
5. برندها
6. شرکت‌ها
7. رویدادها
8. کسب‌وکارهای آنلاین

منبع این بخش:

content/business.ts

هر بخش باید در صورت نیاز به سرویس‌های واقعی موجود در content/services.ts لینک داخلی داشته باشد.

در Navigation اصلی:

چاپ برای کسب‌وکارها → /برای-کسب-و-کارها

در Sitemap نیز فقط همین یک URL وجود داشته باشد.

⸻

06 — SERVICE PAGES

Service architecture بر اساس content/services.ts ساخته شده است.

صفحات:

* /خدمات
* /خدمات/[slug] برای هر یک از ۲۱ سرویس

محتوای صفحات باید از اطلاعات واقعی پروژه استفاده کند و در صورت وجود شامل مواردی مانند:

* معرفی سرویس
* کاربردها
* مزایا
* روش چاپ
* مراحل کار
* FAQ
* سرویس‌های مرتبط
* CTA

باشد.

از ادعاهای فنی یا تجاری که منبع پروژه تأیید نکرده است نباید استفاده شود.

⸻

07 — BLOG / SEO

Blog route نهایی:

/وبلاگ

صفحات:

* /وبلاگ
* /وبلاگ/[slug]

Legacy route:

/مجله → redirect به /وبلاگ/

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

مقاله‌های عمومی نامرتبط یا مقایسه‌هایی مانند «چاپ دیجیتال و افست» که با positioning فعلی آیریک همخوان نیستند، نباید اضافه شوند.

Current QA Status

Blog architecture، metadata، route، sitemap و SEO/GEO بررسی شده‌اند.

Blog palette نیز طبق تصمیم کاربر DONE / NON-BLOCKING محسوب می‌شود و نباید مجدداً به‌عنوان QA task باز شود.

Legacy redirect /مجله باید حفظ شود.

⸻

08 — NAVIGATION

Navigation اصلی:

* خانه
* خدمات چاپ
* چاپ برای کسب‌وکارها
* نمونه‌کارها
* بلاگ
* درباره ما
* تماس با ما

CTA اصلی:

استعلام قیمت

مسیر:

/استعلام-قیمت

Navigation از content/site.ts کنترل می‌شود و نباید آیتم‌ها به‌صورت تکراری در Header و Footer hard-code شوند مگر در موارد ضروری.

⸻

09 — QUOTE / PRICE REQUEST

سایت Price Calculator ندارد.

«استعلام قیمت» به معنی محاسبه آنلاین قیمت نیست.

کاربر برای استعلام باید درخواست خود را از طریق فرم ارسال کند.

بنابراین:

* calculator ساخته نشود.
* قیمت‌گذاری خودکار ساخته نشود.
* فرمول قیمت در frontend قرار نگیرد.

Current Implementation

Frontend فرم:

app/استعلام-قیمت/QuoteForm.tsx

Endpoint:

/api/quote.php

Backend:

public/api/quote.php

معماری نهایی:

Browser → PHP endpoint on cPanel → Telegram Bot API → Admin

Current Frontend Mapping

فرم frontend در حال حاضر به قرارداد PHP متصل شده است.

Mapping اصلی:

Frontend	PHP
name	name
phone	phone
productType	projectType
quantity	quantity
printingMethod	material
timeline	deadline
description	message

مواردی مانند email، brand و dimensions در mapping فعلی استفاده نمی‌شوند مگر اینکه در implementation نهایی موردنیاز باشند.

File Upload

File upload از فرم نهایی حذف شده است و نباید بدون تصمیم جدید اضافه شود.

Telegram Status

اطلاعات Bot Telegram دریافت شده است.

Bot token و Admin Chat ID برای اتصال production آماده هستند، اما اطلاعات حساس نباید داخل repository یا chat قرار گیرند.

Production configuration پس از تهیه hosting/cPanel انجام می‌شود.

⸻

10 — CONTACT INFORMATION

اطلاعات تماس موجود در implementation فعلی باید بدون تغییر حفظ شوند مگر اینکه کاربر صراحتاً درخواست تغییر بدهد.

اطلاعات فعلی پروژه شامل:

* شماره تماس فعلی پروژه
* hello@ayric.ir
* ساعات کاری فعلی پروژه
* Location: کرج، ایران

هرگونه اطلاعات تماس جدید مانند Instagram، LinkedIn، Telegram، WhatsApp، آدرس دقیق، Map URL یا شماره جدید فقط پس از تأیید واقعی مجموعه اضافه شود.

Do not invent missing contact information.

⸻

11 — VISUAL DIRECTION

Visual direction سایت بر اساس نمونه انتخاب‌شده، به‌خصوص:

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

هدف، polish کردن implementation فعلی است؛ نه redesign مجدد architecture.

⸻

12 — BRAND COLOR SYSTEM

FINAL APPROVED PALETTE

پالت نهایی و تنها palette مورد تأیید فعلی:

* White / Background: #FFFFFF
* Soft Green: #E4F0CC
* Primary Green: #8BC53D
* Dark Green: #022F12
* Deepest Green: #021408

این پنج رنگ single source of truth برای UI فعلی هستند.

Important

پالت قدیمی زیر دیگر بخشی از سیستم رنگ فعلی نیست و نباید استفاده شود:

* #F7F5F1
* #333333
* #E7E2D4
* #A59D95
* #8A8075
* #D55049
* #C0C8A0
* #424572
* #DFBBFB
* #92672F
* #E2D2B6
* #7B6F4C
* #D1D5EA
* #AB4D18
* #C99665

Do not introduce additional brand colors without explicit approval.

⸻

13 — CURRENT HOME IMPLEMENTATION

Home در نسخه فعلی به componentهای مستقل تقسیم شده است:

* Hero
* ServicesPreview
* ProjectsPreview
* WhyAyric
* FinalCta

ساختار Home و section hierarchy تثبیت شده است.

Current Image Status

تصاویر فعلی عمداً تصاویر تستی هستند.

برخی فایل‌های تستی فعلی برای بررسی image rendering، crop، layout و responsive behavior استفاده شده‌اند.

این موضوع bug یا duplicate asset نهایی محسوب نمی‌شود.

تا زمان دریافت تصاویر واقعی:

* test images قابل استفاده هستند.
* نباید به‌عنوان پروژه واقعی معرفی شوند.
* نام و مسیر فایل‌ها تا حد امکان ثابت بماند.

⸻

14 — ASSET STRATEGY

ساختار assetها:

Brand

public/images/brand/logo.svg

Hero

public/images/hero.jpg

Services

public/images/services/silk.jpg

public/images/services/dtf.jpg

Portfolio

public/images/portfolio/packaging.jpg

public/images/portfolio/fashion-print.jpg

public/images/portfolio/restaurant-print.jpg

public/images/portfolio/cafe-print.jpg

public/images/portfolio/corporate-print.jpg

public/images/portfolio/promotional-products.jpg

Blog

public/images/blog/choosing-print-method.jpg

public/images/blog/screen-printing-guide.jpg

public/images/blog/screen-printing-vs-dtf.jpg

OG

public/images/og.jpg

Current Asset Policy

تا زمان دریافت assetهای واقعی:

* تصاویر تستی قابل استفاده هستند.
* نام و مسیر فایل‌ها بی‌دلیل تغییر نکند.
* تصاویر تستی به‌عنوان پروژه واقعی معرفی نشوند.
* تصاویر واقعی بعداً با همین نام‌ها جایگزین شوند.
* پس از جایگزینی، crop، alt، dimensions و responsive behavior بررسی شود.

⸻

15 — LOGO

فایل لوگو:

public/images/brand/logo.svg

Current status: integrated.

Logo integration در Header و Footer انجام شده و نباید به‌عنوان task باقی‌مانده تلقی شود.

در Final Asset QA در صورت نیاز موارد زیر بررسی شوند:

* Header
* Footer
* metadata
* structured data
* favicon / icon
* OG

⸻

16 — PLACEHOLDERS

MediaPlaceholder در implementation فعلی ممکن است در بعضی بخش‌ها وجود داشته باشد.

این component نباید بدون بررسی حذف شود.

بعد از دریافت تصاویر واقعی:

1. تمام usageهای MediaPlaceholder پیدا شوند.
2. هر usage با asset واقعی جایگزین شود.
3. فقط در صورتی که component دیگر هیچ مصرفی نداشت حذف شود.

Current status: WAITING FOR REAL ASSETS.

⸻

17 — PORTFOLIO

منبع پروژه‌ها:

content/projects.ts

فعلاً ۶ پروژه تعریف شده است:

1. پروژه بسته‌بندی
2. چاپ برای برند پوشاک
3. هویت چاپی رستوران
4. اقلام چاپی کافه
5. پروژه سازمانی
6. محصولات تبلیغاتی

تصاویر فعلی تستی هستند و نباید به‌عنوان تصاویر نهایی واقعی تلقی شوند.

Critical Portfolio Rule

Portfolio فقط یک صفحه دارد:

/نمونه-کارها

هیچ route زیرمجموعه‌ای مانند /نمونه-کارها/[slug] وجود ندارد و نباید ساخته شود.

Portfolio cards/projects نباید به صفحات detail مستقل لینک شوند.

تا زمان دریافت محتوای واقعی:

* claim جدید اضافه نشود.
* پروژه ساختگی به‌عنوان پروژه انجام‌شده معرفی نشود.
* فقط ساختار و asset mapping آماده باشد.

⸻

18 — RESPONSIVE / MOBILE

Responsive baseline در implementation فعلی وجود دارد و Mobile QA نهایی در حال انجام است.

Mobile QA باید شامل:

* Header / mobile navigation
* typography
* line breaks فارسی
* section spacing
* button sizing
* horizontal overflow
* image crop
* portfolio grid
* service list
* forms
* footer
* touch targets
* animation / transition performance
* viewportهای مختلف

باشد.

هدف فقط responsive شدن نیست؛ تجربه موبایل باید از نظر hierarchy، spacing و interaction نیز polished باشد.

⸻

19 — UI REFINEMENT

Motion system و visual refinement پایه در implementation فعلی انجام شده است.

مواردی مانند:

* Reveal animations
* Parallax image behavior
* hover states
* arrow interactions
* section transitions
* motion timing
* responsive baseline
* spacing refinement

در صفحات اصلی اعمال شده‌اند.

Current Status

UI Refinement: IN PROGRESS — FINAL POLISH

این مرحله دیگر شامل redesign یا تغییر architecture نیست.

تمرکز باقی‌مانده:

* spacing دقیق نهایی
* typography consistency
* mobile details
* button states
* touch targets
* image crop
* overflow
* transition behavior
* visual consistency بین صفحات
* جزئیات نهایی interaction

⸻

20 — TECHNICAL ARCHITECTURE

Framework:

Next.js 14

React:

18

TypeScript:

5

Tailwind CSS:

3

Export mode:

output: "export"

Trailing slash:

trailingSlash: true

Images:

unoptimized: true

هدف نهایی:

Static Export → cPanel

⸻

21 — CLEANUP / LEGACY

Architecture فعلی تثبیت شده است.

Current Header Path

Header فعلی:

components/header.tsx

توجه: مسیر قدیمی components/Header.tsx یا components/layout/Header.tsx را نباید به‌عنوان مسیر فعلی فرض کرد.

Legacy Blog Route

/مجله → /وبلاگ/

این redirect باید حفظ شود.

Remaining Cleanup

در صورت مشاهده مورد جدید:

* unused components
* unused imports
* stale content
* stale references
* old terminology
* dead routes
* duplicate functionality

بررسی شوند.

مواردی که در QA قبلی تأیید شده‌اند نباید بدون evidence جدید دوباره باز شوند.

⸻

22 — LOCATION / BRAND CLEANUP

Location صحیح:

کرج، ایران

Brand spelling صحیح:

Ayric

فارسی:

آیریک

نباید variationهای اشتباه مانند:

* AIRIK
* iric
* Tehran / تهران

در metadata، visible content، structured data یا content نهایی باقی بمانند؛ مگر در redirect/legacy context که آگاهانه و ضروری باشد.

⸻

23 — SEO / GEO

SEO/GEO architecture بررسی شده است.

موارد بررسی‌شده:

* title
* description
* canonical
* Open Graph
* Twitter card
* robots
* sitemap
* JSON-LD
* Organization
* WebSite
* Breadcrumb
* FAQ schema
* internal linking
* service/entity signals
* local signals for Karaj
* image metadata
* alt text

Current Status

SEO / GEO QA: DONE

دو مورد غیرمسدودکننده:

* OG image می‌تواند پس از دریافت asset نهایی تکمیل شود.
* در صورت نیاز می‌توان relative URLهای برخی structured dataها را در final asset/domain QA بررسی کرد.

اطلاعاتی که از مجموعه تأیید نشده‌اند نباید در structured data یا metadata اختراع شوند.

⸻

24 — SITEMAP / ROBOTS

Sitemap باید شامل:

* Home
* Services
* Business Solutions
* Portfolio
* Blog
* About
* Contact
* Quote
* 21 service pages
* 3 blog articles

باشد.

Business Solutions فقط یک URL دارد:

/برای-کسب-و-کارها

Robots باید sitemap اصلی را معرفی کند.

Current Status

Sitemap / Robots QA: DONE

⸻

25 — FORMS

فرم استعلام قیمت implementation اولیه و frontend connection دارد.

Current

app/استعلام-قیمت/QuoteForm.tsx

↓

/api/quote.php

Completed

* frontend form structure
* real service options
* removal of unrelated legacy options
* removal of file upload
* frontend → PHP field mapping

Remaining

* production Telegram integration
* private configuration
* cPanel deployment
* success UX test
* failure UX test
* final mobile QA

⸻

26 — FINAL QA ORDER

از وضعیت فعلی، کار باید به ترتیب زیر ادامه پیدا کند:

STEP 1 — Technical QA

STATUS: DONE

* architecture
* routes
* imports
* legacy files
* stale references
* Header
* Footer
* sitemap
* robots
* metadata
* build

⸻

STEP 2 — Content QA

STATUS: DONE

صفحات بررسی‌شده:

* Home
* Services
* Service pages
* Business Solutions
* Portfolio
* Blog
* About
* Contact
* Quote

موارد بررسی‌شده:

* Ayric / آیریک
* کرج
* terminology
* claims
* CTA consistency
* contact information

⸻

STEP 3 — Brand / Color System

STATUS: DONE

* final palette
* approved green system
* backgrounds
* buttons
* accents
* states
* removal of old palette from updated pages

Blog palette is intentionally NON-BLOCKING / DONE.

⸻

STEP 4 — UI Refinement

STATUS: IN PROGRESS — FINAL POLISH

* spacing
* typography
* hierarchy
* transitions
* hover/active states
* border/radius
* visual consistency
* interaction polish

⸻

STEP 5 — Mobile Optimization

STATUS: IN PROGRESS

* mobile header
* mobile navigation
* typography
* spacing
* forms
* images
* cards/grids
* footer
* touch targets
* overflow
* animation performance

⸻

STEP 6 — Final Assets

STATUS: WAITING FOR REAL ASSETS

When real assets are supplied:

1. Logo
2. Hero
3. Silk
4. DTF
5. Portfolio
6. Blog
7. OG
8. alt text
9. crop
10. responsive behavior
11. remove remaining placeholders where appropriate

⸻

STEP 7 — Quote / Telegram Production

STATUS: DEFERRED UNTIL HOSTING

Frontend connection is complete.

Waiting for production environment:

* cPanel
* PHP production configuration
* private Telegram credentials/config
* real message test
* success/failure test

Important: real Telegram credentials must never be placed in repository or chat.

⸻

STEP 8 — Final SEO / GEO

STATUS: DONE / FINAL VERIFICATION AFTER PRODUCTION

Final production check:

* titles
* descriptions
* canonical
* OG
* Twitter
* JSON-LD
* sitemap
* robots
* internal links
* local signals
* image metadata

⸻

STEP 9 — BUILD

STATUS: DONE

npm run build

Production build was confirmed by the user to complete successfully.

Do not reopen Build QA unless new code changes introduce evidence of a problem.

⸻

STEP 10 — PRODUCTION

STATUS: PENDING HOSTING

After final approval:

1. Static files
2. cPanel
3. Domain
4. SSL
5. PHP endpoint
6. Telegram
7. Production test
8. Mobile test
9. Link check
10. SEO check

⸻

27 — CURRENT STATUS

DONE / STABLE

* Next.js architecture
* Static export setup
* RTL / Persian structure
* Main routes
* Header structure
* Header real logo integration
* Footer
* Footer real logo integration
* Services architecture
* 21 actual services verified from content/services.ts
* Featured services: چاپ سیلک + چاپ DTF
* Home structure
* Business Solutions single hub at /برای-کسب-و-کارها
* Portfolio data structure
* Portfolio single page at /نمونه-کارها
* No portfolio detail routes
* Blog architecture
* 3 blog articles
* Blog article structure
* Blog images wired to existing test assets
* SEO foundations
* Sitemap
* Robots
* Quote form frontend structure
* Quote form real service options
* Quote form frontend → PHP connection
* PHP Telegram endpoint architecture
* File upload removal
* Test image file structure
* Final brand palette
* Home visual/motion refinement
* Services index visual refinement
* Individual service page refinement
* Portfolio page refinement
* About page refinement
* Contact page refinement
* Quote page refinement
* Business Solutions page refinement
* Motion components
* Mobile CSS baseline
* Technical QA
* Internal routes / links QA
* Service Labels QA
* Content / Contact QA
* SEO / GEO QA
* Build verification

⸻

28 — LATEST QA UPDATE — SEPTEMBER 15, 2026

This section overrides older checklist wording wherever a task was previously described as unfinished.

Confirmed

* Technical QA: DONE
* Internal Routes / Links QA: DONE
* Service Labels QA: DONE
* Content / Contact QA: DONE
* QuoteForm frontend connection QA: DONE
* SEO / GEO QA: DONE
* Build verification: DONE
* Blog palette: DONE / NON-BLOCKING
* Header: DONE
* Footer: DONE
* Main page visual refinement: DONE / FINAL POLISH REMAINS
* Mobile baseline CSS: DONE
* Media placeholders/test assets: WAITING FOR REAL ASSETS

Important Rules

Completed QA must not be repeated unless new evidence or a new code change creates a reason to inspect it again.

⸻

29 — CURRENT WORKING STATE

The project is currently in:

FINAL PAGE-BY-PAGE UI REFINEMENT + MOBILE QA

This is not a redesign.

The architecture, route structure, content model, service model, portfolio model and SEO foundations are already established.

Pages already reviewed in the current pass

1. Home
2. Header
3. Footer
4. Services index
5. Individual service template
6. Portfolio
7. About
8. Contact
9. Quote
10. Business Solutions

Next focus

The next work should focus on:

1. final UI refinement
2. mobile QA
3. current QuoteForm UI/UX inspection when the actual component is available
4. real asset integration when supplied
5. production Telegram/cPanel setup after hosting

⸻

30 — REMAINING WORK

Active

1. UI Refinement — Final Polish
    * spacing
    * typography
    * interaction details
    * image crop
    * visual consistency
2. Mobile QA
    * header
    * navigation
    * forms
    * touch targets
    * overflow
    * image behavior
    * footer
    * animation performance

Waiting

3. Real Assets
    * final photography
    * portfolio images
    * blog images
    * OG
    * final asset replacement
4. Production
    * cPanel
    * PHP configuration
    * Telegram Bot
    * private credentials
    * production testing

⸻

31 — DEFERRED / WAITING

Quote / Telegram

Waiting for hosting/cPanel.

Bot token and Admin Chat ID must remain private.

Media

Waiting for real final assets.

Current test images are intentional.

OG

Can be finalized when the final brand asset is supplied.

⸻

32 — DO NOT DO

* Do not ask the user to resend files that are already available in the project/context.
* Do not invent missing routes.
* Do not create portfolio detail pages.
* Do not create /نمونه-کارها/[slug].
* Do not turn بسته‌بندی into a standalone service.
* Do not turn چاپ روی محصول into a standalone service.
* Do not change current contact information unless explicitly requested.
* Do not replace intentional test images with invented/stock images.
* Do not introduce colors outside the approved five-color palette without explicit approval.
* Do not reintroduce the old beige/red/brown palette.
* Do not redesign the architecture from scratch.
* Do not add a price calculator.
* Do not add file upload to QuoteForm without a new decision.
* Do not put Telegram credentials in repository or chat.
* Do not reopen completed QA items without new evidence.
* Do not treat the blog palette as an outstanding blocker.
* Do not assume old ZIP snapshots override the latest confirmed implementation.
* When replacing a file, provide the COMPLETE file, not a partial snippet or instructions to insert code somewhere.

⸻

33 — CURRENT REALISTIC PROJECT STATUS

The project is not being redesigned from scratch.

Core architecture, routes, content model and SEO foundations are in place.

The current phase is:

Final UI refinement → Mobile QA → Real Asset Integration → Production Setup

Confirmed Rules

* Ayric / آیریک is the canonical brand naming.
* Location: کرج، ایران.
* Current approved palette ONLY:
    * #FFFFFF — White / Background
    * #E4F0CC — Soft Green
    * #8BC53D — Primary Green
    * #022F12 — Dark Green
    * #021408 — Deepest Green
* White text may be used inside dark/green buttons where appropriate.
* Portfolio is one page only: /نمونه-کارها.
* Portfolio items are not individually linked.
* Test images are intentional and remain until real assets are supplied.
* Current contact information must remain unchanged.
* Real assets will replace test assets later while preserving filename/path stability where possible.
* QuoteForm frontend connection is complete.
* Telegram production configuration is deferred until hosting/cPanel is available.
* Blog palette is DONE / NON-BLOCKING.
* Build is DONE and should not be reopened without new evidence.
* Completed QA should not be repeated without a concrete reason.

Latest Intended Implementation

The following files/components represent the latest intended implementation from the current QA pass:

* components/ui/Button.tsx
* components/ui/MediaPlaceholder.tsx
* components/ui/IconArrow.tsx
* components/ui/Reveal.tsx
* components/ui/ParallaxImage.tsx
* components/home/Hero.tsx
* components/home/ServicesPreview.tsx
* components/home/ProjectsPreview.tsx
* components/home/WhyAyric.tsx
* components/home/FinalCta.tsx
* components/cards/ProjectCard.tsx
* components/header.tsx
* app/خدمات/page.tsx
* app/خدمات/[slug]/page.tsx
* app/نمونه-کارها/page.tsx
* app/درباره-ما/page.tsx
* app/تماس-با-ما/page.tsx
* app/استعلام-قیمت/page.tsx
* app/استعلام-قیمت/QuoteForm.tsx
* app/برای-کسب-و-کارها/page.tsx
* app/وبلاگ/page.tsx
* app/وبلاگ/[slug]/page.tsx
* app/globals.css
* tailwind.config.ts

Important Note About Uploaded Snapshots

Older uploaded ZIP snapshots may contain implementations that predate the latest QA changes.

When there is a conflict between an older snapshot and this specification, the latest confirmed implementation and rules in this document take precedence unless the actual current repository is inspected and provides newer evidence.

⸻

END OF PROJECT SPEC
