/* Prasad Godage portfolio — behaviour only (all styling lives in styles.css). */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---- footer year ---- */
  var year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---- sticky header shadow ---- */
  var header = $(".site-header");
  function onScroll() { header.classList.toggle("is-scrolled", window.scrollY > 8); }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- mobile menu ---- */
  var toggle = $(".menu-toggle");
  var nav = $("#primary-nav");
  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  toggle.addEventListener("click", function () { setMenu(toggle.getAttribute("aria-expanded") !== "true"); });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") { setMenu(false); toggle.focus(); }
  });
  window.matchMedia("(min-width: 1041px)").addEventListener("change", function () { setMenu(false); });

  /* ---- portrait: fall back to a clean placeholder if the image is missing ---- */
  var portrait = $(".portrait-frame");
  var img = portrait && $("img", portrait);
  function markEmpty() { portrait.classList.add("is-empty"); }
  if (img) {
    img.addEventListener("error", markEmpty);
    if (img.complete && img.naturalWidth === 0) markEmpty();
  }

  /* ---- active nav link ---- */
  var links = $$(".nav-list a[href^='#']:not(.btn)");
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) { a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach(function (s) { spy.observe(s); });
  }

  /* ---- fade-in on scroll ---- */
  var reveals = $$(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var revealer = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("is-visible");
        revealer.unobserve(en.target);
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { revealer.observe(el); });
  }

  /* ---- animated counters (final value is already in the HTML) ---- */
  var counters = $$("[data-count]");
  function runCounter(el) {
    var to = Number(el.dataset.count);
    if (reduceMotion) { el.textContent = to; return; }
    var t0 = null, dur = 1400;
    el.textContent = "0";
    function step(t) {
      if (t0 === null) t0 = t;
      var p = Math.min((t - t0) / dur, 1);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window && !reduceMotion) {
    var counter = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        runCounter(en.target);
        counter.unobserve(en.target);
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { counter.observe(el); });
  }

  /* ---- "Request a demo" pre-fills the contact form ---- */
  var topic = $("#f-topic");
  var message = $("#f-msg");
  $$("[data-demo]").forEach(function (a) {
    a.addEventListener("click", function () {
      topic.value = "Product demo";
      message.value = "Hello, I would like to request a demo of " + a.dataset.demo + ".";
      setTimeout(function () { $("#f-name").focus({ preventScroll: true }); }, 700);
    });
  });

  /* ---- contact form -> WhatsApp ---- */
  var form = $("#contact-form");
  var status = $("#form-status");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = form.elements.name.value.trim();
    var phone = form.elements.phone.value.trim();
    var msg = form.elements.message.value.trim();
    if (!name || !msg) {
      status.textContent = "Please enter your name and a message.";
      (name ? form.elements.message : form.elements.name).focus();
      return;
    }
    var text = "Hello Prasad, I am " + name + (phone ? " (" + phone + ")" : "") + ".\nInterested in: " + form.elements.topic.value + "\n\n" + msg;
    window.open("https://wa.me/918055798679?text=" + encodeURIComponent(text), "_blank", "noopener");
    status.textContent = "Opening WhatsApp. Press send there to deliver your message.";
  });
})();
