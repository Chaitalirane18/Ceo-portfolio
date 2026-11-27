/* ==========================================================================
   Merged Portfolio — script.js
   All vanilla JS: typewriter, particles, circle flip, scroll, nav, counters
   ========================================================================== */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  /* ===== TYPEWRITER ===== */
  const typeEl = document.getElementById("typewriter");
  if (typeEl) {
    const words = ["Founder & CEO", "Software Entrepreneur", "Technology & Business Strategist"];
    let wordIdx = 0, charIdx = 0, deleting = false;
    const TYPING_SPEED = 70, DELETE_SPEED = 35, PAUSE_END = 1600, PAUSE_BETWEEN = 350;

    function tick() {
      const word = words[wordIdx];
      if (!deleting) {
        charIdx++;
        typeEl.textContent = word.slice(0, charIdx);
        if (charIdx === word.length) {
          setTimeout(function () { deleting = true; tick(); }, PAUSE_END);
          return;
        }
        setTimeout(tick, TYPING_SPEED);
      } else {
        charIdx--;
        typeEl.textContent = word.slice(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          wordIdx = (wordIdx + 1) % words.length;
          setTimeout(tick, PAUSE_BETWEEN);
          return;
        }
        setTimeout(tick, DELETE_SPEED);
      }
    }
    setTimeout(tick, 600);
  }

  /* ===== PARTICLE CANVAS ===== */
  const canvas = document.getElementById("heroCanvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0, running = false, visible = true;
    let pts = [];
    const mouse = { x: -9999, y: -9999 };

    function resize() {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(90, Math.round((w * h) / 16000));
      pts = [];
      for (let i = 0; i < n; i++) {
        pts.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
        if (d < 140 && d > 0) { p.x += (dx / d) * 1.2; p.y += (dy / d) * 1.2; }
      }
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        ctx.fillStyle = "rgba(0, 114, 167, 0.55)";
        ctx.beginPath(); ctx.arc(a.x, a.y, 1.8, 0, 6.283); ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j], dd = Math.hypot(a.x - b.x, a.y - b.y);
          if (dd < 130) {
            ctx.strokeStyle = "rgba(0, 114, 167," + (0.2 * (1 - dd / 130)) + ")";
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (dm < 170) {
          ctx.strokeStyle = "rgba(240, 124, 0," + (0.5 * (1 - dm / 170)) + ")";
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
      }
    }

    function loop() { draw(); raf = requestAnimationFrame(loop); }
    function sync() {
      var should = visible && !document.hidden && !reduce;
      if (should && !running) { running = true; raf = requestAnimationFrame(loop); }
      if (!should && running) { running = false; cancelAnimationFrame(raf); }
    }

    resize();
    draw();

    var hero = document.getElementById("home");
    if (hero) {
      hero.addEventListener("pointermove", function (e) {
        var r = canvas.getBoundingClientRect();
        mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
      });
      hero.addEventListener("pointerleave", function () { mouse.x = mouse.y = -9999; });
    }

    var io = new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting; sync();
    });
    io.observe(canvas);
    addEventListener("resize", resize);
    document.addEventListener("visibilitychange", sync);
    sync();
  }

  /* ===== CIRCLE FLIP ===== */
  var circleCard = document.getElementById("circleCard");
  var flipHint = document.getElementById("flipHint");
  if (circleCard) {
    circleCard.addEventListener("click", function () {
      var flipped = circleCard.classList.toggle("is-flipped");
      circleCard.setAttribute("aria-pressed", flipped ? "true" : "false");
      if (flipHint) flipHint.classList.add("is-hidden");
    });
  }

  /* ===== CUTOUT FALLBACK ===== */
  var cutout = document.querySelector(".circle-photo");
  if (cutout) {
    cutout.addEventListener("error", function () {
      cutout.classList.add("has-error");
      var fallback = cutout.nextElementSibling;
      if (fallback) fallback.style.display = "block";
    });
  }

  /* ===== SCROLL PROGRESS ===== */
  var scrollBar = document.getElementById("scrollProgress");
  function updateProgress() {
    if (!scrollBar) return;
    var h = document.documentElement.scrollHeight - innerHeight;
    scrollBar.style.transform = "scaleX(" + (h > 0 ? scrollY / h : 0) + ")";
  }

  /* ===== STICKY HEADER ===== */
  var header = document.querySelector(".site-header");
  function updateHeader() {
    if (header) header.classList.toggle("is-scrolled", scrollY > 24);
  }

  /* ===== BACK TO TOP ===== */
  var btt = document.getElementById("backToTop");
  function updateBtt() {
    if (btt) btt.classList.toggle("is-visible", scrollY > 400);
  }
  if (btt) {
    btt.addEventListener("click", function () {
      scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* combined scroll handler (throttled via rAF) */
  var scrollTicking = false;
  addEventListener("scroll", function () {
    if (!scrollTicking) {
      requestAnimationFrame(function () {
        updateProgress();
        updateHeader();
        updateBtt();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });
  updateProgress();
  updateHeader();

  /* ===== MOBILE MENU ===== */
  var menuBtn = document.querySelector(".menu-toggle");
  var nav = document.getElementById("primary-nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    /* close on link click */
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ===== ACTIVE NAV (IntersectionObserver) ===== */
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll(".nav-list a[href^='#']");
  if (sections.length && navLinks.length) {
    var navObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (l) { l.classList.remove("is-active"); });
          var match = document.querySelector('.nav-list a[href="#' + entry.target.id + '"]');
          if (match) match.classList.add("is-active");
        }
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    sections.forEach(function (s) { navObs.observe(s); });
  }

  /* ===== REVEAL ON SCROLL ===== */
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length) {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(function (el) { revealObs.observe(el); });
  }

  /* ===== ANIMATED COUNTERS ===== */
  var counters = document.querySelectorAll("[data-count]");
  if (counters.length) {
    var countObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        countObs.unobserve(el);
        var target = parseInt(el.getAttribute("data-count"), 10);
        var duration = 1600, start = performance.now();
        function step(now) {
          var t = Math.min((now - start) / duration, 1);
          var ease = 1 - Math.pow(1 - t, 3); // ease-out cubic
          el.textContent = Math.round(target * ease);
          if (t < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.4 });
    counters.forEach(function (c) { countObs.observe(c); });
  }

  /* ===== CONTACT FORM → WHATSAPP ===== */
  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("f-name").value.trim();
      var phone = document.getElementById("f-phone").value.trim();
      var topic = document.getElementById("f-topic").value;
      var msg = document.getElementById("f-msg").value.trim();
      var status = document.getElementById("form-status");

      if (!name || !msg) {
        if (status) status.textContent = "Please fill in your name and message.";
        return;
      }

      var text = "Hello Prasad!\n\n"
        + "Name: " + name + "\n"
        + (phone ? "Phone: " + phone + "\n" : "")
        + "Topic: " + topic + "\n\n"
        + msg;

      var url = "https://wa.me/918055798679?text=" + encodeURIComponent(text);
      window.open(url, "_blank", "noopener");
      if (status) status.textContent = "Opening WhatsApp…";
    });
  }

  /* ===== FOOTER YEAR ===== */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
