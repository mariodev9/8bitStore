import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, firestore } from "../../firebase/client";

export default async function handler(req, res) {
  const { email, password, username } = req.body;
  try {
    if (req.method != "POST") {
      res.status(405).send("Method not allowed");
    } else {
      const userData = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
        .then((user) => {
          return user;
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            throw Error("The email is already in use");
          }
        });

      if (userData) {
        const docuRef = doc(firestore, `users/${userData.user.uid}`);
        setDoc(docuRef, { email: email, username: username });
      }
    }
  } catch (error) {
    console.log(error);
  }
}
