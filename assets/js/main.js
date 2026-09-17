/* Evalunor — interactions */
(function () {
  'use strict';

  /* footer year */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* sticky nav state */
  var nav = document.getElementById('nav');
  var onScroll = function () {
    if (!nav) return;
    nav.classList.toggle('is-stuck', window.scrollY > 24);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* mobile menu */
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.classList.toggle('no-scroll', open);
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName !== 'A') return;
      links.classList.remove('is-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('no-scroll');
    });
  }

  /* scroll reveal */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el, i) {
      el.style.setProperty('--d', (i % 6) * 60 + 'ms');
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* headline rotator */
  var words = document.querySelectorAll('.rotator__word');
  if (words.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var i = 0;
    setInterval(function () {
      words[i].classList.remove('is-on');
      i = (i + 1) % words.length;
      words[i].classList.add('is-on');
    }, 2600);
  }

  /* accordion: one open at a time */
  var panels = document.querySelectorAll('.accordion details');
  panels.forEach(function (panel) {
    panel.addEventListener('toggle', function () {
      if (!panel.open) return;
      panels.forEach(function (other) { if (other !== panel) other.open = false; });
    });
  });

  /* contact form — front-end only until an endpoint is wired */
  var form = document.getElementById('contactForm');
  var note = document.getElementById('formNote');
  if (form && note) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('#name');
      var email = form.querySelector('#email');
      if (!name.value.trim() || !email.checkValidity()) {
        note.textContent = 'Add your name and a valid work email first.';
        note.className = 'form__note is-bad';
        return;
      }
      note.textContent = 'Got it. Wire this form to your endpoint in assets/js/main.js to start receiving leads.';
      note.className = 'form__note is-good';
      form.reset();
    });
  }
})();
