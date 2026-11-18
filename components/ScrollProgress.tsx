"use client";

import { useEffect, useState } from "react";

const SEGMENTS = 12;

export default function ScrollProgress() {
  const [filled, setFilled] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      setFilled(Math.round(Math.min(Math.max(progress, 0), 1) * SEGMENTS));
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-1.5 lg:flex"
    >
      {Array.from({ length: SEGMENTS }).map((_, i) =>
        i < filled ? (
          <span key={i} className="h-px w-4 rounded-full bg-accent" />
        ) : (
          <span key={i} className="h-px w-4 bg-foreground/15" />
        ),
      )}
    </div>
  );
}
