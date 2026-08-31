import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/content/site";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  tone?: "dark" | "light";
}

export default function Breadcrumbs({
  items,
  tone = "dark",
}: BreadcrumbsProps) {
  const isDark = tone === "dark";
  const textColor = isDark ? "var(--color-text-muted)" : "var(--color-text-dark-muted)";
  const separatorColor = isDark ? "var(--color-text-faint)" : "var(--color-text-dark-faint)";

  const fullItems = [{ label: "خانه", href: "/" }, ...items];
  const baseUrl = siteConfig.siteUrl;

  const breadcrumbData = {
    items: fullItems.map((item) => ({
      label: item.label,
      href: `${baseUrl}${item.href}`,
    })),
  };

  return (
    <>
      <JsonLd type="breadcrumb" data={breadcrumbData} />
      <nav aria-label="مسیر صفحه" className="flex items-center gap-2 text-sm">
        {fullItems.map((item, index) => {
          const isLast = index === fullItems.length - 1;
          return (
            <span key={item.href} className="flex items-center gap-2">
              {index > 0 && (
                <span style={{ color: separatorColor }} aria-hidden="true">
                  /
                </span>
              )}
              {isLast ? (
                <span style={{ color: textColor }} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  style={{ color: textColor }}
                  className="transition-colors hover:opacity-70"
                >
                  {item.label}
                </Link>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
}
