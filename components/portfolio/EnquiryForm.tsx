"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { WHATSAPP } from "@/data/portfolio";

const TOPICS = [
  "Enterprise ERP & SaaS Solutions",
  "Product Demo / Evaluation",
  "Business Process Automation",
  "Custom Software & Web Application",
  "Mobile App Development",
  "Strategic Partnership & Consulting",
  "Careers at Soulsoft",
  "Job Expo / Business Expo",
  "Other",
];

/** Opens a WhatsApp chat with the details filled in. Nothing is stored on a server. */
export default function EnquiryForm() {
  const [topic, setTopic] = useState(TOPICS[0]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const form = useRef<HTMLFormElement>(null);

  // A "Request a demo" link sends ?topic=...&product=... so the form opens pre-filled.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const t = q.get("topic"), product = q.get("product");
    if (t && TOPICS.includes(t)) setTopic(t);
    if (product) setMessage(`Hello Prasad, I would like to request a demo of ${product}.`);
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const n = name.trim(), m = message.trim();
    if (!n || !m) {
      setStatus("Please enter your name and a short message.");
      form.current?.querySelector<HTMLElement>(!n ? "#f-name" : "#f-msg")?.focus();
      return;
    }
    const text = `Hello Prasad,\nI am ${n}${phone ? ` (${phone})` : ""}.\nInterest: ${topic}\n\n${m}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setStatus("Opening WhatsApp. Press send there to reach me directly.");
  };

  return (
    <form className="enq" ref={form} onSubmit={onSubmit} noValidate>
      <h3>Start a conversation</h3>
      <p className="enq-sub">Your details open a WhatsApp chat with me.</p>
      <div className="enq-row">
        <label>Full name *<input id="f-name" name="name" type="text" autoComplete="name" placeholder="Rajesh Patil" value={name} onChange={(e) => setName(e.target.value)} required /></label>
        <label>Phone / WhatsApp<input id="f-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" value={phone} onChange={(e) => setPhone(e.target.value)} /></label>
      </div>
      <label>I&apos;m interested in
        <select value={topic} onChange={(e) => setTopic(e.target.value)}>{TOPICS.map((t) => <option key={t}>{t}</option>)}</select>
      </label>
      <label>Message *
        <textarea id="f-msg" rows={4} placeholder="Tell me briefly about your business and what you need." value={message} onChange={(e) => setMessage(e.target.value)} required />
      </label>
      {status && <p className="enq-status" role="status">{status}</p>}
      <button type="submit">Send on WhatsApp →</button>
    </form>
  );
}
