/**
 * ═══════════════════════════════════════════════════════════════
 * JSON-LD — Structured data for SEO
 * ═══════════════════════════════════════════════════════════════
 */

import { siteConfig } from "@/content/site";

interface JsonLdProps {
  type: "organization" | "service" | "article" | "breadcrumb" | "faq";
  data: any;
}

export default function JsonLd({ type, data }: JsonLdProps) {
  let jsonLd: Record<string, any> | null = null;

  switch (type) {
    case "organization":
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.name,
        alternateName: siteConfig.englishName,
        description: siteConfig.description,
        slogan: siteConfig.tagline,
        ...(siteConfig.contact.phone && {
          telephone: siteConfig.contact.phone,
        }),
        ...(siteConfig.contact.email && {
          email: siteConfig.contact.email,
        }),
        ...(siteConfig.contact.address && {
          address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.contact.address,
            ...(siteConfig.contact.city && {
              addressLocality: siteConfig.contact.city,
            }),
            addressCountry: "IR",
          },
        }),
        ...(siteConfig.social.instagram && {
          sameAs: [
            siteConfig.social.instagram,
            siteConfig.social.linkedin,
            siteConfig.social.telegram,
          ].filter(Boolean),
        }),
      };
      break;

    case "service":
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: data.title,
        description: data.shortDescription || data.description,
        provider: {
          "@type": "Organization",
          name: siteConfig.name,
        },
        areaServed: {
          "@type": "Country",
          name: "Iran",
        },
      };
      break;

    case "article":
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: data.title,
        description: data.excerpt,
        ...(data.date && { datePublished: data.date }),
        ...(data.updatedDate && { dateModified: data.updatedDate }),
        ...(data.author && {
          author: {
            "@type": "Organization",
            name: data.author,
          },
        }),
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
        },
      };
      break;

    case "breadcrumb":
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: data.items.map(
          (item: { label: string; href: string }, index: number) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item: item.href,
          })
        ),
      };
      break;

    case "faq":
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.items.map(
          (item: { question: string; answer: string }) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })
        ),
      };
      break;
  }

  if (!jsonLd) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
