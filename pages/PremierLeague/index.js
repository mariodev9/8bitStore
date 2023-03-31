import { Box, Flex, Text } from "@chakra-ui/react";
import { motion, useScroll } from "framer-motion";
import React from "react";
import { useRef } from "react";
import {
  GundoganFigure,
  SakaFigure,
  SalahFigure,
} from "../../components/Icons";
import Layout from "../../components/Layout";
import GridProductsList from "../../components/Shared/GridProductsList/GridProductsList";

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
      exit={{ x: 3000 }}
      transition={{
        duration: 0.75,
        ease: "easeInOut",
      }}
    >
      <Layout scrollYProgress={scrollYProgress}>
        <Box layerStyle={"paddingX"}>
          <Flex direction={"column"} align={"center"}>
            <Text variant={"title"}>Premier League Shirts</Text>
            <Text fontSize={{ base: "10px", tablet: "20px", desktop: "30px" }}>
              Find all shirts of the league...
            </Text>
          </Flex>
        </Box>
        <Flex mt={"30px"} gap={10} justify={"center"} align={"center"}>
          <GundoganFigure />
          <SalahFigure />
          <SakaFigure />
        </Flex>
        <GridProductsList title={"PL Shirts Collection"} />
      </Layout>
    </motion.div>
  );
}
