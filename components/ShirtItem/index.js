import React from "react";
import mexico from "../../public/FRANCE.png";
import Image from "next/image";
import { GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function ShirtItem({ team }) {
  return (
    <>
      <GridItem
        marginTop={70}
        display="flex"
        flexDirection="column"
        justify="center"
        alignItems="center"
        border="1px black solid"
      >
        <motion.div
          class="image-container"
          style={{
            padding: "10px",
            width: "147px",
            height: "147px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#96b1db",
            borderRadius: "100%",
          }}
          whileHover={{ y: -10, width: "100px", height: "100px" }}
        >
          <motion.div whileTap={{ scale: 1.8 }}>
            <Image src={mexico} />
          </motion.div>
        </motion.div>
        <h4>{team}</h4>
      </GridItem>
      <style jsx>
        {`
          .asd {
            border: 1px solid black;
          }

          .image-container {
            padding: 10px;
            width: 147px;
            height: 147px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #96b1db;
            border-radius: 100%;
          }
          h4 {
            text-align: center;
          }
        `}
      </style>
    </>
  );
}
