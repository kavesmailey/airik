"use client";

import { useCallback, useState } from "react";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  tone?: "dark" | "light";
  className?: string;
}

export default function Accordion({
  items,
  defaultOpenId,
  tone = "dark",
  className = "",
}: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);
  const isDark = tone === "dark";

  const toggleItem = useCallback((id: string) => {
    setOpenId((current) => (current === id ? null : id));
  }, []);

  const borderColor = isDark
    ? "var(--color-border)"
    : "var(--color-border-light)";
  const titleColor = isDark
    ? "var(--color-text)"
    : "var(--color-text-dark)";
  const contentColor = isDark
    ? "var(--color-text-muted)"
    : "var(--color-text-dark-muted)";

  return (
    <div className={`divide-y ${className}`} style={{ borderColor }}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const itemId = `accordion-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div key={item.id}>
            <button
              type="button"
              id={itemId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggleItem(item.id)}
              className="flex min-h-20 w-full items-center justify-between gap-5 py-5 text-right text-lg font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-accent"
              style={{ color: titleColor }}
            >
              <span>{item.title}</span>
              <span
                className={`shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              >
                {isOpen ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M5 12h14" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                )}
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={itemId}
              hidden={!isOpen}
              className="overflow-hidden pb-6 pe-10"
            >
              <div
                className="text-base leading-relaxed"
                style={{ color: contentColor }}
              >
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
