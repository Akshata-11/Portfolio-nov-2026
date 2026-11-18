"use client";

import { useState } from "react";
import Image from "next/image";
import { profile } from "@/lib/resume-data";
import { CheckIcon, CopyIcon, GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

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
    <section id="contact" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Contact
        </h2>
        <p className="mt-4 text-muted">
          Open to frontend roles and freelance React / Next.js work.
        </p>
      </div>

      {/* The postcard */}
      <div
        className="relative mx-auto mt-10 max-w-2xl -rotate-1 overflow-hidden rounded-sm bg-[#f7f1e3] p-6 shadow-xl ring-1 ring-black/5 sm:p-8"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 27px, color-mix(in srgb, #3a3226 8%, transparent) 28px)",
        }}
      >
        {/* Background art — Van Gogh's The Starry Night (public domain, via Wikimedia Commons) */}
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
          alt=""
          fill
          sizes="(max-width: 672px) 100vw, 672px"
          className="pointer-events-none object-cover opacity-[0.07]"
          priority={false}
        />
        <div className="pointer-events-none absolute inset-0 bg-[#f7f1e3]/55" />

        <div className="relative grid gap-6 sm:grid-cols-[1fr_auto_1fr] sm:gap-8">
          {/* Message side */}
          <div className="text-left">
            <p className="text-sm leading-relaxed text-[#2a2117] sm:text-base">
              Hey! I build fast, accessible, pixel-perfect interfaces — and I&apos;d
              love to build the next one with you. Drop me a line :)
            </p>
            <p className="mt-4 text-sm text-[#6b5d47]">— Akshata</p>
          </div>

          {/* Dashed divider */}
          <div className="hidden border-l border-dashed border-[#b8ab8e] sm:block" />
          <div className="block h-px w-full border-t border-dashed border-[#b8ab8e] sm:hidden" />

          {/* Address side */}
          <div className="relative text-left">
            {/* Stamp */}
            <div className="ml-auto flex h-20 w-16 -rotate-2 items-center justify-center border-2 border-dashed border-accent/60 bg-accent/10 sm:h-24 sm:w-[72px]">
              <span className="text-sm font-bold text-accent sm:text-base">AK</span>
            </div>
            {/* Postmark */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-6 top-2 h-20 w-20 rounded-full border border-[#2a2117]/30 sm:right-7 sm:top-3 sm:h-24 sm:w-24"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(100deg, transparent, transparent 4px, color-mix(in srgb, #2a2117 25%, transparent) 4px, color-mix(in srgb, #2a2117 25%, transparent) 5px)",
              }}
            />

            <p className="mt-8 font-mono text-xs uppercase tracking-widest text-[#9c8f78] sm:mt-10">
              To: my next team
            </p>

            <div className="mt-3 space-y-2 border-t border-[#3a3226]/70 pt-3 text-sm text-[#2a2117] sm:text-base">
              <div className="flex items-center gap-2">
                <a href={`mailto:${profile.email}`} className="hover:text-accent">
                  {profile.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="text-[#6b5d47] transition-colors hover:text-accent"
                >
                  {copied ? (
                    <CheckIcon className="h-4 w-4 text-accent" />
                  ) : (
                    <CopyIcon className="h-4 w-4" />
                  )}
                </button>
              </div>
              <a href={`tel:${profile.phone}`} className="block hover:text-accent">
                {profile.phone}
              </a>
              <p>{profile.location}</p>
            </div>

            <div className="mt-4 flex items-center gap-1 border-t border-[#3a3226]/70 pt-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
                className="rounded-full p-1.5 text-[#6b5d47] transition-colors hover:text-accent"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn profile"
                className="rounded-full p-1.5 text-[#6b5d47] transition-colors hover:text-accent"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
