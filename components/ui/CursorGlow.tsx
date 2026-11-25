"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/** Soft blue glow that trails the mouse. Fine pointers only; off for reduced motion. */
export default function CursorGlow() {
  const reduce = useReducedMotion();
  const [on, setOn] = useState(false);
  const x = useSpring(useMotionValue(-400), { stiffness: 120, damping: 20, mass: 0.6 });
  const y = useSpring(useMotionValue(-400), { stiffness: 120, damping: 20, mass: 0.6 });

  useEffect(() => {
    if (reduce || !matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setOn(true);
    const move = (e: PointerEvent) => { x.set(e.clientX - 200); y.set(e.clientY - 200); };
    addEventListener("pointermove", move, { passive: true });
    return () => removeEventListener("pointermove", move);
  }, [reduce, x, y]);

  if (!on) return null;
  return <motion.div className="cursor-glow" style={{ x, y }} aria-hidden="true" />;
}
