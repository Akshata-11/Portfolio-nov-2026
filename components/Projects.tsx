import { projects } from "@/lib/resume-data";
import { ArrowUpRightIcon } from "@/components/icons";
import { TechIcon } from "@/components/techIcons";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-b border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Projects
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const Card = (
              <div className="card group flex h-full flex-col rounded-2xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-medium text-foreground">
                    {project.name}
                  </h3>
                  {project.link && (
                    <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accent" />
                  )}
                </div>
                <p className="mt-1 font-mono text-xs text-muted">
                  {project.subtitle}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 rounded-full bg-foreground/5 px-2.5 py-1 text-[11px] text-muted"
                    >
                      <TechIcon name={t} className="h-3 w-3" />
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-4 font-mono text-[11px] text-muted">
                  {project.period}
                </p>
              </div>
            );

            return project.link ? (
              <a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noreferrer noopener"
                className="block h-full"
              >
                {Card}
              </a>
            ) : (
              <div key={project.name}>{Card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
