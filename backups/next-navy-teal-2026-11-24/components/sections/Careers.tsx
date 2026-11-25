import { delay } from "@/components/util";
import { jobs, QUALIFICATION } from "@/data/jobs";
import { WHATSAPP_HR } from "@/data/site";

export default function Careers() {
  return (
    <section className="section" id="careers" aria-labelledby="careers-title">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Careers</span>
          <h2 id="careers-title">Join the Soulsoft team</h2>
          <p className="lead">Current openings. “Apply on WhatsApp” opens a chat with our HR number with the role filled in.</p>
        </div>
        <div className="grid">
          {jobs.map((j, i) => {
            const msg = encodeURIComponent(`Hello, I would like to apply for the ${j.title} position at Soulsoft Infotech.`);
            return (
              <article className="span-4 card job-card reveal" style={delay(i * 80)} key={j.title}>
                <span className="job-qual">{QUALIFICATION}</span>
                <h3>{j.title}</h3>
                <p className="job-pay">{j.salary}</p>
                <h4>Responsibilities</h4>
                <ul>{j.duties.map((d) => <li key={d}>{d}</li>)}</ul>
                <h4>Required skills</h4>
                <ul>{j.skills.map((s) => <li key={s}>{s}</li>)}</ul>
                <div className="job-spacer" />
                <a className="btn btn--primary" href={`https://wa.me/${WHATSAPP_HR}?text=${msg}`} target="_blank" rel="noopener noreferrer">
                  Apply on WhatsApp<span className="visually-hidden"> for {j.title} (opens in a new tab)</span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
