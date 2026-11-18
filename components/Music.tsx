import { tracks } from "@/lib/resume-data";

// Deterministic lean angles so the crate looks hand-stacked, not uniform.
const leans = [-4, 3, -2, 5, -3, 2];

export default function Music() {
  return (
    <section id="music" className="scroll-mt-24 border-b border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Music
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          What&apos;s usually playing while I code. Hover a cover, then click to
          open it in Spotify.
        </p>

        <div className="no-scrollbar mt-14 overflow-x-auto pb-4 pt-6">
          <div className="mx-auto flex w-fit items-end gap-6 px-2">
            {tracks.map((track, i) => (
              <a
                key={track.title}
                href={`https://open.spotify.com/search/${encodeURIComponent(
                  `${track.title} ${track.artist}`,
                )}`}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Open ${track.title} by ${track.artist} on Spotify`}
                className="group relative block h-28 w-28 shrink-0 sm:h-32 sm:w-32"
                style={{ transform: `rotate(${leans[i % leans.length]}deg)` }}
              >
                {/* The CD — tucked behind the cover, slides out upward on hover */}
                <div
                  className="absolute left-1/2 top-0 z-0 h-[85%] w-[85%] -translate-x-1/2 -translate-y-[15%] rounded-full opacity-0 transition-all duration-300 ease-out group-hover:-translate-y-[55%] group-hover:opacity-100"
                  style={{
                    background:
                      "repeating-radial-gradient(circle at center, #1a1a1a 0px, #1a1a1a 2px, #090909 2px, #090909 4px)",
                    boxShadow: "0 6px 16px rgba(0,0,0,.4)",
                  }}
                >
                  <div
                    className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full ring-2 ring-black/40"
                    style={{ backgroundColor: track.color }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={track.art}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5f1e6]" />
                </div>

                {/* The album cover */}
                <div className="relative z-10 h-full w-full overflow-hidden rounded-md shadow-lg ring-1 ring-black/10 transition-transform duration-300 ease-out group-hover:-translate-y-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={track.art}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-1 left-1 rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
                    {track.genre}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
