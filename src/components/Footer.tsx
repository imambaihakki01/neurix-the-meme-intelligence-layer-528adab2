export function Footer() {
  return (
    <footer className="relative px-6 pb-10 pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative h-px w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-purple to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-soft-cyan to-transparent blur-sm" />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2 text-lg font-bold">
            <span className="text-gradient text-2xl">Ξ</span>
            <span>NEURIX</span>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <li><a href="#whitepaper" className="hover:text-soft-cyan transition-colors">Whitepaper</a></li>
            <li><a href="https://t.me/neurixoffical" target="_blank" rel="noopener noreferrer" className="hover:text-soft-cyan transition-colors">Telegram</a></li>
            <li><a href="https://x.com/neurixoffical" target="_blank" rel="noopener noreferrer" className="hover:text-soft-cyan transition-colors">Twitter</a></li>
            <li><a href="#community" className="hover:text-soft-cyan transition-colors">Disclaimer</a></li>
          </ul>

          <div className="text-xs text-muted-foreground">© 2026 NEURIX. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
