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
  onAuthStateChanged,
  signOut,
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

export const sessionChange = (callback) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      callback(user);
    } else {
      callback(null);
    }
  });
};

export const Login = (data, callback) => {
  const { email, password } = data;
  if ((email, password)) {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.location.replace("/Home");
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          callback("Wrong email/password!");
        } else if (error.code === "auth/user-not-found") {
          callback("Wrong email/password!");
        } else {
          callback("Error");
        }
        setTimeout(() => {
          callback("");
        }, 3000);
      });
  }
};

export const Register = async (data, callback) => {
  const { email, password, username } = data;
  const userData = await createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
      return user;
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        callback("The email is already in use");
      } else if (error.code === "auth/invalid-email") {
        callback("The email address is not valid.");
      } else if (error.code === "auth/operation-not-allowed") {
        console.log("Operation not allowed.");
        callback("Operation not allowed.");
      } else {
        console.log("error");
      }
      setTimeout(() => {
        callback("");
      }, 3000);
    });
  // Register user in firestore
  if (userData) {
    const docuRef = doc(firestore, `users/${userData.user.uid}`);
    setDoc(docuRef, { email: email, username: username });
  }
};

export const logOut = () => {
  signOut(auth)
    .then(() => {
      window.location.replace("/login");
    })
    .catch((error) => {
      // An error happened.
    });
};
