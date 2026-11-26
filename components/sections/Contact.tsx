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

const links = [
  { href: "https://soulsoft.in", lead: "Company", host: "soulsoft.in" },
  { href: "https://prasadgodage.com", lead: "Personal", host: "prasadgodage.com" },
];

const label = "mb-1 block font-head text-xs font-semibold text-[#334155]";
const control =
  "w-full rounded-lg border border-[#cfd8de] bg-white px-3 py-2 font-body text-sm text-[#1b2f40] transition placeholder:text-[#8a97a0] focus:border-[#0072a7] focus:shadow-[0_0_0_3px_rgba(0,114,167,0.15)] focus:outline-none";
const sectionLabel = "mb-2 block font-head text-[11px] font-bold uppercase tracking-[0.12em] text-[#64748b]";

/** Contact: one compact screen, directory on the left, WhatsApp enquiry form on the right. */
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
    <section
      className="relative flex min-h-[calc(100svh-72px)] items-center border-t border-[#d9e1e7] bg-gradient-to-b from-[#f4f7f9] to-white py-8 max-lg:py-12"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container">
        {/* Header */}
        <Reveal className="mx-auto mb-6 max-w-[760px] text-center" y={16}>
          <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-[#0072a7]/20 bg-[#0072a7]/[0.07] px-3.5 py-1 font-head text-[11px] font-bold uppercase tracking-[0.14em] text-[#005f8a]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            <span>Contact</span>
          </div>
          <h2 id="contact-title" className="font-head text-[clamp(26px,3.2vw,36px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#1f3a4d]">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-[#0072a7] to-accent bg-clip-text text-transparent">Better Together</span>
          </h2>
          <p className="mx-auto mt-2 max-w-[60ch] text-[15px] leading-relaxed text-[#46586f]">
            Enterprise software, business automation or a technology partner? Reach out directly.
          </p>
        </Reveal>

        <div className="grid items-stretch gap-6 [grid-template-columns:minmax(0,1fr)_minmax(0,1fr)] max-lg:grid-cols-1">
          {/* Directory */}
          <Reveal className="h-full" x={-20} y={0}>
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-[#d9e1e7] bg-white p-6 shadow-[0_10px_30px_rgba(31,58,77,0.07)]">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-[#1f3a4d] text-white [&_.icon]:h-5 [&_.icon]:w-5">
                  <Icon name="award" />
                </span>
                <div className="min-w-0">
                  <h3 className="m-0 font-head text-[15px] font-extrabold tracking-[0.03em] text-[#1f3a4d]">SOULSOFT INFOTECH PRIVATE LIMITED</h3>
                  <p className="m-0 mt-0.5 inline-flex items-center gap-1 text-xs text-[#46586f] [&_.icon]:h-3 [&_.icon]:w-3 [&_.icon]:text-[#0072a7]">
                    <Icon name="pin" />
                    Sangamner, Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-accent/30 bg-[#fff6ea] px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-accent font-head text-sm font-extrabold text-white">PG</span>
                  <div className="leading-tight">
                    <strong className="block font-head text-sm font-bold text-[#1f3a4d]">Prasad Shivaji Godage</strong>
                    <span className="text-xs text-[#8a4500]">Founder &amp; CEO</span>
                  </div>
                </div>
                <a
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-accent px-3.5 py-2 font-head text-xs font-bold text-white transition hover:bg-[#d96f00] [&_.icon]:h-3.5 [&_.icon]:w-3.5"
                  href={`tel:${phones[0].tel}`}
                >
                  <Icon name="phone" />
                  <span>Call {phones[0].display}</span>
                </a>
              </div>

              <div>
                <span className={sectionLabel}>Official Contact Numbers</span>
                <div className="grid grid-cols-2 gap-2 max-sm:grid-cols-1">
                  {phones.map((p) => (
                    <a
                      key={p.tel}
                      href={`tel:${p.tel}`}
                      className="group flex items-center gap-2.5 rounded-lg border border-[#e1e8ed] bg-[#f7f9fa] px-3 py-2 transition hover:border-[#0072a7]/40 hover:bg-white hover:shadow-[0_4px_14px_rgba(0,114,167,0.1)]"
                    >
                      <span className="grid h-7 w-7 flex-none place-items-center rounded-md bg-[#0072a7]/10 text-[#0072a7] transition group-hover:bg-[#0072a7] group-hover:text-white [&_.icon]:h-3.5 [&_.icon]:w-3.5">
                        <Icon name="phone" />
                      </span>
                      <span className="min-w-0 leading-tight">
                        <strong className="block truncate font-head text-xs font-bold text-[#1f3a4d]">{p.label}</strong>
                        <span className="text-xs font-semibold text-[#0072a7]">{p.display}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-auto border-t border-[#e1e8ed] pt-3">
                <span className={sectionLabel}>Verified Digital Presence</span>
                <div className="flex flex-wrap gap-2">
                  {links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[#e1e8ed] bg-[#f7f9fa] px-3 py-1.5 text-xs text-[#46586f] transition hover:border-[#0072a7]/40 hover:text-[#1f3a4d] [&_.icon]:h-3 [&_.icon]:w-3 [&_.icon]:text-[#0072a7]"
                    >
                      <Icon name="link" />
                      <span>
                        {l.lead}: <strong className="text-[#0072a7]">{l.host}</strong>
                      </span>
                      <Icon name="out" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal className="h-full" x={20} y={0} delay={0.1}>
            <form
              className="flex h-full flex-col gap-3 rounded-2xl border border-[#d9e1e7] bg-white p-6 shadow-[0_10px_30px_rgba(31,58,77,0.07)]"
              ref={form}
              onSubmit={onSubmit}
              noValidate
            >
              <div>
                <h3 className="m-0 font-head text-lg font-extrabold tracking-[-0.01em] text-[#1f3a4d]">Initiate a Project Discussion</h3>
                <p className="m-0 mt-1 text-[13px] leading-snug text-[#46586f]">Your details open a direct WhatsApp conversation with Mr. Prasad Godage.</p>
              </div>

              <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                <div>
                  <label htmlFor="f-name" className={label}>Full Name *</label>
                  <input id="f-name" name="name" type="text" autoComplete="name" placeholder="e.g. Rajesh Patil" value={name} onChange={(e) => setName(e.target.value)} required className={control} />
                </div>
                <div>
                  <label htmlFor="f-phone" className={label}>Phone / WhatsApp</label>
                  <input id="f-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" value={phone} onChange={(e) => setPhone(e.target.value)} className={control} />
                </div>
              </div>

              <div>
                <label htmlFor="f-topic" className={label}>Requirement / Topic</label>
                <select id="f-topic" value={topic} onChange={(e) => setTopic(e.target.value)} className={control}>
                  {TOPICS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-1 flex-col">
                <label htmlFor="f-msg" className={label}>Project Scope or Message *</label>
                <textarea
                  id="f-msg"
                  rows={3}
                  placeholder="Briefly describe your business and what you need..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className={`${control} min-h-[84px] flex-1 resize-none`}
                />
              </div>

              {status && (
                <div className="flex items-center gap-2 rounded-lg border border-green-600/30 bg-green-50 px-3 py-2 text-xs text-green-800 [&_.icon]:h-3.5 [&_.icon]:w-3.5 [&_.icon]:flex-none" role="alert">
                  <Icon name="check" />
                  <span>{status}</span>
                </div>
              )}

              <button
                type="submit"
                className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border-none bg-green-600 px-6 py-3 font-head text-sm font-bold text-white shadow-[0_6px_16px_rgba(22,163,74,0.25)] transition hover:-translate-y-0.5 hover:bg-green-700"
              >
                <span>Send Message via WhatsApp</span>
                <Icon name="arrow" className="!h-4 !w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <p className="m-0 text-center text-[11px] text-[#64748b]">Confidential business discussions with the Founder &amp; CEO.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
