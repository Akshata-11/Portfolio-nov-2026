"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/resume-data";
import { ArrowUpRightIcon } from "@/components/icons";
import { TechIcon } from "@/components/techIcons";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [fractionalIndex, setFractionalIndex] = useState(0);
  const [step, setStep] = useState(0);

  useEffect(() => {
    function measure() {
      const card = trackRef.current?.children[0] as HTMLElement | undefined;
      if (card) setStep(card.offsetWidth + 24); // card width + gap-6
    }

    function onScroll() {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const runway = rect.height - vh;
      const progress = runway > 0 ? Math.min(Math.max(-rect.top / runway, 0), 1) : 0;
      setFractionalIndex(progress * (projects.length - 1));
    }

    measure();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const active = Math.round(fractionalIndex);

  function goTo(index: number) {
    const section = sectionRef.current;
    if (!section) return;
    const vh = window.innerHeight;
    const runway = section.offsetHeight - vh;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const targetProgress = index / (projects.length - 1);
    window.scrollTo({ top: sectionTop + targetProgress * runway, behavior: "smooth" });
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === "ArrowRight") {
        e.preventDefault();
        goTo(Math.min(active + 1, projects.length - 1));
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goTo(Math.max(active - 1, 0));
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative border-b border-border"
      style={{ height: `${projects.length * 160}vh` }}
    >
      <div className="sticky top-14 flex h-[calc(100vh-3.5rem)] flex-col justify-center overflow-hidden px-6 py-8 sm:py-16">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Projects
          </h2>

          <div className="relative mt-5 h-[300px] overflow-hidden sm:mt-8 sm:h-[440px]">
            <div
              ref={trackRef}
              className="flex h-full gap-6"
              style={{ transform: `translateX(-${fractionalIndex * step}px)` }}
            >
              {projects.map((project) => {
                const Card = (
                  <div className="card group flex h-full flex-col overflow-y-auto rounded-2xl p-5 transition-shadow duration-200 hover:shadow-lg sm:p-8">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-medium text-foreground">
                        {project.name}
                      </h3>
                      {project.link && (
                        <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accent" />
                      )}
                    </div>
                    <p className="mt-1 font-mono text-xs text-muted">
                      {project.subtitle}
                    </p>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
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
                    className="h-full w-[85%] shrink-0 sm:w-[60%] lg:w-[46%]"
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
          </div>
        </div>
      </div>
    </section>
  );
}
