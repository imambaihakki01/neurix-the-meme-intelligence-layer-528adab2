import { motion } from "framer-motion";
import { Section } from "./Section";

const stats = [
  { v: "77.7M", l: "Total Supply", s: "Fixed, no inflation" },
  { v: "0%", l: "Tax", s: "Buy & sell" },
  { v: "100%", l: "Community", s: "No private allocation" },
  { v: "BASE", l: "Network", s: "Built on Ethereum L2" },
];

export function StatsBand() {
  return (
    <Section className="!py-16">
      <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-12">
        <div className="absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-neon-purple/20 blur-3xl" />
        <div className="absolute -right-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-soft-cyan/20 blur-3xl" />
        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center sm:text-left"
            >
              <div className="text-gradient text-4xl font-bold tracking-tight md:text-5xl">{s.v}</div>
              <div className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-soft-cyan">{s.l}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.s}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
