"use client";

import { useEffect, useRef, useState } from "react";
import { experience } from "@/lib/resume-data";
import { ArrowUpRightIcon, ChevronDownIcon } from "@/components/icons";
import { TechIcon } from "@/components/techIcons";

export default function Experience() {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set([0]));
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the track's top reaches the viewport's center, 1 when its
      // bottom reaches the viewport's center.
      const p = (vh / 2 - rect.top) / (rect.height || 1);
      setProgress(Math.min(Math.max(p, 0), 1));
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  function toggle(i: number) {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(i)) {
        next.delete(i);
      } else {
        next.add(i);
      }
      return next;
    });
  }

  return (
    <section id="experience" className="scroll-mt-24 border-b border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Experience
        </h2>

        <div ref={trackRef} className="relative mt-10">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-[7px]" />
          <div
            aria-hidden="true"
            className="absolute left-[3px] z-10 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_4px_var(--background)] transition-[top] duration-150 ease-out"
            style={{ top: `calc(${progress * 100}% + 0.5rem)` }}
          />

          <div className="space-y-10">
            {experience.map((job, i) => {
              const open = openSet.has(i);
              const panelId = `experience-panel-${i}`;

              return (
                <div
                  key={job.company}
                  className="relative grid grid-cols-1 gap-3 sm:grid-cols-[150px_1fr] sm:gap-6"
                >
                  <div className="relative pl-6">
                    <span className="absolute left-0 top-1 h-3.5 w-3.5 rounded-full border-2 border-accent bg-background" />
                    <p className="font-serif text-lg italic text-foreground sm:text-xl">
                      {job.period}
                    </p>
                  </div>

                  <div className="card ml-6 rounded-2xl p-6 sm:ml-0">
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      aria-expanded={open}
                      aria-controls={panelId}
                      className="flex w-full items-start justify-between gap-4 text-left"
                    >
                      <div>
                        <h3 className="font-serif text-xl italic text-foreground sm:text-2xl">
                          {job.company}
                        </h3>
                        <p className="font-serif text-sm italic text-muted sm:text-base">
                          {job.role}
                        </p>
                        {job.flair && (
                          <p className="mt-2 text-sm text-foreground">{job.flair}</p>
                        )}
                      </div>
                      <ChevronDownIcon
                        className={`mt-1 h-5 w-5 shrink-0 text-muted transition-transform duration-200 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div id={panelId} hidden={!open} className="mt-4 border-t border-border pt-4">
                      <ul className="space-y-2.5">
                        {job.bullets.map((b) => (
                          <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      {job.website && (
                        <a
                          href={job.website}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground underline decoration-dotted underline-offset-4 hover:text-accent"
                        >
                          Website
                          <ArrowUpRightIcon className="h-3.5 w-3.5" />
                        </a>
                      )}

                      {job.tech && job.tech.length > 0 && (
                        <div className="mt-4 flex flex-wrap items-center gap-3">
                          {job.tech.map((t) => (
                            <TechIcon key={t} name={t} className="h-5 w-5" />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
