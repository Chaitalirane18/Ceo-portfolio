"use client";

import { motion, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import MagneticButton from "@/components/ui/MagneticButton";
import Portrait from "./Portrait";

const M = motion as any;

// Lazy-loaded dynamic background canvas
const HeroCanvas = dynamic(() => import("@/components/ui/HeroCanvas"), { ssr: false });

const NAME = "PRASAD SHIVAJI GODAGE";
const ROLES = [
  "Founder & CEO",
  "Software Entrepreneur",
  "Technology & Business Strategist",
];

function useTypewriter(words: string[], enabled: boolean) {
  const [text, setText] = useState(enabled ? "" : words[0]);
  useEffect(() => {
    if (!enabled) {
      setText(words[0]);
      return;
    }
    let i = 0,
      c = 0,
      del = false,
      t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const w = words[i];
      c += del ? -1 : 1;
      setText(w.slice(0, c));
      let wait = del ? 35 : 70;
      if (!del && c === w.length) {
        del = true;
        wait = 1600;
      } else if (del && c === 0) {
        del = false;
        i = (i + 1) % words.length;
        wait = 350;
      }
      t = setTimeout(tick, wait);
    };
    t = setTimeout(tick, 900);
    return () => clearTimeout(t);
  }, [words, enabled]);
  return text;
}

export default function Hero() {
  const reduce = useReducedMotion();
  const typed = useTypewriter(ROLES, !reduce);

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-orb hero-orb--a" aria-hidden="true" />
      <div className="hero-orb hero-orb--b" aria-hidden="true" />
      <div className="hero-orb hero-orb--c" aria-hidden="true" />
      <HeroCanvas />

      <div className="container grid-12 hero-grid">
        <div className="span-7 hero-copy">
          <M.div
            className="hero-badge-wrap"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="hero-label">
              <span className="hero-logo" aria-hidden="true">
                <Image
                  src="/images/soulsoft-logo-full.png"
                  width={640}
                  height={300}
                  sizes="64px"
                  alt="Soulsoft Infotech"
                />
              </span>
              <span>Soulsoft Infotech Private Limited</span>
            </div>
          </M.div>

          <M.h1
            id="hero-title"
            className="hero-name"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {NAME}
          </M.h1>

          <M.div
            className="hero-role"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="visually-hidden">
              Founder &amp; CEO | Software Entrepreneur | Technology &amp; Business Strategist
            </span>
            <span aria-hidden="true">
              {typed}
              <i className="caret" />
            </span>
          </M.div>

          <M.div
            className="hero-credentials"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span>15+ Years of Experience</span>
            <span className="dot" aria-hidden="true">·</span>
            <span>Software Development</span>
            <span className="dot" aria-hidden="true">·</span>
            <span>Business Automation</span>
            <span className="dot" aria-hidden="true">·</span>
            <span>Product Innovation</span>
          </M.div>

          <M.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="hero-statement">
              &ldquo;Building the Future Through Technology, Innovation &amp; Vision.&rdquo;
            </p>

            <p className="hero-summary">
              Prasad Godage is a technology entrepreneur and the Founder &amp; CEO of Soulsoft Infotech Private Limited,
              a software development and IT solutions company established in 2012. With over 15 years of experience in the IT
              industry, he specializes in developing scalable software products, business automation solutions, and
              technology-driven business models. His vision is to simplify complex business operations through affordable,
              reliable, and innovative technology.
            </p>

            <div className="hero-actions">
              <MagneticButton className="btn btn--accent" href="#journey">
                Explore My Journey <Icon name="arrow" />
              </MagneticButton>
              <MagneticButton className="btn btn--outline-dark" href="#soulsoft">
                Discover Soulsoft <Icon name="compass" />
              </MagneticButton>
            </div>
          </M.div>
        </div>

        <div className="span-5 hero-visual-wrap">
          <Portrait />
        </div>
      </div>
    </section>
  );
}
