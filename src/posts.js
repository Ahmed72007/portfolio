// Firestore access and small helpers for blog posts.
import {
  collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc,
  query, where, orderBy, limit, serverTimestamp,
} from 'firebase/firestore/lite';
import { db } from './firebase.js';

const posts = collection(db, 'posts');

const withId = (snap) => ({ id: snap.id, ...snap.data() });

/** Published posts, newest first (public). */
export async function listPublishedPosts() {
  const q = query(posts, where('status', '==', 'published'), orderBy('publishedAt', 'desc'));
  return (await getDocs(q)).docs.map(withId);
}

/** One published post by slug (public). */
export async function getPublishedPostBySlug(slug) {
  const q = query(posts, where('status', '==', 'published'), where('slug', '==', slug), limit(1));
  const snap = await getDocs(q);
  return snap.empty ? null : withId(snap.docs[0]);
}

/** Every post including drafts (admin only — rules reject this for anyone else). */
export async function listAllPosts() {
  const q = query(posts, orderBy('updatedAt', 'desc'));
  return (await getDocs(q)).docs.map(withId);
}

export async function getPostById(id) {
  const snap = await getDoc(doc(db, 'posts', id));
  return snap.exists() ? withId(snap) : null;
}

/** True if another post already uses this slug (admin only). */
export async function isSlugTaken(slug, exceptId) {
  const snap = await getDocs(query(posts, where('slug', '==', slug), limit(2)));
  return snap.docs.some((d) => d.id !== exceptId);
}

/**
 * Create or update a post. `data` holds the editable fields; timestamps are
 * managed here. `existing` is the stored post when editing (or null).
 */
export async function savePost(data, existing) {
  const now = serverTimestamp();
  const publishedAt =
    data.status === 'published' ? (existing?.publishedAt ?? now) : (existing?.publishedAt ?? null);
  const payload = { ...data, updatedAt: now, publishedAt };
  if (existing) {
    await updateDoc(doc(db, 'posts', existing.id), payload);
    return existing.id;
  }
  const ref = await addDoc(posts, { ...payload, createdAt: now });
  return ref.id;
}

export function deletePost(id) {
  return deleteDoc(doc(db, 'posts', id));
}

// ── Helpers ──────────────────────────────────────────────

export function slugify(text) {
  return String(text)
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 100)
    .replace(/-+$/, '');
}

export function htmlToText(html) {
  // DOMParser documents are inert: no scripts run and no images load.
  const parsed = new DOMParser().parseFromString(html || '', 'text/html');
  return (parsed.body.textContent || '').replace(/\s+/g, ' ').trim();
}

/** Minutes to read at ~220 words per minute (at least 1). */
export function readingTime(html) {
  const words = htmlToText(html).split(' ').filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function excerpt(post, max = 180) {
  if (post.description) return post.description;
  const text = htmlToText(post.content || '');
  return text.length > max ? text.slice(0, max).replace(/\s+\S*$/, '') + '…' : text;
}

export function toDate(ts) {
  if (!ts) return null;
  if (typeof ts.toDate === 'function') return ts.toDate();
  return new Date(ts);
}

export function formatDate(ts) {
  const d = toDate(ts);
  return d ? d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '';
}

export function postUrl(slug) {
  return `/blog/${encodeURIComponent(slug)}`;
}

export function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}
