import { useRef } from "react";
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import { motion, useScroll } from "framer-motion";
import { DibuFigure, WorldCupTitle } from "../../components/Icons";
import Layout from "../../components/Layout";
import { ShirtsList } from "../../components/Shirts/ShirtsList";
import NextLink from "next/link";
import ShirtGridItem from "../../components/Shared/ShirtGridItem";

export default function WorldCupPage() {
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
        <Flex
          gap={5}
          align={"center"}
          direction={"column"}
          layerStyle={"paddingX"}
        >
          <WorldCupTitle />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1,
            }}
          >
            <DibuFigure />
          </motion.div>
        </Flex>
        <Box layerStyle={"paddingX"} mt={"50px"}>
          <Text variant={"sectionTitle"}>Collection of FIFA World Cup</Text>
          <Grid
            py={"30px"}
            templateColumns={{
              base: "repeat(1, 1fr)",
              tablet: "repeat(2, 1fr)",
              desktop: "repeat(3, 1fr)",
            }}
            gap={6}
          >
            {ShirtsList.map((shirt) => (
              <ShirtGridItem key={shirt.id} {...shirt} />
            ))}
          </Grid>
        </Box>
      </Layout>
    </motion.div>
  );
}
