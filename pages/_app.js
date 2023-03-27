import "../styles/globals.css";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../Theme/theme";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import "swiper/css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>8bitStore</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ChakraProvider theme={theme}>
        <AnimatePresence mode={"wait"}>
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
