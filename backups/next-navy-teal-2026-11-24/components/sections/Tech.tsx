import { tech } from "@/data/tech";

export default function Tech() {
  return (
    <div className="block" id="technology">
      <div className="block-title reveal">
        <span className="eyebrow">Technology expertise</span>
        <h2>The stack behind the solutions</h2>
      </div>
      <div className="tag-rows reveal">
        {tech.map((g) => (
          <div className="tag-row" key={g.group}>
            <h3>{g.group}</h3>
            <ul className="tags">
              {g.items.map((label) => <li className="tag" key={label}>{label}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
