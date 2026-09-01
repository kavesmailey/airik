import Link from "next/link";

const footerLinks = [
  {
    title: "دسترسی سریع",
    links: [
      { label: "خدمات", href: "/خدمات" },
      { label: "نمونه‌کارها", href: "/نمونه-کارها" },
      { label: "بلاگ", href: "/بلاگ" },
      { label: "درباره ما", href: "/درباره-ما" },
    ],
  },
  {
    title: "ارتباط",
    links: [
      { label: "تماس با ما", href: "/تماس-با-ما" },
      { label: "استعلام قیمت", href: "/استعلام-قیمت" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="border-t border-black/10 bg-[#f7f5f1]"
    >
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-12">
        <div className="grid gap-16 md:grid-cols-[1.4fr_0.6fr_0.6fr] md:gap-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-block text-4xl font-semibold tracking-[-0.05em] transition-opacity hover:opacity-60"
            >
              آیریک
            </Link>

            <p className="mt-7 max-w-md text-base leading-8 text-black/50">
              راهکارهای چاپ برای برندها و کسب‌وکارهایی که به کیفیت،
              جزئیات و اجرای درست اهمیت می‌دهند.
            </p>

            <Link
              href="/استعلام-قیمت"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm text-white transition-transform hover:-translate-y-0.5"
            >
              شروع یک پروژه
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="mb-6 text-xs font-medium text-black/35">
                {group.title}
              </p>

              <nav className="flex flex-col items-start">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="py-2 text-sm text-black/60 transition-colors hover:text-black"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-black/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-7 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
          <p className="text-xs text-black/35">
            © {new Date().getFullYear()} آیریک. تمامی حقوق محفوظ است.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/حریم-خصوصی"
              className="text-xs text-black/35 transition-colors hover:text-black"
            >
              حریم خصوصی
            </Link>

            <Link
              href="/قوانین"
              className="text-xs text-black/35 transition-colors hover:text-black"
            >
              قوانین و شرایط
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
