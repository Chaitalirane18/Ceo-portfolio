import CountUp from "@/components/ui/CountUp";
import Reveal from "@/components/ui/Reveal";

const stats = [
  { to: 15, plus: true, label: "Years of IT Experience" },
  { text: "2012", label: "Entrepreneurial Journey Started" },
  { to: 12, label: "Software Products and Solutions" },
  { text: "Multiple", label: "Industry Segments Served" },
];

/** Soft light-blue statistics band (no card chrome); numbers count up once when it scrolls into view. */
export default function StatCards() {
  return (
    <Reveal className="stats-row" y={32}>
      <div role="group" aria-label="Key numbers" className="stats-row-inner">
        {stats.map((s) => (
          <div className="stats-cell" key={s.label}>
            <div className="stats-num">
              {s.to !== undefined ? <CountUp to={s.to} /> : s.text}
              {s.plus ? <span className="stats-plus">+</span> : null}
            </div>
            <p className="stats-cap">{s.label}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
