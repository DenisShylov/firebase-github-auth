// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAbKIYyTov9E5dYffCqyRtjn4wrosbYsJA',
  authDomain: 'testtaskauthgithub.firebaseapp.com',
  projectId: 'testtaskauthgithub',
  storageBucket: 'testtaskauthgithub.appspot.com',
  messagingSenderId: '701851692927',
  appId: '1:701851692927:web:31ec6319deba68d6c6744a',
  measurementId: 'G-EZJVYRELDD',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
