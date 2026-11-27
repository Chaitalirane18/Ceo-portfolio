/**
 * Copy for the portfolio page. It matches portfolio-content.html section by section.
 * Any text wrapped in [square brackets] is a fact still to confirm; the page highlights it.
 * Photos are served from /public/images/stock/*.jpg. Missing files simply show a soft gradient.
 */

export const PHONE_DISPLAY = "+91 91467 98679";
export const PHONE_TEL = "+919146798679";
export const WHATSAPP = "919146798679"; // confirm this number is on WhatsApp

/** Pages in the header and footer. */
export const pages = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

/** Dot menu on the home page (desktop). One dot per section; href = section id. */
export const dotItems = [
  { href: "#top", label: "Home" },
  { href: "#story", label: "Story" },
  { href: "#journey", label: "Journey" },
  { href: "#reach", label: "Reach" },
  { href: "#products", label: "Products" },
  { href: "#community", label: "Community" },
];

export const people = [
  { img: "farm", alt: "Green rice fields", title: "Farmers & agri dealers", sub: "SoulAgroNexus · Shetkari Krushi" },
  { img: "shop", alt: "Shopkeeper in a small grocery store", title: "Shopkeepers", sub: "ShopCare POS · SoulConnect ERP" },
  { img: "pharmacy", alt: "Pharmacist taking medicine from a shelf", title: "Chemists", sub: "Pharma Chemist Vision Plus" },
  { img: "warehouse", alt: "Warehouse aisle with stocked shelves", title: "Manufacturers & distributors", sub: "SoulForge ERP" },
  { img: "team", alt: "Business team in a meeting", title: "Growing companies", sub: "Custom software · CRM · LMS" },
];

export const stats = [
  { value: "14", count: 14, label: "years building software" },
  { value: "12", count: 12, label: "products in use" },
  { value: "[X]", label: "states across India" },
  { value: "[X]", label: "countries abroad" },
];

export type Chapter = {
  year: string;
  title: string;
  text: string;
  place: string;
  img: string;
  alt: string;
  next?: boolean;
};

export const chapters: Chapter[] = [
  { year: "2008–10", title: "Learning the craft", text: "Bachelor's (2008) and Master's (2010) in Computer Science at PVP College, Pravaranagar.", place: "Pravaranagar · Sangamner", img: "town", alt: "Small town in India" },
  { year: "2012", title: "Soulsoft is born", text: "Started with a team of three, building billing and stock software for local shops and agri dealers.", place: "Sangamner", img: "shop", alt: "Shopkeeper in a small store" },
  { year: "[Year]", title: "A real engineering team", text: "Grew from 3 to [X] people, with teams in React, .NET Core and CodeIgniter, plus design and social media services.", place: "Sangamner", img: "team", alt: "Team meeting in an office" },
  { year: "[Year]", title: "Pune and Nashik offices", text: "Opened offices in two of Maharashtra's biggest business cities, closer to larger customers and talent.", place: "Pune · Nashik", img: "city", alt: "City skyline" },
  { year: "[Year]", title: "Across India", text: "12 products in use by agri dealers, retailers, chemists and manufacturers in [X] states.", place: "India", img: "farm", alt: "Green farm fields" },
  { year: "[Year]", title: "Beyond India", text: "First clients abroad, in [countries]. Software built in Sangamner, used around the world.", place: "Worldwide", img: "earth", alt: "Earth at night with city lights" },
  { year: "Next", title: "A 500-person tech company", text: "The vision: a 5,000 sq ft campus in Bangalore with 400–500 people, while staying rooted in Sangamner.", place: "Bangalore · Sangamner", img: "vision", alt: "Next chapter", next: true },
];

/** Vehicle shown on the road at each chapter, in order. */
export const roadVehicles = ["walk", "bike", "car", "car", "van", "van", "plane"];

/** Distances are kilometres from Sangamner (x east, y south). */
export const reachPlaces = [
  { x: -43.9, y: -46.5, min: 180, max: 2600, label: "Nashik", region: false },
  { x: -36.8, y: 116.8, min: 180, max: 2600, label: "Pune", region: false },
  { x: 130, y: 70, min: 500, max: 1400, label: "Maharashtra", region: true },
  { x: 520, y: -300, min: 2200, max: 4200, label: "India", region: true },
];

export const reachStages = [
  { at: 0, name: "Sangamner", count: "HQ · since 2012", text: "Where it all began. Still our head office, and still home." },
  { at: 0.25, name: "Maharashtra", count: "3 offices", text: "Sangamner, Pune and Nashik, serving businesses across the state." },
  { at: 0.5, name: "India", count: '<span class="ph">[X]</span> states', text: "Agri dealers, shops, pharmacies and manufacturers across India run on Soulsoft products." },
  { at: 0.78, name: "Abroad", count: '<span class="ph">[X]</span> countries', text: 'Projects delivered for clients in <span class="ph">[countries]</span>.' },
];

export const productRows = [
  { img: "farm", tag: "Agriculture", name: "SoulAgroNexus", meta: "Agriculture ERP", desc: "Cloud ERP for Krushi Seva Kendras, agri dealers and distributors." },
  { img: "shop", tag: "Retail & wholesale", name: "SoulConnect ERP", meta: "Retail & wholesale", desc: "Billing, stock, GST and accounts in one place." },
  { img: "warehouse", tag: "Manufacturing", name: "SoulForge ERP", meta: "Manufacturing", desc: "From raw material and production batches to finished goods." },
  { img: "pharmacy", tag: "Pharmacy", name: "Pharma Chemist Vision Plus", meta: "Pharmacy", desc: "Medical store billing with batch and expiry tracking built in." },
  { img: "team", tag: "Business tools", name: "Book My CRM · LMSElite", meta: "Business tools", desc: "CRM, learning management, documents and compliance for growing teams." },
];

export const beliefs = [
  { n: "01", title: "Software should fit the business.", text: "Not the other way around. We study how our customers really work before we write code." },
  { n: "02", title: "Affordable doesn't mean cheap.", text: "Small businesses deserve reliable tools at a price that makes sense, in India or anywhere." },
  { n: "03", title: "Talent is everywhere.", text: "Opportunity isn't. So we bring world-class work to small towns." },
];

export type Community = {
  img: string;
  alt: string;
  position?: string;
  icon: "network" | "code" | "briefcase" | "store" | "heart";
  badge: "role" | "soon" | "ongoing";
  badgeText: string;
  title: string;
  sub: string;
  text: string;
};

export const community: Community[] = [
  { img: "network", alt: "Business professionals listening at a seminar", icon: "network", badge: "role", badgeText: "Chairperson · since April 2026", title: "Saturday Club Global Trust", sub: "Sangamner Chapter · two-year term", text: "Saturday Club is a network of Marathi entrepreneurs and business professionals. As chapter Chairperson, I help local business owners connect, share experiences and find ways to work together." },
  { img: "meetup", alt: "People talking together at a small meetup", position: "center 35%", icon: "code", badge: "role", badgeText: "Organizer", title: "Sangamner IT Community", sub: "Networking meetups every three months", text: "Local IT professionals and technology entrepreneurs meet to exchange ideas and find chances to work together." },
  { img: "jobfair", alt: "Two people shaking hands", icon: "briefcase", badge: "soon", badgeText: "Upcoming · [Date]", title: "Job Expo", sub: "Connecting local talent with employers", text: "A personal initiative that brings students, recent graduates and job seekers together with local employers. Young people discover careers close to home, and small businesses meet candidates directly." },
  { img: "expo", alt: "Busy market street lined with shop stalls", icon: "store", badge: "soon", badgeText: "Upcoming · [Date]", title: "Business Expo", sub: "Showcasing local businesses", text: "Local entrepreneurs and small business owners showcase their products and services at exhibition stalls, speak directly with visitors and reach new customers." },
  { img: "community", alt: "Volunteers planting a tree together", position: "center 60%", icon: "heart", badge: "ongoing", badgeText: "Ongoing", title: "Community initiatives", sub: "With friends, wherever there's a need", text: "I also work with friends on local initiatives. When we see a need in our community, we come together and contribute where we can." },
];

