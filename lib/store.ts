import type Lenis from "lenis";

/** Shared handle so page-level effects can scroll with the same smooth-scroll instance. */
export const store: { lenis: Lenis | null } = { lenis: null };
