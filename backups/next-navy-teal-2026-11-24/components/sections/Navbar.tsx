"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { nav } from "@/data/site";

/** Sticky header: shadow once scrolled, active-section link, and a mobile menu (Esc closes it). */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 8);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive("#" + e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    document.querySelectorAll("main section[id]").forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => innerWidth > 1040 && setOpen(false);
    addEventListener("keydown", onKey);
    addEventListener("resize", onResize);
    return () => { removeEventListener("keydown", onKey); removeEventListener("resize", onResize); };
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`} id="top">
      <div className="container header-inner">
        <a className="brand" href="#home" aria-label="Prasad Godage, home">
          <span className="brand-mark" aria-hidden="true" />
          Prasad Godage
        </a>

        <nav className={`primary-nav${open ? " is-open" : ""}`} id="primary-nav" aria-label="Primary">
          <ul className="nav-list">
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={active === l.href ? "is-active" : undefined} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li className="nav-cta">
              <a className="btn btn--primary btn--block" href="#contact" onClick={() => setOpen(false)}>Get in touch</a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <a className="btn btn--primary btn--sm header-cta" href="#contact">Get in touch</a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name="menu" className="icon-open" />
            <Icon name="close" className="icon-close" />
          </button>
        </div>
      </div>
    </header>
  );
}
