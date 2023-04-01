import "../styles/globals.css";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../Theme/theme";
import { useRouter } from "next/router";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import "swiper/css";
import UseCartContext from "../context/UseCartContext";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>8bitStore</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <UseCartContext>
        <ChakraProvider theme={theme}>
          <AnimateSharedLayout>
            <AnimatePresence mode={"wait"}>
              <Component key={router.pathname} {...pageProps} />
            </AnimatePresence>
          </AnimateSharedLayout>
        </ChakraProvider>
      </UseCartContext>
    </>
  );
}

export default MyApp;
