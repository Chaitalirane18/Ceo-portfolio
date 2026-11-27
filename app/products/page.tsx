import type { Metadata } from "next";
import Link from "next/link";
import { WHATSAPP, PHONE_DISPLAY, PHONE_TEL } from "@/data/portfolio";
import ProductsGrid from "@/components/portfolio/ProductsGrid";

export const metadata: Metadata = {
  title: "Products | Soulsoft Infotech — Prasad Godage",
  description:
    "Explore 12 Soulsoft software products built for Indian businesses: agriculture ERP, retail & wholesale billing, manufacturing ERP, pharmacy management, CRM, and LMS.",
};

export default function ProductsPage() {
  return (
    <main id="main" className="products-page">
      {/* 1. Page Intro */}
      <section className="pr-hero" aria-labelledby="pr-hero-title">
        <div className="container">
          <span className="kicker">Products</span>
          <h1 id="pr-hero-title" className="h1 lines">
            Software for the businesses that keep India running.
          </h1>
          <p className="lead reveal">
            From agri dealers and shopkeepers to chemists and manufacturers, each Soulsoft system is built for how Indian businesses actually operate.
          </p>
          <div className="pr-hero-actions reveal">
            <Link
              className="btn-orange"
              href="/contact?topic=Product+Demo+%2F+Evaluation"
            >
              Request a demo →
            </Link>
            <a
              className="pr-btn-secondary"
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk on WhatsApp
            </a>
          </div>
          <p className="pr-stats-strip reveal">
            <strong>12 products</strong>
            <span aria-hidden="true">·</span>
            <span>since 2012</span>
            <span aria-hidden="true">·</span>
            <span>offices in Sangamner, Pune and Nashik</span>
          </p>
        </div>
      </section>

      {/* 2–4. Filter Bar, Featured Products & All Other Products Grid */}
      <ProductsGrid />

      {/* 5. Bottom Navy Call to Action */}
      <section className="pr-cta" data-dark aria-labelledby="pr-cta-title">
        <div className="container pr-cta-inner">
          <div>
            <h2 id="pr-cta-title" className="pr-cta-title lines">
              Not sure which product fits your business?
            </h2>
            <p className="pr-cta-sub">
              Tell us how your business works and we will recommend the right setup.
            </p>
          </div>
          <div className="pr-cta-actions reveal">
            <a
              className="btn-orange"
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk on WhatsApp →
            </a>
            <a className="pr-phone-link" href={`tel:${PHONE_TEL}`}>
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
