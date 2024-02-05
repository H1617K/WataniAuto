// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNXukZPGqM10Zg3Kz8EDk0OxD89Pctcko",
  authDomain: "wataniauto-bbfbc.firebaseapp.com",
  projectId: "wataniauto-bbfbc",
  storageBucket: "wataniauto-bbfbc.appspot.com",
  messagingSenderId: "869483587371",
  appId: "1:869483587371:web:4a4c003d346403c92c076e",
  measurementId: "G-1SVES4R31X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app, analytics};