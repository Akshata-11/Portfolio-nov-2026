import { skillGroups } from "@/lib/resume-data";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-b border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Skills
        </h2>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-medium text-foreground">
                {group.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-foreground/5 px-3 py-1 text-xs text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
