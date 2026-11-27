import Icon from "@/components/Icon";
import { expertise } from "@/data/expertise";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { tech } from "@/data/tech";
import { why } from "@/data/why";
import ExpertiseExplorer from "@/components/portfolio/ExpertiseExplorer";

/** What I do: seven areas — interactive domain explorer. */
export function Expertise() {
  return (
    <section id="expertise" aria-labelledby="expertise-title" className="xp-section">
      <div className="container">
        <div className="xp-heading">
          <span className="kicker">Expertise</span>
          <h2 id="expertise-title" className="h2 lines">
            Where Strategic Vision<br />Meets Software Innovation.
          </h2>
          <p className="xp-lead">
            Fifteen years of multidisciplinary leadership bridging enterprise technology
            architectures, automation engineering, and business expansion.
          </p>
        </div>
        <ExpertiseExplorer />
      </div>
    </section>
  );
}

/** What Soulsoft delivers for customers. */
export function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <span className="kicker">Services</span>
        <h2 className="h2 lines">From a first idea to a system that runs the business.</h2>
        <div className="sv-grid">
          {services.map((s) => (
            <article className="sv reveal" key={s.id}>
              <div className="sv-head">
                <span className="sv-ic" aria-hidden="true"><Icon name={s.icon} /></span>
                <span className="sv-n">{s.num}</span>
              </div>
              <h3>{s.title}</h3>
              <span className="sv-tag">{s.tagline}</span>
              <p>{s.lead}</p>
              <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Industries served, and the technology used. */
export function IndustriesTech() {
  return (
    <section id="industries" style={{ paddingTop: 0 }}>
      <div className="container">
        <span className="kicker">Industries</span>
        <h2 className="h2 lines">Built for the sectors we know best.</h2>
        <ul className="ind-grid">
          {industries.map((i) => (
            <li className="ind reveal" key={i.name}><span aria-hidden="true"><Icon name={i.icon} /></span>{i.name}</li>
          ))}
        </ul>

        <div className="tech" id="tech">
          <span className="kicker">Technology</span>
          <h3 className="h3 reveal">The tools behind the software.</h3>
          <div className="tech-grid">
            {tech.map((g) => (
              <div className="tech-group reveal" key={g.group}>
                <span className="tech-label">{g.group}</span>
                <ul>
                  {g.items.map((t) => (
                    <li key={t.label}>
                      {t.logo ? <img src={`/images/tech/${t.logo}.svg`} alt="" width={22} height={22} loading="lazy" /> : <span className="tech-ic" aria-hidden="true"><Icon name={t.icon ?? "gear"} /></span>}
                      {t.label}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Why customers choose Soulsoft (dark band). */
export function Why() {
  return (
    <section className="why" id="why" data-dark>
      <div className="container split">
        <div className="sticky">
          <span className="kicker">Why Soulsoft</span>
          <h2 className="h2 lines">Why businesses stay with us.</h2>
        </div>
        <ul className="why-list">
          {why.map((w, i) => (
            <li className="reveal" key={w}><span className="why-n">{String(i + 1).padStart(2, "0")}</span>{w}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
