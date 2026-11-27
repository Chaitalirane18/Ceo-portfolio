/**
 * Technology badges. `logo` is a self-hosted official-style logo in /public/images/tech (devicon, MIT licence);
 * where no logo exists, `icon` falls back to a line icon from components/Icon.
 */
export type TechItem = { label: string; logo?: string; icon?: string };

export const tech: { group: string; items: TechItem[] }[] = [
  {
    group: "Backend",
    items: [
      { label: "Node.js", logo: "nodejs" },
      { label: "Python", logo: "python" },
      { label: "C#", logo: "csharp" },
      { label: ".NET Core", logo: "dotnetcore" },
      { label: "ASP.NET MVC", icon: "layers" },
      { label: "Web API", icon: "link" },
      { label: "PHP", logo: "php" },
    ],
  },
  {
    group: "Frontend",
    items: [
      { label: "React.js", logo: "react" },
      { label: "Nest.js", logo: "nestjs" },
      { label: "HTML", logo: "html5" },
      { label: "CSS", logo: "css3" },
      { label: "JavaScript", logo: "javascript" },
    ],
  },
  {
    group: "Mobile",
    items: [
      { label: "Flutter", logo: "flutter" },
      { label: "Android Application Development", logo: "android" },
    ],
  },
  {
    group: "Databases",
    items: [
      { label: "Microsoft SQL Server", logo: "microsoftsqlserver" },
      { label: "MySQL", logo: "mysql" },
      { label: "PostgreSQL", logo: "postgresql" },
    ],
  },
  {
    group: "Cloud & Infrastructure",
    items: [
      { label: "Microsoft Azure", logo: "azure" },
      { label: "IIS", icon: "monitor" },
      { label: "Cloud Hosting", icon: "cloud" },
      { label: "VPN", icon: "shield" },
    ],
  },
  {
    group: "Other",
    items: [
      { label: "REST APIs", icon: "link" },
      { label: "Third-Party Integrations", icon: "flow" },
      { label: "Git", logo: "git" },
      { label: "Database Architecture", icon: "database" },
    ],
  },
];
