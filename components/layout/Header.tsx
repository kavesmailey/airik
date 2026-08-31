"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";
import Button from "@/components/ui/Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transition-all"
        style={{
          backgroundColor: isScrolled ? "rgba(26, 26, 24, 0.95)" : "transparent",
          borderBottom: isScrolled ? "1px solid var(--color-border)" : "1px solid transparent",
          backdropFilter: isScrolled ? "blur(8px)" : "none",
        }}
      >
        <div className="container-iric flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            aria-label="آیریک — صفحه اصلی"
            className="flex items-center gap-2"
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
            <span className="text-lg font-bold" style={{ color: "var(--color-text)" }}>
              آیریک
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="منوی اصلی" className="hidden items-center gap-6 md:flex">
            {siteConfig.navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm transition-colors"
                  style={{
                    color: isActive ? "var(--color-text)" : "var(--color-text-muted)",
                    fontWeight: isActive ? 600 : 400,
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <Button href={siteConfig.cta.href} size="sm" className="hidden sm:inline-flex">
            {siteConfig.cta.label}
          </Button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center md:hidden"
            style={{
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
              color: "var(--color-text)",
            }}
          >
            {isMobileMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-80 max-w-full transform transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundColor: "var(--color-bg)",
          borderLeft: "1px solid var(--color-border)",
        }}
        role="dialog"
        aria-modal="true"
        aria-label="منوی موبایل"
      >
        <div className="flex h-full flex-col p-6 pt-20">
          <nav aria-label="منوی موبایل" className="flex flex-col gap-2">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-12 items-center justify-between border-b py-3 text-lg font-semibold"
                style={{
                  borderColor: "var(--color-border)",
                  color: "var(--color-text)",
                }}
              >
                {item.label}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            ))}
          </nav>
          <Button
            href={siteConfig.cta.href}
            className="mt-auto"
          >
            {siteConfig.cta.label}
          </Button>
        </div>
      </div>
    </>
  );
}
