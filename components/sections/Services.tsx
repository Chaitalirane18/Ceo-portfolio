"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Icon from "@/components/Icon";
import { services, type ServiceCategory } from "@/data/services";

const M = motion as any;

const standards = [
  { icon: "rocket", text: "High-Concurrency Performance" },
  { icon: "shield", text: "Enterprise Security & Encryption" },
  { icon: "layers", text: "Modular, Cloud-Ready Architecture" },
  { icon: "users", text: "Dedicated Engineering Governance" },
];

export default function Services() {
  const reduce = useReducedMotion();
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const cur: ServiceCategory = services[activeTab];

  // Gentle auto-cycle through the 4 service categories when not hovering
  useEffect(() => {
    if (isPaused || reduce) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % services.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, reduce]);

  return (
    <div
      className="relative overflow-hidden pb-[clamp(56px,7vh,88px)] pt-[clamp(32px,5vh,52px)] text-[#0f1f2c] before:pointer-events-none before:absolute before:-top-[120px] before:left-[10%] before:h-[520px] before:w-[520px] before:rounded-full before:bg-[radial-gradient(circle,rgba(0,114,167,0.12),transparent_70%)] before:blur-[80px] before:content-[''] after:pointer-events-none after:absolute after:-bottom-[120px] after:right-[8%] after:h-[520px] after:w-[520px] after:rounded-full after:bg-[radial-gradient(circle,rgba(240,124,0,0.1),transparent_70%)] after:blur-[80px] after:content-['']"
      role="region"
      id="services-panel"
      aria-labelledby="services-title"
    >
      <div className="container">
        {/* Header */}
        <div className="relative z-[1] mx-auto mb-[clamp(36px,5vh,48px)] max-w-[880px] text-center">
          <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-[#0072a7]/[0.22] bg-[#0072a7]/[0.08] px-[18px] py-1.5 font-head text-xs font-bold uppercase tracking-[0.14em] text-[#0072a7]">
            <span className="h-[7px] w-[7px] rounded-full bg-accent shadow-[0_0_0_3px_rgba(240,124,0,0.25)]" aria-hidden="true" />
            <span>OUR PROJECT-BASED SERVICES · ENTERPRISE CAPABILITIES</span>
            <span className="h-[7px] w-[7px] rounded-full bg-[#0072a7]" aria-hidden="true" />
          </div>
          <h2 id="services-title" className="font-head text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#09222f] [text-wrap:balance]">
            End-to-End Software, Integration &amp;{" "}
            <span className="bg-gradient-to-br from-[#0072a7] via-[#2a8cbf] to-accent bg-clip-text text-transparent">Modernization Services.</span>
          </h2>
          <p className="mx-auto mt-3.5 max-w-[68ch] text-[clamp(15px,1.6vw,18px)] leading-[1.65] text-[#46586f]">
            From greenfield custom engineering and cloud migration to mission-critical ERP integrations and business process automation.
          </p>
        </div>

        {/* Tabs */}
        <div
          className="relative z-[1] mb-[clamp(28px,4vh,40px)] flex justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex max-w-full flex-wrap items-center justify-center gap-1.5 rounded-full border-[1.5px] border-[#0072a7]/[0.18] bg-white p-1.5 shadow-[0_8px_30px_rgba(11,44,62,0.08)] max-md:w-full max-md:rounded-2xl"
            role="tablist"
            aria-label="Service categories"
          >
            {services.map((s, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  id={`service-tab-${idx}`}
                  aria-selected={isActive}
                  aria-controls={`service-panel-${idx}`}
                  className={`relative inline-flex cursor-pointer items-center gap-2.5 whitespace-nowrap rounded-full border-none bg-transparent px-6 py-3 font-head text-sm font-bold transition-colors duration-200 max-md:flex-[1_1_calc(50%-6px)] max-md:justify-center max-md:px-3.5 max-md:py-2.5 max-md:text-[13px] max-[560px]:flex-[1_1_100%] max-[560px]:justify-start ${
                    isActive ? "text-white" : "text-[#46586f] hover:text-[#09222f]"
                  }`}
                  onClick={() => setActiveTab(idx)}
                >
                  {isActive && (
                    <M.span
                      layoutId="activeServiceTabPill"
                      className="absolute inset-0 z-0 rounded-full bg-gradient-to-br from-[#09222f] to-[#0e384e] shadow-[0_4px_16px_rgba(9,34,47,0.25)]"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className={`relative z-[1] rounded px-[7px] py-0.5 text-[11px] font-extrabold transition-colors ${isActive ? "bg-accent text-white" : "bg-[#0072a7]/[0.12] text-[#0072a7]"}`}>
                    {s.num}
                  </span>
                  <span className="relative z-[1] tracking-[0.02em]">{s.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Stage */}
        <div
          className="relative z-[1]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <M.div
              key={cur.id}
              className="grid gap-[clamp(32px,4vw,56px)] rounded-[28px] border-[1.5px] border-[#0072a7]/[0.16] bg-white p-[clamp(36px,4.5vw,52px)] shadow-[0_20px_50px_rgba(11,44,62,0.08),0_1px_3px_rgba(0,0,0,0.04)] [grid-template-columns:minmax(0,1.15fr)_minmax(0,1fr)] max-lg:grid-cols-1 max-lg:gap-9 max-lg:px-6 max-lg:py-8"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              role="tabpanel"
              id={`service-panel-${activeTab}`}
              aria-labelledby={`service-tab-${activeTab}`}
            >
              {/* Left */}
              <div className="flex flex-col justify-between">
                <div className="mb-5 flex items-center gap-[18px]">
                  <div className="relative grid h-16 w-16 flex-none place-items-center rounded-[18px] border-[1.5px] border-accent/35 bg-gradient-to-br from-[#0072a7]/[0.12] to-accent/[0.12] text-accent shadow-[0_6px_18px_rgba(240,124,0,0.12)] [&_.icon]:h-8 [&_.icon]:w-8">
                    <Icon name={cur.icon} />
                    <span className="pointer-events-none absolute -right-8 -top-3 font-head text-4xl font-black text-[#09222f]/[0.06]">{cur.num}</span>
                  </div>
                  <div>
                    <span className="mb-1 block font-head text-xs font-bold uppercase tracking-[0.12em] text-accent-ink">{cur.tagline}</span>
                    <h3 className="m-0 font-head text-[clamp(24px,2.5vw,32px)] font-extrabold tracking-[-0.015em] text-[#09222f]">{cur.title}</h3>
                  </div>
                </div>

                <p className="mb-7 text-base leading-[1.7] text-[#46586f]">{cur.lead}</p>

                <div className="mb-7 rounded-2xl border border-[#0072a7]/[0.12] bg-[#f8fbfd] px-[22px] py-[18px]">
                  <span className="mb-3 block font-head text-[11px] font-bold uppercase tracking-[0.1em] text-[#0072a7]">Delivery Standards</span>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 max-md:grid-cols-1">
                    {standards.map((std) => (
                      <div key={std.text} className="flex items-center gap-2 text-[13px] font-semibold text-[#1c2b38] [&_.icon]:h-[15px] [&_.icon]:w-[15px] [&_.icon]:flex-none [&_.icon]:text-accent">
                        <Icon name={std.icon} />
                        <span>{std.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-1">
                  <a
                    className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-br from-accent to-[#ff9826] px-[26px] py-[13px] font-head text-sm font-bold text-white shadow-[0_4px_16px_rgba(240,124,0,0.3)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(240,124,0,0.45)]"
                    href="#contact"
                  >
                    <span>Discuss {cur.title}</span>
                    <Icon name="arrow" className="!h-4 !w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col">
                <div className="mb-3.5 flex justify-between border-b-[1.5px] border-[#0072a7]/[0.16] pb-3 font-head text-[11px] font-bold uppercase tracking-[0.1em] text-[#6b7c8c]">
                  <span>KEY CAPABILITIES &amp; DELIVERABLES</span>
                  <span>5 SPECIALIZATIONS</span>
                </div>

                <div className="flex flex-col gap-3">
                  {cur.capabilities.map((cap, i) => (
                    <M.div
                      key={cap.name}
                      className="group grid items-center gap-4 rounded-[14px] border border-[#0072a7]/[0.12] bg-[#f8fbfd] px-5 py-4 [grid-template-columns:36px_minmax(0,1fr)_28px] transition duration-200 hover:translate-x-1.5 hover:border-[#0072a7]/35 hover:bg-white hover:shadow-[0_8px_24px_rgba(0,114,167,0.12)] max-[560px]:px-3.5 max-[560px]:py-3"
                      initial={reduce ? false : { opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: i * 0.06 }}
                    >
                      <div className="grid h-[34px] w-[34px] place-items-center rounded-lg bg-[#0072a7]/10 font-head text-[13px] font-extrabold text-[#0072a7] transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
                        <span>0{i + 1}</span>
                      </div>

                      <div className="flex flex-col gap-1">
                        <strong className="font-head text-[15px] font-bold leading-[1.35] text-[#0f1f2c]">{cap.name}</strong>
                        <span className="inline-block self-start rounded border border-[#0072a7]/[0.18] bg-[#0072a7]/[0.08] px-2 py-0.5 text-[11px] font-semibold text-[#0072a7]">{cap.tag}</span>
                      </div>

                      <div className="text-[#9aabb9] transition duration-200 group-hover:translate-x-1 group-hover:text-accent [&_.icon]:h-4 [&_.icon]:w-4">
                        <Icon name="arrow" />
                      </div>
                    </M.div>
                  ))}
                </div>
              </div>
            </M.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
