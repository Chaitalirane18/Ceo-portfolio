import { Flag, Home, Sparkles, Users, type LucideIcon } from "lucide-react";

export type MilestoneCategory = "Company" | "Leadership" | "Product" | "Community";

export type Milestone = {
  id: string;
  year: number | null;         // null = date TBD
  month?: string;
  category: MilestoneCategory;
  icon: LucideIcon;
  title: string;
  text: string;
  image?: string;
  link?: { label: string; href: string };
};

export type Partner = { name: string; text: string; link?: string };
export type Award   = { title: string; organization: string; year: string; link?: string };

export const STATS = [
  { value: 15, suffix: "+", label: "Years in business" },
  { value: 12, suffix: "",  label: "Products shipped"  },
  { value: 3,  suffix: "",  label: "Cities served"     },
  { value: 50, suffix: "+", label: "Team members"      },
] as const;

export const milestones: Milestone[] = [
  {
    id: "founded",
    year: 2012,
    category: "Company",
    icon: Flag,
    title: "Founded Soulsoft Infotech",
    text: "Built a software company in Sangamner, bringing modern technology and tech careers to a small town.",
  },
  {
    id: "chairperson",
    year: 2026,
    month: "April",
    category: "Leadership",
    icon: Users,
    title: "Chairperson, Saturday Club Global Trust Sangamner",
    text: "Chosen as Secretary of the Sangamner chapter, before becoming its Chairperson in April 2026.",
  },
  {
    id: "new-office",
    year: null,
    category: "Company",
    icon: Home,
    title: "A new Soulsoft office",
    text: "Opened a new office for the growing team, starting with a traditional worship ceremony.",
  },
  {
    id: "new-services",
    year: null,
    category: "Product",
    icon: Sparkles,
    title: "New services",
    text: "Started social media and website design teams, widening what Soulsoft offers its customers.",
  },
];

export const partners: Partner[] = [
  { name: "SoulHitech",   text: "Software for hotels and resorts" },
  { name: "Udyog Expert", text: "Branding, web development and consulting" },
];

export const awards: Award[] = [];
