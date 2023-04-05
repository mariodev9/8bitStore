import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ShirtsList } from "../../components/Shirts/ShirtsList";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Layout from "../../components/Layout";
import Sizes from "../../components/Product/Sizes";
import { useState, useContext } from "react";
import CartContext from "../../context/CartContext";

export default function ProductItemPage() {
  const ref = useRef();
  const router = useRouter();
  const toast = useToast();

  const [active, setActive] = useState("");
  const [error, setError] = useState("");

  const { AddProductToCart } = useContext(CartContext);

  const { scrollYProgress } = useScroll({ container: ref });

  const { id } = router.query;

  const productItem = ShirtsList.find((shirt) => shirt.id == id);

  function handleAddProduct() {
    if (active != "") {
      toast({
        title: "ADDED TO CART SUCCESSFULLY!",
        description: `${productItem.title}, size: ${active} in Cart`,
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      setError("");
      AddProductToCart({ size: active, ...productItem });
    } else {
      setError("You have to choose a size");
    }
  }

  return (
    <motion.div
      ref={ref}
      style={{
        position: "absolute",
        height: "100vh",
        width: "100%",
        overflow: "scroll",
        // backgroundColor: "#fff",
      }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <Layout scrollYProgress={scrollYProgress}>
        <Box layerStyle={"paddingX"}>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              desktop: "repeat(2, 1fr)",
            }}
          >
            <GridItem w={"100%"}>
              <Flex justify={"center"} align={"center"} h={"100%"}>
                <motion.div style={{ width: "70%" }} layoutId={id}>
                  {productItem?.img}
                </motion.div>
              </Flex>
            </GridItem>
            <GridItem>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Box py={"50px"} px={{ base: "0px", tablet: " 40px" }}>
                  <VStack align={"start"} spacing={2}>
                    <Text fontSize={"40px"} fontWeight={600}>
                      {productItem?.title}
                    </Text>
                    <Text fontSize={"30px"} fontWeight={500}>
                      ${productItem?.price}
                    </Text>
                    <Text color={"#444"} fontSize={"20px"} fontWeight={400}>
                      {productItem?.colors}
                    </Text>
                    <Sizes active={active} setActive={setActive} />
                  </VStack>
                  <Box h={"15px"}>
                    {error && active === "" && (
                      <Text h={"10px"} color={"red"}>
                        {error}
                      </Text>
                    )}
                  </Box>
                  <Button
                    bg={"#000"}
                    color={"#fff"}
                    w={"full"}
                    mt={"30px"}
                    onClick={handleAddProduct}
                  >
                    Add to cart
                  </Button>
                </Box>
              </motion.div>
            </GridItem>
          </Grid>
        </Box>
      </Layout>
    </motion.div>
  );
}
