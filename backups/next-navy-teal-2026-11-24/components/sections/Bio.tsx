"use client";

import { useRef, useState } from "react";
import Icon from "@/components/Icon";
import { delay } from "@/components/util";

// Every sentence below is taken from the supplied profile text; nothing is added.
const bios = [
  {
    id: "short",
    label: "Short bio",
    use: "Introductions and partner pages",
    text: "Prasad Godage is a technology entrepreneur and the Founder & CEO of Soulsoft Infotech Private Limited, a software development and IT solutions company established in 2012 and based in Sangamner, Maharashtra. With over 15 years in the IT industry, he specializes in scalable software products, business automation solutions, and technology-driven business models.",
  },
  {
    id: "full",
    label: "Full bio",
    use: "Media, conferences and company profiles",
    text: "Prasad Godage is a technology entrepreneur and the Founder & CEO of Soulsoft Infotech Private Limited, a software development and IT solutions company established in 2012. With over 15 years of experience in the IT industry, he specializes in developing scalable software products, business automation solutions, and technology-driven business models. He founded Soulsoft as a software solutions business and developed it into a multi-product IT company serving agriculture, retail, manufacturing, trading, and other business sectors. His vision is to simplify complex business operations through affordable, reliable, and innovative technology.",
  },

  {
    id: "oneline",
    label: "One line",
    use: "Social profiles and event listings",
    text: "Prasad Shivaji Godage, Founder & CEO of Soulsoft Infotech | Software Entrepreneur | Technology & Business Strategist",
  },
];

const words = (t: string) => t.trim().split(/\s+/).length;

/** Copy-ready bios in three lengths, the way executive sites serve media and event hosts. */
export default function Bio() {
  const [copied, setCopied] = useState("");
  const timer = useRef<number>(0);

  const legacyCopy = (text: string) => {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    ta.remove();
    return ok;
  };

  const copy = (id: string, text: string) => {
    const done = () => {
      setCopied(id);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(""), 2200);
    };
    // Never wait on the async clipboard API indefinitely (a permission prompt can leave it pending):
    // race it against a short timeout, then fall back to the legacy copy.
    const viaApi = navigator.clipboard?.writeText
      ? Promise.race([
          navigator.clipboard.writeText(text),
          new Promise<never>((_, rej) => window.setTimeout(() => rej(new Error("clipboard timeout")), 1000)),
        ])
      : Promise.reject(new Error("no clipboard api"));
    viaApi.then(done, () => {
      if (legacyCopy(text)) done();
      else {
        setCopied("failed:" + id);
        window.clearTimeout(timer.current);
        timer.current = window.setTimeout(() => setCopied(""), 3500);
      }
    });
  };

  return (
    <section className="section" id="bio" aria-labelledby="bio-title">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Bio &amp; media</span>
          <h2 id="bio-title">Introducing Prasad, in the length you need</h2>
          <p className="lead">Copy-ready bios for events, partner pages, press and company profiles.</p>
        </div>

        <div className="grid">
          {bios.map((b, i) => (
            <article className={`${b.id === "oneline" ? "span-12" : "span-6"} card bio-card reveal`} style={delay(i * 80)} key={b.id}>
              <header className="bio-head">
                <h3>{b.label}</h3>
                <span className="bio-meta">{words(b.text)} words</span>
              </header>
              <p className="bio-use">{b.use}</p>
              <p className="bio-text">{b.text}</p>
              <button className="btn btn--outline btn--sm bio-copy" type="button" onClick={() => copy(b.id, b.text)}>
                <Icon name={copied === b.id ? "check" : "files"} />
                {copied === b.id ? "Copied" : copied === "failed:" + b.id ? "Select the text to copy" : "Copy"}
                <span className="visually-hidden"> {b.label.toLowerCase()} to clipboard</span>
              </button>
            </article>
          ))}
        </div>
        <p className="visually-hidden" role="status" aria-live="polite">{copied.startsWith("failed:") ? "Copy failed. Select the text and copy it manually." : copied ? "Bio copied to clipboard" : ""}</p>
      </div>
    </section>
  );
}
