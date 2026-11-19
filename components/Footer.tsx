import { profile } from "@/lib/resume-data";
import LocalTime from "@/components/LocalTime";

const YEAR = 2026;

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 text-xs text-muted sm:flex-row">
        <p>
          © {YEAR} {profile.name}
        </p>
        <div className="flex items-center gap-3">
          <p className="font-mono">Built with Next.js &amp; Tailwind CSS</p>
          <span className="text-border">·</span>
          <LocalTime />
        </div>
      </div>
    </footer>
  );
}
