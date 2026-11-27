import type { Metadata } from "next";
import { PageHero } from "@/components/site/Blocks";
import Contact from "@/components/portfolio/Contact";

export const metadata: Metadata = {
  title: "Contact | Prasad Godage",
  description: "Talk to Prasad Godage about software, partnerships or careers at Soulsoft Infotech, Sangamner.",
};

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        kicker="Contact"
        title="Let's build something better together."
        text="Software, partnerships, or a career at Soulsoft: I'd like to hear from you."
      />
      <Contact />
    </main>
  );
}
