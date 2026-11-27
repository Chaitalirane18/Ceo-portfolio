import type { Metadata } from "next";
import { Cta } from "@/components/site/Blocks";
import { Expertise, Why } from "@/components/portfolio/Business";
import { Community, Voices } from "@/components/portfolio/Community";
import { Recognition } from "@/components/portfolio/Recognition";
import LeadershipHero from "@/components/portfolio/LeadershipHero";

export const metadata: Metadata = {
  title: "About | Prasad Godage — Founder & CEO, Soulsoft Infotech",
  description: "Prasad Godage, Founder & CEO of Soulsoft Infotech. 15+ years building enterprise software for Indian businesses. Expertise in ERP, SaaS, agri-tech and community leadership in Sangamner.",
};

export default function About() {
  return (
    <>
      <main id="main">
        <LeadershipHero />
        <Expertise />
        <Community />
        <Recognition />
        <Why />
        <Voices />
        <Cta />
      </main>
    </>
  );
}
