import { profile } from "@/lib/resume-data";
import { DownloadIcon, MailIcon } from "@/components/icons";
import Typewriter from "@/components/Typewriter";
import ResumeOverlay from "@/components/ResumeOverlay";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-border bg-background px-6 py-24 text-left sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 10% 100%, color-mix(in srgb, var(--accent) 10%, transparent), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <h1 className="whitespace-nowrap font-serif text-[9vw] italic font-bold leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          Akshata Kawale
        </h1>

        <p className="mt-6 text-sm font-bold tracking-[0.3em] text-zinc-500 sm:text-base">
          <Typewriter
            lines={[
              [
                { text: profile.title.split(" ")[0].toUpperCase(), className: "text-zinc-700" },
                { text: ` ${profile.title.split(" ").slice(1).join(" ").toUpperCase()}` },
              ],
            ]}
          />
          <br />
          {profile.location.toUpperCase()}
        </p>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted">
          {profile.summary}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            <MailIcon className="h-4 w-4" />
            Get in touch
          </a>
          <ResumeOverlay triggerClassName="peer inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5">
            <DownloadIcon className="h-4 w-4" />
            Résumé
          </ResumeOverlay>

          {/* A half-sheet of "paper" peeks up from the bottom-right on hover.
              Must be a direct sibling of the .peer link above for peer-hover
              to apply — position:fixed keeps it visually anchored regardless. */}
          <div
            aria-hidden="true"
            className="pointer-events-none fixed bottom-0 right-10 z-50 h-56 w-40 translate-y-[85%] rounded-t-md bg-surface p-4 shadow-2xl ring-1 ring-black/10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] peer-hover:translate-y-1/2"
          >
            <div className="h-1.5 w-3/4 rounded bg-foreground/15" />
            <div className="mt-3 h-1 w-full rounded bg-foreground/10" />
            <div className="mt-2 h-1 w-5/6 rounded bg-foreground/10" />
            <div className="mt-2 h-1 w-full rounded bg-foreground/10" />
            <div className="mt-2 h-1 w-2/3 rounded bg-foreground/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
