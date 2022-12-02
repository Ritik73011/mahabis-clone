import React from "react";
import "./Banner.css";
import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
function MainBanner() {
  return (
    <Container mt="50">
      <Box w="100%">
        <Image
          w="100%"
          src="https://i.shgcdn.com/97a51920-7328-4430-9bec-dd6fa5f95c12/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
        />
      </Box>
      <Box textAlign="center">
        <Box mb="0">
          <Text fontSize="36px">
            <strong>mahabis classic</strong> slippers
          </Text>
          <Text mt="0" fontSize="20px">
            Time to explore the great indoors.
          </Text>
        </Box>
        <hr style={{ width: "80%", margin: "auto" }} />
        <Text fontSize="18px" mb="80">
          Meet the classic slipper with anything but classic features.
        </Text>
      </Box>
    </Container>
  );
}

export default MainBanner;
