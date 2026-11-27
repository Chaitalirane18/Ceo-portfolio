"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";
import { pages } from "@/data/portfolio";

/** Skip link, progress bar, cursor glow, header, back-to-top. Behaviour lives in Global.tsx. */
export function ScrollToTop() {
  return (
    <button className="to-top" id="toTop" type="button" aria-label="Back to top">
      <ArrowUp size={22} strokeWidth={2.25} aria-hidden="true" />
    </button>
  );
}

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="progress" id="progress" aria-hidden="true" />
      <div className="glow" id="glow" aria-hidden="true" />

      <header className="header" id="header" data-solid={isHome ? "0" : "1"}>
        <div className="container bar">
          <Link className="brand magnetic" href="/" aria-label="Prasad Godage, home"><span className="c">©</span> Prasad Godage</Link>
          <ul className="nav" id="nav">
            {pages.map((p) => {
              const active = p.href === "/" ? isHome : pathname.startsWith(p.href);
              const href = p.href === "/products" ? (isHome ? "#products" : "/#products") : p.href;
              const cls = `magnetic${active ? " active" : ""}`;
              return (
                <li key={p.href}>
                  {href.startsWith("#") ? (
                    <a className={cls} href={href} aria-current={active ? "page" : undefined}>{p.label}</a>
                  ) : (
                    <Link className={cls} href={href} aria-current={active ? "page" : undefined}>{p.label}</Link>
                  )}
                </li>
              );
            })}
          </ul>
          <Link className="hdr-cta" href="/contact">Let&apos;s talk</Link>
          <button className="menu-btn" id="menuBtn" aria-label="Menu" aria-expanded="false" aria-controls="nav"><span /><span /></button>
        </div>
      </header>

      <ScrollToTop />
    </>
  );
}
