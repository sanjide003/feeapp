import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { initializeAppCheck, ReCaptchaV3Provider } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app-check.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYUD3SGv-rvdQTjGucEbZO7lE2gua6a8U",
  authDomain: "feenimdevathiyal.firebaseapp.com",
  projectId: "feenimdevathiyal",
  storageBucket: "feenimdevathiyal.firebasestorage.app",
  messagingSenderId: "400048231963",
  appId: "1:400048231963:web:c5d74ac73448544a8bcabe",
  measurementId: "G-3XWW1C8G97"
};

const app = initializeApp(firebaseConfig);

const appCheckSiteKey = String(window.__APP_CHECK_SITE_KEY || '').trim();
const canEnableAppCheck = appCheckSiteKey && appCheckSiteKey !== 'REPLACE_WITH_RECAPTCHA_V3_SITE_KEY';
const appCheck = canEnableAppCheck
  ? initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(appCheckSiteKey),
      isTokenAutoRefreshEnabled: true
    })
  : null;

if (!canEnableAppCheck) {
  console.warn('[Security] App Check is not enabled yet: set window.__APP_CHECK_SITE_KEY with a valid reCAPTCHA v3 site key.');
}

const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
const auth = getAuth(app);

export { db, auth, appCheck, canEnableAppCheck };
