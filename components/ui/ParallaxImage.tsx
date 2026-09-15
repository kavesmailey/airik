"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  strength?: number;
  priority?: boolean;
}

export default function ParallaxImage({
  src,
  alt,
  className = "",
  imageClassName = "",
  strength = 18,
  priority = false,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame: number | null = null;

    const update = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const center =
        rect.top + rect.height / 2 - viewportHeight / 2;

      const progress = center / viewportHeight;

      const nextOffset = Math.max(
        -strength,
        Math.min(strength, -progress * strength)
      );

      setOffset(nextOffset);
      frame = null;
    };

    const handleScroll = () => {
      if (frame === null) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", update);

      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [strength]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={`object-cover ${imageClassName}`}
        style={{
          transform: `translate3d(0, ${offset}px, 0) scale(1.08)`,
          transition: "transform 120ms linear",
          willChange: "transform",
        }}
        sizes="100vw"
      />
    </div>
  );
}
