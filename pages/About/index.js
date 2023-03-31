import { Box, Flex, Text } from "@chakra-ui/react";
import { motion, useScroll } from "framer-motion";
import React from "react";
import { useRef } from "react";
import { Logo, MariodevLogo } from "../../components/Icons";

import Layout from "../../components/Layout";

export default function PremierLeaguePage() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ container: ref });
  return (
    <motion.div
      ref={ref}
      style={{
        position: "absolute",
        height: "110vh",
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
      <Layout scrollYProgress={scrollYProgress}>
        <Box layerStyle={"paddingX"}>
          <Flex direction={"column"} align={"center"}>
            <Text variant={"title"}>About</Text>
            <Flex mt={"30px"} gap={"200px"}>
              <Flex direction={"column"} align={"center"}>
                <MariodevLogo height={"100px"} width={"150px"} />
                <Text
                  mt={"10px"}
                  textAlign={"center"}
                  fontSize={"20px"}
                  fontWeight={600}
                >
                  Mariodev
                </Text>
              </Flex>
              <Flex direction={"column"} align={"center"}>
                <Logo height={"100px"} width={"100px"} />
                <Text
                  mt={"10px"}
                  textAlign={"center"}
                  fontSize={"20px"}
                  fontWeight={600}
                >
                  8bitFootball
                </Text>
              </Flex>
            </Flex>
            <Text mt={"30px"} fontSize={"30px"}>
              This Project inspired by 8bitfootball, mixing web development and
              his art in a fun and dynamic way, with the purpose of showing his
              followers the fruit of his work.
            </Text>
            <Text fontSize={"30px"}>
              I am a frontend developer who likes creative things, a fan of 8bit
              and a lover of vintage t-shirts. Making this website, I saw an
              opportunity to show something different based on his drawings.
            </Text>
          </Flex>
        </Box>
      </Layout>
    </motion.div>
  );
}
