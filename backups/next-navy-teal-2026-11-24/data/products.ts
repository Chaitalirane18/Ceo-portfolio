export type Product = {
  icon: string;
  name: string;
  category: string;
  desc: string;
  /** Capability tags. Every tag comes from the product descriptions supplied by Soulsoft. */
  features: string[];
};

export const products: Product[] = [
  { icon: "leaf", name: "SoulAgroNexus", category: "Agriculture Retail & Trading ERP", desc: "Cloud-based ERP for Krushi Seva Kendras, agricultural dealers and distributors.", features: ["Billing", "Inventory", "Accounting", "GST", "Purchase management", "Business reporting"] },
  { icon: "monitor", name: "Shetkari Krushi Software (SKS)", category: "Agriculture Retail POS Software", desc: "Desktop billing and inventory software for agricultural retailers.", features: ["Desktop billing", "Inventory"] },
  { icon: "link", name: "SoulConnect ERP", category: "Retail, Wholesale & Business Management", desc: "Integrated billing, accounting, inventory, GST and business management solutions.", features: ["Billing", "Accounting", "Inventory", "GST", "Business management"] },
  { icon: "factory", name: "SoulForge ERP", category: "Agricultural Manufacturing & Production ERP", desc: "Manufacturing ERP from raw materials through production batches to distribution.", features: ["Raw materials", "Production batches", "Packing", "Finished goods", "Inventory", "Distribution"] },
  { icon: "receipt", name: "ShopCare POS", category: "Retail & Wholesale Billing Software", desc: "Billing, inventory, sales, purchase and reporting for retail businesses.", features: ["Billing", "Inventory", "Sales", "Purchase", "Reporting"] },
  { icon: "pill", name: "Pharma Chemist Vision Plus", category: "Pharmacy Management Software", desc: "Medical store billing, inventory, batch tracking and expiry management.", features: ["Billing", "Inventory", "Batch tracking", "Expiry management"] },
  { icon: "files", name: "CompliDocX", category: "Document & Compliance Management", desc: "Digital document management and compliance workflow solutions.", features: ["Document management", "Compliance workflows"] },
  { icon: "cap", name: "LMSElite", category: "Learning Management System", desc: "Online learning, course management, student management and training solutions.", features: ["Online learning", "Course management", "Student management", "Training"] },
  { icon: "contact", name: "Book My CRM", category: "Customer Relationship Management", desc: "Lead management, sales tracking, customer follow-ups and relationship management.", features: ["Lead management", "Sales tracking", "Customer follow-ups", "Relationship management"] },
  { icon: "cal", name: "SoulEvents", category: "Event Management Software", desc: "Event planning, booking, billing and operational management.", features: ["Event planning", "Booking", "Billing", "Operations"] },
  { icon: "cart", name: "E-Commerce Solutions", category: "Online Store & Order Management", desc: "E-commerce platforms with product catalogs, order processing and payment integration.", features: ["Product catalogs", "Order processing", "Payment integration"] },
  { icon: "gov", name: "MLA Management Software", category: "Political & Constituency Management", desc: "Constituency management, citizen engagement, communication and activity tracking.", features: ["Constituency management", "Citizen engagement", "Communication", "Activity tracking"] },
];
