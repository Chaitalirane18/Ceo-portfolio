"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Icon from "@/components/Icon";
import { products, type Product } from "@/data/products";
import { EVT_ENQUIRE } from "@/data/site";
import DemoLink from "./DemoLink";

const M = motion as any;

/** Decorative mini dashboard: animated bars + trend line. Purely visual. */
function MiniDash({ seed, icon }: { seed: number; icon: string }) {
  const bars = Array.from({ length: 7 }, (_, i) => 28 + ((seed * 37 + i * 53) % 62));
  const line = bars.map((b, i) => `${i === 0 ? "M" : "L"}${12 + i * 26} ${78 - b * 0.55}`).join(" ");
  return (
    <div className="product-visual" aria-hidden="true">
      <span className="icon-box"><Icon name={icon} /></span>
      <svg viewBox="0 0 180 90" className="mini-dash" fill="none">
        {bars.map((b, i) => (
          <rect key={i} className="mini-bar" style={{ animationDelay: `${i * 90}ms` }} x={8 + i * 26} y={82 - b * 0.6} width="14" height={b * 0.6} rx="3" />
        ))}
        <path className="mini-line" pathLength={1} d={line} />
      </svg>
    </div>
  );
}

/** Horizontal carousel with dynamic click-to-open drawer/modal for full capabilities and demo enquiry */
export default function ProductCarousel() {
  const reduce = useReducedMotion();
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, x: 0, left: 0, moved: 0 });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const by = (dir: number) => {
    const t = track.current;
    if (!t) return;
    const card = t.querySelector<HTMLElement>(".product-slide");
    t.scrollBy({ left: dir * ((card?.offsetWidth ?? 340) + 24), behavior: "smooth" });
  };

  const pauseUntil = useRef(0);
  useEffect(() => {
    if (selectedProduct || reduce) return;
    const id = setInterval(() => {
      const t = track.current;
      if (!t || document.hidden || Date.now() < pauseUntil.current) return;
      if (t.scrollLeft >= t.scrollWidth - t.clientWidth - 4) t.scrollTo({ left: 0, behavior: "smooth" });
      else by(1);
    }, 4000);
    return () => clearInterval(id);
  }, [selectedProduct, reduce]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSelectedProduct(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedProduct]);

  const down = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const t = track.current!;
    pauseUntil.current = Date.now() + 8000;
    drag.current = { down: true, x: e.clientX, left: t.scrollLeft, moved: 0 };
  };
  const move = (e: PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d.down) return;
    const dx = e.clientX - d.x;
    d.moved = Math.max(d.moved, Math.abs(dx));
    if (d.moved > 5) {
      track.current!.classList.add("is-dragging");
      track.current!.scrollLeft = d.left - dx;
    }
  };
  const up = () => {
    drag.current.down = false;
    track.current?.classList.remove("is-dragging");
  };

  const handleCardClick = (p: Product) => {
    if (drag.current.moved <= 5) {
      setSelectedProduct(p);
    }
  };

  const handleRequestDemoFromModal = (p: Product) => {
    setSelectedProduct(null);
    window.dispatchEvent(new CustomEvent(EVT_ENQUIRE, { detail: p.name }));
    const contactSec = document.getElementById("contact");
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="carousel">
      <style dangerouslySetInnerHTML={{ __html: productModalCss }} />

      <div className="container carousel-bar">
        <p className="carousel-hint">
          <span className="click-pill-tag">Interactive</span> Click any card to expand full features &amp; live architecture specs. Drag, swipe or use arrows.
        </p>
      </div>

      <div
        className="carousel-stage"
        onMouseEnter={() => { pauseUntil.current = Infinity; }}
        onMouseLeave={() => { pauseUntil.current = Date.now() + 1500; }}
        onFocus={() => { pauseUntil.current = Infinity; }}
        onBlur={() => { pauseUntil.current = Date.now() + 1500; }}
        onTouchStart={() => { pauseUntil.current = Date.now() + 8000; }}
      >
        <button type="button" className="round-btn carousel-arrow carousel-arrow--prev" onClick={() => by(-1)} aria-label="Previous products">
          <Icon name="arrow" className="flip" />
        </button>
        <button type="button" className="round-btn carousel-arrow carousel-arrow--next" onClick={() => by(1)} aria-label="Next products">
          <Icon name="arrow" />
        </button>

        <div
          className="carousel-track"
          ref={track}
          tabIndex={0}
          role="region"
          aria-label="Products"
          onPointerDown={down}
          onPointerMove={move}
          onPointerUp={up}
          onPointerLeave={up}
          onClickCapture={(e) => {
            if (drag.current.moved > 5) {
              e.preventDefault();
              e.stopPropagation();
              drag.current.moved = 0;
            }
          }}
        >
          {products.map((p, i) => (
            <article
              className="product-slide card product-card interactive-hover-card"
              key={p.name}
              onClick={() => handleCardClick(p)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProduct(p);
                }
              }}
              aria-label={`Open details for ${p.name}`}
            >
              <MiniDash seed={i + 1} icon={p.icon} />
              <div className="product-body">
                <div className="product-top-row">
                  <span className="product-no" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <span className="card-open-hint">
                    <span>Click to open</span>
                    <Icon name="arrow" />
                  </span>
                </div>
                <h3>{p.name}</h3>
                <p className="product-cat">{p.category}</p>
                <p className="product-desc">{p.desc}</p>

                {/* Capability tags previews */}
                {p.features && p.features.length > 0 && (
                  <div className="product-tags-preview" aria-hidden="true">
                    {p.features.slice(0, 3).map((f) => (
                      <span key={f} className="tag-chip">{f}</span>
                    ))}
                    {p.features.length > 3 && (
                      <span className="tag-chip tag-chip--more">+{p.features.length - 3} more</span>
                    )}
                  </div>
                )}

                <div className="product-actions" onClick={(e) => e.stopPropagation()}>
                  {p.url && (
                    <a className="text-link" href={p.url} target="_blank" rel="noopener noreferrer" draggable={false}>
                      Explore Product <Icon name="out" />
                      <span className="visually-hidden"> {p.name} (opens in a new tab)</span>
                    </a>
                  )}
                  <DemoLink product={p.name} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Dynamic Animated Modal / Card Expand Overlay */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="product-modal-backdrop" onClick={() => setSelectedProduct(null)}>
            <M.div
              className="product-modal-card"
              onClick={(e: any) => e.stopPropagation()}
              initial={reduce ? false : { opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-prod-title"
            >
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedProduct(null)}
                aria-label="Close details"
              >
                ✕
              </button>

              <div className="modal-header-section">
                <div className="modal-icon-halo">
                  <Icon name={selectedProduct.icon} />
                </div>
                <div>
                  <span className="modal-cat-badge">{selectedProduct.category}</span>
                  <h3 id="modal-prod-title" className="modal-title">{selectedProduct.name}</h3>
                </div>
              </div>

              <p className="modal-description">{selectedProduct.desc}</p>

              <div className="modal-features-section">
                <h4 className="modal-features-heading">CORE CAPABILITIES &amp; MODULES</h4>
                <div className="modal-features-grid">
                  {selectedProduct.features.map((feature, idx) => (
                    <div key={feature} className="modal-feature-pill">
                      <span className="modal-feature-dot" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-footer-actions">
                <button
                  type="button"
                  className="modal-btn-demo"
                  onClick={() => handleRequestDemoFromModal(selectedProduct)}
                >
                  <span>Request Live Product Demo</span>
                  <Icon name="arrow" />
                </button>

                {selectedProduct.url && (
                  <a
                    className="modal-btn-visit"
                    href={selectedProduct.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Visit Live Portal</span>
                    <Icon name="out" />
                  </a>
                )}
              </div>
            </M.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

const productModalCss = `
.click-pill-tag {
  display: inline-block;
  padding: 2px 8px;
  background: #0072a7;
  color: #ffffff;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  margin-right: 6px;
  letter-spacing: 0.05em;
}

.interactive-hover-card {
  cursor: pointer;
  transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s, border-color 0.28s !important;
}

.interactive-hover-card:hover {
  transform: translateY(-6px) !important;
  box-shadow: 0 16px 36px rgba(0, 114, 167, 0.15) !important;
  border-color: rgba(0, 114, 167, 0.4) !important;
}

.product-top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
}

.card-open-hint {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-weight: 700;
  color: #f07c00;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  opacity: 0.85;
  transition: opacity 0.2s, transform 0.2s;
}

.interactive-hover-card:hover .card-open-hint {
  opacity: 1;
  transform: translateX(2px);
}

.card-open-hint .icon {
  width: 12px;
  height: 12px;
}

.product-tags-preview {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 12px 0 14px;
}

.tag-chip {
  font-size: 11px;
  font-weight: 600;
  color: #0072a7;
  background: rgba(0, 114, 167, 0.08);
  padding: 3px 8px;
  border-radius: 6px;
  border: 1px solid rgba(0, 114, 167, 0.15);
}

.tag-chip--more {
  color: #f07c00;
  background: rgba(240, 124, 0, 0.08);
  border-color: rgba(240, 124, 0, 0.2);
}

/* Modal Backdrop */
.product-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 39, 56, 0.65);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.product-modal-card {
  position: relative;
  width: 100%;
  max-width: 620px;
  background: #ffffff;
  border-radius: 24px;
  padding: clamp(28px, 4vw, 40px);
  box-shadow: 0 25px 60px rgba(0, 39, 56, 0.35);
  border: 1.5px solid rgba(0, 114, 167, 0.2);
  color: #0f172a;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-close-btn {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #f8fafc;
  color: #475569;
  font-size: 16px;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.modal-close-btn:hover {
  background: #f07c00;
  color: #ffffff;
  border-color: #f07c00;
}

.modal-header-section {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 20px;
}

.modal-icon-halo {
  display: grid;
  place-items: center;
  width: 58px;
  height: 58px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(0, 114, 167, 0.12), rgba(240, 124, 0, 0.12));
  border: 1.5px solid rgba(240, 124, 0, 0.3);
  color: #f07c00;
  flex: none;
}

.modal-icon-halo .icon {
  width: 30px;
  height: 30px;
}

.modal-cat-badge {
  display: inline-block;
  font-family: var(--font-head);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #0072a7;
  margin-bottom: 4px;
}

.modal-title {
  font-family: var(--font-head);
  font-size: clamp(22px, 2.5vw, 28px);
  font-weight: 800;
  color: #002738;
  margin: 0;
  line-height: 1.2;
}

.modal-description {
  font-size: 16px;
  line-height: 1.65;
  color: #475569;
  margin: 0 0 24px;
}

.modal-features-section {
  background: #f8fafc;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid rgba(0, 114, 167, 0.12);
  margin-bottom: 28px;
}

.modal-features-heading {
  font-family: var(--font-head);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #0072a7;
  margin: 0 0 14px;
}

.modal-features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
}

.modal-feature-pill {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  font-size: 13px;
  font-weight: 600;
  color: #1e293b;
}

.modal-feature-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #f07c00;
  flex: none;
}

.modal-footer-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
}

.modal-btn-demo {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 24px;
  border-radius: 12px;
  background: linear-gradient(135deg, #f07c00 0%, #ff9826 100%);
  color: #ffffff;
  border: none;
  font-family: var(--font-head);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(240, 124, 0, 0.3);
  transition: transform 0.2s, box-shadow 0.2s;
}

.modal-btn-demo:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(240, 124, 0, 0.45);
}

.modal-btn-demo .icon {
  width: 16px;
  height: 16px;
}

.modal-btn-visit {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 12px;
  background: transparent;
  color: #0072a7;
  border: 1.5px solid rgba(0, 114, 167, 0.35);
  font-family: var(--font-head);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: background-color 0.2s, border-color 0.2s;
}

.modal-btn-visit:hover {
  background: rgba(0, 114, 167, 0.08);
  border-color: #0072a7;
}

.modal-btn-visit .icon {
  width: 14px;
  height: 14px;
}
`;
