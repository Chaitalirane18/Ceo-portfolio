export type ServiceCategory = {
  id: string;
  num: string;
  title: string;
  tagline: string;
  icon: string;
  lead: string;
  items: string[];
  capabilities: { name: string; tag: string }[];
};

export const services: ServiceCategory[] = [
  {
    id: "software-development",
    num: "01",
    title: "Software Development",
    tagline: "Architecture, Scalability & Engineering",
    icon: "code",
    lead: "Engineering bespoke web, mobile, SaaS, and enterprise ERP systems architected for performance, security, and long-term business growth.",
    items: [
      "Custom Software Development",
      "Enterprise ERP Development",
      "SaaS Product Development",
      "Web Application Development",
      "Android & iOS Application Development",
    ],
    capabilities: [
      { name: "Custom Software Development", tag: "Tailored Architecture" },
      { name: "Enterprise ERP Development", tag: "Mission-Critical Systems" },
      { name: "SaaS Product Development", tag: "Multi-Tenant Cloud" },
      { name: "Web Application Development", tag: "High-Performance UX" },
      { name: "Android & iOS Application Development", tag: "Native & Flutter" },
    ],
  },
  {
    id: "integration-modernization",
    num: "02",
    title: "Integration & Modernization",
    tagline: "API Connectivity & Legacy Migration",
    icon: "flow",
    lead: "Connecting disparate systems, migrating legacy desktop software to modern cloud environments, and optimizing mission-critical database architectures.",
    items: [
      "Software Integration & API Development",
      "Legacy Software Modernization",
      "Desktop-to-Cloud Migration",
      "Third-Party Software Integration",
      "Database Development & Optimization",
    ],
    capabilities: [
      { name: "Software Integration & API Development", tag: "REST & Web APIs" },
      { name: "Legacy Software Modernization", tag: "System Overhaul" },
      { name: "Desktop-to-Cloud Migration", tag: "Cloud Transformation" },
      { name: "Third-Party Software Integration", tag: "Seamless Interop" },
      { name: "Database Development & Optimization", tag: "SQL Server & MySQL" },
    ],
  },
  {
    id: "cloud-automation",
    num: "03",
    title: "Cloud & Automation",
    tagline: "DevOps, Workflow Engines & AI",
    icon: "cloud",
    lead: "Deploying resilient hybrid and cloud architectures, automating manual operational pipelines, and empowering teams with data intelligence and AI solutions.",
    items: [
      "Cloud & On-Premise Deployment",
      "Business Process Automation",
      "Workflow Management Systems",
      "Data Analytics & Business Intelligence",
      "AI-Enabled Software Solutions",
    ],
    capabilities: [
      { name: "Cloud & On-Premise Deployment", tag: "Azure & Cloud Hosting" },
      { name: "Business Process Automation", tag: "Intelligent Workflows" },
      { name: "Workflow Management Systems", tag: "Operational Control" },
      { name: "Data Analytics & Business Intelligence", tag: "Actionable Insights" },
      { name: "AI-Enabled Software Solutions", tag: "Next-Gen Automation" },
    ],
  },
  {
    id: "business-technology-solutions",
    num: "04",
    title: "Business & Technology Solutions",
    tagline: "Consulting, CRM & Dedicated Teams",
    icon: "brief",
    lead: "Strategic IT consulting, industry-tailored platforms, CRM pipelines, and dedicated software development engineering teams delivering measurable ROI.",
    items: [
      "IT Consulting & Digital Transformation",
      "Customized Industry-Specific Applications",
      "CRM & Sales Automation",
      "Software Maintenance & Technical Support",
      "Dedicated Software Development Projects",
    ],
    capabilities: [
      { name: "IT Consulting & Digital Transformation", tag: "Executive Advisory" },
      { name: "Customized Industry-Specific Applications", tag: "Domain Expertise" },
      { name: "CRM & Sales Automation", tag: "Revenue Operations" },
      { name: "Software Maintenance & Technical Support", tag: "24/7 SLA Support" },
      { name: "Dedicated Software Development Projects", tag: "Turnkey Teams" },
    ],
  },
];
