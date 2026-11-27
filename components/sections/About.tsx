"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Icon from "@/components/Icon";
import CountUp from "@/components/ui/CountUp";

const M = motion as any;

const profileFacts = [
  { icon: "cal", label: "Founded Soulsoft", value: "2012", sub: "Entrepreneurial Journey Began" },
  { icon: "award", label: "IT Industry Experience", value: "15+ Years", sub: "Enterprise Software & Strategy" },
  { icon: "pin", label: "Headquarters", value: "Sangamner, Maharashtra", sub: "Registered Corporate Office" },
  { icon: "users", label: "Business Presence", value: "Sangamner · Pune · Nashik", sub: "Multi-Location Regional Reach" },
];

const keyStats = [
  { num: 15, suffix: "+", label: "Years Experience", sub: "IT Industry" },
  { text: "2012", label: "Journey Started", sub: "Soulsoft Founded" },
  { num: 12, label: "Software Products", sub: "& Enterprise Solutions" },
  { text: "Multiple", label: "Industry Segments", sub: "Served Across India" },
];

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section className="about-single-screen" id="about" aria-labelledby="about-title">
      <style dangerouslySetInnerHTML={{ __html: aboutStyles }} />

      <div className="container about-viewport-container">
        {/* Compact Executive Header */}
        <M.div
          className="about-header-compact"
          initial={reduce ? false : { opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-brand-badge">
            <span className="brand-dot-orange" aria-hidden="true" />
            <span>ABOUT PRASAD GODAGE · PROFESSIONAL OVERVIEW</span>
            <span className="brand-dot-blue" aria-hidden="true" />
          </div>
          <h2 id="about-title" className="about-title-compact">
            Leadership Driven by <span className="title-gradient-soulsoft">Innovation.</span>
          </h2>
        </M.div>

        {/* 2-Column Unified Single-Screen Deck */}
        <div className="about-deck-grid">
          {/* Left Column: Narrative, Vision Quote, & Embedded Stats */}
          <M.div
            className="about-story-card"
            initial={reduce ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="story-top-label">
              <span className="label-pill-blue">Founder &amp; CEO · Soulsoft Infotech</span>
              <span className="label-sub-text">Software Entrepreneur &amp; Business Strategist</span>
            </div>

            <div className="story-main-copy">
              <p className="p-highlight">
                <strong>Prasad Godage</strong> is a technology entrepreneur and the <strong>Founder &amp; CEO</strong> of{" "}
                <strong>Soulsoft Infotech Private Limited</strong>, a software development and IT solutions company established in <strong>2012</strong>.
              </p>
              <p>
                With over <strong>15 years of experience</strong> in the IT industry, he specializes in developing scalable
                software products, business automation solutions, ERP systems, SaaS applications, and technology-driven
                business models.
              </p>
            </div>

            {/* Strategic Vision Banner */}
            <div className="about-vision-box">
              <div className="vision-accent-bar" aria-hidden="true" />
              <div className="vision-text-wrap">
                <blockquote className="vision-statement">
                  &ldquo;His vision is to simplify complex business operations through affordable, reliable, and innovative technology.&rdquo;
                </blockquote>
                <div className="vision-chips">
                  <span className="v-chip"><Icon name="check" /> Affordable</span>
                  <span className="v-chip"><Icon name="check" /> Reliable</span>
                  <span className="v-chip"><Icon name="check" /> Innovative</span>
                </div>
              </div>
            </div>

            {/* Integrated 4 Stats Bar (Fits neatly in single screen) */}
            <div className="about-stats-integrated">
              {keyStats.map((st, i) => (
                <div key={st.label} className="stat-compact-item">
                  <div className="stat-val-row">
                    <span className="stat-number">
                      {st.num !== undefined ? <CountUp to={st.num} /> : st.text}
                      {st.suffix && <span className="stat-suffix">{st.suffix}</span>}
                    </span>
                  </div>
                  <strong className="stat-lbl">{st.label}</strong>
                  <span className="stat-sub">{st.sub}</span>
                </div>
              ))}
            </div>

            {/* Direct Navigation Links */}
            <div className="story-actions-compact">
              <a className="btn-soulsoft-primary" href="#journey">
                <span>Explore Journey</span>
                <Icon name="arrow" />
              </a>
              <a className="btn-soulsoft-outline" href="#expertise">
                <span>Core Expertise</span>
                <Icon name="layers" />
              </a>
            </div>
          </M.div>

          {/* Right Column: Executive Corporate Dossier (Logo Palette: Deep Navy-Teal + Blue + Orange) */}
          <M.div
            className="about-dossier-card"
            initial={reduce ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Ambient Brand Halos */}
            <div className="halo-glow-orange" aria-hidden="true" />
            <div className="halo-glow-blue" aria-hidden="true" />

            {/* CEO Identity Lockup */}
            <div className="dossier-profile-header">
              <div className="dossier-avatar-wrap">
                <Image
                  src="/prasad-godage.jpg"
                  alt="Prasad Shivaji Godage"
                  width={72}
                  height={72}
                  className="dossier-avatar-img"
                />
                <span className="avatar-status-dot" title="Active Leadership" />
              </div>
              <div className="dossier-meta">
                <h3 className="dossier-name">Prasad Shivaji Godage</h3>
                <span className="dossier-role-badge">Founder &amp; CEO</span>
                <span className="dossier-company">Soulsoft Infotech Private Limited</span>
              </div>
            </div>

            {/* 4 Corporate Fact Rows */}
            <div className="dossier-facts-grid">
              {profileFacts.map((f) => (
                <div key={f.label} className="dossier-row-item">
                  <div className="row-icon-halo">
                    <Icon name={f.icon} />
                  </div>
                  <div className="row-details">
                    <span className="row-label">{f.label}</span>
                    <strong className="row-value">{f.value}</strong>
                    <span className="row-sub">{f.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Soulsoft Corporate Seal Footer */}
            <div className="dossier-bottom-seal">
              <div className="seal-logo-wrap">
                <Image
                  src="/images/soulsoft-logo-full.png"
                  alt="Soulsoft Infotech"
                  width={640}
                  height={300}
                  sizes="160px"
                  className="seal-logo-img"
                />
              </div>
              <a
                className="dossier-web-link"
                href="https://soulsoft.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>soulsoft.in</span>
                <Icon name="out" />
              </a>
            </div>
          </M.div>
        </div>
      </div>
    </section>
  );
}

const aboutStyles = `
/* ==========================================================================
   Single-Screen About Section (Soulsoft Brand: #0b2c3e, #0072a7, #f07c00)
   ========================================================================== */
.about-single-screen {
  position: relative;
  overflow: hidden;
  padding: clamp(32px, 4.5vh, 48px) 0;
  background: radial-gradient(120% 80% at 50% 0%, #ffffff 0%, #f5f9fc 60%, #eef4f8 100%);
  border-top: 1px solid rgba(0, 114, 167, 0.12);
  border-bottom: 1px solid rgba(0, 114, 167, 0.12);
}

.about-viewport-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1240px;
}

/* Header */
.about-header-compact {
  text-align: center;
  margin-bottom: clamp(18px, 2.8vh, 28px);
}

.about-brand-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 16px;
  margin-bottom: 10px;
  border-radius: 999px;
  background: #ffffff;
  border: 1px solid rgba(0, 114, 167, 0.2);
  box-shadow: 0 2px 8px rgba(11, 44, 62, 0.05);
  font-family: var(--font-head);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #0072a7;
}

.brand-dot-orange {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #f07c00;
  box-shadow: 0 0 0 3px rgba(240, 124, 0, 0.25);
}

.brand-dot-blue {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #0072a7;
}

.about-title-compact {
  font-family: var(--font-head);
  font-size: clamp(28px, 3.2vw, 40px);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #0b2c3e;
}

.title-gradient-soulsoft {
  background: linear-gradient(135deg, #0072a7 0%, #2a8cbf 50%, #f07c00 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Main Deck Grid */
.about-deck-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.95fr);
  gap: clamp(20px, 3vw, 36px);
  align-items: stretch;
}

/* Left: Story Card */
.about-story-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: clamp(22px, 3vh, 32px);
  border-radius: 20px;
  background: #ffffff;
  border: 1.5px solid rgba(0, 114, 167, 0.15);
  box-shadow: 0 10px 30px rgba(11, 44, 62, 0.05);
}

.story-top-label {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.label-pill-blue {
  display: inline-flex;
  padding: 4px 12px;
  border-radius: 6px;
  font-family: var(--font-head);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: rgba(0, 114, 167, 0.1);
  color: #0072a7;
  border: 1px solid rgba(0, 114, 167, 0.2);
}

.label-sub-text {
  font-size: 13px;
  color: #6b7c8c;
  font-weight: 500;
}

.story-main-copy {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: clamp(14px, 1.35vw, 15px);
  line-height: 1.6;
  color: #3e464a;
  margin-bottom: 14px;
}

.story-main-copy strong {
  color: #0b2c3e;
}

.p-highlight {
  color: #1c2b38;
}

/* Vision Box */
.about-vision-box {
  display: flex;
  gap: 14px;
  padding: 12px 18px;
  margin-bottom: 16px;
  border-radius: 12px;
  background: linear-gradient(135deg, #f5f9fc 0%, #e9f0f6 100%);
  border: 1px solid rgba(0, 114, 167, 0.16);
}

.vision-accent-bar {
  width: 4px;
  border-radius: 4px;
  background: linear-gradient(180deg, #f07c00 0%, #0072a7 100%);
  flex: none;
}

.vision-text-wrap {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.vision-statement {
  font-family: var(--font-head);
  font-size: clamp(14px, 1.4vw, 16px);
  font-weight: 700;
  line-height: 1.4;
  color: #0b2c3e;
  margin: 0;
}

.vision-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.v-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-weight: 700;
  color: #0072a7;
  background: #ffffff;
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid rgba(0, 114, 167, 0.2);
}

.v-chip .icon {
  width: 12px;
  height: 12px;
  color: #f07c00;
}

/* Integrated 4 Stats Row */
.about-stats-integrated {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  padding: 12px 14px;
  margin-bottom: 16px;
  border-radius: 12px;
  background: #f8fbfd;
  border: 1px solid rgba(232, 233, 234, 0.9);
}

.stat-compact-item {
  display: flex;
  flex-direction: column;
  border-left: 1px solid rgba(0, 114, 167, 0.15);
  padding-left: 10px;
}

.stat-compact-item:first-child {
  border-left: none;
  padding-left: 0;
}

.stat-number {
  font-family: var(--font-head);
  font-size: clamp(20px, 2.2vw, 26px);
  font-weight: 800;
  line-height: 1.1;
  color: #0072a7;
}

.stat-suffix {
  color: #f07c00;
}

.stat-lbl {
  font-family: var(--font-head);
  font-size: 11px;
  font-weight: 700;
  color: #0b2c3e;
  margin-top: 2px;
  line-height: 1.25;
}

.stat-sub {
  font-size: 10px;
  color: #6b7c8c;
  line-height: 1.2;
}

/* Story Actions */
.story-actions-compact {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn-soulsoft-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 10px;
  font-family: var(--font-head);
  font-size: 13px;
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #0072a7 0%, #155172 100%);
  border: none;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 114, 167, 0.3);
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-soulsoft-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0, 114, 167, 0.45);
}

.btn-soulsoft-primary .icon {
  width: 14px;
  height: 14px;
}

.btn-soulsoft-outline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 10px;
  font-family: var(--font-head);
  font-size: 13px;
  font-weight: 700;
  color: #0b2c3e;
  background: transparent;
  border: 1.5px solid rgba(0, 114, 167, 0.3);
  text-decoration: none;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
}

.btn-soulsoft-outline:hover {
  background: rgba(0, 114, 167, 0.08);
  border-color: #0072a7;
  color: #0072a7;
}

.btn-soulsoft-outline .icon {
  width: 14px;
  height: 14px;
}

/* Right: Executive Dossier Card */
.about-dossier-card {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: clamp(24px, 3vh, 32px);
  border-radius: 20px;
  background: linear-gradient(145deg, #09222f 0%, #0b2c3e 55%, #0f3a52 100%);
  border: 1.5px solid rgba(0, 114, 167, 0.35);
  box-shadow: 0 16px 40px rgba(11, 44, 62, 0.25);
  color: #ffffff;
}

.halo-glow-orange {
  position: absolute;
  top: -60px;
  right: -60px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(240, 124, 0, 0.3), transparent 70%);
  pointer-events: none;
  filter: blur(40px);
}

.halo-glow-blue {
  position: absolute;
  bottom: -60px;
  left: -60px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 114, 167, 0.4), transparent 70%);
  pointer-events: none;
  filter: blur(45px);
}

/* Dossier Profile Header */
.dossier-profile-header {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.dossier-avatar-wrap {
  position: relative;
  flex: none;
  width: 66px;
  height: 66px;
  border-radius: 50%;
  overflow: visible;
}

.dossier-avatar-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  border: 2px solid #f07c00;
  box-shadow: 0 0 0 3px rgba(240, 124, 0, 0.25), 0 8px 16px rgba(0, 0, 0, 0.4);
}

.avatar-status-dot {
  position: absolute;
  right: 2px;
  bottom: 2px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #16a34a;
  border: 2px solid #0b2c3e;
}

.dossier-meta {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.dossier-name {
  font-family: var(--font-head);
  font-size: 19px;
  font-weight: 800;
  letter-spacing: -0.01em;
  color: #ffffff;
  margin: 0;
}

.dossier-role-badge {
  display: inline-block;
  font-family: var(--font-head);
  font-size: 12px;
  font-weight: 700;
  color: #f07c00;
}

.dossier-company {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.75);
}

/* Facts List */
.dossier-facts-grid {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px 0;
}

.dossier-row-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
}

.row-icon-halo {
  display: grid;
  place-items: center;
  flex: none;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: rgba(0, 114, 167, 0.35);
  color: #72b1d3;
}

.row-icon-halo .icon {
  width: 16px;
  height: 16px;
}

.row-details {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.row-label {
  font-family: var(--font-head);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #72b1d3;
}

.row-value {
  font-family: var(--font-head);
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
}

.row-sub {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.55);
}

/* Seal Footer */
.dossier-bottom-seal {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.seal-logo-wrap {
  max-width: 140px;
}

.seal-logo-img {
  width: 100%;
  height: auto;
  filter: brightness(0) invert(1);
  opacity: 0.9;
}

.dossier-web-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-head);
  font-size: 12px;
  font-weight: 700;
  color: #f07c00;
  text-decoration: none;
  transition: opacity 0.2s;
}

.dossier-web-link:hover {
  opacity: 0.85;
}

.dossier-web-link .icon {
  width: 13px;
  height: 13px;
}

/* Responsive */
@media (max-width: 1024px) {
  .about-deck-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

@media (max-width: 640px) {
  .about-stats-integrated {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 12px;
  }
  .stat-compact-item:nth-child(3) {
    border-left: none;
    padding-left: 0;
  }
  .story-actions-compact {
    flex-direction: column;
  }
  .btn-soulsoft-primary,
  .btn-soulsoft-outline {
    width: 100%;
    justify-content: center;
  }
}
`;
