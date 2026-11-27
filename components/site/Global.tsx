"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { store } from "@/lib/store";

/**
 * Behaviour shared by every page: smooth scroll, mobile menu, reveal-on-scroll, counters,
 * header state, progress bar, back-to-top, cursor glow, magnetic buttons, footer clock.
 * Re-runs on every route change so new pages get their animations.
 */
export default function Global() {
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type El = any;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
    const $ = (s: string): El => document.querySelector(s);
    const $$ = (s: string): El[] => [...document.querySelectorAll(s)];

    const ac = new AbortController();
    const opts = { signal: ac.signal };
    const cleanups: (() => void)[] = [() => ac.abort()];
    let alive = true;
    cleanups.push(() => { alive = false; });
    const loop = (fn: (t: number) => void) => {
      const f = (t: number) => { if (!alive) return; fn(t); requestAnimationFrame(f); };
      requestAnimationFrame(f);
    };

    // Missing photos: hide the broken-image icon so the soft gradient behind shows.
    const hideBroken = (img: HTMLImageElement) => { img.style.visibility = "hidden"; };
    document.addEventListener("error", (e) => { if ((e.target as El)?.tagName === "IMG") hideBroken(e.target as HTMLImageElement); }, { capture: true, signal: ac.signal });
    document.addEventListener("load", (e) => { if ((e.target as El)?.tagName === "IMG") (e.target as El).style.visibility = ""; }, { capture: true, signal: ac.signal });
    $$("img").forEach((im) => { if (im.complete && im.naturalWidth === 0 && im.getAttribute("src")) hideBroken(im); });

    // Smooth scroll
    if (!reduce) {
      const lenis = new Lenis({ lerp: 0.1 });
      store.lenis = lenis;
      loop((t) => lenis.raf(t));
      cleanups.push(() => { lenis.destroy(); store.lenis = null; });
    }

    // Mobile menu
    const menuBtn = $("#menuBtn"), nav = $("#nav");
    const closeMenu = () => { nav?.classList.remove("open"); menuBtn?.setAttribute("aria-expanded", "false"); };
    menuBtn?.addEventListener("click", () => menuBtn.setAttribute("aria-expanded", String(nav.classList.toggle("open"))), opts);
    $$("#nav a").forEach((a) => a.addEventListener("click", closeMenu, opts));

    // In-page anchors (#section) scroll smoothly
    $$('a[href^="#"]').forEach((a) => a.addEventListener("click", (e: Event) => {
      const id = a.getAttribute("href");
      const target = id === "#top" ? 0 : document.querySelector(id);
      if (target === null) return;
      e.preventDefault();
      closeMenu();
      const l = store.lenis;
      if (l) l.scrollTo(target, { offset: -70, duration: 1.4 });
      else if (target === 0) scrollTo({ top: 0 });
      else target.scrollIntoView();
    }, opts));

    // Split headings into words (rising-words effect). Idempotent: reads text, not markup.
    $$(".lines").forEach((el) => {
      if (el.dataset.split) return;
      el.dataset.split = "1";
      let i = 0;
      el.innerHTML = el.textContent.trim().split(/\s+/).map((w: string) => `<span class="wd"><span style="--i:${i++}">${w}</span></span>`).join(" ");
    });

    // Reveal on scroll
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    $$(".reveal, .lines").forEach((el) => io.observe(el));
    const unveilIo = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll(":scope > .unveil").forEach((u: El) => u.classList.add("in"));
      unveilIo.unobserve(e.target);
    }), { threshold: 0.2 });
    $$(".unveil").forEach((el) => unveilIo.observe(el.parentElement));

    // Count-up numbers
    const counter = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      counter.unobserve(e.target);
      const el = e.target as El, end = +el.dataset.count;
      if (reduce) return;
      const t0 = performance.now();
      const tick = (now: number) => {
        if (!alive) return;
        const p = Math.min((now - t0) / 1600, 1);
        el.textContent = Math.round(end * (1 - Math.pow(1 - p, 4)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }), { threshold: 0.6 });
    $$("[data-count]").forEach((el) => counter.observe(el));
    cleanups.push(() => { io.disconnect(); unveilIo.disconnect(); counter.disconnect(); });

    // Header, progress bar, back-to-top
    const header = $("#header"), progress = $("#progress"), toTop = $("#toTop");
    const darkSections = $$("[data-dark]");
    let ticking = false;
    const onScroll = () => {
      const y = scrollY, vh = innerHeight;
      header.classList.toggle("solid", header.dataset.solid === "1" || y > vh * 0.6);
      const darkAt = (yy: number) => darkSections.some((s) => { const r = s.getBoundingClientRect(); return r.top < yy && r.bottom > yy; });
      header.classList.toggle("on-dark", darkAt(38));
      progress.style.transform = `scaleX(${y / (document.documentElement.scrollHeight - vh) || 0})`;
      toTop.classList.toggle("show", y > 400);
      ticking = false;
    };
    const queue = () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } };
    addEventListener("scroll", queue, { passive: true, signal: ac.signal });
    addEventListener("resize", queue, opts);
    toTop.addEventListener("click", () => { const l = store.lenis; if (l) l.scrollTo(0, { duration: 1.4 }); else scrollTo({ top: 0 }); }, opts);
    onScroll();

    // Desktop-only: magnetic buttons + cursor glow
    if (finePointer && !reduce) {
      $$(".magnetic").forEach((el) => {
        el.addEventListener("mousemove", (e: MouseEvent) => {
          const b = el.getBoundingClientRect();
          el.style.transform = `translate(${(e.clientX - b.left - b.width / 2) * 0.3}px, ${(e.clientY - b.top - b.height / 2) * 0.3}px)`;
        }, opts);
        el.addEventListener("mouseleave", () => { el.style.transform = ""; }, opts);
      });
      const glow = $("#glow");
      addEventListener("mousemove", (e) => {
        glow.style.setProperty("--mx", e.clientX + "px");
        glow.style.setProperty("--my", e.clientY + "px");
        glow.classList.add("on");
      }, { passive: true, signal: ac.signal });
    }

    // Footer: year + live local time in India
    const yr = $("#yr"), clock = $("#clock");
    if (yr) yr.textContent = String(new Date().getFullYear());
    if (clock) {
      const fmt = new Intl.DateTimeFormat("en-IN", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hour12: true });
      const tick = () => { clock.textContent = fmt.format(new Date()).toUpperCase() + " IST, Sangamner"; };
      tick();
      const timer = setInterval(tick, 30000);
      cleanups.push(() => clearInterval(timer));
    }

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
