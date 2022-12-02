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
function BannerRight({ image, heading, subHeading }) {
  return (
    // <div className="bannerContainer">
    //   <div className="bannerHeading rightHeading">
    //     <h2>{heading}</h2>
    //     <hr />
    //     <h3>{subHeading}</h3>
    //   </div>
    //   <div className="bannerImg">
    //     <img src={image} alt="" />
    //   </div>
    // </div>

    <Container w="100%" mt="50">
      <Flex direction="row-reverse">
        <Box w="50%">
          <Image w="100%" src={image} />
        </Box>
        <Box w="46%" m="auto" pl="50">
          <Text fontSize="30px">{heading}</Text>
          <hr />
          <Text fontSize="18px">{subHeading}</Text>
        </Box>
      </Flex>
    </Container>
  );
}

export default BannerRight;
