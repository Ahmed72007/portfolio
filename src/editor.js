// Tiptap rich-text editor with a toolbar for the admin page.
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Youtube from '@tiptap/extension-youtube';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { Placeholder } from '@tiptap/extensions';
import { createLowlight, common } from 'lowlight';

const lowlight = createLowlight(common);

export const CODE_LANGUAGES = [
  ['', 'Auto'], ['plaintext', 'Plain text'], ['javascript', 'JavaScript'], ['typescript', 'TypeScript'],
  ['python', 'Python'], ['cpp', 'C++'], ['c', 'C'], ['java', 'Java'], ['csharp', 'C#'], ['go', 'Go'],
  ['rust', 'Rust'], ['php', 'PHP'], ['ruby', 'Ruby'], ['kotlin', 'Kotlin'], ['swift', 'Swift'],
  ['bash', 'Bash'], ['shell', 'Shell session'], ['sql', 'SQL'], ['json', 'JSON'], ['yaml', 'YAML'],
  ['xml', 'HTML / XML'], ['css', 'CSS'], ['scss', 'SCSS'], ['markdown', 'Markdown'], ['diff', 'Diff'],
];

/**
 * @param {object} opts
 * @param {HTMLElement} opts.element   editor mount
 * @param {HTMLElement} opts.toolbar   toolbar mount
 * @param {(o:object)=>Promise<object|null>} opts.ask   modal prompt
 * @param {(file:File)=>Promise<string>} opts.uploadImage  returns a URL
 * @param {(msg:string)=>void} opts.notify
 * @param {()=>void} opts.onChange
 */
export function createEditor({ element, toolbar, ask, uploadImage, notify, onChange }) {
  const insertImageFiles = (files, pos) => {
    const images = [...files].filter((f) => f.type.startsWith('image/'));
    if (!images.length) return false;
    images.forEach(async (file) => {
      try {
        notify('Uploading image…');
        const src = await uploadImage(file);
        const chain = editor.chain().focus();
        (pos != null ? chain.insertContentAt(pos, { type: 'image', attrs: { src, alt: '' } })
                     : chain.setImage({ src, alt: '' })).run();
        notify('Image added');
      } catch (err) {
        notify(err.message || 'Upload failed');
      }
    });
    return true;
  };

  const editor = new Editor({
    element,
    extensions: [
      StarterKit.configure({
        codeBlock: false,
        heading: { levels: [2, 3, 4] },
        link: {
          openOnClick: false,
          autolink: true,
          defaultProtocol: 'https',
          protocols: ['http', 'https', 'mailto'],
        },
      }),
      CodeBlockLowlight.configure({ lowlight, defaultLanguage: null }),
      Image.configure({ inline: false, allowBase64: false }),
      Youtube.configure({ nocookie: true, controls: true, modestBranding: true, width: 640, height: 360 }),
      Placeholder.configure({ placeholder: 'Start writing your story…' }),
    ],
    editorProps: {
      attributes: { class: 'tiptap-content', spellcheck: 'true' },
      handlePaste: (_view, event) => insertImageFiles(event.clipboardData?.files || []),
      handleDrop: (view, event) => {
        const files = event.dataTransfer?.files;
        if (!files?.length) return false;
        event.preventDefault();
        const pos = view.posAtCoords({ left: event.clientX, top: event.clientY })?.pos;
        return insertImageFiles(files, pos);
      },
    },
    onUpdate: () => onChange?.(),
  });

  // ── Toolbar ──────────────────────────────────────────
  const c = () => editor.chain().focus();
  const groups = [
    [
      { icon: 'fa-paragraph', title: 'Paragraph', run: () => c().setParagraph().run(), active: () => editor.isActive('paragraph') },
      { text: 'H2', title: 'Heading 2', run: () => c().toggleHeading({ level: 2 }).run(), active: () => editor.isActive('heading', { level: 2 }) },
      { text: 'H3', title: 'Heading 3', run: () => c().toggleHeading({ level: 3 }).run(), active: () => editor.isActive('heading', { level: 3 }) },
    ],
    [
      { icon: 'fa-bold', title: 'Bold (Ctrl+B)', run: () => c().toggleBold().run(), active: () => editor.isActive('bold') },
      { icon: 'fa-italic', title: 'Italic (Ctrl+I)', run: () => c().toggleItalic().run(), active: () => editor.isActive('italic') },
      { icon: 'fa-underline', title: 'Underline (Ctrl+U)', run: () => c().toggleUnderline().run(), active: () => editor.isActive('underline') },
      { icon: 'fa-strikethrough', title: 'Strikethrough', run: () => c().toggleStrike().run(), active: () => editor.isActive('strike') },
      { icon: 'fa-code', title: 'Inline code', run: () => c().toggleCode().run(), active: () => editor.isActive('code') },
      { icon: 'fa-link', title: 'Link (Ctrl+K)', run: () => editLink(), active: () => editor.isActive('link') },
    ],
    [
      { icon: 'fa-list-ul', title: 'Bullet list', run: () => c().toggleBulletList().run(), active: () => editor.isActive('bulletList') },
      { icon: 'fa-list-ol', title: 'Numbered list', run: () => c().toggleOrderedList().run(), active: () => editor.isActive('orderedList') },
      { icon: 'fa-quote-left', title: 'Quote', run: () => c().toggleBlockquote().run(), active: () => editor.isActive('blockquote') },
      { icon: 'fa-file-code', title: 'Code block', run: () => c().toggleCodeBlock().run(), active: () => editor.isActive('codeBlock') },
      { icon: 'fa-minus', title: 'Divider', run: () => c().setHorizontalRule().run() },
    ],
    [
      { icon: 'fa-image', title: 'Image', run: () => addImage() },
      { icon: 'fa-youtube', brand: true, title: 'YouTube video', run: () => addYoutube() },
    ],
    [
      { icon: 'fa-rotate-left', title: 'Undo (Ctrl+Z)', run: () => c().undo().run(), disabled: () => !editor.can().undo() },
      { icon: 'fa-rotate-right', title: 'Redo (Ctrl+Shift+Z)', run: () => c().redo().run(), disabled: () => !editor.can().redo() },
    ],
  ];

  const buttons = [];
  toolbar.innerHTML = '';
  groups.forEach((group) => {
    const g = document.createElement('div');
    g.className = 'tb-group';
    group.forEach((item) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'tb-btn';
      b.title = item.title;
      b.setAttribute('aria-label', item.title);
      b.innerHTML = item.text ? `<span>${item.text}</span>` : `<i class="${item.brand ? 'fab' : 'fas'} ${item.icon}"></i>`;
      b.addEventListener('mousedown', (e) => e.preventDefault()); // keep selection
      b.addEventListener('click', () => item.run());
      g.appendChild(b);
      buttons.push([b, item]);
    });
    toolbar.appendChild(g);
  });

  // Code-block language picker (shown when the cursor is in a code block)
  const langSelect = document.createElement('select');
  langSelect.className = 'tb-lang';
  langSelect.setAttribute('aria-label', 'Code language');
  langSelect.innerHTML = CODE_LANGUAGES.map(([v, l]) => `<option value="${v}">${l}</option>`).join('');
  langSelect.addEventListener('change', () => {
    c().updateAttributes('codeBlock', { language: langSelect.value || null }).run();
  });
  toolbar.appendChild(langSelect);

  const refresh = () => {
    buttons.forEach(([b, item]) => {
      b.classList.toggle('is-active', !!item.active?.());
      b.disabled = !!item.disabled?.();
    });
    const inCode = editor.isActive('codeBlock');
    langSelect.hidden = !inCode;
    if (inCode) langSelect.value = editor.getAttributes('codeBlock').language || '';
  };
  editor.on('transaction', refresh);
  refresh();

  // Ctrl+K for links
  element.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      editLink();
    }
  });

  // ── Dialog actions ───────────────────────────────────
  async function editLink() {
    const current = editor.getAttributes('link').href || '';
    const res = await ask({
      title: current ? 'Edit link' : 'Add link',
      fields: [{ name: 'href', label: 'URL', type: 'url', value: current, placeholder: 'https://…' }],
      extraButton: current ? { label: 'Remove link', value: 'remove' } : null,
    });
    if (!res) return;
    if (res.action === 'remove' || !res.href.trim()) {
      c().extendMarkRange('link').unsetLink().run();
      return;
    }
    let href = res.href.trim();
    if (!/^(https?:|mailto:|\/|#)/i.test(href)) href = `https://${href}`;
    if (editor.state.selection.empty && !editor.isActive('link')) {
      c().insertContent({ type: 'text', text: href, marks: [{ type: 'link', attrs: { href } }] }).run();
    } else {
      c().extendMarkRange('link').setLink({ href }).run();
    }
  }

  async function addImage() {
    const res = await ask({
      title: 'Insert image',
      fields: [
        { name: 'file', label: 'Upload', type: 'file', accept: 'image/png,image/jpeg,image/gif,image/webp,image/avif' },
        { name: 'url', label: '…or image URL', type: 'url', placeholder: 'https://…' },
        { name: 'alt', label: 'Alt text', type: 'text', placeholder: 'Describe the image' },
      ],
    });
    if (!res) return;
    let src = res.url?.trim();
    try {
      if (res.file) {
        notify('Uploading image…');
        src = await uploadImage(res.file);
      }
      if (!src) return;
      if (!/^https?:\/\//i.test(src)) throw new Error('Image URL must start with http(s)://');
      c().setImage({ src, alt: res.alt || '' }).run();
    } catch (err) {
      notify(err.message || 'Could not add image');
    }
  }

  async function addYoutube() {
    const res = await ask({
      title: 'Embed YouTube video',
      fields: [{ name: 'url', label: 'YouTube URL', type: 'url', placeholder: 'https://www.youtube.com/watch?v=…' }],
    });
    if (!res?.url) return;
    const ok = c().setYoutubeVideo({ src: res.url.trim() }).run();
    if (!ok) notify('That doesn’t look like a YouTube link.');
  }

  return editor;
}
