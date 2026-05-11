import { motion } from "framer-motion";
import { Brain, Users, Shield, FlaskConical } from "lucide-react";
import { Section, SectionTitle } from "./Section";

const principles = [
  { icon: Brain, title: "Narrative First", desc: "Value is driven by story and perception" },
  { icon: Users, title: "Community Powered", desc: "Growth comes from participation" },
  { icon: Shield, title: "Decentralized Nature", desc: "No central authority" },
  { icon: FlaskConical, title: "Experimental Design", desc: "Built to evolve" },
];

export function About() {
  return (
    <Section id="about">
      <SectionTitle eyebrow="Manifesto" title="About Monetra" />

      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass glass-hover rounded-2xl p-8"
        >
          <p className="text-base leading-relaxed text-foreground/90">
            Monetra is a community-driven digital asset designed to explore the convergence of
            artificial intelligence narratives and decentralized ecosystems.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass glass-hover rounded-2xl p-8"
        >
          <p className="text-base leading-relaxed text-foreground/90">
            Rather than positioning itself purely as a utility token or speculative asset, Monetra
            operates as a <span className="text-soft-cyan">narrative layer</span>, where value
            emerges from collective belief, culture, and participation.
          </p>
        </motion.div>
      </div>

      <div className="mt-24">
        <SectionTitle eyebrow="Foundation" title="Core Principles" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass glass-hover group relative overflow-hidden rounded-2xl p-6"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-neon-purple/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neon-purple/20 to-electric-blue/20 text-soft-cyan">
                  <p.icon size={22} />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
