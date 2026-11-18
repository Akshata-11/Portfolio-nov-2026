import { profile } from "@/lib/resume-data";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "@/components/icons";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Contact
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&apos;s build something fast, accessible, and pixel-perfect.
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
    </section>
  );
}
