"use client";

import { useEffect } from "react";
import { reachStages, roadVehicles } from "@/data/portfolio";
import { store } from "@/lib/store";

/**
 * Home-page-only behaviour: hero slices and depth, statement words, journey road,
 * reach zoom, left dot menu, product hover card. Shared behaviour lives in components/site/Global.tsx.
 */
export default function Behaviors() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type El = any;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
    const wide = matchMedia("(min-width: 821px)");
    const $ = (s: string): El => document.querySelector(s);
    const $$ = (s: string): El[] => [...document.querySelectorAll(s)];
    const clamp01 = (v: number) => Math.min(Math.max(v, 0), 1);
    const rise = (v: number, a: number, b: number) => clamp01((v - a) / (b - a));

    const ac = new AbortController();
    const opts = { signal: ac.signal };
    const cleanups: (() => void)[] = [() => ac.abort()];
    let alive = true;
    cleanups.push(() => { alive = false; });
    const loop = (fn: (t: number) => void) => {
      const f = (t: number) => { if (!alive) return; fn(t); requestAnimationFrame(f); };
      requestAnimationFrame(f);
    };

    // Use the background-removed photo for the hero when it exists; otherwise the normal photo.
    const probe = new Image();
    probe.onload = () => {
      document.documentElement.style.setProperty("--cutout", "url(/images/prasad-cutout.webp)");
      $("#photo")?.classList.remove("nocut");   // a real cut-out needs no arch frame
    };
    probe.src = "/images/prasad-cutout.webp";
    cleanups.push(() => document.documentElement.style.removeProperty("--cutout"));

    // Statement words (light-up effect)
    const statement = $("#statement");
    const wrapWords = (node: El) => {
      [...node.childNodes].forEach((n: El) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach((part: string) => {
            if (!part.trim()) { frag.append(part); return; }
            const s = document.createElement("span"); s.className = "w"; s.textContent = part; frag.append(s);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && !n.classList.contains("w")) wrapWords(n);
      });
    };
    if (!statement.dataset.split) { statement.dataset.split = "1"; wrapWords(statement); }
    const words = [...statement.querySelectorAll(".w")] as El[];

    // JOURNEY ROAD: S-curve through every card, drawn with scroll
    const roadWrap = $("#roadWrap"), road = $("#road"), roadBase = $("#roadBase"), roadDraw = $("#roadDraw"), marker = $("#marker");
    const rRows = $$(".r-row");
    let roadLen = 0;
    const buildRoad = () => {
      const wr = roadWrap.getBoundingClientRect(), w = wr.width, h = wr.height;
      const narrow = !wide.matches, cx = narrow ? 20 : w / 2;
      const pts: number[][] = [[cx, 0]];
      rRows.forEach((row, i) => {
        const r = row.getBoundingClientRect();
        const swing = i % 2 === 0 ? -1 : 1;
        pts.push([narrow ? cx : cx + swing * Math.min(70, w * 0.05), r.top - wr.top + r.height / 2]);
      });
      pts.push([cx, h]);
      let d = `M${pts[0][0]} ${pts[0][1]}`;
      for (let i = 1; i < pts.length; i++) {
        const [x0, y0] = pts[i - 1], [x1, y1] = pts[i], my = (y0 + y1) / 2;
        d += ` C${x0} ${my} ${x1} ${my} ${x1} ${y1}`;
      }
      road.setAttribute("viewBox", `0 0 ${w} ${h}`);
      roadBase.setAttribute("d", d); roadDraw.setAttribute("d", d);
      roadLen = roadDraw.getTotalLength();
      roadDraw.style.strokeDasharray = roadLen;
    };
    const veh = $("#veh"), vehPaths = [...veh.querySelectorAll("path")] as El[];
    let currentVeh = "walk";
    const setVehicle = (v: string) => {
      if (v === currentVeh) return;
      currentVeh = v;
      vehPaths.forEach((p) => p.classList.toggle("on", p.dataset.v === v));
      veh.classList.remove("pop"); void veh.getBBox(); veh.classList.add("pop");
    };
    const updateRoad = (vh: number) => {
      if (!roadLen) return;
      const wr = roadWrap.getBoundingClientRect();
      const p = reduce ? 1 : clamp01((vh * 0.6 - wr.top) / wr.height);
      roadDraw.style.strokeDashoffset = roadLen * (1 - p);
      const pt = roadDraw.getPointAtLength(roadLen * p);
      marker.setAttribute("transform", `translate(${pt.x} ${pt.y})`);
      let reached = 0;
      rRows.forEach((row) => {
        const r = row.getBoundingClientRect();
        const on = r.top - wr.top + r.height * 0.35 < pt.y;
        row.classList.toggle("on", on);
        if (on) reached++;
      });
      setVehicle(roadVehicles[Math.max(reached - 1, 0)]);
    };

    // REACH ZOOM. Positions are kilometres from Sangamner.
    const ZOOM_KEYS: number[][] = [[0, 9], [0.22, 40], [0.47, 1000], [0.72, 3800], [1, 30000]];
    const viewKmAt = (p: number) => {
      for (let i = 1; i < ZOOM_KEYS.length; i++) {
        const [p0, v0] = ZOOM_KEYS[i - 1], [p1, v1] = ZOOM_KEYS[i];
        if (p <= p1) return v0 * Math.pow(v1 / v0, (p - p0) / (p1 - p0));
      }
      return ZOOM_KEYS[ZOOM_KEYS.length - 1][1];
    };
    const reach = $("#reach"), cam = $("#cam"), zCap = $("#zCap");
    const zTown = $("#zTown"), zMap = $("#zMap"), zEarth = $("#zEarth"), zHere = $("#zHere"), zCore = $(".z-core");
    const zPlaces = $$(".z-place");
    const getStageButtons = () => $$("#zStages button");
    const TILE_KM = 4.6092, TOWN_X = -12.177, TOWN_Y = -11.901;
    let zStage = -1, zManual: number | null = null, capTimer: ReturnType<typeof setTimeout> | undefined;
    cleanups.push(() => clearTimeout(capTimer));
    const reachProgress = (vh: number) => {
      if (zManual !== null) return zManual;
      const r = reach.getBoundingClientRect();
      const scrollRange = r.height - vh;
      return scrollRange > 0 ? clamp01(-r.top / scrollRange) : 0;
    };
    const updateZoom = (vh: number) => {
      const p = reachProgress(vh);
      const W = cam.clientWidth, H = cam.clientHeight, ref = Math.min(W, H) * 0.9;
      const km = viewKmAt(p), ppk = ref / km;

      zTown.style.transform = `translate(${W / 2 + TOWN_X * ppk}px, ${H / 2 + TOWN_Y * ppk}px) scale(${ppk * TILE_KM / 256})`;
      zTown.style.opacity = String(1 - rise(km, 25, 70));
      zTown.style.visibility = km > 80 ? "hidden" : "visible";
      zMap.setAttribute("viewBox", `${-W / 2 / ppk} ${-H / 2 / ppk} ${W / ppk} ${H / ppk}`);
      zMap.style.opacity = String(rise(km, 20, 60) * (1 - rise(km, 4500, 8000)));
      zPlaces.forEach((el) => {
        const x = +el.dataset.x, y = +el.dataset.y, min = +el.dataset.min, max = +el.dataset.max;
        el.style.transform = `translate(${W / 2 + x * ppk}px, ${H / 2 + y * ppk}px)`;
        el.style.opacity = rise(km, min * 0.6, min) * (1 - rise(km, max, max * 1.6));
      });
      const hereOp = 1 - rise(km, 4500, 8000);
      zHere.style.opacity = hereOp; zCore.style.opacity = hereOp;
      const earth = ref * 0.96 * Math.pow(30000 / km, 0.7);
      zEarth.style.width = zEarth.style.height = earth + "px";
      zEarth.style.opacity = rise(km, 7500, 20000);

      let st = 0;
      reachStages.forEach((x, i) => { if (p >= x.at) st = i; });
      if (st === zStage) return;
      zStage = st;
      getStageButtons().forEach((b, i) => {
        b.classList.toggle("on", i === st);
        b.setAttribute("aria-pressed", String(i === st));
      });
      zCap.classList.add("swap");
      clearTimeout(capTimer);
      capTimer = setTimeout(() => {
        const c = reachStages[st];
        zCap.children[0].textContent = c.name;
        zCap.children[1].innerHTML = c.count;
        zCap.children[2].innerHTML = c.text;
        zCap.classList.remove("swap");
      }, 200);
    };
    if (reduce) { reach.style.height = "auto"; zManual = 1; }
    window.addEventListener("reach:stage-select", (event) => {
      const index = (event as CustomEvent<number>).detail;
      const stage = reachStages[index];
      if (!stage) {
        console.error("Received an invalid reach stage selection.", index);
        return;
      }
      const at = stage.at + 0.03;
      if (reduce) { zManual = at; updateZoom(innerHeight); return; }
      const y = reach.offsetTop + at * (reach.offsetHeight - innerHeight);
      const l = store.lenis;
      if (l) l.scrollTo(y, { duration: 1.2 }); else scrollTo({ top: y });
    }, opts);

    // LEFT DOT MENU
    const dotsNav = $("#dotsNav"), dots = [...dotsNav.querySelectorAll("a")] as El[];
    const dotTargets = dots.map((a) => document.querySelector(a.getAttribute("href")));
    const darkSections = $$("[data-dark]");
    let activeDot = -1, flashTimer: ReturnType<typeof setTimeout> | undefined;
    cleanups.push(() => clearTimeout(flashTimer));
    const updateDots = (vh: number) => {
      const mid = vh / 2;
      dotsNav.classList.toggle("show", scrollY > vh * 0.5);
      dotsNav.classList.toggle("on-dark", darkSections.some((s) => { const r = s.getBoundingClientRect(); return r.top < mid && r.bottom > mid; }));
      let cur = 0;
      dotTargets.forEach((t: El, i) => { if (t && t.getBoundingClientRect().top < mid) cur = i; });
      if (cur === activeDot) return;
      activeDot = cur;
      dots.forEach((d, i) => { d.classList.toggle("active", i === cur); d.classList.remove("flash"); });
      dots.forEach((d, i) => { if (i === cur) d.setAttribute("aria-current", "true"); else d.removeAttribute("aria-current"); });
      clearTimeout(flashTimer);
      dots[cur].classList.add("flash");
      flashTimer = setTimeout(() => dots[cur].classList.remove("flash"), 1600);
    };

    // Scroll-driven updates (one handler per frame)
    const storyImg = $("#storyImg");
    let lastY = scrollY, dir = -1, velocity = 0, ticking = false;
    const onScroll = () => {
      const y = scrollY, vh = innerHeight;
      if (y > lastY) dir = -1; else if (y < lastY) dir = 1;
      velocity = Math.min(Math.abs(y - lastY), 60);
      lastY = y;
      const r = statement.getBoundingClientRect();
      const lit = Math.round(clamp01((vh * 0.85 - r.top) / (r.height + vh * 0.35)) * words.length);
      words.forEach((w, i) => w.classList.toggle("lit", i < lit));
      if (!reduce && storyImg) {
        const sr = storyImg.parentElement.getBoundingClientRect();
        storyImg.style.transform = `translateY(${((sr.top + sr.height / 2) / vh - 0.5) * -12}%)`;
      }
      updateRoad(vh);
      updateZoom(vh);
      updateDots(vh);
      ticking = false;
    };
    const queue = () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } };
    addEventListener("scroll", queue, { passive: true, signal: ac.signal });
    addEventListener("resize", () => { buildRoad(); onScroll(); }, opts);
    addEventListener("load", () => { buildRoad(); onScroll(); }, opts);
    buildRoad();
    onScroll();

    // Giant name marquee: always moves from left to right, accelerates on scroll
    const track = $("#marquee");
    if (!reduce && track) {
      let x = -50;
      loop(() => {
        // Increasing x always moves content from left towards right
        x += (0.06 + velocity * 0.03);
        velocity *= 0.92;
        if (x >= 0) x -= 50;
        track.style.transform = `translateX(${x}%)`;
      });
    }

    // Slices photo: strips turn over on click; the card floats, tilts toward the mouse and sinks on scroll
    const stage = $("#stage"), photo = $("#photo"), hero = $("#top");
    const SLICES = 9;
    const sliceBack = "<em>Soulsoft Infotech · since 2012</em><i></i><b>Sangamner<br>to the world.</b><span>Simple, affordable software for businesses across India and abroad.</span>";
    if (photo && !photo.querySelector(".s-strip")) {
      for (let i = 0; i < SLICES; i++) {
        const strip = document.createElement("span");
        strip.className = "s-strip";
        const shift = `left: calc(${-i} * (100% - 1px) + .5px); width: calc(${SLICES} * (100% - 1px));`;
        strip.innerHTML = `<span class="s-side s-front"><span class="in" style="${shift}"></span></span>`
                        + `<span class="s-side s-back"><span class="in" style="${shift}">${sliceBack}</span></span>`;
        photo.appendChild(strip);
      }
    }
    const strips = photo ? [...photo.querySelectorAll(".s-strip")] as El[] : [];
    const hint = $("#sliceHint");
    if (hint) hint.textContent = finePointer ? "Click to turn over" : "Tap to turn over";
    if (photo) {
      photo.addEventListener("click", () => {
        const back = photo.classList.contains("flip");
        strips.forEach((st, i) => { st.style.transitionDelay = ((back ? SLICES - 1 - i : i) * 70) + "ms"; });
        photo.classList.toggle("flip");
        photo.setAttribute("aria-pressed", String(!back));
      }, opts);
    }

    const layers = [
      { el: $(".depth.d1"), base: "translate(-50%, -50%)", k: 36 },
      { el: $(".depth.d2"), base: "translate(-50%, -50%)", k: -22 },
      { el: $(".depth.d3"), base: "", k: 70 },
      { el: $(".depth.d4"), base: "", k: -55 },
      { el: $(".hero-side.left"), base: "", k: 14 },
      { el: $(".hero-side.right"), base: "", k: 18 },
    ];
    if (!reduce && hero) {
      let mx = 0, my = 0, ax = 0, ay = 0;
      if (finePointer) {
        hero.addEventListener("mousemove", (e: MouseEvent) => {
          const b = hero.getBoundingClientRect();
          mx = (e.clientX - b.left) / b.width * 2 - 1;
          my = (e.clientY - b.top) / b.height * 2 - 1;
        }, opts);
        hero.addEventListener("mouseleave", () => { mx = 0; my = 0; }, opts);
      }
      const t0 = performance.now();
      loop((now) => {
        ax += (mx - ax) * 0.08; ay += (my - ay) * 0.08;
        const sp = Math.min(scrollY / innerHeight, 1), t = (now - t0) / 1000;
        if (sp < 1) {
          if (photo) photo.style.transform = `rotateY(${Math.sin(t * .6) * 4 + ax * 12}deg) rotateX(${-ay * 5}deg)`;
          if (stage) stage.style.transform = `translate(-50%, ${sp * innerHeight * 0.15}px) scale(${1 - sp * 0.12})`;
          layers.forEach((l) => { if (l.el) l.el.style.transform = `${l.base} translate3d(${ax * l.k}px, ${ay * l.k * 0.6 + sp * l.k * 2}px, 0)`; });
        }
      });
    }

    // Product list: legacy mouse-following photo card fallback (if #pCard exists)
    if (finePointer && !reduce) {
      const card = $("#pCard") as HTMLElement | null;
      const pImg = $("#pImg") as HTMLImageElement | null;
      const pTag = $("#pTag");
      const pDesc = $("#pDesc");
      if (card && pImg && pTag && pDesc) {
        let cx = 0, cy = 0, tx = 0, ty = 0;
        $$(".p-row").forEach((row) => {
          row.addEventListener("mouseenter", () => {
            pImg.src = row.dataset.img || ""; pTag.textContent = row.dataset.tag || ""; pDesc.textContent = row.dataset.desc || "";
            card.classList.add("show");
          }, opts);
          row.addEventListener("mouseleave", () => card.classList.remove("show"), opts);
        });
        addEventListener("mousemove", (e) => { tx = e.clientX; ty = e.clientY; }, { passive: true, signal: ac.signal });
        addEventListener("scroll", () => { if (!document.querySelector(".p-row:hover")) card.classList.remove("show"); }, { passive: true, signal: ac.signal });
        loop(() => {
          cx += (tx - cx) * 0.12; cy += (ty - cy) * 0.12;
          card.style.left = cx + "px"; card.style.top = cy + "px";
        });
      }
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
