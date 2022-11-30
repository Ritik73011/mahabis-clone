import React from "react";
import "./ProductCard.css";
import ProductDetailCard from "../ProductDetailCard/ProductDetailCard";
import ProductImages from "../ProductImages/ProductImages";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
function ProductCard() {
  return (
    // <div className="container">
    //   <ProductImages />
    //   <ProductDetailCard />
    // </div>
    <Flex mt="50">
      <Box w="65%">
        <ProductImages />
      </Box>
      <Box w="25%" m="0">
        <ProductDetailCard />
      </Box>
    </Flex>
  );
}

export default ProductCard;
