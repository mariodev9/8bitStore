import {
  Box,
  Grid,
  Text,
  LinkBox,
  LinkOverlay,
  GridItem,
  Center,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { motion } from "framer-motion";

import { ShirtsList } from "../../Shirts/ShirtsList";
// import ShirtGridItem from "../ShirtGridItem";

function ShirtGridItem({ id, title, img, price }) {
  return (
    <LinkBox cursor={"pointer"} as="article">
      <LinkOverlay as={NextLink} href={`/Product/${id}`}>
        <GridItem w="100%">
          <motion.div layoutId={id}>
            <Center py={"30px"} bg="#F5F5F5">
              <motion.div whileHover={{ scale: 1.1 }}>{img}</motion.div>
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

export default function GridProductsList({ title, shirts }) {
  return (
    <Box layerStyle={"paddingX"} mt={"50px"}>
      <Text variant={"sectionTitle"}>{title}</Text>
      <Grid
        py={"30px"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          tablet: "repeat(2, 1fr)",
          desktop: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {shirts.map((shirt) => (
          <ShirtGridItem key={shirt.id} {...shirt} />
        ))}
      </Grid>
    </Box>
  );
}
