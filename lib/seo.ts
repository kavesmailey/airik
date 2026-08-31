import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

export function generateMetadata({
  title,
  description,
  path,
  ogImage,
}: SeoProps): Metadata {
  const baseUrl = siteConfig.siteUrl;
  const canonicalUrl = `${baseUrl}${path}`;

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: canonicalUrl,
      locale: "fa_IR",
      type: "website",
      siteName: siteConfig.name,
      images: ogImage ? [{ url: `${baseUrl}${ogImage}` }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: ogImage ? [`${baseUrl}${ogImage}`] : undefined,
    },
  };
}
