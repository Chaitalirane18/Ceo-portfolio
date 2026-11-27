"use client";

import { useState, useEffect, useCallback } from "react";
import { useReducedMotion } from "framer-motion";
import Icon from "@/components/Icon";
import { expertise } from "@/data/expertise";

const TOTAL = expertise.length;
const AUTO_INTERVAL = 5000;

export default function ExpertiseExplorer() {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const reduceMotion = useReducedMotion();
  const paused = hovered || focused || reduceMotion === true;

  const goTo = useCallback((idx: number) => {
    setActive(idx);
    setAnimKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setTimeout(() => goTo((active + 1) % TOTAL), AUTO_INTERVAL);
    return () => window.clearTimeout(timer);
  }, [active, paused, goTo]);

  const item = expertise[active];

  return (
    <div
      className="xp-shell"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        const nextTarget = event.relatedTarget;
        if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) setFocused(false);
      }}
    >
      {/* ── Detail panel (left / dark card) ────────────────── */}
      <div className="xp-panel" key={animKey} aria-live={paused ? "polite" : "off"} aria-atomic="true">
        {/* Badge */}
        <div className="xp-badge">
          <span className="xp-badge-dot" aria-hidden="true" />
          <span>DOMAIN FOCUS &nbsp;·&nbsp; {item.num} OF {String(TOTAL).padStart(2, "0")}</span>
        </div>

        {/* Big ghost number + icon row */}
        <div className="xp-panel-top">
          <span className="xp-ghost-num" aria-hidden="true">{item.num}</span>
          <span className="xp-panel-ic" aria-hidden="true">
            <Icon name={item.icon} />
          </span>
        </div>

        {/* Title & description */}
        <h3 className="xp-panel-title">{item.title}</h3>
        <p className="xp-panel-desc">{item.text}</p>

        {/* Strategic focus box */}
        <div className="xp-focus-box">
          <span className="xp-focus-label">STRATEGIC FOCUS</span>
          <p className="xp-focus-text">{item.scope}</p>
        </div>

        {/* Tags */}
        <ul className="xp-panel-tags" aria-label={`Tags for ${item.title}`}>
          {item.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        {/* Pillar progress and five-second timer */}
        <div className="xp-progress" aria-hidden="true">
          {expertise.map((_, i) => (
            <span
              key={i}
              className={`xp-pip${i < active ? " is-complete" : ""}${i === active ? " is-active" : ""}`}
            />
          ))}
        </div>
        <div
          className={`xp-timer-track${paused ? " is-paused" : ""}`}
          aria-hidden="true"
        >
          <div className="xp-timer-fill" />
        </div>
      </div>

      {/* ── List panel (right) ──────────────────────────────── */}
      <div className="xp-list-wrap">
        <div className="xp-list-header">
          <span>EXPLORE ALL {TOTAL} CORE PILLARS</span>
          <span>SELECT TO INSPECT DOMAIN</span>
        </div>
        <ul className="xp-list" aria-label="Expertise domains">
          {expertise.map((e, i) => {
            const isActive = i === active;
            return (
              <li key={e.num}>
                <button
                  className={`xp-row${isActive ? " is-active" : ""}`}
                  aria-pressed={isActive}
                  onClick={() => goTo(i)}
                >
                  <span className="xp-row-num" aria-hidden="true">{e.num}</span>
                  <span className="xp-row-body">
                    <span className="xp-row-title">{e.title}</span>
                    <span className="xp-row-sub">
                      {e.text.length > 60 ? e.text.slice(0, 60) + "…" : e.text}
                    </span>
                  </span>
                  <span className="xp-row-ic" aria-hidden="true">
                    <Icon name={e.icon} />
                  </span>
                  <span className="xp-row-arrow" aria-hidden="true">
                    <Icon name="arrow" />
                  </span>
                  {/* Timer sweep underline on the active row */}
                  {isActive && (
                    <span
                      className={`xp-row-timer${paused ? " is-paused" : ""}`}
                      aria-hidden="true"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
