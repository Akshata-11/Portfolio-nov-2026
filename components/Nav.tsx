"use client";

import { useEffect, useState } from "react";
import { sections } from "@/lib/resume-data";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(sections[0].id);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      const typing =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);
      if (typing || e.metaKey || e.ctrlKey || e.altKey) return;

      const match = sections.find((s) => s.shortcut === e.key.toLowerCase());
      if (match) {
        document.getElementById(match.id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="#about"
        aria-label="Akshata Kawale"
        className="fixed right-4 top-4 z-50 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-background shadow-md sm:right-6"
      >
        AK
      </a>

      <header className="sticky top-0 z-40 px-0 sm:px-3">
        <div
          className={`mx-auto transition-all duration-500 ease-out ${
            scrolled
              ? "mt-3 max-w-3xl rounded-2xl border border-border bg-background/60 shadow-lg backdrop-blur-lg"
              : "max-w-5xl border-b border-border bg-background/60 backdrop-blur-lg"
          }`}
        >
          <nav className="relative mx-auto h-14 px-6" aria-label="Primary">
            <div
              className={`absolute top-1/2 hidden -translate-y-1/2 items-center gap-1 transition-all duration-700 ease-out md:flex ${
                scrolled ? "left-1/2 -translate-x-1/2" : "left-6 translate-x-0"
              }`}
            >
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  aria-current={active === s.id ? "true" : undefined}
                  className={`group flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm transition-colors hover:bg-foreground/5 hover:text-foreground ${
                    active === s.id ? "bg-foreground/5 text-foreground" : "text-muted"
                  }`}
                >
                  {s.label}
                  <span
                    className={`rounded border px-1 text-[10px] transition-colors group-hover:border-foreground/20 ${
                      active === s.id
                        ? "border-foreground/20 text-muted"
                        : "border-border text-muted"
                    }`}
                  >
                    {s.shortcut}
                  </span>
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="primary-nav-links"
              className="absolute right-6 top-1/2 -translate-y-1/2 rounded-md border border-border px-3 py-1.5 text-sm text-muted md:hidden"
            >
              {open ? "Close" : "Menu"}
            </button>
          </nav>
        </div>

        {open && (
          <div
            id="primary-nav-links"
            className="mx-auto flex max-w-3xl flex-col gap-1 border-t border-border bg-background/95 p-3 backdrop-blur-lg md:hidden"
          >
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-foreground/5 hover:text-foreground ${
                  active === s.id ? "bg-foreground/5 text-foreground" : "text-muted"
                }`}
              >
                {s.label}
                <span className="rounded border border-border px-1 text-[10px] text-muted">
                  {s.shortcut}
                </span>
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
