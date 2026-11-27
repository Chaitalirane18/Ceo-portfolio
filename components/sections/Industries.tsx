import Icon from "@/components/Icon";
import Reveal from "@/components/ui/Reveal";
import { industries } from "@/data/industries";

/** Short blurb and the platforms Soulsoft has deployed for each sector (shown on the card, no click needed). */
const industryDetails: Record<string, { desc: string; solutions: string[] }> = {
  "Agriculture & Agribusiness": {
    desc: "Digital systems for Krushi Seva Kendras, fertilizer dealers, seed distributors and agri wholesale markets.",
    solutions: ["SoulAgroNexus ERP", "Shetkari Krushi Software", "GST & Pesticide Stock Reports"],
  },
  "Manufacturing & Distribution": {
    desc: "Production workflows, raw-material batching, packaging, finished stock and multi-depot distribution.",
    solutions: ["SoulForge ERP", "Batch Traceability", "Multi-warehouse Logistics"],
  },
  "Retail & Wholesale": {
    desc: "Fast point-of-sale, barcode billing, synced inventory and automated multi-tier vendor billing.",
    solutions: ["ShopCare POS", "SoulConnect ERP", "Margin Analytics"],
  },
  "Pharmaceuticals & Healthcare": {
    desc: "Batch and expiry control, drug composition lookup, HSN/GST compliance and chemist retail automation.",
    solutions: ["Pharma Chemist Vision Plus", "Batch & Expiry Controls", "Patient Follow-ups"],
  },
  "Education & Training": {
    desc: "Learning management, course authoring, student assessment tracking and certificate issuance.",
    solutions: ["LMSElite Platform", "Live Class Schedules", "Fee & Attendance Portals"],
  },
  "E-Commerce": {
    desc: "Scalable storefronts, order management, live inventory feeds and payment gateway integration.",
    solutions: ["B2B / B2C Stores", "Payment Gateway APIs", "Courier Integrations"],
  },
  "Professional Services": {
    desc: "Client pipeline automation, retainer invoicing, task tracking and digital document workflows.",
    solutions: ["Book My CRM", "CompliDocX", "Timesheet & Billing"],
  },
  "Political & Constituency Administration": {
    desc: "Grievance logging, ward-wise voter segmentation, mass communication and project audits.",
    solutions: ["MLA Management Software", "Citizen Grievance Portal", "SMS & WhatsApp Campaigns"],
  },
  "Small & Medium Enterprises (MSMEs)": {
    desc: "Affordable cloud tools that automate repetitive operations and support sustainable growth.",
    solutions: ["SoulConnect ERP", "Automated Bookkeeping", "GST Reconciliation"],
  },
};

export default function Industries() {
  return (
    <section
      className="relative border-t border-[#d9e3ea] bg-gradient-to-b from-white to-[#f4f7f9] py-[clamp(40px,6vh,64px)]"
      id="industries"
      aria-labelledby="industries-title"
    >
      <div className="container">
        <Reveal className="mx-auto mb-7 max-w-[820px] text-center" y={14}>
          <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-[#0072a7]/20 bg-[#0072a7]/[0.07] px-3.5 py-1 font-head text-[11px] font-bold uppercase tracking-[0.14em] text-[#005f8a]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            <span>Vertical expertise · 9 key domains</span>
          </div>
          <h2 id="industries-title" className="m-0 font-head text-[clamp(26px,3.2vw,38px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#09222f] [text-wrap:balance]">
            Technology tailored for{" "}
            <span className="bg-gradient-to-r from-[#0072a7] to-accent bg-clip-text text-transparent">9 major business sectors</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-3 gap-3.5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {industries.map((x, i) => {
            const d = industryDetails[x.name];
            return (
              <Reveal className="h-full" delay={(i % 3) * 0.06} key={x.name}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#d5e0e8] bg-white p-4 shadow-[0_6px_20px_rgba(0,51,73,0.05)] transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_16px_36px_rgba(9,34,47,0.12)]">
                  <span className="absolute inset-y-0 left-0 w-1 origin-top scale-y-[0.3] bg-gradient-to-b from-[#0072a7] to-accent transition-transform duration-500 group-hover:scale-y-100" aria-hidden="true" />

                  <div className="mb-2 flex items-center gap-3">
                    <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-gradient-to-br from-[#09222f] to-[#0e384e] text-white shadow-[0_6px_14px_rgba(9,34,47,0.2)] transition duration-300 group-hover:from-accent group-hover:to-[#ff9826] [&_.icon]:h-5 [&_.icon]:w-5">
                      <Icon name={x.icon} />
                    </span>
                    <h3 className="m-0 font-head text-[15.5px] font-extrabold leading-tight tracking-[-0.01em] text-[#09222f]">{x.name}</h3>
                  </div>

                  <p className="m-0 mb-3 text-[13px] leading-[1.55] text-[#4a5a68]">{d.desc}</p>

                  <ul className="m-0 mt-auto flex list-none flex-wrap gap-1.5 p-0">
                    {d.solutions.map((s) => (
                      <li key={s} className="rounded-md border border-[#0072a7]/[0.14] bg-[#0072a7]/[0.07] px-2 py-1 text-[11px] font-semibold leading-none text-[#0072a7]">
                        {s}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
