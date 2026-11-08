import './blog.css';
import { initSiteChrome } from './site.js';
import { listPublishedPosts, excerpt, formatDate, postUrl, escapeHtml } from './posts.js';

initSiteChrome();

const grid = document.getElementById('post-grid');
const statusEl = document.getElementById('blog-status');
const searchEl = document.getElementById('search');
const tagBar = document.getElementById('tag-filter');

const params = new URLSearchParams(location.search);
let activeTag = params.get('tag') || '';
let term = params.get('q') || '';
searchEl.value = term;

let allPosts = [];

function renderSkeletons() {
  grid.innerHTML = Array.from({ length: 3 }, () => `
    <div class="post-card glass-card is-loading" aria-hidden="true">
      <div class="skeleton skeleton-cover"></div>
      <div class="skeleton skeleton-line"></div>
      <div class="skeleton skeleton-line short"></div>
    </div>`).join('');
}

function syncUrl() {
  const p = new URLSearchParams();
  if (activeTag) p.set('tag', activeTag);
  if (term) p.set('q', term);
  const qs = p.toString();
  history.replaceState(null, '', qs ? `?${qs}` : location.pathname);
}

function renderTags() {
  const counts = new Map();
  allPosts.forEach((p) => (p.tags || []).forEach((t) => counts.set(t, (counts.get(t) || 0) + 1)));
  const tags = [...counts.keys()].sort((a, b) => counts.get(b) - counts.get(a) || a.localeCompare(b));
  if (!tags.length) { tagBar.innerHTML = ''; return; }
  tagBar.innerHTML = [
    `<button type="button" class="tag-chip ${!activeTag ? 'active' : ''}" data-tag="">All</button>`,
    ...tags.map((t) => `<button type="button" class="tag-chip ${t === activeTag ? 'active' : ''}" data-tag="${escapeHtml(t)}">#${escapeHtml(t)}</button>`),
  ].join('');
}

function matches(post) {
  if (activeTag && !(post.tags || []).includes(activeTag)) return false;
  if (!term) return true;
  const hay = [post.title, post.description, ...(post.tags || [])].join(' ').toLowerCase();
  return term.toLowerCase().split(/\s+/).every((w) => hay.includes(w));
}

function card(post) {
  const url = postUrl(post.slug);
  const cover = post.coverUrl
    ? `<img src="${escapeHtml(post.coverUrl)}" alt="${escapeHtml(post.coverAlt || '')}" loading="lazy">`
    : `<div class="post-card-placeholder"><i class="fas fa-code"></i></div>`;
  const tags = (post.tags || []).slice(0, 3)
    .map((t) => `<span class="post-tag">#${escapeHtml(t)}</span>`).join('');
  return `
    <article class="post-card glass-card">
      <a href="${url}" class="post-card-cover" tabindex="-1" aria-hidden="true">${cover}</a>
      <div class="post-card-body">
        <div class="post-card-tags">${tags}</div>
        <h2 class="post-card-title"><a href="${url}">${escapeHtml(post.title)}</a></h2>
        <p class="post-card-excerpt">${escapeHtml(excerpt(post))}</p>
        <div class="post-card-meta">
          <span><i class="far fa-calendar"></i> ${formatDate(post.publishedAt)}</span>
          <span><i class="far fa-clock"></i> ${post.readingTime || 1} min read</span>
        </div>
      </div>
    </article>`;
}

function render() {
  const shown = allPosts.filter(matches);
  grid.innerHTML = shown.map(card).join('');
  if (!allPosts.length) {
    statusEl.textContent = 'No posts yet — check back soon.';
  } else if (!shown.length) {
    statusEl.textContent = 'No posts match your search.';
  } else {
    statusEl.textContent = activeTag || term
      ? `${shown.length} post${shown.length === 1 ? '' : 's'} found`
      : '';
  }
}

tagBar.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-tag]');
  if (!btn) return;
  activeTag = btn.dataset.tag;
  renderTags();
  render();
  syncUrl();
});

let debounce;
searchEl.addEventListener('input', () => {
  clearTimeout(debounce);
  debounce = setTimeout(() => {
    term = searchEl.value.trim();
    render();
    syncUrl();
  }, 150);
});

renderSkeletons();
try {
  allPosts = await listPublishedPosts();
  renderTags();
  render();
} catch (err) {
  console.error(err);
  grid.innerHTML = '';
  statusEl.textContent = 'Could not load posts. Please try again later.';
}
