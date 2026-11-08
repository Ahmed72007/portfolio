import 'highlight.js/styles/github-dark.css';
import './blog.css';
import './admin.css';
import { onAdminChange, signIn, logOut } from './auth.js';
import {
  listAllPosts, getPostById, savePost, deletePost, isSlugTaken,
  slugify, readingTime, formatDate, postUrl, escapeHtml, htmlToText,
} from './posts.js';
import { uploadImage, deleteImage } from './storage.js';
import { createEditor } from './editor.js';
import { SITE_URL } from './firebase.js';

const $ = (id) => document.getElementById(id);
const views = ['view-loading', 'view-login', 'view-dashboard', 'view-editor'];
function show(view) {
  views.forEach((v) => ($(v).hidden = v !== view));
  window.scrollTo(0, 0);
}

// ── Toast & modal ────────────────────────────────────────
let toastTimer;
function notify(msg) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3200);
}

function explain(err) {
  console.error(err);
  const code = err?.code || '';
  if (code.includes('permission-denied') || code.includes('unauthorized')) {
    return 'Permission denied by the security rules. Is your UID set in firestore.rules / storage.rules and deployed?';
  }
  if (code.includes('failed-precondition')) return 'Firestore needs an index — deploy firestore.indexes.json.';
  return err?.message || 'Something went wrong.';
}

/** Small promise-based modal. Returns field values, or null if cancelled. */
function ask({ title, fields, extraButton }) {
  const dialog = $('modal');
  const form = $('modal-form');
  $('modal-title').textContent = title;
  const box = $('modal-fields');
  box.innerHTML = '';
  fields.forEach((f) => {
    const label = document.createElement('label');
    label.className = 'field';
    label.innerHTML = `<span>${escapeHtml(f.label)}</span>`;
    const input = document.createElement('input');
    input.type = f.type || 'text';
    input.name = f.name;
    if (f.accept) input.accept = f.accept;
    if (f.placeholder) input.placeholder = f.placeholder;
    if (f.value) input.value = f.value;
    label.appendChild(input);
    box.appendChild(label);
  });
  let extra = form.querySelector('.modal-extra');
  extra?.remove();
  if (extraButton) {
    extra = document.createElement('button');
    extra.type = 'button';
    extra.className = 'btn btn-danger btn-sm modal-extra';
    extra.textContent = extraButton.label;
    form.querySelector('.modal-actions').prepend(extra);
  }

  return new Promise((resolve) => {
    const done = (value) => {
      form.removeEventListener('submit', onSubmit);
      $('modal-cancel').removeEventListener('click', onCancel);
      dialog.removeEventListener('cancel', onCancel);
      extra?.removeEventListener('click', onExtra);
      if (dialog.open) dialog.close();
      resolve(value);
    };
    const onSubmit = (e) => {
      e.preventDefault();
      const out = {};
      box.querySelectorAll('input').forEach((i) => {
        out[i.name] = i.type === 'file' ? i.files[0] || null : i.value;
      });
      done(out);
    };
    const onCancel = (e) => { e?.preventDefault(); done(null); };
    const onExtra = () => done({ action: extraButton.value });
    form.addEventListener('submit', onSubmit);
    $('modal-cancel').addEventListener('click', onCancel);
    dialog.addEventListener('cancel', onCancel);
    extra?.addEventListener('click', onExtra);
    dialog.showModal();
    box.querySelector('input:not([type=file])')?.focus();
  });
}

// ── Auth ─────────────────────────────────────────────────
let isAdmin = false;

$('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = $('login-submit');
  $('login-error').textContent = '';
  btn.disabled = true;
  try {
    await signIn($('login-email').value.trim(), $('login-password').value);
  } catch (err) {
    const code = err?.code || '';
    $('login-error').textContent =
      code.includes('invalid-credential') || code.includes('wrong-password') || code.includes('user-not-found')
        ? 'Incorrect email or password.'
        : code.includes('too-many-requests')
          ? 'Too many attempts. Try again later.'
          : explain(err);
  } finally {
    btn.disabled = false;
  }
});

$('signout').addEventListener('click', async () => {
  if (dirty && !confirm('You have unsaved changes. Sign out anyway?')) return;
  dirty = false;
  await logOut();
});

onAdminChange(async (user, admin) => {
  isAdmin = admin;
  $('signout').hidden = !user;
  if (user && !admin) {
    await logOut();
    show('view-login');
    $('login-error').textContent = 'This account is not the blog admin.';
    return;
  }
  if (!user) {
    show('view-login');
    return;
  }
  $('login-password').value = '';
  route();
});

// ── Routing (#/, #/new, #/edit/<id>) ────────────────────
let skipNextRoute = false;
let lastHash = location.hash;

window.addEventListener('hashchange', () => {
  if (skipNextRoute) { skipNextRoute = false; lastHash = location.hash; return; }
  if (dirty && !confirm('Discard unsaved changes?')) {
    skipNextRoute = true;
    location.hash = lastHash;
    return;
  }
  dirty = false;
  lastHash = location.hash;
  route();
});

function route() {
  if (!isAdmin) return;
  const h = location.hash.replace(/^#/, '') || '/';
  if (h === '/new') return openEditor(null);
  const m = h.match(/^\/edit\/([\w-]+)$/);
  if (m) return openEditor(m[1]);
  return showDashboard();
}

// ── Dashboard ────────────────────────────────────────────
let allPosts = [];
let filter = 'all';

async function showDashboard() {
  show('view-dashboard');
  $('admin-list').innerHTML = '<div class="admin-center"><div class="spinner"></div></div>';
  try {
    allPosts = await listAllPosts();
    renderList();
  } catch (err) {
    $('admin-list').innerHTML = `<p class="form-error">${escapeHtml(explain(err))}</p>`;
  }
}

function renderList() {
  const pub = allPosts.filter((p) => p.status === 'published').length;
  $('post-count').textContent =
    `${allPosts.length} post${allPosts.length === 1 ? '' : 's'} · ${pub} published · ${allPosts.length - pub} draft${allPosts.length - pub === 1 ? '' : 's'}`;
  const rows = allPosts.filter((p) => filter === 'all' || p.status === filter);
  if (!rows.length) {
    $('admin-list').innerHTML = `
      <div class="empty-state glass-card">
        <i class="fas fa-feather-pointed"></i>
        <p>${allPosts.length ? 'Nothing here.' : 'No posts yet. Write your first one!'}</p>
        <a href="#/new" class="btn btn-primary"><i class="fas fa-plus"></i> New post</a>
      </div>`;
    return;
  }
  $('admin-list').innerHTML = rows.map((p) => `
    <article class="admin-row glass-card">
      <a class="admin-row-thumb" href="#/edit/${p.id}">
        ${p.coverUrl ? `<img src="${escapeHtml(p.coverUrl)}" alt="">` : '<i class="fas fa-file-lines"></i>'}
      </a>
      <div class="admin-row-main">
        <a class="admin-row-title" href="#/edit/${p.id}">${escapeHtml(p.title || 'Untitled')}</a>
        <div class="admin-row-meta">
          <span class="status-pill ${p.status}">${p.status === 'published' ? 'Published' : 'Draft'}</span>
          <span>Updated ${formatDate(p.updatedAt)}</span>
          <span>${p.readingTime || 1} min</span>
          ${(p.tags || []).slice(0, 3).map((t) => `<span class="post-tag">#${escapeHtml(t)}</span>`).join('')}
        </div>
      </div>
      <div class="admin-row-actions">
        <a class="icon-btn" href="${p.status === 'published' ? postUrl(p.slug) : `/blog/post.html?preview=${p.id}`}" target="_blank" rel="noopener" title="${p.status === 'published' ? 'View' : 'Preview'}" aria-label="View"><i class="fas fa-eye"></i></a>
        <a class="icon-btn" href="#/edit/${p.id}" title="Edit" aria-label="Edit"><i class="fas fa-pen"></i></a>
        <button type="button" class="icon-btn danger" data-delete="${p.id}" title="Delete" aria-label="Delete"><i class="fas fa-trash"></i></button>
      </div>
    </article>`).join('');
}

$('status-tabs').addEventListener('click', (e) => {
  const b = e.target.closest('[data-filter]');
  if (!b) return;
  filter = b.dataset.filter;
  $('status-tabs').querySelectorAll('.tag-chip').forEach((x) => x.classList.toggle('active', x === b));
  renderList();
});

$('admin-list').addEventListener('click', async (e) => {
  const b = e.target.closest('[data-delete]');
  if (!b) return;
  const post = allPosts.find((p) => p.id === b.dataset.delete);
  if (post && (await removePost(post))) {
    allPosts = allPosts.filter((p) => p.id !== post.id);
    renderList();
  }
});

async function removePost(post) {
  if (!confirm(`Delete “${post.title || 'Untitled'}” permanently? This cannot be undone.`)) return false;
  try {
    await deletePost(post.id);
    await deleteImage(post.coverPath);
    notify('Post deleted');
    return true;
  } catch (err) {
    notify(explain(err));
    return false;
  }
}

// ── Editor ───────────────────────────────────────────────
let editor = null;
let current = null;        // stored post when editing, else null
let tags = [];
let cover = { url: '', path: '' };
let uploadedCoverPaths = []; // uploaded this session, for cleanup
let slugTouched = false;
let dirty = false;
let saving = false;

function markDirty() {
  if (!dirty) {
    dirty = true;
    $('save-state').textContent = 'Unsaved changes';
  }
  updateMeta();
}

window.addEventListener('beforeunload', (e) => {
  if (dirty) { e.preventDefault(); e.returnValue = ''; }
});

function ensureEditor() {
  if (editor) return;
  editor = createEditor({
    element: $('editor'),
    toolbar: $('toolbar'),
    ask,
    notify,
    uploadImage: async (file) => (await uploadImage(file, 'content')).url,
    onChange: markDirty,
  });
}

async function openEditor(id) {
  show('view-editor');
  ensureEditor();
  current = null;
  if (id) {
    try {
      current = await getPostById(id);
    } catch (err) {
      notify(explain(err));
    }
    if (!current) {
      notify('Post not found');
      location.hash = '#/';
      return;
    }
  }
  const p = current || {};
  $('f-title').value = p.title || '';
  $('f-slug').value = p.slug || '';
  $('f-description').value = p.description || '';
  $('f-seo-title').value = p.seoTitle || '';
  $('f-cover-alt').value = p.coverAlt || '';
  tags = [...(p.tags || [])];
  cover = { url: p.coverUrl || '', path: p.coverPath || '' };
  uploadedCoverPaths = [];
  slugTouched = !!p.slug;
  editor.commands.setContent(p.content || '', { emitUpdate: false });
  renderTagsInput();
  renderCover();
  autoGrow($('f-title'));
  $('slug-error').textContent = '';
  dirty = false;
  $('save-state').textContent = current ? `Saved ${formatDate(current.updatedAt)}` : '';
  updateMeta();
  if (!current) $('f-title').focus();
}

function status() {
  return current?.status || 'draft';
}

function updateMeta() {
  const s = status();
  const pill = $('status-pill');
  pill.textContent = s === 'published' ? 'Published' : 'Draft';
  pill.className = `status-pill ${s}`;
  $('btn-publish').innerHTML = s === 'published'
    ? '<i class="fas fa-check"></i> Update'
    : '<i class="fas fa-paper-plane"></i> Publish';
  $('btn-save-draft').hidden = s === 'published';
  $('btn-unpublish').hidden = s !== 'published';
  $('btn-delete').hidden = !current;

  const preview = $('btn-preview');
  preview.hidden = !current;
  if (current) preview.href = s === 'published' ? postUrl(current.slug) : `/blog/post.html?preview=${current.id}`;

  const html = editor ? editor.getHTML() : '';
  $('reading-time').textContent = `· ${readingTime(html)} min read`;

  const desc = $('f-description').value;
  $('desc-count').textContent = `${desc.length}/160`;
  $('desc-count').classList.toggle('over', desc.length > 160);

  const slug = $('f-slug').value || slugify($('f-title').value) || 'your-post';
  const serp = $('serp-preview');
  serp.querySelector('.serp-url').textContent = `${SITE_URL.replace(/^https?:\/\//, '')} › blog › ${slug}`;
  serp.querySelector('.serp-title').textContent =
    `${$('f-seo-title').value || $('f-title').value || 'Post title'} | Ahmed Abdullah`;
  serp.querySelector('.serp-desc').textContent =
    (desc || htmlToText(html).slice(0, 160) || 'Description of your post…');
}

function autoGrow(el) {
  el.style.height = 'auto';
  el.style.height = `${el.scrollHeight}px`;
}

$('f-title').addEventListener('input', (e) => {
  autoGrow(e.target);
  if (!slugTouched) $('f-slug').value = slugify(e.target.value);
  markDirty();
});
$('f-title').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') { e.preventDefault(); editor.commands.focus('start'); }
});
$('f-slug').addEventListener('input', () => { slugTouched = true; $('slug-error').textContent = ''; markDirty(); });
$('f-slug').addEventListener('blur', () => {
  $('f-slug').value = slugify($('f-slug').value);
  if (!$('f-slug').value) slugTouched = false;
  updateMeta();
});
['f-description', 'f-seo-title', 'f-cover-alt'].forEach((id) => $(id).addEventListener('input', markDirty));

// Tags
function renderTagsInput() {
  const box = $('tag-input');
  box.querySelectorAll('.tag-token').forEach((n) => n.remove());
  const input = $('f-tag');
  tags.forEach((t, i) => {
    const tok = document.createElement('span');
    tok.className = 'tag-token';
    tok.innerHTML = `#${escapeHtml(t)} <button type="button" aria-label="Remove tag ${escapeHtml(t)}" data-i="${i}">&times;</button>`;
    box.insertBefore(tok, input);
  });
  input.disabled = tags.length >= 12;
}
function addTag(raw) {
  const t = slugify(raw).slice(0, 30);
  if (t && !tags.includes(t) && tags.length < 12) {
    tags.push(t);
    renderTagsInput();
    markDirty();
  }
}
$('f-tag').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ',') {
    e.preventDefault();
    addTag(e.target.value);
    e.target.value = '';
  } else if (e.key === 'Backspace' && !e.target.value && tags.length) {
    tags.pop();
    renderTagsInput();
    markDirty();
  }
});
$('f-tag').addEventListener('blur', (e) => { if (e.target.value) { addTag(e.target.value); e.target.value = ''; } });
$('tag-input').addEventListener('click', (e) => {
  const b = e.target.closest('button[data-i]');
  if (b) {
    tags.splice(Number(b.dataset.i), 1);
    renderTagsInput();
    markDirty();
  } else {
    $('f-tag').focus();
  }
});

// Cover image
function renderCover() {
  const img = $('cover-preview');
  img.hidden = !cover.url;
  if (cover.url) img.src = cover.url; else img.removeAttribute('src');
  $('cover-empty').hidden = !!cover.url;
  $('cover-remove').hidden = !cover.url;
}
async function uploadCover(file) {
  if (!file) return;
  const bar = $('cover-progress');
  bar.hidden = false;
  try {
    const res = await uploadImage(file, 'covers', (p) => (bar.firstElementChild.style.width = `${p * 100}%`));
    uploadedCoverPaths.push(res.path);
    cover = res;
    renderCover();
    markDirty();
  } catch (err) {
    notify(explain(err));
  } finally {
    bar.hidden = true;
    bar.firstElementChild.style.width = '0';
  }
}
$('cover-drop').addEventListener('click', () => $('cover-file').click());
$('cover-drop').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); $('cover-file').click(); }
});
$('cover-file').addEventListener('change', (e) => { uploadCover(e.target.files[0]); e.target.value = ''; });
$('cover-drop').addEventListener('dragover', (e) => { e.preventDefault(); $('cover-drop').classList.add('drag'); });
$('cover-drop').addEventListener('dragleave', () => $('cover-drop').classList.remove('drag'));
$('cover-drop').addEventListener('drop', (e) => {
  e.preventDefault();
  $('cover-drop').classList.remove('drag');
  uploadCover(e.dataTransfer.files[0]);
});
$('cover-url-btn').addEventListener('click', async () => {
  const res = await ask({
    title: 'Cover image URL',
    fields: [{ name: 'url', label: 'Image URL', type: 'url', placeholder: 'https://…', value: cover.path ? '' : cover.url }],
  });
  if (!res?.url) return;
  if (!/^https:\/\//i.test(res.url.trim())) { notify('Use an https:// image URL.'); return; }
  cover = { url: res.url.trim(), path: '' };
  renderCover();
  markDirty();
});
$('cover-remove').addEventListener('click', () => {
  cover = { url: '', path: '' };
  renderCover();
  markDirty();
});

// Save / publish
async function save(nextStatus) {
  if (saving) return;
  const title = $('f-title').value.trim();
  const slug = slugify($('f-slug').value || title);
  const content = editor.isEmpty ? '' : editor.getHTML();

  if (!title) { notify('Add a title first.'); $('f-title').focus(); return; }
  if (!slug) { $('slug-error').textContent = 'Slug can only contain letters, numbers and dashes.'; return; }
  if (nextStatus === 'published' && !content) { notify('Write something before publishing.'); return; }

  saving = true;
  ['btn-publish', 'btn-save-draft', 'btn-unpublish'].forEach((b) => ($(b).disabled = true));
  $('save-state').textContent = 'Saving…';
  try {
    if (await isSlugTaken(slug, current?.id)) {
      $('slug-error').textContent = 'Another post already uses this slug.';
      $('save-state').textContent = 'Not saved';
      return;
    }
    $('f-slug').value = slug;
    const data = {
      title,
      slug,
      description: $('f-description').value.trim(),
      seoTitle: $('f-seo-title').value.trim(),
      content,
      tags,
      status: nextStatus,
      coverUrl: cover.url,
      coverPath: cover.path,
      coverAlt: $('f-cover-alt').value.trim(),
      readingTime: readingTime(content),
    };
    const previousCoverPath = current?.coverPath;
    const id = await savePost(data, current);
    current = await getPostById(id);

    // Clean up cover images that are no longer used.
    const stale = new Set([...uploadedCoverPaths, previousCoverPath].filter(Boolean));
    stale.delete(current.coverPath);
    stale.forEach((p) => deleteImage(p));
    uploadedCoverPaths = [];

    dirty = false;
    $('save-state').textContent = 'Saved just now';
    if (location.hash !== `#/edit/${id}`) {
      skipNextRoute = true;
      location.hash = `#/edit/${id}`;
    }
    updateMeta();
    notify(nextStatus === 'published' ? 'Published! 🎉' : 'Draft saved');
  } catch (err) {
    $('save-state').textContent = 'Not saved';
    notify(explain(err));
  } finally {
    saving = false;
    ['btn-publish', 'btn-save-draft', 'btn-unpublish'].forEach((b) => ($(b).disabled = false));
  }
}

$('btn-save-draft').addEventListener('click', () => save('draft'));
$('btn-publish').addEventListener('click', () => save('published'));
$('btn-unpublish').addEventListener('click', () => {
  if (confirm('Unpublish this post? Visitors will no longer see it.')) save('draft');
});
$('btn-delete').addEventListener('click', async () => {
  if (current && (await removePost(current))) {
    dirty = false;
    current = null;
    location.hash = '#/';
  }
});

// Ctrl+S saves
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's' && !$('view-editor').hidden) {
    e.preventDefault();
    save(status());
  }
});
