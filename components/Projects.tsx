"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/resume-data";
import { ArrowUpRightIcon, ChevronDownIcon } from "@/components/icons";
import { TechIcon } from "@/components/techIcons";

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function onScroll() {
      if (!track) return;
      const card = track.children[0] as HTMLElement | undefined;
      if (!card) return;
      const step = card.offsetWidth + 24; // card width + gap-6
      setActive(Math.round(track.scrollLeft / step));
    }

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToIndex(i: number) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }

  return (
    <section id="projects" className="scroll-mt-24 border-b border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Projects
          </h2>
          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollToIndex(Math.max(active - 1, 0))}
              disabled={active === 0}
              aria-label="Previous project"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:bg-foreground/5 hover:text-foreground disabled:opacity-30"
            >
              <ChevronDownIcon className="h-4 w-4 rotate-90" />
            </button>
            <button
              type="button"
              onClick={() => scrollToIndex(Math.min(active + 1, projects.length - 1))}
              disabled={active === projects.length - 1}
              aria-label="Next project"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:bg-foreground/5 hover:text-foreground disabled:opacity-30"
            >
              <ChevronDownIcon className="h-4 w-4 -rotate-90" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
        >
          {projects.map((project) => {
            const Card = (
              <div className="card group flex h-full flex-col rounded-2xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-medium text-foreground">
                    {project.name}
                  </h3>
                  {project.link && (
                    <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accent" />
                  )}
                </div>
                <p className="mt-1 font-mono text-xs text-muted">
                  {project.subtitle}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 rounded-full bg-foreground/5 px-2.5 py-1 text-[11px] text-muted"
                    >
                      <TechIcon name={t} className="h-3 w-3" />
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-4 font-mono text-[11px] text-muted">
                  {project.period}
                </p>
              </div>
            );

            return (
              <div
                key={project.name}
                className="w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-[46%]"
              >
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="block h-full"
                  >
                    {Card}
                  </a>
                ) : (
                  Card
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {projects.map((project, i) => (
            <button
              key={project.name}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to ${project.name}`}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-6 bg-accent" : "w-1.5 bg-foreground/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
