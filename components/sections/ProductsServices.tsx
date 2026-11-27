import Icon from "@/components/Icon";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/services";
import ProductCarousel from "./ProductCarousel";

const colLabel = "mb-3 flex items-center gap-2 font-head text-[11px] font-bold uppercase tracking-[0.16em] text-[#005f8a]";

/** One "what we provide" block: shared heading, then products and services in the same visual language. */
export default function ProductsServices() {
  return (
    <div className="relative overflow-hidden border-t border-[#d9e3ea] bg-gradient-to-b from-[#eef3f7] via-white to-[#f4f7f9] py-[clamp(32px,5vh,52px)]">
      <div
        className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(240,124,0,0.1),transparent_70%)] blur-[60px]"
        aria-hidden="true"
      />

      <div className="container relative">
        <Reveal className="mb-6 flex flex-wrap items-end justify-between gap-x-10 gap-y-3" y={14}>
          <div className="max-w-[640px]">
            <span className="inline-flex items-center gap-2 font-head text-[11px] font-bold uppercase tracking-[0.16em] text-[#005f8a]">
              <span className="h-px w-6 bg-accent" aria-hidden="true" />
              What we provide
            </span>
            <h2 className="m-0 mt-1.5 font-head text-[clamp(24px,2.8vw,34px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#09222f] [text-wrap:balance]">
              Products and services for{" "}
              <span className="bg-gradient-to-r from-[#0072a7] to-accent bg-clip-text text-transparent">real business operations</span>
            </h2>
          </div>
         
        </Reveal>

        <div className="grid items-stretch gap-y-8 [grid-template-columns:minmax(0,1.3fr)_auto_minmax(0,1fr)] max-lg:grid-cols-1">
          {/* Products */}
          <section id="products" className="flex scroll-mt-[72px] flex-col" aria-label="Products">
            <p className={colLabel}>
              <span className="h-px w-6 bg-accent" aria-hidden="true" />
              Products · Ready-to-use solutions
            </p>
            <Reveal className="flex-1">
              <ProductCarousel compact />
            </Reveal>
          </section>

          {/* Divider with a "+" joining the two halves */}
          <div className="relative mx-7 hidden w-px self-stretch bg-gradient-to-b from-transparent via-[#0072a7]/25 to-transparent lg:block" aria-hidden="true">
            <span className="absolute left-1/2 top-1/2 grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#0072a7]/20 bg-white font-head text-lg font-bold leading-none text-accent shadow-[0_4px_14px_rgba(11,44,62,0.1)]">
              +
            </span>
          </div>

          {/* Services */}
          <section id="services" className="flex scroll-mt-[72px] flex-col" aria-label="Services">
            <p className={colLabel}>
              <span className="h-px w-6 bg-accent" aria-hidden="true" />
              Services · project-based engineering
            </p>
            <Reveal className="flex flex-1 flex-col" delay={0.08}>
              <div className="grid flex-1 auto-rows-fr gap-2.5">
                {services.map((s) => (
                  <article
                    key={s.id}
                    className="group flex items-center gap-3.5 rounded-xl border border-[#d9e3ea] bg-white px-4 py-3 shadow-[0_4px_14px_rgba(31,58,77,0.05)] transition duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_12px_26px_rgba(240,124,0,0.12)]"
                  >
                    <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-gradient-to-br from-accent/[0.16] to-accent/[0.05] text-accent ring-1 ring-accent/20 transition duration-200 group-hover:from-accent group-hover:to-[#ff9826] group-hover:text-white [&_.icon]:h-5 [&_.icon]:w-5">
                      <Icon name={s.icon} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="m-0 font-head text-[15px] font-extrabold leading-tight tracking-[-0.01em] text-[#09222f]">{s.title}</h3>
                      <ul className="m-0 mt-1.5 flex list-none flex-wrap gap-1 p-0">
                        {s.items.map((item) => (
                          <li key={item} className="rounded-md bg-[#f1f5f8] px-2 py-[3px] text-[11.5px] leading-none text-[#46586f]">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
              <a
                className="group mt-3 inline-flex items-center gap-2 self-start font-head text-sm font-bold text-[#0072a7] hover:text-[#005f8a]"
                href="#contact"
              >
                Discuss your project <Icon name="arrow" className="!h-4 !w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          </section>
        </div>
      </div>
    </div>
  );
}
