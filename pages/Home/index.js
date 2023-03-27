import Head from "next/head";
import {
  motion,
  useElementScroll,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import Layout from "../../components/Layout";
import { Box, Flex, Text } from "@chakra-ui/react";
import {
  ArgentinaAwayShirt,
  ArgentinaHomeShirt,
} from "../../components/Shirts/ShirtsSvg";
import HeaderHome from "../../components/Home/Header";
import SwiperProducts from "../../components/Shared/SwiperProducts/SwiperProducts";
import { useEffect, useRef, useState } from "react";
import ArgentinaSection from "../../components/Home/ArgentinaSection/ArgentinaSection";

export default function Home() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ container: ref });
  const y = useMotionValue(0);

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      y.set(latest * 300);
    });
  }, []);

  return (
    <>
      <Head>
        <title>8bitStore</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
      </Head>

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
          <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              ease: [0.6, 0.01, -0.05, 0.95],
              duration: 1.6,
            }}
            style={{ marginTop: "25vh" }}
          >
            <Flex direction={"column"} align={"center"}>
              <Text
                fontSize={{ base: "50px", md: "70px", lg: "100px" }}
                fontWeight={800}
              >
                8bitfootball
                <span style={{ fontSize: "1.2rem", fontWeight: 600 }}>
                  STORE
                </span>
              </Text>
              <Text
                fontSize={{ base: "15px", md: "20px", lg: "25px" }}
                fontWeight={600}
              >
                The FIFA World Cup Collection is here
              </Text>
            </Flex>
          </motion.div>

          <motion.div style={{ y }}>
            <HeaderHome />
          </motion.div>
          <ArgentinaSection />
          <SwiperProducts />
        </Layout>
      </motion.div>
    </>
  );
}
