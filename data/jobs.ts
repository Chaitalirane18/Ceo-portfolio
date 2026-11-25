export type JobOpening = {
  id: string;
  title: string;
  genderBadge?: string;
  department: string;
  salary: string;
  perks: string[];
  location: string;
  type: string;
  duties: string[];
  skills: string[];
};

export const jobs: JobOpening[] = [
  {
    id: "telecaller-female",
    title: "Telecaller (Female)",
    genderBadge: "Female",
    department: "Inside Sales & Business Development",
    salary: "₹15,000 / month",
    perks: ["Performance-Based Incentives", "Lead Incentives"],
    location: "Sangamner, Maharashtra",
    type: "Full-Time",
    duties: [
      "Make outbound calls and generate leads.",
      "Follow up with prospective clients.",
      "Explain company products and services.",
      "Schedule client meetings and appointments.",
      "Coordinate with the sales team.",
    ],
    skills: [
      "Good communication skills.",
      "Basic MS Office and computer knowledge.",
      "Confidence in handling customer calls.",
    ],
  },
  {
    id: "field-sales-male",
    title: "Field Sales Executive (Male)",
    genderBadge: "Male",
    department: "Field Operations & Industry Client Acquisition",
    salary: "₹20,000 / month",
    perks: ["Performance Incentives", "TA / DA Allowances"],
    location: "Sangamner, Pune, Nashik",
    type: "Full-Time",
    duties: [
      "Identify and approach potential customers.",
      "Visit industries and prospective clients.",
      "Present and demonstrate company products.",
      "Build client relationships.",
      "Follow up on leads and achieve sales targets.",
    ],
    skills: [
      "Excellent communication and negotiation skills.",
      "Strong sales and convincing abilities.",
      "Basic computer knowledge.",
      "Willingness to travel.",
    ],
  },
  {
    id: "business-sales-analyst",
    title: "Business & Sales Analyst",
    genderBadge: "",
    department: "Market Intelligence & Growth Strategy",
    salary: "₹25,000 / month",
    perks: ["Quarterly Appraisals", "Strategic Exposure"],
    location: "Sangamner, Maharashtra",
    type: "Full-Time",
    duties: [
      "Research new business opportunities.",
      "Analyse market trends and competitors.",
      "Develop business growth and sales strategies.",
      "Analyse sales performance and reports.",
      "Identify potential industries and target markets.",
      "Support management in business planning.",
    ],
    skills: [
      "Strong analytical and problem-solving abilities.",
      "Good communication and presentation skills.",
      "Proficiency in MS Excel and PowerPoint.",
      "Knowledge of business development and sales strategies.",
    ],
  },
];

export const QUALIFICATION = "MBA";
