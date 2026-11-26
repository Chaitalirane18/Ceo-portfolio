import Reveal from "@/components/ui/Reveal";
import ProductCarousel from "./ProductCarousel";

export default function Products() {
  return (
    <section
      className="relative border-t border-[#d9e1e7] bg-gradient-to-b from-white to-[#f4f7f9] py-[clamp(64px,8vh,96px)]"
      id="products"
      aria-labelledby="products-title"
    >
      <div className="container">
        <Reveal className="mx-auto mb-8 max-w-[720px] text-center" y={16}>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#0072a7]/20 bg-[#0072a7]/[0.07] px-3.5 py-1 font-head text-[11px] font-bold uppercase tracking-[0.14em] text-[#005f8a]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            <span>Products &amp; Innovation Portfolio</span>
          </div>
          <h2 id="products-title" className="font-head text-[clamp(28px,3.4vw,38px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#1f3a4d] [text-wrap:balance]">
            Twelve products for <span className="bg-gradient-to-r from-[#0072a7] to-accent bg-clip-text text-transparent">real business operations</span>
          </h2>
          <p className="mx-auto mt-3 max-w-[58ch] text-base leading-relaxed text-[#46586f]">
            Industry-specific software from agriculture and retail to pharmacy, education and constituency management.
          </p>
        </Reveal>
      </div>
      <Reveal>
        <ProductCarousel />
      </Reveal>
    </section>
  );
}
