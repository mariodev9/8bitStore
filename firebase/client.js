import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  setDoc,
  Timestamp,
  addDoc,
  doc,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsytzmtIFpVb7Yb_3V6csKRSfPtPdNwpY",
  authDomain: "bitstore-8.firebaseapp.com",
  projectId: "bitstore-8",
  storageBucket: "bitstore-8.appspot.com",
  messagingSenderId: "541748835864",
  appId: "1:541748835864:web:e6e0283963b4d7d837b56d",
  measurementId: "G-KN64FEJHPR",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// const analytics = getAnalytics(app);

export const getShirts = async () => {
  let list = [];
  try {
    const q = query(collection(firestore, "shirts"));
    const querySnap = await getDocs(q);
    querySnap.forEach((doc) => {
      list.push(doc.data());
    });
    return list;
  } catch (error) {}
};
