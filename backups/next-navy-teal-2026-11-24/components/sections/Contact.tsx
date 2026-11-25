"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Icon from "@/components/Icon";
import { EVT_ENQUIRE, phones, WHATSAPP_PRASAD } from "@/data/site";

const TOPICS = ["Enterprise / ERP software", "Product demo", "Business automation", "Custom software or app development", "Partnership / consulting", "Other"];

export default function Contact() {
  const [topic, setTopic] = useState(TOPICS[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const form = useRef<HTMLFormElement>(null);

  // "Request a demo" on a product card pre-fills this form
  useEffect(() => {
    const onEnquire = (e: Event) => {
      const name = String((e as CustomEvent<string>).detail ?? "");
      setTopic("Product demo");
      setMessage(`Hello, I would like to request a demo of ${name}.`);
      setTimeout(() => form.current?.querySelector<HTMLInputElement>("#f-name")?.focus({ preventScroll: true }), 700);
    };
    window.addEventListener(EVT_ENQUIRE, onEnquire);
    return () => window.removeEventListener(EVT_ENQUIRE, onEnquire);
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const msg = message.trim();
    if (!name || !msg) {
      setStatus("Please enter your name and a message.");
      form.current?.querySelector<HTMLElement>(name ? "#f-msg" : "#f-name")?.focus();
      return;
    }
    const text = `Hello Prasad, I am ${name}${phone ? ` (${phone})` : ""}.\nInterested in: ${topic}\n\n${msg}`;
    window.open(`https://wa.me/${WHATSAPP_PRASAD}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setStatus("Opening WhatsApp. Press send there to deliver your message.");
  };

  return (
    <section className="section section--grey" id="contact" aria-labelledby="contact-title">
      <div className="container grid">
        <div className="span-6 reveal">
          <span className="eyebrow">Contact</span>
          <h2 id="contact-title">Let’s build something better together</h2>
          <p className="lead">Your business. Your requirements. Our technology. Call the right person directly, or send a message.</p>

          <ul className="contact-list">
            {phones.map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel}`}>
                  <span className="who"><Icon name="phone" /><span><strong>{p.label}</strong><small>{p.note}</small></span></span>
                  <b>{p.display}</b>
                </a>
              </li>
            ))}
          </ul>

          <ul className="contact-meta">
            <li>
              <Icon name="pin" />
              <span>Soulsoft Infotech Private Limited<br />Sangamner, Maharashtra, India</span>
            </li>
            <li>
              <Icon name="out" />
              <span>
                <a href="https://soulsoft.in" target="_blank" rel="noopener noreferrer">soulsoft.in</a> &nbsp;·&nbsp;{" "}
                <a href="https://prasadgodage.com" target="_blank" rel="noopener noreferrer">prasadgodage.com</a>
              </span>
            </li>
          </ul>
        </div>

        <div className="span-6 reveal" style={{ "--delay": "100ms" } as React.CSSProperties}>
          <form className="card form-card" ref={form} onSubmit={onSubmit} noValidate>
            <h3>Send a message</h3>
            <p>Submitting opens WhatsApp with your message ready to send.</p>
            <div className="form-grid">
              <div className="field"><label htmlFor="f-name">Your name</label><input id="f-name" name="name" type="text" autoComplete="name" required /></div>
              <div className="field"><label htmlFor="f-phone">Phone (optional)</label><input id="f-phone" name="phone" type="tel" autoComplete="tel" /></div>
              <div className="field">
                <label htmlFor="f-topic">I’m interested in</label>
                <select id="f-topic" value={topic} onChange={(e) => setTopic(e.target.value)}>
                  {TOPICS.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="field">
                <label htmlFor="f-msg">Message</label>
                <textarea id="f-msg" rows={5} required value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>
              <button className="btn btn--primary btn--block" type="submit">Send via WhatsApp <Icon name="arrow" /></button>
              <p className="form-status" role="status" aria-live="polite">{status}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
