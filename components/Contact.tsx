"use client";

import { useState } from "react";
import Image from "next/image";
import { profile } from "@/lib/resume-data";
import {
  ArrowUpRightIcon,
  CheckIcon,
  CopyIcon,
  GithubIcon,
  LinkedinIcon,
} from "@/components/icons";

export default function Contact() {
  const [flipped, setFlipped] = useState(false);
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — the mailto link still works.
    }
  }

  const mailHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    "Hey from your portfolio!",
  )}&body=${encodeURIComponent(message)}`;

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
      <div className="relative mx-auto mt-10 h-[380px] w-full max-w-2xl -rotate-1 [perspective:2000px] sm:h-[340px]">
        <div
          className="relative h-full w-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d]"
          style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
        >
          {/* Front — the postcard picture */}
          <button
            type="button"
            onClick={() => setFlipped(true)}
            aria-label="Flip postcard to write a message"
            disabled={flipped}
            className={`group absolute inset-0 overflow-hidden rounded-sm text-left shadow-xl ring-1 ring-black/10 [backface-visibility:hidden] ${
              flipped ? "pointer-events-none" : "cursor-pointer"
            }`}
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
              alt="The Starry Night, Vincent van Gogh"
              fill
              sizes="(max-width: 672px) 100vw, 672px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/25" />

            <div className="absolute right-5 top-5 flex h-16 w-14 -rotate-3 flex-col items-center justify-center gap-0.5 border-2 border-dashed border-white/70 bg-[#f7f1e3]/90 shadow-md sm:h-20 sm:w-16">
              <span className="text-base font-bold text-accent sm:text-lg">AK</span>
              <span className="text-[8px] uppercase tracking-widest text-[#6b5d47]">
                Mumbai
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent px-4 py-3 text-white">
              <span className="text-xs">The Starry Night — Vincent van Gogh</span>
              <span className="flex items-center gap-1 text-xs text-white/80 transition-transform group-hover:translate-x-1">
                Click to write a message
                <ArrowUpRightIcon className="h-3 w-3 rotate-45" />
              </span>
            </div>
          </button>

          {/* Back — visitor writes a message here */}
          <div
            className={`absolute inset-0 overflow-hidden rounded-sm bg-[#f7f1e3] p-6 shadow-xl ring-1 ring-black/5 [backface-visibility:hidden] sm:p-8 ${
              flipped ? "" : "pointer-events-none"
            }`}
            style={{ transform: "rotateY(180deg)" }}
          >
            <button
              type="button"
              onClick={() => setFlipped(false)}
              aria-label="Flip back to the front"
              className="absolute left-4 top-4 flex items-center gap-1 text-xs text-[#6b5d47] transition-colors hover:text-accent"
            >
              <ArrowUpRightIcon className="h-3 w-3 rotate-[-135deg]" />
              Flip back
            </button>

            <div className="grid h-full gap-6 pt-7 sm:grid-cols-[1fr_auto_1fr] sm:gap-8 sm:pt-0">
              {/* Message side — editable */}
              <div className="flex flex-col text-left">
                <p className="font-mono text-xs uppercase tracking-widest text-[#9c8f78]">
                  Your message
                </p>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Say hi, pitch a role, whatever's on your mind..."
                  rows={5}
                  className="mt-2 w-full flex-1 resize-none bg-transparent text-sm leading-[1.9] text-[#2a2117] placeholder:text-[#9c8f78] focus:outline-none sm:text-base"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(to bottom, transparent, transparent 1.75em, color-mix(in srgb, #3a3226 25%, transparent) 1.75em, color-mix(in srgb, #3a3226 25%, transparent) calc(1.75em + 1px))",
                    backgroundPosition: "0 1.75em",
                    maskImage:
                      "linear-gradient(to bottom, transparent 0, black 1.75em, black calc(100% - 1px), transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, transparent 0, black 1.75em, black calc(100% - 1px), transparent 100%)",
                  }}
                />
                <a
                  href={mailHref}
                  className="mt-3 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-medium text-accent-foreground transition-opacity hover:opacity-90"
                >
                  Send it my way
                  <ArrowUpRightIcon className="h-3 w-3" />
                </a>
              </div>

              {/* Dashed divider */}
              <div className="hidden border-l border-dashed border-[#b8ab8e] sm:block" />
              <div className="block h-px w-full border-t border-dashed border-[#b8ab8e] sm:hidden" />

              {/* Address side */}
              <div className="relative text-left">
                <p className="font-mono text-xs uppercase tracking-widest text-[#9c8f78]">
                  Or reach me directly
                </p>

                <div className="mt-2 space-y-1.5 border-t border-[#3a3226]/70 pt-2 text-sm text-[#2a2117] sm:text-base">
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

                <div className="mt-3 flex items-center gap-1 border-t border-[#3a3226]/70 pt-2">
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
        </div>
      </div>
    </section>
  );
}
