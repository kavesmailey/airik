import { siteConfig } from "@/content/site";

interface JsonLdProps {
  type:
    | "organization"
    | "localBusiness"
    | "service"
    | "article"
    | "breadcrumb"
    | "faq";
  data?: Record<string, any>;
}

export default function JsonLd({ type, data }: JsonLdProps) {
  let jsonLd: Record<string, any> | null = null;

  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");

  switch (type) {
    case "organization":
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: siteConfig.name,
        url: baseUrl,
        logo: `${baseUrl}${siteConfig.logo}`,
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
            addressLocality: siteConfig.contact.city,
            addressCountry: siteConfig.contact.country,
          },
        }),
        ...(siteConfig.social.instagram ||
        siteConfig.social.linkedin ||
        siteConfig.social.telegram
          ? {
              sameAs: [
                siteConfig.social.instagram,
                siteConfig.social.linkedin,
                siteConfig.social.telegram,
              ].filter(Boolean),
            }
          : {}),
      };
      break;

    case "localBusiness":
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#localbusiness`,
        name: siteConfig.name,
        url: baseUrl,
        logo: `${baseUrl}${siteConfig.logo}`,
        image: `${baseUrl}${siteConfig.logo}`,
        description: siteConfig.description,
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
            addressLocality: siteConfig.contact.city,
            addressCountry: siteConfig.contact.country,
          },
        }),
        ...(siteConfig.contact.workingHours && {
          openingHours: siteConfig.contact.workingHours,
        }),
        ...(siteConfig.social.instagram ||
        siteConfig.social.linkedin ||
        siteConfig.social.telegram
          ? {
              sameAs: [
                siteConfig.social.instagram,
                siteConfig.social.linkedin,
                siteConfig.social.telegram,
              ].filter(Boolean),
            }
          : {}),
      };
      break;

    case "service":
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: data?.title || data?.name,
        description: data?.shortDescription || data?.description,
        ...(data?.url && {
          url: data.url,
        }),
        provider: {
          "@type": "LocalBusiness",
          "@id": `${baseUrl}/#localbusiness`,
          name: siteConfig.name,
          url: baseUrl,
        },
        areaServed: {
          "@type": "Country",
          name: siteConfig.contact.country || "Iran",
        },
      };
      break;

    case "article":
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: data?.headline || data?.title,
        description: data?.description,
        ...(data?.image && {
          image: data.image.startsWith("http")
            ? data.image
            : `${baseUrl}${data.image}`,
        }),
        datePublished: data?.datePublished,
        dateModified: data?.dateModified || data?.datePublished,
        ...(data?.author && {
          author: {
            "@type": "Organization",
            name: data.author,
          },
        }),
        publisher: {
          "@type": "Organization",
          "@id": `${baseUrl}/#organization`,
          name: siteConfig.name,
          url: baseUrl,
          logo: {
            "@type": "ImageObject",
            url: `${baseUrl}${siteConfig.logo}`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": data?.url || `${baseUrl}/وبلاگ/${data?.slug || ""}`,
        },
      };
      break;

    case "breadcrumb":
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: Array.isArray(data?.items)
          ? data.items.map(
              (
                item: { label: string; href: string },
                index: number,
              ) => ({
                "@type": "ListItem",
                position: index + 1,
                name: item.label,
                item: item.href.startsWith("http")
                  ? item.href
                  : `${baseUrl}${item.href}`,
              }),
            )
          : [],
      };
      break;

    case "faq":
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: Array.isArray(data?.items)
          ? data.items.map(
              (item: { question: string; answer: string }) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              }),
            )
          : [],
      };
      break;
  }

  if (!jsonLd) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}
