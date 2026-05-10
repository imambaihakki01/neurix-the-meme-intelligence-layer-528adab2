import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionTitle({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-16 max-w-2xl text-center"
    >
      {eyebrow && (
        <div className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-soft-cyan">{eyebrow}</div>
      )}
      <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {description && <p className="text-muted-foreground">{description}</p>}
    </motion.div>
  );
}

export function Section({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative px-6 py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
