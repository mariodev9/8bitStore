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

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

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
const auth = getAuth(app);

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

export const Register = async ({ email, password, username }) => {
  const userData = await createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
      console.log(user);
      return user;
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        console.log("The email address is already in use");
      } else if (error.code === "auth/invalid-email") {
        console.log("The email address is not valid.");
      } else if (error.code === "auth/operation-not-allowed") {
        console.log("Operation not allowed.");
      } else if (error.code === "auth/weak-password") {
        console.log("The password is too weak.");
      } else {
        console.log("error");
      }
      // para limpiar el estado error y dejar de mostrarlo
      // setTimeout(() => {
      //   console.log("asd");
      // }, 3000);
    });
  // Register user in firestore
  const docuRef = doc(firestore, `users/${userData.user.uid}`);
  setDoc(docuRef, { email: email, username: username });
};
