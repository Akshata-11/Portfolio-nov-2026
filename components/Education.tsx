import { certifications, education, research } from "@/lib/resume-data";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 border-b border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Education &amp; Research
        </h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="card rounded-2xl p-6">
            <h3 className="text-base font-medium text-foreground">
              {education.degree}
            </h3>
            <p className="mt-1 text-sm text-muted">{education.school}</p>
            <p className="mt-1 font-mono text-xs text-muted">
              CGPA: {education.cgpa}
            </p>

            <h4 className="mt-6 text-sm font-medium text-foreground">
              Certifications
            </h4>
            <ul className="mt-3 space-y-2">
              {certifications.map((c) => (
                <li key={c} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card rounded-2xl p-6">
            <h3 className="text-base font-medium text-foreground">
              {research.org}
            </h3>
            <p className="mt-1 text-sm text-muted">{research.role}</p>
            <p className="mt-1 font-mono text-xs text-muted">{research.period}</p>

            <ul className="mt-4 space-y-2.5">
              {research.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
