import Icon from "@/components/Icon";
import { delay } from "@/components/util";
import { industries } from "@/data/industries";

export default function Industries() {
  return (
    <div className="block">
      <div className="block-title reveal">
        <span className="eyebrow">Industries we serve</span>
        <h2 id="industries-title">Technology for nine kinds of business</h2>
      </div>
      <div className="grid">
        {industries.map((x, i) => (
          <div className="span-4 card industry reveal" style={delay((i % 3) * 60)} key={x.name}>
            <span className="icon-box"><Icon name={x.icon} /></span>
            <span>{x.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
