import { delay } from "@/components/util";

export default function Vision() {
  return (
    <section className="section section--grey" id="vision" aria-labelledby="vision-title">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Business vision &amp; mission</span>
          <h2 id="vision-title">Where Soulsoft is headed, and why</h2>
        </div>
        <div className="grid">
          <article className="span-6 card vm-card reveal">
            <h3>Vision</h3>
            <p>To become a trusted technology partner by delivering innovative, scalable, and affordable software solutions that accelerate digital transformation.</p>
          </article>
          <article className="span-6 card vm-card reveal" style={delay(80)}>
            <h3>Mission</h3>
            <p>To empower businesses with reliable software products, seamless integrations, and intelligent automation that deliver measurable business value.</p>
          </article>
          <div className="span-12 philosophy reveal">
            <strong>Business philosophy</strong>
            <q>To build innovative, scalable, and affordable software solutions that empower businesses through technology and automation.</q>
          </div>
        </div>
      </div>
    </section>
  );
}
