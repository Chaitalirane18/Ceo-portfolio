export type ExpertiseItem = {
  num: string;
  icon: string;
  title: string;
  text: string;
  scope: string;
  tags: string[];
};

export const expertise: ExpertiseItem[] = [
  {
    num: "01",
    icon: "code",
    title: "Software Product Development & Innovation",
    text: "Conceiving, architecting, and shipping scalable software products from inception to enterprise maturity.",
    scope: "End-to-end product lifecycle, modular architectures, and cloud-native software stacks.",
    tags: ["Product Lifecycle", "Scalable Architecture", "Cloud Native", "Clean Code"],
  },
  {
    num: "02",
    icon: "chart",
    title: "Business Strategy & Organizational Growth",
    text: "Aligning technology vision, corporate structure, and execution roadmaps for sustainable business expansion.",
    scope: "Market positioning, competitive moats, and operational scalability across multi-city branches.",
    tags: ["Market Expansion", "Strategic Roadmaps", "Organizational Scaling", "Sustainable Growth"],
  },
  {
    num: "03",
    icon: "layers",
    title: "ERP, SaaS & Enterprise Software Solutions",
    text: "Designing unified platforms that power core business operations, supply chains, billing, and accounting.",
    scope: "Multi-tenant SaaS architectures, comprehensive ERP modules, and high-concurrency transactional systems.",
    tags: ["Enterprise ERP", "SaaS Engineering", "Transactional Integrity", "GST & Compliance"],
  },
  
  {
    num: "04",
    icon: "rocket",
    title: "Digital Transformation & Technology Consulting",
    text: "Guiding traditional businesses through seamless modernization from paper-based and legacy tools to modern cloud systems.",
    scope: "Cloud migration strategies, legacy data extraction, change management, and modernized UX.",
    tags: ["Legacy Migration", "Cloud Modernization", "Digital Strategy", "Executive Advisory"],
  },
  {
    num: "05",
    icon: "compass",
    title: "Product Planning & Market Expansion",
    text: "Identifying unmet commercial needs and launching tailored software solutions across diverse industry verticals.",
    scope: "Product-market fit evaluation, feature scoping, agricultural & retail domain penetration.",
    tags: ["Domain Penetration", "Feature Scoping", "Market Validation", "Go-To-Market"],
  },
  {
    num: "06",
    icon: "brief",
    title: "Sales Strategy & Business Development",
    text: "Building direct distribution channels, channel partnerships, and long-term customer-focused commercial growth.",
    scope: "B2B client acquisition, institutional contracts, pricing models, and strategic alliance building.",
    tags: ["Client Acquisition", "Channel Partnerships", "Strategic Alliances", "Revenue Models"],
  },
  {
    num: "07",
    icon: "users",
    title: "Team Leadership & Project Execution",
    text: "Nurturing engineering and business teams to deliver high-quality technology solutions with discipline and purpose.",
    scope: "Mentorship, cross-functional delivery alignment, sprint governance, and client satisfaction.",
    tags: ["Engineering Culture", "Cross-Functional Alignment", "Sprint Governance", "Delivery Excellence"],
  },
];
