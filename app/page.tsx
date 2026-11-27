import Loader from "@/components/ui/Loader";
import CursorGlow from "@/components/ui/CursorGlow";
import BackToTop from "@/components/ui/BackToTop";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import ServicesMarquee from "@/components/sections/ServicesMarquee";
import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import Journey from "@/components/sections/Journey";
import Soulsoft from "@/components/sections/Soulsoft";
import ProductsServices from "@/components/sections/ProductsServices";
import Industries from "@/components/sections/Industries";
import Tech from "@/components/sections/Tech";
import Vision from "@/components/sections/Vision";
import Why from "@/components/sections/Why";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <CursorGlow />
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <ServicesMarquee />
        <About />
        <Expertise />
        <Journey />
        <Soulsoft />
        <ProductsServices />
        <Industries />
        <Tech />
        <Vision />
        <Why />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
