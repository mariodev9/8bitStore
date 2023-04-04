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
import { ShirtsList } from "../../components/Shirts/ShirtsList";

const figureList = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delay: 0.3,
    },
  },
};

const figure = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

export default function PremierLeaguePage() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ container: ref });

  const PLShirts = ShirtsList.filter((item) => item.premier === true);

  return (
    <motion.div
      ref={ref}
      style={{
        position: "absolute",
        height: "110vh",
        width: "100%",
        overflow: "scroll",
      }}
      initial={{ x: -3000 }}
      animate={{ x: 0 }}
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

        <motion.div
          style={{
            display: "flex",
            marginTop: "30px",
            gap: 10,
            alignItems: "end",
            justifyContent: "center",
          }}
          variants={figureList}
          initial="hidden"
          whileInView="show"
        >
          <motion.div variants={figure}>
            <GundoganFigure />
          </motion.div>
          <motion.div variants={figure}>
            <SalahFigure />
          </motion.div>
          <motion.div variants={figure}>
            <SakaFigure />
          </motion.div>
        </motion.div>

        <GridProductsList title={"PL Shirts Collection"} shirts={PLShirts} />
      </Layout>
    </motion.div>
  );
}
