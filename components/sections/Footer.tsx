import { extraLinks, nav } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="grid-12">
          <div className="span-5">
            <a className="brand" href="#home">PRASAD GODAGE</a>
            <p className="footer-role">Founder &amp; CEO | Soulsoft Infotech Private Limited</p>
            <p className="footer-tag">“Transforming Ideas Into Intelligent Solutions.”</p>
          </div>
          <nav className="span-4" aria-label="Footer">
            <h2>Navigate</h2>
            <ul className="footer-links footer-links--cols">
              {[...nav, ...extraLinks].map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
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
        <p className="footer-bottom">© {new Date().getFullYear()} Prasad Shivaji Godage · Soulsoft Infotech Private Limited. All rights reserved.</p>
      </div>
    </footer>
  );
}
