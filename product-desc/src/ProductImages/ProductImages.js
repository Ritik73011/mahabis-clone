import { Box } from "@chakra-ui/react";
import React from "react";
import "./ProductImages.css";
import { Image, Grid, GridItem, Flex } from "@chakra-ui/react";

function ProductImages() {
  let product = {
    title: "mahabis classic",
    price: "₹‌10,200.00",
    discount: "Buy 2 or more pairs, GET 20% with the code BLACKFRI",
    rating: "",
    desc: "Sink into pure, simple comfort the moment you step in the door. mahabis classic has a pared-back design for those who love the beautiful yet understated things in life. The wool lining and contoured footbed create a feeling of comfort and support, while the premium felt upper ensures you'll always look stylish, wherever the day should take you. Iconic, understated design. Premium felt upper. 100% wool lining. Neoprene heel gently secures your foot in place. Contoured footbed for extra support. Eco-friendly packaging One tree planted for every pair bought",
    video: "",
    category: "",
    color: {
      clr1: "RED",
      clr2: "BLACK",
      clr3: "WHITE",
    },
    size: {
      sz1: "8",
      sz2: "9",
      sz3: "10",
    },
    image: {
      img1: "https://cdn.shopify.com/s/files/1/0238/5795/files/MC-F-TL-SB-A2-1.jpg?43",
      img2: "https://cdn.shopify.com/s/files/1/0238/5795/files/MC-F-TL-SB-A2-2.jpg?43",
      img3: "https://cdn.shopify.com/s/files/1/0238/5795/files/MC-F-TL-SB-A2-5.jpg?43",
      img4: "https://cdn.shopify.com/s/files/1/0238/5795/files/MC-F-TL-SB-A2-4.jpg?43",
      img5: "https://cdn.shopify.com/s/files/1/0238/5795/files/MC-F-TL-SB-A2-6.jpg?43",
    },
  };
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
    <Box>
      <Flex wrap="wrap" gap="20" pl="60" pr="0" mr="0">
        <Box w="46%" className="proImages">
          <Image src={product.image.img1} w="100%" />
        </Box>
        <Box w="46%" className="proImages">
          <Image src={product.image.img2} w="100%" />
        </Box>
        <Box w="46%" className="proImages">
          <Image src={product.image.img3} w="100%" />
        </Box>
        <Box w="46%" className="proImages">
          <Image src={product.image.img4} w="100%" />
        </Box>
        <Box w="46%" className="proImages">
          <Image src={product.image.img5} w="100%" />
        </Box>
      </Flex>
    </Box>
  );
}

export default ProductImages;
