"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import Reveal from "@/components/ui/Reveal";
import { tech } from "@/data/tech";

const M = motion as any;

export default function Tech() {
  const reduce = useReducedMotion();
  const [tab, setTab] = useState(0);
  const [hold, setHold] = useState(false);
  const [manual, setManual] = useState(false);
  const cur = tech[tab];
  const auto = !reduce && !hold && !manual;

  useEffect(() => {
    if (!auto) return;
    const t = setTimeout(() => setTab((n) => (n + 1) % tech.length), 6000);
    return () => clearTimeout(t);
  }, [auto, tab]);
  useEffect(() => {
    if (!manual) return;
    const t = setTimeout(() => setManual(false), 10000);
    return () => clearTimeout(t);
  }, [manual, tab]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const n = (tab + (e.key === "ArrowRight" ? 1 : -1) + tech.length) % tech.length;
    setTab(n);
    setManual(true);
    document.getElementById(`tech-tab-${n}`)?.focus();
  };

  return (
    <section className="section section--ice" id="tech" aria-labelledby="tech-title">
      <div className="container">
        <Reveal className="section-head text-center mx-auto">
          <span className="eyebrow">Technology Expertise</span>
          <h2 id="tech-title">Modern, Scalable &amp; Enterprise-Grade Technology Stack</h2>
          <p className="lead mx-auto">
            Architecting reliable, high-concurrency systems across proven enterprise backend, frontend, mobile, database, and cloud infrastructure.
          </p>
        </Reveal>

        <Reveal>
          <div onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)} onFocus={() => setHold(true)} onBlur={() => setHold(false)}>
            <div className="tabs tabs--light" role="tablist" aria-label="Technology categories" onKeyDown={onKey}>
              {tech.map((g, i) => (
                <button
                  key={g.group}
                  id={`tech-tab-${i}`}
                  role="tab"
                  type="button"
                  className="tab"
                  aria-selected={tab === i}
                  aria-controls="tech-panel"
                  tabIndex={tab === i ? 0 : -1}
                  onClick={() => { setTab(i); setManual(true); }}
                >
                  {tab === i && <M.span layoutId="tech-pill" className="tab-pill" transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }} />}
                  <span className="tab-text">{g.group}</span>
                  {tab === i && auto && <span className="tab-progress" key={`p${tab}`} aria-hidden="true" />}
                </button>
              ))}
            </div>

            <div className="tab-panel tab-panel--light" id="tech-panel" role="tabpanel" aria-labelledby={`tech-tab-${tab}`}>
              <AnimatePresence mode="wait">
                <M.ul className="tags" key={tab} initial="hide" animate="show" exit={{ opacity: 0, transition: { duration: 0.15 } }} variants={{ show: { transition: { staggerChildren: reduce ? 0 : 0.05 } } }}>
                  {cur.items.map((t) => (
                    <M.li
                      className="tech-badge"
                      key={t.label}
                      variants={{ hide: { opacity: 0, scale: 0.7 }, show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 360, damping: 20 } } }}
                    >
                      {t.logo ? <Image src={`/images/tech/${t.logo}.svg`} width={24} height={24} alt="" /> : <Icon name={t.icon ?? "layers"} />}
                      {t.label}
                    </M.li>
                  ))}
                </M.ul>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
