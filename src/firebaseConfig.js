import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCL6goBaxR2b_0HTCzHQQ-aSRcLsxewHSA',
  authDomain: 'revex-f80a2.firebaseapp.com',
  projectId: 'revex-f80a2',
  storageBucket: 'revex-f80a2.firebasestorage.app',
  messagingSenderId: '582958865867',
  appId: '1:582958865867:web:0df2cef21fe5eb014aaa4e',
  measurementId: 'G-T3HCW80W30',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
