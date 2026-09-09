Ayric — Project Specification

Final Development Status & Launch Roadmap

Version: 2.0
Status: Pre-Launch / Final QA
Brand: Ayric / آیریک
Domain: https://ayricchap.ir
Repository: https://github.com/kavesmailey/airik

⸻

1. Project Overview

Ayric (آیریک) is a professional printing and production website focused on brands, businesses, and organizations.

Positioning

آیریک یک مجموعه تخصصی چاپ برای برندها، کسب‌وکارها و سازمان‌هاست؛ با تمرکز بر چاپ باکیفیت و انتخاب روش مناسب برای هر پروژه.

Core Services

* چاپ سیلک
* چاپ DTF
* چاپ روی لباس و پوشاک
* چاپ روی پارچه
* چاپ روی بگ و توت‌بگ
* چاپ نایلون
* چاپ لیوان
* چاپ روی فلز
* چاپ روی چوب
* چاپ روی استیل
* چاپ روی پلکسی
* خدمات آماده‌سازی چاپ سیلک
* طراحی و آماده‌سازی طرح چاپ

Target Audience

* برندهای پوشاک
* برندهای فشن
* کسب‌وکارهای کوچک و متوسط
* شرکت‌ها
* سازمان‌ها
* آژانس‌های تبلیغاتی
* استارتاپ‌ها
* پروژه‌های برندینگ
* سفارش‌های تبلیغاتی و سازمانی

⸻

2. Technology Stack

Next.js 14.2.15
React 18.3.1
TypeScript 5.5.4
Tailwind CSS 3.4.10
PostCSS
Static Export

Production

Hosting: cPanel Shared Hosting
Output: Static Export
Domain: ayricchap.ir

Current Next.js Configuration

output: "export"
trailingSlash: true
images.unoptimized: true

⸻

3. Core Architecture

The website uses a data-driven architecture.

Services

Service content lives in:

content/services.ts

All service detail pages are generated through:

app/خدمات/[slug]/page.tsx

Do NOT create individual hard-coded service page templates unless specifically required.

⸻

4. Canonical Routes

The final route architecture is:

/
 /استعلام-قیمت
 /برای-کسب-و-کارها
 /برای-کسب-و-کارها/[slug]
 /خدمات
 /خدمات/[slug]
 /نمونه-کارها
 /وبلاگ
 /وبلاگ/[slug]
 /درباره-ما
 /تماس-با-ما

⸻

5. Routes That Must NOT Exist

The following are legacy/duplicate routes.

/بلاگ
/بلاگ/[slug]
/درباره-آیریک
/مجله
/مجله/[slug]

Expected behavior:

/بلاگ → /وبلاگ
/درباره-آیریک → /درباره-ما
/مجله → /وبلاگ

/مجله/[slug] was removed because it was incompatible with the static export architecture.

⸻

6. Portfolio Architecture

Portfolio is intentionally a single page.

Final route:

/نمونه-کارها

There must NOT be:

/نمونه-کارها/[slug]

Individual portfolio project pages are not part of the project scope.

Current Status

Portfolio architecture: ✅ DONE
Portfolio page: ✅ DONE
Portfolio data: ⚠️ Needs final real content/images

⸻

7. Services

The service system is data-driven.

Current file:

content/services.ts

Current service count:

21 services

The service expansion is COMPLETE.

Existing service categories include:

چاپ سیلک
چاپ DTF
چاپ روی لباس
چاپ روی تیشرت
چاپ روی پارچه
چاپ بگ
ساخت شابلون چاپ سیلک
توری‌کشی و عکاسی
طراحی اختصاصی چاپ سیلک
چاپ کیسه پارچه‌ای
چاپ نایلون
تولید و چاپ توت‌بگ
چاپ لیوان
چاپ روی فلز
چاپ روی چوب
چاپ روی استیل
چاپ روی پلکسی
...

The exact final service list is already implemented in:

content/services.ts

Service architecture

app/خدمات/page.tsx
        ↓
content/services.ts
        ↓
app/خدمات/[slug]/page.tsx

Status

Service data: ✅ DONE
21 services: ✅ DONE
Service detail template: ✅ DONE
Metadata: ✅ DONE
Schema: ✅ DONE
FAQ: ✅ DONE
Related services: ✅ DONE
Internal links: ✅ DONE

⸻

8. Business Pages

Routes:

/برای-کسب-و-کارها
/برای-کسب-و-کارها/[slug]

Purpose:

Create landing pages targeting different business/customer types.

Status

Main business page: ✅ DONE
Business detail pages: ✅ DONE
SEO metadata: ✅ DONE
Structured data: ✅ DONE
Internal linking: ✅ DONE

⸻

9. Blog

Final architecture:

content/blog.ts
app/وبلاگ/page.tsx
app/وبلاگ/[slug]/page.tsx

Status

Blog listing: ✅ DONE
Blog detail: ✅ DONE
Metadata: ✅ DONE
Canonical: ✅ DONE
Article schema: ✅ DONE
Breadcrumb: ✅ DONE
Internal links: ✅ DONE

Legacy blog architecture

Old article architecture should not be reintroduced.

Potential obsolete files:

content/articles.tsx
components/cards/ArticleCard.tsx

These should be removed only after confirming they are not used anywhere.

⸻

10. Homepage

Route:

/

Status

Design: ✅ DONE
Responsive structure: ✅ DONE
Content: ✅ DONE
SEO metadata: ✅ DONE
Open Graph: ✅ DONE
Twitter metadata: ✅ DONE
Structured data: ✅ DONE
CTA: ✅ DONE

Do not redesign the homepage unless final QA identifies a real issue.

⸻

11. About Page

Route:

/درباره-ما

Status

Design: ✅ DONE
Content: ✅ DONE
SEO: ✅ DONE
Canonical: ✅ DONE
Breadcrumb: ✅ DONE
Schema: ✅ DONE

⸻

12. Contact Page

Route:

/تماس-با-ما

Status

Design: ✅ DONE
SEO: ✅ DONE
Canonical: ✅ DONE
OG/Twitter: ✅ DONE
ContactPage schema: ✅ DONE
FAQ schema: ✅ DONE

⸻

13. Quote / Inquiry Page

Route:

/استعلام-قیمت

Important Business Rule

There is no online price calculator.

The website does NOT calculate prices automatically.

For price inquiry, the user must:

Call
or
Contact Ayric

Do not introduce a fake “instant price estimate” system.

Current status

UI: ✅ DONE
SEO: ✅ DONE
Form UI: ✅ DONE
Real submission backend: ❌ NOT DONE

The form currently simulates successful submission.

A real submission mechanism still needs to be implemented.

⸻

14. SEO

SEO foundation has already been implemented.

Completed

Global metadata                  ✅
MetadataBase                    ✅
Page titles                     ✅
Meta descriptions               ✅
Canonical URLs                  ✅
Open Graph                      ✅
Twitter metadata                ✅
Sitemap                         ✅
Robots                          ✅
Service metadata                ✅
Blog metadata                   ✅
Article metadata                ✅
Breadcrumb schema               ✅
Service schema                  ✅
Organization schema             ✅
FAQ schema                      ✅
Business page schema            ✅

Important

Do NOT restart SEO from scratch.

Only fix SEO issues if they are discovered during final QA.

⸻

15. Sitemap

Final sitemap:

app/sitemap.ts

The sitemap contains:

Canonical static pages
All services
Business pages
Blog posts

It must NOT contain:

/بلاگ
/مجله
/dynamic portfolio detail pages
other legacy routes

Status

Sitemap: ✅ DONE

⸻

16. Robots

Correct system:

app/robots.ts

Expected configuration:

Allow /
Disallow /api/
/_next/
Sitemap: https://ayricchap.ir/sitemap.xml
Host: https://ayricchap.ir

Important cleanup

There is an old:

app/robots.txt

which references the old domain:

https://iric.print

This is obsolete and should be removed.

Final system must use:

app/robots.ts

only.

⸻

17. JSON-LD

Current component:

components/seo/JsonLd.tsx

Supported schema types:

organization
localBusiness
service
article
breadcrumb
faq

The current implementation is already compiling.

Important

Do not casually introduce:

type="website"
type="webpage"

because the current typed component does not support those types.

Previous build errors were caused by exactly this issue.

⸻

18. Site Configuration

Main configuration:

content/site.ts

Current important values:

Brand:
آیریک
English:
Ayric
Domain:
https://ayricchap.ir
City:
کرج
Country:
ایران

Tagline:

چاپ تخصصی برای برندهایی که کیفیت اهمیت دارد

Do not use:

AIRIK
Airik
Ayrik
آریک

The correct brand spelling is:

Ayric
آیریک

⸻

19. Brand Assets

Standard structure created:

public/images/brand
public/images/services
public/images/portfolio
public/images/blog

Expected assets:

public/images/brand/logo.svg
public/images/brand/logo-mark.svg
public/images/brand/og-image.jpg

Current status

Folders: ✅ DONE
Real logo assets: ❌ NOT FINALIZED
OG image: ❌ NOT FINALIZED
Service images: ❌ NOT FINALIZED
Portfolio images: ❌ NOT FINALIZED
Blog images: ⚠️ Needs final review

Do not invent fake stock images unless explicitly approved.

⸻

20. Visual / Design Direction

The visual language should remain consistent with the current approved design.

Do not redesign the entire website at this stage.

The current priority is:

Finish
Polish
QA
Deploy

not:

Start another redesign

Animations and transitions should remain sophisticated and restrained.

⸻

21. Legacy / Duplicate Files To Clean

The current project still contains some potentially obsolete architecture.

These need verification before deletion:

app/خدمات/چاپ-سیلک/page.tsx
app/robots.txt
components/layout/Header.tsx
components/layout/Footer.tsx
components/cards/ArticleCard.tsx
content/articles.tsx

Known issue

There is a dedicated old:

app/خدمات/چاپ-سیلک/page.tsx

while the correct architecture is:

app/خدمات/[slug]/page.tsx

Since چاپ-سیلک already exists in services.ts, the old dedicated page is duplicate and should be removed.

⸻

22. Footer Content

Current Footer contains outdated location information.

It currently references:

تهران

The current project configuration is:

کرج

This must be corrected during cleanup.

⸻

23. Form Architecture

Current files include:

components/forms/QuoteForm.tsx
components/forms/PrintingInquiryForm.tsx
lib/submitInquiry.ts

There appear to be two generations of form architecture.

Current situation

PrintingInquiryForm is the newer intended flow.

QuoteForm appears to be legacy.

submitInquiry.ts currently simulates successful submission rather than actually storing/sending the inquiry.

Final goal

Choose one final form system.

Then connect it to a real submission mechanism.

Possible implementation options can be evaluated later based on:

* Free tier
* Iran accessibility
* No credit card
* Reliability
* Email / Telegram / database
* Ease of maintenance

Do not build unnecessary infrastructure.

⸻

24. Content / Images

Before launch we need to replace placeholder/null media where applicable.

Services

Service records already contain image paths such as:

/images/services/dtf-printing.jpg

But the actual image files are not all present.

Portfolio

Portfolio data currently contains projects with missing/placeholder images.

This is not an architecture problem.

The final phase is to add actual project visuals.

⸻

25. Static Export

Current configuration:

output: "export"

Static export is the intended production architecture.

Status

Static export configuration: ✅ DONE
Build compatibility: ✅ DONE

Important:

Do not add server-dependent features that break static export unless we deliberately change the architecture.

⸻

26. Deployment

Production target:

cPanel shared hosting

Deployment has not yet been finalized.

Remaining:

Build final
↓
Generate /out
↓
Upload to cPanel
↓
Connect domain
↓
Test production

⸻

27. Final QA

This has not been completed yet.

Final QA must cover:

Routes

Test every canonical route.

Navigation

Check:

Header
Footer
CTA buttons
Service links
Blog links
Business links
Breadcrumbs

Responsive

Test:

Desktop
Tablet
Mobile

Visual

Check:

Typography
Spacing
Overflow
Images
Animations
Hover states
Mobile menus
Forms
Footer

Technical

Check:

404
Broken links
Console errors
Missing assets
Static export
Build

⸻

28. Final Launch Checklist

Phase A — Cleanup

[ ] Remove old dedicated چاپ-سیلک page
[ ] Remove old robots.txt
[ ] Verify/remove duplicate Header
[ ] Verify/remove duplicate Footer
[ ] Verify/remove old ArticleCard
[ ] Verify/remove old articles.tsx
[ ] Fix Tehran → Karaj

⸻

Phase B — Real Content

[ ] Final logo
[ ] Logo mark
[ ] OG image
[ ] Service images
[ ] Portfolio images
[ ] Blog images
[ ] Final copy review

⸻

Phase C — Form

[ ] Choose final inquiry form
[ ] Remove legacy QuoteForm if unused
[ ] Implement real submission
[ ] Test successful submission
[ ] Test failed submission
[ ] Test mobile form

⸻

Phase D — Final QA

[ ] Desktop QA
[ ] Mobile QA
[ ] Tablet QA
[ ] Navigation QA
[ ] Link QA
[ ] Image QA
[ ] Animation QA
[ ] Console QA
[ ] 404 QA
[ ] Metadata spot-check
[ ] Sitemap check
[ ] Robots check

⸻

Phase E — Production

[ ] npm run build
[ ] Verify /out
[ ] Upload to cPanel
[ ] Connect ayricchap.ir
[ ] SSL
[ ] Production test
[ ] Mobile production test
[ ] Final launch

⸻

29. Things That Are DONE — Do Not Rebuild

These are officially considered completed:

✅ Core Next.js architecture
✅ Design system
✅ Homepage
✅ About
✅ Contact
✅ Quote page UI
✅ Services architecture
✅ 21 services
✅ Service detail template
✅ Business pages
✅ Portfolio architecture
✅ Blog architecture
✅ Blog detail
✅ Metadata foundation
✅ Canonical URLs
✅ Open Graph
✅ Twitter metadata
✅ Sitemap
✅ Robots system
✅ JSON-LD foundation
✅ Legacy blog redirect strategy
✅ Static export configuration

Do not restart these phases unless final QA finds a concrete bug.

⸻

30. Current Project Status

                    STATUS
────────────────────────────────────
Design                  ✅ COMPLETE
Architecture            ✅ COMPLETE
Pages                   ✅ COMPLETE
Services                ✅ COMPLETE
Business Pages          ✅ COMPLETE
Blog                    ✅ COMPLETE
Portfolio               ✅ COMPLETE
SEO Foundation          ✅ COMPLETE
Static Export           ✅ COMPLETE
Technical Cleanup       ⚠️ NEXT
Real Assets             ❌ NEXT
Forms                   ❌ NEXT
Final QA                ❌ NEXT
cPanel Deployment       ❌ NEXT
Launch                  ❌ FINAL

⸻

31. NEXT ACTION

Do not go back to SEO.

The next task is:

PHASE 8 — TECHNICAL CLEANUP

Order:

1. Remove duplicate/legacy files
2. Fix outdated content
3. Clean unused architecture
4. Verify there are no broken imports
5. Build
6. Move to real assets

After that:

PHASE 9 — REAL CONTENT & IMAGES
↓
PHASE 10 — REAL INQUIRY FORM
↓
PHASE 11 — FINAL QA
↓
PHASE 12 — cPanel DEPLOYMENT
↓
🚀 LAUNCH.

نقطه شروع بعد از آپدیت Spec:

PHASE 8 — TECHNICAL CLEANUP → Item 1: بررسی و حذف فایل‌های Legacy/Duplicate
