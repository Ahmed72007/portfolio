import 'highlight.js/styles/github-dark.css';
import './blog.css';
import { initSiteChrome, setMeta, setCanonical, setJsonLd } from './site.js';
import {
  getPublishedPostBySlug, excerpt, formatDate, toDate, escapeHtml, postUrl,
} from './posts.js';
import { renderPostBody } from './render.js';
import { SITE_URL } from './firebase.js';

initSiteChrome();

const $ = (id) => document.getElementById(id);

// Slug comes from /blog/<slug> (hosting rewrite) or /blog/post.html?slug=<slug>.
const params = new URLSearchParams(location.search);
const pathSlug = location.pathname.match(/^\/blog\/([a-z0-9-]+)\/?$/)?.[1];
const slug = pathSlug && pathSlug !== 'post' && pathSlug !== 'index' ? pathSlug : params.get('slug');
const previewId = params.get('preview'); // admin-only draft preview

async function loadPreview(id) {
  // Loaded only for previews, so visitors never download Firebase Auth.
  const { waitForAdmin } = await import('./auth.js');
  const user = await waitForAdmin();
  if (!user) return null;
  const { getPostById } = await import('./posts.js');
  return getPostById(id);
}

function showMissing() {
  $('post-loading').hidden = true;
  $('post-missing').hidden = false;
  document.title = 'Post not found | Ahmed Abdullah';
  setMeta('name', 'robots', 'noindex');
}

function applySeo(post) {
  const title = post.seoTitle || post.title;
  const description = excerpt(post, 160);
  const url = `${SITE_URL}${postUrl(post.slug)}`;
  document.title = `${title} | Ahmed Abdullah`;
  setMeta('name', 'description', description);
  setMeta('property', 'og:title', title);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:url', url);
  setMeta('property', 'og:image', post.coverUrl);
  setMeta('property', 'article:published_time', toDate(post.publishedAt)?.toISOString());
  setMeta('property', 'article:modified_time', toDate(post.updatedAt)?.toISOString());
  setMeta('name', 'twitter:title', title);
  setMeta('name', 'twitter:description', description);
  setMeta('name', 'twitter:image', post.coverUrl);
  setCanonical(url);
  if (post.status !== 'published') setMeta('name', 'robots', 'noindex');
  setJsonLd({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description,
    image: post.coverUrl || undefined,
    datePublished: toDate(post.publishedAt)?.toISOString(),
    dateModified: toDate(post.updatedAt)?.toISOString(),
    author: { '@type': 'Person', name: 'Ahmed Abdullah', url: SITE_URL },
    mainEntityOfPage: url,
    keywords: (post.tags || []).join(', '),
  });
}

function renderPost(post) {
  applySeo(post);

  $('post-title').textContent = post.title;
  $('post-description').textContent = post.description || '';
  $('post-description').hidden = !post.description;
  $('post-tags').innerHTML = (post.tags || [])
    .map((t) => `<a class="post-tag" href="/blog/?tag=${encodeURIComponent(t)}">#${escapeHtml(t)}</a>`)
    .join('');

  const date = post.publishedAt || post.updatedAt;
  $('post-meta').innerHTML = `
    <span class="post-author"><span class="avatar">AA</span> Ahmed Abdullah</span>
    <span><i class="far fa-calendar"></i> <time datetime="${toDate(date)?.toISOString() || ''}">${formatDate(date)}</time></span>
    <span><i class="far fa-clock"></i> ${post.readingTime || 1} min read</span>`;

  if (post.coverUrl) {
    $('post-cover-img').src = post.coverUrl;
    $('post-cover-img').alt = post.coverAlt || '';
    $('post-cover').hidden = false;
  }

  const headings = renderPostBody($('post-body'), post.content);
  if (headings.length >= 3) {
    $('toc-links').innerHTML = headings
      .map((h) => `<a href="#${h.id}" class="toc-l${h.level}">${escapeHtml(h.text)}</a>`)
      .join('');
    $('post-toc').hidden = false;
  }

  const shareUrl = encodeURIComponent(`${SITE_URL}${postUrl(post.slug)}`);
  const shareText = encodeURIComponent(post.title);
  $('share-x').href = `https://x.com/intent/post?url=${shareUrl}&text=${shareText}`;
  $('share-linkedin').href = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
  $('share-copy').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(decodeURIComponent(shareUrl));
      $('share-copy').innerHTML = '<i class="fas fa-check"></i>';
    } catch { /* ignore */ }
  });

  $('draft-banner').hidden = post.status === 'published';
  $('post-loading').hidden = true;
  $('post-root').hidden = false;

  if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView();
}

// Reading progress bar
const progress = $('reading-progress');
window.addEventListener('scroll', () => {
  const body = $('post-body');
  if (!body) return;
  const rect = body.getBoundingClientRect();
  const total = rect.height - window.innerHeight * 0.6;
  const pct = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
  progress.style.transform = `scaleX(${pct})`;
}, { passive: true });

try {
  const post = previewId
    ? await loadPreview(previewId)
    : slug ? await getPublishedPostBySlug(slug) : null;
  if (post) renderPost(post);
  else showMissing();
} catch (err) {
  console.error(err);
  showMissing();
}
