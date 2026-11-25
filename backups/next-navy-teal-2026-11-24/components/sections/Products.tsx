import Icon from "@/components/Icon";
import { delay } from "@/components/util";
import { products } from "@/data/products";
import DemoLink from "./DemoLink";

export default function Products() {
  return (
    <section className="section" id="products" aria-labelledby="products-title">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Products</span>
          <h2 id="products-title">Twelve products for real business operations</h2>
          <p className="lead">
            Industry-specific software from Soulsoft Infotech, from agriculture and retail to pharmacy, education and
            constituency management.
          </p>
        </div>
        <div className="grid">
          {products.map((p, i) => (
            <article className="span-4 card product-card reveal" style={delay((i % 3) * 60)} key={p.name}>
              <span className="icon-box"><Icon name={p.icon} /></span>
              <h3>{p.name}</h3>
              <p className="product-cat">{p.category}</p>
              <p className="product-desc">{p.desc}</p>
              <DemoLink product={p.name} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
