import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Layout from "../../components/Layout";

export default function Hola() {
  // const [error, setError] = useState("");
  // const userData = {
  //   email: "conID@gmail.com",
  //   password: "123123123123a",
  //   username: "jeje",
  // };

  // function postData() {
  //   fetch("http://localhost:3000/api/user", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(userData),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Success:", data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  return (
    <>
      {/* <h1>Pagina para probar fetch</h1>
      <button onClick={postData}>Crear user</button>
      <h3>{error}</h3> */}
      <motion.div
        style={{
          position: "absolute",
          height: "100vh",
          width: "100%",
          overflow: "scroll",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.75,
          delay: 0.5,
          ease: "easeInOut",
        }}
      >
        <Layout>
          <Link href={"/Home"}>IR A HOME</Link>
        </Layout>
      </motion.div>
    </>
  );
}
