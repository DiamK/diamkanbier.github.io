// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlujjnyHYZkOvtpg-iz0lPTukz6nHIjqI",
  authDomain: "portfolio-dk-1337.firebaseapp.com",
  projectId: "portfolio-dk-1337",
  storageBucket: "portfolio-dk-1337.firebasestorage.app",
  messagingSenderId: "383959672571",
  appId: "1:383959672571:web:f384a2f7e841624b53b25e",
  measurementId: "G-30PYJPQ3B1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app); // Voeg dit toe direct onder je Firebase init


// Functie om de bezoekerscounter te updaten
export async function updateVisitorCount() {
    const counterRef = doc(db, "visitors", "counter");
    const snapshot = await getDoc(counterRef);
  
    if (snapshot.exists()) {
      const currentCount = snapshot.data().counter;
      const newCount = currentCount + 1;
      await updateDoc(counterRef, { counter: newCount });
      return newCount;
    } else {
      console.error("Document bestaat niet!");
      return 0;
    }
  }