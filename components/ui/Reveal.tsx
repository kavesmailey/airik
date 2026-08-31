"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  respectReducedMotion?: boolean;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  respectReducedMotion = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const reducedMotion = respectReducedMotion
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

    if (reducedMotion) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [respectReducedMotion]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(22px)",
        transitionDelay: `${delay}ms`,
        transitionDuration: "600ms",
        transitionTimingFunction: "var(--ease-default)",
      }}
    >
      {children}
    </div>
  );
}
