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

/**
 * Synthesizes a soft page-flip "swish" via Web Audio API — a single warm
 * noise sweep with a smooth sine-shaped envelope, rather than sharp bright
 * transients. No external audio file, so there's nothing to hotlink or
 * license.
 */
export function playPageFlip() {
  try {
    const audioCtx = getContext();
    if (!audioCtx) return;

    const duration = 0.42;
    const now = audioCtx.currentTime;

    const bufferSize = Math.floor(audioCtx.sampleRate * duration);
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;

    // Warm, paper-like band — no harsh high end.
    const bandpass = audioCtx.createBiquadFilter();
    bandpass.type = "bandpass";
    bandpass.Q.value = 0.5;
    bandpass.frequency.setValueAtTime(900, now);
    bandpass.frequency.linearRampToValueAtTime(2200, now + duration * 0.45);
    bandpass.frequency.linearRampToValueAtTime(700, now + duration);

    const lowpass = audioCtx.createBiquadFilter();
    lowpass.type = "lowpass";
    lowpass.frequency.value = 3200;

    // Smooth sine-shaped swell in/out instead of a sharp attack/decay.
    const gain = audioCtx.createGain();
    const steps = 48;
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const envelope = Math.sin(Math.PI * t) ** 1.6;
      gain.gain.linearRampToValueAtTime(0.001 + envelope * 0.32, now + t * duration);
    }

    noise.connect(bandpass);
    bandpass.connect(lowpass);
    lowpass.connect(gain);
    gain.connect(audioCtx.destination);

    noise.start(now);
    noise.stop(now + duration);
  } catch {
    // Audio unavailable or blocked by the browser — fail silently.
  }
}
