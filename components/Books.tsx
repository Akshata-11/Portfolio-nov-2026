"use client";

import { useEffect, useState } from "react";
import { bookCoverUrl, books, type Book } from "@/lib/resume-data";
import { playPageFlip } from "@/lib/pageFlipSound";

// Deterministic pseudo-random height/width variance so spines look hand-placed, not uniform.
function spineHeight(i: number) {
  const variants = [224, 236, 216, 240, 228, 232, 220, 244, 226];
  return variants[i % variants.length];
}

function spineWidth(i: number) {
  const variants = [44, 40, 48, 42, 46, 40, 44, 42, 48];
  return variants[i % variants.length];
}

export default function Books() {
  const [selected, setSelected] = useState<Book | null>(null);
  const [open, setOpen] = useState(false);

  function openBook(book: Book) {
    setSelected(book);
    setOpen(false);
    playPageFlip();
    // Let the closed cover paint first, then flip it open on the next frame.
    requestAnimationFrame(() => requestAnimationFrame(() => setOpen(true)));
  }

  function close() {
    setOpen(false);
    playPageFlip();
    setTimeout(() => setSelected(null), 300);
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && selected) close();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  return (
    <section id="books" className="scroll-mt-24 border-b border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Books
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          A few books that shaped how I think about building things. Click one to
          open it.
        </p>

        <div className="no-scrollbar mt-10 overflow-x-auto pb-2">
          <div className="mx-auto w-fit px-2">
            <div className="flex items-end gap-[3px]">
              {books.map((book, i) => (
              <button
                key={book.title}
                type="button"
                onClick={() => openBook(book)}
                aria-label={`Open ${book.title} by ${book.author}`}
                className="group relative shrink-0 cursor-pointer rounded-t-[2px] transition-transform duration-200 ease-out hover:-translate-y-3 focus-visible:-translate-y-3"
                style={{
                  height: spineHeight(i),
                  width: spineWidth(i),
                  background: `linear-gradient(90deg, rgba(255,255,255,.35) 0%, rgba(255,255,255,.08) 10%, transparent 18%, transparent 82%, rgba(0,0,0,.25) 94%, rgba(0,0,0,.4) 100%), ${book.color}`,
                  boxShadow:
                    "1px 0 0 rgba(0,0,0,.08), -1px 0 0 rgba(255,255,255,.15) inset, 0 6px 10px rgba(0,0,0,.15)",
                }}
              >
                <span className="pointer-events-none absolute inset-x-1 top-2 h-px bg-black/20" />
                <span className="pointer-events-none absolute inset-x-1 bottom-2 h-px bg-black/20" />
                <span
                  className="absolute inset-0 flex items-center justify-center whitespace-nowrap px-1 text-[11px] font-semibold tracking-wide text-white/95 [writing-mode:vertical-rl]"
                  style={{ transform: "rotate(180deg)" }}
                >
                  {book.title}
                </span>
              </button>
              ))}
            </div>

            <div className="relative">
              <div
                className="h-4 w-[calc(100%+3rem)] -translate-x-6 rounded-[2px]"
                style={{
                  background: "linear-gradient(180deg, #a9754a 0%, #7a4e2a 55%, #5c3a1f 100%)",
                  boxShadow: "0 6px 12px rgba(0,0,0,.25)",
                }}
              />
              <div
                className="absolute left-0 top-full h-6 w-4"
                style={{
                  background: "linear-gradient(135deg, #7a4e2a, #5c3a1f)",
                  clipPath: "polygon(0 0, 100% 0, 0 100%)",
                }}
              />
              <div
                className="absolute right-0 top-full h-6 w-4"
                style={{
                  background: "linear-gradient(225deg, #7a4e2a, #5c3a1f)",
                  clipPath: "polygon(100% 0, 100% 100%, 0 0)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            onClick={(e) => e.stopPropagation()}
            className="relative h-[280px] w-[220px] [perspective:1800px] sm:h-[380px] sm:w-[300px]"
          >
            {/* Page-edge sliver — gives the closed/open book visible thickness */}
            <div
              className="absolute inset-y-1 -right-1.5 w-3 rounded-r-sm"
              style={{
                background:
                  "repeating-linear-gradient(180deg, #ece2c8 0px, #ece2c8 2px, #d9cba3 2px, #d9cba3 3px)",
                boxShadow: "inset -2px 0 3px rgba(0,0,0,.2)",
              }}
            />

            {/* The page — always underneath, this is what you're "reading" */}
            <div className="absolute inset-0 flex flex-col rounded-r-sm bg-[#f7f1e3] p-5 shadow-[inset_0_0_30px_rgba(0,0,0,0.08)] sm:p-8">
              <div className="flex-1 overflow-y-auto">
                <h3 className="font-serif text-lg font-bold text-[#2a2117] sm:text-2xl">
                  {selected.title}
                </h3>
                <p className="mt-1 font-serif text-xs italic text-[#6b5d47] sm:text-sm">
                  {selected.author}
                </p>
                <p className="mt-4 font-serif text-[13px] leading-relaxed text-[#3a3226] sm:mt-6 sm:text-[15px]">
                  {selected.summary}
                </p>
              </div>
              <p className="mt-4 text-center font-serif text-xs text-[#9c8f78]">
                — 1 —
              </p>
            </div>

            {/* The cover — hinged on the left, flips open to reveal the page */}
            <div
              className="absolute inset-0 origin-left rounded-r-sm shadow-2xl transition-transform duration-[900ms] ease-in-out [transform-style:preserve-3d]"
              style={{ transform: open ? "rotateY(-135deg)" : "rotateY(0deg)" }}
            >
              <div
                className="absolute inset-0 overflow-hidden rounded-r-sm [backface-visibility:hidden]"
                style={{
                  backgroundColor: selected.color,
                  boxShadow:
                    "inset 10px 0 16px -8px rgba(0,0,0,.65), inset 0 0 0 1px rgba(0,0,0,.15)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={bookCoverUrl(selected)}
                  alt={`${selected.title} cover`}
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 w-3 bg-black/25" />
              </div>
              <div
                className="absolute inset-0 rounded-r-sm bg-[#efe6d2] shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] [backface-visibility:hidden]"
                style={{ transform: "rotateY(180deg)" }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
