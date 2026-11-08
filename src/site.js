// Shared chrome for the blog/admin pages: navbar scroll state, mobile menu,
// scroll-to-top button and footer year. Mirrors the behaviour of app.js.
export function initSiteChrome() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const overlay = document.getElementById('mobile-nav-overlay');
  const scrollTop = document.getElementById('scroll-top');
  const year = document.getElementById('year');

  if (year) year.textContent = new Date().getFullYear();

  const onScroll = () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 50);
    scrollTop?.classList.toggle('visible', window.scrollY > 500);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const closeMenu = () => {
    hamburger?.classList.remove('active');
    navLinks?.classList.remove('mobile-open');
    overlay?.classList.remove('active');
    document.body.style.overflow = '';
  };

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('mobile-open');
    overlay.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('mobile-open') ? 'hidden' : '';
  });
  navLinks?.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
  overlay?.addEventListener('click', closeMenu);

  scrollTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/** Set or create a <meta> tag. `attr` is "name" or "property". */
export function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!content) { el?.remove(); return; }
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = href;
}

export function setJsonLd(data) {
  let el = document.getElementById('jsonld');
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = 'jsonld';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data).replace(/</g, '\\u003c');
}
