"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight, ArrowUp, ExternalLink } from "lucide-react";
import Link from "next/link";
import { milestones, partners, awards, STATS, type MilestoneCategory } from "@/data/milestones";

const M = motion as any;

/* ─── helpers ─────────────────────────────────────────────── */
const CATEGORIES: Array<"All" | MilestoneCategory> = ["All", "Company", "Leadership", "Product", "Community"];

function categoryColor(cat: MilestoneCategory) {
  const map: Record<MilestoneCategory, string> = {
    Company:    "rc-cat--company",
    Leadership: "rc-cat--leadership",
    Product:    "rc-cat--product",
    Community:  "rc-cat--community",
  };
  return map[cat];
}

/* ─── Count-up ─────────────────────────────────────────────── */
function useCountUp(target: number, active: boolean, reduce: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active || reduce) { setVal(target); return; }
    let start: number | null = null;
    const duration = 1200;
    function step(ts: number) {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.round(p * target));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [active, target, reduce]);
  return val;
}

/* ─── StatTile ─────────────────────────────────────────────── */
function StatTile({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const reduce = useReducedMotion() ?? false;
  const count = useCountUp(value, inView, reduce);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="rc-stat">
      <span className="rc-stat-val" aria-live="polite">{count}{suffix}</span>
      <span className="rc-stat-label">{label}</span>
    </div>
  );
}

/* ─── CategoryTabs ─────────────────────────────────────────── */
function CategoryTabs({ active, onChange }: { active: string; onChange: (c: string) => void }) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const handleKey = useCallback((e: React.KeyboardEvent, idx: number) => {
    let next = idx;
    if (e.key === "ArrowRight") next = (idx + 1) % CATEGORIES.length;
    if (e.key === "ArrowLeft")  next = (idx - 1 + CATEGORIES.length) % CATEGORIES.length;
    if (next !== idx) { refs.current[next]?.focus(); onChange(CATEGORIES[next]); }
  }, [onChange]);

  return (
    <div role="tablist" aria-label="Filter milestones by category" className="rc-tabs">
      {CATEGORIES.map((cat, i) => (
        <button
          key={cat}
          ref={el => { refs.current[i] = el; }}
          role="tab"
          aria-selected={active === cat}
          className={`rc-tab${active === cat ? " is-active" : ""}`}
          onClick={() => onChange(cat)}
          onKeyDown={e => handleKey(e, i)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

/* ─── MilestoneCard ────────────────────────────────────────── */
function MilestoneCard({ milestone, side, idx, reduce }: {
  milestone: typeof milestones[number];
  side: "left" | "right";
  idx: number;
  reduce: boolean;
}) {
  const Icon = milestone.icon;
  const displayYear = milestone.year !== null ? `${milestone.month ? milestone.month + " " : ""}${milestone.year}` : null;

  return (
    <M.article
      className={`rc-tl-card rc-tl-card--${side}`}
      aria-labelledby={`rc-m-${milestone.id}`}
      initial={reduce ? false : { opacity: 0, x: side === "left" ? -40 : 40 }}
      whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -4, transition: { duration: 0.3 } }}
    >
      {/* Top row */}
      <div className="rc-m-top">
        <div className="rc-m-top-left">
          {displayYear
            ? <span className="rc-m-year">{displayYear}</span>
            : <span className="rc-m-year rc-m-year--tbd">Date TBD</span>
          }
          <span className={`rc-m-cat ${categoryColor(milestone.category)}`}>{milestone.category}</span>
        </div>
        <span className="rc-m-icon" aria-hidden="true">
          <Icon size={20} strokeWidth={1.8} aria-hidden="true" focusable={false} />
        </span>
      </div>

      <h3 id={`rc-m-${milestone.id}`} className="rc-m-title">{milestone.title}</h3>
      <p className="rc-m-desc">{milestone.text}</p>

      {milestone.link && (
        <a href={milestone.link.href} className="rc-m-link" target="_blank" rel="noopener noreferrer">
          {milestone.link.label}
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      )}
    </M.article>
  );
}

/* ─── Timeline ─────────────────────────────────────────────── */
function Timeline({ items, reduce }: { items: typeof milestones; reduce: boolean }) {
  // Separate dated vs TBD
  const dated = items.filter(item => item.year !== null).sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
  const tbd   = items.filter(item => item.year === null);

  if (process.env.NODE_ENV !== "production" && tbd.length) {
    console.warn(`[milestones] ${tbd.length} milestone(s) have no year:`, tbd.map(item => item.title));
  }

  const all = [...dated, ...tbd];
  if (!all.length) return null;

  return (
    <div className="rc-timeline" aria-label="Milestone timeline" role="list">
      {/* Vertical line */}
      <div className="rc-tl-line" aria-hidden="true" />

      {all.map((item, i) => {
        const dot = (
          <M.div
            className="rc-tl-dot"
            aria-hidden="true"
            initial={reduce ? false : { scale: 0 }}
            whileInView={reduce ? undefined : { scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
          />
        );

        return (
          <div
            className={`rc-tl-row rc-tl-row--${i % 2 === 0 ? "left" : "right"}`}
            key={item.id}
            role="listitem"
          >
            {i % 2 === 0 ? (
              <>
                <MilestoneCard milestone={item} side="left" idx={i} reduce={reduce} />
                {dot}
                <div className="rc-tl-spacer" />
              </>
            ) : (
              <>
                <div className="rc-tl-spacer" />
                {dot}
                <MilestoneCard milestone={item} side="right" idx={i} reduce={reduce} />
              </>
            )}
          </div>
        );
      })}

      {/* TBD group label */}
      {tbd.length > 0 && (
        <div className="rc-tl-tbd-chip" aria-label="Date to be added">Date to be added</div>
      )}
    </div>
  );
}

/* ─── PartnerCard ──────────────────────────────────────────── */
function PartnerCard({ partner }: { partner: typeof partners[number] }) {
  const initials = partner.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  return (
    <li className="rc-partner">
      <span className="rc-partner-logo" aria-hidden="true">{initials}</span>
      <div>
        <strong>{partner.name}</strong>
        <span>{partner.text}</span>
      </div>
      {partner.link && (
        <a href={partner.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${partner.name}`}>
          <ExternalLink size={14} />
        </a>
      )}
    </li>
  );
}

/* ─── ScrollToTop ──────────────────────────────────────────── */
function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  if (!visible) return null;
  return (
    <button
      className="rc-scroll-top"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp size={22} />
    </button>
  );
}

/* ─── Recognition (main export) ───────────────────────────── */
export function Recognition() {
  const [category, setCategory] = useState<string>("All");
  const reduce = useReducedMotion() ?? false;

  const filtered = category === "All"
    ? milestones
    : milestones.filter(m => m.category === category);

  return (
    <section className="recog" id="recognition" data-dark aria-labelledby="recognition-heading">
      {/* ── Header ── */}
      <div className="container">
        <header className="rc-header">
          <div className="rc-eyebrow">
            <span className="rc-eyebrow-line" aria-hidden="true" />
            <span className="kicker">Recognition</span>
          </div>
          <h2 className="rc-title" id="recognition-heading">Milestones along the way.</h2>
          <p className="rc-subtitle">
            A look at the moments that shaped Soulsoft Infotech and my journey as a founder.
          </p>
        </header>

        {/* ── Stats strip ── */}
        <div className="rc-stats" aria-label="Key numbers">
          {STATS.map(s => <StatTile key={s.label} {...s} />)}
        </div>

        {/* ── Category filter ── */}
        <CategoryTabs active={category} onChange={setCategory} />

        {/* ── Timeline ── */}
        <AnimatePresence mode="wait">
          <M.div
            key={category}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <Timeline items={filtered} reduce={reduce} />
          </M.div>
        </AnimatePresence>

        {/* ── Bottom row: Partners + Awards ── */}
        <div className="rc-bottom">
          {/* Partners */}
          <div className="rc-partners" role="group" aria-labelledby="rc-partners-label">
            <h3 className="rc-label" id="rc-partners-label">Partner companies</h3>
            <p className="rc-partners-desc">Companies that extend Soulsoft's reach into new verticals.</p>
            <ul className="rc-partners-grid">
              {partners.map(p => <PartnerCard key={p.name} partner={p} />)}
            </ul>
          </div>

          {/* Awards */}
          <div
            className={`rc-awards${awards.length > 0 ? " rc-awards--filled" : ""}`}
            role="group"
            aria-labelledby="rc-awards-label"
          >
            <h3 className="rc-label" id="rc-awards-label">Awards &amp; press</h3>
            {awards.length > 0 ? (
              <ul className="rc-award-list">
                {awards.map(a => (
                  <li className="rc-award" key={`${a.title}-${a.year}`}>
                    <strong>{a.title}</strong>
                    <span className="rc-award-sep" aria-hidden="true">·</span>
                    <span>{a.organization}</span>
                    <span className="rc-award-sep" aria-hidden="true">·</span>
                    <span>{a.year}</span>
                    {a.link && (
                      <a href={a.link} target="_blank" rel="noopener noreferrer" aria-label="View award">
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="rc-award-empty">Awards and media mentions will appear here.</p>
            )}
          </div>
        </div>

        {/* ── CTA band ── */}
        <div className="rc-cta-band" aria-label="Call to action">
          <div>
            <h3 className="rc-cta-title">Want to build the next milestone together?</h3>
            <p className="rc-cta-sub">Let's talk about what we can create.</p>
          </div>
          <div className="rc-cta-actions">
            <Link href="/contact" className="rc-cta-primary">Let's talk</Link>
            <Link href="/services" className="rc-cta-secondary">View services</Link>
          </div>
        </div>
      </div>

      <ScrollToTop />
    </section>
  );
}
