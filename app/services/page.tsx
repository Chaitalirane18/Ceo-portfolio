import type { Metadata } from "next";
import ServicesPageView from "@/components/portfolio/ServicesSections";
import { serviceCards } from "@/data/services";

export const metadata: Metadata = {
  title: "Services | Prasad Godage - Soulsoft Infotech",
  description:
    "Custom software development, enterprise ERP, API integration, legacy modernization, cloud deployment, and IT consulting by Prasad Godage and Soulsoft Infotech.",
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Soulsoft Infotech Software Services",
  itemListElement: serviceCards.map((s, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.description,
      provider: {
        "@type": "Organization",
        name: "Soulsoft Infotech Private Limited",
        url: "https://soulsoft.in",
      },
    },
  })),
};

export default function ServicesPage() {
  return (
    <main id="main" className="srv-page" data-dark>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <ServicesPageView />
    </main>
  );
}
