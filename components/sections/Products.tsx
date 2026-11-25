import Reveal from "@/components/ui/Reveal";
import ProductCarousel from "./ProductCarousel";

export default function Products() {
  return (
    <section className="section section--ice" id="products" aria-labelledby="products-title">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Products &amp; innovation portfolio</span>
          <h2 id="products-title">Twelve products for real business operations</h2>
          <p className="lead">
            Industry-specific software from Soulsoft Infotech, from agriculture and retail to pharmacy, education and
            constituency management.
          </p>
        </Reveal>
      </div>
      <Reveal>
        <ProductCarousel />
      </Reveal>
    </section>
  );
}
