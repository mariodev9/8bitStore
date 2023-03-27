import React from "react";
import Navbar from "../Layout/Nav";

export default function Layout({ children, scrollYProgress }) {
  return (
    <>
      <Navbar scrollYProgress={scrollYProgress} />
      {children}
    </>
  );
}
