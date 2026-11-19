"use client";

import { useEffect, useState } from "react";
import { DownloadIcon } from "@/components/icons";

export default function ResumePreview({
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
        role="dialog"
        aria-modal="true"
        aria-label="Résumé preview"
        aria-hidden={!open}
        className={`card fixed bottom-6 right-6 z-50 flex h-[70vh] max-h-[560px] w-[90vw] max-w-sm flex-col overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open
            ? "translate-x-0 translate-y-0 opacity-100"
            : "pointer-events-none translate-x-[110%] translate-y-[110%] opacity-0"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <span className="text-sm font-medium text-foreground">Résumé</span>
          <div className="flex items-center gap-1">
            <a
              href="/resume.pdf"
              download
              aria-label="Download résumé"
              className="rounded-md p-1.5 text-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              <DownloadIcon className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close résumé preview"
              className="rounded-md p-1.5 text-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              ✕
            </button>
          </div>
        </div>
        <iframe
          src={open ? "/resume.pdf" : undefined}
          title="Résumé preview"
          className="flex-1 bg-surface"
        />
      </div>
    </>
  );
}
