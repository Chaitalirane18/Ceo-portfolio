"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { to: 15, plus: true, label: "Years in software" },
  { to: 12, label: "Products" },
  { to: 9, label: "Industries" },
  { to: 3, label: "Cities" },
];

/** Navy stats strip. Numbers count up once when the strip scrolls into view (final values are in the server HTML). */
export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [values, setValues] = useState(stats.map((s) => s.to));

  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const step = (now: number) => {
          const p = Math.min((now - t0) / 1400, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setValues(stats.map((s) => Math.round(s.to * eased)));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section className="section--navy stats" id="stats" aria-label="Key numbers" ref={ref}>
      <div className="container grid">
        {stats.map((s, i) => (
          <div className="span-3 stat" key={s.label}>
            <div className="stat-value">
              <span>{values[i]}</span>
              {s.plus && <span className="suffix">+</span>}
            </div>
            <p className="stat-label">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
