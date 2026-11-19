"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

export default function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    function tick() {
      setTime(formatter.format(new Date()));
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  return (
    <span className="font-mono tabular-nums">
      {time} IST
    </span>
  );
}
