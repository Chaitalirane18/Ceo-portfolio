"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const M = motion as any;

/** Short branded loading screen, shown once per browser session. */
export default function Loader() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (reduce || sessionStorage.getItem("pg:loaded")) return;
    setShow(true);
  }, [reduce]);

  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => {
      sessionStorage.setItem("pg:loaded", "1");
      setShow(false);
    }, 1300);
    return () => clearTimeout(t);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <M.div className="loader" role="status" aria-label="Loading" exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
          <M.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="loader-logo"
          >
            <Image src="/images/soulsoft-logo-full.png" width={640} height={300} alt="Soulsoft Infotech" priority />
          </M.div>
          <M.span className="loader-bar" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.1, ease: "easeInOut" }} />
        </M.div>
      )}
    </AnimatePresence>
  );
}
