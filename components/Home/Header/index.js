import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import {
  ArgentinaAwayShirt,
  ArgentinaHomeShirt,
  CroaciaHomeShirt,
} from "../../Shirts/ShirtsSvg";

export default function HeaderHome() {
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
          style={{ position: "absolute", left: "100px" }}
        >
          <ArgentinaAwayShirt />
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0 }}
          animate={{ y: 0, opacity: 1, rotateZ: 30, scale: 1 }}
          transition={{
            duration: 1,
            delay: 1,
            ease: "easeInOut",
          }}
          style={{ position: "absolute", right: "100px" }}
        >
          <CroaciaHomeShirt />
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
          <ArgentinaHomeShirt width="427" height="369" />
        </motion.div>
      </Flex>
    </motion.div>
  );
}
