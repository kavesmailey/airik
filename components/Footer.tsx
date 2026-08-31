import Link from "next/link";

const navigation = [
  { label: "خدمات", href: "/خدمات" },
  { label: "برای کسب‌وکارها", href: "/برای-کسب-و-کارها" },
  { label: "نمونه‌کارها", href: "/نمونه-کارها" },
  { label: "بلاگ", href: "/بلاگ" },
];

export default function Footer() {
  return (
    <footer dir="rtl" className="border-t border-black/10 bg-[#f7f5f1]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-12">
        <div className="grid gap-16 md:grid-cols-[1.4fr_0.6fr]">
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
          </div>

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

        <div className="mt-20 flex flex-col gap-5 border-t border-black/10 pt-7 text-xs text-black/40 md:mt-28 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} AIRIK. تمامی حقوق محفوظ است.</p>

          <Link
            href="/استعلام-قیمت"
            className="transition-colors hover:text-black"
          >
            شروع یک پروژه ↗
          </Link>
        </div>
      </div>
    </footer>
  );
}
