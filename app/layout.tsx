import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-jakarta" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter" });

const title = "Prasad Shivaji Godage | Founder & CEO, Soulsoft Infotech";
const description =
  "Prasad Godage is the Founder & CEO of Soulsoft Infotech Private Limited, Sangamner, Maharashtra. 15+ years building ERP, SaaS and business automation software across agriculture, retail, manufacturing and more.";

export const metadata: Metadata = {
  metadataBase: new URL("https://prasadgodage.com"),
  title,
  description,
  keywords: ["Prasad Godage", "Soulsoft Infotech", "ERP software", "SaaS", "business automation", "software entrepreneur", "Sangamner"],
  authors: [{ name: "Prasad Shivaji Godage" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Prasad Godage",
    locale: "en_IN",
    title: "Prasad Godage | Founder & CEO, Soulsoft Infotech",
    description: "Building simple software for complex businesses. 15+ years in ERP, SaaS and business automation.",
    url: "https://prasadgodage.com/",
    images: [{ url: "/images/soulsoft-logo-full.png", width: 640, height: 300, alt: "Soulsoft Infotech – Customised Software Solutions" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/soulsoft-logo-full.png"], title: "Prasad Godage | Founder & CEO, Soulsoft Infotech", description: "Building simple software for complex businesses." },
  icons: { icon: "/images/soulsoft-logo-full.png", apple: "/images/soulsoft-logo-full.png" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#f6fafd" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Prasad Shivaji Godage",
  jobTitle: "Founder & CEO",
  url: "https://prasadgodage.com",
  worksFor: {
    "@type": "Organization",
    name: "Soulsoft Infotech Private Limited",
    url: "https://soulsoft.in",
    address: { "@type": "PostalAddress", addressLocality: "Sangamner", addressRegion: "Maharashtra", addressCountry: "IN" },
  },
};

// Marks the page as script-enabled before first paint so the fade-in starts hidden only when JS can reveal it.
const jsFlag = `document.documentElement.classList.add('js')`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
