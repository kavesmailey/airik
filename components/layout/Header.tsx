import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-250">
      <div className="container-iric flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          aria-label="آیریک — صفحه اصلی"
          className="group inline-flex items-center gap-2 rounded-sm focus-visible:outline-2 focus-visible:outline-accent"
        >
          <svg
            viewBox="0 0 34 34"
            className="h-7 w-7"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="1" y="1" width="32" height="32" rx="3" />
            <path
              d="M10 24V10l14 14V10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-lg font-bold">آیریک</span>
        </Link>

        {/* Navigation placeholder — will be completed in Phase 3 */}
        <nav aria-label="منوی اصلی" className="hidden items-center gap-7 md:flex">
          <span className="text-sm text-text-muted">منو در فاز ۳ تکمیل می‌شود</span>
        </nav>

        {/* CTA placeholder */}
        <span className="hidden min-h-11 items-center rounded-md bg-accent px-5 text-sm font-semibold text-accent-contrast sm:inline-flex">
          استعلام قیمت
        </span>
      </div>
    </header>
  );
}
