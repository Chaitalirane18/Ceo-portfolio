"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

type Props = { href: string; className?: string; children: ReactNode; target?: string; rel?: string; strength?: number; onClick?: () => void };

/** Link that leans toward the pointer. Static for reduced-motion users. */
export default function MagneticButton({ href, className = "", children, target, rel, strength = 0.25, onClick }: Props) {
  const reduce = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 15 });

  if (reduce) return <a className={className} href={href} target={target} rel={rel} onClick={onClick}>{children}</a>;
  const move = (e: MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const leave = () => { x.set(0); y.set(0); };
  return (
    <motion.a className={className} href={href} target={target} rel={rel} style={{ x, y }} onMouseMove={move} onMouseLeave={leave} onClick={onClick}>
      {children}
    </motion.a>
  );
}
