export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return generateMetadata({
    title: service.meta.title,
    description: service.meta.description,
    path: `/خدمات/${service.slug}`,
    ogImage: service.image,
  });
}
