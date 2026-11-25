"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import Reveal from "@/components/ui/Reveal";
import { jobs, QUALIFICATION } from "@/data/jobs";
import { WHATSAPP_HR } from "@/data/site";

/**
 * Modern, Professional Careers Section.
 * Designed with a sleek horizontal card architecture:
 * Each job opening is an executive horizontal card featuring clear salary badges,
 * qualification chips, department info, expandable responsibilities & skills,
 * and direct Apply via WhatsApp CTA.
 */
export default function Careers() {
  // Track open/collapsed state for each job card
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    "telecaller-female": false,
    "field-sales-male": false,
    "business-sales-analyst": false,
  });

  const toggleJob = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="careers-section" id="careers" aria-labelledby="careers-title">
      <style dangerouslySetInnerHTML={{ __html: careersCss }} />

      <div className="container">
        {/* Section Header */}
        <Reveal className="careers-header text-center" y={20}>
          <div className="careers-eyebrow-badge">
            <span className="careers-pulse-dot" aria-hidden="true" />
            <span>CAREERS · JOIN OUR TEAM</span>
          </div>
          <h2 id="careers-title" className="careers-main-title">
            Build Your Career with <span className="careers-title-gradient">Soulsoft Infotech</span>
          </h2>
          <p className="careers-lead-text">
            Join an established software development company driving business automation and enterprise technology solutions across industries.
          </p>

          {/* Culture / Value Proposition Badges */}
          <div className="careers-perks-strip">
            <span className="perk-item">
              <span className="perk-icon"><Icon name="rocket" /></span>
              <span>Fast-Track Growth</span>
            </span>
            <span className="perk-divider" aria-hidden="true">·</span>
            <span className="perk-item">
              <span className="perk-icon"><Icon name="award" /></span>
              <span>Performance Incentives</span>
            </span>
            <span className="perk-divider" aria-hidden="true">·</span>
            <span className="perk-item">
              <span className="perk-icon"><Icon name="layers" /></span>
              <span>Enterprise Product Exposure</span>
            </span>
            <span className="perk-divider" aria-hidden="true">·</span>
            <span className="perk-item">
              <span className="perk-icon"><Icon name="users" /></span>
              <span>Direct Mentorship</span>
            </span>
          </div>
        </Reveal>

        {/* Horizontal Job Openings List */}
        <div className="careers-jobs-list">
          {jobs.map((job, idx) => {
            const isOpen = !!expanded[job.id];
            const whatsappMsg = encodeURIComponent(
              `Hello HR Team, I would like to apply for the ${job.title} position at Soulsoft Infotech.`
            );

            return (
              <Reveal key={job.id} delay={idx * 0.08} y={20}>
                <article className={`job-horizontal-card${isOpen ? " is-expanded" : ""}`}>
                  <div className="job-card-main-row">
                    {/* Left: Role Info & Badges */}
                    <div className="job-col-info">
                      <div className="job-badge-row">
                        <span className="badge-qual">{QUALIFICATION} Required</span>
                        <span className="badge-type">{job.type}</span>
                        {job.genderBadge && (
                          <span className="badge-gender">{job.genderBadge}</span>
                        )}
                        <span className="badge-dept">{job.department}</span>
                      </div>

                      <h3 className="job-role-title">{job.title}</h3>

                      <div className="job-meta-row">
                        <span className="job-meta-item">
                          <Icon name="pin" />
                          <span>{job.location}</span>
                        </span>
                        <span className="job-meta-dot" aria-hidden="true">·</span>
                        <span className="job-meta-item">
                          <Icon name="brief" />
                          <span>Immediate Opening</span>
                        </span>
                      </div>
                    </div>

                    {/* Middle: Salary & Incentive Compensation */}
                    <div className="job-col-salary">
                      <span className="salary-label">Compensation Package</span>
                      <strong className="salary-amount">{job.salary}</strong>
                      <div className="salary-perks-row">
                        {job.perks.map((p) => (
                          <span key={p} className="salary-perk-pill">
                            +{p}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Actions */}
                    <div className="job-col-actions">
                      <a
                        className="btn-apply-whatsapp"
                        href={`https://wa.me/${WHATSAPP_HR}?text=${whatsappMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Apply on WhatsApp for ${job.title}`}
                      >
                        <span>Apply via WhatsApp</span>
                        <Icon name="arrow" />
                      </a>

                      <button
                        type="button"
                        className="btn-toggle-details"
                        onClick={() => toggleJob(job.id)}
                        aria-expanded={isOpen}
                      >
                        <span>{isOpen ? "Hide Details" : "View Description"}</span>
                        <Icon name="arrow" className={`toggle-icon${isOpen ? " is-up" : " is-down"}`} />
                      </button>
                    </div>
                  </div>

                  {/* Expandable Drawer: Responsibilities & Skills */}
                  {isOpen && (
                    <div className="job-expanded-drawer">
                      <div className="drawer-grid">
                        {/* Responsibilities */}
                        <div className="drawer-col">
                          <div className="drawer-subhead">
                            <span className="drawer-icon-box"><Icon name="check" /></span>
                            <h4>Key Responsibilities</h4>
                          </div>
                          <ul className="drawer-list">
                            {job.duties.map((duty) => (
                              <li key={duty}>
                                <span className="drawer-bullet" aria-hidden="true">›</span>
                                <span>{duty}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Required Skills */}
                        <div className="drawer-col">
                          <div className="drawer-subhead">
                            <span className="drawer-icon-box"><Icon name="award" /></span>
                            <h4>Required Skills &amp; Qualifications</h4>
                          </div>
                          <ul className="drawer-skills-tags">
                            {job.skills.map((skill) => (
                              <li key={skill} className="drawer-skill-tag">
                                <Icon name="check" className="tag-check" />
                                <span>{skill}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="drawer-qualification-note">
                            <Icon name="cap" />
                            <span>Candidate must possess an <strong>MBA</strong> degree from a recognized institution.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* HR Recruitment Direct Contact Banner */}
        <Reveal className="careers-footer-callout" y={24} delay={0.2}>
          <div className="callout-card">
            <div className="callout-info">
              <span className="callout-icon-halo">
                <Icon name="users" />
              </span>
              <div>
                <h4>Questions regarding opportunities at Soulsoft Infotech?</h4>
                <p>
                  Connect directly with our HR and recruitment desk at <strong>+91 8637 798679</strong> or visit our office in Sangamner, Maharashtra.
                </p>
              </div>
            </div>

            <div className="callout-action">
              <a
                className="btn-contact-hr"
                href={`https://wa.me/${WHATSAPP_HR}?text=${encodeURIComponent("Hello HR Team, I have an enquiry regarding job openings at Soulsoft Infotech.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Chat with HR</span>
                <Icon name="out" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const careersCss = `
/* ==========================================================================
   Careers Section — Executive Horizontal Architecture
   ========================================================================== */
.careers-section {
  position: relative;
  overflow: hidden;
  padding: clamp(72px, 9vh, 112px) 0;
  background: radial-gradient(100% 70% at 50% 0%, #f1f7fd 0%, #ffffff 55%, #f4f8fe 100%);
  border-top: 1px solid rgba(226, 232, 240, 0.9);
}

/* Header */
.careers-header {
  max-width: 860px;
  margin: 0 auto clamp(40px, 6vh, 60px);
  text-align: center;
}

.careers-eyebrow-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 18px;
  margin-bottom: 20px;
  border-radius: 999px;
  background: rgba(37, 99, 235, 0.08);
  border: 1px solid rgba(37, 99, 235, 0.2);
  font-family: var(--font-head);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #174ea6;
}

.careers-pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #2563eb;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.25);
  animation: pulse-dot 2.4s infinite ease-in-out;
}

.careers-main-title {
  font-family: var(--font-head);
  font-size: clamp(32px, 4vw, 46px);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #0b1f3a;
  text-wrap: balance;
}

.careers-title-gradient {
  background: linear-gradient(135deg, #174ea6 0%, #2563eb 50%, #0284c7 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.careers-lead-text {
  max-width: 66ch;
  margin: 16px auto 0;
  font-size: clamp(16px, 1.8vw, 19px);
  line-height: 1.65;
  color: #4b5563;
}

/* Culture / Value Props Strip */
.careers-perks-strip {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 14px 20px;
  margin-top: 28px;
  padding: 12px 24px;
  border-radius: 999px;
  background: #ffffff;
  border: 1px solid rgba(226, 232, 240, 0.9);
  box-shadow: 0 4px 16px rgba(11, 31, 58, 0.04);
  width: max-content;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.perk-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-head);
  font-size: 14px;
  font-weight: 600;
  color: #172033;
}

.perk-icon {
  display: grid;
  place-items: center;
  color: #2563eb;
}

.perk-icon .icon {
  width: 16px;
  height: 16px;
}

.perk-divider {
  color: #cbd5e1;
  font-weight: 800;
}

/* ==========================================================================
   Horizontal Job Openings Card Architecture
   ========================================================================== */
.careers-jobs-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 48px;
}

.job-horizontal-card {
  position: relative;
  border-radius: 20px;
  background: #ffffff;
  border: 1.5px solid rgba(226, 232, 240, 0.9);
  box-shadow: 0 8px 24px rgba(11, 31, 58, 0.04), 0 1px 3px rgba(11, 31, 58, 0.03);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
  overflow: hidden;
}

.job-horizontal-card:hover {
  transform: translateY(-3px);
  border-color: rgba(37, 99, 235, 0.35);
  box-shadow: 0 16px 36px rgba(37, 99, 235, 0.08), 0 2px 6px rgba(11, 31, 58, 0.04);
}

.job-horizontal-card.is-expanded {
  border-color: rgba(37, 99, 235, 0.45);
  box-shadow: 0 20px 48px rgba(37, 99, 235, 0.1);
}

/* Main Card Row (3 Columns: Info, Salary, Actions) */
.job-card-main-row {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 0.9fr) minmax(0, 0.8fr);
  gap: 28px;
  align-items: center;
  padding: 30px 36px;
}

/* Column 1: Info */
.job-col-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.job-badge-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

.badge-qual {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 6px;
  font-family: var(--font-head);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background: #2563eb;
  color: #ffffff;
}

.badge-type {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 6px;
  font-family: var(--font-head);
  font-size: 12px;
  font-weight: 600;
  background: rgba(37, 99, 235, 0.08);
  color: #174ea6;
  border: 1px solid rgba(37, 99, 235, 0.16);
}

.badge-gender {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 6px;
  font-family: var(--font-head);
  font-size: 12px;
  font-weight: 600;
  background: rgba(245, 158, 11, 0.12);
  color: #b45309;
  border: 1px solid rgba(245, 158, 11, 0.25);
}

.badge-dept {
  font-size: 13px;
  font-weight: 500;
  color: #64748b;
}

.job-role-title {
  font-family: var(--font-head);
  font-size: clamp(20px, 2vw, 24px);
  font-weight: 800;
  color: #0b1f3a;
  letter-spacing: -0.01em;
  margin: 0;
}

.job-meta-row {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #64748b;
}

.job-meta-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.job-meta-item .icon {
  width: 15px;
  height: 15px;
  color: #2563eb;
}

.job-meta-dot {
  color: #cbd5e1;
}

/* Column 2: Salary & Compensation */
.job-col-salary {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px 22px;
  border-radius: 14px;
  background: #f8fafc;
  border: 1px solid rgba(226, 232, 240, 0.9);
}

.salary-label {
  font-family: var(--font-head);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #64748b;
}

.salary-amount {
  font-family: var(--font-head);
  font-size: clamp(18px, 1.8vw, 22px);
  font-weight: 800;
  color: #0b1f3a;
}

.salary-perks-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.salary-perk-pill {
  display: inline-flex;
  align-items: center;
  padding: 3px 8px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  background: rgba(37, 99, 235, 0.06);
  color: #1d4ed8;
  border: 1px solid rgba(37, 99, 235, 0.12);
}

/* Column 3: Actions */
.job-col-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: stretch;
}

.btn-apply-whatsapp {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px 22px;
  border-radius: 12px;
  font-family: var(--font-head);
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
  border: none;
  box-shadow: 0 4px 14px rgba(22, 163, 74, 0.28);
  transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
  text-decoration: none;
  text-align: center;
}

.btn-apply-whatsapp:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(22, 163, 74, 0.4);
  filter: brightness(1.05);
}

.btn-apply-whatsapp .icon {
  width: 17px;
  height: 17px;
  transition: transform 0.2s ease;
}

.btn-apply-whatsapp:hover .icon {
  transform: translateX(3px);
}

.btn-toggle-details {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 8px;
  font-family: var(--font-head);
  font-size: 13px;
  font-weight: 600;
  color: #2563eb;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
}

.btn-toggle-details:hover {
  background: rgba(37, 99, 235, 0.06);
  color: #174ea6;
}

.toggle-icon {
  width: 14px;
  height: 14px;
  transition: transform 0.25s ease;
}

.toggle-icon.is-down {
  transform: rotate(90deg);
}

.toggle-icon.is-up {
  transform: rotate(-90deg);
}

/* ==========================================================================
   Expandable Drawer Content
   ========================================================================== */
.job-expanded-drawer {
  padding: 28px 36px 36px;
  border-top: 1px solid rgba(226, 232, 240, 0.85);
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  animation: drawerSlide 0.35s ease-out forwards;
}

@keyframes drawerSlide {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}

.drawer-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 36px;
}

.drawer-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.drawer-subhead {
  display: flex;
  align-items: center;
  gap: 10px;
}

.drawer-icon-box {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: rgba(37, 99, 235, 0.1);
  color: #2563eb;
}

.drawer-icon-box .icon {
  width: 16px;
  height: 16px;
}

.drawer-subhead h4 {
  font-family: var(--font-head);
  font-size: 16px;
  font-weight: 700;
  color: #0b1f3a;
  margin: 0;
}

.drawer-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.drawer-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  line-height: 1.55;
  color: #475569;
}

.drawer-bullet {
  color: #2563eb;
  font-weight: 800;
  font-size: 16px;
  line-height: 1;
}

.drawer-skills-tags {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.drawer-skill-tag {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  background: #ffffff;
  color: #1e293b;
  border: 1px solid rgba(226, 232, 240, 0.9);
  box-shadow: 0 1px 3px rgba(11, 31, 58, 0.03);
}

.tag-check {
  width: 14px;
  height: 14px;
  color: #16a34a;
  flex: none;
}

.drawer-qualification-note {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 10px;
  background: rgba(37, 99, 235, 0.06);
  border: 1px solid rgba(37, 99, 235, 0.16);
  font-size: 13px;
  color: #174ea6;
}

.drawer-qualification-note .icon {
  width: 20px;
  height: 20px;
  flex: none;
}

/* ==========================================================================
   Recruitment Bottom Callout
   ========================================================================== */
.careers-footer-callout {
  margin-top: 12px;
}

.callout-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 28px 36px;
  border-radius: 20px;
  background: linear-gradient(135deg, #0b1f3a 0%, #174ea6 100%);
  color: #ffffff;
  box-shadow: 0 16px 40px rgba(11, 31, 58, 0.18);
}

.callout-info {
  display: flex;
  align-items: center;
  gap: 20px;
}

.callout-icon-halo {
  display: grid;
  place-items: center;
  flex: none;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.callout-icon-halo .icon {
  width: 26px;
  height: 26px;
}

.callout-info h4 {
  font-family: var(--font-head);
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 6px;
  color: #ffffff;
}

.callout-info p {
  font-size: 14px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
}

.callout-info strong {
  color: #fbbf24;
}

.btn-contact-hr {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 10px;
  font-family: var(--font-head);
  font-size: 14px;
  font-weight: 700;
  color: #0b1f3a;
  background: #ffffff;
  border: none;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, background-color 0.2s;
  text-decoration: none;
  white-space: nowrap;
}

.btn-contact-hr:hover {
  transform: translateY(-2px);
  background: #f8fafc;
}

.btn-contact-hr .icon {
  width: 16px;
  height: 16px;
}

/* ==========================================================================
   Responsive Adaptations
   ========================================================================== */
@media (max-width: 1024px) {
  .job-card-main-row {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 24px;
  }
  .drawer-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .job-expanded-drawer {
    padding: 24px;
  }
  .callout-card {
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
  }
  .btn-contact-hr {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .careers-perks-strip {
    border-radius: 16px;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }
  .perk-divider {
    display: none;
  }
  .job-badge-row {
    gap: 6px;
  }
  .btn-apply-whatsapp {
    width: 100%;
  }
}
`;
