import type { Metadata, Viewport } from "next";
import "./site.css";
import "./sections.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Global from "@/components/site/Global";

const title = "Prasad Godage | Founder & CEO, Soulsoft Infotech";
const description =
  "Prasad Godage founded Soulsoft Infotech in Sangamner in 2012. Today Soulsoft builds simple, affordable business software for customers across India and abroad.";

export const metadata: Metadata = {
  metadataBase: new URL("https://prasadgodage.com"),
  title,
  description,
  keywords: ["Prasad Godage", "Soulsoft Infotech", "ERP software", "SaaS", "business automation", "software entrepreneur", "Sangamner"],
  authors: [{ name: "Prasad Shivaji Godage" }],
  openGraph: {
    type: "profile",
    siteName: "Prasad Godage",
    locale: "en_IN",
    title,
    description: "From Sangamner to India and the world: simple software for real businesses, since 2012.",
    url: "https://prasadgodage.com/",
    images: [{ url: "/images/soulsoft-logo-full.png", width: 640, height: 300, alt: "Soulsoft Infotech" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/soulsoft-logo-full.png"], title, description: "From Sangamner to India and the world: simple software for real businesses, since 2012." },
  icons: { icon: "/images/soulsoft-logo-full.png", apple: "/images/soulsoft-logo-full.png" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#dcd8d3" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Prasad Shivaji Godage",
  jobTitle: "Founder & CEO",
  url: "https://prasadgodage.com",
  alumniOf: "PVP College, Pravaranagar",
  memberOf: { "@type": "Organization", name: "Saturday Club Global Trust, Sangamner Chapter" },
  worksFor: {
    "@type": "Organization",
    name: "Soulsoft Infotech Private Limited",
    url: "https://soulsoft.in",
    address: { "@type": "PostalAddress", addressLocality: "Sangamner", addressRegion: "Maharashtra", addressCountry: "IN" },
  },
};

// Marks the page as script-enabled before first paint, so content is only hidden for animation when JS can reveal it.
const jsFlag = `document.documentElement.classList.add('js')`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Inter+Tight:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Global />
      </body>
    </html>
  );
}
