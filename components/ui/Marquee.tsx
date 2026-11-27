import type { ReactNode } from "react";

/** Endless horizontal strip (CSS only). The second copy is hidden from assistive tech. Pauses on hover. */
export default function Marquee({ items, label }: { items: ReactNode[]; label: string }) {
  const row = (hidden: boolean) => (
    <ul className="marquee-row" aria-hidden={hidden || undefined}>
      {items.map((it, i) => <li key={i}>{it}</li>)}
    </ul>
  );
  return (
    <div className="marquee" role="region" aria-label={label}>
      <div className="marquee-track">{row(false)}{row(true)}</div>
    </div>
  );
}
