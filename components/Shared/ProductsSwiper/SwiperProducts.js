import {
  Box,
  Flex,
  LinkBox,
  LinkOverlay,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import NextLink from "next/link";
import { motion } from "framer-motion";

import { ShirtsList } from "../../Shirts/ShirtsList";

function SlideItem({ id, title, img }) {
  return (
    <>
      <LinkBox cursor={"pointer"} as="article">
        <LinkOverlay as={NextLink} href={`/Product/${id}`}>
          <Box>
            <Flex
              backgroundColor="#F5F5F5"
              direction={"column"}
              w={"full"}
              align={"center"}
              p={"20px 0px"}
            >
              <motion.div layoutId={id}>{img}</motion.div>
            </Flex>
            <Text pt={"10px"} color={"#000"} fontWeight={600}>
              {title}
            </Text>
          </Box>
        </LinkOverlay>
      </LinkBox>
    </>
  );
}

export default function SwiperProducts({ title, shirts }) {
  const [isLargerThan767] = useMediaQuery("(min-width: 767px)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

  return (
    <Box p={"0px 0px 50px"}>
      <Text
        layerStyle={"paddingX"}
        pb={"10px"}
        fontWeight={700}
        fontSize={"35px"}
      >
        {title}
      </Text>

      <Box>
        <Swiper
          observeParents={true}
          observer={true}
          style={{
            paddingLeft: isLargerThan767 ? "70px" : "30px",
            cursor: "pointer",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            450: {
              slidesPerView: 1.5,
            },
            590: {
              slidesPerView: 2,
            },
            850: {
              slidesPerView: 2.5,
            },
            1000: {
              slidesPerView: 3.5,
            },
            1200: {
              slidesPerView: 4.5,
            },
          }}
          spaceBetween={30}
        >
          {shirts.map((product) => (
            <SwiperSlide key={product.id}>
              <SlideItem {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
