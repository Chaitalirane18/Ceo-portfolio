"use client";

import { motion, useInView, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import Reveal from "@/components/ui/Reveal";
import { pad } from "@/components/util";

const M = motion as any;

const responsibilities = [
  "Defining company vision and growth strategies",
  "Leading software product innovation",
  "Building technology and business teams",
  "Developing strategic partnerships",
  "Expanding product reach across industries",
  "Driving customer-focused software solutions",
];

/** Timeline node: glows once its row enters the viewport. */
function Node({ children, className }: { children: React.ReactNode; className: string }) {
  const ref = useRef<HTMLLIElement>(null);
  const seen = useInView(ref, { margin: "-40% 0px -40% 0px" });
  return <li ref={ref} className={`timeline-item ${className}${seen ? " is-lit" : ""}`}>{children}</li>;
}

export default function Journey() {
  const reduce = useReducedMotion();
  const list = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: list, offset: ["start 70%", "end 60%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section className="section" id="journey" aria-labelledby="journey-title">
      <div className="container grid-12 journey-grid">
        <Reveal className="span-5 journey-sticky">
          <span className="eyebrow">Entrepreneurial Journey</span>
          <h2 id="journey-title">Building Technology. Creating Opportunities.</h2>
          <p className="lead">From a software solutions business in 2012 to a multi-product IT company.</p>
        </Reveal>

        <div className="span-7">
          <ol className="timeline" ref={list}>
            <li className="timeline-fill" aria-hidden="true">
              <M.i style={{ scaleY: reduce ? 1 : fill }} />
            </li>
            <Node className="">
              <Reveal>
                <div className="card timeline-main">
                  <span className="timeline-when">2012 – Present</span>
                  <h3>Founder &amp; CEO</h3>
                  <p className="timeline-co">Soulsoft Infotech Private Limited</p>
                  <p className="timeline-story">
                    Founded Soulsoft as a software solutions business and developed it into a multi-product IT company serving
                    agriculture, retail, manufacturing, trading, and other business sectors.
                  </p>
                </div>
              </Reveal>
            </Node>
            <li aria-hidden="true"><p className="timeline-label">Key responsibilities include:</p></li>
            {responsibilities.map((r, i) => (
              <Node className="" key={r}>
                <Reveal delay={0.04}>
                  <div className="card timeline-step">
                    <span className="n">{pad(i + 1)}</span>
                    <span>{r}</span>
                  </div>
                </Reveal>
              </Node>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
