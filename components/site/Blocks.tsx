import Link from "next/link";
import { WHATSAPP } from "@/data/portfolio";

/** Title block at the top of every inner page. */
export function PageHero({ kicker, title, text }: { kicker: string; title: string; text: string }) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="kicker">{kicker}</span>
        <h1 className="h1 lines">{title}</h1>
        <p className="lead reveal">{text}</p>
      </div>
    </section>
  );
}

/** Dark call-to-action band shown above the footer. */
export function Cta({ title = "Let's build something better together." }: { title?: string }) {
  return (
    <section className="cta" data-dark>
      <div className="container cta-in">
        <h2 className="cta-title lines">{title}</h2>
        <div className="cta-actions reveal">
          <Link className="btn-orange magnetic" href="/contact">Start a conversation →</Link>
          <a className="btn-line magnetic" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">WhatsApp me</a>
        </div>
      </div>
    </section>
  );
}

/** Three cards that point from the home page to the inner pages. */
export function Explore() {
  const items = [
    { href: "/about", n: "01", title: "About Prasad", text: "Expertise, community leadership, milestones and partners." },
    { href: "/products", n: "02", title: "Products", text: "All 12 Soulsoft products for agriculture, retail, pharmacy, manufacturing and more." },
    { href: "/services", n: "03", title: "Services", text: "Custom software, integration, cloud and consulting, with the industries and tools behind them." },
  ];
  return (
    <section className="explore" aria-label="Explore the site">
      <div className="container">
        <span className="kicker">Explore</span>
        <h2 className="h2 lines">Where would you like to go next?</h2>
        <div className="ex-links">
          {items.map((i) => (
            <Link className="ex-link reveal" href={i.href} key={i.href}>
              <span className="ex-link-n">{i.n}</span>
              <h3>{i.title}</h3>
              <p>{i.text}</p>
              <span className="ex-link-go">Open →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
