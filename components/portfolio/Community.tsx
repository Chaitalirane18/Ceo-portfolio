import Link from "next/link";
import { community } from "@/data/portfolio";
import Ph, { stock } from "./Ph";
import { CommunityIcon } from "./Icons";

export function Community() {
  return (
    <section id="community">
      <div className="container split">
        <div className="sticky">
          <span className="kicker">Leadership &amp; community</span>
          <h2 className="h2 lines">Growing Sangamner together.</h2>
          <p className="cm-intro reveal">Building a business in Sangamner showed me how hard it is for small businesses to find the right people, and for young job seekers to find opportunities close to home. That&apos;s why I work to connect local businesses, students and professionals.</p>
          <div className="bridge reveal" aria-hidden="true">
            <span className="side">Students &amp;<br />job seekers</span>
            <span className="link" />
            <span className="side">Local<br />businesses</span>
          </div>
        </div>
        <ul className="cm-list">
          {community.map((c) => (
            <li className="cm-item reveal" key={c.title}>
              <div className="frame cm-photo unveil"><img src={stock(c.img)} alt={c.alt} loading="lazy" style={c.position ? { objectPosition: c.position } : undefined} /></div>
              <span className="cm-icon" aria-hidden="true"><CommunityIcon name={c.icon} /></span>
              <div>
                <span className={`badge ${c.badge}`}><Ph>{c.badgeText}</Ph></span>
                <h3>{c.title}</h3>
                <span className="sub">{c.sub}</span>
                <p>{c.text}</p>
              </div>
            </li>
          ))}
          <li className="cm-cta reveal"><Link className="chip light magnetic" href="/contact">Employer or exhibitor? Take part in an expo →</Link></li>
        </ul>
      </div>
    </section>
  );
}

/** Real quotes only, with permission. Remove this section until you have them. */
export function Voices() {
  return (
    <section aria-label="What people say">
      <div className="container">
        <span className="kicker">What people say</span>
        <h2 className="h2 lines">Trusted in India and abroad.</h2>
        <div className="q-grid">
          <blockquote className="q reveal"><p>&ldquo;<span className="ph">[Quote from a customer in India.]</span>&rdquo;</p><cite><span className="ph">[Name]</span><small><span className="ph">[Business], [Town, India]</span></small></cite></blockquote>
          <blockquote className="q reveal"><p>&ldquo;<span className="ph">[Quote from a client abroad.]</span>&rdquo;</p><cite><span className="ph">[Name]</span><small><span className="ph">[Company], [City, Country]</span></small></cite></blockquote>
        </div>
      </div>
    </section>
  );
}
