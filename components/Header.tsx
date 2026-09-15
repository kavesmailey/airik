"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { siteConfig } from "@/content/site";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      dir="rtl"
      className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f5f1]/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 md:h-[84px] md:px-10 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="group relative z-10 flex shrink-0 items-center"
          aria-label={siteConfig.name}
        >
          <span className="text-[22px] font-semibold tracking-[-0.05em] transition-opacity duration-300 group-hover:opacity-55">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="ناوبری اصلی"
          className="hidden min-w-0 flex-1 items-center justify-center gap-3 lg:flex xl:gap-5"
        >
          {siteConfig.navigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative shrink-0 whitespace-nowrap py-3 text-[11px] text-black/50 transition-colors duration-300 hover:text-black xl:text-[12px]"
              >
                <span className={active ? "text-black" : ""}>
                  {item.label}
                </span>

                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 right-0 h-px bg-black transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden shrink-0 lg:block">
          <Link
            href={siteConfig.cta.href}
            className="group inline-flex items-center gap-2 rounded-full bg-black px-4 py-2.5 text-[11px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/85 xl:px-5 xl:text-[12px]"
          >
            <span>{siteConfig.cta.label}</span>

            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            >
              ↗
            </span>
          </Link>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((value) => !value)}
          className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 transition-colors duration-300 hover:bg-black/5 lg:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute right-0 top-0 block h-px w-5 bg-black transition-all duration-300 ${
                isOpen ? "top-2 rotate-45" : ""
              }`}
            />

            <span
              className={`absolute right-0 top-2 block h-px w-5 bg-black transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`absolute right-0 top-4 block h-px w-5 bg-black transition-all duration-300 ${
                isOpen ? "top-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile / Tablet Navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-black/10 transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          isOpen ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="ناوبری موبایل"
          className="mx-auto max-w-[1440px] px-5 pb-6 pt-2 sm:px-8"
        >
          {siteConfig.navigation.map((item) => {
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
                <span className="text-base sm:text-lg">
                  {item.label}
                </span>

                <span
                  aria-hidden="true"
                  className={`text-sm transition-transform duration-300 group-hover:-translate-x-1 ${
                    active ? "text-black" : "text-black/25"
                  }`}
                >
                  ↗
                </span>
              </Link>
            );
          })}

          <Link
            href={siteConfig.cta.href}
            onClick={() => setIsOpen(false)}
            className="mt-6 flex items-center justify-center gap-3 rounded-full bg-black px-6 py-4 text-sm font-medium text-white transition-transform duration-300 active:scale-[0.98]"
          >
            <span>{siteConfig.cta.label}</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
