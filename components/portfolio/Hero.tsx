"use client";

import { useEffect, useState } from "react";

/* ---------- Typewriter hook ---------- */
const ROLES = ["Founder & CEO", "Software Entrepreneur", "Technology & Business Strategist"];

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setText(words[0]); return; }
    let i = 0, c = 0, del = false;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const w = words[i];
      c += del ? -1 : 1;
      setText(w.slice(0, c));
      let wait = del ? 35 : 70;
      if (!del && c === w.length) { del = true; wait = 1600; }
      else if (del && c === 0) { del = false; i = (i + 1) % words.length; wait = 350; }
      t = setTimeout(tick, wait);
    };
    t = setTimeout(tick, 900);
    return () => clearTimeout(t);
  }, [words]);
  return text;
}

/* ---------- Hero (Merged: V2 left + V1 circle right + Scrolling Marquee) ---------- */
export function Hero() {
  const typed = useTypewriter(ROLES);
  const [flipped, setFlipped] = useState(false);
  const [hintHidden, setHintHidden] = useState(false);
  const [cutoutError, setCutoutError] = useState(false);

  const handleFlip = () => {
    setFlipped((f) => !f);
    if (!hintHidden) setHintHidden(true);
  };

  return (
    <section className="hero" id="top" aria-label="Introduction">
      {/* 2-Column Hero Content */}
      <div className="hero-content">
        <div className="container hero-grid-merged">
          {/* LEFT: Version 2 text content */}
          <div className="hero-left">
            <div className="hero-badge-wrap">
              <div className="hero-label-merged">
                <span className="hero-logo-pill">
                  <img src="/images/soulsoft-logo-full.png" width={640} height={300} alt="Soulsoft Infotech" />
                </span>
                <span>Soulsoft Infotech Private Limited</span>
              </div>
            </div>

            <h1 className="hero-heading">PRASAD SHIVAJI GODAGE</h1>

            <div className="hero-role-merged">
              <span className="sr-only">
                Founder &amp; CEO | Software Entrepreneur | Technology &amp; Business Strategist
              </span>
              <span aria-hidden="true">
                {typed}
                <i className="caret-merged" />
              </span>
            </div>

            <div className="hero-creds">
              <span>15+ Years of Experience</span>
              <span className="cred-dot" aria-hidden="true">·</span>
              <span>Software Development</span>
              <span className="cred-dot" aria-hidden="true">·</span>
              <span>Business Automation</span>
              <span className="cred-dot" aria-hidden="true">·</span>
              <span>Product Innovation</span>
            </div>

            <p className="hero-quote">
              &ldquo;Building the Future Through Technology, Innovation &amp; Vision.&rdquo;
            </p>

            <p className="hero-desc">
              Prasad Godage is a technology entrepreneur and the Founder &amp; CEO of Soulsoft Infotech Private Limited,
              a software development and IT solutions company established in 2012. With over 15 years of experience in the IT
              industry, he specializes in developing scalable software products, business automation solutions, and
              technology-driven business models. His vision is to simplify complex business operations through affordable,
              reliable, and innovative technology.
            </p>

            <div className="hero-btns">
              <a className="btn-orange" href="#journey">
                Explore My Journey →
              </a>
              <a className="btn-line" href="#soulsoft">
                Discover Soulsoft ◎
              </a>
            </div>
          </div>

          {/* RIGHT: Version 1 circle hero image */}
          <div className="hero-right">
            <div className="circle-hero-nx">
              <button
                className={`circle-card-nx${flipped ? " is-flipped" : ""}`}
                type="button"
                aria-pressed={flipped ? "true" : "false"}
                aria-label="Photo of Prasad Godage. Click to turn over and see key stats."
                onClick={handleFlip}
              >
                {/* FRONT */}
                <div className="circle-front-nx">
                  <div className="circle-ring-nx" aria-hidden="true">
                    <span className="orbit-dot-nx orbit-dot-nx--orange" />
                    <span className="orbit-dot-nx orbit-dot-nx--navy" />
                  </div>
                  <div className="circle-glow-nx" aria-hidden="true" />
                  {!cutoutError ? (
                    <img
                      className="circle-photo-nx"
                      src="/prasad-cutout.png"
                      alt=""
                      width={682}
                      height={1024}
                      onError={() => setCutoutError(true)}
                    />
                  ) : (
                    <img
                      className="circle-photo-nx circle-photo-nx--fallback"
                      src="/prasad-godage.jpg"
                      alt=""
                      width={682}
                      height={1024}
                    />
                  )}
                </div>

                {/* BACK */}
                <div className="circle-back-nx">
                  <div className="back-content-nx">
                    <div className="back-logo-nx">
                      <img src="/images/soulsoft-logo-full.png" width={640} height={300} alt="" />
                    </div>
                    <h2 className="back-name-nx">Prasad Shivaji Godage</h2>
                    <p className="back-title-nx">Founder &amp; CEO</p>
                    <div className="back-stats-nx">
                      <div><span className="back-val">15+</span><span className="back-lbl">Years in Software</span></div>
                      <div><span className="back-val">12</span><span className="back-lbl">Products</span></div>
                      <div><span className="back-val">9</span><span className="back-lbl">Industries</span></div>
                    </div>
                    <p className="back-est-nx">Est. 2012 · Sangamner</p>
                    <p className="back-motto-nx">&ldquo;Simple, affordable software for businesses across India and abroad.&rdquo;</p>
                  </div>
                </div>
              </button>

              {/* Tooltip */}
              <span className={`flip-hint-nx${hintHidden ? " is-hidden" : ""}`}>
                Click to turn over
              </span>

              {/* Est card */}
              <div className="est-card-nx">
                <strong>Est. 2012</strong>
                <span>Sangamner, Pune, Nashik</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling name marquee across the bottom (always left-to-right) */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track" id="marquee">
          <span>Prasad Godage</span>
          <span>Prasad Godage</span>
          <span>Prasad Godage</span>
          <span>Prasad Godage</span>
        </div>
      </div>

      <h1 className="sr-only">Prasad Godage, Founder &amp; CEO of Soulsoft Infotech</h1>
    </section>
  );
}

export function Statement() {
  return (
    <>
      <section aria-label="Mission">
        <div className="container statement-grid">
          <span className="kicker reveal">Since 2012</span>
          <p className="statement-text" id="statement">
            I build simple, affordable software for businesses <span className="hl">across India and abroad.</span> It all started in a small town called Sangamner.
          </p>
        </div>
      </section>
    </>
  );
}
