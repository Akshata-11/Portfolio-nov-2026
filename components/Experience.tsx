"use client";

import { useState } from "react";
import { experience } from "@/lib/resume-data";
import { ArrowUpRightIcon, ChevronDownIcon } from "@/components/icons";
import { TechIcon } from "@/components/techIcons";

export default function Experience() {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set([0]));

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
    <section
      id="experience"
      className="scroll-mt-24 border-b border-border px-6 py-20"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Experience
        </h2>

        <div className="mt-8 divide-y divide-border border-t border-border">
          {experience.map((job, i) => {
            const open = openSet.has(i);
            const panelId = `experience-panel-${i}`;

            return (
              <div key={job.company}>
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={open}
                  aria-controls={panelId}
                  className="flex w-full items-center gap-4 py-5 text-left"
                >
                  <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                    <span className="shrink-0 text-base">
                      <span className="font-semibold text-foreground">
                        {job.company}
                      </span>{" "}
                      <span className="text-muted">{job.role}</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="hidden h-px flex-1 border-b border-dotted border-border sm:block"
                    />
                    {job.flair && (
                      <span className="shrink-0 text-sm font-medium text-accent">
                        {job.flair}
                      </span>
                    )}
                    <span className="shrink-0 font-mono text-sm text-muted">
                      {job.period}
                      {job.current ? " · Present" : ""}
                    </span>
                  </div>
                  <ChevronDownIcon
                    className={`h-5 w-5 shrink-0 text-muted transition-transform duration-200 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div id={panelId} hidden={!open} className="pb-6">
                  <ul className="space-y-2.5">
                    {job.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
