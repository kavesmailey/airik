export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return generateMetadata({
    title: article.meta.title,
    description: article.meta.description,
    path: `/وبلاگ/${article.slug}`,
    ogImage: article.featuredImage,
  });
}
