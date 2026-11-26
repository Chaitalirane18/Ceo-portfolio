"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Icon from "@/components/Icon";
import Reveal from "@/components/ui/Reveal";
import { industries } from "@/data/industries";

const M = motion as any;

const industryDetails: Record<string, { desc: string; solutions: string[] }> = {
  "Agriculture & Agribusiness": {
    desc: "Comprehensive digital infrastructure for Krushi Seva Kendras, fertilizer dealers, seed distributors, and agricultural wholesale markets.",
    solutions: ["SoulAgroNexus ERP", "Shetkari Krushi Software (SKS)", "SoulForge Production ERP", "GST & Pesticide Stock Reporting"],
  },
  "Manufacturing & Distribution": {
    desc: "End-to-end production workflows, raw material batching, packaging tracking, finished inventory, and multi-depot distribution.",
    solutions: ["SoulForge ERP", "Batch Traceability", "Material Requirement Planning", "Multi-warehouse Logistics"],
  },
  "Retail & Wholesale": {
    desc: "High-speed point-of-sale, barcode scanning, omnichannel inventory syncing, and automated multi-tier vendor billing.",
    solutions: ["ShopCare POS", "SoulConnect ERP", "Barcode Billing Engine", "Real-Time Gross Margin Analytics"],
  },
  "Pharmaceuticals & Healthcare": {
    desc: "Strict batch-expiry management, drug composition lookups, HSN/GST compliance, and chemist retail automation.",
    solutions: ["Pharma Chemist Vision Plus", "Batch & Expiry Controls", "Doctor & Patient Follow-ups", "Wholesale Medicine Logistics"],
  },
  "Education & Training": {
    desc: "Interactive learning management, multi-tier course authoring, student assessment tracking, and certificate issuance.",
    solutions: ["LMSElite Platform", "Live Class Schedules", "Student Fee & Attendance Portals", "Corporate Training Modules"],
  },
  "E-Commerce": {
    desc: "Scalable storefronts, high-concurrency order management engines, live inventory feeds, and payment gateway orchestration.",
    solutions: ["Custom B2B / B2C Stores", "Payment Gateway APIs", "Shipping Courier Integrations", "Cart Abandonment Automation"],
  },
  "Professional Services": {
    desc: "Client pipeline automation, automated retainer invoicing, task tracking, and digital document workflows.",
    solutions: ["Book My CRM", "CompliDocX Management", "Automated Service Agreements", "Timesheet & Billing Systems"],
  },
  "Political & Constituency Administration": {
    desc: "Citizen grievance logging, ward-wise voter demographic segmentation, mass communications, and developmental project audits.",
    solutions: ["MLA Management Software", "Citizen Grievance Portal", "SMS & WhatsApp Campaign Engine", "Constituency Progress Dashboards"],
  },
  "Small & Medium Enterprises (MSMEs)": {
    desc: "Affordable, enterprise-grade cloud tools designed to automate repetitive operational bottlenecks and unlock sustainable expansion.",
    solutions: ["SoulConnect ERP", "Automated Bookkeeping", "GST Reconciliation", "Cloud Backup & Data Integrity"],
  },
};

export default function Industries() {
  const reduce = useReducedMotion();
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const activeDetail = selectedIndustry ? industryDetails[selectedIndustry] : null;

  return (
    <section className="section industries-interactive-section" id="industries" aria-labelledby="industries-title">
      <style dangerouslySetInnerHTML={{ __html: industriesCss }} />
      <div className="container">
        <Reveal className="section-head text-center mx-auto">
          <div className="industries-eyebrow-pill">
            <span className="dot-pulse" />
            <span>VERTICAL EXPERTISE · 9 KEY DOMAINS</span>
          </div>
          <h2 id="industries-title">Technology Tailored for 9 Major Business Sectors</h2>
          <p className="lead mx-auto" style={{ maxWidth: "64ch" }}>
            Click any sector to reveal specialized solutions, operational use cases, and software modules developed by Soulsoft.
          </p>
        </Reveal>

        <div className="grid-12 industries-grid">
          {industries.map((x, i) => {
            const isSelected = selectedIndustry === x.name;
            return (
              <Reveal className="span-4" delay={(i % 3) * 0.06} key={x.name}>
                <div
                  className={`card industry-interactive-card${isSelected ? " is-active" : ""}`}
                  onClick={() => setSelectedIndustry(isSelected ? null : x.name)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedIndustry(isSelected ? null : x.name);
                    }
                  }}
                  aria-expanded={isSelected}
                >
                  <div className="industry-top-header">
                    <span className="icon-box industry-icon-box">
                      <Icon name={x.icon} />
                    </span>
                    <span className="expand-indicator-pill">
                      <span>{isSelected ? "Close" : "Explore"}</span>
                      <Icon name="arrow" className={isSelected ? "rotate-up" : ""} />
                    </span>
                  </div>

                  <h3 className="industry-card-title">{x.name}</h3>

                  <div className="industry-card-action">
                    <span className="action-hint">Click to see tailored solutions</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Dynamic Expandable Drawer for Selected Industry */}
        <AnimatePresence>
          {selectedIndustry && activeDetail && (
            <M.div
              className="industry-expanded-drawer"
              initial={reduce ? false : { opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="drawer-inner-card">
                <div className="drawer-header-row">
                  <div>
                    <span className="drawer-sub-badge">INDUSTRY BLUEPRINT</span>
                    <h3 className="drawer-title">{selectedIndustry}</h3>
                  </div>
                  <button
                    type="button"
                    className="drawer-close-btn"
                    onClick={() => setSelectedIndustry(null)}
                    aria-label="Close details"
                  >
                    ✕
                  </button>
                </div>

                <p className="drawer-desc">{activeDetail.desc}</p>

                <div className="drawer-solutions-section">
                  <span className="drawer-sec-label">DEPLOYED PLATFORMS &amp; CAPABILITIES</span>
                  <div className="drawer-tags-wrap">
                    {activeDetail.solutions.map((sol) => (
                      <span key={sol} className="solution-badge">
                        <Icon name="check" />
                        <span>{sol}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="drawer-bottom-action">
                  <a className="btn-drawer-contact" href="#contact">
                    <span>Inquire for {selectedIndustry} Solutions</span>
                    <Icon name="arrow" />
                  </a>
                </div>
              </div>
            </M.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

const industriesCss = `
.industries-interactive-section {
  position: relative;
  background: #ffffff;
}

.industries-eyebrow-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 16px;
  background: rgba(26, 101, 141, 0.08);
  border: 1px solid rgba(26, 101, 141, 0.2);
  border-radius: 999px;
  font-family: var(--font-head);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #1a658d;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.dot-pulse {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #f07c00;
  box-shadow: 0 0 0 3px rgba(240, 124, 0, 0.25);
}

.industry-interactive-card {
  padding: 24px;
  border-radius: 20px;
  background: #fafafa;
  border: 1.5px solid rgba(26, 101, 141, 0.12);
  cursor: pointer;
  transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s, background-color 0.25s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 160px;
}

.industry-interactive-card:hover {
  transform: translateY(-4px);
  background: #ffffff;
  border-color: rgba(26, 101, 141, 0.4);
  box-shadow: 0 14px 30px rgba(26, 101, 141, 0.12);
}

.industry-interactive-card.is-active {
  background: #ffffff;
  border-color: #f07c00;
  box-shadow: 0 12px 28px rgba(240, 124, 0, 0.15);
}

.industry-top-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.industry-icon-box {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(26, 101, 141, 0.1);
  color: #1a658d;
  transition: background-color 0.2s, color 0.2s;
}

.industry-interactive-card:hover .industry-icon-box,
.industry-interactive-card.is-active .industry-icon-box {
  background: #f07c00;
  color: #ffffff;
}

.industry-icon-box .icon {
  width: 24px;
  height: 24px;
}

.expand-indicator-pill {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  color: #1a658d;
  letter-spacing: 0.06em;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(26, 101, 141, 0.08);
  transition: all 0.2s;
}

.industry-interactive-card:hover .expand-indicator-pill {
  background: #1a658d;
  color: #ffffff;
}

.expand-indicator-pill .icon {
  width: 12px;
  height: 12px;
  transition: transform 0.25s ease;
}

.rotate-up {
  transform: rotate(-90deg);
}

.industry-card-title {
  font-family: var(--font-head);
  font-size: 17px;
  font-weight: 700;
  color: #09222f;
  margin: 0 0 10px;
  line-height: 1.35;
}

.industry-card-action {
  font-size: 12px;
  color: #707a7f;
  font-weight: 500;
}

/* Expanded Detail Drawer */
.industry-expanded-drawer {
  margin-top: 36px;
  overflow: hidden;
}

.drawer-inner-card {
  background: linear-gradient(145deg, #ffffff 0%, #f5f6f7 100%);
  border-radius: 24px;
  padding: clamp(28px, 4vw, 36px);
  border: 2px solid rgba(26, 101, 141, 0.25);
  box-shadow: 0 20px 45px rgba(11, 44, 62, 0.1);
}

.drawer-header-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 14px;
}

.drawer-sub-badge {
  font-family: var(--font-head);
  font-size: 11px;
  font-weight: 800;
  color: #f07c00;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 4px;
}

.drawer-title {
  font-family: var(--font-head);
  font-size: clamp(22px, 2.5vw, 30px);
  font-weight: 800;
  color: #09222f;
  margin: 0;
}

.drawer-close-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #ffffff;
  color: #525a5e;
  display: grid;
  place-items: center;
  cursor: pointer;
  font-size: 15px;
  transition: all 0.2s;
}

.drawer-close-btn:hover {
  background: #f07c00;
  color: #ffffff;
  border-color: #f07c00;
}

.drawer-desc {
  font-size: 16px;
  line-height: 1.65;
  color: #3e464a;
  margin: 0 0 24px;
  max-width: 80ch;
}

.drawer-solutions-section {
  margin-bottom: 24px;
}

.drawer-sec-label {
  display: block;
  font-family: var(--font-head);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #1a658d;
  margin-bottom: 12px;
}

.drawer-tags-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.solution-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: #ffffff;
  border: 1px solid rgba(26, 101, 141, 0.2);
  border-radius: 10px;
  font-size: 13px;
  font-weight: 700;
  color: #09222f;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
}

.solution-badge .icon {
  width: 14px;
  height: 14px;
  color: #f07c00;
}

.drawer-bottom-action {
  display: flex;
  justify-content: flex-start;
}

.btn-drawer-contact {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #1a658d 0%, #2180b4 100%);
  color: #ffffff;
  border-radius: 12px;
  font-family: var(--font-head);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(26, 101, 141, 0.3);
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-drawer-contact:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(26, 101, 141, 0.45);
}

.btn-drawer-contact .icon {
  width: 15px;
  height: 15px;
}
`;
