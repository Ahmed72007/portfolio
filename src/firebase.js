// Firebase app + Firestore. Auth and Storage are loaded lazily (see auth.js /
// storage.js) so public blog pages don't download them.
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const env = import.meta.env;

export const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID,
  measurementId: env.VITE_FIREBASE_MEASUREMENT_ID,
};

if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  console.error('Firebase config missing: copy .env.example to .env.local and fill it in.');
}

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const ADMIN_UID = env.VITE_ADMIN_UID || '';
export const SITE_URL = (env.VITE_SITE_URL || window.location.origin).replace(/\/$/, '');
