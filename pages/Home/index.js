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
import { Box, Button, Flex, Text } from "@chakra-ui/react";

import HeaderHome from "../../components/Home/Header";
import SwiperProducts from "../../components/Shared/ProductsSwiper/SwiperProducts";
import { useEffect, useRef } from "react";
import ArgentinaSection from "../../components/Home/ArgentinaSection/ArgentinaSection";
import { useRouter } from "next/router";

export default function Home() {
  const ref = useRef();
  const router = useRouter();

  const y = useMotionValue(0);
  const yTitle = useMotionValue(0);
  const { scrollYProgress } = useScroll({ container: ref });

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      y.set(latest * 750);
      yTitle.set(latest * 300);

      // cuando se scrollea para abajo se agranda, hacer que se achique, (mriar valores de scrollprogress)
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
        exit={{ x: 3000 }}
        transition={{
          duration: 0.75,
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
          >
            <Flex direction={"column"} align={"center"}>
              <motion.div style={{ y: yTitle }}>
                <Text variant={"title"}>
                  8bitfootball
                  <span style={{ fontSize: "1.2rem", fontWeight: 600 }}>
                    STORE
                  </span>
                </Text>
              </motion.div>
              <Text
                fontSize={{ base: "15px", md: "20px", lg: "25px" }}
                fontWeight={600}
              >
                The new FIFA World Cup Collection is here
              </Text>
              <Button
                _hover={{
                  backgroundColor: "yellow.100",
                }}
                borderRadius={"0px"}
                p={"8px 16px"}
                mt={"15px"}
                bg={"#FFEB36"}
                onClick={() => router.push("/WorldCup")}
              >
                Get now
              </Button>
            </Flex>
          </motion.div>

          <motion.div style={{ y }}>
            <HeaderHome />
          </motion.div>
          <ArgentinaSection />
          <SwiperProducts title={"New Arrivals"} />
          <SwiperProducts title={"Most Popular"} />
        </Layout>
      </motion.div>
    </>
  );
}
