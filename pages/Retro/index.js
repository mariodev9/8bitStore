import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Layout from "../../components/Layout";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";

import {
  AdrianoFigure,
  BaggioFigure,
  TottiFigure,
} from "../../components/Icons";
import GridProductsList from "../../components/Shared/GridProductsList/GridProductsList";

export default function RetroPage() {
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
            <Text variant={"title"}>Retro Shirts</Text>
            <Text fontSize={{ base: "10px", tablet: "20px", desktop: "30px" }}>
              Find the jerseys worn by many world football legends.
            </Text>
            <Flex mt={"30px"} gap={10} align={"end"}>
              <TottiFigure />
              <AdrianoFigure />
              <BaggioFigure />
            </Flex>
          </Flex>
        </Box>
        <GridProductsList title={"Retro Shirts Collection"} />
      </Layout>
    </motion.div>
  );
}
