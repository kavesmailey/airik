import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="container-iric py-12">
        <div
          className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4"
          style={{ borderBottom: "1px solid var(--color-border)" }}
        >
          {/* Brand */}
          <div>
            <p className="text-sm font-bold" style={{ color: "var(--color-text)" }}>
              {siteConfig.name}
            </p>
            <p
              className="mt-4 max-w-xs text-sm"
              style={{ color: "var(--color-text-muted)", lineHeight: "var(--line-height-relaxed)" }}
            >
              {siteConfig.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs" style={{ color: "var(--color-text-faint)" }}>
              دسترسی سریع
            </p>
            <div className="mt-4 flex flex-col items-start gap-3 text-sm">
              {siteConfig.navigation.slice(0, 4).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs" style={{ color: "var(--color-text-faint)" }}>
              خدمات
            </p>
            <div className="mt-4 flex flex-col items-start gap-3 text-sm">
              <Link href="/خدمات/چاپ-بگ" className="transition-colors" style={{ color: "var(--color-text-muted)" }}>
                چاپ روی بگ
              </Link>
              <Link href="/خدمات/چاپ-روی-لباس" className="transition-colors" style={{ color: "var(--color-text-muted)" }}>
                چاپ روی لباس
              </Link>
              <Link href="/خدمات/چاپ-جعبه-پیتزا" className="transition-colors" style={{ color: "var(--color-text-muted)" }}>
                چاپ روی جعبه پیتزا
              </Link>
              <Link href="/خدمات/چاپ-dtf" className="transition-colors" style={{ color: "var(--color-text-muted)" }}>
                چاپ DTF
              </Link>
            </div>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-xs" style={{ color: "var(--color-text-faint)" }}>
              اطلاعات تماس
            </p>
            <div className="mt-4 flex flex-col items-start gap-3 text-sm">
              {siteConfig.contact.phoneDisplay && (
                <span style={{ color: "var(--color-text-muted)", direction: "ltr" }}>
                  {siteConfig.contact.phoneDisplay}
                </span>
              )}
              {siteConfig.contact.email && (
                <span style={{ color: "var(--color-text-muted)", direction: "ltr" }}>
                  {siteConfig.contact.email}
                </span>
              )}
              <span style={{ color: "var(--color-text-muted)" }}>
                {siteConfig.contact.serviceArea}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-8 pt-8">
          <div className="flex flex-col gap-3 text-xs sm:flex-row sm:items-center sm:justify-between" style={{ color: "var(--color-text-faint)" }}>
            <p>© ۱۴۰۴ {siteConfig.name}. تمامی حقوق محفوظ است.</p>
            <div className="flex gap-5">
              <Link href="/درباره-آیریک" className="transition-colors hover:opacity-70">
                درباره آیریک
              </Link>
              <Link href="/تماس-با-ما" className="transition-colors hover:opacity-70">
                تماس با ما
              </Link>
            </div>
          </div>
          <p
            className="break-words text-5xl font-bold leading-none sm:text-7xl lg:text-8xl"
            style={{ color: "var(--color-text)", opacity: 0.9 }}
          >
            آیریک
          </p>
        </div>
      </div>
    </footer>
  );
}
