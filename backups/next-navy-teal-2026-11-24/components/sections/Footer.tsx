import { nav } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="grid">
          <div className="span-5">
            <a className="brand" href="#home"><span className="brand-mark" aria-hidden="true" />Prasad Godage</a>
            <p className="footer-tag">Founder &amp; CEO, Soulsoft Infotech Private Limited. Transforming ideas into intelligent solutions.</p>
          </div>
          <nav className="span-4" aria-label="Footer">
            <h2>Quick links</h2>
            <ul className="footer-links footer-links--cols">
              {nav.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
              <li><a href="#bio">Bio &amp; media</a></li>
            </ul>
          </nav>
          <div className="span-3">
            <h2>Websites</h2>
            <ul className="footer-links">
              <li><a href="https://soulsoft.in" target="_blank" rel="noopener noreferrer">soulsoft.in</a></li>
              <li><a href="https://prasadgodage.com" target="_blank" rel="noopener noreferrer">prasadgodage.com</a></li>
            </ul>
          </div>
        </div>
        <p className="footer-bottom">© {new Date().getFullYear()} Soulsoft Infotech Private Limited. All rights reserved.</p>
      </div>
    </footer>
  );
}
