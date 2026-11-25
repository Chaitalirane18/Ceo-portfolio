"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = { children: ReactNode; className?: string; delay?: number; y?: number; x?: number; id?: string };

const M = motion as any;

/** Fade + slide in once when scrolled into view. Plain markup for reduced-motion users. */
export default function Reveal({ children, className, delay = 0, y = 28, x = 0, id }: Props) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className} id={id}>{children}</div>;
  return (
    <M.div
      className={className}
      id={id}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </M.div>
  );
}
