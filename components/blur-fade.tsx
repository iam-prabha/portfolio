"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type BlurFadeProps = {
  children: ReactNode;
  delay?: number;
  yOffset?: number;
  duration?: number;
  className?: string;
};

export function BlurFade({
  children,
  delay = 0,
  yOffset = 6,
  duration = 0.5,
  className,
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        filter: visible ? "blur(0px)" : "blur(6px)",
        transform: visible ? "translateY(0px)" : `translateY(${yOffset}px)`,
        transition: `opacity ${duration}s ease, filter ${duration}s ease, transform ${duration}s ease`,
        transitionDelay: `${delay}s`,
        willChange: "opacity, filter, transform",
      }}
    >
      {children}
    </div>
  );
}
