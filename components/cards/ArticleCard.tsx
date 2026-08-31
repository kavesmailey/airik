import Link from "next/link";
import { Article } from "@/content/articles";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/مجله/${article.slug}`}
      className="group block"
      style={{ textDecoration: "none" }}
    >
      <MediaPlaceholder
        aspectRatio="4/3"
        label={article.title}
        tone="dark"
        className="mb-4"
      />
      <p
        className="text-xs"
        style={{ color: "var(--color-text-faint)" }}
      >
        {article.category} · {article.readingTime}
      </p>
      <h3
        className="mt-2 text-lg font-bold leading-snug"
        style={{ color: "var(--color-text)" }}
      >
        {article.title}
      </h3>
    </Link>
  );
}
