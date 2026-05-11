import { motion } from "framer-motion";
import { CheckCircle2, Circle, Loader2 } from "lucide-react";
import { Section, SectionTitle } from "./Section";

const phases = [
  {
    phase: "Phase 1",
    title: "Genesis",
    status: "active" as const,
    items: ["Website launch", "Brand & narrative development", "Community formation", "Token deployment"],
  },
  {
    phase: "Phase 2",
    title: "Expansion",
    status: "soon" as const,
    items: ["DEX listing", "Meme & viral campaigns", "Community growth scaling"],
  },
  {
    phase: "Phase 3",
    title: "Evolution",
    status: "soon" as const,
    items: ["AI narrative integration", "Ecosystem exploration", "Strategic collaborations"],
  },
];

const statusMeta = {
  active: { label: "In Progress", icon: Loader2, cls: "text-soft-cyan border-soft-cyan/40 bg-soft-cyan/5" },
  done: { label: "Completed", icon: CheckCircle2, cls: "text-emerald-300 border-emerald-400/30 bg-emerald-400/5" },
  soon: { label: "Upcoming", icon: Circle, cls: "text-muted-foreground border-white/10 bg-white/5" },
};

export function Roadmap() {
  return (
    <Section id="roadmap">
      <SectionTitle eyebrow="Trajectory" title="Roadmap" description="Our journey through the decentralized narrative space." />

      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-neon-purple via-electric-blue to-soft-cyan md:left-1/2 md:block" />

        <div className="space-y-12">
          {phases.map((p, i) => {
            const meta = statusMeta[p.status];
            const Icon = meta.icon;
            return (
              <motion.div
                key={p.phase}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className={`relative grid md:grid-cols-2 md:gap-16 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
              >
                <div className={`md:text-right ${i % 2 ? "md:text-left" : ""}`}>
                  <div className="glass glass-hover rounded-2xl p-6">
                    <div className={`mb-3 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest ${meta.cls}`}>
                      <Icon size={10} className={p.status === "active" ? "animate-spin" : ""} />
                      {meta.label}
                    </div>
                    <div className="font-mono text-xs uppercase tracking-widest text-soft-cyan">{p.phase}</div>
                    <h3 className="mt-1 text-2xl font-bold text-gradient">{p.title}</h3>
                    <ul className="mt-4 space-y-2">
                      {p.items.map((it) => (
                        <li key={it} className="text-sm text-muted-foreground">{it}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="absolute left-4 top-6 -translate-x-1/2 md:left-1/2">
                  <div className="relative h-4 w-4 rounded-full bg-gradient-to-br from-neon-purple to-soft-cyan glow-purple">
                    <div className="absolute inset-0 rounded-full bg-soft-cyan/40 animate-ping" />
                  </div>
                </div>

                <div />
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
