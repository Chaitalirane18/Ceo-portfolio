import Dots from "@/components/portfolio/Dots";
import { Hero, Statement } from "@/components/portfolio/Hero";
import { Story, Numbers } from "@/components/portfolio/Story";
import Journey from "@/components/portfolio/Journey";
import Reach from "@/components/portfolio/Reach";
import { Products, Beliefs } from "@/components/portfolio/Products";
import { Community } from "@/components/portfolio/Community";
import Behaviors from "@/components/portfolio/Behaviors";
import { Cta } from "@/components/site/Blocks";

export default function Home() {
  return (
    <>
      <Dots />
      <main id="main">
        <Hero />
        <Statement />
        <Story />
        <Numbers />
        <Journey />
        <Reach />
        <Products />
        <Beliefs />
        <Community />
        <Cta />
      </main>
      <Behaviors />
    </>
  );
}
