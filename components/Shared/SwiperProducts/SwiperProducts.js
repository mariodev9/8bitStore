import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { ShirtsList } from "../../Shirts/ShirtsList";

export default function SwiperProducts({ title }) {
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
          style={{
            paddingLeft: "70px",
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
              slidesPerView: 4,
            },
          }}
          spaceBetween={30}
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
    </Box>
  );
}
