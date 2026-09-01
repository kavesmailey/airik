"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  {
    label: "خدمات",
    href: "/خدمات",
  },
  {
    label: "نمونه‌کارها",
    href: "/نمونه-کارها",
  },
  {
    label: "بلاگ",
    href: "/بلاگ",
  },
  {
    label: "درباره ما",
    href: "/درباره-ما",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      dir="rtl"
      className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f5f1]/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 md:h-[84px] md:px-10 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="group relative z-10 flex items-center"
          aria-label="آیریک"
        >
          <span className="text-[22px] font-semibold tracking-[-0.05em] transition-opacity duration-300 group-hover:opacity-55">
            آیریک
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex lg:gap-9">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative py-3 text-[13px] text-black/50 transition-colors duration-300 hover:text-black"
              >
                <span className={active ? "text-black" : ""}>
                  {item.label}
                </span>

                <span
                  className={`absolute bottom-0 right-0 h-px bg-black transition-all duration-300 ${
                    active
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/استعلام-قیمت"
            className="group inline-flex items-center gap-2.5 rounded-full bg-black px-5 py-2.5 text-[12px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/85"
          >
            <span>استعلام قیمت</span>

            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            >
              ↗
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition-colors duration-300 hover:bg-black/5 md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute right-0 top-0 block h-px w-5 bg-black transition-all duration-300 ${
                isOpen
                  ? "top-2 rotate-45"
                  : ""
              }`}
            />

            <span
              className={`absolute right-0 top-2 block h-px w-5 bg-black transition-all duration-300 ${
                isOpen
                  ? "opacity-0"
                  : "opacity-100"
              }`}
            />

            <span
              className={`absolute right-0 top-4 block h-px w-5 bg-black transition-all duration-300 ${
                isOpen
                  ? "top-2 -rotate-45"
                  : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-black/10 transition-[max-height,opacity] duration-400 ease-out md:hidden ${
          isOpen
            ? "max-h-[520px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-[1440px] px-5 pb-6 pt-2 sm:px-8">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`group flex items-center justify-between border-b border-black/10 py-5 transition-colors duration-300 ${
                  active
                    ? "text-black"
                    : "text-black/55 hover:text-black"
                }`}
              >
                <span className="text-lg">
                  {item.label}
                </span>

                <span
                  aria-hidden="true"
                  className={`text-sm transition-transform duration-300 group-hover:-translate-x-1 ${
                    active
                      ? "text-black"
                      : "text-black/25"
                  }`}
                >
                  ↗
                </span>
              </Link>
            );
          })}

          <Link
            href="/استعلام-قیمت"
            onClick={() => setIsOpen(false)}
            className="mt-6 flex items-center justify-center gap-3 rounded-full bg-black px-6 py-4 text-sm font-medium text-white transition-transform duration-300 active:scale-[0.98]"
          >
            <span>استعلام قیمت</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
