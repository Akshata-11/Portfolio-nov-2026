"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/resume-data";
import { CheckIcon, CopyIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "@/components/icons";

const WORDS = ["fast.", "accessible.", "pixel-perfect.", "on time."];

export default function Contact() {
  const [wordIndex, setWordIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — the mailto link still works.
    }
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden px-6 py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]"
        style={{
          backgroundImage:
            "radial-gradient(circle, color-mix(in srgb, var(--foreground) 12%, transparent) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Contact
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&apos;s build something{" "}
          <span className="relative inline-block min-w-[9ch] text-accent sm:min-w-[11ch]">
            <span key={wordIndex} className="inline-block animate-[fade-in_0.4s_ease-out]">
              {WORDS[wordIndex]}
            </span>
          </span>
        </p>
        <p className="mt-4 text-muted">
          Open to frontend roles and freelance React / Next.js work.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            <MailIcon className="h-4 w-4" />
            {profile.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            aria-label="Copy email address"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
          >
            {copied ? (
              <CheckIcon className="h-4 w-4 text-accent" />
            ) : (
              <CopyIcon className="h-4 w-4" />
            )}
          </button>
          <a
            href={`tel:${profile.phone}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
          >
            <PhoneIcon className="h-4 w-4" />
            {profile.phone}
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="rounded-full p-2.5 text-muted transition-transform duration-200 hover:-translate-y-0.5 hover:text-accent"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="rounded-full p-2.5 text-muted transition-transform duration-200 hover:-translate-y-0.5 hover:text-accent"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
