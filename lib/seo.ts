/**
 * ═══════════════════════════════════════════════════════════════
 * SEO UTILITIES — Metadata helpers for pages
 * ═══════════════════════════════════════════════════════════════
 */

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
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://iric.print";
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
      ...(ogImage && { images: [{ url: ogImage }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      ...(ogImage && { images: [ogImage] }),
    },
  };
}
