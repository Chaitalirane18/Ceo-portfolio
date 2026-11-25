"use client";

import Image from "next/image";
import Icon from "@/components/Icon";
import Reveal from "@/components/ui/Reveal";

/**
 * Business Vision & Mission Section.
 * Premium executive split-screen composition with Vision & Mission cards,
 * followed by the CEO's Strategic Philosophy spotlight deck.
 */
export default function Vision() {
  return (
    <section className="vision-section" id="vision" aria-labelledby="vision-title">
      <style dangerouslySetInnerHTML={{ __html: visionCss }} />

      <div className="container">
        {/* Section Header */}
        <Reveal className="vision-header text-center" y={20}>
          <div className="vision-eyebrow-badge">
            <span className="vision-dot-pulse" aria-hidden="true" />
            <span>BUSINESS VISION &amp; MISSION</span>
          </div>
          <h2 id="vision-title" className="vision-main-title">
            Purpose-Driven Leadership. <span className="vision-title-gradient">Future-Ready Innovation.</span>
          </h2>
          <p className="vision-lead-text">
            Guiding the long-term technological evolution, enterprise product engineering, and business automation roadmap of Soulsoft Infotech.
          </p>
        </Reveal>

        {/* Split Screen Cards: Vision & Mission */}
        <div className="vision-deck-grid">
          {/* Card 1: Vision */}
          <Reveal className="vision-deck-item" x={-20} y={0} delay={0.06}>
            <article className="vision-pillar-card vision-pillar-card--vision">
              <div className="card-ambient-glow card-ambient-glow--cyan" aria-hidden="true" />
              <div className="card-watermark" aria-hidden="true">01</div>

              <div className="card-top-bar">
                <div className="card-icon-halo card-icon-halo--blue">
                  <Icon name="compass" />
                </div>
                <span className="card-tag card-tag--blue">Strategic Horizon</span>
              </div>

              <div className="card-content">
                <h3 className="card-heading card-heading--vision">Vision</h3>
                <blockquote className="card-quote">
                  &ldquo;To become a trusted technology partner by delivering innovative, scalable, and affordable software solutions that accelerate digital transformation.&rdquo;
                </blockquote>
              </div>

              <div className="card-pillars-wrap">
                <span className="pillar-badge">Innovative Software</span>
                <span className="pillar-badge">Scalable Systems</span>
                <span className="pillar-badge">Affordable &amp; Practical</span>
                <span className="pillar-badge">Digital Transformation</span>
              </div>
            </article>
          </Reveal>

          {/* Card 2: Mission */}
          <Reveal className="vision-deck-item" x={20} y={0} delay={0.12}>
            <article className="vision-pillar-card vision-pillar-card--mission">
              <div className="card-ambient-glow card-ambient-glow--gold" aria-hidden="true" />
              <div className="card-watermark" aria-hidden="true">02</div>

              <div className="card-top-bar">
                <div className="card-icon-halo card-icon-halo--gold">
                  <Icon name="rocket" />
                </div>
                <span className="card-tag card-tag--gold">Core Mandate</span>
              </div>

              <div className="card-content">
                <h3 className="card-heading card-heading--mission">Mission</h3>
                <blockquote className="card-quote">
                  &ldquo;To empower businesses with reliable software products, seamless integrations, and intelligent automation that deliver measurable business value.&rdquo;
                </blockquote>
              </div>

              <div className="card-pillars-wrap">
                <span className="pillar-badge pillar-badge--gold">Reliable Products</span>
                <span className="pillar-badge pillar-badge--gold">Seamless Integrations</span>
                <span className="pillar-badge pillar-badge--gold">Intelligent Automation</span>
                <span className="pillar-badge pillar-badge--gold">Measurable Business Value</span>
              </div>
            </article>
          </Reveal>
        </div>

        {/* CEO Business Vision Spotlight Banner */}
        <Reveal className="ceo-spotlight-wrap" y={28} delay={0.18}>
          <div className="ceo-spotlight-card">
            <div className="spotlight-shimmer" aria-hidden="true" />

            <div className="ceo-spotlight-grid">
              {/* Left Quote & Vision Statement */}
              <div className="ceo-spotlight-main">
                <div className="ceo-tag-row">
                  <span className="ceo-philosophy-badge">CEO Business Vision</span>
                  <span className="ceo-quote-mark" aria-hidden="true">&ldquo;</span>
                </div>

                <p className="ceo-quote-text">
                  &ldquo;To build <strong className="highlight-text highlight-text--blue">innovative</strong>,{" "}
                  <strong className="highlight-text highlight-text--cyan">scalable</strong>, and{" "}
                  <strong className="highlight-text highlight-text--gold">affordable</strong> software solutions that{" "}
                  <strong className="highlight-text highlight-text--bright">empower</strong> businesses through technology and automation.&rdquo;
                </p>

                <p className="ceo-quote-subtext">
                  Empowering 12+ enterprise software products and multiple industry verticals across Maharashtra and India with accessible, high-performance technology.
                </p>
              </div>

              {/* Right Profile & Action */}
              <div className="ceo-spotlight-profile">
                <div className="profile-identity-lockup">
                  <div className="profile-avatar-ring">
                    <Image
                      src="/prasad.jpg"
                      alt="Prasad Shivaji Godage"
                      width={64}
                      height={64}
                      className="profile-avatar-img"
                    />
                  </div>
                  <div className="profile-text-meta">
                    <strong className="profile-name">Prasad Shivaji Godage</strong>
                    <span className="profile-role">Founder &amp; CEO</span>
                    <span className="profile-org">Soulsoft Infotech Private Limited</span>
                  </div>
                </div>

                <div className="profile-cta-row">
                  <a className="btn-discover" href="#soulsoft">
                    <span>Discover Soulsoft</span>
                    <Icon name="arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const visionCss = `
/* ==========================================================================
   Vision & Mission Component — Elite Executive Design
   ========================================================================== */
.vision-section {
  position: relative;
  overflow: hidden;
  padding: clamp(72px, 9vh, 112px) 0;
  background: radial-gradient(120% 80% at 50% 0%, #f4f8fd 0%, #ffffff 50%, #eff6fd 100%);
  border-top: 1px solid rgba(226, 232, 240, 0.8);
  border-bottom: 1px solid rgba(226, 232, 240, 0.8);
}

/* Header */
.vision-header {
  max-width: 840px;
  margin: 0 auto clamp(40px, 6vh, 64px);
  text-align: center;
}

.vision-eyebrow-badge {
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

.vision-dot-pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #2563eb;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.25);
  animation: pulse-dot 2.4s infinite ease-in-out;
}

@keyframes pulse-dot {
  0%, 100% { transform: scale(0.9); opacity: 0.8; }
  50% { transform: scale(1.2); opacity: 1; box-shadow: 0 0 0 8px rgba(37, 99, 235, 0.15); }
}

.vision-main-title {
  font-family: var(--font-head);
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #0b1f3a;
  text-wrap: balance;
}

.vision-title-gradient {
  background: linear-gradient(135deg, #174ea6 0%, #2563eb 50%, #0284c7 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.vision-lead-text {
  max-width: 64ch;
  margin: 18px auto 0;
  font-size: clamp(16px, 1.8vw, 19px);
  line-height: 1.65;
  color: #4b5563;
}

/* Vision & Mission Cards Grid */
.vision-deck-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px;
  margin-bottom: 48px;
}

.vision-pillar-card {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 380px;
  padding: clamp(32px, 4vw, 48px);
  border-radius: 24px;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s;
}

.vision-pillar-card--vision {
  background: linear-gradient(145deg, #ffffff 0%, #f4f8fe 50%, #e7f2fd 100%);
  border: 1.5px solid rgba(37, 99, 235, 0.18);
  box-shadow: 0 10px 30px rgba(15, 44, 89, 0.06), 0 24px 60px rgba(37, 99, 235, 0.08);
}

.vision-pillar-card--mission {
  background: linear-gradient(145deg, #0b1f3a 0%, #0e294f 55%, #143e75 100%);
  border: 1.5px solid rgba(96, 165, 250, 0.25);
  box-shadow: 0 12px 36px rgba(11, 31, 58, 0.25), 0 28px 70px rgba(11, 31, 58, 0.35);
  color: #ffffff;
}

.vision-pillar-card:hover {
  transform: translateY(-6px);
}

.vision-pillar-card--vision:hover {
  border-color: rgba(37, 99, 235, 0.4);
  box-shadow: 0 18px 40px rgba(15, 44, 89, 0.1), 0 32px 80px rgba(37, 99, 235, 0.16);
}

.vision-pillar-card--mission:hover {
  border-color: rgba(96, 165, 250, 0.5);
  box-shadow: 0 20px 48px rgba(11, 31, 58, 0.4), 0 36px 90px rgba(23, 78, 166, 0.45);
}

/* Watermarks */
.card-watermark {
  position: absolute;
  top: 16px;
  right: 28px;
  font-family: var(--font-head);
  font-size: clamp(80px, 10vw, 120px);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.06em;
  pointer-events: none;
  user-select: none;
  z-index: 0;
}

.vision-pillar-card--vision .card-watermark {
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(37, 99, 235, 0.12);
}

.vision-pillar-card--mission .card-watermark {
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.15);
}

/* Card Top Bar */
.card-top-bar {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
}

.card-icon-halo {
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 16px;
  transition: transform 0.4s ease;
}

.vision-pillar-card:hover .card-icon-halo {
  transform: scale(1.08) rotate(-4deg);
}

.card-icon-halo--blue {
  background: linear-gradient(135deg, #2563eb, #174ea6);
  color: #ffffff;
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.35);
}

.card-icon-halo--gold {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: #0b1f3a;
  box-shadow: 0 8px 20px rgba(245, 158, 11, 0.35);
}

.card-icon-halo .icon {
  width: 28px;
  height: 28px;
}

.card-tag {
  font-family: var(--font-head);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: 999px;
}

.card-tag--blue {
  background: rgba(37, 99, 235, 0.08);
  color: #174ea6;
  border: 1px solid rgba(37, 99, 235, 0.15);
}

.card-tag--gold {
  background: rgba(245, 158, 11, 0.15);
  color: #fcd34d;
  border: 1px solid rgba(245, 158, 11, 0.3);
}

/* Card Content */
.card-content {
  position: relative;
  z-index: 1;
  flex: 1;
  margin-bottom: 32px;
}

.card-heading {
  font-family: var(--font-head);
  font-size: clamp(26px, 2.8vw, 36px);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.card-heading--vision {
  color: #0b1f3a;
}

.card-heading--mission {
  color: #ffffff;
}

.card-quote {
  font-size: clamp(17px, 1.6vw, 20px);
  line-height: 1.65;
  font-weight: 500;
}

.vision-pillar-card--vision .card-quote {
  color: #1f2937;
}

.vision-pillar-card--mission .card-quote {
  color: rgba(255, 255, 255, 0.92);
}

/* Card Pillars / Tags */
.card-pillars-wrap {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 20px;
  border-top: 1px solid rgba(15, 23, 42, 0.08);
}

.vision-pillar-card--mission .card-pillars-wrap {
  border-top-color: rgba(255, 255, 255, 0.12);
}

.pillar-badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 8px;
  font-family: var(--font-head);
  font-size: 13px;
  font-weight: 600;
  background: #ffffff;
  color: #174ea6;
  border: 1px solid rgba(37, 99, 235, 0.16);
  box-shadow: 0 2px 6px rgba(11, 31, 58, 0.04);
}

.pillar-badge--gold {
  background: rgba(255, 255, 255, 0.08);
  color: #e0f2fe;
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: none;
}

/* Ambient Card Glows */
.card-ambient-glow {
  position: absolute;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(60px);
  opacity: 0.6;
}

.card-ambient-glow--cyan {
  top: -60px;
  right: -60px;
  background: radial-gradient(circle, rgba(96, 165, 250, 0.35), transparent 70%);
}

.card-ambient-glow--gold {
  bottom: -60px;
  right: -60px;
  background: radial-gradient(circle, rgba(245, 158, 11, 0.25), transparent 70%);
}

/* ==========================================================================
   CEO Spotlight Card (The Business Philosophy Deck)
   ========================================================================== */
.ceo-spotlight-wrap {
  position: relative;
}

.ceo-spotlight-card {
  position: relative;
  overflow: hidden;
  padding: clamp(36px, 4.5vw, 56px);
  border-radius: 28px;
  background: linear-gradient(135deg, #07152b 0%, #0b1f3a 50%, #122d56 100%);
  border: 1.5px solid rgba(96, 165, 250, 0.25);
  box-shadow: 0 24px 64px rgba(7, 21, 43, 0.28), 0 40px 100px rgba(11, 31, 58, 0.35);
  color: #ffffff;
}

.spotlight-shimmer {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(900px circle at 15% 20%, rgba(37, 99, 235, 0.18), transparent 70%),
              radial-gradient(600px circle at 85% 80%, rgba(245, 158, 11, 0.12), transparent 70%);
}

.ceo-spotlight-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(0, 0.85fr);
  gap: clamp(36px, 5vw, 64px);
  align-items: center;
}

/* Left Quote Section */
.ceo-spotlight-main {
  position: relative;
  padding-left: clamp(20px, 2.5vw, 32px);
  border-left: 4px solid #f59e0b;
}

.ceo-tag-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.ceo-philosophy-badge {
  font-family: var(--font-head);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #f59e0b;
}

.ceo-quote-mark {
  font-family: var(--font-head);
  font-size: 64px;
  line-height: 0.5;
  color: rgba(245, 158, 11, 0.3);
  user-select: none;
}

.ceo-quote-text {
  font-family: var(--font-head);
  font-size: clamp(22px, 2.4vw, 32px);
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-wrap: balance;
}

.highlight-text {
  font-weight: 800;
  position: relative;
}

.highlight-text--blue {
  color: #60a5fa;
}

.highlight-text--cyan {
  color: #38bdf8;
}

.highlight-text--gold {
  color: #fbbf24;
}

.highlight-text--bright {
  color: #93c5fd;
}

.ceo-quote-subtext {
  margin-top: 18px;
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.72);
  max-width: 58ch;
}

/* Right Profile Section */
.ceo-spotlight-profile {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-left: clamp(24px, 3vw, 40px);
  border-left: 1px solid rgba(255, 255, 255, 0.14);
}

.profile-identity-lockup {
  display: flex;
  align-items: center;
  gap: 18px;
}

.profile-avatar-ring {
  flex: none;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #f59e0b;
  box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.2), 0 8px 20px rgba(0, 0, 0, 0.4);
  background: #0b1f3a;
}

.profile-avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.profile-text-meta {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.profile-name {
  font-family: var(--font-head);
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.01em;
  color: #ffffff;
}

.profile-role {
  font-family: var(--font-head);
  font-size: 14px;
  font-weight: 600;
  color: #f59e0b;
}

.profile-org {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
}

.profile-cta-row {
  margin-top: 4px;
}

.btn-discover {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 12px;
  font-family: var(--font-head);
  font-size: 15px;
  font-weight: 700;
  color: #0b1f3a;
  background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%);
  border: none;
  box-shadow: 0 8px 24px rgba(245, 158, 11, 0.35);
  transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
  text-decoration: none;
}

.btn-discover:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(245, 158, 11, 0.5);
  filter: brightness(1.05);
}

.btn-discover .icon {
  width: 18px;
  height: 18px;
  transition: transform 0.2s ease;
}

.btn-discover:hover .icon {
  transform: translateX(4px);
}

/* Responsive Breakpoints */
@media (max-width: 1024px) {
  .vision-deck-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .ceo-spotlight-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .ceo-spotlight-profile {
    padding-left: 0;
    border-left: none;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    padding-top: 28px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

@media (max-width: 640px) {
  .vision-pillar-card {
    padding: 28px 24px;
    min-height: 0;
  }
  .ceo-spotlight-card {
    padding: 28px 20px;
  }
  .ceo-spotlight-profile {
    flex-direction: column;
    align-items: flex-start;
  }
  .ceo-spotlight-main {
    padding-left: 16px;
  }
  .btn-discover {
    width: 100%;
    justify-content: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .vision-dot-pulse {
    animation: none;
  }
  .vision-pillar-card:hover {
    transform: none;
  }
}
`;
