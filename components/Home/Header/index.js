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
      <Flex justify={"center"} pt={"50px"}>
        <motion.div
          animate={{ rotateZ: -10 }}
          style={{ position: "absolute", left: "100px" }}
        >
          <ArgentinaAwayShirt />
        </motion.div>
        <motion.div
          animate={{ rotateZ: 30 }}
          style={{ position: "absolute", right: "100px" }}
        >
          <CroaciaHomeShirt />
        </motion.div>

        {/* el valor que cambia ocn el parallax es la Y: se va escondiendo en la seccion de messi */}
        <motion.div animate={{ y: 100 }}>
          <ArgentinaHomeShirt width="427" height="369" />
        </motion.div>
      </Flex>
    </motion.div>
  );
}
