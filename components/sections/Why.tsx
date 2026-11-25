"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Icon from "@/components/Icon";
import Reveal from "@/components/ui/Reveal";
import { pad } from "@/components/util";
import { why } from "@/data/why";

const M = motion as any;

const whyDetails: { title: string; subtitle: string; icon: string; points: string[] }[] = [
  {
    title: "14+ Years of Software Industry Experience",
    subtitle: "Established in 2012 by Prasad Godage",
    icon: "award",
    points: [
      "Over a decade of navigating technology shifts from desktop to distributed cloud architectures.",
      "Track record delivering enterprise software across 9+ industrial sectors.",
      "Deep understanding of Indian business compliance, GST structures, and supply chains.",
    ],
  },
  {
    title: "Industry-Specific Software Products",
    subtitle: "12 Purpose-Built Operational Solutions",
    icon: "layers",
    points: [
      "No generic templates: tailored domain logic for Krushi Kendras, retail, manufacturing, pharma, and governance.",
      "Engineered to solve real business pain points without excessive overhead.",
      "Scalable databases built for high transactional throughput and offline resilience.",
    ],
  },
  {
    title: "Customized & Scalable Business Solutions",
    subtitle: "Tailored to Your Operating Model",
    icon: "gear",
    points: [
      "Modular architectures that scale alongside business growth from single stores to multi-branch networks.",
      "Custom workflow engines, role-based access controls, and custom reporting capabilities.",
      "Seamless backward compatibility and integration with legacy business tools.",
    ],
  },
  {
    title: "Experienced Development & Technical Teams",
    subtitle: "In-House Engineering Excellence",
    icon: "users",
    points: [
      "Specialized engineers across Node.js, .NET Core, React, Flutter, SQL, and Azure.",
      "Rigorous quality assurance, code audits, and secure deployment pipelines.",
      "Active team mentorship led directly by the Founder & CEO.",
    ],
  },
  {
    title: "End-to-End Software Development & Support",
    subtitle: "Turnkey Implementation & Dedicated SLAs",
    icon: "check",
    points: [
      "Complete product lifecycle: requirements analysis, UI/UX, engineering, testing, and deployment.",
      "24/7 technical assistance, automated backups, and database health maintenance.",
      "Direct communication lines with senior engineering leads.",
    ],
  },
  {
    title: "Focus on Innovation, Automation & Business Growth",
    subtitle: "Maximizing Client ROI & Operational Speed",
    icon: "rocket",
    points: [
      "Eliminating repetitive manual bottlenecks through automated reconciliation and invoicing.",
      "Data intelligence dashboards providing actionable business insights.",
      "Continuous feature updates aligned with changing market and regulatory demands.",
    ],
  },
];

export default function Why() {
  const reduce = useReducedMotion();
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const toggleCard = (idx: number) => {
    setActiveCard((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="section why-interactive-section" id="why" aria-labelledby="why-title">
      <style dangerouslySetInnerHTML={{ __html: whyCss }} />
      <div className="container">
        <Reveal className="section-head text-center">
          <div className="why-eyebrow-pill">
            <span className="why-pulse-dot" />
            <span>THE SOULSOFT ADVANTAGE</span>
          </div>
          <h2 id="why-title">Six Pillars Driving Measurable Business Value</h2>
          <p className="lead mx-auto" style={{ maxWidth: "60ch" }}>
            Click any pillar to explore our technical competencies, operating standards, and client commitments.
          </p>
        </Reveal>

        <div className="grid why-grid">
          {why.map((w, i) => {
            const isExpanded = activeCard === i;
            const detail = whyDetails[i];

            return (
              <Reveal className="span-4" delay={(i % 3) * 0.08} key={w}>
                <article
                  className={`card why-interactive-card${isExpanded ? " is-expanded" : ""}`}
                  onClick={() => toggleCard(i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleCard(i);
                    }
                  }}
                  aria-expanded={isExpanded}
                >
                  <div className="why-top-row">
                    <span className="why-num-watermark" aria-hidden="true">{pad(i + 1)}</span>
                    <span className="why-icon-badge">
                      <Icon name={detail.icon} />
                    </span>
                    <span className="why-click-hint">
                      <span>{isExpanded ? "Collapse" : "Open"}</span>
                      <Icon name="arrow" className={isExpanded ? "rotate-up" : ""} />
                    </span>
                  </div>

                  <h3 className="why-card-heading">{w}</h3>
                  <p className="why-card-sub">{detail.subtitle}</p>

                  <AnimatePresence>
                    {isExpanded && (
                      <M.div
                        className="why-drawer-content"
                        initial={reduce ? false : { opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="why-drawer-divider" />
                        <ul className="why-points-list">
                          {detail.points.map((pt, ptIdx) => (
                            <li key={ptIdx}>
                              <span className="point-bullet" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </M.div>
                    )}
                  </AnimatePresence>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const whyCss = `
.why-interactive-section {
  background: linear-gradient(180deg, #eff6ff 0%, #f8fafc 50%, #ffffff 100%);
  position: relative;
}

.why-eyebrow-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 16px;
  background: rgba(0, 114, 167, 0.08);
  border: 1px solid rgba(0, 114, 167, 0.2);
  border-radius: 999px;
  font-family: var(--font-head);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #0072a7;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.why-pulse-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #f07c00;
  box-shadow: 0 0 0 3px rgba(240, 124, 0, 0.25);
}

.why-interactive-card {
  position: relative;
  overflow: hidden;
  padding: 26px;
  border-radius: 20px;
  background: #ffffff;
  border: 1.5px solid rgba(0, 114, 167, 0.14);
  box-shadow: 0 8px 24px rgba(0, 51, 73, 0.05);
  cursor: pointer;
  transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
}

.why-interactive-card:hover {
  transform: translateY(-4px);
  border-color: rgba(0, 114, 167, 0.35);
  box-shadow: 0 16px 36px rgba(0, 114, 167, 0.12);
}

.why-interactive-card.is-expanded {
  border-color: #f07c00;
  box-shadow: 0 16px 40px rgba(240, 124, 0, 0.15);
}

.why-top-row {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 14px;
  margin-bottom: 14px;
}

.why-click-hint {
  margin-left: auto;
}

.why-num-watermark {
  font-family: var(--font-head);
  font-size: 26px;
  font-weight: 900;
  color: rgba(0, 114, 167, 0.25);
  line-height: 1;
}

.why-icon-badge {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(0, 114, 167, 0.08);
  color: #0072a7;
  transition: background-color 0.2s, color 0.2s;
}

.why-interactive-card:hover .why-icon-badge,
.why-interactive-card.is-expanded .why-icon-badge {
  background: #f07c00;
  color: #ffffff;
}

.why-icon-badge .icon {
  width: 20px;
  height: 20px;
}

.why-click-hint {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  color: #0072a7;
  letter-spacing: 0.06em;
  padding: 3px 10px;
  border-radius: 999px;
  background: rgba(0, 114, 167, 0.08);
}

.why-interactive-card:hover .why-click-hint {
  background: #0072a7;
  color: #ffffff;
}

.why-click-hint .icon {
  width: 12px;
  height: 12px;
  transition: transform 0.25s ease;
}

.why-card-heading {
  font-family: var(--font-head);
  font-size: 18px;
  font-weight: 700;
  color: #002738;
  margin: 0 0 6px;
  line-height: 1.35;
}

.why-card-sub {
  font-size: 13px;
  font-weight: 600;
  color: #f07c00;
  margin: 0;
}

.why-drawer-divider {
  height: 1px;
  background: rgba(0, 114, 167, 0.15);
  margin: 16px 0 14px;
}

.why-points-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.why-points-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13px;
  line-height: 1.55;
  color: #334155;
}

.point-bullet {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #0072a7;
  margin-top: 6px;
  flex: none;
}
`;
