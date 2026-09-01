"use client";

import Link from "next/link";
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      dir="rtl"
      className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f5f1]/95 backdrop-blur"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:h-24 md:px-10 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="group flex items-center"
          aria-label="آیریک"
        >
          <span className="text-2xl font-semibold tracking-[-0.04em] transition-opacity group-hover:opacity-60">
            آیریک
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-black/55 transition-colors hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/استعلام-قیمت"
            className="inline-flex items-center gap-3 rounded-full bg-black px-6 py-3 text-sm text-white transition-transform hover:-translate-y-0.5"
          >
            استعلام قیمت
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute right-0 top-0 block h-px w-5 bg-black transition-transform duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`absolute right-0 top-2 block h-px w-5 bg-black transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`absolute right-0 top-4 block h-px w-5 bg-black transition-transform duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-black/10 transition-all duration-300 md:hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 pb-7 pt-4">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between border-b border-black/10 py-5 text-lg"
            >
              <span>{item.label}</span>

              <span
                className="text-black/30"
                aria-hidden="true"
              >
                ↗
              </span>
            </Link>
          ))}

          <Link
            href="/استعلام-قیمت"
            onClick={() => setIsOpen(false)}
            className="mt-6 flex items-center justify-center gap-3 rounded-full bg-black px-6 py-4 text-sm text-white"
          >
            استعلام قیمت
            <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
