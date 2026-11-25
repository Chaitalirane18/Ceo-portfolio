"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Icon from "@/components/Icon";
import Reveal from "@/components/ui/Reveal";
import { phones, WHATSAPP_PRASAD } from "@/data/site";

const TOPICS = [
  "Enterprise ERP & SaaS Solutions",
  "Product Demo / Evaluation",
  "Business Process Automation",
  "Custom Software & Web Application",
  "Mobile App Development",
  "Strategic Partnership & Consulting",
  "Other Business Requirements",
];

export default function Contact() {
  const [topic, setTopic] = useState(TOPICS[0]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const form = useRef<HTMLFormElement>(null);

  // Pre-fill demo request when triggered from product cards
  useEffect(() => {
    const onEnquire = (e: Event) => {
      const productName = String((e as CustomEvent<string>).detail ?? "");
      setTopic("Product Demo / Evaluation");
      setMessage(`Hello Prasad, I would like to request a demo and explore details for ${productName}.`);
      setTimeout(() => {
        form.current?.querySelector<HTMLInputElement>("#f-name")?.focus({ preventScroll: true });
      }, 700);
    };
    window.addEventListener("pg:enquire", onEnquire);
    return () => window.removeEventListener("pg:enquire", onEnquire);
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cleanName = name.trim();
    const cleanMsg = message.trim();

    if (!cleanName || !cleanMsg) {
      setStatus("Please enter your name and a brief message.");
      form.current?.querySelector<HTMLElement>(!cleanName ? "#f-name" : "#f-msg")?.focus();
      return;
    }

    const text = `Hello Prasad,\nI am ${cleanName}${phone ? ` (${phone})` : ""}.\nInterest: ${topic}\n\n${cleanMsg}`;
    window.open(`https://wa.me/${WHATSAPP_PRASAD}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setStatus("Opening WhatsApp... You can now send your message directly to Mr. Prasad Godage.");
  };

  return (
    <section className="contact-executive-section" id="contact" aria-labelledby="contact-title">
      <style dangerouslySetInnerHTML={{ __html: contactCss }} />

      <div className="container">
        {/* Section Header */}
        <Reveal className="contact-header text-center" y={20}>
          <div className="contact-eyebrow-badge">
            <span className="contact-pulse-dot" aria-hidden="true" />
            <span>YOUR BUSINESS. YOUR REQUIREMENTS. OUR TECHNOLOGY.</span>
          </div>
          <h2 id="contact-title" className="contact-main-title">
            Let&apos;s Build Something <span className="contact-title-gradient">Better Together!</span>
          </h2>
          <p className="contact-lead-text">
            Whether you are looking for enterprise software, business automation, ERP development, or a strategic technology partner, let&apos;s connect and explore new opportunities.
          </p>
        </Reveal>

        {/* Contact Layout Grid */}
        <div className="contact-layout-grid">
          {/* Left Column: Direct Corporate & Leadership Contacts */}
          <Reveal className="contact-left-col" x={-24} y={0}>
            <div className="corporate-directory-card">
              {/* Company Seal & Title */}
              <div className="corp-header-block">
                <div className="corp-seal-icon">
                  <Icon name="award" />
                </div>
                <div>
                  <h3 className="corp-name">SOULSOFT INFOTECH PRIVATE LIMITED</h3>
                  <div className="corp-location-chip">
                    <Icon name="pin" />
                    <span>Sangamner, Maharashtra, India</span>
                  </div>
                </div>
              </div>

              {/* CEO Direct Contact Spotlight */}
              <div className="ceo-contact-spotlight">
                <div className="ceo-id-row">
                  <div className="ceo-avatar-badge">PG</div>
                  <div className="ceo-meta-text">
                    <strong>Prasad Shivaji Godage</strong>
                    <span>Founder &amp; CEO</span>
                  </div>
                </div>

                <a className="btn-call-ceo" href={`tel:${phones[0].tel}`}>
                  <Icon name="phone" />
                  <span>Call CEO: {phones[0].display}</span>
                </a>
              </div>

              {/* Department Phone Directory */}
              <div className="department-lines-wrap">
                <span className="lines-label">Official Contact Numbers</span>
                <div className="department-cards-grid">
                  {phones.map((p) => (
                    <a key={p.tel} href={`tel:${p.tel}`} className="dept-phone-card">
                      <div className="dept-info">
                        <span className="dept-icon-box">
                          <Icon name="phone" />
                        </span>
                        <div>
                          <strong className="dept-title">{p.label}</strong>
                          {p.note && <span className="dept-role">{p.note}</span>}
                        </div>
                      </div>
                      <span className="dept-number">{p.display}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Web Channels & Headquarters */}
              <div className="web-channels-wrap">
                <span className="lines-label">Verified Digital Presence</span>
                <div className="web-links-grid">
                  <a href="https://soulsoft.in" target="_blank" rel="noopener noreferrer" className="web-channel-link">
                    <Icon name="link" />
                    <span>Company: <strong>soulsoft.in</strong></span>
                    <Icon name="out" className="channel-arrow" />
                  </a>
                  <a href="https://prasadgodage.com" target="_blank" rel="noopener noreferrer" className="web-channel-link">
                    <Icon name="link" />
                    <span>Personal: <strong>prasadgodage.com</strong></span>
                    <Icon name="out" className="channel-arrow" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Modern Direct Message Form */}
          <Reveal className="contact-right-col" x={24} y={0} delay={0.1}>
            <form className="contact-form-glass" ref={form} onSubmit={onSubmit} noValidate>
              <div className="form-head">
                <div className="form-head-badge">
                  <Icon name="flow" />
                  <span>Direct Communication</span>
                </div>
                <h3>Initiate a Project Discussion</h3>
                <p>
                  Submit your details below to start a direct consultation on WhatsApp with Mr. Prasad Godage.
                </p>
              </div>

              <div className="form-fields-stack">
                {/* Full Name */}
                <div className="custom-form-field">
                  <label htmlFor="f-name">Your Full Name *</label>
                  <div className="input-with-icon">
                    <input
                      id="f-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="e.g. Rajesh Patil"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="custom-form-field">
                  <label htmlFor="f-phone">Phone / WhatsApp Number (optional)</label>
                  <div className="input-with-icon">
                    <input
                      id="f-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                {/* Requirement Category */}
                <div className="custom-form-field">
                  <label htmlFor="f-topic">Select Requirement / Topic</label>
                  <div className="select-with-icon">
                    <select
                      id="f-topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                    >
                      {TOPICS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="custom-form-field">
                  <label htmlFor="f-msg">Project Scope or Message *</label>
                  <textarea
                    id="f-msg"
                    rows={4}
                    placeholder="Briefly describe your business operations, software needs, or automation requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                {/* Status Message */}
                {status && (
                  <div className="form-feedback-alert" role="alert">
                    <Icon name="check" />
                    <span>{status}</span>
                  </div>
                )}

                {/* Submit Action */}
                <button type="submit" className="btn-send-whatsapp">
                  <span>Send Message via WhatsApp</span>
                  <Icon name="arrow" />
                </button>

                <p className="form-footer-privacy">
                  Direct encrypted connection with Founder &amp; CEO · Guaranteed confidential business discussions.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const contactCss = `
/* ==========================================================================
   Executive Contact Section — Deep Corporate Navy Theme
   ========================================================================== */
.contact-executive-section {
  position: relative;
  overflow: hidden;
  padding: clamp(72px, 9vh, 120px) 0;
  background: radial-gradient(110% 80% at 50% 0%, #0d284e 0%, #07152b 55%, #050e1d 100%);
  color: #ffffff;
  border-top: 1px solid rgba(96, 165, 250, 0.2);
}

/* Ambient glow orbs */
.contact-executive-section::before {
  content: "";
  position: absolute;
  top: -120px;
  left: 10%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(37, 99, 235, 0.22), transparent 70%);
  pointer-events: none;
  filter: blur(80px);
}

.contact-executive-section::after {
  content: "";
  position: absolute;
  bottom: -100px;
  right: 10%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(245, 158, 11, 0.15), transparent 70%);
  pointer-events: none;
  filter: blur(80px);
}

/* Header */
.contact-header {
  position: relative;
  z-index: 1;
  max-width: 880px;
  margin: 0 auto clamp(40px, 6vh, 64px);
  text-align: center;
}

.contact-eyebrow-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 18px;
  margin-bottom: 20px;
  border-radius: 999px;
  background: rgba(96, 165, 250, 0.12);
  border: 1px solid rgba(96, 165, 250, 0.28);
  font-family: var(--font-head);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #93c5fd;
}

.contact-pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #38bdf8;
  box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.25);
  animation: pulse-dot 2.4s infinite ease-in-out;
}

.contact-main-title {
  font-family: var(--font-head);
  font-size: clamp(34px, 4.2vw, 50px);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-wrap: balance;
}

.contact-title-gradient {
  background: linear-gradient(135deg, #60a5fa 0%, #38bdf8 50%, #f59e0b 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.contact-lead-text {
  max-width: 66ch;
  margin: 18px auto 0;
  font-size: clamp(16px, 1.8vw, 19px);
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.82);
}

/* Layout Grid */
.contact-layout-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
  gap: 36px;
  align-items: stretch;
}

/* ==========================================================================
   Left Column: Corporate Directory Card
   ========================================================================== */
.corporate-directory-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: clamp(32px, 4vw, 44px);
  border-radius: 28px;
  background: rgba(13, 33, 62, 0.75);
  border: 1.5px solid rgba(96, 165, 250, 0.22);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
}

.corp-header-block {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.corp-seal-icon {
  display: grid;
  place-items: center;
  flex: none;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: linear-gradient(135deg, #1d4ed8, #2563eb);
  color: #ffffff;
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.35);
}

.corp-seal-icon .icon {
  width: 24px;
  height: 24px;
}

.corp-name {
  font-family: var(--font-head);
  font-size: 19px;
  font-weight: 800;
  letter-spacing: 0.04em;
  color: #ffffff;
  margin: 0 0 6px;
}

.corp-location-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #93c5fd;
}

.corp-location-chip .icon {
  width: 14px;
  height: 14px;
  color: #38bdf8;
}

/* CEO Spotlight */
.ceo-contact-spotlight {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 24px;
  margin: 24px 0;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(217, 119, 6, 0.08) 100%);
  border: 1.5px solid rgba(245, 158, 11, 0.35);
}

.ceo-id-row {
  display: flex;
  align-items: center;
  gap: 14px;
}

.ceo-avatar-badge {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-family: var(--font-head);
  font-size: 16px;
  font-weight: 800;
  color: #0b1f3a;
  background: linear-gradient(135deg, #f59e0b, #fbbf24);
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.25);
}

.ceo-meta-text strong {
  display: block;
  font-family: var(--font-head);
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
}

.ceo-meta-text span {
  font-size: 13px;
  color: #fcd34d;
}

.btn-call-ceo {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 10px;
  font-family: var(--font-head);
  font-size: 13px;
  font-weight: 700;
  color: #0b1f3a;
  background: linear-gradient(135deg, #f59e0b, #fbbf24);
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(245, 158, 11, 0.3);
  transition: transform 0.2s, box-shadow 0.2s;
  white-space: nowrap;
}

.btn-call-ceo:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(245, 158, 11, 0.45);
}

.btn-call-ceo .icon {
  width: 15px;
  height: 15px;
}

/* Department Cards Grid */
.department-lines-wrap {
  margin-bottom: 24px;
}

.lines-label {
  display: block;
  font-family: var(--font-head);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #93c5fd;
  margin-bottom: 12px;
}

.department-cards-grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.dept-phone-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 14px 18px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-decoration: none;
  transition: background-color 0.25s, border-color 0.25s, transform 0.25s;
}

.dept-phone-card:hover {
  background: rgba(37, 99, 235, 0.16);
  border-color: rgba(96, 165, 250, 0.4);
  transform: translateX(4px);
}

.dept-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.dept-icon-box {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(56, 189, 248, 0.15);
  color: #38bdf8;
}

.dept-icon-box .icon {
  width: 15px;
  height: 15px;
}

.dept-title {
  display: block;
  font-family: var(--font-head);
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
}

.dept-role {
  display: block;
  font-size: 12px;
  color: #94a3b8;
}

.dept-number {
  font-family: var(--font-head);
  font-size: 14px;
  font-weight: 700;
  color: #60a5fa;
  white-space: nowrap;
}

/* Web Presence Links */
.web-channels-wrap {
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.web-links-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.web-channel-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 14px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 13px;
  color: #cbd5e1;
  text-decoration: none;
  transition: border-color 0.2s, background-color 0.2s;
}

.web-channel-link:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(96, 165, 250, 0.4);
  color: #ffffff;
}

.web-channel-link strong {
  color: #60a5fa;
}

.web-channel-link .icon {
  width: 14px;
  height: 14px;
  color: #38bdf8;
  flex: none;
}

.channel-arrow {
  margin-left: auto;
  opacity: 0.6;
}

/* ==========================================================================
   Right Column: Modern Interactive Glass Form
   ========================================================================== */
.contact-form-glass {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: clamp(32px, 4vw, 44px);
  border-radius: 28px;
  background: rgba(14, 37, 70, 0.85);
  border: 1.5px solid rgba(96, 165, 250, 0.25);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4);
}

.form-head {
  margin-bottom: 24px;
}

.form-head-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 6px;
  font-family: var(--font-head);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: rgba(37, 99, 235, 0.2);
  color: #60a5fa;
  border: 1px solid rgba(96, 165, 250, 0.3);
  margin-bottom: 12px;
}

.form-head-badge .icon {
  width: 13px;
  height: 13px;
}

.form-head h3 {
  font-family: var(--font-head);
  font-size: clamp(22px, 2.4vw, 28px);
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 8px;
  letter-spacing: -0.01em;
}

.form-head p {
  font-size: 14px;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
}

.form-fields-stack {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.custom-form-field {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.custom-form-field label {
  font-family: var(--font-head);
  font-size: 13px;
  font-weight: 600;
  color: #cbd5e1;
}

.custom-form-field input,
.custom-form-field select,
.custom-form-field textarea {
  width: 100%;
  padding: 13px 16px;
  border-radius: 12px;
  background: rgba(7, 21, 43, 0.7);
  border: 1.5px solid rgba(96, 165, 250, 0.22);
  color: #ffffff;
  font-size: 15px;
  font-family: var(--font-body);
  transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
}

.custom-form-field input::placeholder,
.custom-form-field textarea::placeholder {
  color: rgba(255, 255, 255, 0.35);
}

.custom-form-field input:focus,
.custom-form-field select:focus,
.custom-form-field textarea:focus {
  outline: none;
  background: rgba(7, 21, 43, 0.95);
  border-color: #38bdf8;
  box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.2);
}

.custom-form-field select option {
  background: #0b1f3a;
  color: #ffffff;
}

.custom-form-field textarea {
  resize: vertical;
  min-height: 100px;
}

.form-feedback-alert {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 10px;
  background: rgba(34, 197, 94, 0.15);
  border: 1px solid rgba(34, 197, 94, 0.35);
  font-size: 13px;
  color: #86efac;
}

.form-feedback-alert .icon {
  width: 16px;
  height: 16px;
  flex: none;
}

.btn-send-whatsapp {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 16px 28px;
  border-radius: 14px;
  font-family: var(--font-head);
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
  border: none;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(22, 163, 74, 0.35);
  transition: transform 0.2s, box-shadow 0.2s, filter 0.2s;
}

.btn-send-whatsapp:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(22, 163, 74, 0.5);
  filter: brightness(1.06);
}

.btn-send-whatsapp .icon {
  width: 18px;
  height: 18px;
  transition: transform 0.2s;
}

.btn-send-whatsapp:hover .icon {
  transform: translateX(4px);
}

.form-footer-privacy {
  text-align: center;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  margin: 4px 0 0;
}

/* ==========================================================================
   Responsive Adaptations
   ========================================================================== */
@media (max-width: 1024px) {
  .contact-layout-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .web-links-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .corporate-directory-card,
  .contact-form-glass {
    padding: 26px 20px;
    border-radius: 20px;
  }
  .ceo-contact-spotlight {
    flex-direction: column;
    align-items: flex-start;
  }
  .btn-call-ceo {
    width: 100%;
    justify-content: center;
  }
  .dept-phone-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
}
`;
