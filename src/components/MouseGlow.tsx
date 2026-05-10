import { useEffect, useState } from "react";

export function MouseGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-0 h-[500px] w-[500px] rounded-full opacity-40 mix-blend-screen blur-3xl transition-transform duration-300 ease-out"
      style={{
        left: pos.x - 250,
        top: pos.y - 250,
        background:
          "radial-gradient(circle, oklch(0.62 0.24 295 / 0.6), oklch(0.65 0.2 250 / 0.3) 40%, transparent 70%)",
      }}
    />
  );
}
