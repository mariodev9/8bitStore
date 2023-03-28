import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Layout/Nav";

export default function Layout({ children, scrollYProgress }) {
  return (
    <>
      <Navbar scrollYProgress={scrollYProgress} />
      <Box my={"20vh"}>{children}</Box>
    </>
  );
}
