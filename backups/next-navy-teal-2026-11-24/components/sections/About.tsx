import Icon from "@/components/Icon";
import { delay } from "@/components/util";

const responsibilities = [
  "Defining company vision and growth strategies",
  "Leading software product innovation",
  "Building technology and business teams",
  "Developing strategic partnerships",
  "Expanding product reach across industries",
  "Driving customer-focused software solutions",
];

const glance = [
  { k: "Role", v: "Founder & CEO" },
  { k: "Company", v: "Soulsoft Infotech Private Limited" },
  { k: "Founded", v: "2012" },
  { k: "Experience", v: "15+ years in IT" },
  { k: "Headquarters", v: "Sangamner, Maharashtra" },
  { k: "Presence", v: "Sangamner, Pune, Nashik" },
  { k: "Focus", v: "Software development, business automation, product innovation" },
];

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container grid">
        <div className="span-7 reveal">
          <span className="eyebrow">About</span>
          <h2 id="about-title">A technology entrepreneur who simplifies how businesses run</h2>
          <div className="about-copy">
            <p>
              Prasad Godage is a technology entrepreneur and the Founder &amp; CEO of Soulsoft Infotech Private Limited, a
              software development and IT solutions company established in 2012.
            </p>
            <p>
              With over 15 years of experience in the IT industry, he specializes in developing scalable software products,
              business automation solutions, and technology-driven business models.
            </p>
          </div>
          <figure className="pull-quote">
            <blockquote>
              <p>His vision is to simplify complex business operations through affordable, reliable, and innovative technology.</p>
            </blockquote>
            <footer>Vision</footer>
          </figure>
        </div>

        <div className="span-5 reveal" style={delay(100)}>
          <div className="card resp-card">
            <h3>Key responsibilities</h3>
            <ul className="check-list">
              {responsibilities.map((r) => (
                <li key={r}><Icon name="check" /><span>{r}</span></li>
              ))}
            </ul>
          </div>

          <dl className="card glance">
            <h3>At a glance</h3>
            {glance.map((g) => (
              <div key={g.k}>
                <dt>{g.k}</dt>
                <dd>{g.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
