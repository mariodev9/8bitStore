import {
  LinkBox,
  LinkOverlay,
  GridItem,
  Center,
  Text,
  Box,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { motion } from "framer-motion";

export default function ShirtGridItem({ id, title, img, price }) {
  return (
    <LinkBox cursor={"pointer"} as="article">
      <LinkOverlay as={NextLink} href={`/Product/${id}`}>
        <GridItem w="100%">
          <motion.div layoutId={id}>
            <Center py={"30px"} bg="#F5F5F5">
              <Box width="280px" height="220px">
                <motion.div whileHover={{ scale: 1.1 }}>{img}</motion.div>
              </Box>
            </Center>
          </motion.div>

          <Text fontSize={"1.1rem"} py={"5px"}>
            {title}
          </Text>

          <Text>${price}</Text>
        </GridItem>
      </LinkOverlay>
    </LinkBox>
  );
}
