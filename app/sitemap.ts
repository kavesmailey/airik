import type { MetadataRoute } from "next";

import { services } from "@/content/services";
import { businessSolutions } from "@/content/business";
import { blogPosts } from "@/content/blog";
import { siteConfig } from "@/content/site";

const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/خدمات`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/برای-کسب-و-کارها`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/وبلاگ`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/نمونه-کارها`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/درباره-ما`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/تماس-با-ما`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/استعلام-قیمت`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/خدمات/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const businessPages: MetadataRoute.Sitemap = businessSolutions.map(
    (business) => ({
      url: `${baseUrl}/برای-کسب-و-کارها/${business.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/وبلاگ/${post.slug}`,
    lastModified: post.dateISO,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...businessPages,
    ...blogPages,
  ];
}
