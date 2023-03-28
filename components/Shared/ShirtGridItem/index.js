import { LinkBox, LinkOverlay, GridItem, Center, Text } from "@chakra-ui/react";
import NextLink from "next/link";
export default function ShirtGridItem({ id, title, img, price }) {
  return (
    <LinkBox cursor={"pointer"} as="article">
      <LinkOverlay as={NextLink} href={`/Product/${id}`}>
        <GridItem w="100%">
          <Center py={"20px"} bg="#F5F5F5">
            {img}
          </Center>
          <Text fontSize={"1.1rem"} py={"5px"}>
            {title}
          </Text>

          <Text>${price}</Text>
        </GridItem>
      </LinkOverlay>
    </LinkBox>
  );
}
