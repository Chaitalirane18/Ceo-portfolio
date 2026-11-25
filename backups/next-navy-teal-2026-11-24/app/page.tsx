import Effects from "@/components/Effects";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import Products from "@/components/sections/Products";
import Journey from "@/components/sections/Journey";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import Tech from "@/components/sections/Tech";
import Why from "@/components/sections/Why";
import Vision from "@/components/sections/Vision";
import Bio from "@/components/sections/Bio";
import Careers from "@/components/sections/Careers";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Effects />
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Expertise />
        <Products />
        <Journey />
        <Services />

        {/* Industries, technology and "Why Soulsoft" share one section, separated by rules */}
        <section className="section" id="industries" aria-labelledby="industries-title">
          <div className="container">
            <Industries />
            <Tech />
            <Why />
          </div>
        </section>

        <Vision />
        <Bio />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
