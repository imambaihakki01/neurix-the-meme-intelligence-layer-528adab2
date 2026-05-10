import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Section, SectionTitle } from "./Section";

const chapters = [
  {
    title: "1. Introduction",
    body: [
      "Neurix is a decentralized digital asset built around the concept of meme intelligence and narrative-driven value creation.",
      "In modern crypto ecosystems, value is often derived not only from utility but from attention, culture, and belief systems. Neurix exists at this intersection.",
    ],
  },
  {
    title: "2. Vision",
    body: [
      "To establish a decentralized narrative ecosystem where artificial intelligence themes and meme culture converge into a self-sustaining network.",
    ],
  },
  {
    title: "3. Problem Statement",
    body: [
      "Most tokens fall into two categories:",
      "• Pure speculation (no direction)",
      "• Overpromised utility (rarely delivered)",
      "This creates a gap where narrative-driven, community-first assets can emerge.",
    ],
  },
  {
    title: "4. Solution: Neurix",
    body: [
      "Neurix introduces a narrative-first model, where:",
      "• Memes act as carriers of value",
      "• Community acts as the engine",
      "• Blockchain acts as the infrastructure",
    ],
  },
  {
    title: "5. Core Architecture",
    body: [
      "Narrative Intelligence — A system where cultural signals and meme propagation define relevance.",
      "Decentralization — No centralized control, evolution is community-driven.",
      "Viral Layer — Growth is achieved through organic spread rather than forced marketing.",
    ],
  },
  {
    title: "6. Token Overview",
    body: [
      "Name: Neurix",
      "Symbol: NRX",
      "Total Supply: 77,700,000",
      "Type: Meme / Experimental Asset",
      "Blockchain: ETH BASE",
    ],
  },
  {
    title: "7. Tokenomics",
    body: [
      "Distribution is structured to prioritize liquidity and community participation while maintaining sustainability.",
      "• Liquidity Pool — 60%",
      "• Community — 20%",
      "• Marketing — 10%",
      "• Team — 5%",
      "• Reserve — 5%",
    ],
  },
  {
    title: "8. Roadmap",
    body: ["Expanded roadmap with realistic ecosystem growth phases."],
  },
  {
    title: "9. Use Cases",
    body: ["• Community-driven campaigns", "• Meme-based engagement", "• Experimental AI narrative integration"],
  },
  {
    title: "10. Risk Factors",
    body: ["• High volatility", "• Experimental framework", "• No guaranteed value"],
  },
  {
    title: "11. Conclusion",
    body: [
      "Neurix represents a shift from utility-first thinking toward narrative-driven ecosystems.",
      "It is not merely a token — but a decentralized experiment in collective intelligence.",
    ],
  },
];

export function Whitepaper() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="whitepaper">
      <SectionTitle eyebrow="Document" title="Whitepaper" description="The full Neurix protocol thesis." />

      <div className="mx-auto max-w-3xl space-y-3">
        {chapters.map((c, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.3) }}
              className={`glass overflow-hidden rounded-xl transition-all ${isOpen ? "border-neon-purple/40 glow-purple" : ""}`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-medium">{c.title}</span>
                <Plus
                  size={18}
                  className={`shrink-0 text-soft-cyan transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                />
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
                    <div className="space-y-2 px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                      {c.body.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>
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
