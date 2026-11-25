import { delay } from "@/components/util";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="section section--navy" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Project-based services</span>
          <h2 id="services-title">Software, integration and automation, end to end</h2>
        </div>
        <div className="grid">
          {services.map((s, i) => (
            <div className="span-3 service-col reveal" style={delay(i * 60)} key={s.title}>
              <h3>{s.title.replace("Technology Solutions", "Technology")}</h3>
              <ul>
                {s.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
