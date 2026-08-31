// app/وبلاگ/page.tsx
import { redirect } from "next/navigation";
export default function OldBlogRedirect() { redirect("/بلاگ"); }

// app/وبلاگ/[slug]/page.tsx
import { redirect } from "next/navigation";
export default function OldArticleRedirect({ params }: { params: { slug: string } }) {
  redirect(`/بلاگ/${params.slug}`);
}
