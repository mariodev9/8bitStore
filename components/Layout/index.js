import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Layout/Nav";
import Footer from "./Footer";

export default function Layout({ children, scrollYProgress }) {
  return (
    <>
      <Navbar scrollYProgress={scrollYProgress} />
      <Box mt={"20vh"}>{children}</Box>
      <Footer />
    </>
  );
}
