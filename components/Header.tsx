"use client";

import Link from "next/link";
import { useState } from "react";

import { siteConfig } from "@/content/site";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      dir="rtl"
      className="sticky top-0 z-50 border-b border-[#022F12]/10 bg-white/95 backdrop-blur-md"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8 lg:px-10">
        {/* LOGO */}
        <Link
          href="/"
          aria-label="آیریک — صفحه اصلی"
          className="relative z-50 flex shrink-0 items-center"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/images/brand/logo.svg"
            alt="آیریک"
            className="h-9 w-auto object-contain md:h-10"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-2 text-sm text-[#022F12]/70 transition-colors duration-200 hover:text-[#022F12]"
            >
              {item.label}

              <span className="absolute inset-x-0 bottom-0 h-px origin-right scale-x-0 bg-[#8BC53D] transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden lg:block">
          <Link
            href={siteConfig.cta.href}
            className="inline-flex items-center gap-2 rounded-full bg-[#022F12] px-5 py-3 text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#022F12]/90"
          >
            {siteConfig.cta.label}

            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[#022F12]/10 text-[#022F12] lg:hidden"
        >
          <span className="sr-only">
            {isOpen ? "بستن منو" : "باز کردن منو"}
          </span>

          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-px w-full bg-current transition-transform duration-300 ${
                isOpen ? "translate-y-[4px] rotate-45" : ""
              }`}
            />

            <span
              className={`block h-px w-full bg-current transition-opacity duration-200 ${
                isOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-px w-full bg-current transition-transform duration-300 ${
                isOpen ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-[#022F12]/10 bg-white transition-all duration-300 lg:hidden ${
          isOpen
            ? "max-h-[calc(100vh-5rem)] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-5 py-5 md:px-8">
          <div className="flex flex-col">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-[#022F12]/10 py-4 text-base text-[#022F12] transition-colors hover:text-[#8BC53D]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href={siteConfig.cta.href}
              onClick={() => setIsOpen(false)}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#022F12] px-5 py-4 text-sm text-white"
            >
              {siteConfig.cta.label}

              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
