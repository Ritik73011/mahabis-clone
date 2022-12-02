import { Box, Container } from "@chakra-ui/react";
import React from "react";
import "./ProductImages.css";
import { Image, Grid, GridItem, Flex } from "@chakra-ui/react";

function ProductImages(props) {
  console.log(props.images);
  return (
    // <div>
    //   {product.map((el, index) => (
    //     <div key={index} className="proImages">
    //       <div>
    //         <img src={el.image.img1} />
    //       </div>
    //       <div className="secondImg">
    //         <img src={el.image.img2} />
    //         <img src={el.image.img3} />
    //         <img src={el.image.img4} />
    //         <img src={el.image.img5} />
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <Container>
      <Box>
        <Flex wrap="wrap" gap="20" pl="60" pr="0" mr="0">
          <Box w="46%" className="proImages">
            <Image src={props.images.img1} w="100%" />
          </Box>
          <Box w="46%" className="proImages">
            <Image src={props.images.img2} w="100%" />
          </Box>
          <Box w="46%" className="proImages">
            <Image src={props.images.img3} w="100%" />
          </Box>
          <Box w="46%" className="proImages">
            <Image src={props.images.img4} w="100%" />
          </Box>
          <Box w="46%" className="proImages">
            <Image src={props.images.img5} w="100%" />
          </Box>
        </Flex>
      </Box>
    </Container>
  );
}

export default ProductImages;
