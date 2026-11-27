import Image from "next/image";
import Link from "next/link";
import { WHATSAPP } from "@/data/portfolio";

const BIO_STATS = [
  { value: "15+", label: "Years Experience", sub: "IT Industry" },
  { value: "2012", label: "Journey Started", sub: "Soulsoft Founded" },
  { value: "12", label: "Software Products", sub: "& Enterprise Solutions" },
  { value: "Multiple", label: "Industry Segments", sub: "Served Across India" },
];

const PROFILE_STATS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lh-pstat-ic">
        <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" />
      </svg>
    ),
    label: "Founded Soulsoft",
    value: "2012",
    sub: "Entrepreneurial Journey Began",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lh-pstat-ic">
        <path d="M3 20h18M6 16v-4M11 16V8M16 16v-6" /><path d="M5 8l5-4 4 3 5-4" />
      </svg>
    ),
    label: "IT Industry Experience",
    value: "15+ Years",
    sub: "Enterprise Software & Strategy",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lh-pstat-ic">
        <path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
    label: "Headquarters",
    value: "Sangamner, Maharashtra",
    sub: "Registered Corporate Office",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="lh-pstat-ic">
        <circle cx="9" cy="8" r="3.2" /><path d="M3 20c.6-3.6 3-5.5 6-5.5s5.4 1.9 6 5.5" /><circle cx="17" cy="9" r="2.4" /><path d="M17.5 14.5c2 .3 3.2 1.8 3.5 4" />
      </svg>
    ),
    label: "Business Presence",
    value: "Sangamner · Pune · Nashik",
    sub: "Multi-Location Regional Reach",
  },
];

export default function LeadershipHero() {
  return (
    <section className="lh-section" aria-labelledby="lh-title">
      <div className="container">

        {/* Top kicker badge */}
        <div className="lh-kicker-wrap">
          <span className="lh-kicker-dot" aria-hidden="true" />
          <span className="lh-kicker-text">ABOUT PRASAD GODAGE &nbsp;·&nbsp; PROFESSIONAL OVERVIEW</span>
          <span className="lh-kicker-dot" aria-hidden="true" />
        </div>

        {/* Main heading */}
        <h1 id="lh-title" className="lh-title lines">
          Leadership Driven by{" "}
          <span className="lh-title-accent">Innovation.</span>
        </h1>

        {/* Two-column body */}
        <div className="lh-body">

          {/* ── LEFT: bio content ── */}
          <div className="lh-left">
            {/* Role badge */}
            <div className="lh-role-row">
              <span className="lh-role-badge">FOUNDER &amp; CEO · SOULSOFT INFOTECH</span>
              <span className="lh-role-sub">Software Entrepreneur &amp; Business Strategist</span>
            </div>

            {/* Bio text */}
            <p className="lh-bio">
              <strong>Prasad Godage</strong> is a technology entrepreneur and the{" "}
              <strong>Founder &amp; CEO of Soulsoft Infotech Private Limited</strong>, a software
              development and IT solutions company established in <strong>2012</strong>.
            </p>
            <p className="lh-bio">
              With over <strong>15 years of experience</strong> in the IT industry, he specialises
              in developing scalable software products, business automation solutions, ERP systems,
              SaaS applications, and technology-driven business models.
            </p>

            {/* Pull-quote */}
            <blockquote className="lh-quote">
              <p>
                "His vision is to simplify complex business operations through affordable, reliable,
                and innovative technology."
              </p>
              <footer className="lh-quote-tags">
                <span>&#10003; Affordable</span>
                <span>&#10003; Reliable</span>
                <span>&#10003; Innovative</span>
              </footer>
            </blockquote>

            {/* Stats strip */}
            <ul className="lh-stats" aria-label="Key numbers">
              {BIO_STATS.map((s) => (
                <li key={s.value}>
                  <strong className="lh-stat-val">{s.value}</strong>
                  <span className="lh-stat-label">{s.label}</span>
                  <span className="lh-stat-sub">{s.sub}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="lh-ctas">
              <Link className="btn-orange" href="#journey">Explore Journey →</Link>
              <Link
                className="lh-cta-ghost"
                href="#expertise"
              >
                Core Expertise
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="14" height="14">
                  <circle cx="12" cy="12" r="9" /><path d="M15.5 8.5l-2 5-5 2 2-5z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ── RIGHT: dark profile card ── */}
          <div className="lh-card" aria-label="Prasad Godage profile card">
            {/* Avatar + name */}
            <div className="lh-card-head">
              <div className="lh-avatar-wrap">
                <Image
                  src="/prasad-godage.jpg"
                  alt="Prasad Godage, Founder & CEO of Soulsoft Infotech"
                  width={56}
                  height={56}
                  className="lh-avatar"
                  priority
                />
              </div>
              <div>
                <p className="lh-card-name">Prasad Shivaji Godage</p>
                <p className="lh-card-role">Founder &amp; CEO</p>
                <p className="lh-card-company">Soulsoft Infotech Private Limited</p>
              </div>
            </div>

            {/* Profile stats */}
            <ul className="lh-pstats" aria-label="Profile details">
              {PROFILE_STATS.map((s) => (
                <li key={s.label} className="lh-pstat">
                  <span className="lh-pstat-ic-wrap" aria-hidden="true">{s.icon}</span>
                  <div>
                    <span className="lh-pstat-lbl">{s.label}</span>
                    <span className="lh-pstat-val">{s.value}</span>
                    <span className="lh-pstat-sub">{s.sub}</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Footer: Soulsoft logo + link */}
            <div className="lh-card-footer">
              <Image
                src="/images/soulsoft-logo-full.png"
                unoptimized
                alt="Soulsoft Infotech"
                width={120}
                height={36}
                className="lh-card-logo"
              />
              <a
                className="lh-card-site"
                href="https://soulsoft.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                soulsoft.in →
              </a>
            </div>
          </div>

        </div>{/* /lh-body */}
      </div>
    </section>
  );
}
