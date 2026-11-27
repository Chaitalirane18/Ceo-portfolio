"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { productRows, beliefs } from "@/data/portfolio";
import { stock } from "./Ph";

export function Products() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const listRef = useRef<HTMLElement | null>(null);

  // Preload all 5 stock images on mount for instant zero-flash previews
  useEffect(() => {
    productRows.forEach((p) => {
      const img = new Image();
      img.src = stock(p.img);
    });
  }, []);

  // Automatically select the product closest to the focal line as user scrolls up or down
  useEffect(() => {
    const handleScroll = () => {
      const nav = listRef.current;
      if (!nav) return;

      const navRect = nav.getBoundingClientRect();
      // Only auto-select when the product list overlaps the middle focal area
      if (navRect.bottom < 140 || navRect.top > window.innerHeight - 140) return;

      const rows = nav.querySelectorAll<HTMLElement>(".p-row");
      if (!rows.length) return;

      const focalY = window.innerHeight * 0.45;
      let closestIdx = 0;
      let minDistance = Infinity;

      rows.forEach((row, idx) => {
        const rect = row.getBoundingClientRect();
        const rowCenter = rect.top + rect.height / 2;
        const distance = Math.abs(rowCenter - focalY);
        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = idx;
        }
      });

      setActiveIdx(closestIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIdx = (idx + 1) % productRows.length;
      setActiveIdx(nextIdx);
      const rows = listRef.current?.querySelectorAll<HTMLElement>(".p-row");
      rows?.[nextIdx]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIdx = (idx - 1 + productRows.length) % productRows.length;
      setActiveIdx(prevIdx);
      const rows = listRef.current?.querySelectorAll<HTMLElement>(".p-row");
      rows?.[prevIdx]?.focus();
    }
  };

  const activeProduct = productRows[activeIdx] || productRows[0];

  return (
    <section id="products" className="products-section" aria-labelledby="products-title">
      <div className="container">
        {/* Header Block */}
        <div className="p-head">
          <div className="p-head-text">
            <span className="kicker">What we build</span>
            <h2 id="products-title" className="h2 lines">Software for the businesses that keep India running.</h2>
          </div>
          <Link className="p-all-btn" href="/products">
            <span>All 12 products</span>
            <span className="p-btn-arrow" aria-hidden="true">→</span>
          </Link>
        </div>

        {/* 2-Column Split: Numbered List on Left, Sticky Cross-Fading Preview on Right */}
        <div className="p-section-grid">
          <div className="p-list-wrap">
            <nav
              ref={listRef}
              className="p-list"
              aria-label="Featured Soulsoft Products"
            >
              {productRows.map((p, idx) => {
                const num = String(idx + 1).padStart(2, "0");
                const isActive = activeIdx === idx;
                return (
                  <Link
                    key={p.name}
                    href="/products"
                    className={`p-row${isActive ? " is-hovered" : ""}`}
                    style={{ "--i": idx } as React.CSSProperties}
                    onMouseEnter={() => setActiveIdx(idx)}
                    onFocus={() => setActiveIdx(idx)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    aria-label={`${p.name} - ${p.tag}: ${p.desc}`}
                  >
                    {/* Mobile 16:10 Image (hidden on desktop) */}
                    <div className="p-mobile-media" aria-hidden="true">
                      <img
                        src={stock(p.img)}
                        alt=""
                        loading="lazy"
                        onError={(e) => { e.currentTarget.style.display = "none"; }}
                      />
                      <span className="p-mobile-tag">{p.tag}</span>
                    </div>

                    <div className="p-row-inner">
                      <span className="p-num">{num}</span>
                      <div className="p-content">
                        <div className="p-title-line">
                          <h3 className="p-name">{p.name}</h3>
                          <span className="p-arrow" aria-hidden="true">→</span>
                        </div>
                        <p className="p-desc">{p.desc}</p>
                      </div>
                      <div className="p-tag-wrap">
                        <span className="p-tag">{p.tag}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right Preview Panel (Desktop Only, Sticky, Cross-fades) */}
          <aside className="p-preview-wrapper" aria-hidden="true">
            <div className="p-preview-card">
              <div className="p-preview-media">
                {productRows.map((p, idx) => (
                  <img
                    key={p.name}
                    className={`p-preview-img${activeIdx === idx ? " is-active" : ""}`}
                    src={stock(p.img)}
                    alt=""
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                ))}
              </div>
              <div className="p-preview-overlay">
                <span className="p-preview-tag">{activeProduct.tag}</span>
                <h4 className="p-preview-title">{activeProduct.name}</h4>
                <p className="p-preview-desc">{activeProduct.desc}</p>
              </div>
            </div>
          </aside>
        </div>
        <details className="p-image-credits">
          <summary>Image credits</summary>
          <p>
            Grocery shop photo by{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Grocery_Shop_in_a_small_Town_in_South_India_(1).JPG" target="_blank" rel="noreferrer">Ask27</a>
            {" "}via Wikimedia Commons, licensed under{" "}
            <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noreferrer">CC BY-SA 3.0</a>.
          </p>
        </details>
      </div>
    </section>
  );
}

const BELIEF_PROOFS: Record<string, string> = {
  "01": "Built for agri dealers, shops and chemists",
  "02": "12 products, priced for small businesses",
  "03": "Teams in Sangamner, Pune and Nashik",
};

function BeliefIcon({ n }: { n: string }) {
  if (n === "01") {
    return (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
      </svg>
    );
  }
  if (n === "02") {
    return (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9.5" />
        <path d="M9 7.5h6M9 11h6M9 7.5c1.8 0 3 1.1 3 2.5s-1.2 2.5-3 2.5l4 4.5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-6-5.686-6-10a6 6 0 1 1 12 0c0 4.314-6 10-6 10Z" />
      <path d="M12 8.5v3M10.5 10h3" />
      <path d="M18.5 3.5l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6.6-1.4Z" />
    </svg>
  );
}

export function Beliefs() {
  const rowsRef = useRef<HTMLDivElement | null>(null);
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setLineProgress(1);
      return;
    }

    const onScroll = () => {
      const el = rowsRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.78;
      const end = vh * 0.25;
      const total = rect.height + (start - end);
      const current = start - rect.top;
      const pct = Math.max(0, Math.min(1, current / (total || 1)));
      setLineProgress(pct);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="beliefs" aria-label="What I believe">
      <div className="container">
        <div className="b-split">
          <div className="b-left">
            <div className="b-glow" aria-hidden="true" />
            <span className="kicker">What I believe</span>
            <h2 className="h2 lines b-heading">Three ideas behind everything we build.</h2>
            <p className="b-intro">
              Practical principles shaped by over a decade of building software for Indian enterprises.
            </p>
          </div>

          <div className="b-right" ref={rowsRef}>
            <div className="b-progress-track" aria-hidden="true">
              <div
                className="b-progress-fill"
                style={{ transform: `scaleY(${lineProgress})` }}
              />
            </div>

            <div className="b-rows">
              {beliefs.map((b, idx) => (
                <article
                  className="b-row reveal"
                  key={b.n}
                  style={{ "--i": idx } as React.CSSProperties}
                >
                  <div className="b-row-num-wrap">
                    <span className="b-row-num" aria-hidden="true">{b.n}</span>
                    <span className="b-row-icon b-row-icon--mobile" aria-hidden="true">
                      <BeliefIcon n={b.n} />
                    </span>
                  </div>

                  <div className="b-row-body">
                    <h3>{b.title}</h3>
                    <p>{b.text}</p>
                    <span className="b-proof">
                      <span className="b-proof-dot" aria-hidden="true" />
                      {BELIEF_PROOFS[b.n] || "Proven across India"}
                    </span>
                  </div>

                  <div className="b-row-icon b-row-icon--desktop" aria-hidden="true">
                    <BeliefIcon n={b.n} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
