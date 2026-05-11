import { createFileRoute } from "@tanstack/react-router";
import { Particles } from "@/components/Particles";
import { MouseGlow } from "@/components/MouseGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { StatsBand } from "@/components/StatsBand";
import { About } from "@/components/About";
import { Tokenomics } from "@/components/Tokenomics";
import { Roadmap } from "@/components/Roadmap";
import { HowToBuy } from "@/components/HowToBuy";
import { Community } from "@/components/Community";
import { Whitepaper } from "@/components/Whitepaper";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MONETRA — The Meme Intelligence Layer" },
      {
        name: "description",
        content:
          "MONETRA is a decentralized experiment where AI narrative meets meme culture. Community-powered, narrative-first digital asset on ETH Base.",
      },
      { property: "og:title", content: "MONETRA — The Meme Intelligence Layer" },
      {
        property: "og:description",
        content: "A decentralized experiment where AI narrative meets meme culture.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "MONETRA — The Meme Intelligence Layer" },
      {
        name: "twitter:description",
        content: "A decentralized experiment where AI narrative meets meme culture.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Particles />
      <MouseGlow />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <StatsBand />
        <About />
        <Tokenomics />
        <Roadmap />
        <HowToBuy />
        <Whitepaper />
        <FAQ />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
