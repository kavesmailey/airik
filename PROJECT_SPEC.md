AYRIC — PROJECT SPECIFICATION
Master Product, Design & Development Specification

Project: Ayric
Persian: آیریک
Current Phase: Phase 6 — Portfolio
Deployment Target: cPanel Shared Hosting
VPS: Not required

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

Airik
Ayrik
آریک

Language Rule

When writing Persian copy:

آیریک

When writing English copy:

Ayric

⸻

03 — PROJECT PRINCIPLES

The website should follow these principles:

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

06 — Deployment Simplicity

The final website should be deployable on ordinary cPanel shared hosting without requiring a VPS.

⸻

04 — TECHNOLOGY STACK

Current project stack:

* Next.js
* React
* TypeScript
* Tailwind CSS
* Next.js App Router
* File-based content architecture

Primary project structure:

app/
components/
content/
lib/
public/
PROJECT_SPEC.md

The existing architecture should be reused wherever possible.

⸻

05 — GOLDEN RULE: REPOSITORY FIRST

The repository is the source of truth.

Before writing or changing code:

1. Inspect the repository.
2. Inspect the relevant route.
3. Inspect existing components.
4. Inspect existing content files.
5. Inspect existing utilities.
6. Inspect existing assets.
7. Determine what is already implemented.
8. Identify only what is missing.
9. Modify existing implementation when appropriate.

NEVER:

* Create a duplicate page
* Create a duplicate route
* Create a second component that already exists
* Create a second content model
* Rewrite an existing system without a reason
* Assume a file does not exist
* Assume a feature is missing without checking Git
* Invent a new architecture when the current architecture can support the requirement

Rule

Existing → Inspect → Reuse → Extend → Improve

Not:

Assume → Recreate → Duplicate

⸻

06 — CURRENT REPOSITORY STRUCTURE

The repository already contains the following major areas:

app/
components/
content/
lib/
public/
PROJECT_SPEC.md

The content directory includes:

content/
├── articles.tsx
├── business.ts
├── categories.ts
├── faq.ts
├── projects.ts
├── services.ts
└── site.ts

The component architecture includes areas such as:

components/
├── cards/
├── forms/
├── home/
├── layout/
├── seo/
└── ui/

These structures must be inspected before adding new files.

⸻

07 — CONTENT ARCHITECTURE

Ayric uses a file-based content system.

Content should remain separated from presentation.

Current content sources include:

content/projects.ts
content/services.ts
content/articles.tsx
content/business.ts
content/categories.ts
content/faq.ts
content/site.ts

Do not introduce a CMS unless explicitly requested.

The current website does not require a database for its core content.

⸻

08 — ROUTE ARCHITECTURE

Existing routes include areas such as:

/استعلام-قیمت
/برای-کسب-و-کارها
/بلاگ
/تماس-با-ما
/خدمات
/درباره-آیریک
/درباره-ما
/مجله
/نمونه-کارها
/وبلاگ

SEO-related files also exist, including:

app/robots.ts
app/sitemap.ts

Route rule

Before creating a route:

1. Search app/.
2. Search existing navigation.
3. Search existing links.
4. Search Git history if necessary.

Never create an alternative route simply because its name seems more appropriate.

⸻

09 — PORTFOLIO ARCHITECTURE

IMPORTANT

Ayric’s portfolio is intentionally a single-page portfolio.

The portfolio is not a case-study system.

The portfolio is not a project database.

The portfolio is a curated visual presentation of Ayric’s work.

Main route

/نمونه-کارها

This is the canonical portfolio route.

⸻

10 — INDIVIDUAL PROJECT PAGES

Individual project pages are NOT REQUIRED.

Do not create:

/نمونه-کارها/[slug]

Do not build individual project detail pages.

Do not build:

* Case Studies
* Project narratives
* Project-specific SEO pages
* Project detail routes
* Long-form project stories
* Challenge / Solution / Result systems
* Individual project CTA pages

If an existing [slug] route exists in the repository, it should be reviewed as part of Phase 6 and removed or deprecated if it is no longer needed.

Do not keep unnecessary architecture merely because it already exists.

⸻

11 — PORTFOLIO PROJECT DATA

The existing source is:

content/projects.ts

This file already exists and must be inspected before modification.

The project data model should remain lightweight.

Preferred structure:

Project
├── title
├── category
├── description
└── image / images

Optional fields may include:

client
year
service
printingMethod

but only when they are useful and the information is available.

Do NOT turn the project model into a case-study schema.

Do NOT add unnecessary fields such as:

challenge
solution
process
result
productionStory
materialsStory
strategy
outcome

unless a future project requirement explicitly calls for them.

⸻

12 — PORTFOLIO CONTENT RULES

Each portfolio item should answer three basic questions:

What is it?

Project title.

What kind of work is it?

Category / service.

What does it look like?

Project imagery.

The description should be short and useful.

Portfolio copy should not become unnecessarily long.

The imagery should carry a significant part of the communication.

⸻

13 — PORTFOLIO VISUAL DIRECTION

The portfolio should prioritize:

* Large imagery
* Strong typography
* Editorial composition
* Clear hierarchy
* Generous whitespace
* Visual rhythm
* High-quality project presentation

Possible layout techniques:

* asymmetric grids
* featured projects
* varying image ratios
* large/small image rhythm
* category grouping
* editorial spacing

Avoid:

* Generic card grids everywhere
* Excessive borders
* Excessive shadows
* Unnecessary UI decoration
* Stock-photo aesthetics
* Overly complicated interactions

⸻

14 — PORTFOLIO INTERACTION

Projects may use lightweight interactions:

* Hover image transitions
* Subtle image scaling
* Image reveals
* Category labels
* Smooth transitions

Interactions must remain lightweight.

Do not introduce unnecessary JavaScript.

Do not introduce heavy animation libraries unless there is a clear reason.

The portfolio must remain fast.

⸻

15 — PORTFOLIO FILTERING

Filtering is optional.

Only implement filtering if the number of projects makes it genuinely useful.

Potential filters may include:

همه
بسته‌بندی
پوشاک
تبلیغاتی
سازمانی
...

The actual categories must come from the existing project/content architecture.

Do not create arbitrary categories just for the UI.

⸻

16 — PROJECT IMAGES

Real project photography has priority.

Before adding any image:

1. Inspect public/.
2. Inspect public/images/.
3. Identify existing assets.
4. Map assets to actual projects.
5. Reuse existing assets wherever possible.

Do not use stock images and present them as Ayric projects.

If an image is missing:

* use a deliberate temporary placeholder if necessary
* do not fabricate the project
* replace it with the real image when available

⸻

17 — PROJECT INFORMATION ACCURACY

Never invent:

* Client names
* Production methods
* Materials
* Quantities
* Project dates
* Results
* Testimonials
* Business relationships
* Project history

If information is unknown, keep the copy general.

Example:

Instead of inventing:

Printed 5,000 premium boxes for X company.

use a neutral description if the facts are unavailable.

⸻

18 — SERVICES

The canonical service content is:

content/services.ts

Do not create another service data source.

Known service areas include services such as:

* چاپ سیلک
* چاپ روی لباس
* چاپ روی تیشرت
* چاپ روی پارچه
* چاپ DTF
* چاپ بگ
* چاپ کارتن
* چاپ جعبه پیتزا
* چاپ لیوان کاغذی
* چاپ ظروف گرد

The exact current service list must always be read from:

content/services.ts

Do not assume this list is final.

⸻

19 — PROJECT ↔ SERVICE RELATIONSHIP

Projects may reference relevant services.

For example:

Project
   ↓
Service

This relationship can support:

* Category labels
* Filtering
* Internal linking
* Contextual navigation

However:

Do not duplicate full service descriptions inside portfolio projects.

The service page remains the canonical source for service information.

⸻

20 — HOMEPAGE

The homepage already exists.

Before changing it:

1. Inspect app/page.tsx.
2. Inspect existing homepage components.
3. Inspect current content sources.
4. Modify only what is required.

Do not rebuild the homepage from scratch unless explicitly required.

⸻

21 — SERVICE PAGES

Service pages already have an existing architecture.

Before creating or modifying service pages:

content/services.ts
app/خدمات/
components/

must be inspected.

Existing service architecture should be reused.

⸻

22 — BUSINESS PAGES

Business-oriented pages already exist.

Before modifying them:

content/business.ts

and the corresponding routes/components must be inspected.

Do not create duplicate business landing pages.

⸻

23 — BLOG

The website already contains blog/article architecture.

Relevant content includes:

content/articles.tsx

and existing blog-related routes.

Do not create another blog system.

Do not create duplicate article architecture.

Blog and SEO improvements belong to the relevant later phase unless an existing bug requires immediate correction.

⸻

24 — ABOUT / CONTACT / QUOTE

Existing pages include:

/درباره-آیریک
/درباره-ما
/تماس-با-ما
/استعلام-قیمت

Before modifying any of these:

* inspect the existing implementation
* determine which route is canonical
* avoid creating duplicates
* preserve existing working architecture

⸻

25 — FORM ARCHITECTURE

The quote/inquiry form currently exists.

The current form submission implementation is not a real backend persistence system.

The final website should not require a dedicated VPS backend just to receive inquiries.

The future production form may use an external endpoint/service such as:

* Email
* Telegram
* Automation endpoint
* Serverless API
* Lightweight external service

The final implementation should be decided during technical/conversion work.

⸻

26 — DEPLOYMENT TARGET

Final hosting

cPanel Shared Hosting

The project should not require:

VPS
Docker
Persistent Node.js process
Custom application server

unless explicitly approved later.

⸻

27 — STATIC EXPORT STRATEGY

The preferred production architecture is:

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

The project should eventually use:

output: "export"

in the appropriate Next.js configuration.

This should be implemented during the technical hardening/deployment phase.

However:

All new features from Phase 6 onward must remain compatible with static export.

⸻

28 — STATIC COMPATIBILITY RULES

New code should avoid dependencies on:

* Persistent server processes
* Runtime databases
* Server-side file writes
* Runtime-only rendering
* VPS-specific infrastructure
* Server-only APIs unless explicitly supported by the final architecture

Prefer:

* Build-time data
* Static content
* Static generation
* Client-side interaction only where necessary
* External services for forms

⸻

29 — SERVER / CLIENT RULES

Prefer Server Components.

Do not add:

"use client"

unless client-side functionality is actually required.

Use Client Components for:

* interactive state
* browser APIs
* complex client-side interactions

Do not convert entire pages to Client Components unnecessarily.

This is especially important because the final deployment is intended to be static.

⸻

30 — DESIGN DIRECTION

The visual language should be:

* Minimal
* Editorial
* Premium
* Contemporary
* Calm
* Confident
* Typography-led
* Image-led

The website should feel like a modern professional production company.

It should NOT look like:

* A generic local printing shop
* A discount marketplace
* A template website
* A catalogue filled with promotional badges
* A noisy e-commerce interface

⸻

31 — COLOR SYSTEM

Primary background:

#F7F5F1

Supporting neutral:

#E7E2D4

Supporting light tone:

#D0D5EC

The visual system should remain restrained.

Black can be used functionally for:

* Typography
* Buttons
* High-contrast sections

but should not dominate the overall visual identity.

⸻

32 — TYPOGRAPHY

Before changing typography:

1. Inspect current font implementation.
2. Inspect:

public/fonts/

3. Inspect Tailwind configuration.
4. Reuse existing fonts where appropriate.

Do not introduce paid fonts unnecessarily.

Typography should support the editorial and premium character of the website.

⸻

33 — RESPONSIVE DESIGN

Every new UI must work across:

* Mobile
* Tablet
* Desktop
* Large desktop

Do not design desktop-first and treat mobile as an afterthought.

Important areas:

* Navigation
* Typography
* Portfolio grid
* Images
* Forms
* CTA sections
* Spacing

⸻

34 — ACCESSIBILITY

New implementation should maintain:

* Semantic HTML
* Proper heading hierarchy
* Accessible buttons
* Accessible links
* Meaningful alt text
* Keyboard usability
* Adequate contrast

Do not sacrifice accessibility for visual effects.

⸻

35 — PERFORMANCE

The website should remain lightweight.

Prefer:

* Optimized images
* Static content
* Minimal JavaScript
* Reusable components
* Server Components
* Simple CSS transitions

Avoid unnecessary dependencies.

⸻

36 — SEO / GEO

SEO and GEO are important but should not compromise the visual experience.

The website should eventually communicate clearly:

* What Ayric does
* What services Ayric provides
* Who Ayric serves
* Where Ayric operates
* How to request a quote
* How to contact Ayric

Target search intent should include:

* Printing services
* Specific printing methods
* Product printing
* Packaging printing
* Business printing
* Local printing queries
* Long-tail commercial queries

⸻

37 — INTERNAL LINKING

Internal linking should connect:

Homepage
   ↓
Services
   ↓
Service Pages
Homepage
   ↓
Portfolio
   ↓
Services

Blog content should link to relevant service pages when contextually appropriate.

Do not create unnecessary links simply for SEO.

⸻

38 — SEO FILES

Existing SEO architecture includes:

app/robots.ts
app/sitemap.ts

Before changing these:

* inspect existing implementation
* preserve working behavior
* update rather than duplicate

⸻

39 — DEVELOPMENT PHASES

Phase 0 — Baseline & Safety

Status

Complete

Responsibilities:

* Repository inspection
* Architecture understanding
* Existing implementation audit
* Build awareness
* Establishing deployment constraints

⸻

Phase 1 — Content Architecture

Status

Complete

Responsibilities:

* Project content
* Service content
* Business content
* Article content
* FAQ
* Site information

⸻

Phase 2 — Homepage

Status

Complete / Existing implementation

Do not rebuild unnecessarily.

⸻

Phase 3 — Service Pages

Status

Complete / Existing implementation

Reuse the existing architecture.

⸻

Phase 4 — Business Pages

Status

Complete / Existing implementation

Reuse the existing architecture.

⸻

Phase 5 — Blog / SEO Content

Status

Complete / Existing implementation

Existing blog/article/SEO architecture should be preserved.

⸻

PHASE 6 — PORTFOLIO

CURRENT PHASE

Objective

Create a strong, curated, visually compelling portfolio page.

The portfolio is:

ONE PAGE

It is NOT:

Case Study System

It is NOT:

Individual Project Pages

⸻

Phase 6 Tasks

6.1 Audit Existing Project Data

Inspect:

content/projects.ts

Determine:

* Existing projects
* Existing fields
* Existing descriptions
* Existing image references
* Existing categories
* Existing service relationships

⸻

6.2 Audit Existing Portfolio Page

Inspect:

app/نمونه-کارها/page.tsx

Determine:

* Current layout
* Current components
* Existing placeholders
* Existing interactions
* Existing responsive behavior

Modify the existing implementation rather than rebuilding unnecessarily.

⸻

6.3 Audit Existing Assets

Inspect:

public/images/

Map available images to actual portfolio projects.

⸻

6.4 Finalize Lightweight Project Model

Keep only information useful for the portfolio.

Target:

title
category
description
image/images

Optional:

client
year
service
printingMethod

Only when useful and verified.

⸻

6.5 Improve Portfolio Layout

Create a strong visual presentation using:

* Large imagery
* Editorial grid
* Typography
* Spacing
* Project hierarchy
* Featured work where appropriate

⸻

6.6 Remove Placeholder Presentation

Where real project information/assets exist:

Replace:

PROJECT IMAGE
PROJECT TITLE
GENERIC DESCRIPTION

with real content.

⸻

6.7 Lightweight Interactions

Add only useful interactions.

Examples:

* Hover
* Image transition
* Category indication
* Subtle movement

Do not over-engineer.

⸻

6.8 Remove Unnecessary Individual Project Architecture

Review any existing:

/نمونه-کارها/[slug]

implementation.

Since individual project pages are not part of the final architecture:

* remove unnecessary navigation to them
* remove unnecessary dependencies
* remove unused components
* remove unused project-detail code where safe

Do not break the rest of the site.

⸻

6.9 Static Compatibility

Ensure the portfolio works with:

Next.js Static Export

No portfolio functionality should require a server.

⸻

PHASE 7 — VISUAL REFINEMENT

After Phase 6:

* Typography refinement
* Spacing
* Responsive design
* Animation
* Image treatment
* Interaction polish
* Accessibility
* Visual consistency

⸻

PHASE 8 — SEO / GEO

Responsibilities:

* Metadata
* Structured data
* Canonical URLs
* Internal linking
* Service SEO
* Local SEO
* GEO
* AI discoverability
* Sitemap
* Robots
* Semantic HTML

⸻

PHASE 9 — TECHNICAL HARDENING & DEPLOYMENT

Objective

Prepare the website for:

cPanel Shared Hosting

without VPS.

Tasks:

9.1 Static Export

Configure:

output: "export"

when the project is ready.

9.2 Build

Run:

npm run build

9.3 Verify Output

Confirm:

out/

is generated correctly.

9.4 Route Testing

Test:

* Homepage
* Services
* Portfolio
* Blog
* Contact
* Quote
* About
* Business pages

9.5 Asset Testing

Verify:

* Images
* Fonts
* CSS
* JavaScript
* Icons

9.6 Form Testing

Connect the inquiry form to the selected external submission system.

9.7 cPanel Deployment

Expected deployment:

Build
↓
out/
↓
Upload contents
↓
public_html/

⸻

PHASE 10 — CONVERSION & FINAL POLISH

Responsibilities:

* Quote CTA
* Contact flow
* Inquiry UX
* Trust signals
* Conversion improvements
* Mobile QA
* Final visual QA
* Performance
* Accessibility
* Production testing

⸻

40 — CURRENT PROJECT STATUS

Phase 0  ██████████  Complete
Phase 1  ██████████  Complete
Phase 2  ██████████  Complete
Phase 3  ██████████  Complete
Phase 4  ██████████  Complete
Phase 5  ██████████  Complete
Phase 6  ░░░░░░░░░░  CURRENT
Phase 7  ░░░░░░░░░░  Pending
Phase 8  ░░░░░░░░░░  Pending
Phase 9  ░░░░░░░░░░  Pending
Phase 10 ░░░░░░░░░░  Pending

⸻

41 — CURRENT IMMEDIATE TASK

The next task is:

Portfolio Audit

Before writing code:

Step 1

Inspect:

content/projects.ts

Step 2

Inspect:

app/نمونه-کارها/page.tsx

Step 3

Inspect:

public/images/

Step 4

Identify:

* What already exists
* What is incomplete
* What is placeholder
* What can be reused
* What should be removed
* What needs modification

Step 5

Only then modify the portfolio.

⸻

42 — DO NOT DO

From this point forward, do NOT:

* Create individual project pages
* Create Case Studies
* Create project detail routes
* Create a second project data file
* Create duplicate components
* Create duplicate routes
* Invent project information
* Add unnecessary backend infrastructure
* Introduce VPS requirements
* Introduce unnecessary dependencies
* Rewrite working systems without inspection
* Claim build success without actually running the build

⸻

43 — DECISION LOG

Decision 01

Brand name

Correct:

Ayric / آیریک

⸻

Decision 02

Portfolio architecture

Portfolio is a single page.

No individual project pages.

⸻

Decision 03

Case Studies

Case Studies are out of scope.

They are not required for the current Ayric website.

⸻

Decision 04

Project content

Projects need:

* Image
* Title
* Category
* Short description

Optional metadata may be added when useful.

⸻

Decision 05

Hosting

The final website will run on:

cPanel Shared Hosting

No VPS is required for the main website.

⸻

Decision 06

Architecture

The website should be compatible with:

Next.js Static Export

⸻

Decision 07

Backend

The main website should not depend on a persistent server.

Forms may use an external endpoint/service.

⸻

Decision 08

Repository workflow

Before every implementation:

Inspect Git
↓
Understand existing code
↓
Identify missing part
↓
Modify existing implementation
↓
Build/Test
↓
Continue

⸻

44 — MASTER RULE

Do not build what already exists.

Do not create what is not needed.

Do not invent information that is not known.

Do not introduce infrastructure that the final deployment does not require.

Always inspect the repository before writing code.

Ayric’s portfolio is a single-page curated gallery, not a case-study system.

The final website must be deployable on cPanel shared hosting without a VPS.

⸻

45 — NEXT ACTION

Current task:

PHASE 6
↓
Audit content/projects.ts
↓
Audit app/نمونه‌کارها/page.tsx
↓
Audit public/images/
↓
Determine exact missing work
↓
Implement portfolio

No new page should be created until this audit is complete.
