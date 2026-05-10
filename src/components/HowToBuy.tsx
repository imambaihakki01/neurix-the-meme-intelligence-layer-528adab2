import { motion } from "framer-motion";
import { Wallet, Repeat, Gem } from "lucide-react";
import { Section, SectionTitle } from "./Section";

const steps = [
  { icon: Wallet, title: "Connect wallet", desc: "Link your Web3 wallet to begin." },
  { icon: Repeat, title: "Swap via DEX", desc: "Exchange ETH for NRX on a decentralized exchange." },
  { icon: Gem, title: "Hold NRX", desc: "Become part of the Neurix narrative network." },
];

export function HowToBuy() {
  return (
    <Section id="how-to-buy">
      <div className="mb-4 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-soft-cyan">
          <span className="h-2 w-2 rounded-full bg-soft-cyan animate-pulse" />
          Coming Soon
        </span>
      </div>
      <SectionTitle title="How To Buy" />

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass glass-hover relative overflow-hidden rounded-2xl p-8"
          >
            <div className="absolute right-6 top-6 font-mono text-5xl font-bold text-white/5">0{i + 1}</div>
            <div className="relative">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-purple to-electric-blue text-white glow-purple">
                <s.icon size={24} />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
