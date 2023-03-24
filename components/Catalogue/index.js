import React from "react";
import ShirtItem from "../ShirtItem";
import { Grid, GridItem, Text } from "@chakra-ui/react";

export default function Catalogue({ shirts }) {
  return (
    <>
      <Text textAlign="center" fontSize="3rem">
        Shop
      </Text>
      {/* <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {shirts &&
          shirts.map((shirt, i) => <ShirtItem key={i} team={shirt.team} />)}
      </Grid>
      <style jsx>
        {`
          h1 {
            text-align: center;
            margin: 100px 0px;
          }
        `}
      </style> */}
    </>
  );
}
