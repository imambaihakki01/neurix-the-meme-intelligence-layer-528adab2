import { motion } from "framer-motion";
import { ArrowRight, FileText, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--gradient-glow)] animate-pulse-glow" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-soft-cyan"
        >
          <Sparkles size={14} />
          The Meme Intelligence Layer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-gradient mb-6 text-7xl font-bold leading-none tracking-tighter md:text-9xl"
        >
          NEURIX
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-4 max-w-2xl text-xl font-light text-foreground/90 md:text-2xl"
        >
          The Meme Intelligence Layer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mb-10 max-w-xl text-base text-muted-foreground"
        >
          A decentralized experiment where AI narrative meets meme culture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://t.me/neurixoffical"
            target="_blank"
            rel="noopener noreferrer"
            className="group btn-gradient inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white"
          >
            Join Community
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#whitepaper"
            className="glass glass-hover inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-foreground"
          >
            <FileText size={16} />
            Read Whitepaper
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-3"
        >
          {[
            { v: "77.7M", l: "Total Supply" },
            { v: "BASE", l: "Network" },
            { v: "0%", l: "Tax" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-xl px-3 py-4 text-center">
              <div className="text-gradient text-xl font-bold md:text-2xl">{s.v}</div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground md:text-xs">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="relative mx-auto mt-20 h-64 w-64 md:h-80 md:w-80"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-purple via-electric-blue to-soft-cyan opacity-30 blur-3xl animate-pulse-glow" />
          <div className="absolute inset-4 rounded-full border border-white/10 animate-spin-slow" />
          <div className="absolute inset-10 rounded-full border border-soft-cyan/20" style={{ animation: "spin 15s linear infinite reverse" }} />
          <div className="absolute inset-16 rounded-full bg-gradient-to-br from-neon-purple to-electric-blue opacity-80 blur-md animate-float" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl text-gradient font-bold animate-float">Ξ</div>
          </div>

          {/* Orbiting dots */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-soft-cyan glow-cyan"
              style={{
                transform: `rotate(${angle}deg) translateX(140px)`,
                animation: `spin ${10 + i}s linear infinite`,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
