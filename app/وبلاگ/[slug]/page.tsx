import type { Metadata } from "next";
import { generateMetadata as createMetadata } from "@/lib/seo";
import { getArticleBySlug, getRelatedArticles, getAllArticleSlugs } from "@/content/articles";
import { getServiceBySlug } from "@/content/services";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import ArticleCard from "@/components/cards/ArticleCard";
import ServiceCard from "@/components/cards/ServiceCard";
import Button from "@/components/ui/Button";
import IconArrow from "@/components/ui/IconArrow";
import { notFound } from "next/navigation";

interface ArticlePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return createMetadata({
    title: article.meta.title,
    description: article.meta.description,
    path: `/وبلاگ/${article.slug}`,
    ogImage: article.featuredImage,
  });
}

export default function ArticlePage({ params }: ArticlePageProps) {
  ...
}
