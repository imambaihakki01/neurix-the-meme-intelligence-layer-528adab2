import { motion } from "framer-motion";
import { Lock, Ban, ShieldCheck } from "lucide-react";
import { Section, SectionTitle } from "./Section";

const dist = [
  { label: "Liquidity Pool", pct: 60, color: "#8B5CF6" },
  { label: "Community", pct: 20, color: "#3B82F6" },
  { label: "Marketing", pct: 10, color: "#22D3EE" },
  { label: "Team", pct: 5, color: "#A78BFA" },
  { label: "Reserve", pct: 5, color: "#67E8F9" },
];

const features = [
  { icon: Ban, text: "Fixed Supply (No Inflation)" },
  { icon: ShieldCheck, text: "No Hidden Mint" },
  { icon: Lock, text: "Liquidity Lock (Planned)" },
];

export function Tokenomics() {
  // build conic gradient
  let start = 0;
  const gradient = dist
    .map((d) => {
      const seg = `${d.color} ${start}% ${start + d.pct}%`;
      start += d.pct;
      return seg;
    })
    .join(", ");

  return (
    <Section id="tokenomics">
      <SectionTitle eyebrow="On-chain" title="Tokenomics" description="Transparent distribution engineered for sustainable growth." />

      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto flex h-80 w-80 items-center justify-center md:h-96 md:w-96"
        >
          <div
            className="absolute inset-0 rounded-full opacity-30 blur-3xl"
            style={{ background: `conic-gradient(${gradient})` }}
          />
          <div
            className="relative h-full w-full rounded-full"
            style={{ background: `conic-gradient(${gradient})` }}
          >
            <div className="absolute inset-8 rounded-full bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center">
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Total Supply</div>
              <div className="mt-2 text-3xl md:text-4xl font-bold text-gradient">77,700,000</div>
              <div className="mt-1 text-sm text-soft-cyan">NRX</div>
            </div>
          </div>
        </motion.div>

        {/* Distribution */}
        <div className="space-y-4">
          {dist.map((d, i) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-xl p-4"
            >
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full" style={{ background: d.color, boxShadow: `0 0 12px ${d.color}` }} />
                  <span className="font-medium">{d.label}</span>
                </div>
                <span className="font-mono text-soft-cyan">{d.pct}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${d.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${d.color}, ${d.color}99)`, boxShadow: `0 0 12px ${d.color}` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass glass-hover flex items-center gap-3 rounded-xl p-5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-neon-purple/20 to-soft-cyan/20 text-soft-cyan">
              <f.icon size={18} />
            </div>
            <span className="text-sm font-medium">{f.text}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
