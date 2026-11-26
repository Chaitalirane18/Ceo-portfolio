"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Icon from "@/components/Icon";
import { expertise, type ExpertiseItem } from "@/data/expertise";

const M = motion as any;

const item = {
  hidden: { opacity: 0, x: 28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

/**
 * Modern Kinetic Expertise Section.
 * Replaces generic box cards with an interactive dual-pillar kinetic stream:
 * Left: Dynamic live capability radar console with orbital animations, tags, and deep scope.
 * Right: Sleek borderless numbered editorial stream with hover synchronization & motion transitions.
 */
export default function Expertise() {
  const reduce = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeItem: ExpertiseItem = expertise[activeIndex];

  // Gentle auto-advance when not interacting
  useEffect(() => {
    if (isPaused || reduce) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % expertise.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, reduce]);

  return (
    <section className="expertise-kinetic-section" id="expertise" aria-labelledby="expertise-title">
      <style dangerouslySetInnerHTML={{ __html: expertiseStyles }} />

      <div className="container">
        {/* Section Header */}
        <div className="expertise-header text-center">
          <div className="expertise-eyebrow-badge">
            <span className="expertise-dot-orange" aria-hidden="true" />
            <span>CORE EXPERTISE &amp; LEADERSHIP PILLARS</span>
            <span className="expertise-dot-blue" aria-hidden="true" />
          </div>
          <h2 id="expertise-title" className="expertise-main-title">
            Where Strategic Vision Meets <span className="title-gradient-soulsoft">Software Innovation.</span>
          </h2>
          <p className="expertise-lead-text">
            Fifteen years of multidisciplinary leadership bridging enterprise technology architectures, automation engineering, and business expansion.
          </p>
        </div>

        {/* Cinematic Dual-Pillar Interactive Matrix (NO CARDS!) */}
        <div
          className="expertise-matrix-grid"
        >
          {/* Left Column: Dynamic Capability Radar & Live Focus Console */}
          <div className="expertise-console-col">
            <div className="expertise-live-console">
              {/* Orbital Tech Background Graphic */}
              <div className="radar-orbital-rings" aria-hidden="true">
                <div className="radar-ring radar-ring-1" />
                <div className="radar-ring radar-ring-2" />
                <div className="radar-ring radar-ring-3" />
                <div className="radar-particle" />
              </div>

              {/* Console Top Bar */}
              <div className="console-top-meta">
                <div className="console-pill-active">
                  <span className="console-indicator-dot" />
                  <span>DOMAIN FOCUS · {activeItem.num} OF 08</span>
                </div>
                <div className="console-progress-track">
                  <M.div
                    key={activeIndex}
                    className="console-progress-fill"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 4.5, ease: "linear" }}
                  />
                </div>
              </div>

              {/* Dynamic Animated Content Lockup */}
              <AnimatePresence mode="wait">
                <M.div
                  key={activeItem.num}
                  className="console-content-stage"
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, x: -24, transition: { duration: 0.25 } }}
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: reduce ? 0 : 0.07 } },
                  }}
                >
                  <M.div className="console-icon-halo" variants={item}>
                    <Icon name={activeItem.icon} />
                    <span className="console-num-watermark">{activeItem.num}</span>
                  </M.div>

                  <M.h3 className="console-domain-title" variants={item}>{activeItem.title}</M.h3>
                  <M.p className="console-domain-desc" variants={item}>{activeItem.text}</M.p>

                  <M.div className="console-scope-box" variants={item}>
                    <span className="scope-label">Strategic Focus</span>
                    <p className="scope-text">{activeItem.scope}</p>
                  </M.div>

                  <M.div className="console-tags-cloud" variants={item}>
                    {activeItem.tags.map((tag) => (
                      <span key={tag} className="console-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </M.div>
                </M.div>
              </AnimatePresence>

              {/* Console Bottom Action */}
              <div className="console-footer-action">
                <a className="btn-consult-domain" href="#contact">
                  <span>Consult On This Domain</span>
                  <Icon name="arrow" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Kinetic Editorial Stream (NO CARDS!) */}
          <div
            className="expertise-stream-col"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="stream-header-strip">
              <span>EXPLORE ALL 8 CORE PILLARS</span>
              <span>SELECT TO INSPECT DOMAIN</span>
            </div>

            <ol className="expertise-kinetic-list">
              {expertise.map((item, idx) => {
                const isActive = activeIndex === idx;

                return (
                  <li
                    key={item.num}
                    className={`stream-item${isActive ? " is-active" : ""}`}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => setActiveIndex(idx)}
                  >
                    {/* Active Accent Bar */}
                    <div className="stream-accent-rail">
                      {isActive && (
                        <M.div
                          layoutId="streamActiveBar"
                          className="stream-active-indicator"
                          transition={{ type: "spring", stiffness: 450, damping: 35 }}
                        />
                      )}
                    </div>

                    {/* Number */}
                    <span className="stream-index">{item.num}</span>

                    {/* Title & Micro Summary */}
                    <div className="stream-text-block">
                      <h4 className="stream-title">{item.title}</h4>
                      <p className="stream-micro-text">{item.text}</p>
                    </div>

                    {/* Right Icon / Indicator */}
                    <div className="stream-action-marker">
                      <span className="stream-icon-box">
                        <Icon name={item.icon} />
                      </span>
                      <Icon name="arrow" className="stream-arrow" />
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

const expertiseStyles = `
/* ==========================================================================
   Kinetic Expertise Matrix — Zero Boring Cards, Pure Executive Motion
   Colors: Soulsoft Deep Teal-Navy (#0b2c3e), Ocean Blue (#1a658d), Orange (#f07c00)
   ========================================================================== */
.expertise-kinetic-section {
  position: relative;
  overflow: hidden;
  padding: clamp(64px, 8vh, 100px) 0;
  background: radial-gradient(110% 80% at 50% 0%, #ffffff 0%, #f6f7f8 60%, #eff0f1 100%);
  border-top: 1px solid rgba(26, 101, 141, 0.12);
  border-bottom: 1px solid rgba(26, 101, 141, 0.12);
}

/* Header */
.expertise-header {
  max-width: 860px;
  margin: 0 auto clamp(36px, 5vh, 52px);
  text-align: center;
}

.expertise-eyebrow-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 16px;
  margin-bottom: 12px;
  border-radius: 999px;
  background: #ffffff;
  border: 1px solid rgba(26, 101, 141, 0.2);
  box-shadow: 0 2px 8px rgba(11, 44, 62, 0.05);
  font-family: var(--font-head);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #1a658d;
}

.expertise-dot-orange {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #f07c00;
  box-shadow: 0 0 0 3px rgba(240, 124, 0, 0.25);
}

.expertise-dot-blue {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #1a658d;
}

.expertise-main-title {
  font-family: var(--font-head);
  font-size: clamp(30px, 3.8vw, 46px);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #0b2c3e;
  text-wrap: balance;
}

.title-gradient-soulsoft {
  background: linear-gradient(135deg, #1a658d 0%, #2180b4 50%, #f07c00 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.expertise-lead-text {
  max-width: 66ch;
  margin: 14px auto 0;
  font-size: clamp(15px, 1.6vw, 18px);
  line-height: 1.6;
  color: #53585b;
}

/* ==========================================================================
   Matrix Grid Layout
   ========================================================================== */
.expertise-matrix-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.25fr);
  gap: clamp(28px, 4vw, 48px);
  align-items: start;
}

/* ==========================================================================
   Left Column: Dynamic Live Capability Radar Console
   ========================================================================== */
.expertise-console-col {
  position: sticky;
  top: 96px;
}

.expertise-live-console {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 540px;
  padding: clamp(32px, 3.8vw, 44px);
  border-radius: 24px;
  background: linear-gradient(145deg, #09222f 0%, #0b2c3e 55%, #0f3a52 100%);
  border: 1.5px solid rgba(26, 101, 141, 0.4);
  box-shadow: 0 20px 50px rgba(11, 44, 62, 0.3);
  color: #ffffff;
}

/* Orbital Rings Animated Graphics */
.radar-orbital-rings {
  position: absolute;
  top: -60px;
  right: -60px;
  width: 320px;
  height: 320px;
  pointer-events: none;
  opacity: 0.25;
}

.radar-ring {
  position: absolute;
  border-radius: 50%;
  border: 1.5px dashed #2180b4;
}

.radar-ring-1 {
  inset: 0;
  animation: radarSpin 45s linear infinite;
}

.radar-ring-2 {
  inset: 40px;
  border-color: #f07c00;
  animation: radarSpin 35s linear infinite reverse;
}

.radar-ring-3 {
  inset: 80px;
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.radar-particle {
  position: absolute;
  top: 40px;
  right: 40px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f07c00;
  box-shadow: 0 0 16px #f07c00;
  animation: radarPulse 3s ease-in-out infinite alternate;
}

@keyframes radarSpin {
  to { transform: rotate(360deg); }
}

@keyframes radarPulse {
  0% { transform: scale(0.8); opacity: 0.6; }
  100% { transform: scale(1.4); opacity: 1; }
}

/* Console Top Bar */
.console-top-meta {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
}

.console-pill-active {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  border-radius: 999px;
  background: rgba(26, 101, 141, 0.25);
  border: 1px solid rgba(26, 101, 141, 0.4);
  font-family: var(--font-head);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #72b1d3;
}

.console-indicator-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #f07c00;
  box-shadow: 0 0 6px #f07c00;
}

.console-progress-track {
  width: 80px;
  height: 3px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.15);
  overflow: hidden;
}

.console-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #1a658d, #f07c00);
  transform-origin: left;
}

/* Dynamic Content Stage */
.console-content-stage {
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.console-icon-halo {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(26, 101, 141, 0.4), rgba(240, 124, 0, 0.2));
  border: 1.5px solid rgba(240, 124, 0, 0.4);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  color: #f07c00;
  margin-bottom: 20px;
}

.console-icon-halo .icon {
  width: 30px;
  height: 30px;
}

.console-num-watermark {
  position: absolute;
  left: 84px;
  top: 8px;
  line-height: 1;
  font-family: var(--font-head);
  font-size: 48px;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.08);
  pointer-events: none;
}

.console-domain-title {
  font-family: var(--font-head);
  font-size: clamp(22px, 2.2vw, 28px);
  font-weight: 800;
  line-height: 1.25;
  color: #ffffff;
  letter-spacing: -0.015em;
  margin-bottom: 12px;
}

.console-domain-desc {
  font-size: 15px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 20px;
}

.console-scope-box {
  padding: 14px 16px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 20px;
}

.scope-label {
  display: block;
  font-family: var(--font-head);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #f07c00;
  margin-bottom: 4px;
}

.scope-text {
  font-size: 13px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
}

.console-tags-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.console-tag-pill {
  padding: 4px 12px;
  border-radius: 6px;
  font-family: var(--font-head);
  font-size: 11px;
  font-weight: 600;
  background: rgba(26, 101, 141, 0.25);
  color: #eeeff0;
  border: 1px solid rgba(26, 101, 141, 0.35);
}

/* Console Footer Action */
.console-footer-action {
  position: relative;
  z-index: 1;
  padding-top: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.btn-consult-domain {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 22px;
  border-radius: 10px;
  font-family: var(--font-head);
  font-size: 13px;
  font-weight: 700;
  color: #09222f;
  background: linear-gradient(135deg, #f07c00 0%, #ff9826 100%);
  border: none;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(240, 124, 0, 0.35);
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-consult-domain:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(240, 124, 0, 0.5);
}

.btn-consult-domain .icon {
  width: 15px;
  height: 15px;
  transition: transform 0.2s;
}

.btn-consult-domain:hover .icon {
  transform: translateX(3px);
}

/* ==========================================================================
   Right Column: Kinetic Editorial Stream (NO CARDS!)
   ========================================================================== */
.expertise-stream-col {
  display: flex;
  flex-direction: column;
}

.stream-header-strip {
  display: flex;
  justify-content: space-between;
  padding: 0 16px 12px;
  border-bottom: 1.5px solid rgba(26, 101, 141, 0.16);
  font-family: var(--font-head);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #707a7f;
  margin-bottom: 8px;
}

.expertise-kinetic-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.stream-item {
  position: relative;
  display: grid;
  grid-template-columns: 8px 44px minmax(0, 1fr) 52px;
  gap: 16px;
  align-items: center;
  padding: 16px 20px 16px 10px;
  border-radius: 12px;
  cursor: pointer;
  background: transparent;
  transition: background-color 0.25s, transform 0.25s;
}

.stream-item:hover {
  background: rgba(26, 101, 141, 0.05);
}

.stream-item.is-active {
  background: #ffffff;
  box-shadow: 0 4px 20px rgba(11, 44, 62, 0.06);
}

/* Accent Rail */
.stream-accent-rail {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}

.stream-active-indicator {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 4px;
  border-radius: 4px;
  background: linear-gradient(180deg, #f07c00 0%, #1a658d 100%);
  box-shadow: 0 0 10px rgba(240, 124, 0, 0.4);
}

/* Number */
.stream-index {
  font-family: var(--font-head);
  font-size: 16px;
  font-weight: 800;
  color: #a0a8ac;
  transition: color 0.2s;
}

.stream-item.is-active .stream-index {
  color: #f07c00;
}

/* Text Block */
.stream-text-block {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.stream-title {
  font-family: var(--font-head);
  font-size: clamp(15px, 1.4vw, 17px);
  font-weight: 700;
  color: #0b2c3e;
  margin: 0;
  transition: color 0.2s;
}

.stream-item.is-active .stream-title,
.stream-item:hover .stream-title {
  color: #1a658d;
}

.stream-micro-text {
  font-size: 13px;
  line-height: 1.4;
  color: #707a7f;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Action Marker */
.stream-action-marker {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
}

.stream-icon-box {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: rgba(26, 101, 141, 0.08);
  color: #1a658d;
  transition: background-color 0.2s, color 0.2s;
}

.stream-icon-box .icon {
  width: 14px;
  height: 14px;
}

.stream-item.is-active .stream-icon-box {
  background: #f07c00;
  color: #ffffff;
}

.stream-arrow {
  width: 14px;
  height: 14px;
  color: #d4d7d8;
  transition: transform 0.2s, color 0.2s;
}

.stream-item:hover .stream-arrow,
.stream-item.is-active .stream-arrow {
  color: #1a658d;
  transform: translateX(4px);
}

/* ==========================================================================
   Responsive Adaptations
   ========================================================================== */
@media (max-width: 1024px) {
  .expertise-matrix-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .expertise-console-col {
    position: static;
  }
  .expertise-live-console {
    min-height: 0;
  }
}

@media (max-width: 640px) {
  .stream-item {
    grid-template-columns: 4px 32px minmax(0, 1fr) 28px;
    gap: 10px;
    padding: 12px 10px;
  }
  .stream-icon-box {
    display: none;
  }
  .stream-micro-text {
    display: none;
  }
  .stream-title {
    font-size: 14px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .radar-ring-1, .radar-ring-2, .radar-particle {
    animation: none;
  }
}
`;
