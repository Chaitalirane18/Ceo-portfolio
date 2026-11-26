"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Icon from "@/components/Icon";
import Reveal from "@/components/ui/Reveal";
import { pad } from "@/components/util";
import { why } from "@/data/why";

const M = motion as any;

const whyDetails: { subtitle: string; icon: string; points: string[] }[] = [
  {
    subtitle: "Established in 2012 by Prasad Godage",
    icon: "award",
    points: [
      "Over a decade of navigating technology shifts from desktop to distributed cloud architectures.",
      "Track record delivering enterprise software across 9+ industrial sectors.",
      "Deep understanding of Indian business compliance, GST structures, and supply chains.",
    ],
  },
  {
    subtitle: "12 Purpose-Built Operational Solutions",
    icon: "layers",
    points: [
      "No generic templates: tailored domain logic for Krushi Kendras, retail, manufacturing, pharma, and governance.",
      "Engineered to solve real business pain points without excessive overhead.",
      "Scalable databases built for high transactional throughput and offline resilience.",
    ],
  },
  {
    subtitle: "Tailored to Your Operating Model",
    icon: "gear",
    points: [
      "Modular architectures that scale alongside business growth from single stores to multi-branch networks.",
      "Custom workflow engines, role-based access controls, and custom reporting capabilities.",
      "Seamless backward compatibility and integration with legacy business tools.",
    ],
  },
  {
    subtitle: "In-House Engineering Excellence",
    icon: "users",
    points: [
      "Specialized engineers across Node.js, .NET Core, React, Flutter, SQL, and Azure.",
      "Rigorous quality assurance, code audits, and secure deployment pipelines.",
      "Active team mentorship led directly by the Founder & CEO.",
    ],
  },
  {
    subtitle: "Turnkey Implementation & Dedicated SLAs",
    icon: "check",
    points: [
      "Complete product lifecycle: requirements analysis, UI/UX, engineering, testing, and deployment.",
      "24/7 technical assistance, automated backups, and database health maintenance.",
      "Direct communication lines with senior engineering leads.",
    ],
  },
  {
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
    <section className="section relative bg-gradient-to-b from-[#e9eff4] via-[#f7f8f9] to-white" id="why" aria-labelledby="why-title">
      <div className="container">
        <Reveal className="section-head text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-[5px] font-head text-[11px] font-bold uppercase tracking-[0.12em] text-brand-royal">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_3px_rgba(240,124,0,0.25)]" />
            <span>THE SOULSOFT ADVANTAGE</span>
          </div>
          <h2 id="why-title">Six Pillars Driving Measurable Business Value</h2>
          <p className="lead mx-auto" style={{ maxWidth: "60ch" }}>
            Click any pillar to explore our technical competencies, operating standards, and client commitments.
          </p>
        </Reveal>

        <div className="grid-12">
          {why.map((w, i) => {
            const isExpanded = activeCard === i;
            const detail = whyDetails[i];

            return (
              <Reveal className="span-4" delay={(i % 3) * 0.08} key={w}>
                <article
                  className={`group relative cursor-pointer overflow-hidden rounded-[20px] border-[1.5px] bg-white p-[26px] transition duration-200 hover:-translate-y-1 ${isExpanded ? "border-accent shadow-[0_16px_40px_rgba(240,124,0,0.15)]" : "border-brand/15 shadow-[0_8px_24px_rgba(0,51,73,0.05)] hover:border-brand/40 hover:shadow-[0_16px_36px_rgba(0,114,167,0.12)]"}`}
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
                  <div className="mb-3.5 flex items-center gap-3.5">
                    <span className="font-head text-[26px] font-black leading-none text-brand/25" aria-hidden="true">{pad(i + 1)}</span>
                    <span className={`grid h-[42px] w-[42px] place-items-center rounded-xl transition-colors duration-200 group-hover:bg-accent group-hover:text-white [&_.icon]:h-5 [&_.icon]:w-5 ${isExpanded ? "bg-accent text-white" : "bg-brand/10 text-brand"}`}>
                      <Icon name={detail.icon} />
                    </span>
                    <span className={`ml-auto inline-flex items-center gap-[5px] rounded-full px-2.5 py-[3px] text-[11px] font-bold uppercase tracking-[0.06em] group-hover:bg-brand group-hover:text-white [&_.icon]:h-3 [&_.icon]:w-3 [&_.icon]:transition-transform ${isExpanded ? "bg-brand text-white" : "bg-brand/10 text-brand"}`}>
                      <span>{isExpanded ? "Collapse" : "Open"}</span>
                      <Icon name="arrow" className={isExpanded ? "-rotate-90" : ""} />
                    </span>
                  </div>

                  <h3 className="mb-1.5 font-head text-lg font-bold leading-[1.35] text-[#002738]">{w}</h3>
                  <p className="m-0 text-[13px] font-semibold text-accent-ink">{detail.subtitle}</p>

                  <AnimatePresence>
                    {isExpanded && (
                      <M.div
                        className="overflow-hidden"
                        initial={reduce ? false : { opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="mb-3.5 mt-4 h-px bg-brand/15" />
                        <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                          {detail.points.map((pt, ptIdx) => (
                            <li key={ptIdx} className="flex items-start gap-2.5 text-[13px] leading-[1.55] text-slate-700">
                              <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand" />
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
