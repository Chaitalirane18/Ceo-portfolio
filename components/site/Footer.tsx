import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP, pages } from "@/data/portfolio";
import { EMAIL, LINKEDIN_URL } from "@/data/site";
import FooterClock from "./FooterClock";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" data-dark>
      <div className="container">
        <div className="sf-grid">
          <div>
            <Link className="sf-brand" href="/"><span className="c">©</span> Prasad Godage</Link>
            <p className="sf-about">Founder &amp; CEO of Soulsoft Infotech. Simple, affordable software for real businesses, built in Sangamner since 2012.</p>
          </div>
          <nav aria-label="Footer">
            <span className="lbl">Pages</span>
            <ul>{pages.map((p) => <li key={p.href}><Link href={p.href}>{p.label}</Link></li>)}</ul>
          </nav>
          <div>
            <span className="lbl">Contact</span>
            <ul>
              <li><a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></li>
              <li><a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              {EMAIL && <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>}
              {LINKEDIN_URL && <li><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>}
            </ul>
          </div>
          <div>
            <span className="lbl">Company</span>
            <ul>
              <li><a href="https://soulsoft.in/" target="_blank" rel="noopener noreferrer">soulsoft.in ↗</a></li>
              <li>Sangamner, Maharashtra, India</li>
              <FooterClock />
            </ul>
          </div>
        </div>
        <div className="sf-base">© {year} Prasad Godage · Soulsoft Infotech Pvt. Ltd.</div>
      </div>
    </footer>
  );
}
