// src/Components/ui/Marquee.jsx
import React from "react";
import { cn } from "../../lib/utils"; // adjust if your utils path differs

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  repeat = 4,
  ...props
}) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden [--duration:25s] [--gap:3rem]",
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee",
              {
                "animate-marquee-reverse": reverse,
                "group-hover:[animation-play-state:paused]": pauseOnHover,
              }
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
