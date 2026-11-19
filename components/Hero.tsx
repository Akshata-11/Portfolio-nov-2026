import { profile } from "@/lib/resume-data";
import Typewriter from "@/components/Typewriter";

export default function Hero() {
  return (
    <section id="about" className="scroll-mt-20 border-b border-border px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="whitespace-nowrap text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          <Typewriter segments={[{ text: "Akshata Kawale" }]} />
        </h1>

        <p className="mt-2 text-base text-muted sm:text-lg">
          {profile.title} · {profile.location}
        </p>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-foreground">
          {profile.summary}
        </p>
      </div>
    </section>
  );
}
