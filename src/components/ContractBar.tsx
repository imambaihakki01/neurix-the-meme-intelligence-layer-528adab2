import { useState } from "react";
import { Check, Copy } from "lucide-react";

const CONTRACT = "Coming Soon — TBA at launch";

export function ContractBar() {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };
  return (
    <div className="mx-auto mt-8 flex w-full max-w-xl items-center gap-2 rounded-full glass px-3 py-2">
      <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.2em] text-soft-cyan">CA</span>
      <span className="flex-1 truncate font-mono text-xs text-muted-foreground sm:text-sm">{CONTRACT}</span>
      <button
        onClick={onCopy}
        className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-white/10"
      >
        {copied ? <Check size={12} className="text-soft-cyan" /> : <Copy size={12} />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
