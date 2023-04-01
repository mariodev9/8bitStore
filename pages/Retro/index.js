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
import { ShirtsList } from "../../components/Shirts/ShirtsList";

const figureList = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delay: 0.3,
    },
  },
};

const figure = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

export default function RetroPage() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ container: ref });

  const retroShirts = ShirtsList.filter((item) => item.retro === true);

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
            <Text variant={"title"}>Retro Shirts</Text>
            <Text fontSize={{ base: "10px", tablet: "20px", desktop: "30px" }}>
              Find the jerseys worn by many world football legends.
            </Text>

            <motion.div
              style={{
                display: "flex",
                marginTop: "30px",
                gap: 10,
                alignItems: "end",
              }}
              variants={figureList}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div variants={figure}>
                <TottiFigure />
              </motion.div>
              <motion.div variants={figure}>
                <AdrianoFigure />
              </motion.div>
              <motion.div variants={figure}>
                <BaggioFigure />
              </motion.div>
            </motion.div>
          </Flex>
        </Box>
        <GridProductsList
          title={"Retro Shirts Collection"}
          shirts={retroShirts}
        />
      </Layout>
    </motion.div>
  );
}
