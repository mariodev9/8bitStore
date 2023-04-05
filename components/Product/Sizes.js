import { Flex, Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const SizeBox = ({ item, setActive, active }) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      key={item}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      onClick={() => setActive(item)}
      style={{
        backgroundColor: active == item ? "#000" : hover ? "#000" : "#fff",
      }}
    >
      <Flex
        justify={"center"}
        align={"center"}
        w={"40px"}
        h={"40px"}
        cursor={"pointer"}
        border={"1px solid #999"}
      >
        <motion.p
          style={{ color: active == item ? "#fff" : hover ? "#fff" : "#000" }}
        >
          {item}
        </motion.p>
      </Flex>
    </motion.div>
  );
};

export default function Sizes({ active, setActive }) {
  return (
    <Box>
      <Text color={"#000"} fontSize={"20px"} fontWeight={500}>
        Sizes
      </Text>
      <Flex mt={"10px"} gap={4}>
        {["XS", "S", "M", "L", "XL"].map((item) => (
          <SizeBox
            key={item}
            setActive={setActive}
            active={active}
            item={item}
          />
        ))}
      </Flex>
    </Box>
  );
}
