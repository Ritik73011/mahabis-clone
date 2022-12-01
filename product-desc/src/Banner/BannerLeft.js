import React from "react";
import "./Banner.css";
import {
  Box,
  Center,
  Container,
  Flex,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
function BannerLeft({ image, heading, subHeading }) {
  return (
    // <div className="bannerContainer">
    //   <div className="bannerImg">
    //     <img src={image} alt="" />
    //   </div>
    //   <div className="bannerHeading">
    //     <h2>{heading}</h2>
    //     <hr />
    //     <h3>{subHeading}</h3>
    //   </div>
    // </div>
    <Container w="100%">
      <Flex>
        <Box w="50%" m="0">
          <Image w="100%" src={image} />
        </Box>
        <Box w="45%" m="auto" pl="50">
          <Text fontSize="30px">{heading}</Text>
          <hr />
          <Text fontSize="18px">{subHeading}</Text>
        </Box>
      </Flex>
    </Container>
  );
}

export default BannerLeft;
