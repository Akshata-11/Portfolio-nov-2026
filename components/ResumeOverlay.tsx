"use client";

import { useEffect, useState } from "react";
import {
  certifications,
  education,
  experience,
  profile,
  research,
  skillGroups,
} from "@/lib/resume-data";

export default function ResumeOverlay({
  triggerClassName,
  children,
}: {
  triggerClassName: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={triggerClassName}>
        {children}
      </button>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm transition-opacity duration-300 sm:p-10 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Résumé"
          onClick={(e) => e.stopPropagation()}
          className={`relative my-4 w-full max-w-2xl rounded-sm bg-white p-8 text-[#1a1a1a] shadow-2xl transition-all duration-300 sm:p-12 ${
            open ? "translate-y-0 scale-100" : "translate-y-4 scale-95"
          }`}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close résumé"
            className="absolute right-4 top-4 rounded-full p-1.5 text-[#999] transition-colors hover:bg-black/5 hover:text-[#1a1a1a]"
          >
            ✕
          </button>

          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold">{profile.name}</h2>
            <p className="mt-2 font-serif text-sm italic text-[#555]">
              {profile.title} | {profile.location} |{" "}
              <a href={`mailto:${profile.email}`} className="underline">
                {profile.email}
              </a>{" "}
              | {profile.phone}
            </p>
          </div>

          <h3 className="mt-8 border-b border-[#1a1a1a] pb-1 font-serif text-sm font-bold uppercase tracking-wide">
            Education
          </h3>
          <div className="mt-2 flex items-baseline justify-between gap-4 font-serif text-sm">
            <p>
              <span className="font-bold">{education.degree}</span>{" "}
              <span className="italic text-[#555]">| {education.school}</span>
            </p>
            <p className="shrink-0 text-[#555]">CGPA {education.cgpa}</p>
          </div>

          <h3 className="mt-6 border-b border-[#1a1a1a] pb-1 font-serif text-sm font-bold uppercase tracking-wide">
            Experience
          </h3>
          <div className="mt-2 space-y-5">
            {experience.map((job) => (
              <div key={job.company} className="font-serif text-sm">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-bold">
                    {job.company} <span className="font-normal">— {job.role}</span>
                  </p>
                  <p className="shrink-0 text-[#555]">
                    {job.period}
                    {job.current ? " – Present" : ""}
                  </p>
                </div>
                {job.tech && (
                  <p className="italic text-[#555]">{job.tech.join(", ")}</p>
                )}
                <ul className="mt-1 list-disc space-y-0.5 pl-5 text-[#333]">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="mt-6 border-b border-[#1a1a1a] pb-1 font-serif text-sm font-bold uppercase tracking-wide">
            Research
          </h3>
          <div className="mt-2 font-serif text-sm">
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-bold">
                {research.org} <span className="font-normal">— {research.role}</span>
              </p>
              <p className="shrink-0 text-[#555]">{research.period}</p>
            </div>
            <ul className="mt-1 list-disc space-y-0.5 pl-5 text-[#333]">
              {research.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          <h3 className="mt-6 border-b border-[#1a1a1a] pb-1 font-serif text-sm font-bold uppercase tracking-wide">
            Skills
          </h3>
          <p className="mt-2 font-serif text-sm text-[#333]">
            {skillGroups.map((g) => g.items.join(", ")).join(" · ")}
          </p>

          <h3 className="mt-6 border-b border-[#1a1a1a] pb-1 font-serif text-sm font-bold uppercase tracking-wide">
            Certifications
          </h3>
          <ul className="mt-2 list-disc space-y-0.5 pl-5 font-serif text-sm text-[#333]">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>

          <div className="mt-8 flex justify-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Open full PDF
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
