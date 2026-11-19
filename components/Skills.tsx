import { skillGroups } from "@/lib/resume-data";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-b border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="text-foreground">Skills</span>{" "}
          <span className="text-muted">&amp; Competencies</span>
        </h2>

        <div className="mt-10 border-t border-border">
          {skillGroups.map((group, i) => (
            <div key={group.category}>
              <div className="h-2 bg-[repeating-linear-gradient(135deg,transparent,transparent_4px,var(--border)_4px,var(--border)_5px)]" />
              <div className="grid grid-cols-1 gap-2 border-b border-border py-6 sm:grid-cols-[220px_1fr] sm:gap-6">
                <p className="text-sm font-medium text-foreground">
                  <span className="mr-2 text-muted">
                    {String(i + 1).padStart(3, "0")}
                  </span>
                  {group.category}
                </p>
                <p className="text-justify text-sm leading-relaxed text-muted">
                  {group.items.join(", ")}.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
