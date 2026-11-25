import { delay } from "@/components/util";

// The brief gives only 2012 and "today"; the middle step is deliberately undated.
const steps = [
  { when: "2012", title: "Soulsoft Infotech is founded", text: "Prasad Godage founds Soulsoft as a software solutions business in Sangamner, Maharashtra, and takes the role of Founder & CEO." },
  { when: "Growth", title: "A multi-product IT company", text: "Soulsoft grows into a multi-product IT company serving agriculture, retail, manufacturing, trading and other business sectors." },
  { when: "Today", title: "12 products, 9 industries, 3 cities", text: "Soulsoft builds ERP systems, SaaS applications and automation for businesses from its offices in Sangamner, Pune and Nashik." },
];

export default function Journey() {
  return (
    <section className="section section--grey" id="journey" aria-labelledby="journey-title">
      <div className="container grid journey-grid">
        <div className="span-5 reveal">
          <span className="eyebrow">Journey</span>
          <h2 id="journey-title">Building technology. Creating opportunities.</h2>
          <p className="lead">From a software solutions business in 2012 to a multi-product IT company.</p>
        </div>
        <div className="span-7">
          <ol className="timeline">
            {steps.map((s, i) => (
              <li className="timeline-item reveal" style={delay(i * 80)} key={s.when}>
                <p className="timeline-when">{s.when}</p>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
