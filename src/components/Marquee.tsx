import { Sparkles } from "lucide-react";

const items = [
  "MEME INTELLIGENCE",
  "NARRATIVE LAYER",
  "BASE NETWORK",
  "0% TAX",
  "COMMUNITY POWERED",
  "AI × CULTURE",
  "DECENTRALIZED",
  "10M SUPPLY",
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="relative z-10 overflow-hidden border-y border-white/5 bg-background/40 py-4 backdrop-blur-sm">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"
        aria-hidden
      />
      <div className="flex gap-12 whitespace-nowrap" style={{ animation: "marquee 35s linear infinite" }}>
        {loop.map((t, i) => (
          <div key={i} className="flex shrink-0 items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <Sparkles size={12} className="text-soft-cyan" />
            <span className="bg-gradient-to-r from-foreground/80 to-foreground/40 bg-clip-text text-transparent">
              {t}
            </span>
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}
