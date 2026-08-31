import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function Footer() {
  const navigationItems = siteConfig.navigation.slice(0, 4);

  const services = [
    {
      label: "چاپ روی بگ",
      href: "/خدمات/چاپ-بگ",
    },
    {
      label: "چاپ روی لباس",
      href: "/خدمات/چاپ-روی-لباس",
    },
    {
      label: "چاپ روی جعبه پیتزا",
      href: "/خدمات/چاپ-جعبه-پیتزا",
    },
    {
      label: "چاپ DTF",
      href: "/خدمات/چاپ-dtf",
    },
  ];

  return (
    <footer
      style={{
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >
      <div className="container-iric py-12">
        {/* Main footer */}
        <div
          className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4"
          style={{
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-block text-sm font-bold"
              style={{ color: "var(--color-text)" }}
            >
              {siteConfig.name}
            </Link>

            <p
              className="mt-4 max-w-xs text-sm"
              style={{
                color: "var(--color-text-muted)",
                lineHeight: "var(--line-height-relaxed)",
              }}
            >
              {siteConfig.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-xs font-medium"
              style={{ color: "var(--color-text-faint)" }}
            >
              دسترسی سریع
            </p>

            <nav className="mt-4 flex flex-col items-start gap-3 text-sm">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-opacity hover:opacity-60"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <p
              className="text-xs font-medium"
              style={{ color: "var(--color-text-faint)" }}
            >
              خدمات
            </p>

            <nav className="mt-4 flex flex-col items-start gap-3 text-sm">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="transition-opacity hover:opacity-60"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {service.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-xs font-medium"
              style={{ color: "var(--color-text-faint)" }}
            >
              اطلاعات تماس
            </p>

            <div className="mt-4 flex flex-col items-start gap-3 text-sm">
              {siteConfig.contact.phoneDisplay && (
                <span
                  style={{
                    color: "var(--color-text-muted)",
                    direction: "ltr",
                  }}
                >
                  {siteConfig.contact.phoneDisplay}
                </span>
              )}

              {siteConfig.contact.email && (
                <span
                  style={{
                    color: "var(--color-text-muted)",
                    direction: "ltr",
                  }}
                >
                  {siteConfig.contact.email}
                </span>
              )}

              {siteConfig.contact.serviceArea && (
                <span style={{ color: "var(--color-text-muted)" }}>
                  {siteConfig.contact.serviceArea}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8">
          <div
            className="flex flex-col gap-4 text-xs sm:flex-row sm:items-center sm:justify-between"
            style={{ color: "var(--color-text-faint)" }}
          >
            <p>
              © ۱۴۰۴ {siteConfig.name}. تمامی حقوق محفوظ است.
            </p>

            <div className="flex gap-5">
              <Link
                href="/درباره-آیریک"
                className="transition-opacity hover:opacity-60"
              >
                درباره آیریک
              </Link>

              <Link
                href="/تماس-با-ما"
                className="transition-opacity hover:opacity-60"
              >
                تماس با ما
              </Link>
            </div>
          </div>

          {/* Large brand signature */}
          <div className="mt-8 overflow-hidden">
            <p
              className="break-words text-5xl font-bold leading-none sm:text-7xl lg:text-8xl"
              style={{
                color: "var(--color-text)",
                opacity: 0.9,
              }}
            >
              آیریک
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
