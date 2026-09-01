AYRIC — PROJECT SPECIFICATION

Master Development & Implementation Guide

این فایل مرجع اصلی پروژه است.

قبل از هر تغییر در کد، ابتدا این فایل و ساختار واقعی Repository بررسی شود.
هیچ فایل یا صفحه‌ای نباید بدون بررسی implementation موجود از صفر ساخته یا بازنویسی شود.

Current Phase: Phase 6 — Portfolio / Case Studies

⸻

1. Project Overview

Project: Ayric / آیریک

Ayric is a professional printing and production website focused on helping brands and businesses turn their ideas into high-quality physical outputs.

The website should position Ayric as more than a traditional printing shop.

The brand should communicate:

* Quality
* Precision
* Reliability
* Material knowledge
* Production expertise
* Professional service
* Clear communication

The website should feel contemporary, minimal, editorial and premium without becoming overly decorative.

⸻

2. Primary Language & Naming

Brand name

English:

Ayric

Persian:

آیریک

Important

Always use:

* Ayric in English contexts
* آیریک in Persian contexts

Never use:

* Airik
* Ayrik
* آریک

The correct brand spelling is Ayric / آیریک.

⸻

3. Technology Stack

Current stack:

* Next.js
* React
* TypeScript
* Tailwind CSS
* App Router
* File-based content
* Static-friendly architecture

The project currently uses:

app/
components/
content/
lib/
public/

Content is intentionally separated from UI implementation.

⸻

4. Deployment Decision — IMPORTANT

Final deployment target

The website will be deployed on:

Shared hosting / cPanel

The website will NOT require a VPS.

Do not introduce infrastructure that requires:

* VPS
* Docker
* persistent Node.js server
* server-side process running continuously
* custom backend server

unless explicitly approved later.

⸻

5. Static Export Strategy

The final website should be compatible with Next.js static export.

Target architecture:

GitHub
   ↓
Next.js build
   ↓
Static Export
   ↓
out/
   ↓
cPanel
   ↓
public_html/

Expected configuration:

output: "export"

This should be implemented during the appropriate technical-hardening/deployment phase, not prematurely during visual/content phases.

However:

From Phase 6 onward, all new implementation must remain compatible with static export.

Avoid introducing features that require a permanent Next.js server.

⸻

6. Backend / Form Strategy

The main website should remain static.

Forms must NOT depend on a custom Node.js backend running on the hosting server.

Current inquiry form implementation is only a placeholder and does not actually persist/send submissions.

Future production architecture should use an external endpoint/service for form submission.

Potential destinations:

* Email
* Telegram
* External automation endpoint
* Serverless/API service
* Other lightweight external service

Final implementation will be decided during the technical/conversion phase.

Do not build a VPS backend just for the inquiry form.

⸻

7. Repository Rules

CRITICAL — Avoid Repetition

Before creating or modifying anything:

1. Inspect the existing repository.
2. Check whether the requested file already exists.
3. Check whether the requested component already exists.
4. Check existing routes.
5. Check existing content models.
6. Check existing utilities.
7. Reuse existing architecture whenever possible.

Never:

* recreate an existing page
* recreate an existing component
* create duplicate routes
* create duplicate content models
* replace working architecture unnecessarily
* invent routes without checking app/
* invent data without checking content/

If an existing implementation is incomplete:

Modify it.

Do not create a second implementation.

⸻

8. Current Repository Structure

The repository already contains:

app/
components/
content/
lib/
public/
PROJECT_SPEC.md

Important existing content files include:

content/
├── articles.tsx
├── business.ts
├── categories.ts
├── faq.ts
├── projects.ts
├── services.ts
└── site.ts

Important existing components include:

components/
├── cards/
├── forms/
├── home/
├── layout/
├── seo/
└── ui/

Do not recreate these systems without first inspecting them.

⸻

9. Existing Route Architecture

The project already contains routes including:

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

There are also SEO-related files such as:

app/robots.ts
app/sitemap.ts

Before creating any route, inspect whether an equivalent route already exists.

⸻

10. Content Architecture

Content remains file-based.

Do not introduce a CMS unless explicitly requested.

Current content sources include:

content/projects.ts
content/services.ts
content/articles.tsx
content/business.ts
content/categories.ts
content/faq.ts
content/site.ts

These files should remain the source of truth for structured content.

⸻

11. Project Data Architecture

Current state

content/projects.ts already exists.

Do NOT create another project data file.

The current model is insufficient for full case studies and needs to be expanded.

Target conceptual structure:

Project
├── slug
├── title
├── category
├── description
├── client
├── challenge
├── solution
├── printingMethod
├── material
├── process
├── result
├── services
├── images
└── metadata

Exact fields should be adapted to the actual projects and existing implementation.

Important

Do not invent project facts.

If real information is unavailable:

* use neutral wording
* leave optional fields empty
* mark content as pending
* ask for the actual information when necessary

Never fabricate:

* clients
* production methods
* materials
* quantities
* results
* project history

⸻

12. Asset Policy

Real project imagery has priority.

Before adding images:

1. Inspect public/
2. Inspect public/images/
3. Map existing assets to projects.
4. Reuse real project assets where available.

Do not use generic stock imagery to pretend it is an Ayric project.

If project photography is missing:

Use a deliberate placeholder only temporarily.

Placeholder imagery must eventually be replaced with real project photography.

⸻

13. CASE STUDY SYSTEM

Phase 6 objective

Transform the current portfolio into a professional case-study system.

The portfolio should not be just a gallery.

It should communicate:

Problem
↓
Thinking
↓
Production decision
↓
Execution
↓
Result

Each project should explain why the final production solution makes sense.

⸻

14. Case Study Structure

Preferred narrative:

01 — Overview

What is the project?

02 — Challenge

What needed to be solved?

03 — Approach

What direction was taken?

04 — Production

What was produced and how?

05 — Material / Technique

What printing method, material or production decision mattered?

06 — Result

What was delivered?

07 — Related Services

Which Ayric services are connected to this project?

08 — Gallery

Real project imagery.

09 — CTA

Move the visitor toward requesting a quote.

⸻

15. Portfolio Index

Route:

/نمونه-کارها

The portfolio index should:

* introduce Ayric’s work
* display projects clearly
* use real imagery
* expose project categories
* link to individual case studies
* remain fast and static-friendly

Avoid placeholder-heavy presentation once real assets are available.

⸻

16. Individual Case Study

Route:

/نمونه-کارها/[slug]

This route already exists.

Do NOT recreate it.

Instead, improve its existing implementation.

The page should consume the project data from:

content/projects.ts

It should be generated statically wherever possible.

Dynamic project pages must remain compatible with:

output: "export"

Use existing generateStaticParams() architecture where appropriate.

⸻

17. Services ↔ Projects Connection

Projects should connect to relevant services.

Example conceptual relationship:

Project
   ↓
Related Services
   ↓
Service Page

This creates:

* better navigation
* stronger SEO
* better internal linking
* stronger conversion paths

Do not duplicate service content inside projects.

Reference the canonical service content where possible.

⸻

18. Current Services

The project already has a service content architecture.

Known service categories include concepts such as:

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

The exact current list must always be read from:

content/services.ts

Do not invent a parallel service list.

⸻

19. SEO / GEO Direction

The website should eventually target:

SEO

* service-specific searches
* local printing searches
* product printing searches
* printing method searches
* long-tail commercial queries

GEO

Optimize content so search engines and AI answer systems can clearly understand:

* what Ayric does
* where it operates
* what services it provides
* which printing methods it supports
* who it serves
* how users can contact/request a quote

SEO/GEO implementation belongs primarily to later technical/content phases.

Do not sacrifice UX or visual quality for keyword stuffing.

⸻

20. Design Direction

The visual language should be:

* Minimal
* Editorial
* Contemporary
* Premium
* Calm
* Confident
* Typography-led
* Image-led where appropriate

Avoid:

* generic printing-shop aesthetics
* excessive gradients
* unnecessary cards
* excessive rounded UI
* visual clutter
* cheap-looking promotional design
* stock-photo-heavy layouts

The website should feel like a professional creative/production company rather than a commodity printing marketplace.

⸻

21. Color Direction

Primary background:

#F7F5F1

Supporting neutral:

#E7E2D4

Additional light visual tone:

#D0D5EC

The overall system should remain restrained.

Do not introduce black-heavy visual branding.

Black may be used functionally for:

* typography
* buttons
* high-contrast CTA sections

but should not become the dominant visual identity.

⸻

22. Typography

Current implementation may use a safe system fallback where necessary.

Do not replace the project’s existing typography system without inspecting:

public/fonts/

and existing font configuration first.

If a local font is already implemented, reuse it.

⸻

23. Component Architecture

Reuse existing components.

Before creating:

Button
Card
Header
Footer
Form
Section
Container
SEO component

search the existing component library first.

Prefer:

existing component
        ↓
extend / adapt

instead of:

new duplicate component

⸻

24. Server / Client Rules

Avoid unnecessary "use client".

Prefer Server Components.

Only use Client Components when interaction genuinely requires client-side state/browser APIs.

This is especially important because the final deployment target is static export.

⸻

25. Static Export Compatibility Rules

New code must avoid dependencies on:

* runtime server APIs
* persistent server processes
* filesystem writes at runtime
* dynamic server-only rendering
* unsupported middleware behavior
* server-side databases directly from page rendering

Prefer:

* static data
* build-time generation
* client-side interaction only where required
* external APIs for form submission

⸻

26. Build Verification

After meaningful implementation changes:

npm run build

must be run in the actual project environment.

Do not claim that the build passes unless it has actually been executed.

When static export is enabled, verify:

out/

is generated correctly.

⸻

27. Deployment Target

Final deployment:

cPanel shared hosting

Expected structure:

public_html/
├── index.html
├── ...

The build pipeline should eventually be:

GitHub
↓
npm install
↓
npm run build
↓
out/
↓
upload contents of out/
↓
cPanel/public_html/

No VPS is required for the main website.

⸻

28. Development Phases

Phase 0 — Baseline & Safety

Status:

Completed / baseline established

Responsibilities:

* understand existing architecture
* inspect repository
* avoid duplicate implementation
* establish build/deployment constraints

⸻

Phase 1 — Content Architecture

Status:

Completed

Responsibilities:

* content model
* services
* projects
* articles
* business content
* FAQs
* site information

⸻

Phase 2 — Homepage

Status:

Completed / existing implementation

Do not recreate the homepage without reviewing current implementation.

⸻

Phase 3 — Service Pages

Status:

Completed / existing implementation

Existing service architecture should be reused and refined rather than recreated.

⸻

Phase 4 — Business Landing Pages

Status:

Completed / existing implementation

Review and improve where necessary.

⸻

Phase 5 — Blog / SEO Content

Status:

Completed / existing implementation

Existing:

articles
blog
SEO
sitemap

architecture should be preserved.

⸻

PHASE 6 — PORTFOLIO / CASE STUDIES

CURRENT PHASE

Objective

Turn the existing portfolio into a professional case-study system.

Tasks

6.1 Audit existing project data

Inspect:

content/projects.ts

Do not replace blindly.

Determine:

* current fields
* existing projects
* missing fields
* existing image references
* existing service relationships

6.2 Audit existing assets

Inspect:

public/images/

Map real images to projects.

6.3 Expand project data model

Add only fields that are actually needed for the case-study system.

6.4 Redesign portfolio index

Improve:

/نمونه-کارها

using real project information and imagery.

6.5 Redesign case study

Improve:

/نمونه-کارها/[slug]

using the narrative structure defined above.

6.6 Connect services

Add project → service relationships.

6.7 Add real imagery

Replace placeholders where real assets exist.

6.8 Validate static generation

Ensure project routes can be generated at build time.

⸻

IMPORTANT PHASE 6 WORKFLOW

Do NOT perform these tasks blindly.

For every step:

Inspect
↓
Understand existing implementation
↓
Identify only what is missing
↓
Modify existing code
↓
Build
↓
Continue

Never:

Assume
↓
Rewrite
↓
Create duplicate

⸻

Phase 7 — Visual Refinement

After content architecture and case studies are stable:

* typography refinement
* spacing
* responsive behavior
* animation
* image treatment
* transitions
* visual consistency
* accessibility

⸻

Phase 8 — SEO / GEO

* metadata
* structured data
* canonical URLs
* internal linking
* service SEO
* local SEO
* GEO/AI discoverability
* sitemap
* robots
* semantic HTML

⸻

Phase 9 — Technical Hardening & Deployment

Main objective

Prepare the project for:

cPanel shared hosting without VPS

Tasks:

1. Static export configuration
2. next.config
3. build verification
4. route verification
5. asset verification
6. image optimization compatibility
7. form endpoint
8. production environment variables
9. security headers where applicable
10. final deployment test

⸻

Phase 10 — Conversion & Polish

* quote CTA
* contact flow
* inquiry UX
* trust signals
* conversion optimization
* final QA
* mobile QA
* performance optimization

⸻

29. Current Status

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

30. Immediate Next Step

The next task is NOT to create a new page.

The next task is:

Audit and update content/projects.ts

Specifically:

1. Read the current project data.
2. Identify all existing projects.
3. Identify the existing fields.
4. Inspect available project images.
5. Determine which project data is real and which is placeholder.
6. Define the minimum additional fields required for Phase 6.
7. Update the existing data model.
8. Do not fabricate missing project facts.

Only after this audit should the portfolio UI be modified.

⸻

31. Golden Rule

The repository is the source of truth.

This document is the development roadmap.

Existing code must always be inspected before new code is written.

If something already exists, improve it.

If something does not exist, create it.

Never create a second version of something that already exists.

⸻

32. Deployment Golden Rule

Ayric is being built for cPanel shared hosting, not a VPS.

Every new feature must be evaluated against static-export compatibility.

Do not introduce server infrastructure unless explicitly approved.

⸻

33. Brand Golden Rule

Ayric / آیریک

This is the correct brand name and spelling.

English: Ayric

Persian: آیریک
