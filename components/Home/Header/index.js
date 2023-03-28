import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import {
  ArgentinaAwayShirt,
  ArgentinaHomeShirt,
  CroaciaHomeShirt,
} from "../../Shirts/ShirtsSvg";

export default function HeaderHome() {
  const [isLargerThan450] = useMediaQuery("(min-width: 450px)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

  return (
    <motion.div>
      <Flex justify={"center"} pt={"70px"}>
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0 }}
          animate={{ y: 0, opacity: 1, rotateZ: -10, scale: 1 }}
          transition={{
            duration: 1,
            delay: 1,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: isLargerThan450 ? "100px" : "10px",
            zIndex: -1,
          }}
        >
          <ArgentinaAwayShirt width={{ base: "140px", desktop: "280px" }} />
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0 }}
          animate={{ y: 0, opacity: 1, rotateZ: 40, scale: 1 }}
          transition={{
            duration: 1,
            delay: 1,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            right: isLargerThan450 ? "100px" : "50px",
            zIndex: -1,
            // top: !isLargerThan450 ? "220px" : "100px",
          }}
        >
          <CroaciaHomeShirt width={{ base: "140px", desktop: "280px" }} />
        </motion.div>

        {/* el valor que cambia ocn el parallax es la Y: se va escondiendo en la seccion de messi */}
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 1,
            type: "spring",
          }}
        >
          <ArgentinaHomeShirt
            width={{ base: "213px", desktop: "427px" }}
            height={{ base: "184px", desktop: "369px" }}
          />
        </motion.div>
      </Flex>
    </motion.div>
  );
}
