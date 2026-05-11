import { Send, Twitter, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative px-6 pb-10 pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative h-px w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-purple to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-soft-cyan to-transparent blur-sm" />
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-neon-purple via-electric-blue to-soft-cyan">
                <span className="absolute inset-[1.5px] rounded-[10px] bg-background" />
                <span className="text-gradient relative text-lg font-bold">Ξ</span>
              </span>
              <span className="text-lg font-bold tracking-wide">NEURIX</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              The Meme Intelligence Layer — a decentralized experiment where AI narrative meets meme culture.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://t.me/neurixoffical"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-full text-soft-cyan"
              >
                <Send size={16} />
              </a>
              <a
                href="https://x.com/neurixoffical"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-full text-soft-cyan"
              >
                <Twitter size={16} />
              </a>
              <span className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground/40">
                <Github size={16} />
              </span>
            </div>
          </div>

          <div>
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-soft-cyan">Explore</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="transition-colors hover:text-foreground">About</a></li>
              <li><a href="#tokenomics" className="transition-colors hover:text-foreground">Tokenomics</a></li>
              <li><a href="#roadmap" className="transition-colors hover:text-foreground">Roadmap</a></li>
              <li><a href="#whitepaper" className="transition-colors hover:text-foreground">Whitepaper</a></li>
            </ul>
          </div>

          <div>
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-soft-cyan">Community</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://t.me/neurixoffical" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">Telegram</a></li>
              <li><a href="https://x.com/neurixoffical" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">Twitter / X</a></li>
              <li><a href="#faq" className="transition-colors hover:text-foreground">FAQ</a></li>
              <li><a href="#community" className="transition-colors hover:text-foreground">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground md:flex-row">
          <div>© 2026 NEURIX. All rights reserved.</div>
          <div className="font-mono uppercase tracking-[0.25em]">Built on Base · 0% Tax · Community Owned</div>
        </div>
      </div>
    </footer>
  );
}
