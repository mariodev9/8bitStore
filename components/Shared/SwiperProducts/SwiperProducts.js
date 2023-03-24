import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { ShirtsList } from "../../Shirts/ShirtsList";

export default function SwiperProducts() {
  return (
    <Box p={"50px 0px 100px"}>
      <Text
        layerStyle={"paddingX"}
        pb={"10px"}
        fontWeight={700}
        fontSize={"35px"}
      >
        New Arrivals
      </Text>
      <Swiper
        style={{
          paddingLeft: "70px",
          display: "flex",
          cursor: "pointer",
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          450: {
            slidesPerView: 2,
          },
          850: {
            slidesPerView: 2.5,
          },
          1000: {
            slidesPerView: 3.5,
          },
          1100: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={30}
        slidesPerView={4}
      >
        {ShirtsList.map((product) => (
          <SwiperSlide
            key={product.id}
            // style={{
            // }}
          >
            <Flex
              backgroundColor="#F5F5F5"
              direction={"column"}
              w={"full"}
              align={"center"}
              p={"20px 0px"}
            >
              {product.img}
            </Flex>
            <Text>{product.title}</Text>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
