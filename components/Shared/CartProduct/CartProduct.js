import React from "react";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { useContext } from "react";
import CartContext from "../../../context/CartContext";

export default function CartProduct({ id, title, quantity, img, price, size }) {
  const { AddProductToCart, RemoveProductFromCart } = useContext(CartContext);

  return (
    <Flex align={"center"} justify={"space-between"} gap={4}>
      <Box w={"35%"} h={"25%"}>
        {img}
      </Box>
      <Flex w={"45%"} direction={"column"} gap={2}>
        <Text fontSize={"18px"} fontWeight={600}>
          {title}
        </Text>
        <Text color={"#555"} fontWeight={500}>
          Size: {size}
        </Text>
        <Text color={"#555"} fontWeight={500}>
          ${price}
        </Text>
      </Flex>
      <Flex align={"center"} direction={"column"} gap={2}>
        <Button
          onClick={() =>
            AddProductToCart({ id, size: size, img, title, price })
          }
        >
          +
        </Button>
        <Text fontWeight={500}>{quantity}</Text>
        <Button onClick={() => RemoveProductFromCart({ id, size })}>-</Button>
      </Flex>
    </Flex>
  );
}
