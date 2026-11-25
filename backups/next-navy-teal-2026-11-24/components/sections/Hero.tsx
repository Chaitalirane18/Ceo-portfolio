import Icon from "@/components/Icon";
import Portrait from "./Portrait";

// Sectors named in the company profile.
const sectors = ["Agriculture", "Retail & Wholesale", "Manufacturing", "Pharmacy", "Education", "E-Commerce"];

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container grid">
        <div className="span-7 hero-copy">
          <p className="hero-label">Founder &amp; CEO, Soulsoft Infotech</p>
          <h1 id="hero-title">Building simple software for complex businesses</h1>
          <p className="hero-summary">
            Over 15 years of building scalable software, ERP systems and business automation for businesses across
            industries.
          </p>
          <div className="hero-actions">
            <a className="btn btn--primary" href="#products">View products <Icon name="arrow" /></a>
            <a className="btn btn--outline" href="#contact">Contact me</a>
          </div>

          <div className="hero-sectors">
            <p className="hero-sectors-label">Software for</p>
            <ul>
              {sectors.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>

        <div className="span-5">
          <Portrait />
        </div>
      </div>
    </section>
  );
}
