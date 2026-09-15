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

  const address =
    siteConfig.contact.address ||
    siteConfig.contact.city ||
    siteConfig.contact.country
      ? {
          "@type": "PostalAddress",
          ...(siteConfig.contact.address && {
            streetAddress: siteConfig.contact.address,
          }),
          ...(siteConfig.contact.city && {
            addressLocality: siteConfig.contact.city,
          }),
          ...(siteConfig.contact.country && {
            addressCountry: siteConfig.contact.country,
          }),
        }
      : undefined;

  let jsonLd: Record<string, any> | null = null;

  switch (type) {
    /* =====================================================
       ORGANIZATION
    ===================================================== */

    case "organization":
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,

        name: siteConfig.name,
        alternateName: siteConfig.englishName,
        url: baseUrl,

        ...(logoUrl && {
          logo: {
            "@type": "ImageObject",
            url: logoUrl,
          },
        }),

        description: siteConfig.description,
        slogan: siteConfig.tagline,

        ...(siteConfig.contact.phone && {
          telephone: siteConfig.contact.phone,
        }),

        ...(siteConfig.contact.email && {
          email: siteConfig.contact.email,
        }),

        ...(address && {
          address,
        }),

        ...(socialProfiles.length > 0 && {
          sameAs: socialProfiles,
        }),
      };
      break;

    /* =====================================================
       LOCAL BUSINESS
    ===================================================== */

    case "localBusiness":
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#localbusiness`,

        name: siteConfig.name,
        alternateName: siteConfig.englishName,
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

        ...(address && {
          address,
        }),

        ...(siteConfig.contact.city && {
          areaServed: {
            "@type": "City",
            name: siteConfig.contact.city,
            containedInPlace: {
              "@type": "Country",
              name: siteConfig.contact.country || "Iran",
            },
          },
        }),

        ...(siteConfig.contact.workingHours && {
          openingHours: siteConfig.contact.workingHours,
        }),

        ...(siteConfig.contact.serviceArea && {
          serviceArea: siteConfig.contact.serviceArea,
        }),

        ...(socialProfiles.length > 0 && {
          sameAs: socialProfiles,
        }),
      };
      break;

    /* =====================================================
       SERVICE
    ===================================================== */

    case "service": {
      const serviceUrl = data?.url
        ? data.url.startsWith("http")
          ? data.url
          : `${baseUrl}${data.url}`
        : undefined;

      jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",

        name: data?.title || data?.name,
        description: data?.shortDescription || data?.description,

        ...(serviceUrl && {
          url: serviceUrl,
        }),

        provider: {
          "@type": "LocalBusiness",
          "@id": `${baseUrl}/#localbusiness`,
          name: siteConfig.name,
          url: baseUrl,

          ...(logoUrl && {
            image: logoUrl,
          }),
        },

        areaServed: [
          {
            "@type": "City",
            name: siteConfig.contact.city || "کرج",
          },
          {
            "@type": "Country",
            name: siteConfig.contact.country || "ایران",
          },
        ],
      };

      break;
    }

    /* =====================================================
       ARTICLE
    ===================================================== */

    case "article": {
      const articleUrl = data?.url
        ? data.url.startsWith("http")
          ? data.url
          : `${baseUrl}${data.url}`
        : `${baseUrl}/وبلاگ/${data?.slug || ""}`;

      const imageUrl = data?.image
        ? data.image.startsWith("http")
          ? data.image
          : `${baseUrl}${data.image}`
        : undefined;

      jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",

        headline: data?.headline || data?.title,
        description: data?.description,

        ...(imageUrl && {
          image: imageUrl,
        }),

        datePublished: data?.datePublished,
        dateModified: data?.dateModified || data?.datePublished,

        author: data?.author
          ? {
              "@type": "Organization",
              name: data.author,
            }
          : {
              "@type": "Organization",
              name: siteConfig.name,
              url: baseUrl,
            },

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
          "@id": articleUrl,
        },
      };

      break;
    }

    /* =====================================================
       BREADCRUMB
    ===================================================== */

    case "breadcrumb":
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",

        itemListElement: Array.isArray(data?.items)
          ? data.items.map(
              (
                item: {
                  label: string;
                  href: string;
                },
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

    /* =====================================================
       FAQ
    ===================================================== */

    case "faq":
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",

        mainEntity: Array.isArray(data?.items)
          ? data.items.map(
              (item: {
                question: string;
                answer: string;
              }) => ({
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

  if (!jsonLd) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}
