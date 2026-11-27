import { dotItems } from "@/data/portfolio";

/** Left dot menu for the home page (desktop). One dot per section. */
export default function Dots() {
  return (
    <nav className="dots-nav" id="dotsNav" aria-label="Sections">
      {dotItems.map((n) => <a key={n.href} href={n.href} aria-label={n.label}><span>{n.label}</span></a>)}
    </nav>
  );
}
