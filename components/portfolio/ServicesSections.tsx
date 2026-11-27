"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Workflow,
  Cloud,
  Briefcase,
  Check,
  Sprout,
  Factory,
  Store,
  HeartPulse,
  GraduationCap,
  ShoppingCart,
  Landmark,
  Building2,
  type LucideIcon,
} from "lucide-react";
import {
  serviceCards,
  serviceIndustries,
  serviceTechGroups,
  type Service,
  type ServiceIconKey,
  type IndustryItem,
  type IndustryIconKey,
  type TechGroupItem,
} from "@/data/services";
import { WHATSAPP } from "@/data/portfolio";

const M = motion as any;

const STAGGER_STEP = 0.08;

const SERVICE_ICONS: Record<ServiceIconKey, LucideIcon> = {
  Code2,
  Workflow,
  Cloud,
  Briefcase,
};

const INDUSTRY_ICONS: Record<IndustryIconKey, LucideIcon> = {
  Sprout,
  Factory,
  Store,
  HeartPulse,
  GraduationCap,
  ShoppingCart,
  Briefcase,
  Landmark,
  Building2,
};

export function PageHero() {
  return (
    <header className="srv-hero">
      <div className="srv-container">
        <div className="srv-eyebrow">
          <span className="srv-eyebrow-line" aria-hidden="true" />
          <span className="srv-kicker">Services</span>
        </div>
        <h1 className="srv-h1">
          Software built around{" "}
          <span className="srv-accent">your business.</span>
        </h1>
        <p className="srv-hero-sub">
          Soulsoft designs, builds and supports custom software, from a first
          idea to a system that runs the daily work of a company.
        </p>
      </div>
    </header>
  );
}

export function SectionHeader({
  label,
  title,
  id,
}: {
  label: string;
  title: string;
  id: string;
}) {
  return (
    <div className="srv-sec-head">
      <span className="srv-kicker">{label}</span>
      <h2 id={id} className="srv-h2">
        {title}
      </h2>
    </div>
  );
}

export function ServiceCard({
  service,
  index,
  reduce,
}: {
  service: Service;
  index: number;
  reduce: boolean;
}) {
  const Icon = SERVICE_ICONS[service.icon];

  return (
    <M.article
      className="srv-card"
      aria-labelledby={`srv-title-${service.id}`}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.45,
        delay: index * STAGGER_STEP,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="srv-card-top">
        <div className="srv-card-head">
          <span className="srv-icon-tile" aria-hidden="true">
            <Icon size={18} strokeWidth={1.8} />
          </span>
          <div>
            <div className="srv-card-meta">
              <span className="srv-num">{service.number}</span>
              <span className="srv-card-sub">{service.subtitle}</span>
            </div>
            <h3 id={`srv-title-${service.id}`} className="srv-card-title">
              {service.title}
            </h3>
          </div>
        </div>
      </div>

      <p className="srv-card-desc">{service.description}</p>

      <ul className="srv-points">
        {service.points.map((point) => (
          <li key={point}>
            <Check size={12} className="srv-check" aria-hidden="true" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </M.article>
  );
}

export function IndustryChip({ item }: { item: IndustryItem }) {
  const Icon = INDUSTRY_ICONS[item.icon];
  return (
    <li className="srv-chip">
      <Icon size={15} className="srv-chip-icon" aria-hidden="true" />
      <span>{item.label}</span>
    </li>
  );
}

export function TechGroup({ group }: { group: TechGroupItem }) {
  return (
    <div className="srv-tech-group">
      <h3 className="srv-tech-label">{group.label}</h3>
      <ul className="srv-tech-tags">
        {group.tools.map((tool) => (
          <li key={tool} className="srv-tech-tag">
            {tool}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="srv-section srv-cta-wrap" aria-labelledby="srv-cta-heading">
      <div className="srv-container">
        <div className="srv-cta-band">
          <h2 id="srv-cta-heading" className="srv-cta-title">
            Have a project in mind?
          </h2>
          <div className="srv-cta-actions">
            <Link href="/contact" className="srv-btn-primary">
              Start a conversation →
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="srv-btn-secondary"
            >
              WhatsApp me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPageView() {
  const reduce = useReducedMotion() ?? false;

  return (
    <>
      <PageHero />

      <section className="srv-section" aria-labelledby="srv-services-heading">
        <div className="srv-container">
          <SectionHeader
            id="srv-services-heading"
            label="Services"
            title="From a first idea to a system that runs the business."
          />
          <ul className="srv-grid">
            {serviceCards.map((service, i) => (
              <li key={service.id} className="srv-grid-item">
                <ServiceCard service={service} index={i} reduce={reduce} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="srv-section" aria-labelledby="srv-industries-heading">
        <div className="srv-container">
          <SectionHeader
            id="srv-industries-heading"
            label="Industries"
            title="Built for the sectors we know best."
          />
          <ul className="srv-chips">
            {serviceIndustries.map((item) => (
              <IndustryChip key={item.label} item={item} />
            ))}
          </ul>
        </div>
      </section>

      <section className="srv-section" aria-labelledby="srv-tech-heading">
        <div className="srv-container">
          <SectionHeader
            id="srv-tech-heading"
            label="Technology"
            title="The tools behind the software."
          />
          <div className="srv-tech-card">
            <div className="srv-tech-grid">
              {serviceTechGroups.map((group) => (
                <TechGroup key={group.label} group={group} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
