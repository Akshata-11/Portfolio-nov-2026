import { profile } from "@/lib/resume-data";
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import Typewriter from "@/components/Typewriter";

export default function Hero() {
  return (
    <section id="about" className="scroll-mt-20 border-b border-border px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
          <Typewriter
            segments={[
              { text: "Akshata Kawale", className: "text-foreground" },
              { text: " " },
              {
                text: `/ ${profile.title} / ${profile.location}`,
                className: "font-normal text-muted",
              },
            ]}
          />
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-foreground">
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

          <div className="ml-auto flex items-center gap-1">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="rounded-full p-2.5 text-muted transition-colors hover:text-accent"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="rounded-full p-2.5 text-muted transition-colors hover:text-accent"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
