import Reveal from "@/components/ui/Reveal";
import ProductCarousel from "./ProductCarousel";

export default function Products() {
  return (
    <div
      className="relative flex flex-col justify-center pb-12 pt-8 max-lg:pb-14"
      role="tabpanel"
      id="products-panel"
      aria-labelledby="products-title"
    >
      <div className="container">
        <Reveal className="mx-auto mb-6 max-w-[900px] text-center" y={16}>
          <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-[#0072a7]/20 bg-[#0072a7]/[0.07] px-3.5 py-1 font-head text-[11px] font-bold uppercase tracking-[0.14em] text-[#005f8a]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            <span>Products &amp; Innovation Portfolio</span>
          </div>
          <h2 id="products-title" className="font-head text-[clamp(26px,3.2vw,36px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#1f3a4d] [text-wrap:balance]">
            Twelve products for <span className="bg-gradient-to-r from-[#0072a7] to-accent bg-clip-text text-transparent">real business operations</span>
          </h2>
          <p className="mx-auto mt-2 max-w-[70ch] text-[15px] leading-relaxed text-[#46586f]">
            Industry-specific software for agriculture, retail, pharmacy, education and governance. Select a product for details.
          </p>
        </Reveal>
      </div>
      <Reveal>
        <ProductCarousel />
      </Reveal>
    </div>
  );
}
