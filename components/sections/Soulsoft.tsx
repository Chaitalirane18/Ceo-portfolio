import Image from "next/image";
import Icon from "@/components/Icon";
import Reveal from "@/components/ui/Reveal";

const details = [
  { k: "Established", v: "2012" },
  { k: "Industry Experience", v: "14+ Years" },
  { k: "Headquarters", v: "Sangamner, Maharashtra" },
  { k: "Business Presence", v: "Sangamner, Pune, Nashik" },
  { k: "Leadership", v: "Prasad Godage – Founder & CEO" },
];

export default function Soulsoft() {
  return (
    <section className="section section--navy section--glow" id="soulsoft" aria-labelledby="soulsoft-title">
      <div className="container grid-12 soulsoft-grid">
        <Reveal className="span-7" x={-24} y={0}>
          <span className="eyebrow">Company profile · Soulsoft Infotech Private Limited</span>
          <h2 id="soulsoft-title">Turning Business Challenges Into Intelligent Technology Solutions.</h2>
          <div className="soulsoft-copy">
            <p className="soulsoft-motto">Transforming Ideas Into Intelligent Solutions. We Build. We Integrate. We Automate. We Modernize.</p>
            <p>
              We specialize in developing innovative software products, customized ERP systems, SaaS applications, and
              business automation solutions.
            </p>
            <p>Our technology solutions help businesses simplify operations, improve efficiency, and achieve sustainable growth.</p>
          </div>
          <a className="btn btn--accent" href="https://soulsoft.in" target="_blank" rel="noopener noreferrer">
            Explore Soulsoft <Icon name="out" />
            <span className="visually-hidden"> (opens soulsoft.in in a new tab)</span>
          </a>
        </Reveal>

        <Reveal className="span-5" x={24} y={0} delay={0.1}>
          <div className="card company-card">
            <div className="company-logo">
              <Image src="/images/soulsoft-logo-full.png" width={640} height={300} sizes="260px" alt="Soulsoft Infotech – Customised Software Solutions" />
            </div>
            <dl>
              {details.map((d) => (
                <div key={d.k}>
                  <dt>{d.k}</dt>
                  <dd>{d.v}</dd>
                </div>
              ))}
              <div>
                <dt>Website</dt>
                <dd><a href="https://soulsoft.in" target="_blank" rel="noopener noreferrer">soulsoft.in</a></dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
