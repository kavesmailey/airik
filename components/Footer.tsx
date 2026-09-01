import Link from "next/link";

const footerLinks = [
  {
    title: "صفحات",
    links: [
      { label: "خانه", href: "/" },
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
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-10 lg:px-12">
        {/* Main footer */}
        <div className="grid gap-16 py-20 sm:py-24 md:grid-cols-[1.5fr_1fr_1fr] md:gap-12 md:py-28">
          {/* Brand */}
          <div className="max-w-md">
            <Link
              href="/"
              className="inline-block text-2xl font-semibold tracking-[-0.05em] transition-opacity duration-300 hover:opacity-55"
            >
              آیریک
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-black/50">
              راهکارهای چاپ و تولید برای برندها و کسب‌وکارهایی که
              به کیفیت و جزئیات اهمیت می‌دهند.
            </p>

            <Link
              href="/استعلام-قیمت"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/85"
            >
              <span>شروع یک پروژه</span>

              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-x-0.5"
              >
                ↗
              </span>
            </Link>
          </div>

          {/* Navigation columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <p className="mb-6 text-xs font-medium text-black/35">
                {column.title}
              </p>

              <nav className="flex flex-col items-start gap-4">
                {column.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group relative text-sm text-black/60 transition-colors duration-300 hover:text-black"
                  >
                    <span>{link.label}</span>

                    <span className="absolute bottom-0 right-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 border-t border-black/10 py-6 text-xs text-black/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} آیریک. تمامی حقوق محفوظ است.
          </p>

          <div className="flex items-center gap-5">
            <span>چاپ و تولید</span>
            <span aria-hidden="true">·</span>
            <span>تهران</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
