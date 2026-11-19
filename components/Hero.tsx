import { profile } from "@/lib/resume-data";
import { DownloadIcon, MailIcon } from "@/components/icons";
import Typewriter from "@/components/Typewriter";

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
        <h1 className="whitespace-nowrap text-[9vw] font-bold leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          Akshata Kawale
        </h1>

        <p className="mt-6 text-sm font-bold tracking-[0.3em] text-foreground sm:text-base">
          <Typewriter
            lines={[
              [
                { text: profile.title.split(" ")[0].toUpperCase(), className: "text-accent" },
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
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
          >
            <DownloadIcon className="h-4 w-4" />
            Résumé
          </a>
        </div>
      </div>
    </section>
  );
}
