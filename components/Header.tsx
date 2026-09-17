"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import IconArrow from "@/components/ui/IconArrow";

const navItems = [
  { label: "خدمات", href: "/خدمات" },
  { label: "نمونه‌کارها", href: "/نمونه-کارها" },
  { label: "درباره ما", href: "/درباره-ما" },
  { label: "تماس با ما", href: "/تماس-با-ما" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-[100]">
      <div
        className={`mx-auto px-5 transition-all duration-500 sm:px-8 lg:px-12 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1600px] items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 sm:px-5 ${
            scrolled
              ? "border-[#022F12]/10 bg-white/90 shadow-[0_8px_30px_rgba(2,20,8,0.06)] backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            aria-label="آیریک"
            className="group relative z-10 flex h-10 items-center"
          >
            <img
              src="/images/brand/logo.svg"
              alt="آیریک"
              className="h-8 w-auto object-contain transition-transform duration-500 group-hover:scale-[0.97] sm:h-9"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative py-2 text-sm text-[#022F12]/70 transition-colors duration-300 hover:text-[#021408]"
              >
                {item.label}

                <span className="absolute inset-x-0 bottom-0 h-px origin-right scale-x-0 bg-[#8BC53D] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:origin-left group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/استعلام-قیمت"
            className="group hidden items-center gap-3 rounded-full bg-[#022F12] px-5 py-2.5 text-sm font-medium text-white transition-all duration-500 hover:bg-[#8BC53D] hover:text-[#021408] lg:flex"
          >
            <span>استعلام قیمت</span>

            <span className="transition-transform duration-500 group-hover:-translate-x-1">
              <IconArrow direction="left" size={16} />
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="relative z-[110] flex h-10 w-10 items-center justify-center rounded-full bg-[#022F12] text-white transition-all duration-500 hover:bg-[#8BC53D] hover:text-[#021408] lg:hidden"
          >
            <span className="relative block h-4 w-4">
              <span
                className={`absolute left-0 top-[5px] h-px w-4 bg-current transition-all duration-500 ${
                  menuOpen
                    ? "translate-y-[3px] rotate-45"
                    : "translate-y-0"
                }`}
              />

              <span
                className={`absolute left-0 top-[10px] h-px w-4 bg-current transition-all duration-500 ${
                  menuOpen
                    ? "-translate-y-[2px] -rotate-45"
                    : "translate-y-0"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[90] bg-[#021408] transition-all duration-700 lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-between px-7 pb-10 pt-32">
          <nav className="flex flex-col">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between border-b border-white/10 py-5 text-3xl font-medium text-white transition-all duration-500"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen
                    ? "translateY(0)"
                    : "translateY(20px)",
                  transitionDelay: menuOpen
                    ? `${120 + index * 70}ms`
                    : "0ms",
                }}
              >
                <span>{item.label}</span>

                <span className="text-[#8BC53D] transition-transform duration-500 group-hover:-translate-x-2">
                  <IconArrow direction="up-left" size={24} />
                </span>
              </Link>
            ))}
          </nav>

          <div
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen
                ? "translateY(0)"
                : "translateY(20px)",
              transition:
                "opacity 500ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)",
              transitionDelay: menuOpen ? "400ms" : "0ms",
            }}
          >
            <Link
              href="/استعلام-قیمت"
              onClick={() => setMenuOpen(false)}
              className="group flex items-center justify-between rounded-full bg-[#8BC53D] px-6 py-4 text-sm font-medium text-[#021408]"
            >
              <span>شروع یک پروژه</span>

              <span className="transition-transform duration-500 group-hover:-translate-x-1">
                <IconArrow direction="up-left" size={20} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
