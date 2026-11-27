import type { CSSProperties } from "react";

/** Stagger for the fade-in: read by `.reveal` in globals.css through --delay. */
export const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

/** Zero-pad a number to two digits: 3 -> "03". */
export const pad = (n: number) => String(n).padStart(2, "0");
