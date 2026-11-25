import Icon from "@/components/Icon";
import { delay } from "@/components/util";
import { expertise } from "@/data/expertise";

export default function Expertise() {
  return (
    <section className="section section--grey" id="expertise" aria-labelledby="expertise-title">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Core expertise</span>
          <h2 id="expertise-title">Where strategy meets software</h2>
        </div>
        <div className="grid">
          {expertise.map((e, i) => (
            <article className="span-3 card expertise-card reveal" style={delay((i % 4) * 60)} key={e.title}>
              <span className="icon-box"><Icon name={e.icon} /></span>
              <h3>{e.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
