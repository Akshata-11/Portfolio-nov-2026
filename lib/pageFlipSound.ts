let ctx: AudioContext | null = null;

function getContext(): AudioContext | null {
  const AudioCtx =
    typeof window !== "undefined" &&
    (window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext);
  if (!AudioCtx) return null;
  if (!ctx) ctx = new AudioCtx();
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

/** One quick, bright paper "flick" — a short burst of high-passed noise. */
function flick(audioCtx: AudioContext, at: number, duration: number, peak: number) {
  const bufferSize = Math.floor(audioCtx.sampleRate * duration);
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    // Slight amplitude taper across the burst itself for a crisper transient.
    data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
  }

  const noise = audioCtx.createBufferSource();
  noise.buffer = buffer;

  const highpass = audioCtx.createBiquadFilter();
  highpass.type = "highpass";
  highpass.frequency.value = 2200;

  const bandpass = audioCtx.createBiquadFilter();
  bandpass.type = "bandpass";
  bandpass.Q.value = 0.6;
  bandpass.frequency.setValueAtTime(5500, at);
  bandpass.frequency.exponentialRampToValueAtTime(2000, at + duration);

  const gain = audioCtx.createGain();
  gain.gain.setValueAtTime(0.0001, at);
  gain.gain.linearRampToValueAtTime(peak, at + 0.006);
  gain.gain.exponentialRampToValueAtTime(0.0001, at + duration);

  noise.connect(highpass);
  highpass.connect(bandpass);
  bandpass.connect(gain);
  gain.connect(audioCtx.destination);

  noise.start(at);
  noise.stop(at + duration);
}

/**
 * Synthesizes a page-flip sound via Web Audio API — two quick bright
 * transients (the page lifting, then landing), rather than one long whoosh.
 * No external audio file, so there's nothing to hotlink or license.
 */
export function playPageFlip() {
  try {
    const audioCtx = getContext();
    if (!audioCtx) return;
    const now = audioCtx.currentTime;
    flick(audioCtx, now, 0.09, 0.35);
    flick(audioCtx, now + 0.1, 0.13, 0.22);
  } catch {
    // Audio unavailable or blocked by the browser — fail silently.
  }
}
