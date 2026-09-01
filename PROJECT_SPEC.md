# AYRIC — PROJECT SPECIFICATION

## Master Product, Design, Development & SEO Specification

**Project:** Ayric  
**Persian:** آیریک  
**Current Phase:** Phase 7 — SEO / GEO / FEO  
**Phase Status:** In Progress  
**Deployment Target:** cPanel Shared Hosting  
**Preferred Production Architecture:** Static Export  
**Repository:** `kavesmailey/airik`

---

# 01 — PROJECT OVERVIEW

Ayric is a professional printing and production website for businesses, brands and individuals looking for reliable, high-quality printing services.

The website should position Ayric as more than a conventional printing shop.

The experience should communicate:

- Quality
- Precision
- Reliability
- Production expertise
- Material knowledge
- Professional service
- Clear communication

The website should feel contemporary, minimal, confident and premium.

It should avoid the visual language of generic printing-shop websites.

---

# 02 — BRAND NAME

## Correct English Name

Ayric

## Correct Persian Name

آیریک

These spellings are mandatory.

Never use:

- Airik
- Ayrik
- آریک

## Language Rule

Persian:

آیریک

English:

Ayric

---

# 03 — PROJECT PRINCIPLES

## 01 — Clarity

Visitors should immediately understand:

- What Ayric does
- What services are available
- Who Ayric works with
- How to request a quote
- How to contact Ayric

## 02 — Visual Quality

Photography, typography, layout and spacing should communicate production quality.

## 03 — Simplicity

Do not add features simply because other websites have them.

Every component should have a purpose.

## 04 — Real Content

Use real Ayric information and real project imagery whenever available.

Never fabricate project facts.

## 05 — Maintainability

Prefer simple architecture over unnecessary technical complexity.

## 06 — SEO Without Visual Compromise

SEO content must feel native to the experience.

Do not add keyword-stuffed sections merely for search engines.

## 07 — Deployment Simplicity

The final website should be deployable on ordinary cPanel shared hosting without requiring a VPS.

---

# 04 — TECHNOLOGY STACK

Current stack:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Next.js App Router
- File-based content architecture

Primary structure:

```text
app/
components/
content/
lib/
public/
PROJECT_SPEC.md
```

Existing architecture must be reused wherever possible.

---

# 05 — GOLDEN RULE: REPOSITORY FIRST

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

- Create a duplicate page
- Create a duplicate route
- Create a duplicate component
- Create a second content model
- Rewrite an existing system without a reason
- Assume a file does not exist
- Assume a feature is missing without checking Git
- Create a new architecture when the current architecture can support the requirement

Rule:

```text
Existing
→ Inspect
→ Reuse
→ Extend
→ Improve
```

Not:

```text
Assume
→ Recreate
→ Duplicate
```

---

# 06 — CURRENT REPOSITORY STRUCTURE

The repository contains:

```text
app/
components/
content/
lib/
public/
PROJECT_SPEC.md
```

Major content sources:

```text
content/
├── articles.tsx
├── blog.ts
├── business.ts
├── categories.ts
├── faq.ts
├── projects.ts
├── services.ts
└── site.ts
```

Major component areas:

```text
components/
├── cards/
├── forms/
├── home/
├── layout/
├── seo/
└── ui/
```

SEO-related utilities currently include:

```text
components/seo/JsonLd.tsx
lib/seo.ts
app/robots.ts
app/sitemap.ts
```

---

# 07 — CONTENT ARCHITECTURE

Ayric uses file-based content.

Content must remain separated from presentation.

Current sources include:

```text
content/services.ts
content/projects.ts
content/business.ts
content/articles.tsx
content/blog.ts
content/categories.ts
content/faq.ts
content/site.ts
```

Do not introduce a CMS unless explicitly requested.

Do not introduce a database for core website content.

---

# 08 — ROUTE ARCHITECTURE

Current major routes include:

```text
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
```

IMPORTANT:

The repository currently contains duplicate/legacy route architectures.

These must be consolidated during Phase 7.

Before creating any route:

1. Search `app/`.
2. Search navigation.
3. Search links.
4. Search sitemap.
5. Search redirects.
6. Search content references.
7. Search Git history if necessary.

Never create an alternative route without checking the existing architecture.

---

# 09 — PORTFOLIO ARCHITECTURE

## STATUS: COMPLETE

Ayric's portfolio is intentionally a single-page portfolio.

Main route:

```text
/نمونه-کارها
```

This is the canonical portfolio route.

The portfolio is:

- Not a case-study system
- Not a project database
- Not an individual project SEO system

---

# 10 — INDIVIDUAL PROJECT PAGES

## STATUS: NOT REQUIRED

Do NOT create:

```text
/نمونه-کارها/[slug]
```

Do not build:

- Individual project pages
- Case studies
- Project narratives
- Project-specific SEO pages
- Project detail routes
- Project-specific CTA pages

IMPORTANT:

Existing sitemap implementations still generate project detail URLs.

This must be removed during Phase 7 Technical SEO cleanup.

---

# 11 — SERVICES

Canonical service content:

```text
content/services.ts
```

Do not create another service data source.

The service model currently includes SEO-related fields:

```text
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
```

The `meta` object is currently used for service-page SEO.

Service pages have already received substantial SEO/FEO work.

---

# 12 — SERVICE SEO STATUS

## STATUS: SUBSTANTIALLY IMPLEMENTED

Service architecture currently includes:

- Page-specific Metadata
- Canonical URLs
- Robots directives
- Open Graph
- Twitter metadata
- Service Schema
- WebPage Schema
- Breadcrumb Schema
- FAQ Schema
- Quick Answer / FEO content
- Search-intent-oriented copy
- Internal links
- Related services
- Service-specific FAQ
- Service-specific applications
- Service-specific printing methods

Remaining work:

- Final domain normalization
- Absolute canonical consistency
- Schema centralization
- Image SEO
- GEO signals
- Final technical audit

---

# 13 — SERVICE INDEX

Canonical route:

```text
/خدمات
```

The service index currently includes:

- Metadata
- Canonical
- Open Graph
- Organization Schema
- Breadcrumb Schema
- ItemList Schema
- Quick Answer / FEO section
- Internal links to individual services
- Method comparison content
- Business-oriented CTA
- Internal linking

STATUS:

## SUBSTANTIALLY IMPLEMENTED

Remaining work belongs to the Phase 7 technical audit.

---

# 14 — BUSINESS PAGES

Business architecture exists under:

```text
/برای-کسب-و-کارها
/برای-کسب-و-کارها/[slug]
```

Content source:

```text
content/business.ts
```

Business pages communicate:

- B2B printing
- Repeat production
- Business applications
- Production consistency
- Printing solutions
- Workflow
- Relevant services
- FAQ

STATUS:

## PARTIALLY SEO OPTIMIZED

Business pages have basic Metadata.

Business detail pages still require:

- Canonical normalization
- Open Graph normalization
- Structured Data
- Breadcrumb Schema
- WebPage Schema
- Internal-link refinement
- GEO signals
- Search-intent refinement

---

# 15 — BLOG ARCHITECTURE

IMPORTANT:

The repository currently contains two blog systems:

```text
/بلاگ
/وبلاگ
```

and two content sources:

```text
content/articles.tsx
content/blog.ts
```

The current SEO-focused implementation exists primarily under:

```text
/وبلاگ
/وبلاگ/[slug]
```

The older architecture exists under:

```text
/بلاگ
/بلاگ/[slug]
```

This duplication must be resolved.

## Required Phase 7 Decision

Choose one canonical blog architecture.

The current SEO implementation strongly favors:

```text
/وبلاگ
/وبلاگ/[slug]
```

If this remains canonical:

- `/بلاگ` should become a legacy redirect
- `/بلاگ/[slug]` should not remain as an independent SEO page
- `content/blog.ts` should become the canonical article source
- `content/articles.tsx` should be deprecated or migrated
- Sitemap should contain only canonical blog URLs

Do not maintain two parallel blog systems.

---

# 16 — BLOG SEO STATUS

## STATUS: SUBSTANTIALLY IMPLEMENTED

Current SEO implementation includes:

- Page Metadata
- Canonical
- Open Graph
- CollectionPage / ItemList Schema
- Breadcrumb Schema
- FAQ Schema
- Quick Answer content
- Editorial SEO content
- Internal linking
- Article detail Metadata
- Article Schema
- Breadcrumb Schema
- Related articles
- CTA links
- Search-intent-oriented content

Remaining:

- Canonical blog architecture consolidation
- Article schema normalization
- Image architecture
- Author/publisher identity
- Internal-link strategy
- Topic clusters
- Pillar/supporting article structure
- Final content quality audit

---

# 17 — ABOUT / CONTACT / QUOTE

Existing canonical routes:

```text
/درباره-ما
/تماس-با-ما
/استعلام-قیمت
```

Legacy route:

```text
/درباره-آیریک
```

The legacy About route currently redirects to:

```text
/درباره-ما
```

`/مجله` also redirects to:

```text
/بلاگ
```

These redirects must be reviewed during canonical architecture cleanup.

---

# 18 — QUOTE PAGE SEO

Canonical route:

```text
/استعلام-قیمت
```

Current implementation includes:

- Metadata
- Canonical
- Open Graph
- WebPage Schema
- Service Schema
- Breadcrumb Schema
- FAQ Schema
- Quick Answer / FEO content
- Search-intent-oriented copy
- Quote form
- File upload
- FAQ content
- Conversion CTA

STATUS:

## SUBSTANTIALLY IMPLEMENTED

Technical form submission remains a separate production concern.

---

# 19 — CONTACT PAGE SEO

Canonical route:

```text
/تماس-با-ما
```

Current implementation includes:

- Metadata
- Canonical
- Open Graph
- ContactPage Schema
- Organization information
- Breadcrumb Schema
- Quick Answer / GEO content
- Contact information
- Inquiry form
- Quote CTA
- FAQ

STATUS:

## SUBSTANTIALLY IMPLEMENTED

Remaining:

- Final NAP data
- GEO information
- LocalBusiness Schema where appropriate
- Final domain normalization

---

# 20 — HOMEPAGE

Homepage route:

```text
/
```

The homepage is complete from a visual/product perspective.

Current homepage contains:

- Hero
- Services
- Principles
- Portfolio preview
- CTA
- Internal links

However:

## SEO STATUS: INCOMPLETE

The homepage currently relies heavily on root-level Metadata.

Phase 7 must add:

- Dedicated homepage Metadata
- Canonical
- Open Graph
- WebSite Schema
- Organization / LocalBusiness relationship where appropriate
- Homepage FEO answer
- Stronger service/internal linking
- Primary search-intent alignment
- Final heading hierarchy audit

Do not redesign the homepage.

---

# 21 — SEO ARCHITECTURE

SEO is now a first-class project layer.

Current SEO-related files:

```text
components/seo/JsonLd.tsx
lib/seo.ts
app/robots.ts
app/sitemap.ts
```

Existing pages also contain inline Schema implementations.

## Current Problem

There are two approaches:

1. Reusable SEO utilities/components
2. Inline page-specific SEO implementations

These should be gradually unified.

Do not rewrite all pages blindly.

First determine which implementation is more reusable, then migrate only where beneficial.

---

# 22 — METADATA SYSTEM

Current root Metadata exists in:

```text
app/layout.tsx
```

Current root metadata includes:

- Default title
- Title template
- Description
- Keywords
- Robots

Some pages additionally define:

- Title
- Description
- Canonical
- Open Graph
- Twitter

## Phase 7 Requirements

Every indexable canonical page should have deliberate:

- Title
- Description
- Canonical
- Open Graph title
- Open Graph description
- Appropriate OG image where available
- Robots behavior
- Language consistency

Do not rely on generic defaults when page-specific metadata is important.

---

# 23 — DOMAIN / URL NORMALIZATION

## CURRENT PROBLEM

The repository still contains:

```text
https://airik-xi.vercel.app
```

in multiple SEO-related places.

Examples include:

```text
content/site.ts
app/robots.ts
app/sitemap.ts
app/sitemap.xml
```

## REQUIRED

There must be one canonical site URL source.

Preferred pattern:

```text
siteConfig.siteUrl
```

or a single environment variable consumed consistently.

Do not hard-code multiple domains.

The final production domain must be decided before final deployment.

---

# 24 — SITEMAP

Current sitemap architecture is not yet final.

There are currently two files:

```text
app/sitemap.ts
app/sitemap.xml
```

These overlap in purpose.

## Required

Use one canonical sitemap implementation.

The sitemap must contain:

- Homepage
- Canonical services index
- Canonical service pages
- Canonical business pages
- Canonical blog index
- Canonical article pages
- Canonical quote page
- Canonical contact page
- Canonical about page
- Canonical portfolio page

The sitemap must NOT contain:

```text
/نمونه-کارها/[slug]
```

because individual portfolio pages are not part of the final architecture.

The sitemap must NOT contain deprecated duplicate blog routes.

---

# 25 — ROBOTS

Current implementation:

```text
app/robots.ts
```

There is also a static:

```text
app/robots.txt
```

These need to be evaluated as part of the same technical cleanup.

There should be one authoritative robots implementation.

Robots must:

- Allow indexable public pages
- Prevent inappropriate technical routes
- Reference the canonical sitemap
- Use the final production domain

Do not block resources required for rendering or indexing.

---

# 26 — STRUCTURED DATA

Structured data currently exists for:

- Organization
- LocalBusiness
- Service
- Article
- BreadcrumbList
- FAQPage
- WebPage

## Phase 7 Goal

Create a coherent schema graph.

Preferred conceptual relationship:

```text
WebSite
   ↓
Organization / LocalBusiness
   ↓
WebPage
   ↓
Service / Article
```

Breadcrumbs and FAQs should support the relevant page.

Do not add schema simply for the sake of adding schema.

Only use structured data that accurately represents visible page content.

Never fabricate:

- Reviews
- Ratings
- Prices
- Locations
- Employees
- Clients
- Awards
- Testimonials

---

# 27 — FEO / AI SEARCH

FEO means optimizing content so search engines and AI answer systems can understand and extract useful answers.

The project has already started implementing FEO.

Current pattern:

```text
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
```

This pattern has already been introduced into several important pages.

## Phase 7 Requirements

Important pages should answer the primary intent quickly.

Examples:

- What is this service?
- What is this printing method?
- Who is it suitable for?
- What affects price?
- Which method should I choose?
- What information is needed for quotation?
- Does Ayric serve businesses?
- Where does Ayric operate?

Avoid keyword stuffing.

Write for humans first.

---

# 28 — GEO

GEO / local search optimization must be implemented carefully.

The website should communicate:

- Business identity
- Country
- City/location when confirmed
- Service area
- Contact information
- Business type
- Services
- Relationship between organization and services

Current `siteConfig` includes:

```text
country
serviceArea
phone
email
address
city
workingHours
```

Several fields are still empty.

Do not invent missing business information.

When real information becomes available, update the canonical source:

```text
content/site.ts
```

Then propagate it through:

- Metadata
- Schema
- Contact page
- Footer
- GEO content

---

# 29 — INTERNAL LINKING

Internal linking is an important Phase 7 task.

Primary relationship:

```text
Homepage
   ↓
Services
   ↓
Service Detail
   ↓
Quote
```

Secondary relationship:

```text
Blog
   ↓
Article
   ↓
Service
   ↓
Quote
```

Business relationship:

```text
Business Solution
   ↓
Relevant Services
   ↓
Quote
```

Portfolio relationship:

```text
Portfolio
   ↓
Services
```

Internal links should use meaningful anchor text.

Avoid excessive repetition.

---

# 30 — IMAGE SEO

Current image architecture is incomplete.

Real project imagery has priority.

Before adding images:

1. Inspect `public/`.
2. Inspect `public/images/`.
3. Map images to real content.
4. Use meaningful filenames.
5. Use meaningful alt text.
6. Avoid decorative alt text for informative images.
7. Do not fabricate project imagery.

Future optimization includes:

- Image dimensions
- Proper formats
- Compression
- Lazy loading where appropriate
- Eager loading for key hero images
- Alt text
- OG images
- Social preview images

---

# 31 — CONTENT SEO

Content must target real search intent.

Priority topics include:

- چاپ سیلک
- چاپ DTF
- چاپ روی لباس
- چاپ روی پارچه
- چاپ بگ
- چاپ بسته‌بندی
- چاپ جعبه
- چاپ محصولات
- انتخاب روش چاپ
- قیمت چاپ
- تیراژ
- آماده‌سازی فایل
- RGB و CMYK
- چاپ دیجیتال
- چاپ افست

Do not create pages merely because a keyword exists.

Each page must have a distinct purpose.

---

# 32 — BLOG CONTENT STRATEGY

The blog should eventually form topical clusters.

Example:

```text
Pillar:
راهنمای انتخاب روش چاپ

Supporting:
چاپ سیلک چیست؟
چاپ DTF چیست؟
تفاوت سیلک و DTF
چاپ دیجیتال یا افست
```

Another cluster:

```text
Pillar:
راهنمای چاپ روی لباس

Supporting:
چاپ روی پارچه
چاپ سیلک روی لباس
چاپ DTF
آماده‌سازی فایل لباس
```

Another:

```text
Pillar:
راهنمای چاپ بسته‌بندی

Supporting:
چاپ جعبه
چاپ جعبه پیتزا
چاپ لیوان کاغذی
انتخاب متریال بسته‌بندی
```

Internal links should connect these clusters naturally.

---

# 33 — ACCESSIBILITY

Maintain:

- Semantic HTML
- Proper heading hierarchy
- Accessible buttons
- Accessible links
- Meaningful alt text
- Keyboard usability
- Adequate contrast
- Correct language attributes

Do not sacrifice accessibility for SEO or visual effects.

---

# 34 — PERFORMANCE

The website should remain lightweight.

Prefer:

- Static content
- Server Components
- Minimal JavaScript
- Optimized images
- Simple CSS transitions
- Reusable components

Avoid unnecessary dependencies.

---

# 35 — STATIC EXPORT

Final production architecture:

```text
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
```

Target configuration:

```text
output: "export"
```

This has NOT been finalized yet.

It belongs to:

## Phase 8 — Technical Hardening & Deployment

Do not prematurely implement deployment-specific changes while SEO architecture is still being normalized.

---

# 36 — STATIC COMPATIBILITY

All future features must remain compatible with static export.

Avoid:

- Persistent server processes
- Runtime databases
- Server-side file writes
- VPS-only infrastructure
- Runtime-only rendering
- Persistent backend requirements

Prefer:

- Build-time content
- Static generation
- Client-side interaction only where necessary
- External form services
- Lightweight APIs only when compatible with final deployment

---

# 37 — FORMS

Current forms include:

```text
components/forms/
├── FileUploadInput.tsx
├── FormField.tsx
├── PrintingInquiryForm.tsx
└── QuoteForm.tsx
```

The current form architecture exists but production persistence is not yet finalized.

The final solution should not require a dedicated VPS merely to receive inquiries.

Potential production solutions:

- Email
- Telegram
- Automation endpoint
- Serverless endpoint
- External form service

Final decision belongs to technical/conversion phase.

---

# 38 — DESIGN DIRECTION

Visual language:

- Minimal
- Editorial
- Premium
- Contemporary
- Calm
- Confident
- Typography-led
- Image-led

Avoid:

- Generic printing-shop aesthetics
- Discount marketplace aesthetics
- Promotional badge overload
- Excessive shadows
- Excessive UI decoration
- Template-like layouts

---

# 39 — COLOR SYSTEM

Primary background:

```text
#F7F5F1
```

Supporting neutral:

```text
#E7E2D4
```

Supporting light tone:

```text
#D0D5EC
```

Black may be used functionally for:

- Typography
- Buttons
- High contrast sections

It should not dominate the entire visual identity.

---

# 40 — TYPOGRAPHY

Current fonts are stored under:

```text
public/fonts/
```

Current font family includes Lahzeh weights.

Before changing typography:

1. Inspect existing font files.
2. Inspect `globals.css`.
3. Inspect Tailwind configuration.
4. Reuse existing implementation.

Do not introduce paid fonts unnecessarily.

---

# 41 — RESPONSIVE DESIGN

Every new implementation must work across:

- Mobile
- Tablet
- Desktop
- Large desktop

Important areas:

- Navigation
- Typography
- Forms
- Images
- CTAs
- Tables/lists
- Blog
- Service pages

---

# 42 — CURRENT PHASE STATUS

# PHASE 1 — Foundation

## DONE

Project foundation and Next.js architecture established.

---

# PHASE 2 — Core Design System

## DONE

Core visual language, typography, spacing and reusable UI architecture established.

---

# PHASE 3 — Core Pages

## DONE

Primary website pages and content architecture implemented.

---

# PHASE 4 — Services / Business / Content

## DONE

Services and business-oriented architecture implemented.

---

# PHASE 5 — Forms / Conversion

## SUBSTANTIALLY DONE

Quote/contact flows and conversion-oriented pages implemented.

Production form backend remains a later technical decision.

---

# PHASE 6 — Portfolio

## DONE

Portfolio is complete.

Canonical route:

```text
/نمونه-کارها
```

No individual project pages are required.

---

# PHASE 7 — SEO / GEO / FEO

## IN PROGRESS

A significant portion of SEO work has already been implemented.

### DONE / SUBSTANTIALLY IMPLEMENTED

- Page Metadata on several core routes
- Canonical URLs on several core routes
- Open Graph on several core routes
- Twitter metadata on service pages
- Service Schema
- Article Schema
- FAQ Schema
- Breadcrumb Schema
- WebPage Schema
- Organization Schema
- LocalBusiness Schema utility
- Quick Answer sections
- FEO-oriented content
- Search-intent-oriented service content
- SEO service metadata
- Blog SEO structure
- Article SEO structure
- Internal linking foundations
- Robots implementation
- Sitemap implementation
- SEO utility
- Reusable JSON-LD component
- Semantic heading improvements
- FAQ content improvements

### CURRENTLY REMAINING

#### 01 — Canonical Architecture

- Finalize canonical domain
- Normalize absolute URLs
- Resolve duplicate routes
- Resolve duplicate blog architecture
- Resolve legacy redirects

#### 02 — Sitemap Cleanup

- Keep one sitemap implementation
- Remove project detail URLs
- Remove duplicate blog URLs
- Include all canonical indexable pages
- Normalize domain

#### 03 — Robots Cleanup

- Keep one authoritative implementation
- Normalize sitemap URL
- Verify indexing behavior

#### 04 — Homepage SEO

- Dedicated Metadata
- Canonical
- WebSite Schema
- Organization relationship
- FEO content
- Internal linking

#### 05 — Business SEO

- Canonical
- OG
- WebPage Schema
- Breadcrumb
- Business-specific structured data
- GEO
- Internal links

#### 06 — Blog Consolidation

Choose one canonical architecture.

Preferred current direction:

```text
/وبلاگ
/وبلاگ/[slug]
```

Then migrate/deprecate:

```text
/بلاگ
/بلاگ/[slug]
```

#### 07 — SEO Architecture Cleanup

Evaluate:

```text
components/seo/JsonLd.tsx
lib/seo.ts
inline JSON-LD
```

Centralize only where it improves maintainability.

#### 08 — Image SEO

- Real imagery
- Alt text
- Dimensions
- Formats
- OG images
- Performance

#### 09 — GEO

- Final business identity
- NAP
- Service area
- LocalBusiness
- Organization
- Location signals

#### 10 — Content SEO

- Keyword/search intent mapping
- Topic clusters
- Internal links
- Article hierarchy
- Service/article relationships

---

# 43 — NEXT IMMEDIATE TASK

The next task is NOT:

- Portfolio
- New portfolio pages
- New visual redesign
- New case studies

The next task is:

# SEO TECHNICAL AUDIT

Order:

```text
1. Canonical domain
        ↓
2. Sitemap duplication
        ↓
3. Robots duplication
        ↓
4. Duplicate routes
        ↓
5. Blog architecture
        ↓
6. Homepage metadata
        ↓
7. Business SEO
        ↓
8. Schema consistency
        ↓
9. Internal linking
        ↓
10. Image SEO
        ↓
11. GEO
        ↓
12. FEO / AI Search refinement
        ↓
13. Final SEO validation
```

Do not skip directly to deployment.

---

# 44 — PHASE 8 — TECHNICAL HARDENING & DEPLOYMENT

This phase begins only after Phase 7 SEO is stable.

Tasks:

- `output: "export"`
- Static export validation
- Build validation
- Broken route detection
- 404 validation
- Asset path validation
- Image compatibility
- Form strategy
- Environment variables
- Production domain
- cPanel deployment
- `public_html`
- Final production test

---

# 45 — PHASE 9 — SEARCH CONSOLE & PRODUCTION SEO

After deployment:

- Google Search Console
- Sitemap submission
- Indexing inspection
- Canonical inspection
- Coverage review
- Core Web Vitals
- Search queries
- CTR
- Ranking baseline
- GEO visibility
- AI-search visibility

Do not treat SEO as finished at deployment.

---

# 46 — INFORMATION ACCURACY RULE

Never invent:

- Client names
- Production methods
- Materials
- Quantities
- Project dates
- Testimonials
- Reviews
- Ratings
- Business relationships
- Physical addresses
- Phone numbers
- Awards
- Certifications

Unknown information must remain unknown.

---

# 47 — FINAL DEVELOPMENT RULE

Before every new task:

```text
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
```

Never assume the project has returned to an earlier phase.

Never rebuild completed systems.

Never create duplicate architecture.

---

# 48 — CURRENT PROJECT POSITION

## CURRENT PHASE

**Phase 7 — SEO / GEO / FEO**

## CURRENT SUB-PHASE

**Technical SEO Audit & Architecture Cleanup**

## COMPLETED

Portfolio: **100%**

SEO/FEO foundation: **substantially implemented**

Core service SEO: **substantially implemented**

Blog SEO: **substantially implemented but architecture duplicated**

## NOT YET COMPLETE

Technical SEO normalization

Canonical architecture

Sitemap/robots cleanup

Duplicate route cleanup

Homepage SEO

Business SEO

Image SEO

GEO

Final FEO refinement

SEO validation

## NEXT ACTION

**Continue Phase 7 with Technical SEO Audit — starting with canonical domain + sitemap/robots + duplicate route architecture.**
