import type { CSSProperties } from "react";

/** Stagger for the fade-in: read by `.reveal` in globals.css through --delay. */
export const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;
