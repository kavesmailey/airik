"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "خدمات", href: "/خدمات" },
  { label: "برای کسب‌وکارها", href: "/برای-کسب-و-کارها" },
  { label: "نمونه‌کارها", href: "/نمونه-کارها" },
  { label: "بلاگ", href: "/بلاگ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-black/10 bg-[#f7f5f1]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-12">
        <Link
          href="/"
          aria-label="AIRIK"
          className="text-2xl font-semibold tracking-[-0.04em]"
        >
          AIRIK
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-black/60 transition-colors hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/استعلام-قیمت"
            className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm text-white transition-transform hover:-translate-y-0.5"
          >
            استعلام قیمت
            <span>↗</span>
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute right-0 top-0 block h-px w-5 bg-black transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute right-0 top-2 block h-px w-5 bg-black transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute right-0 top-4 block h-px w-5 bg-black transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`absolute inset-x-0 top-full border-b border-black/10 bg-[#f7f5f1] transition-all duration-300 md:hidden ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 pb-8 pt-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-black/10 py-5 text-lg text-black/75"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/استعلام-قیمت"
            onClick={() => setOpen(false)}
            className="mt-6 flex items-center justify-center gap-2 rounded-full bg-black px-5 py-4 text-sm text-white"
          >
            استعلام قیمت
            <span>↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
