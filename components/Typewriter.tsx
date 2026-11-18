"use client";

import { useEffect, useState } from "react";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function Typewriter({
  text,
  speed = 70,
  className,
}: {
  text: string;
  speed?: number;
  className?: string;
}) {
  const [length, setLength] = useState(() => (prefersReducedMotion() ? text.length : 0));
  const [done, setDone] = useState(() => length === text.length);

  useEffect(() => {
    if (done) return;

    let i = length;
    const id = setInterval(() => {
      i += 1;
      setLength(i);
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed]);

  return (
    <span className={className}>
      <span aria-hidden="true">
        {text.slice(0, length)}
        <span
          className={`ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[2px] bg-accent align-middle ${
            done ? "animate-[blink_1s_steps(1)_infinite]" : ""
          }`}
        />
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
