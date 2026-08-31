import Link from "next/link";

const navigation = [
  { label: "خدمات", href: "/خدمات" },
  { label: "برای کسب‌وکارها", href: "/برای-کسب-و-کارها" },
  { label: "نمونه‌کارها", href: "/نمونه-کارها" },
  { label: "بلاگ", href: "/بلاگ" },
  { label: "درباره ما", href: "/درباره-ما" },
  { label: "تماس با ما", href: "/تماس-با-ما" },
];

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="border-t border-black/10 bg-[#f7f5f1]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-12">
        <div className="grid gap-16 md:grid-cols-[1.3fr_0.7fr] md:gap-24">
          <div>
            <Link
              href="/"
              className="text-3xl font-semibold tracking-[-0.04em]"
            >
              AIRIK
            </Link>

            <p className="mt-7 max-w-xl text-lg leading-9 text-black/55">
              راهکارهای چاپ برای برندها و کسب‌وکارها؛ از انتخاب روش و متریال
              تا تولید نهایی.
            </p>

            <Link
              href="/استعلام-قیمت"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm text-white transition-transform hover:-translate-y-0.5"
            >
              استعلام قیمت
              <span>↗</span>
            </Link>
          </div>

          <div>
            <p className="mb-7 text-xs text-black/35">
              دسترسی سریع
            </p>

            <nav className="grid grid-cols-2 gap-x-8 gap-y-5">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-black/55 transition-colors hover:text-black"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-black/10 pt-7 text-xs text-black/40 md:mt-28 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} AIRIK. تمامی حقوق محفوظ است.</p>

          <p>
            چاپ برای چیزهایی که قرار است دیده و ماندگار شوند.
          </p>
        </div>
      </div>
    </footer>
  );
}
