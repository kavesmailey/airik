AYRIC — PROJECT SPECIFICATION

Master Product, Design, Development & SEO Specification

Project: Ayric
Persian: آیریک
Repository: kavesmailey/airik
Current Phase: Phase 7 — SEO / GEO / FEO
Current Sub-Phase: Service Expansion → Technical SEO Audit
Phase Status: In Progress
Deployment Target: cPanel Shared Hosting
Preferred Production Architecture: Static Export

⸻

01 — PROJECT OVERVIEW

Ayric is a professional printing and production website for businesses, brands and individuals looking for reliable, high-quality printing services.

The website should position Ayric as more than a conventional printing shop.

The experience should communicate:

* Quality
* Precision
* Reliability
* Production expertise
* Material knowledge
* Professional service
* Clear communication

The website should feel contemporary, minimal, confident and premium.

It should avoid the visual language of generic printing-shop websites.

⸻

02 — BRAND NAME

Correct English Name

Ayric

Correct Persian Name

آیریک

These spellings are mandatory.

Never use:

* Airik
* Ayrik
* آریک

Language Rule

Persian:

آیریک

English:

Ayric

⸻

03 — PROJECT PRINCIPLES

01 — Clarity

Visitors should immediately understand:

* What Ayric does
* What services are available
* Who Ayric works with
* How to request a quote
* How to contact Ayric

02 — Visual Quality

Photography, typography, layout and spacing should communicate production quality.

03 — Simplicity

Do not add features simply because other websites have them.

Every component should have a purpose.

04 — Real Content

Use real Ayric information and real project imagery whenever available.

Never fabricate project facts.

05 — Maintainability

Prefer simple architecture over unnecessary technical complexity.

06 — SEO Without Visual Compromise

SEO content must feel native to the experience.

Do not add keyword-stuffed sections merely for search engines.

07 — Deployment Simplicity

The final website should be deployable on ordinary cPanel shared hosting without requiring a VPS.

⸻

04 — TECHNOLOGY STACK

Current stack:

* Next.js
* React
* TypeScript
* Tailwind CSS
* Next.js App Router
* File-based content architecture

Primary structure:

app/
components/
content/
lib/
public/
PROJECT_SPEC.md

Existing architecture must be reused wherever possible.

⸻

05 — GOLDEN RULE: REPOSITORY FIRST

The repository is the source of truth.

Before writing or changing code:

1. Inspect the repository.
2. Inspect the relevant route.
3. Inspect existing components.
4. Inspect existing content files.
5. Inspect existing utilities.
6. Inspect existing SEO implementation.
7. Inspect existing assets.
8. Determine what is already implemented.
9. Identify only what is missing.
10. Modify existing implementation when appropriate.

NEVER:

* Create a duplicate page
* Create a duplicate route
* Create a duplicate component
* Create a second content model
* Rewrite an existing system without a reason
* Assume a file does not exist
* Assume a feature is missing without checking Git
* Create a new architecture when the current architecture can support the requirement

Rule:

Existing
→ Inspect
→ Reuse
→ Extend
→ Improve

Not:

Assume
→ Recreate
→ Duplicate

⸻

06 — CURRENT REPOSITORY STRUCTURE

The repository contains:

app/
components/
content/
lib/
public/
PROJECT_SPEC.md

Major content sources:

content/
├── articles.tsx
├── blog.ts
├── business.ts
├── categories.ts
├── faq.ts
├── projects.ts
├── services.ts
└── site.ts

Major component areas:

components/
├── cards/
├── forms/
├── home/
├── layout/
├── seo/
└── ui/

SEO-related utilities include:

components/seo/JsonLd.tsx
lib/seo.ts
app/robots.ts
app/sitemap.ts

⸻

07 — CONTENT ARCHITECTURE

Ayric uses file-based content.

Content must remain separated from presentation.

Primary content sources:

content/services.ts
content/projects.ts
content/business.ts
content/articles.tsx
content/blog.ts
content/categories.ts
content/faq.ts
content/site.ts

Do not introduce a CMS unless explicitly requested.

Do not introduce a database for core website content.

⸻

08 — ROUTE ARCHITECTURE

Major routes include:

/
/استعلام-قیمت
/برای-کسب-و-کارها
/برای-کسب-و-کارها/[slug]
/بلاگ
/بلاگ/[slug]
/وبلاگ
/وبلاگ/[slug]
/تماس-با-ما
/خدمات
/خدمات/[slug]
/درباره-ما
/درباره-آیریک
/مجله
/نمونه-کارها

IMPORTANT:

The repository currently contains duplicate/legacy route architectures.

These must be consolidated during the Technical SEO phase.

Before creating any route:

1. Search app/.
2. Search navigation.
3. Search links.
4. Search sitemap.
5. Search redirects.
6. Search content references.
7. Search Git history if necessary.

Never create an alternative route without checking the existing architecture.

⸻

09 — PORTFOLIO ARCHITECTURE

STATUS: COMPLETE

Ayric’s portfolio is intentionally a single-page portfolio.

Canonical route:

/نمونه-کارها

The portfolio is:

* Not a case-study system
* Not a project database
* Not an individual project SEO system

Do not restart or redesign the portfolio unless a concrete bug is found.

⸻

10 — INDIVIDUAL PROJECT PAGES

STATUS: NOT REQUIRED

Do NOT create:

/نمونه-کارها/[slug]

Do not build:

* Individual project pages
* Case studies
* Project narratives
* Project-specific SEO pages
* Project detail routes
* Project-specific CTA pages

Existing sitemap implementations may still reference project detail URLs.

These must be removed from the canonical sitemap.

⸻

11 — SERVICES ARCHITECTURE

Canonical service content source:

content/services.ts

Do not create another service data source.

The service model currently includes:

slug
title
shortDescription
fullDescription
aboutText
benefits
suitableFor
applications
keyConsiderations
printingMethods
processSteps
faqs
image
relatedServiceSlugs
meta

Service pages are generated through the existing dynamic route:

/خدمات/[slug]

The existing service-page template should be reused for all services.

Do NOT create individual page files for each service unless technically necessary.

⸻

12 — CURRENT SERVICE CATALOG

The existing service catalog must be retained and expanded.

Existing core services include:

* چاپ سیلک
* چاپ DTF
* چاپ روی لباس
* چاپ روی تیشرت
* چاپ روی پارچه
* چاپ بگ
* چاپ کارتن
* چاپ جعبه پیتزا
* چاپ لیوان کاغذی
* چاپ ظروف گرد

NEW SERVICES TO ADD

The following services are now required:

01 — خدمات ساخت شابلون چاپ سیلک

Suggested slug:

ساخت-شابلون-چاپ-سیلک

02 — توری‌کشی و عکاسی

Suggested slug:

توری-کشی-و-عکاسی

This service should clearly explain its relationship to screen-printing preparation.

03 — خدمات طراحی اختصاصی چاپ سیلک

Suggested slug:

طراحی-اختصاصی-چاپ-سیلک

This should target customers who need artwork specifically prepared for screen printing.

04 — چاپ کیسه پارچه‌ای

Suggested slug:

چاپ-کیسه-پارچه-ای

05 — چاپ نایلون

Suggested slug:

چاپ-نایلون

06 — تولید و چاپ توت‌بگ

Suggested slug:

تولید-و-چاپ-توت-بگ

07 — چاپ لیوان

Suggested slug:

چاپ-لیوان

This must remain distinct from:

چاپ-لیوان-کاغذی

because they represent different search intents/services.

08 — چاپ روی فلز

Suggested slug:

چاپ-روی-فلز

09 — چاپ روی چوب

Suggested slug:

چاپ-روی-چوب

10 — چاپ روی استیل

Suggested slug:

چاپ-روی-استیل

11 — چاپ روی پلکسی

Suggested slug:

چاپ-روی-پلکسی

⸻

13 — SERVICE EXPANSION RULES

The new services must NOT be added as simple cards with one-line descriptions.

Every new service should use the existing full service content model.

Each service should eventually contain:

slug
title
shortDescription
fullDescription
aboutText
benefits
suitableFor
applications
keyConsiderations
printingMethods
processSteps
faqs
image
relatedServiceSlugs
meta

Each new service needs:

* Unique search intent
* Unique title
* Unique meta title
* Unique meta description
* Useful introductory answer
* Practical explanation
* Applications
* Suitable materials where known
* Design considerations
* Pricing factors
* Process
* FAQ
* Related services
* Quote CTA

Do not duplicate generic text across all services.

⸻

14 — SERVICE SEO STATUS

STATUS: SUBSTANTIALLY IMPLEMENTED + EXPANSION IN PROGRESS

The existing service architecture already includes:

* Page-specific Metadata
* Canonical URLs
* Open Graph
* Twitter metadata
* Service Schema
* WebPage Schema
* Breadcrumb Schema
* FAQ Schema
* Quick Answer / FEO content
* Search-intent-oriented copy
* Internal links
* Related services
* Service-specific FAQ
* Service-specific applications
* Service-specific printing methods

The current service data model is strong enough to support the new service catalog.

CURRENT SERVICE TASK

Add the 11 new services to:

content/services.ts

Then verify:

generateStaticParams()
getServiceBySlug()
getRelatedServices()

continue to work correctly.

Do not create a second service system.

⸻

15 — SERVICE INDEX

Canonical route:

/خدمات

The service index should include:

* Metadata
* Canonical
* Open Graph
* Organization Schema
* Breadcrumb Schema
* ItemList Schema
* Quick Answer / FEO section
* Internal links to all canonical services
* Method comparison content
* Business-oriented CTA
* Internal linking

After adding the new services, verify that all services are represented.

The service index must not become visually overcrowded.

Use grouping/categories where useful.

Potential logical groupings:

چاپ روی پوشاک و پارچه
چاپ سیلک و آماده‌سازی
چاپ روی بسته‌بندی و محصولات
چاپ روی متریال‌های سخت
چاپ بگ و محصولات پارچه‌ای

Grouping must not create duplicate SEO pages unless there is a real search intent.

⸻

16 — BUSINESS PAGES

Business architecture:

/برای-کسب-و-کارها
/برای-کسب-و-کارها/[slug]

Content source:

content/business.ts

Business pages communicate:

* B2B printing
* Repeat production
* Business applications
* Production consistency
* Printing solutions
* Workflow
* Relevant services
* FAQ

STATUS:

PARTIALLY SEO OPTIMIZED

Remaining:

* Canonical normalization
* Open Graph normalization
* Structured Data
* Breadcrumb Schema
* WebPage Schema
* Internal-link refinement
* GEO signals
* Search-intent refinement

⸻

17 — BLOG ARCHITECTURE

The repository currently contains two blog systems:

/بلاگ
/وبلاگ

and two content sources:

content/articles.tsx
content/blog.ts

The current SEO-focused direction favors:

/وبلاگ
/وبلاگ/[slug]

The duplicate legacy system must eventually be consolidated.

Preferred final architecture:

/وبلاگ
/وبلاگ/[slug]

Potential legacy handling:

/بلاگ → redirect → /وبلاگ
/بلاگ/[slug] → redirect → /وبلاگ/[slug]

Do not maintain two parallel blog systems.

⸻

18 — BLOG SEO STATUS

STATUS: SUBSTANTIALLY IMPLEMENTED

Existing work includes:

* Page Metadata
* Canonical
* Open Graph
* CollectionPage / ItemList Schema
* Breadcrumb Schema
* FAQ Schema
* Quick Answer content
* Editorial SEO content
* Internal linking
* Article detail Metadata
* Article Schema
* Breadcrumb Schema
* Related articles
* CTA links
* Search-intent-oriented content

Remaining:

* Canonical blog consolidation
* Article schema normalization
* Image architecture
* Author/publisher identity
* Internal-link strategy
* Topic clusters
* Pillar/supporting article structure
* Final content quality audit

⸻

19 — ABOUT / CONTACT / QUOTE

Canonical routes:

/درباره-ما
/تماس-با-ما
/استعلام-قیمت

Legacy route:

/درباره-آیریک

The legacy About architecture must not create duplicate indexable content.

/مجله must also be evaluated as a legacy/redirect route.

⸻

20 — QUOTE PAGE

Canonical route:

/استعلام-قیمت

Current implementation includes:

* Metadata
* Canonical
* Open Graph
* WebPage Schema
* Service Schema
* Breadcrumb Schema
* FAQ Schema
* Quick Answer / FEO content
* Search-intent-oriented copy
* Quote form
* File upload
* FAQ
* Conversion CTA

STATUS:

SUBSTANTIALLY IMPLEMENTED

Important:

The current form submission implementation is not yet a real production backend.

lib/submitInquiry.ts currently simulates successful submission.

Production submission must be implemented later.

⸻

21 — CONTACT PAGE

Canonical route:

/تماس-با-ما

Current implementation includes:

* Metadata
* Canonical
* Open Graph
* ContactPage Schema
* Organization information
* Breadcrumb Schema
* Quick Answer / GEO content
* Contact information
* Inquiry form
* Quote CTA
* FAQ

STATUS:

SUBSTANTIALLY IMPLEMENTED

Remaining:

* Final NAP data
* GEO information
* LocalBusiness Schema where appropriate
* Final domain normalization

Never invent missing contact information.

⸻

22 — HOMEPAGE

Homepage:

/

Visual/product work is considered substantially complete.

Do not redesign the homepage as part of the current SEO phase.

SEO work still requires:

* Dedicated metadata verification
* Canonical verification
* Open Graph
* WebSite Schema
* Organization relationship
* FEO answer
* Stronger service linking
* Search-intent alignment
* Heading hierarchy audit

⸻

23 — SEO ARCHITECTURE

Current SEO-related files:

components/seo/JsonLd.tsx
lib/seo.ts
app/robots.ts
app/sitemap.ts

Some pages also contain inline JSON-LD.

Technical SEO phase must determine:

* Which utilities should remain centralized
* Which page-specific schemas should remain inline
* Whether duplicate implementations exist
* Whether schemas are accurate
* Whether URLs are absolute
* Whether schema content matches visible page content

Do not perform a blind global rewrite.

⸻

24 — METADATA SYSTEM

Every canonical indexable page should have deliberate:

* Title
* Description
* Canonical
* Open Graph title
* Open Graph description
* OG image where appropriate
* Robots behavior
* Language consistency

Avoid relying on generic root metadata where page-specific intent matters.

⸻

25 — DOMAIN / URL NORMALIZATION

There is currently a production-domain inconsistency that must be resolved.

The repository contains references to:

https://airik-xi.vercel.app

while the GitHub repository About currently references:

https://airik-coral.vercel.app

The final production URL has not yet been normalized.

REQUIRED

Create one canonical source:

siteConfig.siteUrl

or a single environment variable.

All of the following must use the same canonical domain:

* Metadata
* Canonical URLs
* Open Graph
* JSON-LD
* Sitemap
* Robots
* Internal absolute URLs
* Search Console configuration

Do not hard-code multiple production domains.

⸻

26 — SITEMAP

Current sitemap architecture requires technical cleanup.

Potential overlapping implementations include:

app/sitemap.ts
app/sitemap.xml

Final implementation must have one authoritative sitemap.

Sitemap should contain:

* Homepage
* /خدمات
* All canonical service pages
* Canonical business pages
* Canonical blog index
* Canonical article pages
* /استعلام-قیمت
* /تماس-با-ما
* /درباره-ما
* /نمونه-کارها

Sitemap must NOT contain:

/نمونه-کارها/[slug]

Sitemap must NOT contain deprecated duplicate blog URLs.

Sitemap must NOT contain redirect-only URLs.

Sitemap must use the final canonical domain.

⸻

27 — ROBOTS

Current implementation:

app/robots.ts

There may also be a static robots implementation.

Technical SEO audit must determine which is authoritative.

Final robots behavior must:

* Allow public indexable pages
* Avoid blocking important resources
* Reference the canonical sitemap
* Use the final production domain

⸻

28 — STRUCTURED DATA

Structured data currently exists for several page types, including:

* Organization
* LocalBusiness
* Service
* Article
* BreadcrumbList
* FAQPage
* WebPage

The final implementation should form a coherent schema graph.

Conceptually:

WebSite
   ↓
Organization / LocalBusiness
   ↓
WebPage
   ↓
Service / Article

Breadcrumbs and FAQs should support the relevant page.

Never fabricate:

* Reviews
* Ratings
* Prices
* Locations
* Employees
* Clients
* Awards
* Testimonials
* Certifications

⸻

29 — FEO / AI SEARCH

FEO means structuring content so search engines and AI answer systems can understand and extract useful answers.

Current pattern:

Quick Answer
↓
Direct answer
↓
Supporting explanation
↓
FAQ
↓
Internal link
↓
CTA

This pattern has already been implemented on several core pages.

Important service pages should answer:

* What is this service?
* What is this method?
* Who is it suitable for?
* What materials can be used?
* What affects price?
* What should the customer provide?
* Which alternative method may be better?

Do not keyword-stuff pages.

⸻

30 — GEO / LOCAL SEO

GEO must be based only on confirmed real business information.

Potential signals:

* Business identity
* Country
* City
* Service area
* Contact information
* Business type
* Services
* Organization relationship

Current siteConfig may contain fields such as:

country
serviceArea
phone
email
address
city
workingHours

Empty or unknown fields must remain empty.

Never invent an address, phone number, city, working hours or service area.

⸻

31 — INTERNAL LINKING

Primary:

Homepage
   ↓
Services
   ↓
Service Detail
   ↓
Quote

Secondary:

Blog
   ↓
Article
   ↓
Service
   ↓
Quote

Business:

Business Solution
   ↓
Relevant Services
   ↓
Quote

Portfolio:

Portfolio
   ↓
Relevant Services

With the expanded service catalog, internal linking must be updated so related services naturally reference each other.

Examples:

چاپ سیلک
→ ساخت شابلون چاپ سیلک
→ توری‌کشی و عکاسی
→ طراحی اختصاصی چاپ سیلک
چاپ بگ
→ چاپ کیسه پارچه‌ای
→ تولید و چاپ توت‌بگ
چاپ لیوان کاغذی
→ چاپ لیوان
چاپ روی فلز
→ چاپ روی استیل
چاپ روی چوب
→ چاپ روی پلکسی

These relationships should be used only where technically and commercially accurate.

⸻

32 — IMAGE SEO

Real Ayric production imagery has priority.

Before adding images:

1. Inspect public/.
2. Inspect public/images/.
3. Map images to real content.
4. Use meaningful filenames.
5. Use meaningful alt text.
6. Avoid decorative alt text for informative images.
7. Do not fabricate project imagery.

Future optimization:

* Proper dimensions
* Modern formats
* Compression
* Lazy loading
* Eager loading for important hero imagery
* Alt text
* OG imagery
* Image performance

⸻

33 — CONTENT SEO

Current service/content expansion creates new search-intent opportunities.

Priority service topics now include:

Screen Printing

* چاپ سیلک
* ساخت شابلون چاپ سیلک
* توری کشی و عکاسی
* طراحی اختصاصی چاپ سیلک

Clothing / Fabric

* چاپ روی لباس
* چاپ روی تیشرت
* چاپ روی پارچه
* چاپ DTF

Bags

* چاپ بگ
* چاپ کیسه پارچه‌ای
* تولید و چاپ توت‌بگ

Packaging / Cups

* چاپ کارتن
* چاپ جعبه پیتزا
* چاپ لیوان کاغذی
* چاپ لیوان

Hard Materials

* چاپ روی فلز
* چاپ روی چوب
* چاپ روی استیل
* چاپ روی پلکسی

Each service should have a distinct purpose.

Do not create pages merely because a keyword exists.

⸻

34 — BLOG CONTENT STRATEGY

The blog should eventually form topical clusters.

Example:

Pillar:
راهنمای انتخاب روش چاپ
Supporting:
چاپ سیلک چیست؟
چاپ DTF چیست؟
تفاوت سیلک و DTF
چاپ دیجیتال یا افست

Screen-printing cluster:

Pillar:
راهنمای کامل چاپ سیلک
Supporting:
چاپ سیلک چیست؟
ساخت شابلون چاپ سیلک
توری‌کشی و عکاسی
طراحی فایل برای چاپ سیلک
چاپ سیلک روی لباس
تفاوت سیلک و DTF

Bag cluster:

Pillar:
راهنمای چاپ و تولید بگ
Supporting:
چاپ بگ
چاپ کیسه پارچه‌ای
تولید و چاپ توت‌بگ
انتخاب پارچه برای بگ

Hard-material cluster:

Pillar:
راهنمای چاپ روی متریال‌های سخت
Supporting:
چاپ روی فلز
چاپ روی استیل
چاپ روی چوب
چاپ روی پلکسی

Internal links should connect these clusters naturally.

⸻

35 — ACCESSIBILITY

Maintain:

* Semantic HTML
* Proper heading hierarchy
* Accessible buttons
* Accessible links
* Meaningful alt text
* Keyboard usability
* Adequate contrast
* Correct language attributes

Do not sacrifice accessibility for SEO.

⸻

36 — PERFORMANCE

Prefer:

* Static content
* Server Components
* Minimal JavaScript
* Optimized images
* Simple CSS transitions
* Reusable components

Avoid unnecessary dependencies.

⸻

37 — STATIC EXPORT

Final deployment target:

GitHub
   ↓
Next.js Build
   ↓
Static Export
   ↓
out/
   ↓
cPanel
   ↓
public_html/

Target:

output: "export"

This has not yet been finalized.

It belongs to Phase 8.

Do not implement deployment-specific architecture before Phase 7 SEO cleanup is stable.

⸻

38 — STATIC COMPATIBILITY

Future implementation should remain compatible with static export.

Avoid:

* Persistent server processes
* Runtime databases for core content
* Server-side file writes
* VPS-only infrastructure
* Runtime-only rendering
* Persistent backend requirements

Prefer:

* Build-time content
* Static generation
* Client-side interaction where necessary
* External form services
* Lightweight APIs where compatible

⸻

39 — FORMS

Current form architecture:

components/forms/
├── FileUploadInput.tsx
├── FormField.tsx
├── PrintingInquiryForm.tsx
└── QuoteForm.tsx

Current forms exist but production persistence is not finalized.

lib/submitInquiry.ts currently simulates submission.

Production options may include:

* Email
* Telegram
* Automation endpoint
* Serverless endpoint
* External form service

Final choice belongs to the technical/conversion phase.

⸻

40 — DESIGN DIRECTION

Visual language:

* Minimal
* Editorial
* Premium
* Contemporary
* Calm
* Confident
* Typography-led
* Image-led

Avoid:

* Generic printing-shop aesthetics
* Discount marketplace aesthetics
* Promotional badge overload
* Excessive shadows
* Excessive UI decoration
* Template-like layouts

⸻

41 — COLOR SYSTEM

Primary background:

#F7F5F1

Supporting neutral:

#E7E2D4

Supporting light tone:

#D0D5EC

Black may be used functionally for:

* Typography
* Buttons
* High contrast sections

It should not dominate the entire visual identity.

⸻

42 — TYPOGRAPHY

Current fonts are stored under:

public/fonts/

Current implementation must be inspected before changing typography.

Do not introduce paid fonts unnecessarily.

⸻

43 — RESPONSIVE DESIGN

Every new implementation must work across:

* Mobile
* Tablet
* Desktop
* Large desktop

Important areas:

* Navigation
* Typography
* Forms
* Images
* CTAs
* Service grids
* Blog
* Service pages

⸻

44 — CURRENT PHASE STATUS

PHASE 1 — FOUNDATION

DONE

Project foundation and Next.js architecture established.

⸻

PHASE 2 — CORE DESIGN SYSTEM

DONE

Core visual language, typography, spacing and reusable UI architecture established.

⸻

PHASE 3 — CORE PAGES

DONE / SUBSTANTIALLY DONE

Primary website pages and content architecture implemented.

⸻

PHASE 4 — SERVICES / BUSINESS / CONTENT

SUBSTANTIALLY DONE — SERVICE EXPANSION IN PROGRESS

Existing services and business architecture are implemented.

The service system now needs expansion with 11 additional services.

⸻

PHASE 5 — FORMS / CONVERSION

SUBSTANTIALLY DONE

Quote/contact flows and conversion-oriented pages implemented.

Production form backend remains pending.

⸻

PHASE 6 — PORTFOLIO

DONE

Portfolio is complete.

Canonical route:

/نمونه-کارها

Do not restart portfolio work.

⸻

PHASE 7 — SEO / GEO / FEO

IN PROGRESS

A significant portion of SEO work has already been implemented.

DONE / SUBSTANTIALLY IMPLEMENTED

* Service metadata
* Service page SEO
* Service FEO
* Service FAQ
* Service structured data
* Canonical foundations
* Open Graph foundations
* Article SEO foundations
* Blog SEO foundations
* Internal linking foundations
* Quick Answer sections
* Semantic heading improvements
* FAQ content improvements
* Reusable JSON-LD infrastructure
* Sitemap/robots foundations

CURRENTLY IN PROGRESS

01 — SERVICE EXPANSION

Add:

1. ساخت شابلون چاپ سیلک
2. توری‌کشی و عکاسی
3. طراحی اختصاصی چاپ سیلک
4. چاپ کیسه پارچه‌ای
5. چاپ نایلون
6. تولید و چاپ توت‌بگ
7. چاپ لیوان
8. چاپ روی فلز
9. چاپ روی چوب
10. چاپ روی استیل
11. چاپ روی پلکسی

02 — TECHNICAL SEO

* Canonical domain
* Absolute URLs
* Sitemap cleanup
* Robots cleanup
* Duplicate route cleanup
* Blog architecture consolidation
* Schema consistency
* Internal linking
* Image SEO
* GEO
* Homepage SEO
* Business SEO
* Final SEO validation

⸻

45 — NEXT IMMEDIATE TASK

The immediate sequence is:

1. Expand content/services.ts
        ↓
2. Add all 11 new services
        ↓
3. Verify service dynamic routing
        ↓
4. Verify related-service links
        ↓
5. Verify service index
        ↓
6. Audit service metadata/schema
        ↓
7. Canonical domain normalization
        ↓
8. Sitemap cleanup
        ↓
9. Robots cleanup
        ↓
10. Duplicate route cleanup
        ↓
11. Blog architecture consolidation
        ↓
12. Homepage SEO
        ↓
13. Business SEO
        ↓
14. Schema consistency
        ↓
15. Internal linking
        ↓
16. Image SEO
        ↓
17. GEO
        ↓
18. Final FEO / AI-search refinement
        ↓
19. Final SEO validation

Do NOT skip the service expansion.

Do NOT restart portfolio work.

Do NOT redesign the whole website.

⸻

46 — PHASE 8 — TECHNICAL HARDENING & DEPLOYMENT

After Phase 7 is stable:

* output: "export"
* Static export validation
* Build validation
* Broken route detection
* 404 validation
* Asset path validation
* Image compatibility
* Form strategy
* Environment variables
* Production domain
* cPanel deployment
* public_html
* Final production test

⸻

47 — PHASE 9 — SEARCH CONSOLE & PRODUCTION SEO

After deployment:

* Google Search Console
* Sitemap submission
* Indexing inspection
* Canonical inspection
* Coverage review
* Core Web Vitals
* Search queries
* CTR
* Ranking baseline
* GEO visibility
* AI-search visibility

SEO is not considered finished at deployment.

⸻

48 — INFORMATION ACCURACY RULE

Never invent:

* Client names
* Production methods
* Materials
* Quantities
* Project dates
* Testimonials
* Reviews
* Ratings
* Business relationships
* Physical addresses
* Phone numbers
* Awards
* Certifications
* Production capacities
* Equipment specifications

Unknown information must remain unknown.

If a technical detail is not confirmed, write the content in a way that remains accurate without inventing a specification.

⸻

49 — DEVELOPMENT RULE

Before every new task:

READ PROJECT_SPEC.md
        ↓
INSPECT REPOSITORY
        ↓
IDENTIFY CURRENT PHASE
        ↓
INSPECT EXISTING IMPLEMENTATION
        ↓
IDENTIFY WHAT IS ALREADY DONE
        ↓
IDENTIFY ONLY WHAT IS MISSING
        ↓
IMPLEMENT
        ↓
VALIDATE
        ↓
UPDATE PROJECT_SPEC.md

Never assume the project has returned to an earlier phase.

Never rebuild completed systems.

Never create duplicate architecture.

⸻

50 — CURRENT PROJECT POSITION

CURRENT PHASE

Phase 7 — SEO / GEO / FEO

CURRENT SUB-PHASE

Service Expansion → Technical SEO Audit & Architecture Cleanup

COMPLETED

Portfolio: 100%

Core service architecture: DONE

Core service SEO/FEO: SUBSTANTIALLY DONE

Quote page SEO: SUBSTANTIALLY DONE

Blog SEO foundation: SUBSTANTIALLY DONE

Core SEO infrastructure: SUBSTANTIALLY DONE

CURRENTLY IN PROGRESS

Service catalog expansion with 11 new services.

NOT YET COMPLETE

* Technical SEO normalization
* Canonical architecture
* Sitemap/robots cleanup
* Duplicate route cleanup
* Blog route consolidation
* Homepage SEO
* Business SEO
* Image SEO
* GEO
* Final FEO refinement
* Final SEO validation
* Production form backend
* Static-export hardening
* cPanel deployment

NEXT ACTION

First complete the service catalog expansion in content/services.ts.

Then continue Phase 7 Technical SEO Audit:

Canonical Domain
→ Sitemap
→ Robots
→ Duplicate Routes
→ Blog Architecture
→ Schema
→ Internal Links
→ Image SEO
→ GEO
→ Final SEO Audit

Do not restart completed work.
