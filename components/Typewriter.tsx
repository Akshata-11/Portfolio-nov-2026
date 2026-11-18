"use client";

import { useEffect, useState } from "react";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export type TypewriterSegment = { text: string; className?: string };

export default function Typewriter({
  segments,
  speed = 45,
  className,
}: {
  segments: TypewriterSegment[];
  speed?: number;
  className?: string;
}) {
  const fullText = segments.map((s) => s.text).join("");

  const [length, setLength] = useState(() =>
    prefersReducedMotion() ? fullText.length : 0,
  );

  useEffect(() => {
    if (length >= fullText.length) return;

    let i = length;
    const id = setInterval(() => {
      i += 1;
      setLength(i);
      if (i >= fullText.length) clearInterval(id);
    }, speed);

    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullText, speed]);

  const starts = segments.reduce<number[]>((acc, seg, i) => {
    acc.push(i === 0 ? 0 : acc[i - 1] + segments[i - 1].text.length);
    return acc;
  }, []);

  const rendered = segments.map((seg, i) => {
    const remaining = length - starts[i];
    const shown = seg.text.slice(0, Math.max(0, Math.min(seg.text.length, remaining)));
    return (
      <span key={i} className={seg.className}>
        {shown}
      </span>
    );
  });

  return (
    <span className={className}>
      <span aria-hidden="true">
        {rendered}
        <span className="caret-blink ml-1 inline-block h-[1em] w-[2px] translate-y-[3px] animate-[blink_1.1s_ease-in-out_infinite] bg-foreground align-middle" />
      </span>
      <span className="sr-only">{fullText}</span>
    </span>
  );
}
