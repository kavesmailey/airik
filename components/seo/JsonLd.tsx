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

  const logoUrl = siteConfig.logo
    ? siteConfig.logo.startsWith("http")
      ? siteConfig.logo
      : `${baseUrl}${siteConfig.logo}`
    : "";

  const socialProfiles = [
    siteConfig.social.instagram,
    siteConfig.social.linkedin,
    siteConfig.social.telegram,
    siteConfig.social.whatsapp,
  ].filter(Boolean);

  switch (type) {
    case "organization":
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: siteConfig.name,
        url: baseUrl,
        ...(logoUrl && {
          logo: logoUrl,
        }),
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
            ...(siteConfig.contact.country && {
              addressCountry: siteConfig.contact.country,
            }),
          },
        }),
        ...(socialProfiles.length > 0 && {
          sameAs: socialProfiles,
        }),
      };
      break;

    case "localBusiness":
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#localbusiness`,
        name: siteConfig.name,
        url: baseUrl,
        ...(logoUrl && {
          logo: logoUrl,
          image: logoUrl,
        }),
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
            ...(siteConfig.contact.city && {
              addressLocality: siteConfig.contact.city,
            }),
            ...(siteConfig.contact.country && {
              addressCountry: siteConfig.contact.country,
            }),
          },
        }),
        ...(siteConfig.contact.workingHours && {
          openingHours: siteConfig.contact.workingHours,
        }),
        ...(socialProfiles.length > 0 && {
          sameAs: socialProfiles,
        }),
      };
      break;

    case "service":
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: data?.title || data?.name,
        description: data?.shortDescription || data?.description,
        ...(data?.url && {
          url: data.url.startsWith("http")
            ? data.url
            : `${baseUrl}${data.url}`,
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
          ...(logoUrl && {
            logo: {
              "@type": "ImageObject",
              url: logoUrl,
            },
          }),
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": data?.url?.startsWith("http")
            ? data.url
            : data?.url
              ? `${baseUrl}${data.url}`
              : `${baseUrl}/وبلاگ/${data?.slug || ""}`,
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
