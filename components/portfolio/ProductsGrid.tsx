"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import { products, type Product } from "@/data/products";

const FILTER_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "agriculture", label: "Agriculture" },
  { id: "retail", label: "Retail & Wholesale" },
  { id: "manufacturing", label: "Manufacturing" },
  { id: "pharmacy", label: "Pharmacy" },
  { id: "business-tools", label: "Business Tools" },
  { id: "more", label: "More" },
] as const;

type FilterId = (typeof FILTER_CATEGORIES)[number]["id"];

const FLAGSHIP_NAMES = new Set([
  "SoulAgroNexus",
  "SoulConnect ERP",
  "SoulForge ERP",
]);

function mapProductCategory(p: Product): Exclude<FilterId, "all"> {
  const cat = (p.category || "").toLowerCase();
  const name = (p.name || "").toLowerCase();
  if (cat.includes("agriculture") || name.includes("krushi") || name.includes("agro")) {
    if (cat.includes("manufacturing") || name.includes("forge")) return "manufacturing";
    return "agriculture";
  }
  if (cat.includes("manufacturing") || cat.includes("production") || name.includes("forge")) {
    return "manufacturing";
  }
  if (cat.includes("retail") || cat.includes("wholesale") || cat.includes("e-commerce") || cat.includes("online store")) {
    return "retail";
  }
  if (cat.includes("pharmacy") || name.includes("pharma")) {
    return "pharmacy";
  }
  if (cat.includes("document") || cat.includes("learning") || cat.includes("customer relationship")) {
    return "business-tools";
  }
  return "more";
}

function ProductMockup({ name, priority = false }: { name: string; priority?: boolean }) {
  const isAgro = name.includes("Agro");
  const isConnect = name.includes("Connect");

  const label = isAgro
    ? "SoulAgroNexus · Cloud Agri ERP"
    : isConnect
      ? "SoulConnect ERP · Billing & GST"
      : "SoulForge ERP · Production Control";

  const rows = isAgro
    ? [
        ["Urea 50kg · Batch #A14", "1,240 bags", "In Stock"],
        ["Krushi Kendra Invoice #842", "₹48,900", "GST Paid"],
        ["Drip Kit Supplier Order", "320 units", "Dispatched"],
      ]
    : isConnect
      ? [
          ["POS Counter #02 · Retail Bill", "₹12,450", "Settled"],
          ["Wholesale Ledger · Pune", "₹1,84,000", "GST Filed"],
          ["Low Stock Alert · SKU 19", "14 left", "Reorder"],
        ]
      : [
          ["Raw Material Intake · Lot 9", "4,500 kg", "Verified"],
          ["Batch #SF-204 · Packing", "92% done", "Active"],
          ["Finished Goods Dispatch", "180 crates", "Ready"],
        ];

  return (
    <div
      className="pr-mockup-frame"
      role="img"
      aria-label={`${name} software interface mockup`}
      data-priority={priority ? "true" : undefined}
    >
      <div className="pr-mockup-bar">
        <div className="pr-mockup-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="pr-mockup-url">{label}</span>
      </div>
      <div className="pr-mockup-body">
        <div className="pr-mockup-kpis">
          <div className="pr-mockup-kpi">
            <span>Today</span>
            <strong>{isAgro ? "₹2.4L" : isConnect ? "148 Bills" : "12 Batches"}</strong>
          </div>
          <div className="pr-mockup-kpi">
            <span>Inventory</span>
            <strong>{isAgro ? "98.4%" : isConnect ? "3,420 SKUs" : "42 Tons"}</strong>
          </div>
          <div className="pr-mockup-kpi pr-mockup-kpi--accent">
            <span>Status</span>
            <strong>Synced</strong>
          </div>
        </div>
        <div className="pr-mockup-table">
          {rows.map(([col1, col2, col3]) => (
            <div className="pr-mockup-row" key={col1}>
              <span className="pr-m-col1">{col1}</span>
              <span className="pr-m-col2">{col2}</span>
              <span className="pr-m-badge">{col3}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProductsGrid() {
  const [activeCategory, setActiveCategory] = useState<FilterId>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Sync initial filter from URL (?category=...)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const catParam = params.get("category") as FilterId | null;
    if (catParam && FILTER_CATEGORIES.some((c) => c.id === catParam)) {
      setActiveCategory(catParam);
    }
  }, []);

  const handleSelectCategory = (id: FilterId) => {
    setActiveCategory(id);
    const url = new URL(window.location.href);
    if (id === "all") {
      url.searchParams.delete("category");
    } else {
      url.searchParams.set("category", id);
    }
    window.history.replaceState(null, "", url.toString());
  };

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return products.filter((p) => {
      const matchesCat =
        activeCategory === "all" || mapProductCategory(p) === activeCategory;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        (p.desc || "").toLowerCase().includes(q) ||
        (p.category || "").toLowerCase().includes(q)
      );
    });
  }, [activeCategory, searchQuery]);

  const featuredProducts = useMemo(
    () => filteredProducts.filter((p) => FLAGSHIP_NAMES.has(p.name)),
    [filteredProducts]
  );

  const otherProducts = useMemo(
    () => filteredProducts.filter((p) => !FLAGSHIP_NAMES.has(p.name)),
    [filteredProducts]
  );

  const filterKey = `${activeCategory}:${searchQuery.trim()}`;

  return (
    <div className="pr-catalog">
      {/* 2. Sticky Filter Bar */}
      <div className="pr-filter-sticky">
        <div className="container pr-filter-inner">
          <div
            className="pr-filter-pills"
            role="tablist"
            aria-label="Filter products by sector"
          >
            {FILTER_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`pr-pill${isActive ? " is-active" : ""}`}
                  onClick={() => handleSelectCategory(cat.id)}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="pr-search-wrap">
            <svg
              className="pr-search-ic"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="search"
              className="pr-search-input"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search products by name or description"
            />
          </div>
        </div>
      </div>

      {/* Results area */}
      <div className="container pr-results-container" key={filterKey}>
        {filteredProducts.length === 0 ? (
          <div className="pr-empty" role="status">
            <p>No products matched your current filter or search.</p>
            <button
              type="button"
              className="pr-pill is-active"
              onClick={() => {
                handleSelectCategory("all");
                setSearchQuery("");
              }}
            >
              Show all products
            </button>
          </div>
        ) : (
          <>
            {/* 3. Featured Flagship Products */}
            {featuredProducts.length > 0 && (
              <section
                className="pr-featured-section"
                aria-label="Featured products"
              >
                <div className="pr-section-label">
                  <span className="kicker">Flagship Platforms</span>
                </div>
                <div className="pr-featured-list">
                  {featuredProducts.map((p, idx) => (
                    <article
                      className={`pr-feature-card${idx % 2 === 1 ? " is-reversed" : ""}`}
                      key={p.name}
                      style={{ "--i": idx } as React.CSSProperties}
                    >
                      <div className="pr-feature-visual">
                        <ProductMockup name={p.name} priority={idx === 0} />
                      </div>
                      <div className="pr-feature-body">
                        {p.category && (
                          <span className="pr-cat-label">{p.category}</span>
                        )}
                        <h2 className="pr-feature-title">{p.name}</h2>
                        {p.desc && <p className="pr-feature-desc">{p.desc}</p>}
                        {p.features && p.features.length > 0 && (
                          <ul className="pr-checklist">
                            {p.features.slice(0, 4).map((f) => (
                              <li key={f}>
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.4"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  aria-hidden="true"
                                >
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        <div className="pr-feature-actions">
                          <Link
                            className="btn-orange"
                            href={`/contact?topic=${encodeURIComponent("Product Demo / Evaluation")}&product=${encodeURIComponent(p.name)}`}
                          >
                            Request a demo
                          </Link>
                          {p.url && (
                            <a
                              className="pr-btn-secondary"
                              href={p.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Visit site ↗
                            </a>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* 4. All Other Products Grid */}
            {otherProducts.length > 0 && (
              <section
                className="pr-grid-section"
                aria-label="All other products"
              >
                <div className="pr-section-label">
                  <span className="kicker">
                    {featuredProducts.length > 0 ? "More Solutions" : "Matching Products"}
                  </span>
                </div>
                <div className="pr-grid">
                  {otherProducts.map((p, idx) => {
                    const visibleTags = (p.features || []).slice(0, 3);
                    const hiddenCount = Math.max(0, (p.features || []).length - 3);
                    const detailHref =
                      p.url ||
                      `/contact?topic=${encodeURIComponent("Product Demo / Evaluation")}&product=${encodeURIComponent(p.name)}`;

                    return (
                      <article
                        className="pr-card"
                        key={p.name}
                        style={{ "--i": idx } as React.CSSProperties}
                      >
                        {p.icon && (
                          <div className="pr-card-top">
                            <span className="pr-card-ic" aria-hidden="true">
                              <Icon name={p.icon} />
                            </span>
                          </div>
                        )}
                        {p.category && (
                          <span className="pr-cat-label">{p.category}</span>
                        )}
                        <h3 className="pr-card-title">{p.name}</h3>
                        {p.desc && <p className="pr-card-desc">{p.desc}</p>}
                        {visibleTags.length > 0 && (
                          <ul className="pr-card-tags">
                            {visibleTags.map((f) => (
                              <li key={f}>{f}</li>
                            ))}
                            {hiddenCount > 0 && (
                              <li className="pr-tag-more">+{hiddenCount} more</li>
                            )}
                          </ul>
                        )}
                        <div className="pr-card-footer">
                          {p.url ? (
                            <a
                              className="pr-learn-link"
                              href={p.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span>Learn more</span>
                              <span className="pr-learn-arrow" aria-hidden="true">
                                →
                              </span>
                            </a>
                          ) : (
                            <Link className="pr-learn-link" href={detailHref}>
                              <span>Learn more</span>
                              <span className="pr-learn-arrow" aria-hidden="true">
                                →
                              </span>
                            </Link>
                          )}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </div>
  );
}
