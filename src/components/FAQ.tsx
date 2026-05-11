import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Section, SectionTitle } from "./Section";

const faqs = [
  {
    q: "What is NEURIX?",
    a: "NEURIX is a decentralized, narrative-first digital asset built on the Base network. It explores where meme culture and AI-driven storytelling intersect.",
  },
  {
    q: "Is NEURIX a utility token?",
    a: "No. NEURIX is positioned as a narrative layer — value emerges from culture, attention, and community participation rather than a traditional utility promise.",
  },
  {
    q: "What chain is it deployed on?",
    a: "NEURIX is deployed on ETH BASE — Coinbase's Ethereum Layer 2 — for fast, low-cost transactions.",
  },
  {
    q: "Is there a tax on transactions?",
    a: "No. NEURIX has 0% tax on buys and sells. The contract is designed to be simple and fully community-owned.",
  },
  {
    q: "How can I participate?",
    a: "Join the official Telegram and follow us on X to stay aligned with the narrative. A full How-To-Buy guide will be released alongside DEX listing.",
  },
  {
    q: "Is this financial advice?",
    a: "Absolutely not. NEURIX is an experimental project. Crypto assets are volatile and you may lose your entire allocation. Do your own research.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq">
      <SectionTitle eyebrow="Questions" title="Frequently Asked" description="Everything you need to know before joining the network." />
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.25) }}
              className={`glass overflow-hidden rounded-xl transition-all ${isOpen ? "border-neon-purple/40" : ""}`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-medium">{f.q}</span>
                <Plus size={18} className={`shrink-0 text-soft-cyan transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
