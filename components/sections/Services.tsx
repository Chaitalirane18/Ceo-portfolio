"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Icon from "@/components/Icon";
import { services, type ServiceCategory } from "@/data/services";

const M = motion as any;

const standards = [
  { icon: "rocket", text: "High-Concurrency Performance" },
  { icon: "shield", text: "Enterprise Security & Encryption" },
  { icon: "layers", text: "Modular, Cloud-Ready Architecture" },
  { icon: "users", text: "Dedicated Engineering Governance" },
];

export default function Services() {
  const reduce = useReducedMotion();
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const cur: ServiceCategory = services[activeTab];

  // Gentle auto-cycle through the 4 service categories when not hovering
  useEffect(() => {
    if (isPaused || reduce) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % services.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, reduce]);

  return (
    <section className="services-motion-section" id="services" aria-labelledby="services-title">
      <style dangerouslySetInnerHTML={{ __html: servicesStyles }} />

      <div className="container">
        {/* Section Header */}
        <div className="services-header text-center">
          <div className="services-eyebrow-badge">
            <span className="services-pulse-orange" aria-hidden="true" />
            <span>OUR PROJECT-BASED SERVICES · ENTERPRISE CAPABILITIES</span>
            <span className="services-pulse-blue" aria-hidden="true" />
          </div>
          <h2 id="services-title" className="services-main-title">
            End-to-End Software, Integration &amp; <span className="title-gradient-soulsoft">Modernization Services.</span>
          </h2>
          <p className="services-lead-text">
            From greenfield custom engineering and cloud migration to mission-critical ERP integrations and business process automation.
          </p>
        </div>

        {/* 4-Category Motion Interactive Tab Selector */}
        <div
          className="services-tabs-bar-wrap"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="services-tabs-bar" role="tablist" aria-label="Service categories">
            {services.map((s, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  id={`service-tab-${idx}`}
                  aria-selected={isActive}
                  aria-controls={`service-panel-${idx}`}
                  className={`service-nav-tab${isActive ? " is-active" : ""}`}
                  onClick={() => setActiveTab(idx)}
                >
                  {isActive && (
                    <M.span
                      layoutId="activeServiceTabPill"
                      className="service-active-pill"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="tab-num-chip">{s.num}</span>
                  <span className="tab-title-text">{s.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Cinematic Animated Interactive Stage */}
        <div
          className="services-stage-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <M.div
              key={cur.id}
              className="services-stage-deck"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              role="tabpanel"
              id={`service-panel-${activeTab}`}
              aria-labelledby={`service-tab-${activeTab}`}
            >
              {/* Left Column: Category Narrative, Standards & CTA */}
              <div className="stage-left-col">
                <div className="stage-top-meta">
                  <div className="stage-icon-halo">
                    <Icon name={cur.icon} />
                    <span className="stage-num-watermark">{cur.num}</span>
                  </div>
                  <div>
                    <span className="stage-tagline">{cur.tagline}</span>
                    <h3 className="stage-category-title">{cur.title}</h3>
                  </div>
                </div>

                <p className="stage-lead-p">{cur.lead}</p>

                {/* Delivery Standards Box */}
                <div className="stage-standards-box">
                  <span className="standards-label">Delivery Standards</span>
                  <div className="standards-grid">
                    {standards.map((std) => (
                      <div key={std.text} className="standard-chip">
                        <Icon name={std.icon} />
                        <span>{std.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="stage-action-wrap">
                  <a className="btn-service-action" href="#contact">
                    <span>Discuss {cur.title}</span>
                    <Icon name="arrow" />
                  </a>
                </div>
              </div>

              {/* Right Column: 5 Interactive Kinetic Capability Blocks */}
              <div className="stage-right-col">
                <div className="capabilities-header">
                  <span>KEY CAPABILITIES &amp; DELIVERABLES</span>
                  <span>5 SPECIALIZATIONS</span>
                </div>

                <div className="capabilities-stack">
                  {cur.capabilities.map((cap, i) => (
                    <M.div
                      key={cap.name}
                      className="capability-motion-row"
                      initial={reduce ? false : { opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: i * 0.06 }}
                    >
                      <div className="cap-index-box">
                        <span>0{i + 1}</span>
                      </div>

                      <div className="cap-text-block">
                        <strong className="cap-name">{cap.name}</strong>
                        <span className="cap-tag-pill">{cap.tag}</span>
                      </div>

                      <div className="cap-action-mark">
                        <Icon name="arrow" />
                      </div>
                    </M.div>
                  ))}
                </div>
              </div>
            </M.div>
          </AnimatePresence>
        </div>

        {/* Bottom Collaboration Callout Banner */}
        <div className="services-bottom-cta-banner">
          <div className="cta-banner-content">
            <span className="cta-seal-icon">
              <Icon name="award" />
            </span>
            <div>
              <h4>Need a dedicated development team or architectural consultation?</h4>
              <p>
                We collaborate directly with founders, executives, and enterprise teams to design, architect, and execute tailored software roadmaps.
              </p>
            </div>
          </div>

          <a className="btn-banner-contact" href="#contact">
            <span>Initiate Project Discussion</span>
            <Icon name="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}

const servicesStyles = `
/* ==========================================================================
   Services Section — Motion-Driven Executive Hub (Light Theme)
   Colors: Soft ice blue/white background, Soulsoft Navy (#002738 / #003349), 
           Ocean Blue (#0072a7 / #0093d5), Brand Orange (#f07c00)
   ========================================================================== */
.services-motion-section {
  position: relative;
  overflow: hidden;
  padding: clamp(72px, 9vh, 112px) 0;
  background: linear-gradient(180deg, #f0f7fc 0%, #f8fafc 50%, #eff6ff 100%);
  color: #0f172a;
  border-top: 1px solid rgba(0, 114, 167, 0.12);
  border-bottom: 1px solid rgba(0, 114, 167, 0.12);
}

/* Ambient Halos for light background */
.services-motion-section::before {
  content: "";
  position: absolute;
  top: -120px;
  left: 10%;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 114, 167, 0.12), transparent 70%);
  pointer-events: none;
  filter: blur(80px);
}

.services-motion-section::after {
  content: "";
  position: absolute;
  bottom: -120px;
  right: 8%;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(240, 124, 0, 0.1), transparent 70%);
  pointer-events: none;
  filter: blur(80px);
}

/* Header */
.services-header {
  position: relative;
  z-index: 1;
  max-width: 880px;
  margin: 0 auto clamp(36px, 5vh, 48px);
  text-align: center;
}

.services-eyebrow-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 18px;
  margin-bottom: 14px;
  border-radius: 999px;
  background: rgba(0, 114, 167, 0.08);
  border: 1px solid rgba(0, 114, 167, 0.22);
  font-family: var(--font-head);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #0072a7;
}

.services-pulse-orange {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #f07c00;
  box-shadow: 0 0 0 3px rgba(240, 124, 0, 0.25);
}

.services-pulse-blue {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #0072a7;
}

.services-main-title {
  font-family: var(--font-head);
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #002738;
  text-wrap: balance;
}

.title-gradient-soulsoft {
  background: linear-gradient(135deg, #0072a7 0%, #0093d5 50%, #f07c00 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.services-lead-text {
  max-width: 68ch;
  margin: 14px auto 0;
  font-size: clamp(15px, 1.6vw, 18px);
  line-height: 1.65;
  color: #475569;
}

/* ==========================================================================
   4-Category Interactive Motion Navigation Tabs Bar (Light Theme)
   ========================================================================== */
.services-tabs-bar-wrap {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  margin-bottom: clamp(28px, 4vh, 40px);
}

.services-tabs-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 6px;
  border-radius: 999px;
  background: #ffffff;
  border: 1.5px solid rgba(0, 114, 167, 0.18);
  box-shadow: 0 8px 30px rgba(0, 51, 73, 0.08);
  max-width: 100%;
}

.service-nav-tab {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  border-radius: 999px;
  background: transparent;
  border: none;
  font-family: var(--font-head);
  font-size: 14px;
  font-weight: 700;
  color: #475569;
  cursor: pointer;
  transition: color 0.25s ease;
  white-space: nowrap;
}

.service-nav-tab:hover {
  color: #002738;
}

.service-nav-tab.is-active {
  color: #ffffff;
}

.service-active-pill {
  position: absolute;
  inset: 0;
  border-radius: 999px;
  background: linear-gradient(135deg, #002738 0%, #003e5c 100%);
  box-shadow: 0 4px 16px rgba(0, 39, 56, 0.25);
  z-index: 0;
}

.tab-num-chip {
  position: relative;
  z-index: 1;
  font-size: 11px;
  font-weight: 800;
  padding: 2px 7px;
  border-radius: 4px;
  background: rgba(0, 114, 167, 0.12);
  color: #0072a7;
  transition: background-color 0.2s, color 0.2s;
}

.service-nav-tab.is-active .tab-num-chip {
  background: #f07c00;
  color: #ffffff;
}

.tab-title-text {
  position: relative;
  z-index: 1;
  letter-spacing: 0.02em;
}

/* ==========================================================================
   Cinematic Animated Interactive Stage (Light Theme)
   ========================================================================== */
.services-stage-container {
  position: relative;
  z-index: 1;
  margin-bottom: 48px;
}

.services-stage-deck {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
  gap: clamp(32px, 4vw, 56px);
  padding: clamp(36px, 4.5vw, 52px);
  border-radius: 28px;
  background: #ffffff;
  border: 1.5px solid rgba(0, 114, 167, 0.16);
  box-shadow: 0 20px 50px rgba(0, 51, 73, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04);
}

/* Left Column */
.stage-left-col {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.stage-top-meta {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 20px;
}

.stage-icon-halo {
  position: relative;
  display: grid;
  place-items: center;
  flex: none;
  width: 64px;
  height: 64px;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(0, 114, 167, 0.12), rgba(240, 124, 0, 0.12));
  border: 1.5px solid rgba(240, 124, 0, 0.35);
  box-shadow: 0 6px 18px rgba(240, 124, 0, 0.12);
  color: #f07c00;
}

.stage-icon-halo .icon {
  width: 32px;
  height: 32px;
}

.stage-num-watermark {
  position: absolute;
  right: -32px;
  top: -12px;
  font-family: var(--font-head);
  font-size: 36px;
  font-weight: 900;
  color: rgba(0, 39, 56, 0.06);
  pointer-events: none;
}

.stage-tagline {
  display: block;
  font-family: var(--font-head);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #f07c00;
  margin-bottom: 4px;
}

.stage-category-title {
  font-family: var(--font-head);
  font-size: clamp(24px, 2.5vw, 32px);
  font-weight: 800;
  letter-spacing: -0.015em;
  color: #002738;
  margin: 0;
}

.stage-lead-p {
  font-size: 16px;
  line-height: 1.7;
  color: #475569;
  margin-bottom: 28px;
}

/* Delivery Standards Box */
.stage-standards-box {
  padding: 18px 22px;
  border-radius: 16px;
  background: #f8fafc;
  border: 1px solid rgba(0, 114, 167, 0.12);
  margin-bottom: 28px;
}

.standards-label {
  display: block;
  font-family: var(--font-head);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #0072a7;
  margin-bottom: 12px;
}

.standards-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px 16px;
}

.standard-chip {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #1e293b;
}

.standard-chip .icon {
  width: 15px;
  height: 15px;
  color: #f07c00;
  flex: none;
}

/* Action Button */
.stage-action-wrap {
  margin-top: 4px;
}

.btn-service-action {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 13px 26px;
  border-radius: 12px;
  font-family: var(--font-head);
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #f07c00 0%, #ff9826 100%);
  border: none;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(240, 124, 0, 0.3);
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-service-action:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(240, 124, 0, 0.45);
}

.btn-service-action .icon {
  width: 16px;
  height: 16px;
  transition: transform 0.2s;
}

.btn-service-action:hover .icon {
  transform: translateX(4px);
}

/* ==========================================================================
   Right Column: 5 Kinetic Capability Blocks (Light Theme)
   ========================================================================== */
.stage-right-col {
  display: flex;
  flex-direction: column;
}

.capabilities-header {
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
  border-bottom: 1.5px solid rgba(0, 114, 167, 0.16);
  font-family: var(--font-head);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #64748b;
  margin-bottom: 14px;
}

.capabilities-stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.capability-motion-row {
  display: grid;
  grid-template-columns: 36px minmax(0, 1fr) 28px;
  gap: 16px;
  align-items: center;
  padding: 16px 20px;
  border-radius: 14px;
  background: #f8fafc;
  border: 1px solid rgba(0, 114, 167, 0.12);
  transition: transform 0.25s, background-color 0.25s, border-color 0.25s, box-shadow 0.25s;
}

.capability-motion-row:hover {
  transform: translateX(6px);
  background: #ffffff;
  border-color: rgba(0, 114, 167, 0.35);
  box-shadow: 0 8px 24px rgba(0, 114, 167, 0.12);
}

.cap-index-box {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background: rgba(0, 114, 167, 0.1);
  font-family: var(--font-head);
  font-size: 13px;
  font-weight: 800;
  color: #0072a7;
  transition: background-color 0.2s, color 0.2s;
}

.capability-motion-row:hover .cap-index-box {
  background: #f07c00;
  color: #ffffff;
}

.cap-text-block {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.cap-name {
  font-family: var(--font-head);
  font-size: 15px;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.35;
}

.cap-tag-pill {
  display: inline-block;
  align-self: flex-start;
  font-size: 11px;
  font-weight: 600;
  color: #0072a7;
  background: rgba(0, 114, 167, 0.08);
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid rgba(0, 114, 167, 0.18);
}

.cap-action-mark {
  color: #94a3b8;
  transition: transform 0.2s, color 0.2s;
}

.capability-motion-row:hover .cap-action-mark {
  color: #f07c00;
  transform: translateX(4px);
}

.cap-action-mark .icon {
  width: 16px;
  height: 16px;
}

/* ==========================================================================
   Bottom Collaboration Callout Banner (Light Theme)
   ========================================================================== */
.services-bottom-cta-banner {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 28px 36px;
  border-radius: 20px;
  background: #ffffff;
  border: 1.5px solid rgba(0, 114, 167, 0.2);
  box-shadow: 0 16px 40px rgba(0, 51, 73, 0.07);
}

.cta-banner-content {
  display: flex;
  align-items: center;
  gap: 20px;
}

.cta-seal-icon {
  display: grid;
  place-items: center;
  flex: none;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: linear-gradient(135deg, #0072a7, #0093d5);
  color: #ffffff;
  box-shadow: 0 8px 20px rgba(0, 114, 167, 0.25);
}

.cta-seal-icon .icon {
  width: 26px;
  height: 26px;
}

.cta-banner-content h4 {
  font-family: var(--font-head);
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 6px;
  color: #002738;
}

.cta-banner-content p {
  font-size: 14px;
  line-height: 1.5;
  color: #475569;
  margin: 0;
  max-width: 60ch;
}

.btn-banner-contact {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 24px;
  border-radius: 12px;
  font-family: var(--font-head);
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #0072a7 0%, #0093d5 100%);
  border: none;
  box-shadow: 0 4px 14px rgba(0, 114, 167, 0.25);
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;
  white-space: nowrap;
}

.btn-banner-contact:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(0, 114, 167, 0.35);
}

.btn-banner-contact .icon {
  width: 16px;
  height: 16px;
}

/* ==========================================================================
   Responsive Adaptations
   ========================================================================== */
@media (max-width: 1024px) {
  .services-stage-deck {
    grid-template-columns: 1fr;
    gap: 36px;
    padding: 32px 24px;
  }
  .services-bottom-cta-banner {
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
  }
  .btn-banner-contact {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .services-tabs-bar {
    border-radius: 16px;
    width: 100%;
  }
  .service-nav-tab {
    flex: 1 1 calc(50% - 6px);
    justify-content: center;
    padding: 10px 14px;
    font-size: 13px;
  }
  .standards-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .service-nav-tab {
    flex: 1 1 100%;
    justify-content: flex-start;
  }
  .capability-motion-row {
    padding: 12px 14px;
  }
}
`;
