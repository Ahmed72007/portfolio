// Turn stored post HTML into safe, highlighted DOM for the public post page.
import DOMPurify from 'dompurify';
import hljs from 'highlight.js/lib/common';
import { slugify } from './posts.js';

const YOUTUBE_EMBED = /^https:\/\/(www\.)?(youtube\.com|youtube-nocookie\.com)\/embed\/[\w-]{6,}/;

// Only YouTube iframes survive sanitising.
DOMPurify.addHook('uponSanitizeElement', (node, data) => {
  if (data.tagName === 'iframe') {
    const src = node.getAttribute('src') || '';
    if (!YOUTUBE_EMBED.test(src)) node.parentNode?.removeChild(node);
  }
});

// External links open in a new tab, safely.
DOMPurify.addHook('afterSanitizeAttributes', (node) => {
  if (node.tagName === 'A' && node.getAttribute('href')) {
    const href = node.getAttribute('href');
    if (/^https?:\/\//i.test(href) && !href.startsWith(window.location.origin)) {
      node.setAttribute('target', '_blank');
      node.setAttribute('rel', 'noopener noreferrer nofollow');
    }
  }
});

export function sanitize(html) {
  return DOMPurify.sanitize(html || '', {
    ADD_TAGS: ['iframe'],
    ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'target', 'data-youtube-video', 'loading'],
    FORBID_ATTR: ['style'],
  });
}

/**
 * Render post HTML into `container`. Returns the list of headings
 * ({ id, text, level }) for a table of contents.
 */
export function renderPostBody(container, html) {
  container.innerHTML = sanitize(html);

  // Syntax highlighting
  container.querySelectorAll('pre code').forEach((el) => {
    const lang = [...el.classList].find((c) => c.startsWith('language-'))?.slice(9);
    if (lang && !hljs.getLanguage(lang)) el.classList.remove(`language-${lang}`);
    hljs.highlightElement(el);
    const pre = el.parentElement;
    pre.classList.add('code-block');
    const label = el.className.match(/language-([\w-]+)/)?.[1];
    if (label) pre.dataset.lang = label;
    const copy = document.createElement('button');
    copy.type = 'button';
    copy.className = 'code-copy';
    copy.setAttribute('aria-label', 'Copy code');
    copy.innerHTML = '<i class="fas fa-copy"></i>';
    copy.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(el.textContent);
        copy.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => (copy.innerHTML = '<i class="fas fa-copy"></i>'), 1500);
      } catch { /* clipboard blocked */ }
    });
    pre.appendChild(copy);
  });

  // Responsive YouTube embeds
  container.querySelectorAll('iframe').forEach((frame) => {
    frame.removeAttribute('width');
    frame.removeAttribute('height');
    frame.setAttribute('loading', 'lazy');
    frame.setAttribute('allowfullscreen', '');
    frame.setAttribute('title', frame.getAttribute('title') || 'YouTube video');
    const wrap = frame.closest('[data-youtube-video]') || frame;
    if (!wrap.classList.contains('video-embed')) {
      if (wrap === frame) {
        const div = document.createElement('div');
        frame.replaceWith(div);
        div.appendChild(frame);
        div.className = 'video-embed';
      } else {
        wrap.classList.add('video-embed');
      }
    }
  });

  container.querySelectorAll('img').forEach((img) => {
    img.loading = 'lazy';
    img.decoding = 'async';
  });

  // Wrap tables so they scroll on mobile
  container.querySelectorAll('table').forEach((t) => {
    const wrap = document.createElement('div');
    wrap.className = 'table-wrap';
    t.replaceWith(wrap);
    wrap.appendChild(t);
  });

  // Heading anchors
  const used = new Set();
  const headings = [];
  container.querySelectorAll('h2, h3').forEach((h) => {
    let id = slugify(h.textContent) || 'section';
    while (used.has(id)) id += '-x';
    used.add(id);
    h.id = id;
    headings.push({ id, text: h.textContent, level: Number(h.tagName[1]) });
  });
  return headings;
}
