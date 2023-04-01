import { Box, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { ShirtsList } from "../../Shirts/ShirtsList";
import ShirtGridItem from "../ShirtGridItem";

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
