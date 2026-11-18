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
      <div className="relative mx-auto mt-10 max-w-2xl -rotate-1 overflow-hidden rounded-sm shadow-xl ring-1 ring-black/10">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
          alt="The Starry Night, Vincent van Gogh"
          fill
          sizes="(max-width: 672px) 100vw, 672px"
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/55" />

        {/* Stamp / ticket, top-right corner */}
        <div className="absolute right-5 top-5 flex h-16 w-14 -rotate-3 flex-col items-center justify-center gap-0.5 border-2 border-dashed border-white/70 bg-[#f7f1e3]/90 shadow-md sm:h-20 sm:w-16">
          <span className="text-base font-bold text-accent sm:text-lg">AK</span>
          <span className="text-[8px] uppercase tracking-widest text-[#6b5d47]">
            Mumbai
          </span>
        </div>

        <div className="relative flex min-h-[380px] flex-col justify-between p-6 sm:min-h-[340px] sm:p-9">
          {/* Message, with ruled writing lines */}
          <div className="max-w-sm pr-20 text-left sm:pr-24">
            <p
              className="pb-1 text-sm leading-[1.9] text-white"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, transparent, transparent 1.75em, rgba(255,255,255,0.35) 1.75em, rgba(255,255,255,0.35) calc(1.75em + 1px))",
              }}
            >
              Hey! I build fast, accessible, pixel-perfect interfaces — and
              I&apos;d love to build the next one with you. Drop me a line :)
            </p>
            <p className="mt-2 text-sm text-white/80">— Akshata</p>
          </div>

          {/* Address / contact details */}
          <div className="text-left">
            <p className="font-mono text-xs uppercase tracking-widest text-white/60">
              To: my next team
            </p>
            <div className="mt-2 space-y-1.5 border-t border-white/30 pt-2 text-sm text-white sm:text-base">
              <div className="flex items-center gap-2">
                <a href={`mailto:${profile.email}`} className="hover:text-accent">
                  {profile.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="text-white/70 transition-colors hover:text-accent"
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
              <p className="text-white/80">{profile.location}</p>
            </div>

            <div className="mt-3 flex items-center gap-1 border-t border-white/30 pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
                className="rounded-full p-1.5 text-white/80 transition-colors hover:text-accent"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn profile"
                className="rounded-full p-1.5 text-white/80 transition-colors hover:text-accent"
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
