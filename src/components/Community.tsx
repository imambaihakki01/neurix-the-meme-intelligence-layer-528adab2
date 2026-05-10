import { motion } from "framer-motion";
import { Send, Twitter, AlertTriangle, ArrowUpRight } from "lucide-react";
import { Section, SectionTitle } from "./Section";

const socials = [
  {
    icon: Send,
    label: "Telegram",
    handle: "@neurixoffical",
    href: "https://t.me/neurixoffical",
    desc: "Join the live chat and announcements",
    accent: "from-soft-cyan/30 to-electric-blue/20",
    glow: "0 0 40px oklch(0.82 0.14 200 / 0.35)",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    handle: "@neurixoffical",
    href: "https://x.com/neurixoffical",
    desc: "Follow the narrative in real time",
    accent: "from-neon-purple/30 to-electric-blue/20",
    glow: "0 0 40px oklch(0.62 0.24 295 / 0.35)",
  },
];

export function Community() {
  return (
    <Section id="community">
      <SectionTitle
        eyebrow="Network"
        title="Join The Community"
        description="Plug into the early network and help shape the Neurix narrative."
      />

      <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
        {socials.map((s, i) => (
          <motion.a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass glass-hover group relative overflow-hidden rounded-2xl p-6"
          >
            <div
              className={`absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${s.accent} blur-3xl opacity-60 transition-opacity duration-500 group-hover:opacity-100`}
            />
            <div className="relative flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-neon-purple/20 to-electric-blue/20 text-soft-cyan"
                  style={{ boxShadow: s.glow }}
                >
                  <s.icon size={20} />
                </div>
                <div>
                  <div className="text-base font-semibold">{s.label}</div>
                  <div className="font-mono text-xs text-soft-cyan">{s.handle}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-soft-cyan"
              />
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-20 max-w-3xl"
      >
        <div className="glass relative overflow-hidden rounded-2xl border border-amber-500/20 p-6">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5" />
          <div className="relative flex items-start gap-4">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400"
              style={{ boxShadow: "0 0 20px rgb(251 191 36 / 0.3)" }}
            >
              <AlertTriangle size={18} />
            </div>
            <div>
              <div className="mb-1 text-sm font-semibold text-amber-400">Disclaimer</div>
              <p className="text-sm text-muted-foreground">
                Neurix is an experimental project with no guarantee of financial return.
                Participation involves risk.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
