import { redirect } from "next/navigation";

export default function OldArticleRedirect({ params }: { params: { slug: string } }) {
  redirect(`/وبلاگ/${params.slug}`);
}
