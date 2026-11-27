import Icon from "@/components/Icon";
import Reveal from "@/components/ui/Reveal";
import { pad } from "@/components/util";
import { why } from "@/data/why";

/** One short description per pillar, in the same order as data/why.ts. */
const whyDetails: { subtitle: string; icon: string; text: string }[] = [
  {
    subtitle: "Established in 2012 by Prasad Godage",
    icon: "award",
    text: "A decade-plus of delivering software across 9+ sectors, with deep knowledge of Indian GST and compliance.",
  },
  {
    subtitle: "12 Purpose-Built Operational Solutions",
    icon: "layers",
    text: "Domain logic built for Krushi Kendras, retail, manufacturing, pharma and governance, not generic templates.",
  },
  {
    subtitle: "Tailored to Your Operating Model",
    icon: "gear",
    text: "Modular systems that grow from a single store to multi-branch networks, with custom workflows and reports.",
  },
  {
    subtitle: "In-House Engineering Excellence",
    icon: "users",
    text: "In-house engineers in Node.js, .NET Core, React, Flutter, SQL and Azure, mentored directly by the Founder.",
  },
  {
    subtitle: "Turnkey Implementation & Dedicated SLAs",
    icon: "check",
    text: "Full lifecycle from requirements to deployment, with 24/7 support, backups and direct access to senior leads.",
  },
  {
    subtitle: "Maximizing Client ROI & Operational Speed",
    icon: "rocket",
    text: "Automation and dashboards that remove manual work, with continuous updates for market and regulatory change.",
  },
];

export default function Why() {
  return (
    <section className="section relative bg-gradient-to-b from-[#e9eff4] via-[#f6fafd] to-white" id="why" aria-labelledby="why-title">
      <div className="container">
        <Reveal className="section-head text-center mx-auto" >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-[5px] font-head text-[11px] font-bold uppercase tracking-[0.12em] text-brand-royal">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_3px_rgba(240,124,0,0.25)]" />
            <span>THE SOULSOFT ADVANTAGE</span>
          </div>
          <h2 id="why-title" style={{ textWrap: "balance" }}>Six Pillars Driving Measurable Business Value</h2>
          <p className="lead mx-auto" style={{ maxWidth: "60ch" }}>
            Six reasons businesses choose Soulsoft.
          </p>
        </Reveal>

        <div className="grid grid-cols-6 gap-3.5 max-xl:grid-cols-3 max-sm:grid-cols-2">
          {why.map((w, i) => {
            const detail = whyDetails[i];
            return (
              <Reveal className="h-full" delay={i * 0.05} key={w}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#d5e0e8] bg-white px-4 pb-4 pt-5 shadow-[0_8px_24px_rgba(0,51,73,0.06)] transition duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_20px_44px_rgba(9,34,47,0.14)]">
                  <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-[0.35] bg-gradient-to-r from-[#0072a7] to-accent transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                  <span className="pointer-events-none absolute -right-1 top-1 select-none font-head text-[64px] font-black leading-none tracking-[-0.06em] text-[#0072a7]/[0.07]" aria-hidden="true">{pad(i + 1)}</span>

                  <span className="relative mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#09222f] to-[#0e384e] text-white shadow-[0_8px_18px_rgba(9,34,47,0.22)] transition duration-300 group-hover:from-accent group-hover:to-[#ff9826] [&_.icon]:h-6 [&_.icon]:w-6">
                    <Icon name={detail.icon} />
                  </span>

                  <h3 className="relative mb-2 font-head text-[15px] font-extrabold leading-[1.3] tracking-[-0.01em] text-[#09222f]">{w}</h3>
                  <p className="m-0 mb-4 text-[13px] leading-[1.6] text-[#4a5a68]">{detail.text}</p>

                  <p className="m-0 mt-auto flex items-start gap-1.5 rounded-lg bg-[#fff6ea] px-2.5 py-2 text-[11.5px] font-semibold leading-snug text-accent-ink">
                    <span className="mt-[5px] h-1.5 w-1.5 flex-none rounded-full bg-accent" aria-hidden="true" />
                    {detail.subtitle}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
