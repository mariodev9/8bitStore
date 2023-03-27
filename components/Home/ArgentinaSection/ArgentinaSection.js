import { Flex, Box, Text } from "@chakra-ui/react";
import React from "react";
import { ArgentinaAwayShirt } from "../../Shirts/ShirtsSvg";

export default function ArgentinaSection() {
  return (
    <Flex bg={"black.100"} mb={"40px"}>
      <Flex
        layerStyle={"paddingX"}
        pos={"relative"}
        direction={{ base: "column", tablet: "row" }}
        pt={"100px"}
        bg={"black.100"}
        w={"full"}
        zIndex={98}
        color={"#fff"}
      >
        <Box w={{ base: "100%", tablet: "70%" }} pb={"100px"}>
          <Text variant={"title"}>
            <span style={{ color: "#6AD2FF" }}>Argentina</span> wins the FIFA
            World Cup
          </Text>
          <Text variant={"simpleText"} mt={"20px"}>
            Argentina has won the 2022 World Cup, beating France via penalty
            shootout in one of the most thrilling finals in tournament history.
          </Text>
          <Text variant={"simpleText"}>
            Argentine soccer legend Lionel Messi dazzled in his last World Cup
            match, scoring twice, making tournament history and finally hoisting
            the trophy.
          </Text>
        </Box>
        <Flex w={"full"} justify={"center"} align={"end"}>
          <ArgentinaAwayShirt />
        </Flex>
      </Flex>
    </Flex>
  );
}
