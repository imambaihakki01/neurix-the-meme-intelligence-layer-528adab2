import { motion } from "framer-motion";
import { Send, Twitter, AlertTriangle } from "lucide-react";
import { Section, SectionTitle } from "./Section";

export function Community() {
  return (
    <Section id="community">
      <SectionTitle
        eyebrow="Network"
        title="Join The Community"
        description="Join the early network and participate in shaping the narrative."
      />

      <div className="mx-auto flex max-w-md flex-wrap items-center justify-center gap-4">
        {[
          { icon: Send, label: "Telegram", href: "#" },
          { icon: Twitter, label: "Twitter (X)", href: "#" },
        ].map((s, i) => (
          <motion.a
            key={s.label}
            href={s.href}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group glass glass-hover inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-semibold"
          >
            <s.icon size={18} className="text-soft-cyan transition-transform group-hover:rotate-12" />
            {s.label}
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
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400" style={{ boxShadow: "0 0 20px rgb(251 191 36 / 0.3)" }}>
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
