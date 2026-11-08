// Admin authentication. The UI check here is a convenience only — Firestore and
// Storage security rules are what actually stop non-admins from writing.
import {
  getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,
  setPersistence, browserLocalPersistence,
} from 'firebase/auth';
import { app, ADMIN_UID } from './firebase.js';

export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence).catch(() => {});

export async function isAdminUser(user) {
  if (!user) return false;
  if (ADMIN_UID && user.uid === ADMIN_UID) return true;
  const token = await user.getIdTokenResult();
  return token.claims.admin === true;
}

/** Resolves with the signed-in admin user, or null. */
export function waitForAdmin() {
  return new Promise((resolve) => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      unsub();
      resolve((await isAdminUser(user)) ? user : null);
    });
  });
}

export function onAdminChange(cb) {
  return onAuthStateChanged(auth, async (user) => {
    cb(user, await isAdminUser(user));
  });
}

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logOut() {
  return signOut(auth);
}
