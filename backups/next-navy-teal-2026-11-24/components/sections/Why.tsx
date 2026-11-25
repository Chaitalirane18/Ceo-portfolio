import Icon from "@/components/Icon";
import { delay } from "@/components/util";
import { why } from "@/data/why";

export default function Why() {
  return (
    <div className="block" id="why">
      <div className="block-title reveal">
        <span className="eyebrow">Why Soulsoft</span>
        <h2>Six reasons businesses build with us</h2>
      </div>
      <div className="grid">
        {why.map((w, i) => (
          <div className="span-4 card why-item reveal" style={delay((i % 3) * 60)} key={w}>
            <span className="why-tick"><Icon name="check" /></span>
            <p>{w}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
