import { defineConfig } from 'vite';
import { resolve } from 'node:path';

// Serve /blog/<slug> from blog/post.html in `vite dev` and `vite preview`,
// mirroring the rewrite in firebase.json.
function blogSlugRewrite() {
  const rewrite = (req, _res, next) => {
    const [path, query = ''] = (req.url || '').split('?');
    if (/^\/blog\/[a-z0-9-]+\/?$/.test(path) && !/\/(index|post)$/.test(path)) {
      req.url = '/blog/post.html' + (query ? '?' + query : '');
    }
    next();
  };
  return {
    name: 'blog-slug-rewrite',
    configureServer(server) { server.middlewares.use(rewrite); },
    configurePreviewServer(server) { server.middlewares.use(rewrite); },
  };
}

export default defineConfig({
  appType: 'mpa',
  plugins: [blogSlugRewrite()],
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        blog: resolve(import.meta.dirname, 'blog/index.html'),
        post: resolve(import.meta.dirname, 'blog/post.html'),
        admin: resolve(import.meta.dirname, 'admin/index.html'),
      },
    },
  },
});
