"use client";

import Icon from "@/components/Icon";
import { EVT_ENQUIRE } from "@/data/site";

/** "Request a demo": jumps to the contact form and pre-fills it for this product. */
export default function DemoLink({ product }: { product: string }) {
  return (
    <a
      className="text-link"
      href="#contact"
      onClick={() => window.dispatchEvent(new CustomEvent(EVT_ENQUIRE, { detail: product }))}
    >
      Request a demo <Icon name="arrow" />
      <span className="visually-hidden"> for {product}</span>
    </a>
  );
}
