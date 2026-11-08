// Image uploads to Firebase Storage (admin only; enforced by storage.rules).
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { app } from './firebase.js';

const storage = getStorage(app);

const MAX_BYTES = 5 * 1024 * 1024;
const TYPES = ['image/png', 'image/jpeg', 'image/gif', 'image/webp', 'image/avif'];

/**
 * Upload an image under blog/<folder>/. Returns { url, path }.
 * `onProgress` receives 0..1.
 */
export function uploadImage(file, folder, onProgress = () => {}) {
  if (!TYPES.includes(file.type)) {
    return Promise.reject(new Error('Use a PNG, JPEG, GIF, WebP or AVIF image.'));
  }
  if (file.size > MAX_BYTES) {
    return Promise.reject(new Error('Images must be smaller than 5 MB.'));
  }
  const safeName = file.name.toLowerCase().replace(/[^a-z0-9.]+/g, '-').slice(-60);
  const path = `blog/${folder}/${Date.now()}-${safeName}`;
  const task = uploadBytesResumable(ref(storage, path), file, {
    contentType: file.type,
    cacheControl: 'public, max-age=31536000',
  });
  return new Promise((resolve, reject) => {
    task.on(
      'state_changed',
      (s) => onProgress(s.totalBytes ? s.bytesTransferred / s.totalBytes : 0),
      reject,
      async () => resolve({ url: await getDownloadURL(task.snapshot.ref), path }),
    );
  });
}

export async function deleteImage(path) {
  if (!path) return;
  try {
    await deleteObject(ref(storage, path));
  } catch (err) {
    if (err?.code !== 'storage/object-not-found') console.warn('Could not delete image', err);
  }
}
