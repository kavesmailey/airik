import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function Footer() {
  const footerNavigation = [
    {
      title: "دسترسی سریع",
      links: siteConfig.navigation.slice(0, 4),
    },
    {
      title: "اطلاعات",
      links: siteConfig.navigation.slice(4),
    },
  ];

  return (
    <footer
      dir="rtl"
      className="bg-[#021408] text-white"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        {/* TOP */}
        <div className="grid gap-16 border-b border-white/10 py-16 md:grid-cols-[1.2fr_1fr] md:py-20 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-20">
          {/* BRAND */}
          <div className="max-w-md">
            <Link
              href="/"
              aria-label="آیریک — صفحه اصلی"
              className="inline-flex"
            >
              <img
                src="/images/brand/logo.svg"
                alt="آیریک"
                className="h-10 w-auto object-contain brightness-0 invert md:h-11"
              />
            </Link>

            <p className="mt-8 max-w-sm text-base leading-8 text-white/55">
              چاپ تخصصی برای برندهایی که کیفیت اهمیت دارد.
              از چاپ سیلک و DTF تا چاپ روی لباس، بگ، پارچه،
              بسته‌بندی و سطوح مختلف.
            </p>

            <Link
              href={siteConfig.cta.href}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#8BC53D] px-6 py-3.5 text-sm font-medium text-[#021408] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E4F0CC]"
            >
              {siteConfig.cta.label}

              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          {/* NAVIGATION */}
          {footerNavigation.map((group) => (
            <div key={group.title}>
              <p className="mb-6 text-xs font-medium text-white/35">
                {group.title}
              </p>

              <nav className="flex flex-col items-start gap-4">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-white/65 transition-colors duration-200 hover:text-[#8BC53D]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* CONTACT */}
        <div className="grid gap-8 border-b border-white/10 py-10 md:grid-cols-3">
          <div>
            <p className="mb-2 text-xs text-white/30">
              موقعیت
            </p>

            <p className="text-sm text-white/65">
              {siteConfig.contact.city}، {siteConfig.contact.country}
            </p>
          </div>

          <div>
            <p className="mb-2 text-xs text-white/30">
              تلفن
            </p>

            {siteConfig.contact.phone ? (
              <a
                href={`tel:${siteConfig.contact.phone}`}
                dir="ltr"
                className="text-sm text-white/65 transition-colors hover:text-[#8BC53D]"
              >
                {siteConfig.contact.phoneDisplay ||
                  siteConfig.contact.phone}
              </a>
            ) : (
              <span className="text-sm text-white/35">
                —
              </span>
            )}
          </div>

          <div>
            <p className="mb-2 text-xs text-white/30">
              ایمیل
            </p>

            {siteConfig.contact.email ? (
              <a
                href={`mailto:${siteConfig.contact.email}`}
                dir="ltr"
                className="text-sm text-white/65 transition-colors hover:text-[#8BC53D]"
              >
                {siteConfig.contact.email}
              </a>
            ) : (
              <span className="text-sm text-white/35">
                —
              </span>
            )}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-5 py-7 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} {siteConfig.name}. همه حقوق محفوظ است.
          </p>

          <div className="flex items-center gap-5">
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-xs text-white/40 transition-colors hover:text-[#8BC53D]"
              >
                Instagram
              </a>
            )}

            {siteConfig.social.linkedin && (
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-xs text-white/40 transition-colors hover:text-[#8BC53D]"
              >
                LinkedIn
              </a>
            )}

            {siteConfig.social.telegram && (
              <a
                href={siteConfig.social.telegram}
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="text-xs text-white/40 transition-colors hover:text-[#8BC53D]"
              >
                Telegram
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
