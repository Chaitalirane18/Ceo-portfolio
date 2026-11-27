"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { nav } from "@/data/site";

const M = motion as any;

/** Fixed header: transparent over the hero, glass blur once scrolled, sliding active pill, reading-progress bar, mobile menu. */
export default function Navbar() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 24);
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
    const onResize = () => innerWidth > 1160 && setOpen(false);
    addEventListener("keydown", onKey);
    addEventListener("resize", onResize);
    return () => { removeEventListener("keydown", onKey); removeEventListener("resize", onResize); };
  }, [open]);

  return (
    <header className={`site-header${scrolled || open ? " is-scrolled" : ""}`} id="top">
      <M.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />
      <div className="container header-inner">
        <a className="brand" href="#home" aria-label="Prasad Godage, home">
          <span className="brand-logo" aria-hidden="true">
            <Image src="/images/soulsoft-logo.png" width={3375} height={3375} sizes="36px" alt="" />
          </span>
          PRASAD GODAGE
        </a>

        <nav className={`primary-nav${open ? " is-open" : ""}`} id="primary-nav" aria-label="Primary">
          <ul className="nav-list">
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={active === l.href ? "is-active" : undefined} onClick={() => setOpen(false)}>
                  {active === l.href && (
                    <M.span
                      layoutId="nav-pill"
                      className="nav-pill"
                      transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="nav-text">{l.label}</span>
                </a>
              </li>
            ))}
            <li className="nav-cta">
              <a className="btn btn--primary btn--block" href="#contact" onClick={() => setOpen(false)}>Let&apos;s Connect</a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <a className="btn btn--accent btn--sm header-cta" href="#contact">Let&apos;s Connect</a>
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
